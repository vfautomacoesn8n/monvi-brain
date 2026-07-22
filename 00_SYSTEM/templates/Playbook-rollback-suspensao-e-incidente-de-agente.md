---
type: template
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
---# Playbook de rollback, suspensão e incidente de agente

## Gatilhos

- execução não autorizada;
- duplicidade;
- retry destrutivo;
- mistura de clientes;
- custo excessivo;
- falha de isolamento;
- exfiltração;
- conta comprometida;
- ferramenta insegura;
- resultado crítico incorreto.

## Resposta imediata

1. interromper execução;
2. suspender agente;
3. revogar sessão;
4. bloquear ferramenta ou skill;
5. colocar saída em quarentena;
6. preservar evidências;
7. registrar incidente;
8. notificar responsável.

## Rollback

- identificar ponto de restauração;
- executar compensação;
- validar reversão;
- registrar resultado;
- confirmar impacto residual.

## Reativação

Somente após:

- causa identificada;
- correção aplicada;
- teste em ambiente controlado;
- risco reavaliado;
- aprovação registrada;
- monitoramento reforçado.
