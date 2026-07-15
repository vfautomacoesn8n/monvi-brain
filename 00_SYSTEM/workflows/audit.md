# Workflow: auditoria

## Escopo

Auditorias são somente leitura, salvo tarefa separada que autorize correções. Salve relatórios em [`../audits/`](../audits/README.md).

## Verificações obrigatórias

1. **Links quebrados:** extraia links Markdown relativos, ignore URLs externas e confirme cada alvo e âncora quando possível.
2. **Páginas órfãs:** encontre Markdown sem link de entrada, exceto pontos de entrada, templates e READMEs.
3. **IDs duplicados:** compare todo campo `id` de frontmatter e todos os IDs de eventos JSONL.
4. **Páginas sem fontes:** sinalize conhecimento factual ou institucional cujo `sources` esteja vazio.
5. **Revisão vencida:** calcule o vencimento por `reviewed_at` e `review_cycle`; `null` exige revisão quando o conteúdo não for apenas rascunho de bootstrap.
6. **Contradições:** pesquise marcadores e registros de conflito sem responsável ou próximo passo.
7. **Mudanças indevidas em RAW:** use o diff do Git para detectar qualquer alteração em `01_RAW` e trate-a como incidente.
8. **Vazamento entre clientes:** verifique links, cópias, nomes, IDs e fontes que atravessem diretórios de clientes sem autorização.
9. **Metadados:** valide enumerações, datas `YYYY-MM-DD`, campos obrigatórios e referências aos schemas.
10. **Segredos:** procure indicadores de credenciais sem imprimir valores encontrados.

## Relatório

Registre data, commit auditado, escopo, verificações, achados com severidade, evidências por caminho, falsos positivos, responsável e ação recomendada. Auditoria não corrige nem encerra achados silenciosamente.
