import { pgTable, uuid, varchar, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { automationTrigger } from './automation-trigger.js';

export const automationInvocation = pgTable('automation_invocation', {
  id: uuid('id').primaryKey().defaultRandom(),
  automationTriggerId: uuid('automation_trigger_id')
    .notNull()
    .references(() => automationTrigger.id, { onDelete: 'cascade' }),
  payload: jsonb('payload'),
  sourceIp: varchar('source_ip', { length: 45 }),
  receivedAt: timestamp('received_at', { withTimezone: true }).notNull().defaultNow(),
});
