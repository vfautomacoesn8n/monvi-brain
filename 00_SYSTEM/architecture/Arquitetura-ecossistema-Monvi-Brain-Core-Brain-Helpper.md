---
id: architecture-monvi-ecosystem
title: Arquitetura do ecossistema Monvi Brain, Monvi Core Brain e Helpper
type: architecture
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-24"
reviewed_at: null
source_task: task-2026-028
classification: internal
---

# Arquitetura do ecossistema Monvi Brain, Monvi Core Brain e Helpper

## 1. Contexto

O ecossistema da Monvi precisa separar conhecimento, controle, interação e execução.

A arquitetura proposta organiza quatro camadas principais:

1. Monvi Brain;
2. Monvi Core Brain;
3. Helpper;
4. interfaces e agentes especializados.

Esta arquitetura é conceitual e funcional. Ela não comprova implementação.

## 2. Objetivo

Criar uma base arquitetural compatível com:

- consolidação do Monvi Brain v1.0;
- acesso futuro por funcionários;
- isolamento entre clientes;
- agentes especializados;
- execução supervisionada;
- auditoria;
- crescimento sem perda de controle.

## 3. Princípios

- fonte de verdade explícita;
- menor privilégio;
- negação por padrão;
- separação entre conhecimento e execução;
- isolamento entre clientes;
- revisão humana para ações críticas;
- logs obrigatórios;
- secrets fora do Brain;
- fornecedores substituíveis;
- arquitetura portável;
- nenhuma automação antes da validação manual;
- nenhum agente com autoridade humana implícita.

## 4. Visão de alto nível

```text
Usuário
→ Interface autorizada
→ Monvi Core Brain
→ Políticas, identidade e contexto
→ Helpper ou agente especializado
→ Monvi Brain
→ proposta, decisão ou ação
→ aprovação humana quando exigida
→ execução controlada
→ evidência
→ auditoria
```

## 5. Componentes

### 5.1 Monvi Brain

Responsável por armazenar:

- conhecimento canônico;
- processos;
- decisões;
- tarefas;
- registros;
- clientes;
- projetos;
- evidências;
- métricas;
- auditorias;
- histórico.

O Monvi Brain é a fonte documental e operacional da empresa.

Não deve conter:

- senhas;
- tokens;
- chaves;
- credenciais;
- secrets;
- dados pessoais desnecessários;
- permissões efetivas de sistemas externos.

### 5.2 Monvi Core Brain

Responsável por:

- autenticação;
- identidade;
- autorização;
- políticas;
- roteamento;
- seleção de contexto;
- isolamento por cliente;
- auditoria;
- logs;
- aprovação;
- execução supervisionada;
- conexão com sistemas externos;
- aplicação das regras do Monvi Brain.

O Core Brain é a camada de controle. Não deve substituir o Brain como fonte documental.

### 5.3 Helpper

Responsável por:

- apoiar o CEO;
- organizar demandas;
- consultar conhecimento autorizado;
- propor planos;
- criar rascunhos;
- coordenar agentes especializados;
- solicitar aprovação;
- registrar decisões e evidências;
- acompanhar pendências;
- alertar riscos e inconsistências.

O Helpper não pode:

- alterar canônico diretamente;
- acessar secrets;
- aprovar em nome humano;
- executar ação crítica sem autorização;
- compartilhar contexto entre clientes;
- assumir que preparação equivale a implementação;
- prometer resultado sem evidência.

### 5.4 Agentes especializados

Podem existir agentes para:

- comercial;
- projetos;
- conteúdo;
- desenvolvimento;
- automação;
- segurança;
- financeiro;
- jurídico assistivo.

Cada agente recebe:

- objetivo;
- escopo;
- contexto mínimo;
- caminhos permitidos;
- ações permitidas;
- restrições;
- prazo;
- critérios de revisão.

### 5.5 Interfaces

Interfaces futuras podem atender:

- CEO;
- funcionários;
- parceiros;
- clientes;
- administradores;
- agentes de sistema.

A interface não define permissão. A permissão é aplicada pelo Core Brain.

## 6. Fonte de verdade

O Monvi Brain é a fonte institucional do conhecimento aprovado.

A precedência segue dois eixos, aplicados nesta ordem.

### Eixo 1 — autoridade documental

```text
canonical
→ policies
→ architecture
→ processes
→ procedures
→ templates
→ tasks
→ outputs
→ raw
```

### Eixo 2 — maturidade dentro do mesmo nível

```text
approved
→ verified
→ review
→ hypothesis
→ raw/generated
```

Primeiro prevalece o nível de autoridade documental.

Quando os documentos estiverem no mesmo nível, devem ser avaliados maturidade, aprovação, versão, escopo, evidência, cliente, projeto e decisão formalmente registrada.

Uma decisão humana não substitui automaticamente canonical ou policy. A decisão deve ser formalizada no nível documental adequado.

Conflitos devem ser escalados, não resolvidos silenciosamente.

## 7. Identidade

Cada usuário deve possuir:

- identificador único;
- função;
- vínculo;
- status;
- escopo de clientes;
- escopo de projetos;
- nível de acesso;
- validade;
- autenticação;
- responsável pela aprovação do acesso.

Contas compartilhadas devem ser evitadas.

## 8. Autorização

A autorização deve considerar:

- quem é o usuário;
- qual papel exerce;
- qual cliente está ativo;
- qual projeto está ativo;
- qual recurso foi solicitado;
- qual ação foi solicitada;
- qual sensibilidade existe;
- qual aprovação é exigida;
- qual prazo de acesso foi concedido.

## 9. Isolamento por cliente

Todo contexto de cliente deve ser explicitamente selecionado.

Regras:

- `active_client` obrigatório em operações com cliente;
- `active_client: null` apenas para contexto institucional;
- nenhuma busca global entre clientes por padrão;
- nenhum agente recebe dados de cliente não autorizado;
- compartilhamento entre clientes é proibido;
- logs devem registrar o cliente associado;
- exportações devem ser revisadas;
- conteúdo confidencial não entra em exemplos reutilizáveis.

## 10. Fluxo de leitura

```text
solicitação
→ autenticação
→ perfil
→ contexto
→ política de leitura
→ caminhos permitidos
→ consulta
→ resposta
→ log
```

Leituras sensíveis podem exigir justificativa e aprovação.

## 11. Fluxo de alteração

```text
solicitação
→ autenticação
→ autorização
→ criação de proposta
→ revisão
→ aprovação
→ alteração
→ validação
→ evidência
→ log
```

Conteúdo canônico nunca deve ser alterado diretamente por agente.

## 12. Fluxo de execução

```text
solicitação
→ classificação de risco
→ verificação de permissão
→ plano de execução
→ aprovação humana
→ uso controlado de credencial
→ execução
→ validação
→ rollback quando necessário
→ evidência
→ log
```

## 13. Ações críticas

Exigem aprovação humana:

- publicar externamente;
- enviar mensagem em nome da Monvi;
- enviar proposta final;
- assumir preço, prazo ou SLA;
- alterar canônico;
- acessar dado sensível;
- executar automação;
- usar credencial;
- alterar permissão;
- excluir conteúdo;
- movimentar documento jurídico;
- criar ou remover acesso;
- realizar pagamento;
- contratar ferramenta;
- compartilhar informação externa.

## 14. Secrets e credenciais

Secrets devem permanecer em cofre próprio.

O agente recebe apenas:

- permissão de uso;
- referência controlada;
- prazo;
- escopo;
- contexto;
- resultado da execução.

Nunca recebe o valor bruto do secret.

## 15. Funcionários

Cada funcionário deve acessar o ecossistema por:

- identidade própria;
- função definida;
- escopo autorizado;
- clientes atribuídos;
- projetos atribuídos;
- logs individuais;
- aprovação de acesso;
- revisão periódica.

## 16. Entrada, mudança e desligamento

### Entrada

- criar identidade;
- atribuir função;
- conceder acessos mínimos;
- registrar aceite de políticas;
- configurar autenticação;
- registrar responsável.

### Mudança de função

- revisar acessos;
- remover permissões antigas;
- conceder novas;
- registrar decisão;
- atualizar validade.

### Desligamento

- revogar acessos;
- encerrar sessões;
- remover integrações;
- transferir responsabilidade;
- revisar compartilhamentos;
- arquivar evidência;
- registrar conclusão.

## 17. Auditoria

Devem existir logs para:

- autenticação;
- leitura sensível;
- criação;
- edição;
- aprovação;
- execução;
- publicação;
- compartilhamento;
- exclusão;
- alteração de permissão;
- uso de integração;
- erro;
- incidente;
- exceção.

Cada evento deve registrar:

- quem;
- quando;
- o quê;
- cliente;
- projeto;
- ação;
- resultado;
- aprovação;
- evidência;
- risco;
- correlação.

## 18. Supervisão humana

A supervisão deve ser proporcional ao risco.

### Baixo risco

Pode permitir rascunho automático e leitura autorizada.

### Médio risco

Exige revisão antes de alteração ou envio.

### Alto risco

Exige aprovação explícita antes de execução.

### Crítico

Exige responsável qualificado, evidência, plano de reversão e dupla verificação quando aplicável.

## 19. Interfaces futuras

A arquitetura deve permitir:

- portal web;
- chat interno;
- plugin;
- API;
- aplicativo;
- integração com Workspace;
- integração com Slack;
- integração com sistemas de projeto;
- interface do cliente.

Nenhuma dessas interfaces deve contornar o Core Brain.

## 20. Integrações

Toda integração deve possuir:

- proprietário;
- finalidade;
- dados tratados;
- credencial;
- ambiente;
- logs;
- tratamento de erro;
- timeout;
- retry;
- fallback;
- rollback;
- custo;
- limite;
- revisão;
- encerramento.

## 21. Dados e classificação

Classificações mínimas:

- público;
- interno;
- confidencial;
- restrito;
- dado pessoal;
- dado sensível;
- secret;
- evidência;
- canônico;
- operacional;
- temporário.

## 22. Portabilidade

A arquitetura deve evitar dependência desnecessária de fornecedor.

Padrões preferenciais:

- Markdown;
- YAML;
- JSON;
- JSONL;
- APIs;
- webhooks;
- formatos exportáveis;
- identificadores estáveis.

## 23. Continuidade

O ecossistema deve prever:

- backup;
- versionamento;
- restauração;
- redundância;
- exportação;
- recuperação de acesso;
- plano de incidente;
- operação manual de contingência.

## 24. Riscos principais

- acesso excessivo;
- vazamento entre clientes;
- dependência de fornecedor;
- alteração indevida do canônico;
- agente com poder excessivo;
- ausência de logs;
- uso indevido de credenciais;
- automação sem supervisão;
- dados pessoais desnecessários;
- inconsistência entre Brain e sistemas externos;
- decisões sem responsável;
- falta de recuperação.

## 25. Roadmap conceitual

### Fase 1

- consolidar Monvi Brain v1.0;
- concluir arquitetura;
- definir identidade e permissões;
- definir Helpper;
- definir agentes.

### Fase 2

- protótipo de Core Brain;
- autenticação;
- perfis;
- políticas;
- leitura controlada;
- logs.

### Fase 3

- Helpper integrado;
- agentes especializados;
- aprovações;
- execução supervisionada;
- interfaces internas.

### Fase 4

- integrações;
- portal de funcionários;
- acesso de parceiros;
- acesso de clientes;
- observabilidade;
- recuperação testada.

## 26. Relação com Monvi Brain v1.0

O fechamento do Brain v1.0 deve garantir:

- metadados compatíveis com permissão;
- `active_client`;
- tipos e status explícitos;
- separação de clientes;
- logs estruturados;
- caminhos previsíveis;
- IDs estáveis;
- canônico protegido;
- evidências rastreáveis;
- secrets fora do repositório.

## 27. Decisões pendentes

Ainda precisam de decisão futura:

- provedor de identidade;
- modelo de banco;
- interface principal;
- tecnologia do Core Brain;
- mecanismo de busca;
- modelo de autorização;
- cofre de secrets;
- ferramenta de observabilidade;
- estratégia de hospedagem;
- política de retenção técnica;
- custo máximo;
- prioridade de implementação.

## 28. Critérios de aprovação

- componentes separados;
- fonte de verdade definida;
- identidade prevista;
- autorização prevista;
- isolamento por cliente previsto;
- Helpper limitado;
- agentes limitados;
- aprovação humana prevista;
- logs previstos;
- secrets fora do Brain;
- continuidade prevista;
- roadmap definido;
- compatibilidade com Brain v1.0 registrada;
- nenhuma implementação tratada como concluída.

## 29. Arquitetura-alvo e arquitetura inicial

A arquitetura deve distinguir duas realidades.

### 29.1 Arquitetura-alvo

A arquitetura-alvo completa prevê:

```text
Funcionários
→ Helppers individuais
→ Helppers especialistas
→ Helpper Core
→ Monvi Core Brain
→ Monvi Brain
```

Com uma camada transversal:

```text
Helpper Library
→ skills
→ ferramentas
→ repositórios
→ prompts
→ playbooks
→ políticas
→ manifests
→ registros de uso
```

A arquitetura-alvo serve como referência de longo prazo e não deve ser tratada como implementação concluída.

### 29.2 Arquitetura inicial

A implementação inicial recomendada é enxuta:

```text
Funcionário
→ Helpper individual
→ Helpper Core
→ Monvi Core Brain
→ Monvi Brain
```

Com:

- um modelo de Helpper especialista configurável;
- uma biblioteca única com visibilidade por escopo;
- promoção simples de skills;
- promoção simples de conhecimento;
- aprovação humana proporcional ao risco;
- nenhuma camada adicional sem necessidade comprovada.

### 29.3 Critério de evolução

Uma camada só deve ser implementada quando houver:

- demanda recorrente;
- volume suficiente;
- risco específico;
- ganho operacional claro;
- owner definido;
- custo justificável;
- necessidade comprovada.

## 30. Hierarquia dos Helppers

### 30.1 Helpper Core

O Helpper Core funciona como gerente e orquestrador dos Helppers.

Responsabilidades:

- receber demandas;
- classificar;
- escolher especialista;
- distribuir contexto mínimo;
- acompanhar execução;
- consolidar respostas;
- detectar conflitos;
- cobrar evidências;
- propor promoção de conhecimento;
- reportar ao CEO;
- encaminhar conteúdo ao Monvi Core Brain.

O Helpper Core não decide sozinho o que vira conhecimento oficial.

### 30.2 Helpper especialista

O Helpper especialista é um modelo configurável por especialidade.

Exemplos:

- desenvolvimento;
- marketing;
- comercial;
- projetos;
- automação;
- segurança;
- financeiro;
- jurídico assistivo.

Cada especialista deve possuir:

- missão;
- escopo;
- skills;
- ferramentas autorizadas;
- fontes;
- repositórios;
- limites;
- riscos;
- critérios de revisão;
- formato de reporte;
- responsável humano.

### 30.3 Helpper individual

Cada funcionário pode ter um Helpper individual com:

- identidade vinculada;
- função;
- projetos atribuídos;
- clientes atribuídos;
- memória de trabalho;
- skills locais;
- ferramentas permitidas;
- repositórios autorizados;
- histórico;
- canal de reporte.

O Helpper individual nunca pode ultrapassar as permissões do funcionário.

## 31. Helpper Library

A Helpper Library deve ser uma biblioteca única, com escopos de visibilidade.

Estrutura conceitual:

```text
Helpper Library/
├── skills/
├── tools/
├── repositories/
├── prompts/
├── playbooks/
├── policies/
├── registry/
└── archive/
```

Cada item deve possuir:

- visibilidade individual, departamental ou global;
- owner;
- versão;
- risco;
- status;
- allowed_users;
- allowed_roles;
- allowed_helpers;
- allowed_clients;
- entradas;
- saídas;
- restrições;
- validade;
- evidências;
- plano de descontinuação.

A promoção pode ocorrer por mudança de status e visibilidade, sem duplicação física obrigatória.

## 32. Governança de skills

### 32.1 Regra central

Skill não concede permissão.

Uma skill só pode atuar dentro das permissões já concedidas ao usuário, agente, projeto, cliente, ferramenta e repositório.

### 32.2 Ciclo de vida simplificado

```text
draft
→ active-local
→ proposed
→ approved
→ deprecated
```

Estados complementares podem ser registrados como atributos ou eventos:

- testing;
- reviewed;
- rejected;
- blocked;
- archived;
- replaced;
- expired.

### 32.3 Gate de promoção

Toda promoção deve passar por três gates:

1. utilidade;
2. segurança;
3. manutenção.

### 32.4 Fluxo de promoção

```text
Funcionário cria skill
→ Helpper individual registra
→ uso local controlado
→ Helpper especialista revisa
→ Helpper Core avalia reutilização
→ Monvi Core Brain aplica política
→ aprovação humana quando necessária
→ escopo departamental ou global
```

## 33. Governança de ferramentas e repositórios

Ferramentas e repositórios devem ter registros próprios.

Repositórios precisam informar:

- ID;
- proprietário;
- cliente;
- projeto;
- finalidade;
- visibilidade;
- leitura;
- escrita;
- branch;
- ambiente;
- criticidade;
- agentes autorizados;
- responsável;
- aprovação;
- status.

Skills referenciam IDs de ferramentas e repositórios, sem armazenar credenciais.

## 34. Promoção de conhecimento

A captura pode ser automática.

A promoção ao Monvi Brain não deve ser automática por padrão.

Fluxo:

```text
Trabalho do funcionário
→ Helpper individual captura
→ classifica
→ Helpper especialista revisa
→ Helpper Core consolida
→ Monvi Core Brain aplica política
→ aprovação humana quando necessária
→ Monvi Brain recebe conteúdo aprovado
```

Ciclo de vida simplificado:

```text
captured
→ proposed
→ approved
→ published
```

Resultados alternativos:

- rejected;
- archived.

Classificações obrigatórias:

- fato;
- hipótese;
- recomendação;
- decisão;
- evidência;
- aprendizado;
- padrão;
- risco;
- dado de cliente;
- conteúdo temporário.

## 35. Tipos de memória

A arquitetura deve separar:

- memória individual;
- memória de projeto;
- memória de cliente;
- memória departamental;
- memória institucional;
- conhecimento canônico.

Regras:

- memória de cliente não cruza clientes;
- memória individual não vira institucional automaticamente;
- memória de projeto não vira padrão sem revisão;
- conhecimento canônico exige aprovação;
- conteúdo temporário deve possuir retenção.

## 36. Métricas e descontinuação

Podem ser registradas:

- quantidade de usos;
- taxa de sucesso;
- falhas;
- incidentes;
- tempo economizado;
- avaliações;
- usuários;
- versões;
- data da última revisão;
- custo;
- taxa de reutilização.

Essas métricas não promovem automaticamente.

Todo recurso deve possuir:

- owner;
- validade;
- revisão periódica;
- condição de descontinuação;
- substituto;
- histórico;
- plano de remoção.

## 37. Consolidação de decisões de conversa

Antes do fechamento do Monvi Brain v1.0, deve existir uma etapa específica para:

- revisar decisões relevantes tomadas nas conversas;
- separar decisão, hipótese, recomendação e ideia futura;
- identificar o que já está registrado;
- identificar o que permanece apenas no chat;
- criar tasks ou documentos faltantes;
- eliminar contradições;
- registrar pendências;
- produzir um índice de decisões arquiteturais e operacionais.

O chat não é a fonte oficial. O Monvi Brain deve receber somente o que for formalmente consolidado.

## Aprovação humana

- aprovado por: CEO da Monvi;
- data: 2026-07-22;
- decisão: arquitetura conceitual aprovada;
- escopo: 20 pontos da arquitetura ampliada da task 028;
- implementação técnica: não comprovada;
- segurança, conformidade e disponibilidade: não comprovadas;
- evolução: progressiva, conforme necessidade, risco, owner e custo justificável.
