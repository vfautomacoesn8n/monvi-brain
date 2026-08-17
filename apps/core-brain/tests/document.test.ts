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

describe('Document routes — proteção de acesso (Fase 7)', () => {
  it('rejeita POST /documents sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/documents',
      payload: { title: 'Documento de teste' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /documents sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/documents',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /documents/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/documents/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita PATCH /documents/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'PATCH',
      url: '/api/v1/documents/00000000-0000-0000-0000-000000000000',
      payload: { status: 'archived' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita DELETE /documents/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'DELETE',
      url: '/api/v1/documents/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita POST /documents/:documentId/versions sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/documents/00000000-0000-0000-0000-000000000000/versions',
      payload: { content: 'Conteúdo de teste' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /documents/:documentId/versions sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/documents/00000000-0000-0000-0000-000000000000/versions',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita POST /documents/:documentId/versions/upload sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/documents/00000000-0000-0000-0000-000000000000/versions/upload',
    });

    expect(response.statusCode).toBe(401);
  });
});
