---
id: task-2026-047
type: task
title: "Arquitetura e especificação do Helpper Central"
status: draft
task_state: active
owner: ceo-monvi
agent: codex
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-03"
updated_at: "2026-08-05"
reviewed_at: null
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/canonical/AI-CONTRACT.md
  - 00_SYSTEM/canonical/KNOWLEDGE-MODEL.md
  - 00_SYSTEM/canonical/PERMISSIONS.md
  - 00_SYSTEM/canonical/SECURITY.md
  - 00_SYSTEM/helpper/README.md
  - 00_SYSTEM/helpper/TASK-LIFECYCLE.md
  - 00_SYSTEM/helpper/EVIDENCE-STANDARD.md
  - 00_SYSTEM/helpper/PROMPT-TEMPLATES.md
  - 00_SYSTEM/architecture/Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md
  - 00_SYSTEM/architecture/Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md
  - 00_SYSTEM/architecture/Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md
  - 00_SYSTEM/architecture/Contrato-contexto-delegacao-reporte-Helpper.md
  - 00_SYSTEM/architecture/Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md
  - 00_SYSTEM/architecture/Matriz-fronteiras-responsabilidades-ecossistema-Monvi.md
  - 00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md
  - 00_SYSTEM/policies/Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md
  - 00_SYSTEM/policies/Politica-memoria-e-promocao-de-conhecimento-Helpper.md
  - 00_SYSTEM/policies/Politica-seguranca-documental-e-isolamento-Monvi-Brain.md
  - 00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md
  - 00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
related:
  - 00_SYSTEM/tasks/done/TASK-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/architecture/Fluxo-operacional-e-papel-Helpper-Central.md
  - 00_SYSTEM/architecture/Contrato-executor-controlado-Helpper-Central.md
  - 00_SYSTEM/architecture/Recomendacao-interface-e-arquitetura-tecnica-Helpper-Central-MVP.md
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
aliases:
  - Helpper Central
  - arquitetura do Helpper Central
tags: [helpper, arquitetura, especificacao, operacao, governanca, fase-5-referencia]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-047-arquitetura-e-especificacao-do-helpper-central.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/architecture/Fluxo-operacional-e-papel-Helpper-Central.md
  - 00_SYSTEM/architecture/Contrato-executor-controlado-Helpper-Central.md
  - 00_SYSTEM/architecture/Recomendacao-interface-e-arquitetura-tecnica-Helpper-Central-MVP.md
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/helpper/
  - 00_SYSTEM/workflows/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 03_OPERATIONS/pessoas/
  - 00_SYSTEM/architecture/Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md
  - 00_SYSTEM/architecture/Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md
  - 00_SYSTEM/architecture/Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md
  - 00_SYSTEM/architecture/Contrato-contexto-delegacao-reporte-Helpper.md
  - 00_SYSTEM/architecture/Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md
  - 00_SYSTEM/architecture/Matriz-fronteiras-responsabilidades-ecossistema-Monvi.md
  - 00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md
  - 00_SYSTEM/policies/Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md
  - 00_SYSTEM/policies/Politica-memoria-e-promocao-de-conhecimento-Helpper.md
  - 00_SYSTEM/policies/Politica-seguranca-documental-e-isolamento-Monvi-Brain.md
  - 00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md
  - 00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
forbidden_paths:
  - .git/
  - apps/core-brain/
  - packages/
  - infrastructure/
  - 01_RAW/
  - 02_WIKI/
  - 05_SHARED/
  - 03_OPERATIONS/decisoes/
requires_review: true
acceptance_criteria:
  - Papel, limites, responsabilidades e situações de decisão humana do Helpper Central documentados.
  - Fluxo operacional ponta a ponta, hierarquia de contexto e tratamento de conflitos documentados.
  - Modelo de contexto, isolamento entre clientes, memória conceitual e tratamento de dados sensíveis especificados sem implementação.
  - Modelo de tasks, gates humanos, contrato com Codex, evidências e tratamento de erros definidos.
  - Recomendação justificada da interface do MVP, arquitetura proposta e backlog priorizado documentados.
  - Pré-requisitos para a futura Fase 5 e critérios para futura Task 048 definidos sem iniciar qualquer uma delas.
  - Nenhuma implementação técnica, automação, agente, interface, integração, banco, API ou dependência criada.
  - Conteúdo revisado e aprovado pelo CEO antes de qualquer etapa de implementação futura.
blocked_reason: "Esta task autoriza exclusivamente especificação, arquitetura e desenho operacional. Não autoriza implementação do Helpper Central, início da Fase 5, criação da Task 048, código, automações, agentes, interfaces, integrações, banco de dados, APIs ou dependências."
---

# Task 047 — Arquitetura e especificação do Helpper Central

## Contexto

A Task 046 institucionalizou a camada operacional do Helpper e foi integrada e verificada em `main`. Esta Task 047 define, de forma documental, a arquitetura funcional, operacional e técnica proposta do Helpper Central da Monvi. O Plano Mestre trata a Fase 5 — Operação de clientes e projetos — como referência estratégica; esta task não inicia a Fase 5 nem cria módulos de clientes ou projetos.

## Objetivo

Definir a especificação do Helpper Central como camada responsável por receber demandas do CEO, identificar cliente, projeto, contexto e prioridade, consultar fontes corretas, propor diagnóstico e plano, controlar tasks e gates, orientar executores como Codex e registrar decisões, evidências, riscos e pendências sem misturar contextos confidenciais.

## Escopo autorizado da futura especificação

A execução documental posterior desta task deverá definir, sem implementar:

1. **Papel do Helpper Central**: responsabilidades, limites, ações permitidas e proibidas, relação com CEO, Codex, executores e Helppers especializados, e situações de decisão humana.
2. **Fluxo operacional**: entrada da demanda, identificação de contexto, consulta às fontes, diagnóstico, classificação, plano, gate humano, criação da task, prompt de execução, acompanhamento de gates, evidências, encerramento e autorização explícita da próxima etapa.
3. **Hierarquia de contexto**: precedência entre instruções do CEO, regras institucionais, fontes canônicas, contexto do cliente e projeto, task ativa, decisões aprovadas, histórico/logs e hipóteses/recomendações; conflitos exigem parada e escalonamento humano.
4. **Isolamento entre clientes**: identificação obrigatória do cliente, separação de contexto, chats exclusivos, proibição de reutilização de informação confidencial, comportamento seguro quando o cliente não estiver identificado e tratamento de dados sensíveis.
5. **Modelo de tasks e gates**: proposta de tasks válidas, validação de branch/base/caminhos, gates literais, invalidação quando o HEAD mudar e separação de criação, execução, commit, push, PR, revisão, merge, verificação e encerramento.
6. **Relação com executores**: contrato de prompts para Codex, informações obrigatórias, prevenção de escopo implícito, tratamento de divergências, validação de retornos, rejeição/correção e evidências.
7. **Memória e fontes**: memória institucional, por cliente, projeto e task; distinção entre fatos, decisões, hipóteses, recomendações e dados temporários, sem banco ou mecanismo de memória nesta task.
8. **Tratamento de erros**: falta de informação, conflito de instruções, caminho inexistente, branch divergente, staging contaminado, falha de validação, escopo excedido, resultado ambíguo e tentativa de iniciar etapa sem autorização.
9. **Interface do MVP**: avaliação e recomendação, sem implementação, entre chat, CLI, aplicação web e integração híbrida segundo velocidade, supervisão humana, rastreabilidade, custo, manutenção, segurança e facilidade de uso pelo CEO.
10. **Arquitetura do MVP**: componentes, entradas/saídas, fontes, executor, validação, evidência, persistência conceitual, observabilidade, erros, segurança e privacidade; tecnologias deverão ser avaliadas por critérios, não por preferência.

## Entregáveis futuros previstos

1. Documento de arquitetura do Helpper Central.
2. Especificação funcional do MVP.
3. Fluxo operacional ponta a ponta.
4. Matriz de responsabilidades, fontes e precedência.
5. Modelo de contexto e isolamento entre clientes.
6. Catálogo de gates e contrato de interação com Codex.
7. Especificação de tratamento de erros.
8. Recomendação de interface e arquitetura técnica proposta.
9. Backlog priorizado de implementação e critérios para futura Task 048.

Estes entregáveis não são criados por este gate. Seus caminhos e qualquer autorização de escrita dependem de gate humano posterior.

## Estrutura de implementação decidida (ajuste de escopo em 2026-08-04)

Decisão do CEO no gate `AUTORIZADA CONTINUIDADE DO AJUSTE DE ESCOPO DOCUMENTAL DA TASK 047 COM PATHS NOMINAIS`: a implementação documental futura desta task segue estrutura modular restrita aos quatro gaps reais identificados no planejamento, evitando duplicar conteúdo já aprovado em `00_SYSTEM/architecture/` e `00_SYSTEM/policies/`.

### Documentos novos autorizados para criação futura

1. `00_SYSTEM/architecture/Fluxo-operacional-e-papel-Helpper-Central.md` — cobre integralmente os itens 2 (fluxo operacional ponta a ponta) e 8 (tratamento de erros) do escopo; desenvolve a aplicação específica ao Helpper Central dos itens 3 (hierarquia de contexto) e 4 (isolamento entre clientes), sem recriar as regras gerais já definidas nas fontes referenciadas; e complementa o item 1 (papel do Helpper Central) onde as fontes existentes não cobrem o caso específico do Central.
2. `00_SYSTEM/architecture/Contrato-executor-controlado-Helpper-Central.md` — cobre o item 6 (relação com executores) sob o conceito genérico de `executor controlado`; referencia o item 7 (memória e fontes) apenas conceitualmente.
3. `00_SYSTEM/architecture/Recomendacao-interface-e-arquitetura-tecnica-Helpper-Central-MVP.md` — cobre os itens 9 (interface do MVP) e 10 (arquitetura do MVP).
4. `00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md` — cobre o backlog priorizado de implementação e os critérios para a futura Task 048.

Estes quatro documentos não são criados por este gate. Sua escrita depende de gate humano próprio, posterior a este ajuste de escopo.

### Itens do escopo atendidos por referência, sem novo documento

- Item 1 (papel do Helpper Central): `Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md`, `Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md`.
- Item 3 (hierarquia de contexto, regra geral): `Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md`.
- Item 4 (isolamento entre clientes, regra geral): `Politica-seguranca-documental-e-isolamento-Monvi-Brain.md`.
- Item 5 (modelo de tasks e gates): `00_SYSTEM/helpper/TASK-LIFECYCLE.md` e `00_SYSTEM/helpper/PROMPT-TEMPLATES.md` — já institucionalizados pela Task 046; não serão recriados.
- Item 7 (memória e fontes, conceitual): `Politica-memoria-e-promocao-de-conhecimento-Helpper.md`.
- Matriz de responsabilidades (apoio aos itens 1 e 3): `Matriz-fronteiras-responsabilidades-ecossistema-Monvi.md`.

Os itens 3 e 4 reutilizam as regras gerais já existentes e recebem no Documento 1 apenas sua aplicação específica ao fluxo conversacional e operacional do Helpper Central.

Cinco dos dez itens do escopo autorizado — itens 1, 3, 4, 5 e 7 — são atendidos majoritariamente por referência a fontes existentes, com complementação específica nos novos documentos quando prevista nesta seção.

### Independência de fornecedor

O contrato de execução (documento 2 acima) adota o conceito genérico de `executor controlado`. Claude no Cursor, Codex e outros executores são tratados como implementações ou adaptadores específicos desse contrato; nenhum fornecedor constitui regra estrutural exclusiva da arquitetura.

### Segurança e privacidade

A fundamentação de segurança e privacidade dos quatro documentos futuros usa exclusivamente `00_SYSTEM/canonical/SECURITY.md` e as políticas nominais listadas em `read_only_paths`. `02_WIKI/` permanece integralmente em `forbidden_paths` e não é referenciado; `02_WIKI/seguranca/` não é fonte autorizada.

### Estado mantido após este ajuste

Este ajuste de escopo não inicia a implementação documental, não cria os quatro documentos, não altera `changes.jsonl`, não cria a Task 048 e não inicia a Fase 5. A task permanece `status: draft`, `task_state: active`, `requires_review: true`.

## Implementação documental concluída (2026-08-05)

Gate `AUTORIZADA CRIAÇÃO DOS DOCUMENTOS DA TASK 047`: os quatro documentos autorizados na seção anterior foram criados na branch `task/2026-047-documentos-helpper-central`, a partir do commit base `f9714e20d7ba1c4234257ed59e083cd5dd4bb596`:

1. `00_SYSTEM/architecture/Fluxo-operacional-e-papel-Helpper-Central.md`
2. `00_SYSTEM/architecture/Contrato-executor-controlado-Helpper-Central.md`
3. `00_SYSTEM/architecture/Recomendacao-interface-e-arquitetura-tecnica-Helpper-Central-MVP.md`
4. `00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md`

Gate `AUTORIZADA REVISÃO LOCAL DOS DOCUMENTOS DA TASK 047`: revisão local concluída sem achados, com resultado `DOCUMENTOS DA TASK 047 APROVADOS PARA ATUALIZAÇÃO DA TASK E LOG`.

Estado preciso desta etapa:

- criação documental concluída;
- revisão local concluída sem achados;
- integração no repositório ainda pendente (staging, commit, push, abertura de PR);
- revisão de PR, merge, verificação pós-merge e encerramento formal da task ainda pendentes;
- Task 048 continua não autorizada; Fase 5 continua não iniciada; nenhuma implementação técnica foi criada.

## Relação com a Fase 5

A Fase 5 é apenas referência estratégica. Esta task deve identificar como o Helpper Central poderá apoiar futura operação de clientes e projetos e quais pré-requisitos serão necessários. Ela não inicia a Fase 5, não cria módulos de clientes/projetos e não autoriza implementação técnica.

## Instruções e restrições

- O Helpper Central deverá executar somente tasks válidas e gates explícitos.
- Nenhuma aprovação concede automaticamente o gate seguinte; novo HEAD invalida aprovação relacionada ao conteúdo anterior.
- Contexto de cliente e dados sensíveis não podem ser reutilizados fora de seu contexto autorizado.
- Fontes canônicas prevalecem sobre guias operacionais, histórico, hipóteses e recomendações.
- Implementação de código, automações, agentes, interfaces, integrações, OpenAI API, n8n, banco, schema, dashboard, CRM, WhatsApp e dependências permanece proibida.
- Não criar Task 048 nem declarar iniciada a Fase 5.

## Critérios de aceite

- [x] Papel, limites e responsabilidades do Helpper Central definidos. (Documento 1, criado e revisado localmente sem achados)
- [x] Fluxo operacional ponta a ponta e hierarquia de contexto documentados. (Documento 1, seções 2 e 3)
- [x] Isolamento entre clientes, memória conceitual e dados sensíveis especificados. (Documento 1, seção 4; Documento 2, seção 5)
- [x] Tasks, gates, contrato com Codex, evidências e erros definidos. (Documento 1, seção 5; Documento 2, integral)
- [x] Interface do MVP recomendada com justificativa. (Documento 3, seções 1 e 2)
- [x] Arquitetura proposta, backlog priorizado e critérios da futura Task 048 definidos. (Documento 3, seções 3 e 4; Documento 4, integral)
- [x] Pré-requisitos para futura Fase 5 identificados sem iniciar a fase. (Documento 4, seções 3 a 5)
- [x] Nenhuma implementação técnica criada. (Confirmado por validação local em cada gate)
- [ ] Conteúdo revisado e aprovado pelo CEO. (Revisão local substantiva concluída pelo executor e fluxo autorizado pelo CEO com base no relatório apresentado; revisão direta e aprovação final do conteúdo integral pelo CEO permanecem pendentes.)

## Validações obrigatórias

- Validar template, frontmatter, ID, título, estado `draft`/`active`, revisão pendente e exclusividade entre caminhos permitidos, somente leitura e proibidos.
- Validar UTF-8, ausência de U+FFFD, trailing whitespace, newline final, links relativos, destinos existentes e ausência de URIs locais de arquivo ou caminhos absolutos locais.
- Validar JSONL e unicidade de IDs quando o log for alterado.
- Executar `git diff --check`, revisar `git status --short`, `git diff --stat`, `git diff --name-status` e diff completo com staging vazio.

## Riscos e gates humanos

Riscos: escopo implícito, início indevido da Fase 5, mistura de contexto de clientes, uso indevido de dados sensíveis, escolha tecnológica prematura e confusão entre especificação e implementação.

Gate vigente: `AUTORIZADA ATUALIZAÇÃO DA TASK 047 E DO LOG DE IMPLEMENTAÇÃO DOCUMENTAL`. Este gate atualiza exclusivamente esta task e `00_SYSTEM/logs/changes.jsonl`, para registrar a conclusão da criação e da revisão local dos quatro documentos. Não autoriza staging, commit, push, Pull Request, merge, Task 048 ou início da Fase 5.

Histórico de gates desta task: `AUTORIZADA CRIAÇÃO DA TASK 047` (criação; commit `0a6bf68`; integrado em `main` no commit `224cf77` via PR #23) → `AUTORIZADO AJUSTE DE ESCOPO DOCUMENTAL DA TASK 047` (planejamento e identificação do conflito de paths) → `AUTORIZADA CONTINUIDADE DO AJUSTE DE ESCOPO DOCUMENTAL DA TASK 047 COM PATHS NOMINAIS` (ajuste de escopo; commit `565a7cc`; integrado em `main` no commit `f9714e2` via PR #24) → `AUTORIZADA CRIAÇÃO DOS DOCUMENTOS DA TASK 047` (criação local dos quatro documentos, ainda não commitados) → `AUTORIZADA REVISÃO LOCAL DOS DOCUMENTOS DA TASK 047` (revisão local aprovada sem achados) → `AUTORIZADA ATUALIZAÇÃO DA TASK 047 E DO LOG DE IMPLEMENTAÇÃO DOCUMENTAL` (este gate).

## Revisão e entrega

Apresentar somente o diff documental, validações, riscos e evidências desta criação. Parar antes de staging e commit.
