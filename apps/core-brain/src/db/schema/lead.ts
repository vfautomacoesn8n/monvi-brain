import { pgTable, uuid, varchar, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { person } from './person.js';

export const leadSourceEnum = pgEnum('lead_source', [
  'referral',
  'website',
  'social_media',
  'event',
  'cold_outreach',
  'other',
]);

export const leadStatusEnum = pgEnum('lead_status', [
  'new',
  'contacted',
  'qualified',
  'disqualified',
  'converted',
]);

export const lead = pgTable('lead', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  companyName: varchar('company_name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 30 }),
  source: leadSourceEnum('source').notNull().default('other'),
  status: leadStatusEnum('status').notNull().default('new'),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
