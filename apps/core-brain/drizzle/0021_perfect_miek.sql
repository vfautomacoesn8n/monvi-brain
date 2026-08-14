ALTER TABLE "ai_agent" ADD COLUMN "policy" text;--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "max_actions_per_run" integer;--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "timeout_seconds" integer;