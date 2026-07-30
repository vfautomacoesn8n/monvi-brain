---
id: task-2026-042
title: Registro formal do Plano Mestre de Construção do Monvi Brain
type: task
status: draft
task_state: active
owner: ceo-monvi
agent: codex
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
confidentiality: internal
classification: internal
created_at: "2026-07-30"
updated_at: "2026-07-30"
reviewed_at: null
version: "0.1.0"
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-042-plano-mestre-construcao-monvi-brain.md
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 03_OPERATIONS/decisoes/decision-20260730-plano-mestre-monvi-brain.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/logs/decisions.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/workflows/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/audits/
  - 00_SYSTEM/tasks/done/
  - 00_SYSTEM/tasks/review/
  - 03_OPERATIONS/decisoes/README.md
  - C:/Users/01011610/Downloads/Plano-Mestre-de-Construcao-Monvi-Brain.md
forbidden_paths:
  - .git/
  - 01_RAW/
  - apps/core-brain/
  - package.json
  - package-lock.json
  - packages/
  - infrastructure/
  - tests/
  - node_modules/
tags: [monvi-brain, roadmap, governance, decision, documentation]
acceptance_criteria:
  - Task active, documental e de governança, com revisão humana obrigatória.
  - Plano integral registrado como roadmap estratégico sem autorização automática de execução.
  - Decisão APROVADO do CEO em 2026-07-30 registrada com todas as restrições.
  - Somente os cinco caminhos permitidos são alterados e os JSONL são válidos sem IDs duplicados.
  - Commit, push, Pull Request e merge continuam em gates humanos separados.
blocked_reason: "Não autoriza execução técnica, dependências, banco, autenticação, credenciais, dados reais, integrações, homologação, produção, commit, push, Pull Request ou merge."
---

# Task 042 — Registro formal do Plano Mestre de Construção do Monvi Brain

## Natureza e objetivo

Esta task está active e é exclusivamente documental e de governança. Registra formalmente o Plano Mestre já aprovado estrategicamente pelo CEO da Monvi, vinculando task, plano, decisão e logs, sem iniciar ou autorizar implementação.

## Aprovação estratégica

- decisão: APROVADO;
- responsável: CEO da Monvi (ceo-monvi);
- data: 2026-07-30;
- natureza: aprovação estratégica do roadmap;
- finalidade: orientar a construção de longo prazo do Monvi Brain.

> Estar previsto no Plano Mestre não significa estar autorizado para implementação.

Execução automática, implementação técnica, dependências, banco de dados, autenticação real, credenciais, dados reais de clientes, integrações externas, homologação e produção permanecem não autorizados.

## Escopo e caminhos

São autorizados somente os cinco caminhos de allowed_paths: criar esta task, registrar integralmente o plano com ajustes mínimos de metadados e referências, registrar a decisão formal e acrescentar os eventos exigidos aos logs.

## Itens proibidos

- criar ou modificar código, apps/core-brain, package.json ou package-lock.json;
- instalar dependências, criar migrations, PostgreSQL, Drizzle, autenticação, credenciais ou integrações;
- usar dados reais, configurar homologação ou produção, executar deploy ou antecipar fases;
- alterar a main diretamente;
- criar ou modificar qualquer caminho fora de allowed_paths;
- fazer commit, push, abrir Pull Request ou merge sem autorização explícita correspondente.

## Validações obrigatórias

1. somente os cinco caminhos permitidos foram alterados;
2. UTF-8 e ausência de Unicode corrompido;
3. cada linha dos JSONL é JSON válido e independente;
4. event_id e decision_id não estão duplicados;
5. task, plano, decisão e logs estão vinculados;
6. git diff --check não apresenta erro;
7. apps/core-brain não foi alterado, não houve dependências nem arquivos secretos;
8. nenhuma fase futura foi marcada como autorizada.

## Riscos e controles

| Risco | Controle |
| --- | --- |
| Interpretar o roadmap como autorização de implementação | Repetir a regra de não autorização em todos os registros. |
| Sobreposição nos logs | Um escritor estrutural por vez e revisão do diff. |
| Alterar o plano além da fonte | Preservar o corpo integral e limitar ajustes a metadados e referências. |
| Expansão técnica | Proibições explícitas e ausência de comandos de runtime, instalação ou deploy. |

## Gate de revisão humana

Após o diff validado, parar para revisão humana. A task só poderá ser concluída após revisão, autorização para commit e commit, autorização para push e push, apresentação e autorização do Pull Request, e autorização de merge e merge autorizado em main. Nenhum desses gates é concedido pelo Plano Mestre.