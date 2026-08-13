CREATE TYPE "public"."automation_trigger_type" AS ENUM('manual', 'webhook', 'schedule', 'event');--> statement-breakpoint
CREATE TYPE "public"."automation_workflow_status" AS ENUM('draft', 'active', 'paused', 'archived');--> statement-breakpoint
CREATE TABLE "automation_workflow" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"owner_person_id" uuid,
	"trigger_type" "automation_trigger_type" DEFAULT 'manual' NOT NULL,
	"status" "automation_workflow_status" DEFAULT 'draft' NOT NULL,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "automation_workflow" ADD CONSTRAINT "automation_workflow_owner_person_id_person_id_fk" FOREIGN KEY ("owner_person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;