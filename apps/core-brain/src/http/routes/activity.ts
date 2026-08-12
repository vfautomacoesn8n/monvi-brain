import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { activity, activityTypeEnum, activityStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createActivitySchema = z
  .object({
    leadId: z.string().uuid().optional(),
    opportunityId: z.string().uuid().optional(),
    type: z.enum(activityTypeEnum.enumValues).optional(),
    scheduledAt: z.coerce.date().optional(),
    ownerPersonId: z.string().uuid().optional(),
    notes: z.string().optional(),
  })
  .refine((data) => Boolean(data.leadId) || Boolean(data.opportunityId), {
    message: 'Uma atividade precisa estar vinculada a um lead ou a uma oportunidade.',
  });

const updateActivitySchema = z.object({
  type: z.enum(activityTypeEnum.enumValues).optional(),
  status: z.enum(activityStatusEnum.enumValues).optional(),
  scheduledAt: z.coerce.date().nullable().optional(),
  completedAt: z.coerce.date().nullable().optional(),
  ownerPersonId: z.string().uuid().nullable().optional(),
  notes: z.string().optional(),
});

const listQuerySchema = z.object({
  leadId: z.string().uuid().optional(),
  opportunityId: z.string().uuid().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerActivityRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/activities',
    { preHandler: [authenticateRequest, requirePermission('activity:write')] },
    async (request, reply) => {
      const bodyResult = createActivitySchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atividade inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db.insert(activity).values(bodyResult.data).returning();

      await recordAuditEvent({
        eventType: 'activity:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: {
          activityId: created?.id,
          leadId: bodyResult.data.leadId ?? null,
          opportunityId: bodyResult.data.opportunityId ?? null,
        },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ activity: created });
    }
  );

  app.get(
    '/activities',
    { preHandler: [authenticateRequest, requirePermission('activity:read')] },
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

      const conditions = [isNull(activity.deletedAt)];
      if (queryResult.data.leadId) {
        conditions.push(eq(activity.leadId, queryResult.data.leadId));
      }
      if (queryResult.data.opportunityId) {
        conditions.push(eq(activity.opportunityId, queryResult.data.opportunityId));
      }

      const activities = await db.select().from(activity).where(and(...conditions));
      return { activities };
    }
  );

  app.get(
    '/activities/:id',
    { preHandler: [authenticateRequest, requirePermission('activity:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de atividade inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(activity)
        .where(and(eq(activity.id, paramsResult.data.id), isNull(activity.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Atividade não encontrada.',
        });
      }

      return { activity: found };
    }
  );

  app.patch(
    '/activities/:id',
    { preHandler: [authenticateRequest, requirePermission('activity:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de atividade inválido.',
        });
      }

      const bodyResult = updateActivitySchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de atividade inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(activity)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(activity.id, paramsResult.data.id), isNull(activity.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Atividade não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'activity:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { activityId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { activity: updated };
    }
  );

  app.delete(
    '/activities/:id',
    { preHandler: [authenticateRequest, requirePermission('activity:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de atividade inválido.',
        });
      }

      const [deleted] = await db
        .update(activity)
        .set({ deletedAt: new Date() })
        .where(and(eq(activity.id, paramsResult.data.id), isNull(activity.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Atividade não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'activity:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { activityId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
