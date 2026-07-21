---
id: task-2026-023
title: Operação e entrega padrão da Monvi
type: task
status: review
task_state: review
priority: high
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-023-operacao-e-entrega-padrao-monvi.md
  - 00_SYSTEM/tasks/done/TASK-2026-023-operacao-e-entrega-padrao-monvi.md
  - 03_OPERATIONS/operations/Operacao-e-entrega-padrao-Monvi.md
  - 03_OPERATIONS/templates/Kickoff-de-projeto-Monvi.md
  - 03_OPERATIONS/templates/Checklist-de-entrega-Monvi.md
  - 03_OPERATIONS/templates/Handoff-comercial-para-operacao-Monvi.md
  - 00_SYSTEM/logs/changes.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - 00_SYSTEM/registries/source-manifest.md
  - 00_SYSTEM/logs/ingestion.jsonl
  - 01_RAW/
  - 02_WIKI/
  - 04_OUTPUTS/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 99_ARCHIVE/
---

# Task 2026-023 — Operação e entrega padrão da Monvi

## Contexto

A auditoria de prontidão operacional aprovou a padronização da operação e da entrega como a terceira prioridade dos próximos 30 dias.

A Monvi já possui catálogo de serviços, proposta comercial aprovada e sistema comercial mínimo. Falta transformar o fechamento comercial em um fluxo consistente de kickoff, execução, revisão, aceite e encerramento.

## Objetivo

Criar um padrão operacional mínimo para projetos e serviços da Monvi, com:

- entrada estruturada após o fechamento;
- definição de responsáveis;
- kickoff;
- planejamento;
- execução;
- gestão de dependências;
- controle de escopo;
- revisão interna;
- aceite do cliente;
- publicação ou entrega;
- encerramento;
- registro de pendências e aprendizados.

## Entregáveis

Criar, em `review`:

- `03_OPERATIONS/operations/Operacao-e-entrega-padrao-Monvi.md`;
- `03_OPERATIONS/templates/Kickoff-de-projeto-Monvi.md`;
- `03_OPERATIONS/templates/Checklist-de-entrega-Monvi.md`;
- `03_OPERATIONS/templates/Handoff-comercial-para-operacao-Monvi.md`.

## Princípios

- nenhum projeto começa sem escopo mínimo registrado;
- nenhum prazo é tratado como definitivo antes da confirmação de dependências;
- acessos e materiais do cliente devem ser explicitados;
- itens fora do escopo devem ser registrados e avaliados separadamente;
- revisão interna ocorre antes da entrega ao cliente;
- aceite deve ter critério claro;
- decisões críticas devem ser registradas;
- mudanças relevantes exigem validação comercial e operacional;
- não afirmar implantação sem evidência;
- manter supervisão humana em automações e IA críticas.

## Fluxo operacional mínimo

1. handoff comercial;
2. validação de prontidão;
3. kickoff;
4. planejamento;
5. execução;
6. revisão interna;
7. revisão do cliente;
8. correções aprovadas;
9. aceite;
10. publicação ou entrega;
11. estabilização;
12. encerramento.

## Dados mínimos do projeto

- ID;
- cliente;
- serviço;
- proposta ou escopo aprovado;
- responsável comercial;
- responsável técnico;
- participantes;
- data de início;
- prazo previsto;
- dependências;
- acessos;
- materiais;
- entregáveis;
- critérios de aceite;
- riscos;
- pendências;
- status;
- próxima ação;
- data da próxima ação;
- documentos relacionados.

## Controle de escopo

Toda solicitação nova deve ser classificada como:

- dentro do escopo;
- ajuste de correção;
- pequena evolução;
- fora do escopo;
- dependência externa;
- decisão pendente.

Itens fora do escopo não devem ser executados sem avaliação de impacto, prazo e custo.

## Responsabilidades provisórias

- Victor: comercial, estratégia, relacionamento, aprovações e alinhamento com cliente;
- Filipe: desenvolvimento, infraestrutura, integrações, segurança técnica e revisão técnica;
- Victor e Filipe: IA, automações, investimentos e decisões críticas;
- cliente: materiais, acessos, aprovações e validação de conteúdo;
- responsabilidades finais devem ser confirmadas por projeto.

## Critérios de prontidão para iniciar

- escopo mínimo aprovado;
- responsável comercial definido;
- responsável técnico definido;
- dependências conhecidas;
- acessos mínimos listados;
- materiais essenciais identificados;
- prazo condicionado às dependências;
- critérios de aceite preliminares;
- riscos críticos registrados;
- canal de comunicação definido.

## Critérios de entrega

- entregáveis previstos concluídos;
- revisão interna realizada;
- erros críticos tratados;
- conteúdo aprovado;
- acessibilidade e responsividade verificadas quando aplicável;
- integrações testadas quando aplicável;
- backups e rollback considerados quando aplicável;
- critérios de aceite validados;
- pendências conhecidas registradas;
- documentação mínima entregue;
- aceite do cliente registrado.

## Gestão de mudanças

Mudanças devem registrar:

- solicitação;
- solicitante;
- motivo;
- impacto em escopo;
- impacto em prazo;
- impacto em custo;
- riscos;
- decisão;
- aprovador;
- data.

## Fora do escopo

- implantar ferramenta de gestão de projetos;
- contratar software;
- automatizar fluxo;
- alterar contrato;
- definir SLA universal;
- definir preço;
- executar projetos de clientes;
- migrar acessos;
- criar credenciais;
- declarar conformidade técnica, jurídica ou de LGPD.

## Etapas

1. estruturar fluxo operacional;
2. criar template de handoff;
3. criar template de kickoff;
4. criar checklist de entrega;
5. definir critérios de prontidão;
6. definir critérios de aceite;
7. definir gestão de mudanças;
8. revisar com o CEO;
9. testar com projeto simulado ou real;
10. aprovar;
11. mover a task para `done`.

## Critérios de aceitação

- fluxo operacional documentado;
- handoff comercial estruturado;
- kickoff estruturado;
- checklist de entrega criado;
- critérios de prontidão definidos;
- critérios de aceite definidos;
- controle de escopo documentado;
- responsabilidades provisórias explícitas;
- nenhuma ferramenta paga presumida;
- nenhuma implantação afirmada;
- materiais em `review`;
- task em `review`;
- `changes.jsonl` válido;
- nenhum caminho protegido alterado.
