---
id: task-2026-071
type: task
title: "Fase 7 — terceira fatia operacional: classificação de documentos (confidencialidade canônica e realinhamento de status)"
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
updated_at: "2026-08-13"
reviewed_at: "2026-08-13T09:35:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/canonical/KNOWLEDGE-MODEL.md
  - 00_SYSTEM/tasks/done/TASK-2026-070-fase7-entidade-documento.md
  - apps/core-brain/src/db/schema/document.ts
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-entidade-fonte.md
  - 00_SYSTEM/tasks/done/TASK-2026-070-fase7-entidade-documento.md
aliases:
  - Fase 7 — classificação de documentos
  - Terceira fatia operacional da Fase 7
  - document.confidentiality
tags: [core-brain, fase-7, api, classificacao, confidencialidade, conhecimento, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-071-fase7-classificacao-documento.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/db/schema/document.ts
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/tests/document.test.ts
  - apps/core-brain/tests/document.integration.test.ts
  - apps/core-brain/drizzle/0012_light_havok.sql
  - apps/core-brain/drizzle/meta/0012_snapshot.json
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
  - Campo confidentiality adicionado a apps/core-brain/src/db/schema/document.ts, com enum document_confidentiality reaproveitando exatamente o vocabulario canonico de KNOWLEDGE-MODEL.md (public/internal/confidential/restricted), padrao internal.
  - Enum document_status realinhado ao Status canonico de KNOWLEDGE-MODEL.md (draft/review/approved/deprecated/archived), substituindo o valor anterior (draft/published/archived).
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas de document (create e update) aceitam confidentiality; update aceita o novo conjunto de valores de status; nenhuma rota nova criada.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de document.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou em rotas alem de document.ts.
  - Testes existentes de document atualizados para refletir o novo vocabulario de status (published substituido por approved) e cobrindo confidentiality, passando em npm test sem depender de banco real.
  - Teste de integração real de document atualizado cobrindo confidentiality e o novo vocabulario de status, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a terceira fatia da Fase 7 e a divergencia de status corrigida.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade nova criada; classificação nao restringe leitura/escrita nesta versao (isso e o entregavel seguinte, permissoes).
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a adicao do campo confidentiality e o realinhamento do enum document_status em document (Fase 7), sua migracao gerada (nao aplicada) e o ajuste minimo das rotas/testes de document ja existentes, sob suposicao explicita de single-tenant. Nao autoriza permissoes granulares de acesso por documento (a classificacao nao restringe leitura/escrita nesta versao), extracao, indexacao, busca textual, politica de retencao/descarte, memoria operacional, embeddings ou busca vetorial (explicitamente bloqueados pela regra da Fase 7 ate essas etapas estarem definidas), o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes alem de document.ts, ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 071 — Fase 7, terceira fatia operacional: classificação de documentos

## Contexto

Após o encerramento da Task 070 (`document`/`document_version`), o CEO confirmou continuar a Fase 7 (em vez de avançar prematuramente para a Fase 8, opção que descartou explicitamente). O terceiro entregável explícito da Fase 7 é "classificação". Ao consultar `00_SYSTEM/canonical/KNOWLEDGE-MODEL.md` para desenhar esta fatia, encontrei que o vocabulário canônico de confidencialidade (`public`/`internal`/`confidential`/`restricted`) e de status (`draft`/`review`/`approved`/`deprecated`/`archived`) já está definido e é usado em todo o resto do sistema — inclusive no frontmatter desta própria task. Também identifiquei que o `document.status` criado na Task 070 (`draft`/`published`/`archived`) diverge desse vocabulário canônico, por não ter sido consultado antes daquela task (o escopo da Task 070 era "documentos e versões", não classificação). Apresentei essa divergência ao CEO junto da proposta desta task, e ele autorizou corrigi-la nesta mesma fatia, evitando duas migrações de enum separadas.

## Objetivo

Adicionar `document.confidentiality` reaproveitando o vocabulário canônico, e realinhar `document.status` ao `Status` canônico, com autenticação e RBAC já existentes reaproveitados sem alteração.

## Escopo executado

1. `apps/core-brain/src/db/schema/document.ts`: enum `document_confidentiality` (`public`/`internal`/`confidential`/`restricted`, padrão `internal`) adicionado como novo campo `confidentiality`; enum `document_status` alterado de `draft`/`published`/`archived` para `draft`/`review`/`approved`/`deprecated`/`archived` (padrão `draft` mantido).
2. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0012_light_havok.sql` — recria o tipo `document_status` (via `ALTER COLUMN ... SET DATA TYPE text` → `DROP TYPE` → `CREATE TYPE` → `SET DATA TYPE` de volta) e adiciona a coluna `confidentiality` com o novo tipo `document_confidentiality`; conferida linha a linha, não aplicada contra nenhum banco.
3. `apps/core-brain/src/http/routes/document.ts`: `createDocumentSchema` e `updateDocumentSchema` passam a aceitar `confidentiality` (validado via `documentConfidentialityEnum.enumValues`); `updateDocumentSchema` já validava `status` dinamicamente a partir do enum, então passou a aceitar o novo conjunto de valores sem alteração de código adicional.
4. `apps/core-brain/tests/document.integration.test.ts`: ajustado o valor de status usado no teste (`published` → `approved`) e adicionada cobertura de `confidentiality` na criação.
5. `apps/core-brain/tests/document.test.ts`: nenhuma alteração necessária — o teste de bloqueio de acesso usava `status: 'archived'`, que permanece válido no novo enum.
6. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a terceira fatia da Fase 7 e a correção do vocabulário de status.

Nenhuma rota nova criada; nenhuma restrição de acesso por classificação implementada — a classificação é puramente descritiva nesta versão, preparando o terreno para o entregável seguinte da fase ("permissões").

Validado localmente: `npm run typecheck` sem erros; `npm test` com 92/92 testes passando (mesmo total da Task 070, já que nenhum teste novo foi adicionado, apenas ajustado); `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos mesmos dezessete arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Campo `confidentiality` adicionado a `document`, com enum canônico, padrão `internal`. Evidência: `apps/core-brain/src/db/schema/document.ts`.
- [x] Enum `document_status` realinhado ao `Status` canônico. Evidência: `apps/core-brain/src/db/schema/document.ts`, valores `draft`/`review`/`approved`/`deprecated`/`archived`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0012_light_havok.sql`, conferida manualmente.
- [x] Rotas de `document` aceitam `confidentiality` e o novo conjunto de `status`; nenhuma rota nova. Evidência: `apps/core-brain/src/http/routes/document.ts`, `createDocumentSchema`/`updateDocumentSchema`.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas além de `document.ts`. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Testes existentes de `document` atualizados e passando sem banco real. Evidência: `tests/document.test.ts` (inalterado, ainda válido) e `tests/document.integration.test.ts` (ajustado), parte dos 92/92 da suíte padrão.
- [x] Teste de integração real atualizado cobrindo `confidentiality` e novo vocabulário de status, isolado da suíte padrão, não executado. Evidência: `tests/document.integration.test.ts`, ajustado e presente na suíte de integração, não executado por decisão do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (92/92 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade nova ou restrição de acesso implementada. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade além do campo/enum em `document`.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito "autorizado" para o merge do PR #69; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; como a Parte B nunca rodou, a migração 0012 (que recria o tipo `document_status` via `DROP TYPE`) não tem nenhum dado real em risco — mas fica registrado que, num ambiente com dados reais, essa operação exigiria cuidado (a recriação do tipo depende de nenhuma linha ter um valor não mapeável, o que é garantido aqui porque os três valores antigos são um subconjunto dos cinco novos).

Gate vigente: encerrado. O merge do PR #69 foi autorizado ("autorizado") e executado por squash em `b9a685869df8a8792279974dc26e65eb41d7b7dc`. Esta task está formalmente concluída. Os demais entregáveis da Fase 7, o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 070 → CEO diz "vamos implementar a próxima fase" → esclareço, via pergunta estruturada, se isso significa continuar a Fase 7 ou pular para a Fase 8 → CEO escolhe explicitamente "Continuar Fase 7" → ao desenhar a fatia de classificação, identifico que o vocabulário canônico já existe em `KNOWLEDGE-MODEL.md` e que `document.status` diverge dele → apresento a divergência ao CEO via segunda pergunta estruturada → CEO escolhe explicitamente "Sim, alinhar agora" → executo o escopo completo (schema, rotas, testes, documentação, criação da task, branch, commit, push e PR) → "autorizado" (merge do PR #69, integrado em `b9a685869df8a8792279974dc26e65eb41d7b7dc`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-13

**Gate de encerramento**: o CEO autorizou ("autorizado") o squash merge do PR #69.

**Integração**: PR #69 integrado em `main` via squash merge, commit `b9a685869df8a8792279974dc26e65eb41d7b7dc`, em 2026-08-13T12:28:19Z. Escopo integrado: exatamente os 10 arquivos previstos em `allowed_paths` — criação de `drizzle/0012_light_havok.sql` e `drizzle/meta/0012_snapshot.json`; edição de `src/db/schema/document.ts`, `src/http/routes/document.ts`, `tests/document.integration.test.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou em rotas além de `document.ts`.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `0e6d426..b9a6858`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 92/92 testes passando em 22 arquivos, build sem erros.

**Estado final**: a terceira fatia operacional da Fase 7 (classificação de documentos, com `confidentiality` canônico e `status` realinhado) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. A classificação segue puramente descritiva — não restringe leitura/escrita. Os demais entregáveis da Fase 7 (permissões, extração, indexação, busca textual, política de retenção, memória operacional e, por último, embeddings/busca vetorial), o modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização ou de rotas além de `document.ts` foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma entidade nova foi criada; nenhuma restrição de acesso por classificação foi implementada.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: entregar "classificação" — o terceiro entregável explícito da Fase 7 — reaproveitando, em vez de inventar, o vocabulário de confidencialidade e status já canônico no sistema.

**Resultado conhecido**: `document.confidentiality` implementado com o vocabulário exato de `KNOWLEDGE-MODEL.md`; `document.status` corrigido para o mesmo padrão canônico, resolvendo uma divergência que eu mesmo introduzi na Task 070 por não ter consultado o modelo canônico antes daquela fatia.

**O que ajudou**: parar para ler `KNOWLEDGE-MODEL.md` antes de desenhar o schema, em vez de inventar um enum novo — isso é literalmente o que o checklist de simplicidade pede ("já existe solução equivalente?") e, neste caso, a resposta era um "sim" direto, já usado em todo arquivo de task deste repositório.

**O que dificultou**: nada tecnicamente, mas a divergência de `document.status` exigiu uma pausa para esclarecer com o CEO, via pergunta estruturada, se a correção deveria entrar nesta mesma task ou ficar para depois — decidiu-se corrigir agora, evitando duas migrações de enum separadas no mesmo campo.

**Surpresas**: a maior surpresa desta task foi descobrir, só ao consultar o modelo canônico para uma fatia nova, que uma decisão já tomada na Task anterior (070) estava desalinhada com um padrão que já existia havia muito tempo no repositório — um lembrete de que "já existe solução equivalente?" deveria ser verificado antes de desenhar qualquer vocabulário nomeado (enum, status, categoria), não só antes de criar uma entidade inteira.

**Riscos materializados**: nenhum — a divergência foi descoberta antes de qualquer merge, e corrigida sem custo de retrabalho em produção (nenhuma migração anterior chegou a ser aplicada contra um banco real).

**Perguntas em aberto**: nenhuma nova.

**Ações propostas**: ao desenhar qualquer campo com vocabulário fechado (enum) em tasks futuras, consultar primeiro `KNOWLEDGE-MODEL.md` (e demais documentos canônicos relevantes) antes de definir valores — não apenas ao criar entidades novas, mas também ao adicionar campos a entidades já existentes. Próxima fatia natural da Fase 7: permissões (a regra da fase já exige fontes, versionamento e classificação — todos feitos — mais permissões e descarte/retenção).

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
