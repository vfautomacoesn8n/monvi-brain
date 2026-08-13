import { and, eq, isNull } from 'drizzle-orm';
import { db } from '../../db/client.js';
import { documentPermission } from '../../db/schema/index.js';
import type { AuthenticatedUser } from '../../types/fastify.js';

const RESTRICTED_CONFIDENTIALITY_LEVELS = new Set(['confidential', 'restricted']);

export async function hasGranularDocumentAccess(
  user: AuthenticatedUser | undefined,
  doc: { id: string; confidentiality: string },
  requiredLevel: 'read' | 'write'
): Promise<boolean> {
  if (!RESTRICTED_CONFIDENTIALITY_LEVELS.has(doc.confidentiality)) {
    return true;
  }
  if (!user) {
    return false;
  }
  if (user.roleName === 'admin') {
    return true;
  }

  const grants = await db
    .select()
    .from(documentPermission)
    .where(and(eq(documentPermission.documentId, doc.id), isNull(documentPermission.deletedAt)));

  const relevantGrants = grants.filter(
    (grant) =>
      grant.granteePersonId === user.personId ||
      (user.roleId !== null && grant.granteeRoleId === user.roleId)
  );

  if (requiredLevel === 'write') {
    return relevantGrants.some((grant) => grant.accessLevel === 'write');
  }
  return relevantGrants.some((grant) => grant.accessLevel === 'read' || grant.accessLevel === 'write');
}
