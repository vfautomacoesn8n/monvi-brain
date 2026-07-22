---
id: architecture-monvi-brain-v1-obsidian-navigation
title: Arquitetura de navegação do Monvi Brain v1 no Obsidian
type: architecture
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
source_task: task-2026-032
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
version: "0.1.0"
tags:
  - monvi-brain
  - obsidian
  - navegacao
related:
  - policy-monvi-brain-metadata-taxonomy-links-versioning
  - registry-monvi-brain-v1-global-audit
---

# Arquitetura de navegação do Monvi Brain v1 no Obsidian

## Objetivo

Definir como pessoas e agentes localizam, percorrem e relacionam conhecimento no Monvi Brain.

## Princípios

- o vault deve funcionar sem plugin obrigatório;
- Markdown, YAML e wikilinks são a base;
- pastas organizam armazenamento;
- mapas organizam navegação;
- dashboards organizam atenção;
- links representam relações reais;
- o grafo não substitui índices;
- índices não substituem governança.

## Camadas de navegação

```text
dashboard
→ mapa
→ índice ou área
→ documento
→ task, evidência ou decisão relacionada
```

## Pontos de entrada

### Executivo

- prioridades;
- riscos;
- decisões;
- aprovações;
- clientes e projetos;
- pendências críticas.

### Institucional

- empresa;
- serviços;
- marca;
- estratégia;
- políticas;
- conhecimento oficial.

### Técnico

- arquitetura;
- segurança;
- agentes;
- integrações;
- infraestrutura;
- repositórios.

### Operacional

- processos;
- procedimentos;
- templates;
- tasks;
- métricas;
- execução.

## Regras de links

Cada documento crítico deve ser alcançável por:

- mapa;
- índice;
- documento relacionado;
- task de origem.

A existência de pasta não é considerada conexão suficiente.

## Regras para mapas

Mapas devem:

- ter escopo claro;
- conter links reais;
- evitar duplicar documentos;
- apontar para fontes oficiais;
- separar institucional, técnico e operacional;
- manter conteúdo resumido.

## Regras para dashboards

Dashboards devem:

- indicar estado atual;
- não inventar métricas;
- não declarar atividade sem evidência;
- mostrar pendências conhecidas;
- diferenciar dado real de placeholder;
- funcionar como página de atenção, não como banco de dados.

## Dependência de plugins

Dataview, Bases ou plugins equivalentes podem ser adotados como camada opcional.

Sem plugin, o vault deve continuar:

- legível;
- navegável;
- pesquisável;
- auditável.

## Clientes e projetos

Mapas e dashboards institucionais não devem expor conteúdo confidencial de clientes.

Cada cliente e projeto deve possuir navegação própria e isolada quando criado.

## Critérios de aprovação

- quatro mapas principais criados;
- dois dashboards mínimos criados;
- links apontam para documentos existentes;
- nenhum plugin obrigatório;
- nenhuma informação operacional inventada;
- nenhuma mistura entre clientes;
- navegação compatível com Obsidian.
