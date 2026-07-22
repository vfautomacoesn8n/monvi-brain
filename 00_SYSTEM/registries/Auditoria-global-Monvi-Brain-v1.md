---
id: registry-monvi-brain-v1-global-audit
title: Auditoria global do Monvi Brain v1
type: record
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
source_task: task-2026-032
classification: internal
---

# Auditoria global do Monvi Brain v1

## Contexto

Esta auditoria registra o estado documental inicial da task 032. Ela não corrige automaticamente inconsistências e não executa os testes finais.

## Resumo executivo

- documentos Markdown: 242;
- sem frontmatter: 57;
- sem ID: 16;
- sem tipo: 0;
- sem status: 0;
- sem owner: 11;
- sem reviewer: 79;
- sem source task aplicável: 95;
- sem links: 162;
- grupos de IDs duplicados: 0;
- anomalias Git conhecidas: 9.

## Distribuição por tipo

| Tipo | Quantidade |
|---|---:|
| (sem tipo) | 57 |
| task | 33 |
| synthesis | 29 |
| template | 22 |
| policy | 22 |
| concept | 18 |
| process | 17 |
| output | 13 |
| architecture | 11 |
| service | 5 |
| operation | 5 |
| source | 3 |
| risk | 2 |
| client | 1 |
| meeting | 1 |
| entity | 1 |
| project | 1 |
| decision | 1 |

## Distribuição por status

| Status | Quantidade |
|---|---:|
| review | 100 |
| approved | 78 |
| (sem status) | 57 |
| draft | 7 |

## IDs duplicados

- Nenhum ID duplicado encontrado.

## Anomalias Git conhecidas

- `AI-START.md`
- `00_SYSTEM/canonical/KNOWLEDGE-MODEL.md`
- `00_SYSTEM/tasks/done/TASK-2026-001-ingestao-manual-da-marca.md`
- `00_SYSTEM/tasks/done/TASK-2026-002-ingestao-catalogo-de-servicos.md`
- `00_SYSTEM/tasks/done/TASK-2026-020-auditoria-prontidao-operacional-monvi-brain.md`
- `00_SYSTEM/tasks/review/TASK-2026-021-inventario-operacional-minimo-monvi.md`
- `02_WIKI/empresa/Apresentacao-institucional.md`
- `02_WIKI/empresa/Monvi.md`
- `02_WIKI/index.md`

## Diagnóstico

A estrutura possui governança documental significativa, mas ainda exige correção progressiva de metadados, links, notas órfãs, índices e relações entre documentos.

## Recomendações para a fase 2

- corrigir metadados por tipo documental;
- criar arquitetura de navegação e mapas;
- conectar tasks e entregáveis;
- tratar notas críticas sem links;
- revisar IDs duplicados;
- documentar a política de anomalias Git;
- evitar normalização massiva sem staging controlado;
- manter os testes finais para depois da consolidação.
