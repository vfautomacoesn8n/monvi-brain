---
id: task-2026-052
type: task
title: "Validação real de persistência do Core Brain (Fase 3) e correção documental do estado atual"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-10"
updated_at: "2026-08-10"
reviewed_at: "2026-08-10T16:27:59-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-043-persistencia-local-e-migracoes.md
  - 00_SYSTEM/tasks/done/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-045-correcao-e-validacao-factual-fases-3-e-4.md
  - apps/core-brain/src/db/client.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/tests/db.test.ts
  - infrastructure/local/docker-compose.yml
related:
  - 00_SYSTEM/tasks/done/TASK-2026-043-persistencia-local-e-migracoes.md
  - 00_SYSTEM/tasks/done/TASK-2026-045-correcao-e-validacao-factual-fases-3-e-4.md
aliases:
  - Validação real de persistência
  - Correção documental do estado do Core Brain
tags: [core-brain, persistencia, fase-3, testes, evidencia, documentacao]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-052-validacao-real-persistencia-core-brain.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
  - apps/core-brain/README.md
  - apps/core-brain/package.json
  - apps/core-brain/vitest.config.ts
  - apps/core-brain/vitest.integration.config.ts
  - apps/core-brain/tests/db.integration.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-043-persistencia-local-e-migracoes.md
  - 00_SYSTEM/tasks/done/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-045-correcao-e-validacao-factual-fases-3-e-4.md
  - apps/core-brain/src/
  - apps/core-brain/tests/db.test.ts
  - apps/core-brain/tests/auth.test.ts
  - apps/core-brain/tests/health.test.ts
  - apps/core-brain/tests/config.test.ts
  - apps/core-brain/drizzle/
  - apps/core-brain/tsconfig.json
  - apps/core-brain/tsconfig.build.json
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
  - Teste de integração real criado em apps/core-brain/tests/db.integration.test.ts, isolado da suíte padrão, que insere, lê e remove um registro real na tabela person.
  - Script test:integration criado e configuração de vitest separada, sem alterar o comportamento de npm test.
  - npm run typecheck e npm test continuam passando sem alteração de resultado (14/14 testes, mesma contagem de arquivos).
  - README.md de apps/core-brain atualizado com o estado real implementado e o runbook de execução da validação de persistência.
  - Plano Mestre e registro de riscos corrigidos para refletir o estado real das Fases 1 a 4, sem declarar a persistência como validada antes da execução real (Parte B).
  - Nenhuma credencial, dado real ou dependência nova adicionada.
  - Nenhuma alteração em código de negócio (apps/core-brain/src/), apenas em testes, configuração de teste e documentação.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a criação de um teste de integração real de persistência (Fase 3) e a correção de documentação estratégica desatualizada (Plano Mestre e registro de riscos). Não autoriza alteração de código de negócio em apps/core-brain/src/, autenticação de produção real, Fase 5, criação da Task 048, ou qualquer credencial, dado real ou dependência nova."
---

# Task 052 — Validação real de persistência do Core Brain (Fase 3) e correção documental do estado atual

## Contexto

Ao retomar a construção do Core Brain, eu verifiquei o estado real do repositório — não apenas a documentação — e confirmei, rodando `npm run typecheck` e `npm test`, que as Fases 1 e 4 têm implementação real e testada (14/14 testes passando). Encontrei duas lacunas concretas: a persistência (Fase 3) nunca foi validada contra um banco Postgres real em execução, apenas contra um mock "offline"; e dois documentos estratégicos (`Plano-Mestre-de-Construcao-Monvi-Brain.md` e `Registro-pendencias-riscos-e-limitacoes-v1.md`) ainda afirmavam um estado desatualizado, incompatível com o código já integrado em `main`.

Eu propus fechar a lacuna de persistência (Opção 1) e corrigir a documentação (Opção 4) como o ponto de partida mais simples e de menor risco, em vez de avançar diretamente para autenticação de produção real ou para a Fase 5 — ambas dependentes de decisões formais ainda não tomadas. O CEO autorizou.

Antes de propor o escopo técnico, eu verifiquei minha própria capacidade de execução e encontrei uma limitação real: não tenho Docker disponível neste ambiente (nem `psql`, nem serviço Postgres local). Por isso, dividi o escopo em uma Parte A, que eu executo sozinho, e uma Parte B, que depende de um ambiente com Docker disponível — e não vou declarar a persistência como validada até que a Parte B seja executada de fato.

## Objetivo

Criar a evidência técnica real (teste de integração) que falta para comprovar a persistência do Core Brain contra um banco Postgres em execução, e corrigir a documentação estratégica para refletir o estado real das Fases 1 a 4.

## Escopo executado (Parte A)

1. `apps/core-brain/tests/db.integration.test.ts`: insere um registro real na tabela `person`, lê de volta, confirma os dados, remove o registro e fecha a conexão.
2. `apps/core-brain/vitest.integration.config.ts`: configuração dedicada, isolando o teste de integração da suíte padrão.
3. `apps/core-brain/vitest.config.ts`: exclusão explícita de `**/*.integration.test.ts` da suíte padrão.
4. `apps/core-brain/package.json`: novo script `test:integration`.
5. `apps/core-brain/README.md`: estado real implementado (Fases 1-4) e runbook de execução da validação de persistência.
6. `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: seção 19 corrigida, sem declarar a persistência validada antes da Parte B.
7. `00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md`: bullets de Core Brain, autenticação e autorização corrigidos.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 14/14 testes passando, 4 arquivos (o teste de integração não é executado); `npm run test:integration` falha com `ECONNREFUSED`, confirmando que a configuração está correta e que a persistência real ainda não foi validada — não mascarei essa falha nem declarei sucesso indevido.

## Parte B — pendente, fora do meu alcance neste ambiente

Subir `infrastructure/local/docker-compose.yml`, rodar `npm run db:migrate` e `npm run test:integration` em um ambiente com Docker disponível, e reportar o resultado. Só após essa execução real a persistência (Fase 3) deve ser considerada comprovada.

## Critérios de aceite

- [x] Teste de integração real criado, isolado da suíte padrão. Evidência: `apps/core-brain/tests/db.integration.test.ts`, integrado em `main` no commit `17c3f30d185c0e416ee88e410f1d5520647214c8`.
- [x] `test:integration` funcional (falha corretamente sem banco, pronto para validar quando o banco existir). Evidência: script `test:integration` em `apps/core-brain/package.json`; execução local retornou `ECONNREFUSED`, comportamento esperado sem Postgres disponível.
- [x] `npm run typecheck` e `npm test` continuam passando sem alteração de resultado. Evidência: reexecutados após o merge, contra `main` sincronizado (`17c3f30d`): typecheck limpo; `test` com 14/14 testes, 4 arquivos.
- [x] `README.md` de `apps/core-brain` atualizado com estado real e runbook. Evidência: seção "Persistência local (PostgreSQL)" adicionada, integrada em `main`.
- [x] Plano Mestre e registro de riscos corrigidos, sem declarar persistência validada antes da Parte B. Evidência: seção 19 do Plano Mestre e bullets de "Limitações atuais" do registro de riscos, ambos atualizados e integrados em `main`.
- [x] Nenhuma credencial, dado real ou dependência nova. Evidência: diff do PR #33 restrito aos 9 arquivos previstos em `allowed_paths`, sem alteração de `package-lock.json` ou variáveis de ambiente.
- [x] Nenhuma alteração em `apps/core-brain/src/`. Evidência: `git show --name-status --format= origin/main` confirmou apenas os 9 arquivos esperados, nenhum em `src/`.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge. Evidência: gate explícito "autorizo" concedido para o merge do PR #33.

## Riscos e gates humanos

Riscos: a Parte B pendente pode ser esquecida e a persistência tratada como validada sem execução real; ausência de Docker neste ambiente pode se repetir em tasks técnicas futuras, exigindo alternativa (ambiente do CEO, ou CI, conforme o Achado 2 da minha auditoria).

Gate vigente: encerrado. O merge do PR #33 foi autorizado (`autorizo`) e executado por squash em `17c3f30d185c0e416ee88e410f1d5520647214c8`. Esta task está formalmente concluída quanto à Parte A. A Parte B permanece pendente, fora do meu alcance neste ambiente, e não é coberta por este encerramento.

Histórico de gates desta task: proposta de escopo (Gate A, alternativas e recomendação) → CEO autoriza seguir a recomendação → eu identifico e reporto a ausência de Docker neste ambiente antes de assumir compromisso que não poderia cumprir → proposta de escopo revisado, dividido em Parte A/Parte B → `Autorizado` (execução completa da Parte A, criação da task, branch, commit, push e PR) → `autorizo` (merge do PR #33, integrado em `17c3f30d185c0e416ee88e410f1d5520647214c8`).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-10

**Gate de encerramento**: o CEO autorizou (`autorizo`) o squash merge do PR #33.

**Integração**: PR #33 integrado em `main` via squash merge, commit `17c3f30d185c0e416ee88e410f1d5520647214c8`, em 2026-08-10T19:25:50Z. Escopo integrado: exatamente os 9 arquivos previstos em `allowed_paths` — criação de `tests/db.integration.test.ts` e `vitest.integration.config.ts`, edição de `vitest.config.ts`, `package.json` e `README.md` em `apps/core-brain/`, e correção documental em `Plano-Mestre-de-Construcao-Monvi-Brain.md` e `Registro-pendencias-riscos-e-limitacoes-v1.md`. Nenhuma alteração em `apps/core-brain/src/`.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `2589421..17c3f30`) e reexecutei `npm run typecheck` e `npm test` diretamente contra o `main` já integrado — typecheck limpo, 14/14 testes passando em 4 arquivos, mesma contagem de antes da mudança. Confirma que a integração não alterou o comportamento da suíte padrão.

**Estado final**: Parte A desta task está concluída e integrada em `main`. Parte B (execução real de `docker compose up`, `npm run db:migrate` e `npm run test:integration` contra Postgres real) permanece explicitamente pendente, depende de um ambiente com Docker disponível, e não deve ser tratada como concluída até execução e relato reais. Enquanto a Parte B não ocorrer, a Fase 3 (persistência) permanece classificada como "implementada, não validada contra banco real em execução" — exatamente o estado já refletido no Plano Mestre corrigido por esta própria task.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de negócio em `apps/core-brain/src/` foi tocado; nenhuma credencial, dado real ou dependência nova foi introduzida; a Task 048 permanece reservada exclusivamente para a futura implementação técnica do MVP do Helpper Central.

**Integração deste próprio encerramento**: ainda pendente. Este documento de encerramento, ao ser commitado, seguirá o mesmo ciclo de governança (branch → commit → push → PR → gate de merge explícito) antes de ser integrado em `main`.
