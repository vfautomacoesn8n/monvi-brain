---
type: policy
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
# Política de ambientes, promoção, piloto e produção de agentes

## Ambientes

- sandbox;
- simulation;
- staging;
- pilot;
- production.

## Regras

- promoção progressiva;
- isolamento entre ambientes;
- credenciais separadas;
- dados mínimos;
- secrets fora do Brain;
- limites específicos por ambiente;
- produção somente após aprovação;
- rollback validado antes do piloto.

## Critérios de piloto

- manifesto aprovado;
- owner humano;
- escopo pequeno;
- baixo risco;
- dados controlados;
- ferramenta autorizada;
- logs;
- limites;
- timeout;
- retry;
- fallback;
- idempotência quando necessária;
- rollback;
- checklist;
- plano de incidente;
- métrica de sucesso.

## Critérios de produção

- piloto concluído;
- incidentes tratados;
- resultados revisados;
- risco residual aceito;
- custos conhecidos;
- suporte definido;
- monitoramento ativo;
- kill switch validado;
- rollback validado;
- owner disponível;
- aprovação executiva.

## Gates de promoção

Cada promoção exige:

- evidência do estado anterior;
- checklist concluído;
- risco residual;
- custo observado;
- incidentes conhecidos;
- owner disponível;
- plano de rollback;
- aprovação com validade;
- ambiente de destino preparado.

Promoção automática para produção é proibida.

## Aprovação documental da task 031

- data: 2026-07-22;
- aprovador: ceo-monvi;
- origem: task-2026-031;
- status: approved;
- observação: governança operacional aprovada; implementação real permanece fora do escopo.
