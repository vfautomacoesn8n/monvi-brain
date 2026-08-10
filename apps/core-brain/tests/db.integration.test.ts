import { afterAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';
import { db, queryClient, checkDatabaseHealth } from '../src/db/client.js';
import { person } from '../src/db/schema/index.js';

describe('Persistência real — PostgreSQL local (Fase 3)', () => {
  const testFullName = 'Teste de Integração Monvi Brain';
  const testDisplayName = 'Teste Integração';
  let createdId: string | undefined;

  it('confirma que o banco local está acessível antes de prosseguir', async () => {
    const isHealthy = await checkDatabaseHealth();
    expect(isHealthy).toBe(true);
  });

  it('insere um registro real em person e lê o mesmo registro de volta do banco', async () => {
    const [inserted] = await db
      .insert(person)
      .values({ fullName: testFullName, displayName: testDisplayName })
      .returning();

    if (!inserted) {
      throw new Error('Insercao real em person nao retornou nenhum registro.');
    }

    expect(inserted.fullName).toBe(testFullName);
    createdId = inserted.id;

    const [found] = await db.select().from(person).where(eq(person.id, createdId));

    expect(found).toBeDefined();
    expect(found?.id).toBe(createdId);
    expect(found?.displayName).toBe(testDisplayName);
    expect(found?.status).toBe('active');
  });

  afterAll(async () => {
    if (createdId) {
      await db.delete(person).where(eq(person.id, createdId));
    }
    await queryClient.end();
  });
});
