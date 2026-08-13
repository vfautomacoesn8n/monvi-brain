CREATE TYPE "public"."document_confidentiality" AS ENUM('public', 'internal', 'confidential', 'restricted');--> statement-breakpoint
ALTER TABLE "document" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "document" ALTER COLUMN "status" SET DEFAULT 'draft'::text;--> statement-breakpoint
DROP TYPE "public"."document_status";--> statement-breakpoint
CREATE TYPE "public"."document_status" AS ENUM('draft', 'review', 'approved', 'deprecated', 'archived');--> statement-breakpoint
ALTER TABLE "document" ALTER COLUMN "status" SET DEFAULT 'draft'::"public"."document_status";--> statement-breakpoint
ALTER TABLE "document" ALTER COLUMN "status" SET DATA TYPE "public"."document_status" USING "status"::"public"."document_status";--> statement-breakpoint
ALTER TABLE "document" ADD COLUMN "confidentiality" "document_confidentiality" DEFAULT 'internal' NOT NULL;