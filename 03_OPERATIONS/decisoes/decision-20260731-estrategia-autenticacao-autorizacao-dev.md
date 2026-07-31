---
id: "decision-20260731-estrategia-autenticacao-autorizacao-dev"
type: decision
title: "Decisão — estratégia de autenticação e autorização RBAC para ambiente dev (Fase 4)"
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
confidentiality: internal
created_at: "2026-07-31"
updated_at: "2026-07-31"
reviewed_at: "2026-07-31"
decided_at: "2026-07-31"
sources:
  - ../../00_SYSTEM/tasks/active/TASK-2026-044-identidade-autenticacao-autorizacao.md
  - ../../00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - ../../00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md
  - ../../00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md
related:
  - ../../00_SYSTEM/logs/changes.jsonl
  - ../../00_SYSTEM/logs/decisions.jsonl
tags: [decision, core-brain, auth, session, rbac, permissions, fase-4]
decision_state: approved
context: "Definir a arquitetura técnica de verificação de identidade, gerenciamento de sessões/tokens e controle de acesso RBAC para a Fase 4."
decision: "APROVADA pelo CEO da Monvi para implementação dos serviços e middlewares de autenticação/autorização em ambiente de desenvolvimento local."
---

# Decisão — estratégia de autenticação e autorização RBAC para ambiente dev (Fase 4)

## Contexto

A Fase 3 do Plano Mestre disponibilizou a infraestrutura relacional local e o schema Drizzle contendo as entidades `person`, `identity`, `profile`, `role`, `permission`, `role_permission`, `session` e `audit_event`.

A Fase 4 exige a implementação dos mecanismos executáveis de autenticação e autorização no `apps/core-brain`.

---

## Escopo Autorizado

O CEO da Monvi aprovou a seguinte estratégia para a Fase 4 da Task 044:

1. **Estratégia de Sessão e Token Dev**:
   - Autenticação baseada em tokens de sessão aleatórios e seguros (hash SHA-256 armazenado na tabela `session`).
   - Leitura no header `Authorization: Bearer <session_token>`.
2. **Middleware de Autenticação Fastify**:
   - Resolução do usuário ativo (`request.user`) contendo os IDs da `person`, `profile`, `role` e lista de permissões ativas.
3. **Guarda de Autorização RBAC (Role-Based Access Control)**:
   - Funções utilitárias/middlewares como `requirePermission('recurso:acao')` e `requireRole('role_name')`.
   - Resposta padronizada de erro HTTP `401 Unauthorized` (para ausência/expiração de token) e `403 Forbidden` (para falta de permissão).
4. **Registro de Auditoria de Acesso**:
   - Gravação de tentativas de login, expiração, revogação e negação de acesso na tabela `audit_event`.

---

## Bloqueios Mantidos

- Esta decisão **NÃO AUTORIZA**:
  - Integração com provedores OAuth externos reais em ambiente público;
  - Armazenamento ou uso de credenciais e segredos de produção;
  - Utilização de dados reais de clientes;
  - Deploy em ambientes de homologação ou produção.

---

## Revisão e Aprovação Humana

- Decisão: `APROVADA`
- Decisor: `ceo-monvi`
- Declaração registrada: `APROVO A DECISÃO DE AUTENTICAÇÃO E AUTORIZAÇÃO DEV`
- Data: `2026-07-31`
