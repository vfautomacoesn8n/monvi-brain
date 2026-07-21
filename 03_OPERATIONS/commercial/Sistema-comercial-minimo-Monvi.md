---
id: operation-commercial-system-monvi
title: Sistema comercial mínimo da Monvi
type: operation
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
source_task: task-2026-022
classification: internal
---

# Sistema comercial mínimo da Monvi

## Objetivo

Criar um processo comercial simples, repetível e mensurável, que funcione inicialmente sem depender de CRM pago ou automações.

## Princípios operacionais

- toda oportunidade deve ter responsável, próxima ação e data;
- proposta só avança após qualificação mínima;
- nenhum prazo é prometido antes da validação de escopo, acessos e dependências;
- custos de terceiros ficam separados;
- itens fora do escopo são tratados à parte;
- manutenção depende do SLA contratado;
- não há garantia de resultado comercial;
- o processo manual deve estabilizar antes de ser automatizado;
- dados pessoais devem ser minimizados e acessados apenas por quem precisa.

## Pipeline oficial proposto

| Etapa | Objetivo | Critério de entrada | Critério de saída | Próxima ação obrigatória |
|---|---|---|---|---|
| novo lead | registrar entrada | lead recebido | contato iniciado ou encerrado | definir responsável e primeiro contato |
| contato iniciado | estabelecer contato | tentativa registrada | resposta obtida ou limite atingido | agendar retorno |
| qualificado | validar aderência | informações mínimas coletadas | diagnóstico agendado ou desqualificado | marcar diagnóstico |
| diagnóstico agendado | reservar conversa | data combinada | reunião realizada ou reagendada | confirmar presença |
| diagnóstico realizado | entender problema e contexto | conversa concluída | proposta autorizada ou não aderente | consolidar escopo |
| proposta em preparação | estruturar solução | diagnóstico suficiente | proposta revisada | validar internamente |
| proposta enviada | apresentar oferta | proposta aprovada internamente | negociação, ganho, perda ou sem resposta | definir follow-up |
| negociação | ajustar condições | cliente sinalizou interesse ou objeção | ganho, perda ou nova proposta | registrar decisão pendente |
| ganho | formalizar venda | aceite registrado | handoff concluído | abrir operação |
| perdido | encerrar oportunidade | decisão negativa | motivo documentado | avaliar aprendizado |
| sem resposta | encerrar ciclo ativo | limite de tentativas atingido | nutrir depois ou perdido | registrar motivo |
| nutrir depois | manter oportunidade futura | timing inadequado, mas aderente | retorno agendado ou encerramento | definir data de recontato |

## Regras de avanço

### Novo lead para contato iniciado

Obrigatório:

- nome ou identificação;
- canal de origem;
- contato disponível;
- responsável comercial;
- data da próxima ação.

### Contato iniciado para qualificado

Obrigatório:

- problema principal;
- serviço de interesse;
- urgência;
- autoridade de decisão;
- orçamento conhecido, faixa possível ou indicação de que ainda não foi tratado;
- prazo desejado;
- aderência inicial à Monvi.

### Qualificado para diagnóstico

Obrigatório:

- motivo claro para reunião;
- participantes;
- data e horário;
- agenda mínima;
- dúvidas ainda abertas.

### Diagnóstico para proposta

Obrigatório:

- problema e impacto;
- escopo preliminar;
- acessos e dependências;
- restrições;
- prazo desejado;
- critérios de aceite preliminares;
- riscos e lacunas;
- indicação de orçamento ou viabilidade.

### Proposta enviada para negociação

Obrigatório:

- proposta registrada;
- data de envio;
- validade, quando aplicável;
- próximo follow-up;
- responsável;
- objeções conhecidas.

### Negociação para ganho

Obrigatório:

- aceite claro;
- versão final da proposta;
- condições comerciais;
- escopo;
- prazo sujeito a dependências;
- responsável comercial;
- responsável técnico;
- documentação necessária.

## Qualificação mínima

A oportunidade deve ser avaliada em cinco dimensões:

| Dimensão | Pergunta central | Sinal positivo | Alerta |
|---|---|---|---|
| problema | existe dor real e específica? | impacto claro | pedido genérico sem contexto |
| aderência | a Monvi resolve com serviço ativo? | escopo compatível | demanda fora da capacidade ou posicionamento |
| decisão | há acesso ao decisor? | decisor envolvido | intermediário sem autoridade |
| viabilidade | há orçamento ou abertura para discutir investimento? | faixa compatível | expectativa incompatível |
| execução | acessos, prazo e dependências são viáveis? | condições mínimas | urgência irreal ou dependências bloqueadas |

## Critérios de desqualificação

- serviço fora do portfólio ativo;
- expectativa de garantia de resultado;
- prazo incompatível sem possibilidade de ajuste;
- ausência prolongada de decisor;
- recusa em fornecer informações mínimas;
- risco jurídico, técnico ou reputacional desproporcional;
- orçamento claramente incompatível;
- comportamento abusivo ou quebra de confiança.

## Limite de tentativas

Padrão inicial recomendado:

- até 3 tentativas de contato;
- distribuídas em pelo menos 5 dias úteis;
- por no máximo 2 canais adequados;
- sem mensagens repetitivas;
- depois disso, mover para `sem resposta` ou `nutrir depois`.

Esse padrão deve ser revisto com dados reais.

## Handoff comercial para operação

Ao marcar uma oportunidade como `ganho`, criar um registro com:

- ID da oportunidade;
- cliente;
- contatos;
- proposta aceita;
- escopo aprovado;
- itens fora do escopo;
- prazo e marcos;
- dependências;
- acessos necessários;
- critérios de aceite;
- responsável comercial;
- responsável técnico;
- riscos;
- pendências;
- custos de terceiros;
- documentos relacionados;
- data da reunião de kickoff.

A operação não deve começar com informações essenciais ausentes sem que o risco seja explicitamente aceito.

## Rotina comercial mínima

### Diária

- revisar oportunidades com ação vencida;
- executar contatos planejados;
- atualizar estágio;
- registrar próxima ação.

### Semanal

- revisar pipeline;
- identificar oportunidades paradas;
- revisar propostas abertas;
- analisar perdas e gargalos;
- confirmar agenda da semana seguinte.

### Mensal

- consolidar métricas;
- revisar conversão;
- revisar canais;
- identificar motivos de perda;
- revisar ciclo comercial;
- decidir uma melhoria de processo.

## Métricas mínimas

| Métrica | Definição | Frequência |
|---|---|---|
| leads recebidos | entradas no período | semanal e mensal |
| leads qualificados | oportunidades que atingiram qualificação mínima | semanal e mensal |
| diagnósticos realizados | reuniões concluídas | mensal |
| propostas enviadas | propostas efetivamente entregues | mensal |
| negócios ganhos | oportunidades fechadas | mensal |
| negócios perdidos | oportunidades encerradas negativamente | mensal |
| taxa de conversão | ganhos dividido por oportunidades válidas | mensal |
| ticket médio | receita fechada dividida por negócios ganhos | mensal |
| ciclo comercial | dias entre entrada e ganho ou perda | mensal |
| motivos de perda | categorias de encerramento | mensal |
| origem | canal de entrada | mensal |
| receita por canal | receita fechada por origem | mensal |

## Motivos de perda sugeridos

- orçamento;
- prioridade mudou;
- prazo incompatível;
- escolheu concorrente;
- sem decisão;
- serviço fora do escopo;
- risco excessivo;
- sem resposta;
- projeto cancelado;
- outro, com observação.

## Implementação inicial

O sistema pode começar em planilha com três abas:

1. oportunidades;
2. atividades;
3. métricas.

Nenhum CRM específico é aprovado por este documento.

## Critérios para futura aprovação

- CEO revisar etapas;
- critérios de avanço aceitos;
- limite de tentativas aceito;
- ficha de qualificação aprovada;
- template de pipeline aprovado;
- handoff aceito;
- teste manual realizado com oportunidades reais ou simuladas;
- nenhuma promessa indevida identificada.

## Limites

Este documento:

- não substitui proposta, contrato ou SOW;
- não define preço;
- não cria obrigação de prazo;
- não garante conversão;
- não comprova implantação;
- não autoriza automação;
- não define política jurídica ou de LGPD.
