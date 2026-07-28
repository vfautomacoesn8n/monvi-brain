---
id: operations-people-active
title: Pessoas ativas
type: guide
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: false
classification: internal
source_task: task-2026-038
created_at: "2026-07-28"
updated_at: "2026-07-28"
reviewed_at: "2026-07-28"
version: "1.0.0"
tags:
  - pessoas
  - ativos
  - identidade
related:
  - operations-people-index
  - template-collaborator-profile
---

# Pessoas ativas

## Finalidade

Armazenar perfis documentais de pessoas com vínculo institucional ativo e aprovado.

## Requisitos de entrada

- perfil aprovado;
- identidade validada;
- vínculo ativo;
- função e responsabilidades definidas;
- owner, reviewer e aprovador identificados;
- clientes e projetos autorizados;
- acessos e validade registrados;
- controles de segurança confirmados;
- evidências mínimas registradas.

## Revisão obrigatória

Perfis ativos deverão ser revisados em mudança de função, projeto, cliente, acesso, validade, risco, afastamento, incidente ou término de vínculo.

## Helpper individual

A existência de perfil ativo não cria nem ativa Helpper individual.

Quando houver Helpper aprovado, seu estado deverá permanecer subordinado ao estado da identidade humana vinculada.

## Saídas possíveis

- para `../afastados/`, em afastamento ou suspensão;
- para `../desligados/`, após encerramento do vínculo e tratamento dos acessos.

## Estado atual

- perfis reais neste diretório: nenhum.
