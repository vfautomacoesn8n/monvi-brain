---
id: task-2026-075
type: task
title: "Fase 7 — sétima fatia operacional: memória operacional (entidade memory_note e sua API)"
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
reviewed_at: "2026-08-13T12:30:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-074-fase7-busca-textual.md
  - apps/core-brain/src/http/routes/history.ts
  - apps/core-brain/src/db/schema/session.ts
  - apps/core-brain/src/http/routes/lead.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-entidade-fonte.md
  - 00_SYSTEM/tasks/done/TASK-2026-070-fase7-entidade-documento.md
  - 00_SYSTEM/tasks/done/TASK-2026-073-fase7-retencao-documento.md
aliases:
  - Fase 7 — memória operacional
  - Sétima fatia operacional da Fase 7
  - Entidade memory_note
tags: [core-brain, fase-7, api, memoria, conhecimento, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-075-fase7-memoria-operacional.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/memory-note.ts
  - apps/core-brain/src/http/routes/memory-note.ts
  - apps/core-brain/tests/memory-note.test.ts
  - apps/core-brain/tests/memory-note.integration.test.ts
  - apps/core-brain/drizzle/0015_dizzy_devos.sql
  - apps/core-brain/drizzle/meta/0015_snapshot.json
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
  - Entidade memory_note criada em apps/core-brain/src/db/schema/memory-note.ts, com conteudo, referencia generica opcional (entityType/entityId, sem FK), autor opcional e expiresAt opcional, exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para memory_note criadas em apps/core-brain/src/http/routes/memory-note.ts, registradas em build-app.ts, com GET aceitando filtro opcional por entityType/entityId.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission('memory:read'/'memory:write')), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma permissao granular por nota implementada — RBAC global apenas, deliberadamente nao generalizando o padrao document_permission sem necessidade real demonstrada.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de memory-note.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de memory_note via API, vinculado a uma entidade real (lead), isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a sétima fatia da Fase 7.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade além de memory_note criada; nenhuma automação de expiracao real implementada.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criacao da entidade memory_note (Fase 7), sua migracao gerada (nao aplicada) e sua API CRUD, sob suposicao explicita de single-tenant. Nao autoriza permissao granular por nota, expiracao automatica real (depende da Fase 8, ainda nao iniciada), extracao de arquivos reais, embeddings ou busca vetorial, o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes, ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 075 — Fase 7, sétima fatia operacional: memória operacional

## Contexto

Após o encerramento da Task 074 (busca textual), o CEO pediu para continuar com a próxima fatia — "memória operacional", penúltimo entregável explícito da Fase 7. O termo era ambíguo o suficiente para eu propor uma interpretação concreta antes de construir: memória operacional como anotações leves e de curto prazo (contexto operacional, lembretes), deliberadamente mais simples que `document` (que é formal, versionado e classificado). Propus `memory_note` com referência genérica opcional a qualquer entidade (mesmo padrão de `audit_event`/`GET /history`), sem permissão granular própria. O CEO aprovou a interpretação e o escopo.

## Objetivo

Criar a entidade `memory_note`, gerar sua migração e expor sua API CRUD, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant já em vigor.

## Escopo executado

1. `apps/core-brain/src/db/schema/memory-note.ts`: entidade `memory_note` com conteúdo (obrigatório), `entity_type` (varchar opcional, sem FK) e `entity_id` (uuid opcional, sem FK) como referência genérica não-forçada, autor opcional (`author_person_id`, `onDelete: set null`), `expires_at` opcional e o mesmo padrão de exclusão lógica das entidades anteriores.
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `memory-note.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0015_dizzy_devos.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/memory-note.ts`: rotas `POST/GET /memory-notes` e `GET/PATCH/DELETE /memory-notes/:id`, com validação Zod, autenticação, RBAC (`memory:read`/`memory:write`) e auditoria; `GET /memory-notes` aceita filtro opcional por `entityType`/`entityId`; autor sempre preenchido automaticamente a partir de `request.user.personId`, nunca informado no corpo da requisição.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/memory-note.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
7. `apps/core-brain/tests/memory-note.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `memory_note` via API, vinculado a um `lead` real — isolado da suíte padrão, escrito mas deliberadamente não executado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a sétima fatia da Fase 7.

Nenhuma permissão granular por nota implementada — RBAC global apenas. Nenhuma automação de expiração real — `expiresAt` é puramente informativo nesta versão, mesma decisão já tomada para `document.retentionUntil` na Task 073.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 101/101 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Entidade `memory_note` criada, com referência genérica opcional sem FK, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/memory-note.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0015_dizzy_devos.sql`, conferida manualmente.
- [x] Rotas CRUD para `memory_note` criadas e registradas, com filtro opcional em `GET`. Evidência: `apps/core-brain/src/http/routes/memory-note.ts`, registrado em `build-app.ts`.
- [x] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]` em cada rota; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma permissão granular por nota. Evidência: nenhuma tabela ou lógica de concessão criada para `memory_note`; apenas RBAC global.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/memory-note.test.ts`, 5 testes.
- [x] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado. Evidência: `tests/memory-note.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (101/101 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade adicional ou automação de expiração real. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade além de `memory_note`.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito "Autorizado" para o merge do PR #77; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; `entityType`/`entityId` não têm integridade referencial forçada por FK (decisão deliberada, mesmo padrão de `audit_event`) — uma nota pode referenciar um registro que já foi excluído, sem nenhum aviso automático.

Gate vigente: encerrado. O merge do PR #77 foi autorizado (`Autorizado`) e executado por squash em `fc289751884ec580700c38224b9673a8741f4d4a`. Esta task está formalmente concluída. O entregável restante da Fase 7 (extração de arquivos reais), o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 074 → CEO pede para continuar com a próxima fatia → apresento minha interpretação de "memória operacional" (nota leve e efêmera, distinta de `document`) e o escopo de `memory_note` → CEO responde "Aprovado" → executo o escopo completo (execução, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #77, integrado em `fc289751884ec580700c38224b9673a8741f4d4a`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-13

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #77.

**Integração**: PR #77 integrado em `main` via squash merge, commit `fc289751884ec580700c38224b9673a8741f4d4a`, em 2026-08-13T15:20:27Z. Escopo integrado: exatamente os 13 arquivos previstos em `allowed_paths` — criação de `src/db/schema/memory-note.ts`, `src/http/routes/memory-note.ts`, `tests/memory-note.test.ts`, `tests/memory-note.integration.test.ts`, `drizzle/0015_dizzy_devos.sql` e `drizzle/meta/0015_snapshot.json`; edição de `src/db/schema/index.ts`, `src/app/build-app.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `fa459bd..fc28975`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 101/101 testes passando em 25 arquivos, build sem erros.

**Estado final**: a sétima fatia operacional da Fase 7 (memória operacional) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. Resta apenas extração de arquivos reais como entregável explícito não iniciado da fase; embeddings e busca vetorial seguem formalmente desbloqueados pela regra da fase, mas dependem de uma decisão de estratégia/custo que cabe ao CEO. O modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização ou das rotas já existentes foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma entidade além de `memory_note` foi criada; nenhuma automação de expiração real foi implementada.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: entregar "memória operacional" — o penúltimo entregável explícito da Fase 7 — com uma interpretação concreta de um termo genérico do Plano Mestre.

**Resultado conhecido**: `memory_note` implementada e integrada, deliberadamente mais simples que `document` (sem versionamento, classificação ou permissão granular), com referência genérica opcional a qualquer entidade, sem tocar em nenhum código já existente.

**O que ajudou**: propor uma interpretação concreta e pedir confirmação explícita, em vez de simplesmente construir a primeira interpretação que me ocorreu — "memória operacional" é vago o bastante para que duas pessoas discordassem razoavelmente sobre o que significa; ter a interpretação registrada e aprovada evita retrabalho e mal-entendido futuro sobre o propósito da entidade.

**O que dificultou**: nada tecnicamente; padrão de referência genérica sem FK já estava validado em `audit_event`, reaproveitado diretamente.

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum.

**Perguntas em aberto**: nenhuma nova — as mesmas de sempre (Parte B, multi-organização) seguem em aberto.

**Ações propostas**: com memória operacional completa, o único entregável explícito não iniciado da Fase 7 é extração de arquivos reais, que depende de uma decisão de infraestrutura de armazenamento que cabe ao CEO — não é uma fatia que eu deva propor sozinho sem essa decisão prévia. Embeddings/busca vetorial, mesmo desbloqueados pela regra, dependem de uma decisão de estratégia/custo semelhante. Sugiro ao CEO decidir entre: (a) tomar essas decisões de infraestrutura agora para continuar a Fase 7, ou (b) considerar a Fase 7 funcionalmente completa por ora e avançar para a Fase 8.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
