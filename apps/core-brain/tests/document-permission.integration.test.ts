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
  permission,
  rolePermission,
  personRole,
  document,
  documentPermission,
} from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de permissões de documento — PostgreSQL local (Fase 7)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdDocumentId: string | undefined;
  let createdPermissionId: string | undefined;
  let readerRoleId: string | undefined;
  let readerPersonId: string | undefined;
  let readerIdentityId: string | undefined;
  let readerSessionToken: string | undefined;

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

    // Pessoa com papel real (não-admin), só com document:read — para exercitar o
    // caminho de negação (403) de verdade (Task 096, ver nota abaixo).
    const [createdReaderRole] = await db
      .insert(role)
      .values({ name: 'document-reader-teste', description: 'Papel de teste, só leitura de documento', scopeLevel: 'system' })
      .onConflictDoNothing()
      .returning();
    readerRoleId = createdReaderRole?.id;

    if (readerRoleId) {
      const [readPerm] = await db
        .insert(permission)
        .values({ resource: 'document', action: 'read', description: 'Ler documentos' })
        .onConflictDoNothing()
        .returning();
      if (readPerm) {
        await db
          .insert(rolePermission)
          .values({ roleId: readerRoleId, permissionId: readPerm.id })
          .onConflictDoNothing();
      }
    }

    const [createdReaderPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 7 - Leitor sem concessão', displayName: 'Teste Leitor' })
      .returning();
    readerPersonId = createdReaderPerson?.id;

    if (readerPersonId) {
      const [createdReaderIdentity] = await db
        .insert(identity)
        .values({
          personId: readerPersonId,
          provider: 'dev',
          providerSubject: `dev:teste-fase7-leitor-${readerPersonId}`,
          email: `teste-fase7-leitor-${readerPersonId}@example.com`,
          emailVerified: true,
        })
        .returning();
      readerIdentityId = createdReaderIdentity?.id;

      if (readerRoleId) {
        await db.insert(personRole).values({ personId: readerPersonId, roleId: readerRoleId }).onConflictDoNothing();
      }

      if (readerIdentityId) {
        const readerSessionInfo = await createSession({ personId: readerPersonId, identityId: readerIdentityId });
        readerSessionToken = readerSessionInfo.sessionToken;
      }
    }
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
    if (readerPersonId) {
      await db.delete(personRole).where(eq(personRole.personId, readerPersonId));
      await db.delete(identity).where(eq(identity.personId, readerPersonId));
      await db.delete(person).where(eq(person.id, readerPersonId));
    }
    if (readerRoleId) {
      await db.delete(rolePermission).where(eq(rolePermission.roleId, readerRoleId));
      await db.delete(role).where(eq(role.id, readerRoleId));
    }
    await app.close();
    await queryClient.end();
  });

  // Nota (Task 096): até a introdução de person_role, toda sessão de teste resolvia
  // para o papel `admin` (join fixo em `validateSessionToken`, Fase 4), então o caminho
  // de negação (403) nunca era exercitável aqui. Isso foi corrigido — o teste abaixo usa
  // uma sessão real com um papel não-admin, sem nenhuma concessão granular, para provar
  // o 403 de verdade. O teste seguinte, com a sessão admin original, continua validando o
  // ciclo de vida real da concessão/revogação (que ainda depende do bypass de admin para
  // gerenciar permissões, comportamento inalterado por esta task).

  it('nega acesso (403) a um documento confidencial para uma sessão real sem concessão', async () => {
    if (!createdDocumentId || !readerSessionToken) {
      throw new Error('Documento ou sessão de leitor de teste não disponíveis.');
    }

    const response = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${readerSessionToken}` },
    });
    expect(response.statusCode).toBe(403);
  });

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
