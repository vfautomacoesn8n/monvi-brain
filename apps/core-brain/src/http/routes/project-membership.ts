import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { project, projectMembership } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createMembershipSchema = z.object({
  personId: z.string().uuid(),
  roleId: z.string().uuid(),
});

const projectIdParamsSchema = z.object({
  projectId: z.string().uuid(),
});

const membershipParamsSchema = z.object({
  projectId: z.string().uuid(),
  membershipId: z.string().uuid(),
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

export async function registerProjectMembershipRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/projects/:projectId/memberships',
    { preHandler: [authenticateRequest, requirePermission('project_membership:write')] },
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

      const bodyResult = createMembershipSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de participação em projeto inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db
        .insert(projectMembership)
        .values({ ...bodyResult.data, projectId: paramsResult.data.projectId })
        .returning();

      await recordAuditEvent({
        eventType: 'project_membership:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: paramsResult.data.projectId,
        actionDetails: { membershipId: created?.id, personId: bodyResult.data.personId },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ membership: created });
    }
  );

  app.get(
    '/projects/:projectId/memberships',
    { preHandler: [authenticateRequest, requirePermission('project_membership:read')] },
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

      const memberships = await db
        .select()
        .from(projectMembership)
        .where(
          and(
            eq(projectMembership.projectId, paramsResult.data.projectId),
            isNull(projectMembership.leftAt)
          )
        );

      return { memberships };
    }
  );

  app.delete(
    '/projects/:projectId/memberships/:membershipId',
    { preHandler: [authenticateRequest, requirePermission('project_membership:write')] },
    async (request, reply) => {
      const paramsResult = membershipParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificadores de projeto ou participação inválidos.',
        });
      }

      const [ended] = await db
        .update(projectMembership)
        .set({ leftAt: new Date() })
        .where(
          and(
            eq(projectMembership.id, paramsResult.data.membershipId),
            eq(projectMembership.projectId, paramsResult.data.projectId),
            isNull(projectMembership.leftAt)
          )
        )
        .returning();

      if (!ended) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Participação em projeto não encontrada ou já encerrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'project_membership:ended',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        projectId: ended.projectId,
        actionDetails: { membershipId: ended.id, personId: ended.personId },
        requestId: requestIdOf(request.headers),
      });

      return { membership: ended };
    }
  );
}
