CREATE TYPE "public"."ai_agent_risk_level" AS ENUM('low', 'medium', 'high', 'critical');--> statement-breakpoint
ALTER TABLE "ai_agent" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "ai_agent" ALTER COLUMN "status" SET DEFAULT 'draft'::text;--> statement-breakpoint
DROP TYPE "public"."ai_agent_status";--> statement-breakpoint
CREATE TYPE "public"."ai_agent_status" AS ENUM('draft', 'configured', 'validated', 'simulated', 'pilot', 'active', 'suspended', 'retired', 'archived', 'blocked', 'quarantined', 'incident', 'deprecated');--> statement-breakpoint
ALTER TABLE "ai_agent" ALTER COLUMN "status" SET DEFAULT 'draft'::"public"."ai_agent_status";--> statement-breakpoint
ALTER TABLE "ai_agent" ALTER COLUMN "status" SET DATA TYPE "public"."ai_agent_status" USING "status"::"public"."ai_agent_status";--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "specialty" varchar(255);--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "scope" text;--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "skills" jsonb;--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "repositories" jsonb;--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "forbidden_actions" text;--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "risk_level" "ai_agent_risk_level";--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "escalation_criteria" text;--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "report_format" text;--> statement-breakpoint
ALTER TABLE "ai_agent" ADD COLUMN "reviewer_person_id" uuid;--> statement-breakpoint
ALTER TABLE "ai_agent" ADD CONSTRAINT "ai_agent_reviewer_person_id_person_id_fk" FOREIGN KEY ("reviewer_person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;