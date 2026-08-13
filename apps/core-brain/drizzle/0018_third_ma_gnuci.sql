CREATE TYPE "public"."automation_invocation_status" AS ENUM('pending', 'succeeded', 'dead_letter');--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD COLUMN "idempotency_key" varchar(255);--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD COLUMN "status" "automation_invocation_status" DEFAULT 'pending' NOT NULL;--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD COLUMN "attempt_count" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD COLUMN "max_attempts" integer DEFAULT 3 NOT NULL;--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD COLUMN "next_attempt_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD COLUMN "last_error" text;--> statement-breakpoint
CREATE UNIQUE INDEX "automation_invocation_trigger_idempotency_idx" ON "automation_invocation" USING btree ("automation_trigger_id","idempotency_key");