CREATE TABLE "automation_trigger" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"automation_workflow_id" uuid NOT NULL,
	"trigger_type" "automation_trigger_type" DEFAULT 'manual' NOT NULL,
	"webhook_token" varchar(64),
	"schedule_cron" varchar(120),
	"event_name" varchar(120),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	CONSTRAINT "automation_trigger_webhook_token_unique" UNIQUE("webhook_token")
);
--> statement-breakpoint
CREATE TABLE "automation_invocation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"automation_trigger_id" uuid NOT NULL,
	"payload" jsonb,
	"source_ip" varchar(45),
	"received_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "automation_trigger" ADD CONSTRAINT "automation_trigger_automation_workflow_id_automation_workflow_id_fk" FOREIGN KEY ("automation_workflow_id") REFERENCES "public"."automation_workflow"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "automation_invocation" ADD CONSTRAINT "automation_invocation_automation_trigger_id_automation_trigger_id_fk" FOREIGN KEY ("automation_trigger_id") REFERENCES "public"."automation_trigger"("id") ON DELETE cascade ON UPDATE no action;