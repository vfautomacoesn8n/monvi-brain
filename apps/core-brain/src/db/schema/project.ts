import { pgTable, uuid, varchar, pgEnum, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { client } from './client.js';
import { person } from './person.js';
import { role } from './role.js';

export const projectStatusEnum = pgEnum('project_status', [
  'planning',
  'active',
  'paused',
  'completed',
  'archived',
]);

export const project = pgTable('project', {
  id: uuid('id').primaryKey().defaultRandom(),
  clientId: uuid('client_id').notNull().references(() => client.id, { onDelete: 'cascade' }),
  code: varchar('code', { length: 60 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  status: projectStatusEnum('status').notNull().default('planning'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
}, (table) => {
  return {
    clientCodeIdx: uniqueIndex('project_client_code_idx').on(table.clientId, table.code),
  };
});

export const projectMembership = pgTable('project_membership', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').notNull().references(() => project.id, { onDelete: 'cascade' }),
  personId: uuid('person_id').notNull().references(() => person.id, { onDelete: 'cascade' }),
  roleId: uuid('role_id').notNull().references(() => role.id, { onDelete: 'cascade' }),
  joinedAt: timestamp('joined_at', { withTimezone: true }).notNull().defaultNow(),
  leftAt: timestamp('left_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});
