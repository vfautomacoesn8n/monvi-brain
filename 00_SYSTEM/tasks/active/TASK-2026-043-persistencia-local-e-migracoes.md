---
id: task-2026-043
title: Persistência local e migrações do Monvi Core Brain MVP (Fase 3)
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
blocked_reason: "Esta task autoriza apenas configuração e testes de banco de dados em ambiente local de desenvolvimento. Credenciais de produção, dados reais, autenticação externa e deploy permanecem bloqueados."
---

# Task 043 — Persistência local e migrações do Monvi Core Brain MVP (Fase 3)

## Natureza e objetivo

Esta task abre a **Fase 3 do Plano Mestre de Construção do Monvi Brain**.

Seu objetivo é implementar a camada de persistência relacional técnica em ambiente de desenvolvimento local, utilizando PostgreSQL e Drizzle ORM, com base no modelo conceitual aprovado na Fase 2 (`00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md`).

---

## Contexto e Precedentes

- **Fase 1**: Concluída na Task 041 com a fundação executável em Node.js 24, Fastify, Zod, Pino, Vitest, `/health` e `/ready`.
- **Fase 2**: Concluída na Task 041 (Opção A) com a aprovação e integração do Modelo de Dados Conceitual e Contrato de API em `main`.
- **Plano Mestre**: Define a Fase 3 como a etapa de introdução de persistência técnica relacional local descartável.

---

## Escopo Autorizado nesta Task

1. **Decisão de Stack e Infraestrutura Local**:
   - Registrar a decisão formal `decision-20260731-persistencia-local-postgresql-drizzle.md` para autorização de dependências de banco em ambiente dev.
   - Configuração de banco local descartável (Docker Compose ou PostgreSQL local dev) em `infrastructure/local/`.
2. **Dependências do Backend (`apps/core-brain`)**:
   - Instalação controlada de `drizzle-orm` e driver PostgreSQL (ex: `postgres` ou `pg`) em produção/dev.
   - Instalação de `drizzle-kit` em dev.
3. **Mapeamento de Schema TypeScript**:
   - Mapear em `apps/core-brain/src/db/schema/` as 11 entidades conceituais: `person`, `identity`, `profile`, `role`, `permission`, `client`, `contact`, `project`, `project_membership`, `session` e `audit_event`.
4. **Gerenciamento de Migrações**:
   - Configurar `drizzle.config.ts`.
   - Gerar migrações SQL reproduzíveis em `apps/core-brain/drizzle/`.
   - Criar scripts npm em `apps/core-brain/package.json`: `db:generate`, `db:migrate`, `db:seed`.
5. **Seeds com Dados Sintéticos**:
   - Script de população com dados 100% fictícios para ambiente dev.
6. **Integração de Prontidão (`/ready`)**:
   - Atualizar `GET /api/v1/ready` para validar a saúde da conexão com o banco de dados.
7. **Testes e Auditoria**:
   - Testes de integração automatizados com o banco local.
   - Relatório em `00_SYSTEM/audits/Execucao-task-2026-043-persistencia-local-e-migracoes.md`.

---

## Fora do Escopo e Bloqueios

- Nenhum dado real de cliente ou pessoa real.
- Nenhum acesso a banco de dados de homologação ou produção remota.
- Nenhuma credencial real de produção no código ou Git.
- Nenhuma rota adicional de negócio além das existentes e atualizações sanitizadas.
- Nenhuma integração com Google Workspace OAuth real ou busca vetorial.

---

## Sequência Recomendada

1. Aprovação humana desta Task e da Decisão de Stack de Persistência Local.
2. Configuração das dependências e scripts de banco em `apps/core-brain`.
3. Implementação dos schemas Drizzle TypeScript.
4. Geração e execução das migrações locais.
5. Criação do script de seed sintético e verificação no `/ready`.
6. Testes de integração automatizados.
7. Auditoria, logs e submissão dos gates para PR/merge.
