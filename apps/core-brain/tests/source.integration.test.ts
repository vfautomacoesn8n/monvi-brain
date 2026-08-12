import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, source } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de fontes de conhecimento — PostgreSQL local (Fase 7)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdSourceId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 7 - Fonte', displayName: 'Teste Fase 7' })
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
        providerSubject: `dev:teste-fase7-fonte-${personId}`,
        email: `teste-fase7-fonte-${personId}@example.com`,
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
    if (createdSourceId) {
      await db.delete(source).where(eq(source.id, createdSourceId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, atualiza e remove (soft delete) uma fonte real', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/sources',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        name: 'Wiki interna Monvi',
        type: 'manual',
        description: 'Documentação institucional mantida manualmente',
        ownerPersonId: personId,
      },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().source;
    createdSourceId = created.id;
    expect(created.status).toBe('active');

    const listResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/sources',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse.json().sources.some((s: { id: string }) => s.id === createdSourceId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/sources/${createdSourceId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().source.type).toBe('manual');

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/sources/${createdSourceId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'archived' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().source.status).toBe('archived');

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/sources/${createdSourceId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/sources/${createdSourceId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });
});
