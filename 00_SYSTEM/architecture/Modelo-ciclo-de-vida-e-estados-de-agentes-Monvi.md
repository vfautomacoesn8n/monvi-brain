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
---# Modelo de ciclo de vida e estados de agentes

## Estados principais

```text
draft
→ configured
→ validated
→ simulated
→ pilot
→ active
→ suspended
→ retired
→ archived
```

## Estados excepcionais

- blocked;
- quarantined;
- incident;
- deprecated.

## Regras de transição

Toda mudança de estado deve registrar:

- motivo;
- responsável;
- data;
- evidência;
- versão;
- ambiente;
- aprovação;
- plano de reversão.

## Critérios mínimos por estado

### draft
Missão e owner definidos.

### configured
Manifesto, limites, ferramentas, skills e escopo definidos.

### validated
Políticas, permissões, riscos e controles revisados.

### simulated
Fluxos testados sem efeito real.

### pilot
Escopo pequeno, supervisão humana, logs, rollback e kill switch.

### active
Piloto concluído, monitoramento ativo e aprovação executiva.

### suspended
Execução bloqueada e evidências preservadas.

### retired
Sem novas execuções e com plano de encerramento.

### archived
Histórico preservado conforme retenção.
