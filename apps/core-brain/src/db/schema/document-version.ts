import { pgTable, uuid, integer, text, varchar, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { document } from './document.js';
import { person } from './person.js';

export const documentVersion = pgTable(
  'document_version',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    documentId: uuid('document_id').notNull().references(() => document.id, { onDelete: 'cascade' }),
    versionNumber: integer('version_number').notNull(),
    content: text('content'),
    originalFilename: varchar('original_filename', { length: 255 }),
    mimeType: varchar('mime_type', { length: 255 }),
    fileSizeBytes: integer('file_size_bytes'),
    storagePath: text('storage_path'),
    createdByPersonId: uuid('created_by_person_id').references(() => person.id, { onDelete: 'set null' }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => {
    return {
      documentVersionNumberIdx: uniqueIndex('document_version_document_number_idx').on(
        table.documentId,
        table.versionNumber
      ),
    };
  }
);
