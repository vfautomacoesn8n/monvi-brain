---
id: task-2026-080
type: task
title: "Fase 8 — quinta fatia operacional: logs e métricas de automação (histórico genérico e dashboard agregado)"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-14"
updated_at: "2026-08-14"
reviewed_at: "2026-08-14T09:06:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-079-fase8-aprovacoes-reprocessamento.md
  - 00_SYSTEM/tasks/done/TASK-2026-061-fase5-historico-mudancas.md
  - 00_SYSTEM/tasks/done/TASK-2026-062-fase5-dashboard-projeto.md
  - apps/core-brain/src/http/routes/history.ts
  - apps/core-brain/src/http/routes/dashboard.ts
  - apps/core-brain/src/http/routes/commercial-dashboard.ts
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/db/schema/automation-invocation.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
  - 00_SYSTEM/tasks/done/TASK-2026-077-fase8-gatilhos-webhooks.md
  - 00_SYSTEM/tasks/done/TASK-2026-078-fase8-fila-retries-idempotencia.md
  - 00_SYSTEM/tasks/done/TASK-2026-079-fase8-aprovacoes-reprocessamento.md
aliases:
  - Fase 8 — logs e métricas de automação
  - Quinta fatia operacional da Fase 8
  - Histórico e dashboard de automation_invocation
tags: [core-brain, fase-8, api, automacao, logs, metricas, historico, dashboard, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-080-fase8-logs-metricas.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/http/routes/history.ts
  - apps/core-brain/src/http/routes/automation-dashboard.ts
  - apps/core-brain/tests/automation-dashboard.test.ts
  - apps/core-brain/tests/automation-dashboard.integration.test.ts
  - apps/core-brain/tests/automation-invocation.integration.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - apps/core-brain/src/db/schema/
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
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/routes/automation-invocation.ts
  - apps/core-brain/tests/automation-workflow.test.ts
  - apps/core-brain/tests/automation-workflow.integration.test.ts
  - apps/core-brain/tests/automation-trigger.test.ts
  - apps/core-brain/tests/automation-trigger.integration.test.ts
  - apps/core-brain/tests/automation-invocation.test.ts
  - apps/core-brain/tests/history.test.ts
  - apps/core-brain/tests/history.integration.test.ts
  - apps/core-brain/tests/dashboard.test.ts
  - apps/core-brain/tests/dashboard.integration.test.ts
  - apps/core-brain/tests/commercial-dashboard.test.ts
  - apps/core-brain/tests/commercial-dashboard.integration.test.ts
  - apps/core-brain/tests/
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
  - ENTITY_AUDIT_CONFIG em apps/core-brain/src/http/routes/history.ts ganha a entrada automation_invocation (prefixo automation_invocation:, idKey automationInvocationId), sem nenhuma outra alteração no arquivo.
  - GET /automations/dashboard (rota nova, arquivo novo apps/core-brain/src/http/routes/automation-dashboard.ts) agrega contagens reais de automation_workflow por status e automation_invocation por status, seguindo exatamente o padrão de zeroedCounts/withCounts já usado em dashboard.ts e commercial-dashboard.ts.
  - Nenhuma tabela nova, nenhuma coluna nova, nenhuma migração gerada — ambos os entregáveis são leitura pura sobre dados já existentes.
  - Rota nova exige authenticateRequest e requirePermission('automation:read'), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/, apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou em qualquer rota além de history.ts (uma linha) e automation-dashboard.ts (novo).
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) na rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo a agregação de contagens do dashboard, e teste de integração estendido cobrindo GET /history?entityType=automation_invocation retornando os eventos reais de uma invocação — isolados da suíte padrão, escritos mas não executados, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a quinta fatia da Fase 8.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade nova criada; nenhum worker/processo em background real consumindo a fila.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente logs e metricas de automacao (Fase 8) — a extensao do endpoint generico GET /history para automation_invocation e a rota nova GET /automations/dashboard, sem nenhuma tabela ou migracao nova, e os testes correspondentes, sob suposicao explicita de single-tenant. Nao autoriza integracao real com n8n e APIs (ultimo entregavel da fase), worker ou processo em background real consumindo a fila, agendador real de schedule nem consumidor real de event, o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes alem do necessario, extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 080 — Fase 8, quinta fatia operacional: logs e métricas de automação

## Contexto

Após o encerramento da Task 079 (aprovações e reprocessamento), o CEO pediu para continuar. Propus combinar os dois entregáveis seguintes da fase — logs e métricas — numa única fatia, já que ambos são leitura pura sobre dados que já existem, sem exigir nenhuma tabela nova. Identifiquei que ambos já tinham solução equivalente construída em fases anteriores: `GET /history` (Task 061, Fase 5) já é um endpoint genérico de leitura de `audit_event` por `entityType`/`entityId`, e os quatro eventos de auditoria de `automation_invocation` já usam consistentemente a chave `automationInvocationId`; e o padrão de dashboard agregado (Task 062, Fase 5; Task 068, Fase 6) já existe duas vezes na base. O CEO autorizou.

## Objetivo

Dar visibilidade ao histórico de eventos de uma invocação específica e às contagens agregadas de workflows/invocações por status, reaproveitando os dois padrões de leitura já existentes, sem introduzir nenhuma peça nova de infraestrutura ou schema.

## Escopo executado

1. `apps/core-brain/src/http/routes/history.ts`: uma linha adicionada a `ENTITY_AUDIT_CONFIG` — `automation_invocation: { prefix: 'automation_invocation:', idKey: 'automationInvocationId' }`. Nenhuma outra alteração no arquivo; o endpoint `GET /history` em si não mudou.
2. `apps/core-brain/src/http/routes/automation-dashboard.ts` (novo arquivo): `GET /automations/dashboard` agrega `automation_workflow` por `status` (`draft`/`active`/`paused`/`archived`) e `automation_invocation` por `status` (`pending_approval`/`pending`/`succeeded`/`rejected`/`dead_letter`), usando as mesmas funções auxiliares `zeroedCounts`/`withCounts` já duplicadas localmente em `dashboard.ts` e `commercial-dashboard.ts` — todos os valores possíveis dos enums aparecem com `0` quando não há registros.
3. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
4. `apps/core-brain/tests/automation-dashboard.test.ts` (novo arquivo): teste de bloqueio de acesso sem token (401).
5. `apps/core-brain/tests/automation-dashboard.integration.test.ts` (novo arquivo): teste de integração real cobrindo a agregação de contagens de `automation_workflow` e `automation_invocation`.
6. `apps/core-brain/tests/automation-invocation.integration.test.ts`: um cenário novo cobrindo `GET /history?entityType=automation_invocation&entityId=<uuid>` retornando os eventos reais (`received`/`attempted`) de uma invocação criada e processada no próprio teste.
7. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a quinta fatia da Fase 8.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 118/118 testes passando em 29 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e quatro arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] `automation_invocation` adicionado a `ENTITY_AUDIT_CONFIG` em `history.ts`, sem outra alteração no arquivo. Evidência: `apps/core-brain/src/http/routes/history.ts`, integrado em `main` no commit `efad38b6c702a4d2dcbce8a74dbdee7804aede7f`.
- [x] `GET /automations/dashboard` agrega `automation_workflow`/`automation_invocation` por status. Evidência: `apps/core-brain/src/http/routes/automation-dashboard.ts`; teste de integração cobre a agregação.
- [x] Nenhuma tabela, coluna ou migração nova. Evidência: nenhum arquivo em `apps/core-brain/drizzle/` ou `apps/core-brain/src/db/schema/` alterado; `git status --short` local confirmou.
- [x] Rota nova exige autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission('automation:read')]`; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas além de `history.ts` (uma linha) e `automation-dashboard.ts` (novo). Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`; PR #87 integrou exatamente os 10 arquivos previstos.
- [x] Teste de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/automation-dashboard.test.ts`, 1 teste.
- [x] Testes de integração real criados/estendidos, isolados da suíte padrão, não executados. Evidência: `tests/automation-dashboard.integration.test.ts` (novo) e `tests/automation-invocation.integration.test.ts` (estendido), presentes na suíte de integração.
- [x] `typecheck`, `test` e `build` continuam passando (118/118 testes). Evidência: execução local antes do commit e reexecução pós-merge contra `main` sincronizado (commit `efad38b6c702a4d2dcbce8a74dbdee7804aede7f`).
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade nova ou worker real. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade nova; nenhum processo em background introduzido.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito `Autorizado` para o merge do PR #87, integrado em `efad38b6c702a4d2dcbce8a74dbdee7804aede7f`; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; `GET /automations/dashboard` não é escopado por período (é sempre "desde sempre"), então em volumes altos de invocações a agregação pode ficar cara sem um índice dedicado em `automation_invocation.status` — aceitável no volume atual e enquanto a Parte B seguir adiada, mesma lógica já aplicada à busca textual (Task 074).

Gate vigente: encerrado. O merge do PR #87 foi autorizado (`Autorizado`) e executado por squash em `efad38b6c702a4d2dcbce8a74dbdee7804aede7f`. Esta task está formalmente concluída. O último entregável da Fase 8 (integração com n8n e APIs), o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 079 → CEO pede para continuar (`Vamos para a próxima fatia`) → proponho o escopo desta task (logs via extensão de `GET /history`, métricas via novo `GET /automations/dashboard`, sem tabela nova) → `autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #87, integrado em `efad38b6c702a4d2dcbce8a74dbdee7804aede7f`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-14

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #87.

**Integração**: PR #87 integrado em `main` via squash merge, commit `efad38b6c702a4d2dcbce8a74dbdee7804aede7f`, em 2026-08-14T12:02:16Z. Escopo integrado: exatamente os 10 arquivos previstos em `allowed_paths` — criação de `00_SYSTEM/tasks/active/TASK-2026-080-fase8-logs-metricas.md`, `src/http/routes/automation-dashboard.ts`, `tests/automation-dashboard.test.ts` e `tests/automation-dashboard.integration.test.ts`; edição de `src/http/routes/history.ts` (uma linha), `src/app/build-app.ts`, `tests/automation-invocation.integration.test.ts`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em `src/db/schema/`, `src/modules/`, `src/http/middlewares/` ou em rotas além do necessário; nenhuma migração gerada.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `01c7d7f..efad38b`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 118/118 testes passando em 29 arquivos, build sem erros.

**Estado final**: a quinta fatia operacional da Fase 8 (logs e métricas) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. `GET /history` agora também cobre `automation_invocation`, e `GET /automations/dashboard` dá visibilidade agregada de workflows e invocações por status. Resta apenas integração com n8n e APIs como entregável não iniciado da Fase 8 — o único que exige decisão real de infraestrutura externa. A Fase 7 permanece funcionalmente concluída com extração de arquivos reais e embeddings/busca vetorial deliberadamente pendentes. O modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma entidade nova foi criada; nenhuma tabela ou migração nova foi gerada; nenhum worker ou processo em background real foi implementado.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: entregar logs e métricas — o décimo e o décimo-primeiro entregáveis da Fase 8 — dando visibilidade ao histórico de uma invocação específica e a contagens agregadas de workflows/invocações, sem introduzir nenhuma peça nova de schema ou infraestrutura.

**Resultado conhecido**: `GET /history` cobre `automation_invocation` com uma única linha de configuração; `GET /automations/dashboard` agrega contagens reais; os testes de integração cobrem ambos os cenários de ponta a ponta.

**O que ajudou**: reconhecer, antes de escrever qualquer código, que ambos os entregáveis já tinham solução equivalente pronta na base — `GET /history` (Task 061) já era genérico o suficiente para não precisar de nenhuma rota nova, e os quatro eventos de auditoria de `automation_invocation` (criados nas Tasks 077-079) já usavam consistentemente a mesma chave `automationInvocationId`, então a extensão foi realmente uma linha. Isso evitou construir uma rota de histórico dedicada que duplicaria o que já existia.

**O que dificultou**: nada digno de nota — esta foi a fatia mais simples da Fase 8 até agora, exatamente porque não exigiu nenhuma decisão de design nova, só reaproveitamento de dois padrões já maduros.

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum — o risco de `GET /automations/dashboard` não ser escopado por período (agregação sempre "desde sempre") foi identificado e documentado durante o desenho, não descoberto depois; aceitável no volume atual e enquanto a Parte B seguir adiada.

**Perguntas em aberto**: como a autenticação n8n→Monvi deveria funcionar no último entregável da fase (integração com n8n e APIs), e se essa integração deveria vir acompanhada de um worker real consumindo `/queue` — ambas decisões de infraestrutura que cabem ao CEO.

**Ações propostas**: integração com n8n e APIs é o único entregável restante da Fase 8 — mas, diferente das fatias anteriores, exige uma decisão de infraestrutura externa do CEO antes de qualquer proposta de escopo técnico, do mesmo tipo das integrações da Fase 6 (WhatsApp/e-mail/formulários), ainda deliberadamente adiadas.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
