---
id: task-2026-024
title: Métricas executivas da Monvi
type: task
status: approved
task_state: done
priority: high
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: "2026-07-21"
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-024-metricas-executivas-monvi.md
  - 00_SYSTEM/tasks/done/TASK-2026-024-metricas-executivas-monvi.md
  - 03_OPERATIONS/metrics/Metricas-executivas-Monvi.md
  - 03_OPERATIONS/templates/Painel-executivo-Monvi.md
  - 03_OPERATIONS/templates/Dicionario-de-metricas-Monvi.md
  - 00_SYSTEM/logs/changes.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - 00_SYSTEM/registries/source-manifest.md
  - 00_SYSTEM/logs/ingestion.jsonl
  - 01_RAW/
  - 02_WIKI/
  - 04_OUTPUTS/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 99_ARCHIVE/
---

# Task 2026-024 — Métricas executivas da Monvi

## Contexto

A auditoria de prontidão operacional aprovou métricas executivas como a quarta prioridade dos próximos 30 dias.

A Monvi já possui diretrizes estratégicas, sistema comercial mínimo e operação padrão. Falta definir um conjunto pequeno de indicadores, com fórmulas, fontes, responsáveis e frequência de revisão.

## Objetivo

Criar um sistema mínimo de métricas que ajude o CEO a acompanhar:

- crescimento;
- recorrência;
- eficiência comercial;
- execução;
- margem;
- retrabalho;
- satisfação;
- previsibilidade;
- riscos operacionais.

## Entregáveis

Criar, em `review`:

- `03_OPERATIONS/metrics/Metricas-executivas-Monvi.md`;
- `03_OPERATIONS/templates/Painel-executivo-Monvi.md`;
- `03_OPERATIONS/templates/Dicionario-de-metricas-Monvi.md`.

## Princípios

- não inventar números;
- não preencher metas sem decisão humana;
- diferenciar dado ausente, estimado e confirmado;
- definir fórmula antes de medir;
- usar poucas métricas relevantes;
- evitar indicador sem responsável;
- registrar fonte e frequência;
- não automatizar antes de validar o processo manual;
- não tratar estimativa como fato;
- não usar métricas para prometer resultado.

## Métricas mínimas propostas

### Financeiro

- receita total;
- receita recorrente;
- participação da receita recorrente;
- ticket médio;
- margem bruta, quando houver dados;
- despesas fixas relevantes;
- previsão de caixa, quando houver dados.

### Comercial

- leads recebidos;
- leads qualificados;
- diagnósticos realizados;
- propostas enviadas;
- negócios ganhos;
- negócios perdidos;
- taxa de conversão;
- ciclo comercial;
- motivos de perda;
- receita por canal.

### Operação

- projetos ativos;
- projetos entregues;
- prazo planejado versus realizado;
- tempo bloqueado;
- retrabalho;
- solicitações fora do escopo;
- incidentes pós-publicação;
- taxa de aceite.

### Recorrência e clientes

- clientes em manutenção;
- receita recorrente mensal;
- churn, quando aplicável;
- expansão de contrato;
- satisfação;
- indicações;
- risco de concentração de receita.

## Campos mínimos por métrica

- nome;
- objetivo;
- definição;
- fórmula;
- unidade;
- fonte;
- responsável;
- frequência;
- data de corte;
- status de disponibilidade;
- qualidade do dado;
- limitações;
- interpretação;
- ação associada.

## Status de disponibilidade

- disponível e confirmado;
- disponível, não validado;
- estimado;
- não disponível;
- não aplicável.

## Frequência sugerida

- semanal: pipeline, próximas ações, bloqueios e projetos ativos;
- mensal: receita, conversão, ticket, recorrência, prazo, retrabalho e satisfação;
- trimestral: canais, margem, concentração, estratégia e prioridades.

## Regras

- toda métrica deve ter definição e fórmula;
- toda métrica deve ter responsável;
- dado ausente deve ser marcado;
- metas devem ser aprovadas pelo CEO;
- variações devem ser explicadas;
- decisões devem ser registradas;
- nenhuma integração ou painel automático será implantado nesta task;
- nenhuma fonte deve ser presumida;
- nenhuma métrica jurídica, de LGPD ou de segurança deve ser tratada como conformidade.

## Fora do escopo

- criar dashboard em ferramenta externa;
- integrar CRM;
- configurar Analytics;
- configurar banco de dados;
- automatizar coleta;
- definir metas financeiras finais;
- afirmar resultados;
- implantar OKRs;
- alterar preços;
- executar contabilidade;
- declarar conformidade.

## Etapas

1. definir painel mínimo;
2. criar dicionário de métricas;
3. definir fórmulas;
4. definir fontes e responsáveis;
5. marcar indisponibilidades;
6. definir frequência;
7. revisar com o CEO;
8. testar manualmente;
9. aprovar;
10. mover a task para `done`.

## Critérios de aceitação

- conjunto mínimo de métricas definido;
- fórmulas documentadas;
- fontes e responsáveis previstos;
- ausência de dados explicitada;
- metas não inventadas;
- painel manual possível;
- materiais em `review`;
- task em `review`;
- `changes.jsonl` válido;
- nenhum caminho protegido alterado.

## Execução inicial

- data: 2026-07-21;
- sistema criado: `03_OPERATIONS/metrics/Metricas-executivas-Monvi.md`;
- painel criado: `03_OPERATIONS/templates/Painel-executivo-Monvi.md`;
- dicionário criado: `03_OPERATIONS/templates/Dicionario-de-metricas-Monvi.md`;
- todos os materiais permanecem em `review`;
- task mantida em `review`;
- nenhum número ou meta foi inventado;
- nenhuma fonte foi presumida como disponível;
- nenhuma automação ou dashboard externo foi implantado;
- próxima decisão humana: revisar conjunto mínimo, fórmulas, responsáveis e frequências.

## Encerramento humano

- decisão: aprovada;
- aprovador: ceo-monvi;
- data: 2026-07-21;
- materiais aprovados: métricas executivas, painel executivo e dicionário de métricas;
- movimento final: `review` para `done`;
- padrões aprovados:
  1. revisão semanal de pipeline, próximas ações, projetos ativos, bloqueios e riscos;
  2. revisão mensal de receita, recorrência, conversão, ticket, prazo, retrabalho e satisfação;
  3. revisão trimestral de margem, canais, churn, concentração e estratégia;
  4. ausência de dado não pode ser registrada como zero;
  5. toda métrica deve ter fórmula, fonte, responsável e frequência;
  6. dados devem ser classificados como confirmados, não validados, estimados, indisponíveis ou não aplicáveis;
  7. nenhuma meta numérica deve ser criada sem aprovação do CEO;
  8. nenhuma automação ou dashboard deve ser implantado antes do teste manual;
  9. variações relevantes devem gerar explicação, decisão, responsável e prazo;
  10. o painel é interno e não deve ser apresentado externamente sem revisão;
- limite: esta task aprova o desenho de medição, mas não comprova coleta ativa, qualidade atual dos dados, resultado, meta, integração, dashboard implementado, conformidade contábil, jurídica, de LGPD ou de segurança.
