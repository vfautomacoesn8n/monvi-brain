import { pgTable, uuid, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { deliverable } from './deliverable.js';
import { person } from './person.js';

export const approvalStatusEnum = pgEnum('approval_status', [
  'pending',
  'approved',
  'rejected',
]);

export const approval = pgTable('approval', {
  id: uuid('id').primaryKey().defaultRandom(),
  deliverableId: uuid('deliverable_id').notNull().references(() => deliverable.id, { onDelete: 'cascade' }),
  approverPersonId: uuid('approver_person_id').notNull().references(() => person.id, { onDelete: 'cascade' }),
  status: approvalStatusEnum('status').notNull().default('pending'),
  notes: text('notes'),
  decidedAt: timestamp('decided_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
