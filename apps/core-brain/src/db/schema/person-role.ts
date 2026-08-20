import { pgTable, uuid, timestamp, primaryKey } from 'drizzle-orm/pg-core';
import { person } from './person.js';
import { role } from './role.js';

export const personRole = pgTable(
  'person_role',
  {
    personId: uuid('person_id').notNull().references(() => person.id, { onDelete: 'cascade' }),
    roleId: uuid('role_id').notNull().references(() => role.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.personId, table.roleId] }),
    };
  }
);
