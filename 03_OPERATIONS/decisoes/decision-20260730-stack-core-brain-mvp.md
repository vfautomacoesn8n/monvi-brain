---
id: "decision-20260730-stack-core-brain-mvp"
type: decision
title: "Decisão — stack técnica do Monvi Core Brain MVP"
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
  - ../../00_SYSTEM/canonical/PERMISSIONS.md
  - ../../00_SYSTEM/canonical/SECURITY.md
  - ../../00_SYSTEM/workflows/decision.md
related:
  - ../../00_SYSTEM/architecture/Contrato-Identity-Gateway-Google-Workspace-Monvi.md
aliases: []
tags:
  - decision
  - core-brain
  - architecture
  - stack
decision_state: approved
context: "Definir a stack técnica inicial do Monvi Core Brain MVP sem autorizar a implementação completa."
decision: "Stack aprovada com ressalvas e autorizações separadas para infraestrutura, dependências, autenticação, credenciais e produção."
decided_at: "2026-07-30"
deciders:
  - ceo-monvi
supersedes: null
implementation_authorized: false
dependency_installation_authorized: false
database_activation_authorized: false
real_authentication_authorized: false
credentials_authorized: false
production_authorized: false
---

# Decisão — stack técnica do Monvi Core Brain MVP

## Contexto

A Task 041 abriu a fundação técnica do Monvi Core Brain MVP. A proposta de arquitetura avaliou uma stack com TypeScript, Node.js 24, npm, Fastify, PostgreSQL, Drizzle ORM, Zod, Pino e Vitest.

A decisão precisava preservar a separação entre escolha arquitetural e autorização operacional. Aprovar a stack não significa autorizar toda a implementação, infraestrutura ou ativação de serviços.

## Alternativas consideradas

Foram consideradas:

- TypeScript com Fastify;
- Python com FastAPI;
- NestJS;
- SQLite;
- PostgreSQL;
- MongoDB;
- npm e pnpm;
- estrutura simples ou orquestração com Nx/Turborepo.

A análise completa está em `../../00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md`.

## Evidências e premissas

- Node.js 24.15.0 e npm 11.12.1 estavam disponíveis no ambiente local inspecionado.
- pnpm, Docker e PostgreSQL CLI não estavam disponíveis.
- O repositório ainda não possuía uma aplicação técnica.
- A Task 040 estabeleceu separação entre autenticação, autorização e sessão.
- Nenhuma credencial ou dado real de cliente pode ser utilizado nesta fase.
- A implementação técnica permanecia bloqueada antes desta decisão.

## Decisão

O CEO da Monvi decidiu:

> APROVADA COM RESSALVAS, mantendo PostgreSQL, instalação de dependências, autenticação real, credenciais e produção sujeitos a etapas e autorizações separadas.

A stack aprovada é:

- TypeScript;
- Node.js 24, com versão fixada;
- npm;
- Fastify;
- PostgreSQL;
- Drizzle ORM;
- Zod;
- Pino;
- Vitest;
- estrutura inicial simples, sem Nx ou Turborepo.

## Condições da aprovação

1. PostgreSQL depende de etapa e autorização separada.
2. Instalação de dependências depende de etapa e autorização separada.
3. Autenticação real depende de etapa e autorização separada.
4. Criação, uso ou armazenamento de credenciais depende de etapa e autorização separada.
5. Homologação e produção dependem de etapas e autorizações separadas.
6. Dados reais de clientes permanecem proibidos nesta fase.
7. Busca vetorial, memória persistente e Helppers individuais permanecem fora do escopo.
8. Cada avanço técnico deve respeitar os `allowed_paths`, critérios de interrupção e revisão humana da Task 041.

## Consequências e riscos

### Consequências

- A escolha arquitetural deixa de estar pendente.
- A implementação pode ser planejada em etapas menores.
- A aprovação não autoriza automaticamente dependências, banco, autenticação, credenciais ou produção.
- Próximas alterações devem registrar qual autorização específica está sendo concedida.

### Riscos

- interpretar aprovação da stack como autorização geral de implementação;
- instalar dependências antes da autorização correspondente;
- ativar PostgreSQL ou serviço remoto sem análise de custo, segurança e backup;
- misturar autenticação e autorização;
- registrar secrets ou dados pessoais em logs;
- ampliar escopo sem nova decisão.

## Revisão humana

Decisor: `ceo-monvi`

Data: `2026-07-30`

Resultado: `APROVADA COM RESSALVAS`

Texto registrado:

> APROVADA COM RESSALVAS, mantendo PostgreSQL, instalação de dependências, autenticação real, credenciais e produção sujeitos a etapas e autorizações separadas.

A implementação geral permanece não autorizada. As ressalvas devem ser convertidas em etapas e autorizações específicas antes da execução.
