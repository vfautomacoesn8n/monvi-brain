---
id: registry-operational-repositories-monvi-v1
title: Registro operacional de repositórios da Monvi
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
  - repositorios
  - helpper-library
  - governanca
  - operacao
---

# Registro operacional de repositórios da Monvi

## Objetivo

Registrar cada repositório autorizado com finalidade, owner, acesso, classificação, clientes, projetos, ambientes, revisão e descontinuação.

## Estados operacionais

```text
unverified
→ requested
→ approved
→ provisioned
→ active
→ read-only
→ archived
→ decommissioned
```

## Campos obrigatórios por repositório

```yaml
repository_id:
name:
provider:
repository_type:
operational_state: unverified
owner:
reviewer:
business_purpose:
classification:
visibility:
allowed_users: []
allowed_roles: []
allowed_helppers: []
allowed_clients: []
allowed_projects: []
allowed_environments: []
protected_branches: []
approval_rules: []
secret_scanning:
backup_policy:
retention:
access_review_cycle:
evidence: []
last_reviewed_at:
archive_plan:
decommission_plan:
```

## Regras

- cada repositório deve possuir registro próprio;
- skills e agentes referenciam `repository_id`;
- links com credenciais são proibidos;
- repositório de cliente deve declarar o cliente;
- acesso entre clientes é proibido por padrão;
- leitura não concede escrita;
- escrita não concede administração;
- administração exige aprovação específica;
- branches protegidas e revisão devem ser proporcionais ao risco;
- secrets permanecem fora do Monvi Brain.

## Estado atual

Nenhum repositório operacional foi cadastrado por este lote.

GitHub é parte da stack oficial aprovada, mas organização, repositórios, owners, permissões, ambientes, branches e evidências reais não foram comprovados.

## Fonte de governança

- [[00_SYSTEM/architecture/Modelo-biblioteca-skills-ferramentas-e-promocao-conhecimento]]
- [[00_SYSTEM/architecture/Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais]]
- [[00_SYSTEM/policies/Politica-ciclo-de-vida-de-acesso-Monvi]]

## Limites

Este registro não cria organização, repositório, branch, acesso, token, deploy ou integração.
