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
---# Política de logs, evidências, custos e monitoramento de agentes

## Logs mínimos

Registrar:

- request;
- contexto;
- agente;
- versão;
- política;
- skill;
- ferramenta;
- entrada;
- decisão;
- aprovação;
- tentativa;
- resultado;
- custo;
- duração;
- erro;
- rollback;
- saída;
- responsável.

Não registrar secrets.

## Evidências

Devem permitir reconstruir:

- quem solicitou;
- quem executou;
- quem aprovou;
- o que foi acessado;
- qual ação ocorreu;
- qual resultado foi produzido.

## Custos

Definir limite por:

- agente;
- usuário;
- cliente;
- tarefa;
- ambiente.

## Indicadores

- volume;
- sucesso;
- falha;
- bloqueio;
- tempo;
- custo;
- retry;
- rollback;
- incidentes;
- aprovações;
- anomalias.

## Indicadores e limites de alerta

Cada agente deve possuir metas e limites para:

- taxa de sucesso;
- taxa de falha;
- taxa de retry;
- tempo médio;
- custo médio;
- custo máximo;
- volume;
- bloqueios;
- rollback;
- incidentes;
- anomalias;
- aprovações expiradas.

Ultrapassar limite deve gerar alerta, suspensão ou revisão conforme risco.

## Aprovação documental da task 031

- data: 2026-07-22;
- aprovador: ceo-monvi;
- origem: task-2026-031;
- status: approved;
- observação: governança operacional aprovada; implementação real permanece fora do escopo.
