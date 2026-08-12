import type { FastifyInstance } from 'fastify';
import { isNull, sql } from 'drizzle-orm';
import { db } from '../../db/client.js';
import {
  lead,
  leadStatusEnum,
  opportunity,
  opportunityStageEnum,
  activity,
  activityStatusEnum,
  activityTypeEnum,
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

export async function registerCommercialDashboardRoutes(app: FastifyInstance): Promise<void> {
  app.get(
    '/commercial/dashboard',
    { preHandler: [authenticateRequest, requirePermission('commercial:read')] },
    async () => {
      const leadRows = await db
        .select({ key: lead.status, count: sql<number>`count(*)::int` })
        .from(lead)
        .where(isNull(lead.deletedAt))
        .groupBy(lead.status);

      const opportunityRows = await db
        .select({ key: opportunity.stage, count: sql<number>`count(*)::int` })
        .from(opportunity)
        .where(isNull(opportunity.deletedAt))
        .groupBy(opportunity.stage);

      const activityStatusRows = await db
        .select({ key: activity.status, count: sql<number>`count(*)::int` })
        .from(activity)
        .where(isNull(activity.deletedAt))
        .groupBy(activity.status);

      const activityTypeRows = await db
        .select({ key: activity.type, count: sql<number>`count(*)::int` })
        .from(activity)
        .where(isNull(activity.deletedAt))
        .groupBy(activity.type);

      const leads = withCounts(zeroedCounts(leadStatusEnum.enumValues), leadRows);
      const opportunities = withCounts(zeroedCounts(opportunityStageEnum.enumValues), opportunityRows);
      const activitiesByStatus = withCounts(zeroedCounts(activityStatusEnum.enumValues), activityStatusRows);
      const activitiesByType = withCounts(zeroedCounts(activityTypeEnum.enumValues), activityTypeRows);

      return {
        leads: { total: leads.total, byStatus: leads.byKey },
        opportunities: { total: opportunities.total, byStage: opportunities.byKey },
        activities: {
          total: activitiesByStatus.total,
          byStatus: activitiesByStatus.byKey,
          byType: activitiesByType.byKey,
        },
      };
    }
  );
}
