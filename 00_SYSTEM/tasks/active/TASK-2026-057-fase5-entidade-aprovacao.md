---
id: task-2026-057
type: task
title: "Fase 5 — quinta fatia operacional: entidade approval (aprovações) e sua API"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-11"
updated_at: "2026-08-11"
reviewed_at: null
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-056-fase5-entidade-entregavel.md
  - apps/core-brain/src/db/schema/deliverable.ts
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/src/http/routes/deliverable.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-056-fase5-entidade-entregavel.md
aliases:
  - Fase 5 — API de aprovações
  - Quinta fatia operacional do Core Brain
  - Entidade approval
tags: [core-brain, fase-5, api, aprovacoes, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-057-fase5-entidade-aprovacao.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/approval.ts
  - apps/core-brain/src/http/routes/approval.ts
  - apps/core-brain/tests/approval.test.ts
  - apps/core-brain/tests/approval.integration.test.ts
  - apps/core-brain/drizzle/0003_daffy_odin.sql
  - apps/core-brain/drizzle/meta/0003_snapshot.json
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
  - apps/core-brain/src/db/schema/client.ts
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/src/db/schema/identity.ts
  - apps/core-brain/src/db/schema/profile.ts
  - apps/core-brain/src/db/schema/role.ts
  - apps/core-brain/src/db/schema/project.ts
  - apps/core-brain/src/db/schema/task.ts
  - apps/core-brain/src/db/schema/deliverable.ts
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
  - apps/core-brain/drizzle/0000_orange_hammerhead.sql
  - apps/core-brain/drizzle/meta/0000_snapshot.json
  - apps/core-brain/drizzle/0001_deep_scarlet_spider.sql
  - apps/core-brain/drizzle/meta/0001_snapshot.json
  - apps/core-brain/drizzle/0002_nifty_electro.sql
  - apps/core-brain/drizzle/meta/0002_snapshot.json
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
  - Entidade approval criada em apps/core-brain/src/db/schema/approval.ts, vinculada a deliverable (obrigatório) e a person/aprovador (obrigatório), exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para approval criadas em apps/core-brain/src/http/routes/approval.ts, registradas em build-app.ts, com decided_at preenchido automaticamente ao decidir (status diferente de pending).
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de approval.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas de client/project/contact/project-membership/task/deliverable já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de approval via API, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de resolver a Parte B ao final da Fase 5.
  - npm run typecheck, npm test e npm run build continuam passando (47/47 testes na suíte padrão, incluindo os 42 já existentes).
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo o estado real, mantendo a suposição explícita de single-tenant e a Parte B pendente.
  - Nenhuma credencial, dado real ou dependência nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a criação da entidade approval (aprovações), sua migração gerada (não aplicada) e sua API CRUD, sob suposição explícita de single-tenant. Não autoriza o modelo de multi-organização, os demais entregáveis da Fase 5 (dependências, riscos, comentários, histórico de mudanças, dashboards), aplicação real de qualquer migração contra banco (Parte B, adiada por decisão do CEO até o fim da Fase 5), autenticação de produção real, alteração de código de identidade/autenticação/autorização ou das rotas já existentes, ou qualquer credencial, dado real ou dependência nova."
---

# Task 057 — Fase 5, quinta fatia operacional: entidade approval (aprovações) e sua API

## Contexto

Após o encerramento da Task 056 (entidade `deliverable`), o CEO pediu para seguir com a próxima fatia. Segui a ordem do Plano Mestre e propus "aprovações" como a fatia seguinte: `deliverable` já tem um campo `status` que inclui `approved`/`rejected`, mas nenhum registro de quem tomou essa decisão, quando, ou com que observações — isso é exatamente o que a entidade `approval` resolve. O CEO autorizou.

## Objetivo

Criar a entidade `approval`, vinculada a `deliverable` e a `person` (o aprovador), gerar sua migração e expor sua API CRUD, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant e a Parte B (validação real contra Postgres) deliberadamente adiada para o fim da Fase 5, conforme decisão já registrada na Task 056.

## Escopo executado

1. `apps/core-brain/src/db/schema/approval.ts`: entidade `approval` com `deliverable_id` (obrigatório, `onDelete: cascade`), `approver_person_id` (obrigatório, `onDelete: cascade`), `status` (enum: `pending`, `approved`, `rejected`, padrão `pending`), `notes` (opcional), `decided_at` (preenchido quando a decisão é registrada) e o mesmo padrão de exclusão lógica já usado nas entidades anteriores.
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `approval.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0003_daffy_odin.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/approval.ts`: rotas `POST/GET /deliverables/:deliverableId/approvals` e `GET/PATCH/DELETE /approvals/:id`, com validação Zod, autenticação, RBAC (`approval:read`/`approval:write`) e auditoria, verificando a existência do entregável antes de criar ou listar aprovações. O `PATCH` preenche `decided_at` automaticamente quando `status` muda para um valor diferente de `pending`.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/approval.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
7. `apps/core-brain/tests/approval.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `approval` via API, isolado da suíte padrão — escrito, mas deliberadamente não executado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados com o estado real.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 47/47 testes passando (5 novos, mais os 42 já existentes), 11 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos seis arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — deliberadamente adiada para o fim da Fase 5

Mesma decisão já registrada nas Tasks 052 a 056: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas em bloco, depois que a Fase 5 estiver completa.

## Critérios de aceite

- [ ] Entidade `approval` criada, vinculada a `deliverable` e `person`, exportada em `schema/index.ts`.
- [ ] Migração gerada (não aplicada) correspondendo ao schema desenhado.
- [ ] Rotas CRUD para `approval` criadas e registradas, com `decided_at` automático.
- [ ] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente.
- [ ] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.
- [ ] Testes de bloqueio de acesso (401) passando sem banco real.
- [ ] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado.
- [ ] `typecheck`, `test` e `build` continuam passando (47/47 testes).
- [ ] `README.md` e Plano Mestre atualizados.
- [ ] Nenhuma credencial, dado real, dependência nova ou decisão de multi-organização.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge.

## Riscos e gates humanos

Riscos: mesmos já registrados nas Tasks 055 e 056 — migrações nunca aplicadas contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente.

Gate vigente: `autorizado` (em resposta à proposta de escopo da Task 057 — entidade `approval` e sua API). Este gate autoriza a execução completa do escopo técnico e a condução do ciclo de governança (commit, push, PR) até o ponto em que a revisão final e o merge, que dependem de decisão do CEO, sejam solicitados. Não autoriza os demais entregáveis da Fase 5, o modelo de multi-organização, a aplicação real de nenhuma migração, nem autenticação de produção real.

Histórico de gates desta task: encerramento da Task 056 → CEO pede para seguir → proponho o escopo desta task (entidade `approval` nova, conectada a `deliverable`, reaproveitando o padrão já estabelecido) → `autorizado` (este gate: execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
