import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { project, risk, riskSeverityEnum, riskStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createRiskSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  severity: z.enum(riskSeverityEnum.enumValues).optional(),
  ownerPersonId: z.string().uuid().optional(),
});

const updateRiskSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  severity: z.enum(riskSeverityEnum.enumValues).optional(),
  status: z.enum(riskStatusEnum.enumValues).optional(),
  ownerPersonId: z.string().uuid().nullable().optional(),
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

export async function registerRiskRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/projects/:projectId/risks',
    { preHandler: [authenticateRequest, requirePermission('risk:write')] },
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

      const bodyResult = createRiskSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de risco inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db
        .insert(risk)
        .values({ ...bodyResult.data, projectId: paramsResult.data.projectId })
        .returning();

      await recordAuditEvent({
        eventType: 'risk:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: paramsResult.data.projectId,
        actionDetails: { riskId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ risk: created });
    }
  );

  app.get(
    '/projects/:projectId/risks',
    { preHandler: [authenticateRequest, requirePermission('risk:read')] },
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

      const risks = await db
        .select()
        .from(risk)
        .where(and(eq(risk.projectId, paramsResult.data.projectId), isNull(risk.deletedAt)));

      return { risks };
    }
  );

  app.get(
    '/risks/:id',
    { preHandler: [authenticateRequest, requirePermission('risk:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de risco inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(risk)
        .where(and(eq(risk.id, paramsResult.data.id), isNull(risk.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Risco não encontrado.',
        });
      }

      return { risk: found };
    }
  );

  app.patch(
    '/risks/:id',
    { preHandler: [authenticateRequest, requirePermission('risk:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de risco inválido.',
        });
      }

      const bodyResult = updateRiskSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de risco inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(risk)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(risk.id, paramsResult.data.id), isNull(risk.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Risco não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'risk:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: updated.projectId,
        actionDetails: { riskId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { risk: updated };
    }
  );

  app.delete(
    '/risks/:id',
    { preHandler: [authenticateRequest, requirePermission('risk:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de risco inválido.',
        });
      }

      const [deleted] = await db
        .update(risk)
        .set({ deletedAt: new Date() })
        .where(and(eq(risk.id, paramsResult.data.id), isNull(risk.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Risco não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'risk:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: deleted.projectId,
        actionDetails: { riskId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
