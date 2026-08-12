---
id: task-2026-068
type: task
title: "Fase 6 — quarta fatia operacional: dashboard de indicadores comerciais"
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
  - 00_SYSTEM/tasks/done/TASK-2026-062-fase5-dashboard-projeto.md
  - 00_SYSTEM/tasks/done/TASK-2026-067-fase6-entidade-atividade.md
  - apps/core-brain/src/http/routes/dashboard.ts
  - apps/core-brain/src/db/schema/lead.ts
  - apps/core-brain/src/db/schema/opportunity.ts
  - apps/core-brain/src/db/schema/activity.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-065-fase6-entidade-lead.md
  - 00_SYSTEM/tasks/done/TASK-2026-066-fase6-entidade-oportunidade.md
  - 00_SYSTEM/tasks/done/TASK-2026-067-fase6-entidade-atividade.md
aliases:
  - Fase 6 — dashboard de indicadores comerciais
  - Quarta fatia operacional da Fase 6
  - GET /commercial/dashboard
tags: [core-brain, fase-6, api, indicadores, crm, dashboard, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-068-fase6-dashboard-comercial.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/http/routes/commercial-dashboard.ts
  - apps/core-brain/tests/commercial-dashboard.test.ts
  - apps/core-brain/tests/commercial-dashboard.integration.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - apps/core-brain/src/db/schema/
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
  - apps/core-brain/tests/
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
  - Rota GET /api/v1/commercial/dashboard criada em apps/core-brain/src/http/routes/commercial-dashboard.ts, registrada em build-app.ts, sem nenhuma tabela ou migração nova.
  - Agrega contagens reais de leads por status, oportunidades por estágio e atividades por status e por tipo, via COUNT(*) GROUP BY sobre lead, opportunity e activity — todos os valores possíveis dos enums presentes com 0 quando não há registros, mesmo padrão do dashboard de projeto (Task 062).
  - Rota exige autenticação (authenticateRequest) e permissão (requirePermission('commercial:read')), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/, apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes.
  - Teste automatizado criado cobrindo o bloqueio de acesso sem token (401), passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo a agregação de leads/oportunidades/atividades reais, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a quarta fatia da Fase 6.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade nova criada.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criação do dashboard de indicadores comerciais (Fase 6), agregando contagens sobre lead/opportunity/activity já existentes, sem nenhuma tabela ou migração nova. Não autoriza integrações externas (WhatsApp/e-mail/formulários, explicitamente fora de escopo por 'integração futura' no Plano Mestre original), o modelo de multi-organização, aplicação real de qualquer migração contra banco (Parte B, segue deliberadamente adiada), autenticação de produção real, alteração de código de identidade/autenticação/autorização ou das rotas já existentes, ou qualquer credencial, dado real ou dependência de software nova."
---

# Task 068 — Fase 6, quarta fatia operacional: dashboard de indicadores comerciais

## Contexto

Após o encerramento da Task 067 (entidade `activity`), o CEO pediu para continuar com a próxima fatia. O penúltimo entregável explícito da Fase 6 é "indicadores comerciais" — uma visão agregada do funil comercial, hoje só visível registro a registro via CRUD. Propus reaproveitar exatamente o padrão já validado na Task 062 (dashboard de projeto): nenhuma tabela nova, apenas `COUNT(*) GROUP BY` sobre as tabelas já existentes (`lead`, `opportunity`, `activity`). O CEO autorizou.

## Objetivo

Criar uma rota de leitura agregada (`GET /commercial/dashboard`) com autenticação e RBAC obrigatórios, sem nenhuma alteração de schema.

## Escopo executado

1. `apps/core-brain/src/http/routes/commercial-dashboard.ts`: rota `GET /commercial/dashboard`, agregando leads por `status`, oportunidades por `stage` e atividades por `status` e por `type`, com todos os valores possíveis dos enums presentes (`0` quando não há registros), mesmo padrão de `withCounts`/`zeroedCounts` já usado em `dashboard.ts` (Task 062).
2. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
3. `apps/core-brain/tests/commercial-dashboard.test.ts`: teste de bloqueio de acesso sem token (401), sem dependência de banco real.
4. `apps/core-brain/tests/commercial-dashboard.integration.test.ts`: teste de integração real, criando um lead, uma oportunidade e uma atividade reais e verificando que a agregação reflete esses registros (com `toBeGreaterThanOrEqual`, já que o dashboard é global — não escopado por projeto — e pode conter registros de outros testes de integração) — isolado da suíte padrão, escrito mas deliberadamente não executado.
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a quarta fatia da Fase 6.

Nenhuma migração gerada — esta task não cria nem altera nenhuma tabela.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 80/80 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos quinze arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Rota `GET /commercial/dashboard` criada e registrada, sem tabela ou migração nova. Evidência: `apps/core-brain/src/http/routes/commercial-dashboard.ts`, registrado em `build-app.ts`.
- [x] Agrega leads por status, oportunidades por estágio e atividades por status/tipo, com valores zerados quando ausentes. Evidência: `zeroedCounts`/`withCounts` aplicados sobre `leadStatusEnum`, `opportunityStageEnum`, `activityStatusEnum`, `activityTypeEnum`.
- [x] Rota exige autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission('commercial:read')]`; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em schema, `src/modules/`, `src/http/middlewares/` ou rotas já existentes. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Teste de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/commercial-dashboard.test.ts`, 1 teste, parte dos 80/80 da suíte padrão.
- [x] Teste de integração real criado, isolado da suíte padrão, não executado. Evidência: `tests/commercial-dashboard.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (80/80 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova ou decisão de multi-organização. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade nova.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Pendente do gate de merge do PR desta task.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente do encerramento formal desta task.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — ausência de Docker neste ambiente, suposição single-tenant acumulando escopo; o dashboard é global (não escopado por cliente/projeto), o que é adequado hoje sob suposição single-tenant mas precisará ser revisado quando a decisão de multi-organização for tomada.

Gate vigente: aguardando revisão do CEO e autorização explícita do squash merge do PR desta task.

Histórico de gates desta task: encerramento da Task 067 → CEO pede para continuar com a próxima fatia → proponho o escopo desta task (dashboard de indicadores comerciais, reaproveitando o padrão da Task 062) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
