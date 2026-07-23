---
id: registry-operational-skills-monvi-v1
title: Registro operacional de skills da Monvi
type: record
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
  - skills
  - helpper-library
  - governanca
  - operacao
---

# Registro operacional de skills da Monvi

## Objetivo

Registrar skills reutilizáveis da Helpper Library sem tratar documentação como implementação, permissão ou disponibilidade técnica.

## Regra central

Skill não concede permissão.

O uso continua condicionado a identidade, papel, cliente, projeto, ferramenta, repositório, política e revisão humana aplicáveis.

## Ciclo de vida

```text
draft
→ active-local
→ proposed
→ approved
→ deprecated
```

## Campos obrigatórios por skill

```yaml
skill_id:
name:
version:
creator:
owner:
reviewer:
specialty:
lifecycle_state: draft
visibility: individual
risk_level:
allowed_users: []
allowed_roles: []
allowed_helppers: []
allowed_clients: []
allowed_projects: []
inputs: []
outputs: []
allowed_tools: []
allowed_repositories: []
restrictions: []
classification:
valid_until:
review_cycle:
last_reviewed_at:
evidence: []
decommission_plan:
```

## Critérios mínimos para promoção

- utilidade comprovada;
- owner e reviewer definidos;
- versão, entradas e saídas documentadas;
- tratamento de erro;
- ausência de secrets;
- ausência de dados de cliente embutidos;
- não duplicidade;
- custo justificável;
- rollback ou remoção possível;
- evidência revisada.

## Estado atual

Nenhuma skill operacional foi cadastrada por este lote.

Arquitetura e critérios aprovados existem, mas implementação, disponibilidade, execução e métricas reais não estão comprovadas.

## Fonte de governança

- [[00_SYSTEM/architecture/Modelo-biblioteca-skills-ferramentas-e-promocao-conhecimento]]
- [[00_SYSTEM/architecture/Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais]]
- [[00_SYSTEM/templates/Manifesto-Helpper-especialista]]
- [[00_SYSTEM/templates/Manifesto-operacional-de-agente]]

## Limites

- este registro não ativa skill;
- este registro não concede acesso;
- nenhum secret deve ser inserido;
- métricas não aprovam promoção automaticamente.
