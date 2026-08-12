import { pgTable, uuid, varchar, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { source } from './source.js';
import { person } from './person.js';

export const documentStatusEnum = pgEnum('document_status', ['draft', 'published', 'archived']);

export const document = pgTable('document', {
  id: uuid('id').primaryKey().defaultRandom(),
  sourceId: uuid('source_id').references(() => source.id, { onDelete: 'set null' }),
  title: varchar('title', { length: 255 }).notNull(),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  status: documentStatusEnum('status').notNull().default('draft'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
