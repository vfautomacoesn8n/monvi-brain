---
id: task-2026-070
type: task
title: "Fase 7 — segunda fatia operacional: entidades document e document_version (documentos e versões) e suas APIs"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-12"
updated_at: "2026-08-12"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-entidade-fonte.md
  - apps/core-brain/src/db/schema/source.ts
  - apps/core-brain/src/http/routes/source.ts
  - apps/core-brain/src/db/schema/dependency.ts
  - apps/core-brain/src/http/routes/comment.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-entidade-fonte.md
aliases:
  - Fase 7 — API de documentos e versões
  - Segunda fatia operacional da Fase 7
  - Entidades document e document_version
tags: [core-brain, fase-7, api, documentos, versoes, conhecimento, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-070-fase7-entidade-documento.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/document.ts
  - apps/core-brain/src/db/schema/document-version.ts
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/src/http/routes/document-version.ts
  - apps/core-brain/tests/document.test.ts
  - apps/core-brain/tests/document.integration.test.ts
  - apps/core-brain/drizzle/0011_tearful_expediter.sql
  - apps/core-brain/drizzle/meta/0011_snapshot.json
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
requires_review: true
acceptance_criteria:
  - Entidade document criada em apps/core-brain/src/db/schema/document.ts, com titulo, origem opcional em source, responsavel e status opcionais, exportada em schema/index.ts.
  - Entidade document_version criada em apps/core-brain/src/db/schema/document-version.ts, vinculada a document (onDelete cascade), com numero de versao auto-incremental (indice unico document_id+version_number) e conteudo textual, exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD completas para document criadas em apps/core-brain/src/http/routes/document.ts, registradas em build-app.ts.
  - Rotas POST e GET (sem PATCH/DELETE, versao imutavel) para document_version criadas em apps/core-brain/src/http/routes/document-version.ts, aninhadas sob /documents/:documentId/versions, registradas em build-app.ts.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission('document:read'/'document:write')), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de document.ts e document-version.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes, incluindo source.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de document via API e a criação sequencial de versões imutáveis, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a segunda fatia da Fase 7.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade além de document e document_version criada; nenhum trabalho de classificação, permissões granulares por documento, extração, indexação, busca textual ou embeddings iniciado.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criação das entidades document e document_version (Fase 7), sua migração gerada (não aplicada) e suas APIs, sob suposição explícita de single-tenant. Não autoriza classificação, permissões granulares por documento, extração de conteúdo de arquivos, indexação, busca textual, política de retenção/descarte, memória operacional, embeddings ou busca vetorial (explicitamente bloqueados pela regra da Fase 7 até essas etapas estarem definidas), o modelo de multi-organização, aplicação real de qualquer migração contra banco (Parte B, segue deliberadamente adiada), autenticação de produção real, alteração de código de identidade/autenticação/autorização ou das rotas já existentes, ou qualquer credencial, dado real ou dependência de software nova."
---

# Task 070 — Fase 7, segunda fatia operacional: entidades document e document_version e suas APIs

## Contexto

Após o encerramento da Task 069 (entidade `source`), o CEO pediu para continuar com a próxima fatia. O segundo entregável explícito da Fase 7 no Plano Mestre é "documentos e versões" — tratado como um único entregável, e é também um dos pré-requisitos citados pela regra da própria fase ("versionamento... definidos") antes de qualquer trabalho de permissões granulares, indexação, busca ou embeddings. Propus duas entidades: `document` (metadados, referenciando `source` de forma opcional) e `document_version` (conteúdo textual imutável, uma linha por versão, sem edição ou remoção — descarte/retenção é um entregável posterior e ainda não definido). O CEO autorizou.

## Objetivo

Criar as entidades `document` e `document_version`, gerar sua migração e expor suas APIs, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant já em vigor.

## Escopo executado

1. `apps/core-brain/src/db/schema/document.ts`: entidade `document` com título (obrigatório), origem opcional em `source` (`onDelete: set null`), responsável opcional (`owner_person_id`, `onDelete: set null`), status (enum `document_status`: `draft`/`published`/`archived`, padrão `draft`), notas e o mesmo padrão de exclusão lógica das entidades anteriores.
2. `apps/core-brain/src/db/schema/document-version.ts`: entidade `document_version`, vinculada a `document` (`onDelete: cascade`, obrigatório), número de versão (inteiro, calculado automaticamente na API como `max(versionNumber) + 1` por documento, com índice único `document_id`+`version_number` garantindo integridade mesmo sob concorrência), conteúdo textual (obrigatório), autor opcional (`created_by_person_id`, `onDelete: set null`) — sem `updatedAt`/`deletedAt`, já que versões são imutáveis por design nesta fase.
3. `apps/core-brain/src/db/schema/index.ts`: exportações de `document.js` e `document-version.js` adicionadas.
4. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0011_tearful_expediter.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
5. `apps/core-brain/src/http/routes/document.ts`: rotas `POST/GET /documents` e `GET/PATCH/DELETE /documents/:id`, com validação Zod, autenticação, RBAC (`document:read`/`document:write`) e auditoria — mesmo padrão CRUD das entidades anteriores.
6. `apps/core-brain/src/http/routes/document-version.ts`: rotas `POST/GET /documents/:documentId/versions`, aninhadas sob `document` (padrão já usado em `comment`/`task`), sem `PATCH`/`DELETE` — versões são imutáveis.
7. `apps/core-brain/src/app/build-app.ts`: registro das duas novas rotas sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes (incluindo `source`).
8. `apps/core-brain/tests/document.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
9. `apps/core-brain/tests/document.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `document` via API (incluindo origem em `source`) e a criação sequencial de duas versões imutáveis, confirmando a numeração automática — isolado da suíte padrão, escrito mas deliberadamente não executado.
10. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a segunda fatia da Fase 7.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 92/92 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos dezessete arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Entidade `document` criada, com origem opcional em `source`, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/document.ts`.
- [x] Entidade `document_version` criada, vinculada a `document` (cascade), com número de versão auto-incremental e índice único, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/document-version.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0011_tearful_expediter.sql`, conferida manualmente.
- [x] Rotas CRUD para `document` criadas e registradas. Evidência: `apps/core-brain/src/http/routes/document.ts`, registrado em `build-app.ts`.
- [x] Rotas POST/GET (sem PATCH/DELETE) para `document_version` criadas e registradas. Evidência: `apps/core-brain/src/http/routes/document-version.ts`, registrado em `build-app.ts`.
- [x] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]` em cada rota; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/document.test.ts`, 7 testes.
- [x] Teste de integração real do ciclo completo e versionamento sequencial criado, isolado da suíte padrão, não executado. Evidência: `tests/document.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (92/92 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade adicional ou trabalho além do escopo autorizado. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade além de `document`/`document_version`.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Pendente do gate de merge do PR desta task.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente do encerramento formal desta task.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; o cálculo do próximo número de versão (`select max + insert`) não está dentro de uma transação com lock explícito, o que teoricamente permite uma corrida rara sob escrita concorrente simultânea no mesmo documento — o índice único no banco impede duplicidade real (a segunda escrita falharia), mas não há retry automático; decisão deliberada de manter simples até haver evidência real de necessidade, dado que o sistema é single-tenant e de baixo volume nesta fase.

Gate vigente: aguardando revisão do CEO e autorização explícita do squash merge do PR desta task.

Histórico de gates desta task: encerramento da Task 069 → CEO pede para continuar com a próxima fatia → proponho o escopo desta task (entidades `document` e `document_version`, documentos e versões, segundo entregável da Fase 7) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
