import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, lead, opportunity, activity } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de atividades — PostgreSQL local (Fase 6)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdLeadId: string | undefined;
  let createdOpportunityId: string | undefined;
  let createdActivityId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 6 - Atividade', displayName: 'Teste Fase 6' })
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
        providerSubject: `dev:teste-fase6-atividade-${personId}`,
        email: `teste-fase6-atividade-${personId}@example.com`,
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
      payload: { name: 'Lead de origem', source: 'website' },
    });
    createdLeadId = leadResponse.json().lead.id;

    const opportunityResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/opportunities',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Oportunidade de origem', leadId: createdLeadId },
    });
    createdOpportunityId = opportunityResponse.json().opportunity.id;
  });

  afterAll(async () => {
    if (createdActivityId) {
      await db.delete(activity).where(eq(activity.id, createdActivityId));
    }
    if (createdOpportunityId) {
      await db.delete(opportunity).where(eq(opportunity.id, createdOpportunityId));
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

  it('rejeita uma atividade sem lead nem oportunidade com 400', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/activities',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { type: 'follow_up' },
    });
    expect(response.statusCode).toBe(400);
  });

  it('cria, lê, atualiza (conclui) e remove uma atividade real vinculada à oportunidade', async () => {
    if (!createdOpportunityId) {
      throw new Error('Oportunidade de teste não disponível.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/activities',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { opportunityId: createdOpportunityId, type: 'proposal', ownerPersonId: personId },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().activity;
    createdActivityId = created.id;
    expect(created.status).toBe('scheduled');

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/activities?opportunityId=${createdOpportunityId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse.json().activities.some((a: { id: string }) => a.id === createdActivityId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/activities/${createdActivityId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().activity.type).toBe('proposal');

    const completeResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/activities/${createdActivityId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'done', completedAt: new Date().toISOString() },
    });
    expect(completeResponse.statusCode).toBe(200);
    expect(completeResponse.json().activity.status).toBe('done');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/activities/${createdActivityId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/activities/${createdActivityId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
