import type { FastifyRequest, FastifyReply } from 'fastify';
import { validateSessionToken } from '../../modules/auth/session.service.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

export async function authenticateRequest(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const authHeader = request.headers.authorization;
  const devTokenHeader = request.headers['x-dev-session-token'];

  let token: string | null = null;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7).trim();
  } else if (devTokenHeader && typeof devTokenHeader === 'string') {
    token = devTokenHeader.trim();
  }

  if (!token) {
    await recordAuditEvent({
      eventType: 'auth:missing_token',
      severity: 'warn',
      actionDetails: { path: request.url, method: request.method },
      requestId: (request.headers['x-request-id'] as string) || null,
    });

    return reply.status(401).send({
      statusCode: 401,
      error: 'Unauthorized',
      message: 'Token de autenticação ausente ou malformatado.',
    });
  }

  let user = null;
  try {
    user = await validateSessionToken(token);
  } catch (err) {
    user = null;
  }

  if (!user) {
    await recordAuditEvent({
      eventType: 'auth:invalid_or_expired_token',
      severity: 'warn',
      actionDetails: { path: request.url, method: request.method },
      requestId: (request.headers['x-request-id'] as string) || null,
    });

    return reply.status(401).send({
      statusCode: 401,
      error: 'Unauthorized',
      message: 'Sessão inválida, revogada ou expirada.',
    });
  }

  request.user = user;
}
