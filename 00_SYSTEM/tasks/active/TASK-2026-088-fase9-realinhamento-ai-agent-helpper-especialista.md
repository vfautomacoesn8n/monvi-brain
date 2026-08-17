---
id: task-2026-088
type: task
title: "Fase 9 — realinhamento de ai_agent ao contrato canônico de Helpper especialista (Tasks 028/030/031)"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-17"
updated_at: "2026-08-17"
reviewed_at: "2026-08-17"
review_cycle: on-change
sources:
  - 00_SYSTEM/architecture/Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md
  - 00_SYSTEM/architecture/Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md
  - 00_SYSTEM/architecture/Modelo-ciclo-de-vida-e-estados-de-agentes-Monvi.md
  - 00_SYSTEM/architecture/Contrato-contexto-delegacao-reporte-Helpper.md
  - 00_SYSTEM/architecture/Modelo-biblioteca-skills-ferramentas-e-promocao-conhecimento.md
  - 00_SYSTEM/architecture/Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md
  - 00_SYSTEM/architecture/Matriz-fronteiras-responsabilidades-ecossistema-Monvi.md
  - 00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md
  - 00_SYSTEM/policies/Politica-memoria-e-promocao-de-conhecimento-Helpper.md
  - 00_SYSTEM/policies/Politica-ambientes-promocao-piloto-producao-agentes.md
  - 00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md
  - 00_SYSTEM/policies/Politica-logs-evidencias-custos-e-monitoramento-agentes.md
  - 00_SYSTEM/registries/Matriz-rastreabilidade-tasks-028-031-Monvi.md
  - apps/core-brain/src/db/schema/profile.ts
  - 00_SYSTEM/tasks/done/TASK-2026-081-fase9-catalogo-agentes.md
  - 00_SYSTEM/tasks/done/TASK-2026-082-fase9-politicas-limites.md
  - 00_SYSTEM/tasks/done/TASK-2026-083-fase9-sinalizacao-aprovacao-humana.md
related:
  - 00_SYSTEM/tasks/done/TASK-2026-081-fase9-catalogo-agentes.md
  - 00_SYSTEM/tasks/done/TASK-2026-082-fase9-politicas-limites.md
  - 00_SYSTEM/tasks/done/TASK-2026-083-fase9-sinalizacao-aprovacao-humana.md
aliases:
  - Realinhamento de ai_agent
  - Contrato canônico de Helpper especialista
  - Agente = Helpper especialista
tags: [core-brain, fase-9, api, agentes-ia, helpper-especialista, realinhamento-arquitetural, schema, migracao, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-088-fase9-realinhamento-ai-agent-helpper-especialista.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/db/schema/ai-agent.ts
  - apps/core-brain/src/http/routes/ai-agent.ts
  - apps/core-brain/tests/ai-agent.integration.test.ts
  - apps/core-brain/drizzle/0025_cynical_mother_askani.sql
  - apps/core-brain/drizzle/meta/0025_snapshot.json
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
  - apps/core-brain/src/db/schema/automation-workflow.ts
  - apps/core-brain/src/db/schema/automation-trigger.ts
  - apps/core-brain/src/db/schema/automation-invocation.ts
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
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/routes/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-dashboard.ts
  - apps/core-brain/src/http/routes/integration.ts
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
  - apps/core-brain/drizzle/0021_perfect_miek.sql
  - apps/core-brain/drizzle/0022_brainy_grim_reaper.sql
  - apps/core-brain/drizzle/0023_flat_xavin.sql
  - apps/core-brain/drizzle/0024_complete_hitman.sql
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
  - Pesquisa documental executada e evidenciada ao CEO antes de qualquer proposta de escopo, cobrindo as arquiteturas e políticas das Tasks 028/030/031 relacionadas a Helpper especialista/agentes.
  - Campos novos adicionados a ai_agent mapeando o contrato mínimo canônico do Helpper especialista (especialidade, missão, escopo, skills, ferramentas, fontes, repositórios, limites, risco, revisor, critérios de escalonamento, formato de reporte) — specialty, scope, skills, repositories, forbiddenActions, riskLevel, reviewerPersonId, escalationCriteria, reportFormat; campos existentes (purpose, allowedTools, authorizedSourceIds, ownerPersonId) mantidos com mapeamento documentado.
  - status realinhado ao ciclo de vida canônico de Modelo-ciclo-de-vida-e-estados-de-agentes-Monvi.md: draft/configured/validated/simulated/pilot/active/suspended/retired/archived (principais) e blocked/quarantined/incident/deprecated (excepcionais), substituindo o enum anterior de 4 estados; paused substituído por suspended.
  - Migração gerada via npm run db:generate (sem aplicar contra banco real), correspondendo exatamente ao schema desenhado.
  - Rotas POST/PATCH /ai-agents estendidas para aceitar os campos novos via Zod, sem rota nova.
  - Nenhum enforcement da matriz de transição de estados, nenhum campo de controle de custo, nenhum campo de métricas/monitoramento — explicitamente fora desta fatia, documentado como dependente de execução real ou de um modelo de papéis de aprovação ainda inexistente no RBAC.
  - Nenhuma alteração em apps/core-brain/src/db/schema/ além de ai-agent.ts; nenhuma alteração em outras rotas.
  - Teste de integração real estendido cobrindo os campos novos e a passagem por múltiplos estados do ciclo de vida canônico, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo o realinhamento, incluindo a citação explícita das fontes arquiteturais consultadas.
  - Nenhuma credencial, dado real, decisão de multi-organização, nova tabela ou execução real de agente.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente o realinhamento de representacao/administracao de ai_agent ao contrato canonico de Helpper especialista ja aprovado nas Tasks 028/030/031 — campos novos, realinhamento do enum de status a 13 estados, migracao gerada (nao aplicada) e o teste correspondente, sob suposicao explicita de single-tenant. Nao autoriza enforcement da matriz de transicao de estados (exigiria modelar papeis de aprovacao inexistentes no RBAC); nao autoriza campos de controle de custo (entregavel proprio ja reservado); nao autoriza campos de metricas/monitoramento (dependem de execucao real inexistente); nao autoriza qualquer execucao real de agente, chamada real a ferramenta, ou verificacao de fontes/repositorios; nao autoriza criacao de entidade formal 'repository' ou 'skill' na biblioteca (Modelo-biblioteca-skills-ferramentas-e-promocao-conhecimento.md permanece nao implementado); nao autoriza retomada de qualquer outra decisao pendente (Parte B, integracao com n8n, proximo passo do GitHub); nao autoriza qualquer credencial, dado real ou dependencia de software nova."
---

# Task 088 — Fase 9, realinhamento de `ai_agent` ao contrato canônico de Helpper especialista

## Contexto

Após o encerramento da Task 087, o CEO pediu para retomar a Fase 9. Antes de propor qualquer escopo técnico, pedi para esclarecer o tipo de retomada, já que os entregáveis restantes da fase dependem de uma decisão de peso (execução real de agente, com custo de API). O CEO respondeu com uma orientação conceitual detalhada: "Agentes" não deve ser tratado como tela de personas configuráveis; deve distinguir Persona (forma de comunicação), Agente (unidade especializada de atuação) e Helpper (agente central orquestrador); autonomia/execução em segundo plano não deve ser assumida como requisito agora; e — crucialmente — pediu para eu pesquisar primeiro no repositório se já havia algo documentado sobre isso, mostrando evidência antes de definir escopo.

A pesquisa (relatada ao CEO em duas rodadas, com leitura completa de 14 documentos arquiteturais e de política) confirmou que existe uma arquitetura já aprovada pelo CEO em 2026-07-22 (Tasks 028, 030, 031) que define exatamente essa hierarquia — Helpper individual → **Helpper especialista** → Helpper Core — com um contrato mínimo detalhado para o Helpper especialista e um ciclo de vida de 13 estados, nenhum dos quais foi consultado quando construí `ai_agent` nas Tasks 081-083. Isso significa que `ai_agent`, como existe hoje, é uma reinvenção divergente da arquitetura já aprovada — falha minha, não ambiguidade do projeto. O CEO confirmou (`Sim`) o realinhamento como próximo passo, e autorizou o escopo técnico concreto que propus a partir dessa pesquisa.

## Objetivo

Realinhar `ai_agent` — em campos e em ciclo de vida — ao contrato canônico do Helpper especialista já aprovado, mantendo "Agente" como nome de produto (conforme uso do CEO), sem introduzir nenhuma execução real ou funcionalidade não documentada.

## Escopo executado

1. `apps/core-brain/src/db/schema/ai-agent.ts`: campos novos `specialty` (especialidade), `scope` (escopo, distinto de especialidade), `skills` (jsonb, lista de strings, distinta de `allowedTools`), `repositories` (jsonb, lista de strings, sem FK — mesmo padrão de `authorizedSourceIds`), `forbiddenActions` (texto — ações proibidas explícitas), `riskLevel` (enum `ai_agent_risk_level`: `low`/`medium`/`high`/`critical`), `reviewerPersonId` (FK opcional para `person`, `onDelete: 'set null'` — revisor, distinto de `ownerPersonId`), `escalationCriteria` (texto), `reportFormat` (texto). Campos existentes mantidos com mapeamento: `purpose` (=missão), `allowedTools` (=ferramentas), `authorizedSourceIds` (=fontes), `ownerPersonId` (=responsável).
2. `aiAgentStatusEnum` realinhado: de `draft`/`active`/`paused`/`archived` (4 estados) para os 13 estados canônicos de `Modelo-ciclo-de-vida-e-estados-de-agentes-Monvi.md` — `draft`/`configured`/`validated`/`simulated`/`pilot`/`active`/`suspended`/`retired`/`archived` (principais) e `blocked`/`quarantined`/`incident`/`deprecated` (excepcionais).
3. Migração gerada via `npm run db:generate`: `apps/core-brain/drizzle/0025_cynical_mother_askani.sql` — recria o tipo enum de status (`DROP TYPE`/`CREATE TYPE` via coluna intermediária `text`, abordagem padrão do `drizzle-kit` para remoção de valores de enum) e adiciona as colunas novas — conferida linha a linha contra o schema desenhado, não aplicada contra nenhum banco.
4. `apps/core-brain/src/http/routes/ai-agent.ts`: `createAiAgentSchema`/`updateAiAgentSchema` (Zod) estendidos com todos os campos novos. Nenhuma rota nova.
5. `apps/core-brain/tests/ai-agent.integration.test.ts`: cenário de criação estendido para exercitar todos os campos novos; cenário de atualização estendido para percorrer `draft → configured → validated → simulated → pilot`, confirmando que os 13 estados do enum realinhado são aceitos (sem enforcement de matriz de transição nesta fatia).
6. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados citando explicitamente as fontes arquiteturais consultadas e o mapeamento de campos.

Deliberadamente fora desta fatia: enforcement da matriz de transição de estados (exigiria modelar papéis de aprovação — owner/reviewer/executivo — inexistentes no RBAC atual); campos de controle de custo (entregável próprio já reservado na Fase 9); campos de métricas/indicadores de monitoramento (`Politica-logs-evidencias-custos-e-monitoramento-agentes.md` — dependem de execução real, que não existe); criação de entidade formal `repository`/`skill` na biblioteca (`Modelo-biblioteca-skills-ferramentas-e-promocao-conhecimento.md` permanece não implementado — `repositories`/`skills` seguem como listas de texto livre, sem integridade referencial, mesmo padrão já usado para `authorizedSourceIds`).

Validado localmente: `npm run typecheck` sem erros; `npm test` com 135/135 testes passando em 33 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e seis arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las (o CEO sinalizou que vai tentar numa máquina com Docker disponível).

## Critérios de aceite

- [ ] Pesquisa documental executada e evidenciada ao CEO antes da proposta de escopo. Evidência: mensagens da conversa citando `Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md`, `Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md`, `Modelo-ciclo-de-vida-e-estados-de-agentes-Monvi.md` e demais fontes, com tabela comparativa contrato-vs-implementação.
- [ ] Campos novos mapeando o contrato mínimo canônico. Evidência: `apps/core-brain/src/db/schema/ai-agent.ts`.
- [ ] `status` realinhado a 13 estados canônicos. Evidência: `aiAgentStatusEnum` em `ai-agent.ts`; teste de integração percorre 5 estados diferentes.
- [ ] Migração gerada (não aplicada) correspondendo ao schema desenhado. Evidência: `apps/core-brain/drizzle/0025_cynical_mother_askani.sql`, conferida manualmente.
- [ ] Rotas estendidas sem rota nova. Evidência: `apps/core-brain/src/http/routes/ai-agent.ts`.
- [ ] Nenhum enforcement de transição, custo ou monitoramento. Evidência: nenhuma validação de transição no handler `PATCH`; nenhum campo de custo/métrica no schema.
- [ ] Nenhuma alteração em outros arquivos de schema ou rotas. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [ ] Teste de integração real estendido, isolado da suíte padrão, não executado. Evidência: `tests/ai-agent.integration.test.ts`, cenários estendidos presentes na suíte de integração.
- [ ] `typecheck`, `test` e `build` continuam passando (135/135 testes). Evidência: execução local antes do commit.
- [ ] `README.md` e Plano Mestre atualizados, citando as fontes arquiteturais. Evidência: seção "Escopo implementado" do README e seção 19 do Plano Mestre.
- [ ] Nenhuma credencial, dado real, decisão de multi-organização, tabela nova ou execução real. Evidência: diff restrito aos arquivos previstos; nenhuma tabela nova; nenhuma chamada a serviço externo.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito para o merge do PR de implementação; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" a ser adicionada no encerramento, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; risco específico desta fatia — a migração recria o tipo enum de status via `DROP TYPE`/`CREATE TYPE` (necessário porque `paused` foi removido, e Postgres não permite remover valores de enum diretamente); isso seria uma operação de risco real contra um banco com dados existentes, mas como nenhum banco real existe neste projeto (Parte B nunca aplicada), o risco é puramente teórico agora — documentado para quando a Parte B for tratada; `status` continua sem enforcement de transição, então nada impede pular de `draft` direto para `archived` — mesma limitação já presente em todo campo de status do sistema, não uma regressão introduzida aqui.

Gate vigente: aguardando revisão e autorização do CEO para abrir o PR de implementação.

Histórico de gates desta task: encerramento da Task 087 → CEO pede para retomar a Fase 9 (`Vamos começar retinar a Fase 9`) → esclareço direção via pergunta estruturada → CEO responde com orientação conceitual detalhada (Persona/Agente/Helpper, pesquisar antes de propor) → pesquiso e apresento evidência (rodada 1: hierarquia + contrato mínimo + ciclo de vida) → CEO pede para ler mais antes de propor (`Leia antes de propor qualquer escopo`) → pesquiso os documentos restantes e apresento síntese completa → CEO confirma (`Sim`) → proponho o escopo técnico desta task → `Autorizado`.

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
