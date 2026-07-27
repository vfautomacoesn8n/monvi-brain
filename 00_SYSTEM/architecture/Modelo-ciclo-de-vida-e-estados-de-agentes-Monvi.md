---
type: architecture
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: "2026-07-22"
source_task: task-2026-031
classification: internal
---
# Modelo de ciclo de vida e estados de agentes

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

## Matriz de transição de estados

| De | Para | Condição mínima | Aprovação |
|---|---|---|---|
| draft | configured | manifesto e owner definidos | owner |
| configured | validated | políticas, limites e riscos revisados | reviewer |
| validated | simulated | cenário e dados de teste definidos | reviewer |
| simulated | pilot | checklist, rollback e kill switch validados | executivo |
| pilot | active | resultados, custos e risco residual aceitos | executivo |
| active | suspended | incidente, anomalia ou decisão humana | owner ou segurança |
| suspended | active | causa tratada, teste concluído e reaprovação | executivo |
| active | retired | encerramento planejado | owner |
| retired | archived | retenção e evidências concluídas | owner |

Transições não previstas devem ser negadas por padrão.

## Regras de suspensão e reativação

Suspensão deve:

- bloquear novas execuções;
- interromper fila quando seguro;
- revogar sessões aplicáveis;
- preservar evidências;
- registrar motivo;
- notificar owner;
- impedir promoção de estado.

Reativação exige:

- causa identificada;
- correção validada;
- teste controlado;
- risco reavaliado;
- aprovação registrada;
- monitoramento reforçado.

## Aprovação documental da task 031

- data: 2026-07-22;
- aprovador: ceo-monvi;
- origem: task-2026-031;
- status: approved;
- observação: governança operacional aprovada; implementação real permanece fora do escopo.
