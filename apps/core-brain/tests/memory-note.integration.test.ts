import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, lead, memoryNote } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de memória operacional — PostgreSQL local (Fase 7)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdLeadId: string | undefined;
  let createdMemoryNoteId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 7 - Memória', displayName: 'Teste Fase 7' })
      .returning();
    if (!createdPerson) {
      throw new Error('Falha ao criar pessoa de teste.');
    }
    personId = createdPerson.id;

    const [createdIdentity] = await db
      .insert(identity)
      .values({
        personId,
        provider: 'dev',
        providerSubject: `dev:teste-fase7-memoria-${personId}`,
        email: `teste-fase7-memoria-${personId}@example.com`,
        emailVerified: true,
      })
      .returning();
    if (!createdIdentity) {
      throw new Error('Falha ao criar identidade de teste.');
    }

    const sessionInfo = await createSession({ personId, identityId: createdIdentity.id });
    sessionToken = sessionInfo.sessionToken;

    const leadResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/leads',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { name: 'Lead para nota de memória', source: 'website' },
    });
    createdLeadId = leadResponse.json().lead.id;
  });

  afterAll(async () => {
    if (createdMemoryNoteId) {
      await db.delete(memoryNote).where(eq(memoryNote.id, createdMemoryNoteId));
    }
    if (createdLeadId) {
      await db.delete(lead).where(eq(lead.id, createdLeadId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, atualiza e remove (soft delete) uma nota de memória real vinculada a um lead', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/memory-notes',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        content: 'Lead pediu para só ser contatado depois das 14h.',
        entityType: 'lead',
        entityId: createdLeadId,
      },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().memoryNote;
    createdMemoryNoteId = created.id;
    expect(created.entityType).toBe('lead');
    expect(created.authorPersonId).toBe(personId);

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/memory-notes?entityType=lead&entityId=${createdLeadId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse
        .json()
        .memoryNotes.some((n: { id: string }) => n.id === createdMemoryNoteId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/memory-notes/${createdMemoryNoteId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().memoryNote.content).toContain('14h');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/memory-notes/${createdMemoryNoteId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { content: 'Lead pediu para só ser contatado depois das 16h.' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().memoryNote.content).toContain('16h');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/memory-notes/${createdMemoryNoteId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/memory-notes/${createdMemoryNoteId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
