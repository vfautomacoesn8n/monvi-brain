import { describe, expect, it } from "vitest";
import { loadConfig } from "../src/config/environment.js";

describe("loadConfig", () => {
  it("applies safe local defaults", () => {
    const config = loadConfig({});

    expect(config.NODE_ENV).toBe("development");
    expect(config.HOST).toBe("127.0.0.1");
    expect(config.PORT).toBe(3000);
    expect(config.LOG_LEVEL).toBe("info");
  });

  it("rejects an invalid port", () => {
    expect(() => loadConfig({ PORT: "70000" })).toThrow();
  });
});
