---
id: onboarding-agentes-helpper-monvi-v1
title: Onboarding de Helppers e agentes da Monvi
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
  - agentes
  - helpper
  - supervisao
---

# Onboarding de Helppers e agentes da Monvi

## Objetivo

Registrar e preparar um Helpper ou agente para operação supervisionada, com missão, limites, permissões, ferramentas, custos, evidências, fallback e revisão humana.

## Entradas obrigatórias

- ID e nome do agente;
- missão;
- owner;
- human reviewer;
- pessoa ou papel vinculado, quando aplicável;
- nível de risco;
- ambiente;
- clientes e projetos permitidos;
- skills permitidas;
- ferramentas permitidas;
- repositórios permitidos;
- ações permitidas e proibidas;
- limites de custo;
- timeout e retry;
- fallback;
- kill switch owner;
- contato de incidente;
- plano de rollback;
- critérios de piloto e produção.

## Responsáveis

- owner: responde pela finalidade e manutenção;
- human reviewer: revisa saídas e aprova ações conforme risco;
- responsável de segurança: valida limites e isolamento;
- responsável técnico: implementa e testa quando existir runtime real;
- CEO ou aprovador autorizado: aprova ativação e mudanças críticas.

## Etapas

1. selecionar o manifesto adequado:
   - [[00_SYSTEM/templates/Manifesto-Helpper-especialista]];
   - [[00_SYSTEM/templates/Manifesto-operacional-de-agente]];
2. preencher missão, risco, ambiente e responsáveis;
3. definir permissões por negação padrão;
4. limitar clientes e projetos;
5. declarar skills, ferramentas e repositórios;
6. definir ações proibidas;
7. configurar supervisão proporcional ao risco;
8. definir custo, timeout, retry e fallback;
9. definir kill switch, incidente e rollback;
10. executar piloto controlado;
11. registrar evidências;
12. aprovar ou bloquear ativação.

## Critérios de aprovação

- identidade e owner definidos;
- agente não amplia permissão de usuário;
- isolamento de cliente validado;
- secrets fora do Brain;
- ações críticas exigem aprovação;
- custo e parada configurados;
- logs e evidências previstos;
- fallback e rollback definidos;
- kill switch testável;
- piloto concluído;
- reviewer humano atribuído.

## Estados documentais recomendados

```text
draft
→ review
→ pilot
→ approved
→ active
→ suspended
→ decommissioned
```

A transição depende de política, aprovação e evidência. O documento não prova que o runtime foi implementado.

## Bloqueios

O agente não deve avançar quando faltar:

- owner;
- human reviewer;
- missão;
- limites;
- escopo de cliente ou projeto;
- lista de ferramentas;
- ações proibidas;
- controle de custo;
- kill switch;
- fallback;
- plano de rollback;
- evidência de piloto.

## Segurança

Aplicar obrigatoriamente:

- [[00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper]];
- [[00_SYSTEM/policies/Politica-seguranca-documental-e-isolamento-Monvi-Brain]];
- [[00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes]];
- [[00_SYSTEM/policies/Politica-logs-evidencias-custos-e-monitoramento-agentes]].

## Limites

Este procedimento não cria agente real, integração, credencial, sessão, ferramenta ou automação. Ele prepara a documentação e os critérios de ativação supervisionada.
