import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, client, project, risk } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de riscos — PostgreSQL local (Fase 5)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdClientId: string | undefined;
  let createdProjectId: string | undefined;
  let createdRiskId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 5 - Risco', displayName: 'Teste Fase 5' })
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
        providerSubject: `dev:teste-fase5-risco-${personId}`,
        email: `teste-fase5-risco-${personId}@example.com`,
        emailVerified: true,
      })
      .returning();
    if (!createdIdentity) {
      throw new Error('Falha ao criar identidade de teste.');
    }

    const sessionInfo = await createSession({ personId, identityId: createdIdentity.id });
    sessionToken = sessionInfo.sessionToken;

    const clientResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/clients',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { name: 'Cliente Integração Fase 5 - Riscos' },
    });
    createdClientId = clientResponse.json().client.id;

    const projectResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/projects',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        clientId: createdClientId,
        code: 'PRJ-INT-RISK-001',
        name: 'Projeto Integração Fase 5 - Riscos',
      },
    });
    createdProjectId = projectResponse.json().project.id;
  });

  afterAll(async () => {
    if (createdRiskId) {
      await db.delete(risk).where(eq(risk.id, createdRiskId));
    }
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

  it('cria, lê, atualiza e remove (soft delete) um risco real vinculado ao projeto', async () => {
    if (!createdProjectId) {
      throw new Error('Projeto de teste não disponível.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/risks`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Risco Integração Fase 5', severity: 'high', ownerPersonId: personId },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().risk;
    createdRiskId = created.id;
    expect(created.status).toBe('open');

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/projects/${createdProjectId}/risks`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(listResponse.json().risks.some((r: { id: string }) => r.id === createdRiskId)).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/risks/${createdRiskId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().risk.severity).toBe('high');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/risks/${createdRiskId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'mitigated' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().risk.status).toBe('mitigated');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/risks/${createdRiskId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/risks/${createdRiskId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
