---
id: template-monvi-document-evidence
title: Template de evidência documental
type: template
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
source_task: task-2026-032
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
version: "0.1.0"
tags:
  - monvi
  - template
  - evidencia
related:
  - policy-monvi-brain-document-security-isolation
---

# Template de evidência documental

```yaml
evidence_id:
title:
type: evidence
status: review
owner:
reviewer:
active_client:
active_project:
classification:
created_at:
source_task:
source:
integrity_reference:
retention:
```

## O que a evidência comprova

Descrever a afirmação, decisão, execução ou aprovação sustentada.

## Origem

- pessoa;
- sistema;
- arquivo;
- commit;
- task;
- evento;
- data.

## Conteúdo resumido

Registrar somente o necessário.

## Integridade

- hash, quando aplicável;
- commit;
- caminho;
- timestamp;
- versão.

## Validação

```yaml
validated_by:
validated_at:
validation_result:
```

## Segurança

- não incluir secrets;
- não copiar dados pessoais desnecessários;
- respeitar classificação;
- respeitar isolamento por cliente;
- registrar destino autorizado.

## Retenção e descarte

Definir prazo, justificativa e responsável.
