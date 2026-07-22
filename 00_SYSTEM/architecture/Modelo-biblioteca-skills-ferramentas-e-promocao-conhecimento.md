---
id: model-helpper-library
title: Modelo da biblioteca de skills, ferramentas e promoção de conhecimento
type: architecture
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
source_task: task-2026-028
classification: internal
---

# Modelo da biblioteca de skills, ferramentas e promoção de conhecimento

## Objetivo

Definir uma biblioteca única de capacidades, com visibilidade e governança por escopo.

## Estrutura conceitual

```text
Helpper Library/
├── skills/
├── tools/
├── repositories/
├── prompts/
├── playbooks/
├── policies/
├── registry/
└── archive/
```

## Visibilidade

- individual;
- departamental;
- global.

A promoção ocorre por estado e visibilidade, sem exigir cópia física.

## Manifesto mínimo

- ID;
- nome;
- tipo;
- versão;
- criador;
- owner;
- especialidade;
- status;
- visibilidade;
- risco;
- usuários permitidos;
- papéis permitidos;
- Helppers permitidos;
- clientes permitidos;
- entradas;
- saídas;
- ferramentas;
- repositórios;
- restrições;
- classificação;
- validade;
- revisão;
- evidências;
- descontinuação.

## Regra de permissão

Skill não concede permissão.

Ferramentas, repositórios e dados permanecem sujeitos ao Monvi Core Brain.

## Ciclo de vida de skill

```text
draft
→ active-local
→ proposed
→ approved
→ deprecated
```

## Fluxo de promoção

```text
funcionário
→ Helpper individual
→ especialista
→ Helpper Core
→ Monvi Core Brain
→ humano conforme risco
→ escopo ampliado
```

## Critérios de promoção

- utilidade comprovada;
- segurança;
- manutenção;
- owner;
- versão;
- entradas e saídas;
- tratamento de erro;
- ausência de secret;
- ausência de dado de cliente;
- não duplicidade;
- custo justificável;
- possibilidade de rollback.

## Repositórios

Cada repositório deve possuir registro próprio.

Skills referenciam IDs, não links livres com credenciais.

## Promoção de conhecimento

```text
captured
→ proposed
→ approved
→ published
```

Resultados alternativos:

- rejected;
- archived.

## Tipos de memória

- individual;
- projeto;
- cliente;
- departamental;
- institucional;
- canônico.

## Métricas

- usos;
- sucesso;
- falhas;
- incidentes;
- custo;
- tempo economizado;
- versões;
- última revisão;
- reutilização.

Métrica não aprova automaticamente.

## Descontinuação

Todo recurso deve ter owner, validade, revisão e plano de remoção.

## Limite

Este documento define modelo de governança, não biblioteca implementada.
