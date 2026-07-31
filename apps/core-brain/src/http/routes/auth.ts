import type { FastifyInstance } from 'fastify';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { person, identity } from '../../db/schema/index.js';
import { createSession, revokeSessionToken } from '../../modules/auth/session.service.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const devLoginSchema = z.object({
  email: z.string().email(),
});

export async function registerAuthRoutes(app: FastifyInstance): Promise<void> {
  // Dev Login Route
  app.post('/auth/dev-login', async (request, reply) => {
    const parseResult = devLoginSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Dados de login inválidos. Informe um e-mail válido.',
      });
    }

    const { email } = parseResult.data;

    let [identityRecord] = await db
      .select({ id: identity.id, personId: identity.personId })
      .from(identity)
      .where(eq(identity.email, email));

    if (!identityRecord) {
      // Create synthetic person and identity for dev
      const [newPerson] = await db.insert(person).values({
        fullName: 'Usuário Dev',
        displayName: 'Dev User',
        status: 'active',
      }).returning();

      if (!newPerson) {
        throw new Error('Falha ao criar usuário sintético dev.');
      }

      const [newIdentity] = await db.insert(identity).values({
        personId: newPerson.id,
        provider: 'dev',
        providerSubject: `dev:${email}`,
        email,
        emailVerified: true,
      }).returning();

      if (!newIdentity) {
        throw new Error('Falha ao criar identidade sintética dev.');
      }

      identityRecord = { id: newIdentity.id, personId: newPerson.id };
    }

    const sessionInfo = await createSession({
      personId: identityRecord.personId,
      identityId: identityRecord.id,
      ipAddress: request.ip,
      userAgent: request.headers['user-agent'],
    });

    await recordAuditEvent({
      eventType: 'auth:dev_login_success',
      severity: 'info',
      actorPersonId: identityRecord.personId,
      actionDetails: { email },
      requestId: (request.headers['x-request-id'] as string) || null,
    });

    return reply.status(200).send({
      message: 'Login dev realizado com sucesso.',
      sessionToken: sessionInfo.sessionToken,
      expiresAt: sessionInfo.expiresAt,
    });
  });

  // Logout Route
  app.post('/auth/logout', { preHandler: [authenticateRequest] }, async (request, reply) => {
    const authHeader = request.headers.authorization;
    const token = authHeader ? authHeader.substring(7).trim() : null;

    if (token) {
      await revokeSessionToken(token);
    }

    await recordAuditEvent({
      eventType: 'auth:logout_success',
      severity: 'info',
      actorPersonId: request.user?.personId || null,
      actionDetails: { email: request.user?.email },
      requestId: (request.headers['x-request-id'] as string) || null,
    });

    return reply.status(200).send({
      message: 'Sessão encerrada com sucesso.',
    });
  });

  // Me Route
  app.get('/auth/me', { preHandler: [authenticateRequest] }, async (request) => {
    return {
      user: request.user,
    };
  });

  // Sample Protected Resource Route
  app.get(
    '/protected-sample',
    { preHandler: [authenticateRequest, requirePermission('core_brain:read')] },
    async (request) => {
      return {
        message: 'Acesso autorizado ao recurso protegido.',
        user: request.user,
      };
    }
  );
}
