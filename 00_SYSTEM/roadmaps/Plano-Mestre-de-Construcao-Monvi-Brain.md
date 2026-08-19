---
id: plan-master-monvi-brain
title: Plano Mestre de Construção do Monvi Brain
type: strategic-roadmap
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
classification: internal
confidentiality: internal
created_at: "2026-07-30"
updated_at: "2026-07-30"
reviewed_at: "2026-07-30"
review_cycle: on-change
version: "0.1.0"
execution_authority: false
sources:
  - ../../03_OPERATIONS/decisoes/decision-20260730-plano-mestre-monvi-brain.md
related:
  - ../tasks/active/TASK-2026-042-plano-mestre-construcao-monvi-brain.md
aliases:
  - roadmap estratégico do Monvi Brain
tags:
  - monvi-brain
  - roadmap
  - architecture
  - governance
  - codex
---

# Plano Mestre de Construção do Monvi Brain

## 1. Propósito

Este documento organiza a construção completa do Monvi Brain, desde a fundação técnica até sua evolução como plataforma operacional, de conhecimento, automação e inteligência artificial da Monvi.

Ele serve para:

- orientar decisões de arquitetura e produto;
- reduzir retrabalho entre etapas;
- explicitar dependências e riscos;
- manter coerência entre tarefas, decisões e implementações;
- fornecer contexto seguro para execução assistida por Codex;
- preservar rastreabilidade, revisão humana e controle de escopo.

## 2. Regra central de governança

> Estar previsto neste plano não significa estar autorizado para implementação.

Cada etapa só pode ser executada quando existir:

1. task ativa;
2. escopo fechado;
3. caminhos permitidos;
4. dependências autorizadas;
5. critérios de aceite;
6. riscos e bloqueios documentados;
7. aprovação humana explícita.

O Codex pode usar este plano como contexto, mas deve executar somente a etapa formalmente autorizada.

## 3. Visão do produto

O Monvi Brain deve se tornar o núcleo operacional e inteligente da Monvi, conectando pessoas, clientes, projetos, processos, conhecimento, dados, automações e agentes de IA em uma estrutura segura, auditável e evolutiva.

### Resultado esperado de longo prazo

- menos tarefas manuais;
- mais clareza operacional;
- histórico confiável de decisões e ações;
- melhor gestão de clientes e projetos;
- automações supervisionadas;
- agentes de IA com contexto, regras e limites;
- dados organizados para análise e tomada de decisão;
- integração controlada com ferramentas internas e externas.

## 4. Princípios de arquitetura

1. **Governança antes de automação**
   Nenhuma automação crítica deve existir sem dono, regra, exceção e trilha de auditoria.

2. **Separação de responsabilidades**
   Autenticação, autorização, dados de negócio, memória, automações e integrações devem permanecer desacoplados.

3. **Segurança por padrão**
   Segredos, dados pessoais, permissões e logs devem seguir o princípio do menor privilégio.

4. **Evolução incremental**
   Cada fase deve entregar valor isolado, ser testável e permitir rollback.

5. **Ambientes separados**
   Desenvolvimento, homologação e produção não devem compartilhar credenciais, dados ou configurações críticas.

6. **Dados antes de inteligência**
   Agentes de IA dependem de dados estruturados, fontes confiáveis e regras claras.

7. **Supervisão humana**
   Ações irreversíveis, financeiras, jurídicas, comerciais sensíveis ou relacionadas a clientes devem exigir aprovação humana.

8. **Observabilidade desde o início**
   Logs, métricas, eventos e auditoria fazem parte do produto, não são adições tardias.

9. **API como contrato**
   Integrações internas e externas devem depender de contratos versionados e testáveis.

10. **Privacidade e LGPD**
    Coleta, uso, retenção, compartilhamento e exclusão de dados devem ser documentados.

## 5. Mapa de capacidades finais

### 5.1 Core Brain

- API central;
- configuração;
- tratamento de erros;
- logs;
- persistência;
- auditoria;
- eventos;
- contratos internos;
- controle de versão.

### 5.2 Identidade e acesso

- pessoas;
- identidades;
- sessões;
- perfis;
- papéis;
- permissões;
- escopos;
- políticas;
- trilha de acesso.

### 5.3 Organização e operação

- clientes;
- contatos;
- projetos;
- tarefas;
- entregáveis;
- responsáveis;
- aprovações;
- riscos;
- dependências;
- cronogramas.

### 5.4 Comercial e CRM

- leads;
- oportunidades;
- diagnósticos;
- propostas;
- follow-ups;
- funil;
- histórico de interações;
- motivos de ganho e perda.

### 5.5 Conhecimento e memória

- documentos;
- fontes;
- versões;
- classificação;
- permissões;
- extração;
- indexação;
- busca;
- memória operacional;
- retenção e descarte.

### 5.6 Automações

- workflows;
- gatilhos;
- condições;
- ações;
- filas;
- retries;
- dead-letter;
- aprovações humanas;
- monitoramento;
- reprocessamento.

### 5.7 Agentes de IA

- agentes especializados;
- contexto por domínio;
- ferramentas permitidas;
- políticas;
- limites de autonomia;
- supervisão;
- avaliação;
- rastreabilidade;
- fallback humano.

### 5.8 Integrações

- Google Workspace;
- GitHub;
- Vercel;
- Cloudflare;
- Nuvemshop;
- n8n;
- Make;
- OpenAI API;
- Google Analytics;
- Meta Ads;
- WhatsApp Business Platform;
- CRM, ERP, planilhas, bancos de dados e APIs.

### 5.9 Observabilidade e operação

- logs estruturados;
- métricas;
- tracing;
- health checks;
- readiness checks;
- alertas;
- incidentes;
- SLAs;
- backups;
- continuidade;
- custos.

## 6. Horizontes de planejamento

### Horizonte 1 — detalhado

Próximas 2 a 4 etapas. Deve conter especificação executável completa.

### Horizonte 2 — intermediário

Próximas fases dependentes do MVP. Deve conter objetivos, dependências, riscos e entregáveis principais.

### Horizonte 3 — estratégico

Capacidades futuras. Deve conter direção, limites e critérios de entrada, sem detalhamento técnico prematuro.

## 7. Fases de construção

## Fase 0 — Governança e fundação institucional

### Objetivo

Estabelecer estrutura de tasks, decisões, audits, logs, arquitetura e critérios de aprovação.

### Estado

Em andamento e parcialmente concluído.

### Entregáveis

- padrões de task;
- decisões arquiteturais;
- logs de mudanças;
- audits;
- convenções de branch, commit e PR;
- regras para Codex.

### Gate de saída

Governança mínima funcionando e sendo usada de forma consistente.

---

## Fase 1 — Fundação técnica do Core Brain

### Objetivo

Criar a base executável do backend.

### Estado

Etapa 1 concluída e integrada à `main`.

### Entregáveis concluídos

- TypeScript;
- Node.js;
- Fastify;
- Zod;
- Pino;
- Vitest;
- configuração;
- logs;
- tratamento de erros;
- `/api/v1/health`;
- `/api/v1/ready`;
- testes;
- build;
- documentação local.

### Itens ainda bloqueados

- PostgreSQL;
- Drizzle;
- autenticação real;
- credenciais;
- dados reais;
- integrações;
- homologação;
- produção.

---

## Fase 2 — Modelo de domínio e contratos

### Objetivo

Definir o modelo conceitual mínimo e os contratos da API antes da persistência real.

### Entregáveis

- `Modelo-dados-Core-Brain-MVP.md`;
- `Contrato-API-Core-Brain-MVP.md`;
- entidades e relacionamentos;
- identificadores;
- estados;
- invariantes;
- isolamento entre clientes;
- regras de auditoria;
- versionamento da API;
- convenções de erro;
- paginação, filtros e idempotência;
- estratégia de migrações;
- política de dados de teste.

### Escopo inicial recomendado

- pessoas;
- identidades;
- perfis;
- papéis;
- permissões;
- clientes;
- contatos;
- projetos;
- membros de projeto;
- eventos de auditoria.

### Gate de saída

Modelo e contrato aprovados, sem ativação de banco.

---

## Fase 3 — Persistência local e migrações

### Objetivo

Adicionar persistência técnica controlada em ambiente local.

### Dependências

- Fase 2 aprovada;
- decisão formal sobre PostgreSQL e Drizzle;
- política de migrações;
- estratégia de seeds fictícios;
- autorização explícita para dependências.

### Entregáveis

- PostgreSQL local;
- Drizzle;
- schema;
- migrações;
- seeds sintéticos;
- repositórios;
- transações;
- testes de integração;
- readiness com verificação de banco.

### Bloqueios

- dados reais;
- credenciais de produção;
- acesso externo;
- homologação;
- produção.

### Gate de saída

Migrações reproduzíveis, testes aprovados e banco local descartável.

---

## Fase 4 — Identidade, autenticação e autorização

### Objetivo

Implementar acesso seguro e políticas de permissão.

### Entregáveis

- estratégia de identidade;
- autenticação;
- sessões ou tokens;
- papéis;
- permissões;
- políticas por recurso;
- revogação;
- logs de acesso;
- testes de autorização;
- proteção contra escalada de privilégio.

### Regras

- autenticação não deve conter regras de negócio;
- autorização deve ser testável isoladamente;
- nenhuma rota sensível deve depender apenas da interface.

### Gate de saída

Matriz de permissões aprovada e testes de segurança concluídos.

---

## Fase 5 — Operação de clientes e projetos

### Objetivo

Transformar o Core Brain em ferramenta operacional interna.

### Entregáveis

- clientes;
- contatos;
- projetos;
- tarefas;
- entregáveis;
- responsáveis;
- aprovações;
- dependências;
- riscos;
- comentários;
- histórico de mudanças;
- dashboards operacionais mínimos.

### Gate de saída

Fluxo interno utilizável com dados controlados e permissões aplicadas.

---

## Fase 6 — Comercial e CRM

### Objetivo

Organizar o ciclo comercial da Monvi.

### Entregáveis

- leads;
- oportunidades;
- qualificação;
- diagnóstico;
- proposta;
- follow-up;
- estágios;
- motivos de perda;
- origem;
- indicadores comerciais;
- integração futura com WhatsApp, e-mail e formulários.

### Gate de saída

Funil comercial funcional e auditável.

---

## Fase 7 — Conhecimento, documentos e memória

### Objetivo

Criar uma camada confiável de conhecimento institucional e contextual.

### Entregáveis

- cadastro de fontes;
- documentos e versões;
- classificação;
- permissões;
- extração;
- indexação;
- busca textual;
- política de retenção;
- memória operacional;
- avaliação de embeddings e busca vetorial.

### Regra

Embeddings e memória semântica só entram após fontes, permissões, versionamento e descarte estarem definidos.

### Gate de saída

Busca confiável, fontes rastreáveis e acesso respeitando permissões.

---

## Fase 8 — Plataforma de automações

### Objetivo

Executar processos recorrentes com controle e observabilidade.

### Entregáveis

- catálogo de workflows;
- gatilhos;
- webhooks;
- filas;
- retries;
- idempotência;
- dead-letter;
- aprovações;
- logs;
- métricas;
- reprocessamento;
- integração com n8n e APIs.

### Gate de saída

Automações críticas com responsável, fallback e trilha de auditoria.

---

## Fase 9 — Agentes de IA

### Objetivo

Adicionar agentes especializados com autonomia limitada.

### Entregáveis

- catálogo de agentes;
- propósito de cada agente;
- ferramentas permitidas;
- fontes autorizadas;
- políticas;
- limites;
- aprovações humanas;
- avaliações;
- métricas de qualidade;
- fallback;
- controle de custo;
- proteção contra prompt injection.

### Gate de saída

Agentes avaliados em ambiente controlado e sem ações irreversíveis autônomas.

---

## Fase 10 — Integrações externas

### Objetivo

Conectar o Monvi Brain ao ecossistema operacional.

### Ordem recomendada

1. GitHub;
2. Google Workspace;
3. formulários e e-mail;
4. WhatsApp Business Platform;
5. CRM e planilhas;
6. n8n;
7. Nuvemshop;
8. analytics e mídia;
9. demais APIs.

### Entregáveis por integração

- contrato;
- credenciais segregadas;
- escopos mínimos;
- webhook seguro;
- retry;
- idempotência;
- logs;
- monitoramento;
- revogação;
- documentação;
- teste de falha.

### Gate de saída

Integração isolável, revogável e observável.

---

## Fase 11 — Homologação

### Objetivo

Validar a plataforma em ambiente próximo de produção.

### Entregáveis

- ambiente separado;
- dados fictícios ou anonimizados;
- pipeline;
- migrations;
- secrets management;
- observabilidade;
- testes end-to-end;
- plano de rollback;
- checklist de segurança;
- aceite operacional.

### Gate de saída

Homologação aprovada por critérios técnicos, operacionais e de segurança.

---

## Fase 12 — Produção

### Objetivo

Disponibilizar o Monvi Brain com segurança operacional.

### Entregáveis

- infraestrutura de produção;
- domínio;
- TLS;
- banco;
- backups;
- restauração testada;
- alertas;
- incident response;
- controle de acesso;
- política de deploy;
- rollback;
- monitoramento de custo;
- SLAs internos;
- runbooks.

### Gate de saída

Go-live aprovado formalmente.

---

## Fase 13 — Escala, inteligência e evolução

### Objetivo

Melhorar capacidade, precisão, confiabilidade e valor de negócio.

### Possíveis frentes

- analytics avançado;
- previsão;
- priorização automática;
- recomendação;
- múltiplas organizações;
- produtos para clientes;
- integrações adicionais;
- otimização de custos;
- alta disponibilidade;
- disaster recovery;
- governança de modelos;
- avaliações contínuas de agentes.

## 8. Dependências principais

```text
Governança
    ↓
Fundação técnica
    ↓
Modelo de domínio e API
    ↓
Persistência
    ↓
Identidade e autorização
    ↓
Operação interna
    ├── Comercial e CRM
    ├── Conhecimento e memória
    └── Automações
            ↓
        Agentes de IA
            ↓
     Integrações externas
            ↓
        Homologação
            ↓
         Produção
            ↓
      Escala e evolução
```

## 9. Gates obrigatórios

Cada etapa deve passar por:

### Gate A — proposta

- problema;
- objetivo;
- escopo;
- alternativas;
- riscos;
- recomendação.

### Gate B — autorização

- task ativa;
- caminhos permitidos;
- dependências;
- bloqueios;
- critérios de aceite;
- aprovação humana.

### Gate C — implementação

- branch isolada;
- diff limitado;
- testes;
- evidências;
- audit;
- nenhum segredo.

### Gate D — revisão

- revisão técnica;
- revisão de segurança;
- revisão de escopo;
- aprovação humana.

### Gate E — integração

- Pull Request;
- checks;
- merge;
- atualização local;
- limpeza de branch;
- registro de resultado.

### Gate F — ativação

Aplicável somente a ambientes, banco, credenciais, integrações e produção.

- plano de rollback;
- observabilidade;
- responsável;
- janela;
- aprovação explícita.

## 10. Protocolo de execução com Codex

Toda tarefa enviada ao Codex deve incluir:

```text
Use o Plano Mestre apenas como contexto.

Execute somente a task ativa e a etapa explicitamente autorizada.

Não antecipe fases futuras.
Não altere arquivos fora dos caminhos permitidos.
Não instale dependências não autorizadas.
Não crie ou use credenciais.
Não use dados reais de clientes.
Não publique em homologação ou produção.
Não faça merge automático.
Execute os testes definidos.
Registre riscos, desvios e decisões.
Pare no próximo gate de aprovação humana.
```

### Responsabilidades

**Helpper**
- estruturar;
- analisar;
- recomendar;
- preparar escopo;
- revisar riscos;
- validar governança.

**Codex**
- implementar;
- testar;
- documentar;
- apresentar diff;
- reportar limitações.

**CEO da Monvi**
- decidir;
- aprovar;
- rejeitar;
- autorizar dependências, credenciais, ambientes e produção;
- realizar ou confirmar o merge.

## 11. Template de etapa executável

Cada nova etapa deve registrar:

```text
ID:
Título:
Fase:
Objetivo:
Contexto:
Escopo incluído:
Escopo excluído:
Dependências:
Caminhos permitidos:
Caminhos proibidos:
Dependências autorizadas:
Dados permitidos:
Credenciais permitidas:
Ambientes permitidos:
Entregáveis:
Critérios de aceite:
Testes obrigatórios:
Riscos:
Rollback:
Evidências esperadas:
Aprovador:
Próximo gate:
```

## 12. Estratégia de ambientes

### Local

- desenvolvimento;
- dados sintéticos;
- credenciais locais não versionadas;
- serviços descartáveis.

### Homologação

- isolada;
- secrets próprios;
- dados fictícios ou anonimizados;
- observabilidade ativa;
- acesso restrito.

### Produção

- secrets próprios;
- menor privilégio;
- backups;
- alertas;
- auditoria;
- rollback;
- controle de mudança.

## 13. Estratégia de dados

- identificadores estáveis;
- timestamps e autoria;
- soft delete apenas quando necessário;
- trilha de auditoria separada;
- isolamento por organização ou cliente;
- minimização de dados pessoais;
- retenção definida por categoria;
- seeds exclusivamente sintéticos;
- migrações versionadas;
- backup e restauração testados antes de produção.

## 14. Estratégia de segurança e LGPD

- inventário de dados;
- finalidade;
- base legal quando aplicável;
- controle de acesso;
- criptografia em trânsito;
- secrets management;
- redaction de logs;
- retenção;
- descarte;
- resposta a incidentes;
- registro de consentimento quando necessário;
- direitos do titular;
- revisão de fornecedores;
- princípio do menor privilégio.

## 15. Estratégia de qualidade

### Testes mínimos por camada

- unitários;
- integração;
- contrato;
- autorização;
- migração;
- smoke;
- end-to-end;
- segurança;
- carga, quando necessário.

### Critérios gerais

- typecheck;
- lint, quando adotado;
- testes aprovados;
- build reproduzível;
- audit sem vulnerabilidades conhecidas relevantes;
- diff revisado;
- sem secrets;
- documentação atualizada.

## 16. Observabilidade

Antes de produção, o sistema deve possuir:

- logs estruturados;
- correlation/request ID;
- métricas;
- health;
- readiness;
- alertas;
- erro por categoria;
- latência;
- taxa de falha;
- filas e retries;
- custo de integrações e IA;
- auditoria de ações sensíveis.

## 17. Decisões em aberto

As seguintes decisões devem ser tomadas nas fases adequadas:

- provedor de PostgreSQL;
- estratégia de autenticação;
- provedor de secrets;
- estratégia de filas;
- arquitetura de eventos;
- política de storage;
- provedor de embeddings;
- banco vetorial;
- observabilidade;
- hospedagem de homologação e produção;
- política de backup;
- estratégia de disaster recovery;
- limites de autonomia dos agentes.

### Decisões já tomadas

- **Modelo de multi-organização** — decidido em 2026-08-17 pelo CEO (Task 086): **single-tenant, permanentemente**. Não há motivo de negócio concreto para suportar múltiplas organizações no momento — nem separação interna entre marcas/unidades de negócio da Monvi, nem oferta do Monvi Brain como produto SaaS para outras empresas. Nenhuma mudança de código foi necessária: toda a base já assumia single-tenant implicitamente (`client`, `project`, `automation_workflow`, `ai_agent`, `integration` e as demais ~30 entidades construídas até a Fase 10 não têm nenhum campo de isolamento por organização). Esta decisão pode ser reaberta no futuro se surgir uma razão de negócio concreta (ex.: decisão de vender o Monvi Brain como SaaS, ou uma segunda unidade de negócio real da Monvi precisando de dados separados) — nesse caso, o retrofit necessário (entidade `organization` + `organizationId` em cada tabela relevante + RBAC escopado por organização) deve ser tratado como um projeto próprio, não uma fatia incremental.

## 18. Roadmap priorizado

### Próximas etapas detalhadas

1. consolidar e aprovar este Plano Mestre;
2. definir o modelo de dados do Core Brain MVP;
3. definir o contrato inicial da API;
4. aprovar estratégia de persistência;
5. implementar PostgreSQL e Drizzle somente em ambiente local;
6. definir e implementar identidade e autorização;
7. iniciar módulo operacional de clientes e projetos.

### Fases intermediárias

- comercial e CRM;
- conhecimento e documentos;
- memória;
- automações;
- agentes de IA;
- integrações.

### Fases futuras

- homologação;
- produção;
- escala;
- analytics avançado;
- produtos derivados.

## 19. Estado atual

*Atualizado em 2026-08-19 (Task 094), após verificação direta do código, dos testes e das decisões formais — não apenas da documentação anterior desta seção.*

### Concluído

- governança inicial;
- arquitetura inicial do Core Brain MVP;
- aprovação da stack com condições;
- Fase 1 (fundação técnica): implementada, testada e integrada à `main`;
- Fase 2 (modelo de domínio): schema Drizzle implementado (pessoa, identidade, perfil, papel, permissão, cliente, projeto, sessão), exportado e coberto por teste;
- Fase 3 (persistência local): schema, migração e infraestrutura Docker local implementados; validação contra um banco Postgres real em execução ainda pendente de confirmação (teste de integração já existe em `apps/core-brain/tests/db.integration.test.ts`, aguardando execução em ambiente com Docker disponível);
- Fase 4 (identidade, autenticação dev e autorização): `dev-login` bloqueado em produção, RBAC e revogação de sessão implementados e testados (Tasks 044 e 045, 14/14 testes automatizados passando);
- Fase 5 (operação de clientes e projetos), todos os 12 entregáveis do escopo implementados: `client`/`project` (Task 053), `contact`/`project_membership` (Task 054), `task` (Task 055, primeira entidade de schema nova desta fase), `deliverable` (Task 056), `approval` (Task 057), `dependency` (Task 058, auto-referenciada em `task`, com índice único e validação contra auto-dependência), `risk` (Task 059), `comment` (Task 060, deliberadamente escopado a `task`, sem associação polimórfica), histórico de mudanças (Task 061, rota genérica `GET /history` sem tabela nova, lendo `audit_event`) e dashboard operacional mínimo por projeto (Task 062, `GET /projects/:projectId/dashboard`, agregando tarefas/entregáveis/riscos/aprovações por status, também sem tabela nova). Toda a API sob autenticação e RBAC obrigatórios, sob suposição explícita de single-tenant, formalizada como decisão permanente do CEO em 2026-08-17 (seção 17, Task 086) — não há plano de suportar múltiplas organizações;
- Fase 6 (comercial e CRM), funcionalmente concluída — os 5 entregáveis funcionais implementados: `lead` (Task 065 — nome, empresa, e-mail e telefone opcionais, origem, status de funil, responsável comercial opcional, deliberadamente sem referência a `client`), `opportunity` (Task 066 — origem opcional em `lead`, estágio de funil, motivo de perda, responsável comercial opcional), `activity` (Task 067 — unifica diagnóstico/proposta/follow-up via discriminador `activity_type`, vínculo obrigatório com pelo menos um de `leadId`/`opportunityId`) e o dashboard de indicadores comerciais (Task 068, `GET /commercial/dashboard`, agregando leads/oportunidades/atividades, mesmo padrão do dashboard de projeto). Resta apenas integrações externas, explicitamente fora de escopo por ora ("integração futura" no Plano Mestre original). Mesma suposição explícita de single-tenant;
- Fase 7 (conhecimento, documentos e memória), funcionalmente concluída — oito dos nove entregáveis implementados: `source` (Task 069, cadastro de fontes, isolado das Fases 5/6), `document`/`document_version` (Task 070, com versionamento imutável), classificação (Task 071, `document.confidentiality` reaproveitando o vocabulário canônico de [`KNOWLEDGE-MODEL.md`](../canonical/KNOWLEDGE-MODEL.md); `document.status` realinhado ao `Status` canônico), permissões granulares (Task 072, `document_permission`, com enforcement real para `confidential`/`restricted`), política de retenção (Task 073, `document.retentionPolicy`/`retentionUntil`, puramente declarativo — com esta task, os quatro pré-requisitos bloqueantes da regra da fase ficaram completos), indexação e busca textual (Task 074, `GET /search?q=<termo>`, full-text search nativo do Postgres, sem índice persistido), memória operacional (Task 075, `memory_note`, anotações leves e efêmeras, deliberadamente mais simples que `document`), extração real de arquivos de texto puro (Task 087, retomada em 2026-08-17 — `POST /documents/:documentId/versions/upload`, upload real via `multipart/form-data`, armazenamento em disco local (`UPLOADS_DIR`), extração real de `.txt`/`.md`; PDF/Word armazenados mas sem extração de conteúdo, deliberadamente fora desta fatia) extração real de PDF (Task 090, 2026-08-18 — mesma rota de upload, agora também extrai texto real de `.pdf`/`application/pdf` via `unpdf`, escolhida entre três bibliotecas avaliadas por ser a mais leve, sem binding nativo, com 0 vulnerabilidades; PDF corrompido ou sem camada de texto — ex.: digitalizado, sem OCR — resulta em `content: null` sem quebrar o upload) e extração real de Word (Task 091, 2026-08-18, mesmo dia — mesma rota de upload, agora também extrai texto real de `.docx`/`application/vnd.openxmlformats-officedocument.wordprocessingml.document` via `mammoth`, biblioteca padrão de fato para o formato, ~7,8 MB instalados, sem binding nativo, 0 vulnerabilidades; `.docx` corrompido ou sem texto resulta em `content: null` sem quebrar o upload, mesmo padrão de três estados do PDF; Word legado `.doc`, formato binário antigo não suportado pelo `mammoth`, permanece fora de escopo). Resta apenas embeddings/busca vetorial, formalmente desbloqueado pela regra da fase, mas ainda não implementado;
- Fase 8 (plataforma de automações), funcionalmente concluída por decisão do CEO — dez dos onze entregáveis implementados: catálogo (Task 076, `automation_workflow` — nome, descrição, responsável, tipo de gatilho pretendido opcionais, status `draft`/`active`/`paused`/`archived`, puro cadastro), gatilhos e webhooks reais (Task 077, segundo e terceiro entregáveis — `automation_trigger`; `POST /automation-triggers/:token/invoke` é a **única rota pública de todo o sistema**, por decisão deliberada), fila/retries/idempotência/dead-letter (Task 078, quarto a sétimo entregáveis — ciclo de vida completo de `automation_invocation` via consulta SQL, sem fila externa), aprovações/reprocessamento (Task 079, oitavo e nono entregáveis — `automation_workflow.requiresApproval`, `POST /automation-invocations/:id/approve`/`reprocess`, sem reaproveitar a entidade `approval` da Fase 5) e logs/métricas (Task 080, décimo e décimo-primeiro entregáveis — `GET /history` estendido para `automation_invocation` e `GET /automations/dashboard`, ambos sem tabela nova). Continua sem nenhum worker real consumindo a fila automaticamente. O CEO decidiu deixar pendente o último entregável — integração com n8n e APIs (depende de decisão de infraestrutura externa ainda não tomada) — e avançar para a Fase 9. Em 2026-08-17/18, pesquisa da mesma natureza da que gerou a Task 088 (confronto com a arquitetura já aprovada nas Tasks 028/030/031) encontrou divergência proporcionalmente maior entre `automation_workflow`/`automation_invocation` e o modelo canônico de execução supervisionada (`Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md` e `Politica-aprovacao-e-separacao-de-funcoes-agentes.md`, Task 031): ausência de timeout, retry indiferenciado por tipo de falha, sem estados/expiração de aprovação distintos nem separação de funções, e apenas 5 dos 12 estados operacionais canônicos implementados. Por já haver comportamento real testado (Tasks 078/079), o CEO optou por uma divisão conservadora: **Task 089** adicionou apenas `automation_workflow.timeoutSeconds`, puramente declarativo (mesmo padrão de `ai_agent.timeoutSeconds`, sem enforcement — não existe worker real consumindo a fila), e todo o restante do modelo canônico (máquina de 12 estados, tabela de retry diferenciado por tipo de falha, separação de funções na aprovação, concorrência/locks/prioridade, `cost_limit`, demais campos do contrato de execução) foi deliberadamente adiado para uma conversa futura dedicada;
- Fase 9 (agentes de IA), pausada quanto a execução real, mas retomada quanto a representação — sete dos doze entregáveis implementados: catálogo (Task 081, `ai_agent` — nome, descrição, propósito, ferramentas permitidas (`allowedTools`), fontes autorizadas (`authorizedSourceIds`, sem FK, mesmo padrão de `memory_note`), responsável e status opcionais, puro cadastro, mesmo padrão que abriu a Fase 8), políticas e limites (Task 082, quinto e sexto entregáveis — `policy`, `maxActionsPerRun`/`timeoutSeconds`, controle de custo deliberadamente fora) e sinalização de aprovação humana (Task 083, sétimo entregável — `requiresHumanApproval`, ordem invertida em relação à Fase 8: o campo existe antes de qualquer execução real de agente). O CEO pediu para retomar a Fase 9 e, ao esclarecer o que "Agente" deveria significar no produto, revelou uma distinção conceitual (Persona/Agente/Helpper) que já tinha arquitetura aprovada — não documentada em nenhuma task anterior desta janela. Pesquisa no repositório confirmou: as Tasks 028/030/031 (aprovadas em 2026-07-22) já definem a hierarquia Helpper individual → **Helpper especialista** → Helpper Core, com um contrato mínimo (especialidade, missão, escopo, skills, ferramentas, fontes, repositórios, limites, risco, revisor, critérios de escalonamento, formato de reporte) e um ciclo de vida de 13 estados (`Modelo-ciclo-de-vida-e-estados-de-agentes-Monvi.md`) — nenhum dos quais foi consultado ao construir `ai_agent` nas Tasks 081-083. A Task 088 corrigiu isso: **realinhamento de `ai_agent` ao contrato canônico de Helpper especialista** — campos novos `specialty`/`scope`/`skills`/`repositories`/`forbiddenActions`/`riskLevel`/`reviewerPersonId`/`escalationCriteria`/`reportFormat`; `status` realinhado aos 13 estados canônicos (`draft`/`configured`/`validated`/`simulated`/`pilot`/`active`/`suspended`/`retired`/`archived`/`blocked`/`quarantined`/`incident`/`deprecated`, substituindo os 4 anteriores). Puro realinhamento de representação/administração — sem enforcement da matriz de transição de estados (exigiria papéis de aprovação que o RBAC não tem), sem campos de custo/monitoramento (dependem de execução real). **Nenhum agente é de fato invocado**: não há execução de IA, chamada real a ferramentas, nem aplicação real de nenhuma política/limite/aprovação — tudo permanece metadado declarativo. Avaliações, métricas de qualidade, fallback, controle de custo e proteção contra prompt injection seguem pendentes, dependentes de uma decisão ainda não tomada sobre se/quando construir execução real de agentes — mas a base de representação agora está alinhada à arquitetura já aprovada, não mais reinventada.

### Em andamento

- Fase 10 (integrações externas): iniciada pela Task 084 com a entidade `integration` — provedor (enum fechado com as nove integrações previstas na ordem recomendada do Plano Mestre: GitHub, Google Workspace, formulários/e-mail, WhatsApp, CRM/planilhas, n8n, Nuvemshop, analytics/mídia, outras), nome, escopos mínimos pretendidos (texto livre), responsável e status (`draft`/`active`/`paused`/`revoked`, padrão `draft`) opcionais, puro cadastro — mesmo padrão que abriu as Fases 8 e 9. Estendida pela Task 085 com a primeira chamada real de saída do projeto a um serviço externo — `GET /integrations/:id/github/repository?owner=<owner>&repo=<repo>`, autenticado com um Personal Access Token lido de `GITHUB_PAT` (variável de ambiente, nunca armazenada em banco), chamando `GET /repos/{owner}/{repo}` real do GitHub via `fetch` nativo (nenhuma dependência nova). Direção escolhida pelo CEO: saída (Monvi → GitHub), não entrada (webhook do GitHub → Monvi), porque o servidor roda só em `127.0.0.1` — sem URL pública, um webhook real não teria como chegar aqui antes de deploy (Fases 11/12). Escopo deliberadamente mínimo: só leitura, sem escrita, sem retry sofisticado, sem idempotência; `424` se a credencial não estiver configurada, `502` se o próprio GitHub retornar erro; toda chamada gera `audit_event`, sem o token. Estendida pela Task 092 (2026-08-18) com a primeira capacidade de escrita real do projeto — `POST /integrations/:id/github/issues/:issueNumber/comments?owner=<owner>&repo=<repo>`, comentando em uma issue ou Pull Request existente via `POST /repos/{owner}/{repo}/issues/{issue_number}/comments` (a mesma API do GitHub cobre os dois casos, já que PRs compartilham a numeração de issues com comentários); mesmo padrão de erros/auditoria da rota de leitura; deliberadamente restrito a comentar — editar/apagar comentário, labels, assignees, fechar issue e merge de PR ficam para fatias futuras, dado o risco crescente de cada ação; requer que o `GITHUB_PAT` (Task 085, hoje só "Contents: Read-only") ganhe o escopo fine-grained "Issues: Read and write" para funcionar de verdade — ação do CEO, não bloqueante para a implementação em si, já que a suíte de testes automatizados nunca chama o GitHub real. Estendida pela Task 093 (mesmo dia) com a segunda capacidade de escrita — `POST /integrations/:id/github/issues?owner=<owner>&repo=<repo>`, criando uma issue real via `POST /repos/{owner}/{repo}/issues` (`title` obrigatório, `body` opcional); mesmo padrão de erros/auditoria/credencial das duas rotas anteriores; deliberadamente sem labels, assignees ou milestone — exigiriam validar valores já existentes no repositório real, risco/complexidade maior que o valor desta fatia. Com essas duas capacidades, o CEO sinalizou que a lista de fatias "zero-custo e autossuficientes" está praticamente esgotada — o que resta de valor real na Fase 10 (segundo provedor) e nas demais fases (embeddings, execução real de agentes, OCR) depende de orçamento ou de credenciais reais que só ele pode fornecer. Diferente de toda a base construída até aqui (que não dependia de nenhum serviço externo), os demais entregáveis restantes por integração (credenciais segregadas mais robustas, escopos mínimos aplicados de fato, webhook seguro de entrada, retry, idempotência, logs/monitoramento dedicados, revogação, documentação, teste de falha, além de labels/assignees/milestone e outras ações de escrita mais arriscadas) dependem de decisão do CEO sobre o que conectar em seguida — para GitHub ou para qualquer outro provedor.
- Hub interno (frontend), iniciativa transversal fora da numeração de Fases (ver seção 21): Task 094 entregou a primeira fatia, só leitura — login via `dev-login`, dashboard comercial, dashboard de automações e dashboard de projeto (com seleção a partir da lista). `apps/hub` (React + Vite), zero rotas novas no backend, `@fastify/cors` adicionado para permitir a chamada entre os dois servidores locais. Nenhuma tela de escrita, nenhum deploy.

### Ainda não iniciado

- autenticação de produção real (Google Workspace/OIDC) — arquitetura documentada na Task 040, implementação técnica não iniciada;
- integrações externas da Fase 6 (WhatsApp/e-mail/formulários);
- embeddings e busca vetorial da Fase 7 (extração real de texto puro concluída na Task 087, de PDF na Task 090 e de Word/`.docx` na Task 091; Word legado `.doc`, OCR de PDF digitalizado e embeddings/busca vetorial seguem pendentes);
- integração com n8n e APIs, último entregável da Fase 8 (deixado deliberadamente pendente, depende de decisão de infraestrutura externa do CEO);
- demais entregáveis da Fase 9 além do catálogo, políticas/limites e sinalização de aprovação humana de `ai_agent` (avaliações, métricas de qualidade, fallback, controle de custo, proteção contra prompt injection) — fase pausada até decisão do CEO sobre execução real de agentes;
- demais entregáveis da Fase 10 além do catálogo de `integration`, da leitura real de repositório do GitHub, do comentário real em issue/PR e da criação real de issue do GitHub (credenciais segregadas mais robustas, escopos mínimos aplicados de fato, webhook seguro de entrada, retry, idempotência, logs/monitoramento dedicados, revogação, documentação, teste de falha, por integração, além de labels/assignees/milestone e outras ações de escrita mais arriscadas), e todas as fases 11 em diante.

### Parte B — validação real de persistência (transversal a Fases 3, 5, 6, 7, 8, 9 e 10)

Nenhuma das migrações geradas (`0000` a `0026`, incluindo `task`, `deliverable`, `approval`, `dependency`, `risk`, `comment`, `lead`, `opportunity`, `activity`, `source`, `document`/`document_version`, `document_permission`, a política de retenção de `document`, `memory_note`, `automation_workflow`, `automation_trigger`/`automation_invocation`, o ciclo de vida de `automation_invocation`, as aprovações/reprocessamento da Task 079, `ai_agent`, suas políticas/limites da Task 082, a sinalização de aprovação humana da Task 083, `integration`, a extração real de arquivos da Task 087, o realinhamento de `ai_agent` da Task 088, o `timeoutSeconds` declarativo de `automation_workflow` da Task 089, a extração real de PDF/Word das Tasks 090/091 e o comentário/criação real de issue/PR do GitHub das Tasks 092/093, nenhuma das quais gerou migração — nenhuma alteração de schema em nenhuma delas) foi aplicada contra um banco Postgres real; nenhum dos 26 testes de integração criados (`apps/core-brain/tests/*.integration.test.ts`) foi executado com sucesso — todos falham com `ECONNREFUSED` neste ambiente de execução, que não tem Docker disponível. A Task 079 não criou um novo arquivo de teste de integração (estendeu `automation-invocation.integration.test.ts`, já existente desde a Task 078), então a contagem permaneceu em 23; a Task 080 criou um arquivo novo (`automation-dashboard.integration.test.ts`) e estendeu `automation-invocation.integration.test.ts` de novo, elevando a contagem para 24; a Task 081 criou mais um arquivo novo (`ai-agent.integration.test.ts`), elevando a contagem para 25; as Tasks 082, 083 e 088 estenderam esse mesmo arquivo (sem criar um novo cada vez), então a contagem permaneceu em 25; a Task 084 criou mais um arquivo novo (`integration.integration.test.ts`), elevando a contagem para 26; a Task 085 e a Task 087 estenderam arquivos já existentes (`integration.integration.test.ts` e `document.integration.test.ts`, respectivamente), sem criar um novo, então a contagem permaneceu em 26; a Task 089 estendeu `automation-workflow.integration.test.ts`, já existente desde a Task 076, então a contagem permaneceu em 26; as Tasks 090 e 091 estenderam `document.integration.test.ts` de novo (cenários de upload com PDF e DOCX, respectivamente), então a contagem permaneceu em 26; as Tasks 092 e 093 estenderam `integration.integration.test.ts` de novo (cenários de comentário e criação de issue/PR do GitHub, respectivamente), então a contagem permaneceu em 26. Por decisão do CEO, essa validação é tratada como pendência única, deliberadamente adiada. Aplicar exige um ambiente com Docker: `docker compose up`, `npm run db:migrate`, `npm run test:integration`. Nota adicional: mesmo quando a Parte B for executada, o teste de integração de permissões (`document-permission.integration.test.ts`) não conseguirá exercitar o caminho de negação (403) sem uma mudança separada no harness de sessão de teste — hoje toda sessão criada via `createSession` resolve para o papel `admin` (join fixo em `validateSessionToken`, Fase 4), que sempre contorna a checagem granular. A Task 074 não gerou migração (`search` é rota de leitura pura).

### Próximo gate recomendado

Com comentar e criar issue já implementados (Tasks 092/093), a lista de fatias zero-custo e autossuficientes da Fase 10 está praticamente esgotada. O próximo passo real depende de uma decisão maior do CEO: conectar um segundo provedor da lista (Google Workspace é o próximo na ordem recomendada, exige credenciais reais dele), ampliar a escrita no GitHub para ações de maior risco (labels, assignees, fechar issue, merge de PR), ou tratar uma das decisões de orçamento já registradas (embeddings da Fase 7, execução real de agentes da Fase 9, OCR). Usar as capacidades de escrita já implementadas exige que o CEO gere um `GITHUB_PAT` novo com escopo "Issues: Read and write" (o atual só tem "Contents: Read-only"). Webhook seguro de entrada (GitHub → Monvi) só se torna executável de verdade após deploy (Fases 11/12). Em paralelo, seguem pendentes, de forma transversal: a Parte B (validação real contra Postgres, cada vez mais acumulada — o CEO tentará em outra máquina com Docker disponível), a estratégia de autenticação de produção, extração real de Word legado (`.doc`), OCR de PDF digitalizado e embeddings/busca vetorial da Fase 7 (extração de texto puro concluída na Task 087, de PDF na Task 090, de Word/`.docx` na Task 091), a integração com n8n e APIs da Fase 8, e a decisão sobre execução real de agentes que destravaria os cinco entregáveis restantes da Fase 9 (avaliações, métricas de qualidade, fallback, controle de custo, proteção contra prompt injection) — a representação de `ai_agent` já está realinhada à arquitetura aprovada (Task 088), mas sua execução real segue pendente dessa mesma decisão — todas dependentes de decisões do CEO ainda não tomadas. O modelo de multi-organização não está mais nesta lista — foi formalmente decidido (single-tenant permanente, Task 086). O restante do modelo canônico de execução supervisionada da Fase 8 (máquina de 12 estados, retry diferenciado, separação de funções na aprovação, concorrência/locks, `cost_limit`) segue deliberadamente adiado após a Task 089, que tratou apenas do campo declarativo `timeoutSeconds`; retomar esse tema exige uma decisão explícita do CEO em conversa dedicada. O hub interno (`apps/hub`, Task 094, seção 21) segue com sua primeira fatia (só leitura) — telas de escrita, se vierem, são fatias futuras separadas, na mesma disciplina de escopo estreito do restante do projeto.

## 20. Critério de sucesso do plano

Este plano será bem-sucedido quando:

- cada implementação estiver vinculada a uma task;
- nenhuma fase futura for antecipada sem aprovação;
- decisões forem rastreáveis;
- o Codex operar dentro de escopo fechado;
- o sistema evoluir sem misturar responsabilidades;
- segurança e LGPD forem tratadas como requisitos;
- cada etapa gerar valor verificável;
- a Monvi reduzir tarefas manuais sem perder controle.

## 21. Hub interno (frontend)

Iniciativa transversal, fora da numeração sequencial de Fases (0-13) — não é um novo domínio de negócio, é uma interface para operar o que os domínios já construídos expõem via API. Até a Task 093, todo o projeto era 100% API; não existia nenhuma tela.

Iniciada pela Task 094 (2026-08-19) com o pacote `apps/hub` (React + TypeScript + Vite, sem workspaces — mesmo padrão standalone de `apps/core-brain`), consumindo a API existente via `fetch` nativo, sem nenhuma rota nova no backend. Primeira fatia, deliberadamente **só leitura**:

- login via o `dev-login` já existente (Fase 4);
- dashboard comercial (`GET /commercial/dashboard`, Fase 6);
- dashboard de automações (`GET /automations/dashboard`, Fase 8);
- dashboard de projeto, com seleção a partir da lista de projetos (`GET /projects`, `GET /projects/:id/dashboard`, Fase 5).

Mudança necessária no backend: `@fastify/cors` adicionado a `apps/core-brain` (plugin oficial do Fastify, mesma família do `@fastify/multipart` já usado), restrito à origem configurada em `HUB_ORIGIN` (variável de ambiente nova, padrão `http://localhost:5173`, a porta padrão do Vite) — sem isso, o navegador bloquearia as chamadas do hub à API, que rodam em portas diferentes.

Deliberadamente fora desta fatia: qualquer ação de escrita (criar/editar/excluir), qualquer tela de CRUD completo, autenticação de produção real, deploy — o hub roda localmente, exatamente como a API roda hoje, sem nenhuma decisão de infraestrutura envolvida. Validação end-to-end com login real não foi possível neste ambiente (mesma limitação da Parte B — sem Postgres local); a verificação feita foi de wiring (CORS confirmado funcionando entre os dois servidores de desenvolvimento, `dev-login` falhando exatamente com o erro de conexão já conhecido, não com um erro de integração novo) mais os testes automatizados (Vitest + React Testing Library) cobrindo o fluxo de login e a renderização dos três dashboards com dados simulados.
