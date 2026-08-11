---
id: task-2026-062
type: task
title: "Fase 5 — décima e última fatia operacional: dashboard operacional mínimo por projeto"
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
  - 00_SYSTEM/tasks/done/TASK-2026-061-fase5-api-historico-mudancas.md
  - apps/core-brain/src/db/schema/task.ts
  - apps/core-brain/src/db/schema/deliverable.ts
  - apps/core-brain/src/db/schema/risk.ts
  - apps/core-brain/src/db/schema/approval.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-061-fase5-api-historico-mudancas.md
aliases:
  - Fase 5 — dashboard de projeto
  - Décima fatia operacional do Core Brain
  - Encerramento funcional da Fase 5
tags: [core-brain, fase-5, api, dashboard, agregacao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-062-fase5-dashboard-projeto.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/http/routes/dashboard.ts
  - apps/core-brain/tests/dashboard.test.ts
  - apps/core-brain/tests/dashboard.integration.test.ts
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
  - 00_SYSTEM/tasks/done/TASK-2026-060-fase5-entidade-comentario.md
  - 00_SYSTEM/tasks/done/TASK-2026-061-fase5-api-historico-mudancas.md
  - apps/core-brain/src/db/
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
  - apps/core-brain/tests/comment.test.ts
  - apps/core-brain/tests/comment.integration.test.ts
  - apps/core-brain/tests/history.test.ts
  - apps/core-brain/tests/history.integration.test.ts
  - apps/core-brain/drizzle/
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
  - Rota GET /projects/:projectId/dashboard criada em apps/core-brain/src/http/routes/dashboard.ts, agregando contagens de tasks (por status), deliverables (por status), risks (por status e severidade) e approvals (por status, via join com deliverable).
  - Nenhuma tabela ou migração nova criada — a rota lê exclusivamente as tabelas task, deliverable, risk e approval já existentes.
  - A rota exige autenticação (authenticateRequest) e permissão (requirePermission('dashboard:read')), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/, apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes.
  - Teste automatizado criado cobrindo o bloqueio de acesso sem token (401), passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo a agregação real de tarefas, entregáveis, riscos e aprovações de um projeto, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de resolver a Parte B ao final da Fase 5.
  - npm run typecheck, npm test e npm run build continuam passando (64/64 testes na suíte padrão, incluindo os 63 já existentes).
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo que os 12 entregáveis da Fase 5 estão implementados, mas que a fase não está validada contra banco real (Parte B pendente).
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a criação de uma rota de leitura agregada (GET /projects/:projectId/dashboard) sobre as tabelas task, deliverable, risk e approval já existentes, sob suposição explícita de single-tenant. Não autoriza a criação de nenhuma tabela nova, agregação de dependencies ou comments no dashboard, o modelo de multi-organização, aplicação real de qualquer migração contra banco (Parte B, adiada por decisão do CEO até o fim da Fase 5), autenticação de produção real, alteração de código de identidade/autenticação/autorização, do módulo de auditoria ou das rotas já existentes, ou qualquer credencial, dado real ou dependência de software nova."
---

# Task 062 — Fase 5, décima e última fatia operacional: dashboard operacional mínimo por projeto

## Contexto

Após o encerramento da Task 061 (histórico de mudanças), o CEO pediu para continuar. Este é o último dos 12 entregáveis previstos para a Fase 5 no Plano Mestre. Propus o escopo mínimo: uma rota de leitura agregada por projeto, cobrindo tarefas, entregáveis, riscos e aprovações por status — sem tabela nova, sem gráficos, sem séries temporais. Dependências e comentários ficaram fora do agregado por não serem centrais a uma visão operacional imediata do projeto. O CEO autorizou.

## Objetivo

Expor `GET /projects/:projectId/dashboard`, agregando contagens reais de tarefas, entregáveis, riscos e aprovações de um projeto, com autenticação e RBAC obrigatórios — fechando o gate de saída funcional da Fase 5 ("fluxo interno utilizável com dados controlados e permissões aplicadas"), sem criar nenhuma tabela nova.

## Escopo executado

1. `apps/core-brain/src/http/routes/dashboard.ts`: rota `GET /projects/:projectId/dashboard`, validando o projeto e agregando, via `COUNT(*) GROUP BY`:
   - `tasks`: total e contagem por status (todos os valores do enum, incluindo zero);
   - `deliverables`: total e contagem por status;
   - `risks`: total, contagem por status e por severidade;
   - `approvals`: total e contagem por status, via `INNER JOIN` de `approval` com `deliverable` filtrado pelo projeto.
   RBAC via `requirePermission('dashboard:read')`.
2. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
3. `apps/core-brain/tests/dashboard.test.ts`: teste de bloqueio de acesso sem token (401), sem dependência de banco real.
4. `apps/core-brain/tests/dashboard.integration.test.ts`: teste de integração real cobrindo a agregação de um projeto com uma tarefa, um entregável, um risco e uma aprovação reais — isolado da suíte padrão, escrito mas deliberadamente não executado.
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo que os 12 entregáveis da Fase 5 estão implementados, mas a fase segue sem validação real contra banco (Parte B).

Validado localmente: `npm run typecheck` sem erros; `npm test` com 64/64 testes passando (1 novo, mais os 63 já existentes), 16 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos onze arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — deliberadamente adiada, agora com a Fase 5 funcionalmente completa

Mesma decisão já registrada nas Tasks 052 a 061: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas em bloco. Com esta task, a Fase 5 está funcionalmente completa (todos os 12 entregáveis implementados), o que torna a Parte B a única pendência real restante da fase, além da decisão de multi-organização.

## Critérios de aceite

- [ ] Rota `GET /projects/:projectId/dashboard` criada, agregando tarefas, entregáveis, riscos e aprovações.
- [ ] Nenhuma tabela ou migração nova criada.
- [ ] Rota exige autenticação e permissão, reaproveitando o middleware existente.
- [ ] Nenhuma alteração em `src/db/`, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes.
- [ ] Teste de bloqueio de acesso (401) passando sem banco real.
- [ ] Teste de integração real criado, isolado da suíte padrão, não executado.
- [ ] `typecheck`, `test` e `build` continuam passando (64/64 testes).
- [ ] `README.md` e Plano Mestre atualizados, refletindo a Fase 5 funcionalmente completa.
- [ ] Nenhuma credencial, dado real, dependência de software nova ou decisão de multi-organização.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge.

## Riscos e gates humanos

Riscos: o dashboard não agrega `dependencies` nem `comments` — decisão deliberada de escopo mínimo, revisável se houver necessidade real; a consulta de agregação nunca foi executada contra um banco real (mesma limitação de Parte B de toda a fase); ausência de Docker neste ambiente segue sendo uma limitação estrutural; "Fase 5 completa" descreve implementação e testes que não dependem de banco — não uma fase validada e pronta para uso real, distinção que fiz questão de deixar explícita na atualização do Plano Mestre.

Gate vigente: `autorizado` (em resposta à proposta de escopo da Task 062 — dashboard operacional mínimo por projeto). Este gate autoriza a execução completa do escopo técnico e a condução do ciclo de governança (commit, push, PR) até o ponto em que a revisão final e o merge, que dependem de decisão do CEO, sejam solicitados. Não autoriza a aplicação real de nenhuma migração, o modelo de multi-organização, nem autenticação de produção real.

Histórico de gates desta task: encerramento da Task 061 → CEO pede para continuar → proponho o escopo desta task (dashboard mínimo, sem tabela nova, cobrindo tarefas/entregáveis/riscos/aprovações) → `autorizado` (este gate: execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
