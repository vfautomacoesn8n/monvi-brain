import type { FastifyServerOptions } from "fastify";
import type { AppConfig } from "../config/environment.js";

const REDACTED_VALUE = "[REDACTED]";

export function createLoggerOptions(
  config: AppConfig
): NonNullable<FastifyServerOptions["logger"]> {
  return {
    level: config.LOG_LEVEL,
    base: {
      service: config.SERVICE_NAME,
      version: config.SERVICE_VERSION,
      environment: config.NODE_ENV
    },
    redact: {
      paths: [
        "req.headers.authorization",
        "req.headers.cookie",
        "request.headers.authorization",
        "request.headers.cookie",
        "password",
        "token",
        "accessToken",
        "refreshToken",
        "secret"
      ],
      censor: REDACTED_VALUE
    }
  };
}
