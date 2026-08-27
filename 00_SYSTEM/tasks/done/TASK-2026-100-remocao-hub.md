---
id: task-2026-100
type: task
title: "Remoção completa do Hub interno (apps/hub) e de sua documentação de governança, a pedido explícito do CEO"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-26"
updated_at: "2026-08-26"
reviewed_at: "2026-08-26T11:00:00-03:00"
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

- [x] `apps/hub` removido por completo (controle de versão e disco). Evidência: `git status`, `find apps/` (pós-merge só lista `apps/core-brain`).
- [x] Tasks 094/097/098/099 removidas de `done/`. Evidência: `git status`, diff do PR #127.
- [x] Nenhuma mudança em `apps/core-brain`. Evidência: `git status --short` restrito a `apps/hub` + as 4 tasks + governança/documentação.
- [x] Tasks 095/096 preservadas sem alteração. Evidência: `git status` não lista essas tasks; arquivos confirmados intactos em `done/` pós-merge.
- [x] `changes.jsonl` sem reescrita — só uma entrada nova. Evidência: diff mostrou 1 inserção, 0 remoções.
- [x] Plano Mestre atualizado (seção 21 e menção na seção 19). Evidência: diff do arquivo, integrado no PR #127.
- [x] `apps/core-brain` continua compilando/passando. Evidência: `npm run typecheck`/`npm run build` locais e reexecutados diretamente contra `main` sincronizado pós-merge — ambos limpos nas duas ocasiões.
- [x] Nenhuma credencial, dado real, decisão de multi-organização. Evidência: nenhuma nova variável de ambiente, nenhuma decisão funcional tomada.
- [x] Conteúdo revisado e aprovado pelo CEO; encerramento em PR separada (Regra Fundamental 6). Evidência: gate `Pode fazer Squash` para o merge do PR #127, integrado em `e38751c132fc3e3ac7a790e8ac9bb16e92004cfc`, após o CEO confirmar explicitamente (pergunta e resposta registradas no histórico de gates) que o hub removido era de fato o que rodava em `localhost:5173` mostrando as métricas; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo.

## Riscos e gates humanos

Riscos: a remoção de tasks formalmente encerradas (094, 097, 098, 099) quebra o padrão até aqui estabelecido de que `done/` é um registro permanente e imutável — decidi que, neste caso específico, a instrução explícita do CEO ("remova tudo do projeto que estamos fazendo do Hub") justifica a exceção, e que `changes.jsonl` (nunca reescrito) continua preservando o rastro histórico completo dessas quatro tasks mesmo com os arquivos `.md` removidos — nenhuma informação foi de fato perdida, só deixou de estar visível na árvore atual do repositório. Nenhum risco técnico — a remoção não afeta nenhum sistema em produção (o hub nunca foi implantado, rodava só localmente).

Gate vigente: encerrado. O merge do PR #127 foi autorizado ("Pode fazer Squash") e executado por squash em `e38751c132fc3e3ac7a790e8ac9bb16e92004cfc`. Esta task está formalmente concluída.

Histórico de gates desta task: encerramento da Task 099 → CEO pergunta sobre identidade/contas do Helpper para Victor e Filipe (conversa exploratória, sem implementação) → CEO instrui explicitamente: "a partir de agora, implemente apenas o que eu definir o que precisa ser implementado" → CEO define o escopo: "Eu quero que você faça uma limpa e remova tudo do projeto que estamos fazendo do Hub até agora... exclua o Hub do cérebro apenas" → executo a remoção seguindo esse escopo, abro o PR #127 → antes de autorizar, o CEO pergunta se o hub removido era de fato "o HUB que funcionava em localhost... onde mostra as métricas" → confirmo explicitamente, listando concretamente o que foi removido (login, sidebar, os cards de métricas) versus o que permanece (a API/dados em si, em `apps/core-brain`) → "Pode fazer Squash" (merge do PR #127, integrado em `e38751c132fc3e3ac7a790e8ac9bb16e92004cfc`).

## Revisão e entrega

Apresentei o diff completo (remoção) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`. O CEO fez uma pergunta de verificação antes de autorizar — se o hub removido era o mesmo que rodava em `localhost` mostrando métricas — que respondi de forma concreta antes de prosseguir.

## Encerramento — 2026-08-26

**Gate de encerramento**: o CEO autorizou ("Pode fazer Squash") o squash merge do PR #127, após confirmar o escopo exato da remoção.

**Integração**: PR #127 integrado em `main` via squash merge, commit `e38751c132fc3e3ac7a790e8ac9bb16e92004cfc`, em 2026-08-26. Escopo integrado: exatamente os 41 arquivos previstos em `allowed_paths` — remoção de `apps/hub/` (33 arquivos) e das 4 tasks (094, 097, 098, 099); criação de `00_SYSTEM/tasks/active/TASK-2026-100-remocao-hub.md`; edição de `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md` e `changes.jsonl` (só adição, sem reescrita). Nenhuma alteração em `apps/core-brain`, nenhuma alteração nas Tasks 095/096.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `94391b7..e38751c`), confirmei que `apps/hub` não existe mais no disco (`find apps/` lista só `apps/core-brain`), e reexecutei `npm run typecheck` e `npm run build` de `apps/core-brain` diretamente contra o `main` já integrado — ambos limpos, confirmando zero efeito colateral da remoção no backend.

**Estado final**: o Hub interno (`apps/hub`) não existe mais no repositório, nem em disco. A documentação de governança específica sobre ele (Tasks 094, 097, 098, 099) também foi removida de `done/`, mas seu histórico completo permanece rastreável em `changes.jsonl` (nunca reescrito). O Plano Mestre reflete o estado real: o hub existiu, foi removido nesta task, a pedido do CEO. `apps/core-brain` — incluindo a API, os dados, o CORS/`HUB_ORIGIN`, e o trabalho de infraestrutura/segurança das Tasks 095 e 096 — permanece completamente intacto e funcional. Nenhuma decisão sobre um futuro frontend foi tomada.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhuma mudança em `apps/core-brain`; nenhuma reversão das Tasks 095/096; nenhuma reescrita de `changes.jsonl`; nenhuma credencial ou dado real; nenhuma decisão de multi-organização ou sobre um futuro frontend.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: remover completamente o Hub interno (`apps/hub`) e sua documentação de governança específica, a pedido explícito do CEO, sem afetar o core-brain ou trabalho de infraestrutura que só coincidentemente passou pelo hub.

**Resultado conhecido**: `apps/hub` não existe mais, nem em código nem em disco; as 4 tasks que eram sobre ele foram removidas de `done/`; `apps/core-brain` continua funcionando sem nenhuma alteração; o histórico completo permanece rastreável em `changes.jsonl`.

**O que ajudou**: fazer um inventário completo e explícito de tudo que menciona "hub" no repositório *antes* de remover qualquer coisa, separando o que era de fato sobre o hub (094, 097-099) do que só o mencionava de passagem (095, 096) — isso evitou o erro de remover trabalho real de infraestrutura/segurança (Postgres local, RBAC) só porque a palavra "hub" aparecia no texto. Tratar `changes.jsonl` como estritamente append-only, mesmo numa task de remoção, preservou a rastreabilidade histórica apesar dos arquivos `.md` terem sido apagados — o registro de que essas quatro tasks existiram, foram autorizadas e executadas não foi perdido, só deixou de estar visível na árvore atual.

**O que dificultou**: um processo `vite` órfão ainda segurava um handle aberto no diretório `apps/hub`, impedindo a remoção física no Windows ("Device or resource busy") mesmo depois de eu ter encerrado os processos nas portas 3000/5173 — precisei filtrar processos `node.exe` pela linha de comando (`Get-CimInstance Win32_Process`) para achar o processo específico, já que ele não aparecia mais como listener numa porta conhecida.

**Surpresas**: antes de autorizar o merge, o CEO fez uma pergunta de verificação — se o hub removido era de fato o que ele via rodando em `localhost` com as métricas — em vez de simplesmente confirmar. Isso reforça o valor de descrever remoções de forma concreta (o que exatamente desaparece da tela, não só nomes de arquivo) antes de pedir autorização, especialmente quando a mudança é irreversível sem re-implementação.

**Riscos materializados**: nenhum. A remoção de tasks formalmente encerradas quebra o padrão de `done/` como registro permanente estabelecido nas Tasks anteriores — decisão deliberada, justificada pela instrução explícita do CEO e mitigada pela preservação em `changes.jsonl`, não um erro.

**Perguntas em aberto**: se e quando um frontend for retomado, isso será uma decisão nova do CEO — nenhuma direção foi definida ou implícita por esta remoção. A questão original que motivou esta sequência (como Victor e Filipe ativam "seus próprios" Helppers) segue sem resposta prática, como conversa de elaboração separada.

**Ações propostas**: nenhuma ação de processo nova — a instrução do CEO de só implementar o que for explicitamente definido já está registrada como orientação permanente de colaboração, e esta task é o primeiro exemplo de segui-la à risca (execução direta de um escopo já claramente definido, sem propor extensões).

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
