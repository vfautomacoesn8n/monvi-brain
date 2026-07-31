---
id: model-data-core-brain-mvp
title: Modelo conceitual de dados do Monvi Core Brain MVP
type: architecture_spec
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
confidentiality: internal
classification: internal
created_at: "2026-07-31"
updated_at: "2026-07-31"
reviewed_at: "2026-07-31"
version: "1.0.0"
task_id: task-2026-041
sources:
  - 00_SYSTEM/tasks/active/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md
  - 00_SYSTEM/canonical/AI-CONTRACT.md
  - 00_SYSTEM/canonical/PERMISSIONS.md
  - 00_SYSTEM/canonical/SECURITY.md
  - 03_OPERATIONS/decisoes/decision-20260730-stack-core-brain-mvp.md
related:
  - 00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Contrato-Identity-Gateway-Google-Workspace-Monvi.md
tags:
  - core-brain
  - modelo-de-dados
  - arquitetura
  - relacional
  - mvp
---

# Modelo conceitual de dados do Monvi Core Brain MVP

## Natureza do documento

Este documento define a especificação conceitual e contratual do modelo relacional de dados do Monvi Core Brain MVP.

> Este documento é exclusivamente conceitual e arquitetural. Não autoriza a criação de schemas SQL executáveis, migrações, scripts de banco, conexão com PostgreSQL real, ORM Drizzle em código ou dados de clientes nesta etapa.

---

## 1. Princípios do Modelo de Dados

1. **Identificadores Estáveis**: Chaves primárias universais baseadas em UUIDv4 (`UUID`).
2. **Isolamento Multi-Tenant**: Separação estrita de dados por cliente (`client_id`) e projeto (`project_id`).
3. **Desacoplamento de Identidade**: Separação clara entre a pessoa física (`person`), suas identidades externas (`identity`) e seus papéis/perfis (`profile`/`role`).
4. **Exclusão Lógica e Temporalidade**: Registro de criação (`created_at`), atualização (`updated_at`), e exclusão lógica via campo de timestamp (`deleted_at`).
5. **Rastreabilidade e Auditoria**: Relação de autoria (`created_by`) e registro append-only de eventos de auditoria técnica (`audit_event`).
6. **Conformidade LGPD**: Minimização de dados pessoais e tratamento seguro de PII (Personally Identifiable Information).

---

## 2. Entidades Principais e Relacionamentos

### 2.1. `person` (Pessoa)
Representa o indivíduo humano ou agente institucional no ecossistema Monvi.

- `id`: UUID (PK, NOT NULL)
- `full_name`: VARCHAR(255) (NOT NULL)
- `display_name`: VARCHAR(120) (NOT NULL)
- `status`: ENUM ('active', 'suspended', 'deactivated') (NOT NULL, DEFAULT 'active')
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `updated_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `deleted_at`: TIMESTAMP WITH TIME ZONE (NULLABLE)

### 2.2. `identity` (Identidade Externa)
Mapeia os provedores de autenticação externos (ex: Google Workspace OAuth) vinculados a uma pessoa.

- `id`: UUID (PK, NOT NULL)
- `person_id`: UUID (FK -> `person.id`, NOT NULL)
- `provider`: VARCHAR(60) (NOT NULL, ex: 'google')
- `provider_subject`: VARCHAR(255) (NOT NULL, identificador estável no provedor)
- `email`: VARCHAR(255) (NOT NULL)
- `email_verified`: BOOLEAN (NOT NULL, DEFAULT false)
- `hosted_domain`: VARCHAR(120) (NULLABLE, ex: 'monvi.com.br')
- `last_authenticated_at`: TIMESTAMP WITH TIME ZONE (NULLABLE)
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `updated_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `deleted_at`: TIMESTAMP WITH TIME ZONE (NULLABLE)

*Restrição de integridade*: UNIQUE(`provider`, `provider_subject`).

### 2.3. `profile` (Perfil Operacional / Helpper)
Define a atuação de uma pessoa ou agente dentro do ambiente operacional (ex: Helpper CEO, Helpper Operacional, Usuário Cliente).

- `id`: UUID (PK, NOT NULL)
- `person_id`: UUID (FK -> `person.id`, NOT NULL)
- `profile_type`: ENUM ('ceo', 'helpper_individual', 'internal_staff', 'client_user') (NOT NULL)
- `title`: VARCHAR(120) (NOT NULL)
- `bio`: TEXT (NULLABLE)
- `is_active`: BOOLEAN (NOT NULL, DEFAULT true)
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `updated_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `deleted_at`: TIMESTAMP WITH TIME ZONE (NULLABLE)

### 2.4. `role` (Papel de Acesso)
Representa um conjunto de permissões atribuíveis no sistema.

- `id`: UUID (PK, NOT NULL)
- `name`: VARCHAR(60) (NOT NULL, UNIQUE, ex: 'admin', 'operator', 'viewer')
- `description`: TEXT (NULLABLE)
- `scope_level`: ENUM ('system', 'client', 'project') (NOT NULL)
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `updated_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)

### 2.5. `permission` (Permissão Granular)
Declara ações permitidas sobre recursos específicos.

- `id`: UUID (PK, NOT NULL)
- `resource`: VARCHAR(120) (NOT NULL, ex: 'core_brain:read', 'client:manage')
- `action`: VARCHAR(60) (NOT NULL, ex: 'read', 'write', 'execute')
- `description`: TEXT (NULLABLE)
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)

### 2.6. `role_permission` (Junção Papel-Permissão)
Tabela de junção N:N associando permissões a papéis.

- `role_id`: UUID (FK -> `role.id`, NOT NULL)
- `permission_id`: UUID (FK -> `permission.id`, NOT NULL)
- Primary Key: (`role_id`, `permission_id`)

### 2.7. `client` (Cliente / Organização)
Representa uma empresa parceira ou cliente atendido pela Monvi.

- `id`: UUID (PK, NOT NULL)
- `name`: VARCHAR(255) (NOT NULL)
- `trade_name`: VARCHAR(255) (NULLABLE)
- `document_number`: VARCHAR(30) (NULLABLE, CNPJ/CPF sanitizado)
- `status`: ENUM ('active', 'onboarding', 'suspended', 'churned') (NOT NULL, DEFAULT 'onboarding')
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `updated_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `deleted_at`: TIMESTAMP WITH TIME ZONE (NULLABLE)

### 2.8. `contact` (Ponto de Contato no Cliente)
Pontos de contato humanos associados a um cliente.

- `id`: UUID (PK, NOT NULL)
- `client_id`: UUID (FK -> `client.id`, NOT NULL)
- `name`: VARCHAR(255) (NOT NULL)
- `email`: VARCHAR(255) (NOT NULL)
- `phone`: VARCHAR(30) (NULLABLE)
- `role_description`: VARCHAR(120) (NULLABLE)
- `is_primary`: BOOLEAN (NOT NULL, DEFAULT false)
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `updated_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `deleted_at`: TIMESTAMP WITH TIME ZONE (NULLABLE)

### 2.9. `project` (Projeto)
Empreendimento ou escopo de trabalho específico vinculado a um cliente.

- `id`: UUID (PK, NOT NULL)
- `client_id`: UUID (FK -> `client.id`, NOT NULL)
- `code`: VARCHAR(60) (NOT NULL, ex: 'PRJ-MONVI-001')
- `name`: VARCHAR(255) (NOT NULL)
- `description`: TEXT (NULLABLE)
- `status`: ENUM ('planning', 'active', 'paused', 'completed', 'archived') (NOT NULL, DEFAULT 'planning')
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `updated_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `deleted_at`: TIMESTAMP WITH TIME ZONE (NULLABLE)

*Restrição*: UNIQUE(`client_id`, `code`).

### 2.10. `project_membership` (Membro do Projeto)
Associação de pessoas/perfis a projetos com papéis específicos.

- `id`: UUID (PK, NOT NULL)
- `project_id`: UUID (FK -> `project.id`, NOT NULL)
- `person_id`: UUID (FK -> `person.id`, NOT NULL)
- `role_id`: UUID (FK -> `role.id`, NOT NULL)
- `joined_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `left_at`: TIMESTAMP WITH TIME ZONE (NULLABLE)
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)

### 2.11. `session` (Sessão de Usuário)
Sessões de autenticação ativas e revogáveis.

- `id`: UUID (PK, NOT NULL)
- `person_id`: UUID (FK -> `person.id`, NOT NULL)
- `identity_id`: UUID (FK -> `identity.id`, NOT NULL)
- `session_token_hash`: VARCHAR(255) (NOT NULL, UNIQUE)
- `ip_address`: VARCHAR(45) (NULLABLE)
- `user_agent`: TEXT (NULLABLE)
- `expires_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)
- `revoked_at`: TIMESTAMP WITH TIME ZONE (NULLABLE)
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)

### 2.12. `audit_event` (Evento de Auditoria)
Trilha imutável (append-only) de ações técnicas e operacionais.

- `id`: UUID (PK, NOT NULL)
- `event_type`: VARCHAR(120) (NOT NULL, ex: 'auth.login.success', 'brain.read.attempt')
- `severity`: ENUM ('info', 'warn', 'error', 'critical') (NOT NULL, DEFAULT 'info')
- `actor_person_id`: UUID (FK -> `person.id`, NULLABLE)
- `client_id`: UUID (FK -> `client.id`, NULLABLE)
- `project_id`: UUID (FK -> `project.id`, NULLABLE)
- `action_details`: JSONB (NOT NULL, com redação automática de dados sensíveis)
- `request_id`: VARCHAR(120) (NULLABLE)
- `created_at`: TIMESTAMP WITH TIME ZONE (NOT NULL)

---

## 3. Matriz de Cardinalidade e Integridade

| Entidade Origem | Entidade Destino | Relação | Regra de Integridade |
| --- | --- | --- | --- |
| `person` | `identity` | 1 : N | Exclusão em cascata (ou desativação de identidades). |
| `person` | `profile` | 1 : N | Perfis vinculados à pessoa. |
| `client` | `contact` | 1 : N | Exclusão lógica no cliente reflete nos contatos. |
| `client` | `project` | 1 : N | Projeto sempre obriga `client_id` existente. |
| `project` | `project_membership` | 1 : N | Junção obrigando `project_id` e `person_id`. |
| `role` | `permission` | N : N | Junção via `role_permission`. |
| `person` | `session` | 1 : N | Revogação marca `revoked_at` sem apagar registro histórico. |

---

## 4. Segurança, LGPD e Retenção

- **Isolamento de Dados**: Nenhuma consulta a projetos ou contatos pode omitir o filtro `client_id`.
- **Redação em Logs e Auditoria**: `audit_event.action_details` proíbe o armazenamento de tokens, senhas, chaves de API, secrets ou documentos na íntegra.
- **Tratamento de Exclusão**: A exclusão de `person` ou `client` é tratada via Exclusão Lógica (`deleted_at IS NOT NULL`). A purga física de PII deverá seguir a política de retenção da Monvi (mínimo 5 anos para obrigações legais, ou mediante solicitação expressa de descarte LGPD).

---

## 5. Escopo Bloqueado nesta Fase

- Criação de arquivos SQL, migrações Drizzle ou scripts de banco.
- Instalação de drivers PostgreSQL (`pg`, `postgres`) ou Drizzle ORM.
- Execução de comandos no banco de dados.
- Modificação de código em `apps/core-brain/`.
