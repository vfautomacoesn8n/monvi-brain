---
id: task-2026-039
title: Implementação piloto das identidades e Helppers individuais dos CEOs
type: task
status: approved
task_state: done
owner: ceo-monvi
agent: helpper
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: false
classification: internal
created_at: "2026-07-29"
updated_at: "2026-07-29"
reviewed_at: "2026-07-29"
version: "1.0.0"
allowed_paths:
  - 00_SYSTEM/audits/Execucao-task-2026-039-implementacao-piloto-identidades-helppers-ceos.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/registries/Registro-identidades-e-perfis-v1.md
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
  - 00_SYSTEM/tasks/review/TASK-2026-039-implementacao-piloto-identidades-helppers-ceos.md
  - 00_SYSTEM/tasks/done/TASK-2026-039-implementacao-piloto-identidades-helppers-ceos.md
  - 03_OPERATIONS/pessoas/onboarding/person-0001/
  - 03_OPERATIONS/pessoas/onboarding/person-0002/
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/schemas/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/tasks/done/
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/pessoas/README.md
  - 03_OPERATIONS/pessoas/onboarding/README.md
  - 03_OPERATIONS/pessoas/ativos/
  - 03_OPERATIONS/pessoas/afastados/
  - 03_OPERATIONS/pessoas/desligados/
forbidden_paths:
  - .git/
  - 05_SHARED/
tags:
  - identidade
  - pessoas
  - onboarding
  - helpper-individual
  - piloto
  - ceos
acceptance_criteria:
  - Perfis documentais de Victor e Filipe criados em onboarding
  - Identificadores institucionais estáveis definidos
  - Dados pendentes explicitamente registrados como pendentes
  - Aprovação cruzada entre os CEOs documentada
  - Helppers individuais modelados sem ativação técnica
  - Nenhuma conta, permissão, credencial ou sessão criada
  - Nenhum acesso a cliente concedido
  - Risk-2026-007 reavaliado antes de qualquer acesso de escrita
  - Relatório de execução produzido
  - changes.jsonl atualizado com JSONL válido
  - Revisão humana concluída antes da aprovação
  - Biblioteca pessoal documental de Victor criada
  - Biblioteca pessoal documental de Filipe criada
  - Vínculo exclusivo entre pessoa, biblioteca e Helpper documentado
  - Bibliotecas gerais reconhecidas como fontes compartilhadas governadas
  - Acesso cruzado entre bibliotecas pessoais proibido
  - Promoção de conhecimento sujeita a revisão humana
  - Nenhuma promoção automática implementada
  - Nenhuma memória técnica persistente, indexação ou banco vetorial ativado
blocked_reason: null
---

# Task 039 — implementação piloto das identidades e Helppers individuais dos CEOs

## Contexto

A Task 038 aprovou a política, o registro-modelo, os templates e a estrutura documental necessários para identidade, acesso e Helpper individual.

Esta task inicia o primeiro piloto real com dois participantes:

- Victor Lopes da Silva Saad;
- Filipe Costa Monteiro.

O piloto começa em estado de onboarding e não concede acesso técnico por meio documental.

## Objetivo

Criar os perfis documentais iniciais dos dois CEOs, modelar seus Helppers individuais e preparar a futura ativação controlada de identidades, contas e acessos.

## Participantes

### person-0001

- nome institucional: Victor Lopes da Silva Saad;
- função inicial: CEO;
- e-mail corporativo: pendente;
- responsabilidade principal: pendente de definição;
- áreas sob decisão final: pendentes de definição;
- GitHub corporativo: inexistente;
- Google Workspace: inexistente;
- aprovador cruzado: Filipe Costa Monteiro.

### person-0002

- nome institucional: Filipe Costa Monteiro;
- função inicial: CEO;
- e-mail corporativo: pendente;
- responsabilidade principal: pendente de definição;
- áreas sob decisão final: pendentes de definição;
- GitHub corporativo: inexistente;
- Google Workspace: inexistente;
- aprovador cruzado: Victor Lopes da Silva Saad.

## Estado inicial obrigatório

- vínculo documental: onboarding;
- identidade corporativa: pending;
- perfil: review;
- matriz de acessos: not_defined;
- Helpper individual: planned;
- credenciais armazenadas: nenhuma;
- acesso a clientes: nenhum;
- automações externas: desativadas;
- execução crítica: desativada.

## Escopo desta task

1. criar um diretório individual para cada pessoa em onboarding;
2. criar um perfil documental para cada CEO;
3. criar um documento de Helpper individual planejado para cada CEO;
4. registrar pendências de e-mail, responsabilidades e áreas de decisão;
5. registrar aprovação cruzada;
6. preparar matriz inicial de acessos sem conceder permissões;
7. testar segregação documental entre os dois perfis;
8. reavaliar o risk-2026-007 antes de qualquer acesso de escrita;
9. produzir relatório de execução e atualizar changes.jsonl;
10. criar uma biblioteca pessoal documental para cada CEO;
11. vincular cada biblioteca pessoal exclusivamente à pessoa e ao respectivo Helpper;
12. reconhecer bibliotecas gerais como fontes compartilhadas governadas;
13. documentar o fluxo de promoção da biblioteca pessoal para uma biblioteca geral;
14. impedir promoção automática, acesso cruzado e memória técnica não autorizada.

## Fora do escopo

- criação de e-mail corporativo;
- criação de conta GitHub;
- criação de conta Google Workspace;
- concessão de acesso administrativo;
- conexão de APIs, tokens, webhooks ou credenciais;
- ativação de Helpper com ferramentas externas;
- acesso automático a dados de clientes;
- envio de mensagens externas;
- alteração de infraestrutura;
- execução autônoma de ações críticas.

## Regras de segurança

1. nenhum segredo será armazenado no Monvi Brain;
2. nenhuma conta será compartilhada entre Victor e Filipe;
3. cada perfil usará identificador institucional estável;
4. cada Helpper permanecerá vinculado a uma única identidade humana;
5. o Helpper não poderá exceder as permissões da pessoa vinculada;
6. o contexto de Victor não deverá ser reutilizado no perfil de Filipe;
7. o contexto de Filipe não deverá ser reutilizado no perfil de Victor;
8. acessos sensíveis exigirão aprovação cruzada;
9. documentos não concedem acesso técnico;
10. qualquer implementação externa exigirá nova validação.

## Aprovação cruzada

| Identidade | Aprovador de acessos sensíveis |
|---|---|
| Victor Lopes da Silva Saad | Filipe Costa Monteiro |
| Filipe Costa Monteiro | Victor Lopes da Silva Saad |

A aprovação cruzada não representa relação hierárquica entre os CEOs. Ela constitui controle de segregação de funções para acessos sensíveis.

## Risk-2026-007

A criação de perfis documentais e Helppers planejados não aciona, isoladamente, a reavaliação técnica do risco.

A reavaliação será obrigatória antes de:

- criar conta GitHub com acesso de escrita;
- conceder acesso de escrita ao repositório;
- conectar Helpper, agente ou automação ao GitHub;
- ativar CI/CD;
- permitir execução técnica sobre a main.

## Plano de execução

### Lote 1 — abertura

- criar branch específica;
- criar esta task;
- validar escopo, participantes e caminhos.

### Lote 2 — perfis

- criar perfil documental de Victor;
- criar perfil documental de Filipe;
- manter ambos em onboarding e review.

### Lote 3 — Helppers planejados

- criar Helpper individual planejado de Victor;
- criar Helpper individual planejado de Filipe;
- documentar capacidades e restrições iniciais.

### Lote 4 — matriz e riscos

- criar matriz inicial de acessos;
- registrar pendências;
- avaliar o risk-2026-007 conforme ações efetivamente realizadas.

### Lote 5 — auditoria e decisão

- produzir relatório de execução;
- atualizar changes.jsonl;
- realizar auditoria técnica;
- submeter a task à revisão humana.

## Condição de encerramento

A task somente poderá ser aprovada quando os perfis e Helppers planejados estiverem documentados, segregados, sem credenciais e sem concessão indevida de acesso.

### Lote 6 — bibliotecas pessoais e gerais

- criar uma biblioteca pessoal documental para Victor;
- criar uma biblioteca pessoal documental para Filipe;
- documentar propriedade, acesso, classificação e segregação;
- vincular cada biblioteca ao respectivo perfil e Helpper;
- reconhecer bibliotecas gerais como fontes compartilhadas governadas;
- diferenciar bibliotecas gerais de contextos de cliente e projeto;
- documentar promoção controlada de conhecimento;
- manter revisão humana obrigatória;
- impedir promoção automática;
- não ativar memória persistente, embeddings, banco vetorial ou sincronização externa.

#### Definições do Lote 6

`Biblioteca pessoal` é o espaço documental vinculado exclusivamente a uma pessoa, destinado a preferências, referências, critérios, notas e aprendizados individuais autorizados.

`Bibliotecas gerais` é o termo guarda-chuva para fontes compartilhadas e governadas da Monvi, incluindo conhecimento departamental, institucional, canônico e bibliotecas especializadas aprovadas.

Bibliotecas de cliente e projeto permanecem escopos restritos próprios e não são classificadas automaticamente como bibliotecas gerais.

A biblioteca pessoal pertence à pessoa. O Helpper atua somente como leitor, organizador e proponente de promoção dentro das autorizações documentadas.

#### Fluxo de promoção

`captured → classified → proposed → reviewed → approved → published`

Estados alternativos:

- rejected;
- archived;
- quarantined.

Nenhum conteúdo pessoal será promovido automaticamente para uma biblioteca geral.

## Decisão humana final

- data: 2026-07-29;
- decisor: CEO da Monvi;
- decisão: aprovada;
- encerramento documental: autorizado;
- status final: approved;
- task_state final: done;
- requires_review final: false;
- perfis: permanecem em onboarding;
- Helppers: permanecem em planned.

### Declaração

Aprovo a Task 039 e autorizo o encerramento documental, mantendo os perfis em onboarding, os Helppers em planned e sem criação de contas, acessos, memória técnica ou integrações reais.

## Resultado final

- perfis documentais de Victor e Filipe: aprovados;
- Helppers individuais documentais: aprovados e mantidos em planned;
- bibliotecas pessoais documentais: aprovadas;
- segregação entre bibliotecas pessoais: aprovada;
- protocolo de aprendizado por conversa: aprovado documentalmente;
- protocolo de reporte entre Helppers: aprovado documentalmente;
- contas reais criadas: nenhuma;
- acessos técnicos concedidos: nenhum;
- memória persistente, indexação, embeddings ou banco vetorial: não ativados;
- integrações reais: não ativadas;
- promoção automática de conhecimento: não habilitada.

## Encerramento

A Task 039 foi concluída documentalmente. A futura autenticação via Google Workspace, o Identity Gateway, a criação de contas, a concessão de acessos e a ativação dos Helppers deverão ocorrer em nova task específica.
