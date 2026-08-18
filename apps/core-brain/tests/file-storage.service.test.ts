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

  function buildMinimalPdf(text: string | null): Buffer {
    const objects: string[] = [
      '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
      '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
      '3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 500 200] /Contents 5 0 R >>\nendobj\n',
      '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
    ];
    const streamContent = text !== null ? `BT /F1 12 Tf 20 100 Td (${text}) Tj ET` : '';
    objects.push(`5 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}\nendstream\nendobj\n`);

    let pdf = '%PDF-1.4\n';
    const offsets: number[] = [0];
    for (const obj of objects) {
      offsets.push(pdf.length);
      pdf += obj;
    }
    const xrefStart = pdf.length;
    let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    for (let i = 1; i <= objects.length; i++) {
      xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
    }
    pdf += xref;
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

    return Buffer.from(pdf, 'latin1');
  }

  it('extrai conteúdo real de um PDF válido com texto', async () => {
    const uploadsDir = await tempUploadsDir();
    const buffer = buildMinimalPdf('Conteudo real extraido de um PDF');

    const stored = await storeUploadedFile(uploadsDir, 'relatorio.pdf', 'application/pdf', buffer);

    expect(stored.extractedContent).toBe('Conteudo real extraido de um PDF');
    expect(stored.formatSupported).toBe(true);
    expect(stored.fileSizeBytes).toBe(buffer.byteLength);

    const bytesOnDisk = await readFile(stored.storagePath);
    expect(bytesOnDisk.equals(buffer)).toBe(true);
  });

  it('armazena um PDF válido sem camada de texto (ex.: digitalizado) sem erro, com content nulo', async () => {
    const uploadsDir = await tempUploadsDir();
    const buffer = buildMinimalPdf(null);

    const stored = await storeUploadedFile(uploadsDir, 'digitalizado.pdf', 'application/pdf', buffer);

    expect(stored.extractedContent).toBeNull();
    expect(stored.formatSupported).toBe(true);
  });

  it('armazena um PDF corrompido sem derrubar o upload, com content nulo', async () => {
    const uploadsDir = await tempUploadsDir();
    const buffer = Buffer.from('isto nao e um PDF valido de verdade', 'utf-8');

    const stored = await storeUploadedFile(uploadsDir, 'corrompido.pdf', 'application/pdf', buffer);

    expect(stored.extractedContent).toBeNull();
    expect(stored.formatSupported).toBe(true);
    expect(stored.fileSizeBytes).toBe(buffer.byteLength);

    const bytesOnDisk = await readFile(stored.storagePath);
    expect(bytesOnDisk.equals(buffer)).toBe(true);
  });

  it('armazena mas não extrai conteúdo de um formato genuinamente não suportado (ex.: imagem)', async () => {
    const uploadsDir = await tempUploadsDir();
    const buffer = Buffer.from('conteúdo binário simulado de imagem', 'utf-8');

    const stored = await storeUploadedFile(uploadsDir, 'foto.png', 'image/png', buffer);

    expect(stored.extractedContent).toBeNull();
    expect(stored.formatSupported).toBe(false);
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
