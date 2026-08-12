import { pgTable, uuid, varchar, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { person } from './person.js';

export const sourceTypeEnum = pgEnum('source_type', [
  'manual',
  'upload',
  'google_drive',
  'website',
  'api',
  'other',
]);

export const sourceStatusEnum = pgEnum('source_status', ['active', 'archived']);

export const source = pgTable('source', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  type: sourceTypeEnum('type').notNull().default('other'),
  description: text('description'),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  status: sourceStatusEnum('status').notNull().default('active'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
