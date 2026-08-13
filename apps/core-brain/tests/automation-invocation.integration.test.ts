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

describe('Fluxo real de fila, retries, idempotência e dead-letter — PostgreSQL local (Fase 8)', () => {
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
      .values({ fullName: 'Teste Fase 8 - Invocação', displayName: 'Teste Fase 8' })
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
        providerSubject: `dev:teste-fase8-invocacao-${personId}`,
        email: `teste-fase8-invocacao-${personId}@example.com`,
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
      payload: { name: 'Workflow para invocação de teste' },
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

  it('deduplica invocações com a mesma idempotencyKey', async () => {
    const firstResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-triggers/${webhookToken}/invoke`,
      payload: { idempotencyKey: 'evento-123', event: 'lead.created' },
    });
    expect(firstResponse.statusCode).toBe(202);
    const firstInvocationId = firstResponse.json().automationInvocation.id;

    const secondResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-triggers/${webhookToken}/invoke`,
      payload: { idempotencyKey: 'evento-123', event: 'lead.created' },
    });
    expect(secondResponse.statusCode).toBe(200);
    expect(secondResponse.json().deduplicated).toBe(true);
    expect(secondResponse.json().automationInvocation.id).toBe(firstInvocationId);
  });

  it('aparece na fila enquanto pendente, e some após ser bem-sucedida', async () => {
    const invokeResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-triggers/${webhookToken}/invoke`,
      payload: { idempotencyKey: 'evento-fila' },
    });
    const invocationId = invokeResponse.json().automationInvocation.id;

    const queueBeforeResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/automation-invocations/queue',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(queueBeforeResponse.statusCode).toBe(200);
    expect(
      queueBeforeResponse
        .json()
        .automationInvocations.some((i: { id: string }) => i.id === invocationId)
    ).toBe(true);

    const attemptResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-invocations/${invocationId}/attempt`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { success: true },
    });
    expect(attemptResponse.statusCode).toBe(200);
    expect(attemptResponse.json().automationInvocation.status).toBe('succeeded');

    const queueAfterResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/automation-invocations/queue',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(
      queueAfterResponse
        .json()
        .automationInvocations.some((i: { id: string }) => i.id === invocationId)
    ).toBe(false);

    const secondAttemptResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-invocations/${invocationId}/attempt`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { success: true },
    });
    expect(secondAttemptResponse.statusCode).toBe(409);
  });

  it('vai para dead_letter após esgotar as tentativas máximas', async () => {
    const invokeResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-triggers/${webhookToken}/invoke`,
      payload: { idempotencyKey: 'evento-dead-letter' },
    });
    const invocationId = invokeResponse.json().automationInvocation.id;

    let lastAttemptResponse;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      lastAttemptResponse = await app.inject({
        method: 'POST',
        url: `/api/v1/automation-invocations/${invocationId}/attempt`,
        headers: { authorization: `Bearer ${sessionToken}` },
        payload: { success: false, error: `falha simulada ${attempt}` },
      });
      expect(lastAttemptResponse.statusCode).toBe(200);
    }

    expect(lastAttemptResponse?.json().automationInvocation.status).toBe('dead_letter');
    expect(lastAttemptResponse?.json().automationInvocation.attemptCount).toBe(3);

    const finalAttemptResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/automation-invocations/${invocationId}/attempt`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { success: true },
    });
    expect(finalAttemptResponse.statusCode).toBe(409);
  });
});
