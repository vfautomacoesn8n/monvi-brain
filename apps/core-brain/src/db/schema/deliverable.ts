import { pgTable, uuid, varchar, pgEnum, text, timestamp } from 'drizzle-orm/pg-core';
import { project } from './project.js';
import { task } from './task.js';
import { person } from './person.js';

export const deliverableStatusEnum = pgEnum('deliverable_status', [
  'draft',
  'in_review',
  'approved',
  'delivered',
  'rejected',
]);

export const deliverable = pgTable('deliverable', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').notNull().references(() => project.id, { onDelete: 'cascade' }),
  taskId: uuid('task_id').references(() => task.id, { onDelete: 'set null' }),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  status: deliverableStatusEnum('status').notNull().default('draft'),
  assigneePersonId: uuid('assignee_person_id').references(() => person.id, { onDelete: 'set null' }),
  dueDate: timestamp('due_date', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
