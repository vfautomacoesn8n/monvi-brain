---
id: task-2026-097
type: task
title: "Hub interno — identidade visual alinhada à marca Monvi (reskin, sem funcionalidade nova)"
status: active
task_state: in-progress
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-20"
updated_at: "2026-08-20"
reviewed_at: null
review_cycle: on-change
sources:
  - 01_RAW/monvi/Monvi - Manual da marca.pdf
  - 02_WIKI/marketing/Identidade-visual.md
  - 02_WIKI/marketing/Manual-da-marca.md
  - 02_WIKI/marketing/Tom-de-voz.md
  - 02_WIKI/empresa/Monvi.md
  - 02_WIKI/estrategia/Posicionamento.md
  - 02_WIKI/estrategia/Principio-central.md
related:
  - 00_SYSTEM/tasks/done/TASK-2026-094-hub-interno-primeira-fatia.md
aliases:
  - Reskin visual do hub
  - Identidade visual Monvi no hub
  - Tailwind + shadcn no hub
tags: [hub, frontend, marca, identidade-visual, tailwind, design-system]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-097-hub-identidade-visual-marca.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/hub/README.md
  - apps/hub/package.json
  - apps/hub/package-lock.json
  - apps/hub/vite.config.ts
  - apps/hub/src/index.css
  - apps/hub/src/App.tsx
  - apps/hub/src/auth/LoginPage.tsx
  - apps/hub/src/components/
  - apps/hub/src/lib/
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
  - apps/hub/tests/
  - apps/hub/vitest.config.ts
  - apps/hub/tsconfig.json
  - apps/hub/index.html
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
  - Paleta de cores idêntica ao Manual da Marca Monvi V1.0 (Graphite, Off-White, Signal Blue e as três cores de apoio), como tokens de tema.
  - Tipografia Inter (corpo) e IBM Plex Mono (números/dados), auto-hospedadas via @fontsource, sem CDN externo.
  - Tailwind CSS v4 configurado via plugin nativo do Vite; componentes de UI (Button, Card, Input, Label) copiados para o repositório no padrão shadcn/ui, não instalados como pacote.
  - lucide-react para ícones.
  - Nenhum logo real usado — só o wordmark textual "MONVI", já que nenhum arquivo de logo oficial foi localizado no repositório.
  - Todos os 9 testes automatizados existentes continuam passando sem nenhuma alteração de asserção que mude o comportamento testado (mudanças de seletor/estrutura para acomodar o novo markup são aceitáveis, desde que o que está sendo verificado continue o mesmo).
  - npm run typecheck, npm test e npm run build passando em apps/hub.
  - Verificação real com os dois servidores de desenvolvimento rodando (não só testes) — confirmando que o CSS compilado contém os tokens de marca e que o login real continua funcionando de ponta a ponta.
  - Nenhuma mudança em apps/core-brain.
  - README.md de apps/hub e Plano Mestre atualizados, documentando a paleta, tipografia, bibliotecas escolhidas e a pendência do logo real.
  - Nenhuma credencial nova, nenhum dado real, nenhuma decisão de multi-organização.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a repaginacao visual das quatro telas ja existentes do hub, alinhada ao Manual da Marca Monvi V1.0, sem nenhuma tela nova, funcionalidade nova, ou mudanca de comportamento. Nao autoriza uso de um arquivo de logo real (nao localizado no repositorio); nao autoriza publicacao ou aprovacao formal do material de marca em si (que permanece status: review na Wiki — o CEO autorizou o USO para esta fatia, nao a aprovacao do manual); nao autoriza nenhuma mudanca em apps/core-brain; nao autoriza roteador de verdade, modo escuro, ou qualquer elemento visual alem do necessario para as quatro telas existentes; nao autoriza retomada de qualquer outra decisao pendente do projeto."
---

# Task 097 — Hub interno, identidade visual alinhada à marca Monvi

## Contexto

Após o encerramento da Task 096, o CEO pediu para elaborar juntos a próxima versão do hub antes de produzir qualquer coisa. Apresentei propostas de direção funcional (porta de entrada operacional, sala de controle de automações, hub de documentos, painel comercial, painel de governança) e o CEO ainda não fechou qual seguir — pediu para tratar isso como conversa de elaboração, não produção. Separadamente, perguntou minha proposta para o visual. Recomendei Tailwind + shadcn/ui, estética utilitária, mas sinalizei não saber se a Monvi já tinha identidade visual formal.

O CEO então pediu explicitamente: "Você é o Helpper, use o cérebro para e analisar a marca, preciso que você entenda tudo sobre a Monvi." Antes de propor qualquer coisa, investiguei o repositório e encontrei um Manual da Marca Monvi V1.0 completo — tanto o PDF original (`01_RAW/monvi/`, 15 painéis visuais, sem camada de texto) quanto documentos derivados já transcritos na Wiki (`02_WIKI/marketing/Identidade-visual.md`, `Manual-da-marca.md`, `Tom-de-voz.md`, e o posicionamento institucional em `02_WIKI/empresa/Monvi.md` e `02_WIKI/estrategia/`). Li o PDF diretamente (visualizei os 15 painéis) para confirmar a transcrição contra a fonte visual original, não só a versão já processada.

Apresentei um resumo fundamentado (paleta com códigos hex exatos, tipografia, grid, iconografia, tom de voz, princípio institucional "Menos tarefa manual. Mais resultado.") e uma proposta de direção visual concreta para o hub, sinalizando dois pontos em aberto: a ausência de um arquivo de logo real utilizável, e o fato de que todo esse material de marca está formalmente `status: review` (nunca aprovado). O CEO respondeu "Eu autorizo, vamos fazer a primeira versão e depois ir alinhando ela, você pode sugerir skills, repositórios e etc para criar isso" — propus o escopo técnico concreto (Tailwind v4, componentes shadcn/ui copiados, `@fontsource` para as fontes oficiais, `lucide-react` para ícones), e o CEO confirmou.

## Objetivo

Alinhar a identidade visual das quatro telas já existentes do hub (login, início, três dashboards) ao Manual da Marca Monvi V1.0, sem adicionar nenhuma tela, funcionalidade, ou chamada de API nova — um reskin puro, preparando o terreno visual para as próximas fatias funcionais que ainda serão decididas.

## Escopo executado

1. **Dependências novas** (`apps/hub`): `tailwindcss` + `@tailwindcss/vite` (v4, plugin nativo, sem PostCSS/Autoprefixer separados), `@fontsource/inter` + `@fontsource/ibm-plex-mono` (fontes oficiais, auto-hospedadas), `lucide-react` (ícones), `clsx` + `tailwind-merge` + `class-variance-authority` (utilitários do padrão shadcn/ui). 0 vulnerabilidades.
2. `vite.config.ts`: plugin `@tailwindcss/vite` adicionado.
3. `src/index.css`: reescrito — importa Tailwind e as fontes; define os tokens de cor exatos do manual (`--color-graphite: #424242`, `--color-off-white: #f5f5f3`, `--color-signal-blue: #1a4aff`, mais as três cores de apoio) via `@theme`, mapeados para classes utilitárias (`bg-off-white`, `text-graphite`, `border-signal-blue` etc.).
4. `src/lib/utils.ts` (novo): função `cn()` (padrão shadcn/ui, combina `clsx` + `tailwind-merge`).
5. `src/components/ui/` (novo): `button.tsx`, `card.tsx` (com `CardHeader`/`CardTitle`/`CardContent`), `input.tsx`, `label.tsx` — componentes copiados no padrão shadcn/ui, com variantes via `class-variance-authority` onde fazia sentido (botão: `default`/`outline`/`ghost`).
6. `src/components/Wordmark.tsx` (novo): substituto textual do logo ("MONVI™" em Inter bold) até existir um arquivo de logo real.
7. `src/App.tsx`, `src/auth/LoginPage.tsx`, `src/pages/HomePage.tsx`, `src/pages/CommercialDashboardPage.tsx`, `src/pages/AutomationsDashboardPage.tsx`, `src/pages/ProjectsDashboardPage.tsx`, `src/components/CountsCard.tsx`: reescritos para usar os novos componentes e tokens — mesma lógica, mesmos dados, mesmos textos visíveis (preservados deliberadamente onde testes dependiam deles, como o `<h1>Monvi Hub</h1>` da tela de login e os textos "Implantação Monvi Brain"/"Entrar" usados em asserções).

**Decisão de design**: mantive o texto do `<h1>` da tela de login como "Monvi Hub" (em vez de separar em Wordmark + título de página, que teria sido mais "correto" estruturalmente) especificamente para preservar a asserção `getByRole('heading', { name: 'Monvi Hub' })` do teste já existente, sem precisar alterá-la — uma escolha deliberada de não introduzir uma mudança de teste desnecessária para uma decisão puramente estética.

Validado localmente: `npm run typecheck` sem erros; `npm test` com **9/9 testes passando, sem nenhuma alteração de asserção** (confirma que foi puramente um reskin); `npm run build` sem erros; `npm audit` com 0 vulnerabilidades. Verificação real com os dois servidores de desenvolvimento rodando: CSS compilado confirmado contendo os tokens de marca (`--color-graphite`, `--font-sans: 'Inter'` etc.) via inspeção direta do bundle servido; login real (`POST /auth/dev-login`) confirmado funcionando de ponta a ponta, sem nenhuma mudança no backend.

**Nota operacional**: ao final da verificação, `TaskStop` nos processos de desenvolvimento background novamente encerrou só o processo-wrapper, não os processos filhos (`tsx watch`/`vite`) — mesmo padrão já documentado nas Tasks 095/096. Confirmado via `Get-NetTCPConnection` e encerrado manualmente antes de prosseguir.

## Deliberadamente fora desta fatia

Logo real (arquivo vetorial oficial não localizado — o PDF do manual não tem camada extraível); aprovação formal do material de marca em si (que segue `status: review` na Wiki — o CEO autorizou o *uso*, não a aprovação do manual); qualquer tela nova, ação de escrita, ou mudança de comportamento; roteador de verdade (`react-router`); modo escuro; qualquer mudança em `apps/core-brain`.

## Critérios de aceite

- [x] Nenhuma tela/funcionalidade/chamada de API nova. Evidência: `git status` restrito a `apps/hub`; nenhuma mudança em `src/api/`.
- [x] Paleta idêntica ao manual. Evidência: `src/index.css`, tokens com os hex exatos da seção visual 8.
- [x] Tipografia oficial, auto-hospedada. Evidência: `@fontsource/inter`/`@fontsource/ibm-plex-mono` nas dependências; sem `<link>` para Google Fonts em `index.html`.
- [x] Tailwind v4 + componentes shadcn/ui copiados. Evidência: `vite.config.ts`, `src/components/ui/*.tsx`.
- [x] `lucide-react` para ícones. Evidência: usado em `App.tsx` (LogOut), `HomePage.tsx` (Briefcase/TrendingUp/Workflow), `ProjectsDashboardPage.tsx` (ArrowLeft).
- [x] Sem logo real, só wordmark textual. Evidência: `src/components/Wordmark.tsx`, comentário explicando a ausência do arquivo oficial.
- [x] 9/9 testes passando, sem alteração de asserção que mude o comportamento testado. Evidência: `npm test`, diff de `tests/` vazio.
- [x] `typecheck`/`test`/`build` passando. Evidência: execução local.
- [x] Verificação real com os dois servidores rodando. Evidência: CSS bundle inspecionado, login real confirmado.
- [x] Nenhuma mudança em `apps/core-brain`. Evidência: `git status --short` restrito a `apps/hub` (fora dos dois artefatos de autocrlf já conhecidos).
- [x] Documentação atualizada. Evidência: `apps/hub/README.md` (nova seção de identidade visual) e Plano Mestre (seção 21 estendida).
- [x] Nenhuma credencial, dado real, decisão de multi-organização. Evidência: nenhuma nova variável de ambiente, nenhum dado real usado.
- [ ] Conteúdo revisado e aprovado pelo CEO; encerramento em PR separada (Regra Fundamental 6). Pendente do gate de merge.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente, será executada antes do gate de encerramento.

## Riscos e gates humanos

Riscos: o material de marca usado está formalmente `status: review` — se o manual mudar numa revisão futura (cores, tipografia), o hub precisará ser reajustado; isso é esperado e aceito pelo CEO ("vamos fazer a primeira versão e depois ir alinhando"). A ausência de um logo real é uma lacuna visível (o wordmark textual é claramente um substituto, não uma tentativa de recriar o logo verdadeiro — evita o uso proibido de "recriar ou redesenhar a tipografia do logo", listado como uso proibido no próprio manual). Nenhum risco técnico novo — mudança puramente de apresentação, sem lógica nova.

Gate vigente: aguardando autorização do CEO para o merge do PR de implementação.

Histórico de gates desta task: encerramento da Task 096 → CEO pede para elaborar o hub antes de produzir → apresento propostas funcionais e visuais → CEO pergunta sobre visual → recomendo Tailwind + shadcn, mas sinalizo desconhecer a identidade da Monvi → CEO instrui: "Você é o Helpper, use o cérebro... preciso que você entenda tudo sobre a Monvi" → pesquiso o Manual da Marca (PDF original + Wiki) antes de propor qualquer coisa → apresento síntese fundamentada com dois pontos em aberto (logo real, status review) → CEO responde "Eu autorizo, vamos fazer a primeira versão e depois ir alinhando ela, você pode sugerir skills, repositórios e etc" → proponho o escopo técnico concreto → CEO confirma ("Confirmo").

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test` 9/9, `build`, verificação real com os dois servidores) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
