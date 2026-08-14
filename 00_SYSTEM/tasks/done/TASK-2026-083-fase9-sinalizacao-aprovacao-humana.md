---
id: task-2026-083
type: task
title: "Fase 9 — terceira fatia: sinalização de aprovação humana em agentes de IA (metadado declarativo, sem fluxo real)"
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
reviewed_at: "2026-08-14T10:17:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-082-fase9-politicas-limites.md
  - 00_SYSTEM/tasks/done/TASK-2026-079-fase8-aprovacoes-reprocessamento.md
  - apps/core-brain/src/db/schema/ai-agent.ts
  - apps/core-brain/src/http/routes/ai-agent.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-081-fase9-catalogo-agentes.md
  - 00_SYSTEM/tasks/done/TASK-2026-082-fase9-politicas-limites.md
aliases:
  - Fase 9 — sinalização de aprovação humana
  - Terceira fatia da Fase 9
  - ai_agent.requiresHumanApproval
tags: [core-brain, fase-9, api, agentes-ia, aprovacao-humana, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-083-fase9-sinalizacao-aprovacao-humana.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/db/schema/ai-agent.ts
  - apps/core-brain/src/http/routes/ai-agent.ts
  - apps/core-brain/tests/ai-agent.integration.test.ts
  - apps/core-brain/drizzle/0022_brainy_grim_reaper.sql
  - apps/core-brain/drizzle/meta/0022_snapshot.json
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
  - apps/core-brain/src/db/schema/index.ts
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
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/tests/ai-agent.test.ts
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
  - apps/core-brain/drizzle/0020_violet_thor_girl.sql
  - apps/core-brain/drizzle/0021_perfect_miek.sql
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
  - apps/core-brain/drizzle/meta/0020_snapshot.json
  - apps/core-brain/drizzle/meta/0021_snapshot.json
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
  - Campo requiresHumanApproval (boolean, padrão false) adicionado a apps/core-brain/src/db/schema/ai-agent.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - POST/PATCH /ai-agents aceitam o campo novo, validado via Zod.
  - Nenhum enforcement real do campo — nenhuma rota de execução de agente existe, então não há nada contra o que aplicar essa regra; nenhuma fila de pendências ou endpoint de decisão de aprovação criado.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de ai-agent.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou em rotas além de ai-agent.ts.
  - Teste de integração real estendido cobrindo criação e atualização de um agente com requiresHumanApproval, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a terceira fatia da Fase 9.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade nova criada; nenhuma infraestrutura de aprovação real (fila, endpoint de decisão) construída antes de existir execução real de agente.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a sinalizacao declarativa de exigencia de aprovacao humana em ai_agent (Fase 9) — o campo requiresHumanApproval, sua migracao gerada (nao aplicada) e o teste correspondente, sob suposicao explicita de single-tenant, puramente declarativo sem nenhum fluxo real de aprovacao. Nao autoriza construcao de fila de pendencias, endpoint de decisao de aprovacao, avaliacoes, metricas de qualidade, fallback, controle de custo, protecao contra prompt injection (demais entregaveis da Fase 9, fora desta fatia), execucao real de qualquer agente ou ferramenta, integracao com n8n e APIs da Fase 8 (deixada deliberadamente pendente), o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes, extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 083 — Fase 9, terceira fatia: sinalização de aprovação humana

## Contexto

Após o encerramento da Task 082 (políticas e limites), o CEO pediu para continuar. Propus estender `ai_agent` com um campo puramente declarativo (`requiresHumanApproval`) para o sétimo entregável da fase — "aprovações humanas" — em vez de construir um fluxo real de aprovação, já que não existe nenhuma execução real de agente para aprovar. Esta é a mesma disciplina já aplicada na Task 082 (`policy`/`maxActionsPerRun`/`timeoutSeconds`): campo declarativo agora, enforcement quando (se) existir execução real. O CEO autorizou.

## Objetivo

Sinalizar, por agente, se ele vai exigir aprovação humana antes de rodar quando execução real existir — sem construir nenhuma peça de infraestrutura de aprovação antes de haver algo real para aprovar.

## Escopo executado

1. `apps/core-brain/src/db/schema/ai-agent.ts`: campo `requires_human_approval` (boolean, padrão `false`) adicionado.
2. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0022_brainy_grim_reaper.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
3. `apps/core-brain/src/http/routes/ai-agent.ts`: `createAiAgentSchema`/`updateAiAgentSchema` (Zod) ganham `requiresHumanApproval` (booleano opcional). Nenhuma rota nova.
4. `apps/core-brain/tests/ai-agent.integration.test.ts`: o cenário existente de ciclo completo estendido para confirmar `requiresHumanApproval: false` por padrão na criação e `true` após atualização via `PATCH`.
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a terceira fatia da Fase 9, incluindo a diferença deliberada em relação ao padrão da Fase 8 (lá, `automation_workflow.requiresApproval` foi construído depois que a execução real já existia; aqui, o campo vem antes).

Validado localmente: `npm run typecheck` sem erros; `npm test` com 123/123 testes passando em 30 arquivos (contagem inalterada — nenhuma rota nova); `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e cinco arquivos de integração (contagem inalterada — nenhum arquivo novo), confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] `requiresHumanApproval` adicionado a `ai_agent`. Evidência: `apps/core-brain/src/db/schema/ai-agent.ts`, integrado em `main` no commit `3aa9e1324637550809199afbe57209f003ca27d1`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0022_brainy_grim_reaper.sql`, conferida manualmente.
- [x] `POST`/`PATCH /ai-agents` aceitam o campo novo, validado. Evidência: `apps/core-brain/src/http/routes/ai-agent.ts`; teste de integração cobre criação (padrão `false`) e atualização (`true`).
- [x] Nenhum enforcement real, nenhuma infraestrutura de aprovação construída. Evidência: nenhuma rota de execução de agente ou de decisão de aprovação existe no sistema; o campo é apenas persistido e lido.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas além de `ai-agent.ts`. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`; PR #93 integrou exatamente os 10 arquivos previstos.
- [x] Teste de integração real estendido, isolado da suíte padrão, não executado. Evidência: `tests/ai-agent.integration.test.ts`, cenário estendido presente na suíte de integração.
- [x] `typecheck`, `test` e `build` continuam passando (123/123 testes). Evidência: execução local antes do commit e reexecução pós-merge contra `main` sincronizado (commit `3aa9e1324637550809199afbe57209f003ca27d1`).
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/prosa descritiva do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade nova ou infraestrutura de aprovação real. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade nova; nenhuma fila ou endpoint de decisão adicionado.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito `Autorizado` para o merge do PR #93, integrado em `3aa9e1324637550809199afbe57209f003ca27d1`; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; risco específico desta fatia — como o campo não tem nenhum consumidor real, existe a possibilidade de que, quando a execução real de agentes for desenhada, o modelo de aprovação necessário seja diferente do booleano simples aqui criado (por exemplo, aprovação por ação individual em vez de por execução inteira); isso é aceito conscientemente, já que o campo é barato de descartar ou estender se necessário, e o alternativa (esperar o desenho completo de execução antes de sinalizar qualquer coisa) atrasaria progresso incremental sem necessidade.

Gate vigente: encerrado. O merge do PR #93 foi autorizado (`Autorizado`) e executado por squash em `3aa9e1324637550809199afbe57209f003ca27d1`. Esta task está formalmente concluída. Os demais entregáveis da Fase 9, o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 082 → CEO pede para continuar (`Vamos para a próxima fatia`) → proponho o escopo desta task (sinalização declarativa de aprovação humana, sem fluxo real) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #93, integrado em `3aa9e1324637550809199afbe57209f003ca27d1`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-14

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #93.

**Integração**: PR #93 integrado em `main` via squash merge, commit `3aa9e1324637550809199afbe57209f003ca27d1`, em 2026-08-14T13:12:49Z. Escopo integrado: exatamente os 10 arquivos previstos em `allowed_paths` — criação de `00_SYSTEM/tasks/active/TASK-2026-083-fase9-sinalizacao-aprovacao-humana.md`, `drizzle/0022_brainy_grim_reaper.sql` e `drizzle/meta/0022_snapshot.json`; edição de `src/db/schema/ai-agent.ts`, `src/http/routes/ai-agent.ts`, `tests/ai-agent.integration.test.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas além de `ai-agent.ts`.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `e23e9cc..3aa9e13`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 123/123 testes passando em 30 arquivos, build sem erros.

**Estado final**: a terceira fatia da Fase 9 (sinalização de aprovação humana) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. `ai_agent` agora registra `requiresHumanApproval`, mas nenhum fluxo de aprovação real existe — nenhuma fila de pendências, nenhum endpoint de decisão. Restam avaliações, métricas de qualidade, fallback, controle de custo e proteção contra prompt injection como entregáveis não iniciados da Fase 9 — todos, assim como aprovações humanas, esbarram na mesma limitação de não haver execução real de agente para validar ou medir contra. A Fase 8 permanece funcionalmente concluída com integração com n8n e APIs deliberadamente pendente. A Fase 7 permanece funcionalmente concluída com extração de arquivos reais e embeddings/busca vetorial deliberadamente pendentes. O modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma infraestrutura de aprovação real foi construída; nenhuma execução real de IA foi implementada.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: sinalizar, por agente, se ele exige aprovação humana antes de rodar, sem construir nenhum fluxo de aprovação real antes de haver execução real de agente.

**Resultado conhecido**: `ai_agent.requiresHumanApproval` existe e é testado; nenhuma infraestrutura de aprovação foi construída.

**O que ajudou**: nomear explicitamente, no README e na task, a diferença deliberada em relação ao padrão já usado na Fase 8 — lá a aprovação veio depois da execução; aqui vem antes. Deixar essa inversão de ordem documentada evita que uma leitura futura confunda isso com inconsistência de padrão.

**O que dificultou**: nada digno de nota — esta foi outra fatia simples, seguindo exatamente o mesmo raciocínio já validado na Task 082.

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum — o risco de o modelo de aprovação booleano simples não corresponder ao que a execução real de agentes vai precisar (por exemplo, aprovação por ação individual em vez de por execução inteira) foi identificado e documentado durante o desenho, não descoberto depois; aceito conscientemente como o custo de progresso incremental.

**Perguntas em aberto**: quando (e se) o CEO vai decidir construir uma primeira forma de execução real de agente — sem essa decisão, os entregáveis restantes da fase (avaliações, métricas de qualidade, fallback, controle de custo, proteção contra prompt injection) tendem a continuar sendo campos declarativos sem nada real para validar.

**Ações propostas**: sinalizar ao CEO, na próxima interação sobre a Fase 9, que a fase pode estar se aproximando do limite do que dá para avançar com fatias puramente declarativas — as próximas decisões provavelmente exigem uma escolha explícita sobre execução real de agentes.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
