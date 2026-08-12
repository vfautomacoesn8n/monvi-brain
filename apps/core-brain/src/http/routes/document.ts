import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { document, documentStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createDocumentSchema = z.object({
  title: z.string().min(1).max(255),
  sourceId: z.string().uuid().optional(),
  ownerPersonId: z.string().uuid().optional(),
  notes: z.string().optional(),
});

const updateDocumentSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  sourceId: z.string().uuid().nullable().optional(),
  ownerPersonId: z.string().uuid().nullable().optional(),
  status: z.enum(documentStatusEnum.enumValues).optional(),
  notes: z.string().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerDocumentRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/documents',
    { preHandler: [authenticateRequest, requirePermission('document:write')] },
    async (request, reply) => {
      const bodyResult = createDocumentSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de documento inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db.insert(document).values(bodyResult.data).returning();

      await recordAuditEvent({
        eventType: 'document:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { documentId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ document: created });
    }
  );

  app.get(
    '/documents',
    { preHandler: [authenticateRequest, requirePermission('document:read')] },
    async () => {
      const documents = await db.select().from(document).where(isNull(document.deletedAt));
      return { documents };
    }
  );

  app.get(
    '/documents/:id',
    { preHandler: [authenticateRequest, requirePermission('document:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de documento inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(document)
        .where(and(eq(document.id, paramsResult.data.id), isNull(document.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      return { document: found };
    }
  );

  app.patch(
    '/documents/:id',
    { preHandler: [authenticateRequest, requirePermission('document:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de documento inválido.',
        });
      }

      const bodyResult = updateDocumentSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de documento inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(document)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(document.id, paramsResult.data.id), isNull(document.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'document:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { documentId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { document: updated };
    }
  );

  app.delete(
    '/documents/:id',
    { preHandler: [authenticateRequest, requirePermission('document:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de documento inválido.',
        });
      }

      const [deleted] = await db
        .update(document)
        .set({ deletedAt: new Date() })
        .where(and(eq(document.id, paramsResult.data.id), isNull(document.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'document:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { documentId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
