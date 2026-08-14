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

describe('AI agent routes — proteção de acesso (Fase 9)', () => {
  it('rejeita POST /ai-agents sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/ai-agents',
      payload: { name: 'Agente de teste' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /ai-agents sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/ai-agents',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /ai-agents/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/ai-agents/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita PATCH /ai-agents/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'PATCH',
      url: '/api/v1/ai-agents/00000000-0000-0000-0000-000000000000',
      payload: { status: 'active' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita DELETE /ai-agents/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'DELETE',
      url: '/api/v1/ai-agents/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });
});
