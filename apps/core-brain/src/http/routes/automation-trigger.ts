import type { FastifyInstance } from 'fastify';
import { randomBytes } from 'node:crypto';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import {
  automationWorkflow,
  automationTrigger,
  automationTriggerTypeEnum,
  automationInvocation,
} from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createTriggerSchema = z.object({
  triggerType: z.enum(automationTriggerTypeEnum.enumValues).optional(),
  scheduleCron: z.string().min(1).max(120).optional(),
  eventName: z.string().min(1).max(120).optional(),
});

const updateTriggerSchema = z.object({
  scheduleCron: z.string().min(1).max(120).nullable().optional(),
  eventName: z.string().min(1).max(120).nullable().optional(),
  isActive: z.boolean().optional(),
});

const workflowIdParamsSchema = z.object({
  workflowId: z.string().uuid(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

const invokeParamsSchema = z.object({
  token: z.string().min(1),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

function generateWebhookToken(): string {
  return randomBytes(32).toString('hex');
}

async function findActiveWorkflow(workflowId: string) {
  const [found] = await db
    .select({ id: automationWorkflow.id })
    .from(automationWorkflow)
    .where(and(eq(automationWorkflow.id, workflowId), isNull(automationWorkflow.deletedAt)));
  return found;
}

export async function registerAutomationTriggerRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/automation-workflows/:workflowId/triggers',
    { preHandler: [authenticateRequest, requirePermission('automation:write')] },
    async (request, reply) => {
      const paramsResult = workflowIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de workflow de automação inválido.',
        });
      }

      const foundWorkflow = await findActiveWorkflow(paramsResult.data.workflowId);
      if (!foundWorkflow) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Workflow de automação não encontrado.',
        });
      }

      const bodyResult = createTriggerSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de gatilho de automação inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const triggerType = bodyResult.data.triggerType ?? 'manual';

      const [created] = await db
        .insert(automationTrigger)
        .values({
          automationWorkflowId: paramsResult.data.workflowId,
          triggerType,
          scheduleCron: bodyResult.data.scheduleCron,
          eventName: bodyResult.data.eventName,
          webhookToken: triggerType === 'webhook' ? generateWebhookToken() : null,
        })
        .returning();

      await recordAuditEvent({
        eventType: 'automation_trigger:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: {
          automationTriggerId: created?.id,
          automationWorkflowId: paramsResult.data.workflowId,
          triggerType,
        },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ automationTrigger: created });
    }
  );

  app.get(
    '/automation-workflows/:workflowId/triggers',
    { preHandler: [authenticateRequest, requirePermission('automation:read')] },
    async (request, reply) => {
      const paramsResult = workflowIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de workflow de automação inválido.',
        });
      }

      const foundWorkflow = await findActiveWorkflow(paramsResult.data.workflowId);
      if (!foundWorkflow) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Workflow de automação não encontrado.',
        });
      }

      const automationTriggers = await db
        .select()
        .from(automationTrigger)
        .where(
          and(
            eq(automationTrigger.automationWorkflowId, paramsResult.data.workflowId),
            isNull(automationTrigger.deletedAt)
          )
        );

      return { automationTriggers };
    }
  );

  app.get(
    '/automation-triggers/:id',
    { preHandler: [authenticateRequest, requirePermission('automation:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de gatilho de automação inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(automationTrigger)
        .where(and(eq(automationTrigger.id, paramsResult.data.id), isNull(automationTrigger.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Gatilho de automação não encontrado.',
        });
      }

      return { automationTrigger: found };
    }
  );

  app.patch(
    '/automation-triggers/:id',
    { preHandler: [authenticateRequest, requirePermission('automation:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de gatilho de automação inválido.',
        });
      }

      const bodyResult = updateTriggerSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de gatilho de automação inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(automationTrigger)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(automationTrigger.id, paramsResult.data.id), isNull(automationTrigger.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Gatilho de automação não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'automation_trigger:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { automationTriggerId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { automationTrigger: updated };
    }
  );

  app.delete(
    '/automation-triggers/:id',
    { preHandler: [authenticateRequest, requirePermission('automation:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de gatilho de automação inválido.',
        });
      }

      const [deleted] = await db
        .update(automationTrigger)
        .set({ deletedAt: new Date() })
        .where(and(eq(automationTrigger.id, paramsResult.data.id), isNull(automationTrigger.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Gatilho de automação não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'automation_trigger:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { automationTriggerId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );

  app.get(
    '/automation-triggers/:id/invocations',
    { preHandler: [authenticateRequest, requirePermission('automation:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de gatilho de automação inválido.',
        });
      }

      const [found] = await db
        .select({ id: automationTrigger.id })
        .from(automationTrigger)
        .where(and(eq(automationTrigger.id, paramsResult.data.id), isNull(automationTrigger.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Gatilho de automação não encontrado.',
        });
      }

      const automationInvocations = await db
        .select()
        .from(automationInvocation)
        .where(eq(automationInvocation.automationTriggerId, paramsResult.data.id));

      return { automationInvocations };
    }
  );

  // Rota pública (sem autenticação Monvi): sistemas externos reais (n8n, GitHub etc.)
  // não têm como autenticar com Bearer token da Monvi. O segredo é o próprio token
  // na URL, gerado aleatoriamente na criação do gatilho.
  app.post('/automation-triggers/:token/invoke', async (request, reply) => {
    const paramsResult = invokeParamsSchema.safeParse(request.params);
    if (!paramsResult.success) {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Token de gatilho inválido.',
      });
    }

    const [found] = await db
      .select()
      .from(automationTrigger)
      .where(
        and(
          eq(automationTrigger.webhookToken, paramsResult.data.token),
          eq(automationTrigger.triggerType, 'webhook'),
          eq(automationTrigger.isActive, true),
          isNull(automationTrigger.deletedAt)
        )
      );

    if (!found) {
      return reply.status(404).send({
        statusCode: 404,
        error: 'Not Found',
        message: 'Gatilho de webhook não encontrado ou inativo.',
      });
    }

    const [created] = await db
      .insert(automationInvocation)
      .values({
        automationTriggerId: found.id,
        payload: (request.body ?? null) as object | null,
        sourceIp: request.ip,
      })
      .returning();

    await recordAuditEvent({
      eventType: 'automation_invocation:received',
      severity: 'info',
      actorPersonId: null,
      actionDetails: { automationTriggerId: found.id, automationInvocationId: created?.id },
      requestId: requestIdOf(request.headers),
    });

    return reply.status(202).send({ automationInvocation: created });
  });
}
