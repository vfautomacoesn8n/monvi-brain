import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, lead, opportunity } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de oportunidades — PostgreSQL local (Fase 6)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdLeadId: string | undefined;
  let createdOpportunityId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 6 - Oportunidade', displayName: 'Teste Fase 6' })
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
        providerSubject: `dev:teste-fase6-oportunidade-${personId}`,
        email: `teste-fase6-oportunidade-${personId}@example.com`,
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
  });

  afterAll(async () => {
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

  it('cria, lê, atualiza (incluindo perda com motivo) e remove uma oportunidade real', async () => {
    if (!createdLeadId) {
      throw new Error('Lead de teste não disponível.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/opportunities',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Oportunidade Integração Fase 6', leadId: createdLeadId, ownerPersonId: personId },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().opportunity;
    createdOpportunityId = created.id;
    expect(created.stage).toBe('prospecting');

    const listResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/opportunities',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse.json().opportunities.some((o: { id: string }) => o.id === createdOpportunityId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/opportunities/${createdOpportunityId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().opportunity.leadId).toBe(createdLeadId);

    const loseResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/opportunities/${createdOpportunityId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { stage: 'lost', lossReason: 'Orçamento insuficiente' },
    });
    expect(loseResponse.statusCode).toBe(200);
    expect(loseResponse.json().opportunity.stage).toBe('lost');
    expect(loseResponse.json().opportunity.lossReason).toBe('Orçamento insuficiente');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/opportunities/${createdOpportunityId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/opportunities/${createdOpportunityId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
