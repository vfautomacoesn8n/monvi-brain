# Monvi Core Brain

Fundação técnica do Monvi Core Brain MVP, autorizada pela Task 041 e evoluída pelas Tasks 043 (persistência), 044 (identidade/autenticação/autorização), 045 (correção e validação factual), 053 a 062 (Fase 5 — API operacional de clientes, projetos, contatos, participação em projetos, tarefas, entregáveis, aprovações, dependências, riscos, comentários, histórico de mudanças e dashboard de projeto — os 12 entregáveis da fase, agora completos).

## Escopo implementado

- TypeScript e Fastify;
- configuração validada com Zod;
- logs estruturados;
- tratamento básico de erros;
- `GET /api/v1/health`;
- `GET /api/v1/ready`;
- schema de domínio via Drizzle (pessoa, identidade, perfil, papel, permissão, cliente, projeto, tarefa, entregável, aprovação, dependência, risco, comentário, sessão);
- persistência local via PostgreSQL e migrações Drizzle (Fase 3);
- autenticação de desenvolvimento (`POST /api/v1/auth/dev-login`, bloqueada quando `NODE_ENV=production`) e autorização RBAC (Fase 4);
- API operacional de clientes, projetos, contatos, participação em projetos, tarefas, entregáveis, aprovações, dependências entre tarefas, riscos e comentários em tarefas (CRUD/gestão de ciclo de vida, com autenticação e RBAC obrigatórios), sob suposição explícita de single-tenant — sem modelo de multi-organização, decisão ainda pendente (Fase 5, Tasks 053 a 062);
- API de leitura do histórico de mudanças (`GET /api/v1/history`), genérica para todas as entidades da Fase 5, reaproveitando a tabela `audit_event` já existente desde a Fase 4 — nenhuma tabela nova criada;
- dashboard operacional mínimo por projeto (`GET /api/v1/projects/:projectId/dashboard`), agregando contagens reais de tarefas, entregáveis, riscos e aprovações por status (e riscos por severidade) — também sem tabela nova, apenas `COUNT(*) GROUP BY status` sobre as tabelas já existentes;
- testes automatizados unitários, de configuração, de autenticação/autorização e de rotas de clientes, projetos, contatos, participação em projetos, tarefas, entregáveis, aprovações, dependências, riscos, comentários, histórico de mudanças e dashboard.

Autenticação de produção real (Google Workspace/OIDC), modelo de multi-organização, credenciais reais, dados reais de clientes, integrações externas, homologação e produção permanecem fora do escopo. Os 12 entregáveis previstos para a Fase 5 no Plano Mestre estão implementados; falta apenas a Parte B (validação real contra Postgres, deliberadamente adiada para depois de a fase estar completa) e a decisão de multi-organização. Comentários estão escopados a tarefas apenas (sem associação polimórfica a outras entidades ainda); o dashboard cobre tarefas, entregáveis, riscos e aprovações — dependências e comentários não entram no agregado desta primeira versão.

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
POST http://127.0.0.1:3000/api/v1/projects/:projectId/risks
GET http://127.0.0.1:3000/api/v1/projects/:projectId/risks
GET http://127.0.0.1:3000/api/v1/risks/:id
PATCH http://127.0.0.1:3000/api/v1/risks/:id
DELETE http://127.0.0.1:3000/api/v1/risks/:id
POST http://127.0.0.1:3000/api/v1/tasks/:taskId/comments
GET http://127.0.0.1:3000/api/v1/tasks/:taskId/comments
GET http://127.0.0.1:3000/api/v1/comments/:id
PATCH http://127.0.0.1:3000/api/v1/comments/:id
DELETE http://127.0.0.1:3000/api/v1/comments/:id
GET http://127.0.0.1:3000/api/v1/history?entityType=<tipo>&entityId=<uuid>
GET http://127.0.0.1:3000/api/v1/projects/:projectId/dashboard
```

Todas as rotas de `clients`, `projects`, `contacts`, `memberships`, `tasks`, `deliverables`, `approvals`, `dependencies`, `risks`, `comments`, `history` e `dashboard` exigem autenticação (`Authorization: Bearer <token>`) e a permissão correspondente (`client:read`/`write`, `project:read`/`write`, `contact:read`/`write`, `project_membership:read`/`write`, `task:read`/`write`, `deliverable:read`/`write`, `approval:read`/`write`, `dependency:read`/`write`, `risk:read`/`write`, `comment:read`/`write`, `history:read`, `dashboard:read`). O `DELETE` de participação em projeto não remove o registro; encerra a participação (`leftAt`), preservando o histórico. O `PATCH` de aprovação que define `status` diferente de `pending` preenche `decidedAt` automaticamente. O `POST` de dependência rejeita com 400 uma tarefa que dependa de si mesma. O autor de um comentário é sempre o usuário autenticado (`request.user.personId`), nunca informado no corpo da requisição. `GET /history` aceita `entityType` em `client`, `project`, `contact`, `project_membership`, `task`, `deliverable`, `approval`, `dependency`, `risk` ou `comment`, e retorna os eventos de `audit_event` daquela entidade, mais recentes primeiro — não é uma tabela nova, é leitura sobre a auditoria já gravada por cada rota desde a Fase 4. `GET /projects/:projectId/dashboard` retorna contagens de tarefas e entregáveis por status, riscos por status e severidade, e aprovações por status (agregadas via `deliverable` do projeto) — todos os status possíveis aparecem com valor `0` quando não há registros, sem tabela nova.

## Persistência local (PostgreSQL)

O schema e as migrações existem e compilam, mas isso não comprova, por si só, que a persistência funciona contra um banco real em execução. As migrações das tabelas `task` (`drizzle/0001_deep_scarlet_spider.sql`), `deliverable` (`drizzle/0002_nifty_electro.sql`), `approval` (`drizzle/0003_daffy_odin.sql`), `dependency` (`drizzle/0004_icy_pestilence.sql`), `risk` (`drizzle/0005_curious_synch.sql`) e `comment` (`drizzle/0006_equal_gladiator.sql`) foram geradas com `npm run db:generate`, que não depende de conexão com banco — apenas compara o schema Drizzle com o histórico de migrações. Aplicá-las contra um banco real ainda depende dos passos abaixo — por decisão do CEO, essa validação (Parte B) será feita em bloco depois que a Fase 5 estiver completa. Para validar isso de fato, quando chegar a hora:

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

Esse comando executa onze arquivos de teste de integração: o de persistência básica (`person`, Task 052), o de CRUD real de clientes e projetos via API (`tests/client-project.integration.test.ts`, Task 053), o de contatos e participação em projeto via API (`tests/contact-membership.integration.test.ts`, Task 054), o de tarefas via API (`tests/task.integration.test.ts`, Task 055), o de entregáveis via API (`tests/deliverable.integration.test.ts`, Task 056), o de aprovações via API (`tests/approval.integration.test.ts`, Task 057), o de dependências via API (`tests/dependency.integration.test.ts`, Task 058), o de riscos via API (`tests/risk.integration.test.ts`, Task 059), o de comentários via API (`tests/comment.integration.test.ts`, Task 060), o de histórico de mudanças via API (`tests/history.integration.test.ts`, Task 061 — sem migração própria, reaproveita a tabela `audit_event` já existente) e o de dashboard de projeto via API (`tests/dashboard.integration.test.ts`, Task 062 — também sem migração própria), todos isolados da suíte padrão (`npm test`), que continua rodando sem depender de um banco disponível.
