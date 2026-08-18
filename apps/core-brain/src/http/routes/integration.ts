import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import type { AppConfig } from '../../config/environment.js';
import { db } from '../../db/client.js';
import { integration, integrationProviderEnum, integrationStatusEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';
import {
  fetchGithubRepository,
  createGithubIssueComment,
  GithubApiError,
  GithubCredentialMissingError,
} from '../../modules/integrations/github.service.js';

interface RouteDependencies {
  config: AppConfig;
}

const createIntegrationSchema = z.object({
  provider: z.enum(integrationProviderEnum.enumValues),
  name: z.string().min(1).max(255),
  minimalScopes: z.string().optional(),
  ownerPersonId: z.string().uuid().optional(),
  notes: z.string().optional(),
});

const updateIntegrationSchema = z.object({
  provider: z.enum(integrationProviderEnum.enumValues).optional(),
  name: z.string().min(1).max(255).optional(),
  minimalScopes: z.string().nullable().optional(),
  ownerPersonId: z.string().uuid().nullable().optional(),
  status: z.enum(integrationStatusEnum.enumValues).optional(),
  notes: z.string().optional(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

const githubRepositoryQuerySchema = z.object({
  owner: z.string().min(1),
  repo: z.string().min(1),
});

const githubIssueCommentParamsSchema = z.object({
  id: z.string().uuid(),
  issueNumber: z.coerce.number().int().positive(),
});

const githubIssueCommentBodySchema = z.object({
  body: z.string().min(1),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerIntegrationRoutes(
  app: FastifyInstance,
  dependencies: RouteDependencies
): Promise<void> {
  app.post(
    '/integrations',
    { preHandler: [authenticateRequest, requirePermission('integration:write')] },
    async (request, reply) => {
      const bodyResult = createIntegrationSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de integração inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db.insert(integration).values(bodyResult.data).returning();

      await recordAuditEvent({
        eventType: 'integration:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { integrationId: created?.id, provider: created?.provider },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ integration: created });
    }
  );

  app.get(
    '/integrations',
    { preHandler: [authenticateRequest, requirePermission('integration:read')] },
    async () => {
      const integrations = await db.select().from(integration).where(isNull(integration.deletedAt));
      return { integrations };
    }
  );

  app.get(
    '/integrations/:id',
    { preHandler: [authenticateRequest, requirePermission('integration:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de integração inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(integration)
        .where(and(eq(integration.id, paramsResult.data.id), isNull(integration.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Integração não encontrada.',
        });
      }

      return { integration: found };
    }
  );

  app.patch(
    '/integrations/:id',
    { preHandler: [authenticateRequest, requirePermission('integration:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de integração inválido.',
        });
      }

      const bodyResult = updateIntegrationSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de integração inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(integration)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(integration.id, paramsResult.data.id), isNull(integration.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Integração não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'integration:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { integrationId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { integration: updated };
    }
  );

  app.delete(
    '/integrations/:id',
    { preHandler: [authenticateRequest, requirePermission('integration:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de integração inválido.',
        });
      }

      const [deleted] = await db
        .update(integration)
        .set({ deletedAt: new Date() })
        .where(and(eq(integration.id, paramsResult.data.id), isNull(integration.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Integração não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'integration:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { integrationId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );

  app.get(
    '/integrations/:id/github/repository',
    { preHandler: [authenticateRequest, requirePermission('integration:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de integração inválido.',
        });
      }

      const queryResult = githubRepositoryQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'owner e repo são obrigatórios.',
          details: queryResult.error.flatten(),
        });
      }

      const [found] = await db
        .select()
        .from(integration)
        .where(and(eq(integration.id, paramsResult.data.id), isNull(integration.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Integração não encontrada.',
        });
      }

      if (found.provider !== 'github') {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: `Esta integração é do provedor '${found.provider}', não 'github'.`,
        });
      }

      const { owner, repo } = queryResult.data;

      try {
        const repository = await fetchGithubRepository(owner, repo, dependencies.config.GITHUB_PAT);

        await recordAuditEvent({
          eventType: 'integration:github_call',
          severity: 'info',
          actorPersonId: request.user?.personId ?? null,
          actionDetails: { integrationId: found.id, owner, repo, outcome: 'success' },
          requestId: requestIdOf(request.headers),
        });

        return { repository };
      } catch (err) {
        if (err instanceof GithubCredentialMissingError) {
          await recordAuditEvent({
            eventType: 'integration:github_call',
            severity: 'warn',
            actorPersonId: request.user?.personId ?? null,
            actionDetails: { integrationId: found.id, owner, repo, outcome: 'credential_missing' },
            requestId: requestIdOf(request.headers),
          });

          return reply.status(424).send({
            statusCode: 424,
            error: 'Failed Dependency',
            message: 'GITHUB_PAT não configurado neste ambiente.',
          });
        }

        if (err instanceof GithubApiError) {
          await recordAuditEvent({
            eventType: 'integration:github_call',
            severity: 'warn',
            actorPersonId: request.user?.personId ?? null,
            actionDetails: {
              integrationId: found.id,
              owner,
              repo,
              outcome: 'github_api_error',
              githubStatus: err.status,
            },
            requestId: requestIdOf(request.headers),
          });

          return reply.status(502).send({
            statusCode: 502,
            error: 'Bad Gateway',
            message: `GitHub retornou erro: ${err.githubMessage}`,
          });
        }

        throw err;
      }
    }
  );

  app.post(
    '/integrations/:id/github/issues/:issueNumber/comments',
    { preHandler: [authenticateRequest, requirePermission('integration:write')] },
    async (request, reply) => {
      const paramsResult = githubIssueCommentParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de integração ou número de issue/PR inválido.',
        });
      }

      const queryResult = githubRepositoryQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'owner e repo são obrigatórios.',
          details: queryResult.error.flatten(),
        });
      }

      const bodyResult = githubIssueCommentBodySchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'body é obrigatório.',
          details: bodyResult.error.flatten(),
        });
      }

      const [found] = await db
        .select()
        .from(integration)
        .where(and(eq(integration.id, paramsResult.data.id), isNull(integration.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Integração não encontrada.',
        });
      }

      if (found.provider !== 'github') {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: `Esta integração é do provedor '${found.provider}', não 'github'.`,
        });
      }

      const { owner, repo } = queryResult.data;
      const { issueNumber } = paramsResult.data;

      try {
        const comment = await createGithubIssueComment(
          owner,
          repo,
          issueNumber,
          bodyResult.data.body,
          dependencies.config.GITHUB_PAT
        );

        await recordAuditEvent({
          eventType: 'integration:github_call',
          severity: 'info',
          actorPersonId: request.user?.personId ?? null,
          actionDetails: { integrationId: found.id, owner, repo, issueNumber, outcome: 'success' },
          requestId: requestIdOf(request.headers),
        });

        return reply.status(201).send({ comment });
      } catch (err) {
        if (err instanceof GithubCredentialMissingError) {
          await recordAuditEvent({
            eventType: 'integration:github_call',
            severity: 'warn',
            actorPersonId: request.user?.personId ?? null,
            actionDetails: {
              integrationId: found.id,
              owner,
              repo,
              issueNumber,
              outcome: 'credential_missing',
            },
            requestId: requestIdOf(request.headers),
          });

          return reply.status(424).send({
            statusCode: 424,
            error: 'Failed Dependency',
            message: 'GITHUB_PAT não configurado neste ambiente.',
          });
        }

        if (err instanceof GithubApiError) {
          await recordAuditEvent({
            eventType: 'integration:github_call',
            severity: 'warn',
            actorPersonId: request.user?.personId ?? null,
            actionDetails: {
              integrationId: found.id,
              owner,
              repo,
              issueNumber,
              outcome: 'github_api_error',
              githubStatus: err.status,
            },
            requestId: requestIdOf(request.headers),
          });

          return reply.status(502).send({
            statusCode: 502,
            error: 'Bad Gateway',
            message: `GitHub retornou erro: ${err.githubMessage}`,
          });
        }

        throw err;
      }
    }
  );
}
