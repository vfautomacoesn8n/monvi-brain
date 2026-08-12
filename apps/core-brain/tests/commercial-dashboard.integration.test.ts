import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, lead, opportunity, activity } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de indicadores comerciais — PostgreSQL local (Fase 6)', () => {
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
      .values({ fullName: 'Teste Fase 6 - Indicadores', displayName: 'Teste Fase 6' })
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
        providerSubject: `dev:teste-fase6-indicadores-${personId}`,
        email: `teste-fase6-indicadores-${personId}@example.com`,
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
      payload: { name: 'Lead para indicadores', source: 'website' },
    });
    createdLeadId = leadResponse.json().lead.id;

    const opportunityResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/opportunities',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Oportunidade para indicadores', leadId: createdLeadId },
    });
    createdOpportunityId = opportunityResponse.json().opportunity.id;

    const activityResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/activities',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { opportunityId: createdOpportunityId, type: 'proposal' },
    });
    createdActivityId = activityResponse.json().activity.id;
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

  it('agrega contagens reais de leads, oportunidades e atividades', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/commercial/dashboard',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(response.statusCode).toBe(200);

    const body = response.json();
    expect(body.leads.total).toBeGreaterThanOrEqual(1);
    expect(body.leads.byStatus.new).toBeGreaterThanOrEqual(1);
    expect(body.opportunities.total).toBeGreaterThanOrEqual(1);
    expect(body.opportunities.byStage.prospecting).toBeGreaterThanOrEqual(1);
    expect(body.activities.total).toBeGreaterThanOrEqual(1);
    expect(body.activities.byStatus.scheduled).toBeGreaterThanOrEqual(1);
    expect(body.activities.byType.proposal).toBeGreaterThanOrEqual(1);
  });
});
