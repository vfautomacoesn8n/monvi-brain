import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { project, projectStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createProjectSchema = z.object({
  clientId: z.string().uuid(),
  code: z.string().min(1).max(60),
  name: z.string().min(1).max(255),
  description: z.string().optional(),
});

const updateProjectSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  status: z.enum(projectStatusEnum.enumValues).optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerProjectRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/projects',
    { preHandler: [authenticateRequest, requirePermission('project:write')] },
    async (request, reply) => {
      const parseResult = createProjectSchema.safeParse(request.body);
      if (!parseResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de projeto inválidos.',
          details: parseResult.error.flatten(),
        });
      }

      const [created] = await db.insert(project).values(parseResult.data).returning();

      await recordAuditEvent({
        eventType: 'project:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        clientId: created?.clientId ?? null,
        projectId: created?.id ?? null,
        actionDetails: { projectId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ project: created });
    }
  );

  app.get(
    '/projects',
    { preHandler: [authenticateRequest, requirePermission('project:read')] },
    async () => {
      const projects = await db.select().from(project).where(isNull(project.deletedAt));
      return { projects };
    }
  );

  app.get(
    '/projects/:id',
    { preHandler: [authenticateRequest, requirePermission('project:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de projeto inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(project)
        .where(and(eq(project.id, paramsResult.data.id), isNull(project.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Projeto não encontrado.',
        });
      }

      return { project: found };
    }
  );

  app.patch(
    '/projects/:id',
    { preHandler: [authenticateRequest, requirePermission('project:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de projeto inválido.',
        });
      }

      const bodyResult = updateProjectSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de projeto inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(project)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(project.id, paramsResult.data.id), isNull(project.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Projeto não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'project:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        clientId: updated.clientId,
        projectId: updated.id,
        actionDetails: { changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { project: updated };
    }
  );

  app.delete(
    '/projects/:id',
    { preHandler: [authenticateRequest, requirePermission('project:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de projeto inválido.',
        });
      }

      const [deleted] = await db
        .update(project)
        .set({ deletedAt: new Date() })
        .where(and(eq(project.id, paramsResult.data.id), isNull(project.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Projeto não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'project:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        clientId: deleted.clientId,
        projectId: deleted.id,
        actionDetails: {},
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
