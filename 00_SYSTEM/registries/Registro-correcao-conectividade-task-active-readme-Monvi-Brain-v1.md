---
id: registry-monvi-brain-v1-active-tasks-readme-connectivity-fix
title: Registro de conexão do índice de tasks ativas
type: record
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
source_task: task-2026-032
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
version: "0.1.0"
tags:
  - monvi-brain
  - conectividade
  - tasks
  - lote-7
---

# Registro de conexão do índice de tasks ativas

## Diagnóstico

O arquivo `00_SYSTEM/tasks/active/README.md` era a única nota crítica ainda isolada após o lote 6.

## Correção

- índice conectado ao mapa operacional;
- conteúdo do índice não foi alterado;
- nenhuma task foi criada ou movida;
- nenhum status foi promovido;
- RAW e canonical não foram alterados;
- testes finais não foram executados.

## Justificativa

O índice da pasta de tasks ativas é estrutural e permanece válido mesmo quando não há tasks em execução.

## Limites

- nenhuma anomalia conhecida foi alterada;
- a próxima auditoria deverá ignorar wikilinks dentro de código inline;
- as ambiguidades permanecem pendentes.
