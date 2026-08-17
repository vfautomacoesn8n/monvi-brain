---
id: task-2026-085
type: task
title: "Fase 10 — segunda fatia: primeira integração real de saída (GitHub, leitura de repositório)"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-14"
updated_at: "2026-08-17"
reviewed_at: "2026-08-17T11:22:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-084-fase10-catalogo-integracoes.md
  - apps/core-brain/src/db/schema/integration.ts
  - apps/core-brain/src/http/routes/integration.ts
  - apps/core-brain/src/config/environment.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-084-fase10-catalogo-integracoes.md
aliases:
  - Fase 10 — integração real de saída com GitHub
  - Segunda fatia da Fase 10
  - GET /integrations/:id/github/repository
tags: [core-brain, fase-10, api, integracoes-externas, github, credenciais-reais, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-085-fase10-integracao-saida-github.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/config/environment.ts
  - apps/core-brain/src/modules/integrations/github.service.ts
  - apps/core-brain/src/http/routes/integration.ts
  - apps/core-brain/tests/integration.test.ts
  - apps/core-brain/tests/integration.integration.test.ts
  - apps/core-brain/tests/github.service.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
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
  - apps/core-brain/tests/ai-agent.test.ts
  - apps/core-brain/tests/ai-agent.integration.test.ts
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
requires_review: false
acceptance_criteria:
  - GITHUB_PAT adicionado como campo opcional ao schema de configuração tipado (apps/core-brain/src/config/environment.ts), sem valor padrão, sem obrigatoriedade — o servidor sobe normalmente sem ela.
  - Módulo novo apps/core-brain/src/modules/integrations/github.service.ts expõe fetchGithubRepository(owner, repo, token), usando fetch nativo do Node (nenhuma dependência HTTP nova), com GithubCredentialMissingError (token ausente) e GithubApiError (GitHub retornou erro, inclui status e mensagem) como erros tipados.
  - Rota nova GET /integrations/:id/github/repository?owner=<owner>&repo=<repo> (autenticada, requirePermission('integration:read')) valida que a integração referenciada tem provider github (400 caso contrário), chama o serviço e responde 200 com os dados do repositório, 424 se GITHUB_PAT ausente, ou 502 se o GitHub retornar erro.
  - Toda chamada à rota (sucesso, credencial ausente ou erro do GitHub) gera um audit_event (integration:github_call) sem o token em nenhum campo.
  - O token nunca é armazenado em banco, nunca aparece em log, nunca é retornado em nenhuma resposta da API.
  - Nenhuma capacidade de escrita no GitHub; nenhum retry além de uma única tentativa extra em falha de rede transitória; nenhuma idempotência (não aplicável a leitura).
  - Nenhuma alteração em apps/core-brain/src/db/schema/, apps/core-brain/src/modules/audit/, apps/core-brain/src/modules/auth/, apps/core-brain/src/http/middlewares/ ou em rotas além de integration.ts.
  - Teste unitário puro (sem DB, sem rede) cobrindo GithubCredentialMissingError quando o token não é informado ao serviço.
  - Teste de bloqueio de acesso sem token (401) criado para a rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real estendido cobrindo o retorno 424 da rota quando GITHUB_PAT não está configurado, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada; o caminho de sucesso (chamada real ao GitHub) não é coberto por teste automatizado nesta task, por não haver GITHUB_PAT disponível neste ambiente.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a segunda fatia da Fase 10, incluindo a documentação da variável de ambiente GITHUB_PAT e a recomendação de escopo mínimo do token.
  - Nenhuma migração gerada; nenhuma tabela ou coluna nova; nenhuma dependência de software nova; nenhuma decisão sobre modelo de multi-organização tomada ou presumida.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a primeira integracao real de saida do projeto — leitura de repositorio do GitHub via GET /integrations/:id/github/repository, autenticada com GITHUB_PAT lido de variavel de ambiente, sem armazenamento de credencial em banco, sem nenhuma capacidade de escrita no GitHub. Nao autoriza qualquer chamada de escrita ao GitHub (comentar, criar issue, fechar PR), webhook seguro de entrada (GitHub para Monvi — inviavel sem deploy, Fases 11/12), conexao com qualquer outro provedor alem de GitHub, retry sofisticado, idempotencia, monitoramento dedicado alem do audit_event ja existente, revogacao de credencial (a unica forma de revogar e o CEO remover a variavel de ambiente), documentacao de integracao formal alem do README, o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes alem do necessario, retomada da Fase 9 (pausada), integracao com n8n e APIs da Fase 8 (deixada deliberadamente pendente), extracao de arquivos reais ou embeddings da Fase 7 (deixados deliberadamente pendentes), ou qualquer credencial adicional, dado real ou dependencia de software nova."
---

# Task 085 — Fase 10, segunda fatia: primeira integração real de saída (GitHub)

## Contexto

Após o encerramento da Task 084 (catálogo de integrações externas), o CEO perguntou minha recomendação sobre qual integração conectar primeiro. Recomendei GitHub — já faz parte do fluxo diário do projeto (todo o histórico de PRs desta sessão passa por ele via `gh` CLI), e um evento real do GitHub validaria de ponta a ponta o pipeline de automação construído na Fase 8. O CEO decidiu avançar (`Vamos então vamos começar a configuração`). Antes de propor qualquer código, esclareci duas decisões que só ele poderia tomar — a direção da integração (entrada vs. saída) e como a credencial real seria fornecida — via pergunta estruturada. O CEO escolheu: direção de saída (Monvi chamando a API do GitHub, testável agora, sem depender de deploy) e credencial via variável de ambiente (`GITHUB_PAT`, configurada por ele fora desta conversa, nunca colada no chat). Com base nessas respostas, propus o escopo técnico concreto — leitura de repositório, o caso de uso mais seguro para começar — e o CEO autorizou.

## Objetivo

Implementar a primeira chamada real de saída do projeto a um serviço externo — leitura de informações de um repositório do GitHub — com a credencial isolada em variável de ambiente, nunca em banco, e escopo deliberadamente mínimo (só leitura).

## Escopo executado

1. `apps/core-brain/src/config/environment.ts`: campo `GITHUB_PAT` (string, opcional) adicionado ao schema de configuração tipado — sem valor padrão, sem obrigatoriedade; o servidor sobe normalmente sem ela.
2. `apps/core-brain/src/modules/integrations/github.service.ts` (novo arquivo): `fetchGithubRepository(owner, repo, token)` chama `GET https://api.github.com/repos/{owner}/{repo}` via `fetch` nativo do Node (nenhuma dependência HTTP nova), com uma única tentativa extra em falha de rede transitória; `GithubCredentialMissingError` (token ausente) e `GithubApiError` (status + mensagem do GitHub) como erros tipados.
3. `apps/core-brain/src/http/routes/integration.ts`: nova rota `GET /integrations/:id/github/repository?owner=<owner>&repo=<repo>` (autenticada, `integration:read`) — valida que a integração referenciada tem `provider: github` (`400` caso contrário), chama o serviço, responde `200` com os dados do repositório, `424` se `GITHUB_PAT` ausente, `502` se o GitHub retornar erro; `registerIntegrationRoutes` passou a receber `config` como dependência (mesmo padrão já usado em `registerHealthRoutes`), threading `GITHUB_PAT` até o handler.
4. `apps/core-brain/src/app/build-app.ts`: `config` passado na opção de registro de `registerIntegrationRoutes`.
5. `apps/core-brain/tests/integration.test.ts`: teste de bloqueio de acesso sem token (401) para a rota nova.
6. `apps/core-brain/tests/github.service.test.ts` (novo arquivo): teste unitário puro (sem DB, sem rede) cobrindo `GithubCredentialMissingError` quando o token não é informado.
7. `apps/core-brain/tests/integration.integration.test.ts`: cenário novo cobrindo o retorno `424` da rota quando `GITHUB_PAT` não está configurado.
8. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a segunda fatia da Fase 10, incluindo documentação de `GITHUB_PAT` (recomendação de escopo mínimo do token: fine-grained, "Contents: Read-only", restrito ao repositório necessário).

Toda chamada à rota — sucesso, credencial ausente ou erro do GitHub — gera um `audit_event` (`integration:github_call`); o token nunca é gravado em nenhum campo, nunca aparece em log, nunca é retornado em resposta.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 130/130 testes passando em 32 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e seis arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada. O caminho de sucesso (chamada real ao GitHub) não é coberto por teste automatizado — `GITHUB_PAT` não está disponível neste ambiente de execução.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las. Nenhuma migração foi gerada por esta task.

## Critérios de aceite

- [x] `GITHUB_PAT` adicionado ao schema de configuração, opcional, sem quebrar o boot do servidor. Evidência: `apps/core-brain/src/config/environment.ts`, integrado em `main` no commit `263a6e313ff2287932c71bcff3b5b90b8fb6a953`.
- [x] `fetchGithubRepository` implementado com `fetch` nativo, erros tipados. Evidência: `apps/core-brain/src/modules/integrations/github.service.ts`.
- [x] Rota nova implementa `200`/`424`/`502`, valida `provider: github`. Evidência: `apps/core-brain/src/http/routes/integration.ts`.
- [x] Toda chamada gera `audit_event` sem o token. Evidência: `recordAuditEvent` chamado nos três ramos (sucesso, credencial ausente, erro do GitHub); nenhum campo `token`/`GITHUB_PAT` em `actionDetails`.
- [x] Token nunca armazenado em banco, nunca logado, nunca retornado. Evidência: nenhuma coluna nova em `integration`; leitura direta de `dependencies.config.GITHUB_PAT` no handler, sem persistência.
- [x] Nenhuma capacidade de escrita, retry sofisticado ou idempotência. Evidência: `github.service.ts` só implementa `fetchGithubRepository` (GET), uma única tentativa extra.
- [x] Nenhuma alteração em outros arquivos de schema, módulos de auditoria/autenticação, `src/http/middlewares/` ou rotas além de `integration.ts`. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`; PR #97 integrou exatamente os 11 arquivos previstos.
- [x] Teste unitário puro cobrindo credencial ausente. Evidência: `tests/github.service.test.ts`.
- [x] Teste de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/integration.test.ts`, 1 teste novo.
- [x] Teste de integração real estendido cobrindo `424`, isolado da suíte padrão, não executado. Evidência: `tests/integration.integration.test.ts`, cenário novo presente na suíte de integração.
- [x] `typecheck`, `test` e `build` continuam passando (130/130 testes). Evidência: execução local antes do commit e reexecução pós-merge contra `main` sincronizado (commit `263a6e313ff2287932c71bcff3b5b90b8fb6a953`).
- [x] `README.md` e Plano Mestre atualizados, incluindo documentação de `GITHUB_PAT`. Evidência: seção "Execução local"/"Escopo implementado" do README e seção 19 do Plano Mestre.
- [x] Nenhuma migração, tabela, coluna, dependência nova. Evidência: `apps/core-brain/drizzle/` sem novo arquivo; `package.json` inalterado.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito `autorizado` para o merge do PR #97, integrado em `263a6e313ff2287932c71bcff3b5b90b8fb6a953`; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real (não aplicável aqui, sem migração), suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; risco específico e novo desta fatia — **primeira vez que o sistema depende de uma credencial real de terceiro**; mitigado por: variável de ambiente (nunca banco, nunca código, nunca chat), escopo de leitura apenas, erro `424` limpo (não uma exceção não tratada) quando ausente, nenhum log do valor do token em nenhum caminho de código. Risco secundário: `GET /repos/{owner}/{repo}` do GitHub tem rate limit (5000 req/h autenticado); não implementamos tratamento específico de `429`/rate-limit nesta fatia — um erro de rate limit hoje cairia no tratamento genérico de `GithubApiError` (`502`), sem retry inteligente; aceitável no volume esperado desta fatia (uso manual/pontual), documentado como limitação conhecida.

Gate vigente: encerrado. O merge do PR #97 foi autorizado (`autorizado`) e executado por squash em `263a6e313ff2287932c71bcff3b5b90b8fb6a953`. Esta task está formalmente concluída. Os demais entregáveis da Fase 10, a Fase 9 pausada, o modelo de multi-organização e a Parte B permanecem fora deste encerramento.

Histórico de gates desta task: encerramento da Task 084 → CEO pergunta recomendação (`Qual é a sua recomendação?`) → recomendo GitHub → CEO decide avançar (`Vamos então vamos começar a configuração`) → esclareço direção e mecanismo de credencial via pergunta estruturada → CEO escolhe saída + variável de ambiente → proponho o escopo desta task (leitura de repositório, `GITHUB_PAT` via env var) → `Autorizado` (com erro de digitação "Autoziado", execução completa do escopo, criação da task, branch, commit, push e PR) → `autorizado` (merge do PR #97, integrado em `263a6e313ff2287932c71bcff3b5b90b8fb6a953`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-17

**Gate de encerramento**: o CEO autorizou (`autorizado`) o squash merge do PR #97.

**Integração**: PR #97 integrado em `main` via squash merge, commit `263a6e313ff2287932c71bcff3b5b90b8fb6a953`, em 2026-08-17T14:19:37Z. Escopo integrado: exatamente os 11 arquivos previstos em `allowed_paths` — criação de `00_SYSTEM/tasks/active/TASK-2026-085-fase10-integracao-saida-github.md`, `src/modules/integrations/github.service.ts` e `tests/github.service.test.ts`; edição de `src/app/build-app.ts`, `src/config/environment.ts`, `src/http/routes/integration.ts`, `tests/integration.test.ts`, `tests/integration.integration.test.ts`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em outros arquivos de schema, módulos de auditoria/autenticação, `src/http/middlewares/` ou rotas além de `integration.ts`.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `617edc1..263a6e3`) e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 130/130 testes passando em 32 arquivos, build sem erros.

**Estado final**: a segunda fatia da Fase 10 (primeira integração real de saída, GitHub) está concluída e integrada em `main`, sob a mesma suposição explícita de single-tenant já documentada. `GET /integrations/:id/github/repository` já chama a API real do GitHub quando `GITHUB_PAT` está configurado; sem ela, responde `424` de forma limpa. Nenhuma escrita, nenhum retry sofisticado, nenhuma idempotência. Restam oito entregáveis por integração — credenciais segregadas mais robustas, escopos mínimos aplicados de fato, webhook seguro de entrada (inviável sem deploy), retry, idempotência, logs/monitoramento dedicados, revogação, documentação, teste de falha — dependentes de decisão do CEO sobre o próximo passo. A Fase 9 permanece formalmente pausada. A Fase 8 permanece funcionalmente concluída com integração com n8n e APIs deliberadamente pendente. A Fase 7 permanece funcionalmente concluída com extração de arquivos reais e embeddings/busca vetorial deliberadamente pendentes. O modelo de multi-organização e a autenticação de produção real permanecem pendentes e fora deste encerramento. A Parte B permanece explicitamente pendente.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização foi tocado; nenhuma credencial adicional, dado real ou dependência de software nova foi introduzida; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma capacidade de escrita ao GitHub foi implementada.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: implementar a primeira chamada real de saída do projeto a um serviço externo — leitura de repositório do GitHub — com a credencial isolada em variável de ambiente, escopo deliberadamente mínimo.

**Resultado conhecido**: `GET /integrations/:id/github/repository` existe, testado no caminho de falha (credencial ausente); a rota está pronta para funcionar de verdade assim que o CEO definir `GITHUB_PAT`.

**O que ajudou**: esclarecer direção (entrada vs. saída) e mecanismo de credencial *antes* de propor qualquer escopo técnico, via pergunta estruturada — isso evitou construir a coisa errada (ex.: webhook de entrada, que seria inútil sem deploy) e evitou qualquer risco de a credencial real aparecer na conversa. Reaproveitar o padrão já existente de `registerHealthRoutes` para threading de `config` em vez de acessar `process.env` diretamente na rota manteve o código testável e consistente com o único outro precedente no projeto.

**O que dificultou**: decidir o nível de tratamento de erro — `424` para credencial ausente vs. `502` para erro do próprio GitHub foi uma escolha deliberada para diferenciar "problema de configuração local" de "problema do serviço externo", mas exigiu pensar em códigos de status HTTP menos comuns do que os já usados no resto do sistema (400/401/403/404/409).

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum — os dois riscos identificados durante o desenho (rate limit do GitHub sem tratamento dedicado; primeira credencial real do sistema) foram documentados antes da implementação, não descobertos depois. O caminho de sucesso (chamada real ao GitHub) segue não testado automaticamente, por não haver `GITHUB_PAT` neste ambiente — risco aceito conscientemente, mesmo padrão de toda a Parte B.

**Perguntas em aberto**: qual vai ser o próximo passo real desta integração — uma capacidade de escrita (exigindo escopo mais amplo do PAT), conectar um segundo provedor, ou aguardar deploy para viabilizar webhooks de entrada.

**Ações propostas**: aguardar decisão do CEO sobre o próximo passo — não há uma "próxima fatia técnica óbvia" sem essa decisão de negócio, mesmo padrão já observado no encerramento da Task 084.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
