CREATE TYPE "public"."document_permission_access_level" AS ENUM('read', 'write');--> statement-breakpoint
CREATE TABLE "document_permission" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"document_id" uuid NOT NULL,
	"grantee_person_id" uuid,
	"grantee_role_id" uuid,
	"access_level" "document_permission_access_level" NOT NULL,
	"granted_by_person_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "document_permission" ADD CONSTRAINT "document_permission_document_id_document_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."document"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "document_permission" ADD CONSTRAINT "document_permission_grantee_person_id_person_id_fk" FOREIGN KEY ("grantee_person_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "document_permission" ADD CONSTRAINT "document_permission_grantee_role_id_role_id_fk" FOREIGN KEY ("grantee_role_id") REFERENCES "public"."role"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "document_permission" ADD CONSTRAINT "document_permission_granted_by_person_id_person_id_fk" FOREIGN KEY ("granted_by_person_id") REFERENCES "public"."person"("id") ON DELETE set null ON UPDATE no action;