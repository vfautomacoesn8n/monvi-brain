---
id: template-user-helpper-profile
title: Template de perfil de usuário e Helpper individual
type: template
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
source_task: task-2026-029
classification: internal
---

# Template de perfil de usuário e Helpper individual

## Perfil da pessoa

```yaml
id:
name:
identity_type:
status: invited
manager:
department:
roles: []
active_clients: []
active_projects: []
valid_from:
valid_until:
mfa_required:
approval_owner:
created_at:
updated_at:
```

## Permissões

```yaml
read_scopes: []
write_scopes: []
approval_scopes: []
execution_scopes: []
tools: []
repositories: []
forbidden_actions: []
temporary_exceptions: []
```

## Helpper individual

```yaml
helpper_id:
linked_person_id:
status: disabled
specialty_profile:
allowed_skills: []
allowed_tools: []
allowed_repositories: []
allowed_clients: []
allowed_projects: []
memory_scope:
report_to: helpper-core
requires_human_review: true
```

## Evidências

- aprovação;
- teste de acesso;
- MFA;
- aceite de política;
- revisão periódica;
- offboarding.
