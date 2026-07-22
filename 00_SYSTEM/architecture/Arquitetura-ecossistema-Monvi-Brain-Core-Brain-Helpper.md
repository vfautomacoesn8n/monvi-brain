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
updated_at: "2026-07-22"
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

A ordem de precedência deve ser:

1. documentos canônicos aprovados;
2. decisões humanas aprovadas;
3. processos operacionais aprovados;
4. evidências verificadas;
5. registros em review;
6. hipóteses;
7. conteúdo bruto;
8. saídas geradas.

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
