---
id: task-2026-073
type: task
title: "Fase 7 — quinta fatia operacional: política de retenção de documentos (retentionPolicy/retentionUntil)"
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
reviewed_at: "2026-08-13T11:10:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-072-fase7-permissoes-documento.md
  - apps/core-brain/src/db/schema/document.ts
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-entidade-fonte.md
  - 00_SYSTEM/tasks/done/TASK-2026-070-fase7-entidade-documento.md
  - 00_SYSTEM/tasks/done/TASK-2026-071-fase7-classificacao-documento.md
  - 00_SYSTEM/tasks/done/TASK-2026-072-fase7-permissoes-documento.md
aliases:
  - Fase 7 — política de retenção de documentos
  - Quinta fatia operacional da Fase 7
  - document.retentionPolicy
tags: [core-brain, fase-7, api, retencao, descarte, conhecimento, schema, migracao, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-073-fase7-retencao-documento.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/db/schema/document.ts
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/tests/document.integration.test.ts
  - apps/core-brain/drizzle/0014_purple_redwing.sql
  - apps/core-brain/drizzle/meta/0014_snapshot.json
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
  - apps/core-brain/src/db/schema/document-version.ts
  - apps/core-brain/src/db/schema/document-permission.ts
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
  - apps/core-brain/src/http/routes/document-version.ts
  - apps/core-brain/src/http/routes/document-permission.ts
  - apps/core-brain/tests/document.test.ts
  - apps/core-brain/tests/document-permission.test.ts
  - apps/core-brain/tests/document-permission.integration.test.ts
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
  - Campos retentionPolicy e retentionUntil adicionados a apps/core-brain/src/db/schema/document.ts, com enum document_retention_policy (indefinite/time_limited, padrao indefinite).
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas de document (create e update) aceitam retentionPolicy/retentionUntil, com validacao rejeitando (400) qualquer combinacao inconsistente (time_limited sem retentionUntil, ou retentionUntil sem time_limited no mesmo pedido); nenhuma rota nova criada.
  - Nenhuma automacao de descarte/arquivamento implementada — puramente declarativo, explicitamente fora de escopo (depende da Fase 8).
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de document.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou em rotas alem de document.ts.
  - Teste de integração real de document atualizado cobrindo a validacao de consistencia (400) e o ciclo de definir/limpar a politica de retencao, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a quinta fatia da Fase 7 e a conclusao dos quatro pre-requisitos bloqueantes da regra da fase (fontes, permissoes, versionamento, descarte).
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade nova criada; nenhum trabalho de extracao, indexacao, busca textual, memoria operacional ou embeddings iniciado.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a adicao dos campos retentionPolicy/retentionUntil em document (Fase 7), sua migracao gerada (nao aplicada) e o ajuste minimo das rotas/testes de document ja existentes, sob suposicao explicita de single-tenant. Nao autoriza nenhuma automacao de descarte/arquivamento real (isso depende da Fase 8, Plataforma de automacoes, ainda nao iniciada), extracao, indexacao, busca textual, memoria operacional, embeddings ou busca vetorial, o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes alem de document.ts, ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 073 — Fase 7, quinta fatia operacional: política de retenção de documentos

## Contexto

Após o encerramento da Task 072 (permissões granulares), o CEO pediu para continuar com a próxima fatia. "Política de retenção" é o último dos quatro pré-requisitos citados explicitamente pela regra da Fase 7 ("fontes, permissões, versionamento e descarte") antes de qualquer trabalho de embeddings/busca vetorial poder começar — os outros três (fontes, versionamento, permissões) já estavam feitos. Propus dois campos em `document` (política + prazo), deliberadamente sem nenhuma automação de descarte real, já que isso exigiria execução recorrente agendada — território da Fase 8 (Plataforma de automações), ainda não iniciada. O CEO autorizou.

## Objetivo

Adicionar `document.retentionPolicy` e `document.retentionUntil`, validados como consistentes entre si, com autenticação e RBAC já existentes reaproveitados sem alteração.

## Escopo executado

1. `apps/core-brain/src/db/schema/document.ts`: enum `document_retention_policy` (`indefinite`/`time_limited`, padrão `indefinite`) adicionado como novo campo `retentionPolicy`; campo `retentionUntil` (timestamp opcional) adicionado.
2. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0014_purple_redwing.sql` — adiciona as duas colunas novas; conferida linha a linha, não aplicada contra nenhum banco.
3. `apps/core-brain/src/http/routes/document.ts`: `createDocumentSchema` e `updateDocumentSchema` passam a aceitar `retentionPolicy`/`retentionUntil`, com uma função de validação compartilhada (`validateRetentionConsistency`, usada via `.refine`) que rejeita com 400: `retentionPolicy: 'time_limited'` sem `retentionUntil` no mesmo pedido; `retentionUntil` informado sem `retentionPolicy: 'time_limited'` no mesmo pedido (evita ambiguidade sobre o estado anterior do documento, já que uma validação Zod não tem acesso ao registro existente numa atualização parcial).
4. `apps/core-brain/tests/document.integration.test.ts`: ajustado para cobrir a rejeição (400) de `retentionPolicy: 'time_limited'` sem `retentionUntil`, a definição válida de ambos, e a limpeza (`retentionPolicy: 'indefinite'`, `retentionUntil: null`).
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a quinta fatia da Fase 7 e a conclusão dos quatro pré-requisitos bloqueantes da regra da fase.

Nenhuma rota nova criada; nenhuma automação de descarte/arquivamento implementada — puramente declarativo nesta versão.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 95/95 testes passando (mesmo total da Task 072, já que nenhum teste novo foi adicionado, apenas ajustado); `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos mesmos dezoito arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Campos `retentionPolicy`/`retentionUntil` adicionados a `document`. Evidência: `apps/core-brain/src/db/schema/document.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0014_purple_redwing.sql`, conferida manualmente.
- [x] Rotas de `document` aceitam os novos campos, com validação de consistência (400 quando inconsistente); nenhuma rota nova. Evidência: `apps/core-brain/src/http/routes/document.ts`, `validateRetentionConsistency` aplicada em `createDocumentSchema`/`updateDocumentSchema`.
- [x] Nenhuma automação de descarte/arquivamento. Evidência: nenhum job, scheduler ou processo em background introduzido; diff restrito às validações e ao schema.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas além de `document.ts`. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Teste de integração real atualizado cobrindo consistência e ciclo de definir/limpar, isolado da suíte padrão, não executado. Evidência: `tests/document.integration.test.ts`, ajustado e presente na suíte de integração.
- [x] `typecheck`, `test` e `build` continuam passando (95/95 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade nova ou trabalho além do escopo autorizado. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade nova.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito "Autorizado" para o merge do PR #73; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; a política de retenção é puramente declarativa — sem automação, um documento com `retentionUntil` vencido continua acessível normalmente até que uma ação humana ou, futuramente, um processo da Fase 8 aja sobre ele. Isso é uma limitação deliberada, não um bug, mas fica registrado para não ser confundido com descarte automático real.

Gate vigente: encerrado. O merge do PR #73 foi autorizado (`Autorizado`) e executado por squash em `1a0c49c9cc951759bd6e39293f656dc5a821c260`. Esta task está formalmente concluída. Os demais entregáveis da Fase 7, o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 072 → CEO pede para continuar com a próxima fatia → proponho o escopo desta task (`retentionPolicy`/`retentionUntil` em `document`, última peça bloqueante da regra da Fase 7, deliberadamente sem automação) → `Aprovado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #73, integrado em `1a0c49c9cc951759bd6e39293f656dc5a821c260`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-13

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #73.

**Integração**: PR #73 integrado em `main` via squash merge, commit `1a0c49c9cc951759bd6e39293f656dc5a821c260`, em 2026-08-13T14:06:13Z. Escopo integrado: exatamente os 10 arquivos previstos em `allowed_paths` — criação de `drizzle/0014_purple_redwing.sql` e `drizzle/meta/0014_snapshot.json`; edição de `src/db/schema/document.ts`, `src/http/routes/document.ts`, `tests/document.integration.test.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou em rotas além de `document.ts`.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `0ae8b95..1a0c49c`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 95/95 testes passando em 23 arquivos, build sem erros.

**Estado final**: a quinta fatia operacional da Fase 7 (política de retenção de documentos) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. Com esta task, os quatro pré-requisitos bloqueantes da regra da Fase 7 (fontes, permissões, versionamento, descarte) estão completos — embeddings e busca vetorial estão formalmente desbloqueados, mas ainda não implementados. Os demais entregáveis da Fase 7 (extração, indexação, busca textual, memória operacional, embeddings/busca vetorial), o modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização ou de rotas além de `document.ts` foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma entidade nova foi criada; nenhuma automação de descarte/arquivamento foi implementada.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: entregar "política de retenção" — o último dos quatro pré-requisitos explícitos da regra da Fase 7 antes de embeddings/busca vetorial poderem começar.

**Resultado conhecido**: `document.retentionPolicy`/`retentionUntil` implementados com validação de consistência, sem nenhuma automação de descarte real (deliberadamente adiada para a Fase 8), completando os quatro pré-requisitos bloqueantes da fase.

**O que ajudou**: a decisão de exigir `retentionPolicy` e `retentionUntil` juntos no mesmo pedido (em vez de permitir `retentionUntil` sozinho, assumindo o estado anterior do documento) evitou qualquer ambiguidade sobre o que uma atualização parcial realmente significa — uma escolha de design simples que elimina uma classe inteira de bugs de "o que o cliente da API quis dizer" sem precisar de nenhuma consulta extra ao banco.

**O que dificultou**: nada tecnicamente; sexta task de código sob as Regras Fundamentais 5 e 6, ciclo bem estabelecido.

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum.

**Perguntas em aberto**: quando a Fase 8 (Plataforma de automações) for iniciada, será necessário decidir o que "descarte" realmente significa na prática — arquivamento automático (`status: archived`), soft delete automático, ou apenas uma notificação/alerta para revisão humana. Essa decisão fica para quando a Fase 8 chegar, não é urgente agora.

**Ações propostas**: com os quatro pré-requisitos da regra completos, as próximas candidatas naturais da Fase 7 são extração, indexação e busca textual — mas essas envolvem processamento de conteúdo (possivelmente arquivos, não só texto já digitado), o que pode exigir uma decisão de escopo maior do CEO antes de eu propor a próxima fatia (por exemplo: até onde vai "extração" sem envolver upload real de arquivos, que ainda não existe no sistema).

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
