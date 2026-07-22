---
id: task-2026-029
title: Identidade, funções, permissões e acesso de funcionários
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
priority: high
depends_on:
  - task-2026-028
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-029-identidade-funcoes-permissoes-e-acesso-funcionarios.md
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/logs/changes.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/registries/source-manifest.md
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/
  - 04_OUTPUTS/
  - 05_SHARED/
forbidden_paths:
  - 00_SYSTEM/secrets/
  - .git/
---

# Task 2026-029 — Identidade, funções, permissões e acesso de funcionários

## Contexto

A task 028 aprovou a arquitetura conceitual do ecossistema Monvi Brain, Monvi Core Brain e Helpper.

A próxima etapa é definir como pessoas, cargos, agentes, clientes, projetos e permissões serão representados e governados.

Victor e Filipe são founders e CEOs da Monvi. Ambos devem possuir espaços individuais e autoridade executiva máxima, sem eliminar controles de segurança, logs, segregação de secrets e confirmação para ações críticas.

## Objetivo

Definir o modelo conceitual de identidade, funções, permissões, escopos e ciclo de vida de acesso para founders, funcionários, parceiros, clientes e agentes.

## Escopo

### 1. Identidade

Definir:

- ID único;
- nome;
- vínculo;
- função;
- status;
- gestor;
- data de início;
- data de encerramento;
- validade;
- autenticação;
- MFA;
- contato;
- classificação;
- responsável pela aprovação.

### 2. Papéis

Definir pelo menos:

- founder-ceo;
- executive;
- manager;
- employee;
- contractor;
- partner;
- client;
- auditor;
- agent;
- service-account.

### 3. Escopos de acesso

Definir acesso por:

- organização;
- departamento;
- função;
- cliente;
- projeto;
- ambiente;
- ferramenta;
- repositório;
- tipo de ação;
- classificação da informação;
- período de validade.

### 4. Perfis de Victor e Filipe

Definir os dois founders com:

- espaço individual;
- Helpper individual;
- autoridade executiva máxima;
- aprovação de conteúdo canônico;
- gestão de usuários e papéis;
- aprovação de acessos críticos;
- consulta a logs;
- suspensão de agentes e integrações;
- escopo institucional amplo.

Restrições obrigatórias:

- secrets fora do Monvi Brain;
- MFA;
- ações críticas registradas;
- confirmação para exclusões destrutivas;
- justificativa para acesso sensível;
- proibição de compartilhamento de credenciais;
- nenhum agente com autoridade implícita dos founders.

### 5. Estrutura individual

Definir estrutura conceitual para cada pessoa:

```text
people/
└── <person-id>/
    ├── profile.md
    ├── roles.md
    ├── permissions.md
    ├── clients.md
    ├── projects.md
    ├── memory/
    ├── skills/
    └── helpper/
```

A estrutura física final depende da arquitetura de implementação e não deve ser criada em massa nesta task.

### 6. Modelo de autorização

Definir:

- menor privilégio;
- negação por padrão;
- separação de funções;
- permissão explícita;
- herança controlada;
- permissão temporária;
- dupla aprovação quando necessária;
- revogação;
- exceção formal;
- auditoria.

### 7. Matriz de permissões

Criar matriz para:

- leitura;
- criação;
- edição;
- aprovação;
- publicação;
- exclusão;
- execução;
- compartilhamento;
- gestão de usuário;
- gestão de papel;
- acesso a logs;
- acesso a secrets por referência controlada.

### 8. Onboarding

Definir procedimento para:

1. criar identidade;
2. registrar função;
3. atribuir gestor;
4. atribuir clientes e projetos;
5. definir permissões;
6. criar espaço individual;
7. criar Helpper individual;
8. atribuir skills e ferramentas;
9. configurar validade;
10. registrar aprovação;
11. testar acessos;
12. gerar log.

### 9. Mudança de função

Definir procedimento para:

1. revisar papel atual;
2. remover permissões antigas;
3. conceder novas permissões;
4. revisar clientes e projetos;
5. revisar skills e ferramentas;
6. revisar memória acessível;
7. registrar aprovação;
8. testar;
9. gerar log.

### 10. Offboarding

Definir procedimento para:

1. suspender identidade;
2. revogar sessões;
3. remover acessos;
4. desabilitar Helpper;
5. revogar ferramentas e repositórios;
6. transferir projetos;
7. preservar histórico;
8. bloquear memória individual;
9. revisar dados locais;
10. registrar responsável pela transição;
11. gerar log;
12. confirmar encerramento.

Ciclo recomendado:

```text
active
→ suspended
→ offboarding
→ archived
```

A exclusão definitiva depende de política de retenção.

## Entregáveis esperados

1. `00_SYSTEM/architecture/Modelo-identidade-papeis-e-permissoes-Monvi.md`
2. `00_SYSTEM/architecture/Matriz-acesso-por-papel-escopo-e-acao-Monvi.md`
3. `00_SYSTEM/policies/Politica-ciclo-de-vida-de-acesso-Monvi.md`
4. `00_SYSTEM/templates/Template-perfil-usuario-e-Helpper-individual.md`
5. `00_SYSTEM/templates/Checklist-onboarding-alteracao-offboarding.md`
6. `00_SYSTEM/templates/Manual-criacao-alteracao-remocao-usuarios-Helppers.md`

## Critérios de aprovação

A task só pode ser aprovada quando:

- Victor e Filipe estiverem formalizados como founders e CEOs;
- autoridade máxima não significar ausência de controle;
- o modelo de identidade estiver definido;
- os papéis estiverem definidos;
- os escopos estiverem definidos;
- a matriz de permissões estiver definida;
- onboarding estiver definido;
- mudança de função estiver definida;
- offboarding estiver definido;
- retenção e preservação de histórico estiverem definidas;
- Helpper individual estiver vinculado à identidade;
- secrets permanecerem fora do Monvi Brain;
- exceções exigirem aprovação e log;
- o manual operacional estiver pronto para ensinar a criação e remoção de funcionários.

## Fora do escopo

- criar contas reais;
- configurar provedor de identidade;
- conceder permissões reais;
- criar pastas de todos os futuros funcionários;
- integrar Google Workspace;
- integrar GitHub;
- integrar Cloudflare;
- integrar Vercel;
- integrar n8n;
- implementar portal;
- implementar autenticação;
- armazenar secrets;
- comprovar segurança ou conformidade.

## Riscos

- excesso de privilégio;
- conta comprometida;
- acesso residual após desligamento;
- mistura de clientes;
- compartilhamento de credenciais;
- ausência de owner;
- permissões informais;
- exclusão prematura de histórico;
- agente operando com autoridade indevida;
- dependência dos founders para toda decisão.

## Resultado esperado

Um modelo claro, auditável e progressivo para adicionar, alterar, suspender e remover pessoas e seus Helppers no ecossistema Monvi.

## Execução inicial

- data: 2026-07-22;
- seis entregáveis criados;
- Victor e Filipe formalizados como founders e CEOs;
- autoridade máxima com controles;
- identidade, papéis, escopos e matriz de acesso definidos;
- onboarding, mudança de função, suspensão e offboarding definidos;
- manual operacional criado;
- nenhuma conta real criada;
- nenhuma permissão real concedida;
- nenhuma integração implementada;
- todos os documentos permanecem em review.

## Ampliação de autenticação e segurança prática

- data: 2026-07-22;
- decisão: identidade não pode ser inferida pela mensagem;
- identidade efetiva deve vir de sessão autenticada pelo Monvi Core Brain;
- `actor_id`, `session_id` e `request_id` são obrigatórios;
- `executor_id`, `approver_id` e `on_behalf_of` devem ser registrados quando aplicáveis;
- tentativa de personificação deve ser negada e registrada;
- isolamento deve ocorrer antes de carregar contexto;
- leitura não concede exportação;
- edição não concede exclusão;
- ações críticas exigem reautenticação e aprovação proporcional ao risco;
- exclusão deve usar quarentena e retenção;
- exportação deve validar destino, volume, classificação e finalidade;
- a implementação técnica será futura e pertence ao Monvi Core Brain;
- a task permanece em review.
