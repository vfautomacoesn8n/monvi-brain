---
id: task-2026-010
type: task
title: "Ingestão da Operação Monvi"
status: review
owner: codex
reviewer: ceo-monvi
confidentiality: internal
created_at: "2026-07-20"
updated_at: "2026-07-20"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../../01_RAW/monvi/07_Operacao_Monvi.pdf"
related: []
aliases: []
tags: [task, ingestao, operacao, processos]
task_state: review
agent: codex
active_client: null
allowed_paths:
  - "02_WIKI/processos/"
  - "02_WIKI/index.md"
  - "00_SYSTEM/registries/"
  - "00_SYSTEM/logs/"
  - "00_SYSTEM/tasks/active/"
  - "00_SYSTEM/tasks/review/"
read_only_paths:
  - "01_RAW/monvi/07_Operacao_Monvi.pdf"
  - "work/operacao-monvi-render/page-02.png"
  - "work/operacao-monvi-render/page-03.png"
  - "work/operacao-monvi-render/page-04.png"
  - "work/operacao-monvi-render/page-05.png"
  - "work/operacao-monvi-render/page-06.png"
  - "work/operacao-monvi-render/page-07.png"
  - "work/operacao-monvi-render/page-08.png"
  - "work/operacao-monvi-render/page-09.png"
  - "work/operacao-monvi-render/page-10.png"
  - "work/operacao-monvi-render/page-11.png"
  - "AI-START.md"
  - "AGENTS.md"
  - "00_SYSTEM/canonical/AI-CONTRACT.md"
  - "00_SYSTEM/canonical/KNOWLEDGE-MODEL.md"
  - "00_SYSTEM/canonical/PERMISSIONS.md"
  - "00_SYSTEM/canonical/SECURITY.md"
  - "00_SYSTEM/workflows/ingest.md"
  - "02_WIKI/processos/README.md"
  - "02_WIKI/processos/Manual-de-processos.md"
  - "02_WIKI/processos/Modelo-operacional.md"
  - "02_WIKI/processos/Fluxo-operacional.md"
  - "02_WIKI/processos/Papeis-e-responsabilidades.md"
  - "02_WIKI/processos/Gates-e-aprovacoes.md"
  - "02_WIKI/processos/QA-aceite-e-handoff.md"
  - "02_WIKI/processos/Indicadores-operacionais.md"
  - "02_WIKI/processos/Fluxos-por-servico.md"
  - "02_WIKI/comercial/Handoff-comercial.md"
  - "02_WIKI/comercial/Proposta-comercial.md"
  - "02_WIKI/servicos/Catalogo-de-servicos.md"
  - "02_WIKI/servicos/Manutencao.md"
  - "02_WIKI/servicos/Automacoes.md"
  - "02_WIKI/servicos/Inteligencia-artificial.md"
  - "02_WIKI/juridico/SOW.md"
  - "02_WIKI/juridico/Termo-de-aceite.md"
  - "02_WIKI/juridico/Termo-de-manutencao.md"
  - "02_WIKI/seguranca/Checklist-LGPD-por-projeto.md"
  - "02_WIKI/seguranca/Politica-de-seguranca.md"
  - "02_WIKI/seguranca/LGPD-e-seguranca.md"
forbidden_paths:
  - "01_RAW/monvi/04_Comercial_e_Vendas_Monvi.pdf"
  - "01_RAW/monvi/05_Juridico_Monvi.pdf"
  - "01_RAW/monvi/06_LGPD_e_Seguranca_Monvi.pdf"
  - "01_RAW/monvi/11_Conteudo_e_Marketing_Monvi.pdf"
  - "01_RAW/monvi/12_Plano_de_Marketing_Monvi.pdf"
  - "01_RAW/monvi/Manual_de_Processos_Monvi_Redesenhado_2026.pdf"
  - "01_RAW/monvi/Monvi - Catalogo de serviços.pdf"
  - "01_RAW/monvi/Monvi - Estratégia Empresarial.pdf"
  - "01_RAW/monvi/Monvi - Manual da marca.pdf"
  - "03_OPERATIONS/"
  - "04_OUTPUTS/"
  - "05_SHARED/"
  - "00_SYSTEM/canonical/"
  - "AI-START.md"
  - "AGENTS.md"
requires_review: true
acceptance_criteria:
  - "Somente 01_RAW/monvi/07_Operacao_Monvi.pdf é processado e preserva SHA-256 22A92B650549385841BFBF9BD4D2147C615691E30971D18655392F75D8897B9C."
  - "Quatro sínteses em review/internal preservam source_pages, distinção entre modelos e operação, e não alteram páginas da task-2026-004."
  - "README, índice, manifesto e logs recebem uma única atualização auditável; JSONL, frontmatter, links, IDs e escopo são validados."
  - "Nenhum cliente, projeto, contrato, responsável real, SLA, cronograma real, ferramenta ativa ou automação implantada é criado ou confirmado."
blocked_reason: null
---

# Ingestão da Operação Monvi

## Objetivo

Registrar o Playbook Operacional Monvi V1.0 como conhecimento institucional em revisão, sem converter templates, campos-modelo ou checklists em operação implantada.

## Contexto e fonte autorizada

Fonte exclusiva: `01_RAW/monvi/07_Operacao_Monvi.pdf`, com 12 páginas, 309772 bytes e SHA-256 `22A92B650549385841BFBF9BD4D2147C615691E30971D18655392F75D8897B9C`. As páginas 2–11 foram verificadas visualmente nas imagens temporárias declaradas em `read_only_paths`.

## Entregáveis

- Quatro páginas de síntese em `02_WIKI/processos/`.
- Atualizações mínimas no README de Processos, índice, manifesto e logs.
- Encaminhamento desta tarefa para `review` após validações.

## Limites semânticos

Processo descrito não é processo implantado; fluxo-modelo não é fluxo ativo; checklist-modelo e marca visual não são execução concluída. Papéis, prazos, ferramentas, contratos, pagamentos, aprovações, entregáveis, aceites, manutenção e automações permanecem condicionais, modelos ou decisões pendentes quando a fonte não os confirma.

## Relação com a task-2026-004

Esta fonte complementa a granularidade de briefing, onboarding, checklists, cronograma, entrega e manual do cliente. Não substitui o Manual de Processos nem autoriza alteração de suas páginas derivadas.

## Riscos e decisões pendentes

Evitar duplicação com a task-2026-004 e interpretação de condições de modelo como operação vigente. Permanecem pendentes definição humana de clientes, projetos, escopos, contratos, responsáveis, ferramentas, canais, SLAs, datas, aprovações e quaisquer automações.
