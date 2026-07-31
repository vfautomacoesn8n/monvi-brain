---
id: task-2026-043
title: Persistência local e migrações do Monvi Core Brain MVP (Fase 3)
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
reviewed_at: "2026-07-31T12:17:00-03:00"
version: "1.0.0"
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-043-persistencia-local-e-migracoes.md
  - 00_SYSTEM/tasks/done/TASK-2026-043-persistencia-local-e-migracoes.md
  - 03_OPERATIONS/decisoes/decision-20260731-persistencia-local-postgresql-drizzle.md
  - 00_SYSTEM/audits/Execucao-task-2026-043-persistencia-local-e-migracoes.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/logs/decisions.jsonl
  - apps/core-brain/
  - infrastructure/local/
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
  - database
  - postgresql
  - drizzle
  - migrations
  - fase-3
acceptance_criteria:
  - Decisão formal sobre PostgreSQL local e Drizzle registrada e aprovada.
  - Configuração do Drizzle ORM e Drizzle Kit criada em `apps/core-brain`.
  - Schema Drizzle TypeScript relacional correspondente ao `Modelo-dados-Core-Brain-MVP.md` implementado.
  - Scripts de migração gerados e reproduzíveis em ambiente dev local.
  - Fixtures/seeds com dados sintéticos fictícios criados para desenvolvimento local.
  - Endpoint `/api/v1/ready` atualizado com verificação de conectividade do banco de dados local.
  - Testes de integração de repositório e persistência local criados e aprovados.
  - Nenhum dado real de cliente, credencial remota, homologação ou produção utilizado.
blocked_reason: "Esta task autorizou apenas configuração e testes de banco de dados em ambiente local de desenvolvimento. Credenciais de produção, dados reais, autenticação externa e deploy permanecem bloqueados."
---

# Task 043 — Persistência local e migrações do Monvi Core Brain MVP (Fase 3)

## Natureza e objetivo

Esta task realizou a **Fase 3 do Plano Mestre de Construção do Monvi Brain**.

Seu objetivo foi implementar a camada de persistência relacional técnica em ambiente de desenvolvimento local, utilizando PostgreSQL e Drizzle ORM, com base no modelo conceitual aprovado na Fase 2 (`00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md`).

---

## Contexto e Precedentes

- **Fase 1**: Concluída na Task 041 com a fundação executável em Node.js 24, Fastify, Zod, Pino, Vitest, `/health` e `/ready`.
- **Fase 2**: Concluída na Task 041 (Opção A) com a aprovação e integração do Modelo de Dados Conceitual e Contrato de API em `main`.
- **Plano Mestre**: Define a Fase 3 como a etapa de introdução de persistência técnica relacional local descartável.

---

## Escopo Executado nesta Task

1. **Decisão de Stack e Infraestrutura Local**:
   - Decisão formal `decision-20260731-persistencia-local-postgresql-drizzle.md` aprovada pelo CEO da Monvi com a declaração `APROVO A DECISÃO DE PERSISTÊNCIA LOCAL`.
   - Criado `infrastructure/local/docker-compose.yml` para suporte a PostgreSQL 16 Alpine local dev.
2. **Dependências do Backend (`apps/core-brain`)**:
   - Instaladas dependências `drizzle-orm`, `postgres` (prod) e `drizzle-kit`, `@types/pg` (dev).
3. **Mapeamento de Schema TypeScript**:
   - Mapeadas em `apps/core-brain/src/db/schema/` as 11 entidades conceituais: `person`, `identity`, `profile`, `role`, `permission`, `client`, `contact`, `project`, `project_membership`, `session` e `audit_event`.
4. **Gerenciamento de Migrações**:
   - Configurado `drizzle.config.ts`.
   - Gerada migração SQL inicial em `apps/core-brain/drizzle/0000_orange_hammerhead.sql`.
   - Adicionados scripts npm em `apps/core-brain/package.json`: `db:generate`, `db:migrate`, `db:seed`.
5. **Seeds com Dados Sintéticos**:
   - Script de população `src/db/seed.ts` com dados 100% fictícios para ambiente dev.
6. **Integração de Prontidão (`/ready`)**:
   - Atualizado `GET /api/v1/ready` em `src/http/routes/health.ts` com a função `checkDatabaseHealth()` em `src/db/client.ts`.
7. **Testes e Auditoria**:
   - Testes de integração em `tests/db.test.ts`. 3 suítes, 6 testes aprovados, 0 erros de tipagem, build compilado.
   - Relatório em `00_SYSTEM/audits/Execucao-task-2026-043-persistencia-local-e-migracoes.md`.

---

## Conclusão da Task

- **Abertura da Proposta**: Pull Request [#10](https://github.com/vfautomacoesn8n/monvi-brain/pull/10) (commit `62d1905062a6904e2f660f4005d4500bdf58214f`).
- **Implementação Técnica**: Pull Request [#11](https://github.com/vfautomacoesn8n/monvi-brain/pull/11) (commit `e3364d70cc8986627eb9d48e72f0772349e3cbe5`).
- **Estado**: Finalizada e movida para `00_SYSTEM/tasks/done/`.
