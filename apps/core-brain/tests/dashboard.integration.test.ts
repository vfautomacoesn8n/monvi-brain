import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, client, project, task, deliverable, risk, approval } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de dashboard de projeto — PostgreSQL local (Fase 5)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdClientId: string | undefined;
  let createdProjectId: string | undefined;
  let createdTaskId: string | undefined;
  let createdDeliverableId: string | undefined;
  let createdRiskId: string | undefined;
  let createdApprovalId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 5 - Dashboard', displayName: 'Teste Fase 5' })
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
        providerSubject: `dev:teste-fase5-dashboard-${personId}`,
        email: `teste-fase5-dashboard-${personId}@example.com`,
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
      payload: { name: 'Cliente Integração Fase 5 - Dashboard' },
    });
    createdClientId = clientResponse.json().client.id;

    const projectResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/projects',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        clientId: createdClientId,
        code: 'PRJ-INT-DASHBOARD-001',
        name: 'Projeto Integração Fase 5 - Dashboard',
      },
    });
    createdProjectId = projectResponse.json().project.id;

    const taskResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/tasks`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Tarefa do dashboard' },
    });
    createdTaskId = taskResponse.json().task.id;

    const deliverableResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/deliverables`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Entregável do dashboard', taskId: createdTaskId },
    });
    createdDeliverableId = deliverableResponse.json().deliverable.id;

    const riskResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/risks`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Risco do dashboard', severity: 'high' },
    });
    createdRiskId = riskResponse.json().risk.id;

    const approvalResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/deliverables/${createdDeliverableId}/approvals`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { approverPersonId: personId },
    });
    createdApprovalId = approvalResponse.json().approval.id;
  });

  afterAll(async () => {
    if (createdApprovalId) {
      await db.delete(approval).where(eq(approval.id, createdApprovalId));
    }
    if (createdRiskId) {
      await db.delete(risk).where(eq(risk.id, createdRiskId));
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
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('agrega contagens reais de tarefas, entregáveis, riscos e aprovações do projeto', async () => {
    if (!createdProjectId) {
      throw new Error('Projeto de teste não disponível.');
    }

    const response = await app.inject({
      method: 'GET',
      url: `/api/v1/projects/${createdProjectId}/dashboard`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(response.statusCode).toBe(200);

    const body = response.json();
    expect(body.tasks.total).toBe(1);
    expect(body.tasks.byStatus.todo).toBe(1);
    expect(body.deliverables.total).toBe(1);
    expect(body.deliverables.byStatus.draft).toBe(1);
    expect(body.risks.total).toBe(1);
    expect(body.risks.byStatus.open).toBe(1);
    expect(body.risks.bySeverity.high).toBe(1);
    expect(body.approvals.total).toBe(1);
    expect(body.approvals.byStatus.pending).toBe(1);
  });
});
