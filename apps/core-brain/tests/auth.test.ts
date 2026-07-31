import { describe, expect, it, afterEach } from 'vitest';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { generateSessionToken, hashToken } from '../src/modules/auth/tokens.js';

let app: FastifyInstance | undefined;

afterEach(async () => {
  if (app !== undefined) {
    await app.close();
    app = undefined;
  }
});

describe('Auth & RBAC Security Tests', () => {
  it('generates and hashes session tokens deterministically', () => {
    const token = generateSessionToken();
    expect(token).toHaveLength(64);

    const hash1 = hashToken(token);
    const hash2 = hashToken(token);
    expect(hash1).toEqual(hash2);
    expect(hash1).toHaveLength(64);
  });

  it('rejects access to protected endpoint without token with 401 Unauthorized', async () => {
    app = await buildApp(
      loadConfig({
        NODE_ENV: 'test',
        LOG_LEVEL: 'silent',
      })
    );

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/protected-sample',
    });

    expect(response.statusCode).toBe(401);
    const body = response.json();
    expect(body.error).toBe('Unauthorized');
    expect(body.message).toContain('Token de autenticação ausente');
  });

  it('rejects access with invalid session token with 401 Unauthorized', async () => {
    app = await buildApp(
      loadConfig({
        NODE_ENV: 'test',
        LOG_LEVEL: 'silent',
      })
    );

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/protected-sample',
      headers: {
        authorization: 'Bearer invalid_session_token_12345',
      },
    });

    expect(response.statusCode).toBe(401);
    const body = response.json();
    expect(body.error).toBe('Unauthorized');
    expect(body.message).toContain('Sessão inválida, revogada ou expirada.');
  });
});
