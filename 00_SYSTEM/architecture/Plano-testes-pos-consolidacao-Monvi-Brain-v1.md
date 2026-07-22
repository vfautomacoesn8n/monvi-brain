---
id: architecture-monvi-brain-v1-post-consolidation-test-plan
title: Plano de testes pós-consolidação do Monvi Brain v1
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
  - testes
  - validacao
related:
  - architecture-monvi-brain-v1-cut-plan
  - template-monvi-brain-v1-final-test-matrix
---

# Plano de testes pós-consolidação do Monvi Brain v1

## Objetivo

Definir a bateria de testes a ser executada somente após a consolidação completa.

## Escopo

### Testes estruturais

- existência de arquivos obrigatórios;
- validade de frontmatter;
- IDs únicos;
- tipos válidos;
- status válidos;
- tasks consistentes;
- staging limpo;
- integridade dos logs.

### Testes de navegação

- mapas abrem documentos existentes;
- dashboards apontam para fontes reais;
- links principais não estão quebrados;
- documentos críticos possuem caminho de entrada;
- navegação funciona sem plugin obrigatório.

### Testes de recuperação

Perguntas mínimas:

- quais serviços a Monvi oferece;
- qual é a fonte de verdade;
- como abrir e aprovar uma task;
- como registrar decisão;
- como registrar evidência;
- como tratar conflito;
- como tratar incidente documental;
- quais tasks estão pausadas;
- quais limitações permanecem;
- como um agente deve ser suspenso.

### Testes de consistência

- política não contradiz arquitetura;
- processo não contradiz política;
- template não contradiz política;
- task done não permanece em review;
- documento deprecated não é referência principal;
- origem e status são rastreáveis.

### Testes de segurança

- busca por padrões de secrets;
- busca por tokens;
- busca por credenciais;
- validação de isolamento por cliente;
- validação de classificação;
- validação de RAW;
- validação de canonical;
- validação de allowed, read-only e forbidden paths.

### Testes por cenário

- solicitação válida;
- solicitação sem contexto;
- permissão insuficiente;
- cliente incorreto;
- conflito entre fontes;
- ação crítica sem aprovação;
- execução duplicada;
- retry destrutivo;
- rollback;
- suspensão;
- reativação;
- incidente documental.

## Classificação de resultado

- passed;
- failed;
- blocked;
- pending;
- not-applicable.

## Severidade

- critical;
- high;
- medium;
- low.

## Evidência mínima

Cada teste deve registrar:

```yaml
test_id:
result:
executed_by:
executed_at:
evidence:
severity:
finding:
recommended_action:
```

## Critério de aprovação

A versão só pode ser aprovada quando:

- nenhum teste crítico falhar;
- falhas altas tiverem correção ou aceite formal;
- limitações forem registradas;
- evidências forem rastreáveis;
- decisão final for aprovada pelos CEOs.

## Regra de execução

Os testes deste plano não são executados nesta fase.

A execução ocorrerá após a conclusão documental da task 032.
