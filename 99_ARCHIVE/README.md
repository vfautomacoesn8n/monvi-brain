# Arquivo

Conteúdo histórico fora do fluxo ativo, preservado para auditoria.

## Regra

Arquivamento não equivale a exclusão.

Ao arquivar:

- preservar IDs;
- preservar proveniência;
- preservar histórico Git;
- registrar caminho original e motivo;
- registrar substituição, quando houver;
- revisar retenção;
- revisar links;
- preservar isolamento de cliente;
- manter rollback possível.

## Workflow

- [[00_SYSTEM/workflows/archive]]

## Estrutura

A organização deve manter relação compreensível com a origem. Não mover ou renomear em massa sem mapa de impacto e aprovação.

## Restrições

- não armazenar secrets;
- não misturar clientes;
- não usar o arquivo para ocultar risco, conflito ou pendência;
- não considerar conteúdo arquivado como vigente sem revisão;
- não excluir conteúdo por conveniência.
