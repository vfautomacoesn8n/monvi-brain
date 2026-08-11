CREATE TYPE "public"."deliverable_status" AS ENUM('draft', 'in_review', 'approved', 'delivered', 'rejected');--> statement-breakpoint
CREATE TABLE "deliverable" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"task_id" uuid,
	"title" varchar(255) NOT NULL,
	"description" text,
	"status" "deliverable_status" DEFAULT 'draft' NOT NULL,
	"assignee_person_id" uuid,
	"due_date" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "deliverable" ADD CONSTRAINT "deliverable_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deliverable" ADD CONSTRAINT "deliverable_task_id_task_id_fk" FOREIGN KEY ("task_id") REFERENCES "public"."task"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deliverable" ADD CONSTRAINT "deliverable_assignee_person_id_person_id_fk" FOREIGN KEY ("assignee_person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;