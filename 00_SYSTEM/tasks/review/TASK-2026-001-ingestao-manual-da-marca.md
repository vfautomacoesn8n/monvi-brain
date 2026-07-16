---
id: task-2026-001
type: task
title: "Ingestão do Manual da Marca Monvi"
status: review
owner: codex
reviewer: ceo-monvi
confidentiality: internal
created_at: "2026-07-16"
updated_at: "2026-07-16"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../../01_RAW/monvi/Monvi - Manual da marca.pdf"
related: []
aliases: []
tags: [task, ingestao, marca]
task_state: review
agent: codex
active_client: null
allowed_paths:
  - "02_WIKI/empresa/"
  - "02_WIKI/estrategia/"
  - "02_WIKI/marketing/"
  - "02_WIKI/index.md"
  - "00_SYSTEM/logs/"
  - "00_SYSTEM/registries/"
  - "00_SYSTEM/tasks/active/"
  - "00_SYSTEM/tasks/review/"
  - "00_SYSTEM/tasks/done/"
read_only_paths:
  - "01_RAW/monvi/Monvi - Manual da marca.pdf"
forbidden_paths:
  - "03_OPERATIONS/clientes/"
  - "02_WIKI/comercial/"
  - "02_WIKI/seguranca/"
  - "02_WIKI/servicos/"
  - "02_WIKI/processos/"
  - "02_WIKI/tecnologia/"
  - "04_OUTPUTS/"
requires_review: true
acceptance_criteria:
  - "Manifesto de fontes movido para 00_SYSTEM/registries e referências internas atualizadas."
  - "Somente o Manual da Marca Monvi V1.0 é processado; os demais documentos permanecem fora do escopo."
  - "Páginas previstas são criadas ou atualizadas com status review, classificação internal e rastreabilidade visual até a fonte."
  - "Manifesto, índices e logs JSON Lines são atualizados sem alterar o PDF original."
  - "JSON, JSONL, YAML, links relativos e IDs são validados sem erros."
blocked_reason: null
---

# Ingestão do Manual da Marca Monvi

## Contexto

Primeira ingestão autorizada do Monvi Brain, limitada ao Manual da Marca Monvi V1.0 de 2026. A fonte é um PDF visual sem camada textual e permanece imutável em `01_RAW`.

## Instruções

- Processar exclusivamente `01_RAW/monvi/Monvi - Manual da marca.pdf`.
- Tratar alegações de benefício como posicionamento institucional, não como resultado comprovado.
- Marcar frases de aplicação e peças demonstrativas como exemplos.
- Registrar `monvi.com` e `contato@monvi.com` somente como informações exibidas, pendentes de confirmação operacional.
- Não extrair imagens do PDF como arquivos oficiais e não interpretar `™` ou `©` como prova jurídica.
- Não modificar caminhos proibidos nem outros documentos em `01_RAW`; o Manual da Marca é consulta exclusiva em `read_only_paths`.

## Critérios de aceite

Os critérios observáveis estão definidos no frontmatter e serão verificados antes da transição operacional para `review`.

## Validações

Validar schemas, JSON/JSONL, frontmatter YAML, links relativos, unicidade de IDs, integridade SHA-256 da fonte e escopo do diff.

## Revisão e entrega

Após execução e validações bem-sucedidas, mover esta tarefa para `00_SYSTEM/tasks/review/` e alterar somente `task_state` de `active` para `review`. A aprovação final cabe ao revisor humano.
