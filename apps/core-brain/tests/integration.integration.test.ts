import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, integration } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de integrações externas — PostgreSQL local (Fase 10)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdIntegrationId: string | undefined;
  let createdGithubIntegrationId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 10 - Integração', displayName: 'Teste Fase 10' })
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
        providerSubject: `dev:teste-fase10-integracao-${personId}`,
        email: `teste-fase10-integracao-${personId}@example.com`,
        emailVerified: true,
      })
      .returning();
    if (!createdIdentity) {
      throw new Error('Falha ao criar identidade de teste.');
    }

    const sessionInfo = await createSession({ personId, identityId: createdIdentity.id });
    sessionToken = sessionInfo.sessionToken;
  });

  afterAll(async () => {
    if (createdIntegrationId) {
      await db.delete(integration).where(eq(integration.id, createdIntegrationId));
    }
    if (createdGithubIntegrationId) {
      await db.delete(integration).where(eq(integration.id, createdGithubIntegrationId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, atualiza e remove (soft delete) uma integração externa real', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/integrations',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        provider: 'github',
        name: 'GitHub — repositório monvi-brain',
        minimalScopes: 'repo:status, pull_requests:read',
        ownerPersonId: personId,
      },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().integration;
    createdIntegrationId = created.id;
    expect(created.status).toBe('draft');
    expect(created.provider).toBe('github');

    const listResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/integrations',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse.json().integrations.some((i: { id: string }) => i.id === createdIntegrationId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/integrations/${createdIntegrationId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().integration.minimalScopes).toBe('repo:status, pull_requests:read');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/integrations/${createdIntegrationId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'active' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().integration.status).toBe('active');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/integrations/${createdIntegrationId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/integrations/${createdIntegrationId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });

  it('retorna 424 ao chamar GET .../github/repository sem GITHUB_PAT configurado', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/integrations',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { provider: 'github', name: 'GitHub — teste de falha de credencial' },
    });
    createdGithubIntegrationId = createResponse.json().integration.id;

    const response = await app.inject({
      method: 'GET',
      url: `/api/v1/integrations/${createdGithubIntegrationId}/github/repository?owner=vfautomacoesn8n&repo=monvi-brain`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(response.statusCode).toBe(424);
  });

  it('retorna 424 ao chamar POST .../github/issues/:issueNumber/comments sem GITHUB_PAT configurado', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/integrations',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { provider: 'github', name: 'GitHub — teste de falha de credencial (comentário)' },
    });
    const createdGithubCommentIntegrationId = createResponse.json().integration.id;

    const response = await app.inject({
      method: 'POST',
      url: `/api/v1/integrations/${createdGithubCommentIntegrationId}/github/issues/1/comments?owner=vfautomacoesn8n&repo=monvi-brain`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { body: 'Comentário de teste.' },
    });
    expect(response.statusCode).toBe(424);

    await db.delete(integration).where(eq(integration.id, createdGithubCommentIntegrationId));
  });

  it('retorna 400 ao chamar POST .../github/issues/:issueNumber/comments em integração não-github', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/integrations',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { provider: 'n8n', name: 'n8n — não é github' },
    });
    const createdNonGithubIntegrationId = createResponse.json().integration.id;

    const response = await app.inject({
      method: 'POST',
      url: `/api/v1/integrations/${createdNonGithubIntegrationId}/github/issues/1/comments?owner=vfautomacoesn8n&repo=monvi-brain`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { body: 'Comentário de teste.' },
    });
    expect(response.statusCode).toBe(400);

    await db.delete(integration).where(eq(integration.id, createdNonGithubIntegrationId));
  });
});
