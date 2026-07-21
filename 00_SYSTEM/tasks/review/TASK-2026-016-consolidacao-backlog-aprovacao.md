---
id: task-2026-016
type: task
title: "Consolidação e preparação do backlog para aprovação"
status: review
task_state: review
owner: codex
reviewer: ceo-monvi
confidentiality: internal
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../workflows/audit.md"
  - "task-2026-001"
  - "task-2026-015"
related:
  - "../../audits/2026-07-15-bootstrap-validation.md"
  - "../../tasks/review/TASK-2026-010-ingestao-operacao-monvi.md"
aliases: []
tags: [task, auditoria, backlog, aprovacao, revisao]
agent: codex
allowed_paths:
  - "02_WIKI/index.md"
  - "00_SYSTEM/tasks/review/TASK-2026-010-ingestao-operacao-monvi.md"
  - "00_SYSTEM/tasks/active/TASK-2026-016-consolidacao-backlog-aprovacao.md"
  - "00_SYSTEM/tasks/review/TASK-2026-016-consolidacao-backlog-aprovacao.md"
  - "00_SYSTEM/audits/2026-07-21-backlog-aprovacao.md"
  - "00_SYSTEM/logs/changes.jsonl"
read_only_paths:
  - "AI-START.md"
  - "AGENTS.md"
  - "00_SYSTEM/canonical/AI-CONTRACT.md"
  - "00_SYSTEM/canonical/KNOWLEDGE-MODEL.md"
  - "00_SYSTEM/canonical/PERMISSIONS.md"
  - "00_SYSTEM/workflows/audit.md"
  - "00_SYSTEM/schemas/task.schema.json"
  - "00_SYSTEM/audits/README.md"
  - "00_SYSTEM/registries/source-manifest.md"
  - "00_SYSTEM/logs/ingestion.jsonl"
  - "00_SYSTEM/tasks/review/TASK-2026-001-ingestao-manual-da-marca.md"
  - "00_SYSTEM/tasks/review/TASK-2026-002-ingestao-catalogo-de-servicos.md"
  - "00_SYSTEM/tasks/review/TASK-2026-003-ingestao-estrategia-empresarial.md"
  - "00_SYSTEM/tasks/review/TASK-2026-004-ingestao-manual-de-processos.md"
  - "00_SYSTEM/tasks/review/TASK-2026-005-ingestao-lgpd-e-seguranca.md"
  - "00_SYSTEM/tasks/review/TASK-2026-006-ingestao-juridico-e-contratos.md"
  - "00_SYSTEM/tasks/review/TASK-2026-007-ingestao-comercial-e-vendas.md"
  - "00_SYSTEM/tasks/review/TASK-2026-008-ingestao-conteudo-e-marketing.md"
  - "00_SYSTEM/tasks/review/TASK-2026-009-ingestao-plano-de-marketing.md"
  - "00_SYSTEM/tasks/review/TASK-2026-011-ingestao-assinaturas-infraestrutura-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-012-ingestao-apresentacao-institucional-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-013-ingestao-proposta-comercial-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-014-ingestao-template-case-study-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-015-ingestao-relatorio-cliente-monvi.md"
forbidden_paths:
  - "01_RAW/"
  - "04_OUTPUTS/"
  - "05_SHARED/"
  - "02_WIKI/comercial/"
  - "02_WIKI/empresa/"
  - "02_WIKI/estrategia/"
  - "02_WIKI/juridico/"
  - "02_WIKI/marketing/"
  - "02_WIKI/processos/"
  - "02_WIKI/seguranca/"
  - "02_WIKI/servicos/"
  - "02_WIKI/tecnologia/"
  - "03_OPERATIONS/templates/"
  - "00_SYSTEM/registries/source-manifest.md"
  - "00_SYSTEM/logs/ingestion.jsonl"
  - "00_SYSTEM/tasks/review/TASK-2026-001-ingestao-manual-da-marca.md"
  - "00_SYSTEM/tasks/review/TASK-2026-002-ingestao-catalogo-de-servicos.md"
  - "00_SYSTEM/tasks/review/TASK-2026-003-ingestao-estrategia-empresarial.md"
  - "00_SYSTEM/tasks/review/TASK-2026-004-ingestao-manual-de-processos.md"
  - "00_SYSTEM/tasks/review/TASK-2026-005-ingestao-lgpd-e-seguranca.md"
  - "00_SYSTEM/tasks/review/TASK-2026-006-ingestao-juridico-e-contratos.md"
  - "00_SYSTEM/tasks/review/TASK-2026-007-ingestao-comercial-e-vendas.md"
  - "00_SYSTEM/tasks/review/TASK-2026-008-ingestao-conteudo-e-marketing.md"
  - "00_SYSTEM/tasks/review/TASK-2026-009-ingestao-plano-de-marketing.md"
  - "00_SYSTEM/tasks/review/TASK-2026-011-ingestao-assinaturas-infraestrutura-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-012-ingestao-apresentacao-institucional-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-013-ingestao-proposta-comercial-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-014-ingestao-template-case-study-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-015-ingestao-relatorio-cliente-monvi.md"
  - "00_SYSTEM/tasks/approved/"
acceptance_criteria:
  - "O índice referencia as tasks 001–015 exatamente uma vez no campo de referências aplicável."
  - "A task 010 mantém conjuntos de paths mutuamente exclusivos, com AI-START.md e AGENTS.md somente em read_only_paths."
  - "A matriz consolida as categorias B, C, D e E, perguntas ao CEO, encaminhamentos especializados e lote potencial sem aprovar ou mover tasks."
  - "Manifesto, ingestion.jsonl, RAW, páginas de conteúdo, templates e checklists permanecem inalterados; changes.jsonl recebe um único evento válido."
---

# Consolidação e preparação do backlog para aprovação

## Objetivo

Corrigir referências objetivas no índice e a sobreposição de paths da task-2026-010, além de preparar a matriz de aprovação humana das tasks 001–015. Esta task não aprova, não move nem altera o estado editorial de qualquer task existente.

## Contexto e diagnóstico da auditoria

A auditoria do backlog identificou ausência de referências diretas a `task-2026-002`, `task-2026-004` e `task-2026-006` no índice global. Também identificou `AI-START.md` e `AGENTS.md` simultaneamente em `read_only_paths` e `forbidden_paths` da task-2026-010. Fontes, manifesto, logs, commits e artefatos das tasks 001–015 existem e permanecem em `review`.

## Entregáveis

- Referências de task no índice corrigidas sem alterar conteúdo Wiki.
- Exclusividade de paths da task-2026-010 corrigida.
- Relatório de aprovação em `00_SYSTEM/audits/2026-07-21-backlog-aprovacao.md`.
- Um evento auditável em `00_SYSTEM/logs/changes.jsonl`.
- Encaminhamento desta task para `review`, sem aprovação automática.

## Riscos e decisões humanas pendentes

As categorias da matriz são encaminhamentos, não decisões. As perguntas ao CEO, validações Jurídicas, de LGPD, Segurança, Comercial e Operação permanecem pendentes de responsáveis humanos. Nenhuma ressalva se torna política aprovada por esta consolidação.

## Proibição de aprovação automática

Nenhuma task 001–015 será movida para `approved`, terá `status`, `task_state`, `requires_review`, classificação ou caminho alterados. O lote de aprovação será apenas proposto para decisão humana.
## Resultado da execução

- referências 	ask-2026-002, 	ask-2026-004 e 	ask-2026-006 incluídas no índice;
- sobreposição de paths da 	ask-2026-010 corrigida;
- matriz criada em $auditReport;
- nenhuma task aprovada ou movida para pproved;
- manifesto, ingestion log, RAW, páginas de conteúdo, templates e checklists inalterados.

## Pendências humanas

- decisão do CEO para as tasks 002, 003, 009, 011 e 012;
- validação especializada para as tasks 005, 006 e 013;
- decisão sobre o lote 001, 007, 008, 014 e 015;
- aprovação humana das correções das tasks 004 e 010.