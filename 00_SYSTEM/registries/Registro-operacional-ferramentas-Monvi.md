---
id: registry-operational-tools-monvi-v1
title: Registro operacional de ferramentas da Monvi
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
  - ferramentas
  - helpper-library
  - governanca
  - operacao
---

# Registro operacional de ferramentas da Monvi

## Objetivo

Separar decisão de stack, inventário documental e comprovação operacional de contas, planos, licenças, ambientes e responsáveis.

## Estados operacionais

```text
unverified
→ requested
→ approved
→ provisioned
→ active
→ suspended
→ deprecated
→ archived
```

## Campos obrigatórios por ferramenta

```yaml
tool_id:
name:
category:
adoption_tier:
operational_state: unverified
owner:
reviewer:
business_purpose:
allowed_users: []
allowed_roles: []
allowed_helppers: []
allowed_clients: []
allowed_projects: []
environments: []
data_classes: []
risk_level:
cost_owner:
billing_model:
renewal_date:
access_review_cycle:
mfa_required:
secret_storage:
integration_dependencies: []
evidence: []
last_reviewed_at:
decommission_plan:
```

## Decisão institucional de stack

| `tool_id` | Ferramenta | Categoria institucional | Estado operacional |
|---|---|---|---|
| `tool-google-workspace` | Google Workspace | oficial | unverified |
| `tool-google-drive` | Google Drive | oficial | unverified |
| `tool-figma` | Figma | oficial | unverified |
| `tool-github` | GitHub | oficial | unverified |
| `tool-google-analytics` | Google Analytics | oficial | unverified |
| `tool-vercel` | Vercel | preferencial | unverified |
| `tool-cloudflare` | Cloudflare | preferencial | unverified |
| `tool-nuvemshop` | Nuvemshop | preferencial | unverified |
| `tool-n8n` | n8n | preferencial | unverified |
| `tool-openai-api` | OpenAI API | preferencial | unverified |
| `tool-make` | Make | alternativa permitida | unverified |

## Interpretação

- a categoria institucional registra preferência aprovada;
- `unverified` significa que conta, plano, licença, titularidade, custo, MFA, ambiente e uso real não foram comprovados;
- a presença na tabela não autoriza acesso nem implantação;
- ferramentas adicionais exigem justificativa e revisão.

## Fonte documental

- [[02_WIKI/tecnologia/Inventario-de-ferramentas]]
- [[00_SYSTEM/architecture/Modelo-biblioteca-skills-ferramentas-e-promocao-conhecimento]]
- [[00_SYSTEM/policies/Politica-ciclo-de-vida-de-acesso-Monvi]]

## Segurança

- secrets ficam fora do Monvi Brain;
- acesso individual, nunca compartilhado;
- MFA quando aplicável;
- menor privilégio;
- revisão periódica;
- revogação em mudança, suspensão ou offboarding;
- dados de clientes permanecem isolados.

## Limites

Este registro não comprova contratação, conta, licença, ambiente, integração, custo ou disponibilidade.
