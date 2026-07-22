---
id: task-2026-032
title: Consolidação do Monvi Brain v1.0
type: task
status: review
task_state: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
classification: internal
priority: critical
depends_on:
  - task-2026-028
  - task-2026-029
  - task-2026-030
  - task-2026-031
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-032-consolidacao-monvi-brain-v1.md
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/indexes/
  - 00_SYSTEM/registries/
  - 00_SYSTEM/logs/changes.jsonl
  - 02_WIKI/
  - 03_OPERATIONS/
read_only_paths:
  - 00_SYSTEM/canonical/
  - 01_RAW/
  - 04_OUTPUTS/
  - 05_SHARED/
forbidden_paths:
  - 00_SYSTEM/secrets/
  - .git/
---

# Task 2026-032 — Consolidação do Monvi Brain v1.0

## Contexto

As tasks 028 a 031 definiram:

- arquitetura do ecossistema Monvi Brain, Monvi Core Brain e Helpper;
- identidade, papéis, permissões e ciclo de vida de acesso;
- especificação funcional e de segurança do Helpper;
- governança de agentes e execução supervisionada.

A task 032 deve consolidar o Monvi Brain como sistema de conhecimento navegável, coerente, auditável e preparado para validação posterior.

## Objetivo

Consolidar o Monvi Brain v1.0 sem executar ainda a bateria final de testes.

A task deve:

- auditar a estrutura;
- corrigir inconsistências;
- melhorar navegação;
- padronizar metadados;
- conectar conhecimento e operação;
- criar índices e mapas;
- consolidar decisões;
- registrar limitações;
- preparar critérios de teste;
- preparar o corte v1.0.

## Princípio central

O Monvi Brain v1.0 só pode ser considerado pronto quando o conhecimento estiver:

- organizado;
- conectado;
- rastreável;
- governado;
- navegável;
- separado por contexto;
- com limitações explícitas;
- sem declarar como implementado o que ainda é apenas documental.

## Escopo

### 1. Auditoria global

Auditar:

- documentos ativos;
- documentos históricos;
- tipos;
- status;
- owners;
- reviewers;
- source tasks;
- links;
- aliases;
- tags;
- duplicidades;
- órfãos;
- documentos fora de pasta;
- documentos sem contexto;
- pendências;
- anomalias Git.

### 2. Arquitetura de navegação no Obsidian

Definir e consolidar:

- mapa executivo;
- mapa institucional;
- mapa técnico;
- mapa operacional;
- índice de arquitetura;
- índice de políticas;
- índice de templates;
- índice de tasks;
- índice de clientes;
- índice de projetos;
- links entre tasks e entregáveis;
- backlinks relevantes;
- aliases;
- páginas-pai;
- redução de notas órfãs.

### 3. Metadados e frontmatter

Padronizar:

```yaml
id:
title:
type:
status:
task_state:
owner:
reviewer:
active_client:
active_project:
requires_review:
classification:
source_task:
created_at:
updated_at:
reviewed_at:
version:
tags:
related:
```

Definir:

- campos obrigatórios por tipo;
- campos opcionais;
- valores permitidos;
- uso de null;
- convenção de datas;
- convenção de IDs;
- versionamento;
- relacionamento;
- status válidos.

### 4. Taxonomia documental

Consolidar os tipos oficiais:

- architecture;
- policy;
- process;
- procedure;
- template;
- task;
- output;
- decision;
- record;
- client;
- project;
- service;
- skill;
- tool;
- repository;
- agent;
- evidence.

Tipos redundantes ou informais devem ser evitados.

### 5. Fonte de verdade e precedência

Definir ordem de autoridade:

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

Definir:

- resolução de conflitos;
- owner da decisão;
- registro do conflito;
- tratamento de versões;
- obsolescência;
- histórico.

### 6. Relação entre conhecimento e operação

Mapear:

- política que governa processo;
- processo que usa template;
- arquitetura que fundamenta operação;
- task que criou documento;
- evidência que sustenta aprovação;
- documento principal;
- documento histórico;
- documento substituído.

### 7. Consolidação das decisões dos chats

Identificar e formalizar:

- decisões documentadas;
- decisões apenas implícitas;
- hipóteses;
- recomendações;
- decisões descartadas;
- pendências;
- limitações.

Chat não deve ser tratado como fonte oficial.

### 8. Registro de decisões

Definir modelo com:

- decision_id;
- contexto;
- alternativas;
- decisão;
- responsável;
- data;
- impacto;
- documentos afetados;
- condição de revisão;
- status;
- evidências.

### 9. Duplicidades e documentos órfãos

Identificar e tratar:

- duplicidade de regra;
- sobreposição;
- nota sem links de entrada;
- nota sem links de saída;
- política sem processo;
- template sem uso;
- documento sem owner;
- documento sem source task;
- arquivo em pasta inadequada.

### 10. Tasks e pendências

Consolidar:

- done;
- review;
- paused;
- blocked;
- dependências;
- owner;
- próximo passo;
- condição de retomada;
- pendência externa.

A task 021 permanece pausada até existir evidência e acesso suficiente.

### 11. Anomalias Git

Documentar:

- arquivos afetados;
- diff vazio com status modificado;
- provável relação com CRLF/LF;
- impacto;
- regra de não normalização automática;
- estratégia futura;
- critérios para correção controlada.

### 12. Convenções de nomes e links

Definir:

- nomes de arquivos;
- acentos;
- hífens;
- maiúsculas;
- IDs;
- aliases;
- renomeação;
- movimentação;
- links quebrados;
- nomes de clientes;
- nomes de projetos;
- siglas;
- singular e plural.

### 13. Clientes e projetos

Consolidar estrutura padrão para:

- página inicial;
- objetivo;
- escopo;
- serviços;
- responsáveis;
- prazos;
- aprovações;
- pendências;
- riscos;
- evidências;
- entregáveis;
- encerramento;
- retenção;
- arquivamento.

### 14. Isolamento documental

Validar:

- clientes não se misturam;
- exemplos não expõem dados reais indevidos;
- templates não carregam dados de outro cliente;
- consultas respeitam escopo;
- memória individual não vira institucional automaticamente;
- conteúdo sensível não aparece em índice inadequado.

### 15. Knowledge model

Confrontar o modelo existente com o vault real e validar:

- fatos;
- hipóteses;
- recomendações;
- decisões;
- evidências;
- aprendizados;
- padrões;
- riscos;
- memória;
- conhecimento canônico;
- conteúdo temporário;
- conhecimento de cliente;
- conhecimento institucional.

### 16. Busca e recuperação

Padronizar:

- títulos;
- aliases;
- palavras-chave;
- tags;
- resumo inicial;
- perguntas que o documento responde;
- relações;
- cliente;
- projeto;
- owner;
- status;
- área.

### 17. Plugins e consultas

Definir abordagem:

- Markdown e YAML como base;
- Dataview ou Bases como camada opcional;
- funcionamento sem plugin;
- consultas para tasks;
- consultas para review;
- consultas para pendências;
- consultas para clientes;
- consultas para projetos;
- consultas para decisões;
- consultas para riscos;
- consultas para documentos sem owner;
- consultas para notas órfãs.

### 18. Dashboards

Criar ou consolidar:

- dashboard executivo;
- dashboard operacional;
- visão de tasks;
- visão de aprovações;
- visão de riscos;
- visão de clientes;
- visão de projetos;
- visão de documentos recentes;
- visão de pendências.

### 19. Governança de templates

Definir:

- templates oficiais;
- owner;
- versão;
- quando usar;
- campos obrigatórios;
- processo relacionado;
- política relacionada;
- exemplo preenchido;
- descontinuação.

### 20. Skills, ferramentas e repositórios

Consolidar modelos de registro para:

- skills;
- ferramentas;
- integrações;
- APIs;
- repositórios;
- ambientes;
- owners;
- risco;
- versão;
- status;
- permissões;
- custos;
- manutenção;
- depreciação.

### 21. Evidências

Definir:

- o que é evidência;
- onde armazenar;
- como referenciar;
- quem valida;
- retenção;
- classificação;
- integridade;
- relação com tasks;
- relação com decisões;
- relação com incidentes;
- proibição de secrets.

### 22. Arquivamento

Definir critérios para:

- documentos obsoletos;
- tasks encerradas;
- clientes encerrados;
- projetos encerrados;
- decisões substituídas;
- templates descontinuados;
- agentes aposentados;
- retenção;
- restauração.

### 23. Versionamento e revisão periódica

Definir:

- major;
- minor;
- patch;
- mudança editorial;
- mudança de regra;
- aprovação;
- vigência;
- revisão semestral;
- revisão anual;
- revisão após incidente;
- revisão após mudança legal;
- revisão após mudança organizacional.

### 24. Segurança documental

Consolidar:

- classificação;
- conteúdo permitido;
- conteúdo proibido;
- secrets;
- credenciais;
- tokens;
- dados pessoais;
- dados de clientes;
- exportação;
- compartilhamento;
- retenção;
- descarte;
- incidente documental.

### 25. Escrita por agentes

Definir procedimento para:

- reservar escrita;
- declarar allowed paths;
- respeitar read-only;
- respeitar forbidden;
- evitar conflito;
- validar escopo;
- revisar;
- registrar;
- fazer rollback;
- lidar com conflito Git;
- proteger RAW;
- proteger canonical.

### 26. Onboarding humano

Criar guia para:

- navegar;
- criar nota;
- criar task;
- usar template;
- pedir revisão;
- aprovar;
- registrar decisão;
- trabalhar com cliente;
- usar Git;
- evitar riscos.

### 27. Onboarding de agentes

Definir requisitos para:

- manifesto;
- owner;
- papel;
- escopo;
- cliente;
- projeto;
- ferramentas;
- skills;
- ambiente;
- logs;
- aprovação;
- suspensão;
- retirada.

### 28. Preparação dos testes finais

Preparar, sem executar:

- critérios de teste;
- cenários;
- checklist;
- matriz de validação;
- critérios de aprovação;
- critérios de reprovação;
- evidências esperadas;
- classificação de falhas;
- plano de correção;
- decisão de prontidão.

### 29. Critérios de corte v1.0

O corte v1.0 exige:

- estrutura validada;
- índices criados;
- navegação principal funcionando;
- links principais conectados;
- metadados padronizados;
- tipos consolidados;
- tasks abertas mapeadas;
- anomalias documentadas;
- notas críticas conectadas;
- dashboards mínimos;
- decisões consolidadas;
- fonte de verdade definida;
- revisão periódica definida;
- segurança documental consolidada;
- limitações registradas;
- nenhuma implementação inexistente declarada como pronta.

## Fases de execução

```text
fase 1 — auditoria
fase 2 — correção estrutural
fase 3 — navegação e dashboards
fase 4 — consolidação e preparação de testes
fase 5 — validação documental do corte v1.0
```

## Entregáveis esperados

1. `00_SYSTEM/architecture/Arquitetura-navegacao-Obsidian-Monvi-Brain-v1.md`
2. `00_SYSTEM/policies/Politica-metadados-taxonomia-links-e-versionamento-Monvi-Brain.md`
3. `00_SYSTEM/policies/Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md`
4. `00_SYSTEM/policies/Politica-seguranca-documental-e-isolamento-Monvi-Brain.md`
5. `00_SYSTEM/registries/Registro-decisoes-institucionais-Monvi.md`
6. `00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md`
7. `00_SYSTEM/templates/Template-registro-decisao-institucional.md`
8. `00_SYSTEM/templates/Template-evidencia-documental.md`
9. `00_SYSTEM/templates/Checklist-prontidao-Monvi-Brain-v1.md`
10. `00_SYSTEM/templates/Matriz-testes-finais-Monvi-Brain-v1.md`
11. `02_WIKI/Mapa-executivo-Monvi-Brain.md`
12. `02_WIKI/Mapa-institucional-Monvi-Brain.md`
13. `02_WIKI/Mapa-tecnico-Monvi-Brain.md`
14. `02_WIKI/Mapa-operacional-Monvi-Brain.md`
15. `02_WIKI/Dashboard-executivo-Monvi.md`
16. `02_WIKI/Dashboard-operacional-Monvi.md`
17. `00_SYSTEM/architecture/Plano-corte-Monvi-Brain-v1.md`
18. `00_SYSTEM/architecture/Plano-testes-pos-consolidacao-Monvi-Brain-v1.md`

## Critérios de aprovação

A task só pode ser aprovada quando:

- auditoria global estiver concluída;
- navegação estiver definida;
- índices e mapas estiverem criados;
- metadados estiverem consolidados;
- taxonomia estiver consolidada;
- fonte de verdade estiver definida;
- conflitos estiverem tratados;
- decisões estiverem registradas;
- duplicidades e órfãos críticos estiverem tratados;
- tasks e pendências estiverem mapeadas;
- anomalias Git estiverem documentadas;
- clientes e projetos estiverem estruturados;
- isolamento documental estiver explícito;
- knowledge model estiver confrontado com o vault real;
- dashboards mínimos existirem;
- templates estiverem governados;
- evidências estiverem definidas;
- arquivamento estiver definido;
- versionamento estiver definido;
- revisão periódica estiver definida;
- segurança documental estiver consolidada;
- escrita por agentes estiver definida;
- onboarding humano estiver definido;
- onboarding de agentes estiver definido;
- testes finais estiverem preparados;
- testes finais ainda não tenham sido executados;
- critérios de corte v1.0 estiverem explícitos;
- limitações estiverem registradas.

## Fora do escopo

- executar testes finais;
- implementar Monvi Core Brain;
- criar agentes reais;
- configurar autenticação;
- configurar integrações;
- configurar Dataview ou Bases como dependência obrigatória;
- conectar APIs;
- armazenar secrets;
- implementar dashboards dinâmicos fora do Obsidian;
- declarar produção pronta;
- aprovar operacionalmente agentes;
- executar piloto real.

## Riscos

- declarar v1.0 cedo demais;
- criar índices sem conexão real;
- padronizar metadados sem revisar documentos existentes;
- manter decisões apenas em chat;
- misturar cliente e institucional;
- esconder pendências;
- ignorar anomalias Git;
- tornar o vault dependente de plugin;
- criar dashboards sem fonte confiável;
- confundir documentação com implementação;
- executar testes antes da consolidação;
- deixar notas críticas órfãs.

## Resultado esperado

Monvi Brain v1.0 consolidado documentalmente, navegável no Obsidian, governado, auditável, com limitações explícitas e com os testes finais preparados para execução posterior.

## Fase 1 — Auditoria executada

- data: 2026-07-22;
- inventário documental criado;
- auditoria global criada;
- metadados, links, owners, reviewers, source tasks e IDs analisados;
- anomalias Git conhecidas registradas;
- nenhuma correção estrutural massiva executada;
- testes finais não executados;
- documentos permanecem em review.

### Entregáveis da fase 1

- `00_SYSTEM/registries/Auditoria-global-Monvi-Brain-v1.md`;
- `00_SYSTEM/registries/Inventario-documental-Monvi-Brain-v1.md`.

## Fase 2 — Regras e classificação dos achados

- data: 2026-07-22;
- política de metadados, taxonomia, links e versionamento criada;
- achados da auditoria classificados;
- checklist de correção estrutural controlada criado;
- correções em massa continuam proibidas;
- owners, reviewers e source tasks não serão inferidos sem evidência;
- testes finais permanecem não executados;
- documentos permanecem em review.

### Entregáveis da fase 2

- `00_SYSTEM/policies/Politica-metadados-taxonomia-links-e-versionamento-Monvi-Brain.md`;
- `00_SYSTEM/registries/Classificacao-achados-auditoria-Monvi-Brain-v1.md`;
- `00_SYSTEM/templates/Checklist-correcao-estrutural-controlada-Monvi-Brain.md`.

## Fase 3 — Navegação e dashboards

- data: 2026-07-22;
- arquitetura de navegação do Obsidian criada;
- mapa executivo criado;
- mapa institucional criado;
- mapa técnico criado;
- mapa operacional criado;
- dashboard executivo criado;
- dashboard operacional criado;
- links gerados apenas para documentos existentes;
- plugins permanecem opcionais;
- testes finais permanecem não executados;
- documentos permanecem em review.

### Entregáveis da fase 3

- `00_SYSTEM/architecture/Arquitetura-navegacao-Obsidian-Monvi-Brain-v1.md`;
- `02_WIKI/Mapa-executivo-Monvi-Brain.md`;
- `02_WIKI/Mapa-institucional-Monvi-Brain.md`;
- `02_WIKI/Mapa-tecnico-Monvi-Brain.md`;
- `02_WIKI/Mapa-operacional-Monvi-Brain.md`;
- `02_WIKI/Dashboard-executivo-Monvi.md`;
- `02_WIKI/Dashboard-operacional-Monvi.md`.

## Fase 4 — Fonte de verdade, segurança, decisões e evidências

- data: 2026-07-22;
- política de fonte de verdade criada;
- política de segurança documental e isolamento criada;
- registro de decisões institucionais criado;
- registro de pendências, riscos e limitações criado;
- template de decisão institucional criado;
- template de evidência documental criado;
- chats permanecem fora da autoridade documental;
- secrets continuam proibidos;
- testes finais permanecem não executados;
- documentos permanecem em review.

### Entregáveis da fase 4

- `00_SYSTEM/policies/Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md`;
- `00_SYSTEM/policies/Politica-seguranca-documental-e-isolamento-Monvi-Brain.md`;
- `00_SYSTEM/registries/Registro-decisoes-institucionais-Monvi.md`;
- `00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md`;
- `00_SYSTEM/templates/Template-registro-decisao-institucional.md`;
- `00_SYSTEM/templates/Template-evidencia-documental.md`.

## Fase 5 — Corte v1.0 e preparação dos testes

- data: 2026-07-22;
- plano de corte v1.0 criado;
- plano de testes pós-consolidação criado;
- checklist de prontidão criado;
- matriz de testes finais criada;
- gates de corte definidos;
- critérios de bloqueio definidos;
- critérios de aprovação e reprovação definidos;
- testes finais permanecem não executados;
- documentos permanecem em review.

### Entregáveis da fase 5

- `00_SYSTEM/architecture/Plano-corte-Monvi-Brain-v1.md`;
- `00_SYSTEM/architecture/Plano-testes-pos-consolidacao-Monvi-Brain-v1.md`;
- `00_SYSTEM/templates/Checklist-prontidao-Monvi-Brain-v1.md`;
- `00_SYSTEM/templates/Matriz-testes-finais-Monvi-Brain-v1.md`.

## Fase 6 — Auditoria de conectividade e notas órfãs

- data: 2026-07-22;
- conectividade do vault analisada;
- notas totalmente isoladas identificadas;
- notas críticas isoladas priorizadas;
- links quebrados e ambíguos identificados;
- exceções legítimas modeladas;
- plano de correção por lotes criado;
- nenhuma conexão artificial foi criada;
- nenhuma correção em massa foi executada;
- testes finais permanecem não executados;
- documentos permanecem em review.

### Entregáveis da fase 6

- `00_SYSTEM/registries/Auditoria-conectividade-e-notas-orfas-Monvi-Brain-v1.md`;
- `00_SYSTEM/registries/Registro-excecoes-conectividade-Monvi-Brain-v1.md`;
- `00_SYSTEM/architecture/Plano-correcao-conectividade-Monvi-Brain-v1.md`.

## Fase 6.1 — Correção da auditoria de conectividade

- data: 2026-07-22;
- falha de interpolação da auditoria inicial corrigida;
- leitura UTF-8 preservada;
- wikilinks e links Markdown internos analisados;
- caminhos reais gravados no relatório;
- medição inicial da fase 6 substituída;
- nenhuma conexão foi alterada;
- testes finais permanecem não executados;
- documentos permanecem em review.

## Fase 7 — Correção de conectividade por lotes

### Lote 1 — arquitetura e governança técnica

- data: 2026-07-22;
- 23 documentos críticos conectados ao mapa técnico;
- relações organizadas por ecossistema, identidade, Helpper, agentes e consolidação;
- nenhuma conexão artificial com o index foi criada;
- RAW e canonical não foram alterados;
- tasks históricas não foram alteradas;
- status documentais não foram promovidos;
- testes finais permanecem não executados;
- documentos da task 032 permanecem em review.

#### Entregável

- `00_SYSTEM/registries/Registro-correcoes-conectividade-lote-1-Monvi-Brain-v1.md`.

### Lote 2 — rastreabilidade das tasks 028 a 031

- data: 2026-07-22;
- tasks 028, 029, 030 e 031 conectadas aos respectivos entregáveis;
- matriz de rastreabilidade criada;
- matriz conectada ao mapa técnico;
- nenhuma task histórica foi alterada;
- nenhum status foi promovido;
- RAW e canonical não foram alterados;
- testes finais permanecem não executados;
- documentos da task 032 permanecem em review.

#### Entregável

- `00_SYSTEM/registries/Matriz-rastreabilidade-tasks-028-031-Monvi.md`.

### Lote 3 — jurídico, segurança e operação

- data: 2026-07-22;
- 21 documentos conectados aos mapas institucional e operacional;
- jurídico e segurança conectados ao mapa institucional;
- processos, comercial e marketing conectados ao mapa operacional;
- conteúdo interno dos documentos não foi alterado;
- nenhum status foi promovido;
- RAW e canonical não foram alterados;
- testes finais permanecem não executados;
- documentos da task 032 permanecem em review.

#### Entregável

- `00_SYSTEM/registries/Registro-correcoes-conectividade-lote-3-Monvi-Brain-v1.md`.

### Lote 4 — templates estruturais e operacionais

- data: 2026-07-22;
- 26 templates conectados por função;
- mapa específico de templates criado;
- mapa de templates conectado ao mapa operacional;
- conteúdo interno dos templates não foi alterado;
- nenhum status foi promovido;
- owners e reviewers não foram inferidos;
- RAW e canonical não foram alterados;
- testes finais permanecem não executados;
- documentos da task 032 permanecem em review.

#### Entregáveis

- `02_WIKI/Mapa-templates-Monvi-Brain.md`;
- `00_SYSTEM/registries/Registro-correcoes-conectividade-lote-4-Monvi-Brain-v1.md`.

### Lote 5 — correção de wikilinks com ponto final

- data: 2026-07-22;
- pontos finais removidos de wikilinks do mapa operacional;
- todos os destinos corrigidos foram validados como arquivos existentes;
- conteúdo dos documentos de destino não foi alterado;
- resultados da auditoria V2 não foram promovidos;
- links ambíguos permanecem pendentes;
- nenhum status foi promovido;
- RAW e canonical não foram alterados;
- testes finais permanecem não executados;
- documentos da task 032 permanecem em review.

#### Entregável

- `00_SYSTEM/registries/Registro-correcao-links-com-ponto-mapa-operacional-Monvi-Brain-v1.md`.

### Lote 6 — correção de wikilinks nos mapas institucional e técnico

- data: 2026-07-22;
- 27 pontos finais removidos de wikilinks;
- 9 correções no mapa institucional;
- 18 correções no mapa técnico;
- todos os destinos corrigidos foram validados como arquivos existentes;
- conteúdo dos documentos de destino não foi alterado;
- referências a PDF e JSONL não foram alteradas;
- links ambíguos permanecem pendentes;
- nenhum status foi promovido;
- RAW e canonical não foram alterados;
- testes finais permanecem não executados;
- documentos da task 032 permanecem em review.

#### Entregável

- `00_SYSTEM/registries/Registro-correcao-links-com-ponto-mapas-institucional-tecnico-Monvi-Brain-v1.md`.
