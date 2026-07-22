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
