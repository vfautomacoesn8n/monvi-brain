---
id: "decision-20260730-etapa-1-tecnica-core-brain"
type: decision
title: "Decisão — autorização da etapa 1 técnica do Core Brain"
status: approved
owner: ceo-monvi
confidentiality: internal
created_at: "2026-07-30"
updated_at: "2026-07-30"
reviewed_at: "2026-07-30"
review_cycle: on-change
sources:
  - ../../00_SYSTEM/tasks/active/TASK-2026-041-fundacao-core-brain-mvp.md
  - ../../00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md
  - ./decision-20260730-stack-core-brain-mvp.md
related:
  - ../../00_SYSTEM/logs/changes.jsonl
  - ../../00_SYSTEM/logs/decisions.jsonl
aliases: []
tags:
  - decision
  - core-brain
  - technical-stage
decision_state: approved
context: "Autorizar somente a primeira etapa técnica do Core Brain MVP."
decision: "Etapa 1 aprovada com escopo técnico limitado e bloqueios explícitos."
decided_at: "2026-07-30"
deciders:
  - ceo-monvi
supersedes: null
technical_stage_1_authorized: true
dependency_installation_authorized: true
postgresql_authorized: false
drizzle_authorized: false
real_authentication_authorized: false
credentials_authorized: false
real_client_data_authorized: false
external_integrations_authorized: false
staging_authorized: false
production_authorized: false
---

# Decisão — autorização da etapa 1 técnica do Core Brain

## Contexto

A stack técnica do Core Brain MVP foi aprovada com ressalvas. Esta decisão autoriza apenas a primeira fatia executável da Task 041.

## Alternativas consideradas

- manter toda implementação bloqueada;
- autorizar todo o backend;
- autorizar somente a base técnica mínima.

Foi escolhida a terceira alternativa para reduzir risco e evitar expansão prematura de escopo.

## Evidências e premissas

- A stack aprovada utiliza TypeScript, Node.js 24, npm, Fastify, PostgreSQL, Drizzle, Zod, Pino e Vitest.
- O ambiente local possui Node.js e npm.
- PostgreSQL, Docker e psql não estavam disponíveis na inspeção inicial.
- Nenhuma credencial ou dado real de cliente pode ser utilizado.
- A autorização deve ser granular e reversível.

## Decisão

O CEO da Monvi aprovou a primeira etapa técnica da Task 041.

### Escopo autorizado

- criar `apps/core-brain/`;
- criar `package.json`;
- criar `package-lock.json`;
- criar `tsconfig.json`;
- criar configuração mínima do projeto;
- instalar somente dependências necessárias para:
  - TypeScript;
  - Fastify;
  - Zod;
  - Pino;
  - Vitest;
  - ferramentas mínimas de desenvolvimento e tipagem;
- implementar `GET /health`;
- implementar `GET /ready`;
- criar validação de variáveis de ambiente;
- criar tratamento básico de erros;
- criar logs estruturados com sanitização;
- criar testes automatizados da fundação;
- documentar execução local.

### Escopo bloqueado

- PostgreSQL;
- Drizzle ORM;
- migrações;
- autenticação real;
- sessões reais;
- credenciais reais;
- dados reais de clientes;
- integrações externas;
- Google Workspace;
- memória persistente;
- busca vetorial;
- Helppers individuais;
- homologação;
- produção.

## Consequências e riscos

A equipe pode iniciar a fundação executável do backend, mas não pode ampliar o escopo sem nova decisão.

Riscos principais:

- instalar dependências fora da lista necessária;
- introduzir banco ou autenticação antes da autorização;
- registrar dados sensíveis em logs;
- criar endpoints além de `/health` e `/ready`;
- tratar a autorização parcial como autorização geral.

## Revisão humana

Decisor: `ceo-monvi`

Data: `2026-07-30`

Resultado: `APROVADA`

Texto interpretado no contexto imediatamente anterior:

> APROVO a primeira etapa técnica da Task 041, limitada à base TypeScript/Fastify, configuração, logs, erros, endpoints /health e /ready e testes. Autorizo a instalação somente das dependências necessárias para essa etapa. PostgreSQL, Drizzle, autenticação real, credenciais, dados reais, integrações externas, homologação e produção permanecem bloqueados.
