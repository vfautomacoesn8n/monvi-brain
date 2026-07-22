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
source_task: task-2026-030
classification: internal
---# Especificação funcional do Helpper

## Helpper Core
Recebe, valida contexto, classifica, delega, acompanha, consolida, solicita aprovação, reporta e registra.

Não autentica, não concede permissão, não acessa secrets, não aprova canônico sozinho, não publica nem executa ação crítica sem autorização.

## Helpper especialista
Deve ter ID, missão, especialidade, escopo, fontes, skills, ferramentas, repositórios, ações permitidas e proibidas, risco, responsável humano e critérios de escalonamento.

## Helpper individual
Vinculado a uma pessoa, nunca com mais autoridade que ela, isolado por cliente e projeto, suspenso junto da identidade e auditado.

## Estados
received → validated → delegated → executing → waiting-review → waiting-approval → completed

Alternativos: failed, blocked, cancelled.

## Qualidade
Distinguir fato, hipótese, recomendação e decisão; declarar limitações; não inventar; citar fontes autorizadas; registrar evidências e riscos.