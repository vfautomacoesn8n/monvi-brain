---
id: task-2026-009
type: task
title: "Ingestão do Plano de Marketing Monvi"
status: approved
owner: codex
reviewer: ceo-monvi
confidentiality: internal
created_at: "2026-07-20"
updated_at: "2026-07-21"
reviewed_at: "2026-07-21"
review_cycle: on-change
sources: ["../../../01_RAW/monvi/12_Plano_de_Marketing_Monvi.pdf"]
related: ["../../../02_WIKI/marketing/Plano-de-marketing.md"]
aliases: []
tags: [task, ingestao, marketing, plano]
task_state: done
agent: codex
active_client: null
allowed_paths: ["02_WIKI/marketing/", "02_WIKI/index.md", "00_SYSTEM/registries/", "00_SYSTEM/logs/", "00_SYSTEM/tasks/active/", "00_SYSTEM/tasks/review/"]
read_only_paths: ["01_RAW/monvi/12_Plano_de_Marketing_Monvi.pdf", "work/plano-marketing-render/page-03.png", "work/plano-marketing-render/page-04.png", "work/plano-marketing-render/page-05.png", "work/plano-marketing-render/page-06.png", "work/plano-marketing-render/page-07.png", "work/plano-marketing-render/page-08.png", "work/plano-marketing-render/page-09.png", "AI-START.md", "AGENTS.md", "00_SYSTEM/canonical/AI-CONTRACT.md", "00_SYSTEM/canonical/KNOWLEDGE-MODEL.md", "00_SYSTEM/canonical/PERMISSIONS.md", "00_SYSTEM/workflows/ingest.md", "00_SYSTEM/registries/source-manifest.md", "02_WIKI/index.md", "02_WIKI/marketing/README.md", "02_WIKI/marketing/Conteudo-e-marketing.md", "02_WIKI/marketing/Pilares-editoriais.md", "02_WIKI/marketing/Canais-de-marketing.md", "02_WIKI/marketing/Formatos-de-conteudo.md", "02_WIKI/marketing/Ideias-e-pautas.md", "02_WIKI/marketing/Calendario-editorial.md", "02_WIKI/marketing/Producao-de-conteudo.md", "02_WIKI/marketing/CTAs-e-mensagens.md", "02_WIKI/marketing/Metricas-de-conteudo.md", "02_WIKI/estrategia/Posicionamento.md", "02_WIKI/estrategia/Proposta-de-valor.md", "02_WIKI/servicos/Catalogo-de-servicos.md", "02_WIKI/comercial/Comercial-e-vendas.md", "02_WIKI/comercial/ICP-e-segmentos.md", "02_WIKI/comercial/Funil-comercial.md", "02_WIKI/comercial/Qualificacao-de-leads.md", "02_WIKI/comercial/Metricas-comerciais.md", "02_WIKI/comercial/Handoff-comercial.md"]
forbidden_paths: ["01_RAW/monvi/04_Comercial_e_Vendas_Monvi.pdf", "01_RAW/monvi/05_Juridico_Monvi.pdf", "01_RAW/monvi/06_LGPD_e_Seguranca_Monvi.pdf", "01_RAW/monvi/11_Conteudo_e_Marketing_Monvi.pdf", "01_RAW/monvi/Manual_de_Processos_Monvi_Redesenhado_2026.pdf", "01_RAW/monvi/Monvi - Catalogo de serviços.pdf", "01_RAW/monvi/Monvi - Estratégia Empresarial.pdf", "01_RAW/monvi/Monvi - Manual da marca.pdf", "03_OPERATIONS/", "04_OUTPUTS/", "00_SYSTEM/canonical/", "AI-START.md", "AGENTS.md"]
requires_review: false
acceptance_criteria: ["Somente o Plano de Marketing V1.0 é processado e o PDF permanece intacto.", "Quatro páginas synthesis internal/review preservam proveniência, limites e campos-modelo sem criar operação, campanha, metas ou orçamento aprovados.", "README, índice, manifesto e logs são atualizados uma única vez; JSONL, frontmatter, links, IDs, hash e escopo são validados."]
blocked_reason: null
---

# Ingestão do Plano de Marketing Monvi

## Objetivo

Registrar o Plano de Marketing Monvi V1.0 como planejamento proposto em revisão, sem converter recomendações, metas-modelo, canais, campanhas, orçamento ou rotinas em operação vigente.

## Contexto e fonte autorizada

Fonte exclusiva: `01_RAW/monvi/12_Plano_de_Marketing_Monvi.pdf`, V1.0 (2026), nove páginas, 282615 bytes e SHA-256 `F60B503AB64DF6175378C7A636FD28FAC78E010C697F418588E3233ED2ED1342`. As páginas 3–9 foram verificadas visualmente nas renderizações temporárias declaradas em `read_only_paths`.

## Entregáveis e limites

Criar quatro páginas de síntese, atualizar README, índice, manifesto e logs, e encaminhar esta tarefa para revisão. Plano proposto não representa operação vigente; não criar campanha ativa, metas oficiais, orçamento vigente, automação, responsável atribuído, canal ativo ou dados reais.

## Riscos e decisões pendentes

Evitar duplicação com a base editorial da task-2026-008, tratar campos-modelo como valores aprovados ou confundir aquisição com vendas. Permanecem pendentes validação de públicos, canais, campanhas, dados, responsáveis, ferramentas, orçamento, métricas e aprovações.

## Encerramento humano

- decisão: aprovada com ressalvas;
- aprovador: ceo-monvi;
- data: 2026-07-21;
- execução documental: `task-2026-019`;
- evidência de execução: commit `9f85640`;
- relatório: `00_SYSTEM/audits/Aprovacao-decisoes-executivas-tasks-002-003-009-011-012.md`;
- resultado: decisões executivas aplicadas à Wiki e revisadas em lote;
- limite: aprovação executiva e documental não comprova implantação operacional, contratação, resultado, capacidade ilimitada ou aceitação definitiva das responsabilidades provisórias.
