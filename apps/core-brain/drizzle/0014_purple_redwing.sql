CREATE TYPE "public"."document_retention_policy" AS ENUM('indefinite', 'time_limited');--> statement-breakpoint
ALTER TABLE "document" ADD COLUMN "retention_policy" "document_retention_policy" DEFAULT 'indefinite' NOT NULL;--> statement-breakpoint
ALTER TABLE "document" ADD COLUMN "retention_until" timestamp with time zone;