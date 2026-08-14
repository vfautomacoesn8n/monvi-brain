import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import {
  automationWorkflow,
  automationTriggerTypeEnum,
  automationWorkflowStatusEnum,
} from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createAutomationWorkflowSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().optional(),
  ownerPersonId: z.string().uuid().optional(),
  triggerType: z.enum(automationTriggerTypeEnum.enumValues).optional(),
  requiresApproval: z.boolean().optional(),
  notes: z.string().optional(),
});

const updateAutomationWorkflowSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  ownerPersonId: z.string().uuid().nullable().optional(),
  triggerType: z.enum(automationTriggerTypeEnum.enumValues).optional(),
  status: z.enum(automationWorkflowStatusEnum.enumValues).optional(),
  requiresApproval: z.boolean().optional(),
  notes: z.string().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerAutomationWorkflowRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/automation-workflows',
    { preHandler: [authenticateRequest, requirePermission('automation:write')] },
    async (request, reply) => {
      const bodyResult = createAutomationWorkflowSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de workflow de automação inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db.insert(automationWorkflow).values(bodyResult.data).returning();

      await recordAuditEvent({
        eventType: 'automation_workflow:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { automationWorkflowId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ automationWorkflow: created });
    }
  );

  app.get(
    '/automation-workflows',
    { preHandler: [authenticateRequest, requirePermission('automation:read')] },
    async () => {
      const automationWorkflows = await db
        .select()
        .from(automationWorkflow)
        .where(isNull(automationWorkflow.deletedAt));
      return { automationWorkflows };
    }
  );

  app.get(
    '/automation-workflows/:id',
    { preHandler: [authenticateRequest, requirePermission('automation:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de workflow de automação inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(automationWorkflow)
        .where(and(eq(automationWorkflow.id, paramsResult.data.id), isNull(automationWorkflow.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Workflow de automação não encontrado.',
        });
      }

      return { automationWorkflow: found };
    }
  );

  app.patch(
    '/automation-workflows/:id',
    { preHandler: [authenticateRequest, requirePermission('automation:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de workflow de automação inválido.',
        });
      }

      const bodyResult = updateAutomationWorkflowSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de workflow de automação inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(automationWorkflow)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(automationWorkflow.id, paramsResult.data.id), isNull(automationWorkflow.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Workflow de automação não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'automation_workflow:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { automationWorkflowId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { automationWorkflow: updated };
    }
  );

  app.delete(
    '/automation-workflows/:id',
    { preHandler: [authenticateRequest, requirePermission('automation:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de workflow de automação inválido.',
        });
      }

      const [deleted] = await db
        .update(automationWorkflow)
        .set({ deletedAt: new Date() })
        .where(and(eq(automationWorkflow.id, paramsResult.data.id), isNull(automationWorkflow.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Workflow de automação não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'automation_workflow:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { automationWorkflowId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
