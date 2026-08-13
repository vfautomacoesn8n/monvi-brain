---
id: task-2026-074
type: task
title: "Fase 7 — sexta fatia operacional: indexação e busca textual sobre documentos (GET /search)"
status: draft
task_state: active
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-13"
updated_at: "2026-08-13"
review_cycle: on-change
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/tasks/done/TASK-2026-073-fase7-retencao-documento.md
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/src/http/routes/document-permission.ts
  - apps/core-brain/src/db/client.ts
  - apps/core-brain/drizzle.config.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-entidade-fonte.md
  - 00_SYSTEM/tasks/done/TASK-2026-070-fase7-entidade-documento.md
  - 00_SYSTEM/tasks/done/TASK-2026-071-fase7-classificacao-documento.md
  - 00_SYSTEM/tasks/done/TASK-2026-072-fase7-permissoes-documento.md
  - 00_SYSTEM/tasks/done/TASK-2026-073-fase7-retencao-documento.md
aliases:
  - Fase 7 — busca textual
  - Sexta fatia operacional da Fase 7
  - GET /search
tags: [core-brain, fase-7, api, busca, indexacao, full-text-search, conhecimento, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-074-fase7-busca-textual.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/src/http/routes/search.ts
  - apps/core-brain/src/modules/documents/access.service.ts
  - apps/core-brain/tests/search.test.ts
  - apps/core-brain/tests/search.integration.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - apps/core-brain/src/db/schema/
  - apps/core-brain/src/modules/audit/
  - apps/core-brain/src/modules/auth/
  - apps/core-brain/src/http/middlewares/
  - apps/core-brain/src/http/routes/auth.ts
  - apps/core-brain/src/http/routes/health.ts
  - apps/core-brain/src/http/routes/client.ts
  - apps/core-brain/src/http/routes/project.ts
  - apps/core-brain/src/http/routes/contact.ts
  - apps/core-brain/src/http/routes/project-membership.ts
  - apps/core-brain/src/http/routes/task.ts
  - apps/core-brain/src/http/routes/deliverable.ts
  - apps/core-brain/src/http/routes/approval.ts
  - apps/core-brain/src/http/routes/dependency.ts
  - apps/core-brain/src/http/routes/risk.ts
  - apps/core-brain/src/http/routes/comment.ts
  - apps/core-brain/src/http/routes/history.ts
  - apps/core-brain/src/http/routes/dashboard.ts
  - apps/core-brain/src/http/routes/lead.ts
  - apps/core-brain/src/http/routes/opportunity.ts
  - apps/core-brain/src/http/routes/activity.ts
  - apps/core-brain/src/http/routes/commercial-dashboard.ts
  - apps/core-brain/src/http/routes/source.ts
  - apps/core-brain/src/http/routes/document-version.ts
  - apps/core-brain/src/http/routes/document-permission.ts
  - apps/core-brain/tests/document.test.ts
  - apps/core-brain/tests/document.integration.test.ts
  - apps/core-brain/tests/document-permission.test.ts
  - apps/core-brain/tests/document-permission.integration.test.ts
  - apps/core-brain/tests/
  - apps/core-brain/drizzle/
  - apps/core-brain/package.json
  - apps/core-brain/vitest.config.ts
  - apps/core-brain/vitest.integration.config.ts
  - apps/core-brain/drizzle.config.ts
  - infrastructure/local/docker-compose.yml
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
requires_review: true
acceptance_criteria:
  - Rota GET /api/v1/search?q=<termo> criada em apps/core-brain/src/http/routes/search.ts, registrada em build-app.ts, sem nenhuma tabela, coluna ou migração nova.
  - Busca por relevancia (ts_rank) sobre o titulo do documento e o conteudo da versao mais recente (maior versionNumber), via to_tsvector/plainto_tsquery nativos do Postgres, sem dependencia de software nova.
  - Funcao hasGranularDocumentAccess extraida de document.ts para apps/core-brain/src/modules/documents/access.service.ts, reaproveitada tanto por document.ts quanto por search.ts, sem duplicacao de logica.
  - Resultados de documentos confidential/restricted sem concessao explicita (ou admin) sao omitidos da resposta, sem gerar erro — mesma semantica ja usada em GET /documents.
  - Rota exige autenticação (authenticateRequest) e permissão (requirePermission('document:read')), reaproveitando o middleware já existente, sem alteração nele.
  - Nenhuma alteração em apps/core-brain/src/db/schema/, apps/core-brain/src/modules/audit/, apps/core-brain/src/modules/auth/, apps/core-brain/src/http/middlewares/ ou em rotas alem de document.ts (apenas para o import) e search.ts (nova).
  - Teste automatizado criado cobrindo o bloqueio de acesso sem token (401), passando em npm test sem depender de banco real.
  - Teste de integração real criado cobrindo busca por titulo, busca por conteudo da versao mais recente, ausencia de resultado para termo inexistente e rejeicao (400) sem o parametro q, isolado da suíte padrão — escrito, mas não executado, por decisão do CEO de manter a Parte B deliberadamente adiada.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados refletindo a sexta fatia da Fase 7, incluindo a limitacao deliberada de nao ter indice persistido (GIN) e de nao fazer extracao de arquivos reais.
  - Nenhuma credencial, dado real ou dependência de software nova adicionada; nenhuma decisão sobre modelo de multi-organização tomada ou presumida; nenhuma entidade nova criada; nenhum upload ou parsing de arquivo binario implementado; nenhum trabalho de memoria operacional ou embeddings iniciado.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a criacao da rota de busca textual (Fase 7) sobre document/document_version ja existentes, a extracao de hasGranularDocumentAccess para um modulo compartilhado, e os testes correspondentes, sob suposicao explicita de single-tenant. Nao autoriza upload real de arquivos, extracao/parsing de conteudo binario (PDF, Word etc.), indice persistido (GIN) ou qualquer otimizacao de performance sem evidencia real de necessidade, memoria operacional, embeddings ou busca vetorial, o modelo de multi-organizacao, aplicacao real de qualquer migracao contra banco (Parte B, segue deliberadamente adiada), autenticacao de producao real, alteracao de codigo de identidade/autenticacao/autorizacao ou das rotas ja existentes alem de document.ts (apenas import) e search.ts, ou qualquer credencial, dado real ou dependencia de software nova."
---

# Task 074 — Fase 7, sexta fatia operacional: indexação e busca textual

## Contexto

Após o encerramento da Task 073 (política de retenção), com os quatro pré-requisitos bloqueantes da regra da Fase 7 completos, perguntei ao CEO sobre o escopo da próxima fatia — "extração" (upload/parsing de arquivos reais) exigiria uma decisão de infraestrutura de armazenamento ainda não tomada. Recomendei pular "extração" e ir direto para "indexação" + "busca textual" sobre o conteúdo já armazenado como texto puro em `document_version.content`, já que isso entrega o "Gate de saída" da própria fase (busca confiável, fontes rastreáveis, permissões respeitadas) sem exigir nenhuma decisão nova. O CEO seguiu a recomendação.

## Objetivo

Criar uma rota de busca textual por relevância sobre `document`/`document_version`, respeitando a mesma checagem granular de `document_permission` já usada em `GET /documents`, sem nenhuma tabela, migração ou dependência de software nova.

## Escopo executado

1. `apps/core-brain/src/modules/documents/access.service.ts`: `hasGranularDocumentAccess` extraída de `document.ts` para um módulo compartilhado (mesma lógica, sem alteração de comportamento), permitindo reutilização por `search.ts` sem duplicação.
2. `apps/core-brain/src/http/routes/document.ts`: passa a importar `hasGranularDocumentAccess` do módulo compartilhado, em vez de defini-la localmente; nenhuma outra alteração de comportamento.
3. `apps/core-brain/src/http/routes/search.ts`: rota `GET /search?q=<termo>`, com uma consulta SQL bruta (`db.execute(sql\`...\`)`, já que o padrão de "última versão por documento via `LATERAL JOIN`" não é expressável de forma direta no query builder do Drizzle) que calcula `ts_rank` sobre `to_tsvector('portuguese', título || conteúdo da versão mais recente)` contra `plainto_tsquery('portuguese', q)`, ordenando por relevância; resultados filtrados via `hasGranularDocumentAccess` antes de retornar (mesma semântica de `GET /documents`: documentos `confidential`/`restricted` sem concessão simplesmente não aparecem, sem erro).
4. `apps/core-brain/src/app/build-app.ts`: registro da nova rota sob o prefixo `/api/v1`, sem alterar o registro das rotas existentes.
5. `apps/core-brain/tests/search.test.ts`: teste de bloqueio de acesso sem token (401), sem dependência de banco real.
6. `apps/core-brain/tests/search.integration.test.ts`: teste de integração real cobrindo busca por título, busca por conteúdo da versão mais recente, ausência de resultado para termo sem correspondência e rejeição (400) sem o parâmetro `q` — isolado da suíte padrão, escrito mas deliberadamente não executado.
7. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados refletindo a sexta fatia da Fase 7 e as duas limitações deliberadas (sem índice persistido, sem extração de arquivos reais).

Nenhuma migração gerada — `search` é uma rota de leitura pura sobre tabelas já existentes (`document`, `document_version`, `document_permission`), sem nenhuma coluna nova.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 96/96 testes passando; `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos dezenove arquivos de integração, confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las. Isso inclui a única forma real de medir se a busca sem índice persistido (GIN) tem desempenho aceitável em volume real — hoje isso não pode ser medido.

## Critérios de aceite

- [x] Rota `GET /search?q=<termo>` criada e registrada, sem tabela/coluna/migração nova. Evidência: `apps/core-brain/src/http/routes/search.ts`, registrado em `build-app.ts`.
- [x] Busca por relevância sobre título e conteúdo da versão mais recente, sem dependência de software nova. Evidência: `to_tsvector`/`plainto_tsquery`/`ts_rank` nativos do Postgres, usados via `db.execute(sql\`...\`)`.
- [x] `hasGranularDocumentAccess` extraída para módulo compartilhado, reaproveitada por `document.ts` e `search.ts`. Evidência: `apps/core-brain/src/modules/documents/access.service.ts`.
- [x] Documentos `confidential`/`restricted` sem concessão são omitidos, sem erro. Evidência: filtro aplicado em `search.ts` antes de montar a resposta, mesma função usada em `GET /documents`.
- [x] Rota exige autenticação e permissão, reaproveitando o middleware existente. Evidência: `preHandler: [authenticateRequest, requirePermission('document:read')]`; `src/http/middlewares/` não foi alterado.
- [x] Nenhuma alteração em schema, `src/modules/audit/`, `src/modules/auth/`, `src/http/middlewares/` ou rotas além de `document.ts` (import) e `search.ts`. Evidência: `git status --short` local confirmou apenas os arquivos previstos em `allowed_paths`.
- [x] Teste de bloqueio de acesso (401) passando sem banco real. Evidência: `tests/search.test.ts`, 1 teste, parte dos 96/96 da suíte padrão.
- [x] Teste de integração real cobrindo os quatro cenários descritos, isolado da suíte padrão, não executado. Evidência: `tests/search.integration.test.ts`, escrito e presente na suíte de integração.
- [x] `typecheck`, `test` e `build` continuam passando (96/96 testes). Evidência: execução local antes do commit.
- [x] `README.md` e Plano Mestre atualizados, incluindo as duas limitações deliberadas. Evidência: seção "Escopo implementado"/"Endpoints" do README e seção 19 do Plano Mestre.
- [x] Nenhuma credencial, dado real, dependência de software nova, entidade nova, upload/parsing de arquivo, ou trabalho de memória operacional/embeddings. Evidência: diff restrito aos arquivos previstos; nenhuma alteração em `package.json`; nenhuma entidade nova; nenhuma migração gerada.
- [ ] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Pendente do gate de merge do PR desta task.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente do encerramento formal desta task.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; a busca calcula `to_tsvector` em tempo de consulta, sem índice persistido (GIN) — aceitável no volume atual, mas não otimizado, e essa limitação só pode ser avaliada de verdade quando a Parte B for retomada; a busca cobre apenas a versão mais recente de cada documento, não o histórico completo de versões — decisão deliberada de simplicidade, revisável se houver necessidade real de buscar em versões antigas.

Gate vigente: aguardando revisão do CEO e autorização explícita do squash merge do PR desta task.

Histórico de gates desta task: encerramento da Task 073 → aviso o CEO que a próxima fatia natural ("extração"/"indexação"/"busca textual") pode exigir uma decisão de escopo maior, já que "extração" envolve upload real de arquivos, algo que o sistema ainda não tem → CEO pergunta "O que você me recomenda?" → recomendo pular extração por ora e ir direto para indexação + busca textual sobre o conteúdo já armazenado como texto puro, com o trade-off explícito (extração de arquivo real fica pendente) → CEO responde "Vamos então seguir com a sua recomendação então" → executo o escopo completo (código, testes, documentação, criação da task, branch, commit, push e PR).

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
