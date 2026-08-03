---
id: decision-20260731-institucionalizacao-e-modelo-operacional-do-helpper
title: Decisão — Institucionalização e Modelo Operacional do Helpper
type: decision
status: approved
decision_state: approved
owner: ceo-monvi
reviewer: ceo-monvi
confidentiality: internal
classification: internal
created_at: "2026-07-31"
updated_at: "2026-07-31"
reviewed_at: "2026-07-31T14:46:00-03:00"
decided_at: "2026-07-31T14:46:00-03:00"
approved_at: "2026-07-31T14:46:00-03:00"
task_id: task-2026-046
allowed_paths:
  - 03_OPERATIONS/decisoes/decision-20260731-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 00_SYSTEM/tasks/active/TASK-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md
  - 00_SYSTEM/helpper/
  - AGENTS.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/logs/decisions.jsonl
tags:
  - decision
  - helpper
  - governance
  - operating-model
  - evidence-standard
---

# Decisão — Institucionalização e Modelo Operacional do Helpper

## Contexto e Problema

O Helpper atua como assistente estratégico, operacional e de governança do ecossistema Monvi. Suas diretrizes já estão respaldadas por documentos canônicos, arquiteturas e políticas existentes. Contudo, é necessário consolidar a camada operacional de navegação, ciclo de vida de tarefas, oito níveis de evidência e catálogo de prompts em guias enxutos para os assistentes de IA, sem criar normas concorrentes com as fontes canônicas.

---

## Papel do Plano Mestre e Relação com a Task 045

- **Plano Mestre de Construção**: O [Plano Mestre](../../00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md) estabelece a direção estratégica e a sequência de desenvolvimento do repositório. Ele não concede autorização automática de execução para tarefas. Esta decisão refere-se a uma iniciativa transversal de governança operacional e não altera nem cria nova fase formal no roadmap.
- **Relação com a Task 045**: A [TASK-2026-045](../../00_SYSTEM/tasks/done/TASK-2026-045-correcao-e-validacao-factual-fases-3-e-4.md) atua como precedente técnico na aplicação de evidências factuais. Esta proposta não institucionalizou o Helpper nem reescreverá o histórico da Task 045; seus aprendizados são utilizados como referência prática de governança.

---

## Alternativas Consideradas

1. **Criar a pasta `00_SYSTEM/helpper/` com 11 documentos novos**: Rejeitada por gerar duplicidade normativa e fontes concorrentes com os documentos canônicos.
2. **Atualizar apenas documentos canônicos existentes**: Rejeitada por poluir arquivos canônicos com guias operacionais de suporte.
3. **Estrutura Híbrida Mínima (Opção D — Escolhida)**: Opção aprovada. Mantém os documentos canônicos como fontes superiores e prevê a criação de 4 guias operacionais enxutos em `00_SYSTEM/helpper/` mais a atualização do `AGENTS.md`.

---

## Decisão Aprovada

Esta decisão foi **APROVADA pelo CEO da Monvi** mediante o gate humano `APROVADA DECISÃO DA TASK 046 — REGISTRO CONTROLADO`.

Com este ato formal, fica estabelecido que:
1. **Preservação das Fontes Canônicas**: [AI-CONTRACT.md](../../00_SYSTEM/canonical/AI-CONTRACT.md), [PERMISSIONS.md](../../00_SYSTEM/canonical/PERMISSIONS.md) e [SECURITY.md](../../00_SYSTEM/canonical/SECURITY.md) continuam sendo as fontes canônicas do repositório.
2. **Preservação dos Helppers Individuais**: Todos os arquivos de Helpper dos CEOs em `03_OPERATIONS/pessoas/` permanecem intocados.
3. **Estrutura Operacional Aprovada para Futura Criacão (`00_SYSTEM/helpper/`)**:
   - `README.md`: Índice central e mapa de navegação vinculando as fontes canônicas aos complementos;
   - `TASK-LIFECYCLE.md`: Especificação das cinco dimensões de governança e transições de tarefas;
   - `EVIDENCE-STANDARD.md`: Padrão de oito níveis de evidência e matriz por tipo de tarefa;
   - `PROMPT-TEMPLATES.md`: Catálogo de templates de prompts vinculados aos gates humanos.
4. **Atualização do Adaptador da Raiz**: Aprovada a atualização mínima do adaptador `AGENTS.md` na raiz do repositório.

---

## Regra Obrigatória dos Templates

Cada template de prompt criado no âmbito da [TASK-2026-046](../../00_SYSTEM/tasks/active/TASK-2026-046-institucionalizacao-e-modelo-operacional-do-helpper.md) deverá conter obrigatoriamente a declaração literal:

> *"Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa."*

---

## Fora de Escopo

Esta aprovação de decisão **não autoriza**:
- Código de software, alterações em banco de dados, infraestrutura ou dependências;
- Autenticação, autorização, integrações externas, homologação, produção ou deploy;
- Modificação dos Helppers individuais em `03_OPERATIONS/pessoas/`;
- Substituição dos documentos canônicos ou alteração constitucional;
- Execução automática de gates sem chancela humana.

---

## Impacto

- Criação planejada de no máximo quatro documentos operacionais novos em `00_SYSTEM/helpper/`;
- Atualização mínima planejada do adaptador `AGENTS.md` na raiz;
- Manutenção integral dos documentos canônicos como fontes normativas;
- Ausência de migração retroativa automática de tarefas antigas em `00_SYSTEM/tasks/done/`;
- Ausência de alteração de autoridade dos Helppers individuais;
- Aumento controlado da documentação operacional com necessidade de manutenção futura de templates e links.

---

## Riscos e Mitigações

- **Risco de Duplicidade Normativa**: Mitigado pela hierarquia explícita e pelo escopo híbrido mínimo.
- **Risco de Divergência entre Templates e Regras Canônicas**: Mitigado pela regra obrigatória de dependência de gate explícito em cada template.
- **Risco de Interpretação de Templates como Autorização Implícita**: Mitigado pela inclusão literal da trava em todos os prompts.
- **Risco de Links Quebrados**: Mitigado por validações programáticas de links relativos.
- **Risco de Falsa Percepção de Agente Executável**: Mitigado pela especificação de que o Helpper é uma camada de governança e documentação.

---

## Reversibilidade

- Os documentos novos em `00_SYSTEM/helpper/` poderão ser removidos via tarefa de governança específica autorizada;
- `AGENTS.md` poderá ser restaurado ao seu estado prévio;
- As fontes canônicas não serão modificadas por esta decisão;
- Nenhum rollback está pré-autorizado. Qualquer descarte exige autorização humana prévia. `git reset --hard` e `git clean` permanecem proibidos sem instrução explícita;
- Reversões pós-merge deverão preservar o histórico Git por commit ou PR corretivo.

---

## Autoridade Necessária

- A aprovação desta decisão foi concedida exclusivamente pelo CEO da Monvi;
- A aprovação da decisão **não autoriza automaticamente a implementação documental**;
- A criação dos arquivos em `00_SYSTEM/helpper/`, commit, push, PR, merge, verificação e encerramento permanecem como gates separados e obrigatórios.

---

## Condições de Validade

- Escopo híbrido mínimo com no máximo 4 documentos novos em `00_SYSTEM/helpper/`;
- Atualização mínima do adaptador `AGENTS.md`;
- Fontes canônicas e Helppers individuais integralmente preservados;
- Ausência de alterações técnicas em código, banco, infraestrutura ou dependências;
- Hierarquia normativa explícita, oito níveis de evidência e cinco dimensões de governança;
- Templates sem autoridade implícita e links portáteis validados;
- Gates separados mantidos para implementação, commit, push, PR, merge, verificação e encerramento.

---

## Próximo Gate

Esta decisão foi formalmente aprovada. A implementação documental dos 4 guias e a atualização de `AGENTS.md` permanecem pendentes e dependem da autorização do gate:

`AUTORIZADA IMPLEMENTAÇÃO DOCUMENTAL DA TASK 046`
