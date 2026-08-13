---
id: task-2026-076
type: task
title: "Fase 8 — primeira fatia operacional: catálogo de workflows de automação (entidade automation_workflow e sua API)"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-13"
updated_at: "2026-08-13"
reviewed_at: "2026-08-13T13:55:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-entidade-fonte.md
  - apps/core-brain/src/db/schema/source.ts
  - apps/core-brain/src/http/routes/source.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-075-fase7-memoria-operacional.md
aliases:
  - Fase 8 — catálogo de workflows
  - Primeira fatia operacional da Fase 8
  - Entidade automation_workflow
tags: [core-brain, fase-8, api, automacao, workflows, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-076-fase8-catalogo-workflows.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/tests/automation-workflow.test.ts
  - apps/core-brain/tests/automation-workflow.integration.test.ts
  - apps/core-brain/drizzle/0016_funny_red_hulk.sql
  - apps/core-brain/drizzle/meta/0016_snapshot.json
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
  - apps/core-brain/src/db/schema/source.ts
  - apps/core-brain/src/db/schema/document.ts
  - apps/core-brain/src/db/schema/document-version.ts
  - apps/core-brain/src/db/schema/document-permission.ts
  - apps/core-brain/src/db/schema/memory-note.ts
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
  - apps/core-brain/src/http/routes/source.ts
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/src/http/routes/document-version.ts
  - apps/core-brain/src/http/routes/document-permission.ts
  - apps/core-brain/src/http/routes/search.ts
  - apps/core-brain/src/http/routes/memory-note.ts
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
  - apps/core-brain/drizzle/0010_modern_maelstrom.sql
  - apps/core-brain/drizzle/0011_tearful_expediter.sql
  - apps/core-brain/drizzle/0012_light_havok.sql
  - apps/core-brain/drizzle/0013_foamy_nighthawk.sql
  - apps/core-brain/drizzle/0014_purple_redwing.sql
  - apps/core-brain/drizzle/0015_dizzy_devos.sql
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
  - apps/core-brain/drizzle/meta/0010_snapshot.json
  - apps/core-brain/drizzle/meta/0011_snapshot.json
  - apps/core-brain/drizzle/meta/0012_snapshot.json
  - apps/core-brain/drizzle/meta/0013_snapshot.json
  - apps/core-brain/drizzle/meta/0014_snapshot.json
  - apps/core-brain/drizzle/meta/0015_snapshot.json
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
  - Entidade automation_workflow criada em apps/core-brain/src/db/schema/automation-workflow.ts, com nome, descricao, responsavel, tipo de gatilho pretendido e status opcionais, exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para automation_workflow criadas em apps/core-brain/src/http/routes/automation-workflow.ts, registradas em build-app.ts.
  - triggerType e status sao puramente descritivos nesta versao — nenhum gatilho real dispara nada, nenhuma execucao acontece.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission('automation:read'/'automation:write')), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de automation-workflow.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de automation_workflow via API, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a primeira fatia da Fase 8 e a transição formal da Fase 7 para "funcionalmente concluída, com duas frentes deixadas pendentes por decisão do CEO".
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade além de automation_workflow criada; nenhum gatilho, webhook, fila, retry, idempotência, dead-letter, aprovação, log, métrica, reprocessamento ou integração com n8n implementado.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criacao da entidade automation_workflow (Fase 8), sua migracao gerada (nao aplicada) e sua API CRUD, sob suposicao explicita de single-tenant. Nao autoriza gatilhos reais, webhooks, filas, retries, idempotencia, dead-letter, aprovacoes, logs, metricas, reprocessamento, integracao com n8n, o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes, extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 076 — Fase 8, primeira fatia operacional: catálogo de workflows de automação

## Contexto

Após o encerramento da Task 075 (memória operacional), o CEO decidiu deixar pendente a fatia de extração de arquivos reais da Fase 7 (dependente de decisão de infraestrutura de armazenamento) e avançar para a Fase 8 (plataforma de automações). O primeiro entregável explícito da fase é "catálogo de workflows" — pré-requisito para gatilhos, filas e execuções, que vão referenciar um workflow cadastrado. Propus `automation_workflow` no mesmo padrão de "cadastro" já usado para abrir a Fase 7 (`source`, Task 069): puro cadastro, sem nenhuma lógica de execução ainda. O CEO autorizou.

## Objetivo

Criar a entidade `automation_workflow`, gerar sua migração e expor sua API CRUD, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant já em vigor.

## Escopo executado

1. `apps/core-brain/src/db/schema/automation-workflow.ts`: entidade `automation_workflow` com nome (obrigatório), descrição opcional, responsável opcional (`owner_person_id`, `onDelete: set null`), tipo de gatilho pretendido (enum `automation_trigger_type`: `manual`/`webhook`/`schedule`/`event`, padrão `manual` — só descreve a intenção, não implementa disparo real), status (enum `automation_workflow_status`: `draft`/`active`/`paused`/`archived`, padrão `draft`), notas e o mesmo padrão de exclusão lógica das entidades anteriores.
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `automation-workflow.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0016_funny_red_hulk.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/automation-workflow.ts`: rotas `POST/GET /automation-workflows` e `GET/PATCH/DELETE /automation-workflows/:id`, com validação Zod, autenticação, RBAC (`automation:read`/`automation:write`) e auditoria.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/automation-workflow.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
7. `apps/core-brain/tests/automation-workflow.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `automation_workflow` via API — isolado da suíte padrão, escrito mas deliberadamente não executado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a primeira fatia da Fase 8 e a transição da Fase 7 para "funcionalmente concluída, com duas frentes deixadas pendentes por decisão do CEO" (movida para a seção "Concluído" do Plano Mestre).

Validado localmente: `npm run typecheck` sem erros; `npm test` com 106/106 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e um arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Entidade `automation_workflow` criada, com tipo de gatilho pretendido e status, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/automation-workflow.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0016_funny_red_hulk.sql`, conferida manualmente.
- [x] Rotas CRUD para `automation_workflow` criadas e registradas. Evidência: `apps/core-brain/src/http/routes/automation-workflow.ts`, registrado em `build-app.ts`.
- [x] `triggerType`/`status` puramente descritivos, sem execução real. Evidência: nenhuma lógica de disparo, fila ou execução implementada; campos apenas armazenados e retornados.
- [x] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]` em cada rota; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/automation-workflow.test.ts`, 5 testes.
- [x] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado. Evidência: `tests/automation-workflow.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (106/106 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados, incluindo a transição da Fase 7. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade adicional ou trabalho de execução real. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade além de `automation_workflow`.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito "Autorizado" para o merge do PR #79; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; nenhum risco novo específico desta task, já que é puro cadastro sem nenhuma lógica de execução.

Gate vigente: encerrado. O merge do PR #79 foi autorizado (`Autorizado`) e executado por squash em `457eda0d1e852c0e03bdb7022911467401931280`. Esta task está formalmente concluída. Os demais entregáveis da Fase 8, o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 075 → CEO decide deixar pendente a extração de arquivos da Fase 7 e avançar para a Fase 8 → pergunto quantas fases faltam e qual a próxima → apresento as fases 8 a 13 e o objetivo da Fase 8 → CEO pede para propor a primeira fatia → proponho o escopo desta task (entidade `automation_workflow`, catálogo de workflows, primeiro entregável da Fase 8) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #79, integrado em `457eda0d1e852c0e03bdb7022911467401931280`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-13

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #79.

**Integração**: PR #79 integrado em `main` via squash merge, commit `457eda0d1e852c0e03bdb7022911467401931280`, em 2026-08-13T16:48:23Z. Escopo integrado: exatamente os 13 arquivos previstos em `allowed_paths` — criação de `src/db/schema/automation-workflow.ts`, `src/http/routes/automation-workflow.ts`, `tests/automation-workflow.test.ts`, `tests/automation-workflow.integration.test.ts`, `drizzle/0016_funny_red_hulk.sql` e `drizzle/meta/0016_snapshot.json`; edição de `src/db/schema/index.ts`, `src/app/build-app.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `caa7d61..457eda0`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 106/106 testes passando em 26 arquivos, build sem erros.

**Estado final**: a primeira fatia operacional da Fase 8 (catálogo de workflows de automação) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. Restam gatilhos reais, webhooks, filas, retries, idempotência, dead-letter, aprovações, logs, métricas, reprocessamento e integração com n8n como entregáveis não iniciados da Fase 8. A Fase 7 permanece funcionalmente concluída com extração de arquivos reais e embeddings/busca vetorial deliberadamente pendentes, por decisão do CEO. O modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização ou das rotas já existentes foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma entidade além de `automation_workflow` foi criada; nenhum gatilho, webhook, fila, retry, idempotência, dead-letter ou execução real foi implementado.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: dar o primeiro passo da Fase 8, criando o catálogo de workflows — pré-requisito para tudo mais na fase (gatilhos, filas, execuções vão referenciar um workflow cadastrado).

**Resultado conhecido**: `automation_workflow` implementada e integrada, seguindo exatamente o mesmo padrão de "primeira entidade de fase, puro cadastro" já validado com `source` na abertura da Fase 7 (Task 069).

**O que ajudou**: reaplicar deliberadamente o padrão de abertura de fase já testado (nome, descrição, responsável, tipo/categoria, status, notas, exclusão lógica) — não houve nenhuma decisão de design nova a tomar, e a task fluiu no ritmo mais rápido desde o início da Fase 7.

**O que dificultou**: nada tecnicamente. A única decisão real foi de escopo, não de código: resistir à tentação de já incluir alguma lógica mínima de disparo (por exemplo, um `POST /automation-workflows/:id/trigger` que só logasse algo) — decidi não fazer isso porque não estava no escopo aprovado e criaria uma falsa sensação de "workflow funcional" quando na verdade é só cadastro.

**Surpresas**: nenhuma relacionada ao código. Notei, ao verificar o estado do repositório antes desta task, um terceiro arquivo (`00_SYSTEM/audits/Checklist-prontidao-executado-Monvi-Brain-v1.md`) exibindo o mesmo padrão de diff vazio (normalização de fim de linha) já visto nos dois arquivos historicamente conhecidos — não é uma mudança real de conteúdo, mesma causa (`core.autocrlf`), só um arquivo a mais afetado.

**Riscos materializados**: nenhum.

**Perguntas em aberto**: nenhuma nova.

**Ações propostas**: gatilhos reais e webhooks são as próximas candidatas naturais da Fase 8, já que o catálogo está pronto para ser referenciado por eles.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
