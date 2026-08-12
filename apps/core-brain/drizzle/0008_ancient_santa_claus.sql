CREATE TYPE "public"."opportunity_stage" AS ENUM('prospecting', 'qualification', 'proposal', 'negotiation', 'won', 'lost');--> statement-breakpoint
CREATE TABLE "opportunity" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lead_id" uuid,
	"title" varchar(255) NOT NULL,
	"stage" "opportunity_stage" DEFAULT 'prospecting' NOT NULL,
	"loss_reason" text,
	"owner_person_id" uuid,
	"expected_close_date" timestamp with time zone,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "opportunity" ADD CONSTRAINT "opportunity_lead_id_lead_id_fk" FOREIGN KEY ("lead_id") REFERENCES "public"."lead"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "opportunity" ADD CONSTRAINT "opportunity_owner_person_id_person_id_fk" FOREIGN KEY ("owner_person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;