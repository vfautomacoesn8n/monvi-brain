---
id: registry-monvi-brain-v1-audit-findings-classification
title: Classificação dos achados da auditoria do Monvi Brain v1
type: record
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
  - auditoria
  - classificacao
related:
  - registry-monvi-brain-v1-global-audit
  - registry-monvi-brain-v1-document-inventory
  - policy-monvi-brain-metadata-taxonomy-links-versioning
---

# Classificação dos achados da auditoria do Monvi Brain v1

## Contexto

A auditoria inicial encontrou:

- 242 arquivos Markdown;
- 57 sem frontmatter;
- 16 sem ID;
- 11 sem owner;
- 79 sem reviewer;
- 95 sem source task aplicável;
- 162 sem links;
- nenhum grupo de IDs duplicados.

Esses números representam ocorrências técnicas, não erros confirmados.

## Critério de classificação

Cada ocorrência deve ser revisada conforme tipo, função, origem, maturidade e risco.

## Matriz inicial

| Achado | Classificação inicial | Tratamento |
|---|---|---|
| Sem frontmatter | pendência de classificação | separar raiz, legado, histórico, RAW, índice e documento governado |
| Sem ID | potencial erro | corrigir apenas em documento governado e ativo |
| Sem tipo | não identificado na auditoria | manter monitoramento |
| Sem status | não identificado na auditoria | manter monitoramento |
| Sem owner | potencial erro | não preencher sem responsável confirmado |
| Sem reviewer | misto | obrigatório para documentos governados; pode ser não aplicável em arquivos legados ou auxiliares |
| Sem source task | misto | não inventar origem; aceitar null quando justificável |
| Sem links | misto | priorizar documentos críticos, índices e relações reais |
| ID duplicado | inexistente na auditoria | manter validação contínua |

## Classes oficiais

### Erro real

Violação confirmada de regra aplicável.

### Não aplicável

Campo ou relação não exigida para aquele documento.

### Legado aceitável

Documento anterior à governança atual que permanece válido sem migração imediata.

### Histórico

Documento preservado como evidência do passado e que não deve ser atualizado como se fosse atual.

### Índice ou mapa

Documento de navegação com regras próprias.

### Pendência humana

Exige confirmação de owner, reviewer, cliente, projeto, validade ou origem.

### Correção automatizável segura

Pode ser corrigida por regra determinística, com diff pequeno, rollback e revisão.

### Correção que exige decisão

Envolve mudança de estrutura, semântica, autoridade, fonte de verdade ou escopo.

### Exceção documentada

Desvio intencional, aprovado e registrado.

## Prioridade de tratamento

### Prioridade 1

- documentos canônicos;
- políticas;
- arquitetura;
- segurança;
- tarefas ativas;
- documentos de cliente;
- documentos usados como fonte oficial.

### Prioridade 2

- processos;
- procedimentos;
- templates;
- registros;
- dashboards;
- mapas;
- índices.

### Prioridade 3

- documentos legados;
- históricos;
- arquivos auxiliares;
- documentação de baixa criticidade.

## Regras por achado

### Sem frontmatter

Não corrigir em lote.

Primeiro classificar:

- raiz do vault;
- documento governado;
- legado;
- histórico;
- RAW;
- índice;
- instrução de agente;
- arquivo auxiliar.

### Sem ID

Adicionar apenas quando:

- o documento for governado;
- estiver ativo;
- houver padrão de ID aplicável;
- não houver risco de colisão;
- o ID puder ser estável.

### Sem owner

Exige confirmação humana.

Não inferir owner pela pasta.

### Sem reviewer

Pode ser corrigido automaticamente apenas quando houver regra institucional explícita e não ambígua.

### Sem source task

Aceitar `null` quando:

- documento antecede o sistema;
- origem não pode ser comprovada;
- documento tem múltiplas origens;
- documento é de infraestrutura ou sistema.

### Sem links

Priorizar:

- políticas;
- arquitetura;
- processos;
- templates oficiais;
- tarefas;
- mapas;
- dashboards;
- documentos de cliente.

Não criar links artificiais.

## Decisões ainda necessárias

- regra de metadados para arquivos raiz;
- regra de metadados para instruções de agentes;
- regra de metadados para documentos históricos;
- regra de source task em documentos anteriores ao task system;
- reviewer padrão por classe documental;
- owner padrão por área, se houver;
- escopo mínimo de links por tipo;
- estratégia de migração de legados.

## Resultado desta fase

A fase 2 define as regras de classificação e impede correções em massa sem contexto.

A correção estrutural deve ocorrer em lotes pequenos e priorizados.
