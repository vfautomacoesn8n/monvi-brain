import { eq, and, gt, isNull } from 'drizzle-orm';
import { db } from '../../db/client.js';
import {
  session,
  person,
  identity,
  profile,
  role,
  permission,
  rolePermission,
  personRole,
} from '../../db/schema/index.js';
import { generateSessionToken, hashToken } from './tokens.js';
import type { AuthenticatedUser } from '../../types/fastify.js';

export interface CreateSessionParams {
  personId: string;
  identityId: string;
  ipAddress?: string | undefined;
  userAgent?: string | undefined;
  expiresInDays?: number | undefined;
}

export interface CreateSessionResult {
  sessionToken: string;
  sessionId: string;
  expiresAt: Date;
}

export async function createSession(params: CreateSessionParams): Promise<CreateSessionResult> {
  const rawToken = generateSessionToken();
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(Date.now() + (params.expiresInDays || 7) * 24 * 60 * 60 * 1000);

  const [newSession] = await db.insert(session).values({
    personId: params.personId,
    identityId: params.identityId,
    sessionTokenHash: tokenHash,
    ipAddress: params.ipAddress || null,
    userAgent: params.userAgent || null,
    expiresAt,
  }).returning();

  if (!newSession) {
    throw new Error('Falha ao criar sessão no banco de dados.');
  }

  return {
    sessionToken: rawToken,
    sessionId: newSession.id,
    expiresAt: newSession.expiresAt,
  };
}

export async function validateSessionToken(rawToken: string): Promise<AuthenticatedUser | null> {
  if (!rawToken || typeof rawToken !== 'string') return null;

  try {
    const tokenHash = hashToken(rawToken);
    const now = new Date();

    const [sessionRecord] = await db
      .select({
        sessionId: session.id,
        personId: person.id,
        fullName: person.fullName,
        email: identity.email,
        profileId: profile.id,
        profileType: profile.profileType,
      })
      .from(session)
      .innerJoin(person, eq(session.personId, person.id))
      .innerJoin(identity, eq(session.identityId, identity.id))
      .leftJoin(profile, eq(profile.personId, person.id))
      .where(
        and(
          eq(session.sessionTokenHash, tokenHash),
          gt(session.expiresAt, now),
          isNull(session.revokedAt)
        )
      );

    if (!sessionRecord) return null;

    // Resolve o papel real da pessoa via person_role; quando não há atribuição
    // explícita, cai de volta para 'admin' — preserva o comportamento de antes desta
    // tabela existir (Task 096), já que nenhuma pessoa tinha papel atribuído até então.
    const [explicitRole] = await db
      .select({ roleId: role.id, roleName: role.name })
      .from(personRole)
      .innerJoin(role, eq(personRole.roleId, role.id))
      .where(eq(personRole.personId, sessionRecord.personId))
      .limit(1);

    const resolvedRole =
      explicitRole ??
      (await db
        .select({ roleId: role.id, roleName: role.name })
        .from(role)
        .where(eq(role.name, 'admin'))
        .limit(1)
        .then((rows) => rows[0]));

    // Resolve permissions
    let permissionsList: string[] = ['core_brain:read'];
    if (resolvedRole?.roleId) {
      const rolePerms = await db
        .select({ resource: permission.resource, action: permission.action })
        .from(rolePermission)
        .innerJoin(permission, eq(rolePermission.permissionId, permission.id))
        .where(eq(rolePermission.roleId, resolvedRole.roleId));

      if (rolePerms.length > 0) {
        permissionsList = rolePerms.map((p) => `${p.resource}:${p.action}`);
      }
    }

    return {
      personId: sessionRecord.personId,
      fullName: sessionRecord.fullName,
      email: sessionRecord.email,
      profileId: sessionRecord.profileId,
      profileType: sessionRecord.profileType,
      roleId: resolvedRole?.roleId ?? null,
      roleName: resolvedRole?.roleName ?? null,
      permissions: permissionsList,
      sessionId: sessionRecord.sessionId,
    };
  } catch (err) {
    return null;
  }
}

export async function revokeSessionToken(rawToken: string): Promise<boolean> {
  if (!rawToken) return false;
  try {
    const tokenHash = hashToken(rawToken);

    const [updated] = await db
      .update(session)
      .set({ revokedAt: new Date() })
      .where(and(eq(session.sessionTokenHash, tokenHash), isNull(session.revokedAt)))
      .returning();

    return Boolean(updated);
  } catch (err) {
    return false;
  }
}
