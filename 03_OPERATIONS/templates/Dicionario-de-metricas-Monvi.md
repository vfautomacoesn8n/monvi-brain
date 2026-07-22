---
id: template-metrics-dictionary-monvi
title: Dicionário de métricas da Monvi
type: template
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

# Dicionário de métricas da Monvi

## Registro padrão

Para cada métrica, preencher:

- nome:
- categoria:
- objetivo:
- definição:
- fórmula:
- numerador:
- denominador:
- unidade:
- fonte:
- responsável:
- frequência:
- data de corte:
- status de disponibilidade:
- qualidade do dado:
- limitações:
- interpretação:
- ação associada:
- aprovador:
- última revisão:

## Métricas prioritárias

### Receita total

- objetivo: acompanhar geração de receita;
- definição: receita reconhecida no período conforme fonte financeira validada;
- fórmula: soma das receitas reconhecidas;
- unidade: moeda;
- fonte: não confirmada;
- responsável provisório: Victor;
- frequência: mensal;
- status: não disponível;
- limitação: não substituir contabilidade.

### Receita recorrente

- objetivo: acompanhar previsibilidade;
- definição: receita de contratos recorrentes ativos no período;
- fórmula: soma das receitas recorrentes elegíveis;
- unidade: moeda;
- fonte: contratos e financeiro, a confirmar;
- responsável provisório: Victor;
- frequência: mensal;
- status: não disponível.

### Taxa de conversão

- objetivo: acompanhar eficiência comercial;
- definição: proporção de negócios ganhos entre oportunidades válidas encerradas;
- fórmula: negócios ganhos / oportunidades válidas encerradas;
- unidade: percentual;
- fonte: pipeline comercial;
- responsável provisório: Victor;
- frequência: mensal;
- status: não disponível;
- limitação: critérios de oportunidade válida devem permanecer consistentes.

### Ticket médio

- objetivo: acompanhar valor médio dos negócios;
- definição: receita de novos negócios dividida por negócios ganhos;
- fórmula: receita de novos negócios / negócios ganhos;
- unidade: moeda;
- fonte: pipeline e financeiro;
- responsável provisório: Victor;
- frequência: mensal;
- status: não disponível.

### Ciclo comercial

- objetivo: acompanhar velocidade de decisão;
- definição: média de dias entre entrada da oportunidade e encerramento;
- fórmula: soma dos dias das oportunidades encerradas / quantidade encerrada;
- unidade: dias;
- fonte: pipeline comercial;
- responsável provisório: Victor;
- frequência: mensal;
- status: não disponível.

### Prazo planejado versus realizado

- objetivo: acompanhar previsibilidade de entrega;
- definição: diferença entre duração realizada e duração planejada;
- fórmula: dias realizados - dias planejados;
- unidade: dias;
- fonte: planejamento de projetos;
- responsável provisório: Filipe;
- frequência: mensal;
- status: não disponível;
- limitação: bloqueios externos devem ser registrados separadamente.

### Retrabalho

- objetivo: identificar desperdício e falhas de processo;
- definição: esforço não planejado para refazer trabalho;
- fórmula: horas de retrabalho ou contagem de ocorrências, conforme padrão aprovado;
- unidade: horas ou ocorrências;
- fonte: controle operacional;
- responsável provisório: Filipe;
- frequência: mensal;
- status: não disponível;
- limitação: diferenciar correção, mudança e fora do escopo.

### Clientes em manutenção

- objetivo: acompanhar base recorrente;
- definição: quantidade de clientes com contrato recorrente ativo;
- fórmula: contagem de contratos elegíveis ativos;
- unidade: clientes;
- fonte: contratos e financeiro;
- responsável provisório: Victor;
- frequência: mensal;
- status: não disponível.

### Satisfação

- objetivo: acompanhar percepção do cliente;
- definição: resultado do método de pesquisa aprovado;
- fórmula: depende do método aprovado;
- unidade: a definir;
- fonte: feedback;
- responsável provisório: Victor;
- frequência: trimestral;
- status: não disponível;
- limitação: método e amostra devem ser registrados.

## Regras de manutenção

- revisar definições trimestralmente;
- registrar alterações de fórmula;
- não alterar série histórica sem justificativa;
- preservar origem;
- identificar estimativas;
- marcar métricas descontinuadas;
- registrar responsável e aprovador.
