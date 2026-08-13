---
id: task-2026-077
type: task
title: "Fase 8 — segunda fatia operacional: gatilhos e webhooks reais (entidades automation_trigger e automation_invocation)"
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
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/src/modules/auth/tokens.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
aliases:
  - Fase 8 — gatilhos e webhooks
  - Segunda fatia operacional da Fase 8
  - Entidades automation_trigger e automation_invocation
tags: [core-brain, fase-8, api, automacao, gatilhos, webhooks, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-077-fase8-gatilhos-webhooks.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/automation-trigger.ts
  - apps/core-brain/src/db/schema/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/tests/automation-trigger.test.ts
  - apps/core-brain/tests/automation-trigger.integration.test.ts
  - apps/core-brain/drizzle/0017_redundant_slyde.sql
  - apps/core-brain/drizzle/meta/0017_snapshot.json
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
  - Entidade automation_trigger criada em apps/core-brain/src/db/schema/automation-trigger.ts, vinculada a automation_workflow (onDelete cascade), com tipo, webhookToken/scheduleCron/eventName opcionais e status ativo/inativo, exportada em schema/index.ts.
  - Entidade automation_invocation criada em apps/core-brain/src/db/schema/automation-invocation.ts, vinculada a automation_trigger (onDelete cascade), imutavel (sem PATCH/DELETE), exportada em schema/index.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas CRUD para automation_trigger criadas em apps/core-brain/src/http/routes/automation-trigger.ts, registradas em build-app.ts; webhookToken gerado automaticamente (32 bytes aleatorios em hex) quando triggerType e webhook.
  - Rota GET /automation-triggers/:id/invocations criada, autenticada, listando o historico de invocacoes de um gatilho.
  - Rota POST /automation-triggers/:token/invoke criada, deliberadamente PUBLICA (sem authenticateRequest/requirePermission), validando o token contra um gatilho ativo do tipo webhook, criando um automation_invocation e retornando 202.
  - Todas as demais rotas exigem autenticação (authenticateRequest) e permissão (requirePermission('automation:read'/'automation:write')), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além da criação de automation-trigger.ts e automation-invocation.ts e da exportação em index.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou nas rotas já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota autenticada nova, e confirmando explicitamente que a rota de invoke NAO retorna 401, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo criacao de gatilho webhook, chamada real ao endpoint publico sem autenticacao, registro da invocacao e rejeicao (404) de token inexistente, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a segunda fatia da Fase 8, incluindo a existencia da unica rota publica do sistema.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade além de automation_trigger/automation_invocation criada; nenhuma fila, retry, idempotencia, dead-letter, agendador real ou consumidor de eventos implementado.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criacao das entidades automation_trigger e automation_invocation (Fase 8), sua migracao gerada (nao aplicada), suas APIs (incluindo a rota publica de invocacao) e os testes correspondentes, sob suposicao explicita de single-tenant. Nao autoriza filas, retries, idempotencia, dead-letter, aprovacoes, metricas, reprocessamento, integracao real com n8n, agendador real de schedule nem consumidor real de event, o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes, extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 077 — Fase 8, segunda fatia operacional: gatilhos e webhooks reais

## Contexto

Após o encerramento da Task 076 (catálogo de workflows), o CEO pediu para continuar. Propus combinar "gatilhos" e "webhooks" — segundo e terceiro entregáveis explícitos da fase — numa única fatia, já que na prática um webhook é um tipo de gatilho, e seria estranho construir a abstração geral de gatilho sem fazer pelo menos um tipo disparar de verdade. A decisão de segurança mais relevante desta task foi explícita: a rota de invocação de webhook precisa ser pública (sem `Authorization` da Monvi), já que sistemas externos reais não têm como autenticar com Bearer token da Monvi — a segurança é o próprio token secreto na URL. Apresentei essa decisão ao CEO antes de construir, e ele autorizou.

## Objetivo

Criar as entidades `automation_trigger` e `automation_invocation`, gerar sua migração e expor suas APIs — incluindo a única rota pública de todo o sistema —, mantendo a suposição explícita de single-tenant já em vigor.

## Escopo executado

1. `apps/core-brain/src/db/schema/automation-trigger.ts`: entidade `automation_trigger` vinculada a `automation_workflow` (`onDelete: cascade`, obrigatório), tipo (reaproveitando `automationTriggerTypeEnum` já criado na Task 076), `webhook_token` (opcional, único), `schedule_cron`/`event_name` (opcionais, armazenados mas não executados), `is_active` (padrão `true`) e o mesmo padrão de exclusão lógica das entidades anteriores.
2. `apps/core-brain/src/db/schema/automation-invocation.ts`: entidade `automation_invocation` vinculada a `automation_trigger` (`onDelete: cascade`, obrigatório), payload (`jsonb`, opcional), IP de origem (opcional), `received_at` — imutável, sem `updatedAt`/`deletedAt`, mesma decisão já usada em `document_version`.
3. `apps/core-brain/src/db/schema/index.ts`: exportações de `automation-trigger.js` e `automation-invocation.js` adicionadas.
4. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0017_redundant_slyde.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
5. `apps/core-brain/src/http/routes/automation-trigger.ts`: rotas autenticadas `POST/GET /automation-workflows/:workflowId/triggers`, `GET/PATCH/DELETE /automation-triggers/:id` e `GET /automation-triggers/:id/invocations`; e a rota **pública** `POST /automation-triggers/:token/invoke` — sem `authenticateRequest` nem `requirePermission`, validando o token contra um gatilho ativo do tipo `webhook`, criando um `automation_invocation` e retornando `202 Accepted`. Token gerado via `randomBytes(32).toString('hex')` (função local, sem tocar `src/modules/auth/tokens.ts`).
6. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
7. `apps/core-brain/tests/automation-trigger.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota autenticada nova, e um teste explícito confirmando que `/invoke` **não** retorna 401 (prova de que a rota é pública por design, não por omissão).
8. `apps/core-brain/tests/automation-trigger.integration.test.ts`: teste de integração real cobrindo criação de gatilho webhook, chamada real ao endpoint público sem nenhum header de autenticação, verificação do registro da invocação (payload, listagem) e rejeição (404) de token inexistente — isolado da suíte padrão, escrito mas deliberadamente não executado.
9. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a segunda fatia da Fase 8, incluindo a existência da única rota pública do sistema.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 113/113 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e dois arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Entidade `automation_trigger` criada, vinculada a `automation_workflow`, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/automation-trigger.ts`.
- [x] Entidade `automation_invocation` criada, vinculada a `automation_trigger`, imutável, exportada em `schema/index.ts`. Evidência: `apps/core-brain/src/db/schema/automation-invocation.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0017_redundant_slyde.sql`, conferida manualmente.
- [x] Rotas CRUD de `automation_trigger` criadas e registradas, com geração automática de `webhookToken`. Evidência: `apps/core-brain/src/http/routes/automation-trigger.ts`, registrado em `build-app.ts`.
- [x] `GET /automation-triggers/:id/invocations` criada, autenticada. Evidência: mesmo arquivo de rotas.
- [x] `POST /automation-triggers/:token/invoke` criada, deliberadamente pública, com validação de token e criação de `automation_invocation`. Evidência: mesmo arquivo, ausência de `preHandler` nessa rota específica; teste de integração cobre o fluxo completo.
- [x] Demais rotas exigem autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]` em cada rota autenticada; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou nas rotas já existentes. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Testes de bloqueio de acesso (401) para rotas autenticadas, e confirmação de que `/invoke` não retorna 401. Evidência: `tests/automation-trigger.test.ts`, 7 testes.
- [x] Teste de integração real do ciclo completo criado, isolado da suíte padrão, não executado. Evidência: `tests/automation-trigger.integration.test.ts`, escrito e presente na suíte de integração, não executado por decisão do CEO.
- [x] `typecheck`, `test` e `build` continuam passando (113/113 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados, incluindo a rota pública. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade adicional ou execução real (fila/retry/agendador). Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade além de `automation_trigger`/`automation_invocation`.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Pendente do gate de merge do PR desta task.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente do encerramento formal desta task.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; a rota pública `/invoke` é, por natureza, uma superfície de ataque nova — qualquer pessoa com o token correto pode chamar repetidamente sem limite de taxa (nenhum rate limiting implementado nesta fatia); o token não expira nem é rotacionável via API (só recriando o gatilho); a busca do gatilho por `webhookToken` usa igualdade simples de string, não comparação de tempo constante — teoricamente vulnerável a um ataque de timing extremamente improvável dado o volume e ambiente atuais, mas registrado como limitação conhecida, não resolvida por falta de evidência real de necessidade.

Gate vigente: aguardando revisão do CEO e autorização explícita do squash merge do PR desta task.

Histórico de gates desta task: encerramento da Task 076 → CEO pede para continuar → proponho o escopo desta task (entidades `automation_trigger`/`automation_invocation`, gatilhos e webhooks combinados) e destaco explicitamente a decisão de segurança de tornar `/invoke` uma rota pública → `Autorizado`, incluindo a rota pública (execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
