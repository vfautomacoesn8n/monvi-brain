---
id: task-2026-092
type: task
title: "Fase 10 — primeira capacidade de escrita real no GitHub (comentar em issue/PR)"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-18"
updated_at: "2026-08-18"
reviewed_at: "2026-08-18T14:37:22-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/tasks/done/TASK-2026-085-fase10-integracao-saida-github.md
  - apps/core-brain/src/modules/integrations/github.service.ts
  - apps/core-brain/src/http/routes/integration.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-084-fase10-catalogo-integracoes.md
  - 00_SYSTEM/tasks/done/TASK-2026-085-fase10-integracao-saida-github.md
aliases:
  - Comentário real em issue/PR do GitHub
  - Escrita no GitHub
tags: [core-brain, fase-10, api, integracoes, github, escrita, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-092-fase10-escrita-github-comentario.md
  - 00_SYSTEM/tasks/done/TASK-2026-092-fase10-escrita-github-comentario.md
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
  - Escopo restrito a comentar em issue/PR existente — a única capacidade de escrita real real desta task; criar issue, editar/apagar comentário, labels, assignees, fechar issue, merge de PR explicitamente fora.
  - github.service.ts estendido com um helper de POST (githubPost) e createGithubIssueComment, reaproveitando POST /repos/{owner}/{repo}/issues/{issue_number}/comments do GitHub (cobre issues e PRs, já que PRs compartilham numeração de issues para comentários).
  - Nova rota POST /integrations/:id/github/issues/:issueNumber/comments?owner=<owner>&repo=<repo>, corpo { body: string }, gated por integration:write.
  - Mesmo padrão de erros da rota de leitura (Task 085): 400 se a integração não for provider github, 424 se GITHUB_PAT ausente, 502 se o GitHub retornar erro; toda chamada gera audit_event, sem o token.
  - Nenhuma mudança de schema, nenhuma migração, nenhuma dependência nova (fetch nativo, mesmo padrão da Task 085).
  - Testes reais cobrindo 401 (sem autenticação), 400 (provedor não-github) e 424 (GITHUB_PAT ausente) — sem chamar o GitHub real, mesmo padrão da Task 085 (a suíte de testes nunca teve GITHUB_PAT configurado).
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados, documentando a nova rota, o novo requisito de escopo do GITHUB_PAT ("Issues: Read and write", além do "Contents: Read-only" já existente), e o que segue deliberadamente fora de escopo.
  - Nenhuma credencial nova, nenhum dado real, nenhuma decisão de multi-organização.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a capacidade de comentar em uma issue ou Pull Request existente do GitHub, via uma unica rota nova, reaproveitando o padrao de erros/auditoria ja estabelecido na Task 085, sem nenhuma mudanca de schema, migracao ou dependencia nova. Nao autoriza criar issue, editar ou apagar comentario, aplicar labels, definir assignees, fechar issue ou fazer merge de PR — todas acoes de risco maior, deliberadamente fora. Nao autoriza a atualizacao real do GITHUB_PAT (isso e uma acao do CEO fora do escopo tecnico desta task, nao bloqueante para a implementacao). Nao autoriza conectar um segundo provedor de integracao, nem qualquer webhook de entrada. Nao autoriza retomada de qualquer outra decisao pendente (Parte B, integracao com n8n, execucao real de agentes da Fase 9, embeddings da Fase 7)."
---

# Task 092 — Fase 10, primeira capacidade de escrita real no GitHub

## Contexto

Após o encerramento da Task 091 (extração real de Word, concluindo os três formatos de documento mais comuns da Fase 7), o CEO perguntou "O que você sugere?". Recomendei avançar para a Fase 10 — capacidade de escrita no GitHub (comentar em PR, criar issue) — como próximo passo natural da Task 085 (que só implementou leitura), sinalizando explicitamente que essa fatia, diferente das últimas três, depende de uma ação externa do CEO (gerar um Personal Access Token com escopo mais amplo). Apresentei como alternativa o restante do modelo canônico de execução supervisionada da Fase 8, sem valor de uso imediato. O CEO respondeu "Vamos seguir então", escolhendo a via do GitHub.

Antes de propor o escopo técnico, investiguei a API do GitHub e confirmei que comentários em Pull Requests usam exatamente a mesma API de comentários de issues (`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`), já que PRs compartilham a numeração de issues no GitHub — uma única capacidade cobre os dois casos mencionados como exemplo pelo CEO. Propus escopo restrito a comentar (criar issue fica para uma fatia futura, mesma disciplina de fatias estreitas já usada nas Tasks 090/091), e sinalizei que o `GITHUB_PAT` atual (escopo "Contents: Read-only", Task 085) precisaria ganhar "Issues: Read and write" para a capacidade funcionar de fato — ação não bloqueante, já que a suíte de testes nunca chama o GitHub real (mesmo padrão da Task 085). O CEO respondeu "Autorizado".

## Objetivo

Adicionar a primeira capacidade de escrita real a um serviço externo do projeto — comentar em uma issue ou Pull Request existente do GitHub — reaproveitando integralmente o padrão de erros, auditoria e credencial já estabelecido na Task 085, sem introduzir nenhuma mudança de schema, migração ou dependência nova.

## Escopo executado

1. `apps/core-brain/src/modules/integrations/github.service.ts`: fatorado `githubHeaders()` (cabeçalhos comuns a GET e POST); novo helper `githubPost(path, token, body)` (mesmo padrão de retry único em falha de rede transitória do `githubFetch` existente); nova função `createGithubIssueComment(owner, repo, issueNumber, body, token)`, chamando `POST /repos/{owner}/{repo}/issues/{issue_number}/comments`.
2. `apps/core-brain/src/http/routes/integration.ts`: nova rota `POST /integrations/:id/github/issues/:issueNumber/comments?owner=<owner>&repo=<repo>` (corpo `{ body: string }`, Zod validado), gated por `integration:write`; réplica exata da estrutura de tratamento de erro da rota de leitura (`400` provedor errado, `404` integração não encontrada, `424` credencial ausente, `502` erro do GitHub), com `audit_event` (`integration:github_call`) em toda chamada, sucesso ou falha, sem o token.
3. `apps/core-brain/tests/integration.test.ts`: teste 401 (sem autenticação) para a rota nova.
4. `apps/core-brain/tests/integration.integration.test.ts`: teste 424 (credencial ausente) e teste 400 (integração de provedor não-`github`) para a rota nova — sem chamar o GitHub real, mesmo padrão já usado no teste 424 da rota de leitura (Task 085).
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados documentando a nova rota, o requisito de escopo ampliado do `GITHUB_PAT`, e o que segue deliberadamente fora de escopo.

Deliberadamente fora desta fatia: criar issue (`POST /repos/{owner}/{repo}/issues`, próxima capacidade de escrita natural, mas API e payload distintos, fatia própria futura); editar/apagar comentário; labels; assignees; fechar issue; merge de PR — todas ações de risco crescente, não endereçadas aqui.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 143/143 testes passando em 33 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e seis arquivos de integração, confirmando que a configuração está correta e que nenhuma chamada real ao GitHub foi feita.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações (nenhuma nova nesta task) e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Escopo restrito a comentar. Evidência: única rota nova é `POST .../issues/:issueNumber/comments`; nenhuma outra ação de escrita implementada.
- [x] `github.service.ts` estendido com `githubPost`/`createGithubIssueComment`. Evidência: arquivo, reaproveitando `POST /repos/{owner}/{repo}/issues/{issue_number}/comments`.
- [x] Nova rota gated por `integration:write`. Evidência: `integration.ts`.
- [x] Mesmo padrão de erros/auditoria da Task 085. Evidência: blocos `400`/`424`/`502`, `recordAuditEvent` idênticos em estrutura à rota de leitura.
- [x] Nenhuma mudança de schema/migração/dependência nova. Evidência: nenhum arquivo em `src/db/schema/`, `drizzle/`, ou `package.json` no diff.
- [x] Testes reais cobrindo 401/400/424, sem chamar o GitHub real. Evidência: `integration.test.ts` (401) e `integration.integration.test.ts` (400, 424).
- [x] `typecheck`, `test` e `build` continuam passando (143/143 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados, incluindo o requisito de escopo do `GITHUB_PAT`. Evidência: seção "Escopo implementado" do README e Fase 10/Parte B/Próximo gate do Plano Mestre.
- [x] Nenhuma credencial nova, dado real, ou decisão de multi-organização. Evidência: diff restrito aos arquivos previstos; `GITHUB_PAT` continua sendo a mesma variável de ambiente já existente.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito `Autorizado` para o merge do PR #111, integrado em `69c65e4aff883603b7fa706266d3bd1925a9bf12`; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; risco específico desta fatia — esta é a **primeira ação de escrita real a um serviço externo em todo o projeto** (todas as chamadas anteriores, Task 085 incluída, eram só leitura). Uma vez que o CEO atualizar o `GITHUB_PAT` com escopo de escrita, qualquer chamada bem-sucedida a esta rota posta um comentário real e visível publicamente (se o repositório for público) em uma issue/PR real — mitigado pela rota exigir autenticação e RBAC (`integration:write`) como qualquer outra rota da API, mesmo padrão de controle de acesso já usado em todo o sistema; nenhuma automação ou agente chama esta rota automaticamente hoje, então o único caminho de invocação é uma chamada HTTP autenticada deliberada. O escopo do `GITHUB_PAT` permanece responsabilidade do CEO — a aplicação nunca armazena nem teria como validar previamente se o escopo do token é suficiente antes de tentar a chamada real (o GitHub retornaria `403`/`404` nesse caso, capturado como `GithubApiError` e traduzido para `502`).

Gate vigente: encerrado. O merge do PR #111 foi autorizado (`Autorizado`) e executado por squash em `69c65e4aff883603b7fa706266d3bd1925a9bf12`. Esta task está formalmente concluída. Criar issue e as demais ações de escrita (editar/apagar comentário, labels, assignees, fechar issue, merge de PR) permanecem fora deste encerramento, deliberadamente adiadas.

Histórico de gates desta task: encerramento da Task 091 → CEO pergunta "O que você sugere?" → recomendo Fase 10 (escrita no GitHub) vs. restante da Fase 8, sinalizando a dependência de ação externa do CEO → CEO responde "Vamos seguir então" → investigo a API do GitHub, confirmo que comentário cobre issue e PR → apresento a proposta restrita a comentar → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #111, integrado em `69c65e4aff883603b7fa706266d3bd1925a9bf12`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-18

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #111.

**Integração**: PR #111 integrado em `main` via squash merge, commit `69c65e4aff883603b7fa706266d3bd1925a9bf12`, em 2026-08-18T17:37:22Z. Escopo integrado: exatamente os 8 arquivos previstos em `allowed_paths` — criação de `00_SYSTEM/tasks/active/TASK-2026-092-fase10-escrita-github-comentario.md`; edição de `src/modules/integrations/github.service.ts`, `src/http/routes/integration.ts`, `tests/integration.test.ts`, `tests/integration.integration.test.ts`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma mudança de schema, nenhuma dependência nova.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `10afe1b..69c65e4`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 143/143 testes passando em 33 arquivos, build sem erros.

**Estado final**: o projeto agora tem sua primeira capacidade de escrita real a um serviço externo — comentar em uma issue ou Pull Request existente do GitHub, via `POST /integrations/:id/github/issues/:issueNumber/comments`. A capacidade está implementada e testada (401/400/424), mas ainda não pode ser usada de fato neste ambiente: o `GITHUB_PAT` configurado só tem escopo "Contents: Read-only" (Task 085); usá-la de verdade exige que o CEO gere um token novo com "Issues: Read and write" — ação dele, fora do escopo técnico desta task. Criar issue, editar/apagar comentário, labels, assignees, fechar issue e merge de PR permanecem deliberadamente fora de escopo, para fatias futuras.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização foi tocado; nenhuma credencial nova foi introduzida (reaproveita `GITHUB_PAT` já existente); nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma mudança de schema ou dependência nova.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: dar ao projeto sua primeira capacidade de escrita real a um serviço externo, restrita a uma única ação de baixo risco (comentar), reaproveitando integralmente o padrão de erros/auditoria/credencial já validado na Task 085.

**Resultado conhecido**: a rota nova está implementada, testada (nos limites do que o ambiente permite — sem `GITHUB_PAT` real, sem chamada de verdade ao GitHub) e documentada, incluindo o requisito de escopo ampliado do token que o CEO precisará atender antes do primeiro uso real.

**O que ajudou**: investigar a API do GitHub antes de propor o escopo revelou que comentários em PR e em issue usam exatamente o mesmo endpoint — isso simplificou a proposta (uma capacidade cobre os dois exemplos que o CEO mencionou) e evitou construir duas rotas ou dois caminhos de código para o mesmo conceito.

**O que dificultou**: nada de técnico. A decisão mais delicada foi de escopo — resistir à tentação de incluir "criar issue" na mesma task, já que tecnicamente seria simples (mesmo padrão de POST). Mantive a linha de "uma ação de escrita por vez", consistente com a disciplina já estabelecida nas Tasks 090/091 para extração de arquivos.

**Surpresas**: nenhuma. O comportamento foi previsível de ponta a ponta, dado que esta task reaproveitou quase integralmente a estrutura da Task 085.

**Riscos materializados**: nenhum. Esta é a primeira capacidade de escrita real do projeto, mas nenhuma chamada real foi feita (nem poderia, sem um `GITHUB_PAT` com escopo de escrita configurado neste ambiente).

**Perguntas em aberto**: qual será a próxima capacidade de escrita — criar issue é a mais natural, mas também caberia perguntar ao CEO se ele prefere conectar um segundo provedor de integração (Google Workspace) antes de aprofundar mais no GitHub.

**Ações propostas**: nenhuma ação de processo nova. Ao propor a próxima capacidade de escrita (aqui ou em outro provedor), reaplicar a mesma disciplina: uma ação por task, escopo de credencial documentado explicitamente, e confirmação de que a suíte de testes não depende de credencial real.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
