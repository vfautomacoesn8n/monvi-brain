import type { FastifyInstance } from 'fastify';
import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db/client.js';
import { client, contact } from '../../db/schema/index.js';
import { authenticateRequest } from '../middlewares/authenticate.js';
import { requirePermission } from '../middlewares/authorize.js';
import { recordAuditEvent } from '../../modules/audit/audit.service.js';

const createContactSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  roleDescription: z.string().max(120).optional(),
  isPrimary: z.boolean().optional(),
});

const updateContactSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  email: z.string().email().optional(),
  phone: z.string().max(30).optional(),
  roleDescription: z.string().max(120).optional(),
  isPrimary: z.boolean().optional(),
});

const clientIdParamsSchema = z.object({
  clientId: z.string().uuid(),
});

const idParamsSchema = z.object({
  id: z.string().uuid(),
});

function requestIdOf(headers: Record<string, unknown>): string | null {
  return (headers['x-request-id'] as string) || null;
}

async function findActiveClient(clientId: string) {
  const [found] = await db
    .select({ id: client.id })
    .from(client)
    .where(and(eq(client.id, clientId), isNull(client.deletedAt)));
  return found;
}

export async function registerContactRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    '/clients/:clientId/contacts',
    { preHandler: [authenticateRequest, requirePermission('contact:write')] },
    async (request, reply) => {
      const paramsResult = clientIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de cliente inválido.',
        });
      }

      const foundClient = await findActiveClient(paramsResult.data.clientId);
      if (!foundClient) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Cliente não encontrado.',
        });
      }

      const bodyResult = createContactSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de contato inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [created] = await db
        .insert(contact)
        .values({ ...bodyResult.data, clientId: paramsResult.data.clientId })
        .returning();

      await recordAuditEvent({
        eventType: 'contact:created',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        clientId: paramsResult.data.clientId,
        actionDetails: { contactId: created?.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(201).send({ contact: created });
    }
  );

  app.get(
    '/clients/:clientId/contacts',
    { preHandler: [authenticateRequest, requirePermission('contact:read')] },
    async (request, reply) => {
      const paramsResult = clientIdParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de cliente inválido.',
        });
      }

      const foundClient = await findActiveClient(paramsResult.data.clientId);
      if (!foundClient) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Cliente não encontrado.',
        });
      }

      const contacts = await db
        .select()
        .from(contact)
        .where(and(eq(contact.clientId, paramsResult.data.clientId), isNull(contact.deletedAt)));

      return { contacts };
    }
  );

  app.get(
    '/contacts/:id',
    { preHandler: [authenticateRequest, requirePermission('contact:read')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de contato inválido.',
        });
      }

      const [found] = await db
        .select()
        .from(contact)
        .where(and(eq(contact.id, paramsResult.data.id), isNull(contact.deletedAt)));

      if (!found) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Contato não encontrado.',
        });
      }

      return { contact: found };
    }
  );

  app.patch(
    '/contacts/:id',
    { preHandler: [authenticateRequest, requirePermission('contact:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de contato inválido.',
        });
      }

      const bodyResult = updateContactSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Dados de atualização de contato inválidos.',
          details: bodyResult.error.flatten(),
        });
      }

      const [updated] = await db
        .update(contact)
        .set({ ...bodyResult.data, updatedAt: new Date() })
        .where(and(eq(contact.id, paramsResult.data.id), isNull(contact.deletedAt)))
        .returning();

      if (!updated) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Contato não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'contact:updated',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        clientId: updated.clientId,
        actionDetails: { contactId: updated.id, changes: bodyResult.data },
        requestId: requestIdOf(request.headers),
      });

      return { contact: updated };
    }
  );

  app.delete(
    '/contacts/:id',
    { preHandler: [authenticateRequest, requirePermission('contact:write')] },
    async (request, reply) => {
      const paramsResult = idParamsSchema.safeParse(request.params);
      if (!paramsResult.success) {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Identificador de contato inválido.',
        });
      }

      const [deleted] = await db
        .update(contact)
        .set({ deletedAt: new Date() })
        .where(and(eq(contact.id, paramsResult.data.id), isNull(contact.deletedAt)))
        .returning();

      if (!deleted) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Contato não encontrado.',
        });
      }

      await recordAuditEvent({
        eventType: 'contact:deleted',
        severity: 'info',
        actorPersonId: request.user?.personId ?? null,
        clientId: deleted.clientId,
        actionDetails: { contactId: deleted.id },
        requestId: requestIdOf(request.headers),
      });

      return reply.status(204).send();
    }
  );
}
