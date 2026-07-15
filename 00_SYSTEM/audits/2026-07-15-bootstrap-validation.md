# Validação do bootstrap — 2026-07-15

## Escopo

Validação da criação inicial do Monvi Brain na raiz do workspace, antes do início de qualquer ingestão.

## Resultado

| Verificação | Resultado |
| --- | --- |
| JSON | 8 arquivos analisados com sucesso. |
| JSON Schema | 8 schemas declaram Draft 2020-12; todas as referências locais resolvem. |
| JSON Lines | 4 arquivos válidos; 2 eventos reais de bootstrap; IDs de evento únicos. |
| Links Markdown relativos | Todos os alvos locais encontrados. |
| IDs de frontmatter | 20 IDs encontrados; nenhum duplicado. |
| Diretórios requeridos | 47 diretórios presentes e com conteúdo. |
| `01_RAW` | 7 arquivos estruturais: 6 READMEs e o manifesto sem fontes registradas. |
| Ingestão | Não iniciada; `ingestion.jsonl` permanece vazio. |
| Incidentes | Nenhum evento; `incidents.jsonl` permanece vazio. |
| Dependências | Nenhum manifest ou lockfile de gerenciador de dependências; nada instalado. |

## Método

As validações usaram recursos nativos do PowerShell: `ConvertFrom-Json`, resolução de caminhos locais, expressões regulares para links e IDs e inspeção recursiva do workspace. Nenhum pacote foi instalado.

## Limitações

- A validade sintática JSON e a estrutura/referências dos schemas foram verificadas localmente; não foi instalado um validador externo de meta-schema.
- Âncoras Markdown dependem das regras de slug do renderizador; a auditoria confirma os arquivos-alvo dos links relativos.
- `work/` e `outputs/` são pastas vazias preexistentes, gerenciadas pelo ambiente Codex e fora da arquitetura solicitada. Foram preservadas sem alteração.

## Conclusão

O bootstrap atende aos critérios estruturais e permanece pronto para revisão humana. A ingestão de documentos não deve começar até existir tarefa autorizada.
