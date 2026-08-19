CREATE TABLE "person_role" (
	"person_id" uuid NOT NULL,
	"role_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "person_role_person_id_role_id_pk" PRIMARY KEY("person_id","role_id")
);
--> statement-breakpoint
ALTER TABLE "person_role" ADD CONSTRAINT "person_role_person_id_person_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "person_role" ADD CONSTRAINT "person_role_role_id_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."role"("id") ON DELETE cascade ON UPDATE no action;