---
id: task-2026-044
title: Identidade, autenticação e autorização do Monvi Core Brain MVP (Fase 4)
type: task
status: done
task_state: done
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
reviewed_at: "2026-07-31T13:28:00-03:00"
version: "1.0.0"
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
blocked_reason: "Esta task autorizou apenas simulação/estratégia de autenticação e autorização em ambiente dev local. OAuth público real, dados reais e produção permanecem bloqueados."
---

# Task 044 — Identidade, autenticação e autorização do Monvi Core Brain MVP (Fase 4)

## Natureza e objetivo

Esta task realizou a **Fase 4 do Plano Mestre de Construção do Monvi Brain**.

Seu objetivo foi implementar a camada de **Identidade, Autenticação e Autorização (RBAC)** no `apps/core-brain`, criando os serviços de gerenciamento de sessões/tokens dev, middlewares de autenticação, checadores de permissões baseados nas tabelas de banco criadas na Fase 3, e registro de auditoria de acessos.

---

## Contexto e Precedentes

- **Fase 1**: Fundação técnica executável do backend Node.js 24/Fastify (`/health`, `/ready`).
- **Fase 2**: Modelo conceitual relacional e contrato de API `/api/v1` aprovados.
- **Fase 3**: Concluída na Task 043 com a persistência técnica relacional PostgreSQL + Drizzle ORM (schemas de `person`, `identity`, `profile`, `role`, `permission`, `session`, `audit_event`, migrações e seeds).
- **Plano Mestre**: Define a Fase 4 como a camada de controle de acesso testável que protegerá todas as rotas operacionais futuras.

---

## Escopo Executado nesta Task

1. **Decisão de Estratégia de Autenticação/Autorização Dev**:
   - Decisão formal `decision-20260731-estrategia-autenticacao-autorizacao-dev.md` aprovada pelo CEO da Monvi com a declaração `APROVO A DECISÃO DE AUTENTICAÇÃO E AUTORIZAÇÃO DEV`.
2. **Serviço de Autenticação e Sessão Dev (`apps/core-brain/src/modules/auth/`)**:
   - `tokens.ts`: Geração e hashing SHA-256 de tokens de sessão.
   - `session.service.ts`: Serviços `createSession()`, `validateSessionToken()` e `revokeSessionToken()`.
3. **Middlewares de Segurança Fastify (`apps/core-brain/src/http/middlewares/`)**:
   - `authenticate.ts`: Verificação do header `Authorization: Bearer <token>` e injeção do usuário em `request.user` (`401 Unauthorized` se ausente/inválido).
   - `authorize.ts`: Guardas RBAC `requirePermission('recurso:acao')` e `requireRole('role_name')` (`403 Forbidden` se negado).
4. **Serviço de Auditoria**:
   - `src/modules/audit/audit.service.ts`: Gravação de eventos na tabela `audit_event`.
5. **Rotas da API**:
   - `POST /api/v1/auth/dev-login`, `POST /api/v1/auth/logout`, `GET /api/v1/auth/me` e `GET /api/v1/protected-sample`.
6. **Testes Automatizados de Segurança**:
   - `tests/auth.test.ts`: Hashing determinístico, rejeição sem token (`401`) e token inválido (`401`). 4 suítes, 9 testes integrados aprovados.
   - Relatório em `00_SYSTEM/audits/Execucao-task-2026-044-identidade-autenticacao-autorizacao.md`.

---

## Conclusão da Task

- **Abertura da Proposta**: Pull Request [#13](https://github.com/vfautomacoesn8n/monvi-brain/pull/13) (commit `235ee2f30e55dc96683239459dcc97482a8b925b`).
- **Implementação Técnica**: Pull Request [#14](https://github.com/vfautomacoesn8n/monvi-brain/pull/14) (commit `d071c6b2a5a0416f0f05aff4aa16152b7ce9b5a5`).
- **Estado**: Finalizada e movida para `00_SYSTEM/tasks/done/`.
