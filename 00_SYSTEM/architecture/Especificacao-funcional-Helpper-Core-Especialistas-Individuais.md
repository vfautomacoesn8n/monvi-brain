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
source_task: task-2026-030
classification: internal
---
# Especificação funcional do Helpper

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

## Separação de responsabilidades

### Monvi Core Brain

Responsável por:

- autenticação;
- identidade;
- sessão;
- autorização;
- políticas;
- isolamento;
- secrets;
- auditoria;
- persistência;
- integrações;
- aprovação técnica;
- execução controlada.

### Helpper Core

Responsável por:

- interpretar a solicitação;
- estruturar o trabalho;
- selecionar Helppers;
- delegar;
- consolidar;
- explicar;
- solicitar aprovação;
- propor ações;
- reportar.

### Regra de fronteira

O Helpper Core não substitui o Monvi Core Brain. O Helpper propõe e coordena; o Monvi Core Brain valida, restringe, registra e executa quando autorizado.

## Matriz mínima por tipo de Helpper

| Critério | Helpper Core | Helpper especialista | Helpper individual |
|---|---|---|---|
| Função principal | Orquestrar | Executar por especialidade | Apoiar uma pessoa |
| Autoridade própria | Nenhuma | Nenhuma | Nenhuma |
| Fonte de permissão | Monvi Core Brain | Monvi Core Brain | Identidade vinculada |
| Pode ampliar permissão | Não | Não | Não |
| Pode aprovar ação crítica | Não sozinho | Não sozinho | Não sozinho |
| Pode publicar externamente | Somente após aprovação | Somente após aprovação | Somente após aprovação |
| Memória | Institucional controlada | Técnica e de domínio | Individual e de trabalho |
| Suspensão | Central | Por agente | Junto da identidade |

## Aprovação documental da task 030

- data: 2026-07-22;
- aprovador: ceo-monvi;
- origem: task-2026-030;
- status: approved;
- observação: especificação documental aprovada; implementação real permanece fora do escopo.
