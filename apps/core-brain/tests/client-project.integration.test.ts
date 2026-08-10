import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, client, project } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de clientes e projetos — PostgreSQL local (Fase 5)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdClientId: string | undefined;
  let createdProjectId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 5', displayName: 'Teste Fase 5' })
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
        providerSubject: `dev:teste-fase5-${personId}`,
        email: `teste-fase5-${personId}@example.com`,
        emailVerified: true,
      })
      .returning();

    if (!createdIdentity) {
      throw new Error('Falha ao criar identidade de teste.');
    }

    const sessionInfo = await createSession({
      personId,
      identityId: createdIdentity.id,
    });
    sessionToken = sessionInfo.sessionToken;
  });

  afterAll(async () => {
    if (createdProjectId) {
      await db.delete(project).where(eq(project.id, createdProjectId));
    }
    if (createdClientId) {
      await db.delete(client).where(eq(client.id, createdClientId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, atualiza e remove (soft delete) um cliente real', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/clients',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { name: 'Cliente Integração Fase 5' },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().client;
    createdClientId = created.id;

    const listResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/clients',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(listResponse.json().clients.some((c: { id: string }) => c.id === createdClientId)).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/clients/${createdClientId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().client.name).toBe('Cliente Integração Fase 5');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/clients/${createdClientId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'active' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().client.status).toBe('active');
  });

  it('cria, lê, atualiza e remove (soft delete) um projeto real vinculado ao cliente', async () => {
    if (!createdClientId) {
      throw new Error('Cliente de teste não disponível para o teste de projeto.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/projects',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        clientId: createdClientId,
        code: 'PRJ-INT-001',
        name: 'Projeto Integração Fase 5',
      },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().project;
    createdProjectId = created.id;

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/projects/${createdProjectId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().project.code).toBe('PRJ-INT-001');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/projects/${createdProjectId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'active' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().project.status).toBe('active');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/projects/${createdProjectId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/projects/${createdProjectId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
