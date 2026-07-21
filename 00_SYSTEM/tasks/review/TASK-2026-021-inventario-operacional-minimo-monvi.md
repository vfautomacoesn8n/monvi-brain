---
id: task-2026-021
title: Inventário operacional mínimo da Monvi
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
  - 00_SYSTEM/tasks/review/TASK-2026-021-inventario-operacional-minimo-monvi.md
  - 00_SYSTEM/tasks/done/TASK-2026-021-inventario-operacional-minimo-monvi.md
  - 00_SYSTEM/audits/Inventario-operacional-minimo-Monvi.md
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

# Task 2026-021 — Inventário operacional mínimo da Monvi

## Contexto

A auditoria de prontidão operacional concluiu que a governança documental está pronta, mas a prontidão operacional ainda é parcial.

A primeira prioridade aprovada para os próximos 30 dias é criar um inventário operacional mínimo da Monvi, sem presumir que contas, ferramentas, acessos, controles ou contratos estejam ativos.

## Objetivo

Produzir um inventário operacional verificável que permita ao CEO identificar:

- quais contas e ferramentas existem;
- quem possui acesso;
- quem é responsável por cada ativo;
- quais ativos são críticos;
- quais dependências e riscos existem;
- quais informações ainda precisam ser confirmadas;
- quais ações devem ser priorizadas.

## Entregável principal

Criar:

`00_SYSTEM/audits/Inventario-operacional-minimo-Monvi.md`

O documento deve permanecer em `review` até validação humana.

## Escopo

O inventário deve cobrir, no mínimo:

### Identidade e comunicação

- domínio;
- e-mails corporativos;
- Google Workspace;
- WhatsApp Business;
- canais oficiais de contato;
- redes sociais institucionais.

### Desenvolvimento e infraestrutura

- GitHub;
- Vercel;
- Cloudflare;
- hospedagens;
- domínios e DNS;
- bancos de dados;
- ambientes de produção e homologação;
- chaves, tokens e segredos, sem registrar valores sensíveis.

### Produto, design e operação

- Figma;
- Nuvemshop;
- n8n;
- Make, quando aplicável;
- OpenAI API;
- ferramentas de CRM;
- planilhas operacionais;
- armazenamento de arquivos;
- ferramentas de atendimento e suporte.

### Marketing e métricas

- Google Analytics;
- Meta Business Manager;
- Meta Ads;
- pixels, tags e eventos;
- ferramentas de e-mail;
- painéis e relatórios.

### Financeiro e assinaturas

- fornecedor;
- plano;
- moeda;
- custo;
- frequência de cobrança;
- forma de pagamento;
- vencimento;
- renovação;
- responsável financeiro;
- regra de cancelamento.

## Campos mínimos por item

Para cada conta, ferramenta ou ativo, registrar:

- nome;
- categoria;
- finalidade;
- status de confirmação;
- URL ou identificador não sensível;
- proprietário da conta;
- responsáveis administrativos;
- responsável operacional;
- responsável financeiro;
- criticidade;
- autenticação multifator;
- quantidade mínima de administradores;
- método de recuperação;
- plano ou contratação;
- custo conhecido;
- frequência de cobrança;
- data de renovação;
- integrações;
- dependências;
- dados tratados;
- riscos;
- pendências;
- próxima ação;
- evidência ou fonte;
- data da última verificação.

## Regras

- Não registrar senhas, tokens, chaves privadas, códigos de recuperação ou segredos.
- Não presumir que uma conta existe.
- Usar `não confirmado` quando não houver evidência.
- Diferenciar fato confirmado, informação declarada e hipótese.
- Não afirmar conformidade jurídica, de LGPD ou de segurança.
- Não recomendar cancelamento ou compra sem análise de dependência.
- Não editar arquivos canônicos, Wiki, templates, RAW ou registros de ingestão.
- Não criar integrações, contas, usuários ou acessos durante esta task.
- Não fazer commit ou push sem autorização humana.

## Classificação sugerida

Cada item deve usar um destes estados:

- confirmado;
- declarado, sem evidência;
- não confirmado;
- não aplicável;
- descontinuado.

A criticidade deve usar:

- crítica;
- alta;
- média;
- baixa.

## Etapas

1. criar a estrutura do inventário;
2. listar ativos institucionais conhecidos sem inventar dados;
3. marcar campos sem evidência como `não confirmado`;
4. organizar pendências por criticidade;
5. identificar riscos imediatos;
6. propor um roteiro de verificação;
7. apresentar o documento ao CEO;
8. incorporar decisões humanas;
9. mover a task para `done` somente após aprovação.

## Critérios de aceitação

- inventário criado no path definido;
- nenhuma credencial sensível registrada;
- ferramentas conhecidas listadas sem presumir contratação;
- campos desconhecidos explicitamente marcados;
- responsáveis provisórios diferenciados de responsáveis confirmados;
- riscos e dependências visíveis;
- próximos passos priorizados;
- relatório em `review`;
- task mantida em `review` até aprovação;
- `changes.jsonl` válido;
- nenhum caminho protegido alterado.

## Fora do escopo

- implantação do sistema comercial;
- criação de painel de métricas;
- configuração de contas;
- migração de acessos;
- contratação ou cancelamento de ferramentas;
- revisão jurídica;
- adequação à LGPD;
- auditoria técnica de segurança;
- registro de segredos ou credenciais.
