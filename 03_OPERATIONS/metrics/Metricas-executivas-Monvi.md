---
id: operation-executive-metrics-monvi
title: Métricas executivas da Monvi
type: operation
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: "2026-07-21"
source_task: task-2026-024
classification: internal
---

# Métricas executivas da Monvi

## Objetivo

Definir um conjunto pequeno de indicadores para apoiar decisões do CEO sem inventar números, metas, fontes ou resultados.

## Princípios

- toda métrica deve ter definição, fórmula, fonte, responsável e frequência;
- dado ausente deve ser marcado como ausente;
- estimativa deve ser identificada como estimativa;
- metas dependem de aprovação humana;
- nenhum indicador comprova resultado isoladamente;
- nenhuma automação deve ser implantada antes da validação manual;
- qualidade do dado deve ser registrada;
- decisões devem ser associadas a métricas relevantes.

## Painel executivo mínimo proposto

### Financeiro

| Métrica | Fórmula | Fonte esperada | Responsável provisório | Frequência | Status inicial |
|---|---|---|---|---|---|
| receita total | soma das receitas reconhecidas no período | financeiro ou planilha validada | Victor | mensal | não disponível |
| receita recorrente | soma das receitas recorrentes ativas no período | contratos e financeiro | Victor | mensal | não disponível |
| participação recorrente | receita recorrente / receita total | financeiro | Victor | mensal | não disponível |
| ticket médio | receita de novos negócios / negócios ganhos | comercial e financeiro | Victor | mensal | não disponível |
| margem bruta | (receita - custos diretos) / receita | financeiro | Victor | mensal | não disponível |
| despesas fixas relevantes | soma das despesas fixas do período | financeiro | Victor | mensal | não disponível |
| previsão de caixa | saldo atual + entradas previstas - saídas previstas | financeiro | Victor | mensal | não disponível |

### Comercial

| Métrica | Fórmula | Fonte esperada | Responsável provisório | Frequência | Status inicial |
|---|---|---|---|---|---|
| leads recebidos | contagem de novos leads | pipeline comercial | Victor | semanal e mensal | não disponível |
| leads qualificados | contagem de oportunidades qualificadas | pipeline comercial | Victor | semanal e mensal | não disponível |
| diagnósticos realizados | contagem de diagnósticos concluídos | atividades comerciais | Victor | mensal | não disponível |
| propostas enviadas | contagem de propostas efetivamente enviadas | propostas e pipeline | Victor | mensal | não disponível |
| negócios ganhos | contagem de oportunidades ganhas | pipeline comercial | Victor | mensal | não disponível |
| negócios perdidos | contagem de oportunidades perdidas | pipeline comercial | Victor | mensal | não disponível |
| taxa de conversão | negócios ganhos / oportunidades válidas encerradas | pipeline comercial | Victor | mensal | não disponível |
| ciclo comercial | média de dias entre entrada e ganho ou perda | pipeline comercial | Victor | mensal | não disponível |
| motivos de perda | distribuição por categoria | pipeline comercial | Victor | mensal | não disponível |
| receita por canal | soma da receita fechada por origem | pipeline e financeiro | Victor | mensal | não disponível |

### Operação

| Métrica | Fórmula | Fonte esperada | Responsável provisório | Frequência | Status inicial |
|---|---|---|---|---|---|
| projetos ativos | contagem de projetos não concluídos | controle operacional | Victor e Filipe | semanal | não disponível |
| projetos entregues | contagem de projetos entregues no período | controle operacional | Victor e Filipe | mensal | não disponível |
| prazo planejado versus realizado | dias realizados - dias planejados | planejamento de projetos | Filipe | mensal | não disponível |
| tempo bloqueado | soma de dias em status bloqueado | controle operacional | Victor e Filipe | mensal | não disponível |
| retrabalho | horas ou ocorrências de refação não planejada | controle operacional | Filipe | mensal | não disponível |
| fora do escopo | contagem de solicitações classificadas fora do escopo | registro de mudanças | Victor e Filipe | mensal | não disponível |
| incidentes pós-publicação | contagem por severidade | registro de incidentes | Filipe | mensal | não disponível |
| taxa de aceite | entregas aceitas / entregas submetidas | registros de aceite | Victor | mensal | não disponível |

### Recorrência e clientes

| Métrica | Fórmula | Fonte esperada | Responsável provisório | Frequência | Status inicial |
|---|---|---|---|---|---|
| clientes em manutenção | contagem de contratos recorrentes ativos | contratos e financeiro | Victor | mensal | não disponível |
| receita recorrente mensal | soma da receita recorrente ativa | financeiro | Victor | mensal | não disponível |
| churn | clientes recorrentes perdidos / clientes recorrentes no início | contratos e financeiro | Victor | mensal ou trimestral | não disponível |
| expansão de contrato | receita adicional em clientes existentes | comercial e financeiro | Victor | mensal | não disponível |
| satisfação | resultado do método aprovado | pesquisa ou registro de feedback | Victor | trimestral | não disponível |
| indicações | contagem de leads por indicação | pipeline comercial | Victor | mensal | não disponível |
| concentração de receita | receita dos maiores clientes / receita total | financeiro | Victor | trimestral | não disponível |

## Status de disponibilidade

Usar apenas:

- `disponível e confirmado`;
- `disponível, não validado`;
- `estimado`;
- `não disponível`;
- `não aplicável`.

## Qualidade do dado

Registrar:

- alta: fonte consistente e conferida;
- média: fonte existente, com limitações;
- baixa: estimativa ou preenchimento incompleto;
- desconhecida: ainda não avaliada.

## Rotina executiva mínima

### Semanal

Revisar:

- leads recebidos;
- leads qualificados;
- próximas ações vencidas;
- projetos ativos;
- bloqueios;
- riscos imediatos.

### Mensal

Revisar:

- receita;
- recorrência;
- conversão;
- ticket;
- ciclo comercial;
- entregas;
- prazo;
- retrabalho;
- satisfação disponível;
- decisões do mês.

### Trimestral

Revisar:

- margem;
- canais;
- concentração de receita;
- churn;
- estratégia;
- prioridades.

## Processo de fechamento mensal

1. definir data de corte;
2. coletar fontes;
3. marcar dados ausentes;
4. validar fórmulas;
5. registrar limitações;
6. comparar com período anterior, quando disponível;
7. explicar variações;
8. registrar decisões;
9. definir responsáveis e prazos;
10. preservar a versão revisada.

## Regras de interpretação

- uma métrica isolada não deve orientar decisão crítica;
- crescimento sem margem ou previsibilidade exige cautela;
- conversão sem qualidade de lead pode induzir erro;
- prazo deve considerar bloqueios externos;
- retrabalho deve diferenciar correção, mudança e fora do escopo;
- satisfação deve registrar método e amostra;
- ausência de dados é uma pendência, não zero.

## Metas

Nenhuma meta numérica é aprovada por este documento.

Metas futuras devem registrar:

- período;
- valor inicial;
- valor alvo;
- justificativa;
- responsável;
- ações;
- riscos;
- data de revisão;
- aprovador.

## Critérios para futura aprovação

- CEO revisar o conjunto mínimo;
- fórmulas aceitas;
- responsáveis aceitos;
- frequências aceitas;
- painel manual testável;
- nenhuma meta ou número inventado;
- fontes ausentes explicitadas;
- limitações registradas.

## Limites

Este documento:

- não comprova coleta ativa;
- não comprova resultado;
- não substitui contabilidade;
- não define meta;
- não implanta dashboard;
- não configura Analytics, CRM ou banco de dados;
- não declara conformidade jurídica, de LGPD ou de segurança.
