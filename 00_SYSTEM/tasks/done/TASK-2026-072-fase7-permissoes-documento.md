---
id: task-2026-072
type: task
title: "Fase 7 — quarta fatia operacional: permissões granulares por documento (entidade document_permission e enforcement)"
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
reviewed_at: "2026-08-13T10:32:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-071-fase7-classificacao-documento.md
  - apps/core-brain/src/db/schema/document.ts
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/src/modules/auth/session.service.ts
  - apps/core-brain/src/types/fastify.d.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-entidade-fonte.md
  - 00_SYSTEM/tasks/done/TASK-2026-070-fase7-entidade-documento.md
  - 00_SYSTEM/tasks/done/TASK-2026-071-fase7-classificacao-documento.md
aliases:
  - Fase 7 — permissões de documento
  - Quarta fatia operacional da Fase 7
  - document_permission
tags: [core-brain, fase-7, api, permissoes, rbac, conhecimento, schema, migracao, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-072-fase7-permissoes-documento.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/document-permission.ts
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/src/http/routes/document-permission.ts
  - apps/core-brain/tests/document-permission.test.ts
  - apps/core-brain/tests/document-permission.integration.test.ts
  - apps/core-brain/drizzle/0013_foamy_nighthawk.sql
  - apps/core-brain/drizzle/meta/0013_snapshot.json
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
  - apps/core-brain/tests/document.test.ts
  - apps/core-brain/tests/document.integration.test.ts
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
  - Entidade document_permission criada em apps/core-brain/src/db/schema/document-permission.ts, vinculada a document (onDelete cascade), com concessao a pessoa ou papel (exatamente um dos dois) e nivel de acesso read/write, exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas POST/GET /documents/:documentId/permissions e DELETE /permissions/:id criadas em apps/core-brain/src/http/routes/document-permission.ts, registradas em build-app.ts, com validacao Zod exigindo exatamente um de granteePersonId/granteeRoleId.
  - GET/PATCH/DELETE /documents/:id em document.ts passam a exigir, para documentos confidential/restricted, papel admin ou concessao explicita (pessoa ou papel) compativel com o nivel de acesso exigido, retornando 403 quando ausente; documentos public/internal mantêm o comportamento anterior, sem nenhuma mudança.
  - GET /documents filtra da listagem documentos confidential/restricted para os quais o usuario nao tem admin nem concessao, sem retornar erro.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission('document:read'/'document:write')), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de document-permission.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou em rotas alem de document.ts e document-permission.ts (nova).
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de concessao/listagem/revogacao de document_permission, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada; documentada a limitação de que o caminho de negação (403) nao e exercitavel neste harness porque toda sessao de teste resolve para o papel admin.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a quarta fatia da Fase 7.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade além de document_permission criada; nenhum trabalho de extração, indexação, busca textual, política de retenção ou memória operacional iniciado.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criacao da entidade document_permission (Fase 7), sua migracao gerada (nao aplicada), sua API e o enforcement minimo em document.ts descrito nos criterios de aceite, sob suposicao explicita de single-tenant. Nao autoriza extracao, indexacao, busca textual, politica de retencao/descarte, memoria operacional, embeddings ou busca vetorial (explicitamente bloqueados pela regra da Fase 7 ate essas etapas estarem definidas), alteracao do harness de sessao de teste (validateSessionToken segue read-only), o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes alem de document.ts, ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 072 — Fase 7, quarta fatia operacional: permissões granulares por documento

## Contexto

Após o encerramento da Task 071 (classificação de documentos), o CEO pediu para continuar com a próxima fatia. O quarto entregável explícito da Fase 7 é "permissões" — e é também o que torna a classificação (Task 071) efetiva em vez de puramente descritiva, como eu havia deixado registrado explicitamente no encerramento daquela task. Propus `document_permission`, uma concessão granular (pessoa ou papel, leitura ou escrita) sobre um documento específico, com enforcement mínimo: documentos `public`/`internal` continuam exatamente como estavam; documentos `confidential`/`restricted` passam a exigir `admin` ou concessão explícita. O CEO autorizou.

## Objetivo

Criar a entidade `document_permission`, gerar sua migração, expor sua API de concessão/listagem/revogação e aplicar o enforcement mínimo descrito nas rotas de `document` já existentes, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant já em vigor.

## Escopo executado

1. `apps/core-brain/src/db/schema/document-permission.ts`: entidade `document_permission` com `document_id` (obrigatório, `onDelete: cascade`), `grantee_person_id` e `grantee_role_id` (ambos opcionais, `onDelete: cascade` — exatamente um dos dois é exigido na API, não no banco), `access_level` (enum `document_permission_access_level`: `read`/`write`), `granted_by_person_id` (opcional, `onDelete: set null`), `created_at` e `deleted_at` (revogação é exclusão lógica; sem `updated_at`, já que não há `PATCH`).
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `document-permission.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0013_foamy_nighthawk.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/document-permission.ts`: rotas `POST/GET /documents/:documentId/permissions` (conceder/listar, validação Zod `.refine` exigindo exatamente um de `granteePersonId`/`granteeRoleId`) e `DELETE /permissions/:id` (revogar, exclusão lógica) — sem `PATCH`, mesma decisão de simplicidade já usada em `document_version`.
5. `apps/core-brain/src/http/routes/document.ts`: adicionado helper `hasGranularDocumentAccess(user, doc, requiredLevel)` — retorna `true` imediatamente para `public`/`internal`; para `confidential`/`restricted`, retorna `true` se `roleName === 'admin'` (mesmo bypass já usado em `requirePermission`) ou se existe uma concessão ativa (pessoa ou papel do usuário) com nível compatível. Aplicado em `GET/PATCH/DELETE /documents/:id` (403 quando ausente) e em `GET /documents` (filtra silenciosamente os documentos sem acesso, sem erro).
6. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
7. `apps/core-brain/tests/document-permission.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
8. `apps/core-brain/tests/document-permission.integration.test.ts`: teste de integração real cobrindo concessão, validação de exatamente-um-grantee (400), listagem e revogação — isolado da suíte padrão, escrito mas deliberadamente não executado. Documentada no próprio arquivo (e no README) a limitação de que o caminho de negação (403) não é exercitável neste harness, já que `createSession`/`validateSessionToken` sempre resolve toda sessão de teste para o papel `admin` (join fixo, código de Fase 4, fora do escopo desta task).
9. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a quarta fatia da Fase 7.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 95/95 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos dezoito arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las. Mesmo quando isso acontecer, o teste de negação de `document-permission.integration.test.ts` continuará não sendo exercitável sem uma mudança separada no harness de sessão de teste (fora do escopo desta task).

## Critérios de aceite

- [x] Entidade `document_permission` criada, vinculada a `document`, com concessão a pessoa ou papel e nível de acesso, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/document-permission.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0013_foamy_nighthawk.sql`, conferida manualmente.
- [x] Rotas de concessão/listagem/revogação criadas e registradas, com validação de exatamente-um-grantee. Evidência: `apps/core-brain/src/http/routes/document-permission.ts`, registrado em `build-app.ts`; teste de integração cobre a rejeição 400 quando ambos os campos são informados.
- [x] `GET/PATCH/DELETE /documents/:id` exigem `admin` ou concessão para documentos `confidential`/`restricted`, sem alterar o comportamento de `public`/`internal`. Evidência: `hasGranularDocumentAccess` em `document.ts`, aplicado nas três rotas.
- [x] `GET /documents` filtra documentos sem acesso, sem erro. Evidência: filtro aplicado via `Promise.all`/`filter` em `document.ts`.
- [x] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]` em cada rota; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas além de `document.ts`/`document-permission.ts`. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/document-permission.test.ts`, 3 testes, parte dos 95/95 da suíte padrão.
- [x] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado, com limitação de cobertura documentada. Evidência: `tests/document-permission.integration.test.ts`, escrito e presente na suíte de integração.
- [x] `typecheck`, `test` e `build` continuam passando (95/95 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade adicional ou trabalho além do escopo autorizado. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade além de `document_permission`.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito "Autorizado" para o merge do PR #71; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; o teste de integração não consegue validar o caminho de negação (403) por limitação do harness de sessão de teste, documentada explicitamente — a lógica de enforcement em si (`hasGranularDocumentAccess`) foi revisada manualmente linha a linha, mas não tem cobertura automatizada de "acesso negado" nem mesmo quando a Parte B for retomada, a menos que o harness de sessão seja estendido separadamente; `GET /documents` faz uma verificação de acesso por documento (`Promise.all` sobre a lista completa) — aceitável no volume atual, mas não otimizado para uma tabela grande.

Gate vigente: encerrado. O merge do PR #71 foi autorizado (`Autorizado`) e executado por squash em `f6813a042b01de86e517519ada565e7da08006ed`. Esta task está formalmente concluída. Os demais entregáveis da Fase 7, o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 071 → CEO pede para continuar com a próxima fatia → proponho o escopo desta task (entidade `document_permission`, permissões granulares, quarto entregável da Fase 7, com enforcement mínimo em `document.ts`) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #71, integrado em `f6813a042b01de86e517519ada565e7da08006ed`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-13

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #71.

**Integração**: PR #71 integrado em `main` via squash merge, commit `f6813a042b01de86e517519ada565e7da08006ed`, em 2026-08-13T13:25:32Z. Escopo integrado: exatamente os 14 arquivos previstos em `allowed_paths` — criação de `src/db/schema/document-permission.ts`, `src/http/routes/document-permission.ts`, `tests/document-permission.test.ts`, `tests/document-permission.integration.test.ts`, `drizzle/0013_foamy_nighthawk.sql` e `drizzle/meta/0013_snapshot.json`; edição de `src/db/schema/index.ts`, `src/app/build-app.ts`, `src/http/routes/document.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou em rotas além de `document.ts`/`document-permission.ts`.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `e6b0312..f6813a0`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 95/95 testes passando em 23 arquivos, build sem erros.

**Estado final**: a quarta fatia operacional da Fase 7 (permissões granulares por documento, com enforcement real para `confidential`/`restricted`) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. A classificação da Task 071 deixou de ser puramente descritiva. Os demais entregáveis da Fase 7 (extração, indexação, busca textual, política de retenção, memória operacional e, por último, embeddings/busca vetorial), o modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente — e, quando retomada, o teste de negação de `document-permission.integration.test.ts` ainda não será exercitável sem uma mudança separada no harness de sessão de teste.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização ou de rotas além de `document.ts`/`document-permission.ts` foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma entidade além de `document_permission` foi criada.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: entregar "permissões" — o quarto entregável explícito da Fase 7 — e, com isso, tornar a classificação da Task 071 realmente funcional em vez de apenas decorativa.

**Resultado conhecido**: `document_permission` implementada e integrada, com enforcement real aplicado a `GET/PATCH/DELETE /documents/:id` e ao filtro de `GET /documents`, sem alterar o comportamento de documentos `public`/`internal` — nenhuma regressão nos 92 testes já existentes.

**O que ajudou**: reaproveitar o bypass de `admin` já usado em `requirePermission`, em vez de inventar uma lógica de superusuário separada, manteve o modelo mental consistente com o resto do RBAC; ler `session.service.ts` antes de escrever o enforcement revelou de imediato a limitação do harness de teste (join fixo para `admin`), evitando que eu escrevesse um teste de integração que pareceria cobrir a negação mas na prática nunca falharia de verdade.

**O que dificultou**: a decisão de onde aplicar o filtro em `GET /documents` — filtrar em memória após buscar tudo, versus tentar expressar a checagem de permissão como parte da query SQL. Optei pela versão em memória (mais simples, aceitável no volume atual) e documentei explicitamente que não está otimizada para uma tabela grande, em vez de resolver isso agora sem evidência real de necessidade.

**Surpresas**: nenhuma tecnicamente — a limitação do harness de sessão de teste já era esperada a partir da leitura de `session.service.ts`, mas vale registrar como um padrão recorrente desta fase: descobrir limitações reais ao ler o código existente antes de escrever, em vez de assumir que tudo se comporta como o "caminho feliz" sugere.

**Riscos materializados**: nenhum — os riscos identificados (query N+1 em memória, teste de negação não exercitável) foram descobertos e documentados durante o desenho, não depois de um problema real.

**Perguntas em aberto**: se e quando o harness de sessão de teste deveria ganhar uma forma de criar sessões não-admin para testes de integração mais realistas — decisão que caberia a uma task própria, não a esta, dado que mexe em código de Fase 4 (`session.service.ts`), fora do escopo autorizado aqui.

**Ações propostas**: política de retenção/descarte é a próxima candidata natural da Fase 7 — última peça exigida pela regra da fase antes de extração, indexação, busca e embeddings poderem começar.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
