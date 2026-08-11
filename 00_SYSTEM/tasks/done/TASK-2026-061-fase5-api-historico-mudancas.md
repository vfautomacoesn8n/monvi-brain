---
id: task-2026-061
type: task
title: "Fase 5 — nona fatia operacional: API de leitura do histórico de mudanças"
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
reviewed_at: "2026-08-11T14:21:17-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-060-fase5-entidade-comentario.md
  - apps/core-brain/src/db/schema/session.ts
  - apps/core-brain/src/modules/audit/audit.service.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-060-fase5-entidade-comentario.md
aliases:
  - Fase 5 — API de histórico de mudanças
  - Nona fatia operacional do Core Brain
  - Leitura genérica de audit_event
tags: [core-brain, fase-5, api, historico, auditoria, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-061-fase5-api-historico-mudancas.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/http/routes/history.ts
  - apps/core-brain/tests/history.test.ts
  - apps/core-brain/tests/history.integration.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-052-validacao-real-persistencia-core-brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-053-fase5-api-client-project.md
  - 00_SYSTEM/tasks/done/TASK-2026-054-fase5-api-contact-membership.md
  - 00_SYSTEM/tasks/done/TASK-2026-055-fase5-entidade-tarefa.md
  - 00_SYSTEM/tasks/done/TASK-2026-056-fase5-entidade-entregavel.md
  - 00_SYSTEM/tasks/done/TASK-2026-057-fase5-entidade-aprovacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-058-fase5-entidade-dependencia.md
  - 00_SYSTEM/tasks/done/TASK-2026-059-fase5-entidade-risco.md
  - 00_SYSTEM/tasks/done/TASK-2026-060-fase5-entidade-comentario.md
  - apps/core-brain/src/db/
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
  - apps/core-brain/tests/deliverable.test.ts
  - apps/core-brain/tests/deliverable.integration.test.ts
  - apps/core-brain/tests/approval.test.ts
  - apps/core-brain/tests/approval.integration.test.ts
  - apps/core-brain/tests/dependency.test.ts
  - apps/core-brain/tests/dependency.integration.test.ts
  - apps/core-brain/tests/risk.test.ts
  - apps/core-brain/tests/risk.integration.test.ts
  - apps/core-brain/tests/comment.test.ts
  - apps/core-brain/tests/comment.integration.test.ts
  - apps/core-brain/drizzle/
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
  - Rota GET /history criada em apps/core-brain/src/http/routes/history.ts, aceitando entityType e entityId via query string, validados contra as dez entidades da Fase 5.
  - Nenhuma tabela ou migração nova criada — a rota lê exclusivamente a tabela audit_event já existente desde a Fase 4.
  - A rota exige autenticação (authenticateRequest) e permissão (requirePermission('history:read')), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/, apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes.
  - Teste automatizado criado cobrindo o bloqueio de acesso sem token (401), passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo a listagem do histórico real de uma tarefa (criação e atualização) e a rejeição de entityType desconhecido, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de resolver a Parte B ao final da Fase 5.
  - npm run typecheck, npm test e npm run build continuam passando (63/63 testes na suíte padrão, incluindo os 62 já existentes).
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo o estado real, incluindo a decisão de reaproveitar audit_event em vez de criar uma tabela de histórico nova.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a criação de uma rota de leitura (GET /history) sobre a tabela audit_event já existente, cobrindo as dez entidades da Fase 5, sob suposição explícita de single-tenant. Não autoriza a criação de nenhuma tabela nova, o modelo de multi-organização, o último entregável da Fase 5 (dashboards), aplicação real de qualquer migração contra banco (Parte B, adiada por decisão do CEO até o fim da Fase 5), autenticação de produção real, alteração de código de identidade/autenticação/autorização, do módulo de auditoria ou das rotas já existentes, ou qualquer credencial, dado real ou dependência de software nova."
---

# Task 061 — Fase 5, nona fatia operacional: API de leitura do histórico de mudanças

## Contexto

Após o encerramento da Task 060 (entidade `comment`), o CEO pediu para continuar. Antes de propor um design, avaliei se "histórico de mudanças" exigia uma tabela nova. Concluí que não: a tabela `audit_event` (criada na Fase 4) já registra, via `recordAuditEvent`, um evento para cada criação/atualização/remoção em todas as rotas implementadas desde a Task 053 — incluindo, em atualizações, os campos alterados (`actionDetails.changes`). Criar uma segunda tabela duplicaria esse dado sem necessidade.

Apresentei essa análise ao CEO junto com uma decisão de escopo: uma rota genérica (`GET /history?entityType=...&entityId=...`, cobrindo todas as entidades de uma vez) ou uma rota escopada a `task`, como fiz com comentários. O CEO escolheu a rota genérica.

## Objetivo

Expor uma rota de leitura sobre `audit_event`, filtrando por tipo e id de entidade, cobrindo as dez entidades já implementadas na Fase 5 (`client`, `project`, `contact`, `project_membership`, `task`, `deliverable`, `approval`, `dependency`, `risk`, `comment`), com autenticação e RBAC obrigatórios — sem criar nenhuma tabela ou migração nova.

## Escopo executado

1. `apps/core-brain/src/http/routes/history.ts`: rota `GET /history`, validando `entityType` (enum das dez entidades) e `entityId` (uuid) via query string. Internamente, mapeia cada `entityType` para o prefixo de `eventType` correspondente (ex.: `task:`) e a chave usada em `actionDetails` para o id da própria entidade (ex.: `taskId`), filtrando `audit_event` com `eventType LIKE '<prefixo>%'` e `actionDetails ->> '<chave>' = entityId`, ordenado por `createdAt` decrescente. RBAC via `requirePermission('history:read')`.
2. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
3. `apps/core-brain/tests/history.test.ts`: teste de bloqueio de acesso sem token (401), sem dependência de banco real.
4. `apps/core-brain/tests/history.integration.test.ts`: teste de integração real cobrindo a listagem do histórico de uma tarefa (após criação e atualização reais) e a rejeição de `entityType` desconhecido com 400 — isolado da suíte padrão, escrito mas deliberadamente não executado.
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados com o estado real, deixando explícito que nenhuma tabela nova foi criada.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 63/63 testes passando (1 novo, mais os 62 já existentes), 15 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos dez arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — deliberadamente adiada para o fim da Fase 5

Mesma decisão já registrada nas Tasks 052 a 060: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas em bloco, depois que a Fase 5 estiver completa. Esta task não adiciona nenhuma migração nova (reaproveita `audit_event`, já parte da migração original), mas a validação real da consulta em si (`actionDetails ->> chave = entityId`) segue dependendo da mesma Parte B.

## Critérios de aceite

- [x] Rota `GET /history` criada, validando `entityType` contra as dez entidades da Fase 5. Evidência: `apps/core-brain/src/http/routes/history.ts`, integrado em `main` no commit `3a91c2a067d29c530d13726d4abb180ec8565d23`.
- [x] Nenhuma tabela ou migração nova criada. Evidência: nenhum arquivo em `apps/core-brain/drizzle/` foi alterado neste PR; `git show --name-status --format= origin/main` confirmou apenas os 8 arquivos previstos.
- [x] Rota exige autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission('history:read')]`; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em `src/db/`, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes. Evidência: diff restrito aos 8 arquivos previstos em `allowed_paths`.
- [x] Teste de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/history.test.ts`, 1 teste, parte dos 63/63 da suíte padrão.
- [x] Teste de integração real criado, isolado da suíte padrão, não executado. Evidência: `tests/history.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão explícita do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (63/63 testes). Evidência: reexecutados após o merge, contra `main` sincronizado (`3a91c2a`): typecheck limpo, 63/63 testes em 15 arquivos, build sem erros.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre, ambos integrados em `main`.
- [x] Nenhuma credencial, dado real, dependência de software nova ou decisão de multi-organização. Evidência: diff do PR #51 restrito aos 8 arquivos previstos; nenhuma alteração em `package.json`; suposição single-tenant mantida.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge. Evidência: gate explícito "autorizado" concedido para o merge do PR #51.

## Riscos e gates humanos

Riscos: a chave usada em `actionDetails` para o id da própria entidade não é 100% uniforme entre rotas (`project_membership` usa `membershipId`, não `project_membershipId`) — mapeei isso explicitamente no código, mas é uma fragilidade de convenção herdada das Tasks 053-060, não desta task; a consulta usa o operador `->>` do Postgres sobre `jsonb`, nunca executada contra um banco real (mesma limitação de Parte B das fatias anteriores); ausência de Docker neste ambiente segue sendo uma limitação estrutural.

Gate vigente: encerrado. O merge do PR #51 foi autorizado (`autorizado`) e executado por squash em `3a91c2a067d29c530d13726d4abb180ec8565d23`. Esta task está formalmente concluída. O último entregável da Fase 5 (dashboards), o modelo de multi-organização e a Parte B (aplicação real de todas as migrações e validação contra Postgres, adiada para o fim da fase) permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 060 → CEO pede para continuar → apresento a análise de que audit_event já cobre o dado necessário, sem tabela nova → CEO decide o escopo (genérico, cobrindo todas as entidades, em vez de escopado a uma entidade) → `autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `autorizado` (merge do PR #51, integrado em `3a91c2a067d29c530d13726d4abb180ec8565d23`).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-11

**Gate de encerramento**: o CEO autorizou (`autorizado`) o squash merge do PR #51.

**Integração**: PR #51 integrado em `main` via squash merge, commit `3a91c2a067d29c530d13726d4abb180ec8565d23`, em 2026-08-11T17:17:59Z. Escopo integrado: exatamente os 8 arquivos previstos em `allowed_paths` — criação de `src/http/routes/history.ts`, `tests/history.test.ts` e `tests/history.integration.test.ts`; edição de `src/app/build-app.ts`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma tabela ou migração nova; nenhuma alteração em `src/db/`, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `28e4c13..3a91c2a`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 63/63 testes passando em 15 arquivos, build sem erros. Confirma que a integração não quebrou o comportamento da suíte padrão nem o build de produção.

**Estado final**: a nona fatia operacional da Fase 5 (leitura de histórico de mudanças via `audit_event`, com autenticação e RBAC) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. Restam apenas os dashboards operacionais mínimos para fechar todos os 12 entregáveis da Fase 5. O modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente, por decisão do CEO adiada em bloco para o final da Fase 5.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização ou das rotas já existentes foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida.

**Integração deste próprio encerramento**: ainda pendente. Este documento de encerramento, ao ser commitado, seguirá o mesmo ciclo de governança (branch → commit → push → PR → gate de merge explícito) antes de ser integrado em `main`.
