---
id: architecture-core-brain-mvp
title: Proposta de arquitetura técnica do Monvi Core Brain MVP
type: architecture_proposal
status: draft
owner: ceo-monvi
reviewer: ceo-monvi
confidentiality: internal
classification: internal
created_at: "2026-07-30"
updated_at: "2026-07-30"
reviewed_at: null
version: "0.1.0"
decision_state: proposed
implementation_authorized: false
task_id: task-2026-041
sources:
  - 00_SYSTEM/tasks/active/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/canonical/AI-CONTRACT.md
  - 00_SYSTEM/canonical/PERMISSIONS.md
  - 00_SYSTEM/canonical/SECURITY.md
  - 00_SYSTEM/workflows/decision.md
related:
  - 00_SYSTEM/architecture/Contrato-Identity-Gateway-Google-Workspace-Monvi.md
tags:
  - core-brain
  - arquitetura
  - backend
  - typescript
  - fastify
  - postgresql
  - drizzle
  - proposta
---

# Proposta de arquitetura técnica do Monvi Core Brain MVP

## Estado da decisão

Esta é uma proposta técnica submetida à revisão do CEO da Monvi.

Este documento não autoriza instalação de dependências, criação de backend ou banco, contratação de serviços, uso de credenciais, autenticação real, dados reais de clientes ou produção.

A implementação somente poderá começar após aprovação humana explícita e registro da decisão.

## Contexto

A Task 041 deve criar a fundação técnica do Core Brain MVP sem misturar autenticação real, memória persistente, busca vetorial, interface completa ou integrações externas.

A inspeção identificou Node.js 24.15.0, npm 11.12.1, Python 3.11.15 e Git 2.55.0. pnpm, Docker, PostgreSQL CLI e gerenciador de versões Node não estavam disponíveis. O repositório ainda não possuía aplicação técnica.

## Decisão proposta

- TypeScript;
- Node.js 24 com versão fixada;
- npm;
- Fastify;
- PostgreSQL;
- Drizzle ORM;
- Zod;
- Pino;
- Vitest;
- estrutura simples, sem Nx ou Turborepo.

## Justificativa

A proposta prioriza tipagem, baixo custo operacional, compatibilidade com o ecossistema web da Monvi e separação entre autenticação, autorização, persistência, API e logs.

PostgreSQL atende às relações entre pessoas, identidades, perfis, papéis, permissões, clientes, projetos, memberships, sessões e auditoria.

Fastify reduz abstrações no MVP. Drizzle mantém proximidade com SQL. npm já está disponível.

## Estrutura inicial proposta

```text
apps/
  core-brain/
    src/
      app/
      config/
      db/
      errors/
      http/
      logging/
      modules/
      security/
    tests/
    package.json
    tsconfig.json

packages/
  contracts/
  shared/

infrastructure/
  local/
  environments/

tests/
  architecture/
  integration/
```

Os diretórios compartilhados só devem ser criados quando houver conteúdo real.

## API inicial

Base proposta: `/api/v1`.

Endpoints iniciais:

- `GET /health`;
- `GET /ready`.

Nenhum endpoint de autenticação, pessoas, clientes ou projetos está autorizado.

## Ambientes

- Desenvolvimento: local, dados fictícios e configuração não versionada.
- Homologação: banco e secrets separados, dados sintéticos ou autorizados.
- Produção: ambiente separado, logs e rollback; ativação em task futura.

## Secrets e logs

Secrets devem ser injetados por variáveis de ambiente ou mecanismo seguro do provedor. `.env` não será versionado. Somente `.env.example` com valores fictícios.

Logs não podem armazenar senhas, tokens, cookies completos, secrets, cabeçalhos de autorização, dados pessoais desnecessários, documentos integrais ou prompts completos sem autorização.

## Alternativas consideradas

- FastAPI: válido para serviços especializados futuros.
- NestJS: mais pesado para o MVP.
- SQLite: simples localmente, mas diferente do banco futuro.
- MongoDB: menor aderência ao modelo relacional.
- Nx, Turborepo e pnpm: não justificados nesta fase.

## Riscos

- complexidade prematura;
- PostgreSQL sem ambiente local;
- Node.js sem gerenciador de versão;
- acoplamento ao framework;
- vazamento por logs;
- autorização insuficiente.

## Recomendação

Aprovar a stack com implantação incremental:

1. base TypeScript e Fastify;
2. configuração, logs, erros, `/health` e `/ready`;
3. testes;
4. modelo relacional;
5. PostgreSQL e migrações;
6. autenticação real e dados de clientes permanecem bloqueados.

## Decisão pendente

O CEO deverá registrar:

- `APROVADA`;
- `APROVADA COM RESSALVAS`;
- `REJEITADA`;
- `SOLICITAR ALTERAÇÕES`.

Até essa decisão, `implementation_authorized` permanece `false`.
