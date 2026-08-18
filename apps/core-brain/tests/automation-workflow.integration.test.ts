import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, automationWorkflow } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de workflows de automação — PostgreSQL local (Fase 8)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdAutomationWorkflowId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 8 - Workflow', displayName: 'Teste Fase 8' })
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
        providerSubject: `dev:teste-fase8-workflow-${personId}`,
        email: `teste-fase8-workflow-${personId}@example.com`,
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
    if (createdAutomationWorkflowId) {
      await db.delete(automationWorkflow).where(eq(automationWorkflow.id, createdAutomationWorkflowId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, atualiza e remove (soft delete) um workflow de automação real', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/automation-workflows',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        name: 'Notificar time comercial sobre novo lead',
        triggerType: 'webhook',
        ownerPersonId: personId,
        timeoutSeconds: 120,
      },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().automationWorkflow;
    createdAutomationWorkflowId = created.id;
    expect(created.status).toBe('draft');
    expect(created.timeoutSeconds).toBe(120);

    const listResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/automation-workflows',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse
        .json()
        .automationWorkflows.some((w: { id: string }) => w.id === createdAutomationWorkflowId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/automation-workflows/${createdAutomationWorkflowId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().automationWorkflow.triggerType).toBe('webhook');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/automation-workflows/${createdAutomationWorkflowId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'active', timeoutSeconds: 300 },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().automationWorkflow.status).toBe('active');
    expect(updateResponse.json().automationWorkflow.timeoutSeconds).toBe(300);

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/automation-workflows/${createdAutomationWorkflowId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/automation-workflows/${createdAutomationWorkflowId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
