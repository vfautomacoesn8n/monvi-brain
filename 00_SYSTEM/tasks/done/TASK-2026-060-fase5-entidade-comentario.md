---
id: task-2026-060
type: task
title: "Fase 5 — oitava fatia operacional: entidade comment (comentários) e sua API"
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
reviewed_at: "2026-08-11T12:01:18-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-059-fase5-entidade-risco.md
  - apps/core-brain/src/db/schema/task.ts
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/src/http/routes/task.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-059-fase5-entidade-risco.md
aliases:
  - Fase 5 — API de comentários
  - Oitava fatia operacional do Core Brain
  - Entidade comment
tags: [core-brain, fase-5, api, comentarios, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-060-fase5-entidade-comentario.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/comment.ts
  - apps/core-brain/src/http/routes/comment.ts
  - apps/core-brain/tests/comment.test.ts
  - apps/core-brain/tests/comment.integration.test.ts
  - apps/core-brain/drizzle/0006_equal_gladiator.sql
  - apps/core-brain/drizzle/meta/0006_snapshot.json
  - apps/core-brain/drizzle/meta/_journal.json
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
  - apps/core-brain/drizzle/0000_orange_hammerhead.sql
  - apps/core-brain/drizzle/meta/0000_snapshot.json
  - apps/core-brain/drizzle/0001_deep_scarlet_spider.sql
  - apps/core-brain/drizzle/meta/0001_snapshot.json
  - apps/core-brain/drizzle/0002_nifty_electro.sql
  - apps/core-brain/drizzle/meta/0002_snapshot.json
  - apps/core-brain/drizzle/0003_daffy_odin.sql
  - apps/core-brain/drizzle/meta/0003_snapshot.json
  - apps/core-brain/drizzle/0004_icy_pestilence.sql
  - apps/core-brain/drizzle/meta/0004_snapshot.json
  - apps/core-brain/drizzle/0005_curious_synch.sql
  - apps/core-brain/drizzle/meta/0005_snapshot.json
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
  - Entidade comment criada em apps/core-brain/src/db/schema/comment.ts, vinculada a task (obrigatório) e a person/autor (obrigatório), exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para comment criadas em apps/core-brain/src/http/routes/comment.ts, registradas em build-app.ts, com autor sempre derivado do usuário autenticado, nunca do corpo da requisição.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de comment.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de comment via API, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de resolver a Parte B ao final da Fase 5.
  - npm run typecheck, npm test e npm run build continuam passando (62/62 testes na suíte padrão, incluindo os 57 já existentes).
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo o estado real, mantendo a suposição explícita de single-tenant, a Parte B pendente e a decisão de design de escopar comentários apenas a task (sem associação polimórfica).
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a criação da entidade comment (comentários), escopada a task, sua migração gerada (não aplicada) e sua API CRUD, sob suposição explícita de single-tenant. Não autoriza comentários em outras entidades (deliverable, risk, etc.), o modelo de multi-organização, os demais entregáveis da Fase 5 (histórico de mudanças, dashboards), aplicação real de qualquer migração contra banco (Parte B, adiada por decisão do CEO até o fim da Fase 5), autenticação de produção real, alteração de código de identidade/autenticação/autorização ou das rotas já existentes, ou qualquer credencial, dado real ou dependência de software nova."
---

# Task 060 — Fase 5, oitava fatia operacional: entidade comment (comentários) e sua API

## Contexto

Após o encerramento da Task 059 (entidade `risk`), o CEO pediu para seguir com a próxima fatia. Segui a ordem do Plano Mestre e propus "comentários". Antes de desenhar o schema, avaliei duas abordagens: uma associação polimórfica genérica (comentários em qualquer entidade) ou uma entidade escopada a `task` apenas, com FK real. Optei pela segunda, por preservar integridade referencial real no banco e por seguir o mesmo padrão incremental já validado nas fatias anteriores — se comentários em outras entidades se mostrarem necessários, isso vira uma fatia própria. O CEO autorizou.

## Objetivo

Criar a entidade `comment`, vinculada a `task` e a `person` (autor), gerar sua migração e expor sua API CRUD, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant e a Parte B deliberadamente adiada para o fim da Fase 5.

## Escopo executado

1. `apps/core-brain/src/db/schema/comment.ts`: entidade `comment` com `task_id` (obrigatório, `onDelete: cascade`), `author_person_id` (obrigatório, `onDelete: cascade`), corpo de texto e o mesmo padrão de exclusão lógica já usado nas entidades anteriores.
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `comment.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0006_equal_gladiator.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/comment.ts`: rotas `POST/GET /tasks/:taskId/comments` e `GET/PATCH/DELETE /comments/:id`, com validação Zod, autenticação, RBAC (`comment:read`/`comment:write`) e auditoria, verificando a existência da tarefa antes de criar ou listar comentários. O autor é sempre `request.user.personId` — nunca aceito do corpo da requisição, evitando que alguém comente em nome de outra pessoa.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/comment.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
7. `apps/core-brain/tests/comment.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `comment` via API, isolado da suíte padrão — escrito, mas deliberadamente não executado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados com o estado real, incluindo a decisão de escopar comentários a `task` apenas.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 62/62 testes passando (5 novos, mais os 57 já existentes), 14 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos nove arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — deliberadamente adiada para o fim da Fase 5

Mesma decisão já registrada nas Tasks 052 a 059: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas em bloco, depois que a Fase 5 estiver completa.

## Critérios de aceite

- [x] Entidade `comment` criada, vinculada a `task` e `person`, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/comment.ts`, integrado em `main` no commit `7995a7ad929524200077f317f782f53cc6980617`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0006_equal_gladiator.sql`, conferida manualmente contra o schema; `npm run test:integration` segue falhando com `ECONNREFUSED`, confirmando que não foi aplicada.
- [x] Rotas CRUD para `comment` criadas e registradas, com autor derivado do usuário autenticado. Evidência: `apps/core-brain/src/http/routes/comment.ts`, registrado em `build-app.ts`; `authorPersonId: request.user.personId` no handler de criação, nunca lido do corpo.
- [x] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]` em cada rota; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes. Evidência: `git show --name-status --format= origin/main` confirmou apenas os 12 arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/comment.test.ts`, 5 testes, parte dos 62/62 da suíte padrão.
- [x] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado. Evidência: `tests/comment.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão explícita do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (62/62 testes). Evidência: reexecutados após o merge, contra `main` sincronizado (`7995a7a`): typecheck limpo, 62/62 testes em 14 arquivos, build sem erros.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre, ambos integrados em `main`.
- [x] Nenhuma credencial, dado real, dependência de software nova ou decisão de multi-organização. Evidência: diff do PR #49 restrito aos 12 arquivos previstos; nenhuma alteração em `package.json`; suposição single-tenant mantida.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge. Evidência: gate explícito "autorizado" concedido para o merge do PR #49.

## Riscos e gates humanos

Riscos: mesmos já registrados nas Tasks 055 a 059 — migrações nunca aplicadas contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; comentários escopados apenas a `task` significa que entregáveis, riscos e outras entidades não têm comentários próprios ainda — decisão deliberada, documentada, revisável se houver necessidade real comprovada.

Gate vigente: encerrado. O merge do PR #49 foi autorizado (`autorizado`) e executado por squash em `7995a7ad929524200077f317f782f53cc6980617`. Esta task está formalmente concluída. Comentários em outras entidades, os demais entregáveis da Fase 5, o modelo de multi-organização e a Parte B (aplicação real de todas as migrações e validação contra Postgres, adiada para o fim da fase) permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 059 → CEO pede para seguir com a próxima fatia → proponho o escopo desta task (entidade `comment` nova, escopada a `task` em vez de associação polimórfica, reaproveitando o padrão já estabelecido) → `autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `autorizado` (merge do PR #49, integrado em `7995a7ad929524200077f317f782f53cc6980617`).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-11

**Gate de encerramento**: o CEO autorizou (`autorizado`) o squash merge do PR #49.

**Integração**: PR #49 integrado em `main` via squash merge, commit `7995a7ad929524200077f317f782f53cc6980617`, em 2026-08-11T14:56:57Z. Escopo integrado: exatamente os 12 arquivos previstos em `allowed_paths` — criação de `src/db/schema/comment.ts`, `src/http/routes/comment.ts`, `tests/comment.test.ts`, `tests/comment.integration.test.ts`, `drizzle/0006_equal_gladiator.sql` e `drizzle/meta/0006_snapshot.json`; edição de `src/db/schema/index.ts`, `src/app/build-app.ts`, `drizzle/meta/_journal.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `93107b2..7995a7a`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 62/62 testes passando em 14 arquivos, build sem erros. Confirma que a integração não quebrou o comportamento da suíte padrão nem o build de produção.

**Estado final**: a oitava fatia operacional da Fase 5 (entidade `comment` e sua API real, com autenticação e RBAC) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. Comentários permanecem deliberadamente escopados a `task` apenas — decisão de design registrada, não uma limitação acidental. Os demais entregáveis da Fase 5 (histórico de mudanças, dashboards), o modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B (aplicação real de todas as migrações e validação das APIs contra Postgres via Docker) permanece explicitamente pendente, por decisão do CEO adiada em bloco para o final da Fase 5.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização ou das rotas já existentes foi tocado; nenhuma credencial, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida.

**Integração deste próprio encerramento**: ainda pendente. Este documento de encerramento, ao ser commitado, seguirá o mesmo ciclo de governança (branch → commit → push → PR → gate de merge explícito) antes de ser integrado em `main`.
