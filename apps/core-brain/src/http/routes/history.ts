import type { FastifyInstance } from 'fastify';
import { and, desc, like, sql } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { auditEvent } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';

const ENTITY_AUDIT_CONFIG = {
  client: { prefix: 'client:', idKey: 'clientId' },
  project: { prefix: 'project:', idKey: 'projectId' },
  contact: { prefix: 'contact:', idKey: 'contactId' },
  project_membership: { prefix: 'project_membership:', idKey: 'membershipId' },
  task: { prefix: 'task:', idKey: 'taskId' },
  deliverable: { prefix: 'deliverable:', idKey: 'deliverableId' },
  approval: { prefix: 'approval:', idKey: 'approvalId' },
  dependency: { prefix: 'dependency:', idKey: 'dependencyId' },
  risk: { prefix: 'risk:', idKey: 'riskId' },
  comment: { prefix: 'comment:', idKey: 'commentId' },
  automation_invocation: { prefix: 'automation_invocation:', idKey: 'automationInvocationId' },
} as const;

const entityTypeValues = Object.keys(ENTITY_AUDIT_CONFIG) as [
  keyof typeof ENTITY_AUDIT_CONFIG,
  ...Array<keyof typeof ENTITY_AUDIT_CONFIG>,
];

const historyQuerySchema = z.object({
  entityType: z.enum(entityTypeValues),
  entityId: z.string().uuid(),
});

export async function registerHistoryRoutes(app: FastifyInstance): Promise<void> {
  app.get(
    '/history',
    { preHandler: [authenticateRequest, requirePermission('history:read')] },
    async (request, reply) => {
      const queryResult = historyQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'entityType ou entityId inválidos.',
          details: queryResult.error.flatten(),
        });
      }

      const { entityType, entityId } = queryResult.data;
      const config = ENTITY_AUDIT_CONFIG[entityType];

      const history = await db
        .select()
        .from(auditEvent)
        .where(
          and(
            like(auditEvent.eventType, `${config.prefix}%`),
            sql`${auditEvent.actionDetails} ->> ${config.idKey} = ${entityId}`
          )
        )
        .orderBy(desc(auditEvent.createdAt));

      return { history };
    }
  );
}
