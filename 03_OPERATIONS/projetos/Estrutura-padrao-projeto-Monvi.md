---
id: operations-project-structure-standard-monvi-v1
title: Estrutura padrão de projeto da Monvi
type: procedure
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
  - projetos
  - estrutura
  - isolamento
  - operacao
---

# Estrutura padrão de projeto da Monvi

## Objetivo

Definir como um projeto deve ser registrado, executado, revisado e encerrado com vínculo obrigatório ao cliente correspondente.

## Convenção de identificação

- `project_id`: `project-<client-slug>-<project-slug>`;
- pasta: `03_OPERATIONS/projetos/<client-slug>/<project-slug>/`;
- `<project-slug>` deve usar letras minúsculas, números e hífens;
- `active_client` deve corresponder ao cliente;
- `active_project` deve corresponder ao projeto;
- projeto sem cliente autorizado não deve ser criado.

## Estrutura mínima recomendada

```text
03_OPERATIONS/projetos/<client-slug>/<project-slug>/
├── README.md
├── kickoff.md
├── escopo.md
├── riscos.md
├── evidencias.md
├── entregas/
└── encerramento.md
```

A estrutura é criada apenas quando existir projeto real autorizado.

## README obrigatório do projeto

O README deve registrar:

- `project_id`;
- `client_id`;
- owner;
- reviewer;
- responsáveis;
- objetivo;
- escopo;
- fora de escopo;
- status documental;
- `task_state`;
- prazo;
- marcos;
- dependências;
- critérios de aceite;
- riscos;
- aprovações;
- entregáveis;
- evidências;
- pendências;
- próxima revisão.

## Regras de vínculo

- todo projeto pertence a exatamente um cliente;
- o `client_id` deve ser estável;
- dados de outro cliente são proibidos;
- decisões e evidências devem manter rastreabilidade;
- arquivos compartilhados exigem justificativa e revisão;
- tarefas devem restringir paths ao projeto e às fontes autorizadas.

## Criação

Um projeto só pode ser criado quando houver:

- cliente autorizado;
- `project_id` aprovado;
- owner e reviewer;
- objetivo;
- escopo e fora de escopo;
- responsáveis;
- prazo ou janela de execução;
- critérios de aceite;
- dependências conhecidas;
- classificação;
- regra de acesso;
- kickoff ou autorização equivalente.

## Estados operacionais recomendados

```text
planned
→ active
→ blocked
→ waiting-approval
→ closing
→ done
→ archived
```

O `task_state` registra somente o estado operacional. `draft`, `review` e `approved` permanecem reservados ao `status` documental.

## Entrega e encerramento

O projeto só pode avançar para encerramento quando houver:

- entregáveis identificados;
- checklist de entrega;
- aceite ou pendência formal;
- evidências;
- riscos residuais;
- acessos revisados;
- próximos passos;
- registro de encerramento.

## Materiais reutilizados

- [[00_SYSTEM/templates/project]]
- [[03_OPERATIONS/templates/Kickoff-de-projeto-Monvi]]
- [[03_OPERATIONS/templates/Checklist-de-entrega-Monvi]]
- [[03_OPERATIONS/templates/Registro-de-risco-e-excecao-Monvi]]
- [[03_OPERATIONS/templates/Registro-de-evidencias-operacionais-Monvi]]
- [[03_OPERATIONS/templates/Relatorio-de-cliente]]
- [[00_SYSTEM/workflows/client-isolation]]

## Limites

Este documento define o padrão. Ele não cria projeto real, altera contrato, concede acesso ou comprova execução.
