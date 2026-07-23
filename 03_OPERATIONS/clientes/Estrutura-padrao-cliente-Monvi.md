---
id: operations-client-structure-standard-monvi-v1
title: Estrutura padrão de cliente da Monvi
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
  - clientes
  - estrutura
  - isolamento
  - operacao
---

# Estrutura padrão de cliente da Monvi

## Objetivo

Definir como um cliente deve ser representado no Monvi Brain sem misturar dados, evidências, projetos, riscos ou decisões entre clientes.

## Convenção de identificação

- `client_id`: `client-<slug>`;
- pasta: `03_OPERATIONS/clientes/<client-slug>/`;
- `<client-slug>` deve usar letras minúsculas, números e hífens;
- o slug deve ser estável e não deve conter dado sensível;
- renomeações exigem revisão de links, referências e rastreabilidade.

## Estrutura mínima recomendada

```text
03_OPERATIONS/clientes/<client-slug>/
├── README.md
├── projetos.md
├── decisoes/
├── riscos/
├── evidencias/
└── relatorios/
```

`projetos.md` funciona somente como índice de links. Os documentos canônicos dos projetos permanecem em `03_OPERATIONS/projetos/<client-slug>/<project-slug>/`.

A estrutura é criada apenas quando existir cliente real autorizado.

## README obrigatório do cliente

O README do cliente deve registrar:

- `client_id`;
- nome oficial;
- owner;
- reviewer;
- classificação;
- status documental;
- status operacional;
- responsáveis;
- escopo contratado;
- projetos ativos;
- decisões relevantes;
- riscos;
- acessos autorizados;
- revisão periódica;
- fontes e evidências;
- pendências.

## Regras de isolamento

- um arquivo de cliente deve conter `active_client` compatível;
- conteúdos de clientes diferentes não podem compartilhar a mesma pasta;
- referências cruzadas entre clientes são proibidas por padrão;
- tarefas devem declarar `allowed_paths`, `read_only_paths` e `forbidden_paths`;
- RAW permanece somente leitura;
- secrets não podem ser registrados no Brain;
- relatórios e evidências devem preservar o contexto do cliente.

## Criação

Um cliente só pode ser criado quando houver:

- autorização humana;
- `client_id` aprovado;
- owner e reviewer;
- classificação;
- justificativa operacional;
- escopo inicial;
- regra de acesso;
- fonte ou evidência da relação com o cliente.

## Estados recomendados

```text
prospect
→ onboarding
→ active
→ paused
→ closing
→ archived
```

Esses estados são operacionais e não substituem o `status` documental.

## Encerramento e arquivamento

Antes do arquivamento:

- concluir ou cancelar projetos;
- registrar aceite, pendências e riscos;
- revisar acessos;
- remover ou revogar acessos quando aplicável;
- preservar evidências necessárias;
- definir retenção;
- mover conteúdo conforme procedimento de arquivamento aprovado.

## Materiais reutilizados

- [[00_SYSTEM/templates/client]]
- [[03_OPERATIONS/templates/Handoff-comercial-para-operacao-Monvi]]
- [[03_OPERATIONS/templates/Relatorio-de-cliente]]
- [[03_OPERATIONS/templates/Registro-de-risco-e-excecao-Monvi]]
- [[03_OPERATIONS/templates/Registro-de-evidencias-operacionais-Monvi]]
- [[00_SYSTEM/workflows/client-isolation]]

## Limites

Este documento define o padrão. Ele não cria cliente real, acesso, credencial, contrato ou projeto.
