---
id: task-2026-093
type: task
title: "Fase 10 — segunda capacidade de escrita real no GitHub (criar issue)"
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
  - 00_SYSTEM/tasks/done/TASK-2026-092-fase10-escrita-github-comentario.md
  - apps/core-brain/src/modules/integrations/github.service.ts
  - apps/core-brain/src/http/routes/integration.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-085-fase10-integracao-saida-github.md
  - 00_SYSTEM/tasks/done/TASK-2026-092-fase10-escrita-github-comentario.md
aliases:
  - Criar issue no GitHub
  - Segunda capacidade de escrita no GitHub
tags: [core-brain, fase-10, api, integracoes, github, escrita, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-093-fase10-escrita-github-criar-issue.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/modules/integrations/github.service.ts
  - apps/core-brain/src/http/routes/integration.ts
  - apps/core-brain/tests/integration.test.ts
  - apps/core-brain/tests/integration.integration.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/registries/
  - 00_SYSTEM/tasks/done/
  - apps/core-brain/src/db/schema/
  - apps/core-brain/src/modules/audit/
  - apps/core-brain/src/modules/auth/
  - apps/core-brain/src/modules/documents/
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
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/tests/document.test.ts
  - apps/core-brain/tests/document.integration.test.ts
  - apps/core-brain/tests/file-storage.service.test.ts
  - apps/core-brain/tests/
  - apps/core-brain/drizzle/
  - apps/core-brain/vitest.config.ts
  - apps/core-brain/vitest.integration.config.ts
  - apps/core-brain/drizzle.config.ts
  - apps/core-brain/package.json
  - apps/core-brain/package-lock.json
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
  - Escopo restrito a criar issue com title/body — sem labels, assignees ou milestone.
  - github.service.ts estendido com createGithubIssue, reaproveitando POST /repos/{owner}/{repo}/issues do GitHub.
  - Nova rota POST /integrations/:id/github/issues?owner=<owner>&repo=<repo>, corpo { title: string, body?: string }, gated por integration:write.
  - Mesmo padrão de erros/auditoria/credencial já estabelecido nas Tasks 085/092 (400 provedor errado, 424 sem GITHUB_PAT, 502 erro do GitHub, audit_event sem o token).
  - Nenhuma mudança de schema, nenhuma migração, nenhuma dependência nova.
  - Testes reais cobrindo 401 (sem autenticação), 400 (provedor não-github) e 424 (GITHUB_PAT ausente) — sem chamar o GitHub real, mesmo padrão das Tasks 085/092.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados, documentando a nova rota e o que segue deliberadamente fora de escopo (labels, assignees, milestone).
  - Nenhuma credencial nova, nenhum dado real, nenhuma decisão de multi-organização.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a capacidade de criar uma issue no GitHub com title/body, via uma unica rota nova, reaproveitando o padrao de erros/auditoria/credencial ja estabelecido nas Tasks 085/092, sem nenhuma mudanca de schema, migracao ou dependencia nova. Nao autoriza labels, assignees, milestone, editar/apagar issue, fechar issue, ou qualquer outra acao de escrita alem de comentar (Task 092) e criar issue. Nao autoriza a atualizacao real do GITHUB_PAT (acao do CEO, fora do escopo tecnico). Nao autoriza conectar um segundo provedor de integracao, nem qualquer webhook de entrada. Nao autoriza retomada de qualquer outra decisao pendente (Parte B, integracao com n8n, execucao real de agentes da Fase 9, embeddings da Fase 7, OCR)."
---

# Task 093 — Fase 10, segunda capacidade de escrita real no GitHub (criar issue)

## Contexto

Após o encerramento da Task 092 (comentar em issue/PR, primeira capacidade de escrita real do projeto), o CEO perguntou "Helpper, o que você sugere que façamos agora?". Recomendei criar issue como próximo passo zero-custo natural — mesma API/escopo de PAT que comentar já exige — mas sinalizei explicitamente que, com isso, a lista de fatias "zero-custo e autossuficientes" ficaria praticamente esgotada, e perguntei se o CEO preferia fechar esse último item ou parar para decidir uma das questões maiores (orçamento de IA, segunda integração, deploy). O CEO respondeu "Vamos seguir com a sua recomendação", optando por fechar criar issue primeiro.

Propus o escopo técnico restrito a `title`/`body` (sem labels, assignees ou milestone, que exigiriam validar valores já existentes no repositório real — risco/complexidade maior que o valor desta fatia). O CEO respondeu "Autorizado".

## Objetivo

Adicionar a segunda capacidade de escrita real do projeto — criar uma issue no GitHub — reaproveitando integralmente o padrão de erros, auditoria e credencial já estabelecido nas Tasks 085/092, sem introduzir nenhuma mudança de schema, migração ou dependência nova.

## Escopo executado

1. `apps/core-brain/src/modules/integrations/github.service.ts`: nova interface `GithubIssue`; nova função `createGithubIssue(owner, repo, title, body, token)`, reaproveitando o helper `githubPost` já criado na Task 092, chamando `POST /repos/{owner}/{repo}/issues`.
2. `apps/core-brain/src/http/routes/integration.ts`: nova rota `POST /integrations/:id/github/issues?owner=<owner>&repo=<repo>` (corpo `{ title: string, body?: string }`, Zod validado), gated por `integration:write`; réplica exata da estrutura de tratamento de erro das rotas anteriores (`400` provedor errado, `404` integração não encontrada, `424` credencial ausente, `502` erro do GitHub), com `audit_event` (`integration:github_call`) em toda chamada, sucesso ou falha, sem o token.
3. `apps/core-brain/tests/integration.test.ts`: teste 401 (sem autenticação) para a rota nova.
4. `apps/core-brain/tests/integration.integration.test.ts`: teste 424 (credencial ausente) e teste 400 (integração de provedor não-`github`) para a rota nova — sem chamar o GitHub real.
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados documentando a nova rota e o que segue deliberadamente fora de escopo.

Deliberadamente fora desta fatia: labels, assignees, milestone (exigiriam validar valores existentes no repositório real); editar/fechar issue; qualquer outra ação de escrita além de comentar (Task 092) e criar issue.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 144/144 testes passando em 33 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e seis arquivos de integração, confirmando que a configuração está correta e que nenhuma chamada real ao GitHub foi feita.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações (nenhuma nova nesta task) e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Escopo restrito a criar issue com title/body. Evidência: única rota nova é `POST .../github/issues`; nenhum campo de labels/assignees/milestone no schema Zod.
- [x] `github.service.ts` estendido com `createGithubIssue`. Evidência: arquivo, reaproveitando `githubPost` e `POST /repos/{owner}/{repo}/issues`.
- [x] Nova rota gated por `integration:write`. Evidência: `integration.ts`.
- [x] Mesmo padrão de erros/auditoria/credencial das Tasks 085/092. Evidência: blocos `400`/`424`/`502`, `recordAuditEvent` idênticos em estrutura.
- [x] Nenhuma mudança de schema/migração/dependência nova. Evidência: nenhum arquivo em `src/db/schema/`, `drizzle/`, ou `package.json` no diff.
- [x] Testes reais cobrindo 401/400/424, sem chamar o GitHub real. Evidência: `integration.test.ts` (401) e `integration.integration.test.ts` (400, 424).
- [x] `typecheck`, `test` e `build` continuam passando (144/144 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado" do README e Fase 10/Parte B/Próximo gate do Plano Mestre.
- [x] Nenhuma credencial nova, dado real, ou decisão de multi-organização. Evidência: diff restrito aos arquivos previstos; `GITHUB_PAT` continua sendo a mesma variável de ambiente já existente.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Pendente do gate de merge do PR de implementação.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente, será executada antes do gate de encerramento.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; risco específico desta fatia — mesmo raciocínio já documentado na Task 092: uma vez que o CEO atualizar o `GITHUB_PAT` com escopo de escrita, qualquer chamada bem-sucedida a esta rota cria uma issue real e visível publicamente (se o repositório for público) — mitigado pela rota exigir autenticação e RBAC (`integration:write`), mesmo padrão de controle de acesso já usado em todo o sistema; nenhuma automação ou agente chama esta rota automaticamente hoje.

Gate vigente: aguardando autorização do CEO para o merge do PR de implementação.

Histórico de gates desta task: encerramento da Task 092 → CEO pergunta "Helpper, o que você sugere que façamos agora?" → recomendo criar issue como último item zero-custo, sinalizando que a lista está quase esgotada → CEO pergunta se prefere fechar isso ou parar para decidir algo maior → CEO responde "Vamos seguir com a sua recomendação" → proponho o escopo técnico restrito a title/body → `Autorizado`.

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
