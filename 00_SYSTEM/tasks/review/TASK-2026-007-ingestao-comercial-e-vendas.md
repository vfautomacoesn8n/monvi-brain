---
id: task-2026-007
type: task
title: "Ingestão Comercial e Vendas Monvi"
status: review
owner: codex
reviewer: ceo-monvi
confidentiality: internal
created_at: "2026-07-17"
updated_at: "2026-07-17"
reviewed_at: null
review_cycle: on-change
sources: ["../../../01_RAW/monvi/04_Comercial_e_Vendas_Monvi.pdf"]
related: ["../../../02_WIKI/comercial/Comercial-e-vendas.md"]
aliases: []
tags: [task, comercial, vendas]
task_state: review
agent: codex
active_client: null
allowed_paths: ["02_WIKI/comercial/", "02_WIKI/index.md", "00_SYSTEM/registries/", "00_SYSTEM/logs/", "00_SYSTEM/tasks/active/", "00_SYSTEM/tasks/review/"]
read_only_paths: ["01_RAW/monvi/04_Comercial_e_Vendas_Monvi.pdf", "work/comercial-vendas-render/", "02_WIKI/estrategia/Posicionamento.md", "02_WIKI/estrategia/Proposta-de-valor.md", "02_WIKI/estrategia/Modelo-de-negocio.md", "02_WIKI/servicos/Catalogo-de-servicos.md", "02_WIKI/processos/Fluxo-operacional.md", "02_WIKI/processos/Gates-e-aprovacoes.md", "02_WIKI/processos/QA-aceite-e-handoff.md", "02_WIKI/juridico/Juridico-e-contratos.md", "02_WIKI/juridico/SOW.md", "02_WIKI/juridico/Termo-de-aceite.md", "02_WIKI/seguranca/LGPD-e-seguranca.md"]
forbidden_paths: ["01_RAW/monvi/Monvi - Manual da marca.pdf", "01_RAW/monvi/Monvi - Catalogo de serviços.pdf", "01_RAW/monvi/Monvi - Estratégia Empresarial.pdf", "01_RAW/monvi/Manual_de_Processos_Monvi_Redesenhado_2026.pdf", "01_RAW/monvi/05_Juridico_Monvi.pdf", "01_RAW/monvi/06_LGPD_e_Seguranca_Monvi.pdf", "02_WIKI/empresa/", "02_WIKI/marketing/", "02_WIKI/tecnologia/", "02_WIKI/entidades/", "02_WIKI/conceitos/", "02_WIKI/glossario/", "02_WIKI/sinteses/", "03_OPERATIONS/", "04_OUTPUTS/", "00_SYSTEM/canonical/", "AI-START.md", "AGENTS.md"]
requires_review: true
acceptance_criteria: ["Somente o PDF Comercial e Vendas V1.0 é processado com SHA-256 confirmado.", "Dez páginas comerciais, índices, manifesto e logs permanecem internal e review.", "Renderizações temporárias não são fontes canônicas nem entram no Git.", "Nenhum CRM, lead, oportunidade, preço, meta, resultado ou automação é criado.", "Validações de JSONL, frontmatter, links, IDs e escopo passam antes de encaminhar para review."]
blocked_reason: null
---

# Ingestão Comercial e Vendas Monvi

Fonte institucional exclusiva: 01_RAW/monvi/04_Comercial_e_Vendas_Monvi.pdf.

As imagens em work/comercial-vendas-render/ são auxiliares temporários de conferência visual. Não são fontes canônicas, não entram no manifesto, não serão versionadas e não autorizam a leitura de outro PDF.

## Escopo

Produzir conhecimento comercial institucional em revisão. O conteúdo registra modelos, critérios e práticas sugeridas; não cria CRM, operação, leads, oportunidades, propostas reais, preços, metas, resultados, automações ou políticas aprovadas.

## Encaminhamento

Após escrita e validações, esta tarefa deve passar de active para review; a aprovação final é humana.
