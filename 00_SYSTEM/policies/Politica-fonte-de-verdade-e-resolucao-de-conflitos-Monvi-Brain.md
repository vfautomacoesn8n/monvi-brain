---
id: policy-monvi-brain-source-of-truth-conflict-resolution
title: Política de fonte de verdade e resolução de conflitos do Monvi Brain
type: policy
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
  - monvi-brain
  - fonte-de-verdade
  - conflitos
related:
  - policy-monvi-brain-metadata-taxonomy-links-versioning
---

# Política de fonte de verdade e resolução de conflitos do Monvi Brain

## Objetivo

Definir qual documento prevalece quando existirem versões, interpretações ou registros conflitantes no Monvi Brain.

## Ordem de autoridade

```text
canonical
→ policies
→ architecture
→ processes
→ procedures
→ templates
→ tasks
→ outputs
→ raw
```

## Interpretação da ordem

### Canonical

Contém definições institucionais fundamentais e aprovadas.

Não deve ser alterado sem autorização explícita.

### Policies

Definem regras obrigatórias.

### Architecture

Define estrutura, limites, componentes e relações.

### Processes

Define fluxo recorrente de trabalho.

### Procedures

Define execução detalhada.

### Templates

Orienta produção consistente, mas não substitui política.

### Tasks

Registra trabalho, decisão operacional, escopo e aprovação.

### Outputs

Registra resultado produzido.

### Raw

Preserva material de origem e não é automaticamente verdade institucional.

## Regras de prevalência

Quando dois documentos conflitarem:

1. verificar status;
2. verificar versão;
3. verificar data de aprovação;
4. verificar autoridade documental;
5. verificar escopo;
6. verificar cliente e projeto;
7. verificar decisão registrada;
8. suspender uso quando o conflito for crítico.

Documento mais recente não prevalece automaticamente.

## Conflito crítico

É crítico quando afeta:

- segurança;
- privacidade;
- cliente;
- autorização;
- aprovação;
- preço;
- contrato;
- operação financeira;
- publicação;
- execução de agente;
- dados pessoais;
- obrigação legal.

## Tratamento de conflito

O conflito deve registrar:

```yaml
conflict_id:
detected_at:
detected_by:
documents:
scope:
impact:
temporary_rule:
owner:
reviewer:
decision_id:
status:
```

## Regra temporária

Enquanto o conflito não for resolvido:

- usar a fonte de maior autoridade aprovada;
- bloquear ação irreversível;
- não inventar interpretação;
- escalar ao owner;
- registrar limitação;
- preservar evidências.

## Obsolescência

Documento substituído deve:

- usar `status: deprecated` ou `status: archived`;
- apontar para o substituto;
- preservar histórico;
- deixar de ser referência principal;
- não ser apagado sem política de retenção.

## Chat e memória

Chat, memória de sessão e recomendação de agente:

- não são fonte oficial;
- não alteram política;
- não aprovam documento;
- podem originar task, hipótese ou decisão em review;
- precisam ser formalizados para ganhar autoridade.

## Critérios de aprovação

- ordem de autoridade validada;
- tratamento de conflito validado;
- regra temporária validada;
- obsolescência validada;
- chats excluídos como fonte oficial;
- conflitos críticos exigem supervisão humana.
