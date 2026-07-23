# Workflow: arquivamento documental

## Objetivo

Retirar conteúdo do fluxo ativo sem apagar histórico, IDs, proveniência, decisões, evidências ou rastreabilidade Git.

## Quando arquivar

O arquivamento pode ser proposto quando o conteúdo estiver:

- encerrado;
- substituído;
- inativo;
- fora do escopo operacional atual;
- preservado apenas para auditoria ou histórico;
- com retenção obrigatória, mas sem uso ativo.

Arquivamento não equivale a exclusão.

## Pré-condições

Antes de mover qualquer arquivo:

1. confirmar owner e reviewer;
2. confirmar cliente e projeto;
3. verificar classificação;
4. verificar retenção jurídica, fiscal, contratual, LGPD e de segurança;
5. identificar links de entrada e saída;
6. identificar documento substituto, quando houver;
7. registrar motivo e impacto;
8. definir caminhos permitidos, somente leitura e proibidos;
9. preparar rollback;
10. obter aprovação humana quando a mudança afetar conteúdo aprovado, cliente, jurídico, LGPD, segurança ou decisão institucional.

## Procedimento

1. registrar a proposta em task governada;
2. validar que `01_RAW` não será alterado;
3. validar que canonical não será alterado sem autorização explícita;
4. preservar `id`, fontes, decisões e histórico;
5. atualizar `status` para `archived` quando o documento governado suportar frontmatter;
6. registrar no corpo ou na task:
   - motivo;
   - caminho original;
   - destino;
   - documento substituto, quando houver;
   - aprovador;
   - data;
7. mover para `99_ARCHIVE` preservando uma estrutura compreensível;
8. atualizar links e índices afetados;
9. atualizar `00_SYSTEM/logs/changes.jsonl`;
10. revisar o diff;
11. fazer staging somente dos caminhos autorizados;
12. obter revisão humana antes do commit quando exigido.

## Regras

- não excluir arquivos para “limpar” o vault;
- não arquivar documento apenas por estar antigo;
- não romper proveniência;
- não alterar documentos históricos para parecerem atuais;
- não misturar clientes;
- não reduzir classificação;
- não usar arquivamento para ocultar risco ou pendência;
- não normalizar line endings em massa;
- não renomear em lote sem mapa de impacto.

## Resultado esperado

- conteúdo fora do fluxo ativo;
- histórico preservado;
- links corrigidos;
- substituição explícita;
- retenção respeitada;
- rollback possível;
- log e Git auditáveis.

## Limites

Este workflow não define prazos jurídicos de retenção. Prazos permanecem pendentes de validação responsável em [[02_WIKI/seguranca/Retencao-de-dados]].
