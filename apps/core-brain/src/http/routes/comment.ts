import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { task, comment } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createCommentSchema = z.object({
  body: z.string().min(1),
});

const updateCommentSchema = z.object({
  body: z.string().min(1),
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

export async function registerCommentRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/tasks/:taskId/comments',
    { preHandler: [authenticateRequest, requirePermission('comment:write')] },
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

      const bodyResult = createCommentSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de comentário inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      if (!request.user) {
        return reply.status(401).send({
          statusCode: 401,
          error: 'Unauthorized',
          message: 'Usuário não autenticado.',
        });
      }

      const [created] = await db
        .insert(comment)
        .values({
          taskId: paramsResult.data.taskId,
          authorPersonId: request.user.personId,
          body: bodyResult.data.body,
        })
        .returning();

      await recordAuditEvent({
        eventType: 'comment:created',
        severity: 'info',
        actorPersonId: request.user.personId,
        actionDetails: { commentId: created?.id, taskId: paramsResult.data.taskId },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ comment: created });
    }
  );

  app.get(
    '/tasks/:taskId/comments',
    { preHandler: [authenticateRequest, requirePermission('comment:read')] },
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

      const comments = await db
        .select()
        .from(comment)
        .where(and(eq(comment.taskId, paramsResult.data.taskId), isNull(comment.deletedAt)));

      return { comments };
    }
  );

  app.get(
    '/comments/:id',
    { preHandler: [authenticateRequest, requirePermission('comment:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de comentário inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(comment)
        .where(and(eq(comment.id, paramsResult.data.id), isNull(comment.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Comentário não encontrado.',
        });
      }

      return { comment: found };
    }
  );

  app.patch(
    '/comments/:id',
    { preHandler: [authenticateRequest, requirePermission('comment:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de comentário inválido.',
        });
      }

      const bodyResult = updateCommentSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de comentário inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(comment)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(comment.id, paramsResult.data.id), isNull(comment.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Comentário não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'comment:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { commentId: updated.id },
        requestId: requestIdOf(request.headers),
      });

      return { comment: updated };
    }
  );

  app.delete(
    '/comments/:id',
    { preHandler: [authenticateRequest, requirePermission('comment:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de comentário inválido.',
        });
      }

      const [deleted] = await db
        .update(comment)
        .set({ deletedAt: new Date() })
        .where(and(eq(comment.id, paramsResult.data.id), isNull(comment.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Comentário não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'comment:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { commentId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
