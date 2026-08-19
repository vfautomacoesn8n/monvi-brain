---
id: task-2026-094
type: task
title: "Hub interno (frontend) — primeira fatia, dashboards em modo leitura"
status: active
task_state: in-progress
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-19"
updated_at: "2026-08-19"
reviewed_at: null
review_cycle: on-change
sources:
  - apps/core-brain/src/http/routes/dashboard.ts
  - apps/core-brain/src/http/routes/commercial-dashboard.ts
  - apps/core-brain/src/http/routes/automation-dashboard.ts
  - apps/core-brain/src/http/routes/auth.ts
  - apps/core-brain/src/http/routes/project.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-062-fase5-dashboard-projeto.md
  - 00_SYSTEM/tasks/done/TASK-2026-068-fase6-dashboard-comercial.md
  - 00_SYSTEM/tasks/done/TASK-2026-080-fase8-logs-metricas.md
aliases:
  - Hub interno
  - Frontend do Monvi Brain
  - apps/hub
tags: [hub, frontend, react, vite, dashboards, cors, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-094-hub-interno-primeira-fatia.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/.env.example
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/config/environment.ts
  - apps/core-brain/package.json
  - apps/core-brain/package-lock.json
  - apps/hub/
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/registries/
  - 00_SYSTEM/tasks/done/
  - apps/core-brain/src/db/
  - apps/core-brain/src/modules/
  - apps/core-brain/src/http/routes/
  - apps/core-brain/src/http/middlewares/
  - apps/core-brain/src/logging/
  - apps/core-brain/src/errors/
  - apps/core-brain/tests/
  - apps/core-brain/drizzle/
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
  - apps/hub/node_modules/
  - apps/hub/dist/
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
requires_review: false
acceptance_criteria:
  - Novo pacote apps/hub (React + TypeScript + Vite, standalone, mesmo padrão sem workspaces de apps/core-brain).
  - Tela de login usando POST /auth/dev-login já existente, sem nenhuma rota nova de autenticação.
  - Três dashboards em modo leitura, cada um consumindo uma rota GET já existente sem nenhuma mudança: comercial (GET /commercial/dashboard), automações (GET /automations/dashboard), projeto (GET /projects para listar, GET /projects/:id/dashboard para o detalhe).
  - Nenhuma tela de escrita (criar/editar/excluir) nesta fatia.
  - Nenhuma rota nova no backend além do CORS necessário para o navegador poder chamar a API de outra origem.
  - @fastify/cors adicionado a apps/core-brain, restrito à origem configurada em HUB_ORIGIN (variável de ambiente nova, com default sensato apontando para a porta padrão do Vite), sem abrir para qualquer origem.
  - Testes reais (Vitest + React Testing Library) cobrindo o fluxo de login (sucesso e erro) e a renderização de cada um dos três dashboards (sucesso e erro), com fetch mockado no nível de rede (sem mockar a lógica da aplicação).
  - npm run typecheck, npm test e npm run build passando tanto em apps/hub quanto em apps/core-brain.
  - Verificação real de wiring feita com os dois servidores de desenvolvimento rodando de fato (não só testes unitários) — confirmando CORS funcionando entre as duas origens e que o único erro ao tentar logar é o ECONNREFUSED já conhecido por falta de Postgres local, não um erro de integração novo.
  - README.md de apps/hub criado; README.md de apps/core-brain e Plano Mestre atualizados, incluindo uma nova seção documentando o hub como iniciativa transversal fora da numeração de Fases.
  - Nenhuma credencial nova, nenhum dado real, nenhuma decisão de multi-organização, nenhuma decisão de deploy/infraestrutura de produção.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a primeira fatia do hub interno: um pacote frontend novo (apps/hub) consumindo tres rotas de dashboard e a rota de dev-login ja existentes, sem nenhuma rota nova no backend alem do CORS necessario para viabilizar a chamada entre origens diferentes no navegador. Nao autoriza nenhuma tela de escrita (criar/editar/excluir) nem CRUD completo de qualquer entidade; nao autoriza autenticacao de producao real; nao autoriza deploy ou qualquer decisao de infraestrutura; nao autoriza bibliotecas de componentes de UI, roteador dedicado, ou qualquer dependencia frontend alem do minimo necessario (React, Vite, TypeScript, ferramentas de teste); nao autoriza mudanca de schema ou de logica de negocio no backend; nao autoriza retomada de qualquer outra decisao pendente (Parte B, integracao com n8n, execucao real de agentes da Fase 9, embeddings da Fase 7, OCR, segundo provedor de integracao)."
---

# Task 094 — Hub interno (frontend), primeira fatia

## Contexto

Após o encerramento da Task 093, o CEO perguntou "O que falta para finalizar o projeto por completo?" — apresentei um panorama completo do estado do projeto, distinguindo o que está pronto, o que depende de decisão dele, e as Fases 11-13 (categoricamente diferentes, exigem investimento/decisão estrutural). O CEO então perguntou "O que você acha sobre criar um hub para esse projeto?" — pergunta ambígua o suficiente ("hub" pode significar várias coisas) para eu esclarecer via pergunta estruturada, em vez de assumir. O CEO escolheu "painel/dashboard interno (frontend)".

Dei minha opinião: confirmei que o Plano Mestre nunca menciona frontend em lugar nenhum — o projeto inteiro, até esse ponto, era 100% API. Recomendei começar pequeno e só leitura, reaproveitando os três dashboards agregados que já existem no backend (`GET /projects/:id/dashboard`, `GET /commercial/dashboard`, `GET /automations/dashboard`), em vez de um CRUD completo. Expliquei que isso é escopo novo que o Plano Mestre não previu — precisaria de um lugar próprio na estrutura do plano. O CEO pediu para propor um escopo técnico concreto ("Sim por favor").

Propus: novo pacote `apps/hub` (React + Vite + TypeScript, CSS puro, `fetch` nativo), `@fastify/cors` adicionado ao backend para viabilizar a chamada entre origens diferentes, três telas de dashboard reaproveitando rotas já existentes, login via `dev-login` já existente, nenhuma ação de escrita. O CEO respondeu "Autorizado".

## Objetivo

Entregar a primeira interface visual do projeto — um hub interno, só leitura, que consome a API já existente para visualizar dashboards de projeto, comercial e automações, sem introduzir nenhuma rota nova de negócio no backend, nenhuma decisão de deploy, e sem comprometer a disciplina de escopo estreito já estabelecida em todas as tasks anteriores desta janela.

## Escopo executado

### Backend (`apps/core-brain`)

1. `src/config/environment.ts`: nova variável `HUB_ORIGIN` (default `http://localhost:5173`, a porta padrão do Vite — funciona sem nenhuma configuração adicional em desenvolvimento).
2. `src/app/build-app.ts`: `@fastify/cors` registrado, restrito à origem de `HUB_ORIGIN` — nenhuma outra origem é aceita.
3. `.env.example` atualizado com `HUB_ORIGIN`.

### Frontend (`apps/hub`, novo pacote)

1. Scaffold Vite + React + TypeScript, standalone (sem workspaces, mesmo padrão de `apps/core-brain`) — `package.json`, `tsconfig.json`, `vite.config.ts`, `vitest.config.ts`, `index.html`, `.gitignore`, `.env.example`.
2. `src/api/client.ts`: wrapper fino sobre `fetch` nativo (sem `axios`), com tratamento de erro (`ApiError`) e injeção do header `Authorization: Bearer <token>`.
3. `src/auth/AuthContext.tsx` + `LoginPage.tsx`: estado de sessão via React Context, token persistido em `sessionStorage`, login real via `POST /auth/dev-login`.
4. `src/pages/`: `HomePage` (navegação para os três dashboards), `CommercialDashboardPage`, `AutomationsDashboardPage`, `ProjectsDashboardPage` (lista de projetos → seleção → dashboard do projeto escolhido) — cada uma busca dados reais via `apiGet`, com estados de carregamento e erro.
5. `src/components/CountsCard.tsx`: componente reutilizável para renderizar contagens totais e por chave (usado pelos três dashboards).
6. `README.md` próprio, documentando escopo, stack e como rodar localmente.

### Testes

`apps/hub/tests/`: `LoginPage.test.tsx`, `CommercialDashboardPage.test.tsx`, `AutomationsDashboardPage.test.tsx`, `ProjectsDashboardPage.test.tsx` — Vitest + React Testing Library, `fetch` mockado no nível de rede (`vi.stubGlobal('fetch', ...)`), cobrindo sucesso e erro de cada fluxo. 9 testes, todos passando.

### Verificação real de wiring (além dos testes unitários)

Sem Postgres local (mesma limitação da Parte B), um fluxo autenticado completo não pôde ser testado ponta a ponta. Em vez de assumir que funcionaria, subi os dois servidores de desenvolvimento de verdade e confirmei:
- `apps/core-brain` em `127.0.0.1:3000`: `GET /health` responde `200` com o header `access-control-allow-origin: http://localhost:5173` quando a requisição vem com `Origin: http://localhost:5173`; **sem** esse header quando a origem é outra (`http://evil.example.com`) — CORS restringindo corretamente, não aberto para qualquer origem.
- `POST /auth/dev-login` falha com o erro de conexão ao Postgres já conhecido (`500`, mesma causa documentada em toda a Parte B) — confirmando que a única barreira é a ausência de banco local, não um erro de integração novo introduzido por esta task.
- `apps/hub` em `localhost:5173`: `vite dev` serve o `index.html` e transpila `src/main.tsx` sem erro, confirmando que todo o grafo de módulos (React, `App`, `AuthProvider`, CSS) resolve corretamente — o mesmo processo que rodaria num navegador real.

Validado localmente: `npm run typecheck`, `npm test` (9/9) e `npm run build` passando em `apps/hub`; `npm run typecheck`, `npm test` (144/144) e `npm run build` continuam passando em `apps/core-brain` após a mudança de CORS; `npm audit` sem vulnerabilidade em nenhum dos dois pacotes (`apps/hub`: 0 vulnerabilidades; `apps/core-brain`: as mesmas seis pré-existentes, inalteradas).

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052. Quando o CEO tiver Postgres local disponível, o fluxo de login real do hub poderá ser validado ponta a ponta pela primeira vez — até lá, a verificação desta task ficou limitada ao wiring (confirmado) e aos testes automatizados com rede simulada.

## Critérios de aceite

- [x] Novo pacote `apps/hub`, standalone. Evidência: `apps/hub/package.json`, sem workspaces no repo.
- [x] Login via `dev-login` já existente, sem rota nova de autenticação. Evidência: `src/auth/AuthContext.tsx` chama `POST /auth/dev-login`; nenhuma alteração em `apps/core-brain/src/http/routes/auth.ts`.
- [x] Três dashboards em modo leitura, rotas já existentes. Evidência: `src/pages/*DashboardPage.tsx`; nenhuma alteração nas rotas de dashboard do backend.
- [x] Nenhuma tela de escrita. Evidência: nenhum `apiPost`/`apiPut`/`apiDelete` fora do login em todo `apps/hub/src`.
- [x] Nenhuma rota nova no backend além do CORS. Evidência: `git diff` de `apps/core-brain/src/http/routes/` vazio nesta task.
- [x] `@fastify/cors` restrito a `HUB_ORIGIN`. Evidência: `build-app.ts`; testado manualmente com origem confiável (header presente) e não confiável (header ausente).
- [x] Testes reais cobrindo login e os três dashboards, sucesso e erro. Evidência: 4 arquivos de teste, 9 testes, `fetch` mockado no nível de rede.
- [x] `typecheck`/`test`/`build` passando nos dois pacotes. Evidência: execução local, `apps/hub` (9/9 testes) e `apps/core-brain` (144/144 testes).
- [x] Verificação real de wiring com os dois servidores rodando. Evidência: seção "Verificação real de wiring" acima, com os três checks executados de fato.
- [x] Documentação criada/atualizada. Evidência: `apps/hub/README.md` novo; `apps/core-brain/README.md` e Plano Mestre (nova seção 21) atualizados.
- [x] Nenhuma credencial, dado real, decisão de multi-organização ou de deploy. Evidência: diff restrito aos arquivos previstos; nenhuma variável de ambiente de credencial nova; hub roda só localmente.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Pendente do gate de merge do PR de implementação.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente, será executada antes do gate de encerramento.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real (não se aplica aqui, nenhuma migração nesta task), suposição single-tenant, ausência de Docker/Postgres neste ambiente, agora também afetando a validação do hub (login real não testável ponta a ponta). Risco específico desta fatia: `sessionStorage` guarda o token de sessão em texto puro no navegador — aceitável para uma ferramenta interna de desenvolvimento local, mas não seria uma escolha adequada se este hub um dia for exposto para além do uso local do CEO (mesma ressalva de "autenticação de produção real" já registrada em outras partes do plano). CORS foi configurado restrito a uma única origem confiável, não aberto (`origin: '*'` teria sido mais simples mas incorreto).

Gate vigente: aguardando autorização do CEO para o merge do PR de implementação.

Histórico de gates desta task: encerramento da Task 093 → CEO pergunta "O que falta para finalizar o projeto por completo?" → apresento panorama completo → CEO pergunta "O que você acha sobre criar um hub para esse projeto?" → pergunta esclarecedora (pergunta ambígua) → CEO escolhe "painel/dashboard interno (frontend)" → dou minha opinião e recomendo uma primeira fatia mínima, só leitura → CEO pede escopo concreto ("Sim por favor") → proponho o escopo técnico → `Autorizado`.

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build` nos dois pacotes, `npm audit`, verificação real de wiring com os dois servidores) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
