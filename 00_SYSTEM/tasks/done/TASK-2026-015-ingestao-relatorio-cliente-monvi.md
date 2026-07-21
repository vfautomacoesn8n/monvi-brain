---
id: task-2026-015
type: task
title: "Ingestão do Relatório de Cliente Monvi"
status: approved
task_state: done
owner: codex
reviewer: ceo-monvi
confidentiality: internal
active_client: null
requires_review: false
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../../01_RAW/monvi/14_Relatorio_Cliente_Monvi.pdf"
related:
  - "../../../02_WIKI/processos/Indicadores-operacionais.md"
  - "../../../02_WIKI/processos/QA-aceite-e-handoff.md"
  - "../../../02_WIKI/servicos/Manutencao.md"
  - "../../../02_WIKI/juridico/SOW.md"
  - "../../../02_WIKI/seguranca/LGPD-e-seguranca.md"
aliases: []
tags: [task, ingestao, relatorio, cliente, manutencao, template]
agent: codex
allowed_paths:
  - "02_WIKI/processos/Relatorio-de-cliente.md"
  - "02_WIKI/processos/README.md"
  - "03_OPERATIONS/templates/Relatorio-de-cliente.md"
  - "03_OPERATIONS/templates/Checklist-relatorio-de-cliente.md"
  - "02_WIKI/index.md"
  - "00_SYSTEM/registries/source-manifest.md"
  - "00_SYSTEM/logs/ingestion.jsonl"
  - "00_SYSTEM/logs/changes.jsonl"
  - "00_SYSTEM/tasks/active/TASK-2026-015-ingestao-relatorio-cliente-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-015-ingestao-relatorio-cliente-monvi.md"
read_only_paths:
  - "01_RAW/monvi/14_Relatorio_Cliente_Monvi.pdf"
  - "AI-START.md"
  - "AGENTS.md"
  - "00_SYSTEM/canonical/AI-CONTRACT.md"
  - "00_SYSTEM/canonical/KNOWLEDGE-MODEL.md"
  - "00_SYSTEM/canonical/PERMISSIONS.md"
  - "00_SYSTEM/canonical/SECURITY.md"
  - "00_SYSTEM/workflows/ingest.md"
  - "00_SYSTEM/schemas/note.schema.json"
  - "00_SYSTEM/schemas/task.schema.json"
  - "02_WIKI/processos/Manual-de-processos.md"
  - "02_WIKI/processos/Indicadores-operacionais.md"
  - "02_WIKI/processos/Gates-e-aprovacoes.md"
  - "02_WIKI/processos/QA-aceite-e-handoff.md"
  - "02_WIKI/processos/Playbook-operacao-e-entrega.md"
  - "02_WIKI/servicos/Catalogo-de-servicos.md"
  - "02_WIKI/servicos/Manutencao.md"
  - "02_WIKI/comercial/Handoff-comercial.md"
  - "02_WIKI/comercial/Proposta-comercial.md"
  - "02_WIKI/juridico/SOW.md"
  - "02_WIKI/juridico/Termo-de-manutencao.md"
  - "02_WIKI/seguranca/LGPD-e-seguranca.md"
  - "02_WIKI/seguranca/Classificacao-da-informacao.md"
  - "02_WIKI/seguranca/Checklist-LGPD-por-projeto.md"
  - "02_WIKI/empresa/Apresentacao-institucional.md"
  - "02_WIKI/marketing/Case-study.md"
  - "03_OPERATIONS/templates/Proposta-comercial.md"
  - "03_OPERATIONS/templates/Case-study.md"
  - "03_OPERATIONS/templates/Checklist-evidencias-case-study.md"
  - "00_SYSTEM/tasks/review/TASK-2026-012-ingestao-apresentacao-institucional-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-013-ingestao-proposta-comercial-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-014-ingestao-template-case-study-monvi.md"
forbidden_paths:
  - "01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pdf"
  - "01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pptx"
  - "01_RAW/monvi/02_Proposta_Comercial_Monvi.pdf"
  - "01_RAW/monvi/04_Comercial_e_Vendas_Monvi.pdf"
  - "01_RAW/monvi/05_Juridico_Monvi.pdf"
  - "01_RAW/monvi/06_LGPD_e_Seguranca_Monvi.pdf"
  - "01_RAW/monvi/07_Operacao_Monvi.pdf"
  - "01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf"
  - "01_RAW/monvi/11_Conteudo_e_Marketing_Monvi.pdf"
  - "01_RAW/monvi/12_Plano_de_Marketing_Monvi.pdf"
  - "01_RAW/monvi/13_Template_Case_Study_Monvi.pdf"
  - "01_RAW/monvi/Manual_de_Processos_Monvi_Redesenhado_2026.pdf"
  - "01_RAW/monvi/Monvi - Catalogo de serviços.pdf"
  - "01_RAW/monvi/Monvi - Estratégia Empresarial.pdf"
  - "01_RAW/monvi/Monvi - Manual da marca.pdf"
  - "01_RAW/monvi/README.md"
  - "02_WIKI/estrategia/"
  - "02_WIKI/tecnologia/"
  - "02_WIKI/marketing/"
  - "02_WIKI/juridico/Contrato-de-freelancer.md"
  - "02_WIKI/juridico/Contrato-de-parceiro.md"
  - "02_WIKI/juridico/Contrato-de-prestacao.md"
  - "02_WIKI/juridico/Juridico-e-contratos.md"
  - "02_WIKI/juridico/NDA.md"
  - "02_WIKI/juridico/Termo-de-aceite.md"
  - "02_WIKI/seguranca/DPA.md"
  - "02_WIKI/seguranca/Mapa-de-dados.md"
  - "02_WIKI/seguranca/Politica-de-privacidade.md"
  - "02_WIKI/seguranca/Politica-de-seguranca.md"
  - "02_WIKI/seguranca/Resposta-a-incidentes.md"
  - "02_WIKI/seguranca/Retencao-de-dados.md"
  - "02_WIKI/seguranca/Termos-de-uso.md"
  - "03_OPERATIONS/clientes/"
  - "04_OUTPUTS/"
  - "05_SHARED/"
acceptance_criteria:
  - "A fonte RAW internal preserva SHA-256, 119576 bytes, seis páginas A4 e natureza de modelo editorial e operacional com exemplo fictício."
  - "Página de governança, template e checklist permanecem em review, sem cliente, métrica, SLA, atividade, recomendação, renovação, evidência ou aprovação real."
  - "Indicadores, status, SLA, recomendações, oportunidades e envio exigem fonte, evidência, validação e revisão humana aplicáveis."
  - "README, índice, manifesto, logs e tarefa em review mantêm auditoria, paths relativos e escopo restrito."
---

# Ingestão do Relatório de Cliente Monvi

## Objetivo

Criar orientação, template e checklist internos para relatórios periódicos de manutenção, sem transformar o modelo em relatório real, comprovante de atendimento, SLA, aceite, renovação, cobrança, decisão ou autorização de envio.

## Fonte e natureza documental

Fonte exclusiva: `01_RAW/monvi/14_Relatorio_Cliente_Monvi.pdf`, **Modelo de Relatório para o Cliente — Monvi**, V1.0, 2026, seis páginas A4, 119576 bytes e SHA-256 `36AB2F68691AB618007566536FF705F92333EC6B68C4B767CB0AC3793CDA2A02`.

A fonte é modelo editorial, template operacional e modelo de relatório periódico de manutenção com exemplo fictício. Não é relatório real, comprovante de atendimento, prova de SLA, aceite, renovação ou fonte de métricas reais. Placeholder não é dado real; exemplo fictício não é relatório real; indicador-modelo não é métrica comprovada; status visual não é status atualizado; SLA mencionado não é SLA contratado; recomendação não é decisão; renovação sugerida não é renovação confirmada.

## Verificação visual

Seis páginas A4 foram renderizadas em 1191 × 1684 px. O layout geral está íntegro e legível; a página 3 contém placeholders, cards e tabela-modelo; a página 5 apresenta aviso de exemplo fictício suficientemente visível. A página 6 não repete claramente o aviso de conteúdo fictício e pode ser confundida com fechamento de relatório real quando isolada. Não há pessoa, foto, dashboard, gráfico, evidência ou logo de terceiro. Não foi necessário OCR. O PDF RAW permanece intacto.

## Entregáveis autorizados

- Página de governança em `02_WIKI/processos/Relatorio-de-cliente.md`.
- Template e checklist separados em `03_OPERATIONS/templates/`.
- Atualizações mínimas de README, índice, manifesto e logs auditáveis.
- Encaminhamento desta tarefa para `review` após validações.

## Riscos e decisões humanas pendentes

Definir dados, evidências, escopo, plano, responsabilidades, SLA aplicável, critérios de status, aprovações, classificação de relatório preenchido, destinatários, canal seguro e autorização de envio. Revisão operacional é exigida; revisão Comercial, Jurídica, LGPD e Segurança e CEO aplica-se conforme oportunidade, obrigação, dado, incidente, acesso ou risco. Nenhum checklist aprova automaticamente um relatório ou envio.
## Aprovação humana

- decisão: aprovada com ressalva;
- aprovador: ceo-monvi;
- data: 2026-07-21;
- escopo: ingestão, rastreabilidade e artefatos derivados;
- limite: não confirma operação, contatos, preços, métricas, resultados, SLA ou publicação externa;
- ressalva: indicadores, SLA, atividades, recomendações e renovação da fonte são fictícios ou estruturais, não fatos operacionais.