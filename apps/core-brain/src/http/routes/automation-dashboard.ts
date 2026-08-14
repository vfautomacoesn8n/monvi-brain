import type { FastifyInstance } from 'fastify';
import { isNull, sql } from 'drizzle-orm';
import { db } from '../../db/client.js';
import {
  automationWorkflow,
  automationWorkflowStatusEnum,
  automationInvocation,
  automationInvocationStatusEnum,
} from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';

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

export async function registerAutomationDashboardRoutes(app: FastifyInstance): Promise<void> {
  app.get(
    '/automations/dashboard',
    { preHandler: [authenticateRequest, requirePermission('automation:read')] },
    async () => {
      const workflowRows = await db
        .select({ key: automationWorkflow.status, count: sql<number>`count(*)::int` })
        .from(automationWorkflow)
        .where(isNull(automationWorkflow.deletedAt))
        .groupBy(automationWorkflow.status);

      const invocationRows = await db
        .select({ key: automationInvocation.status, count: sql<number>`count(*)::int` })
        .from(automationInvocation)
        .groupBy(automationInvocation.status);

      const workflows = withCounts(zeroedCounts(automationWorkflowStatusEnum.enumValues), workflowRows);
      const invocations = withCounts(zeroedCounts(automationInvocationStatusEnum.enumValues), invocationRows);

      return {
        workflows: { total: workflows.total, byStatus: workflows.byKey },
        invocations: { total: invocations.total, byStatus: invocations.byKey },
      };
    }
  );
}
