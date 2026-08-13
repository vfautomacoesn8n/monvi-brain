import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, document, documentVersion } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de busca textual — PostgreSQL local (Fase 7)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdDocumentId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 7 - Busca', displayName: 'Teste Fase 7' })
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
        providerSubject: `dev:teste-fase7-busca-${personId}`,
        email: `teste-fase7-busca-${personId}@example.com`,
        emailVerified: true,
      })
      .returning();
    if (!createdIdentity) {
      throw new Error('Falha ao criar identidade de teste.');
    }

    const sessionInfo = await createSession({ personId, identityId: createdIdentity.id });
    sessionToken = sessionInfo.sessionToken;

    const documentResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/documents',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Guia de integração com WhatsApp Business' },
    });
    createdDocumentId = documentResponse.json().document.id;

    await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${createdDocumentId}/versions`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        content: 'Este documento descreve o processo de integração do Monvi Brain com a WhatsApp Business Platform.',
      },
    });
  });

  afterAll(async () => {
    if (createdDocumentId) {
      await db.delete(documentVersion).where(eq(documentVersion.documentId, createdDocumentId));
      await db.delete(document).where(eq(document.id, createdDocumentId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('rejeita busca sem o parâmetro q com 400', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/search',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(response.statusCode).toBe(400);
  });

  it('encontra um documento real pelo título e pelo conteúdo da versão mais recente', async () => {
    const byTitleResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/search?q=WhatsApp',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(byTitleResponse.statusCode).toBe(200);
    expect(
      byTitleResponse
        .json()
        .results.some((r: { documentId: string }) => r.documentId === createdDocumentId)
    ).toBe(true);

    const byContentResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/search?q=Monvi+Brain',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(byContentResponse.statusCode).toBe(200);
    expect(
      byContentResponse
        .json()
        .results.some((r: { documentId: string }) => r.documentId === createdDocumentId)
    ).toBe(true);

    const noMatchResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/search?q=termoquenaoexisteemnadadocumento',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(noMatchResponse.statusCode).toBe(200);
    expect(
      noMatchResponse
        .json()
        .results.some((r: { documentId: string }) => r.documentId === createdDocumentId)
    ).toBe(false);
  });
});
