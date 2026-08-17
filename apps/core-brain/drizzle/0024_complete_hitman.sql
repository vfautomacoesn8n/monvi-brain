ALTER TABLE "document_version" ALTER COLUMN "content" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "document_version" ADD COLUMN "original_filename" varchar(255);--> statement-breakpoint
ALTER TABLE "document_version" ADD COLUMN "mime_type" varchar(255);--> statement-breakpoint
ALTER TABLE "document_version" ADD COLUMN "file_size_bytes" integer;--> statement-breakpoint
ALTER TABLE "document_version" ADD COLUMN "storage_path" text;