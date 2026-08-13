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

describe('Document permission routes — proteção de acesso (Fase 7)', () => {
  it('rejeita POST /documents/:documentId/permissions sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/documents/00000000-0000-0000-0000-000000000000/permissions',
      payload: { granteePersonId: '00000000-0000-0000-0000-000000000000', accessLevel: 'read' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /documents/:documentId/permissions sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/documents/00000000-0000-0000-0000-000000000000/permissions',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita DELETE /permissions/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'DELETE',
      url: '/api/v1/permissions/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });
});
