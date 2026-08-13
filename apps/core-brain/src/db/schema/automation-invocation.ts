import { pgTable, uuid, varchar, jsonb, pgEnum, integer, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { automationTrigger } from './automation-trigger.js';

export const automationInvocationStatusEnum = pgEnum('automation_invocation_status', [
  'pending',
  'succeeded',
  'dead_letter',
]);

export const automationInvocation = pgTable(
  'automation_invocation',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    automationTriggerId: uuid('automation_trigger_id')
      .notNull()
      .references(() => automationTrigger.id, { onDelete: 'cascade' }),
    payload: jsonb('payload'),
    sourceIp: varchar('source_ip', { length: 45 }),
    idempotencyKey: varchar('idempotency_key', { length: 255 }),
    status: automationInvocationStatusEnum('status').notNull().default('pending'),
    attemptCount: integer('attempt_count').notNull().default(0),
    maxAttempts: integer('max_attempts').notNull().default(3),
    nextAttemptAt: timestamp('next_attempt_at', { withTimezone: true }),
    lastError: text('last_error'),
    receivedAt: timestamp('received_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => {
    return {
      triggerIdempotencyIdx: uniqueIndex('automation_invocation_trigger_idempotency_idx').on(
        table.automationTriggerId,
        table.idempotencyKey
      ),
    };
  }
);
