---
id: architecture-monvi-brain-v1-connectivity-remediation-plan
title: Plano de correção de conectividade do Monvi Brain v1
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
  - conectividade
  - correcao
related:
  - registry-monvi-brain-v1-connectivity-audit
  - registry-monvi-brain-v1-connectivity-exceptions
---

# Plano de correção de conectividade do Monvi Brain v1

## Objetivo

Reduzir notas órfãs reais sem degradar a qualidade semântica do grafo.

## Princípio

A meta não é zerar pontos isolados.

A meta é:

> nenhuma nota crítica isolada sem justificativa.

## Ordem de correção

### Lote 1 — Crítico

- canonical;
- policies;
- architecture;
- tasks ativas;
- segurança;
- clientes;
- projetos;
- decisões.

### Lote 2 — Operacional

- processes;
- procedures;
- templates;
- dashboards;
- mapas;
- registros.

### Lote 3 — Legado

- documentos anteriores à governança;
- históricos;
- auxiliares;
- baixa criticidade.

## Regras

- conectar por relação real;
- preferir mapa, índice, task de origem ou política relacionada;
- não ligar tudo ao index;
- não criar backlinks artificiais;
- não alterar RAW;
- não alterar canonical sem autorização;
- não misturar clientes;
- não inferir owner ou reviewer;
- revisar cada lote antes do commit.

## Fluxo por lote

```text
selecionar
→ classificar
→ propor links
→ revisar semântica
→ aplicar
→ validar links
→ revisar diff
→ commit controlado
→ medir novamente
```

## Critério de conclusão

A fase de conectividade termina quando:

- notas críticas isoladas forem conectadas ou justificadas;
- links quebrados críticos forem corrigidos;
- ambiguidades críticas forem resolvidas;
- exceções legítimas forem aprovadas;
- nova medição for registrada;
- o grafo apresentar núcleos coerentes por função.
