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
source_task: task-2026-030
classification: internal
---# Política de segurança, supervisão e limites do Helpper

## Princípios
Negação por padrão, menor privilégio, isolamento antes do contexto, secrets fora do Brain, supervisão proporcional ao risco e interrupção segura.

## Aprovação
Baixo: leitura e rascunho.
Médio: revisão humana.
Alto: aprovação explícita.
Crítico: reautenticação, aprovação qualificada, evidência e reversão.

## Kill switch
Suspender agente, usuário, ferramenta, skill, integração e sessão; colocar saída em quarentena; preservar evidência.

## Proibições
Alterar própria permissão, aprovar própria ação crítica, ocultar falha, misturar clientes, operar sem log ou armazenar secret.