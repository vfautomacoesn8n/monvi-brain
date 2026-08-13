import { pgTable, uuid, varchar, boolean, timestamp } from 'drizzle-orm/pg-core';
import { automationWorkflow, automationTriggerTypeEnum } from './automation-workflow.js';

export const automationTrigger = pgTable('automation_trigger', {
  id: uuid('id').primaryKey().defaultRandom(),
  automationWorkflowId: uuid('automation_workflow_id')
    .notNull()
    .references(() => automationWorkflow.id, { onDelete: 'cascade' }),
  triggerType: automationTriggerTypeEnum('trigger_type').notNull().default('manual'),
  webhookToken: varchar('webhook_token', { length: 64 }).unique(),
  scheduleCron: varchar('schedule_cron', { length: 120 }),
  eventName: varchar('event_name', { length: 120 }),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
