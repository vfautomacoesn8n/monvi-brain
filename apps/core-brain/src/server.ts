import { buildApp } from "./app/build-app.js";
import { loadConfig } from "./config/environment.js";

async function start(): Promise<void> {
  const config = loadConfig();
  const app = await buildApp(config);

  const close = async (signal: string): Promise<void> => {
    app.log.info({ signal }, "Shutdown requested");
    await app.close();
    process.exit(0);
  };

  process.once("SIGINT", () => {
    void close("SIGINT");
  });

  process.once("SIGTERM", () => {
    void close("SIGTERM");
  });

  try {
    await app.listen({
      host: config.HOST,
      port: config.PORT
    });
  } catch (error) {
    app.log.fatal({ err: error }, "Server startup failed");
    process.exit(1);
  }
}

void start();
