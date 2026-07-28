---
id: operations-people-index
title: Pessoas
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
  - identidade
  - operacao
related:
  - registry-identities-and-profiles-v1
  - policy-identity-access-individual-helpper-v1
  - template-collaborator-profile
  - template-individual-helpper
---

# Pessoas

## Objetivo

Organizar documentalmente o ciclo de vida de pessoas vinculadas à Monvi.

Esta estrutura não cria usuários, contas, acessos, sessões ou Helppers.

## Estrutura

- `onboarding/`: perfis em preparação, validação ou aprovação;
- `ativos/`: perfis documentais ativos e aprovados;
- `afastados/`: perfis temporariamente afastados ou suspensos;
- `desligados/`: perfis cujo vínculo foi encerrado.

## Regras gerais

1. todo perfil deverá possuir identificador estável;
2. todo perfil deverá possuir owner, reviewer e aprovador aplicável;
3. credenciais e segredos não deverão ser armazenados nesta estrutura;
4. movimentação entre diretórios deverá preservar histórico e evidências;
5. a movimentação documental não comprova execução técnica;
6. acessos e Helppers deverão acompanhar o estado da identidade humana;
7. dados de clientes deverão permanecer segregados;
8. nenhum perfil real deverá ser criado sem task específica e autorização.

## Templates relacionados

- `00_SYSTEM/templates/Template-perfil-colaborador.md`;
- `00_SYSTEM/templates/Template-helpper-individual.md`;
- `00_SYSTEM/templates/Template-perfil-usuario-e-Helpper-individual.md`.

## Estado atual

- estrutura documental: em revisão;
- perfis reais: nenhum;
- identidades humanas reais: nenhuma;
- Helppers individuais reais: nenhum.
