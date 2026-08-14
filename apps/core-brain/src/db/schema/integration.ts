import { pgTable, uuid, varchar, text, pgEnum, timestamp } from 'drizzle-orm/pg-core';
import { person } from './person.js';

export const integrationProviderEnum = pgEnum('integration_provider', [
  'github',
  'google_workspace',
  'forms_email',
  'whatsapp',
  'crm_spreadsheets',
  'n8n',
  'nuvemshop',
  'analytics_media',
  'other',
]);

export const integrationStatusEnum = pgEnum('integration_status', ['draft', 'active', 'paused', 'revoked']);

export const integration = pgTable('integration', {
  id: uuid('id').primaryKey().defaultRandom(),
  provider: integrationProviderEnum('provider').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  minimalScopes: text('minimal_scopes'),
  ownerPersonId: uuid('owner_person_id').references(() => person.id, { onDelete: 'set null' }),
  status: integrationStatusEnum('status').notNull().default('draft'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
