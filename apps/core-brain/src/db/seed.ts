import { db, queryClient } from './client.js';
import { person, client, project, role, permission, rolePermission } from './schema/index.js';

export async function seedDevDatabase() {
  console.log('Seeding synthetic dev data...');

  // 1. Roles & Permissions
  const [adminRole] = await db.insert(role).values({
    name: 'admin',
    description: 'System Administrator',
    scopeLevel: 'system',
  }).onConflictDoNothing().returning();

  const [readPerm] = await db.insert(permission).values({
    resource: 'core_brain:read',
    action: 'read',
    description: 'Read Core Brain resources',
  }).onConflictDoNothing().returning();

  if (adminRole && readPerm) {
    await db.insert(rolePermission).values({
      roleId: adminRole.id,
      permissionId: readPerm.id,
    }).onConflictDoNothing();
  }

  // 2. Synthetic Person (Fake)
  await db.insert(person).values({
    fullName: 'Usuário Sintético Dev',
    displayName: 'Dev User',
    status: 'active',
  }).returning();

  // 3. Synthetic Client (Fake)
  const [fakeClient] = await db.insert(client).values({
    name: 'Empresa Cliente Fictícia S.A.',
    tradeName: 'Cliente Dev',
    documentNumber: '00.000.000/0001-00',
    status: 'active',
  }).returning();

  // 4. Synthetic Project (Fake)
  if (fakeClient) {
    await db.insert(project).values({
      clientId: fakeClient.id,
      code: 'PRJ-DEV-001',
      name: 'Projeto Piloto Fictício Dev',
      description: 'Projeto de testes automatizados sintéticos em ambiente dev local',
      status: 'active',
    }).onConflictDoNothing();
  }

  console.log('Seed completed successfully!');
}

if (process.argv[1]?.includes('seed.ts')) {
  seedDevDatabase()
    .then(() => queryClient.end())
    .catch((err) => {
      console.error('Seed failed:', err);
      queryClient.end();
      process.exit(1);
    });
}
