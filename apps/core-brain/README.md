# Monvi Core Brain

Fundação técnica do Monvi Core Brain MVP, autorizada pela Task 041 e evoluída pelas Tasks 043 (persistência), 044 (identidade/autenticação/autorização), 045 (correção e validação factual), 053, 054, 055, 056, 057 e 058 (Fase 5 — API operacional de clientes, projetos, contatos, participação em projetos, tarefas, entregáveis, aprovações e dependências).

## Escopo implementado

- TypeScript e Fastify;
- configuração validada com Zod;
- logs estruturados;
- tratamento básico de erros;
- `GET /api/v1/health`;
- `GET /api/v1/ready`;
- schema de domínio via Drizzle (pessoa, identidade, perfil, papel, permissão, cliente, projeto, tarefa, entregável, aprovação, dependência, sessão);
- persistência local via PostgreSQL e migrações Drizzle (Fase 3);
- autenticação de desenvolvimento (`POST /api/v1/auth/dev-login`, bloqueada quando `NODE_ENV=production`) e autorização RBAC (Fase 4);
- API operacional de clientes, projetos, contatos, participação em projetos, tarefas, entregáveis, aprovações e dependências entre tarefas (CRUD/gestão de ciclo de vida, com autenticação e RBAC obrigatórios), sob suposição explícita de single-tenant — sem modelo de multi-organização, decisão ainda pendente (Fase 5, Tasks 053, 054, 055, 056, 057 e 058);
- testes automatizados unitários, de configuração, de autenticação/autorização e de rotas de clientes, projetos, contatos, participação em projetos, tarefas, entregáveis, aprovações e dependências.

Autenticação de produção real (Google Workspace/OIDC), modelo de multi-organização, credenciais reais, dados reais de clientes, integrações externas, homologação e produção permanecem fora do escopo. Os demais entregáveis da Fase 5 (riscos, comentários, histórico de mudanças, dashboards) ainda não foram implementados.

## Execução local

```powershell
npm install
npm run check
npm run dev
```

O servidor usa `127.0.0.1:3000` por padrão.

## Endpoints

```text
GET http://127.0.0.1:3000/api/v1/health
GET http://127.0.0.1:3000/api/v1/ready
POST http://127.0.0.1:3000/api/v1/auth/dev-login
POST http://127.0.0.1:3000/api/v1/auth/logout
GET http://127.0.0.1:3000/api/v1/auth/me
POST http://127.0.0.1:3000/api/v1/clients
GET http://127.0.0.1:3000/api/v1/clients
GET http://127.0.0.1:3000/api/v1/clients/:id
PATCH http://127.0.0.1:3000/api/v1/clients/:id
DELETE http://127.0.0.1:3000/api/v1/clients/:id
POST http://127.0.0.1:3000/api/v1/projects
GET http://127.0.0.1:3000/api/v1/projects
GET http://127.0.0.1:3000/api/v1/projects/:id
PATCH http://127.0.0.1:3000/api/v1/projects/:id
DELETE http://127.0.0.1:3000/api/v1/projects/:id
POST http://127.0.0.1:3000/api/v1/clients/:clientId/contacts
GET http://127.0.0.1:3000/api/v1/clients/:clientId/contacts
GET http://127.0.0.1:3000/api/v1/contacts/:id
PATCH http://127.0.0.1:3000/api/v1/contacts/:id
DELETE http://127.0.0.1:3000/api/v1/contacts/:id
POST http://127.0.0.1:3000/api/v1/projects/:projectId/memberships
GET http://127.0.0.1:3000/api/v1/projects/:projectId/memberships
DELETE http://127.0.0.1:3000/api/v1/projects/:projectId/memberships/:membershipId
POST http://127.0.0.1:3000/api/v1/projects/:projectId/tasks
GET http://127.0.0.1:3000/api/v1/projects/:projectId/tasks
GET http://127.0.0.1:3000/api/v1/tasks/:id
PATCH http://127.0.0.1:3000/api/v1/tasks/:id
DELETE http://127.0.0.1:3000/api/v1/tasks/:id
POST http://127.0.0.1:3000/api/v1/projects/:projectId/deliverables
GET http://127.0.0.1:3000/api/v1/projects/:projectId/deliverables
GET http://127.0.0.1:3000/api/v1/deliverables/:id
PATCH http://127.0.0.1:3000/api/v1/deliverables/:id
DELETE http://127.0.0.1:3000/api/v1/deliverables/:id
POST http://127.0.0.1:3000/api/v1/deliverables/:deliverableId/approvals
GET http://127.0.0.1:3000/api/v1/deliverables/:deliverableId/approvals
GET http://127.0.0.1:3000/api/v1/approvals/:id
PATCH http://127.0.0.1:3000/api/v1/approvals/:id
DELETE http://127.0.0.1:3000/api/v1/approvals/:id
POST http://127.0.0.1:3000/api/v1/tasks/:taskId/dependencies
GET http://127.0.0.1:3000/api/v1/tasks/:taskId/dependencies
GET http://127.0.0.1:3000/api/v1/dependencies/:id
PATCH http://127.0.0.1:3000/api/v1/dependencies/:id
DELETE http://127.0.0.1:3000/api/v1/dependencies/:id
```

Todas as rotas de `clients`, `projects`, `contacts`, `memberships`, `tasks`, `deliverables`, `approvals` e `dependencies` exigem autenticação (`Authorization: Bearer <token>`) e a permissão correspondente (`client:read`/`write`, `project:read`/`write`, `contact:read`/`write`, `project_membership:read`/`write`, `task:read`/`write`, `deliverable:read`/`write`, `approval:read`/`write`, `dependency:read`/`write`). O `DELETE` de participação em projeto não remove o registro; encerra a participação (`leftAt`), preservando o histórico. O `PATCH` de aprovação que define `status` diferente de `pending` preenche `decidedAt` automaticamente. O `POST` de dependência rejeita com 400 uma tarefa que dependa de si mesma.

## Persistência local (PostgreSQL)

O schema e as migrações existem e compilam, mas isso não comprova, por si só, que a persistência funciona contra um banco real em execução. As migrações das tabelas `task` (`drizzle/0001_deep_scarlet_spider.sql`), `deliverable` (`drizzle/0002_nifty_electro.sql`), `approval` (`drizzle/0003_daffy_odin.sql`) e `dependency` (`drizzle/0004_icy_pestilence.sql`) foram geradas com `npm run db:generate`, que não depende de conexão com banco — apenas compara o schema Drizzle com o histórico de migrações. Aplicá-las contra um banco real ainda depende dos passos abaixo — por decisão do CEO, essa validação (Parte B) será feita em bloco depois que a Fase 5 estiver completa. Para validar isso de fato, quando chegar a hora:

1. Subir o banco local definido em `infrastructure/local/docker-compose.yml`:

   ```powershell
   docker compose -f ../../infrastructure/local/docker-compose.yml up -d
   ```

2. Aplicar as migrações:

   ```powershell
   npm run db:migrate
   ```

3. Rodar o teste de integração real, contra o banco em execução (não mockado):

   ```powershell
   npm run test:integration
   ```

Esse comando executa sete arquivos de teste de integração: o de persistência básica (`person`, Task 052), o de CRUD real de clientes e projetos via API (`tests/client-project.integration.test.ts`, Task 053), o de contatos e participação em projeto via API (`tests/contact-membership.integration.test.ts`, Task 054), o de tarefas via API (`tests/task.integration.test.ts`, Task 055), o de entregáveis via API (`tests/deliverable.integration.test.ts`, Task 056), o de aprovações via API (`tests/approval.integration.test.ts`, Task 057) e o de dependências via API (`tests/dependency.integration.test.ts`, Task 058), todos isolados da suíte padrão (`npm test`), que continua rodando sem depender de um banco disponível.
