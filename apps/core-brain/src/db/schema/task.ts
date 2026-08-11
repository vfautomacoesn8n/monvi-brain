import { pgTable, uuid, varchar, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { project } from './project.js';
import { person } from './person.js';

export const taskStatusEnum = pgEnum('task_status', [
  'todo',
  'in_progress',
  'blocked',
  'done',
  'cancelled',
]);

export const task = pgTable('task', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').notNull().references(() => project.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  status: taskStatusEnum('status').notNull().default('todo'),
  assigneePersonId: uuid('assignee_person_id').references(() => person.id, { onDelete: 'set null' }),
  dueDate: timestamp('due_date', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
