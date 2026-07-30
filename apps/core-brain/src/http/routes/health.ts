import type { FastifyInstance } from "fastify";
import type { AppConfig } from "../../config/environment.js";

interface RouteDependencies {
  config: AppConfig;
}

export async function registerHealthRoutes(
  app: FastifyInstance,
  dependencies: RouteDependencies
): Promise<void> {
  app.get("/health", async () => ({
    status: "ok",
    service: dependencies.config.SERVICE_NAME,
    version: dependencies.config.SERVICE_VERSION
  }));

  app.get("/ready", async () => ({
    status: "ready",
    checks: {
      configuration: "ok"
    }
  }));
}
