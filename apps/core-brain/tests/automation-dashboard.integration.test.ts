import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, automationWorkflow, automationTrigger, automationInvocation } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de métricas de automação — PostgreSQL local (Fase 8)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdWorkflowId: string | undefined;
  let createdTriggerId: string | undefined;
  let webhookToken: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 8 - Métricas', displayName: 'Teste Fase 8' })
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
        providerSubject: `dev:teste-fase8-metricas-${personId}`,
        email: `teste-fase8-metricas-${personId}@example.com`,
        emailVerified: true,
      })
      .returning();
    if (!createdIdentity) {
      throw new Error('Falha ao criar identidade de teste.');
    }

    const sessionInfo = await createSession({ personId, identityId: createdIdentity.id });
    sessionToken = sessionInfo.sessionToken;

    const workflowResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/automation-workflows',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { name: 'Workflow para métricas de teste' },
    });
    createdWorkflowId = workflowResponse.json().automationWorkflow.id;

    const triggerResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-workflows/${createdWorkflowId}/triggers`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { triggerType: 'webhook' },
    });
    createdTriggerId = triggerResponse.json().automationTrigger.id;
    webhookToken = triggerResponse.json().automationTrigger.webhookToken;
  });

  afterAll(async () => {
    if (createdTriggerId) {
      await db.delete(automationInvocation).where(eq(automationInvocation.automationTriggerId, createdTriggerId));
      await db.delete(automationTrigger).where(eq(automationTrigger.id, createdTriggerId));
    }
    if (createdWorkflowId) {
      await db.delete(automationWorkflow).where(eq(automationWorkflow.id, createdWorkflowId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('agrega contagens reais de workflows e invocações por status', async () => {
    const invokeResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-triggers/${webhookToken}/invoke`,
      payload: { idempotencyKey: 'evento-metricas' },
    });
    expect(invokeResponse.statusCode).toBe(202);

    const dashboardResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/automations/dashboard',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(dashboardResponse.statusCode).toBe(200);

    const body = dashboardResponse.json();
    expect(body.workflows.total).toBeGreaterThanOrEqual(1);
    expect(body.workflows.byStatus.draft).toBeGreaterThanOrEqual(1);
    expect(body.invocations.total).toBeGreaterThanOrEqual(1);
    expect(body.invocations.byStatus.pending).toBeGreaterThanOrEqual(1);
  });
});
