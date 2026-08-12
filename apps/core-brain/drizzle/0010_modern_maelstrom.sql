CREATE TYPE "public"."source_status" AS ENUM('active', 'archived');--> statement-breakpoint
CREATE TYPE "public"."source_type" AS ENUM('manual', 'upload', 'google_drive', 'website', 'api', 'other');--> statement-breakpoint
CREATE TABLE "source" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" "source_type" DEFAULT 'other' NOT NULL,
	"description" text,
	"owner_person_id" uuid,
	"status" "source_status" DEFAULT 'active' NOT NULL,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "source" ADD CONSTRAINT "source_owner_person_id_person_id_fk" FOREIGN KEY ("owner_person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;