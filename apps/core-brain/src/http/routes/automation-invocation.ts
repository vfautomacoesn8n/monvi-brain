import type { FastifyInstance } from 'fastify';
import { and, eq, isNull, lte, or } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { automationInvocation } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const attemptSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});

const approveSchema = z.object({
  approved: z.boolean(),
  reason: z.string().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

function backoffMinutes(attemptCount: number): number {
  return 2 ** attemptCount;
}

export async function registerAutomationInvocationRoutes(app: FastifyInstance): Promise<void> {
  app.get(
    '/automation-invocations/queue',
    { preHandler: [authenticateRequest, requirePermission('automation:read')] },
    async () => {
      const now = new Date();

      const automationInvocations = await db
        .select()
        .from(automationInvocation)
        .where(
          and(
            eq(automationInvocation.status, 'pending'),
            or(isNull(automationInvocation.nextAttemptAt), lte(automationInvocation.nextAttemptAt, now))
          )
        )
        .orderBy(automationInvocation.receivedAt);

      return { automationInvocations };
    }
  );

  app.post(
    '/automation-invocations/:id/attempt',
    { preHandler: [authenticateRequest, requirePermission('automation:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de invocação de automação inválido.',
        });
      }

      const bodyResult = attemptSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de tentativa de automação inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [found] = await db
        .select()
        .from(automationInvocation)
        .where(eq(automationInvocation.id, paramsResult.data.id));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Invocação de automação não encontrada.',
        });
      }

      if (found.status !== 'pending') {
        return reply.status(409).send({
          statusCode: 409,
          error: 'Conflict',
          message: `Esta invocação está em '${found.status}' e não aceita tentativas agora (só invocações 'pending' aceitam).`,
        });
      }

      const attemptCount = found.attemptCount + 1;

      const updateValues: Partial<typeof automationInvocation.$inferInsert> = {
        attemptCount,
      };

      if (bodyResult.data.success) {
        updateValues.status = 'succeeded';
        updateValues.nextAttemptAt = null;
        updateValues.lastError = null;
      } else {
        updateValues.lastError = bodyResult.data.error ?? null;
        if (attemptCount >= found.maxAttempts) {
          updateValues.status = 'dead_letter';
          updateValues.nextAttemptAt = null;
        } else {
          updateValues.nextAttemptAt = new Date(Date.now() + backoffMinutes(attemptCount) * 60_000);
        }
      }

      const [updated] = await db
        .update(automationInvocation)
        .set(updateValues)
        .where(eq(automationInvocation.id, paramsResult.data.id))
        .returning();

      await recordAuditEvent({
        eventType: 'automation_invocation:attempted',
        severity: bodyResult.data.success ? 'info' : 'warn',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: {
          automationInvocationId: updated?.id,
          success: bodyResult.data.success,
          attemptCount,
          status: updated?.status,
        },
        requestId: requestIdOf(request.headers),
      });

      return { automationInvocation: updated };
    }
  );

  app.post(
    '/automation-invocations/:id/approve',
    { preHandler: [authenticateRequest, requirePermission('automation:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de invocação de automação inválido.',
        });
      }

      const bodyResult = approveSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de aprovação de automação inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [found] = await db
        .select()
        .from(automationInvocation)
        .where(eq(automationInvocation.id, paramsResult.data.id));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Invocação de automação não encontrada.',
        });
      }

      if (found.status !== 'pending_approval') {
        return reply.status(409).send({
          statusCode: 409,
          error: 'Conflict',
          message: `Esta invocação está em '${found.status}' e não aguarda aprovação.`,
        });
      }

      const [updated] = await db
        .update(automationInvocation)
        .set({
          status: bodyResult.data.approved ? 'pending' : 'rejected',
          approvedByPersonId: request.user?.personId ?? null,
          approvedAt: new Date(),
          rejectionReason: bodyResult.data.approved ? null : (bodyResult.data.reason ?? null),
        })
        .where(eq(automationInvocation.id, paramsResult.data.id))
        .returning();

      await recordAuditEvent({
        eventType: 'automation_invocation:approval_decided',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: {
          automationInvocationId: updated?.id,
          approved: bodyResult.data.approved,
          status: updated?.status,
        },
        requestId: requestIdOf(request.headers),
      });

      return { automationInvocation: updated };
    }
  );

  app.post(
    '/automation-invocations/:id/reprocess',
    { preHandler: [authenticateRequest, requirePermission('automation:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de invocação de automação inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(automationInvocation)
        .where(eq(automationInvocation.id, paramsResult.data.id));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Invocação de automação não encontrada.',
        });
      }

      if (found.status !== 'dead_letter') {
        return reply.status(409).send({
          statusCode: 409,
          error: 'Conflict',
          message: `Esta invocação está em '${found.status}'; só invocações 'dead_letter' podem ser reprocessadas.`,
        });
      }

      const [updated] = await db
        .update(automationInvocation)
        .set({
          status: 'pending',
          attemptCount: 0,
          lastError: null,
          nextAttemptAt: null,
        })
        .where(eq(automationInvocation.id, paramsResult.data.id))
        .returning();

      await recordAuditEvent({
        eventType: 'automation_invocation:reprocessed',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { automationInvocationId: updated?.id },
        requestId: requestIdOf(request.headers),
      });

      return { automationInvocation: updated };
    }
  );
}
