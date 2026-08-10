import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, client, project, contact, projectMembership } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de contatos e participação em projeto — PostgreSQL local (Fase 5)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let memberPersonId: string;
  let roleId: string;
  let createdClientId: string | undefined;
  let createdProjectId: string | undefined;
  let createdContactId: string | undefined;
  let createdMembershipId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [actorRole] = await db
      .insert(role)
      .values({ name: 'member_teste_fase5', description: 'Papel de teste Fase 5', scopeLevel: 'project' })
      .onConflictDoNothing()
      .returning();
    roleId = actorRole
      ? actorRole.id
      : (await db.select({ id: role.id }).from(role).where(eq(role.name, 'member_teste_fase5')))[0]!.id;

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 5 - Contato', displayName: 'Teste Fase 5' })
      .returning();
    if (!createdPerson) {
      throw new Error('Falha ao criar pessoa de teste (autenticação).');
    }
    personId = createdPerson.id;

    const [memberPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 5 - Membro de Projeto', displayName: 'Membro Teste' })
      .returning();
    if (!memberPerson) {
      throw new Error('Falha ao criar pessoa de teste (membro).');
    }
    memberPersonId = memberPerson.id;

    const [createdIdentity] = await db
      .insert(identity)
      .values({
        personId,
        provider: 'dev',
        providerSubject: `dev:teste-fase5-contato-${personId}`,
        email: `teste-fase5-contato-${personId}@example.com`,
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
      payload: { name: 'Cliente Integração Fase 5 - Contatos' },
    });
    createdClientId = clientResponse.json().client.id;

    const projectResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/projects',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { clientId: createdClientId, code: 'PRJ-INT-CONTACT-001', name: 'Projeto Integração Fase 5 - Contatos' },
    });
    createdProjectId = projectResponse.json().project.id;
  });

  afterAll(async () => {
    if (createdMembershipId) {
      await db.delete(projectMembership).where(eq(projectMembership.id, createdMembershipId));
    }
    if (createdContactId) {
      await db.delete(contact).where(eq(contact.id, createdContactId));
    }
    if (createdProjectId) {
      await db.delete(project).where(eq(project.id, createdProjectId));
    }
    if (createdClientId) {
      await db.delete(client).where(eq(client.id, createdClientId));
    }
    if (memberPersonId) {
      await db.delete(person).where(eq(person.id, memberPersonId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    if (roleId) {
      await db.delete(role).where(eq(role.id, roleId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, atualiza e remove (soft delete) um contato real vinculado ao cliente', async () => {
    if (!createdClientId) {
      throw new Error('Cliente de teste não disponível.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/clients/${createdClientId}/contacts`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { name: 'Contato Integração Fase 5', email: 'contato-integracao@example.com', isPrimary: true },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().contact;
    createdContactId = created.id;

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/clients/${createdClientId}/contacts`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(listResponse.json().contacts.some((c: { id: string }) => c.id === createdContactId)).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/contacts/${createdContactId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().contact.email).toBe('contato-integracao@example.com');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/contacts/${createdContactId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { phone: '+55 11 90000-0000' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().contact.phone).toBe('+55 11 90000-0000');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/contacts/${createdContactId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/contacts/${createdContactId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });

  it('adiciona, lista e encerra uma participação real em projeto', async () => {
    if (!createdProjectId) {
      throw new Error('Projeto de teste não disponível.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/projects/${createdProjectId}/memberships`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { personId: memberPersonId, roleId },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().membership;
    createdMembershipId = created.id;

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/projects/${createdProjectId}/memberships`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse.json().memberships.some((m: { id: string }) => m.id === createdMembershipId)
    ).toBe(true);

    const endResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/projects/${createdProjectId}/memberships/${createdMembershipId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(endResponse.statusCode).toBe(200);
    expect(endResponse.json().membership.leftAt).not.toBeNull();

    const listAfterEndResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/projects/${createdProjectId}/memberships`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(
      listAfterEndResponse.json().memberships.some((m: { id: string }) => m.id === createdMembershipId)
    ).toBe(false);
  });
});
