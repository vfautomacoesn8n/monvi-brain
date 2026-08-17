---
id: task-2026-086
type: task
title: "Fechamento formal da decisão de modelo de multi-organização — single-tenant, permanentemente"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-17"
updated_at: "2026-08-17"
reviewed_at: "2026-08-17T12:00:00-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-085-fase10-integracao-saida-github.md
related: []
aliases:
  - Fechamento da decisão de multi-organização
  - Single-tenant permanente
tags: [governanca, decisao-arquitetural, multi-organizacao, single-tenant, documentacao]
allowed_paths:
  - 00_SYSTEM/tasks/done/TASK-2026-086-fechamento-decisao-multi-organizacao.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - apps/core-brain/src/
  - apps/core-brain/tests/
  - apps/core-brain/drizzle/
forbidden_paths:
  - .git/
  - packages/
  - infrastructure/
  - 01_RAW/
  - 02_WIKI/
  - 05_SHARED/
  - 03_OPERATIONS/decisoes/
  - apps/core-brain/node_modules/
  - apps/core-brain/dist/
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
requires_review: false
acceptance_criteria:
  - "00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md seção 17 atualizada: modelo de multi-organização removido da lista de Decisões em aberto e registrado numa nova subseção Decisões já tomadas, com data, decisão e justificativa."
  - Seção 19 (Estado atual) do Plano Mestre atualizada em todos os pontos que referenciavam a decisão como pendente (bullet da Fase 5, lista Ainda não iniciado, Próximo gate recomendado).
  - apps/core-brain/README.md atualizado nos pontos que referenciavam a decisão como pendente (título/intro, bullet de escopo da Fase 5, parágrafo-resumo).
  - Nenhuma alteração de código, schema, rota ou teste — task puramente documental.
  - Nenhum arquivo de task já fechado (00_SYSTEM/tasks/done/) alterado — registros históricos preservados como estavam no momento em que foram escritos.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por ser puramente documental (Regra Fundamental 6 de TASK-LIFECYCLE.md), esta task fecha na mesma PR de implementação, sem PR de encerramento separada.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente o fechamento formal e documental da decisao de modelo de multi-organizacao (single-tenant permanente) — atualizacoes ao Plano Mestre e ao README do core-brain. Nao autoriza nenhuma alteracao de codigo, schema, migracao, rota ou teste; nao autoriza retomada da Fase 9 (pausada); nao autoriza qualquer trabalho relacionado a Docker/Parte B, integracoes externas adicionais, ou qualquer outra decisao em aberto da secao 17."
---

# Task 086 — Fechamento formal da decisão de modelo de multi-organização

## Contexto

Após o encerramento da Task 085 (primeira integração real de saída com GitHub), o CEO perguntou sobre as próximas fases do projeto. Ao explicar Fases 11-13, sinalizei que são estruturalmente diferentes (decisões de infraestrutura real, não mais "fatias incrementais"). O CEO perguntou o que fazer sem custo algum; recomendei a Parte B (validação real contra Postgres). Docker não estava disponível neste ambiente; o CEO decidiu tentar em outra máquina depois. Perguntei então o que recomendo começar, e sugeri retomar a decisão de multi-organização — pendente desde a Fase 5, a única frente genuinamente aberta sem depender de Docker, credenciais ou custo. O CEO concordou. Antes de propor qualquer abordagem técnica, esclareci a motivação real via pergunta estruturada (separação interna de marcas, futuro SaaS, ou nenhum motivo concreto). O CEO respondeu: nenhum motivo concreto ainda — fechar como single-tenant permanentemente.

## Objetivo

Registrar formalmente a decisão de que o Monvi Brain permanece single-tenant, encerrando essa pendência transversal que atravessava a documentação desde a Fase 5, sem exigir nenhuma mudança de código (a base já era single-tenant implicitamente em toda a sua extensão).

## Escopo executado

1. `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`, seção 17 (Decisões em aberto): "modelo de multi-organização" removido da lista de decisões pendentes; nova subseção "Decisões já tomadas" criada, registrando a decisão (single-tenant permanente), a data (2026-08-17), a ausência de motivo de negócio concreto no momento, e a condição de reabertura futura (decisão de negócio concreta, não incremental).
2. Seção 19 (Estado atual) do Plano Mestre: bullet da Fase 5 atualizado (de "aguardando decisão formal" para "formalizada como decisão permanente"); linha da lista "Ainda não iniciado" removida (não é mais uma pendência); "Próximo gate recomendado" atualizado, removendo a decisão da lista de pendências transversais e anotando o fechamento; data/task da seção atualizada para Task 086.
3. `apps/core-brain/README.md`: título/intro atualizado incluindo a Task 086; bullet de escopo da Fase 5 atualizado; parágrafo-resumo atualizado em dois pontos (frase inicial sobre o que "permanece fora do escopo", e a frase específica sobre a Fase 5/Parte B).
4. Nenhum arquivo de task já fechado (`00_SYSTEM/tasks/done/`) foi alterado — são registros históricos do estado no momento em que cada task foi escrita, preservados como tal.

Nenhuma alteração de código, schema, migração, rota ou teste — task puramente documental. Nenhuma validação de `typecheck`/`test`/`build` aplicável.

## Critérios de aceite

- [x] Seção 17 do Plano Mestre atualizada: decisão movida de "em aberto" para "já tomadas", com data, decisão e justificativa. Evidência: `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`, seção 17.
- [x] Seção 19 do Plano Mestre atualizada em todos os pontos que referenciavam a decisão como pendente. Evidência: bullet da Fase 5, lista "Ainda não iniciado" (linha removida), "Próximo gate recomendado", todos no mesmo arquivo.
- [x] README.md atualizado nos pontos que referenciavam a decisão como pendente. Evidência: título/intro, bullet de escopo da Fase 5, parágrafo-resumo (dois pontos).
- [x] Nenhuma alteração de código, schema, rota ou teste. Evidência: diff restrito a `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md` e `apps/core-brain/README.md`.
- [x] Nenhum arquivo de task já fechado alterado. Evidência: `git status --short` local confirmou que nenhum arquivo em `00_SYSTEM/tasks/done/` foi tocado além da criação deste próprio arquivo.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; fechamento na mesma PR (Regra Fundamental 6, task puramente documental). Evidência: gate explícito para o merge do PR de implementação, que já contém este fechamento.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: nenhum risco técnico — task puramente documental, sem código. Risco de governança identificado e mitigado: reescrever registros históricos (`00_SYSTEM/tasks/done/*.md` de tasks já fechadas) para "corrigir" retroativamente as menções a "decisão pendente" seria inapropriado — cada task fechada é um registro fiel do estado no momento em que foi escrita; a decisão de não tocar nesses arquivos foi deliberada, não um esquecimento.

Gate vigente: aguardando autorização explícita do CEO para o squash merge do PR de implementação. Por ser puramente documental, esta task fecha na mesma PR (Regra Fundamental 6) — não há PR de encerramento separada.

Histórico de gates desta task: encerramento da Task 085 → CEO pergunta sobre as próximas fases → explico Fases 11-13 e sua natureza estrutural diferente → CEO pergunta o que fazer sem custo → recomendo Parte B → Docker indisponível neste ambiente → CEO decide tentar depois em outra máquina → CEO pergunta o que recomendo começar → recomendo retomar a decisão de multi-organização → CEO concorda (`Vamos retomar a decisão de Multi-organização então`) → esclareço a motivação real via pergunta estruturada → CEO responde: nenhum motivo concreto, fechar como single-tenant permanente → executo o fechamento documental.

## Revisão e entrega

Apresento o diff completo (restrito a dois arquivos de documentação) e solicito explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: fechar formalmente uma decisão arquitetural que atravessava a documentação como pendência desde a Fase 5, sem gerar nenhum código novo — apenas reconhecer por escrito o que já era verdade na prática.

**Resultado conhecido**: a decisão está registrada na seção 17 do Plano Mestre com data, motivo e condição de reabertura; todas as menções à decisão como "em aberto" nos dois documentos vivos (Plano Mestre, README) foram localizadas e atualizadas.

**O que ajudou**: esclarecer a motivação real antes de propor qualquer solução técnica — a resposta ("nenhum motivo concreto") tornou a decisão trivial de registrar (sem retrofit, sem código), mas se a resposta tivesse sido outra (segunda unidade de negócio, ou intenção de SaaS), o escopo teria sido completamente diferente e muito maior. Perguntar primeiro evitou desperdiçar trabalho numa direção errada.

**O que dificultou**: localizar todas as menções relevantes sem alterar registros históricos — usei `grep` para mapear exaustivamente antes de editar, e distingui deliberadamente entre "menções factuais que continuam verdadeiras" (ex.: "sob suposição explícita de single-tenant" em bullets de fases já concluídas) e "menções que framavam isso como pendência" (as únicas que precisavam mudar).

**Surpresas**: nenhuma.

**Riscos materializados**: nenhum.

**Perguntas em aberto**: nenhuma nova — a condição de reabertura (razão de negócio concreta) já está registrada na própria decisão.

**Ações propostas**: nenhuma ação técnica decorre desta task. Próximos passos possíveis para o projeto, mencionados na conversa mas fora desta task: retomar a Parte B quando o CEO tiver acesso a uma máquina com Docker; decidir o próximo passo da integração real com GitHub (Task 085); ou revisitar a Fase 9 pausada quando houver decisão sobre execução real de agentes.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
