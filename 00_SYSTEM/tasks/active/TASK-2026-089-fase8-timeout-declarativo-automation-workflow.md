---
id: task-2026-089
type: task
title: "Fase 8 — timeoutSeconds declarativo em automation_workflow (realinhamento parcial ao modelo canônico de execução supervisionada)"
status: active
task_state: in-progress
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-18"
updated_at: "2026-08-18"
reviewed_at: null
review_cycle: on-change
sources:
  - 00_SYSTEM/architecture/Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md
  - 00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md
  - 00_SYSTEM/tasks/done/TASK-2026-088-fase9-realinhamento-ai-agent-helpper-especialista.md
  - 00_SYSTEM/tasks/done/TASK-2026-078-fase8-fila-retries-idempotencia.md
  - 00_SYSTEM/tasks/done/TASK-2026-079-fase8-aprovacoes-reprocessamento.md
  - apps/core-brain/src/db/schema/ai-agent.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-076-fase8-catalogo-workflows.md
  - 00_SYSTEM/tasks/done/TASK-2026-077-fase8-gatilhos-webhooks.md
  - 00_SYSTEM/tasks/done/TASK-2026-078-fase8-fila-retries-idempotencia.md
  - 00_SYSTEM/tasks/done/TASK-2026-079-fase8-aprovacoes-reprocessamento.md
  - 00_SYSTEM/tasks/done/TASK-2026-080-fase8-logs-metricas.md
  - 00_SYSTEM/tasks/done/TASK-2026-088-fase9-realinhamento-ai-agent-helpper-especialista.md
aliases:
  - timeoutSeconds em automation_workflow
  - Realinhamento parcial da Fase 8
tags: [core-brain, fase-8, api, automacoes, realinhamento-arquitetural, schema, migracao, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-089-fase8-timeout-declarativo-automation-workflow.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/tests/automation-workflow.integration.test.ts
  - apps/core-brain/drizzle/0026_late_zemo.sql
  - apps/core-brain/drizzle/meta/0026_snapshot.json
  - apps/core-brain/drizzle/meta/_journal.json
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/registries/
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
  - apps/core-brain/src/db/schema/automation-invocation.ts
  - apps/core-brain/src/db/schema/ai-agent.ts
  - apps/core-brain/src/db/schema/integration.ts
  - apps/core-brain/src/db/schema/session.ts
  - apps/core-brain/src/db/schema/index.ts
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
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/routes/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-dashboard.ts
  - apps/core-brain/src/http/routes/ai-agent.ts
  - apps/core-brain/src/http/routes/integration.ts
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/tests/automation-workflow.test.ts
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
  - apps/core-brain/drizzle/0023_flat_xavin.sql
  - apps/core-brain/drizzle/0024_complete_hitman.sql
  - apps/core-brain/drizzle/0025_cynical_mother_askani.sql
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
  - apps/core-brain/drizzle/meta/0023_snapshot.json
  - apps/core-brain/drizzle/meta/0024_snapshot.json
  - apps/core-brain/drizzle/meta/0025_snapshot.json
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
  - Pesquisa documental executada e evidenciada ao CEO antes de qualquer proposta de escopo, confrontando automation_workflow/automation_invocation com Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md e Politica-aprovacao-e-separacao-de-funcoes-agentes.md (Task 031).
  - Campo timeoutSeconds (inteiro opcional) adicionado a automation_workflow, mesmo padrão de nome/tipo de ai_agent.timeoutSeconds (Task 082).
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado — apenas ALTER TABLE ADD COLUMN, sem alteração de enum.
  - Rotas POST/PATCH /automation-workflows estendidas para aceitar timeoutSeconds via Zod, sem rota nova.
  - Nenhuma outra divergência do modelo canônico endereçada nesta fatia — máquina de 12 estados operacionais, retry diferenciado por tipo de falha, estados/expiração/separação de funções de aprovação, concorrência/locks/prioridade, cost_limit e demais campos do contrato de execução ficam explicitamente fora, adiados para conversa futura dedicada, por decisão do CEO.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de automation-workflow.ts; nenhuma alteração em outras rotas.
  - Teste de integração real estendido cobrindo o campo novo na criação e na atualização, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a adição, incluindo a citação explícita das fontes arquiteturais consultadas e do que foi deliberadamente adiado.
  - Nenhuma credencial, dado real, decisão de multi-organização, nova tabela ou comportamento de execução real (sem worker consumindo a fila, sem enforcement de timeout).
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a adicao do campo declarativo timeoutSeconds a automation_workflow, sua migracao gerada (nao aplicada) e o teste correspondente, sob suposicao explicita de single-tenant. Nao autoriza a maquina de 12 estados operacionais canonicos, retry diferenciado por tipo de falha, estados/expiracao/separacao de funcoes de aprovacao, concorrencia/locks/prioridade, cost_limit ou qualquer outro campo do contrato de execucao supervisionada; nao autoriza nenhum worker real consumindo a fila nem enforcement real de timeout (nao existe processo em segundo plano no projeto); nao autoriza retomada de qualquer outra decisao pendente (Parte B, integracao com n8n, proximo passo do GitHub, execucao real de agentes da Fase 9); nao autoriza qualquer credencial, dado real ou dependencia de software nova."
---

# Task 089 — Fase 8, `timeoutSeconds` declarativo em `automation_workflow`

## Contexto

Após o encerramento da Task 088 (realinhamento de `ai_agent` ao contrato canônico de Helpper especialista), o CEO perguntou minha recomendação sobre duas questões em aberto daquela retrospectiva (conexão formal `profile`↔`ai_agent`, entidade formal de "biblioteca única"). Recomendei não construir nenhuma das duas agora, citando a regra de implementação progressiva (`Matriz-fronteiras-responsabilidades-ecossistema-Monvi.md`, seção 14: "Nenhum Helpper especialista dedicado deve ser criado apenas por antecipação organizacional"). O CEO concordou e pediu para seguir com a pesquisa já anunciada sobre a Fase 8.

Reli `Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md` e `Politica-aprovacao-e-separacao-de-funcoes-agentes.md` (ambos da Task 031) contra o estado atual de `automation_workflow`/`automation_invocation` e encontrei uma divergência da mesma natureza da que motivou a Task 088, porém proporcionalmente maior: falta de timeout, retry indiferenciado por tipo de falha (o modelo canônico prevê uma tabela de retry diferenciada por classe de erro), ausência de estados/expiração distintos de aprovação e de separação de funções (executor não pode aprovar a própria ação crítica), e apenas 5 dos 12 estados operacionais canônicos implementados (`pending`/`processing`/`succeeded`/`failed`/`dead_letter`, faltando `queued` distinto, `validating`, `waiting-context`, `waiting-approval` distinto, `retrying` distinto, `blocked`, `cancelled`, `rolled-back`, `quarantined`), além da maior parte dos campos do "contrato de execução" (execution_id, agent_version, risk_level, fila/prioridade, cost_limit, rollback_reference, policy_version).

Apresentei essas descobertas ao CEO com citações. Perguntei sua recomendação sobre o quanto endereçar agora, dado que — diferente da Fase 9, que é pura representação sem execução real — a Fase 8 já tem comportamento real testado (Tasks 078/079: fila, retries, aprovações, reprocessamento funcionando de verdade via API). Recomendei uma divisão conservadora: adicionar apenas `timeoutSeconds` agora (campo seguro, declarativo, sem mudança de comportamento, mesmo padrão já usado em `ai_agent.timeoutSeconds`), e adiar toda a máquina de 12 estados, retry diferenciado, separação de funções na aprovação, concorrência/locks e `cost_limit` para uma conversa futura dedicada, por tocar comportamento de execução já testado. O CEO respondeu **"Vamos seguir a sua recomendação"**, e autorizou (`Autorizado`) o escopo técnico concreto que propus a partir dessa recomendação.

## Objetivo

Adicionar `automation_workflow.timeoutSeconds` como campo puramente declarativo, sem introduzir nenhum enforcement real (não existe worker consumindo a fila automaticamente) nem qualquer outra parte do modelo canônico de execução supervisionada, que fica deliberadamente adiada.

## Escopo executado

1. `apps/core-brain/src/db/schema/automation-workflow.ts`: campo novo `timeoutSeconds` (`integer('timeout_seconds')`, opcional), posicionado após `requiresApproval` e antes de `notes` — mesmo nome/tipo/padrão de `ai_agent.timeoutSeconds` (Task 082).
2. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0026_late_zemo.sql` — `ALTER TABLE "automation_workflow" ADD COLUMN "timeout_seconds" integer;`, conferida e confirmada como a única alteração (nenhuma mudança de enum, já que `automationWorkflowStatusEnum` não foi tocado).
3. `apps/core-brain/src/http/routes/automation-workflow.ts`: `createAutomationWorkflowSchema` estendido com `timeoutSeconds: z.number().int().positive().optional()`; `updateAutomationWorkflowSchema` estendido com `timeoutSeconds: z.number().int().positive().nullable().optional()`. Nenhuma rota nova.
4. `apps/core-brain/tests/automation-workflow.integration.test.ts`: cenário de criação estendido com `timeoutSeconds: 120` e asserção correspondente; cenário de atualização estendido com `timeoutSeconds: 300` na mesma chamada que já testava `status: 'active'`, com asserção correspondente.
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados citando explicitamente as fontes arquiteturais consultadas, a divergência encontrada e o que foi deliberadamente adiado.

Deliberadamente fora desta fatia: máquina de 12 estados operacionais canônicos (`queued`/`validating`/`waiting-context`/`waiting-approval`/`running`/`retrying`/`completed`/`failed`/`blocked`/`cancelled`/`rolled-back`/`quarantined`); tabela de retry diferenciado por tipo de falha; estados distintos de aprovação (`not-required`/`pending`/`approved`/`rejected`/`expired`/`revoked`) e separação de funções (executor não aprova a própria ação); concorrência, prioridade, locks e limite de fila; `cost_limit`; demais campos do contrato de execução (`execution_id`, `agent_version`, `risk_level`, `rollback_reference`, `policy_version`); qualquer worker real consumindo a fila ou aplicando o timeout de fato.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 135/135 testes passando em 33 arquivos (após um retry — o primeiro run teve o "Worker exited unexpectedly" transitório já documentado em tasks anteriores, resolvido na segunda execução); `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e seis arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las (o CEO sinalizou que vai tentar numa máquina com Docker disponível).

## Critérios de aceite

- [x] Pesquisa documental executada e evidenciada ao CEO antes da proposta de escopo. Evidência: mensagens da conversa citando `Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md` e `Politica-aprovacao-e-separacao-de-funcoes-agentes.md`, com a divergência detalhada (12 estados canônicos vs. 5 implementados, retry indiferenciado, etc.).
- [x] Campo `timeoutSeconds` adicionado, mesmo padrão de `ai_agent.timeoutSeconds`. Evidência: `apps/core-brain/src/db/schema/automation-workflow.ts`.
- [x] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0026_late_zemo.sql`, conferida manualmente linha a linha.
- [x] Rotas estendidas sem rota nova. Evidência: `apps/core-brain/src/http/routes/automation-workflow.ts`.
- [x] Nenhuma outra parte do modelo canônico endereçada. Evidência: nenhuma alteração em `automation-invocation.ts`/`automation-trigger.ts`, nenhuma mudança em `automationInvocationStatusEnum`.
- [x] Nenhuma alteração em outros arquivos de schema ou rotas. Evidência: `git status --short` local restrito aos arquivos previstos em `allowed_paths`.
- [x] Teste de integração real estendido, isolado da suíte padrão, não executado. Evidência: `tests/automation-workflow.integration.test.ts`, cenários de criação e atualização estendidos.
- [x] `typecheck`, `test` e `build` continuam passando (135/135 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados, citando as fontes arquiteturais e o que foi adiado. Evidência: seção "Escopo implementado" do README e seções 19/Fase 8 do Plano Mestre.
- [x] Nenhuma credencial, dado real, decisão de multi-organização, tabela nova ou comportamento de execução real. Evidência: diff restrito aos arquivos previstos; nenhuma tabela nova; nenhum worker introduzido.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Pendente do gate de merge do PR de implementação.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente, será executada antes do gate de encerramento.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; risco específico desta fatia: como não existe worker real, `timeoutSeconds` fica sem qualquer efeito prático até que a Fase 8 ganhe um consumidor real de fila — documentado explicitamente para não passar a falsa impressão de que timeouts já são aplicados; a divergência maior identificada (12 estados canônicos vs. 5 implementados) permanece sem correção, deliberadamente, e deve ser retomada apenas mediante nova decisão explícita do CEO, dado que toca comportamento de execução já testado (Tasks 078/079).

Gate vigente: aguardando autorização do CEO para o merge do PR de implementação.

Histórico de gates desta task: encerramento da Task 088 → CEO pergunta recomendação sobre `profile`↔`ai_agent` e biblioteca única → recomendo não construir nenhuma das duas agora → CEO concorda (`Concordo, vamos seguir`) → releio a arquitetura de execução supervisionada contra o estado atual da Fase 8 → apresento a divergência encontrada → CEO pergunta recomendação sobre o quanto endereçar → recomendo a divisão conservadora (só `timeoutSeconds` agora) → CEO responde `Vamos seguir a sua recomendação` → proponho o escopo técnico concreto desta task → `Autorizado`.

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
