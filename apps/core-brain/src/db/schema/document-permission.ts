import { pgTable, uuid, pgEnum, timestamp } from 'drizzle-orm/pg-core';
import { document } from './document.js';
import { person } from './person.js';
import { role } from './role.js';

export const documentPermissionAccessLevelEnum = pgEnum('document_permission_access_level', [
  'read',
  'write',
]);

export const documentPermission = pgTable('document_permission', {
  id: uuid('id').primaryKey().defaultRandom(),
  documentId: uuid('document_id').notNull().references(() => document.id, { onDelete: 'cascade' }),
  granteePersonId: uuid('grantee_person_id').references(() => person.id, { onDelete: 'cascade' }),
  granteeRoleId: uuid('grantee_role_id').references(() => role.id, { onDelete: 'cascade' }),
  accessLevel: documentPermissionAccessLevelEnum('access_level').notNull(),
  grantedByPersonId: uuid('granted_by_person_id').references(() => person.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
