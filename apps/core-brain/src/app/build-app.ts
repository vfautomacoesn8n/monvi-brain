import Fastify, { type FastifyInstance } from "fastify";
import type { AppConfig } from "../config/environment.js";
import { registerErrorHandler } from "../errors/error-handler.js";
import { registerHealthRoutes } from "../http/routes/health.js";
import { registerAuthRoutes } from "../http/routes/auth.js";
import { registerClientRoutes } from "../http/routes/client.js";
import { registerProjectRoutes } from "../http/routes/project.js";
import { createLoggerOptions } from "../logging/logger.js";

export async function buildApp(
  config: AppConfig
): Promise<FastifyInstance> {
  const app = Fastify({
    logger: createLoggerOptions(config),
    requestIdHeader: "x-request-id"
  });

  registerErrorHandler(app);

  await app.register(registerHealthRoutes, {
    prefix: "/api/v1",
    config
  });

  await app.register(registerAuthRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerClientRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerProjectRoutes, {
    prefix: "/api/v1"
  });

  return app;
}
