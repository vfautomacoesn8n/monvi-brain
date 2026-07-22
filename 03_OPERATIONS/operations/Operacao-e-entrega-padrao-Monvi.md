---
id: operation-standard-delivery-monvi
title: Operação e entrega padrão da Monvi
type: operation
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
source_task: task-2026-023
classification: internal
---

# Operação e entrega padrão da Monvi

## Objetivo

Estabelecer um fluxo mínimo e repetível para transformar uma oportunidade ganha em projeto planejado, executado, revisado, aceito e encerrado com rastreabilidade.

## Princípios

- nenhum projeto começa sem escopo mínimo registrado;
- prazo depende de materiais, acessos, decisões e terceiros;
- toda etapa deve ter responsável, próxima ação e data;
- itens fora do escopo exigem avaliação separada;
- revisão interna ocorre antes da revisão do cliente;
- aceite deve usar critérios claros;
- decisões relevantes devem ser registradas;
- automações e IA críticas exigem supervisão humana;
- nenhuma entrega deve ser declarada concluída sem evidência.

## Fluxo operacional oficial proposto

| Etapa | Objetivo | Critério de entrada | Critério de saída | Responsável principal |
|---|---|---|---|---|
| handoff comercial | transferir contexto aprovado | oportunidade ganha | informações mínimas recebidas | comercial |
| validação de prontidão | confirmar condições de início | handoff recebido | bloqueios classificados | comercial e técnico |
| kickoff | alinhar objetivo, escopo e comunicação | prontidão mínima | decisões registradas | comercial |
| planejamento | organizar entregas, dependências e marcos | kickoff concluído | plano revisado | técnico |
| execução | produzir entregáveis | plano aprovado | entregáveis prontos para revisão | técnico |
| revisão interna | validar qualidade e escopo | execução concluída | material liberado ao cliente | técnico e comercial |
| revisão do cliente | coletar feedback | revisão interna aprovada | feedback consolidado | comercial |
| correções aprovadas | aplicar ajustes válidos | feedback classificado | correções concluídas | técnico |
| aceite | confirmar critérios | entregáveis finais | aceite ou pendências registradas | cliente e comercial |
| publicação ou entrega | colocar solução no destino acordado | aceite e prontidão técnica | publicação confirmada | técnico |
| estabilização | observar falhas iniciais | entrega publicada | incidentes críticos tratados | técnico |
| encerramento | consolidar resultado e pendências | estabilização concluída | projeto formalmente encerrado | comercial e técnico |

## Status permitidos

- não iniciado;
- aguardando cliente;
- aguardando acesso;
- aguardando decisão;
- em planejamento;
- em execução;
- em revisão interna;
- em revisão do cliente;
- em correção;
- pronto para entrega;
- entregue;
- estabilização;
- concluído;
- bloqueado;
- cancelado.

## Critérios de prontidão

Antes de iniciar execução, confirmar:

- escopo mínimo aprovado;
- proposta ou documento relacionado identificado;
- responsável comercial;
- responsável técnico;
- contatos do cliente;
- canal de comunicação;
- entregáveis;
- materiais essenciais;
- acessos necessários;
- dependências;
- prazo condicionado às dependências;
- critérios de aceite preliminares;
- riscos críticos;
- próxima ação e data.

Ausências relevantes devem gerar status `bloqueado`, `aguardando cliente`, `aguardando acesso` ou `aguardando decisão`.

## Planejamento mínimo

Cada projeto deve registrar:

- ID;
- cliente;
- serviço;
- objetivo;
- escopo;
- fora do escopo;
- marcos;
- entregáveis;
- responsáveis;
- dependências;
- acessos;
- materiais;
- prazo previsto;
- critérios de aceite;
- riscos;
- pendências;
- comunicação;
- próxima ação;
- data da próxima ação.

## Controle de escopo

Toda solicitação deve ser classificada:

| Classificação | Tratamento |
|---|---|
| dentro do escopo | executar conforme plano |
| correção | corrigir quando houver divergência do combinado |
| pequena evolução | avaliar conforme contrato ou manutenção |
| fora do escopo | estimar impacto, prazo e custo antes de executar |
| dependência externa | registrar responsável e prazo esperado |
| decisão pendente | pausar parte afetada até aprovação |

## Gestão de mudanças

Toda mudança relevante deve registrar:

- solicitação;
- solicitante;
- data;
- motivo;
- classificação;
- impacto em escopo;
- impacto em prazo;
- impacto em custo;
- risco;
- decisão;
- aprovador;
- próxima ação.

Mudanças que alterem proposta, prazo ou preço exigem alinhamento comercial.

## Revisão interna

Antes de enviar ao cliente, verificar:

- aderência ao escopo;
- qualidade técnica;
- conteúdo;
- funcionamento;
- responsividade, quando aplicável;
- acessibilidade básica, quando aplicável;
- integrações, quando aplicável;
- segurança mínima, quando aplicável;
- ausência de credenciais expostas;
- pendências registradas;
- instruções de revisão.

## Revisão do cliente

O feedback deve:

- ser consolidado em um único registro;
- indicar página, tela, fluxo ou entregável;
- separar correção de nova solicitação;
- ter prioridade;
- ter responsável;
- ter decisão de escopo;
- evitar execução por mensagens soltas sem registro.

## Aceite

O aceite deve registrar:

- entregáveis aceitos;
- critérios validados;
- pendências aceitas;
- limitações conhecidas;
- data;
- aprovador;
- forma de aceite;
- observações.

Silêncio do cliente não deve ser tratado automaticamente como aceite sem previsão contratual válida.

## Publicação ou entrega

Antes da publicação:

- confirmar ambiente;
- confirmar domínio ou destino;
- confirmar acessos;
- confirmar backup ou rollback quando aplicável;
- confirmar janela de publicação;
- confirmar responsável;
- confirmar monitoramento inicial;
- confirmar comunicação ao cliente.

## Estabilização

Após publicação ou entrega:

- verificar disponibilidade;
- testar fluxos críticos;
- registrar incidentes;
- corrigir falhas críticas;
- comunicar limitações;
- registrar prazo de observação conforme serviço ou contrato.

## Encerramento

O projeto pode ser encerrado quando:

- entregáveis foram entregues;
- aceite foi registrado;
- pendências foram documentadas;
- acessos e propriedade foram esclarecidos;
- documentação mínima foi entregue;
- custos de terceiros foram registrados;
- suporte ou manutenção foi definido;
- aprendizados foram registrados;
- próxima relação comercial foi definida, quando aplicável.

## Responsabilidades provisórias

| Área | Responsável provisório |
|---|---|
| comercial, estratégia e cliente | Victor |
| desenvolvimento e infraestrutura | Filipe |
| IA e automações | Victor e Filipe |
| aprovações críticas | Victor e Filipe, quando aplicável |
| materiais, acessos e validação | cliente |
| aprovação final interna | CEO da Monvi |

As responsabilidades finais devem ser confirmadas por projeto.

## Rotina mínima

### Diária

- revisar bloqueios;
- atualizar próxima ação;
- registrar decisões;
- sinalizar atrasos e dependências.

### Semanal

- revisar projetos ativos;
- revisar prazos;
- revisar escopo;
- revisar riscos;
- revisar aprovações pendentes;
- definir prioridades da semana.

### Encerramento mensal

- analisar entregas;
- identificar retrabalho;
- revisar atrasos;
- consolidar aprendizados;
- escolher melhoria de processo.

## Indicadores futuros

- prazo planejado versus realizado;
- tempo bloqueado por cliente;
- retrabalho;
- solicitações fora do escopo;
- taxa de aceite;
- incidentes pós-publicação;
- satisfação;
- margem, quando os dados existirem.

## Limites

Este documento:

- não substitui contrato, proposta ou SOW;
- não define SLA universal;
- não define preço;
- não comprova implantação;
- não autoriza acesso a sistemas;
- não autoriza publicação sem aprovação;
- não declara conformidade jurídica, de LGPD ou de segurança.
