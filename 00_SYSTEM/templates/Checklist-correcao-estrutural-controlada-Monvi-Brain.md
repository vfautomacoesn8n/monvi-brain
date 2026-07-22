---
id: template-monvi-brain-controlled-structural-correction
title: Checklist de correção estrutural controlada do Monvi Brain
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
  - monvi-brain
  - checklist
  - correcao-estrutural
related:
  - policy-monvi-brain-metadata-taxonomy-links-versioning
  - registry-monvi-brain-v1-audit-findings-classification
---

# Checklist de correção estrutural controlada do Monvi Brain

## Identificação

```yaml
correction_id:
source_task:
owner:
reviewer:
scope:
risk:
rollback:
```

## Antes da alteração

- [ ] O objetivo está claro.
- [ ] O documento foi classificado.
- [ ] A regra aplicável está aprovada.
- [ ] O arquivo não pertence a RAW.
- [ ] Alteração em canonical possui autorização explícita.
- [ ] Cliente e projeto foram verificados.
- [ ] Owner não foi inferido sem evidência.
- [ ] Reviewer não foi inferido sem evidência.
- [ ] Source task não foi inventada.
- [ ] Links propostos representam relações reais.
- [ ] O escopo Git está limpo, exceto anomalias conhecidas.
- [ ] O staging está vazio.
- [ ] Existe plano de rollback.

## Durante a alteração

- [ ] Apenas allowed paths foram alterados.
- [ ] Read-only paths foram respeitados.
- [ ] Forbidden paths foram respeitados.
- [ ] O diff permaneceu pequeno.
- [ ] Não houve normalização massiva de line endings.
- [ ] Não houve renomeação em lote.
- [ ] Não houve mistura entre clientes.
- [ ] Nenhum secret foi inserido.
- [ ] Datas seguem ISO 8601.
- [ ] IDs seguem o padrão.
- [ ] Status e task state não foram confundidos.

## Validação

- [ ] `git diff --check` passou.
- [ ] O escopo real corresponde ao esperado.
- [ ] Links foram revisados.
- [ ] Frontmatter foi validado.
- [ ] IDs duplicados foram verificados.
- [ ] Owner foi confirmado.
- [ ] Reviewer foi confirmado.
- [ ] Classificação foi preservada.
- [ ] Documento permanece em review quando aplicável.
- [ ] Evidência da alteração foi registrada.

## Staging

- [ ] Apenas arquivos esperados foram staged.
- [ ] Anomalias conhecidas ficaram fora.
- [ ] `git diff --cached --check` passou.
- [ ] `git diff --cached --name-status` foi revisado.

## Aprovação

- [ ] Reviewer avaliou o conteúdo.
- [ ] Correção foi aprovada ou rejeitada.
- [ ] Rejeição registra motivo.
- [ ] Aprovação registra evento.
- [ ] Documento foi movido apenas quando o ciclo exigir.
- [ ] Testes finais não foram confundidos com validação estrutural local.
