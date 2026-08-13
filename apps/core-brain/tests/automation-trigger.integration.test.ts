import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import {
  person,
  identity,
  role,
  automationWorkflow,
  automationTrigger,
  automationInvocation,
} from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de gatilhos e webhooks de automação — PostgreSQL local (Fase 8)', () => {
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
      .values({ fullName: 'Teste Fase 8 - Gatilho', displayName: 'Teste Fase 8' })
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
        providerSubject: `dev:teste-fase8-gatilho-${personId}`,
        email: `teste-fase8-gatilho-${personId}@example.com`,
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
      payload: { name: 'Workflow para gatilho de teste' },
    });
    createdWorkflowId = workflowResponse.json().automationWorkflow.id;
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

  it('cria um gatilho de webhook real e gera um token', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-workflows/${createdWorkflowId}/triggers`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { triggerType: 'webhook' },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().automationTrigger;
    createdTriggerId = created.id;
    webhookToken = created.webhookToken;
    expect(webhookToken).toBeTruthy();

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/automation-workflows/${createdWorkflowId}/triggers`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse
        .json()
        .automationTriggers.some((t: { id: string }) => t.id === createdTriggerId)
    ).toBe(true);
  });

  it('recebe uma chamada real de webhook sem autenticação Monvi e registra a invocação', async () => {
    if (!webhookToken) {
      throw new Error('Token de webhook de teste não disponível.');
    }

    const invokeResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-triggers/${webhookToken}/invoke`,
      payload: { event: 'lead.created', leadId: '00000000-0000-0000-0000-000000000000' },
    });
    expect(invokeResponse.statusCode).toBe(202);
    expect(invokeResponse.json().automationInvocation.automationTriggerId).toBe(createdTriggerId);

    const invocationsResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/automation-triggers/${createdTriggerId}/invocations`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(invocationsResponse.statusCode).toBe(200);
    expect(invocationsResponse.json().automationInvocations).toHaveLength(1);
    expect(invocationsResponse.json().automationInvocations[0].payload).toMatchObject({
      event: 'lead.created',
    });
  });

  it('rejeita invocação com token inexistente com 404', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/automation-triggers/token-que-nao-existe/invoke',
      payload: {},
    });
    expect(response.statusCode).toBe(404);
  });
});
