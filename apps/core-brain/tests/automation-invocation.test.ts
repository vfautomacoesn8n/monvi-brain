import { describe, expect, it, afterEach } from 'vitest';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';

let app: FastifyInstance | undefined;

afterEach(async () => {
  if (app !== undefined) {
    await app.close();
    app = undefined;
  }
});

async function buildTestApp(): Promise<FastifyInstance> {
  return buildApp(
    loadConfig({
      NODE_ENV: 'test',
      LOG_LEVEL: 'silent',
    })
  );
}

describe('Automation invocation routes — proteção de acesso (Fase 8)', () => {
  it('rejeita GET /automation-invocations/queue sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/automation-invocations/queue',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita POST /automation-invocations/:id/attempt sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/automation-invocations/00000000-0000-0000-0000-000000000000/attempt',
      payload: { success: true },
    });

    expect(response.statusCode).toBe(401);
  });
});
