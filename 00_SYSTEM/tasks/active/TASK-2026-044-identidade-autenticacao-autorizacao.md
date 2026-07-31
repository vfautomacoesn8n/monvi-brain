---
id: task-2026-044
title: Identidade, autenticação e autorização do Monvi Core Brain MVP (Fase 4)
type: task
status: draft
task_state: active
owner: ceo-monvi
agent: antigravity
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
confidentiality: internal
classification: internal
created_at: "2026-07-31"
updated_at: "2026-07-31"
reviewed_at: null
version: "0.1.0"
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/tasks/done/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - 03_OPERATIONS/decisoes/decision-20260731-estratégia-autenticacao-autorizacao-dev.md
  - 00_SYSTEM/audits/Execucao-task-2026-044-identidade-autenticacao-autorizacao.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/logs/decisions.jsonl
  - apps/core-brain/
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/schemas/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md
  - 01_RAW/
  - 02_WIKI/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 01_RAW/
  - 05_SHARED/
tags:
  - core-brain
  - mvp
  - auth
  - identity
  - session
  - rbac
  - permissions
  - fase-4
acceptance_criteria:
  - Decisão formal sobre a estratégia de autenticação e autorização dev registrada e submetida para aprovação.
  - Modelagem e serviços de sessão/token dev criados em `apps/core-brain`.
  - Middleware Fastify de verificação de autenticação de sessão dev implementado.
  - Guardas/Middlewares de autorização baseados em papéis e permissões (RBAC) implementados.
  - Trilha de audit de eventos de autenticação/acesso integrada à tabela `audit_event`.
  - Testes unitários e de integração de autenticação e autorização aprovados com 100% de sucesso.
  - Nenhum provedor OAuth externo real, credenciais reais ou ambiente de produção ativado.
blocked_reason: "Esta task autoriza apenas simulação/estratégia de autenticação e autorização em ambiente dev local. OAuth público real, dados reais e produção permanecem bloqueados."
---

# Task 044 — Identidade, autenticação e autorização do Monvi Core Brain MVP (Fase 4)

## Natureza e objetivo

Esta task abre a **Fase 4 do Plano Mestre de Construção do Monvi Brain**.

Seu objetivo é implementar a camada de **Identidade, Autenticação e Autorização (RBAC)** no `apps/core-brain`, criando os serviços de gerenciamento de sessões/tokens dev, middlewares de autenticação, checadores de permissões baseados nas tabelas de banco criadas na Fase 3, e registro de auditoria de acessos.

---

## Contexto e Precedentes

- **Fase 1**: Fundação técnica executável do backend Node.js 24/Fastify (`/health`, `/ready`).
- **Fase 2**: Modelo conceitual relacional e contrato de API `/api/v1` aprovados.
- **Fase 3**: Concluída na Task 043 com a persistência técnica relacional PostgreSQL + Drizzle ORM (schemas de `person`, `identity`, `profile`, `role`, `permission`, `session`, `audit_event`, migrações e seeds).
- **Plano Mestre**: Define a Fase 4 como a camada de controle de acesso testável que protegerá todas as rotas operacionais futuras.

---

## Escopo Autorizado nesta Task

1. **Decisão de Estratégia de Autenticação/Autorização Dev**:
   - Registrar a proposta `decision-20260731-estratégia-autenticacao-autorizacao-dev.md` para aprovação humana antes da implementação dos middlewares.
2. **Serviço de Autenticação e Sessão Dev (`apps/core-brain/src/modules/auth/`)**:
   - Criação/validação de tokens de sessão dev e hashing seguro de tokens.
   - Resolução da identidade ativa (`person`, `identity`, `profile`).
3. **Middleware de Autenticação Fastify**:
   - Leitura do header `Authorization: Bearer <session_token>` ou `x-dev-session-id`.
   - Injeção do contexto do usuário autenticado no objeto `request.user`.
4. **Middleware de Autorização RBAC (Role-Based Access Control)**:
   - Checagem de permissão por recurso/ação (ex: `requirePermission('core_brain:read')`).
   - Retorno sanitizado `401 Unauthorized` e `403 Forbidden` alinhados ao contrato de API.
5. **Auditoria de Eventos de Acesso**:
   - Gravação de eventos de login/logout/acesso negado na tabela `audit_event`.
6. **Testes de Segurança Automatizados**:
   - Testes unitários e de integração para autenticação válida, token expirado, token revogado e negação de permissão.
   - Auditoria técnica em `00_SYSTEM/audits/Execucao-task-2026-044-identidade-autenticacao-autorizacao.md`.

---

## Fora do Escopo e Bloqueios

- Nenhum provedor OAuth externo real (Google Workspace OAuth real, Auth0, Okta) conectado a produção.
- Nenhuma chave secreta ou credencial real de produção armazenada em código ou Git.
- Nenhum dado real de cliente.
- Nenhuma alteração em ambiente de homologação ou produção pública.

---

## Sequência Recomendada

1. Aprovação humana desta Task e da Proposta de Decisão de Estratégia de Autenticação/Autorização Dev.
2. Criação do módulo de autenticação/sessão em `apps/core-brain/src/modules/auth/`.
3. Implementação dos middlewares de autenticação e autorização Fastify.
4. Integração com a gravação de audit_events.
5. Criação de suítes de testes de segurança automatizados.
6. Atualização de documentação, audit e submissão dos gates formais.
