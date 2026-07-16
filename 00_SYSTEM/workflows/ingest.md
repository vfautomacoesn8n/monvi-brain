# Workflow: ingestão

## Pré-condições

- Existe tarefa autorizada com origem, responsável, classificação e caminhos permitidos.
- Um humano colocou a fonte em `01_RAW` ou autorizou o mecanismo de captura. Todo conteúdo de `01_RAW` é somente leitura para agentes: nenhum arquivo nessa árvore pode ser criado, editado, movido, renomeado ou excluído, salvo tarefa administrativa excepcional explicitamente aprovada por humano.
- A tarefa deve declarar a fonte em `read_only_paths`; `allowed_paths`, `read_only_paths` e `forbidden_paths` são mutuamente exclusivos.
- O [`manifesto de fontes`](../registries/source-manifest.md) pode ser atualizado como metadado operacional quando estiver nos caminhos permitidos da tarefa.
- Se houver cliente ativo, aplique também o [isolamento de cliente](client-isolation.md).

## Procedimento

1. **Identificar e ler a fonte:** trabalhe sobre o arquivo original sem reescrevê-lo e registre o caminho de origem.
2. **Validar integridade e calcular hash:** confirme a legibilidade disponível e registre checksum quando possível, sem alterar a fonte.
3. **Classificar a fonte:** atribua confidencialidade pelo conteúdo mais sensível e identifique o tipo de fonte.
4. **Registrar ou atualizar o manifesto operacional:** somente depois da classificação, atualize [`../registries/source-manifest.md`](../registries/source-manifest.md), sem modificar o arquivo original.
5. **Extrair categorias:** separe fatos, conceitos, entidades, hipóteses, decisões, riscos e pendências; preserve trechos e localizações que sustentam cada extração.
6. **Procurar conhecimento relacionado:** comece pelo [índice da Wiki](../../02_WIKI/index.md), pesquise títulos, aliases, IDs e termos equivalentes.
7. **Propor alterações:** declare páginas a criar ou atualizar, evidências, contradições, impacto e revisão necessária.
8. **Obter aprovação:** aguarde a autorização humana antes de qualquer escrita planejada.
9. **Executar alterações autorizadas:** escreva apenas em `allowed_paths`. Para `approved`, crie proposta de revisão separada.
10. **Atualizar índices:** adicione ou ajuste links em índices relevantes sem duplicar páginas.
11. **Atualizar logs:** acrescente uma linha JSON válida a [`../logs/ingestion.jsonl`](../logs/ingestion.jsonl) e uma linha a [`../logs/changes.jsonl`](../logs/changes.jsonl).
12. **Validar:** valide schemas, frontmatter, links, IDs, JSONL, escopo e integridade da fonte.
13. **Encaminhar a tarefa para revisão:** mova a tarefa concluída para `review` e mantenha a aprovação final para humano.

## Evento mínimo de ingestão

```json
{"event_id":"ingest-YYYYMMDD-sequence","timestamp":"YYYY-MM-DD","task":"task-id","agent":"agent-id","source":"../../01_RAW/path/to/source","classification":"internal","outputs":["../../02_WIKI/path/to/page.md"],"contradictions":[],"status":"review"}
```

Substitua todos os valores de exemplo. Não registre o evento se a fonte não foi realmente processada.

## Saída

- Fonte original intacta.
- Manifesto operacional atualizado após classificação.
- Extrações rotuladas por natureza e com proveniência.
- Índices atualizados.
- Eventos auditáveis, um objeto JSON por linha.
- Pendências e contradições visíveis para revisão.
