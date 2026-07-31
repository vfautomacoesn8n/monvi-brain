import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/index.js';

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres_dev_password@localhost:5432/monvi_brain_dev';

export const queryClient = postgres(connectionString, { max: 10, idle_timeout: 20 });
export const db = drizzle(queryClient, { schema });

export async function checkDatabaseHealth(): Promise<boolean> {
  try {
    const result = await queryClient`SELECT 1 as healthy`;
    return Boolean(result && result.length > 0 && result[0]?.healthy === 1);
  } catch (err) {
    return false;
  }
}
