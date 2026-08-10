---
id: task-2026-053
type: task
title: "Fase 5 — primeira fatia operacional: API real de clientes e projetos"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-10"
updated_at: "2026-08-10"
reviewed_at: null
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-052-validacao-real-persistencia-core-brain.md
  - apps/core-brain/src/db/schema/client.ts
  - apps/core-brain/src/db/schema/project.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-052-validacao-real-persistencia-core-brain.md
aliases:
  - Fase 5 — API de clientes e projetos
  - Primeira fatia operacional do Core Brain
tags: [core-brain, fase-5, api, clientes, projetos, rbac, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-053-fase5-api-client-project.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/http/routes/client.ts
  - apps/core-brain/src/http/routes/project.ts
  - apps/core-brain/tests/client.test.ts
  - apps/core-brain/tests/project.test.ts
  - apps/core-brain/tests/client-project.integration.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-052-validacao-real-persistencia-core-brain.md
  - apps/core-brain/src/db/
  - apps/core-brain/src/modules/
  - apps/core-brain/src/http/middlewares/
  - apps/core-brain/src/http/routes/auth.ts
  - apps/core-brain/src/http/routes/health.ts
  - apps/core-brain/tests/auth.test.ts
  - apps/core-brain/tests/health.test.ts
  - apps/core-brain/tests/config.test.ts
  - apps/core-brain/tests/db.test.ts
  - apps/core-brain/tests/db.integration.test.ts
  - apps/core-brain/drizzle/
  - apps/core-brain/package.json
  - apps/core-brain/vitest.config.ts
  - apps/core-brain/vitest.integration.config.ts
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
  - Rotas CRUD (criar, listar, obter, atualizar, exclusão lógica) para client e project criadas em apps/core-brain/src/http/routes/, registradas em build-app.ts.
  - Todas as rotas exigem autenticação (authenticateRequest) e permissão (requirePermission), reaproveitando o middleware já existente da Fase 4, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/, apps/core-brain/src/modules/ ou apps/core-brain/src/http/middlewares/.
  - Testes automatizados criados cobrindo o bloqueio de acesso sem token (401) em cada rota nova, passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo o ciclo completo (criar, listar, obter, atualizar, remover) de client e project via API contra um banco real, isolado da suíte padrão, seguindo o mesmo padrão da Task 052.
  - npm run typecheck, npm test e npm run build continuam passando (24/24 testes na suíte padrão, incluindo os 14 já existentes).
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo o estado real, incluindo a suposição explícita de single-tenant e a Parte B pendente.
  - Nenhuma credencial, dado real ou dependência nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida além da suposição single-tenant explicitamente documentada.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a criação da primeira fatia operacional da Fase 5: API CRUD de client e project, sob suposição explícita de single-tenant. Não autoriza o modelo de multi-organização, os demais entregáveis da Fase 5 (tarefas, entregáveis, aprovações, dependências, riscos, comentários, histórico de mudanças, dashboards), autenticação de produção real, alteração de código de identidade/autenticação/autorização já existente, ou qualquer credencial, dado real ou dependência nova."
---

# Task 053 — Fase 5, primeira fatia operacional: API real de clientes e projetos

## Contexto

Ao retomar a construção do Core Brain após o encerramento da Task 052, propus dois caminhos possíveis — fechar a autenticação de produção real ou abrir a Fase 5 — ambos formalmente bloqueados no Plano Mestre por decisões pendentes (estratégia de autenticação e modelo de multi-organização, seção 17). Antes de presumir qualquer uma dessas decisões, levei a questão ao CEO.

Ao investigar o que "modelo de multi-organização" significa de fato, encontrei que o `Modelo-dados-Core-Brain-MVP.md` (já aprovado) define isolamento por `client_id`/`project_id`, e que o schema Drizzle já implementa `client`/`project` desde a Fase 2 — mas isso não resolve a pergunta de fundo (Monvi Brain como ferramenta multi-tenant para outras empresas, ou apenas com múltiplas unidades internas da Monvi). O CEO decidiu explicitamente adiar essa decisão e seguir com a Fase 5 mesmo assim.

## Objetivo

Abrir a Fase 5 pela menor fatia que já entrega valor operacional real: expor via API o schema de `client`/`project` que já existe desde a Fase 2, com autenticação e RBAC obrigatórios, sob uma suposição explícita e documentada de single-tenant — a ser revisada quando a decisão formal de multi-organização for tomada.

## Escopo executado

1. `apps/core-brain/src/http/routes/client.ts`: rotas `POST/GET/GET:id/PATCH/DELETE /clients`, com validação Zod, autenticação, RBAC (`client:read`/`client:write`) e registro de auditoria, reaproveitando `authenticateRequest`, `requirePermission` e `recordAuditEvent` já existentes.
2. `apps/core-brain/src/http/routes/project.ts`: mesmo padrão para `/projects`, vinculado a `client_id`.
3. `apps/core-brain/src/app/build-app.ts`: registro das duas novas rotas sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
4. `apps/core-brain/tests/client.test.ts` e `tests/project.test.ts`: testes de bloqueio de acesso sem token (401) para cada rota nova, sem dependência de banco real.
5. `apps/core-brain/tests/client-project.integration.test.ts`: teste de integração real cobrindo o ciclo completo de `client` e `project` via API, isolado da suíte padrão, seguindo o padrão já estabelecido na Task 052.
6. `apps/core-brain/README.md`: escopo implementado, lista de endpoints e seção de persistência local atualizados.
7. `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: seção 19 atualizada com o estado real da Fase 5 (em andamento, suposição single-tenant explícita, Parte B pendente).

Validado localmente: `npm run typecheck` sem erros; `npm test` com 24/24 testes passando (10 novos, mais os 14 já existentes), 6 arquivos; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos dois arquivos de integração (persistência básica e client/project), confirmando que a configuração está correta e que a validação real contra banco ainda não foi executada.

## Parte B — pendente, fora do meu alcance neste ambiente

Subir `infrastructure/local/docker-compose.yml`, rodar `npm run db:migrate` e `npm run test:integration` em um ambiente com Docker disponível, e reportar o resultado. Só após essa execução real a API de clientes e projetos deve ser considerada validada contra um banco real em execução — mesma pendência já registrada na Task 052, agora estendida a este novo teste.

## Critérios de aceite

- [ ] Rotas CRUD para `client` e `project` criadas e registradas.
- [ ] Todas as rotas exigem autenticação e permissão, reaproveitando o middleware existente.
- [ ] Nenhuma alteração em `src/db/`, `src/modules/` ou `src/http/middlewares/`.
- [ ] Testes de bloqueio de acesso (401) passando sem banco real.
- [ ] Teste de integração real do ciclo completo criado, isolado da suíte padrão.
- [ ] `typecheck`, `test` e `build` continuam passando (24/24 testes).
- [ ] `README.md` e Plano Mestre atualizados.
- [ ] Nenhuma credencial, dado real, dependência nova ou decisão de multi-organização.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge.

## Riscos e gates humanos

Riscos: a suposição single-tenant pode exigir retrabalho real quando o modelo de multi-organização for decidido (risco aceito explicitamente pelo CEO ao adiar a decisão); a Parte B pendente pode se acumular com a da Task 052 se o ambiente com Docker não for disponibilizado; ausência de Docker neste ambiente segue sendo uma limitação estrutural para toda validação de persistência.

Gate vigente: `Autorizo` (em resposta à proposta de escopo da Task 053 — API CRUD de client/project, single-tenant explícito). Este gate autoriza a execução completa do escopo técnico e a condução do ciclo de governança (commit, push, PR) até o ponto em que a revisão final e o merge, que dependem de decisão do CEO, sejam solicitados. Não autoriza os demais entregáveis da Fase 5, o modelo de multi-organização, nem autenticação de produção real.

Histórico de gates desta task: proposta de continuar a construção do Core Brain → CEO autoriza sem especificar caminho → eu identifico que os dois caminhos óbvios (autenticação de produção, Fase 5) dependem de decisões formais pendentes e pergunto qual delas resolver → investigação revela que "multi-organização" pode ter significados distintos, pergunto ao CEO qual é o correto → CEO decide adiar essa decisão e seguir com a Fase 5 mesmo assim → proponho o escopo desta task (primeira fatia: API de client/project, single-tenant explícito) → `Autorizo` (este gate: execução completa do escopo, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
