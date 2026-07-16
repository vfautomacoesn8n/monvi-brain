---
id: task-2026-002
type: task
title: "Ingestão do Catálogo de Serviços Monvi"
status: review
owner: codex
reviewer: ceo-monvi
confidentiality: internal
created_at: "2026-07-16"
updated_at: "2026-07-16"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../../01_RAW/monvi/Monvi - Catalogo de serviços.pdf"
related: []
aliases: []
tags: [task, ingestao, servicos]
task_state: review
agent: codex
active_client: null
allowed_paths:
  - "02_WIKI/servicos/"
  - "02_WIKI/index.md"
  - "00_SYSTEM/registries/"
  - "00_SYSTEM/logs/"
  - "00_SYSTEM/tasks/active/"
  - "00_SYSTEM/tasks/review/"
  - "00_SYSTEM/tasks/done/"
read_only_paths:
  - "01_RAW/monvi/Monvi - Catalogo de serviços.pdf"
forbidden_paths:
  - "01_RAW/README.md"
  - "01_RAW/monvi/README.md"
  - "01_RAW/monvi/Monvi - Manual da marca.pdf"
  - "01_RAW/monvi/Monvi - Estratégia Empresarial.pdf"
  - "03_OPERATIONS/clientes/"
  - "02_WIKI/comercial/"
  - "02_WIKI/seguranca/"
  - "02_WIKI/processos/"
  - "02_WIKI/tecnologia/"
  - "04_OUTPUTS/"
requires_review: true
acceptance_criteria:
  - "Somente o Catálogo de Serviços Monvi V1.0 é consultado e permanece intacto."
  - "As seis páginas de serviços ficam em status review e confidencialidade internal, com proveniência até o catálogo."
  - "Prazos são rotulados como típicos declarados na fonte, sem promessa contratual."
  - "Manifesto, índice e logs JSON Lines são atualizados sem acessar outro conteúdo em 01_RAW."
  - "JSON, JSONL, frontmatter, schema, links e IDs são validados sem erros."
blocked_reason: null
---

# Ingestão do Catálogo de Serviços Monvi

## Contexto

Segunda ingestão institucional, limitada ao Catálogo de Serviços Monvi V1.0 de 2026. A única fonte RAW autorizada é o PDF declarado em `read_only_paths`.

## Instruções

- Não ler, processar ou alterar qualquer outro conteúdo em `01_RAW`.
- Registrar prazos como típicos declarados na fonte, sem tratá-los como promessa contratual.
- Não inferir preço, SLA, volume, garantia, resultado ou disponibilidade.
- Tratar entregáveis como escopo declarado do catálogo; eles não substituem o SOW de cada projeto.
- Registrar Nuvemshop e n8n como ferramentas declaradas, pendentes de validação operacional.
- Não alterar o Manual da Marca, Estratégia Empresarial, Comercial, Segurança, Processos, Tecnologia, Clientes ou Outputs.

## Decisões ratificadas

- Nuvemshop e n8n são ferramentas atuais, condicionais ao diagnóstico e ao escopo de cada projeto.
- Cobertura, suporte, disponibilidade e SLA serão definidos em documentação comercial e contratual separada.
- Dados de clientes, acessos, modelos e integrações de IA dependem de avaliação posterior de Segurança e LGPD.
- O Catálogo complementa o Manual da Marca; contatos exibidos permanecem pendentes de confirmação operacional.

## Validações

Validar JSON/JSONL, frontmatter, schema da tarefa, links relativos, IDs, integridade SHA-256 e escopo de leitura da fonte.

## Revisão e entrega

Após execução e validações, mover a tarefa para `00_SYSTEM/tasks/review/` e alterar somente `task_state` para `review`. A aprovação final cabe ao revisor humano.