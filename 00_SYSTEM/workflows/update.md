# Workflow: atualização

## Procedimento

1. Confirme tarefa, agente, caminhos permitidos, caminhos proibidos e cliente ativo.
2. Localize a nota por índice, ID, título e aliases; procure duplicatas.
3. Leia a nota, suas fontes, páginas relacionadas e mudanças recentes no Git.
4. Classifique a mudança como correção factual, atualização temporal, conexão, depreciação ou proposta de revisão.
5. Se o status for `approved`, não edite a página: crie uma proposta em `00_SYSTEM/tasks/review` com diff esperado, fontes e impacto.
6. Para `draft` ou `review`, faça a menor alteração suficiente, preserve informação contraditória e atualize `updated_at`.
7. Atualize índices e páginas relacionadas quando links ou identidade mudarem.
8. Acrescente um evento a [`../logs/changes.jsonl`](../logs/changes.jsonl) com tarefa, agente, caminhos, justificativa e revisão requerida.
9. Valide frontmatter, links, IDs e diff antes de entregar para revisão.

## Restrições

- Não alterar `01_RAW`.
- Não reduzir confidencialidade nem promover a `approved` automaticamente.
- Não excluir; depreciação e arquivamento preservam o histórico.
