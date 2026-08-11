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

describe('Comment routes — proteção de acesso (Fase 5)', () => {
  it('rejeita POST /tasks/:taskId/comments sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/tasks/00000000-0000-0000-0000-000000000000/comments',
      payload: { body: 'Comentário de teste' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /tasks/:taskId/comments sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/tasks/00000000-0000-0000-0000-000000000000/comments',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /comments/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/comments/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita PATCH /comments/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'PATCH',
      url: '/api/v1/comments/00000000-0000-0000-0000-000000000000',
      payload: { body: 'Novo texto' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita DELETE /comments/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'DELETE',
      url: '/api/v1/comments/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });
});
