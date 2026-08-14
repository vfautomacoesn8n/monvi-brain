import { pgTable, uuid, varchar, text, jsonb, pgEnum, integer, timestamp } from 'drizzle-orm/pg-core';
import { person } from './person.js';

export const aiAgentStatusEnum = pgEnum('ai_agent_status', ['draft', 'active', 'paused', 'archived']);

export const aiAgent = pgTable('ai_agent', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  purpose: text('purpose'),
  allowedTools: jsonb('allowed_tools'),
  authorizedSourceIds: jsonb('authorized_source_ids'),
  policy: text('policy'),
  maxActionsPerRun: integer('max_actions_per_run'),
  timeoutSeconds: integer('timeout_seconds'),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  status: aiAgentStatusEnum('status').notNull().default('draft'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
