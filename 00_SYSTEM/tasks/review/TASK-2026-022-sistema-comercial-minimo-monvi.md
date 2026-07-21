---
id: task-2026-022
title: Sistema comercial mínimo da Monvi
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
  - 00_SYSTEM/tasks/review/TASK-2026-022-sistema-comercial-minimo-monvi.md
  - 00_SYSTEM/tasks/done/TASK-2026-022-sistema-comercial-minimo-monvi.md
  - 03_OPERATIONS/commercial/Sistema-comercial-minimo-Monvi.md
  - 03_OPERATIONS/templates/Qualificacao-de-lead-Monvi.md
  - 03_OPERATIONS/templates/Pipeline-comercial-Monvi.md
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

# Task 2026-022 — Sistema comercial mínimo da Monvi

## Contexto

A auditoria de prontidão operacional aprovou o sistema comercial mínimo como a segunda prioridade dos próximos 30 dias.

A Monvi já possui posicionamento, serviços ativos, proposta comercial interna e diretrizes de marketing. Falta transformar essas decisões em um fluxo comercial simples, repetível e mensurável.

## Objetivo

Criar um sistema comercial mínimo que organize:

- entrada de leads;
- qualificação;
- diagnóstico;
- proposta;
- follow-up;
- fechamento;
- perda;
- passagem para operação;
- registro de métricas essenciais.

## Entregáveis

Criar, em `review`:

- `03_OPERATIONS/commercial/Sistema-comercial-minimo-Monvi.md`;
- `03_OPERATIONS/templates/Qualificacao-de-lead-Monvi.md`;
- `03_OPERATIONS/templates/Pipeline-comercial-Monvi.md`.

## Princípios

- não depender de CRM pago para funcionar;
- poder começar em planilha ou ferramenta simples;
- registrar apenas dados necessários;
- evitar promessas de resultado;
- separar fato, hipótese e recomendação;
- não automatizar antes de estabilizar o processo manual;
- manter supervisão humana nas decisões comerciais;
- respeitar privacidade e minimização de dados.

## Pipeline mínimo

O pipeline deve conter:

1. novo lead;
2. contato iniciado;
3. qualificado;
4. diagnóstico agendado;
5. diagnóstico realizado;
6. proposta em preparação;
7. proposta enviada;
8. negociação;
9. ganho;
10. perdido;
11. sem resposta;
12. nutrir depois.

## Critérios de qualificação

Avaliar, no mínimo:

- problema principal;
- urgência;
- impacto operacional ou comercial;
- serviço compatível;
- orçamento disponível ou faixa possível;
- autoridade de decisão;
- prazo desejado;
- acessos e dependências;
- risco de escopo;
- aderência ao perfil de cliente da Monvi.

## Dados mínimos por oportunidade

- ID;
- data de entrada;
- nome;
- empresa;
- canal;
- contato;
- serviço de interesse;
- problema;
- estágio;
- responsável;
- próxima ação;
- data da próxima ação;
- valor estimado, quando houver;
- probabilidade, se usada;
- motivo de perda;
- observações;
- consentimento ou base de contato, quando aplicável.

## Regras comerciais

- toda oportunidade deve ter próxima ação e data;
- proposta só deve ser criada após qualificação mínima;
- prazo depende de escopo, acessos e aprovação;
- custos de terceiros devem ser separados;
- itens fora do escopo devem ser cobrados à parte;
- manutenção depende de SLA contratado;
- não prometer garantia de resultado;
- oportunidades sem resposta devem ter limite de tentativas;
- perdas devem registrar motivo;
- ganho deve gerar handoff para operação.

## Handoff para operação

Ao marcar como ganho, registrar:

- escopo aprovado;
- proposta aceita;
- responsável comercial;
- responsável técnico;
- contatos do cliente;
- acessos necessários;
- dependências;
- prazo acordado;
- critérios de aceite;
- pendências;
- riscos;
- documentos relacionados.

## Métricas mínimas

- leads recebidos;
- leads qualificados;
- diagnósticos realizados;
- propostas enviadas;
- negócios ganhos;
- negócios perdidos;
- taxa de conversão;
- ticket médio;
- ciclo comercial;
- motivos de perda;
- origem das oportunidades;
- receita por canal.

## Fora do escopo

- contratar CRM;
- configurar automações;
- integrar WhatsApp;
- criar campanhas;
- implantar mídia paga;
- alterar preços;
- substituir proposta ou contrato;
- prometer metas comerciais;
- migrar dados de clientes;
- definir política jurídica ou de LGPD.

## Etapas

1. estruturar pipeline;
2. criar ficha de qualificação;
3. criar template de acompanhamento;
4. definir regras de avanço e encerramento;
5. definir handoff para operação;
6. definir métricas;
7. revisar com o CEO;
8. testar manualmente;
9. aprovar;
10. mover a task para `done`.

## Critérios de aceitação

- pipeline documentado;
- critérios de entrada e saída por etapa;
- qualificação mínima definida;
- próxima ação obrigatória;
- handoff documentado;
- métricas essenciais definidas;
- nenhuma ferramenta paga presumida;
- nenhum resultado garantido;
- materiais em `review`;
- task em `review`;
- `changes.jsonl` válido;
- nenhum caminho protegido alterado.
