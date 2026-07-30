import type { FastifyInstance } from "fastify";
import { AppError } from "./app-error.js";

export function registerErrorHandler(app: FastifyInstance): void {
  app.setErrorHandler((error, request, reply) => {
    const knownError = error instanceof AppError;

    const statusCode = knownError ? error.statusCode : 500;
    const code = knownError ? error.code : "INTERNAL_ERROR";
    const message = knownError
      ? error.message
      : "Ocorreu um erro interno.";

    const errorName =
      error instanceof Error
        ? error.name
        : "UnknownError";

    request.log.error(
      {
        errorName,
        code,
        statusCode,
        requestId: request.id
      },
      "Request failed"
    );

    void reply.status(statusCode).send({
      error: {
        code,
        message,
        requestId: request.id
      }
    });
  });
}
