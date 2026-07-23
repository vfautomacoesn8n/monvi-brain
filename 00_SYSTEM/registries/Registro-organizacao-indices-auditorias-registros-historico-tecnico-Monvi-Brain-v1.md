---
id: registry-monvi-brain-v1-navigation-audits-registries-technical-history
title: Registro de organização dos índices de auditorias, registros e histórico técnico
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
  - navegacao
  - auditorias
  - registros
  - historico-tecnico
  - lote-9
---

# Registro de organização dos índices de auditorias, registros e histórico técnico

## Entregas

- índice de auditorias ampliado;
- índice de registros criado;
- índice do histórico técnico criado;
- índice de registros e auditorias conectado ao mapa operacional;
- histórico técnico e arquivo conectados ao mapa técnico.

## Decisões

- auditorias permanecem organizadas em `00_SYSTEM/audits`;
- registros permanecem organizados em `00_SYSTEM/registries`;
- documentos em `docs/superpowers` permanecem como proveniência técnica;
- `99_ARCHIVE/README.md` é índice estrutural, não item a ser arquivado;
- mapas principais apontam para índices intermediários para evitar sobrecarga.

## Limites

- nenhum documento histórico foi movido;
- nenhum status foi promovido;
- RAW e canonical não foram alterados;
- testes finais não foram executados;
- as exceções estruturais remanescentes ainda não foram formalmente classificadas.

## Correção antes do commit

- o próprio registro do lote foi incluído no índice de registros;
- links diretos redundantes foram removidos da seção `Registros` do mapa operacional;
- o mapa operacional passou a apontar apenas para os índices intermediários nessa seção;
- `source-manifest` permanece acessível pelo índice de registros;
- nenhum documento foi removido ou movido.
