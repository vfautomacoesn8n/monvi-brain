import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, aiAgent } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de agentes de IA — PostgreSQL local (Fase 9)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdAiAgentId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 9 - Agente', displayName: 'Teste Fase 9' })
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
        providerSubject: `dev:teste-fase9-agente-${personId}`,
        email: `teste-fase9-agente-${personId}@example.com`,
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
    if (createdAiAgentId) {
      await db.delete(aiAgent).where(eq(aiAgent.id, createdAiAgentId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, atualiza e remove (soft delete) um agente de IA real', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/ai-agents',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        name: 'Agente de triagem de leads',
        purpose: 'Classificar leads recebidos por origem e urgência',
        allowedTools: ['search', 'memory-notes'],
        policy: 'Não enviar e-mails sem revisão humana.',
        maxActionsPerRun: 10,
        timeoutSeconds: 60,
        ownerPersonId: personId,
      },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().aiAgent;
    createdAiAgentId = created.id;
    expect(created.status).toBe('draft');
    expect(created.allowedTools).toEqual(['search', 'memory-notes']);
    expect(created.policy).toBe('Não enviar e-mails sem revisão humana.');
    expect(created.maxActionsPerRun).toBe(10);
    expect(created.timeoutSeconds).toBe(60);
    expect(created.requiresHumanApproval).toBe(false);

    const listResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/ai-agents',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(listResponse.json().aiAgents.some((a: { id: string }) => a.id === createdAiAgentId)).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/ai-agents/${createdAiAgentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().aiAgent.purpose).toBe('Classificar leads recebidos por origem e urgência');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/ai-agents/${createdAiAgentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'active', maxActionsPerRun: 5, requiresHumanApproval: true },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().aiAgent.status).toBe('active');
    expect(updateResponse.json().aiAgent.maxActionsPerRun).toBe(5);
    expect(updateResponse.json().aiAgent.requiresHumanApproval).toBe(true);

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/ai-agents/${createdAiAgentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/ai-agents/${createdAiAgentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
