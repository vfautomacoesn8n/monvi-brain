---
id: registry-monvi-brain-v1-institutional-technical-maps-trailing-dot-fix
title: Registro de correção de wikilinks com ponto final nos mapas institucional e técnico
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
  - conectividade
  - correcao-controlada
  - lote-6
---

# Registro de correção de wikilinks com ponto final

## Diagnóstico

Os mapas institucional e técnico continham pontos finais dentro de wikilinks. O ponto passava a fazer parte do destino e invalidava links para arquivos existentes.

## Correção

- mapa institucional alterado: `02_WIKI/Mapa-institucional-Monvi-Brain.md`;
- mapa técnico alterado: `02_WIKI/Mapa-tecnico-Monvi-Brain.md`;
- ocorrências corrigidas: 27;
- ocorrências no mapa institucional: 9;
- ocorrências no mapa técnico: 18;
- destinos existentes validados: 27;
- conteúdo dos documentos de destino alterado: não;
- status promovidos: não;
- RAW alterado: não;
- canonical alterado: não;
- testes finais executados: não.

## Destinos validados

- 02_WIKI/Mapa-institucional-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-ambientes-promocao-piloto-producao-agentes.md;
- 02_WIKI/Mapa-institucional-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md;
- 02_WIKI/Mapa-institucional-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-ciclo-de-vida-de-acesso-Monvi.md;
- 02_WIKI/Mapa-institucional-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-logs-evidencias-custos-e-monitoramento-agentes.md;
- 02_WIKI/Mapa-institucional-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-memoria-e-promocao-de-conhecimento-Helpper.md;
- 02_WIKI/Mapa-institucional-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-metadados-taxonomia-links-e-versionamento-Monvi-Brain.md;
- 02_WIKI/Mapa-institucional-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md;
- 02_WIKI/Mapa-institucional-Monvi-Brain.md -> 02_WIKI/empresa/Apresentacao-institucional.md;
- 02_WIKI/Mapa-institucional-Monvi-Brain.md -> 02_WIKI/empresa/Monvi.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Contrato-contexto-delegacao-reporte-Helpper.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Matriz-acesso-por-papel-escopo-e-acao-Monvi.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Matriz-fronteiras-responsabilidades-ecossistema-Monvi.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Modelo-biblioteca-skills-ferramentas-e-promocao-conhecimento.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Modelo-ciclo-de-vida-e-estados-de-agentes-Monvi.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Modelo-identidade-papeis-e-permissoes-Monvi.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/architecture/Requisitos-nao-funcionais-ecossistema-Monvi.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-ambientes-promocao-piloto-producao-agentes.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-ciclo-de-vida-de-acesso-Monvi.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-logs-evidencias-custos-e-monitoramento-agentes.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-memoria-e-promocao-de-conhecimento-Helpper.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-metadados-taxonomia-links-e-versionamento-Monvi-Brain.md;
- 02_WIKI/Mapa-tecnico-Monvi-Brain.md -> 00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md;

## Limites

- esta correção trata somente o ponto final dentro dos wikilinks;
- links ambíguos permanecem pendentes;
- referências a PDF e JSONL não foram alteradas;
- a auditoria de conectividade deverá ser executada novamente;
- nenhum resultado anterior foi promovido a registro oficial.
