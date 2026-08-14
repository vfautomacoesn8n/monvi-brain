---
id: task-2026-084
type: task
title: "Fase 10 — primeira fatia: catálogo de integrações externas (integration, sem credenciais ou conexão real)"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-14"
updated_at: "2026-08-14"
reviewed_at: "2026-08-14"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-083-fase9-sinalizacao-aprovacao-humana.md
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
  - 00_SYSTEM/tasks/done/TASK-2026-081-fase9-catalogo-agentes.md
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
  - 00_SYSTEM/tasks/done/TASK-2026-081-fase9-catalogo-agentes.md
aliases:
  - Fase 10 — catálogo de integrações externas
  - Primeira fatia da Fase 10
  - integration
tags: [core-brain, fase-10, api, integracoes-externas, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-084-fase10-catalogo-integracoes.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/db/schema/integration.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/http/routes/integration.ts
  - apps/core-brain/tests/integration.test.ts
  - apps/core-brain/tests/integration.integration.test.ts
  - apps/core-brain/drizzle/0023_flat_xavin.sql
  - apps/core-brain/drizzle/meta/0023_snapshot.json
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
  - apps/core-brain/src/db/schema/automation-invocation.ts
  - apps/core-brain/src/db/schema/ai-agent.ts
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
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/routes/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-dashboard.ts
  - apps/core-brain/src/http/routes/ai-agent.ts
  - apps/core-brain/tests/ai-agent.test.ts
  - apps/core-brain/tests/ai-agent.integration.test.ts
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
  - apps/core-brain/drizzle/0019_salty_mister_fear.sql
  - apps/core-brain/drizzle/0020_violet_thor_girl.sql
  - apps/core-brain/drizzle/0021_perfect_miek.sql
  - apps/core-brain/drizzle/0022_brainy_grim_reaper.sql
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
  - apps/core-brain/drizzle/meta/0019_snapshot.json
  - apps/core-brain/drizzle/meta/0020_snapshot.json
  - apps/core-brain/drizzle/meta/0021_snapshot.json
  - apps/core-brain/drizzle/meta/0022_snapshot.json
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
  - Entidade integration criada em apps/core-brain/src/db/schema/integration.ts com provider (enum integration_provider com as nove integrações previstas: github/google_workspace/forms_email/whatsapp/crm_spreadsheets/n8n/nuvemshop/analytics_media/other), name, minimalScopes (texto livre), ownerPersonId (FK opcional para person), status (enum integration_status: draft/active/paused/revoked, padrão draft), notes, createdAt/updatedAt/deletedAt (soft delete).
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - CRUD completo em apps/core-brain/src/http/routes/integration.ts: POST/GET/PATCH/DELETE /integrations e GET /integrations/:id, seguindo exatamente o padrão de automation-workflow.ts e ai-agent.ts.
  - Todas as rotas exigem authenticateRequest e requirePermission('integration:read'/'integration:write'), permissão nova e isolada, reaproveitando o middleware já existente sem alteração nele.
  - DELETE é soft delete (preenche deletedAt), consistente com todas as outras entidades de cadastro do sistema.
  - Nenhuma credencial real armazenada em nenhum campo; nenhuma chamada real a API externa; nenhum webhook real registrado ou recebido — puro cadastro.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de integration.ts e index.ts (barrel); nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou em rotas já existentes.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em todas as rotas novas, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo (criação, listagem, leitura, atualização, remoção lógica) de uma integração real, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a primeira fatia da Fase 10, incluindo a pausa formal da Fase 9.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma conexão real a serviço externo estabelecida.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente o catalogo de integracoes externas (Fase 10) — a entidade integration, sua migracao gerada (nao aplicada), seu CRUD via API e os testes correspondentes, sob suposicao explicita de single-tenant, puro cadastro sem nenhuma credencial real, chamada de API externa ou webhook real. Nao autoriza credenciais segregadas reais, escopos minimos aplicados de fato, webhook seguro real, retry, idempotencia, logs, monitoramento, revogacao real, documentacao de integracao especifica ou teste de falha real (demais entregaveis da Fase 10, dependem de decisao do CEO sobre qual servico conectar e de credenciais reais), retomada da Fase 9 (pausada por decisao do CEO ate haver decisao sobre execucao real de agentes), o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes, extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), integracao com n8n e APIs da Fase 8 (deixada deliberadamente pendente), ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 084 — Fase 10, primeira fatia: catálogo de integrações externas

## Contexto

Após o encerramento da Task 083 (sinalização de aprovação humana em `ai_agent`), sinalizei ao CEO que a Fase 9 estava se aproximando do limite do que dá para avançar com fatias puramente declarativas, já que todos os entregáveis restantes dependem de uma decisão sobre execução real de agentes ainda não tomada. O CEO decidiu pausar a Fase 9 nesse ponto e avançar para a Fase 10 (Integrações externas). Antes de propor qualquer escopo, sinalizei explicitamente que a Fase 10 é categoricamente diferente de tudo construído até aqui: seus entregáveis (contrato, credenciais segregadas, escopos mínimos, webhook seguro, retry, idempotência, logs, monitoramento, revogação, documentação, teste de falha) por integração real exigem, em algum ponto, credenciais reais de serviços externos que só o CEO pode fornecer — a primeira vez neste projeto que isso acontece. Propus abrir a fase com o mesmo padrão de catálogo puro que abriu as Fases 8 e 9, documentando a intenção de cada integração sem nenhuma credencial ou conexão real. O CEO autorizou.

## Objetivo

Criar o cadastro de integrações externas — provedor, nome, escopos mínimos pretendidos — sem nenhuma credencial real, chamada de API externa ou webhook real, deixando claro que os entregáveis seguintes dependem de decisão e credenciais do CEO.

## Escopo executado

1. `apps/core-brain/src/db/schema/integration.ts` (novo arquivo): `integration` — `provider` (enum `integration_provider` fechado com as nove integrações previstas na ordem recomendada do Plano Mestre: `github`/`google_workspace`/`forms_email`/`whatsapp`/`crm_spreadsheets`/`n8n`/`nuvemshop`/`analytics_media`/`other`), `name` (obrigatório), `minimalScopes` (texto livre, escopos mínimos pretendidos), `ownerPersonId` (FK opcional para `person`, `onDelete: 'set null'`), `status` (enum `integration_status`: `draft`/`active`/`paused`/`revoked`, padrão `draft`), `notes`, `createdAt`/`updatedAt`/`deletedAt` (soft delete).
2. `apps/core-brain/src/db/schema/index.ts`: `integration.js` adicionado ao barrel export.
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0023_flat_xavin.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/integration.ts` (novo arquivo): CRUD completo (`POST/GET/PATCH/DELETE /integrations`, `GET /integrations/:id`) seguindo exatamente o padrão de `automation-workflow.ts`/`ai-agent.ts` — validação Zod, soft delete, `recordAuditEvent` em criação/atualização/remoção.
5. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
6. `apps/core-brain/tests/integration.test.ts` (novo arquivo): testes de bloqueio de acesso sem token (401) para as cinco rotas.
7. `apps/core-brain/tests/integration.integration.test.ts` (novo arquivo): teste de integração real cobrindo o ciclo completo (criação, listagem, leitura, atualização, remoção lógica) — isolado da suíte padrão, escrito mas deliberadamente não executado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a primeira fatia da Fase 10 e a pausa formal da Fase 9.

Permissão nova e isolada (`integration:read`/`integration:write`) — não reaproveita `automation:*` nem `agent:*`, já que integrações externas são um conceito distinto, mesmo compartilhando o padrão de cadastro.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 128/128 testes passando em 31 arquivos (um "Worker exited unexpectedly" transitório do Vitest ocorreu na primeira execução, resolvido limpo na segunda tentativa — mesmo padrão de flakiness ambiental já documentado em retrospectivas anteriores, não uma regressão); `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e seis arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [ ] `integration` criada com todos os campos previstos. Evidência: `apps/core-brain/src/db/schema/integration.ts`.
- [ ] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0023_flat_xavin.sql`, conferida manualmente.
- [ ] CRUD completo implementado, seguindo o padrão de `automation-workflow.ts`/`ai-agent.ts`. Evidência: `apps/core-brain/src/http/routes/integration.ts`.
- [ ] Rotas exigem autenticação e permissão nova (`integration:read`/`integration:write`), reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission(...)]`; `src/http/middlewares/` não foi alterado.
- [ ] `DELETE` é soft delete. Evidência: `deletedAt` preenchido, não removido; teste de integração confirma `404` após remoção.
- [ ] Nenhuma credencial real, chamada de API externa ou webhook real. Evidência: rotas fazem apenas leitura/escrita de metadados; nenhuma chamada a serviço externo.
- [ ] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas já existentes. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [ ] Testes de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/integration.test.ts`, 5 testes.
- [ ] Teste de integração real do ciclo completo, isolado da suíte padrão, não executado. Evidência: `tests/integration.integration.test.ts`, escrito e presente na suíte de integração.
- [ ] `typecheck`, `test` e `build` continuam passando (128/128 testes). Evidência: execução local antes do commit.
- [ ] `README.md` e Plano Mestre atualizados, incluindo a pausa formal da Fase 9. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [ ] Nenhuma credencial, dado real, dependência de software nova ou conexão real a serviço externo. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade além de `integration`.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito para o merge do PR de implementação; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" a ser adicionada no encerramento, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; risco específico desta fatia — o enum `provider` é fechado com nove valores; se o CEO quiser cadastrar uma integração fora dessa lista antes de "demais APIs" (`other`) ser suficiente, será necessário nova migração para estender o enum, custo aceito conscientemente por manter o campo tipado em vez de texto livre; nenhuma integração cadastrada aqui tem qualquer efeito real — cadastrar uma integração como `active` não conecta nada de verdade, é só metadado, risco de falsa sensação de prontidão que documentamos explicitamente.

Gate vigente: aguardando revisão e autorização do CEO para abrir o PR de implementação.

Histórico de gates desta task: encerramento da Task 083 → sinalizo que a Fase 9 pode estar no limite de fatias declarativas → CEO pergunta recomendação (`O que você recomenda?`) → recomendo pausar a Fase 9 → CEO decide (`Vamos pausar e ir para a próxima fase`) → sinalizo a diferença estrutural da Fase 10 (credenciais reais necessárias) → proponho o escopo desta task (catálogo puro de integrações, sem credenciais reais) → `Autorizado`.

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
