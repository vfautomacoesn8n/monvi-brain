---
id: task-2026-055
type: task
title: "Fase 5 — terceira fatia operacional: entidade task (tarefas) e sua API"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-11"
updated_at: "2026-08-11"
reviewed_at: null
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-053-fase5-api-client-project.md
  - 00_SYSTEM/tasks/done/TASK-2026-054-fase5-api-contact-membership.md
  - apps/core-brain/src/db/schema/project.ts
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/src/http/routes/project.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-053-fase5-api-client-project.md
  - 00_SYSTEM/tasks/done/TASK-2026-054-fase5-api-contact-membership.md
aliases:
  - Fase 5 — API de tarefas
  - Terceira fatia operacional do Core Brain
  - Entidade task
tags: [core-brain, fase-5, api, tarefas, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-055-fase5-entidade-tarefa.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/task.ts
  - apps/core-brain/src/http/routes/task.ts
  - apps/core-brain/tests/task.test.ts
  - apps/core-brain/tests/task.integration.test.ts
  - apps/core-brain/drizzle/0001_deep_scarlet_spider.sql
  - apps/core-brain/drizzle/meta/0001_snapshot.json
  - apps/core-brain/drizzle/meta/_journal.json
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-052-validacao-real-persistencia-core-brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-053-fase5-api-client-project.md
  - 00_SYSTEM/tasks/done/TASK-2026-054-fase5-api-contact-membership.md
  - apps/core-brain/src/db/schema/client.ts
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/src/db/schema/identity.ts
  - apps/core-brain/src/db/schema/profile.ts
  - apps/core-brain/src/db/schema/role.ts
  - apps/core-brain/src/db/schema/project.ts
  - apps/core-brain/src/db/schema/session.ts
  - apps/core-brain/src/modules/
  - apps/core-brain/src/http/middlewares/
  - apps/core-brain/src/http/routes/auth.ts
  - apps/core-brain/src/http/routes/health.ts
  - apps/core-brain/src/http/routes/client.ts
  - apps/core-brain/src/http/routes/project.ts
  - apps/core-brain/src/http/routes/contact.ts
  - apps/core-brain/src/http/routes/project-membership.ts
  - apps/core-brain/tests/auth.test.ts
  - apps/core-brain/tests/health.test.ts
  - apps/core-brain/tests/config.test.ts
  - apps/core-brain/tests/db.test.ts
  - apps/core-brain/tests/db.integration.test.ts
  - apps/core-brain/tests/client.test.ts
  - apps/core-brain/tests/project.test.ts
  - apps/core-brain/tests/client-project.integration.test.ts
  - apps/core-brain/tests/contact.test.ts
  - apps/core-brain/tests/project-membership.test.ts
  - apps/core-brain/tests/contact-membership.integration.test.ts
  - apps/core-brain/drizzle/0000_orange_hammerhead.sql
  - apps/core-brain/drizzle/meta/0000_snapshot.json
  - apps/core-brain/package.json
  - apps/core-brain/vitest.config.ts
  - apps/core-brain/vitest.integration.config.ts
  - apps/core-brain/drizzle.config.ts
  - infrastructure/local/docker-compose.yml
forbidden_paths:
  - .git/
  - packages/
  - infrastructure/
  - 01_RAW/
  - 02_WIKI/
  - 05_SHARED/
  - 03_OPERATIONS/decisoes/
  - apps/core-brain/node_modules/
  - apps/core-brain/dist/
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
requires_review: true
acceptance_criteria:
  - Entidade task criada em apps/core-brain/src/db/schema/task.ts, vinculada a project (obrigatório) e person (responsável, opcional), exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para task criadas em apps/core-brain/src/http/routes/task.ts, registradas em build-app.ts.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de task.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas de client/project/contact/project-membership já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de task via API contra um banco real, isolado da suíte padrão, seguindo o mesmo padrão das Tasks 052, 053 e 054.
  - npm run typecheck, npm test e npm run build continuam passando (37/37 testes na suíte padrão, incluindo os 32 já existentes).
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo o estado real, mantendo a suposição explícita de single-tenant e a Parte B pendente (agora incluindo a aplicação real da migração).
  - Nenhuma credencial, dado real ou dependência nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a criação da entidade task (tarefas), sua migração gerada (não aplicada) e sua API CRUD, sob suposição explícita de single-tenant. Não autoriza o modelo de multi-organização, os demais entregáveis da Fase 5 (entregáveis, aprovações, dependências, riscos, comentários, histórico de mudanças, dashboards), aplicação real da migração contra banco (Parte B), autenticação de produção real, alteração de código de identidade/autenticação/autorização ou das rotas já existentes, ou qualquer credencial, dado real ou dependência nova."
---

# Task 055 — Fase 5, terceira fatia operacional: entidade task (tarefas) e sua API

## Contexto

Após o encerramento da Task 054 (segunda fatia da Fase 5: API de `contact`/`project_membership`, ambos reaproveitados da Fase 2), o CEO pediu para continuar com a próxima fatia. Diferente das duas anteriores, os próximos entregáveis da Fase 5 (tarefas, entregáveis, aprovações, dependências, riscos, comentários, histórico de mudanças) não têm schema — exigem desenhar uma entidade nova pela primeira vez nesta fase. Propus começar por `task` (tarefas), por ser o entregável de menor escopo que depende apenas do que já existe (`project`, `person`) e do qual os próximos entregáveis provavelmente dependem. O CEO autorizou.

Antes de propor o escopo, verifiquei que gerar a migração (`drizzle-kit generate`) não depende de conexão com banco — só compara o schema Drizzle com o histórico de migrações já existente. Isso significa que consigo desenhar e gerar a migração real, mesmo sem Docker; só a aplicação dela contra um banco em execução continua bloqueada (Parte B, mesma limitação já registrada nas Tasks 052, 053 e 054).

## Objetivo

Criar a entidade `task`, vinculada a `project` e opcionalmente a `person` (responsável), gerar sua migração e expor sua API CRUD, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant.

## Escopo executado

1. `apps/core-brain/src/db/schema/task.ts`: entidade `task` com `project_id` (obrigatório, `onDelete: cascade`), título, descrição, `status` (enum: `todo`, `in_progress`, `blocked`, `done`, `cancelled`, padrão `todo`), `assignee_person_id` (opcional, `onDelete: set null`), prazo (`due_date`) e o mesmo padrão de exclusão lógica já usado em `client`/`project`.
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `task.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0001_deep_scarlet_spider.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/task.ts`: rotas `POST/GET /projects/:projectId/tasks` e `GET/PATCH/DELETE /tasks/:id`, com validação Zod, autenticação, RBAC (`task:read`/`task:write`) e auditoria, verificando a existência do projeto antes de criar ou listar tarefas.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/task.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
7. `apps/core-brain/tests/task.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `task` via API, isolado da suíte padrão.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados com o estado real.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 37/37 testes passando (5 novos, mais os 32 já existentes), 9 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos quatro arquivos de integração, confirmando que a configuração está correta e que a validação real contra banco (incluindo a aplicação da migração) ainda não foi executada.

## Parte B — pendente, fora do meu alcance neste ambiente

Subir `infrastructure/local/docker-compose.yml`, rodar `npm run db:migrate` (aplicando também `0001_deep_scarlet_spider.sql`) e `npm run test:integration` em um ambiente com Docker disponível, e reportar o resultado. Acumula com a mesma pendência já registrada nas Tasks 052, 053 e 054.

## Critérios de aceite

- [ ] Entidade `task` criada, vinculada a `project` e `person`, exportada em `schema/index.ts`.
- [ ] Migração gerada (não aplicada) correspondendo ao schema desenhado.
- [ ] Rotas CRUD para `task` criadas e registradas.
- [ ] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente.
- [ ] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.
- [ ] Testes de bloqueio de acesso (401) passando sem banco real.
- [ ] Teste de integração real do ciclo completo criado, isolado da suíte padrão.
- [ ] `typecheck`, `test` e `build` continuam passando (37/37 testes).
- [ ] `README.md` e Plano Mestre atualizados.
- [ ] Nenhuma credencial, dado real, dependência nova ou decisão de multi-organização.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge.

## Riscos e gates humanos

Riscos: a migração gerada nunca foi aplicada contra um banco real, então erros de sintaxe SQL específicos do Postgres (não capturados pelo `generate`) só apareceriam na aplicação real (Parte B); a suposição single-tenant segue acumulando escopo; a Parte B pendente acumula com a das Tasks 052, 053 e 054; ausência de Docker neste ambiente segue sendo uma limitação estrutural.

Gate vigente: `autorizado` (em resposta à proposta de escopo da Task 055 — entidade `task` e sua API). Este gate autoriza a execução completa do escopo técnico e a condução do ciclo de governança (commit, push, PR) até o ponto em que a revisão final e o merge, que dependem de decisão do CEO, sejam solicitados. Não autoriza os demais entregáveis da Fase 5, o modelo de multi-organização, a aplicação real da migração, nem autenticação de produção real.

Histórico de gates desta task: encerramento da Task 054 → CEO pede para continuar com a próxima fatia → proponho o escopo desta task (entidade `task` nova, primeira desta fase, reaproveitando o padrão de autenticação/RBAC/auditoria/testes já estabelecido) → `autorizado` (este gate: execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
