import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { opportunity, opportunityStageEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createOpportunitySchema = z.object({
  title: z.string().min(1).max(255),
  leadId: z.string().uuid().optional(),
  ownerPersonId: z.string().uuid().optional(),
  expectedCloseDate: z.coerce.date().optional(),
  notes: z.string().optional(),
});

const updateOpportunitySchema = z.object({
  title: z.string().min(1).max(255).optional(),
  stage: z.enum(opportunityStageEnum.enumValues).optional(),
  lossReason: z.string().optional(),
  ownerPersonId: z.string().uuid().nullable().optional(),
  expectedCloseDate: z.coerce.date().nullable().optional(),
  notes: z.string().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerOpportunityRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/opportunities',
    { preHandler: [authenticateRequest, requirePermission('opportunity:write')] },
    async (request, reply) => {
      const bodyResult = createOpportunitySchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de oportunidade inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db.insert(opportunity).values(bodyResult.data).returning();

      await recordAuditEvent({
        eventType: 'opportunity:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { opportunityId: created?.id, leadId: bodyResult.data.leadId ?? null },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ opportunity: created });
    }
  );

  app.get(
    '/opportunities',
    { preHandler: [authenticateRequest, requirePermission('opportunity:read')] },
    async () => {
      const opportunities = await db.select().from(opportunity).where(isNull(opportunity.deletedAt));
      return { opportunities };
    }
  );

  app.get(
    '/opportunities/:id',
    { preHandler: [authenticateRequest, requirePermission('opportunity:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de oportunidade inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(opportunity)
        .where(and(eq(opportunity.id, paramsResult.data.id), isNull(opportunity.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Oportunidade não encontrada.',
        });
      }

      return { opportunity: found };
    }
  );

  app.patch(
    '/opportunities/:id',
    { preHandler: [authenticateRequest, requirePermission('opportunity:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de oportunidade inválido.',
        });
      }

      const bodyResult = updateOpportunitySchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de oportunidade inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(opportunity)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(opportunity.id, paramsResult.data.id), isNull(opportunity.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Oportunidade não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'opportunity:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { opportunityId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { opportunity: updated };
    }
  );

  app.delete(
    '/opportunities/:id',
    { preHandler: [authenticateRequest, requirePermission('opportunity:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de oportunidade inválido.',
        });
      }

      const [deleted] = await db
        .update(opportunity)
        .set({ deletedAt: new Date() })
        .where(and(eq(opportunity.id, paramsResult.data.id), isNull(opportunity.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Oportunidade não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'opportunity:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { opportunityId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
