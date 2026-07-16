# Workflow: decisão

## Procedimento

1. Defina contexto, problema, escopo, responsável e prazo apenas quando fornecido.
2. Registre alternativas, evidências, premissas, riscos e impactos. Não invente opções atribuídas a pessoas.
3. Crie o registro pelo [`../templates/decision.md`](../templates/decision.md) com `decision_state: proposed` e `status: review`.
4. Identifique revisores obrigatórios conforme [`PERMISSIONS.md`](../canonical/PERMISSIONS.md).
5. Registre a decisão humana: resultado, decisores, data, justificativa e condições. Somente então use `decision_state: approved` e `status: approved`.
6. Acrescente um evento a [`../logs/decisions.jsonl`](../logs/decisions.jsonl).
7. Atualize páginas afetadas por links para o registro, sem apagar o contexto anterior.
8. Se uma decisão substituir outra, use `supersedes`; marque a anterior como `deprecated` após revisão.

## Evento mínimo

```json
{"event_id":"decision-YYYYMMDD-sequence","timestamp":"YYYY-MM-DD","task":"task-id","decision_id":"decision-id","state":"approved","deciders":["person-id"],"record":"../../03_OPERATIONS/decisoes/file.md","supersedes":null}
```

Valores são exemplos de formato e devem ser substituídos por dados registrados.
