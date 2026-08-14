CREATE TYPE "public"."integration_provider" AS ENUM('github', 'google_workspace', 'forms_email', 'whatsapp', 'crm_spreadsheets', 'n8n', 'nuvemshop', 'analytics_media', 'other');--> statement-breakpoint
CREATE TYPE "public"."integration_status" AS ENUM('draft', 'active', 'paused', 'revoked');--> statement-breakpoint
CREATE TABLE "integration" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"provider" "integration_provider" NOT NULL,
	"name" varchar(255) NOT NULL,
	"minimal_scopes" text,
	"owner_person_id" uuid,
	"status" "integration_status" DEFAULT 'draft' NOT NULL,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "integration" ADD CONSTRAINT "integration_owner_person_id_person_id_fk" FOREIGN KEY ("owner_person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;