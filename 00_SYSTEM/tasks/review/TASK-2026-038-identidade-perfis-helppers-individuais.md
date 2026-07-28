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
version: "0.1.0"
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
read_only_paths:
  - 00_SYSTEM/canonical
  - 00_SYSTEM/schemas
  - 00_SYSTEM/tasks/done
  - 00_SYSTEM/logs/decisions.jsonl
  - 01_RAW
  - 02_WIKI
  - 03_OPERATIONS
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
- armazenar senhas, tokens ou segredos;
- conceder acesso ao GitHub;
- configurar provedores de identidade;
- criar usuários em produção;
- conectar agentes com permissão de escrita;
- ativar CI/CD;
- implementar o Monvi Core Brain;
- modificar conteúdo canonical;
- modificar arquivos RAW.

## Entregáveis

1. política de identidade, acesso e Helpper individual;
2. registro inicial de identidades e perfis;
3. template de perfil de colaborador;
4. template de Helpper individual;
5. relatório de execução;
6. atualização do registro de mudanças;
7. avaliação do impacto sobre o `risk-2026-007`.

## Critérios de aceitação

A task poderá ser aprovada quando:

- os conceitos de identidade, conta, função, perfil e Helpper estiverem separados;
- os escopos de memória estiverem definidos;
- o princípio de menor privilégio estiver explícito;
- o Helpper individual estiver limitado às permissões do usuário;
- onboarding, mudança de função e desligamento estiverem documentados;
- ações sensíveis e aprovações humanas estiverem definidas;
- os gatilhos do `risk-2026-007` estiverem considerados;
- nenhuma credencial ou segredo tiver sido registrado;
- não houver alteração em RAW ou canonical;
- os entregáveis forem submetidos à revisão do CEO.

## Decisões que exigem aprovação do CEO

- perfis organizacionais iniciais;
- autoridade de Victor e Filipe;
- regras de delegação;
- escopos de memória;
- ações permitidas aos Helppers individuais;
- critérios de acesso administrativo;
- política de terceiros;
- gatilhos de bloqueio e revogação;
- aceite de riscos residuais.

## Riscos

### Identidade incorreta

Uma pessoa ou agente pode ser associado ao perfil errado.

### Excesso de permissão

Um colaborador ou Helpper pode receber acesso além da necessidade operacional.

### Vazamento entre clientes

Memórias ou documentos podem ser compartilhados entre contextos incompatíveis.

### Falha de revogação

Acessos podem permanecer ativos após mudança de função ou desligamento.

### Confusão entre usuário e agente

Uma ação executada por um Helpper pode ser atribuída incorretamente ao colaborador ou vice-versa.

### Automação sem supervisão

Um agente pode executar ação relevante sem aprovação humana apropriada.

## Dependências

- arquitetura aprovada do Monvi Brain e Monvi Core Brain;
- especificação funcional e de segurança do Helpper;
- governança de execução supervisionada de agentes;
- task 037 concluída;
- decisão futura sobre tecnologia de autenticação.

## Resultado esperado

Modelo institucional aprovado para representar pessoas, contas, funções, perfis, permissões, memórias e Helppers individuais, pronto para orientar a implementação futura do Monvi Core Brain.
