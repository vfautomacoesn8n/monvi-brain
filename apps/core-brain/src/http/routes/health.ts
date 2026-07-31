import type { FastifyInstance } from "fastify";
import type { AppConfig } from "../../config/environment.js";
import { checkDatabaseHealth } from "../../db/client.js";

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

  app.get("/ready", async () => {
    const isDbHealthy = await checkDatabaseHealth();
    return {
      status: "ready",
      checks: {
        configuration: "ok",
        database: isDbHealthy ? "ok" : "disabled_or_unreachable"
      }
    };
  });
}
