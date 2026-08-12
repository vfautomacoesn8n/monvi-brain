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

describe('Activity routes — proteção de acesso (Fase 6)', () => {
  it('rejeita POST /activities sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/activities',
      payload: { leadId: '00000000-0000-0000-0000-000000000000', type: 'follow_up' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /activities sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/activities',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /activities/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/activities/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita PATCH /activities/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'PATCH',
      url: '/api/v1/activities/00000000-0000-0000-0000-000000000000',
      payload: { status: 'done' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita DELETE /activities/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'DELETE',
      url: '/api/v1/activities/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });
});
