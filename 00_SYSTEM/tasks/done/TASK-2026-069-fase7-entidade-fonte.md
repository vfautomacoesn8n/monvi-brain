---
id: task-2026-069
type: task
title: "Fase 7 — primeira fatia operacional: entidade source (cadastro de fontes) e sua API"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-12"
updated_at: "2026-08-12"
reviewed_at: "2026-08-12T14:55:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-065-fase6-entidade-lead.md
  - apps/core-brain/src/db/schema/lead.ts
  - apps/core-brain/src/http/routes/lead.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-065-fase6-entidade-lead.md
aliases:
  - Fase 7 — API de fontes de conhecimento
  - Primeira fatia operacional da Fase 7
  - Entidade source
tags: [core-brain, fase-7, api, fontes, conhecimento, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-069-fase7-entidade-fonte.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/source.ts
  - apps/core-brain/src/http/routes/source.ts
  - apps/core-brain/tests/source.test.ts
  - apps/core-brain/tests/source.integration.test.ts
  - apps/core-brain/drizzle/0010_modern_maelstrom.sql
  - apps/core-brain/drizzle/meta/0010_snapshot.json
  - apps/core-brain/drizzle/meta/_journal.json
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - apps/core-brain/src/db/schema/client.ts
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/src/db/schema/identity.ts
  - apps/core-brain/src/db/schema/profile.ts
  - apps/core-brain/src/db/schema/role.ts
  - apps/core-brain/src/db/schema/project.ts
  - apps/core-brain/src/db/schema/task.ts
  - apps/core-brain/src/db/schema/deliverable.ts
  - apps/core-brain/src/db/schema/approval.ts
  - apps/core-brain/src/db/schema/dependency.ts
  - apps/core-brain/src/db/schema/risk.ts
  - apps/core-brain/src/db/schema/comment.ts
  - apps/core-brain/src/db/schema/lead.ts
  - apps/core-brain/src/db/schema/opportunity.ts
  - apps/core-brain/src/db/schema/activity.ts
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
  - apps/core-brain/src/http/routes/deliverable.ts
  - apps/core-brain/src/http/routes/approval.ts
  - apps/core-brain/src/http/routes/dependency.ts
  - apps/core-brain/src/http/routes/risk.ts
  - apps/core-brain/src/http/routes/comment.ts
  - apps/core-brain/src/http/routes/history.ts
  - apps/core-brain/src/http/routes/dashboard.ts
  - apps/core-brain/src/http/routes/lead.ts
  - apps/core-brain/src/http/routes/opportunity.ts
  - apps/core-brain/src/http/routes/activity.ts
  - apps/core-brain/src/http/routes/commercial-dashboard.ts
  - apps/core-brain/tests/
  - apps/core-brain/drizzle/0000_orange_hammerhead.sql
  - apps/core-brain/drizzle/0001_deep_scarlet_spider.sql
  - apps/core-brain/drizzle/0002_nifty_electro.sql
  - apps/core-brain/drizzle/0003_daffy_odin.sql
  - apps/core-brain/drizzle/0004_icy_pestilence.sql
  - apps/core-brain/drizzle/0005_curious_synch.sql
  - apps/core-brain/drizzle/0006_equal_gladiator.sql
  - apps/core-brain/drizzle/0007_secret_wither.sql
  - apps/core-brain/drizzle/0008_ancient_santa_claus.sql
  - apps/core-brain/drizzle/0009_dazzling_kronos.sql
  - apps/core-brain/drizzle/meta/0000_snapshot.json
  - apps/core-brain/drizzle/meta/0001_snapshot.json
  - apps/core-brain/drizzle/meta/0002_snapshot.json
  - apps/core-brain/drizzle/meta/0003_snapshot.json
  - apps/core-brain/drizzle/meta/0004_snapshot.json
  - apps/core-brain/drizzle/meta/0005_snapshot.json
  - apps/core-brain/drizzle/meta/0006_snapshot.json
  - apps/core-brain/drizzle/meta/0007_snapshot.json
  - apps/core-brain/drizzle/meta/0008_snapshot.json
  - apps/core-brain/drizzle/meta/0009_snapshot.json
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
  - Entidade source criada em apps/core-brain/src/db/schema/source.ts, com nome, tipo, descricao, responsavel e status opcionais, exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para source criadas em apps/core-brain/src/http/routes/source.ts, registradas em build-app.ts.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de source.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de source via API, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a primeira fatia da Fase 7.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade além de source criada; nenhum trabalho de extração, indexação, busca textual ou embeddings iniciado.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criação da entidade source (Fase 7), sua migração gerada (não aplicada) e sua API CRUD, sob suposição explícita de single-tenant. Não autoriza document, classificacao, permissoes granulares por documento, extracao, indexacao, busca textual, politica de retencao, memoria operacional, embeddings ou busca vetorial (explicitamente bloqueados pela regra da Fase 7 ate fontes/permissoes/versionamento/descarte estarem definidos), o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes, ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 069 — Fase 7, primeira fatia operacional: entidade source e sua API

## Contexto

Após o encerramento da Task 068 (dashboard de indicadores comerciais, quarta fatia da Fase 6), o CEO decidiu avançar para a Fase 7 (conhecimento, documentos e memória). O primeiro entregável explícito do Plano Mestre é "cadastro de fontes", e é também o único ponto de partida permitido pela regra da própria fase: "embeddings e memória semântica só entram após fontes, permissões, versionamento e descarte estarem definidos". Propus a entidade `source` como registro isolado de onde o conhecimento institucional vem (documento manual, upload, Google Drive, site, API), sem nenhuma relação com entidades das Fases 5/6. O CEO autorizou.

## Objetivo

Criar a entidade `source`, gerar sua migração e expor sua API CRUD, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant já em vigor.

## Escopo executado

1. `apps/core-brain/src/db/schema/source.ts`: entidade `source` com nome (obrigatório), tipo (enum `source_type`: `manual`/`upload`/`google_drive`/`website`/`api`/`other`, padrão `other`), descrição opcional, responsável opcional (`owner_person_id`, `onDelete: set null`), status (enum `source_status`: `active`/`archived`, padrão `active`), notas e o mesmo padrão de exclusão lógica das entidades anteriores.
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `source.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0010_modern_maelstrom.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/source.ts`: rotas `POST/GET /sources` e `GET/PATCH/DELETE /sources/:id`, com validação Zod, autenticação, RBAC (`source:read`/`source:write`) e auditoria.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/source.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
7. `apps/core-brain/tests/source.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `source` via API — isolado da suíte padrão, escrito mas deliberadamente não executado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a primeira fatia da Fase 7.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 85/85 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos dezesseis arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Entidade `source` criada, com nome, tipo, descrição, responsável e status opcionais, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/source.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0010_modern_maelstrom.sql`, conferida manualmente.
- [x] Rotas CRUD para `source` criadas e registradas. Evidência: `apps/core-brain/src/http/routes/source.ts`, registrado em `build-app.ts`.
- [x] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]` em cada rota; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/source.test.ts`, 5 testes.
- [x] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado. Evidência: `tests/source.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (85/85 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade adicional, trabalho de extração/indexação/busca/embeddings ou decisão de multi-organização. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade além de `source`.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito "Aprovado" para o merge do PR #65; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; `source` ainda não tem nenhuma relação com `document` (que ainda não existe) — a modelagem dessa relação fica para a próxima fatia.

Gate vigente: encerrado. O merge do PR #65 foi autorizado (`Aprovado`) e executado por squash em `4a81ec5ee627cfc2e6d16613717c20a57322e9af`. Esta task está formalmente concluída. Os demais entregáveis da Fase 7, o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 068 → CEO pede para avançar para a Fase 7 → proponho o escopo desta task (entidade `source`, cadastro de fontes, primeiro entregável e único ponto de partida permitido pela regra da fase) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Aprovado` (merge do PR #65, integrado em `4a81ec5ee627cfc2e6d16613717c20a57322e9af`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-12

**Gate de encerramento**: o CEO autorizou (`Aprovado`) o squash merge do PR #65.

**Integração**: PR #65 integrado em `main` via squash merge, commit `4a81ec5ee627cfc2e6d16613717c20a57322e9af`, em 2026-08-12T17:50:35Z. Escopo integrado: exatamente os 13 arquivos previstos em `allowed_paths` — criação de `src/db/schema/source.ts`, `src/http/routes/source.ts`, `tests/source.test.ts`, `tests/source.integration.test.ts`, `drizzle/0010_modern_maelstrom.sql` e `drizzle/meta/0010_snapshot.json`; edição de `src/db/schema/index.ts`, `src/app/build-app.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `772f23a..4a81ec5`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 85/85 testes passando em 21 arquivos, build sem erros.

**Estado final**: a primeira fatia operacional da Fase 7 (entidade `source` e sua API real, com autenticação e RBAC) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. Os demais entregáveis da Fase 7 (`document`, classificação, permissões, extração, indexação, busca textual, política de retenção, memória operacional e, por último, embeddings/busca vetorial), o modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização ou das rotas já existentes foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma entidade além de `source` foi criada; nenhum trabalho de extração, indexação, busca textual ou embeddings foi iniciado.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: dar o primeiro passo da Fase 7, criando o cadastro de fontes de conhecimento — o único entregável que a regra explícita da fase permite iniciar antes de qualquer trabalho de documentos, permissões, indexação ou embeddings.

**Resultado conhecido**: entidade `source` implementada e integrada, isolada de qualquer entidade das Fases 5/6, sem tocar em nenhum código já existente.

**O que ajudou**: o padrão de entidade simples (nome, tipo enumerado, responsável opcional, status, exclusão lógica) já validado em `lead` foi diretamente reaplicável — nenhuma decisão de design nova foi necessária, já que `source` não tem nenhuma relação (FK) com entidades de outras fases.

**O que dificultou**: nada de relevante; quinta task de código sob as Regras Fundamentais 5 e 6 (contando desde a Task 065), e o ciclo está bem estabelecido.

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum.

**Perguntas em aberto**: como `source` vai se relacionar com `document` quando essa entidade for criada (referência opcional, provavelmente `onDelete: set null`, seguindo o padrão já usado em `opportunity.leadId` e `activity.leadId`/`activity.opportunityId`) — fica para a próxima fatia decidir.

**Ações propostas**: nenhuma adicional; `document` (com versionamento) é a próxima candidata natural, já que a regra da fase exige fontes, permissões, versionamento e descarte definidos antes de qualquer trabalho de busca ou embeddings.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
