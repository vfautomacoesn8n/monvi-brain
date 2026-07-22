---
id: registry-monvi-institutional-decisions
title: Registro de decisões institucionais da Monvi
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
  - monvi
  - decisoes
  - governanca
related:
  - policy-monvi-brain-source-of-truth-conflict-resolution
---

# Registro de decisões institucionais da Monvi

## Regra

Somente decisões formalizadas neste registro ou em documento de decisão aprovado possuem autoridade institucional.

## Decisões consolidadas

### decision-2026-001 — Monvi Brain como fonte institucional

- status: review;
- contexto: necessidade de separar documentação, autenticação e execução;
- decisão: o Monvi Brain será a fonte de verdade do conhecimento aprovado;
- limite: não armazenará secrets nem será camada de autenticação;
- origem: tasks 028 a 032;
- revisão: necessária antes do corte v1.0.

### decision-2026-002 — Monvi Core Brain como camada futura

- status: review;
- decisão: identidade, sessão, autorização, políticas de acesso, isolamento, auditoria e execução pertencem ao futuro Monvi Core Brain;
- limite: não está implementado;
- origem: tasks 028 e 029.

### decision-2026-003 — Helpper como orquestrador

- status: review;
- decisão: Helpper Core será o orquestrador e gestor dos especialistas;
- limite: nenhuma permissão excede a autoridade do usuário;
- origem: task 030.

### decision-2026-004 — Agentes com execução supervisionada

- status: review;
- decisão: agentes seguem ciclo de vida, aprovação, logs, retry, timeout, idempotência, suspensão e rollback;
- limite: documentação não equivale a agente implementado;
- origem: task 031.

### decision-2026-005 — Obsidian como interface humana

- status: review;
- decisão: Obsidian será a interface humana principal do vault;
- limite: plugins permanecem opcionais;
- origem: task 032.

### decision-2026-006 — Testes após consolidação

- status: review;
- decisão: a bateria final de testes será executada somente após a consolidação documental;
- limite: validações locais de Git e estrutura continuam permitidas;
- origem: task 032.

## Pendências

- aprovação formal das decisões;
- confirmação do corte v1.0;
- definição de revisão periódica;
- futura migração para o Monvi Core Brain.
