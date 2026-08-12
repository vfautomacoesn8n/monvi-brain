---
id: task-2026-065
type: task
title: "Fase 6 — primeira fatia operacional: entidade lead e sua API"
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
reviewed_at: null
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-055-fase5-entidade-tarefa.md
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/src/http/routes/task.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-062-fase5-dashboard-projeto.md
aliases:
  - Fase 6 — API de leads
  - Primeira fatia operacional da Fase 6
  - Entidade lead
tags: [core-brain, fase-6, api, leads, crm, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-065-fase6-entidade-lead.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/lead.ts
  - apps/core-brain/src/http/routes/lead.ts
  - apps/core-brain/tests/lead.test.ts
  - apps/core-brain/tests/lead.integration.test.ts
  - apps/core-brain/drizzle/0007_secret_wither.sql
  - apps/core-brain/drizzle/meta/0007_snapshot.json
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
  - apps/core-brain/tests/
  - apps/core-brain/drizzle/0000_orange_hammerhead.sql
  - apps/core-brain/drizzle/0001_deep_scarlet_spider.sql
  - apps/core-brain/drizzle/0002_nifty_electro.sql
  - apps/core-brain/drizzle/0003_daffy_odin.sql
  - apps/core-brain/drizzle/0004_icy_pestilence.sql
  - apps/core-brain/drizzle/0005_curious_synch.sql
  - apps/core-brain/drizzle/0006_equal_gladiator.sql
  - apps/core-brain/drizzle/meta/0000_snapshot.json
  - apps/core-brain/drizzle/meta/0001_snapshot.json
  - apps/core-brain/drizzle/meta/0002_snapshot.json
  - apps/core-brain/drizzle/meta/0003_snapshot.json
  - apps/core-brain/drizzle/meta/0004_snapshot.json
  - apps/core-brain/drizzle/meta/0005_snapshot.json
  - apps/core-brain/drizzle/meta/0006_snapshot.json
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
  - Entidade lead criada em apps/core-brain/src/db/schema/lead.ts, com origem (source), status de funil e responsável comercial opcional vinculado a person, exportada em schema/index.ts. Não referencia client.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para lead criadas em apps/core-brain/src/http/routes/lead.ts, registradas em build-app.ts.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de lead.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de lead via API, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando (69/69 testes na suíte padrão, incluindo os 64 já existentes).
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo o início da Fase 6, mantendo a suposição explícita de single-tenant.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade além de lead criada.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criação da entidade lead (Fase 6), sua migração gerada (não aplicada) e sua API CRUD, sob suposição explícita de single-tenant. Não autoriza opportunity nem os demais entregáveis da Fase 6, o modelo de multi-organização, aplicação real de qualquer migração contra banco (Parte B, segue deliberadamente adiada), autenticação de produção real, alteração de código de identidade/autenticação/autorização ou das rotas já existentes, ou qualquer credencial, dado real ou dependência de software nova."
---

# Task 065 — Fase 6, primeira fatia operacional: entidade lead e sua API

## Contexto

Após descrever a Parte B, a decisão de multi-organização e a Fase 6, o CEO pediu para começar a Fase 6. Segui o mesmo raciocínio usado para abrir a Fase 5: comecei pela entidade mais fundamental, da qual as demais (oportunidade, qualificação, estágios) provavelmente dependem — `lead`, o ponto de entrada do funil comercial. Diferente das entidades da Fase 5, um lead não referencia `client`: representa um contato ainda não convertido em cliente, com seus próprios dados. O CEO autorizou.

## Objetivo

Criar a entidade `lead`, gerar sua migração e expor sua API CRUD, com autenticação e RBAC obrigatórios, mantendo a suposição explícita de single-tenant já em vigor desde a Fase 5.

## Escopo executado

1. `apps/core-brain/src/db/schema/lead.ts`: entidade `lead` com nome (obrigatório), empresa/e-mail/telefone (opcionais), origem (enum `lead_source`: `referral`/`website`/`social_media`/`event`/`cold_outreach`/`other`, padrão `other`), status de funil (enum `lead_status`: `new`/`contacted`/`qualified`/`disqualified`/`converted`, padrão `new`), responsável comercial opcional (`owner_person_id`, `onDelete: set null`), notas e o mesmo padrão de exclusão lógica já usado nas entidades da Fase 5.
2. `apps/core-brain/src/db/schema/index.ts`: exportação de `lead.js` adicionada.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0007_secret_wither.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/lead.ts`: rotas `POST/GET /leads` e `GET/PATCH/DELETE /leads/:id`, com validação Zod, autenticação, RBAC (`lead:read`/`lead:write`) e auditoria.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/lead.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
7. `apps/core-brain/tests/lead.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `lead` via API, isolado da suíte padrão — escrito, mas deliberadamente não executado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo o início da Fase 6.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 69/69 testes passando (5 novos, mais os 64 já existentes), 17 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos doze arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada, agora estendida à Fase 6

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas em bloco, quando o CEO decidir tratá-las.

## Critérios de aceite

- [ ] Entidade `lead` criada, sem referenciar `client`, exportada em `schema/index.ts`.
- [ ] Migração gerada (não aplicada) correspondendo ao schema desenhado.
- [ ] Rotas CRUD para `lead` criadas e registradas.
- [ ] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente.
- [ ] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.
- [ ] Testes de bloqueio de acesso (401) passando sem banco real.
- [ ] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado.
- [ ] `typecheck`, `test` e `build` continuam passando (69/69 testes).
- [ ] `README.md` e Plano Mestre atualizados.
- [ ] Nenhuma credencial, dado real, dependência de software nova, entidade adicional ou decisão de multi-organização.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código).

## Riscos e gates humanos

Riscos: mesmos já registrados na Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; `origem` e `indicadores comerciais`, entregáveis futuros da fase, são os pontos mais prováveis de esbarrar na decisão de multi-organização ainda pendente.

Gate vigente: `Autorizado` (em resposta à proposta de escopo da Task 065 — entidade `lead` e sua API, primeira fatia da Fase 6). Este gate autoriza a execução completa do escopo técnico e a condução do ciclo de governança (commit, push, PR) até o ponto em que a revisão final e o merge, que dependem de decisão do CEO, sejam solicitados. Por alterar código, o encerramento desta task permanece em PR separada, posterior ao merge e à verificação pós-merge (Regra Fundamental 6 de `TASK-LIFECYCLE.md`).

Histórico de gates desta task: CEO pede a descrição de Parte B, decisão de multi-organização e Fase 6 → CEO decide seguir com a Fase 6 → proponho o escopo desta task (entidade `lead`, sem referenciar `client`, reaproveitando o padrão já validado na Fase 5) → `Autorizado` (este gate: execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
