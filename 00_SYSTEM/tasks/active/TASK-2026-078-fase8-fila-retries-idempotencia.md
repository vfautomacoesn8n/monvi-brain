---
id: task-2026-078
type: task
title: "Fase 8 — terceira fatia operacional: fila, retries, idempotência e dead-letter (ciclo de vida de automation_invocation)"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-13"
updated_at: "2026-08-13"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-077-fase8-gatilhos-webhooks.md
  - apps/core-brain/src/db/schema/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
  - 00_SYSTEM/tasks/done/TASK-2026-077-fase8-gatilhos-webhooks.md
aliases:
  - Fase 8 — fila, retries, idempotência e dead-letter
  - Terceira fatia operacional da Fase 8
  - Ciclo de vida de automation_invocation
tags: [core-brain, fase-8, api, automacao, fila, retries, idempotencia, dead-letter, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-078-fase8-fila-retries-idempotencia.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/routes/automation-invocation.ts
  - apps/core-brain/tests/automation-invocation.test.ts
  - apps/core-brain/tests/automation-invocation.integration.test.ts
  - apps/core-brain/tests/automation-trigger.integration.test.ts
  - apps/core-brain/drizzle/0018_third_ma_gnuci.sql
  - apps/core-brain/drizzle/meta/0018_snapshot.json
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
  - apps/core-brain/src/db/schema/memory-note.ts
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/db/schema/automation-trigger.ts
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
  - apps/core-brain/src/http/routes/memory-note.ts
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/tests/automation-workflow.test.ts
  - apps/core-brain/tests/automation-workflow.integration.test.ts
  - apps/core-brain/tests/automation-trigger.test.ts
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
  - apps/core-brain/drizzle/0015_dizzy_devos.sql
  - apps/core-brain/drizzle/0016_funny_red_hulk.sql
  - apps/core-brain/drizzle/0017_redundant_slyde.sql
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
  - apps/core-brain/drizzle/meta/0015_snapshot.json
  - apps/core-brain/drizzle/meta/0016_snapshot.json
  - apps/core-brain/drizzle/meta/0017_snapshot.json
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
  - Campos idempotencyKey, status, attemptCount, maxAttempts, nextAttemptAt e lastError adicionados a apps/core-brain/src/db/schema/automation-invocation.ts, com enum automation_invocation_status (pending/succeeded/dead_letter) e indice unico (automationTriggerId, idempotencyKey).
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - POST /automation-triggers/:token/invoke aceita idempotencyKey opcional no corpo; segunda chamada com a mesma chave para o mesmo gatilho retorna a invocacao existente (200, deduplicated true) em vez de criar duplicata.
  - GET /automation-invocations/queue (autenticado) lista invocacoes pending com nextAttemptAt vencido ou nulo, ordenadas por receivedAt.
  - POST /automation-invocations/:id/attempt (autenticado) registra sucesso (succeeded, terminal) ou falha (incrementa attemptCount, agenda nextAttemptAt com backoff exponencial, ou dead_letter ao esgotar maxAttempts); tentativa sobre invocacao ja terminal retorna 409.
  - Todas as rotas autenticadas exigem authenticateRequest e requirePermission('automation:read'/'automation:write'), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de automation-invocation.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes alem de automation-trigger.ts (apenas o endpoint /invoke) e automation-invocation.ts (nova).
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) nas rotas novas autenticadas, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo deduplicação por idempotencyKey, presença/ausência na fila, ciclo de tentativas ate dead_letter e rejeicao 409 de tentativa em estado terminal, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a terceira fatia da Fase 8.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade nova criada; nenhum worker/processo em background real consumindo a fila automaticamente.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a extensao do ciclo de vida de automation_invocation (Fase 8) com fila/retries/idempotencia/dead-letter, sua migracao gerada (nao aplicada), suas APIs e os testes correspondentes, sob suposicao explicita de single-tenant. Nao autoriza worker ou processo em background real consumindo a fila, aprovacoes, metricas, reprocessamento, integracao real com n8n, agendador real de schedule nem consumidor real de event, o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes alem do necessario, extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 078 — Fase 8, terceira fatia operacional: fila, retries, idempotência e dead-letter

## Contexto

Após o encerramento da Task 077 (gatilhos e webhooks reais), o CEO pediu para continuar. Propus combinar os quatro entregáveis seguintes da fase — fila, retries, idempotência e dead-letter — numa única fatia, já que todos giram em torno do mesmo ciclo de vida de `automation_invocation`, sem exigir nenhuma tabela nova nem serviço de fila externo (Redis, RabbitMQ, SQS). O CEO autorizou.

## Objetivo

Estender `automation_invocation` com estado de processamento (fila, tentativas, dead-letter) e adicionar idempotência ao endpoint de invocação, mantendo a suposição explícita de single-tenant já em vigor.

## Escopo executado

1. `apps/core-brain/src/db/schema/automation-invocation.ts`: campos `idempotency_key` (opcional), `status` (enum `automation_invocation_status`: `pending`/`succeeded`/`dead_letter`, padrão `pending`), `attempt_count` (padrão 0), `max_attempts` (padrão 3), `next_attempt_at` (opcional), `last_error` (opcional) adicionados; índice único `(automation_trigger_id, idempotency_key)` — Postgres permite múltiplos `NULL` nesse índice, então só há conflito quando a mesma chave é usada duas vezes para o mesmo gatilho.
2. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0018_third_ma_gnuci.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
3. `apps/core-brain/src/http/routes/automation-trigger.ts`: `POST /automation-triggers/:token/invoke` passa a extrair `idempotencyKey` do corpo (opcional); se uma invocação com a mesma chave já existir para aquele gatilho, retorna a existente (`200`, `deduplicated: true`) em vez de criar duplicata; caso contrário, cria normalmente (`202`), agora persistindo `idempotencyKey` também.
4. `apps/core-brain/src/http/routes/automation-invocation.ts` (novo arquivo): `GET /automation-invocations/queue` lista invocações `pending` com `nextAttemptAt` vencido ou nulo, ordenadas por `receivedAt` — a fila real, via consulta SQL; `POST /automation-invocations/:id/attempt` registra o resultado de uma tentativa — sucesso encerra (`succeeded`), falha incrementa `attemptCount` e agenda a próxima com backoff exponencial (`2^attemptCount` minutos) ou vira `dead_letter` ao esgotar `maxAttempts`; tentativa sobre invocação já terminal retorna `409`.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/automation-invocation.test.ts`: testes de bloqueio de acesso sem token (401) para as rotas autenticadas novas.
7. `apps/core-brain/tests/automation-invocation.integration.test.ts`: teste de integração real cobrindo deduplicação por `idempotencyKey`, presença/ausência de uma invocação na fila conforme seu status, ciclo completo de três tentativas falhas até `dead_letter`, e rejeição `409` de tentativa em estado terminal — isolado da suíte padrão, escrito mas deliberadamente não executado.
8. `apps/core-brain/tests/automation-trigger.integration.test.ts`: nenhuma alteração necessária — o teste já existente continua válido, já que não usava `idempotencyKey`.
9. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a terceira fatia da Fase 8.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 115/115 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e três arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Campos de ciclo de vida adicionados a `automation_invocation`, com enum e índice único. Evidência: `apps/core-brain/src/db/schema/automation-invocation.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0018_third_ma_gnuci.sql`, conferida manualmente.
- [x] `/invoke` deduplica por `idempotencyKey`. Evidência: `apps/core-brain/src/http/routes/automation-trigger.ts`; teste de integração cobre criação + reenvio.
- [x] `GET /automation-invocations/queue` lista invocações pendentes prontas. Evidência: `apps/core-brain/src/http/routes/automation-invocation.ts`.
- [x] `POST /automation-invocations/:id/attempt` implementa sucesso/falha/retry/dead-letter/409. Evidência: mesmo arquivo; teste de integração cobre os quatro cenários.
- [x] Rotas autenticadas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]`; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas além do necessário. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/automation-invocation.test.ts`, 2 testes.
- [x] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado. Evidência: `tests/automation-invocation.integration.test.ts`, escrito e presente na suíte de integração.
- [x] `typecheck`, `test` e `build` continuam passando (115/115 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade nova ou worker real. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade nova; nenhum processo em background introduzido.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Pendente do gate de merge do PR desta task.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente do encerramento formal desta task.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; sem nenhum worker real, uma invocação só avança de estado se alguém (humano ou sistema externo) chamar `/attempt` — isso é uma limitação deliberada desta fatia, não um bug, mas significa que a fila pode crescer indefinidamente sem processamento automático até que essa decisão de infraestrutura seja tomada; o backoff exponencial não tem teto máximo configurado (pode gerar `nextAttemptAt` muito distante em teoria, embora `maxAttempts` padrão de 3 limite isso na prática).

Gate vigente: aguardando revisão do CEO e autorização explícita do squash merge do PR desta task.

Histórico de gates desta task: encerramento da Task 077 → CEO pede para continuar → proponho o escopo desta task (fila/retries/idempotência/dead-letter combinados, sem fila externa) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
