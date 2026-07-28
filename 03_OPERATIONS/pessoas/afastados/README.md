---
id: operations-people-away
title: Pessoas afastadas
type: guide
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
source_task: task-2026-038
created_at: "2026-07-28"
updated_at: "2026-07-28"
reviewed_at: null
version: "0.1.0"
tags:
  - pessoas
  - afastados
  - suspensao
related:
  - operations-people-index
  - policy-identity-access-individual-helpper-v1
---

# Pessoas afastadas

## Finalidade

Armazenar perfis documentais de pessoas temporariamente afastadas ou com identidade suspensa.

## Requisitos de entrada

- motivo registrado;
- data de início;
- término previsto ou condição de retorno;
- responsável pelo acompanhamento;
- tratamento de acessos e sessões;
- tratamento do Helpper individual, quando aplicável;
- evidências de contenção ou suspensão.

## Regras durante o afastamento

- acessos incompatíveis deverão permanecer suspensos;
- sessões deverão ser encerradas quando aplicável;
- Helpper individual deverá permanecer inativo ou suspenso;
- nenhuma ampliação de acesso deverá ocorrer;
- mudanças deverão ser registradas e aprovadas.

## Retorno

O retorno para `../ativos/` exigirá nova validação de vínculo, função, acessos, validade, riscos, segurança e Helpper relacionado.

## Encerramento

Quando o vínculo não for retomado, o perfil deverá seguir o processo de desligamento antes de ser movido para `../desligados/`.

## Estado atual

- perfis reais neste diretório: nenhum.
