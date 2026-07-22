---
id: architecture-helpper-hierarchy
title: Arquitetura do Helpper Core, especialistas e agentes individuais
type: architecture
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: "2026-07-22"
source_task: task-2026-028
classification: internal
---

# Arquitetura do Helpper Core, especialistas e agentes individuais

## Objetivo

Definir a hierarquia operacional dos Helppers sem tratar sua implementação como concluída.

## Arquitetura-alvo

```text
Funcionários
→ Helppers individuais
→ Helppers especialistas
→ Helpper Core
→ Monvi Core Brain
→ Monvi Brain
```

## Arquitetura inicial

```text
Funcionário
→ Helpper individual
→ Helpper Core
→ Monvi Core Brain
→ Monvi Brain
```

O especialista será inicialmente um perfil configurável, não um sistema separado por área.

## Helpper Core

Funções:

- gerenciar;
- delegar;
- consolidar;
- revisar consistência;
- detectar conflito;
- cobrar evidência;
- reportar;
- propor promoção.

Limites:

- não aprovar canônico sozinho;
- não acessar secrets;
- não contornar política;
- não compartilhar clientes;
- não assumir autoridade humana.

## Helpper especialista

Contrato mínimo:

- especialidade;
- missão;
- escopo;
- skills;
- ferramentas;
- fontes;
- repositórios;
- limites;
- risco;
- revisor;
- formato de reporte.

## Helpper individual

Contrato mínimo:

- usuário vinculado;
- função;
- clientes;
- projetos;
- memória local;
- skills locais;
- ferramentas;
- repositórios;
- validade;
- logs.

## Fluxo de reporte

```text
Helpper individual
→ Helpper especialista
→ Helpper Core
→ Monvi Core Brain
→ Monvi Brain
```

O Helpper individual pode reportar diretamente ao Helpper Core quando não houver especialista dedicado.

## Critérios de ativação de especialista

- demanda recorrente;
- volume;
- risco;
- conhecimento específico;
- ferramentas próprias;
- revisão especializada;
- uso por mais de um funcionário.

## Supervisão

- baixo risco: rascunho e leitura;
- médio risco: revisão;
- alto risco: aprovação;
- crítico: responsável qualificado, evidência e reversão.

## Limite

Este documento define arquitetura, não implementação.

## Aprovação humana

- aprovado por: CEO da Monvi;
- data: 2026-07-22;
- decisão: arquitetura conceitual aprovada;
- escopo: 20 pontos da arquitetura ampliada da task 028;
- implementação técnica: não comprovada;
- segurança, conformidade e disponibilidade: não comprovadas;
- evolução: progressiva, conforme necessidade, risco, owner e custo justificável.
