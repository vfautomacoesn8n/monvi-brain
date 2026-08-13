import type { FastifyInstance, FastifyRequest } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import {
  document,
  documentStatusEnum,
  documentConfidentialityEnum,
  documentRetentionPolicyEnum,
  documentPermission,
} from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const RESTRICTED_CONFIDENTIALITY_LEVELS = new Set(['confidential', 'restricted']);

async function hasGranularDocumentAccess(
  user: FastifyRequest['user'],
  doc: { id: string; confidentiality: string },
  requiredLevel: 'read' | 'write'
): Promise<boolean> {
  if (!RESTRICTED_CONFIDENTIALITY_LEVELS.has(doc.confidentiality)) {
    return true;
  }
  if (!user) {
    return false;
  }
  if (user.roleName === 'admin') {
    return true;
  }

  const grants = await db
    .select()
    .from(documentPermission)
    .where(and(eq(documentPermission.documentId, doc.id), isNull(documentPermission.deletedAt)));

  const relevantGrants = grants.filter(
    (grant) =>
      grant.granteePersonId === user.personId ||
      (user.roleId !== null && grant.granteeRoleId === user.roleId)
  );

  if (requiredLevel === 'write') {
    return relevantGrants.some((grant) => grant.accessLevel === 'write');
  }
  return relevantGrants.some((grant) => grant.accessLevel === 'read' || grant.accessLevel === 'write');
}

function forbiddenDocumentAccessResponse() {
  return {
    statusCode: 403,
    error: 'Forbidden',
    message: 'Este documento tem confidencialidade restrita e você não tem uma permissão concedida para ele.',
  } as const;
}

function validateRetentionConsistency(data: {
  retentionPolicy?: string | undefined;
  retentionUntil?: Date | null | undefined;
}): boolean {
  if (data.retentionPolicy === 'time_limited') {
    return data.retentionUntil !== undefined && data.retentionUntil !== null;
  }
  if (data.retentionPolicy === 'indefinite') {
    return data.retentionUntil === undefined || data.retentionUntil === null;
  }
  return data.retentionUntil === undefined || data.retentionUntil === null;
}

const RETENTION_CONSISTENCY_MESSAGE =
  'retentionUntil é obrigatório quando retentionPolicy é time_limited, e não pode ser informado sem retentionPolicy: time_limited no mesmo pedido.';

const createDocumentSchema = z
  .object({
    title: z.string().min(1).max(255),
    sourceId: z.string().uuid().optional(),
    ownerPersonId: z.string().uuid().optional(),
    confidentiality: z.enum(documentConfidentialityEnum.enumValues).optional(),
    retentionPolicy: z.enum(documentRetentionPolicyEnum.enumValues).optional(),
    retentionUntil: z.coerce.date().optional(),
    notes: z.string().optional(),
  })
  .refine(validateRetentionConsistency, { message: RETENTION_CONSISTENCY_MESSAGE });

const updateDocumentSchema = z
  .object({
    title: z.string().min(1).max(255).optional(),
    sourceId: z.string().uuid().nullable().optional(),
    ownerPersonId: z.string().uuid().nullable().optional(),
    status: z.enum(documentStatusEnum.enumValues).optional(),
    confidentiality: z.enum(documentConfidentialityEnum.enumValues).optional(),
    retentionPolicy: z.enum(documentRetentionPolicyEnum.enumValues).optional(),
    retentionUntil: z.coerce.date().nullable().optional(),
    notes: z.string().optional(),
  })
  .refine(validateRetentionConsistency, { message: RETENTION_CONSISTENCY_MESSAGE });

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

export async function registerDocumentRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/documents',
    { preHandler: [authenticateRequest, requirePermission('document:write')] },
    async (request, reply) => {
      const bodyResult = createDocumentSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de documento inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db.insert(document).values(bodyResult.data).returning();

      await recordAuditEvent({
        eventType: 'document:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { documentId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ document: created });
    }
  );

  app.get(
    '/documents',
    { preHandler: [authenticateRequest, requirePermission('document:read')] },
    async (request) => {
      const allDocuments = await db.select().from(document).where(isNull(document.deletedAt));
      const accessFlags = await Promise.all(
        allDocuments.map((doc) => hasGranularDocumentAccess(request.user, doc, 'read'))
      );
      const documents = allDocuments.filter((_doc, index) => accessFlags[index]);
      return { documents };
    }
  );

  app.get(
    '/documents/:id',
    { preHandler: [authenticateRequest, requirePermission('document:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de documento inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(document)
        .where(and(eq(document.id, paramsResult.data.id), isNull(document.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      if (!(await hasGranularDocumentAccess(request.user, found, 'read'))) {
        return reply.status(403).send(forbiddenDocumentAccessResponse());
      }

      return { document: found };
    }
  );

  app.patch(
    '/documents/:id',
    { preHandler: [authenticateRequest, requirePermission('document:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de documento inválido.',
        });
      }

      const bodyResult = updateDocumentSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de documento inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [existing] = await db
        .select()
        .from(document)
        .where(and(eq(document.id, paramsResult.data.id), isNull(document.deletedAt)));

      if (!existing) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      if (!(await hasGranularDocumentAccess(request.user, existing, 'write'))) {
        return reply.status(403).send(forbiddenDocumentAccessResponse());
      }

      const [updated] = await db
        .update(document)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(document.id, paramsResult.data.id), isNull(document.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'document:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { documentId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { document: updated };
    }
  );

  app.delete(
    '/documents/:id',
    { preHandler: [authenticateRequest, requirePermission('document:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de documento inválido.',
        });
      }

      const [existing] = await db
        .select()
        .from(document)
        .where(and(eq(document.id, paramsResult.data.id), isNull(document.deletedAt)));

      if (!existing) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      if (!(await hasGranularDocumentAccess(request.user, existing, 'write'))) {
        return reply.status(403).send(forbiddenDocumentAccessResponse());
      }

      const [deleted] = await db
        .update(document)
        .set({ deletedAt: new Date() })
        .where(and(eq(document.id, paramsResult.data.id), isNull(document.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Documento não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'document:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { documentId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
