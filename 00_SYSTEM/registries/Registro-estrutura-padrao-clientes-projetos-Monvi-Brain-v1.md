---
id: registry-monvi-brain-v1-client-project-standard-structure
title: Registro da estrutura padrão de clientes e projetos
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
  - clientes
  - projetos
  - isolamento
  - lote-11
---

# Registro da estrutura padrão de clientes e projetos

## Entregas

- padrão de estrutura de cliente criado;
- padrão de estrutura de projeto criado;
- READMEs operacionais atualizados;
- convenções de ID e slug definidas;
- vínculo cliente → projeto formalizado;
- isolamento e caminhos autorizados reforçados.

## Decisões

- nenhum cliente ou projeto real foi criado;
- os templates-base existentes foram reutilizados, não substituídos;
- `status` documental e `task_state` operacional permanecem conceitos separados;
- cada projeto pertence a exatamente um cliente;
- criação depende de autorização humana;
- secrets permanecem fora do Monvi Brain.

## Pendência futura

Os templates-base `00_SYSTEM/templates/client.md` e `00_SYSTEM/templates/project.md` precisam de alinhamento futuro com a governança documental atual. Essa alteração não faz parte deste lote.

## Limites

- RAW e canonical não foram alterados;
- nenhum status foi promovido;
- nenhum cliente real foi cadastrado;
- nenhum projeto real foi cadastrado;
- testes finais não foram executados;
- task 032 permanece em review.
