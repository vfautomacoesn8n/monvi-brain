import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, source, document, documentVersion } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de documentos e versões — PostgreSQL local (Fase 7)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdSourceId: string | undefined;
  let createdDocumentId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 7 - Documento', displayName: 'Teste Fase 7' })
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
        providerSubject: `dev:teste-fase7-documento-${personId}`,
        email: `teste-fase7-documento-${personId}@example.com`,
        emailVerified: true,
      })
      .returning();
    if (!createdIdentity) {
      throw new Error('Falha ao criar identidade de teste.');
    }

    const sessionInfo = await createSession({ personId, identityId: createdIdentity.id });
    sessionToken = sessionInfo.sessionToken;

    const sourceResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/sources',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { name: 'Fonte para documento', type: 'manual' },
    });
    createdSourceId = sourceResponse.json().source.id;
  });

  afterAll(async () => {
    if (createdDocumentId) {
      await db.delete(documentVersion).where(eq(documentVersion.documentId, createdDocumentId));
      await db.delete(document).where(eq(document.id, createdDocumentId));
    }
    if (createdSourceId) {
      await db.delete(source).where(eq(source.id, createdSourceId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, atualiza e remove (soft delete) um documento real', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/documents',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Documento Integração Fase 7', sourceId: createdSourceId, ownerPersonId: personId },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().document;
    createdDocumentId = created.id;
    expect(created.status).toBe('draft');

    const listResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/documents',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse.json().documents.some((d: { id: string }) => d.id === createdDocumentId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().document.sourceId).toBe(createdSourceId);

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'published' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().document.status).toBe('published');
  });

  it('cria versões sequenciais imutáveis para um documento real', async () => {
    if (!createdDocumentId) {
      throw new Error('Documento de teste não disponível.');
    }

    const firstVersionResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${createdDocumentId}/versions`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { content: 'Conteúdo da primeira versão.' },
    });
    expect(firstVersionResponse.statusCode).toBe(201);
    expect(firstVersionResponse.json().documentVersion.versionNumber).toBe(1);

    const secondVersionResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${createdDocumentId}/versions`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { content: 'Conteúdo da segunda versão.' },
    });
    expect(secondVersionResponse.statusCode).toBe(201);
    expect(secondVersionResponse.json().documentVersion.versionNumber).toBe(2);

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}/versions`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(listResponse.json().documentVersions).toHaveLength(2);

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
