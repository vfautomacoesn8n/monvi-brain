import { pgTable, uuid, varchar, pgEnum, boolean, text, timestamp } from 'drizzle-orm/pg-core';
import { person } from './person.js';

export const profileTypeEnum = pgEnum('profile_type', [
  'ceo',
  'helpper_individual',
  'internal_staff',
  'client_user',
]);

export const profile = pgTable('profile', {
  id: uuid('id').primaryKey().defaultRandom(),
  personId: uuid('person_id').notNull().references(() => person.id, { onDelete: 'cascade' }),
  profileType: profileTypeEnum('profile_type').notNull(),
  title: varchar('title', { length: 120 }).notNull(),
  bio: text('bio'),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
