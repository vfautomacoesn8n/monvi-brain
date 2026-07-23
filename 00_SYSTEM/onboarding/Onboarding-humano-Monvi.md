---
id: onboarding-humano-monvi-v1
title: Onboarding humano da Monvi
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
  - onboarding
  - pessoas
  - acesso
  - helpper
---

# Onboarding humano da Monvi

## Objetivo

Integrar uma pessoa ao ecossistema Monvi com identidade, função, acessos, responsabilidades, Helpper individual e evidências claramente definidos.

## Entradas obrigatórias

- solicitação formal;
- nome e ID da pessoa;
- vínculo e função;
- gestor responsável;
- clientes autorizados;
- projetos autorizados;
- ferramentas necessárias;
- repositórios necessários;
- período de validade;
- aprovador;
- classificação de risco.

## Responsáveis

- solicitante: informa a necessidade;
- gestor: valida função e escopo;
- CEO ou aprovador autorizado: aprova permissões;
- responsável técnico: aplica configuração quando houver sistema real;
- reviewer: confirma evidências e conclusão.

## Etapas

1. gerar ID único;
2. preencher [[00_SYSTEM/templates/Template-perfil-usuario-e-Helpper-individual]];
3. definir papel, gestor, clientes e projetos;
4. definir permissões por menor privilégio;
5. definir ferramentas e repositórios;
6. configurar Helpper individual sem exceder as permissões da pessoa;
7. definir validade e revisão;
8. configurar MFA quando aplicável;
9. testar acesso;
10. registrar evidências e aprovação;
11. concluir [[00_SYSTEM/templates/Checklist-onboarding-alteracao-offboarding]].

## Critérios de aprovação

- identidade individual, nunca compartilhada;
- função e gestor definidos;
- escopo aprovado;
- clientes e projetos explícitos;
- acessos mínimos necessários;
- Helpper vinculado à pessoa;
- secrets ausentes do vault;
- teste de acesso concluído;
- log e evidências registrados;
- validade e revisão definidas.

## Saídas

- perfil preenchido;
- checklist concluído;
- registro de aprovação;
- evidência de teste;
- data da próxima revisão;
- pendências ou bloqueios documentados.

## Bloqueios

O onboarding deve permanecer `waiting-approval` ou equivalente quando faltar:

- aprovador;
- gestor;
- escopo;
- cliente ou projeto autorizado;
- definição de ferramentas ou repositórios;
- teste;
- evidência;
- validade.

## Alteração e offboarding

Mudanças e desligamentos seguem:

- [[00_SYSTEM/templates/Manual-criacao-alteracao-remocao-usuarios-Helppers]];
- [[00_SYSTEM/templates/Checklist-onboarding-alteracao-offboarding]];
- [[00_SYSTEM/policies/Politica-ciclo-de-vida-de-acesso-Monvi]].

## Limites

Este procedimento é documental. Não comprova contas, MFA, sessões, integrações ou revogações implementadas em sistemas reais.
