---
type: template
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: "2026-07-22"
source_task: task-2026-030
classification: internal
---
# Playbook de incidente e suspensão

## Gatilhos
Escalada, mistura de clientes, exfiltração, ferramenta não autorizada, custo excessivo, prompt injection, conta comprometida ou ação crítica sem aprovação.

## Resposta
1. interromper
2. suspender
3. revogar sessão
4. bloquear skill ou ferramenta
5. quarentenar saída
6. preservar evidências
7. registrar
8. notificar

## Recuperação
Corrigir, revisar permissões, testar, aprovar, reativar gradualmente e monitorar.

## Classificação de severidade

- SEV-1: risco crítico, vazamento, execução não autorizada ou comprometimento;
- SEV-2: impacto alto, mistura de clientes ou falha relevante de controle;
- SEV-3: impacto moderado, falha recuperável ou custo excedido;
- SEV-4: impacto baixo, erro operacional sem exposição.

SEV-1 e SEV-2 exigem suspensão imediata e revisão humana.

## Aprovação documental da task 030

- data: 2026-07-22;
- aprovador: ceo-monvi;
- origem: task-2026-030;
- status: approved;
- observação: especificação documental aprovada; implementação real permanece fora do escopo.
