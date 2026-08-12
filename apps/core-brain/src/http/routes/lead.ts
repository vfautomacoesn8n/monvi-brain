import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { lead, leadSourceEnum, leadStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createLeadSchema = z.object({
  name: z.string().min(1).max(255),
  companyName: z.string().max(255).optional(),
  email: z.string().email().optional(),
  phone: z.string().max(30).optional(),
  source: z.enum(leadSourceEnum.enumValues).optional(),
  ownerPersonId: z.string().uuid().optional(),
  notes: z.string().optional(),
});

const updateLeadSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  companyName: z.string().max(255).optional(),
  email: z.string().email().optional(),
  phone: z.string().max(30).optional(),
  source: z.enum(leadSourceEnum.enumValues).optional(),
  status: z.enum(leadStatusEnum.enumValues).optional(),
  ownerPersonId: z.string().uuid().nullable().optional(),
  notes: z.string().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerLeadRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/leads',
    { preHandler: [authenticateRequest, requirePermission('lead:write')] },
    async (request, reply) => {
      const bodyResult = createLeadSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de lead inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db.insert(lead).values(bodyResult.data).returning();

      await recordAuditEvent({
        eventType: 'lead:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { leadId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ lead: created });
    }
  );

  app.get(
    '/leads',
    { preHandler: [authenticateRequest, requirePermission('lead:read')] },
    async () => {
      const leads = await db.select().from(lead).where(isNull(lead.deletedAt));
      return { leads };
    }
  );

  app.get(
    '/leads/:id',
    { preHandler: [authenticateRequest, requirePermission('lead:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de lead inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(lead)
        .where(and(eq(lead.id, paramsResult.data.id), isNull(lead.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Lead não encontrado.',
        });
      }

      return { lead: found };
    }
  );

  app.patch(
    '/leads/:id',
    { preHandler: [authenticateRequest, requirePermission('lead:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de lead inválido.',
        });
      }

      const bodyResult = updateLeadSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de lead inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(lead)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(lead.id, paramsResult.data.id), isNull(lead.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Lead não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'lead:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { leadId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { lead: updated };
    }
  );

  app.delete(
    '/leads/:id',
    { preHandler: [authenticateRequest, requirePermission('lead:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de lead inválido.',
        });
      }

      const [deleted] = await db
        .update(lead)
        .set({ deletedAt: new Date() })
        .where(and(eq(lead.id, paramsResult.data.id), isNull(lead.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Lead não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'lead:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { leadId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
