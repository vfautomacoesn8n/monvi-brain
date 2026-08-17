import { describe, expect, it, afterAll } from 'vitest';
import { mkdtemp, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { storeUploadedFile } from '../src/modules/documents/file-storage.service.js';

describe('file-storage.service — armazenamento e extração real em disco', () => {
  const createdDirs: string[] = [];

  afterAll(async () => {
    await Promise.all(createdDirs.map((dir) => rm(dir, { recursive: true, force: true })));
  });

  async function tempUploadsDir(): Promise<string> {
    const dir = await mkdtemp(path.join(tmpdir(), 'monvi-uploads-test-'));
    createdDirs.push(dir);
    return dir;
  }

  it('extrai conteúdo real de um arquivo de texto puro (.txt)', async () => {
    const uploadsDir = await tempUploadsDir();
    const buffer = Buffer.from('Conteúdo real extraído de um arquivo de texto.', 'utf-8');

    const stored = await storeUploadedFile(uploadsDir, 'nota.txt', 'text/plain', buffer);

    expect(stored.extractedContent).toBe('Conteúdo real extraído de um arquivo de texto.');
    expect(stored.fileSizeBytes).toBe(buffer.byteLength);
    expect(stored.originalFilename).toBe('nota.txt');

    const bytesOnDisk = await readFile(stored.storagePath);
    expect(bytesOnDisk.equals(buffer)).toBe(true);
  });

  it('extrai conteúdo real de um arquivo markdown (.md)', async () => {
    const uploadsDir = await tempUploadsDir();
    const buffer = Buffer.from('# Título\n\nTexto em markdown.', 'utf-8');

    const stored = await storeUploadedFile(uploadsDir, 'anotacoes.md', 'text/markdown', buffer);

    expect(stored.extractedContent).toBe('# Título\n\nTexto em markdown.');
  });

  it('armazena mas não extrai conteúdo de um formato não suportado (ex.: PDF)', async () => {
    const uploadsDir = await tempUploadsDir();
    const buffer = Buffer.from('%PDF-1.4 conteúdo binário simulado', 'utf-8');

    const stored = await storeUploadedFile(uploadsDir, 'relatorio.pdf', 'application/pdf', buffer);

    expect(stored.extractedContent).toBeNull();
    expect(stored.fileSizeBytes).toBe(buffer.byteLength);

    const bytesOnDisk = await readFile(stored.storagePath);
    expect(bytesOnDisk.equals(buffer)).toBe(true);
  });

  it('gera um nome de arquivo em disco diferente do nome original (evita path traversal)', async () => {
    const uploadsDir = await tempUploadsDir();
    const buffer = Buffer.from('conteúdo', 'utf-8');

    const stored = await storeUploadedFile(uploadsDir, '../../etc/passwd.txt', 'text/plain', buffer);

    expect(stored.storagePath).not.toContain('..');
    expect(path.dirname(stored.storagePath)).toBe(uploadsDir);
  });
});
