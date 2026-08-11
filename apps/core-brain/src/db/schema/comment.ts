import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { task } from './task.js';
import { person } from './person.js';

export const comment = pgTable('comment', {
  id: uuid('id').primaryKey().defaultRandom(),
  taskId: uuid('task_id').notNull().references(() => task.id, { onDelete: 'cascade' }),
  authorPersonId: uuid('author_person_id').notNull().references(() => person.id, { onDelete: 'cascade' }),
  body: text('body').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
