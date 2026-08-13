import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, document, documentPermission } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de permissões de documento — PostgreSQL local (Fase 7)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdDocumentId: string | undefined;
  let createdPermissionId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 7 - Permissão', displayName: 'Teste Fase 7' })
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
        providerSubject: `dev:teste-fase7-permissao-${personId}`,
        email: `teste-fase7-permissao-${personId}@example.com`,
        emailVerified: true,
      })
      .returning();
    if (!createdIdentity) {
      throw new Error('Falha ao criar identidade de teste.');
    }

    const sessionInfo = await createSession({ personId, identityId: createdIdentity.id });
    sessionToken = sessionInfo.sessionToken;

    const documentResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/documents',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Documento confidencial de teste', confidentiality: 'confidential' },
    });
    createdDocumentId = documentResponse.json().document.id;
  });

  afterAll(async () => {
    if (createdPermissionId) {
      await db.delete(documentPermission).where(eq(documentPermission.id, createdPermissionId));
    }
    if (createdDocumentId) {
      await db.delete(document).where(eq(document.id, createdDocumentId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  // Nota: a sessão de teste (`dev-login`/`createSession`) sempre resolve para o papel
  // `admin` (join fixo em `validateSessionToken`, Fase 4), então este teste não consegue
  // exercitar o caminho de negação (403) sem uma permissão concedida — o bypass de admin
  // sempre permite. O que é validado aqui é o ciclo de vida real da concessão/revogação.

  it('concede, lista e revoga uma permissão real sobre um documento confidencial', async () => {
    if (!createdDocumentId) {
      throw new Error('Documento de teste não disponível.');
    }

    const createResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${createdDocumentId}/permissions`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { granteePersonId: personId, accessLevel: 'read' },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().documentPermission;
    createdPermissionId = created.id;
    expect(created.accessLevel).toBe('read');

    const rejectBothResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${createdDocumentId}/permissions`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { granteePersonId: personId, granteeRoleId: personId, accessLevel: 'read' },
    });
    expect(rejectBothResponse.statusCode).toBe(400);

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}/permissions`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse
        .json()
        .documentPermissions.some((p: { id: string }) => p.id === createdPermissionId)
    ).toBe(true);

    const getDocumentResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getDocumentResponse.statusCode).toBe(200);

    const revokeResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/permissions/${createdPermissionId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(revokeResponse.statusCode).toBe(204);

    const listAfterRevokeResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}/permissions`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listAfterRevokeResponse.statusCode).toBe(200);
    expect(
      listAfterRevokeResponse
        .json()
        .documentPermissions.some((p: { id: string }) => p.id === createdPermissionId)
    ).toBe(false);
  });
});
