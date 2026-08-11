---
id: task-2026-056
type: task
title: "Fase 5 — quarta fatia operacional: entidade deliverable (entregáveis) e sua API"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-11"
updated_at: "2026-08-11"
reviewed_at: "2026-08-11T10:26:57-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-055-fase5-entidade-tarefa.md
  - apps/core-brain/src/db/schema/task.ts
  - apps/core-brain/src/db/schema/project.ts
  - apps/core-brain/src/http/routes/task.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-055-fase5-entidade-tarefa.md
aliases:
  - Fase 5 — API de entregáveis
  - Quarta fatia operacional do Core Brain
  - Entidade deliverable
tags: [core-brain, fase-5, api, entregaveis, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-056-fase5-entidade-entregavel.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/deliverable.ts
  - apps/core-brain/src/http/routes/deliverable.ts
  - apps/core-brain/tests/deliverable.test.ts
  - apps/core-brain/tests/deliverable.integration.test.ts
  - apps/core-brain/drizzle/0002_nifty_electro.sql
  - apps/core-brain/drizzle/meta/0002_snapshot.json
  - apps/core-brain/drizzle/meta/_journal.json
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-052-validacao-real-persistencia-core-brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-053-fase5-api-client-project.md
  - 00_SYSTEM/tasks/done/TASK-2026-054-fase5-api-contact-membership.md
  - 00_SYSTEM/tasks/done/TASK-2026-055-fase5-entidade-tarefa.md
  - apps/core-brain/src/db/schema/client.ts
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/src/db/schema/identity.ts
  - apps/core-brain/src/db/schema/profile.ts
  - apps/core-brain/src/db/schema/role.ts
  - apps/core-brain/src/db/schema/project.ts
  - apps/core-brain/src/db/schema/task.ts
  - apps/core-brain/src/db/schema/session.ts
  - apps/core-brain/src/modules/
  - apps/core-brain/src/http/middlewares/
  - apps/core-brain/src/http/routes/auth.ts
  - apps/core-brain/src/http/routes/health.ts
  - apps/core-brain/src/http/routes/client.ts
  - apps/core-brain/src/http/routes/project.ts
  - apps/core-brain/src/http/routes/contact.ts
  - apps/core-brain/src/http/routes/project-membership.ts
  - apps/core-brain/src/http/routes/task.ts
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
  - apps/core-brain/tests/task.test.ts
  - apps/core-brain/tests/task.integration.test.ts
  - apps/core-brain/drizzle/0000_orange_hammerhead.sql
  - apps/core-brain/drizzle/meta/0000_snapshot.json
  - apps/core-brain/drizzle/0001_deep_scarlet_spider.sql
  - apps/core-brain/drizzle/meta/0001_snapshot.json
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
requires_review: false
acceptance_criteria:
  - Entidade deliverable criada em apps/core-brain/src/db/schema/deliverable.ts, vinculada a project (obrigatório) e opcionalmente a task e a person (responsável), exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para deliverable criadas em apps/core-brain/src/http/routes/deliverable.ts, registradas em build-app.ts.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de deliverable.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas de client/project/contact/project-membership/task já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de deliverable via API, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de resolver a Parte B ao final da Fase 5.
  - npm run typecheck, npm test e npm run build continuam passando (42/42 testes na suíte padrão, incluindo os 37 já existentes).
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo o estado real, mantendo a suposição explícita de single-tenant e a Parte B pendente.
  - Nenhuma credencial, dado real ou dependência nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a criação da entidade deliverable (entregáveis), sua migração gerada (não aplicada) e sua API CRUD, sob suposição explícita de single-tenant. Não autoriza o modelo de multi-organização, os demais entregáveis da Fase 5 (aprovações, dependências, riscos, comentários, histórico de mudanças, dashboards), aplicação real de qualquer migração contra banco (Parte B, adiada por decisão do CEO até o fim da Fase 5), autenticação de produção real, alteração de código de identidade/autenticação/autorização ou das rotas já existentes, ou qualquer credencial, dado real ou dependência nova."
---

# Task 056 — Fase 5, quarta fatia operacional: entidade deliverable (entregáveis) e sua API

## Contexto

Após o encerramento da Task 055 (entidade `task`, primeira entidade de schema nova da Fase 5), perguntei se a fase estava completa. Não estava — cobrimos 4 dos 12 entregáveis previstos no Plano Mestre, e nenhuma validação real (Parte B) havia sido executada ainda. O CEO decidiu explicitamente: continuar as fatias da Fase 5 primeiro, e resolver a Parte B (aplicação real das migrações e validação contra Postgres) somente depois que a fase estiver completa — não a cada fatia, como vinha sendo o padrão implícito até aqui.

Segui a ordem do Plano Mestre e propus "entregáveis" como próxima fatia, por depender apenas do que já existe (`project`, `task`, `person`) e por preparar terreno para "aprovações", que provavelmente vai se conectar a esta entidade. O CEO autorizou.

## Objetivo

Criar a entidade `deliverable`, vinculada a `project` e opcionalmente a `task` (a tarefa que a originou) e a `person` (responsável), gerar sua migração e expor sua API CRUD, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant.

## Escopo executado

1. `apps/core-brain/src/db/schema/deliverable.ts`: entidade `deliverable` com `project_id` (obrigatório, `onDelete: cascade`), `task_id` (opcional, `onDelete: set null`), título, descrição, `status` (enum: `draft`, `in_review`, `approved`, `delivered`, `rejected`, padrão `draft`), `assignee_person_id` (opcional, `onDelete: set null`), prazo (`due_date`) e o mesmo padrão de exclusão lógica já usado nas entidades anteriores.
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `deliverable.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0002_nifty_electro.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/deliverable.ts`: rotas `POST/GET /projects/:projectId/deliverables` e `GET/PATCH/DELETE /deliverables/:id`, com validação Zod, autenticação, RBAC (`deliverable:read`/`deliverable:write`) e auditoria, verificando a existência do projeto antes de criar ou listar entregáveis.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/deliverable.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
7. `apps/core-brain/tests/deliverable.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `deliverable` via API, isolado da suíte padrão — escrito, mas deliberadamente não executado (Parte B adiada para o fim da Fase 5).
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados com o estado real, incluindo a decisão explícita do CEO de resolver a Parte B ao final da fase.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 42/42 testes passando (5 novos, mais os 37 já existentes), 10 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos cinco arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — deliberadamente adiada para o fim da Fase 5

Por decisão explícita do CEO, a aplicação real das migrações (`0001_deep_scarlet_spider.sql`, `0002_nifty_electro.sql` e as que vierem a seguir) e a execução de `npm run test:integration` contra um banco real serão feitas em bloco, depois que a Fase 5 estiver completa — não a cada fatia, como registrado nas Tasks 052 a 055.

## Critérios de aceite

- [x] Entidade `deliverable` criada, vinculada a `project`, `task` e `person`, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/deliverable.ts`, integrado em `main` no commit `76832b1b562487b97ab4dd3c21c11123de8f763a`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0002_nifty_electro.sql`, conferida manualmente contra o schema; `npm run test:integration` segue falhando com `ECONNREFUSED`, confirmando que não foi aplicada.
- [x] Rotas CRUD para `deliverable` criadas e registradas. Evidência: `apps/core-brain/src/http/routes/deliverable.ts`, registrado em `build-app.ts`.
- [x] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]` em cada rota; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes. Evidência: `git show --name-status --format= origin/main` confirmou apenas os 12 arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/deliverable.test.ts`, 5 testes, parte dos 42/42 da suíte padrão.
- [x] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado. Evidência: `tests/deliverable.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão explícita do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (42/42 testes). Evidência: reexecutados após o merge, contra `main` sincronizado (`76832b1`): typecheck limpo, 42/42 testes em 10 arquivos, build sem erros.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre, ambos integrados em `main`.
- [x] Nenhuma credencial, dado real, dependência nova ou decisão de multi-organização. Evidência: diff do PR #41 restrito aos 12 arquivos previstos; nenhuma alteração em `package.json`; suposição single-tenant mantida.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge. Evidência: gate explícito "autorizado" concedido para o merge do PR #41.

## Riscos e gates humanos

Riscos: adiar a Parte B para o fim da Fase 5 significa que erros de aplicação real de migração (não capturados pelo `generate`) só aparecerão depois de acumular várias entidades, tornando a depuração potencialmente mais trabalhosa — risco aceito explicitamente pelo CEO; a suposição single-tenant segue acumulando escopo; ausência de Docker neste ambiente segue sendo uma limitação estrutural.

Gate vigente: encerrado. O merge do PR #41 foi autorizado (`autorizado`) e executado por squash em `76832b1b562487b97ab4dd3c21c11123de8f763a`. Esta task está formalmente concluída. Os demais entregáveis da Fase 5, o modelo de multi-organização e a Parte B (aplicação real de todas as migrações e validação contra Postgres, adiada para o fim da fase) permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 055 → CEO pergunta é respondida (Fase 5 não está completa) → CEO decide continuar as fatias da Fase 5 e resolver a Parte B só ao final → proponho o escopo desta task (entidade `deliverable` nova, reaproveitando o padrão já estabelecido) → `autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `autorizado` (merge do PR #41, integrado em `76832b1b562487b97ab4dd3c21c11123de8f763a`).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-11

**Gate de encerramento**: o CEO autorizou (`autorizado`) o squash merge do PR #41.

**Integração**: PR #41 integrado em `main` via squash merge, commit `76832b1b562487b97ab4dd3c21c11123de8f763a`, em 2026-08-11T13:25:40Z. Escopo integrado: exatamente os 12 arquivos previstos em `allowed_paths` — criação de `src/db/schema/deliverable.ts`, `src/http/routes/deliverable.ts`, `tests/deliverable.test.ts`, `tests/deliverable.integration.test.ts`, `drizzle/0002_nifty_electro.sql` e `drizzle/meta/0002_snapshot.json`; edição de `src/db/schema/index.ts`, `src/app/build-app.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `80b14f4..76832b1`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 42/42 testes passando em 10 arquivos, build sem erros. Confirma que a integração não quebrou o comportamento da suíte padrão nem o build de produção.

**Estado final**: a quarta fatia operacional da Fase 5 (entidade `deliverable` e sua API real, com autenticação e RBAC) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. Os demais entregáveis da Fase 5 (aprovações, dependências, riscos, comentários, histórico de mudanças, dashboards), o modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente, por decisão do CEO adiada em bloco para o final da Fase 5.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização ou das rotas já existentes foi tocado; nenhuma credencial, dado real ou dependência nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida.

**Integração deste próprio encerramento**: ainda pendente. Este documento de encerramento, ao ser commitado, seguirá o mesmo ciclo de governança (branch → commit → push → PR → gate de merge explícito) antes de ser integrado em `main`.
