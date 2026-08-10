---
id: task-2026-050
type: task
title: "Unidade de trabalho do Helpper: a demanda, não o documento"
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
  - 00_SYSTEM/helpper/README.md
  - 00_SYSTEM/canonical/AI-CONTRACT.md
  - 00_SYSTEM/canonical/PERMISSIONS.md
  - 00_SYSTEM/tasks/done/TASK-2026-049-identidade-e-forma-de-comunicacao-do-helpper.md
related:
  - 00_SYSTEM/tasks/done/TASK-2026-049-identidade-e-forma-de-comunicacao-do-helpper.md
  - 00_SYSTEM/tasks/done/TASK-2026-047-arquitetura-e-especificacao-do-helpper-central.md
aliases:
  - Unidade de trabalho do Helpper
  - Demanda, não documento
tags: [helpper, identidade, governanca, guia-operacional, auditoria]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-050-unidade-de-trabalho-do-helpper.md
  - 00_SYSTEM/helpper/README.md
  - 00_SYSTEM/logs/changes.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/TASK-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 00_SYSTEM/tasks/done/TASK-2026-047-arquitetura-e-especificacao-do-helpper-central.md
  - 00_SYSTEM/tasks/done/TASK-2026-049-identidade-e-forma-de-comunicacao-do-helpper.md
forbidden_paths:
  - .git/
  - apps/core-brain/
  - packages/
  - infrastructure/
  - 01_RAW/
  - 02_WIKI/
  - 05_SHARED/
  - 03_OPERATIONS/decisoes/
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
requires_review: true
acceptance_criteria:
  - Seção "1.2 Unidade de trabalho: a demanda, não o documento" inserida em 00_SYSTEM/helpper/README.md, imediatamente após a seção 1.1, sem renumerar as seções existentes.
  - Princípio central redigido exatamente conforme aprovado pelo CEO.
  - Nenhuma duplicação das responsabilidades operacionais já definidas na seção 1.1; referência explícita a ela em vez de repetição.
  - Limite técnico de continuidade entre sessões declarado explicitamente, sem prometer capacidade de monitoramento autônomo inexistente.
  - Nenhuma incompatibilidade com AI-CONTRACT.md, PERMISSIONS.md ou a hierarquia documental.
  - Nenhuma alteração em documentos das Tasks 047, 048 (backlog) ou 049.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main.
blocked_reason: "Esta task autoriza exclusivamente a evolução da seção de identidade do Guia Operacional do Helpper (00_SYSTEM/helpper/README.md), acrescentando o princípio de que a unidade de trabalho do Helpper é a demanda, não o documento. Não autoriza alteração de fontes canônicas, de qualquer documento das Tasks 047 ou 049, criação da Task 048, início da Fase 5, ou qualquer implementação técnica, automação, banco, API ou dependência."
---

# Task 050 — Unidade de trabalho do Helpper: a demanda, não o documento

## Contexto

Esta task nasce diretamente da auditoria estratégica ampla que eu conduzi por solicitação do CEO, imediatamente após o encerramento da Task 049. Na revisão crítica dessa auditoria, o CEO manteve os Achados 1 (executor = revisor), 2 (ausência de CI) e 3 (padronização do `changes.jsonl`) como prioridades, rebaixou a prioridade do achado sobre os 14 estados do lifecycle (reconhecendo que "Gate vigente" + "Histórico de gates" + `changes.jsonl` já cobrem essa rastreabilidade), e registrou um novo achado — o Achado 11 — como a principal evolução necessária: minha atuação ainda estava excessivamente orientada à produção de artefatos, e não ao ciclo completo da demanda.

Eu analisei criticamente essa proposta antes de qualquer edição, identifiquei um risco real de redundância com o último item da seção 1.1 (que já cobre boa parte do comportamento operacional de continuidade) e resolvi isso na redação final, mantendo em 1.2 apenas o que é genuinamente novo — a reformulação do referencial de trabalho — e referenciando 1.1 para o detalhamento operacional, em vez de duplicá-lo. Também identifiquei e declarei explicitamente uma limitação técnica real: eu não tenho monitoramento autônomo entre sessões: minha continuidade depende da sessão ativa e da qualidade dos registros que deixo.

O texto final foi aprovado pelo CEO antes da criação desta task, com a direção, o princípio central e os pontos obrigatórios definidos por ele.

## Objetivo

Registrar formalmente, como task de governança do Helpper, a inserção do princípio "a unidade de trabalho do Helpper é a demanda, não o documento" em `00_SYSTEM/helpper/README.md`, complementando — sem duplicar — a seção 1.1.

## Escopo autorizado

1. Inserir a seção `1.2 Unidade de trabalho: a demanda, não o documento` em `00_SYSTEM/helpper/README.md`.
2. Registrar um evento de criação desta task em `00_SYSTEM/logs/changes.jsonl`.
3. Conduzir o ciclo de governança correspondente (commit, push, PR) até o ponto em que uma etapa dependa de decisão humana — nomeadamente a revisão final e o merge.

Não estão no escopo: alteração de qualquer fonte canônica; alteração de qualquer documento das Tasks 047 (incluindo o backlog aprovado) ou 049; criação da Task 048; início da Fase 5; qualquer implementação técnica, automação, banco de dados, API ou dependência.

## Análise crítica já realizada

Antes da criação desta task, eu verifiquei a compatibilidade do texto da seção 1.2 com `AI-CONTRACT.md`, `PERMISSIONS.md` e a hierarquia documental da seção 2 do `README.md`. Não identifiquei incompatibilidade: a seção reforça, em vez de contornar, a exigência de solicitar gate humano para etapas que dependam de decisão do CEO. O único risco real identificado foi de redundância textual com a seção 1.1, resolvido ao remeter a ela em vez de repetir seu conteúdo operacional.

## Critérios de aceite

- [ ] Seção 1.2 inserida em `00_SYSTEM/helpper/README.md`, sem renumerar as seções existentes.
- [ ] Princípio central idêntico ao aprovado pelo CEO.
- [ ] Nenhuma duplicação das responsabilidades operacionais da seção 1.1.
- [ ] Limite técnico de continuidade entre sessões declarado explicitamente.
- [ ] Nenhuma incompatibilidade com `AI-CONTRACT.md`, `PERMISSIONS.md` ou a hierarquia documental.
- [ ] Nenhuma alteração em documentos das Tasks 047, 048 (backlog) ou 049.
- [ ] Evento de criação registrado em `changes.jsonl` sem alterar linhas históricas.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge.

## Riscos e gates humanos

Riscos: redundância residual não percebida com a seção 1.1; leitura da regra de continuidade como promessa de capacidade que eu não possuo; diluição do princípio caso seções futuras o repitam com palavras diferentes em vez de referenciá-lo.

Gate vigente: `Helpper, considero aprovada a direção proposta. Quero que você transforme isso em um princípio permanente do sistema... Caso não encontre conflitos, prossiga normalmente`. Este gate autoriza a análise crítica final, a criação desta task, a branch dedicada, a edição de `00_SYSTEM/helpper/README.md` conforme o texto especificado, o registro do evento em `changes.jsonl` e a condução do ciclo de governança (commit, push, PR) até o ponto em que a revisão final e o merge, que permanecem sujeitos a gate humano específico, sejam solicitados.

Histórico de gates desta task: auditoria estratégica ampla apresentada por mim → revisão crítica da auditoria pelo CEO, com reprioritização dos achados e registro do Achado 11 → análise crítica por mim da proposta de princípio permanente, identificando o limite técnico de continuidade entre sessões e o risco de redundância com a seção 1.1 → `Helpper, considero aprovada a direção proposta... Caso não encontre conflitos, prossiga normalmente` (este gate: análise final sem conflitos, criação da task, branch, edição do README, commit, push e PR).

## Revisão e entrega

Apresentarei o diff documental, as validações e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
