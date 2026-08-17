import { pgTable, uuid, varchar, text, jsonb, pgEnum, integer, boolean, timestamp } from 'drizzle-orm/pg-core';
import { person } from './person.js';

export const aiAgentStatusEnum = pgEnum('ai_agent_status', [
  'draft',
  'configured',
  'validated',
  'simulated',
  'pilot',
  'active',
  'suspended',
  'retired',
  'archived',
  'blocked',
  'quarantined',
  'incident',
  'deprecated',
]);

export const aiAgentRiskLevelEnum = pgEnum('ai_agent_risk_level', ['low', 'medium', 'high', 'critical']);

export const aiAgent = pgTable('ai_agent', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  purpose: text('purpose'),
  specialty: varchar('specialty', { length: 255 }),
  scope: text('scope'),
  skills: jsonb('skills'),
  allowedTools: jsonb('allowed_tools'),
  authorizedSourceIds: jsonb('authorized_source_ids'),
  repositories: jsonb('repositories'),
  policy: text('policy'),
  forbiddenActions: text('forbidden_actions'),
  maxActionsPerRun: integer('max_actions_per_run'),
  timeoutSeconds: integer('timeout_seconds'),
  riskLevel: aiAgentRiskLevelEnum('risk_level'),
  requiresHumanApproval: boolean('requires_human_approval').notNull().default(false),
  escalationCriteria: text('escalation_criteria'),
  reportFormat: text('report_format'),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  reviewerPersonId: uuid('reviewer_person_id').references(() => person.id, { onDelete: 'set null' }),
  status: aiAgentStatusEnum('status').notNull().default('draft'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
