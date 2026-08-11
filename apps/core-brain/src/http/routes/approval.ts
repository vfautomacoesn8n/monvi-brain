import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { deliverable, approval, approvalStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createApprovalSchema = z.object({
  approverPersonId: z.string().uuid(),
  notes: z.string().optional(),
});

const updateApprovalSchema = z.object({
  status: z.enum(approvalStatusEnum.enumValues).optional(),
  notes: z.string().optional(),
});

const deliverableIdParamsSchema = z.object({
  deliverableId: z.string().uuid(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

async function findActiveDeliverable(deliverableId: string) {
  const [found] = await db
    .select({ id: deliverable.id })
    .from(deliverable)
    .where(and(eq(deliverable.id, deliverableId), isNull(deliverable.deletedAt)));
  return found;
}

export async function registerApprovalRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/deliverables/:deliverableId/approvals',
    { preHandler: [authenticateRequest, requirePermission('approval:write')] },
    async (request, reply) => {
      const paramsResult = deliverableIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de entregável inválido.',
        });
      }

      const foundDeliverable = await findActiveDeliverable(paramsResult.data.deliverableId);
      if (!foundDeliverable) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Entregável não encontrado.',
        });
      }

      const bodyResult = createApprovalSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de aprovação inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db
        .insert(approval)
        .values({ ...bodyResult.data, deliverableId: paramsResult.data.deliverableId })
        .returning();

      await recordAuditEvent({
        eventType: 'approval:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { approvalId: created?.id, deliverableId: paramsResult.data.deliverableId },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ approval: created });
    }
  );

  app.get(
    '/deliverables/:deliverableId/approvals',
    { preHandler: [authenticateRequest, requirePermission('approval:read')] },
    async (request, reply) => {
      const paramsResult = deliverableIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de entregável inválido.',
        });
      }

      const foundDeliverable = await findActiveDeliverable(paramsResult.data.deliverableId);
      if (!foundDeliverable) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Entregável não encontrado.',
        });
      }

      const approvals = await db
        .select()
        .from(approval)
        .where(and(eq(approval.deliverableId, paramsResult.data.deliverableId), isNull(approval.deletedAt)));

      return { approvals };
    }
  );

  app.get(
    '/approvals/:id',
    { preHandler: [authenticateRequest, requirePermission('approval:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de aprovação inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(approval)
        .where(and(eq(approval.id, paramsResult.data.id), isNull(approval.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Aprovação não encontrada.',
        });
      }

      return { approval: found };
    }
  );

  app.patch(
    '/approvals/:id',
    { preHandler: [authenticateRequest, requirePermission('approval:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de aprovação inválido.',
        });
      }

      const bodyResult = updateApprovalSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de aprovação inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const decidedAtUpdate =
        bodyResult.data.status && bodyResult.data.status !== 'pending' ? { decidedAt: new Date() } : {};

      const [updated] = await db
        .update(approval)
        .set({ ...bodyResult.data, ...decidedAtUpdate, updatedAt: new Date() })
        .where(and(eq(approval.id, paramsResult.data.id), isNull(approval.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Aprovação não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'approval:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { approvalId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { approval: updated };
    }
  );

  app.delete(
    '/approvals/:id',
    { preHandler: [authenticateRequest, requirePermission('approval:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de aprovação inválido.',
        });
      }

      const [deleted] = await db
        .update(approval)
        .set({ deletedAt: new Date() })
        .where(and(eq(approval.id, paramsResult.data.id), isNull(approval.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Aprovação não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'approval:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { approvalId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
