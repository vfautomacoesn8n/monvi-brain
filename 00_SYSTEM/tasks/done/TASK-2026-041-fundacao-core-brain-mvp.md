---
id: task-2026-041
title: Fundação técnica do Monvi Core Brain MVP
type: task
status: done
task_state: done
owner: ceo-monvi
agent: helpper
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: false
confidentiality: internal
classification: internal
created_at: "2026-07-30"
updated_at: "2026-07-31"
reviewed_at: "2026-07-31T11:47:00-03:00"
version: "1.0.0"
allowed_paths:
  - 00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md
  - 00_SYSTEM/audits/Execucao-task-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/logs/decisions.jsonl
  - 03_OPERATIONS/decisoes/decision-20260730-stack-core-brain-mvp.md
  - 03_OPERATIONS/decisoes/decision-20260730-etapa-1-tecnica-core-brain.md
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
  - Stack técnica do Core Brain MVP definida e justificada
  - Estrutura inicial do backend criada
  - Banco de dados escolhido e configuração inicial documentada
  - Modelo mínimo de pessoas, identidades, perfis, clientes e projetos definido
  - Fronteiras entre autenticação, autorização e dados de negócio preservadas
  - Ambientes de desenvolvimento, homologação e produção especificados
  - Estratégia de variáveis de ambiente e secrets definida
  - API interna mínima especificada
  - Endpoint de health check implementado ou preparado para implementação
  - Estratégia de logs e auditoria técnica definida
  - Leitura do Monvi Brain tratada como operação controlada
  - Nenhuma leitura ampla e irrestrita de arquivos autorizada
  - Nenhum conteúdo de cliente utilizado em testes sem autorização
  - Nenhuma memória persistente ativada automaticamente
  - Nenhuma indexação vetorial ativada automaticamente
  - Nenhuma integração externa ativada sem aprovação
  - Nenhuma credencial persistida no repositório
  - Riscos técnicos, dependências e decisões pendentes registrados
  - Próximas tasks técnicas identificadas
  - Revisão humana concluída antes da aprovação
blocked_reason: "A ativação de login real, Google Workspace, Helppers individuais, memória persistente, busca vetorial, interface completa, integrações externas e produção permanece fora do escopo desta task."
---

# Task 041 — Fundação técnica do Monvi Core Brain MVP

## Contexto

A Monvi concluiu a arquitetura documental de identidade, autenticação, autorização e seleção de Helppers na Task 040.

A implementação técnica permanece bloqueada até que exista uma fundação mínima para o Monvi Core Brain, incluindo backend, banco de dados, modelo de dados, API interna, ambientes, logs e controles de acesso.

Esta task inicia a Fase 2 do roadmap conceitual, mas não deve tentar entregar todo o Core Brain em uma única execução.

## Objetivo

Definir e preparar a fundação técnica do Monvi Core Brain MVP de forma que as próximas tasks possam implementar autenticação real, leitura controlada do Brain, busca de conhecimento, Helppers individuais e operação supervisionada sem misturar responsabilidades.

## Diagnóstico

A documentação institucional, as políticas e os modelos de governança estão mais maduros do que a implementação.

Ainda não existe evidência técnica suficiente de:

- backend funcional do Core Brain;
- banco de dados configurado;
- modelo persistente de pessoas, identidades, perfis, clientes e projetos;
- API interna;
- controle técnico de autorização;
- logs e auditoria de aplicação;
- ambientes separados;
- estratégia operacional de secrets;
- leitura controlada do Monvi Brain.

Sem essa fundação, qualquer ativação de login ou Helpper individual criaria dependências frágeis e risco de acesso indevido.

## Escopo

### 1. Decisões de arquitetura

Definir:

- linguagem e framework do backend;
- estratégia de monorepo ou estrutura equivalente;
- banco de dados principal;
- camada de acesso a dados;
- validação de entrada;
- estrutura de configuração;
- padrão de erros;
- estratégia de migrações;
- estratégia de testes.

Cada decisão deverá registrar:

- contexto;
- opção escolhida;
- alternativas consideradas;
- justificativa;
- riscos;
- impacto operacional;
- possibilidade de reversão.

### 2. Modelo mínimo de dados

Definir entidades e relações mínimas para:

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
- identidade externa vinculada por identificador estável;
- perfis e papéis separados da identidade;
- permissões avaliadas por ação e escopo;
- associação controlada entre pessoas, clientes e projetos;
- sessões revogáveis;
- auditoria técnica rastreável.

### 3. Backend inicial

Preparar uma estrutura mínima contendo:

- inicialização da aplicação;
- configuração por ambiente;
- validação de variáveis obrigatórias;
- health check;
- tratamento centralizado de erros;
- logging estruturado;
- camada de acesso a dados;
- base para testes automatizados.

### 4. Banco de dados

Definir e preparar:

- tecnologia selecionada;
- configuração local;
- migrações;
- convenções de nomes;
- chaves primárias;
- índices;
- integridade referencial;
- campos de auditoria;
- política inicial de exclusão lógica ou física;
- estratégia de backup futura.

Nenhum dado real de cliente deve ser criado nesta task.

### 5. API interna mínima

Especificar inicialmente:

- `GET /health`;
- `GET /ready`;
- contrato de erros;
- correlação de requisições;
- autenticação futura;
- autorização futura;
- versionamento da API.

Endpoints de pessoas, clientes, projetos ou autenticação só poderão ser implementados se permanecerem isolados, sem dados reais e dentro dos critérios desta task.

### 6. Ambientes

Definir as fronteiras entre:

- desenvolvimento;
- homologação;
- produção.

Cada ambiente deverá possuir:

- configuração própria;
- banco separado;
- secrets separados;
- logs identificáveis;
- regras de acesso;
- procedimento de promoção;
- procedimento de rollback.

A criação real de produção não — obrigatória nesta task.

### 7. Secrets e configuração

Definir:

- quais valores são públicos;
- quais valores são internos;
- quais valores são secrets;
- onde os secrets poderão ser armazenados;
- como serão injetados na aplicação;
- como serão rotacionados;
- como vazamentos serão tratados.

Credenciais reais não devem ser incluídas no Monvi Brain nem no Git.

### 8. Logs e auditoria

Definir eventos mínimos para:

- inicialização da aplicação;
- falha de configuração;
- requisição recebida;
- resposta concluída;
- erro de aplicação;
- falha de autenticação futura;
- negação de autorização futura;
- criação e revogação de sessão futura;
- leitura futura do Brain;
- acesso futuro a cliente e projeto.

Logs não devem conter:

- tokens;
- senhas;
- cookies completos;
- secrets;
- conteúdo confidencial desnecessário;
- prompts completos sem necessidade e autorização.

### 9. Leitura controlada do Monvi Brain

Definir a fronteira técnica para futura leitura do repositório:

- caminhos permitidos;
- caminhos proibidos;
- classificação dos documentos;
- validação antes da leitura;
- autorização por pessoa e escopo;
- registro da origem;
- limites de tamanho;
- tratamento de arquivos não suportados;
- prevenção de travessia de diretórios;
- prevenção de contaminação entre clientes.

A implementação de busca vetorial e memória persistente permanece fora desta task.

## Fora do escopo

Não fazem parte da Task 041:

- contratação ou ativação do Google Workspace;
- criação das contas corporativas dos CEOs;
- OAuth real;
- login real;
- sessões reais de usuários;
- ativação dos Helppers individuais;
- Helpper Core;
- agentes especialistas;
- memória persistente;
- embeddings;
- banco vetorial;
- indexação automática;
- promoção automática de conhecimento;
- interface completa;
- WhatsApp;
- CRM;
- e-mail;
- Figma;
- n8n;
- ações externas;
- produção pública;
- dados reais de clientes.

## Entregáveis esperados

1. `00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md`
2. `00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md`
3. `00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md`
4. `00_SYSTEM/audits/Execucao-task-2026-041-fundacao-core-brain-mvp.md`
5. Estrutura inicial do backend, quando tecnicamente autorizada
6. Registro de riscos e dependências atualizado
7. Registro da criação e execução da task em `changes.jsonl`

## Decisões obrigatórias

Antes de iniciar implementação relevante, deverão ser definidos:

- linguagem e framework;
- banco de dados;
- ORM ou camada de acesso;
- estrutura do repositório;
- hospedagem prevista;
- estratégia de autenticação futura;
- armazenamento futuro de sessões;
- solução de logs;
- estratégia de secrets;
- ferramenta de testes;
- política inicial de migrações.

## Critérios de interrupção

A execução deverá ser interrompida e encaminhada para decisão humana se ocorrer:

- necessidade de inserir credencial real;
- necessidade de contratar serviço;
- necessidade de usar dados reais de cliente;
- alteração de política aprovada;
- alteração de esquema canônico;
- mudança que autorize acesso real;
- custo recorrente não aprovado;
- conflito entre documentos institucionais;
- risco de vazamento ou acesso cruzado;
- necessidade de produção pública.

## Riscos iniciais

- escolha prematura de stack;
- arquitetura excessivamente complexa para o MVP;
- mistura entre autenticação e autorização;
- modelo de dados insuficiente para isolamento;
- leitura ampla e não controlada do Brain;
- logs contendo dados sensíveis;
- secrets armazenados incorretamente;
- dependência excessiva de um fornecedor;
- ausência de testes de isolamento;
- crescimento de escopo durante a execução.

## Sequência recomendada de execução

1. validar contexto e restrições;
2. inspecionar estrutura atual do repositório;
3. documentar decisões técnicas;
4. definir modelo mínimo de dados;
5. definir contrato inicial da API;
6. preparar estrutura mínima do backend;
7. preparar estratégia de banco e migrações;
8. implementar health check;
9. preparar logging e configuração;
10. criar testes mínimos;
11. registrar riscos, evidências e pendências;
12. encaminhar a task para revisão humana.

## Estado inicial

- backend do Core Brain: não comprovado;
- banco de dados: não definido nesta task;
- ambientes: não comprovados;
- API interna: não comprovada;
- autenticação real: não implementada;
- autorização real: não implementada;
- leitura controlada do Brain: não implementada;
- logs técnicos: não comprovados;
- secrets configurados: não comprovados;
- dados reais utilizados: não;
- revisão humana: pendente.

## Autorização técnica parcial — Etapa 1

Aprovada em `2026-07-30` pelo `ceo-monvi`.

Escopo autorizado:

- base TypeScript e Fastify;
- configuração;
- logs;
- erros;
- endpoints `/health` e `/ready`;
- testes;
- instalação somente das dependências necessárias para essa etapa.

Permanecem bloqueados:

- PostgreSQL;
- Drizzle;
- autenticação real;
- credenciais;
- dados reais;
- integrações externas;
- homologação;
- produção.

Registro canônico:

`03_OPERATIONS/decisoes/decision-20260730-etapa-1-tecnica-core-brain.md`

## Encerramento Formal e Resultados Concluídos

A Task 041 foi formalmente concluída em `2026-07-31` sob a **Opção A** aprovada pelo CEO da Monvi.

Entregáveis validados e integrados à branch `main`:
1. **Infraestrutura Técnica Mínima (Etapa 1)**: Aplicação Fastify/TypeScript em `apps/core-brain/` com Pino, Zod e Vitest, endpoints executáveis `GET /api/v1/health` e `GET /api/v1/ready`, 4 testes automatizados aprovados e build compilado com 0 vulnerabilidades npm.
2. **Proposta de Arquitetura**: `00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md` (aprovada com ressalvas em `decision-20260730-stack-core-brain-mvp.md`).
3. **Modelo conceitual de dados**: `00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md` (especificação relacional de 11 entidades conceituais, cardinalidades, isolamento multi-tenant por cliente/projeto e requisitos LGPD).
4. **Contrato conceitual de API**: `00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md` (especificação de padrões HTTP/REST `/api/v1`, envelope de respostas/erros sanitizados, `request_id`, paginação e idempotência).
5. **Auditoria Consolidada**: `00_SYSTEM/audits/Execucao-task-2026-041-fundacao-core-brain-mvp.md`.
6. **PR de Integração**: [#8 — docs(architecture): add data model and API contract specs for Task 041](https://github.com/vfautomacoesn8n/monvi-brain/pull/8), integrada à `main` via squash merge no commit `09007ec645bc0e0910230895a220e14737848092`.

A execução respeitou todas as restrições canônicas: PostgreSQL real, Drizzle ORM em código, migrations, schemas SQL, autenticação real, credenciais, dados reais de clientes, homologação e produção permanecem bloqueados.
