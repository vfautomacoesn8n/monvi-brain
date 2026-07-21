---
id: task-2026-012
type: task
title: "Ingestão da Apresentação Institucional Monvi"
status: approved
task_state: done
owner: codex
reviewer: ceo-monvi
confidentiality: internal
active_client: null
requires_review: false
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: "2026-07-21"
review_cycle: on-change
sources:
  - "../../../01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pptx"
  - "../../../01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pdf"
related:
  - "../../../02_WIKI/empresa/Monvi.md"
aliases: []
tags: [task, ingestao, apresentacao, institucional]
agent: codex
allowed_paths:
  - "02_WIKI/empresa/"
  - "02_WIKI/index.md"
  - "00_SYSTEM/registries/"
  - "00_SYSTEM/logs/"
  - "00_SYSTEM/tasks/active/"
  - "00_SYSTEM/tasks/review/"
read_only_paths:
  - "01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pptx"
  - "01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pdf"
  - "AI-START.md"
  - "AGENTS.md"
  - "00_SYSTEM/canonical/AI-CONTRACT.md"
  - "00_SYSTEM/canonical/KNOWLEDGE-MODEL.md"
  - "00_SYSTEM/canonical/PERMISSIONS.md"
  - "00_SYSTEM/canonical/SECURITY.md"
  - "00_SYSTEM/workflows/ingest.md"
  - "00_SYSTEM/schemas/note.schema.json"
  - "02_WIKI/empresa/Monvi.md"
  - "02_WIKI/marketing/Manual-da-marca.md"
  - "02_WIKI/marketing/Identidade-visual.md"
  - "02_WIKI/marketing/Tom-de-voz.md"
  - "02_WIKI/estrategia/Posicionamento.md"
  - "02_WIKI/estrategia/Principio-central.md"
  - "02_WIKI/estrategia/Diferenciais.md"
  - "02_WIKI/servicos/Catalogo-de-servicos.md"
  - "02_WIKI/servicos/Sites.md"
  - "02_WIKI/servicos/E-commerce.md"
  - "02_WIKI/servicos/Inteligencia-artificial.md"
  - "02_WIKI/servicos/Automacoes.md"
  - "02_WIKI/servicos/Manutencao.md"
  - "02_WIKI/processos/Fluxo-operacional.md"
  - "02_WIKI/processos/Modelo-operacional.md"
  - "02_WIKI/processos/README.md"
  - "02_WIKI/tecnologia/README.md"
  - "02_WIKI/comercial/ICP-e-segmentos.md"
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
  - "03_OPERATIONS/"
  - "04_OUTPUTS/"
  - "05_SHARED/"
acceptance_criteria:
  - "PPTX principal e PDF derivado preservam hashes, estrutura de 10 slides/páginas e equivalência textual, estrutural e visual confirmada externamente."
  - "Uma síntese em review/internal mapeia a apresentação sem alterar páginas especializadas nem converter alegações comerciais em políticas, garantias ou fatos operacionais."
  - "Índice, manifesto, logs e tarefa em review mantêm auditoria, distinção de derivação e revisão humana necessária."
---

# Ingestão da Apresentação Institucional Monvi

## Objetivo

Registrar a Apresentação Institucional como mapa documental único, sem duplicar as páginas especializadas nem promover mensagens comerciais, processo, tecnologia, contatos ou benefícios a fatos operacionais, políticas ou garantias.

## Fontes e relação documental

Fonte principal editável: `01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pptx`, SHA-256 `BD6537F507A27502B8D6760D340EDB44576658595A54463E082F948AA1D55F19`, 207609 bytes e 10 slides. Arquivo derivado: `01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pdf`, SHA-256 `A5D871E9B0DAE7C664692F28EEE5E9E64D92BC9AA105B02A7A3E4444410F57F6`, 472744 bytes e 10 páginas.

PPTX e PDF não são duplicatas binárias. Equivalências textual, estrutural e visual foram confirmadas; a validação visual externa registrou somente diferenças não materiais de renderização, antialiasing, espaçamento e tipografia. Os formatos não devem gerar duas sínteses distintas.

## Entregáveis

- Uma síntese em `02_WIKI/empresa/`.
- Atualizações mínimas no índice, manifesto e logs.
- Encaminhamento desta tarefa para `review` após validação.

## Riscos e decisões pendentes

Evitar duplicação com Marca, Estratégia, Serviços, Processos, Comercial e Tecnologia. Benefícios, diferenciais, serviços, processo, stack, público, e-mail e domínio são alegações ou textos da apresentação; exigem confirmação humana antes de qualquer publicação, compromisso, operação ou contato.

## Encerramento humano

- decisão: aprovada com ressalvas;
- aprovador: ceo-monvi;
- data: 2026-07-21;
- execução documental: `task-2026-019`;
- evidência de execução: commit `9f85640`;
- relatório: `00_SYSTEM/audits/Aprovacao-decisoes-executivas-tasks-002-003-009-011-012.md`;
- resultado: decisões executivas aplicadas à Wiki e revisadas em lote;
- limite: aprovação executiva e documental não comprova implantação operacional, contratação, resultado, capacidade ilimitada ou aceitação definitiva das responsabilidades provisórias.
