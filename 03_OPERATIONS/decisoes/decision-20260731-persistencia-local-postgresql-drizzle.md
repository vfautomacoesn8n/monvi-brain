---
id: "decision-20260731-persistencia-local-postgresql-drizzle"
type: decision
title: "Decisão — autorização da persistência local com PostgreSQL e Drizzle ORM (Fase 3)"
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
confidentiality: internal
created_at: "2026-07-31"
updated_at: "2026-07-31"
reviewed_at: "2026-07-31"
decided_at: "2026-07-31"
sources:
  - ../../00_SYSTEM/tasks/active/TASK-2026-043-persistencia-local-e-migracoes.md
  - ../../00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - ../../00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md
  - ./decision-20260730-stack-core-brain-mvp.md
related:
  - ../../00_SYSTEM/logs/changes.jsonl
  - ../../00_SYSTEM/logs/decisions.jsonl
tags: [decision, core-brain, database, postgresql, drizzle, fase-3]
decision_state: approved
context: "Autorizar a instalação de dependências e configuração de persistência técnica relacional local (PostgreSQL e Drizzle ORM) para a Fase 3."
decision: "APROVADA pelo CEO da Monvi para instalação de dependências de banco de dados e orquestração descartável exclusivamente em ambiente de desenvolvimento local."
---

# Decisão — autorização da persistência local com PostgreSQL e Drizzle ORM (Fase 3)

## Contexto

A Fase 2 do Plano Mestre definiu e aprovou conceitualmente o modelo relacional de dados do Core Brain (`Modelo-dados-Core-Brain-MVP.md`).

A Fase 3 requer a introdução de persistência técnica relacional em ambiente de desenvolvimento local para suportar migrações, schemas TypeScript e testes de repositório.

Conforme a regra de governança, a aprovação inicial da stack na Task 041 (`decision-20260730-stack-core-brain-mvp.md`) exigia uma decisão formal e autorização explícita separada antes da instalação de drivers de banco de dados e ORM.

---

## Escopo Autorizado

O CEO da Monvi aprovou a seguinte autorização para a Fase 3 da Task 043:

1. **Instalação das dependências de banco de dados em `apps/core-brain`**:
   - `drizzle-orm` (ORM TypeScript);
   - `postgres` (driver de conexão PostgreSQL para Node.js);
   - `drizzle-kit` e `@types/pg` (dependências de desenvolvimento para migrações e tipagem).
2. **Criação da infraestrutura local**:
   - Arquivo de orquestração local `infrastructure/local/docker-compose.yml` expondo instância isolada de PostgreSQL em dev.
3. **Criação de Migrações e Schemas**:
   - Mapeamento em código dos schemas relacionais e geração de migrações descartáveis em `apps/core-brain/drizzle/`.

---

## Bloqueios Mantidos

- Esta decisão **NÃO AUTORIZA**:
  - Conexão com bancos de dados remotos, homologação ou produção;
  - Utilização ou armazenamento de credenciais reais em código ou Git;
  - Utilização de dados reais de clientes ou pessoas físicas reais;
  - Ativação de login OAuth real ou busca vetorial.

---

## Revisão e Aprovação Humana

- Decisão: `APROVADA`
- Decisor: `ceo-monvi`
- Declaração registrada: `APROVO A DECISÃO DE PERSISTÊNCIA LOCAL`
- Data: `2026-07-31`
