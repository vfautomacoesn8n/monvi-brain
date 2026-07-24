---
id: task-2026-034
title: Harmonização do modelo de precedência em dois eixos do Monvi Brain
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
updated_at: "2026-07-24"
reviewed_at: null
version: "0.2.0"
tags:
  - monvi-brain
  - governanca
  - fonte-de-verdade
  - precedencia
depends_on:
  - task-2026-033
allowed_paths:
  - 00_SYSTEM/policies/Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md
  - 00_SYSTEM/architecture/Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md
  - 00_SYSTEM/registries/Registro-decisoes-institucionais-Monvi.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/tasks/review/TASK-2026-034-harmonizacao-precedencia-dois-eixos-monvi-brain.md
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/tasks/done/
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/
forbidden_paths:
  - .git/
  - 05_SHARED/
---

# Harmonização do modelo de precedência em dois eixos do Monvi Brain

## Contexto

Durante a preparação do lote 3 da `task-2026-033`, foi identificada ambiguidade entre:

- a ordem de autoridade por tipo documental definida na política de fonte de verdade;
- a ordem de precedência apresentada na arquitetura do ecossistema;
- o papel de decisões humanas, evidências, registros em review, hipóteses e conteúdo bruto.

O CEO da Monvi aprovou em 2026-07-23 o modelo de precedência em dois eixos.

## Decisão aprovada

### Eixo 1 — autoridade documental

```text
canonical
→ policies
→ architecture
→ processes
→ procedures
→ templates
→ tasks
→ outputs
→ raw
```

### Eixo 2 — maturidade dentro do mesmo nível

```text
approved
→ verified
→ review
→ hypothesis
→ raw/generated
```

## Regra operacional

Primeiro prevalece o nível de autoridade documental.

Quando os documentos estiverem no mesmo nível, devem ser avaliados:

1. maturidade;
2. aprovação;
3. versão;
4. escopo;
5. evidência;
6. cliente e projeto;
7. decisão formalmente registrada.

Uma decisão humana não substitui automaticamente canonical ou policy. A decisão deve ser formalizada no nível documental adequado.

## Objetivo

Harmonizar a política, a arquitetura e o registro institucional para eliminar a ambiguidade identificada antes da execução do lote 3 da task 033.

## Escopo autorizado

- registrar `decision-2026-007`;
- atualizar a política de fonte de verdade;
- atualizar a seção de fonte de verdade da arquitetura;
- registrar evidência no log;
- documentar revisão humana.

## Fora de escopo

- alterar canonical;
- alterar RAW;
- executar testes do lote 3;
- aprovar automaticamente a política completa;
- aprovar o corte v1.0;
- aceitar riscos residuais;
- alterar outras decisões institucionais;
- modificar documentos fora dos caminhos autorizados.

## Critérios de aceite

- `decision-2026-007` registrada como decisão aprovada pelo CEO;
- dois eixos explicitados na política;
- arquitetura alinhada à política;
- decisões humanas condicionadas à formalização no nível adequado;
- ausência de contradição entre os dois documentos;
- política permanece em `review`;
- testes da task 033 permanecem sem execução adicional;
- corte v1.0 permanece `no-go`;
- RAW e canonical permanecem inalterados;
- revisão humana registrada.

## Entregáveis esperados

- política harmonizada;
- arquitetura harmonizada;
- registro institucional atualizado;
- evento JSONL;
- registro de execução nesta task.

## Estado inicial

- decisão executiva: aprovada;
- harmonização documental: não executada;
- `test-consistency-001`: bloqueado até a harmonização;
- lote 3 da task 033: não executado;
- corte v1.0: `no-go`.

## Execução documental — 2026-07-24

### Alterações realizadas

- `decision-2026-007` registrada como aprovada pelo CEO;
- política atualizada com autoridade documental e maturidade como eixos distintos;
- arquitetura atualizada para referenciar o mesmo modelo;
- decisões humanas condicionadas à formalização no nível documental adequado;
- arquitetura movida de `approved` para `review` por ter recebido alteração material;
- política mantida em `review`;
- task mantida em `active` até revisão humana dos textos.

### Validações locais

- arquivos-alvo localizados;
- substituições aplicadas uma única vez;
- política e arquitetura contêm os dois eixos;
- registro contém `decision-2026-007`;
- JSONL validado;
- RAW não alterado;
- canonical não alterado;
- lote 3 da task 033 não executado;
- corte v1.0 mantido em `no-go`.

### Resultado

- harmonização documental: executada;
- revisão humana: pendente;
- `test-consistency-001`: ainda não reexecutado;
- task 033: permanece sem execução adicional;
- task 034: `active`;
- corte v1.0: `no-go`.
