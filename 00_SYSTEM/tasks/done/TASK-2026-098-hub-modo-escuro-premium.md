---
id: task-2026-098
type: task
title: "Hub interno — modo escuro premium, fiel à marca Monvi (reskin, sem funcionalidade nova)"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-20"
updated_at: "2026-08-20"
reviewed_at: "2026-08-20T16:35:00-03:00"
review_cycle: on-change
sources:
  - 01_RAW/monvi/Monvi - Manual da marca.pdf
  - 02_WIKI/marketing/Identidade-visual.md
  - 02_WIKI/marketing/Manual-da-marca.md
related:
  - 00_SYSTEM/tasks/done/TASK-2026-097-hub-identidade-visual-marca.md
aliases:
  - Modo escuro do hub
  - Dark mode premium Monvi
  - Reskin escuro do hub
tags: [hub, frontend, marca, identidade-visual, modo-escuro, design-system]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-098-hub-modo-escuro-premium.md
  - 00_SYSTEM/tasks/done/TASK-2026-098-hub-modo-escuro-premium.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/hub/README.md
  - apps/hub/src/index.css
  - apps/hub/src/App.tsx
  - apps/hub/src/auth/LoginPage.tsx
  - apps/hub/src/components/
  - apps/hub/src/pages/
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
  - apps/hub/src/auth/AuthContext.tsx
  - apps/hub/src/lib/
  - apps/hub/tests/
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
  - Nenhuma tela nova, nenhuma funcionalidade nova, nenhuma chamada de API nova — só CSS/markup das quatro telas já existentes (login, início, três dashboards).
  - Nenhuma cor nova além das seis já oficiais do Manual da Marca Monvi V1.0 (Graphite, Off-White, Signal Blue, Deep Graphite, Medium Gray, Light Gray) — só recombinação de papéis.
  - Modo escuro como tema único do hub (não é um toggle claro/escuro).
  - Glow sutil em Signal Blue atrás dos números principais dos cards de contagem.
  - Cards com profundidade visual (fundo mais claro que o da página, borda sutil).
  - Badges/pills para as contagens por status/tipo, no lugar da lista simples anterior.
  - Nenhum gráfico de tendência histórica fabricado — a API só expõe contagens do momento atual, sem série temporal.
  - Todos os 9 testes automatizados existentes continuam passando sem nenhuma alteração de asserção que mude o comportamento testado.
  - npm run typecheck, npm test e npm run build passando em apps/hub.
  - npm audit sem vulnerabilidades novas.
  - Verificação real com os dois servidores de desenvolvimento rodando (não só testes) — confirmando que o CSS compilado contém os tokens de modo escuro e que o login real e os dashboards continuam funcionando de ponta a ponta.
  - Nenhuma mudança em apps/core-brain.
  - README.md de apps/hub e Plano Mestre atualizados, documentando o remapeamento de cores e a decisão de não fabricar o gráfico histórico.
  - Nenhuma credencial nova, nenhum dado real, nenhuma decisão de multi-organização.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a troca do tema visual das quatro telas ja existentes do hub para modo escuro, usando somente as seis cores ja oficiais do Manual da Marca Monvi V1.0 recombinadas, sem nenhuma cor nova, tela nova, funcionalidade nova, ou mudanca de comportamento. Nao autoriza replicar o grafico de tendencia historica da imagem de referencia (a API nao expoe serie temporal, e fabricar dados fictícios para isso e explicitamente recusado). Nao autoriza uso de um arquivo de logo real (nao localizado no repositorio); nao autoriza publicacao ou aprovacao formal do material de marca em si (que permanece status: review na Wiki); nao autoriza nenhuma mudanca em apps/core-brain; nao autoriza roteador de verdade, toggle claro/escuro, ou qualquer elemento visual alem do necessario para as quatro telas existentes; nao autoriza retomada de qualquer outra decisao pendente do projeto."
---

# Task 098 — Hub interno, modo escuro premium fiel à marca Monvi

## Contexto

Após o encerramento da Task 097 (identidade visual alinhada à marca Monvi, tema claro), o CEO enviou uma imagem de referência — um screenshot de um dashboard cripto/Web3 em modo escuro (fundo quase preto, glow em verde atrás dos números, cards ricos com bordas sutis, badges de status, pilha de avatares, gráfico de tendência histórica) — com a mensagem: "Eu quero algo visualmente mais premium, analise a imagem de referência para você ter uma noção do que eu quero".

Analisei a imagem e identifiquei uma tensão real com o Manual da Marca Monvi V1.0: a referência é escura e usa verde como acento, enquanto o manual é dominado por Off-White (55% recomendado) e usa Signal Blue como único acento (25%). Em vez de só copiar a referência ou recusá-la, separei explicitamente **técnica** (modo escuro, glow, riqueza dos cards, badges) de **cor** (verde da referência vs. Signal Blue da Monvi) e apresentei essa escolha ao CEO via pergunta estruturada, com duas opções: seguir a referência literalmente (introduzindo verde, quebrando a paleta oficial) ou manter a técnica premium remapeada para as cores já oficiais da Monvi. O CEO escolheu **"Premium, mas fiel à marca Monvi (Recomendado)"**.

Propus então o escopo concreto — modo escuro como novo tema único do hub, usando só as seis cores já oficiais, glow em Signal Blue atrás dos números principais, badges/pills no lugar da lista simples de contagens, e recusa explícita de fabricar o gráfico de tendência histórica da referência (a API do hub só expõe contagens do momento atual, sem série temporal) — e o CEO respondeu **"Autorizado"**.

## Objetivo

Trocar o tema visual das quatro telas já existentes do hub (login, início, três dashboards) de claro para escuro, aplicando as técnicas de "premium" pedidas pelo CEO (glow, profundidade, badges) usando exclusivamente as seis cores já oficiais do Manual da Marca Monvi V1.0, sem adicionar nenhuma tela, funcionalidade, cor nova, ou dado fabricado.

## Escopo executado

1. `src/index.css`: bloco `body` invertido — fundo `deep-graphite` (antes `off-white`), texto `off-white` (antes `graphite`). Tokens de cor (`@theme`) inalterados — mesmas seis cores da Task 097, só a combinação de papéis mudou.
2. `src/components/ui/card.tsx`: `Card` com fundo `graphite` (mais claro que o fundo da página — cria profundidade) e borda quase invisível `border-off-white/10`; `CardTitle` em `medium-gray`; `CardHeader`/`CardContent` com `relative` para suportar filhos posicionados absolutamente. Novo componente exportado `CardGlow` — um `div` `aria-hidden`, `pointer-events-none`, absolutamente posicionado, com gradiente `from-signal-blue/20 to-transparent`, mesma técnica visual da referência (glow atrás do conteúdo) na cor de acento oficial da marca em vez de verde.
3. `src/components/ui/button.tsx`: variantes `outline` e `ghost` recoloridas para `off-white`-based (visíveis contra o novo fundo escuro); variante `default` (fundo `signal-blue`) mantida sem alteração, já funcionava sobre fundo escuro.
4. `src/components/ui/input.tsx` e `src/components/ui/label.tsx`: bordas, fundo e texto recoloridos para os equivalentes escuros (`border-off-white/15`, `bg-deep-graphite`, `text-off-white`).
5. `src/components/Wordmark.tsx`: prop `dark` com default alterado de `false` para `true` (o cabeçalho do hub agora é sempre escuro).
6. `src/App.tsx`: fundo do container principal e borda do cabeçalho recoloridos para escuro.
7. `src/auth/LoginPage.tsx`, `src/pages/HomePage.tsx`, `src/pages/CommercialDashboardPage.tsx`, `src/pages/AutomationsDashboardPage.tsx`, `src/pages/ProjectsDashboardPage.tsx`: títulos e texto de erro recoloridos para os equivalentes escuros (`text-off-white`, `text-red-400` no lugar de `text-red-600`, mais legível sobre fundo escuro).
8. `src/components/CountsCard.tsx`: número principal envolto por `CardGlow`; a lista simples (`<ul>`) de contagens por chave (`byKey`) substituída por badges/pills (`rounded-full`, borda sutil, fundo `deep-graphite`).

**Deliberadamente não implementado**: o gráfico de tendência histórica presente na imagem de referência. A API do hub (`/commercial/dashboard`, `/automations/dashboard`, `/projects/:id/dashboard`) só expõe contagens agregadas do momento atual — não existe endpoint de série temporal. Fabricar dados fictícios para preencher um gráfico teria sido inventar informação apresentada como real; essa recusa foi comunicada ao CEO antes da autorização do escopo, e ele autorizou o escopo sem o gráfico.

Validado localmente: `npm run typecheck` sem erros; `npm test` com **9/9 testes passando, sem nenhuma alteração de asserção**; `npm run build` sem erros; `npm audit` com 0 vulnerabilidades. Verificação real com os dois servidores de desenvolvimento rodando: CSS compilado confirmado contendo os tokens de modo escuro (`deep-graphite`, `from-signal-blue`) via inspeção direta do bundle servido; login real (`POST /api/v1/auth/dev-login`) e busca de dashboard (`GET /api/v1/commercial/dashboard`) confirmados funcionando de ponta a ponta, sem nenhuma mudança no backend.

**Nota operacional**: ao final da verificação, os processos de desenvolvimento em background precisaram ser encerrados manualmente via `Get-NetTCPConnection`/`Stop-Process` nas portas 3000 e 5173 — mesmo padrão já documentado nas Tasks 095/096/097.

## Deliberadamente fora desta fatia

Gráfico de tendência histórica (sem dados de série temporal disponíveis na API); toggle claro/escuro (o escuro é o único tema); qualquer cor além das seis já oficiais; logo real (arquivo oficial não localizado); aprovação formal do material de marca em si (segue `status: review`); qualquer tela nova, ação de escrita, ou mudança de comportamento; qualquer mudança em `apps/core-brain`.

## Critérios de aceite

- [x] Nenhuma tela/funcionalidade/chamada de API nova. Evidência: `git status --short` restrito a `apps/hub` + governança/documentação.
- [x] Nenhuma cor nova. Evidência: `src/index.css` — tokens `@theme` inalterados desde a Task 097.
- [x] Modo escuro como tema único. Evidência: `body` em `src/index.css` sem media query ou classe condicional de tema.
- [x] Glow em Signal Blue atrás dos números. Evidência: `CardGlow` em `card.tsx`, usado em `CountsCard.tsx`.
- [x] Cards com profundidade. Evidência: `Card` com `bg-graphite` sobre página `bg-deep-graphite`.
- [x] Badges/pills para contagens. Evidência: `CountsCard.tsx`, `byKey` renderizado como `rounded-full`.
- [x] Nenhum gráfico histórico fabricado. Evidência: nenhum novo componente de gráfico, nenhuma nova chamada de API.
- [x] 9/9 testes passando, sem alteração de asserção. Evidência: `npm test` (local e pós-merge), diff de `tests/` vazio.
- [x] `typecheck`/`test`/`build` passando. Evidência: execução local e reexecução direta contra `main` sincronizado após o merge.
- [x] `npm audit` sem vulnerabilidades novas. Evidência: 0 vulnerabilidades, execução local.
- [x] Verificação real com os dois servidores rodando. Evidência: CSS bundle inspecionado (`deep-graphite`, `from-signal-blue` presentes), login real (`POST /api/v1/auth/dev-login`) e `GET /api/v1/commercial/dashboard` confirmados de ponta a ponta.
- [x] Nenhuma mudança em `apps/core-brain`. Evidência: `git status --short` restrito a `apps/hub` (fora dos artefatos de autocrlf já conhecidos); `typecheck`/`build` de `apps/core-brain` reconfirmados limpos pós-merge.
- [x] Documentação atualizada. Evidência: `apps/hub/README.md` (seção "Modo escuro premium") e Plano Mestre (seção 21, parágrafo Task 098).
- [x] Nenhuma credencial, dado real, decisão de multi-organização. Evidência: nenhuma nova variável de ambiente.
- [x] Conteúdo revisado e aprovado pelo CEO; encerramento em PR separada (Regra Fundamental 6). Evidência: gate `Autorizado` para o merge do PR #123, integrado em `12ab16d0b6b56acf537023abd30bc324fbf345e2`; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo.

## Riscos e gates humanos

Riscos: o material de marca usado permanece formalmente `status: review` — se o manual mudar numa revisão futura, o hub precisará ser reajustado novamente, risco já aceito desde a Task 097. Risco de subjetividade visual ("premium" é uma percepção, não um critério objetivo) — mitigado apresentando a tensão de cores explicitamente ao CEO antes de implementar, em vez de decidir sozinho. Nenhum risco técnico novo — mudança puramente de apresentação, sem lógica nova, sem dado fabricado.

Gate vigente: encerrado. O merge do PR #123 foi autorizado (`Autorizado`) e executado por squash em `12ab16d0b6b56acf537023abd30bc324fbf345e2`. Esta task está formalmente concluída.

Histórico de gates desta task: encerramento da Task 097 → CEO envia imagem de referência ("Eu quero algo visualmente mais premium, analise a imagem de referência para você ter uma noção do que eu quero") → analiso a imagem, identifico a tensão de paleta com o manual, apresento via pergunta estruturada → CEO escolhe "Premium, mas fiel à marca Monvi (Recomendado)" → proponho escopo concreto (modo escuro único, glow em Signal Blue, badges, recusa explícita do gráfico fabricado) → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR #123) → `Autorizado` (merge do PR #123, integrado em `12ab16d0b6b56acf537023abd30bc324fbf345e2`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test` 9/9, `build`, `audit` 0 vulnerabilidades, verificação real com os dois servidores) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-20

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #123.

**Integração**: PR #123 integrado em `main` via squash merge, commit `12ab16d0b6b56acf537023abd30bc324fbf345e2`, em 2026-08-20. Escopo integrado: exatamente os 17 arquivos previstos em `allowed_paths` — criação de `00_SYSTEM/tasks/active/TASK-2026-098-hub-modo-escuro-premium.md`; edição de `src/index.css`, `src/App.tsx`, `src/auth/LoginPage.tsx`, `src/components/CountsCard.tsx`, `src/components/Wordmark.tsx`, `src/components/ui/{button,card,input,label}.tsx`, as quatro páginas em `src/pages/`, `apps/hub/README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma alteração em `apps/core-brain`, nenhuma dependência nova, nenhuma cor nova.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `75f3974..12ab16d`), confirmei ausência de processos de desenvolvimento órfãos nas portas 3000/5173 antes de testar, e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — em `apps/hub`: typecheck limpo, **9/9 testes passando**, build sem erros; em `apps/core-brain`: typecheck e build também limpos, confirmando que não foi afetado.

**Estado final**: o hub interno agora usa modo escuro como tema visual único, remapeando as seis cores já oficiais do Manual da Marca V1.0 (Deep Graphite como fundo, Graphite como fundo dos cards, Off-White como texto principal, Signal Blue como único acento/glow, Medium Gray como texto secundário), aplicado às quatro telas já existentes, sem nenhuma cor nova, mudança de comportamento, ou dado fabricado. O gráfico de tendência histórica da imagem de referência foi deliberadamente não implementado, por falta de dados de série temporal reais na API. A direção funcional das próximas fatias do hub segue em aberto, como conversa de elaboração distinta desta task.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhuma tela nova, funcionalidade nova, cor nova, ou mudança de comportamento foi introduzida; nenhuma alteração em `apps/core-brain`; nenhuma credencial ou dado real; nenhuma decisão de multi-organização; nenhum dado fabricado para o gráfico histórico recusado.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: trocar o tema visual do hub para modo escuro "premium", em resposta a uma imagem de referência trazida pelo CEO, sem quebrar a paleta oficial da marca Monvi e sem fabricar dados para preencher lacunas visuais da referência.

**Resultado conhecido**: o hub agora tem um modo escuro único, tecnicamente equivalente à referência (glow, profundidade, badges) mas inteiramente dentro da paleta oficial já existente; os 9 testes continuam passando sem nenhuma alteração de asserção, confirmando reskin puro.

**O que ajudou**: separar explicitamente *técnica* de *cor* antes de propor qualquer coisa — em vez de tratar "seguir a referência" como uma decisão binária (sim/não), decompor o pedido em partes independentes permitiu atender ao pedido real do CEO ("mais premium") sem sacrificar a identidade de marca já estabelecida na Task 097. Apresentar essa decomposição como pergunta estruturada, em vez de decidir sozinho, deixou a escolha de fato nas mãos do CEO.

**O que dificultou**: nenhuma dificuldade técnica nova — a estrutura de componentes (`Card`, `Button`, `Input`, `Label`) já criada na Task 097 tornou o reskin mecânico (trocar tokens de cor arquivo por arquivo), sem necessidade de refatoração estrutural.

**Surpresas**: nenhuma surpresa técnica. A única observação notável é que o pedido do CEO ("mais premium") era, à primeira vista, uma tensão direta com o compromisso de fidelidade à marca da Task 097 — mas se resolveu bem porque as duas coisas (estética premium, fidelidade de cor) eram na verdade independentes uma da outra.

**Riscos materializados**: nenhum novo. O padrão já conhecido de processos de desenvolvimento órfãos (Tasks 095/096/097) foi verificado preventivamente antes dos testes pós-merge, sem incidente desta vez.

**Perguntas em aberto**: as mesmas da Task 097 — direção funcional das próximas fatias do hub, disponibilidade futura de um logo real, aprovação formal do material de marca. Adicionalmente: se/quando a API do hub ganhará dados de série temporal reais, o que reabriria a possibilidade do gráfico de tendência histórica recusado nesta task.

**Ações propostas**: nenhuma ação de processo nova — a prática de separar tecnica de decisão visual de decisão de conteúdo/dados (não fabricar o gráfico) já reflete os princípios já estabelecidos nesta sessão.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
