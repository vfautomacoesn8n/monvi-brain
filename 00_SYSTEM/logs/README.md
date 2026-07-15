# Logs auditáveis

Arquivos JSON Lines: um objeto JSON completo por linha, UTF-8, sem comentários e sem arrays externos. IDs de evento são únicos e datas usam `YYYY-MM-DD`. Não registre segredos ou conteúdo confidencial desnecessário.

- `ingestion.jsonl`: ingestões efetivamente realizadas.
- `changes.jsonl`: mudanças no conhecimento e na arquitetura.
- `decisions.jsonl`: decisões formais.
- `incidents.jsonl`: incidentes sanitizados.
