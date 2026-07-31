import { pgTable, uuid, varchar, pgEnum, text, timestamp, primaryKey } from 'drizzle-orm/pg-core';

export const scopeLevelEnum = pgEnum('scope_level', ['system', 'client', 'project']);

export const role = pgTable('role', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 60 }).notNull().unique(),
  description: text('description'),
  scopeLevel: scopeLevelEnum('scope_level').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const permission = pgTable('permission', {
  id: uuid('id').primaryKey().defaultRandom(),
  resource: varchar('resource', { length: 120 }).notNull(),
  action: varchar('action', { length: 60 }).notNull(),
  description: text('description'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export const rolePermission = pgTable('role_permission', {
  roleId: uuid('role_id').notNull().references(() => role.id, { onDelete: 'cascade' }),
  permissionId: uuid('permission_id').notNull().references(() => permission.id, { onDelete: 'cascade' }),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.roleId, table.permissionId] }),
  };
});
