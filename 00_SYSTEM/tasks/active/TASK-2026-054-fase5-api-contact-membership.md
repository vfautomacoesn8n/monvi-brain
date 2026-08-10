---
id: task-2026-054
type: task
title: "Fase 5 — segunda fatia operacional: API real de contatos e participação em projeto"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-10"
updated_at: "2026-08-10"
reviewed_at: null
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-053-fase5-api-client-project.md
  - apps/core-brain/src/db/schema/client.ts
  - apps/core-brain/src/db/schema/project.ts
  - apps/core-brain/src/http/routes/client.ts
  - apps/core-brain/src/http/routes/project.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-053-fase5-api-client-project.md
aliases:
  - Fase 5 — API de contatos e participação em projeto
  - Segunda fatia operacional do Core Brain
tags: [core-brain, fase-5, api, contatos, projetos, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-054-fase5-api-contact-membership.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/http/routes/contact.ts
  - apps/core-brain/src/http/routes/project-membership.ts
  - apps/core-brain/tests/contact.test.ts
  - apps/core-brain/tests/project-membership.test.ts
  - apps/core-brain/tests/contact-membership.integration.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-052-validacao-real-persistencia-core-brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-053-fase5-api-client-project.md
  - apps/core-brain/src/db/
  - apps/core-brain/src/modules/
  - apps/core-brain/src/http/middlewares/
  - apps/core-brain/src/http/routes/auth.ts
  - apps/core-brain/src/http/routes/health.ts
  - apps/core-brain/src/http/routes/client.ts
  - apps/core-brain/src/http/routes/project.ts
  - apps/core-brain/tests/auth.test.ts
  - apps/core-brain/tests/health.test.ts
  - apps/core-brain/tests/config.test.ts
  - apps/core-brain/tests/db.test.ts
  - apps/core-brain/tests/db.integration.test.ts
  - apps/core-brain/tests/client.test.ts
  - apps/core-brain/tests/project.test.ts
  - apps/core-brain/tests/client-project.integration.test.ts
  - apps/core-brain/drizzle/
  - apps/core-brain/package.json
  - apps/core-brain/vitest.config.ts
  - apps/core-brain/vitest.integration.config.ts
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
  - Rotas para contact (criar, listar por cliente, obter, atualizar, exclusão lógica) e project_membership (adicionar, listar ativos, encerrar participação) criadas e registradas em build-app.ts.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/, apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas de client/project já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo de contact e o ciclo de vida de project_membership via API contra um banco real, isolado da suíte padrão, seguindo o mesmo padrão das Tasks 052 e 053.
  - npm run typecheck, npm test e npm run build continuam passando (32/32 testes na suíte padrão, incluindo os 24 já existentes).
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo o estado real, mantendo a suposição explícita de single-tenant e a Parte B pendente.
  - Nenhuma credencial, dado real ou dependência nova adicionada; nenhuma entidade nova de schema criada (contact e project_membership já existiam desde a Fase 2); nenhuma decisão sobre modelo de multi-organização tomada ou presumida.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a criação da segunda fatia operacional da Fase 5: API real de contact (vinculado a client) e project_membership (vinculando pessoa a projeto), reaproveitando schema já existente desde a Fase 2, sob suposição explícita de single-tenant. Não autoriza o modelo de multi-organização, os demais entregáveis da Fase 5, criação de entidades de schema novas, autenticação de produção real, alteração de código de identidade/autenticação/autorização ou das rotas de client/project já existentes, ou qualquer credencial, dado real ou dependência nova."
---

# Task 054 — Fase 5, segunda fatia operacional: API real de contatos e participação em projeto

## Contexto

Após o encerramento da Task 053 (primeira fatia da Fase 5: API de `client`/`project`), propus continuar pela fatia mais simples e de menor risco: fechar o "bairro" que a Fase 2 já modelou — `contact` (vinculado a `client`) e `project_membership` (vincula pessoa a projeto com papel) — antes de criar qualquer entidade de schema nova (tarefa, entregável, aprovação, dependência, risco, comentário, histórico de mudanças). O CEO autorizou.

## Objetivo

Expor via API o schema de `contact` e `project_membership`, já existente desde a Fase 2, com autenticação e RBAC obrigatórios, mantendo a mesma suposição explícita de single-tenant já documentada na Task 053.

## Escopo executado

1. `apps/core-brain/src/http/routes/contact.ts`: rotas `POST/GET /clients/:clientId/contacts` e `GET/PATCH/DELETE /contacts/:id`, com validação Zod, autenticação, RBAC (`contact:read`/`contact:write`) e auditoria, verificando a existência do cliente antes de criar ou listar contatos.
2. `apps/core-brain/src/http/routes/project-membership.ts`: rotas `POST/GET /projects/:projectId/memberships` e `DELETE /projects/:projectId/memberships/:membershipId`, com RBAC (`project_membership:read`/`project_membership:write`). O `DELETE` não remove o registro — encerra a participação via `leftAt`, preservando o histórico, conforme o próprio schema já definia desde a Fase 2.
3. `apps/core-brain/src/app/build-app.ts`: registro das duas novas rotas sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
4. `apps/core-brain/tests/contact.test.ts` e `tests/project-membership.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
5. `apps/core-brain/tests/contact-membership.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `contact` e o ciclo de vida de `project_membership` via API, isolado da suíte padrão.
6. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados com o estado real.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 32/32 testes passando (8 novos, mais os 24 já existentes), 8 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos três arquivos de integração, confirmando que a configuração está correta e que a validação real contra banco ainda não foi executada.

## Parte B — pendente, fora do meu alcance neste ambiente

Subir `infrastructure/local/docker-compose.yml`, rodar `npm run db:migrate` e `npm run test:integration` em um ambiente com Docker disponível, e reportar o resultado. Acumula com a mesma pendência já registrada nas Tasks 052 e 053.

## Critérios de aceite

- [ ] Rotas para `contact` e `project_membership` criadas e registradas.
- [ ] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente.
- [ ] Nenhuma alteração em `src/db/`, `src/modules/`, `src/http/middlewares/` ou nas rotas de `client`/`project` já existentes.
- [ ] Testes de bloqueio de acesso (401) passando sem banco real.
- [ ] Teste de integração real do ciclo completo criado, isolado da suíte padrão.
- [ ] `typecheck`, `test` e `build` continuam passando (32/32 testes).
- [ ] `README.md` e Plano Mestre atualizados.
- [ ] Nenhuma credencial, dado real, dependência nova, entidade de schema nova ou decisão de multi-organização.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge.

## Riscos e gates humanos

Riscos: a suposição single-tenant segue acumulando escopo que pode exigir revisão quando o modelo de multi-organização for decidido (risco já aceito explicitamente pelo CEO desde a Task 053); a Parte B pendente acumula com a das Tasks 052 e 053; ausência de Docker neste ambiente segue sendo uma limitação estrutural.

Gate vigente: `Autorizo` (em resposta à proposta de escopo da Task 054 — API real de contact/project_membership). Este gate autoriza a execução completa do escopo técnico e a condução do ciclo de governança (commit, push, PR) até o ponto em que a revisão final e o merge, que dependem de decisão do CEO, sejam solicitados. Não autoriza os demais entregáveis da Fase 5, o modelo de multi-organização, nem autenticação de produção real.

Histórico de gates desta task: encerramento da Task 053 → CEO pede para continuar com a próxima fatia → proponho o escopo desta task (contact/project_membership, reaproveitando schema já existente, sem decisão nova) → `Autorizo` (este gate: execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
