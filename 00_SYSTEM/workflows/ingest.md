# Workflow: ingestão

## Pré-condições

- Existe tarefa autorizada com origem, responsável, classificação e caminhos permitidos.
- Um humano colocou a fonte em `01_RAW` ou autorizou o mecanismo de captura. Agentes não alteram `01_RAW`.
- Se houver cliente ativo, aplique também o [isolamento de cliente](client-isolation.md).

## Procedimento

1. **Ler a fonte:** trabalhe sobre o arquivo original sem reescrevê-lo; registre caminho, data de captura e, quando disponível, checksum.
2. **Classificar:** atribua confidencialidade pelo conteúdo mais sensível e identifique o tipo de fonte.
3. **Extrair:** separe fatos, hipóteses, entidades, decisões, riscos e pendências. Preserve trechos e localizações que sustentam cada extração.
4. **Procurar páginas relacionadas:** comece pelo [índice da Wiki](../../02_WIKI/index.md), pesquise títulos, aliases, IDs e termos equivalentes.
5. **Propor alterações:** declare páginas a criar ou atualizar, evidências, contradições, impacto e revisão necessária.
6. **Atualizar páginas:** escreva apenas em caminhos autorizados. Para `approved`, crie proposta de revisão separada.
7. **Atualizar índice:** adicione ou ajuste links em índices relevantes sem duplicar páginas.
8. **Registrar no log:** acrescente uma linha JSON válida a [`../logs/ingestion.jsonl`](../logs/ingestion.jsonl) e uma linha a [`../logs/changes.jsonl`](../logs/changes.jsonl).

## Evento mínimo de ingestão

```json
{"event_id":"ingest-YYYYMMDD-sequence","timestamp":"YYYY-MM-DD","task_id":"task-id","agent":"agent-id","source":"../../01_RAW/path/to/source","classification":"internal","outputs":["../../02_WIKI/path/to/page.md"],"contradictions":[],"status":"review"}
```

Substitua todos os valores de exemplo. Não registre o evento se a fonte não foi realmente processada.

## Saída

- Fonte original intacta.
- Extrações rotuladas por natureza e com proveniência.
- Índices atualizados.
- Eventos auditáveis, um objeto JSON por linha.
- Pendências e contradições visíveis para revisão.
