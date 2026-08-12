import { pgTable, uuid, varchar, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { lead } from './lead.js';
import { person } from './person.js';

export const opportunityStageEnum = pgEnum('opportunity_stage', [
  'prospecting',
  'qualification',
  'proposal',
  'negotiation',
  'won',
  'lost',
]);

export const opportunity = pgTable('opportunity', {
  id: uuid('id').primaryKey().defaultRandom(),
  leadId: uuid('lead_id').references(() => lead.id, { onDelete: 'set null' }),
  title: varchar('title', { length: 255 }).notNull(),
  stage: opportunityStageEnum('stage').notNull().default('prospecting'),
  lossReason: text('loss_reason'),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  expectedCloseDate: timestamp('expected_close_date', { withTimezone: true }),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
