---
type: architecture
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
source_task: task-2026-031
classification: internal
---# Modelo de execução supervisionada, filas, retry, timeout e idempotência

## Fluxo

```text
request
→ authenticate
→ authorize
→ classify
→ prepare-context
→ validate-limits
→ simulate-when-required
→ request-approval
→ execute
→ verify
→ register-evidence
→ report
→ close
```

## Estados operacionais

- queued;
- validating;
- waiting-context;
- waiting-approval;
- running;
- retrying;
- completed;
- failed;
- blocked;
- cancelled;
- rolled-back;
- quarantined.

## Filas e concorrência

Definir:

- prioridade;
- dependências;
- limite de concorrência;
- exclusão mútua;
- locks;
- tempo máximo em fila;
- cancelamento;
- reprocessamento;
- prevenção de duplicidade;
- cliente ativo;
- orçamento disponível.

## Retry

- máximo de tentativas;
- backoff;
- erro recuperável;
- erro não recuperável;
- proibição de retry destrutivo sem idempotência;
- escalonamento humano.

## Timeout

Toda execução deve ter timeout explícito, cancelamento seguro e resultado conhecido.

## Idempotência

Ações com efeito real devem possuir:

- chave de idempotência;
- verificação de execução anterior;
- proteção contra duplicidade;
- política de expiração;
- log;
- resultado reutilizável quando seguro.

## Contrato de execução

Toda execução deve registrar:

```yaml
execution_id:
request_id:
agent_id:
agent_version:
actor_id:
executor_id:
approver_id:
active_client:
active_project:
environment:
risk_level:
idempotency_key:
queue:
priority:
timeout_seconds:
retry_policy:
cost_limit:
rollback_reference:
policy_version:
status:
```

## Regras de concorrência e lock

- apenas uma execução por recurso crítico quando houver risco de conflito;
- lock deve possuir owner, validade e expiração;
- lock abandonado deve ser detectado;
- execução duplicada deve ser bloqueada;
- concorrência por cliente deve respeitar orçamento e limite;
- prioridade não pode causar starvation permanente;
- cancelamento deve liberar lock de forma segura;
- reprocessamento deve reutilizar idempotency key quando aplicável.

## Tabela de retry

| Tipo de falha | Retry | Condição |
|---|---|---|
| timeout transitório | Sim | operação idempotente |
| indisponibilidade temporária | Sim | backoff e limite |
| permissão insuficiente | Não | escalar para humano |
| validação de política | Não | corrigir contexto |
| ação destrutiva sem idempotência | Não | aprovação e redesenho |
| custo excedido | Não automático | nova aprovação |
| resposta inválida de ferramenta | Limitado | fallback disponível |
| incidente de segurança | Não | suspender e investigar |
