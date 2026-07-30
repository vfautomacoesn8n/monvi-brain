import Fastify, { type FastifyInstance } from "fastify";
import type { AppConfig } from "../config/environment.js";
import { registerErrorHandler } from "../errors/error-handler.js";
import { registerHealthRoutes } from "../http/routes/health.js";
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

  return app;
}
