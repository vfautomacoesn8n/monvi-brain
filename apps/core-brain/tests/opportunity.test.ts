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

describe('Opportunity routes — proteção de acesso (Fase 6)', () => {
  it('rejeita POST /opportunities sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/opportunities',
      payload: { title: 'Oportunidade Teste' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /opportunities sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/opportunities',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /opportunities/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/opportunities/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita PATCH /opportunities/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'PATCH',
      url: '/api/v1/opportunities/00000000-0000-0000-0000-000000000000',
      payload: { stage: 'won' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita DELETE /opportunities/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'DELETE',
      url: '/api/v1/opportunities/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });
});
