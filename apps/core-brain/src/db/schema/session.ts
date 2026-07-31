import { pgTable, uuid, varchar, text, timestamp, pgEnum, jsonb } from 'drizzle-orm/pg-core';
import { person } from './person.js';
import { identity } from './identity.js';
import { client } from './client.js';
import { project } from './project.js';

export const session = pgTable('session', {
  id: uuid('id').primaryKey().defaultRandom(),
  personId: uuid('person_id').notNull().references(() => person.id, { onDelete: 'cascade' }),
  identityId: uuid('identity_id').notNull().references(() => identity.id, { onDelete: 'cascade' }),
  sessionTokenHash: varchar('session_token_hash', { length: 255 }).notNull().unique(),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  revokedAt: timestamp('revoked_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export const auditSeverityEnum = pgEnum('audit_severity', ['info', 'warn', 'error', 'critical']);

export const auditEvent = pgTable('audit_event', {
  id: uuid('id').primaryKey().defaultRandom(),
  eventType: varchar('event_type', { length: 120 }).notNull(),
  severity: auditSeverityEnum('severity').notNull().default('info'),
  actorPersonId: uuid('actor_person_id').references(() => person.id, { onDelete: 'set null' }),
  clientId: uuid('client_id').references(() => client.id, { onDelete: 'set null' }),
  projectId: uuid('project_id').references(() => project.id, { onDelete: 'set null' }),
  actionDetails: jsonb('action_details').notNull(),
  requestId: varchar('request_id', { length: 120 }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});
