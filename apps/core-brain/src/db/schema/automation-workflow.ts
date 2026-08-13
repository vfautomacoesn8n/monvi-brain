import { pgTable, uuid, varchar, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { person } from './person.js';

export const automationTriggerTypeEnum = pgEnum('automation_trigger_type', [
  'manual',
  'webhook',
  'schedule',
  'event',
]);

export const automationWorkflowStatusEnum = pgEnum('automation_workflow_status', [
  'draft',
  'active',
  'paused',
  'archived',
]);

export const automationWorkflow = pgTable('automation_workflow', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  triggerType: automationTriggerTypeEnum('trigger_type').notNull().default('manual'),
  status: automationWorkflowStatusEnum('status').notNull().default('draft'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
