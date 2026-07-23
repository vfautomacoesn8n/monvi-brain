---
id: registry-monvi-brain-v1-connectivity-exceptions
title: Registro de exceções de conectividade do Monvi Brain v1
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
version: "0.2.0"
tags:
  - monvi-brain
  - conectividade
  - excecoes
  - estrutura
---

# Registro de exceções de conectividade do Monvi Brain v1

## Regra

Uma exceção de conectividade só é válida quando:

- o isolamento é intencional;
- o arquivo possui função estrutural ou técnica;
- a ausência de conexão não prejudica a descoberta de conhecimento crítico;
- o caminho está documentado neste registro;
- a classificação permanece sujeita a revisão humana.

## Resultado da auditoria pós-lote 9

A auditoria classificatória pós-lote 9 identificou:

- 15 notas isoladas;
- 0 notas críticas isoladas;
- 0 links quebrados;
- 0 ambiguidades;
- 15 candidatos com função estrutural.

Os relatórios de auditoria anteriormente listados como candidatos deixaram de ser exceções porque foram conectados por meio de `00_SYSTEM/audits/README.md`.

## Exceções estruturais em review

### Sistema

| ID | Documento | Motivo | Status |
|---|---|---|---|
| connectivity-exception-001 | `00_SYSTEM/logs/README.md` | Índice técnico da pasta de logs; não contém conhecimento institucional para navegação principal. | review |
| connectivity-exception-002 | `00_SYSTEM/scripts/README.md` | Índice técnico da pasta de scripts; permanece separado da navegação documental principal. | review |

### Fontes brutas

| ID | Documento | Motivo | Status |
|---|---|---|---|
| connectivity-exception-003 | `01_RAW/assets/README.md` | Índice estrutural de fontes brutas; RAW permanece somente leitura. | review |
| connectivity-exception-004 | `01_RAW/monvi/README.md` | Índice estrutural das fontes institucionais brutas da Monvi. | review |
| connectivity-exception-005 | `01_RAW/pesquisas/README.md` | Índice estrutural de pesquisas brutas ainda não promovidas. | review |
| connectivity-exception-006 | `01_RAW/reunioes/README.md` | Índice estrutural de registros brutos de reuniões. | review |
| connectivity-exception-007 | `01_RAW/web/README.md` | Índice estrutural de capturas e fontes brutas da web. | review |

### Saídas

| ID | Documento | Motivo | Status |
|---|---|---|---|
| connectivity-exception-008 | `04_OUTPUTS/apresentacoes/README.md` | Índice de artefatos de apresentação, não fonte de conhecimento canônico. | review |
| connectivity-exception-009 | `04_OUTPUTS/conteudos/README.md` | Índice de conteúdos gerados e entregáveis. | review |
| connectivity-exception-010 | `04_OUTPUTS/documentos/README.md` | Índice de documentos produzidos. | review |
| connectivity-exception-011 | `04_OUTPUTS/propostas/README.md` | Índice de propostas e entregáveis comerciais. | review |
| connectivity-exception-012 | `04_OUTPUTS/relatorios/README.md` | Índice de relatórios gerados. | review |

### Compartilhamento

| ID | Documento | Motivo | Status |
|---|---|---|---|
| connectivity-exception-013 | `05_SHARED/exports/README.md` | Índice de exportações compartilháveis. | review |
| connectivity-exception-014 | `05_SHARED/prompts/README.md` | Índice de prompts reutilizáveis, separado da governança canônica. | review |
| connectivity-exception-015 | `05_SHARED/references/README.md` | Índice de referências compartilhadas. | review |

## Critério de manutenção

Estas exceções devem permanecer sem conexão aos mapas principais enquanto:

- funcionarem apenas como índices de pastas;
- não receberem conteúdo institucional crítico;
- não forem promovidas a ponto de entrada operacional;
- não prejudicarem a rastreabilidade de documentos críticos.

## Revisão

A classificação deverá ser revista quando:

- a função da pasta mudar;
- o README passar a concentrar instruções críticas;
- uma auditoria detectar perda de descoberta;
- a arquitetura de navegação for alterada.

## Estado de aprovação

- classificação documental: registrada;
- aprovação humana: pendente;
- status do registro: `review`;
- task 032: permanece em `review`;
- testes finais: não executados.
