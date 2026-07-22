---
id: task-2026-028
title: Arquitetura do ecossistema Monvi Brain, Monvi Core Brain e Helpper
type: task
status: review
task_state: review
priority: critical
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-028-arquitetura-ecossistema-monvi-brain-core-brain-helpper.md
  - 00_SYSTEM/tasks/done/TASK-2026-028-arquitetura-ecossistema-monvi-brain-core-brain-helpper.md
  - 00_SYSTEM/architecture/Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md
  - 00_SYSTEM/architecture/Matriz-fronteiras-responsabilidades-ecossistema-Monvi.md
  - 00_SYSTEM/architecture/Requisitos-nao-funcionais-ecossistema-Monvi.md
  - 00_SYSTEM/logs/changes.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - 00_SYSTEM/registries/source-manifest.md
  - 00_SYSTEM/logs/ingestion.jsonl
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/
  - 04_OUTPUTS/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 99_ARCHIVE/
---

# Task 2026-028 — Arquitetura do ecossistema Monvi Brain, Monvi Core Brain e Helpper

## Contexto

O Monvi Brain já possui uma base documental e operacional estruturada, mas ainda não existe um documento arquitetural único que registre como ele se relacionará com:

- Monvi Core Brain;
- Helpper;
- funcionários;
- agentes especializados;
- clientes;
- permissões;
- interfaces;
- logs;
- execução supervisionada.

Sem essa definição, há risco de concluir o Monvi Brain v1.0 com uma estrutura incompatível com as próximas etapas.

## Objetivo

Definir a arquitetura conceitual e funcional do ecossistema da Monvi, sem implementar tecnologia nesta task.

A arquitetura deve registrar:

- componentes;
- responsabilidades;
- fronteiras;
- fluxos;
- usuários;
- agentes;
- permissões;
- isolamento;
- supervisão humana;
- auditoria;
- requisitos de segurança;
- dependências para implementação futura.

## Princípio arquitetural

O ecossistema deve separar claramente:

### Monvi Brain

Fonte oficial de conhecimento, operação, decisões, tarefas, clientes, evidências e histórico da Monvi.

### Monvi Core Brain

Camada central de identidade, autorização, políticas, roteamento, isolamento, auditoria e execução supervisionada.

### Helpper

Agente estratégico e operacional principal da Monvi, subordinado às políticas do Core Brain e à supervisão humana.

### Espaços individuais

Interfaces ou agentes com acesso restrito conforme função, cliente, projeto, confidencialidade, vínculo e tipo de ação.

### Agentes especializados

Agentes com escopo limitado, contexto mínimo necessário e execução subordinada a permissões e revisão.

## Questões obrigatórias

A arquitetura deve responder:

1. qual é a função de cada componente;
2. qual componente é fonte de verdade;
3. quem controla identidade e permissão;
4. como funcionários acessam o conhecimento;
5. como clientes ficam isolados;
6. como agentes recebem contexto;
7. como o Helpper coordena agentes;
8. quais ações exigem aprovação;
9. como ações são registradas;
10. como credenciais e segredos ficam protegidos;
11. como ocorre entrada, mudança de função e desligamento;
12. como a arquitetura evita vazamento entre clientes;
13. como a arquitetura evita alteração indevida do conhecimento canônico;
14. como a interface futura poderá acessar o Brain;
15. quais dependências precisam existir antes da implementação.

## Escopo

Inclui:

- arquitetura conceitual;
- arquitetura funcional;
- componentes e fronteiras;
- fluxos de leitura e execução;
- modelo de identidade;
- modelo de autorização;
- isolamento por cliente;
- supervisão humana;
- auditoria e rastreabilidade;
- requisitos não funcionais;
- matriz de responsabilidades;
- riscos;
- roadmap de implementação futura;
- compatibilidade com o fechamento do Monvi Brain v1.0.

## Fora do escopo

- implementar portal;
- criar login;
- configurar banco de dados;
- construir API;
- implementar RBAC;
- criar aplicativo;
- integrar WhatsApp;
- integrar sistemas;
- implantar agentes;
- conectar Helpper a ferramentas;
- mover secrets;
- contratar infraestrutura;
- definir fornecedor definitivo;
- declarar segurança implementada;
- declarar conformidade;
- alterar documentos aprovados.

## Componentes mínimos

A arquitetura deve contemplar:

- Monvi Brain;
- Monvi Core Brain;
- Helpper;
- agentes especializados;
- interface do CEO;
- interface de funcionários;
- interface de parceiros;
- interface de clientes, quando aplicável;
- camada de identidade;
- camada de autorização;
- camada de políticas;
- camada de auditoria;
- camada de integração;
- camada de execução;
- repositório de secrets;
- registros de decisão;
- logs de leitura, alteração e execução.

## Perfis mínimos

- CEO / administrador;
- comercial;
- gestão de projetos;
- técnico / desenvolvimento;
- automação e IA;
- marketing;
- financeiro / administrativo;
- jurídico ou consultor;
- parceiro / freelancer;
- cliente;
- agente de sistema.

## Permissões mínimas a modelar

Para cada perfil e recurso:

- ler;
- criar;
- editar;
- propor;
- aprovar;
- executar;
- publicar;
- compartilhar;
- excluir;
- administrar acesso.

## Regras de segurança

- acesso mínimo necessário;
- negação por padrão;
- separação entre clientes;
- logs obrigatórios;
- revisão humana para ações críticas;
- nenhum secret em Markdown;
- nenhuma credencial exposta ao agente;
- revogação de acesso no desligamento;
- acesso temporário com prazo;
- nenhum agente com acesso irrestrito por padrão;
- alterações canônicas apenas por fluxo aprovado;
- exclusões críticas com aprovação;
- compartilhamento externo controlado;
- dados sensíveis minimizados;
- toda exceção com responsável, justificativa e prazo.

## Regras do Helpper

O Helpper deve:

- apoiar o CEO;
- organizar demandas;
- consultar o Brain;
- propor planos;
- coordenar agentes especializados;
- pedir aprovação quando exigida;
- registrar decisões e evidências;
- respeitar contexto de cliente;
- diferenciar fatos, hipóteses, recomendações e decisões;
- não prometer resultados sem evidência;
- não executar ação crítica sem autorização;
- não alterar conteúdo canônico diretamente;
- não acessar secrets;
- não compartilhar dados entre clientes;
- não assumir autoridade humana.

## Fluxo mínimo esperado

```text
usuário
→ autenticação
→ identificação de perfil
→ solicitação
→ verificação de permissão
→ seleção de contexto
→ consulta ao Monvi Brain
→ processamento pelo Helpper ou agente especializado
→ aprovação humana, quando necessária
→ execução controlada
→ registro de evidência
→ log de auditoria
```

## Entregáveis

Criar em `review`:

- `00_SYSTEM/architecture/Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md`;
- `00_SYSTEM/architecture/Matriz-fronteiras-responsabilidades-ecossistema-Monvi.md`;
- `00_SYSTEM/architecture/Requisitos-nao-funcionais-ecossistema-Monvi.md`.

## Estrutura mínima do documento principal

- contexto;
- objetivos;
- princípios;
- componentes;
- fronteiras;
- fluxos;
- usuários;
- agentes;
- permissões;
- dados;
- isolamento;
- auditoria;
- segurança;
- supervisão;
- interfaces;
- integrações;
- dependências;
- riscos;
- roadmap;
- relação com Monvi Brain v1.0;
- decisões pendentes;
- critérios de aprovação.

## Requisitos não funcionais mínimos

- segurança;
- privacidade;
- disponibilidade;
- rastreabilidade;
- auditabilidade;
- recuperação;
- escalabilidade;
- portabilidade;
- interoperabilidade;
- manutenibilidade;
- custo controlado;
- experiência de uso;
- acessibilidade;
- supervisão humana;
- isolamento;
- observabilidade.

## Relação com o Monvi Brain v1.0

Esta task deve orientar o fechamento da versão 1.0.

Ela não bloqueia a consolidação documental, mas deve impedir decisões incompatíveis com:

- acesso por função;
- separação por cliente;
- leitura parcial;
- uso por agentes;
- logs;
- aprovações;
- interfaces futuras;
- execução supervisionada.

## Próximas tasks esperadas

Após aprovação desta arquitetura:

- task 029 — identidade, papéis, permissões e acesso dos funcionários;
- task 030 — especificação funcional e de segurança do Helpper;
- task 031 — arquitetura de agentes especializados e execução supervisionada;
- task 032 — plano de consolidação do Monvi Brain v1.0.

## Critérios de aceitação

- componentes definidos;
- responsabilidades separadas;
- fronteiras explícitas;
- fluxo de acesso definido;
- fluxo de execução definido;
- perfis mínimos definidos;
- permissões modeladas;
- isolamento por cliente previsto;
- supervisão humana prevista;
- logs e auditoria previstos;
- secrets fora do Brain;
- requisitos não funcionais definidos;
- riscos documentados;
- roadmap futuro descrito;
- compatibilidade com Monvi Brain v1.0 registrada;
- nenhum fornecedor tratado como obrigatório;
- nenhuma implementação tratada como concluída;
- entregáveis em `review`;
- task em `review`;
- `changes.jsonl` válido;
- nenhum caminho protegido alterado.

## Execução documental

- data: 2026-07-22;
- agente: helpper;
- arquitetura principal criada: sim;
- matriz de fronteiras criada: sim;
- requisitos não funcionais criados: sim;
- status dos entregáveis: review;
- implementação técnica: não iniciada;
- fornecedores definidos: não;
- segurança implementada: não comprovada;
- permissões implementadas: não;
- Helpper implementado como sistema: não;
- Core Brain implementado: não;
- próxima etapa: revisão humana dos documentos arquiteturais.
