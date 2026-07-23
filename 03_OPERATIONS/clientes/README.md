# Operações de clientes

Cada cliente deve ter subpasta própria e isolada. Antes de criar ou acessar conteúdo, siga o [workflow de isolamento](../../00_SYSTEM/workflows/client-isolation.md).

## Padrão

- [[Estrutura-padrao-cliente-Monvi]]
- template-base: [[00_SYSTEM/templates/client]]

## Regras

- nenhum cliente real deve ser criado sem autorização humana;
- cada cliente deve possuir `client_id`, owner, reviewer e classificação;
- dados de clientes diferentes não podem ser misturados;
- secrets permanecem fora do Monvi Brain;
- a estrutura desta pasta não comprova acesso, contrato ou operação ativa.

## Estado atual

Nenhum cliente real foi adicionado.
