---
id: task-2026-038
title: Modelo de identidade, perfis de colaboradores e Helppers individuais
type: task
status: review
task_state: active
owner: ceo-monvi
agent: helpper
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
created_at: "2026-07-28"
updated_at: "2026-07-28"
reviewed_at: null
version: "0.2.0"
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-038-identidade-perfis-helppers-individuais.md
  - 00_SYSTEM/tasks/done/TASK-2026-038-identidade-perfis-helppers-individuais.md
  - 00_SYSTEM/audits/Execucao-task-2026-038-identidade-perfis-helppers-individuais.md
  - 00_SYSTEM/registries/Registro-identidades-e-perfis-v1.md
  - 00_SYSTEM/templates/Template-perfil-colaborador.md
  - 00_SYSTEM/templates/Template-helpper-individual.md
  - 00_SYSTEM/policies/Politica-identidade-acesso-e-helpper-individual-v1.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
  - 03_OPERATIONS/pessoas/README.md
  - 03_OPERATIONS/pessoas/onboarding/README.md
  - 03_OPERATIONS/pessoas/ativos/README.md
  - 03_OPERATIONS/pessoas/afastados/README.md
  - 03_OPERATIONS/pessoas/desligados/README.md
read_only_paths:
  - 00_SYSTEM/canonical
  - 00_SYSTEM/schemas
  - 00_SYSTEM/tasks/done
  - 00_SYSTEM/logs/decisions.jsonl
  - 01_RAW
  - 02_WIKI
  - 05_SHARED
forbidden_paths:
  - .git
  - 01_RAW
  - 05_SHARED
tags:
  - identidade
  - colaboradores
  - helpper
  - acesso
  - memoria
  - governanca
---

# Task 038 — Modelo de identidade, perfis de colaboradores e Helppers individuais

## Contexto

O Monvi Brain v1 foi publicado e sua governança inicial foi formalizada.

A arquitetura futura prevê o Monvi Core Brain como camada responsável por autenticação, autorização, sessões, políticas, isolamento, auditoria, aprovações, integrações e execução.

Antes de implementar canais externos, agentes executores ou acesso de colaboradores, a Monvi precisa definir como pessoas, funções, contas, permissões e Helppers individuais serão representados.

## Problema

O Monvi Brain atualmente contém conhecimento institucional, documentos, tarefas, decisões e registros, mas não autentica automaticamente quem está interagindo com o sistema.

Também não existe ainda um modelo operacional aprovado para:

- identificar Victor, Filipe e futuros colaboradores;
- vincular uma pessoa a uma conta autenticada;
- associar funções e responsabilidades;
- estabelecer limites de acesso;
- criar e supervisionar um Helpper individual;
- separar memórias individuais, de projeto, cliente e institucionais;
- tratar onboarding, mudança de função e desligamento.

Sem esse modelo, a criação direta de pastas pessoais, agentes individuais ou acessos de escrita produziria risco de identidade incorreta, excesso de permissão, vazamento entre contextos e perda de rastreabilidade.

## Objetivo

Definir o modelo institucional e operacional de identidade, perfis de colaboradores e Helppers individuais da Monvi.

## Princípios

1. identidade não deve ser inferida apenas pelo conteúdo da conversa;
2. autenticação deve preceder autorização;
3. função não é equivalente a identidade;
4. um Helpper individual nunca pode exceder as permissões do usuário vinculado;
5. skills, ferramentas e memória não concedem permissões por si mesmas;
6. toda ação relevante deve possuir autoria e trilha de auditoria;
7. dados de clientes devem permanecer isolados;
8. segredos e credenciais não devem ser armazenados no Monvi Brain;
9. acessos devem seguir o princípio do menor privilégio;
10. ações sensíveis devem exigir supervisão ou aprovação humana.

## Escopo

### Identidade

Definir:

- pessoa;
- identidade institucional;
- conta autenticada;
- função organizacional;
- perfil de acesso;
- sessão;
- vínculo com o Helpper individual;
- estado da identidade.

### Perfis organizacionais

Definir inicialmente:

- fundador e CEO;
- colaborador interno;
- prestador ou terceiro;
- administrador técnico;
- operador;
- revisor e aprovador;
- agente ou serviço técnico.

### Helpper individual

Definir:

- finalidade;
- vínculo obrigatório com uma identidade;
- limites de autoridade;
- escopo de visibilidade;
- memória permitida;
- ferramentas permitidas;
- ações que exigem aprovação;
- comportamento no desligamento do usuário;
- auditoria e responsabilização.

### Memória

Considerar os seguintes escopos:

- sessão;
- individual;
- projeto;
- cliente;
- departamental;
- institucional;
- canonical.

### Ciclo de vida

Definir processos para:

- cadastro;
- validação de identidade;
- onboarding;
- atribuição de função;
- concessão de acesso;
- mudança de função;
- afastamento;
- revogação;
- desligamento;
- preservação de histórico;
- transferência de responsabilidades.

## Fora do escopo

Esta task não deve:

- implementar autenticação real;
- armazenar senhas, tokens, chaves, códigos de recuperação ou segredos;
- conceder acesso ao GitHub ou a qualquer outro sistema;
- configurar provedores de identidade;
- criar usuários em produção;
- conectar agentes com permissão de escrita;
- ativar CI/CD;
- implementar o Monvi Core Brain;
- modificar conteúdo canonical;
- modificar arquivos RAW;
- criar perfis pessoais reais de Victor, Filipe ou futuros colaboradores;
- criar pastas individuais de pessoas reais;
- registrar documentos pessoais sensíveis;
- atribuir funções, permissões ou acessos reais;
- ativar Helppers individuais;
- usar a estrutura documental como substituição de autenticação ou autorização.

A estrutura `03_OPERATIONS/pessoas/` criada nesta task terá finalidade exclusivamente documental e estrutural.

A existência de uma pasta ou template não representa identidade validada, acesso concedido, vínculo ativo ou autorização operacional.

## Entregáveis

1. política de identidade, acesso e Helpper individual;
2. registro inicial de identidades e perfis organizacionais;
3. template de perfil de colaborador;
4. template de Helpper individual;
5. estrutura documental `03_OPERATIONS/pessoas/`;
6. README geral da estrutura de pessoas;
7. READMEs de onboarding, ativos, afastados e desligados;
8. relatório de execução;
9. atualização do registro de mudanças;
10. avaliação do impacto sobre o `risk-2026-007`.

O registro inicial de identidades e perfis deverá definir modelos, categorias e estados permitidos, sem cadastrar pessoas reais nesta etapa.

## Critérios de aceitação

A task poderá ser aprovada quando:

- os conceitos de pessoa, identidade, conta, função, perfil, sessão e Helpper estiverem separados;
- os estados possíveis de uma identidade estiverem definidos;
- os perfis organizacionais iniciais estiverem definidos;
- os escopos de memória estiverem definidos;
- o princípio de menor privilégio estiver explícito;
- o Helpper individual estiver limitado às permissões do usuário vinculado;
- skills, ferramentas e memória não forem tratadas como fontes de permissão;
- onboarding, mudança de função, afastamento, revogação e desligamento estiverem documentados;
- ações sensíveis e aprovações humanas estiverem definidas;
- autoria humana, autoria do agente e aprovação estiverem distinguíveis;
- isolamento entre clientes estiver explícito;
- a estrutura `03_OPERATIONS/pessoas/` estiver criada com os cinco READMEs autorizados;
- o README geral explicar finalidade, limites, estados e regras de uso;
- os diretórios onboarding, ativos, afastados e desligados possuírem finalidade definida;
- nenhum perfil pessoal real tiver sido criado;
- nenhuma credencial, segredo ou documento pessoal sensível tiver sido registrado;
- nenhuma permissão técnica tiver sido concedida;
- nenhum Helpper individual tiver sido ativado;
- os gatilhos do `risk-2026-007` estiverem considerados;
- não houver alteração em RAW ou canonical;
- todos os entregáveis forem submetidos à revisão do CEO.

## Decisões que exigem aprovação do CEO

- perfis organizacionais iniciais;
- autoridade de Victor e Filipe;
- regras de delegação;
- escopos de memória;
- ações permitidas aos Helppers individuais;
- critérios de acesso administrativo;
- política de terceiros;
- gatilhos de bloqueio e revogação;
- criação de perfis reais;
- ativação de qualquer Helpper individual;
- concessão de acesso de escrita;
- integração com provedores de identidade;
- conexão de agentes, automações ou integrações;
- aceite de riscos residuais.

## Riscos

### Identidade incorreta

Uma pessoa ou agente pode ser associado ao perfil errado.

### Excesso de permissão

Um colaborador ou Helpper pode receber acesso além da necessidade operacional.

### Vazamento entre clientes

Memórias ou documentos podem ser compartilhados entre contextos incompatíveis.

### Falha de revogação

Acessos podem permanecer ativos após mudança de função, afastamento ou desligamento.

### Confusão entre usuário e agente

Uma ação executada por um Helpper pode ser atribuída incorretamente ao colaborador ou vice-versa.

### Automação sem supervisão

Um agente pode executar ação relevante sem aprovação humana apropriada.

### Cadastro prematuro

Uma pasta ou registro pode ser criado antes da validação da identidade, função, vínculo ou necessidade operacional.

### Estrutura interpretada como permissão

A existência de um diretório, template ou perfil documental pode ser interpretada incorretamente como concessão de acesso técnico.

### Exposição de dados pessoais

Informações pessoais podem ser registradas sem necessidade, base operacional ou proteção adequada.

### Fragmentação de identidade

A mesma pessoa pode receber múltiplos identificadores, contas ou Helppers sem vínculo institucional único.

## Dependências

- arquitetura aprovada do Monvi Brain e Monvi Core Brain;
- especificação funcional e de segurança do Helpper;
- governança de execução supervisionada de agentes;
- task 037 concluída;
- decisão futura sobre tecnologia de autenticação;
- aprovação da política de identidade e acesso;
- aprovação dos templates antes de qualquer perfil real;
- validação individual antes de cadastrar uma pessoa;
- definição futura de armazenamento, autenticação e autorização no Monvi Core Brain;
- revisão do `risk-2026-007` antes de conceder acesso de escrita a colaboradores, agentes, automações ou integrações.

## Resultado esperado

Modelo institucional aprovado para representar pessoas, identidades, contas, funções, perfis, permissões, sessões, memórias e Helppers individuais.

A estrutura `03_OPERATIONS/pessoas/` deverá estar pronta para receber perfis somente após:

1. aprovação da política;
2. aprovação dos templates;
3. validação individual da pessoa;
4. definição de função e responsabilidades;
5. aprovação do nível de acesso;
6. decisão explícita do CEO.

A task produzirá uma base documental para orientar a futura implementação do Monvi Core Brain, sem substituir autenticação, autorização, banco de dados, auditoria ou controles técnicos.

## Decisão de estrutura operacional

A estrutura documental de pessoas será criada em `03_OPERATIONS/pessoas/`.

O termo `pessoas` foi escolhido por abranger:

- fundadores;
- colaboradores internos;
- prestadores;
- terceiros;
- pessoas afastadas;
- pessoas desligadas.

### Estrutura autorizada nesta task

- `03_OPERATIONS/pessoas/README.md`;
- `03_OPERATIONS/pessoas/onboarding/README.md`;
- `03_OPERATIONS/pessoas/ativos/README.md`;
- `03_OPERATIONS/pessoas/afastados/README.md`;
- `03_OPERATIONS/pessoas/desligados/README.md`.

### Finalidade dos diretórios

#### `onboarding/`

Preparar e revisar cadastros antes da ativação de qualquer vínculo ou acesso.

#### `ativos/`

Representar pessoas com vínculo institucional validado e estado ativo.

#### `afastados/`

Representar pessoas temporariamente sem atuação ou com acessos suspensos.

#### `desligados/`

Preservar histórico documental de pessoas desligadas, sem manter acessos ativos.

### Regras obrigatórias

1. cada pessoa deverá possuir identificador institucional único;
2. nome de pasta não será prova de identidade;
3. perfil documental não concederá acesso técnico;
4. conta autenticada não será armazenada como credencial;
5. Helpper individual dependerá de vínculo explícito com identidade validada;
6. o Helpper nunca poderá exceder as permissões da pessoa vinculada;
7. dados de clientes deverão permanecer separados por escopo;
8. desligamento deverá revogar acessos antes da movimentação documental;
9. histórico deverá ser preservado sem preservar credenciais;
10. ações relevantes deverão possuir autoria, data, origem e aprovação quando aplicável.

### Limites desta autorização

Esta autorização não permite:

- criar perfis reais de Victor ou Filipe;
- criar perfis de colaboradores, prestadores ou terceiros;
- armazenar documentos pessoais sensíveis;
- armazenar credenciais ou segredos;
- conceder acesso técnico;
- implementar autenticação;
- criar contas de produção;
- ativar Helppers individuais;
- conectar agentes ou automações com permissão de escrita;
- ampliar escrita para outros caminhos de `03_OPERATIONS`.

Os perfis reais dependerão de template aprovado, validação individual e decisão humana específica.
