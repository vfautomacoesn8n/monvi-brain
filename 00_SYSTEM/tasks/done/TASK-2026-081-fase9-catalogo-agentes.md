---
id: task-2026-081
type: task
title: "Fase 9 — primeira fatia: catálogo de agentes de IA (ai_agent, sem execução real)"
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
reviewed_at: "2026-08-14T09:36:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-080-fase8-logs-metricas.md
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/db/schema/memory-note.ts
  - apps/core-brain/src/db/schema/source.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
  - 00_SYSTEM/tasks/done/TASK-2026-075-fase7-memoria-operacional.md
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-entidade-fonte.md
aliases:
  - Fase 9 — catálogo de agentes de IA
  - Primeira fatia da Fase 9
  - ai_agent
tags: [core-brain, fase-9, api, agentes-ia, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-081-fase9-catalogo-agentes.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/ai-agent.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/http/routes/ai-agent.ts
  - apps/core-brain/tests/ai-agent.test.ts
  - apps/core-brain/tests/ai-agent.integration.test.ts
  - apps/core-brain/drizzle/0020_violet_thor_girl.sql
  - apps/core-brain/drizzle/meta/0020_snapshot.json
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
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/db/schema/automation-trigger.ts
  - apps/core-brain/src/db/schema/automation-invocation.ts
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
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/routes/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-dashboard.ts
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
  - apps/core-brain/drizzle/0016_funny_red_hulk.sql
  - apps/core-brain/drizzle/0017_redundant_slyde.sql
  - apps/core-brain/drizzle/0018_third_ma_gnuci.sql
  - apps/core-brain/drizzle/0019_salty_mister_fear.sql
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
  - apps/core-brain/drizzle/meta/0016_snapshot.json
  - apps/core-brain/drizzle/meta/0017_snapshot.json
  - apps/core-brain/drizzle/meta/0018_snapshot.json
  - apps/core-brain/drizzle/meta/0019_snapshot.json
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
  - Entidade ai_agent criada em apps/core-brain/src/db/schema/ai-agent.ts com name, description, purpose, allowedTools (jsonb, lista de strings), authorizedSourceIds (jsonb, lista de UUIDs, sem FK), ownerPersonId (FK opcional para person), status (enum ai_agent_status: draft/active/paused/archived, padrão draft), notes, createdAt/updatedAt/deletedAt (soft delete).
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - CRUD completo em apps/core-brain/src/http/routes/ai-agent.ts: POST/GET/PATCH/DELETE /ai-agents e GET /ai-agents/:id, seguindo exatamente o padrão de automation-workflow.ts.
  - Todas as rotas exigem authenticateRequest e requirePermission('agent:read'/'agent:write'), permissão nova e isolada (não reaproveita automation:*), reaproveitando o middleware já existente sem alteração nele.
  - DELETE é soft delete (preenche deletedAt), consistente com todas as outras entidades de cadastro do sistema.
  - Nenhuma execução real de agente, nenhuma chamada real a ferramenta listada em allowedTools, nenhuma verificação de que authorizedSourceIds aponta para source existentes — puro cadastro.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de ai-agent.ts e index.ts (barrel); nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou em rotas já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em todas as rotas novas, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo (criação, listagem, leitura, atualização, remoção lógica) de um agente de IA real, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a primeira fatia da Fase 9.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhum worker/processo de execução de IA real implementado.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente o catalogo de agentes de IA (Fase 9) — a entidade ai_agent, sua migracao gerada (nao aplicada), seu CRUD via API e os testes correspondentes, sob suposicao explicita de single-tenant, puro cadastro sem nenhuma execucao real. Nao autoriza execucao real de qualquer agente, chamada real a ferramentas, verificacao de fontes autorizadas, politicas, limites, aprovacoes humanas, avaliacoes, metricas de qualidade, fallback, controle de custo, protecao contra prompt injection (demais entregaveis da Fase 9, deliberadamente posteriores), integracao com n8n e APIs da Fase 8 (deixada deliberadamente pendente), o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes, extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 081 — Fase 9, primeira fatia: catálogo de agentes de IA

## Contexto

Após deixar pendente o último entregável da Fase 8 (integração com n8n e APIs, que depende de decisão de infraestrutura externa do CEO), o CEO pediu para avançar para a Fase 9 (Agentes de IA). Propus abrir a fase com o mesmo padrão que abriu a Fase 8 (Task 076, `automation_workflow`): um catálogo puro, sem nenhuma execução real, combinando os quatro primeiros entregáveis da fase (catálogo, propósito, ferramentas permitidas, fontes autorizadas) numa única entidade — todos são campos descritivos do mesmo cadastro. O CEO autorizou.

## Objetivo

Criar o cadastro de agentes de IA — nome, propósito, ferramentas permitidas e fontes autorizadas — sem nenhuma capacidade de execução real, estabelecendo a base sobre a qual políticas, limites e aprovações humanas (entregáveis seguintes da mesma fase) vão se apoiar antes de qualquer execução real ser considerada segura.

## Escopo executado

1. `apps/core-brain/src/db/schema/ai-agent.ts` (novo arquivo): `ai_agent` — `name` (obrigatório), `description`, `purpose` (texto livre descrevendo para que o agente serve), `allowedTools` (jsonb, lista livre de strings — não existe ainda um catálogo formal de ferramentas no sistema), `authorizedSourceIds` (jsonb, lista opcional de UUIDs referenciando `source` da Fase 7, sem FK — mesmo padrão de referência sem integridade forçada já usado em `memory_note`, Task 075), `ownerPersonId` (FK opcional para `person`, `onDelete: 'set null'`), `status` (enum `ai_agent_status`: `draft`/`active`/`paused`/`archived`, padrão `draft`), `notes`, `createdAt`/`updatedAt`/`deletedAt` (soft delete).
2. `apps/core-brain/src/db/schema/index.ts`: `ai-agent.js` adicionado ao barrel export.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0020_violet_thor_girl.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/ai-agent.ts` (novo arquivo): CRUD completo (`POST/GET/PATCH/DELETE /ai-agents`, `GET /ai-agents/:id`) seguindo exatamente o padrão de `automation-workflow.ts` — validação Zod, soft delete, `recordAuditEvent` em criação/atualização/remoção.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/ai-agent.test.ts` (novo arquivo): testes de bloqueio de acesso sem token (401) para as cinco rotas.
7. `apps/core-brain/tests/ai-agent.integration.test.ts` (novo arquivo): teste de integração real cobrindo o ciclo completo (criação, listagem, leitura, atualização, remoção lógica) — isolado da suíte padrão, escrito mas deliberadamente não executado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a primeira fatia da Fase 9.

Permissão nova e isolada (`agent:read`/`agent:write`) — não reaproveita `automation:*`, já que agentes de IA e automações são conceitos distintos, mesmo compartilhando o mesmo padrão de cadastro.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 123/123 testes passando em 30 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e cinco arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] `ai_agent` criada com todos os campos previstos. Evidência: `apps/core-brain/src/db/schema/ai-agent.ts`, integrado em `main` no commit `354fcc8b69a8a42c3ff31bf94680704fd8c4d17e`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0020_violet_thor_girl.sql`, conferida manualmente.
- [x] CRUD completo implementado, seguindo o padrão de `automation-workflow.ts`. Evidência: `apps/core-brain/src/http/routes/ai-agent.ts`.
- [x] Rotas exigem autenticação e permissão nova (`agent:read`/`agent:write`), reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]`; `src/http/middlewares/` não foi alterado.
- [x] `DELETE` é soft delete. Evidência: `deletedAt` preenchido, não removido; teste de integração confirma `404` após remoção.
- [x] Nenhuma execução real de agente, ferramenta ou verificação de fonte. Evidência: rotas fazem apenas leitura/escrita de metadados; nenhuma chamada a serviço externo ou de IA.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas já existentes. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`; PR #89 integrou exatamente os 13 arquivos previstos.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/ai-agent.test.ts`, 5 testes.
- [x] Teste de integração real do ciclo completo, isolado da suíte padrão, não executado. Evidência: `tests/ai-agent.integration.test.ts`, escrito e presente na suíte de integração.
- [x] `typecheck`, `test` e `build` continuam passando (123/123 testes). Evidência: execução local antes do commit e reexecução pós-merge contra `main` sincronizado (commit `354fcc8b69a8a42c3ff31bf94680704fd8c4d17e`).
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova ou worker de execução real. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhum processo em background introduzido.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito `Autorizado` para o merge do PR #89, integrado em `354fcc8b69a8a42c3ff31bf94680704fd8c4d17e`; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; `authorizedSourceIds` não tem integridade referencial forçada, então nada impede referenciar um `source` que não existe ou foi removido — decisão deliberada de simplicidade, mesmo padrão já aceito para `memory_note.entityId` (Task 075); `allowedTools` é texto livre sem validação contra nenhum catálogo formal de ferramentas, então nada impede um valor sem sentido ali — aceitável enquanto não existir execução real que dependa desse campo.

Gate vigente: encerrado. O merge do PR #89 foi autorizado (`Autorizado`) e executado por squash em `354fcc8b69a8a42c3ff31bf94680704fd8c4d17e`. Esta task está formalmente concluída. Os demais entregáveis da Fase 9, o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 080 → CEO pede para avançar para a Fase 9 (`Vamos avançar para a Fase 9`) → proponho o escopo desta task (catálogo de agentes de IA, mesmo padrão de `automation_workflow`, puro cadastro) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #89, integrado em `354fcc8b69a8a42c3ff31bf94680704fd8c4d17e`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-14

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #89.

**Integração**: PR #89 integrado em `main` via squash merge, commit `354fcc8b69a8a42c3ff31bf94680704fd8c4d17e`, em 2026-08-14T12:34:27Z. Escopo integrado: exatamente os 13 arquivos previstos em `allowed_paths` — criação de `00_SYSTEM/tasks/active/TASK-2026-081-fase9-catalogo-agentes.md`, `src/db/schema/ai-agent.ts`, `src/http/routes/ai-agent.ts`, `tests/ai-agent.test.ts`, `tests/ai-agent.integration.test.ts`, `drizzle/0020_violet_thor_girl.sql` e `drizzle/meta/0020_snapshot.json`; edição de `src/db/schema/index.ts`, `src/app/build-app.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas já existentes.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `e47d112..354fcc8`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 123/123 testes passando em 30 arquivos, build sem erros.

**Estado final**: a primeira fatia da Fase 9 (catálogo de agentes de IA) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. `ai_agent` existe como cadastro puro — nome, propósito, ferramentas permitidas, fontes autorizadas, responsável e status — mas nenhum agente é de fato invocado, nenhuma ferramenta listada é de fato chamada, e nenhuma fonte é verificada. Restam políticas, limites, aprovações humanas, avaliações, métricas de qualidade, fallback, controle de custo e proteção contra prompt injection como entregáveis não iniciados da Fase 9 — todos deliberadamente anteriores a qualquer execução real de agente, dado o gate de saída da fase. A Fase 8 permanece funcionalmente concluída com integração com n8n e APIs deliberadamente pendente. A Fase 7 permanece funcionalmente concluída com extração de arquivos reais e embeddings/busca vetorial deliberadamente pendentes. O modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma execução real de IA foi implementada.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: abrir a Fase 9 com um catálogo puro de agentes de IA — nome, propósito, ferramentas permitidas, fontes autorizadas — sem nenhuma execução real, estabelecendo a base sobre a qual políticas, limites e aprovações humanas vão se apoiar.

**Resultado conhecido**: `ai_agent` existe com CRUD completo e testado; nenhuma capacidade de execução foi introduzida.

**O que ajudou**: reconhecer que os quatro primeiros entregáveis da fase (catálogo, propósito, ferramentas permitidas, fontes autorizadas) eram todos campos do mesmo cadastro, não quatro entidades ou fatias separadas — o mesmo raciocínio já aplicado à Task 076 ao abrir a Fase 8. Isso evitou fragmentar a primeira fatia em pedaços artificiais.

**O que dificultou**: decidir como representar "fontes autorizadas" — a alternativa de criar uma tabela de junção com FK real para `source` foi descartada em favor de uma lista de UUIDs sem integridade forçada (jsonb), seguindo o precedente já estabelecido por `memory_note.entityId` (Task 075); isso manteve a primeira fatia simples, mas significa que a validação de que as fontes existem fica para quando (se) houver execução real.

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum — o risco de `allowedTools` ser texto livre sem nenhum catálogo formal de ferramentas foi identificado e documentado durante o desenho, não descoberto depois; aceitável enquanto não existir execução real que dependa desse campo.

**Perguntas em aberto**: se um catálogo formal de ferramentas (nomes válidos, categorias, nível de risco) deveria existir antes de `allowedTools` deixar de ser texto livre — decisão que só faz sentido junto com "ferramentas permitidas" ganhando enforcement real, ligada aos entregáveis de políticas/limites.

**Ações propostas**: políticas e limites são as próximas candidatas naturais — governam o que um agente pode fazer antes de qualquer execução real ser considerada segura, conforme o gate de saída da fase.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
