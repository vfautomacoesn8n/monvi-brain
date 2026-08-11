import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { task, dependency } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createDependencySchema = z.object({
  dependsOnTaskId: z.string().uuid(),
  notes: z.string().optional(),
});

const updateDependencySchema = z.object({
  notes: z.string().optional(),
});

const taskIdParamsSchema = z.object({
  taskId: z.string().uuid(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

async function findActiveTask(taskId: string) {
  const [found] = await db
    .select({ id: task.id })
    .from(task)
    .where(and(eq(task.id, taskId), isNull(task.deletedAt)));
  return found;
}

export async function registerDependencyRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/tasks/:taskId/dependencies',
    { preHandler: [authenticateRequest, requirePermission('dependency:write')] },
    async (request, reply) => {
      const paramsResult = taskIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de tarefa inválido.',
        });
      }

      const foundTask = await findActiveTask(paramsResult.data.taskId);
      if (!foundTask) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Tarefa não encontrada.',
        });
      }

      const bodyResult = createDependencySchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de dependência inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      if (bodyResult.data.dependsOnTaskId === paramsResult.data.taskId) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Uma tarefa não pode depender de si mesma.',
        });
      }

      const foundDependsOnTask = await findActiveTask(bodyResult.data.dependsOnTaskId);
      if (!foundDependsOnTask) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Tarefa da qual depende não encontrada.',
        });
      }

      const [created] = await db
        .insert(dependency)
        .values({ ...bodyResult.data, taskId: paramsResult.data.taskId })
        .returning();

      await recordAuditEvent({
        eventType: 'dependency:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { dependencyId: created?.id, taskId: paramsResult.data.taskId },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ dependency: created });
    }
  );

  app.get(
    '/tasks/:taskId/dependencies',
    { preHandler: [authenticateRequest, requirePermission('dependency:read')] },
    async (request, reply) => {
      const paramsResult = taskIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de tarefa inválido.',
        });
      }

      const foundTask = await findActiveTask(paramsResult.data.taskId);
      if (!foundTask) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Tarefa não encontrada.',
        });
      }

      const dependencies = await db
        .select()
        .from(dependency)
        .where(and(eq(dependency.taskId, paramsResult.data.taskId), isNull(dependency.deletedAt)));

      return { dependencies };
    }
  );

  app.get(
    '/dependencies/:id',
    { preHandler: [authenticateRequest, requirePermission('dependency:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de dependência inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(dependency)
        .where(and(eq(dependency.id, paramsResult.data.id), isNull(dependency.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Dependência não encontrada.',
        });
      }

      return { dependency: found };
    }
  );

  app.patch(
    '/dependencies/:id',
    { preHandler: [authenticateRequest, requirePermission('dependency:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de dependência inválido.',
        });
      }

      const bodyResult = updateDependencySchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de dependência inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(dependency)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(dependency.id, paramsResult.data.id), isNull(dependency.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Dependência não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'dependency:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { dependencyId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { dependency: updated };
    }
  );

  app.delete(
    '/dependencies/:id',
    { preHandler: [authenticateRequest, requirePermission('dependency:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de dependência inválido.',
        });
      }

      const [deleted] = await db
        .update(dependency)
        .set({ deletedAt: new Date() })
        .where(and(eq(dependency.id, paramsResult.data.id), isNull(dependency.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Dependência não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'dependency:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { dependencyId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
