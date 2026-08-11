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

describe('Dependency routes — proteção de acesso (Fase 5)', () => {
  it('rejeita POST /tasks/:taskId/dependencies sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/tasks/00000000-0000-0000-0000-000000000000/dependencies',
      payload: { dependsOnTaskId: '00000000-0000-0000-0000-000000000001' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /tasks/:taskId/dependencies sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/tasks/00000000-0000-0000-0000-000000000000/dependencies',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /dependencies/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/dependencies/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita PATCH /dependencies/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'PATCH',
      url: '/api/v1/dependencies/00000000-0000-0000-0000-000000000000',
      payload: { notes: 'Nova nota' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita DELETE /dependencies/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'DELETE',
      url: '/api/v1/dependencies/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });
});
