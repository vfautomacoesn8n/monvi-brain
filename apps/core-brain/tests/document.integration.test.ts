import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import type { FastifyInstance } from 'fastify';
import JSZip from 'jszip';
import { buildApp } from '../src/app/build-app.js';
import { loadConfig } from '../src/config/environment.js';
import { db, queryClient } from '../src/db/client.js';
import { person, identity, role, source, document, documentVersion } from '../src/db/schema/index.js';
import { createSession } from '../src/modules/auth/session.service.js';

describe('Fluxo real de documentos e versões — PostgreSQL local (Fase 7)', () => {
  let app: FastifyInstance;
  let sessionToken: string;
  let personId: string;
  let createdSourceId: string | undefined;
  let createdDocumentId: string | undefined;

  beforeAll(async () => {
    app = await buildApp(loadConfig({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }));

    await db
      .insert(role)
      .values({ name: 'admin', description: 'System Administrator', scopeLevel: 'system' })
      .onConflictDoNothing();

    const [createdPerson] = await db
      .insert(person)
      .values({ fullName: 'Teste Fase 7 - Documento', displayName: 'Teste Fase 7' })
      .returning();
    if (!createdPerson) {
      throw new Error('Falha ao criar pessoa de teste.');
    }
    personId = createdPerson.id;

    const [createdIdentity] = await db
      .insert(identity)
      .values({
        personId,
        provider: 'dev',
        providerSubject: `dev:teste-fase7-documento-${personId}`,
        email: `teste-fase7-documento-${personId}@example.com`,
        emailVerified: true,
      })
      .returning();
    if (!createdIdentity) {
      throw new Error('Falha ao criar identidade de teste.');
    }

    const sessionInfo = await createSession({ personId, identityId: createdIdentity.id });
    sessionToken = sessionInfo.sessionToken;

    const sourceResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/sources',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { name: 'Fonte para documento', type: 'manual' },
    });
    createdSourceId = sourceResponse.json().source.id;
  });

  afterAll(async () => {
    if (createdDocumentId) {
      await db.delete(documentVersion).where(eq(documentVersion.documentId, createdDocumentId));
      await db.delete(document).where(eq(document.id, createdDocumentId));
    }
    if (createdSourceId) {
      await db.delete(source).where(eq(source.id, createdSourceId));
    }
    if (personId) {
      await db.delete(identity).where(eq(identity.personId, personId));
      await db.delete(person).where(eq(person.id, personId));
    }
    await app.close();
    await queryClient.end();
  });

  it('cria, lê, atualiza e remove (soft delete) um documento real', async () => {
    const createResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/documents',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: {
        title: 'Documento Integração Fase 7',
        sourceId: createdSourceId,
        ownerPersonId: personId,
        confidentiality: 'confidential',
      },
    });
    expect(createResponse.statusCode).toBe(201);
    const created = createResponse.json().document;
    createdDocumentId = created.id;
    expect(created.status).toBe('draft');
    expect(created.confidentiality).toBe('confidential');

    const listResponse = await app.inject({
      method: 'GET',
      url: '/api/v1/documents',
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(
      listResponse.json().documents.some((d: { id: string }) => d.id === createdDocumentId)
    ).toBe(true);

    const getResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.json().document.sourceId).toBe(createdSourceId);

    const updateResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { status: 'approved' },
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json().document.status).toBe('approved');

    const invalidRetentionResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { retentionPolicy: 'time_limited' },
    });
    expect(invalidRetentionResponse.statusCode).toBe(400);

    const retentionResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { retentionPolicy: 'time_limited', retentionUntil: '2030-01-01T00:00:00.000Z' },
    });
    expect(retentionResponse.statusCode).toBe(200);
    expect(retentionResponse.json().document.retentionPolicy).toBe('time_limited');

    const clearRetentionResponse = await app.inject({
      method: 'PATCH',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { retentionPolicy: 'indefinite', retentionUntil: null },
    });
    expect(clearRetentionResponse.statusCode).toBe(200);
    expect(clearRetentionResponse.json().document.retentionPolicy).toBe('indefinite');
    expect(clearRetentionResponse.json().document.retentionUntil).toBeNull();
  });

  it('cria versões sequenciais imutáveis para um documento real', async () => {
    if (!createdDocumentId) {
      throw new Error('Documento de teste não disponível.');
    }

    const firstVersionResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${createdDocumentId}/versions`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { content: 'Conteúdo da primeira versão.' },
    });
    expect(firstVersionResponse.statusCode).toBe(201);
    expect(firstVersionResponse.json().documentVersion.versionNumber).toBe(1);

    const secondVersionResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${createdDocumentId}/versions`,
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { content: 'Conteúdo da segunda versão.' },
    });
    expect(secondVersionResponse.statusCode).toBe(201);
    expect(secondVersionResponse.json().documentVersion.versionNumber).toBe(2);

    const listResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}/versions`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(listResponse.statusCode).toBe(200);
    expect(listResponse.json().documentVersions).toHaveLength(2);

    const deleteResponse = await app.inject({
      method: 'DELETE',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(deleteResponse.statusCode).toBe(204);

    const getAfterDeleteResponse = await app.inject({
      method: 'GET',
      url: `/api/v1/documents/${createdDocumentId}`,
      headers: { authorization: `Bearer ${sessionToken}` },
    });
    expect(getAfterDeleteResponse.statusCode).toBe(404);
  });

  it('faz upload real de um arquivo de texto puro e extrai o conteúdo de verdade', async () => {
    const uploadDocumentResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/documents',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Documento para upload real', sourceId: createdSourceId },
    });
    const uploadDocumentId = uploadDocumentResponse.json().document.id;

    const boundary = '----monviTestBoundary';
    const fileContent = 'Conteúdo real extraído de um upload de verdade.';
    const payload =
      `--${boundary}\r\n` +
      'Content-Disposition: form-data; name="file"; filename="nota.txt"\r\n' +
      'Content-Type: text/plain\r\n\r\n' +
      `${fileContent}\r\n` +
      `--${boundary}--\r\n`;

    const uploadResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${uploadDocumentId}/versions/upload`,
      headers: {
        authorization: `Bearer ${sessionToken}`,
        'content-type': `multipart/form-data; boundary=${boundary}`,
      },
      payload,
    });
    expect(uploadResponse.statusCode).toBe(201);
    const uploaded = uploadResponse.json();
    expect(uploaded.documentVersion.content).toBe(fileContent);
    expect(uploaded.documentVersion.originalFilename).toBe('nota.txt');
    expect(uploaded.extraction.extracted).toBe(true);

    await db.delete(documentVersion).where(eq(documentVersion.documentId, uploadDocumentId));
    await db.delete(document).where(eq(document.id, uploadDocumentId));
  });

  it('faz upload real de um PDF e extrai o conteúdo de verdade', async () => {
    const uploadDocumentResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/documents',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Documento PDF para upload real', sourceId: createdSourceId },
    });
    const uploadDocumentId = uploadDocumentResponse.json().document.id;

    const pdfObjects = [
      '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
      '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
      '3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 500 200] /Contents 5 0 R >>\nendobj\n',
      '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
    ];
    const streamContent = 'BT /F1 12 Tf 20 100 Td (Conteudo real de um PDF via upload) Tj ET';
    pdfObjects.push(
      `5 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}\nendstream\nendobj\n`
    );

    let pdfContent = '%PDF-1.4\n';
    const pdfOffsets: number[] = [0];
    for (const obj of pdfObjects) {
      pdfOffsets.push(pdfContent.length);
      pdfContent += obj;
    }
    const pdfXrefStart = pdfContent.length;
    let pdfXref = `xref\n0 ${pdfObjects.length + 1}\n0000000000 65535 f \n`;
    for (let i = 1; i <= pdfObjects.length; i++) {
      pdfXref += `${String(pdfOffsets[i]).padStart(10, '0')} 00000 n \n`;
    }
    pdfContent += pdfXref;
    pdfContent += `trailer\n<< /Size ${pdfObjects.length + 1} /Root 1 0 R >>\nstartxref\n${pdfXrefStart}\n%%EOF`;

    const boundary = '----monviTestBoundaryPdf';
    const payload =
      `--${boundary}\r\n` +
      'Content-Disposition: form-data; name="file"; filename="relatorio.pdf"\r\n' +
      'Content-Type: application/pdf\r\n\r\n' +
      `${pdfContent}\r\n` +
      `--${boundary}--\r\n`;

    const uploadResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${uploadDocumentId}/versions/upload`,
      headers: {
        authorization: `Bearer ${sessionToken}`,
        'content-type': `multipart/form-data; boundary=${boundary}`,
      },
      payload,
    });
    expect(uploadResponse.statusCode).toBe(201);
    const uploaded = uploadResponse.json();
    expect(uploaded.documentVersion.content).toBe('Conteudo real de um PDF via upload');
    expect(uploaded.documentVersion.mimeType).toBe('application/pdf');
    expect(uploaded.extraction.extracted).toBe(true);

    await db.delete(documentVersion).where(eq(documentVersion.documentId, uploadDocumentId));
    await db.delete(document).where(eq(document.id, uploadDocumentId));
  });

  it('faz upload real de um DOCX e extrai o conteúdo de verdade', async () => {
    const uploadDocumentResponse = await app.inject({
      method: 'POST',
      url: '/api/v1/documents',
      headers: { authorization: `Bearer ${sessionToken}` },
      payload: { title: 'Documento DOCX para upload real', sourceId: createdSourceId },
    });
    const uploadDocumentId = uploadDocumentResponse.json().document.id;

    const zip = new JSZip();
    zip.file(
      '[Content_Types].xml',
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
        '<Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
        '</Types>'
    );
    zip.folder('_rels')?.file(
      '.rels',
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
        '</Relationships>'
    );
    zip.folder('word')?.file(
      'document.xml',
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
        '<w:body><w:p><w:r><w:t>Conteudo real de um DOCX via upload</w:t></w:r></w:p></w:body>' +
        '</w:document>'
    );
    const docxBuffer = await zip.generateAsync({ type: 'nodebuffer' });

    const docxBoundary = '----monviTestBoundaryDocx';
    const docxMimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    const payload = Buffer.concat([
      Buffer.from(
        `--${docxBoundary}\r\n` +
          'Content-Disposition: form-data; name="file"; filename="relatorio.docx"\r\n' +
          `Content-Type: ${docxMimeType}\r\n\r\n`,
        'utf-8'
      ),
      docxBuffer,
      Buffer.from(`\r\n--${docxBoundary}--\r\n`, 'utf-8'),
    ]);

    const uploadResponse = await app.inject({
      method: 'POST',
      url: `/api/v1/documents/${uploadDocumentId}/versions/upload`,
      headers: {
        authorization: `Bearer ${sessionToken}`,
        'content-type': `multipart/form-data; boundary=${docxBoundary}`,
      },
      payload,
    });
    expect(uploadResponse.statusCode).toBe(201);
    const uploaded = uploadResponse.json();
    expect(uploaded.documentVersion.content).toBe('Conteudo real de um DOCX via upload');
    expect(uploaded.documentVersion.mimeType).toBe(docxMimeType);
    expect(uploaded.extraction.extracted).toBe(true);

    await db.delete(documentVersion).where(eq(documentVersion.documentId, uploadDocumentId));
    await db.delete(document).where(eq(document.id, uploadDocumentId));
  });
});
