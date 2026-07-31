import { describe, expect, it, afterEach } from 'vitest';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { generateSessionToken, hashToken } from '../src/modules/auth/tokens.js';
import { requirePermission, requireRole } from '../src/http/middlewares/authorize.js';
import { authenticateRequest } from '../src/http/middlewares/authenticate.js';

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

  it('blocks /auth/dev-login when NODE_ENV is production with 403 Forbidden', async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    try {
      app = await buildApp(
        loadConfig({
          NODE_ENV: 'production',
          LOG_LEVEL: 'silent',
        })
      );

      const response = await app.inject({
        method: 'POST',
        url: '/api/v1/auth/dev-login',
        payload: { email: 'dev@example.com' },
      });

      expect(response.statusCode).toBe(403);
      const body = response.json();
      expect(body.error).toBe('Forbidden');
      expect(body.message).toContain('Login dev desativado em ambiente de produção.');
    } finally {
      process.env.NODE_ENV = originalEnv;
    }
  });

  it('rejects access with 403 Forbidden when user lacks required permission', async () => {
    app = await buildApp(
      loadConfig({
        NODE_ENV: 'test',
        LOG_LEVEL: 'silent',
      })
    );

    // Register a test route requiring a permission the user won't have
    app.get(
      '/api/v1/admin-only',
      {
        preHandler: [
          async (req) => {
            req.user = {
              personId: 'p-123',
              fullName: 'Normal User',
              email: 'user@example.com',
              profileId: null,
              profileType: null,
              roleId: 'r-user',
              roleName: 'user',
              permissions: ['core_brain:read'],
              sessionId: 's-123',
            };
          },
          requirePermission('admin:write'),
        ],
      },
      async () => ({ status: 'ok' })
    );

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/admin-only',
    });

    expect(response.statusCode).toBe(403);
    const body = response.json();
    expect(body.error).toBe('Forbidden');
    expect(body.message).toContain("Requer permissão 'admin:write'");
  });

  it('rejects access with 403 Forbidden when user lacks required role', async () => {
    app = await buildApp(
      loadConfig({
        NODE_ENV: 'test',
        LOG_LEVEL: 'silent',
      })
    );

    app.get(
      '/api/v1/super-role-only',
      {
        preHandler: [
          async (req) => {
            req.user = {
              personId: 'p-123',
              fullName: 'Normal User',
              email: 'user@example.com',
              profileId: null,
              profileType: null,
              roleId: 'r-user',
              roleName: 'user',
              permissions: ['core_brain:read'],
              sessionId: 's-123',
            };
          },
          requireRole('superadmin'),
        ],
      },
      async () => ({ status: 'ok' })
    );

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/super-role-only',
    });

    expect(response.statusCode).toBe(403);
    const body = response.json();
    expect(body.error).toBe('Forbidden');
    expect(body.message).toContain("Requer papel 'superadmin'");
  });

  it('grants access with 200 OK when user is authorized', async () => {
    app = await buildApp(
      loadConfig({
        NODE_ENV: 'test',
        LOG_LEVEL: 'silent',
      })
    );

    app.get(
      '/api/v1/authorized-endpoint',
      {
        preHandler: [
          async (req) => {
            req.user = {
              personId: 'p-123',
              fullName: 'Admin User',
              email: 'admin@example.com',
              profileId: null,
              profileType: null,
              roleId: 'r-admin',
              roleName: 'admin',
              permissions: ['core_brain:read', 'admin:write'],
              sessionId: 's-123',
            };
          },
          requirePermission('admin:write'),
        ],
      },
      async () => ({ status: 'success' })
    );

    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/authorized-endpoint',
    });

    expect(response.statusCode).toBe(200);
    const body = response.json();
    expect(body.status).toBe('success');
  });

  it('handles logout gracefully without token', async () => {
    app = await buildApp(
      loadConfig({
        NODE_ENV: 'test',
        LOG_LEVEL: 'silent',
      })
    );

    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/auth/logout',
    });

    expect(response.statusCode).toBe(401);
  });
});
