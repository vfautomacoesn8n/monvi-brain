import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, client, project, task, deliverable, approval } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de aprovações — PostgreSQL local (Fase 5)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let approverPersonId: string;
  let createdClientId: string | undefined;
  let createdProjectId: string | undefined;
  let createdTaskId: string | undefined;
  let createdDeliverableId: string | undefined;
  let createdApprovalId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 5 - Aprovação', displayName: 'Teste Fase 5' })
      .returning();
    if (!createdPerson) {
      throw new Error('Falha ao criar pessoa de teste (autenticação).');
    }
    personId = createdPerson.id;

    const [approverPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 5 - Aprovador', displayName: 'Aprovador Teste' })
      .returning();
    if (!approverPerson) {
      throw new Error('Falha ao criar pessoa de teste (aprovador).');
    }
    approverPersonId = approverPerson.id;

    const [createdIdentity] = await db
      .insert(identity)
      .values({
        personId,
        provider: 'dev',
        providerSubject: `dev:teste-fase5-aprovacao-${personId}`,
        email: `teste-fase5-aprovacao-${personId}@example.com`,
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
      payload: { name: 'Cliente Integração Fase 5 - Aprovações' },
    });
    createdClientId = clientResponse.json().client.id;

    const projectResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/projects',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        clientId: createdClientId,
        code: 'PRJ-INT-APPROVAL-001',
        name: 'Projeto Integração Fase 5 - Aprovações',
      },
    });
    createdProjectId = projectResponse.json().project.id;

    const taskResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/tasks`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Tarefa de origem do entregável' },
    });
    createdTaskId = taskResponse.json().task.id;

    const deliverableResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/deliverables`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Entregável de origem da aprovação', taskId: createdTaskId },
    });
    createdDeliverableId = deliverableResponse.json().deliverable.id;
  });

  afterAll(async () => {
    if (createdApprovalId) {
      await db.delete(approval).where(eq(approval.id, createdApprovalId));
    }
    if (createdDeliverableId) {
      await db.delete(deliverable).where(eq(deliverable.id, createdDeliverableId));
    }
    if (createdTaskId) {
      await db.delete(task).where(eq(task.id, createdTaskId));
    }
    if (createdProjectId) {
      await db.delete(project).where(eq(project.id, createdProjectId));
    }
    if (createdClientId) {
      await db.delete(client).where(eq(client.id, createdClientId));
    }
    if (approverPersonId) {
      await db.delete(person).where(eq(person.id, approverPersonId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, decide e remove (soft delete) uma aprovação real vinculada ao entregável', async () => {
    if (!createdDeliverableId) {
      throw new Error('Entregável de teste não disponível.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/deliverables/${createdDeliverableId}/approvals`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { approverPersonId, notes: 'Solicitação inicial de aprovação' },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().approval;
    createdApprovalId = created.id;
    expect(created.status).toBe('pending');
    expect(created.decidedAt).toBeNull();

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/deliverables/${createdDeliverableId}/approvals`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse.json().approvals.some((a: { id: string }) => a.id === createdApprovalId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/approvals/${createdApprovalId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().approval.approverPersonId).toBe(approverPersonId);

    const decideResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/approvals/${createdApprovalId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'approved', notes: 'Aprovado sem ressalvas' },
    });
    expect(decideResponse.statusCode).toBe(200);
    expect(decideResponse.json().approval.status).toBe('approved');
    expect(decideResponse.json().approval.decidedAt).not.toBeNull();

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/approvals/${createdApprovalId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/approvals/${createdApprovalId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
