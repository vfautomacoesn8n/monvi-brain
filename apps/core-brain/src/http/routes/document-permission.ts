import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { document, documentPermission, documentPermissionAccessLevelEnum } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createDocumentPermissionSchema = z
  .object({
    granteePersonId: z.string().uuid().optional(),
    granteeRoleId: z.string().uuid().optional(),
    accessLevel: z.enum(documentPermissionAccessLevelEnum.enumValues),
  })
  .refine((data) => Boolean(data.granteePersonId) !== Boolean(data.granteeRoleId), {
    message: 'Informe exatamente um de granteePersonId ou granteeRoleId, nunca os dois nem nenhum.',
  });

const documentIdParamsSchema = z.object({
  documentId: z.string().uuid(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

async function findActiveDocument(documentId: string) {
  const [found] = await db
    .select({ id: document.id })
    .from(document)
    .where(and(eq(document.id, documentId), isNull(document.deletedAt)));
  return found;
}

export async function registerDocumentPermissionRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/documents/:documentId/permissions',
    { preHandler: [authenticateRequest, requirePermission('document:write')] },
    async (request, reply) => {
      const paramsResult = documentIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de documento inválido.',
        });
      }

      const foundDocument = await findActiveDocument(paramsResult.data.documentId);
      if (!foundDocument) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      const bodyResult = createDocumentPermissionSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de permissão de documento inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db
        .insert(documentPermission)
        .values({
          documentId: paramsResult.data.documentId,
          granteePersonId: bodyResult.data.granteePersonId,
          granteeRoleId: bodyResult.data.granteeRoleId,
          accessLevel: bodyResult.data.accessLevel,
          grantedByPersonId: request.user?.personId ?? null,
        })
        .returning();

      await recordAuditEvent({
        eventType: 'document_permission:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: {
          documentId: paramsResult.data.documentId,
          documentPermissionId: created?.id,
          granteePersonId: bodyResult.data.granteePersonId ?? null,
          granteeRoleId: bodyResult.data.granteeRoleId ?? null,
          accessLevel: bodyResult.data.accessLevel,
        },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ documentPermission: created });
    }
  );

  app.get(
    '/documents/:documentId/permissions',
    { preHandler: [authenticateRequest, requirePermission('document:read')] },
    async (request, reply) => {
      const paramsResult = documentIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de documento inválido.',
        });
      }

      const foundDocument = await findActiveDocument(paramsResult.data.documentId);
      if (!foundDocument) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      const permissions = await db
        .select()
        .from(documentPermission)
        .where(
          and(
            eq(documentPermission.documentId, paramsResult.data.documentId),
            isNull(documentPermission.deletedAt)
          )
        );

      return { documentPermissions: permissions };
    }
  );

  app.delete(
    '/permissions/:id',
    { preHandler: [authenticateRequest, requirePermission('document:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de permissão inválido.',
        });
      }

      const [revoked] = await db
        .update(documentPermission)
        .set({ deletedAt: new Date() })
        .where(and(eq(documentPermission.id, paramsResult.data.id), isNull(documentPermission.deletedAt)))
        .returning();

      if (!revoked) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Permissão não encontrada.',
        });
      }

      await recordAuditEvent({
        eventType: 'document_permission:revoked',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { documentPermissionId: revoked.id, documentId: revoked.documentId },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
