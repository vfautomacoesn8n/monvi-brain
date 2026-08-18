import { randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { extractText, getDocumentProxy } from 'unpdf';
import { extractRawText } from 'mammoth';

const PLAIN_TEXT_EXTENSIONS = new Set(['.txt', '.md']);
const PLAIN_TEXT_MIME_TYPES = new Set(['text/plain', 'text/markdown']);
const PDF_EXTENSIONS = new Set(['.pdf']);
const PDF_MIME_TYPES = new Set(['application/pdf']);
const DOCX_EXTENSIONS = new Set(['.docx']);
const DOCX_MIME_TYPES = new Set([
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

export interface StoredFile {
  storagePath: string;
  originalFilename: string;
  mimeType: string;
  fileSizeBytes: number;
  extractedContent: string | null;
  formatSupported: boolean;
}

function isPlainText(originalFilename: string, mimeType: string): boolean {
  const extension = path.extname(originalFilename).toLowerCase();
  return PLAIN_TEXT_EXTENSIONS.has(extension) || PLAIN_TEXT_MIME_TYPES.has(mimeType);
}

function isPdf(originalFilename: string, mimeType: string): boolean {
  const extension = path.extname(originalFilename).toLowerCase();
  return PDF_EXTENSIONS.has(extension) || PDF_MIME_TYPES.has(mimeType);
}

function isDocx(originalFilename: string, mimeType: string): boolean {
  const extension = path.extname(originalFilename).toLowerCase();
  return DOCX_EXTENSIONS.has(extension) || DOCX_MIME_TYPES.has(mimeType);
}

async function extractPdfText(buffer: Buffer): Promise<string | null> {
  try {
    const pdf = await getDocumentProxy(new Uint8Array(buffer), { verbosity: 0 });
    const { text } = await extractText(pdf, { mergePages: true });
    const trimmed = text.trim();
    return trimmed.length > 0 ? trimmed : null;
  } catch {
    return null;
  }
}

async function extractDocxText(buffer: Buffer): Promise<string | null> {
  try {
    const { value } = await extractRawText({ buffer });
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  } catch {
    return null;
  }
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

  let extractedContent: string | null = null;
  let formatSupported = false;

  if (isPlainText(originalFilename, mimeType)) {
    extractedContent = buffer.toString('utf-8');
    formatSupported = true;
  } else if (isPdf(originalFilename, mimeType)) {
    extractedContent = await extractPdfText(buffer);
    formatSupported = true;
  } else if (isDocx(originalFilename, mimeType)) {
    extractedContent = await extractDocxText(buffer);
    formatSupported = true;
  }

  return {
    storagePath,
    originalFilename,
    mimeType,
    fileSizeBytes: buffer.byteLength,
    extractedContent,
    formatSupported,
  };
}
