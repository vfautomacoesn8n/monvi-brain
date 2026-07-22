---
type: policy
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
