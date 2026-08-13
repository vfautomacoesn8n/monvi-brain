ALTER TYPE "public"."automation_invocation_status" ADD VALUE 'pending_approval' BEFORE 'pending';--> statement-breakpoint
ALTER TYPE "public"."automation_invocation_status" ADD VALUE 'rejected' BEFORE 'dead_letter';--> statement-breakpoint
ALTER TABLE "automation_workflow" ADD COLUMN "requires_approval" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD COLUMN "approved_by_person_id" uuid;--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD COLUMN "approved_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD COLUMN "rejection_reason" text;--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD CONSTRAINT "automation_invocation_approved_by_person_id_person_id_fk" FOREIGN KEY ("approved_by_person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;