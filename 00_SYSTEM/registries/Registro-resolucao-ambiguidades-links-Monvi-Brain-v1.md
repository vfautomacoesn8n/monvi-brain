---
id: registry-monvi-brain-v1-link-ambiguities-resolution
title: Registro de resolução de ambiguidades de links
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
  - ambiguidades
  - lote-8
---

# Registro de resolução de ambiguidades de links

## Contexto

A auditoria pós-lote 7 identificou cinco ambiguidades causadas por arquivos com o mesmo nome em áreas distintas do vault.

## Critério de decisão

Cada link foi resolvido conforme a função do documento de origem:

- índice de workflows aponta para o workflow correspondente;
- páginas da Wiki apontam para páginas explicativas da própria Wiki;
- templates operacionais permanecem acessíveis pelo mapa de templates;
- nenhum link foi redirecionado para template quando o contexto era institucional ou explicativo.

## Correções

1. `00_SYSTEM/workflows/README.md`
   - destino explícito: `./decision.md`;
   - documento resolvido: `00_SYSTEM/workflows/decision.md`.

2. `02_WIKI/marketing/README.md`
   - destino explícito: `./Case-study.md`;
   - documento resolvido: `02_WIKI/marketing/Case-study.md`.

3. `02_WIKI/comercial/Comercial-e-vendas.md`
   - destino explícito: `./Proposta-comercial.md`;
   - documento resolvido: `02_WIKI/comercial/Proposta-comercial.md`.

4. `02_WIKI/processos/README.md`
   - destino explícito: `./Relatorio-de-cliente.md`;
   - documento resolvido: `02_WIKI/processos/Relatorio-de-cliente.md`.

5. `02_WIKI/comercial/README.md`
   - destino explícito: `./Proposta-comercial.md`;
   - documento resolvido: `02_WIKI/comercial/Proposta-comercial.md`.

## Limites

- templates não foram alterados;
- conteúdo semântico das páginas não foi reescrito;
- RAW e canonical não foram alterados;
- nenhum status foi promovido;
- testes finais não foram executados;
- uma nova auditoria ainda deverá confirmar a eliminação das ambiguidades.
