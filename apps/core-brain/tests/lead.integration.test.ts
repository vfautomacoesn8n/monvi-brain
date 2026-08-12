import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, lead } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de leads — PostgreSQL local (Fase 6)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdLeadId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 6 - Lead', displayName: 'Teste Fase 6' })
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
        providerSubject: `dev:teste-fase6-lead-${personId}`,
        email: `teste-fase6-lead-${personId}@example.com`,
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

  it('cria, lê, atualiza e remove (soft delete) um lead real', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/leads',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        name: 'Lead Integração Fase 6',
        companyName: 'Empresa Teste Ltda',
        email: 'lead-integracao@example.com',
        source: 'website',
        ownerPersonId: personId,
      },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().lead;
    createdLeadId = created.id;
    expect(created.status).toBe('new');

    const listResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/leads',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(listResponse.json().leads.some((l: { id: string }) => l.id === createdLeadId)).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/leads/${createdLeadId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().lead.source).toBe('website');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/leads/${createdLeadId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'qualified' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().lead.status).toBe('qualified');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/leads/${createdLeadId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/leads/${createdLeadId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
