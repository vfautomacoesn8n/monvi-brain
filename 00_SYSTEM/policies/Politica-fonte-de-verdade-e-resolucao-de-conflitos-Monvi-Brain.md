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
updated_at: "2026-07-24"
reviewed_at: null
version: "0.2.0"
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

## Modelo de precedência em dois eixos

A precedência deve ser avaliada em dois eixos, nesta ordem.

### Eixo 1 — autoridade documental

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

### Eixo 2 — maturidade dentro do mesmo nível

```text
approved
→ verified
→ review
→ hypothesis
→ raw/generated
```

O eixo de maturidade não permite que um documento de menor autoridade substitua automaticamente um documento de maior autoridade.

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

1. identificar o nível de autoridade documental;
2. aplicar primeiro o eixo de autoridade documental;
3. quando estiverem no mesmo nível, verificar maturidade;
4. verificar aprovação;
5. verificar versão;
6. verificar data de aprovação;
7. verificar escopo;
8. verificar cliente e projeto;
9. verificar evidência;
10. verificar decisão formalmente registrada;
11. suspender uso quando o conflito for crítico.

Uma decisão humana não substitui automaticamente canonical ou policy. A decisão deve ser formalizada no nível documental adequado.

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
