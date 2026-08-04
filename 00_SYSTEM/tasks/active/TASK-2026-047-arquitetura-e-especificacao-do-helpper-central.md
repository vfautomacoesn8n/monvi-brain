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
updated_at: "2026-08-03"
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
related:
  - 00_SYSTEM/tasks/done/TASK-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
aliases:
  - Helpper Central
  - arquitetura do Helpper Central
tags: [helpper, arquitetura, especificacao, operacao, governanca, fase-5-referencia]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-047-arquitetura-e-especificacao-do-helpper-central.md
  - 00_SYSTEM/logs/changes.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/helpper/
  - 00_SYSTEM/workflows/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 03_OPERATIONS/pessoas/
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

- [ ] Papel, limites e responsabilidades do Helpper Central definidos.
- [ ] Fluxo operacional ponta a ponta e hierarquia de contexto documentados.
- [ ] Isolamento entre clientes, memória conceitual e dados sensíveis especificados.
- [ ] Tasks, gates, contrato com Codex, evidências e erros definidos.
- [ ] Interface do MVP recomendada com justificativa.
- [ ] Arquitetura proposta, backlog priorizado e critérios da futura Task 048 definidos.
- [ ] Pré-requisitos para futura Fase 5 identificados sem iniciar a fase.
- [ ] Nenhuma implementação técnica criada.
- [ ] Conteúdo revisado e aprovado pelo CEO.

## Validações obrigatórias

- Validar template, frontmatter, ID, título, estado `draft`/`active`, revisão pendente e exclusividade entre caminhos permitidos, somente leitura e proibidos.
- Validar UTF-8, ausência de U+FFFD, trailing whitespace, newline final, links relativos, destinos existentes e ausência de URIs locais de arquivo ou caminhos absolutos locais.
- Validar JSONL e unicidade de IDs quando o log for alterado.
- Executar `git diff --check`, revisar `git status --short`, `git diff --stat`, `git diff --name-status` e diff completo com staging vazio.

## Riscos e gates humanos

Riscos: escopo implícito, início indevido da Fase 5, mistura de contexto de clientes, uso indevido de dados sensíveis, escolha tecnológica prematura e confusão entre especificação e implementação.

Gate vigente: `AUTORIZADA CRIAÇÃO DA TASK 047`. Este gate cria somente esta task e seu evento de abertura. O próximo gate é a aprovação humana do conteúdo e diff desta criação; não autoriza staging, commit, push, Pull Request, merge, implementação ou a próxima task.

## Revisão e entrega

Apresentar somente o diff documental, validações, riscos e evidências desta criação. Parar antes de staging e commit.
