---
id: task-2026-082
type: task
title: "Fase 9 — segunda fatia: políticas e limites de agentes de IA (metadados declarativos, sem execução real)"
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
  - 00_SYSTEM/tasks/done/TASK-2026-081-fase9-catalogo-agentes.md
  - apps/core-brain/src/db/schema/ai-agent.ts
  - apps/core-brain/src/http/routes/ai-agent.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-081-fase9-catalogo-agentes.md
  - 00_SYSTEM/tasks/done/TASK-2026-079-fase8-aprovacoes-reprocessamento.md
aliases:
  - Fase 9 — políticas e limites de agentes de IA
  - Segunda fatia da Fase 9
  - ai_agent.policy/maxActionsPerRun/timeoutSeconds
tags: [core-brain, fase-9, api, agentes-ia, politicas, limites, schema, migracao, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-082-fase9-politicas-limites.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/db/schema/ai-agent.ts
  - apps/core-brain/src/http/routes/ai-agent.ts
  - apps/core-brain/tests/ai-agent.integration.test.ts
  - apps/core-brain/drizzle/0021_perfect_miek.sql
  - apps/core-brain/drizzle/meta/0021_snapshot.json
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
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/routes/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-dashboard.ts
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/tests/ai-agent.test.ts
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
  - Campos policy (text, opcional), maxActionsPerRun (integer, opcional) e timeoutSeconds (integer, opcional) adicionados a apps/core-brain/src/db/schema/ai-agent.ts.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - POST/PATCH /ai-agents aceitam os três campos novos, validados via Zod (inteiros positivos quando informados).
  - Nenhum enforcement real dos três campos — nenhuma rota de execução de agente existe, então não há nada contra o que aplicar essas regras.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de ai-agent.ts; nenhuma alteração em apps/core-brain/src/modules/, apps/core-brain/src/http/middlewares/ ou em rotas além de ai-agent.ts.
  - Teste de integração real estendido cobrindo criação e atualização de um agente com os três campos novos, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a segunda fatia da Fase 9.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade nova criada; nenhum campo de controle de custo adicionado (entregável próprio, fora desta fatia).
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente politicas e limites operacionais basicos de ai_agent (Fase 9) — os campos policy/maxActionsPerRun/timeoutSeconds, sua migracao gerada (nao aplicada) e o teste correspondente, sob suposicao explicita de single-tenant, puramente declarativo sem nenhum enforcement real. Nao autoriza controle de custo (entregavel proprio da Fase 9, fora desta fatia), aprovacoes humanas, avaliacoes, metricas de qualidade, fallback, protecao contra prompt injection, execucao real de qualquer agente ou ferramenta, integracao com n8n e APIs da Fase 8 (deixada deliberadamente pendente), o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes, extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 082 — Fase 9, segunda fatia: políticas e limites de agentes de IA

## Contexto

Após o encerramento da Task 081 (catálogo de agentes de IA), o CEO confirmou avançar para a próxima fatia. Propus combinar "políticas" e "limites" — quinto e sexto entregáveis da Fase 9 — numa única extensão de `ai_agent`, sem tabela nova. Como `ai_agent` ainda não tem nenhuma capacidade de execução real (não existe endpoint de invocação de agente), esses campos são necessariamente metadados declarativos por enquanto — não há nada em tempo real contra o que aplicá-los. Deliberadamente deixei "controle de custo" fora desta fatia, por ser um entregável próprio mais adiante na fase, mais naturalmente ligado a métricas de uso reais que também ainda não existem. O CEO autorizou.

## Objetivo

Registrar regras de comportamento (`policy`) e limites operacionais básicos (`maxActionsPerRun`, `timeoutSeconds`) para cada agente de IA, preparando o terreno para quando aprovações humanas e execução real existirem.

## Escopo executado

1. `apps/core-brain/src/db/schema/ai-agent.ts`: campos `policy` (text, opcional — regras de comportamento em texto livre), `max_actions_per_run` (integer, opcional) e `timeout_seconds` (integer, opcional) adicionados.
2. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0021_perfect_miek.sql`, conferida linha a linha contra o schema desenhado — não aplicada contra nenhum banco.
3. `apps/core-brain/src/http/routes/ai-agent.ts`: `createAiAgentSchema`/`updateAiAgentSchema` (Zod) ganham `policy` (string opcional), `maxActionsPerRun`/`timeoutSeconds` (inteiros positivos opcionais). Nenhuma rota nova — `POST`/`PATCH /ai-agents` já existentes simplesmente aceitam os campos novos.
4. `apps/core-brain/tests/ai-agent.integration.test.ts`: o cenário existente de ciclo completo estendido para criar um agente com `policy`/`maxActionsPerRun`/`timeoutSeconds` preenchidos e atualizar `maxActionsPerRun` via `PATCH`, confirmando os valores persistidos.
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a segunda fatia da Fase 9.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 123/123 testes passando em 30 arquivos (contagem inalterada — nenhuma rota nova); `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e cinco arquivos de integração (contagem inalterada — nenhum arquivo novo), confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [ ] `policy`/`maxActionsPerRun`/`timeoutSeconds` adicionados a `ai_agent`. Evidência: `apps/core-brain/src/db/schema/ai-agent.ts`.
- [ ] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0021_perfect_miek.sql`, conferida manualmente.
- [ ] `POST`/`PATCH /ai-agents` aceitam os três campos novos, validados. Evidência: `apps/core-brain/src/http/routes/ai-agent.ts`; teste de integração cobre criação e atualização.
- [ ] Nenhum enforcement real. Evidência: nenhuma rota de execução de agente existe no sistema; os campos são apenas persistidos e lidos.
- [ ] Nenhuma alteração em outros arquivos de schema, `src/modules/`, `src/http/middlewares/` ou rotas além de `ai-agent.ts`. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [ ] Teste de integração real estendido, isolado da suíte padrão, não executado. Evidência: `tests/ai-agent.integration.test.ts`, cenário estendido presente na suíte de integração.
- [ ] `typecheck`, `test` e `build` continuam passando (123/123 testes). Evidência: execução local antes do commit.
- [ ] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado"/prosa descritiva do README e seção 19 do Plano Mestre.
- [ ] Nenhuma credencial, dado real, dependência de software nova, entidade nova ou campo de controle de custo. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade nova; nenhum campo relacionado a custo/orçamento adicionado.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito para o merge do PR de implementação; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" a ser adicionada no encerramento, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; `policy` é texto livre sem nenhuma estrutura ou validação semântica — nada garante que descreve regras aplicáveis ou coerentes, aceitável enquanto for só metadado; `maxActionsPerRun`/`timeoutSeconds` não têm teto máximo configurado (um valor absurdamente alto passaria na validação), também aceitável na ausência de qualquer execução real que dependa deles.

Gate vigente: aguardando revisão e autorização do CEO para abrir o PR de implementação.

Histórico de gates desta task: encerramento da Task 081 → CEO confirma avançar (`Sim`) → proponho o escopo desta task (políticas e limites combinados, extensão de `ai_agent`, sem controle de custo) → `Autorizado`.

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
