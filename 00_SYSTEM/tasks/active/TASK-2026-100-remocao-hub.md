---
id: task-2026-100
type: task
title: "Remoção completa do Hub interno (apps/hub) e de sua documentação de governança, a pedido explícito do CEO"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-26"
updated_at: "2026-08-26"
review_cycle: on-change
sources: []
related:
  - 00_SYSTEM/tasks/done/TASK-2026-099-hub-sidebar-navegacao.md
aliases:
  - Remoção do hub
  - Limpeza do hub
tags: [hub, remocao, limpeza, governanca]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-100-remocao-hub.md
  - 00_SYSTEM/tasks/done/TASK-2026-100-remocao-hub.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/hub/
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/registries/
  - 01_RAW/
  - 02_WIKI/
  - apps/core-brain/
forbidden_paths:
  - .git/
  - packages/
  - infrastructure/
  - 03_OPERATIONS/decisoes/
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
requires_review: false
acceptance_criteria:
  - apps/hub removido por completo do controle de versão e do disco (código, node_modules, dist).
  - As quatro tasks que eram sobre o hub especificamente (094, 097, 098, 099) removidas de 00_SYSTEM/tasks/done/.
  - Nenhuma alteração em apps/core-brain — inclusive o que foi construído lá especificamente para o hub (CORS, HUB_ORIGIN) permanece intacto, por ser capacidade própria do core-brain.
  - Tasks 095 (Postgres local) e 096 (person_role/RBAC real) preservadas sem alteração — não são sobre o hub, são infraestrutura/segurança do core-brain que só validou via hub.
  - changes.jsonl não reescrito nem teve nenhuma entrada removida — só uma nova entrada documentando esta remoção foi adicionada, preservando o histórico íntegro.
  - Plano Mestre atualizado — seção 21 substituída por uma nota histórica de remoção; menção ao hub na seção 19 (Estado atual) também atualizada, para que o documento continue refletindo o estado real do código.
  - apps/core-brain continua compilando e passando em typecheck/build normalmente após a remoção.
  - Nenhuma credencial nova, nenhum dado real, nenhuma decisão de multi-organização.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código/estrutura do repositório, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a remocao do pacote apps/hub e das quatro tasks de governanca que eram especificamente sobre ele (094, 097, 098, 099), a pedido explicito do CEO. Nao autoriza nenhuma mudanca em apps/core-brain, nem reversao das Tasks 095 e 096 (que sao sobre o core-brain, nao sobre o hub). Nao autoriza reescrita ou remocao de entradas historicas de changes.jsonl. Nao autoriza nenhuma decisao sobre um futuro frontend — a remocao nao implica nem exclui retomar esse trabalho depois, sob nova definicao explicita do CEO."
---

# Task 100 — Remoção completa do Hub interno

## Contexto

Depois do encerramento da Task 099 (sidebar de navegação), o CEO fez uma pergunta de esclarecimento sobre como ele e o Filipe ativariam "seus próprios" Helppers — uma questão de identidade/conta, não de implementação. Na sequência dessa conversa, ele deu uma instrução geral de processo: "a partir de agora, implemente apenas o que eu definir o que precisa ser implementado" — uma correção explícita ao padrão que eu vinha seguindo nas Tasks 097-099 (propor escopo completo logo depois de uma pergunta exploratória, no mesmo turno).

Em seguida, o CEO definiu explicitamente o que precisa ser implementado: "Eu quero que você faça uma limpa e remova tudo do projeto que estamos fazendo do Hub até agora", com a ressalva "Cuidado para não remover arquivos importantes, exclua o Hub do cérebro apenas".

Antes de executar, fiz um inventário completo de tudo que menciona "hub" no repositório, para não remover nada além do que é de fato o Hub: `apps/hub` inteiro, e quatro tasks que são sobre o hub especificamente (094 — criação, 097 — identidade visual, 098 — modo escuro, 099 — sidebar). Identifiquei que as Tasks 095 (validação real de Postgres local) e 096 (`person_role`/RBAC real) mencionam o hub de passagem, mas são sobre o core-brain — decidi preservá-las, por não serem "o projeto do Hub" em si, mas infraestrutura/segurança do backend que só foi validada através do hub.

## Objetivo

Remover completamente o Hub interno (`apps/hub`) e a documentação de governança que é especificamente sobre ele, sem tocar em nada do core-brain ou em trabalho de infraestrutura/segurança que só coincidentemente passou pelo hub.

## Escopo executado

1. `apps/hub/` removido do controle de versão (`git rm -r`) e do disco, incluindo `node_modules/` e `dist/` (nunca versionados, mas limpos fisicamente a pedido do CEO — "faça uma limpa").
2. Antes da remoção física, identifiquei e encerrei um processo `vite` órfão que ainda mantinha um handle aberto no diretório (impedindo a remoção no Windows com "Device or resource busy") — mesmo padrão de processos de desenvolvimento órfãos já documentado nas Tasks 095/096/097/099, desta vez descoberto via `Get-CimInstance Win32_Process` filtrando por linha de comando contendo "hub", não só pela porta.
3. `00_SYSTEM/tasks/done/TASK-2026-094-hub-interno-primeira-fatia.md`, `TASK-2026-097-hub-identidade-visual-marca.md`, `TASK-2026-098-hub-modo-escuro-premium.md`, `TASK-2026-099-hub-sidebar-navegacao.md` removidas via `git rm`.
4. `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: a seção 21 (antes "Hub interno (frontend)", com o histórico completo das Tasks 094-099) foi substituída por uma nota histórica curta, documentando que o hub existiu, quando, e que foi removido nesta task, a pedido do CEO — sem apagar o fato de que ele existiu, já que isso seria inconsistente com o restante do documento (que se declara "atualizado após verificação direta do código"). A menção ao hub na seção 19 ("Estado atual") também foi atualizada, com o mesmo raciocínio.
5. `00_SYSTEM/logs/changes.jsonl`: nenhuma entrada histórica foi alterada ou removida — é um log de auditoria append-only, e reescrevê-lo destruiria a rastreabilidade de tudo que já foi decidido e executado. Uma nova entrada foi adicionada documentando esta remoção.
6. `apps/core-brain/` não foi tocado — inclusive o `@fastify/cors`/`HUB_ORIGIN` (adicionados na Task 094 especificamente para o hub) permanecem, por serem capacidade própria do core-brain, independente do hub existir. As Tasks 095 e 096 (Postgres local, `person_role`) permanecem intactas em `00_SYSTEM/tasks/done/`.

Validado localmente: `apps/core-brain` continua com `npm run typecheck` e `npm run build` limpos após a remoção — confirmando que a remoção do hub não teve nenhum efeito colateral no backend (esperado, já que não havia dependência de workspace entre os dois pacotes).

## Deliberadamente fora desta fatia

Qualquer mudança em `apps/core-brain`; reversão das Tasks 095 e 096; reescrita ou remoção de entradas históricas de `changes.jsonl`; qualquer decisão sobre um futuro frontend — a remoção não é uma rejeição definitiva da ideia de um hub, é a remoção do que existia; se e quando um frontend for retomado, será uma decisão nova do CEO, não uma continuação automática deste trabalho.

## Critérios de aceite

- [ ] `apps/hub` removido por completo (controle de versão e disco). Evidência: `git status`, `find apps/`.
- [ ] Tasks 094/097/098/099 removidas de `done/`. Evidência: `git status`.
- [ ] Nenhuma mudança em `apps/core-brain`. Evidência: `git status --short`.
- [ ] Tasks 095/096 preservadas sem alteração. Evidência: `git status` não lista essas tasks.
- [ ] `changes.jsonl` sem reescrita — só uma entrada nova. Evidência: diff do arquivo mostra só adição no final.
- [ ] Plano Mestre atualizado (seção 21 e menção na seção 19). Evidência: diff do arquivo.
- [ ] `apps/core-brain` continua compilando/passando. Evidência: `npm run typecheck`/`npm run build` locais e pós-merge.
- [ ] Nenhuma credencial, dado real, decisão de multi-organização. Evidência: nenhuma nova variável de ambiente, nenhuma decisão funcional tomada.
- [ ] Conteúdo revisado e aprovado pelo CEO; encerramento em PR separada (Regra Fundamental 6).
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5).

## Riscos e gates humanos

Riscos: a remoção de tasks formalmente encerradas (094, 097, 098, 099) quebra o padrão até aqui estabelecido de que `done/` é um registro permanente e imutável — decidi que, neste caso específico, a instrução explícita do CEO ("remova tudo do projeto que estamos fazendo do Hub") justifica a exceção, e que `changes.jsonl` (nunca reescrito) continua preservando o rastro histórico completo dessas quatro tasks mesmo com os arquivos `.md` removidos — nenhuma informação foi de fato perdida, só deixou de estar visível na árvore atual do repositório. Nenhum risco técnico — a remoção não afeta nenhum sistema em produção (o hub nunca foi implantado, rodava só localmente).

Gate vigente: aguardando revisão do diff e solicitação de merge, após a execução completa e a validação local.

Histórico de gates desta task: encerramento da Task 099 → CEO pergunta sobre identidade/contas do Helpper para Victor e Filipe (conversa exploratória, sem implementação) → CEO instrui explicitamente: "a partir de agora, implemente apenas o que eu definir o que precisa ser implementado" → CEO define o escopo: "Eu quero que você faça uma limpa e remova tudo do projeto que estamos fazendo do Hub até agora... exclua o Hub do cérebro apenas" → executo a remoção seguindo esse escopo.

## Revisão e entrega

Pendente — a apresentar ao CEO o diff completo (remoção) e o estado Git, solicitando o gate de merge antes de integrar esta mudança em `main`.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

Pendente — a executar antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5.
