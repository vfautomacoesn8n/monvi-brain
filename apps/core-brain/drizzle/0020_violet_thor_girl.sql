CREATE TYPE "public"."ai_agent_status" AS ENUM('draft', 'active', 'paused', 'archived');--> statement-breakpoint
CREATE TABLE "ai_agent" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"purpose" text,
	"allowed_tools" jsonb,
	"authorized_source_ids" jsonb,
	"owner_person_id" uuid,
	"status" "ai_agent_status" DEFAULT 'draft' NOT NULL,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "ai_agent" ADD CONSTRAINT "ai_agent_owner_person_id_person_id_fk" FOREIGN KEY ("owner_person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;