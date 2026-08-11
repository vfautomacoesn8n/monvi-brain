import { pgTable, uuid, varchar, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { project } from './project.js';
import { person } from './person.js';

export const riskSeverityEnum = pgEnum('risk_severity', [
  'low',
  'medium',
  'high',
  'critical',
]);

export const riskStatusEnum = pgEnum('risk_status', [
  'open',
  'mitigated',
  'closed',
]);

export const risk = pgTable('risk', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').notNull().references(() => project.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  severity: riskSeverityEnum('severity').notNull().default('medium'),
  status: riskStatusEnum('status').notNull().default('open'),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
