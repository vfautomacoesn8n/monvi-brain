import { afterEach, describe, expect, it } from "vitest";
import type { FastifyInstance } from "fastify";
import { buildApp } from "../src/app/build-app.js";
import { loadConfig } from "../src/config/environment.js";

let app: FastifyInstance | undefined;

afterEach(async () => {
  if (app !== undefined) {
    await app.close();
    app = undefined;
  }
});

describe("health endpoints", () => {
  it("returns process health", async () => {
    app = await buildApp(
      loadConfig({
        NODE_ENV: "test",
        LOG_LEVEL: "silent"
      })
    );

    const response = await app.inject({
      method: "GET",
      url: "/api/v1/health"
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      status: "ok",
      service: "monvi-core-brain",
      version: "0.1.0"
    });
  });

  it("returns readiness for the authorized checks", async () => {
    app = await buildApp(
      loadConfig({
        NODE_ENV: "test",
        LOG_LEVEL: "silent"
      })
    );

    const response = await app.inject({
      method: "GET",
      url: "/api/v1/ready"
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      status: "ready",
      checks: {
        configuration: "ok"
      }
    });
  });
});
