import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { project, deliverable, deliverableStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createDeliverableSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  taskId: z.string().uuid().optional(),
  assigneePersonId: z.string().uuid().optional(),
  dueDate: z.coerce.date().optional(),
});

const updateDeliverableSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  status: z.enum(deliverableStatusEnum.enumValues).optional(),
  taskId: z.string().uuid().nullable().optional(),
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

export async function registerDeliverableRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/projects/:projectId/deliverables',
    { preHandler: [authenticateRequest, requirePermission('deliverable:write')] },
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

      const bodyResult = createDeliverableSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de entregável inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db
        .insert(deliverable)
        .values({ ...bodyResult.data, projectId: paramsResult.data.projectId })
        .returning();

      await recordAuditEvent({
        eventType: 'deliverable:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: paramsResult.data.projectId,
        actionDetails: { deliverableId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ deliverable: created });
    }
  );

  app.get(
    '/projects/:projectId/deliverables',
    { preHandler: [authenticateRequest, requirePermission('deliverable:read')] },
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

      const deliverables = await db
        .select()
        .from(deliverable)
        .where(and(eq(deliverable.projectId, paramsResult.data.projectId), isNull(deliverable.deletedAt)));

      return { deliverables };
    }
  );

  app.get(
    '/deliverables/:id',
    { preHandler: [authenticateRequest, requirePermission('deliverable:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de entregável inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(deliverable)
        .where(and(eq(deliverable.id, paramsResult.data.id), isNull(deliverable.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Entregável não encontrado.',
        });
      }

      return { deliverable: found };
    }
  );

  app.patch(
    '/deliverables/:id',
    { preHandler: [authenticateRequest, requirePermission('deliverable:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de entregável inválido.',
        });
      }

      const bodyResult = updateDeliverableSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de entregável inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(deliverable)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(deliverable.id, paramsResult.data.id), isNull(deliverable.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Entregável não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'deliverable:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: updated.projectId,
        actionDetails: { deliverableId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { deliverable: updated };
    }
  );

  app.delete(
    '/deliverables/:id',
    { preHandler: [authenticateRequest, requirePermission('deliverable:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de entregável inválido.',
        });
      }

      const [deleted] = await db
        .update(deliverable)
        .set({ deletedAt: new Date() })
        .where(and(eq(deliverable.id, paramsResult.data.id), isNull(deliverable.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Entregável não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'deliverable:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: deleted.projectId,
        actionDetails: { deliverableId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
