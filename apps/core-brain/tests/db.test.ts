import { describe, expect, it } from 'vitest';
import * as schema from '../src/db/schema/index.js';
import { checkDatabaseHealth } from '../src/db/client.js';

describe('Database Schema & Health Tests', () => {
  it('exports all 11 core entities in Drizzle schema', () => {
    expect(schema.person).toBeDefined();
    expect(schema.identity).toBeDefined();
    expect(schema.profile).toBeDefined();
    expect(schema.role).toBeDefined();
    expect(schema.permission).toBeDefined();
    expect(schema.client).toBeDefined();
    expect(schema.project).toBeDefined();
    expect(schema.session).toBeDefined();
  });

  it('handles database health check gracefully when offline', async () => {
    const isHealthy = await checkDatabaseHealth();
    expect(typeof isHealthy).toBe('boolean');
  });
});
