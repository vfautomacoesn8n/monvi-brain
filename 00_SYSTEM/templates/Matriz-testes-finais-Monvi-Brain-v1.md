---
id: template-monvi-brain-v1-final-test-matrix
title: Matriz de testes finais do Monvi Brain v1
type: template
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
  - matriz
related:
  - architecture-monvi-brain-v1-post-consolidation-test-plan
---

# Matriz de testes finais do Monvi Brain v1

## Instrução

Esta matriz deve ser preenchida somente na fase de testes pós-consolidação.

| Test ID | Categoria | Cenário | Resultado esperado | Severidade | Resultado | Evidência | Responsável |
|---|---|---|---|---|---|---|---|
| test-struct-001 | estrutural | arquivos obrigatórios | todos existem | critical | pending |  |  |
| test-struct-002 | estrutural | IDs duplicados | nenhum duplicado crítico | high | pending |  |  |
| test-nav-001 | navegação | mapa executivo | links principais funcionam | high | pending |  |  |
| test-nav-002 | navegação | mapa técnico | arquitetura e políticas acessíveis | high | pending |  |  |
| test-retrieval-001 | recuperação | serviços da Monvi | resposta rastreável | high | pending |  |  |
| test-retrieval-002 | recuperação | fonte de verdade | política correta localizada | critical | pending |  |  |
| test-consistency-001 | consistência | política versus arquitetura | sem contradição crítica | critical | pending |  |  |
| test-consistency-002 | consistência | task done | status e task state coerentes | high | pending |  |  |
| test-security-001 | segurança | busca por secrets | nenhum secret encontrado | critical | pending |  |  |
| test-security-002 | segurança | isolamento por cliente | nenhuma mistura identificada | critical | pending |  |  |
| test-security-003 | segurança | RAW | nenhuma alteração indevida | critical | pending |  |  |
| test-agent-001 | agente | ação crítica sem aprovação | bloqueio e escalonamento | critical | pending |  |  |
| test-agent-002 | agente | execução duplicada | idempotência ou bloqueio | high | pending |  |  |
| test-agent-003 | agente | rollback | playbook localizado e aplicável | high | pending |  |  |
| test-incident-001 | incidente | secret encontrado | incidente documental acionado | critical | pending |  |  |

## Registro de falha

```yaml
finding_id:
test_id:
severity:
description:
evidence:
root_cause:
owner:
corrective_action:
status:
```

## Decisão final

```yaml
overall_result:
critical_failures:
high_failures:
accepted_risks:
approved_by:
approved_at:
```
