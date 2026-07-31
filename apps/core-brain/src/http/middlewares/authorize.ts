import type { FastifyRequest, FastifyReply } from 'fastify';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

export function requirePermission(requiredPermission: string) {
  return async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    if (!request.user) {
      return reply.status(401).send({
        statusCode: 401,
        error: 'Unauthorized',
        message: 'Usuário não autenticado.',
      });
    }

    const hasPermission =
      request.user.permissions.includes(requiredPermission) ||
      request.user.permissions.includes('*') ||
      request.user.roleName === 'admin';

    if (!hasPermission) {
      await recordAuditEvent({
        eventType: 'authz:access_denied',
        severity: 'warn',
        actorPersonId: request.user.personId,
        actionDetails: {
          path: request.url,
          method: request.method,
          requiredPermission,
          userPermissions: request.user.permissions,
        },
        requestId: (request.headers['x-request-id'] as string) || null,
      });

      return reply.status(403).send({
        statusCode: 403,
        error: 'Forbidden',
        message: `Acesso negado. Requer permissão '${requiredPermission}'.`,
      });
    }
  };
}

export function requireRole(requiredRole: string) {
  return async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    if (!request.user) {
      return reply.status(401).send({
        statusCode: 401,
        error: 'Unauthorized',
        message: 'Usuário não autenticado.',
      });
    }

    if (request.user.roleName !== requiredRole && request.user.roleName !== 'admin') {
      await recordAuditEvent({
        eventType: 'authz:role_access_denied',
        severity: 'warn',
        actorPersonId: request.user.personId,
        actionDetails: {
          path: request.url,
          method: request.method,
          requiredRole,
          userRole: request.user.roleName,
        },
        requestId: (request.headers['x-request-id'] as string) || null,
      });

      return reply.status(403).send({
        statusCode: 403,
        error: 'Forbidden',
        message: `Acesso negado. Requer papel '${requiredRole}'.`,
      });
    }
  };
}
