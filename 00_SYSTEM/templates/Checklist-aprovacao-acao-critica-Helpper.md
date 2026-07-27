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
# Checklist de aprovação de ação crítica
- [ ] identidade autenticada
- [ ] sessão válida
- [ ] MFA recente
- [ ] ator autorizado
- [ ] cliente e projeto corretos
- [ ] ação e recurso identificados
- [ ] risco classificado
- [ ] justificativa e evidência
- [ ] reversão definida
- [ ] custo validado
- [ ] aprovação humana
- [ ] dupla aprovação quando exigida
- [ ] log e monitoramento

## Critérios de reprovação

A ação deve ser reprovada quando:

- identidade ou sessão não puder ser validada;
- cliente estiver incorreto;
- autorização for insuficiente;
- reversão não existir em ação destrutiva;
- evidência for insuficiente;
- custo não estiver autorizado;
- dado sensível estiver fora do escopo;
- houver conflito de interesse;
- o mesmo agente tentar executar e aprovar ação crítica.

## Aprovação documental da task 030

- data: 2026-07-22;
- aprovador: ceo-monvi;
- origem: task-2026-030;
- status: approved;
- observação: especificação documental aprovada; implementação real permanece fora do escopo.
