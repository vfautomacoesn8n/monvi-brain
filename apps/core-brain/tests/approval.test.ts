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

describe('Approval routes — proteção de acesso (Fase 5)', () => {
  it('rejeita POST /deliverables/:deliverableId/approvals sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/deliverables/00000000-0000-0000-0000-000000000000/approvals',
      payload: { approverPersonId: '00000000-0000-0000-0000-000000000001' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /deliverables/:deliverableId/approvals sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/deliverables/00000000-0000-0000-0000-000000000000/approvals',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /approvals/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/approvals/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita PATCH /approvals/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'PATCH',
      url: '/api/v1/approvals/00000000-0000-0000-0000-000000000000',
      payload: { status: 'approved' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita DELETE /approvals/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'DELETE',
      url: '/api/v1/approvals/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });
});
