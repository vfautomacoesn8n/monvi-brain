import { z } from "zod";

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  HOST: z.string().min(1).default("127.0.0.1"),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
    .default("info"),
  SERVICE_NAME: z.string().min(1).default("monvi-core-brain"),
  SERVICE_VERSION: z.string().min(1).default("0.1.0"),
  GITHUB_PAT: z.string().min(1).optional()
});

export type AppConfig = z.infer<typeof environmentSchema>;

export function loadConfig(
  environment: NodeJS.ProcessEnv = process.env
): AppConfig {
  return environmentSchema.parse(environment);
}
