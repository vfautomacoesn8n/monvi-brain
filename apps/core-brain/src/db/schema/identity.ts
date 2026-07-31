import { pgTable, uuid, varchar, boolean, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { person } from './person.js';

export const identity = pgTable('identity', {
  id: uuid('id').primaryKey().defaultRandom(),
  personId: uuid('person_id').notNull().references(() => person.id, { onDelete: 'cascade' }),
  provider: varchar('provider', { length: 60 }).notNull(),
  providerSubject: varchar('provider_subject', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  emailVerified: boolean('email_verified').notNull().default(false),
  hostedDomain: varchar('hosted_domain', { length: 120 }),
  lastAuthenticatedAt: timestamp('last_authenticated_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
}, (table) => {
  return {
    providerSubjectIdx: uniqueIndex('identity_provider_subject_idx').on(table.provider, table.providerSubject),
  };
});
