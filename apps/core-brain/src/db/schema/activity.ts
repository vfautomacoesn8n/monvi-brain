import { pgTable, uuid, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { lead } from './lead.js';
import { opportunity } from './opportunity.js';
import { person } from './person.js';

export const activityTypeEnum = pgEnum('activity_type', [
  'diagnosis',
  'proposal',
  'follow_up',
  'call',
  'meeting',
  'other',
]);

export const activityStatusEnum = pgEnum('activity_status', [
  'scheduled',
  'done',
  'cancelled',
]);

export const activity = pgTable('activity', {
  id: uuid('id').primaryKey().defaultRandom(),
  leadId: uuid('lead_id').references(() => lead.id, { onDelete: 'set null' }),
  opportunityId: uuid('opportunity_id').references(() => opportunity.id, { onDelete: 'set null' }),
  type: activityTypeEnum('type').notNull().default('other'),
  status: activityStatusEnum('status').notNull().default('scheduled'),
  scheduledAt: timestamp('scheduled_at', { withTimezone: true }),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
