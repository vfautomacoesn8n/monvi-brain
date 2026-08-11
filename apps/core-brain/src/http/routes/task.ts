import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { project, task, taskStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createTaskSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  assigneePersonId: z.string().uuid().optional(),
  dueDate: z.coerce.date().optional(),
});

const updateTaskSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  status: z.enum(taskStatusEnum.enumValues).optional(),
  assigneePersonId: z.string().uuid().nullable().optional(),
  dueDate: z.coerce.date().nullable().optional(),
});

const projectIdParamsSchema = z.object({
  projectId: z.string().uuid(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

async function findActiveProject(projectId: string) {
  const [found] = await db
    .select({ id: project.id })
    .from(project)
    .where(and(eq(project.id, projectId), isNull(project.deletedAt)));
  return found;
}

export async function registerTaskRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/projects/:projectId/tasks',
    { preHandler: [authenticateRequest, requirePermission('task:write')] },
    async (request, reply) => {
      const paramsResult = projectIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de projeto inválido.',
        });
      }

      const foundProject = await findActiveProject(paramsResult.data.projectId);
      if (!foundProject) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Projeto não encontrado.',
        });
      }

      const bodyResult = createTaskSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de tarefa inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db
        .insert(task)
        .values({ ...bodyResult.data, projectId: paramsResult.data.projectId })
        .returning();

      await recordAuditEvent({
        eventType: 'task:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: paramsResult.data.projectId,
        actionDetails: { taskId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ task: created });
    }
  );

  app.get(
    '/projects/:projectId/tasks',
    { preHandler: [authenticateRequest, requirePermission('task:read')] },
    async (request, reply) => {
      const paramsResult = projectIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de projeto inválido.',
        });
      }

      const foundProject = await findActiveProject(paramsResult.data.projectId);
      if (!foundProject) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Projeto não encontrado.',
        });
      }

      const tasks = await db
        .select()
        .from(task)
        .where(and(eq(task.projectId, paramsResult.data.projectId), isNull(task.deletedAt)));

      return { tasks };
    }
  );

  app.get(
    '/tasks/:id',
    { preHandler: [authenticateRequest, requirePermission('task:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de tarefa inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(task)
        .where(and(eq(task.id, paramsResult.data.id), isNull(task.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Tarefa não encontrada.',
        });
      }

      return { task: found };
    }
  );

  app.patch(
    '/tasks/:id',
    { preHandler: [authenticateRequest, requirePermission('task:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de tarefa inválido.',
        });
      }

      const bodyResult = updateTaskSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de tarefa inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(task)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(task.id, paramsResult.data.id), isNull(task.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Tarefa não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'task:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: updated.projectId,
        actionDetails: { taskId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { task: updated };
    }
  );

  app.delete(
    '/tasks/:id',
    { preHandler: [authenticateRequest, requirePermission('task:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de tarefa inválido.',
        });
      }

      const [deleted] = await db
        .update(task)
        .set({ deletedAt: new Date() })
        .where(and(eq(task.id, paramsResult.data.id), isNull(task.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Tarefa não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'task:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: deleted.projectId,
        actionDetails: { taskId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
