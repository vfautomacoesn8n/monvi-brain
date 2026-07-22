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
---# Contrato de contexto, delegação e reporte

## Contexto mínimo
```yaml
actor_id:
session_id:
request_id:
executor_id:
on_behalf_of:
active_client:
active_project:
role:
permissions: []
data_classification:
allowed_paths: []
read_only_paths: []
forbidden_paths: []
allowed_tools: []
allowed_skills: []
requires_review: true
risk_level:
```

## Delegação
Não delegar sem contexto, fora do escopo, com secret ou com ampliação de permissão. Registrar solicitante, executor e aprovador.

## Reporte
Registrar tarefa, escopo, fontes, skills, ferramentas, fatos, hipóteses, decisões, evidências, resultado, erros, limitações, custo, aprovação necessária, conhecimento proposto e risco residual.

## Validação obrigatória antes da execução

Antes de iniciar, o sistema deve confirmar:

- identidade autenticada;
- sessão válida;
- papel ativo;
- cliente correto;
- projeto correto;
- recurso permitido;
- ferramenta permitida;
- skill permitida;
- classificação do dado;
- risco;
- necessidade de revisão;
- orçamento disponível.

Na ausência de qualquer item obrigatório, o resultado deve ser `blocked`.

## Cadeia de responsabilidade

Toda execução deve permitir responder:

- quem solicitou;
- em nome de quem;
- quem executou;
- quem revisou;
- quem aprovou;
- qual cliente estava ativo;
- qual projeto estava ativo;
- quais recursos foram acessados;
- quais ferramentas foram usadas;
- qual resultado foi produzido.

## Aprovação documental da task 030

- data: 2026-07-22;
- aprovador: ceo-monvi;
- origem: task-2026-030;
- status: approved;
- observação: especificação documental aprovada; implementação real permanece fora do escopo.
