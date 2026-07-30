---
id: task-2026-041
title: Funda??o t?cnica do Monvi Core Brain MVP
type: task
status: draft
task_state: active
owner: ceo-monvi
agent: helpper
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
confidentiality: internal
classification: internal
created_at: "2026-07-30"
updated_at: "2026-07-30"
reviewed_at: null
version: "0.1.0"
allowed_paths:
  - 00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md
  - 00_SYSTEM/audits/Execucao-task-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
  - 00_SYSTEM/tasks/active/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/tasks/done/TASK-2026-041-fundacao-core-brain-mvp.md
  - apps/core-brain/
  - packages/
  - infrastructure/
  - tests/
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/schemas/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/tasks/done/TASK-2026-040-autenticacao-google-workspace-identity-gateway.md
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/pessoas/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 01_RAW/
  - 05_SHARED/
tags:
  - core-brain
  - mvp
  - backend
  - banco-de-dados
  - api
  - autorizacao
  - auditoria
  - infraestrutura
acceptance_criteria:
  - Stack t?cnica do Core Brain MVP definida e justificada
  - Estrutura inicial do backend criada
  - Banco de dados escolhido e configura??o inicial documentada
  - Modelo m?nimo de pessoas, identidades, perfis, clientes e projetos definido
  - Fronteiras entre autentica??o, autoriza??o e dados de neg?cio preservadas
  - Ambientes de desenvolvimento, homologa??o e produ??o especificados
  - Estrat?gia de vari?veis de ambiente e secrets definida
  - API interna m?nima especificada
  - Endpoint de health check implementado ou preparado para implementa??o
  - Estrat?gia de logs e auditoria t?cnica definida
  - Leitura do Monvi Brain tratada como opera??o controlada
  - Nenhuma leitura ampla e irrestrita de arquivos autorizada
  - Nenhum conte?do de cliente utilizado em testes sem autoriza??o
  - Nenhuma mem?ria persistente ativada automaticamente
  - Nenhuma indexa??o vetorial ativada automaticamente
  - Nenhuma integra??o externa ativada sem aprova??o
  - Nenhuma credencial persistida no reposit?rio
  - Riscos t?cnicos, depend?ncias e decis?es pendentes registrados
  - Pr?ximas tasks t?cnicas identificadas
  - Revis?o humana conclu?da antes da aprova??o
blocked_reason: "A ativa??o de login real, Google Workspace, Helppers individuais, mem?ria persistente, busca vetorial, interface completa, integra??es externas e produ??o permanece fora do escopo desta task."
---

# Task 041 ? Funda??o t?cnica do Monvi Core Brain MVP

## Contexto

A Monvi concluiu a arquitetura documental de identidade, autentica??o, autoriza??o e sele??o de Helppers na Task 040.

A implementa??o t?cnica permanece bloqueada at? que exista uma funda??o m?nima para o Monvi Core Brain, incluindo backend, banco de dados, modelo de dados, API interna, ambientes, logs e controles de acesso.

Esta task inicia a Fase 2 do roadmap conceitual, mas n?o deve tentar entregar todo o Core Brain em uma ?nica execu??o.

## Objetivo

Definir e preparar a funda??o t?cnica do Monvi Core Brain MVP de forma que as pr?ximas tasks possam implementar autentica??o real, leitura controlada do Brain, busca de conhecimento, Helppers individuais e opera??o supervisionada sem misturar responsabilidades.

## Diagn?stico

A documenta??o institucional, as pol?ticas e os modelos de governan?a est?o mais maduros do que a implementa??o.

Ainda n?o existe evid?ncia t?cnica suficiente de:

- backend funcional do Core Brain;
- banco de dados configurado;
- modelo persistente de pessoas, identidades, perfis, clientes e projetos;
- API interna;
- controle t?cnico de autoriza??o;
- logs e auditoria de aplica??o;
- ambientes separados;
- estrat?gia operacional de secrets;
- leitura controlada do Monvi Brain.

Sem essa funda??o, qualquer ativa??o de login ou Helpper individual criaria depend?ncias fr?geis e risco de acesso indevido.

## Escopo

### 1. Decis?es de arquitetura

Definir:

- linguagem e framework do backend;
- estrat?gia de monorepo ou estrutura equivalente;
- banco de dados principal;
- camada de acesso a dados;
- valida??o de entrada;
- estrutura de configura??o;
- padr?o de erros;
- estrat?gia de migra??es;
- estrat?gia de testes.

Cada decis?o dever? registrar:

- contexto;
- op??o escolhida;
- alternativas consideradas;
- justificativa;
- riscos;
- impacto operacional;
- possibilidade de revers?o.

### 2. Modelo m?nimo de dados

Definir entidades e rela??es m?nimas para:

- `person`;
- `identity`;
- `profile`;
- `role`;
- `permission`;
- `client`;
- `project`;
- `membership`;
- `session`;
- `audit_event`.

O modelo deve permitir:

- uma pessoa possuir uma ou mais identidades externas;
- identidade externa vinculada por identificador est?vel;
- perfis e pap?is separados da identidade;
- permiss?es avaliadas por a??o e escopo;
- associa??o controlada entre pessoas, clientes e projetos;
- sess?es revog?veis;
- auditoria t?cnica rastre?vel.

### 3. Backend inicial

Preparar uma estrutura m?nima contendo:

- inicializa??o da aplica??o;
- configura??o por ambiente;
- valida??o de vari?veis obrigat?rias;
- health check;
- tratamento centralizado de erros;
- logging estruturado;
- camada de acesso a dados;
- base para testes automatizados.

### 4. Banco de dados

Definir e preparar:

- tecnologia selecionada;
- configura??o local;
- migra??es;
- conven??es de nomes;
- chaves prim?rias;
- ?ndices;
- integridade referencial;
- campos de auditoria;
- pol?tica inicial de exclus?o l?gica ou f?sica;
- estrat?gia de backup futura.

Nenhum dado real de cliente deve ser criado nesta task.

### 5. API interna m?nima

Especificar inicialmente:

- `GET /health`;
- `GET /ready`;
- contrato de erros;
- correla??o de requisi??es;
- autentica??o futura;
- autoriza??o futura;
- versionamento da API.

Endpoints de pessoas, clientes, projetos ou autentica??o s? poder?o ser implementados se permanecerem isolados, sem dados reais e dentro dos crit?rios desta task.

### 6. Ambientes

Definir as fronteiras entre:

- desenvolvimento;
- homologa??o;
- produ??o.

Cada ambiente dever? possuir:

- configura??o pr?pria;
- banco separado;
- secrets separados;
- logs identific?veis;
- regras de acesso;
- procedimento de promo??o;
- procedimento de rollback.

A cria??o real de produ??o n?o ? obrigat?ria nesta task.

### 7. Secrets e configura??o

Definir:

- quais valores s?o p?blicos;
- quais valores s?o internos;
- quais valores s?o secrets;
- onde os secrets poder?o ser armazenados;
- como ser?o injetados na aplica??o;
- como ser?o rotacionados;
- como vazamentos ser?o tratados.

Credenciais reais n?o devem ser inclu?das no Monvi Brain nem no Git.

### 8. Logs e auditoria

Definir eventos m?nimos para:

- inicializa??o da aplica??o;
- falha de configura??o;
- requisi??o recebida;
- resposta conclu?da;
- erro de aplica??o;
- falha de autentica??o futura;
- nega??o de autoriza??o futura;
- cria??o e revoga??o de sess?o futura;
- leitura futura do Brain;
- acesso futuro a cliente e projeto.

Logs n?o devem conter:

- tokens;
- senhas;
- cookies completos;
- secrets;
- conte?do confidencial desnecess?rio;
- prompts completos sem necessidade e autoriza??o.

### 9. Leitura controlada do Monvi Brain

Definir a fronteira t?cnica para futura leitura do reposit?rio:

- caminhos permitidos;
- caminhos proibidos;
- classifica??o dos documentos;
- valida??o antes da leitura;
- autoriza??o por pessoa e escopo;
- registro da origem;
- limites de tamanho;
- tratamento de arquivos n?o suportados;
- preven??o de travessia de diret?rios;
- preven??o de contamina??o entre clientes.

A implementa??o de busca vetorial e mem?ria persistente permanece fora desta task.

## Fora do escopo

N?o fazem parte da Task 041:

- contrata??o ou ativa??o do Google Workspace;
- cria??o das contas corporativas dos CEOs;
- OAuth real;
- login real;
- sess?es reais de usu?rios;
- ativa??o dos Helppers individuais;
- Helpper Core;
- agentes especialistas;
- mem?ria persistente;
- embeddings;
- banco vetorial;
- indexa??o autom?tica;
- promo??o autom?tica de conhecimento;
- interface completa;
- WhatsApp;
- CRM;
- e-mail;
- Figma;
- n8n;
- a??es externas;
- produ??o p?blica;
- dados reais de clientes.

## Entreg?veis esperados

1. `00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md`
2. `00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md`
3. `00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md`
4. `00_SYSTEM/audits/Execucao-task-2026-041-fundacao-core-brain-mvp.md`
5. Estrutura inicial do backend, quando tecnicamente autorizada
6. Registro de riscos e depend?ncias atualizado
7. Registro da cria??o e execu??o da task em `changes.jsonl`

## Decis?es obrigat?rias

Antes de iniciar implementa??o relevante, dever?o ser definidos:

- linguagem e framework;
- banco de dados;
- ORM ou camada de acesso;
- estrutura do reposit?rio;
- hospedagem prevista;
- estrat?gia de autentica??o futura;
- armazenamento futuro de sess?es;
- solu??o de logs;
- estrat?gia de secrets;
- ferramenta de testes;
- pol?tica inicial de migra??es.

## Crit?rios de interrup??o

A execu??o dever? ser interrompida e encaminhada para decis?o humana se ocorrer:

- necessidade de inserir credencial real;
- necessidade de contratar servi?o;
- necessidade de usar dados reais de cliente;
- altera??o de pol?tica aprovada;
- altera??o de esquema can?nico;
- mudan?a que autorize acesso real;
- custo recorrente n?o aprovado;
- conflito entre documentos institucionais;
- risco de vazamento ou acesso cruzado;
- necessidade de produ??o p?blica.

## Riscos iniciais

- escolha prematura de stack;
- arquitetura excessivamente complexa para o MVP;
- mistura entre autentica??o e autoriza??o;
- modelo de dados insuficiente para isolamento;
- leitura ampla e n?o controlada do Brain;
- logs contendo dados sens?veis;
- secrets armazenados incorretamente;
- depend?ncia excessiva de um fornecedor;
- aus?ncia de testes de isolamento;
- crescimento de escopo durante a execu??o.

## Sequ?ncia recomendada de execu??o

1. validar contexto e restri??es;
2. inspecionar estrutura atual do reposit?rio;
3. documentar decis?es t?cnicas;
4. definir modelo m?nimo de dados;
5. definir contrato inicial da API;
6. preparar estrutura m?nima do backend;
7. preparar estrat?gia de banco e migra??es;
8. implementar health check;
9. preparar logging e configura??o;
10. criar testes m?nimos;
11. registrar riscos, evid?ncias e pend?ncias;
12. encaminhar a task para revis?o humana.

## Estado inicial

- backend do Core Brain: n?o comprovado;
- banco de dados: n?o definido nesta task;
- ambientes: n?o comprovados;
- API interna: n?o comprovada;
- autentica??o real: n?o implementada;
- autoriza??o real: n?o implementada;
- leitura controlada do Brain: n?o implementada;
- logs t?cnicos: n?o comprovados;
- secrets configurados: n?o comprovados;
- dados reais utilizados: n?o;
- revis?o humana: pendente.
