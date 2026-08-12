---
id: task-2026-064
type: task
title: "Permite encerrar tasks puramente documentais na mesma PR da implementação"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-12"
updated_at: "2026-08-12"
reviewed_at: "2026-08-12T11:16:26-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/helpper/TASK-LIFECYCLE.md
  - 00_SYSTEM/tasks/done/TASK-2026-063-retrospectiva-obrigatoria-encerramento.md
related:
  - 00_SYSTEM/tasks/done/TASK-2026-063-retrospectiva-obrigatoria-encerramento.md
  - 00_SYSTEM/tasks/done/TASK-2026-062-fase5-dashboard-projeto.md
aliases:
  - Encerramento na mesma PR
  - Redução de PRs de encerramento
tags: [governanca, helpper, task-lifecycle, simplicidade, pull-request]
allowed_paths:
  - 00_SYSTEM/tasks/done/TASK-2026-064-fechamento-junto-implementacao.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/helpper/TASK-LIFECYCLE.md
  - 00_SYSTEM/tasks/done/TASK-2026-063-retrospectiva-obrigatoria-encerramento.md
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/helpper/README.md
  - 00_SYSTEM/helpper/EVIDENCE-STANDARD.md
  - 00_SYSTEM/helpper/PROMPT-TEMPLATES.md
  - 00_SYSTEM/workflows/retro.md
  - 00_SYSTEM/workflows/README.md
forbidden_paths:
  - .git/
  - packages/
  - infrastructure/
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/decisoes/
  - apps/
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
requires_review: false
acceptance_criteria:
  - Nova Regra Fundamental 6 adicionada à seção 3 de TASK-LIFECYCLE.md, permitindo (não obrigando) o encerramento na mesma PR da implementação quando o encerramento for puramente documental, sem evidência que dependa de estado pós-merge.
  - A regra explicita que tasks cujo encerramento dependa de evidência pós-merge (ex.: reexecução de testes contra main sincronizada) continuam exigindo PR de encerramento separada.
  - Esta própria task e o encerramento da Task 063 são entregues na mesma PR, demonstrando a regra em uso imediato.
  - Nenhuma alteração na granularidade de tasks por entidade, em allowed_paths específicos ou em critérios de aceite verificáveis — apenas o número de PRs/gates de merge por task muda.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a adição da Regra Fundamental 6 a TASK-LIFECYCLE.md e sua aplicação imediata ao fechamento da Task 063. Não autoriza unificar múltiplas tasks de entidades diferentes em uma task só, nem aplicar esta regra a tasks que alterem código."
---

# Task 064 — Permite encerrar tasks puramente documentais na mesma PR da implementação

## Contexto

Ao comentar sobre o volume de tasks da Fase 5 (dez tasks, cada uma com PR de implementação e PR de encerramento separada — cerca de vinte PRs para a fase), o CEO perguntou se fazia sentido unificar tasks por assunto/fase. Investiguei e recomendei não unificar a granularidade por entidade (perderia rastreabilidade: `allowed_paths` específico, critérios de aceite verificáveis um a um, gates de merge pequenos e revisáveis). Identifiquei que o custo real percebido vinha de outro lugar: cada task dobrava o ciclo Git — uma PR para implementar, outra PR inteira só para mover o arquivo de `active/` para `done/` e marcar os critérios, sempre com o mesmo conteúdo mecânico e previsível.

Verifiquei que `TASK-LIFECYCLE.md` nunca exigiu duas PRs separadas — isso sempre foi convenção meu, não regra escrita. Propus, com a checagem de simplicidade de praxe, permitir o encerramento na mesma PR da implementação quando for puramente documental. O CEO autorizou.

## Objetivo

Reduzir pela metade o número de PRs e gates de merge por task, para o subconjunto de tasks cujo encerramento não depende de nenhuma evidência que só existe após o merge — sem alterar a granularidade por entidade nem a rastreabilidade de `allowed_paths` e critérios de aceite.

## Escopo executado

1. `00_SYSTEM/helpper/TASK-LIFECYCLE.md`, seção 3 (Regras Fundamentais de Governança): nova Regra 6, permitindo o encerramento na mesma PR da implementação para tasks puramente documentais (task file, guias operacionais, `changes.jsonl`, sem código), com a seção de Encerramento referenciando o número da PR em vez do hash de merge (que ainda não existe no momento em que a PR é aberta). A regra deixa explícito que tasks que alteram código e dependem de reexecução de testes contra `main` sincronizada continuam com PR de encerramento separada, posterior ao merge.
2. Encerramento da Task 063 incluído nesta mesma PR — movida de `active/` para `done/`, critérios marcados com evidência citando o merge real do PR #55 (já mesclado antes desta PR ser aberta, então o hash já era conhecido nesse caso específico), e retrospectiva crítica executada pela primeira vez sob a Regra Fundamental 5.
3. Esta própria task (064) criada diretamente em `done/`, sem passar por `active/`, demonstrando a nova Regra 6 em uso imediato — seu "Gate vigente" abaixo referencia esta PR, não um hash de merge.

## Critérios de aceite

- [x] Nova Regra Fundamental 6 adicionada, permitindo (não obrigando) encerramento na mesma PR para tasks puramente documentais. Evidência: seção 3 de `TASK-LIFECYCLE.md`, nesta PR.
- [x] Regra explicita que tasks com evidência pós-merge continuam com PR de encerramento separada. Evidência: texto da Regra 6, mesma seção.
- [x] Esta task e o encerramento da Task 063 entregues na mesma PR. Evidência: este próprio arquivo, criado direto em `done/`, e `00_SYSTEM/tasks/done/TASK-2026-063-retrospectiva-obrigatoria-encerramento.md`, ambos no diff desta PR.
- [x] Nenhuma alteração na granularidade por entidade, `allowed_paths` ou critérios de aceite verificáveis. Evidência: esta task mantém `allowed_paths` restrito aos arquivos que de fato altera; não introduz nenhuma mudança em como tasks futuras de entidades de domínio são estruturadas.
- [ ] Conteúdo revisado e aprovado pelo CEO antes da integração em `main`.

## Riscos e gates humanos

Riscos: para tasks que alteram código, aplicar esta regra incorretamente (fechando na mesma PR sem esperar verificação pós-merge) faria eu escrever evidência de teste antes de ela ser real — por isso a regra explicita essa exceção; se eu (ou outro agente) esquecer essa distinção no futuro, o risco é reintroduzir uma evidência fabricada, o que o `AI-CONTRACT.md` já proíbe de forma mais ampla.

Gate vigente: `Sim` (em resposta à proposta desta task — permitir encerramento na mesma PR para tasks documentais, aplicando-a imediatamente ao fechamento da Task 063). Este gate autoriza a execução completa do escopo, incluindo commit, push e abertura desta PR única; a revisão final e o merge, que dependem de decisão do CEO, serão solicitados a seguir, como gate desta mesma PR (não um segundo gate de encerramento).

Histórico de gates desta task: CEO questiona o volume de tasks da Fase 5 → proponho não unificar por entidade, mas investigar a causa real (duplicação de PRs) → detalho a proposta com checagem de simplicidade → `Sim` (autorização da mudança de convenção) → constatação de que a Task 063 (criada sob a convenção antiga) ainda precisava de encerramento separado → decisão de consolidar o encerramento da 063 com a implementação da 064 na mesma PR, já demonstrando a regra em uso → este gate: execução completa, commit, push, PR única, aguardando o gate de merge do CEO.

## Revisão e entrega

Apresentarei o diff completo (incluindo o encerramento da Task 063) e o estado Git, e solicitarei explicitamente o gate de merge — único, cobrindo implementação e encerramento — antes de integrar esta mudança em `main`.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: reduzir o overhead recorrente de PRs de encerramento puramente documentais, sem perder rastreabilidade por entidade.

**Resultado conhecido**: regra adicionada e já aplicada nesta mesma PR, cobrindo tanto o encerramento da Task 063 quanto a implementação e o encerramento desta Task 064.

**O que ajudou**: a pergunta do CEO trouxe uma hipótese (unificar tasks) que, ao ser investigada, revelou que o problema real era outro (duplicação de ciclo Git, não de granularidade de task) — checar a hipótese original em vez de aceitá-la literalmente evitou uma mudança que teria custo de rastreabilidade maior que o benefício.

**O que dificultou**: a Task 063 já estava mesclada sob a convenção antiga quando a nova regra foi autorizada, exigindo uma decisão ad hoc (consolidar o encerramento dela nesta PR) não prevista originalmente — resolvida de forma pragmática, mas vale registrar que mudanças de convenção no meio de um encerramento pendente exigem esse tipo de ajuste manual.

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum.

**Perguntas em aberto**: se, no futuro, uma task documental precisar de revisão humana mais aprofundada antes do encerramento (não apenas confirmação mecânica), a regra atual não distingue esse caso — fica como ponto de atenção para quando (se) isso acontecer, não uma ação necessária agora.

**Ações propostas**: nenhuma adicional.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
