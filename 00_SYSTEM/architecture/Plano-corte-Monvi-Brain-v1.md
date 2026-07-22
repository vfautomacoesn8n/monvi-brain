---
id: architecture-monvi-brain-v1-cut-plan
title: Plano de corte do Monvi Brain v1
type: architecture
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
  - corte-v1
  - prontidao
related:
  - registry-monvi-brain-v1-pending-risks-limitations
  - checklist-monvi-brain-v1-readiness
---

# Plano de corte do Monvi Brain v1

## Objetivo

Definir quando o Monvi Brain poderá ser declarado documentalmente como versão 1.0.

## Regra central

O corte v1.0 não significa:

- Monvi Core Brain implementado;
- autenticação ativa;
- agentes em produção;
- integrações conectadas;
- testes finais aprovados antes da hora;
- ausência total de legado.

O corte significa que o cérebro documental está consolidado, navegável, governado e pronto para a bateria final de testes.

## Gates obrigatórios

### Gate 1 — Estrutura

- pastas principais validadas;
- arquivos críticos localizados;
- documentos fora de escopo tratados;
- anomalias Git registradas;
- RAW preservado;
- canonical protegido.

### Gate 2 — Governança

- metadados definidos;
- taxonomia definida;
- fonte de verdade definida;
- segurança documental definida;
- decisões registradas;
- riscos e limitações registrados.

### Gate 3 — Navegação

- mapa executivo;
- mapa institucional;
- mapa técnico;
- mapa operacional;
- dashboard executivo;
- dashboard operacional;
- links críticos funcionando.

### Gate 4 — Operação

- tasks abertas mapeadas;
- task 021 preservada como paused;
- templates oficiais identificados;
- evidências e decisões modeladas;
- escrita por agentes governada;
- nenhuma implementação inexistente declarada como pronta.

### Gate 5 — Preparação de teste

- checklist de prontidão criado;
- matriz de testes criada;
- plano de testes criado;
- critérios de aprovação e reprovação definidos;
- evidências esperadas definidas;
- testes ainda não executados.

## Critérios de bloqueio do corte

O corte deve ser bloqueado se houver:

- conflito crítico sem regra temporária;
- mistura entre clientes;
- secret no vault;
- documento crítico sem owner;
- documento crítico sem reviewer;
- fonte oficial contraditória;
- link principal quebrado;
- task crítica sem estado;
- evidência ausente para aprovação;
- afirmação de implementação sem comprovação;
- staging contaminado por anomalia conhecida.

## Pendências que podem permanecer após o corte

Podem permanecer quando documentadas:

- migração progressiva de legado;
- melhorias em dashboards;
- consultas opcionais via plugin;
- task 021 pausada;
- futura implementação do Monvi Core Brain;
- futuras integrações;
- automações não ativadas.

## Decisão de corte

A decisão final deve registrar:

```yaml
decision_id:
version: 1.0.0
approved_by:
approved_at:
evidence:
known_limitations:
residual_risks:
next_review:
```

## Estado atual

Este plano está em review.

O corte v1.0 ainda não foi aprovado.
