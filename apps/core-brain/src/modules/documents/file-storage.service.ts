import { randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PLAIN_TEXT_EXTENSIONS = new Set(['.txt', '.md']);
const PLAIN_TEXT_MIME_TYPES = new Set(['text/plain', 'text/markdown']);

export interface StoredFile {
  storagePath: string;
  originalFilename: string;
  mimeType: string;
  fileSizeBytes: number;
  extractedContent: string | null;
}

function isPlainText(originalFilename: string, mimeType: string): boolean {
  const extension = path.extname(originalFilename).toLowerCase();
  return PLAIN_TEXT_EXTENSIONS.has(extension) || PLAIN_TEXT_MIME_TYPES.has(mimeType);
}

export async function storeUploadedFile(
  uploadsDir: string,
  originalFilename: string,
  mimeType: string,
  buffer: Buffer
): Promise<StoredFile> {
  await mkdir(uploadsDir, { recursive: true });

  const storedName = `${randomUUID()}${path.extname(originalFilename).toLowerCase()}`;
  const storagePath = path.join(uploadsDir, storedName);
  await writeFile(storagePath, buffer);

  const extractedContent = isPlainText(originalFilename, mimeType) ? buffer.toString('utf-8') : null;

  return {
    storagePath,
    originalFilename,
    mimeType,
    fileSizeBytes: buffer.byteLength,
    extractedContent,
  };
}
