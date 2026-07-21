---
id: task-2026-003
type: task
title: "Ingestão da Estratégia Empresarial Monvi"
status: approved
owner: codex
reviewer: ceo-monvi
confidentiality: internal
created_at: "2026-07-16"
updated_at: "2026-07-21"
reviewed_at: "2026-07-21"
review_cycle: on-change
sources:
  - "../../../01_RAW/monvi/Monvi - Estratégia Empresarial.pdf"
related:
  - "../../../02_WIKI/estrategia/Estrategia-empresarial.md"
aliases: []
tags: [task, ingestao, estrategia]
task_state: done
agent: codex
active_client: null
allowed_paths:
  - "02_WIKI/empresa/Monvi.md"
  - "02_WIKI/estrategia/"
  - "02_WIKI/index.md"
  - "00_SYSTEM/registries/"
  - "00_SYSTEM/logs/"
  - "00_SYSTEM/tasks/active/"
  - "00_SYSTEM/tasks/review/"
  - "00_SYSTEM/tasks/done/"
read_only_paths:
  - "01_RAW/monvi/Monvi - Estratégia Empresarial.pdf"
  - "02_WIKI/marketing/Manual-da-marca.md"
  - "02_WIKI/servicos/Catalogo-de-servicos.md"
  - "02_WIKI/servicos/Sites.md"
  - "02_WIKI/servicos/E-commerce.md"
  - "02_WIKI/servicos/Inteligencia-artificial.md"
  - "02_WIKI/servicos/Automacoes.md"
  - "02_WIKI/servicos/Manutencao.md"
forbidden_paths:
  - "01_RAW/README.md"
  - "01_RAW/monvi/README.md"
  - "01_RAW/monvi/Monvi - Manual da marca.pdf"
  - "01_RAW/monvi/Monvi - Catalogo de serviços.pdf"
  - "02_WIKI/comercial/"
  - "02_WIKI/seguranca/"
  - "02_WIKI/processos/"
  - "02_WIKI/tecnologia/"
  - "03_OPERATIONS/clientes/"
  - "04_OUTPUTS/"
requires_review: false
acceptance_criteria:
  - "Somente a Estratégia Empresarial Monvi V1.0 é processada e o conteúdo de 01_RAW permanece intacto."
  - "Toda informação derivada é classificada como fato institucional, diagnóstico interno, hipótese estratégica, recomendação, decisão pendente, decisão aprovada, campo não preenchido ou exemplo de comunicação."
  - "As páginas estratégicas ficam em status review e confidencialidade internal, com proveniência até a fonte."
  - "O roadmap não é tratado como plano executivo aprovado e o modelo de negócio não é tratado como política comercial, financeira ou contratual aprovada."
  - "Manifesto, índice e logs JSON Lines são atualizados, e JSON, JSONL, frontmatter, schema, links e IDs são validados."
blocked_reason: null
---

# Ingestão da Estratégia Empresarial Monvi

## Decisão aprovada

Executar exclusivamente a ingestão da fonte declarada em `read_only_paths`; a fonte é somente leitura e nenhum outro item de `01_RAW` pode ser consultado, processado ou alterado.

## Instruções

- Separar fatos, diagnósticos, hipóteses, recomendações, decisões pendentes, decisões aprovadas, campos não preenchidos e exemplos de comunicação.
- Não tratar afirmações de mercado, projeções, resultados desejados ou autoavaliações como fatos comprovados.
- Não alterar serviços, Manual da Marca, Catálogo de Serviços, Comercial, Segurança, Processos, Tecnologia, Clientes ou Outputs.
- Não inferir preço, receita, MRR, CAC, crescimento, SLA, garantia, resultado, orçamento, responsável ou data fixa.

## Critérios de aceite

Os critérios observáveis estão registrados no frontmatter. Depois das validações, alterar somente `task_state` para `review` e mover esta tarefa para `00_SYSTEM/tasks/review/`; `status` permanece `review` para revisão humana.

## Validações

Validar JSON/JSONL, frontmatter, schema da tarefa, links relativos, IDs, SHA-256, integridade de `01_RAW` e escopo de arquivos alterados.

## Encerramento humano

- decisão: aprovada com ressalvas;
- aprovador: ceo-monvi;
- data: 2026-07-21;
- execução documental: `task-2026-019`;
- evidência de execução: commit `9f85640`;
- relatório: `00_SYSTEM/audits/Aprovacao-decisoes-executivas-tasks-002-003-009-011-012.md`;
- resultado: decisões executivas aplicadas à Wiki e revisadas em lote;
- limite: aprovação executiva e documental não comprova implantação operacional, contratação, resultado, capacidade ilimitada ou aceitação definitiva das responsabilidades provisórias.
