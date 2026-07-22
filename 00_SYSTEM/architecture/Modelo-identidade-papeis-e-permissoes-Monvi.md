---
id: architecture-identity-roles-permissions
title: Modelo de identidade, papéis e permissões da Monvi
type: architecture
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

# Modelo de identidade, papéis e permissões da Monvi

## Objetivo

Definir como pessoas, agentes e contas de serviço serão identificados e autorizados no ecossistema Monvi.

## Princípios

- identidade individual e não compartilhada;
- menor privilégio;
- negação por padrão;
- separação de funções;
- permissão explícita;
- escopo limitado;
- validade definida;
- auditoria;
- revogação rápida;
- secrets fora do Monvi Brain.

## Tipos de identidade

- founder-ceo;
- executive;
- manager;
- employee;
- contractor;
- partner;
- client;
- auditor;
- agent;
- service-account.

## Campos mínimos

```yaml
id: person-victor
name: Victor
identity_type: founder-ceo
status: active
manager: null
roles:
  - founder-ceo
department: executive
active_clients: []
active_projects: []
valid_from: "2026-07-22"
valid_until: null
mfa_required: true
can_manage_users: true
can_manage_roles: true
can_approve_canonical: true
can_approve_critical_actions: true
can_view_audit_logs: true
requires_review: true
```

## Founders e CEOs

Victor e Filipe possuem:

- espaço individual;
- Helpper individual;
- autoridade executiva máxima;
- escopo institucional amplo;
- aprovação de conteúdo canônico;
- gestão de usuários e papéis;
- aprovação de acessos críticos;
- consulta a logs;
- suspensão de agentes e integrações.

## Limites dos founders

Autoridade máxima não significa ausência de controle.

Continuam obrigatórios:

- MFA;
- logs;
- confirmação para exclusões destrutivas;
- justificativa para acesso sensível;
- secrets fora do Monvi Brain;
- credenciais individuais;
- dupla aprovação quando aplicável;
- revisão humana em ações críticas.

## Espaço individual

```text
people/
└── <person-id>/
    ├── profile.md
    ├── roles.md
    ├── permissions.md
    ├── clients.md
    ├── projects.md
    ├── memory/
    ├── skills/
    └── helpper/
```

## Regra de autorização

Uma ação só é permitida quando:

```text
identidade válida
+ papel autorizado
+ escopo autorizado
+ recurso permitido
+ ação permitida
+ classificação compatível
+ prazo válido
+ contexto de cliente correto
+ aprovação adicional quando exigida
```

## Herança

A herança deve ser controlada.

- papel não concede acesso universal;
- departamento não concede acesso a todos os clientes;
- projeto não concede acesso a secrets;
- Helpper não herda mais poder que a pessoa;
- skill não amplia permissão;
- exceção deve ser explícita, temporária e registrada.

## Contas de serviço

Toda conta de serviço deve ter:

- owner humano;
- finalidade;
- escopo;
- validade;
- credencial externa;
- rotação;
- logs;
- condição de suspensão;
- plano de revogação.

## Estados

```text
invited
→ active
→ suspended
→ offboarding
→ archived
```

Estados complementares:

- expired;
- blocked;
- revoked.

## Critérios de revisão

- função atual;
- clientes ativos;
- projetos ativos;
- ferramentas;
- repositórios;
- skills;
- nível de risco;
- validade;
- necessidade de acesso.
