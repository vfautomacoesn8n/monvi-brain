import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { memoryNote } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createMemoryNoteSchema = z.object({
  content: z.string().min(1),
  entityType: z.string().min(1).max(100).optional(),
  entityId: z.string().uuid().optional(),
  expiresAt: z.coerce.date().optional(),
});

const updateMemoryNoteSchema = z.object({
  content: z.string().min(1).optional(),
  entityType: z.string().min(1).max(100).nullable().optional(),
  entityId: z.string().uuid().nullable().optional(),
  expiresAt: z.coerce.date().nullable().optional(),
});

const listQuerySchema = z.object({
  entityType: z.string().min(1).max(100).optional(),
  entityId: z.string().uuid().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerMemoryNoteRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/memory-notes',
    { preHandler: [authenticateRequest, requirePermission('memory:write')] },
    async (request, reply) => {
      const bodyResult = createMemoryNoteSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de nota de memória inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db
        .insert(memoryNote)
        .values({ ...bodyResult.data, authorPersonId: request.user?.personId ?? null })
        .returning();

      await recordAuditEvent({
        eventType: 'memory_note:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: {
          memoryNoteId: created?.id,
          entityType: bodyResult.data.entityType ?? null,
          entityId: bodyResult.data.entityId ?? null,
        },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ memoryNote: created });
    }
  );

  app.get(
    '/memory-notes',
    { preHandler: [authenticateRequest, requirePermission('memory:read')] },
    async (request, reply) => {
      const queryResult = listQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Parâmetros de filtro inválidos.',
          details: queryResult.error.flatten(),
        });
      }

      const conditions = [isNull(memoryNote.deletedAt)];
      if (queryResult.data.entityType) {
        conditions.push(eq(memoryNote.entityType, queryResult.data.entityType));
      }
      if (queryResult.data.entityId) {
        conditions.push(eq(memoryNote.entityId, queryResult.data.entityId));
      }

      const memoryNotes = await db.select().from(memoryNote).where(and(...conditions));
      return { memoryNotes };
    }
  );

  app.get(
    '/memory-notes/:id',
    { preHandler: [authenticateRequest, requirePermission('memory:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de nota de memória inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(memoryNote)
        .where(and(eq(memoryNote.id, paramsResult.data.id), isNull(memoryNote.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Nota de memória não encontrada.',
        });
      }

      return { memoryNote: found };
    }
  );

  app.patch(
    '/memory-notes/:id',
    { preHandler: [authenticateRequest, requirePermission('memory:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de nota de memória inválido.',
        });
      }

      const bodyResult = updateMemoryNoteSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de nota de memória inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(memoryNote)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(memoryNote.id, paramsResult.data.id), isNull(memoryNote.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Nota de memória não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'memory_note:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { memoryNoteId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { memoryNote: updated };
    }
  );

  app.delete(
    '/memory-notes/:id',
    { preHandler: [authenticateRequest, requirePermission('memory:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de nota de memória inválido.',
        });
      }

      const [deleted] = await db
        .update(memoryNote)
        .set({ deletedAt: new Date() })
        .where(and(eq(memoryNote.id, paramsResult.data.id), isNull(memoryNote.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Nota de memória não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'memory_note:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { memoryNoteId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
