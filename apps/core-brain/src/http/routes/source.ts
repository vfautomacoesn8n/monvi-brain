import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { source, sourceTypeEnum, sourceStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createSourceSchema = z.object({
  name: z.string().min(1).max(255),
  type: z.enum(sourceTypeEnum.enumValues).optional(),
  description: z.string().optional(),
  ownerPersonId: z.string().uuid().optional(),
  notes: z.string().optional(),
});

const updateSourceSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  type: z.enum(sourceTypeEnum.enumValues).optional(),
  description: z.string().optional(),
  ownerPersonId: z.string().uuid().nullable().optional(),
  status: z.enum(sourceStatusEnum.enumValues).optional(),
  notes: z.string().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerSourceRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/sources',
    { preHandler: [authenticateRequest, requirePermission('source:write')] },
    async (request, reply) => {
      const bodyResult = createSourceSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de fonte inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db.insert(source).values(bodyResult.data).returning();

      await recordAuditEvent({
        eventType: 'source:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { sourceId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ source: created });
    }
  );

  app.get(
    '/sources',
    { preHandler: [authenticateRequest, requirePermission('source:read')] },
    async () => {
      const sources = await db.select().from(source).where(isNull(source.deletedAt));
      return { sources };
    }
  );

  app.get(
    '/sources/:id',
    { preHandler: [authenticateRequest, requirePermission('source:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de fonte inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(source)
        .where(and(eq(source.id, paramsResult.data.id), isNull(source.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Fonte não encontrada.',
        });
      }

      return { source: found };
    }
  );

  app.patch(
    '/sources/:id',
    { preHandler: [authenticateRequest, requirePermission('source:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de fonte inválido.',
        });
      }

      const bodyResult = updateSourceSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de fonte inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(source)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(source.id, paramsResult.data.id), isNull(source.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Fonte não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'source:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { sourceId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { source: updated };
    }
  );

  app.delete(
    '/sources/:id',
    { preHandler: [authenticateRequest, requirePermission('source:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de fonte inválido.',
        });
      }

      const [deleted] = await db
        .update(source)
        .set({ deletedAt: new Date() })
        .where(and(eq(source.id, paramsResult.data.id), isNull(source.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Fonte não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'source:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { sourceId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
