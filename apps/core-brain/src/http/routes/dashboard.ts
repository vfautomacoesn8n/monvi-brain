import type { FastifyInstance } from 'fastify';
import { and, eq, isNull, sql } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import {
  project,
  task,
  taskStatusEnum,
  deliverable,
  deliverableStatusEnum,
  approval,
  approvalStatusEnum,
  risk,
  riskStatusEnum,
  riskSeverityEnum,
} from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';

const projectIdParamsSchema = z.object({
  projectId: z.string().uuid(),
});

function zeroedCounts(values: readonly string[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const value of values) {
    counts[value] = 0;
  }
  return counts;
}

function withCounts(
  base: Record<string, number>,
  rows: Array<{ key: string; count: number }>
): { total: number; byKey: Record<string, number> } {
  const byKey = { ...base };
  let total = 0;
  for (const row of rows) {
    byKey[row.key] = row.count;
    total += row.count;
  }
  return { total, byKey };
}

async function findActiveProject(projectId: string) {
  const [found] = await db
    .select({ id: project.id, name: project.name, status: project.status })
    .from(project)
    .where(and(eq(project.id, projectId), isNull(project.deletedAt)));
  return found;
}

export async function registerDashboardRoutes(app: FastifyInstance): Promise<void> {
  app.get(
    '/projects/:projectId/dashboard',
    { preHandler: [authenticateRequest, requirePermission('dashboard:read')] },
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

      const { projectId } = paramsResult.data;

      const taskRows = await db
        .select({ key: task.status, count: sql<number>`count(*)::int` })
        .from(task)
        .where(and(eq(task.projectId, projectId), isNull(task.deletedAt)))
        .groupBy(task.status);

      const deliverableRows = await db
        .select({ key: deliverable.status, count: sql<number>`count(*)::int` })
        .from(deliverable)
        .where(and(eq(deliverable.projectId, projectId), isNull(deliverable.deletedAt)))
        .groupBy(deliverable.status);

      const riskStatusRows = await db
        .select({ key: risk.status, count: sql<number>`count(*)::int` })
        .from(risk)
        .where(and(eq(risk.projectId, projectId), isNull(risk.deletedAt)))
        .groupBy(risk.status);

      const riskSeverityRows = await db
        .select({ key: risk.severity, count: sql<number>`count(*)::int` })
        .from(risk)
        .where(and(eq(risk.projectId, projectId), isNull(risk.deletedAt)))
        .groupBy(risk.severity);

      const approvalRows = await db
        .select({ key: approval.status, count: sql<number>`count(*)::int` })
        .from(approval)
        .innerJoin(deliverable, eq(approval.deliverableId, deliverable.id))
        .where(
          and(
            eq(deliverable.projectId, projectId),
            isNull(approval.deletedAt),
            isNull(deliverable.deletedAt)
          )
        )
        .groupBy(approval.status);

      const tasks = withCounts(zeroedCounts(taskStatusEnum.enumValues), taskRows);
      const deliverables = withCounts(zeroedCounts(deliverableStatusEnum.enumValues), deliverableRows);
      const riskByStatus = withCounts(zeroedCounts(riskStatusEnum.enumValues), riskStatusRows);
      const riskBySeverity = withCounts(zeroedCounts(riskSeverityEnum.enumValues), riskSeverityRows);
      const approvals = withCounts(zeroedCounts(approvalStatusEnum.enumValues), approvalRows);

      return {
        project: foundProject,
        tasks: { total: tasks.total, byStatus: tasks.byKey },
        deliverables: { total: deliverables.total, byStatus: deliverables.byKey },
        risks: {
          total: riskByStatus.total,
          byStatus: riskByStatus.byKey,
          bySeverity: riskBySeverity.byKey,
        },
        approvals: { total: approvals.total, byStatus: approvals.byKey },
      };
    }
  );
}
