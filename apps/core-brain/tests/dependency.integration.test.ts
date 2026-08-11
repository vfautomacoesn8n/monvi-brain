import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, client, project, task, dependency } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de dependências — PostgreSQL local (Fase 5)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdClientId: string | undefined;
  let createdProjectId: string | undefined;
  let taskAId: string | undefined;
  let taskBId: string | undefined;
  let createdDependencyId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 5 - Dependência', displayName: 'Teste Fase 5' })
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
        providerSubject: `dev:teste-fase5-dependencia-${personId}`,
        email: `teste-fase5-dependencia-${personId}@example.com`,
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
      payload: { name: 'Cliente Integração Fase 5 - Dependências' },
    });
    createdClientId = clientResponse.json().client.id;

    const projectResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/projects',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        clientId: createdClientId,
        code: 'PRJ-INT-DEPENDENCY-001',
        name: 'Projeto Integração Fase 5 - Dependências',
      },
    });
    createdProjectId = projectResponse.json().project.id;

    const taskAResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/tasks`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Tarefa A (depende de B)' },
    });
    taskAId = taskAResponse.json().task.id;

    const taskBResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/tasks`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Tarefa B (bloqueia A)' },
    });
    taskBId = taskBResponse.json().task.id;
  });

  afterAll(async () => {
    if (createdDependencyId) {
      await db.delete(dependency).where(eq(dependency.id, createdDependencyId));
    }
    if (taskAId) {
      await db.delete(task).where(eq(task.id, taskAId));
    }
    if (taskBId) {
      await db.delete(task).where(eq(task.id, taskBId));
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

  it('rejeita uma tarefa dependendo de si mesma', async () => {
    if (!taskAId) {
      throw new Error('Tarefa A não disponível.');
    }

    const response = await app.inject({
      method: 'POST',
      url: `/api/v1/tasks/${taskAId}/dependencies`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { dependsOnTaskId: taskAId },
    });

    expect(response.statusCode).toBe(400);
  });

  it('cria, lê, atualiza e remove (soft delete) uma dependência real entre tarefas', async () => {
    if (!taskAId || !taskBId) {
      throw new Error('Tarefas de teste não disponíveis.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/tasks/${taskAId}/dependencies`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { dependsOnTaskId: taskBId, notes: 'A só pode começar depois de B' },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().dependency;
    createdDependencyId = created.id;

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/tasks/${taskAId}/dependencies`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse.json().dependencies.some((d: { id: string }) => d.id === createdDependencyId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/dependencies/${createdDependencyId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().dependency.dependsOnTaskId).toBe(taskBId);

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/dependencies/${createdDependencyId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { notes: 'Nota atualizada' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().dependency.notes).toBe('Nota atualizada');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/dependencies/${createdDependencyId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/dependencies/${createdDependencyId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
