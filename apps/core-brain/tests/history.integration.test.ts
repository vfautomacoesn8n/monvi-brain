import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, client, project, task } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de histórico de mudanças — PostgreSQL local (Fase 5)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdClientId: string | undefined;
  let createdProjectId: string | undefined;
  let createdTaskId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 5 - Histórico', displayName: 'Teste Fase 5' })
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
        providerSubject: `dev:teste-fase5-historico-${personId}`,
        email: `teste-fase5-historico-${personId}@example.com`,
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
      payload: { name: 'Cliente Integração Fase 5 - Histórico' },
    });
    createdClientId = clientResponse.json().client.id;

    const projectResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/projects',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        clientId: createdClientId,
        code: 'PRJ-INT-HISTORY-001',
        name: 'Projeto Integração Fase 5 - Histórico',
      },
    });
    createdProjectId = projectResponse.json().project.id;
  });

  afterAll(async () => {
    if (createdTaskId) {
      await db.delete(task).where(eq(task.id, createdTaskId));
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

  it('lista o histórico real de criação e atualização de uma tarefa', async () => {
    if (!createdProjectId) {
      throw new Error('Projeto de teste não disponível.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/tasks`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Tarefa Integração Fase 5 - Histórico' },
    });
    createdTaskId = createResponse.json().task.id;

    await app.inject({
      method: 'PATCH',
      url: `/api/v1/tasks/${createdTaskId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'in_progress' },
    });

    const historyResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/history?entityType=task&entityId=${createdTaskId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(historyResponse.statusCode).toBe(200);
    const events = historyResponse.json().history;
    expect(events.some((e: { eventType: string }) => e.eventType === 'task:created')).toBe(true);
    expect(events.some((e: { eventType: string }) => e.eventType === 'task:updated')).toBe(true);
    expect(events.every((e: { createdAt: string }) => Boolean(e.createdAt))).toBe(true);
  });

  it('rejeita entityType desconhecido com 400', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/history?entityType=unknown_entity&entityId=00000000-0000-0000-0000-000000000000',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(response.statusCode).toBe(400);
  });
});
