# Permissões canônicas

As permissões seguem privilégio mínimo, escopo explícito de tarefa e separação entre produzir uma proposta e aprová-la.

## Matriz de operações

| Operação | Agente de IA | Revisão humana |
| --- | --- | --- |
| Ler conteúdo dentro do escopo e classificação autorizados | Permitido | Não exigida por padrão |
| Criar rascunho ou proposta em caminhos permitidos | Permitido | Antes de `approved` |
| Atualizar nota `draft` ou `review` | Permitido no escopo | Conforme impacto |
| Alterar nota `approved` | Somente proposta de revisão separada | Obrigatória |
| Adicionar fonte original a `01_RAW` | Somente por processo humano ou ingestão autorizada; agentes não alteram | Obrigatória |
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
- `allowed_paths`: caminhos que podem ser modificados;
- `forbidden_paths`: caminhos proibidos, incluindo `01_RAW` para agentes;
- `requires_review`: booleano que indica se a entrega exige revisão;
- `acceptance_criteria`: evidências objetivas de conclusão.

Ausência ou ambiguidade de escopo autoriza leitura mínima e elaboração de plano, não escrita expansiva.

## Fluxo de revisão

1. Criar uma tarefa em [`../tasks/inbox/`](../tasks/inbox/README.md).
2. Mover para `active` somente após definição de escopo.
3. Produzir mudanças em branch ou worktree separado.
4. Registrar o diff, validações e pontos de risco.
5. Mover para `review`; o agente escritor não atua como aprovador final.
6. Após aprovação, integrar em `main` e mover a tarefa para `done`.

Tarefas bloqueadas vão para [`../tasks/blocked/`](../tasks/blocked/README.md) com motivo e condição de desbloqueio.
