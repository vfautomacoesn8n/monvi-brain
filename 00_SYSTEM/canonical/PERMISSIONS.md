# Permissões canônicas

As permissões seguem privilégio mínimo, escopo explícito de tarefa e separação entre produzir uma proposta e aprová-la.

## Matriz de operações

| Operação | Agente de IA | Revisão humana |
| --- | --- | --- |
| Ler conteúdo dentro do escopo e classificação autorizados | Permitido | Não exigida por padrão |
| Criar rascunho ou proposta em caminhos permitidos | Permitido | Antes de `approved` |
| Atualizar nota `draft` ou `review` | Permitido no escopo | Conforme impacto |
| Alterar nota `approved` | Somente proposta de revisão separada | Obrigatória |
| Alterar conteúdo em `01_RAW` | Proibido para agentes: não criar, editar, mover, renomear ou excluir. Exceção somente em tarefa administrativa excepcional explicitamente aprovada por humano | Obrigatória |
| Atualizar [`registries/source-manifest.md`](../registries/source-manifest.md) | Permitido em ingestão autorizada e dentro do escopo | Conforme classificação e impacto |
| Excluir arquivo | Proibido | Autorização humana explícita e registrada |
| Arquivar ou depreciar | Proposta permitida | Obrigatória para conteúdo aprovado |
| Alterar política jurídica, financeira, comercial, estratégica, LGPD ou segurança | Proposta permitida | Obrigatória |

## Contrato de tarefa

Toda tarefa de escrita deve declarar:

- `id`: ID único e canônico da tarefa;
- `type`: deve ser `task`;
- `title`: resultado esperado da tarefa;
- `status`: estado editorial da nota;
- `owner`: responsável pela tarefa;
- `reviewer`: pessoa responsável pela revisão ou `unassigned`, sempre como string não vazia;
- `confidentiality`: classificação aplicável à tarefa;
- `active_client`: identificador do cliente ativo ou `null` quando a tarefa não estiver ligada a cliente;
- `created_at` e `updated_at`: datas no formato `YYYY-MM-DD`;
- `agent`: agente responsável;
- `allowed_paths`: caminhos em que a tarefa pode criar, editar, mover ou excluir conforme a autorização;
- `read_only_paths`: caminhos que podem ser consultados, mas nunca alterados;
- `forbidden_paths`: caminhos que não podem ser lidos nem alterados;
- `requires_review`: booleano que indica se a entrega exige revisão;
- `acceptance_criteria`: evidências objetivas de conclusão.

Ausência ou ambiguidade de escopo autoriza leitura mínima e elaboração de plano, não escrita expansiva.

`01_RAW` nunca pode constar em `allowed_paths`. Quando uma tarefa precisar consultar uma fonte RAW, deve declarar o caminho exato em `read_only_paths`. Os três conjuntos de caminhos são mutuamente exclusivos: o mesmo caminho não pode constar em mais de um deles.

## Fluxo de revisão

1. Criar uma tarefa em [`../tasks/inbox/`](../tasks/inbox/README.md).
2. Mover para `active` somente após definição de escopo.
3. Produzir mudanças em branch ou worktree separado.
4. Registrar o diff, validações e pontos de risco.
5. Mover para `review`; o agente escritor não atua como aprovador final.
6. Após aprovação, integrar em `main` e mover a tarefa para `done`.

Tarefas bloqueadas vão para [`../tasks/blocked/`](../tasks/blocked/README.md) com motivo e condição de desbloqueio.
