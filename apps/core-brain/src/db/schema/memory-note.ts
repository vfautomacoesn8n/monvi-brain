import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { person } from './person.js';

export const memoryNote = pgTable('memory_note', {
  id: uuid('id').primaryKey().defaultRandom(),
  entityType: varchar('entity_type', { length: 100 }),
  entityId: uuid('entity_id'),
  content: text('content').notNull(),
  authorPersonId: uuid('author_person_id').references(() => person.id, { onDelete: 'set null' }),
  expiresAt: timestamp('expires_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
