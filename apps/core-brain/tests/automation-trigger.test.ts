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

describe('Automation trigger routes — proteção de acesso (Fase 8)', () => {
  it('rejeita POST /automation-workflows/:workflowId/triggers sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/automation-workflows/00000000-0000-0000-0000-000000000000/triggers',
      payload: { triggerType: 'manual' },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /automation-workflows/:workflowId/triggers sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/automation-workflows/00000000-0000-0000-0000-000000000000/triggers',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /automation-triggers/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/automation-triggers/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita PATCH /automation-triggers/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'PATCH',
      url: '/api/v1/automation-triggers/00000000-0000-0000-0000-000000000000',
      payload: { isActive: false },
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita DELETE /automation-triggers/:id sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'DELETE',
      url: '/api/v1/automation-triggers/00000000-0000-0000-0000-000000000000',
    });

    expect(response.statusCode).toBe(401);
  });

  it('rejeita GET /automation-triggers/:id/invocations sem token com 401', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/automation-triggers/00000000-0000-0000-0000-000000000000/invocations',
    });

    expect(response.statusCode).toBe(401);
  });

  it('POST /automation-triggers/:token/invoke é público — não rejeita com 401 mesmo sem token de sessão', async () => {
    app = await buildTestApp();

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/automation-triggers/token-inexistente/invoke',
      payload: { ping: true },
    });

    // Sem banco disponível neste ambiente, a rota falha ao consultar o gatilho
    // (500), mas o ponto testado aqui é que ela nunca retorna 401 — não há
    // nenhum preHandler de autenticação nesta rota, por design (webhooks reais
    // não conseguem autenticar com Bearer token da Monvi).
    expect(response.statusCode).not.toBe(401);
  });
});
