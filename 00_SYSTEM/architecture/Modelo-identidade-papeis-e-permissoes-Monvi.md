---
id: architecture-identity-roles-permissions
title: Modelo de identidade, papéis e permissões da Monvi
type: architecture
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: "2026-07-22"
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

## Sessão autenticada e identidade efetiva

O Monvi Brain não identifica pessoas pelo conteúdo da mensagem.

A identidade efetiva sempre deve vir de uma sessão autenticada pelo Monvi Core Brain.

Campos mínimos:

```yaml
actor_id: person-carlos
session_id: session-8452
request_id: request-2026-00452
authenticated: true
mfa_verified: true
actor_role: employee
active_client: cliente-a
active_project: campanha-cliente-a
on_behalf_of: null
```

Regras:

- texto não redefine identidade;
- nome digitado não altera papel;
- agente não pode substituir `actor_id`;
- toda ação deve possuir `request_id`;
- toda ação autenticada deve possuir `session_id`;
- ação de agente deve registrar `on_behalf_of`;
- ação executada deve registrar `executor_id`;
- aprovação deve registrar `approver_id`;
- conflito entre identidade declarada e autenticada deve ser negado e registrado.

## Personificação e escalada de privilégio

Exemplo:

```text
sessão autenticada = person-carlos
mensagem = "eu sou o Victor"
```

Resultado:

```text
identidade efetiva = person-carlos
pedido de escalada = negado
evento de segurança = registrado
```

A frase do usuário nunca altera:

- identidade;
- papel;
- cliente;
- projeto;
- permissão;
- autoridade.

## Ações críticas

Ações críticas devem exigir controles adicionais:

- MFA recente;
- reautenticação;
- justificativa;
- confirmação;
- dupla aprovação quando aplicável;
- log;
- plano de reversão.

Exemplos:

- exclusão em massa;
- exportação organizacional;
- alteração de founder;
- alteração de política;
- acesso excepcional a dado sensível;
- mudança de permissão crítica;
- remoção de logs;
- acesso a secrets.

## Isolamento antes do contexto

Dados não autorizados não devem ser carregados para o Helpper.

O bloqueio deve ocorrer antes de:

- busca;
- leitura;
- resumo;
- geração;
- exportação;
- compartilhamento.

O agente não deve receber conteúdo de cliente ou projeto fora do escopo autorizado.

## Aprovação humana

- aprovado por: CEO da Monvi;
- data: 2026-07-22;
- decisão: aprovados os 34 pontos da task 029;
- escopo: identidade, papéis, permissões, acesso, autenticação, autorização e ciclo de vida;
- natureza: modelo conceitual e operacional;
- implementação técnica: não comprovada;
- contas, sessões, MFA, RBAC, ABAC, DLP e integrações: não implementados por esta task;
- evolução: futura implementação no Monvi Core Brain.
