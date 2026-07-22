---
id: task-2026-024
title: Métricas executivas da Monvi
type: task
status: review
task_state: review
priority: high
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
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
