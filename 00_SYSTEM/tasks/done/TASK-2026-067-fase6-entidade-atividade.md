---
id: task-2026-067
type: task
title: "Fase 6 — terceira fatia operacional: entidade activity (diagnóstico, proposta e follow-up unificados) e sua API"
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
reviewed_at: "2026-08-12T14:05:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-066-fase6-entidade-oportunidade.md
  - apps/core-brain/src/db/schema/lead.ts
  - apps/core-brain/src/db/schema/opportunity.ts
  - apps/core-brain/src/http/routes/opportunity.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-065-fase6-entidade-lead.md
  - 00_SYSTEM/tasks/done/TASK-2026-066-fase6-entidade-oportunidade.md
aliases:
  - Fase 6 — API de atividades
  - Terceira fatia operacional da Fase 6
  - Entidade activity
tags: [core-brain, fase-6, api, atividades, crm, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-067-fase6-entidade-atividade.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/activity.ts
  - apps/core-brain/src/http/routes/activity.ts
  - apps/core-brain/tests/activity.test.ts
  - apps/core-brain/tests/activity.integration.test.ts
  - apps/core-brain/drizzle/0009_dazzling_kronos.sql
  - apps/core-brain/drizzle/meta/0009_snapshot.json
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
  - apps/core-brain/drizzle/meta/0000_snapshot.json
  - apps/core-brain/drizzle/meta/0001_snapshot.json
  - apps/core-brain/drizzle/meta/0002_snapshot.json
  - apps/core-brain/drizzle/meta/0003_snapshot.json
  - apps/core-brain/drizzle/meta/0004_snapshot.json
  - apps/core-brain/drizzle/meta/0005_snapshot.json
  - apps/core-brain/drizzle/meta/0006_snapshot.json
  - apps/core-brain/drizzle/meta/0007_snapshot.json
  - apps/core-brain/drizzle/meta/0008_snapshot.json
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
  - Entidade activity criada em apps/core-brain/src/db/schema/activity.ts, unificando diagnóstico, proposta e follow-up via discriminador activity_type, com vínculo opcional a lead e a opportunity, exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para activity criadas em apps/core-brain/src/http/routes/activity.ts, registradas em build-app.ts, exigindo pelo menos um de leadId/opportunityId na criação (validado via Zod).
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de activity.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes, incluindo lead e opportunity.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de activity via API, incluindo o caso de rejeição por ausência de lead/opportunity (400) e um ciclo completo vinculado a uma oportunidade, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a terceira fatia da Fase 6.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade além de activity criada.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criação da entidade activity (Fase 6), sua migração gerada (não aplicada) e sua API CRUD, sob suposição explícita de single-tenant. Não autoriza indicadores comerciais, integrações externas nem os demais entregáveis da Fase 6, o modelo de multi-organização, aplicação real de qualquer migração contra banco (Parte B, segue deliberadamente adiada), autenticação de produção real, alteração de código de identidade/autenticação/autorização ou das rotas já existentes (incluindo lead e opportunity), ou qualquer credencial, dado real ou dependência de software nova."
---

# Task 067 — Fase 6, terceira fatia operacional: entidade activity e sua API

## Contexto

Após o encerramento da Task 066 (entidade `opportunity`), o CEO pediu para continuar com a próxima fatia. Os entregáveis restantes da Fase 6 incluíam "diagnóstico", "proposta" e "follow-up" — três atividades comerciais distintas, mas estruturalmente idênticas: um evento vinculado a um lead ou a uma oportunidade, com tipo, agendamento, responsável e notas. Em vez de criar três tabelas quase duplicadas, propus uma única entidade `activity` com um discriminador `activity_type` cobrindo os três (mais `call`/`meeting`/`other`, para não fechar a porta a outros tipos de interação comercial já implícitos no domínio). "Qualificação" foi avaliada como já coberta pelos campos existentes `lead.status`/`lead.notes`, sem exigir entidade nova. O CEO autorizou.

## Objetivo

Criar a entidade `activity`, gerar sua migração e expor sua API CRUD, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant já em vigor.

## Escopo executado

1. `apps/core-brain/src/db/schema/activity.ts`: entidade `activity` com `lead_id` (opcional, `onDelete: set null`), `opportunity_id` (opcional, `onDelete: set null`), tipo (enum `activity_type`: `diagnosis`/`proposal`/`follow_up`/`call`/`meeting`/`other`, padrão `other`), status (enum `activity_status`: `scheduled`/`done`/`cancelled`, padrão `scheduled`), agendamento e conclusão opcionais, responsável comercial opcional (`owner_person_id`, `onDelete: set null`), notas e o mesmo padrão de exclusão lógica das entidades anteriores.
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `activity.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0009_dazzling_kronos.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/activity.ts`: rotas `POST/GET /activities` e `GET/PATCH/DELETE /activities/:id`, com validação Zod (exigindo, na criação, pelo menos um de `leadId`/`opportunityId` via `.refine`), autenticação, RBAC (`activity:read`/`activity:write`) e auditoria.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes (incluindo `lead` e `opportunity`).
6. `apps/core-brain/tests/activity.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
7. `apps/core-brain/tests/activity.integration.test.ts`: teste de integração real cobrindo a rejeição por ausência de lead/opportunity (400) e o ciclo completo de `activity` via API vinculado a uma oportunidade — isolado da suíte padrão, escrito mas deliberadamente não executado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a terceira fatia da Fase 6.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 79/79 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos catorze arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Entidade `activity` criada, unificando diagnóstico/proposta/follow-up via `activity_type`, com vínculo opcional a `lead` e `opportunity`, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/activity.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0009_dazzling_kronos.sql`, conferida manualmente.
- [x] Rotas CRUD para `activity` criadas e registradas, exigindo pelo menos um de `leadId`/`opportunityId`. Evidência: `apps/core-brain/src/http/routes/activity.ts`, registrado em `build-app.ts`, validação `.refine` no schema Zod de criação.
- [x] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]` em cada rota; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/activity.test.ts`, 5 testes.
- [x] Teste de integração real do ciclo completo criado, incluindo rejeição por ausência de vínculo (400), isolado da suíte padrão, não executado. Evidência: `tests/activity.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (79/79 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade adicional ou decisão de multi-organização. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade além de `activity`.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito "Autorizado" para o merge do PR #61; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; `activity` não valida que `leadId`/`opportunityId`, quando ambos informados, pertençam de fato um ao outro — decisão deliberada de manter simples até haver necessidade real comprovada.

Gate vigente: encerrado. O merge do PR #61 foi autorizado (`Autorizado`) e executado por squash em `ca1730259320c47daef0a3b297a69da59c16d991`. Esta task está formalmente concluída. Os demais entregáveis da Fase 6, o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 066 → CEO pede para continuar com a próxima fatia → proponho o escopo desta task (entidade `activity`, unificando diagnóstico/proposta/follow-up, vínculo opcional a `lead`/`opportunity`) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #61, integrado em `ca1730259320c47daef0a3b297a69da59c16d991`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-12

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #61.

**Integração**: PR #61 integrado em `main` via squash merge, commit `ca1730259320c47daef0a3b297a69da59c16d991`, em 2026-08-12T17:01:06Z. Escopo integrado: exatamente os 13 arquivos previstos em `allowed_paths` — criação de `src/db/schema/activity.ts`, `src/http/routes/activity.ts`, `tests/activity.test.ts`, `tests/activity.integration.test.ts`, `drizzle/0009_dazzling_kronos.sql` e `drizzle/meta/0009_snapshot.json`; edição de `src/db/schema/index.ts`, `src/app/build-app.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes, incluindo `lead` e `opportunity`.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `4109994..ca17302`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 79/79 testes passando em 19 arquivos, build sem erros.

**Estado final**: a terceira fatia operacional da Fase 6 (entidade `activity` e sua API real, com autenticação e RBAC) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. Os demais entregáveis da Fase 6 (indicadores comerciais, integrações externas), o modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização, das rotas já existentes (incluindo `lead` e `opportunity`) foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma entidade além de `activity` foi criada.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: dar continuidade ao funil comercial, cobrindo os entregáveis "diagnóstico", "proposta" e "follow-up" da Fase 6 sem criar três tabelas quase idênticas.

**Resultado conhecido**: entidade `activity` implementada e integrada, unificando os três entregáveis via `activity_type`, com vínculo opcional (mínimo um) a `lead` e `opportunity`, sem tocar em nenhum código já existente.

**O que ajudou**: o padrão de origem opcional (`onDelete: set null`) já validado em `opportunity.leadId` deu um modelo direto para os dois vínculos de `activity`; a decisão de unificar em uma entidade só, em vez de três tabelas, evitou duplicação sem adicionar complexidade real — a mesma lógica de "três linhas parecidas é melhor que abstração prematura" aplicada ao contrário (três tabelas parecidas seriam a duplicação prematura).

**O que dificultou**: a validação Zod `.refine()` exigindo pelo menos um de `leadId`/`opportunityId` precisou de atenção extra para não quebrar o `updateActivitySchema` (que não precisa dessa mesma restrição, já que a atividade já nasce vinculada) — resolvido mantendo dois schemas Zod separados para criação e atualização.

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum.

**Perguntas em aberto**: se `activity` deveria validar que, quando ambos `leadId` e `opportunityId` são informados, um pertence de fato ao outro (evitando vínculos inconsistentes) — decidi deliberadamente não implementar isso agora, por simplicidade; fica como ponto de atenção se um caso real exigir.

**Ações propostas**: nenhuma adicional; indicadores comerciais é a próxima candidata natural, provável extensão do padrão de dashboard já usado na Task 062.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
