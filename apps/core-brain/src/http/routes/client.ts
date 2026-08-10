import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { client, clientStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createClientSchema = z.object({
  name: z.string().min(1).max(255),
  tradeName: z.string().max(255).optional(),
  documentNumber: z.string().max(30).optional(),
});

const updateClientSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  tradeName: z.string().max(255).optional(),
  documentNumber: z.string().max(30).optional(),
  status: z.enum(clientStatusEnum.enumValues).optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerClientRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/clients',
    { preHandler: [authenticateRequest, requirePermission('client:write')] },
    async (request, reply) => {
      const parseResult = createClientSchema.safeParse(request.body);
      if (!parseResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de cliente inválidos.',
          details: parseResult.error.flatten(),
        });
      }

      const [created] = await db.insert(client).values(parseResult.data).returning();

      await recordAuditEvent({
        eventType: 'client:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { clientId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ client: created });
    }
  );

  app.get(
    '/clients',
    { preHandler: [authenticateRequest, requirePermission('client:read')] },
    async () => {
      const clients = await db.select().from(client).where(isNull(client.deletedAt));
      return { clients };
    }
  );

  app.get(
    '/clients/:id',
    { preHandler: [authenticateRequest, requirePermission('client:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de cliente inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(client)
        .where(and(eq(client.id, paramsResult.data.id), isNull(client.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Cliente não encontrado.',
        });
      }

      return { client: found };
    }
  );

  app.patch(
    '/clients/:id',
    { preHandler: [authenticateRequest, requirePermission('client:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de cliente inválido.',
        });
      }

      const bodyResult = updateClientSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de cliente inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(client)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(client.id, paramsResult.data.id), isNull(client.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Cliente não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'client:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { clientId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { client: updated };
    }
  );

  app.delete(
    '/clients/:id',
    { preHandler: [authenticateRequest, requirePermission('client:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de cliente inválido.',
        });
      }

      const [deleted] = await db
        .update(client)
        .set({ deletedAt: new Date() })
        .where(and(eq(client.id, paramsResult.data.id), isNull(client.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Cliente não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'client:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { clientId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
