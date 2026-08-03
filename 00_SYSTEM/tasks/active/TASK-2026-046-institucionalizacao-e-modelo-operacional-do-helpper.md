---
id: task-2026-046
title: Institucionalização e Modelo Operacional do Helpper
type: task
status: review
task_state: active
owner: ceo-monvi
agent: antigravity
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
confidentiality: internal
classification: internal
created_at: "2026-07-31"
updated_at: "2026-07-31"
reviewed_at: null
version: "0.1.0"
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 03_OPERATIONS/decisoes/decision-20260731-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 00_SYSTEM/audits/Execucao-task-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 00_SYSTEM/helpper/
  - AGENTS.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/logs/decisions.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/schemas/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/tasks/done/
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/pessoas/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - apps/core-brain/
  - packages/
  - infrastructure/
tags:
  - helpper
  - governance
  - documentation
  - operating-model
  - task-lifecycle
  - evidence-standard
acceptance_criteria:
  - Criação de 4 documentos operacionais enxutos em `00_SYSTEM/helpper/` (`README.md`, `TASK-LIFECYCLE.md`, `EVIDENCE-STANDARD.md`, `PROMPT-TEMPLATES.md`), sem duplicar normas canônicas existentes. (Atendido localmente — pendente de revisão de diff)
  - Atualização mínima do arquivo `AGENTS.md` na raiz para atuar como guia de entrada inicial e direcionar para `00_SYSTEM/helpper/README.md`. (Atendido localmente — pendente de revisão de diff)
  - Hierarquia normativa em 8 níveis explícita estabelecendo a primazia de `AI-CONTRACT.md`, `PERMISSIONS.md` e `SECURITY.md`. (Atendido localmente — pendente de revisão de diff)
  - Ausência de duplicação normativa relevante entre o guia do Helpper e as fontes canônicas. (Atendido localmente — pendente de revisão de diff)
  - Separação explícita de cinco dimensões de governança (Localização da Task, Estado Operacional, Estado Git, Nível de Evidência e Gate Humano Vigente). (Atendido localmente — pendente de revisão de diff)
  - Definição dos oito níveis de evidência e matriz completa de transições de 14 estados operacionais. (Atendido localmente — pendente de revisão de diff)
  - Critérios de evidência específicos por tipo de tarefa e definição precisa de integração funcional comprovada. (Atendido localmente — pendente de revisão de diff)
  - Catálogo de 21 prompts com trava literal de autorização em cada bloco individual e fluxo obrigatório de revisão de PR. (Atendido localmente — pendente de revisão de diff)
  - Preservação rigorosa de todas as fontes canônicas (`AI-CONTRACT.md`, `PERMISSIONS.md`, `SECURITY.md`) e dos Helppers individuais em `03_OPERATIONS/pessoas/`. (Atendido)
  - Nenhuma alteração em código de software (`apps/core-brain/`), banco de dados, infraestrutura (`infrastructure/`), pacotes (`packages/`) ou dependências. (Atendido)
  - Links Markdown relativos e wikilinks conceituais válidos sem referências quebradas ou inclusão de backlinks nos Helppers individuais nesta task. (Atendido localmente — pendente de revisão de diff)
  - Codificação UTF-8 válida sem caracteres de substituição ou trailing whitespace inválido. (Atendido localmente)
  - Integridade de sintaxe JSONL e unicidade de IDs em `changes.jsonl` e `decisions.jsonl`. (Atendido localmente com `human_review_completed: false`)
  - Revisão humana explícita do conteúdo e diff pelo CEO. (Pendente de aprovação do diff)
  - Relatório final de audit factual baseado na execução real da task. (Atendido localmente — versão pré-commit)
  - Verificação pós-merge na branch `main` sincronizada. (Pendente de merge e verificação)
  - Encerramento formal condicionado ao gate separado `AUTORIZADO ENCERRAMENTO`. (Pendente de encerramento)
blocked_reason: "Esta task autoriza apenas a institucionalização documental e de governança do Helpper. Nenhuma alteração em código de software, banco de dados, infraestrutura ou Helppers individuais é autorizada."
---

# Task 046 — Institucionalização e Modelo Operacional do Helpper

## Natureza e objetivo

Esta task é de natureza **A. Governança** e **B. Documentação**, classificada como uma **iniciativa transversal de governança operacional** relacionada ao [Plano Mestre de Construção](../../roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md).

Esta task propõe documentar e institucionalizar, após aprovação, merge e verificação, cinco dimensões independentes de governança no repositório Monvi Brain. Seu objetivo é formalizar a camada operacional do Helpper através de um mapa central e três manuais complementares enxutos em `00_SYSTEM/helpper/`, atualizar o adaptador `AGENTS.md` na raiz e padronizar o modelo de evidências em oito níveis e catálogo de gates humanos, sem substituir ou duplicar as fontes canônicas ([AI-CONTRACT.md](../../canonical/AI-CONTRACT.md), [PERMISSIONS.md](../../canonical/PERMISSIONS.md), [SECURITY.md](../../canonical/SECURITY.md)).

---

## Relação com a Task 045

- A [TASK-2026-045](../done/TASK-2026-045-correcao-e-validacao-factual-fases-3-e-4.md) atua como precedente técnico de aplicação de evidências factuais nas Fases 3 e 4.
- A Task 045 realizou a correção técnica da trava de produção no `dev-login` e a ampliação da suíte de testes de autenticação/RBAC, mas não institucionalizou o Helpper nem seus manuais operacionais.
- Nenhum conteúdo ou evento da Task 045 será reescrito ou alterado nesta task.
- Esta task propõe transformar os aprendizados identificados na Task 045 em padrões operacionais versionados, sujeitos a revisão, aprovação, merge e verificação.

---

## Hierarquia Documental e Papel do Plano Mestre

Esta task propõe que, após aprovação, merge e verificação, a estrutura documental passe a integrar formalmente a distinção entre autoridade normativa, direção estratégica e autorização operacional:

1. **Decisões Explícitas e Atuais do CEO**: Concedem autorização operacional e instrução direta em cada ciclo;
2. **Fontes Canônicas**:
   - `00_SYSTEM/canonical/AI-CONTRACT.md` (Constituição canônica da IA e proibição de autoaprovação);
   - `00_SYSTEM/canonical/PERMISSIONS.md` (Matriz de permissões e escopos de atuação);
   - `00_SYSTEM/canonical/SECURITY.md` (Políticas de segurança da informação e secrets);
3. **Plano Mestre de Construção** (`00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`): Estabelece a direção estratégica e a sequência de fases do projeto. O Plano Mestre não concede autoridade automática de execução para nenhuma tarefa;
4. **Documentos Arquiteturais e Políticas Vigentes** (`00_SYSTEM/architecture/` e `00_SYSTEM/policies/`);
5. **Manuais e Guias Operacionais do Helpper** (`00_SYSTEM/helpper/`): Complementam o modelo de trabalho, mas não substituem as fontes normativas superiores;
6. **Tarefa Ativa e Instruções Específicas do Ciclo**: Define o escopo delimitado e autorizado no ciclo corrente.

---

## Proposta do Modelo de Governança em 5 Dimensões

Esta task propõe institucionalizar, após aprovação e merge, a separação clara de cinco dimensões de governança:

1. **A. Localização da Task**:
   - `active`: Tarefa em planejamento ou execução (`00_SYSTEM/tasks/active/`);
   - `done`: Tarefa formalmente encerrada (`00_SYSTEM/tasks/done/`).
2. **B. Estado Operacional**:
   - `proposed` -> `scoped` -> `authorized` -> `implementing` -> `validating` -> `review` (persiste durante commit/push/PR) -> `verified` -> `done`.
3. **C. Estado de Integração Git**:
   - `uncommitted` -> `committed` -> `pushed` -> `pull_request_open` -> `merged`.
4. **D. Nível de Evidência**:
   - `planejado` -> `documentado` -> `implementado` -> `testado` -> `executado em runtime` -> `integração funcional comprovada` -> `verificado` -> `encerrado`.
   - *Nota*: "Comprovado" é uma conclusão contextual. Um requisito está comprovado quando atingiu o nível de evidência exigido para sua classificação e critério de aceite.
5. **E. Gate Humano Vigente**:
   - Declaração explícita do gate concedido no momento pelo CEO.

*Nota de Não-Retroatividade*: As tasks anteriores em `00_SYSTEM/tasks/done/` não exigem atualização retroativa de frontmatter.

---

## Classificação dos Níveis de Evidência

Os níveis de evidência serão exigidos proporcionalmente à classificação de cada tarefa:

- **Task Documental / Governança**: Exige níveis `planejado` e `documentado` para a entrega de conteúdo. Para o encerramento formal da task, exige também `merged` (na Dimensão C), `verificado` e `encerrado` via gate. O nível `executado em runtime` de software não é exigido para tarefas exclusivamente documentais;
- **Task de Código / Software**: Exige níveis `implementado`, `testado` (com compilação `typecheck` e suíte de testes de unidade) e `build`;
- **Task de Banco de Dados**: Exige nível `executado em runtime` com execução real em instância de banco quando a persistência for requisito explícito;
- **Task de Integração**: Exige nível `integração funcional comprovada` com evidência real da comunicação entre serviços quando autorizada;
- **Homologação e Produção**: Exigem níveis `verificado` com gates específicos e separados do CEO.

---

## Conteúdo Mínimo dos Quatro Documentos Criados

1. **`00_SYSTEM/helpper/README.md`**: Criado. Índice geral, mapa de navegação, hierarquia normativa em 8 níveis e regras de escalonamento.
2. **`00_SYSTEM/helpper/TASK-LIFECYCLE.md`**: Criado. Especificação das 5 dimensões de governança e matriz completa de transições para os 14 estados.
3. **`00_SYSTEM/helpper/EVIDENCE-STANDARD.md`**: Criado. Detalhamento dos 8 níveis de evidência e diferenciação entre integração funcional e merge Git.
4. **`00_SYSTEM/helpper/PROMPT-TEMPLATES.md`**: Criado. Catálogo de 21 templates de prompts com a trava literal de autorização em cada bloco individual e fluxo obrigatório de revisão de PR (abertura → revisão → correção → aprovação para merge → merge).

---

## Governança de Decisão, Audit e Logs

- **Decisão Formal**: O arquivo `decision-20260731-institucionalizacao-e-modelo-operacional-do-helpper.md` foi aprovado formalmente com `status: approved` (gate `APROVADA DECISÃO DA TASK 046 — REGISTRO CONTROLADO`).
- **Logs de Governança**: Os registros de criação, aprovação da decisão e implementação local foram anotados em `changes.jsonl` e `decisions.jsonl` (linha 156 atualizada para `human_review_completed: false`).
- **Audit Final**: O relatório `Execucao-task-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md` foi criado em `00_SYSTEM/audits/` como versão pré-commit.

---

## Plano Factual de Rollback

O rollback não está pré-autorizado. Qualquer descarte de alterações exigirá autorização humana específica.

Antes de qualquer descarte, deverá ser apresentado o `git status --short`, `git diff` e a lista exata de arquivos afetados.

Se for autorizado o descarte:
1. **Restaurar Modificados**: Executar `git restore AGENTS.md 00_SYSTEM/logs/changes.jsonl 00_SYSTEM/logs/decisions.jsonl`;
2. **Remover Criados**: Remover individualmente os arquivos específicos criados para a Task 046;
3. **Retornar Branch**: Retornar para a `main` e remover a branch local `task/2026-046-institucionalizacao-e-modelo-operacional-do-helpper`;
4. **Proibição Estrita**: `git reset --hard` e `git clean` permanecem estritamente proibidos sem autorização humana explícita.
