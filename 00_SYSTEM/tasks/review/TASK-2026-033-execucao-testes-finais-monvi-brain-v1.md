---
id: task-2026-033
title: Execução dos testes finais do Monvi Brain v1
type: task
status: review
task_state: active
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
created_at: "2026-07-23"
updated_at: "2026-07-23"
reviewed_at: null
version: "0.1.0"
allowed_paths:
  - 00_SYSTEM/audits/
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/registries/
  - 00_SYSTEM/tasks/review/TASK-2026-033-execucao-testes-finais-monvi-brain-v1.md
  - 04_OUTPUTS/relatorios/
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/tasks/done/
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/
forbidden_paths:
  - .git/
  - 05_SHARED/
tags:
  - monvi-brain
  - testes-finais
  - validacao
  - go-no-go
---

# TASK-2026-033 — Execução dos testes finais do Monvi Brain v1

## Contexto

A task 032 concluiu e aprovou a consolidação documental do Monvi Brain v1.

O corte v1.0 permanece `no-go` até a execução da bateria final de testes, análise dos riscos residuais e decisão humana formal.

## Objetivo

Executar a matriz de testes finais pós-consolidação, registrar evidências auditáveis e produzir uma recomendação de `go/no-go` para o corte documental v1.0.

## Fontes obrigatórias

- `00_SYSTEM/templates/Matriz-testes-finais-Monvi-Brain-v1.md`;
- `00_SYSTEM/architecture/Plano-testes-pos-consolidacao-Monvi-Brain-v1.md`;
- `00_SYSTEM/audits/Checklist-prontidao-executado-Monvi-Brain-v1.md`;
- `00_SYSTEM/registries/Registro-decisao-pre-final-task-032-e-corte-documental-Monvi-Brain-v1.md`;
- `00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md`;
- `00_SYSTEM/tasks/done/TASK-2026-032-consolidacao-monvi-brain-v1.md`.

## Escopo dos testes

A bateria deve validar, no mínimo:

1. estrutura e arquivos críticos;
2. integridade de links e navegação;
3. consistência de metadados e frontmatter;
4. integridade de IDs e referências;
5. separação entre `status` e `task_state`;
6. isolamento de clientes e projetos;
7. ausência de secrets;
8. proteção de `01_RAW` e canonical;
9. integridade de logs JSONL;
10. consistência de tasks abertas, pausadas e concluídas;
11. presença das evidências mínimas;
12. ausência de implementação fictícia;
13. legibilidade em Obsidian sem dependência obrigatória de plugins;
14. prontidão para decisão de corte.

## Classificação dos resultados

Cada teste deve ser classificado como:

- `pass`;
- `fail`;
- `blocked`;
- `not-applicable`.

Não usar `approved` como resultado de teste.

## Evidência mínima por teste

Cada resultado deve registrar:

```yaml
test_id:
result:
executed_at:
executed_by:
scope:
evidence:
limitations:
risk:
requires_human_decision:
```

## Regras de execução

- executar um grupo de testes por vez;
- não alterar documentos apenas para fazer o teste passar;
- separar achado de correção;
- não editar `01_RAW`;
- não editar canonical sem task específica e autorização explícita;
- não armazenar secrets encontrados;
- interromper e registrar incidente se houver secret, mistura de cliente ou perda de rastreabilidade;
- preservar anomalias Git conhecidas fora do staging;
- nunca usar `git add .`;
- manter rollback proporcional ao risco;
- não aprovar automaticamente o corte.

## Entregáveis esperados

1. registro de execução da matriz de testes;
2. evidências por teste;
3. relatório consolidado de resultados;
4. lista de falhas, bloqueios e limitações;
5. atualização do registro de riscos;
6. recomendação final de `go/no-go`;
7. registro de decisão humana posterior.

## Critérios de aprovação da task

A task poderá ser aprovada quando:

- todos os testes previstos tiverem resultado;
- nenhuma falha crítica estiver sem tratamento ou decisão;
- nenhum secret estiver armazenado no vault;
- nenhuma mistura de cliente tiver sido identificada;
- evidências estiverem registradas;
- riscos residuais estiverem classificados;
- recomendação final estiver emitida;
- reviewer tiver concluído a revisão.

## Critérios de bloqueio

A task deve permanecer bloqueada se houver:

- secret no vault;
- mistura de clientes;
- link crítico quebrado;
- conflito crítico sem regra;
- documento crítico sem owner ou reviewer;
- log inválido;
- evidência insuficiente;
- teste crítico não executado;
- alteração inesperada em RAW ou canonical.

## Fora do escopo

- implementar Monvi Core Brain;
- configurar autenticação;
- ativar agentes reais;
- conectar integrações externas;
- confirmar contas, custos ou licenças sem evidência;
- aprovar automaticamente o corte v1.0;
- corrigir achados fora de task específica.

## Resultado esperado

Bateria final executada com evidências auditáveis, riscos residuais classificados e recomendação de `go/no-go` pronta para decisão humana.

## Execução — lote 1 — preflight e estrutura

- data: 2026-07-23;
- `test-struct-001`: pass;
- `test-struct-002`: pass;
- preflight JSONL: pass;
- resultado consolidado: pass;
- correções automáticas executadas: não;
- RAW alterado: não;
- canonical alterado: não;
- corte v1.0: permanece `no-go`;
- testes restantes: pendentes.

### Evidência

- `00_SYSTEM/audits/Execucao-testes-finais-lote-1-preflight-estrutura-Monvi-Brain-v1.md`.

## Execução — lote 2 — navegação

- data: 2026-07-23;
- `test-nav-001`: pass;
- `test-nav-002`: pass;
- resultado consolidado: pass;
- correções automáticas durante os testes: não;
- RAW alterado: não;
- canonical alterado: não;
- corte v1.0: permanece `no-go`;
- testes restantes: pendentes.

### Evidência

- `00_SYSTEM/audits/Execucao-testes-finais-lote-2-navegacao-Monvi-Brain-v1.md`.
