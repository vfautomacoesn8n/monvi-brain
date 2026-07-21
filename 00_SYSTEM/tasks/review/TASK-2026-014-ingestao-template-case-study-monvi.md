---
id: task-2026-014
type: task
title: "Ingestão do Template de Case Study Monvi"
status: review
task_state: review
owner: codex
reviewer: ceo-monvi
confidentiality: internal
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../../01_RAW/monvi/13_Template_Case_Study_Monvi.pdf"
related:
  - "../../../02_WIKI/marketing/Conteudo-e-marketing.md"
  - "../../../02_WIKI/comercial/Proposta-comercial.md"
  - "../../../02_WIKI/juridico/SOW.md"
  - "../../../02_WIKI/seguranca/LGPD-e-seguranca.md"
aliases: []
tags: [task, ingestao, marketing, case-study, template]
agent: codex
allowed_paths:
  - "02_WIKI/marketing/Case-study.md"
  - "02_WIKI/marketing/README.md"
  - "03_OPERATIONS/templates/Case-study.md"
  - "03_OPERATIONS/templates/Checklist-evidencias-case-study.md"
  - "02_WIKI/index.md"
  - "00_SYSTEM/registries/source-manifest.md"
  - "00_SYSTEM/logs/ingestion.jsonl"
  - "00_SYSTEM/logs/changes.jsonl"
  - "00_SYSTEM/tasks/active/TASK-2026-014-ingestao-template-case-study-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-014-ingestao-template-case-study-monvi.md"
read_only_paths:
  - "01_RAW/monvi/13_Template_Case_Study_Monvi.pdf"
  - "AI-START.md"
  - "AGENTS.md"
  - "00_SYSTEM/canonical/AI-CONTRACT.md"
  - "00_SYSTEM/canonical/KNOWLEDGE-MODEL.md"
  - "00_SYSTEM/canonical/PERMISSIONS.md"
  - "00_SYSTEM/canonical/SECURITY.md"
  - "00_SYSTEM/workflows/ingest.md"
  - "00_SYSTEM/schemas/note.schema.json"
  - "02_WIKI/marketing/Conteudo-e-marketing.md"
  - "02_WIKI/marketing/Producao-de-conteudo.md"
  - "02_WIKI/comercial/Proposta-comercial.md"
  - "02_WIKI/servicos/Catalogo-de-servicos.md"
  - "02_WIKI/processos/Gates-e-aprovacoes.md"
  - "02_WIKI/processos/QA-aceite-e-handoff.md"
  - "02_WIKI/juridico/Juridico-e-contratos.md"
  - "02_WIKI/juridico/SOW.md"
  - "02_WIKI/juridico/Termo-de-aceite.md"
  - "02_WIKI/seguranca/LGPD-e-seguranca.md"
  - "02_WIKI/empresa/Apresentacao-institucional.md"
forbidden_paths:
  - "01_RAW/monvi/Monvi - Manual da marca.pdf"
  - "01_RAW/monvi/Monvi - Estratégia Empresarial.pdf"
  - "01_RAW/monvi/Monvi - Catalogo de serviços.pdf"
  - "01_RAW/monvi/Manual_de_Processos_Monvi_Redesenhado_2026.pdf"
  - "01_RAW/monvi/12_Plano_de_Marketing_Monvi.pdf"
  - "01_RAW/monvi/11_Conteudo_e_Marketing_Monvi.pdf"
  - "01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf"
  - "01_RAW/monvi/07_Operacao_Monvi.pdf"
  - "01_RAW/monvi/06_LGPD_e_Seguranca_Monvi.pdf"
  - "01_RAW/monvi/05_Juridico_Monvi.pdf"
  - "01_RAW/monvi/04_Comercial_e_Vendas_Monvi.pdf"
  - "01_RAW/monvi/02_Proposta_Comercial_Monvi.pdf"
  - "01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pdf"
  - "01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pptx"
  - "02_WIKI/estrategia/"
  - "02_WIKI/tecnologia/"
  - "04_OUTPUTS/"
  - "05_SHARED/"
acceptance_criteria:
  - "Fonte internal preserva hash, tamanho, seis páginas e natureza de template editorial com exemplo fictício."
  - "Wiki, template e checklist exigem evidência, autorização documentada e revisão humana sem criar resultado, cliente, depoimento ou publicação."
  - "Índices, manifesto, logs e tarefa em review mantêm auditoria e registram os riscos visuais das páginas 4 e 6."
---

# Ingestão do Template de Case Study Monvi

## Objetivo

Criar orientação e modelos internos para coleta, validação e revisão de case studies, sem criar case real, publicação, métricas, depoimentos, autorização ou evidência.

## Fonte e natureza documental

Fonte exclusiva: `01_RAW/monvi/13_Template_Case_Study_Monvi.pdf`, **Template de Case Study — Monvi**, V1.0, 2026, seis páginas A4, 126611 bytes e SHA-256 `48C4E26C9124B20DDC21753E25983ED7BB42817942EDD869752F86CE3D71EFE1`.

É template editorial e modelo operacional com exemplo fictício. Não é case real, prova de resultado, autorização de cliente, métrica comprovada ou depoimento real. Placeholder não é dado real; exemplo fictício não é case real; métrica-modelo não é resultado comprovado; depoimento exibido não é autorização documentada; antes e depois não é prova causal; CTA comercial não é promessa de resultado.

## Verificação visual confirmada

Seis páginas A4 foram renderizadas em 1191 × 1684 px. O layout geral é legível; a página 3 contém placeholders e métricas-modelo; a página 5 marca o exemplo fictício de forma visível. A página 6 não repete claramente esse aviso; os cabeçalhos das páginas 4 e 6 aparecem parcialmente truncados e seus rodapés não são legíveis na renderização. Não há pessoa, foto, captura de tela, gráfico, logo de terceiro ou evidência anexada. Não foi necessário OCR. Esses problemas pertencem à fonte RAW, que não será alterada.

## Entregáveis e limites

- Uma página de governança em Marketing, um template e um checklist operacional em `review`.
- Atualizações mínimas de README, índice, manifesto e logs.
- Sem valores pré-preenchidos de Clínica Aurora, Dra. Marina, +45%, 8h/sem, 24/7, três meses, WhatsApp, n8n ou qualquer outro exemplo fictício.

## Riscos e decisões humanas pendentes

Definir critérios de evidência, autorização de nome/marca/logo/imagem/depoimento/métrica, classificação de case preenchido, texto de publicação, revisão jurídica, LGPD e Segurança, Comercial, Marketing e aprovação final. Nenhum checklist aprova automaticamente uma publicação.
