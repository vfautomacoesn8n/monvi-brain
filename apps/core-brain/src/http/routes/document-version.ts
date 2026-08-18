import type { FastifyInstance } from 'fastify';
import { and, eq, isNull, sql } from 'drizzle-orm';
import { z } from 'zod';
import type { AppConfig } from '../../config/environment.js';
import { db } from '../../db/client.js';
import { document, documentVersion } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';
import { storeUploadedFile } from '../../modules/documents/file-storage.service.js';

interface RouteDependencies {
  config: AppConfig;
}

const createDocumentVersionSchema = z.object({
  content: z.string().min(1),
});

const documentIdParamsSchema = z.object({
  documentId: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

function extractionMessage(extracted: boolean, formatSupported: boolean): string {
  if (extracted) {
    return 'Conteúdo extraído com sucesso.';
  }
  if (formatSupported) {
    return 'Arquivo armazenado, mas nenhum texto pôde ser extraído (arquivo vazio, corrompido, ou sem camada de texto — ex.: PDF digitalizado).';
  }
  return 'Arquivo armazenado, mas extração de conteúdo não implementada para este formato ainda.';
}

async function findActiveDocument(documentId: string) {
  const [found] = await db
    .select({ id: document.id })
    .from(document)
    .where(and(eq(document.id, documentId), isNull(document.deletedAt)));
  return found;
}

export async function registerDocumentVersionRoutes(
  app: FastifyInstance,
  dependencies: RouteDependencies
): Promise<void> {
  app.post(
    '/documents/:documentId/versions',
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

      const bodyResult = createDocumentVersionSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de versão de documento inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [nextVersionRow] = await db
        .select({ nextVersion: sql<number>`coalesce(max(${documentVersion.versionNumber}), 0)::int + 1` })
        .from(documentVersion)
        .where(eq(documentVersion.documentId, paramsResult.data.documentId));
      const nextVersion = nextVersionRow?.nextVersion ?? 1;

      const [created] = await db
        .insert(documentVersion)
        .values({
          documentId: paramsResult.data.documentId,
          versionNumber: nextVersion,
          content: bodyResult.data.content,
          createdByPersonId: request.user?.personId ?? null,
        })
        .returning();

      await recordAuditEvent({
        eventType: 'document_version:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: { documentId: paramsResult.data.documentId, versionNumber: nextVersion },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ documentVersion: created });
    }
  );

  app.get(
    '/documents/:documentId/versions',
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

      const versions = await db
        .select()
        .from(documentVersion)
        .where(eq(documentVersion.documentId, paramsResult.data.documentId));

      return { documentVersions: versions };
    }
  );

  app.post(
    '/documents/:documentId/versions/upload',
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

      const uploadedFile = await request.file();
      if (!uploadedFile) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Nenhum arquivo enviado.',
        });
      }

      const buffer = await uploadedFile.toBuffer();
      const stored = await storeUploadedFile(
        dependencies.config.UPLOADS_DIR,
        uploadedFile.filename,
        uploadedFile.mimetype,
        buffer
      );

      const [nextVersionRow] = await db
        .select({ nextVersion: sql<number>`coalesce(max(${documentVersion.versionNumber}), 0)::int + 1` })
        .from(documentVersion)
        .where(eq(documentVersion.documentId, paramsResult.data.documentId));
      const nextVersion = nextVersionRow?.nextVersion ?? 1;

      const [created] = await db
        .insert(documentVersion)
        .values({
          documentId: paramsResult.data.documentId,
          versionNumber: nextVersion,
          content: stored.extractedContent,
          originalFilename: stored.originalFilename,
          mimeType: stored.mimeType,
          fileSizeBytes: stored.fileSizeBytes,
          storagePath: stored.storagePath,
          createdByPersonId: request.user?.personId ?? null,
        })
        .returning();

      await recordAuditEvent({
        eventType: 'document_version:uploaded',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        actionDetails: {
          documentId: paramsResult.data.documentId,
          versionNumber: nextVersion,
          originalFilename: stored.originalFilename,
          mimeType: stored.mimeType,
          fileSizeBytes: stored.fileSizeBytes,
          extracted: stored.extractedContent !== null,
        },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({
        documentVersion: created,
        extraction: {
          extracted: stored.extractedContent !== null,
          message: extractionMessage(stored.extractedContent !== null, stored.formatSupported),
        },
      });
    }
  );
}
