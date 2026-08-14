---
id: task-2026-079
type: task
title: "Fase 8 — quarta fatia operacional: aprovações e reprocessamento (gate humano e recuperação de dead-letter)"
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
reviewed_at: "2026-08-13"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-078-fase8-fila-retries-idempotencia.md
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/db/schema/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
  - 00_SYSTEM/tasks/done/TASK-2026-077-fase8-gatilhos-webhooks.md
  - 00_SYSTEM/tasks/done/TASK-2026-078-fase8-fila-retries-idempotencia.md
aliases:
  - Fase 8 — aprovações e reprocessamento
  - Quarta fatia operacional da Fase 8
  - Gate humano e recuperação de dead-letter
tags: [core-brain, fase-8, api, automacao, aprovacao, reprocessamento, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-079-fase8-aprovacoes-reprocessamento.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/db/schema/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/routes/automation-invocation.ts
  - apps/core-brain/tests/automation-invocation.test.ts
  - apps/core-brain/tests/automation-invocation.integration.test.ts
  - apps/core-brain/drizzle/0019_salty_mister_fear.sql
  - apps/core-brain/drizzle/meta/0019_snapshot.json
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
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/tests/automation-workflow.test.ts
  - apps/core-brain/tests/automation-workflow.integration.test.ts
  - apps/core-brain/tests/automation-trigger.test.ts
  - apps/core-brain/tests/automation-trigger.integration.test.ts
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
  - apps/core-brain/drizzle/0018_third_ma_gnuci.sql
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
  - apps/core-brain/drizzle/meta/0018_snapshot.json
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
  - Campo requiresApproval (booleano, padrão false) adicionado a apps/core-brain/src/db/schema/automation-workflow.ts.
  - Campos approvedByPersonId, approvedAt e rejectionReason adicionados a apps/core-brain/src/db/schema/automation-invocation.ts; enum automation_invocation_status estendido com pending_approval (antes de pending) e rejected (antes de dead_letter).
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - POST /automation-triggers/:token/invoke cria a invocação como pending_approval quando o workflow associado tem requiresApproval true, ou pending caso contrário (comportamento inalterado).
  - POST /automation-invocations/:id/approve (autenticado) transiciona pending_approval para pending (aprovada) ou rejected (rejeitada, com rejectionReason opcional); tentativa fora de pending_approval retorna 409.
  - POST /automation-invocations/:id/reprocess (autenticado) só aceita invocações em dead_letter, zerando attemptCount/lastError/nextAttemptAt e retornando a pending; tentativa fora de dead_letter retorna 409.
  - GET /automation-invocations/queue continua listando apenas pending, excluindo pending_approval/rejected/succeeded/dead_letter (comportamento inalterado, sem código novo necessário).
  - POST /automation-invocations/:id/attempt passa a aceitar tentativas apenas quando status é pending (endurecendo a checagem anterior de succeeded/dead_letter para qualquer estado não-pending).
  - Todas as rotas autenticadas exigem authenticateRequest e requirePermission('automation:read'/'automation:write'), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de automation-workflow.ts e automation-invocation.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou em rotas além de automation-workflow.ts, automation-trigger.ts e automation-invocation.ts.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) nas rotas novas, passando em npm test sem depender de banco real.
  - Teste de integração real estendido cobrindo reprocessamento de dead_letter para pending com tentativas zeradas, exigência de aprovação antes da fila, aprovação e rejeição, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a quarta fatia da Fase 8.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade nova criada; nenhum worker/processo em background real consumindo a fila; a entidade approval da Fase 5 não é reaproveitada nem alterada.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente aprovacoes e reprocessamento de automation_invocation (Fase 8) — requiresApproval em automation_workflow, os estados pending_approval/rejected, os endpoints /approve e /reprocess, sua migracao gerada (nao aplicada) e os testes correspondentes, sob suposicao explicita de single-tenant, sem reaproveitar ou alterar a entidade approval da Fase 5. Nao autoriza worker ou processo em background real consumindo a fila, logs alem do log de invocacao ja existente, metricas, integracao real com n8n, agendador real de schedule nem consumidor real de event, o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes alem do necessario, extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 079 — Fase 8, quarta fatia operacional: aprovações e reprocessamento

## Contexto

Após o encerramento da Task 078 (fila, retries, idempotência e dead-letter), o CEO pediu para continuar. Propus combinar os dois últimos entregáveis de execução restantes da fase — aprovações e reprocessamento — numa única fatia, já que ambos giram em torno das mesmas duas entidades (`automation_workflow` e `automation_invocation`) e não exigem nenhuma tabela nova. Deliberadamente não reaproveitei a entidade `approval` da Fase 5, por ela ser FK-locked a `deliverable` — estender `automation_workflow`/`automation_invocation` diretamente preserva a simplicidade referencial. O CEO autorizou.

## Objetivo

Dar a workflows a opção de exigir aprovação humana antes de uma invocação entrar na fila, e permitir reprocessar manualmente uma invocação em `dead_letter`, mantendo a suposição explícita de single-tenant já em vigor.

## Escopo executado

1. `apps/core-brain/src/db/schema/automation-workflow.ts`: campo `requires_approval` (booleano, padrão `false`) adicionado.
2. `apps/core-brain/src/db/schema/automation-invocation.ts`: enum `automation_invocation_status` estendido com `pending_approval` (antes de `pending`) e `rejected` (antes de `dead_letter`); campos `approved_by_person_id` (FK opcional para `person`, `onDelete: 'set null'`), `approved_at` e `rejection_reason` adicionados.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0019_salty_mister_fear.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/automation-workflow.ts`: `requiresApproval` adicionado aos schemas Zod de criação e atualização.
5. `apps/core-brain/src/http/routes/automation-trigger.ts`: `POST /automation-triggers/:token/invoke` agora consulta `automation_workflow.requiresApproval` via `innerJoin` a partir do gatilho, e cria a invocação como `pending_approval` (se exigir aprovação) ou `pending` (comportamento anterior, inalterado quando não exigir).
6. `apps/core-brain/src/http/routes/automation-invocation.ts`: `POST /automation-invocations/:id/attempt` endurecido — agora só aceita tentativa quando `status === 'pending'` (antes checava apenas os dois estados terminais anteriores); novo `POST /automation-invocations/:id/approve` transiciona `pending_approval` → `pending` (aprovada, `approvedByPersonId`/`approvedAt` registrados) ou `rejected` (rejeitada, `rejectionReason` opcional), com `409` fora de `pending_approval`; novo `POST /automation-invocations/:id/reprocess` só aceita `dead_letter`, zera `attemptCount`/`lastError`/`nextAttemptAt` e retorna a `pending`, com `409` fora de `dead_letter`.
7. `apps/core-brain/tests/automation-invocation.test.ts`: dois testes novos de bloqueio de acesso sem token (401) para `/approve` e `/reprocess`.
8. `apps/core-brain/tests/automation-invocation.integration.test.ts`: estendido com um segundo workflow+gatilho fixture com `requiresApproval: true`, e dois novos cenários — reprocessamento de `dead_letter` para `pending` com tentativas zeradas (incluindo `409` num segundo reprocessamento), e o fluxo completo de exigência de aprovação (invocação nasce `pending_approval`, ausente da fila, `/attempt` retorna `409`, aprovação move para `pending` com `approvedByPersonId` registrado, e um segundo caso de rejeição com `rejectionReason` e `409` numa segunda tentativa de aprovação).
9. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a quarta fatia da Fase 8.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 117/117 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e três arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [ ] `requiresApproval` adicionado a `automation_workflow`; `pending_approval`/`rejected` adicionados ao enum de `automation_invocation`, com `approvedByPersonId`/`approvedAt`/`rejectionReason`. Evidência: `apps/core-brain/src/db/schema/automation-workflow.ts`, `apps/core-brain/src/db/schema/automation-invocation.ts`.
- [ ] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0019_salty_mister_fear.sql`, conferida manualmente.
- [ ] `/invoke` cria `pending_approval` quando o workflow exige aprovação, `pending` caso contrário. Evidência: `apps/core-brain/src/http/routes/automation-trigger.ts`; teste de integração cobre ambos os caminhos.
- [ ] `POST /automation-invocations/:id/approve` implementa aprovação/rejeição/409. Evidência: `apps/core-brain/src/http/routes/automation-invocation.ts`; teste de integração cobre os três cenários.
- [ ] `POST /automation-invocations/:id/reprocess` implementa reprocessamento de `dead_letter`/409. Evidência: mesmo arquivo; teste de integração cobre ambos os cenários.
- [ ] `/attempt` só aceita `pending`. Evidência: mesmo arquivo, checagem `found.status !== 'pending'`.
- [ ] Rotas autenticadas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]`; `src/http/middlewares/` não foi alterado.
- [ ] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas além do necessário. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [ ] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/automation-invocation.test.ts`, 2 testes novos (4 no total do arquivo).
- [ ] Teste de integração real estendido, isolado da suíte padrão, não executado. Evidência: `tests/automation-invocation.integration.test.ts`, com os dois cenários novos presentes na suíte de integração.
- [ ] `typecheck`, `test` e `build` continuam passando (117/117 testes). Evidência: execução local antes do commit.
- [ ] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [ ] Nenhuma credencial, dado real, dependência de software nova, entidade nova, worker real ou reaproveitamento da entidade `approval` da Fase 5. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade nova; `apps/core-brain/src/db/schema/approval.ts` permanece em `read_only_paths` e intocado.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito para o merge do PR de implementação; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" a ser adicionada no encerramento, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; sem nenhum worker real, uma invocação `pending_approval` só avança se alguém chamar `/approve`, e uma invocação `dead_letter` só volta à fila se alguém chamar `/reprocess` — isso é uma limitação deliberada desta fatia, não um bug, mas significa que ambos os fluxos dependem inteiramente de ação humana ou externa explícita até que uma decisão de infraestrutura seja tomada; `reprocess` zera `attemptCount` sem limite de quantas vezes uma mesma invocação pode ser reprocessada (nenhum teto ou histórico de reprocessamentos anteriores é mantido).

Gate vigente: aguardando revisão e autorização do CEO para abrir o PR de implementação.

Histórico de gates desta task: encerramento da Task 078 → CEO pede para continuar (`Vamos continuar`) → proponho o escopo desta task (aprovações e reprocessamento combinados, sem reaproveitar a entidade `approval` da Fase 5) → `Autorizado`.

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
