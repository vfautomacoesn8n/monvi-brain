import type { FastifyInstance } from 'fastify';
import { sql } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { hasGranularDocumentAccess } from '../../modules/documents/access.service.js';

const searchQuerySchema = z.object({
  q: z.string().min(1),
});

interface DocumentSearchRow extends Record<string, unknown> {
  id: string;
  title: string;
  status: string;
  confidentiality: string;
  sourceId: string | null;
  latestContent: string | null;
  rank: number;
}

const SNIPPET_LENGTH = 280;

export async function registerSearchRoutes(app: FastifyInstance): Promise<void> {
  app.get(
    '/search',
    { preHandler: [authenticateRequest, requirePermission('document:read')] },
    async (request, reply) => {
      const queryResult = searchQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Parâmetro de busca "q" é obrigatório.',
          details: queryResult.error.flatten(),
        });
      }

      const { q } = queryResult.data;

      const rows = await db.execute<DocumentSearchRow>(sql`
        select
          d.id as "id",
          d.title as "title",
          d.status as "status",
          d.confidentiality as "confidentiality",
          d.source_id as "sourceId",
          dv.content as "latestContent",
          ts_rank(
            to_tsvector('portuguese', d.title || ' ' || coalesce(dv.content, '')),
            plainto_tsquery('portuguese', ${q})
          ) as "rank"
        from "document" d
        left join lateral (
          select content
          from "document_version" dv2
          where dv2.document_id = d.id
          order by dv2.version_number desc
          limit 1
        ) dv on true
        where d.deleted_at is null
          and to_tsvector('portuguese', d.title || ' ' || coalesce(dv.content, ''))
              @@ plainto_tsquery('portuguese', ${q})
        order by "rank" desc
        limit 50
      `);

      const documentRows = Array.from(rows);
      const accessFlags = await Promise.all(
        documentRows.map((row) => hasGranularDocumentAccess(request.user, row, 'read'))
      );
      const results = documentRows
        .filter((_row, index) => accessFlags[index])
        .map((row) => ({
          documentId: row.id,
          title: row.title,
          status: row.status,
          confidentiality: row.confidentiality,
          sourceId: row.sourceId,
          snippet: row.latestContent ? row.latestContent.slice(0, SNIPPET_LENGTH) : null,
          rank: row.rank,
        }));

      return { results };
    }
  );
}
