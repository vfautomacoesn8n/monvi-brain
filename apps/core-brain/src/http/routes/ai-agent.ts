import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { aiAgent, aiAgentStatusEnum, aiAgentRiskLevelEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createAiAgentSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().optional(),
  purpose: z.string().optional(),
  specialty: z.string().max(255).optional(),
  scope: z.string().optional(),
  skills: z.array(z.string()).optional(),
  allowedTools: z.array(z.string()).optional(),
  authorizedSourceIds: z.array(z.string().uuid()).optional(),
  repositories: z.array(z.string()).optional(),
  policy: z.string().optional(),
  forbiddenActions: z.string().optional(),
  maxActionsPerRun: z.number().int().positive().optional(),
  timeoutSeconds: z.number().int().positive().optional(),
  riskLevel: z.enum(aiAgentRiskLevelEnum.enumValues).optional(),
  requiresHumanApproval: z.boolean().optional(),
  escalationCriteria: z.string().optional(),
  reportFormat: z.string().optional(),
  ownerPersonId: z.string().uuid().optional(),
  reviewerPersonId: z.string().uuid().optional(),
  notes: z.string().optional(),
});

const updateAiAgentSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  purpose: z.string().optional(),
  specialty: z.string().max(255).nullable().optional(),
  scope: z.string().nullable().optional(),
  skills: z.array(z.string()).optional(),
  allowedTools: z.array(z.string()).optional(),
  authorizedSourceIds: z.array(z.string().uuid()).optional(),
  repositories: z.array(z.string()).optional(),
  policy: z.string().nullable().optional(),
  forbiddenActions: z.string().nullable().optional(),
  maxActionsPerRun: z.number().int().positive().nullable().optional(),
  timeoutSeconds: z.number().int().positive().nullable().optional(),
  riskLevel: z.enum(aiAgentRiskLevelEnum.enumValues).nullable().optional(),
  requiresHumanApproval: z.boolean().optional(),
  escalationCriteria: z.string().nullable().optional(),
  reportFormat: z.string().nullable().optional(),
  ownerPersonId: z.string().uuid().nullable().optional(),
  reviewerPersonId: z.string().uuid().nullable().optional(),
  status: z.enum(aiAgentStatusEnum.enumValues).optional(),
  notes: z.string().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerAiAgentRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/ai-agents',
    { preHandler: [authenticateRequest, requirePermission('agent:write')] },
    async (request, reply) => {
      const bodyResult = createAiAgentSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de agente de IA inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db.insert(aiAgent).values(bodyResult.data).returning();

      await recordAuditEvent({
        eventType: 'ai_agent:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { aiAgentId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ aiAgent: created });
    }
  );

  app.get(
    '/ai-agents',
    { preHandler: [authenticateRequest, requirePermission('agent:read')] },
    async () => {
      const aiAgents = await db.select().from(aiAgent).where(isNull(aiAgent.deletedAt));
      return { aiAgents };
    }
  );

  app.get(
    '/ai-agents/:id',
    { preHandler: [authenticateRequest, requirePermission('agent:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de agente de IA inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(aiAgent)
        .where(and(eq(aiAgent.id, paramsResult.data.id), isNull(aiAgent.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Agente de IA não encontrado.',
        });
      }

      return { aiAgent: found };
    }
  );

  app.patch(
    '/ai-agents/:id',
    { preHandler: [authenticateRequest, requirePermission('agent:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de agente de IA inválido.',
        });
      }

      const bodyResult = updateAiAgentSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de agente de IA inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(aiAgent)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(aiAgent.id, paramsResult.data.id), isNull(aiAgent.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Agente de IA não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'ai_agent:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { aiAgentId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { aiAgent: updated };
    }
  );

  app.delete(
    '/ai-agents/:id',
    { preHandler: [authenticateRequest, requirePermission('agent:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de agente de IA inválido.',
        });
      }

      const [deleted] = await db
        .update(aiAgent)
        .set({ deletedAt: new Date() })
        .where(and(eq(aiAgent.id, paramsResult.data.id), isNull(aiAgent.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Agente de IA não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'ai_agent:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { aiAgentId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
