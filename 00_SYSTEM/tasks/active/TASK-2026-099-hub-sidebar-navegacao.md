---
id: task-2026-099
type: task
title: "Hub interno — sidebar de navegação lateral, fiel à imagem de referência (reformulação estrutural, sem funcionalidade nova)"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-20"
updated_at: "2026-08-20"
review_cycle: on-change
sources: []
related:
  - 00_SYSTEM/tasks/done/TASK-2026-098-hub-modo-escuro-premium.md
aliases:
  - Sidebar do hub
  - Navegação lateral do hub
  - Reformulação de navegação
tags: [hub, frontend, navegacao, sidebar, design-system]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-099-hub-sidebar-navegacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-099-hub-sidebar-navegacao.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/hub/README.md
  - apps/hub/src/App.tsx
  - apps/hub/src/components/
  - apps/hub/src/pages/HomePage.tsx
  - apps/hub/tests/LoginPage.test.tsx
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/registries/
  - 00_SYSTEM/tasks/done/
  - 01_RAW/
  - 02_WIKI/
  - apps/core-brain/
  - apps/hub/src/api/
  - apps/hub/src/auth/
  - apps/hub/src/lib/
  - apps/hub/src/index.css
  - apps/hub/src/pages/CommercialDashboardPage.tsx
  - apps/hub/src/pages/AutomationsDashboardPage.tsx
  - apps/hub/src/pages/ProjectsDashboardPage.tsx
  - apps/hub/tests/CommercialDashboardPage.test.tsx
  - apps/hub/tests/AutomationsDashboardPage.test.tsx
  - apps/hub/tests/ProjectsDashboardPage.test.tsx
  - apps/hub/vitest.config.ts
  - apps/hub/tsconfig.json
  - apps/hub/vite.config.ts
  - apps/hub/index.html
  - apps/hub/package.json
forbidden_paths:
  - .git/
  - packages/
  - infrastructure/
  - 03_OPERATIONS/decisoes/
  - apps/hub/node_modules/
  - apps/hub/dist/
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
requires_review: false
acceptance_criteria:
  - Nenhuma tela nova, nenhuma funcionalidade nova, nenhuma chamada de API nova, nenhuma rota nova — só reorganização de navegação entre as quatro views já existentes (Início, Comercial, Automações, Projetos).
  - Sidebar fixa à esquerda, ícone + texto, com os quatro itens reais do hub e o item ativo destacado.
  - Botão "Sair" fixado no rodapé da sidebar, no lugar do cabeçalho horizontal anterior.
  - Cabeçalho horizontal anterior removido — a sidebar assume a navegação principal.
  - Tela de Início deixa de ser a única forma de navegar, mas continua existindo como atalho rápido complementar.
  - Nenhuma cor nova além das já oficiais/estabelecidas nas Tasks 097/098.
  - Nenhum roteador de verdade (react-router) — mesmo controle de estado por HubView já existente.
  - Todos os 9 testes automatizados continuam passando; qualquer alteração de asserção deve ser por mudança de texto/copy deliberada (documentada), nunca por mudança do comportamento verificado.
  - npm run typecheck, npm test e npm run build passando em apps/hub.
  - npm audit sem vulnerabilidades novas.
  - Verificação real com os dois servidores de desenvolvimento rodando — HMR sem erros, bundle de produção contendo os novos rótulos de navegação, e fluxo real de login + busca de dados confirmado via API.
  - Nenhuma mudança em apps/core-brain.
  - README.md de apps/hub e Plano Mestre atualizados, documentando a reformulação e a decisão de estilo (ícone + texto).
  - Nenhuma credencial nova, nenhum dado real, nenhuma decisão de multi-organização.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a reformulacao da navegacao das quatro telas ja existentes do hub para uma sidebar fixa lateral (icone + texto), inspirada na mesma imagem de referencia da Task 098, sem nenhuma tela nova, funcionalidade nova, rota nova, ou cor nova. Nao autoriza react-router nem qualquer forma de roteamento de URL real. Nao autoriza nenhuma mudanca em apps/core-brain. Nao autoriza retomada da decisao funcional maior (qual entidade ganha capacidade de escrita, se alguma), que segue como conversa de elaboracao separada. Nao autoriza qualquer elemento visual alem do necessario para reorganizar a navegacao das quatro telas existentes."
---

# Task 099 — Hub interno, sidebar de navegação lateral

## Contexto

Após o encerramento da Task 098 (modo escuro premium), o CEO pediu uma reformulação estrutural: "Eu estava pensando em um HUB com abas laterais, opções que fazem sentido com a Monvi e etc, vamos reformular por favor, quero também que você leve a imagem que te enviei como referência" — a mesma imagem de referência usada na Task 098 (um dashboard cripto/Web3), agora olhada pela estrutura de navegação, não pela paleta.

A imagem não estava mais no contexto ativo da conversa (a Task 098 já havia sido encerrada e o contexto anterior fora resumido) — recuperei-a diretamente do histórico persistido da sessão (arquivo de transcript local) e a reanalisei antes de propor qualquer coisa, em vez de trabalhar de memória da descrição textual anterior.

A referência mostra uma sidebar esquerda estreita, só com ícones (logo, Home ativo destacado com fundo mais claro, mais quatro ícones sem texto), uma barra superior com busca e ação primária, e abaixo dela uma linha de abas horizontais secundárias dentro da view atual. Propus mapear isso para os quatro itens que já existem de verdade no hub (Início, Comercial, Automações, Projetos, reaproveitando os ícones `lucide-react` já usados: `Home`, `TrendingUp`, `Workflow`, `Briefcase`) numa sidebar persistente — nada inventado, só reorganizado — e perguntei explicitamente se deveria ser só ícones (fiel à referência) ou ícone + texto. O CEO escolheu **"Ícone + texto (Recomendado)"**, e confirmou o escopo completo em seguida ("confirmo").

## Objetivo

Substituir a navegação por cards na tela de Início e o cabeçalho horizontal do hub por uma sidebar fixa à esquerda, ícone + texto, com os quatro itens já existentes, sem adicionar nenhuma tela, funcionalidade, rota, ou cor nova.

## Escopo executado

1. `src/components/Sidebar.tsx` (novo): sidebar fixa (`w-56`, ~224px), fundo `deep-graphite` com borda sutil `border-off-white/10`; wordmark no topo; nav com os quatro itens (`Início`/`Home`, `Comercial`/`TrendingUp`, `Automações`/`Workflow`, `Projetos`/`Briefcase`), item ativo destacado (`bg-signal-blue/10 text-signal-blue`), itens inativos em `text-medium-gray` com hover; botão "Sair" fixado no rodapé, separado por borda.
2. `src/App.tsx`: layout reestruturado de `min-h-screen` com `<header>` horizontal para `flex min-h-screen` com `<Sidebar>` + `<main className="flex-1">`. O cabeçalho horizontal anterior (wordmark + label "hub" + botão Sair) foi removido — essas responsabilidades migraram para a sidebar.
3. `src/pages/HomePage.tsx`: título alterado de "Painéis" para "Início"; subtítulo alterado de "Escolha um painel para visualizar." para "Acesso rápido aos painéis — também disponíveis no menu à esquerda." — os três cards continuam existindo e clicáveis, mas agora como atalho complementar, não a única forma de navegar.
4. `tests/LoginPage.test.tsx`: a asserção que verificava o texto antigo do card de Início após login real (`'Escolha um painel para visualizar.'`) foi atualizada para verificar o heading `'Início'` — o comportamento testado (chegar na tela inicial autenticada após login) não mudou, só o texto de UI que a asserção usava como prova disso.

Validado localmente: `npm run typecheck` sem erros; `npm test` com **9/9 testes passando** (1 asserção atualizada deliberadamente, ver acima; as outras 8 inalteradas); `npm run build` sem erros; `npm audit` com 0 vulnerabilidades. Verificação real com os dois servidores de desenvolvimento já rodando: HMR aplicou todas as mudanças sem erro (`vite` log limpo); bundle de produção confirmado contendo os novos rótulos (`Automações`, `Comercial`) e classes de cor (`signal-blue`); login real (`POST /api/v1/auth/dev-login`) e busca real (`GET /api/v1/projects`) confirmados funcionando de ponta a ponta, sem nenhuma mudança no backend.

## Deliberadamente fora desta fatia

Sidebar só com ícones (a referência usa isso, mas o CEO escolheu ícone + texto); barra de busca do topo da referência (não existe necessidade real de busca no hub hoje); abas horizontais secundárias da referência (o hub não tem sub-seções dentro de cada view hoje); `react-router` ou qualquer roteamento de URL real; qualquer tela nova, ação de escrita, ou mudança de comportamento; qualquer mudança em `apps/core-brain`; a decisão funcional maior (que entidade ganha capacidade de escrita, se alguma) — segue como conversa de elaboração separada, ainda não retomada.

## Critérios de aceite

- [ ] Nenhuma tela/funcionalidade/rota/chamada de API nova. Evidência: `git status` restrito a `apps/hub`.
- [ ] Sidebar fixa, ícone + texto, item ativo destacado. Evidência: `src/components/Sidebar.tsx`.
- [ ] "Sair" no rodapé da sidebar. Evidência: `src/components/Sidebar.tsx`.
- [ ] Cabeçalho horizontal removido. Evidência: `src/App.tsx`, sem `<header>`.
- [ ] Início continua existindo como atalho complementar. Evidência: `src/pages/HomePage.tsx`, cards mantidos.
- [ ] Nenhuma cor nova. Evidência: só classes já usadas nas Tasks 097/098.
- [ ] Sem `react-router`. Evidência: `package.json` sem nova dependência; `HubView` via `useState`.
- [ ] 9/9 testes passando, alteração de asserção documentada. Evidência: `npm test`; diff de `tests/LoginPage.test.tsx`.
- [ ] `typecheck`/`test`/`build` passando. Evidência: execução local.
- [ ] `npm audit` sem vulnerabilidades novas. Evidência: execução local.
- [ ] Verificação real com os dois servidores rodando. Evidência: log de HMR limpo, bundle inspecionado, login e busca real confirmados.
- [ ] Nenhuma mudança em `apps/core-brain`. Evidência: `git status --short` restrito a `apps/hub` (fora dos artefatos de autocrlf já conhecidos).
- [ ] Documentação atualizada. Evidência: `apps/hub/README.md` e Plano Mestre (seção 21).
- [ ] Nenhuma credencial, dado real, decisão de multi-organização. Evidência: nenhuma nova variável de ambiente.
- [ ] Conteúdo revisado e aprovado pelo CEO; encerramento em PR separada (Regra Fundamental 6).
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5).

## Riscos e gates humanos

Riscos: nenhum risco técnico novo — mudança estrutural de layout/navegação, sem lógica nova. Risco de a imagem de referência não estar mais acessível em contextos futuros — mitigado ao extraí-la do histórico persistido da sessão em vez de depender só da memória textual da análise anterior, e documentando aqui como foi recuperada, para que uma eventual iteração futura (abas horizontais secundárias, busca) tenha a mesma fonte visual disponível.

Gate vigente: aguardando revisão do diff e solicitação de merge, após a implementação completa e a validação local.

Histórico de gates desta task: encerramento da Task 098 → CEO pede reformulação estrutural com sidebar lateral, citando a mesma imagem de referência ("vamos reformular por favor, quero também que você leve a imagem que te enviei como referência") → recupero a imagem do histórico persistido e reanaliso a estrutura de navegação → proponho mapear os quatro itens já existentes para uma sidebar, pergunto ícone-só vs ícone+texto → CEO escolhe "Ícone + texto (Recomendado)" → apresento escopo técnico completo → CEO responde "confirmo".

## Revisão e entrega

Pendente — a apresentar ao CEO o diff completo, as validações locais (`typecheck`, `test` 9/9, `build`, `audit`, verificação real com os dois servidores) e o estado Git, solicitando o gate de merge antes de integrar esta mudança em `main`.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

Pendente — a executar antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5.
