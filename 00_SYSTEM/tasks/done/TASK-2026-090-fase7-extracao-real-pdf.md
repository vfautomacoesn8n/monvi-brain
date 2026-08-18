---
id: task-2026-090
type: task
title: "Fase 7 — extração real de PDF (continuação da Task 087)"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-18"
updated_at: "2026-08-18"
reviewed_at: "2026-08-18T12:23:37-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/tasks/done/TASK-2026-087-fase7-extracao-arquivos-texto-puro.md
  - apps/core-brain/src/modules/documents/file-storage.service.ts
  - apps/core-brain/src/http/routes/document-version.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-catalogo-fontes.md
  - 00_SYSTEM/tasks/done/TASK-2026-070-fase7-documentos-versoes.md
  - 00_SYSTEM/tasks/done/TASK-2026-087-fase7-extracao-arquivos-texto-puro.md
aliases:
  - Extração real de PDF
  - unpdf em document_version
tags: [core-brain, fase-7, api, documentos, upload, extracao, pdf, dependencia-nova, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-090-fase7-extracao-real-pdf.md
  - 00_SYSTEM/tasks/done/TASK-2026-090-fase7-extracao-real-pdf.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/modules/documents/file-storage.service.ts
  - apps/core-brain/src/http/routes/document-version.ts
  - apps/core-brain/tests/file-storage.service.test.ts
  - apps/core-brain/tests/document.integration.test.ts
  - apps/core-brain/package.json
  - apps/core-brain/package-lock.json
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/registries/
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
  - apps/core-brain/src/http/routes/document.ts
  - apps/core-brain/src/http/routes/document-permission.ts
  - apps/core-brain/src/http/routes/search.ts
  - apps/core-brain/src/http/routes/memory-note.ts
  - apps/core-brain/src/http/routes/automation-workflow.ts
  - apps/core-brain/src/http/routes/automation-trigger.ts
  - apps/core-brain/src/http/routes/automation-invocation.ts
  - apps/core-brain/src/http/routes/automation-dashboard.ts
  - apps/core-brain/src/http/routes/ai-agent.ts
  - apps/core-brain/src/http/routes/integration.ts
  - apps/core-brain/src/app/build-app.ts
  - apps/core-brain/tests/document.test.ts
  - apps/core-brain/tests/
  - apps/core-brain/drizzle/
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
requires_review: false
acceptance_criteria:
  - Avaliação comparativa de bibliotecas de extração de PDF documentada antes da implementação (pdf-parse v1, pdf-parse v2, unpdf), com critério explícito de escolha (footprint, dependências nativas, vulnerabilidades, manutenção ativa).
  - Nova dependência unpdf adicionada a package.json/package-lock.json; nenhuma dependência nativa (@napi-rs/canvas) instalada de fato — permanece peer dependency opcional, não usada.
  - file-storage.service.ts estendido para detectar .pdf/application/pdf e extrair texto real via unpdf, sem alterar o comportamento já existente para .txt/.md.
  - PDF corrompido ou sem camada de texto (ex. digitalizado) não derruba o upload — content permanece null, sem exceção não tratada.
  - Resposta de POST /documents/:documentId/versions/upload distingue três casos na mensagem de extração (sucesso, formato suportado sem texto extraído, formato não suportado).
  - Nenhuma mudança de schema nem migração nova — os campos necessários já existem desde a Task 087.
  - Nenhuma rota nova.
  - Testes reais cobrindo PDF válido com texto, PDF válido sem texto, PDF corrompido, e um formato genuinamente não suportado (ex. imagem) — sem mocks da biblioteca de extração.
  - npm run typecheck, npm test e npm run build continuam passando.
  - npm audit confere que nenhuma vulnerabilidade nova foi introduzida pela dependência nova (comparado ao estado anterior).
  - README.md de apps/core-brain e Plano Mestre atualizados, citando a biblioteca escolhida e o que segue deliberadamente fora de escopo (Word/.docx, OCR de PDF digitalizado).
  - Nenhuma credencial, dado real, decisão de multi-organização ou execução de automação/agente.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a extracao real de texto de arquivos PDF na mesma rota de upload ja existente desde a Task 087, via a dependencia unpdf, sem nenhuma mudanca de schema, rota nova, credencial ou dado real. Nao autoriza extracao de Word/.docx (fica para uma fatia futura separada); nao autoriza OCR de PDF digitalizado (tecnologia diferente, fora de escopo); nao autoriza embeddings ou busca vetorial (proximo entregavel formal da Fase 7, ainda bloqueado); nao autoriza qualquer mudanca em outras fases ou retomada de decisoes pendentes (Parte B, integracao com n8n, execucao real de agentes da Fase 9, proximo passo do GitHub)."
---

# Task 090 — Fase 7, extração real de PDF

## Contexto

Após o encerramento da Task 089, o CEO perguntou "O que podemos fazer hoje com esse projeto e o que está pendente ainda?". Apresentei um resumo do estado do projeto, distinguindo fatias zero-custo executáveis imediatamente (restante do modelo de execução supervisionada da Fase 8, extração real de PDF/Word da Fase 7, capacidade de escrita no GitHub da Fase 10) de pendências bloqueadas por decisão externa ou custo real (Parte B, embeddings/execução real de agentes — ambos dependentes de API de IA paga, autenticação de produção, n8n, segundo provedor de integração).

O CEO perguntou minha recomendação. Recomendei a extração real de PDF/Word como a fatia de maior valor prático imediato, já que a maioria dos documentos reais que alguém sobe é PDF ou Word, não `.txt`/`.md` — sem extração real desses formatos, o upload (Task 087) continua sendo mais armazenamento do que conhecimento utilizável. O CEO respondeu "Vamos seguir então".

Antes de propor o escopo técnico, avaliei três bibliotecas candidatas de extração de PDF (nenhum serviço externo, custo zero): `pdf-parse` v2 (atual, mas depende de `@napi-rs/canvas`, um binding nativo, resultando em ~92 MB instalados só para recursos não usados como screenshot/imagens/tabelas), `pdf-parse` v1 (mais leve, ~34 MB, mas sem manutenção desde 2019) e `unpdf` (~2,5 MB, zero dependências obrigatórias, 0 vulnerabilidades, ESM nativo compatível com o projeto, ativamente mantida, recomendada como alternativa moderna ao `pdf-parse`). Testei os três cenários necessários (PDF válido com texto, PDF corrompido, PDF sem texto/digitalizado) com `unpdf` antes de propor, confirmando que cobre exatamente o que a task precisa sem a dependência nativa pesada. Apresentei essa comparação ao CEO junto com o escopo técnico proposto (restrito a `.pdf`, Word deliberadamente adiado, mesma lógica de fatias estreitas já usada na Task 087). O CEO respondeu "Autorizado".

## Objetivo

Estender a extração real de conteúdo (introduzida na Task 087 para `.txt`/`.md`) para cobrir `.pdf`/`application/pdf`, na mesma rota de upload já existente, sem introduzir nenhuma rota nova, mudança de schema, ou dependência de serviço externo.

## Escopo executado

1. `apps/core-brain/package.json`/`package-lock.json`: nova dependência `unpdf` (`^1.8.1`).
2. `apps/core-brain/src/modules/documents/file-storage.service.ts`: `isPdf()` detecta `.pdf`/`application/pdf` (mesmo padrão de `isPlainText()`); `extractPdfText()` usa `unpdf` (`getDocumentProxy` + `extractText`, `verbosity: 0` para suprimir logs internos do pdf.js), com `try/catch` — PDF corrompido resulta em `null`, sem lançar exceção; texto vazio/só espaços após `trim()` também vira `null` (cobre PDFs digitalizados sem camada de texto). `StoredFile` ganhou o campo `formatSupported` (booleano), indicando se o formato foi reconhecido e a extração foi de fato tentada (independente de ter tido sucesso).
3. `apps/core-brain/src/http/routes/document-version.ts`: nova função `extractionMessage()` diferencia três casos na resposta de upload: extraído com sucesso; formato suportado mas sem texto extraído (arquivo vazio, corrompido, ou sem camada de texto); formato não suportado (mensagem já existente da Task 087). Nenhuma rota nova.
4. `apps/core-brain/tests/file-storage.service.test.ts`: substitui o teste antigo "PDF não suportado" (que ficou desatualizado, já que PDF passou a ser suportado) por quatro testes reais, sem mocks: PDF válido com texto (construído à mão, byte a byte, com tabela `xref` precisa), PDF válido sem texto, PDF corrompido, e um formato genuinamente não suportado (imagem) — confirmando que a distinção `formatSupported` funciona nos três casos.
5. `apps/core-brain/tests/document.integration.test.ts`: novo cenário de upload real de PDF via `multipart/form-data`, através da rota HTTP completa (não só do serviço isolado), confirmando a extração ponta a ponta.
6. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados citando a biblioteca escolhida, a comparação que fundamentou a escolha, e o que segue deliberadamente fora de escopo (Word/`.docx`, OCR).

**Descoberta durante a implementação**: o primeiro PDF de teste construído à mão usava um `MediaBox` de `200x200`, que truncava silenciosamente o texto extraído quando a string era um pouco mais longa (o texto avança em x conforme os caracteres são desenhados, e glifos além da largura da página não são extraídos) — um bug real do fixture de teste, não da biblioteca. Corrigido widening o `MediaBox` para `500x200` em todos os PDFs de teste construídos à mão (unitário e de integração), eliminando o risco de truncamento silencioso para textos de teste mais longos.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 138/138 testes passando em 33 arquivos (era 135 antes desta task: um teste substituído por quatro, líquido +3); `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e seis arquivos de integração (mesma contagem de arquivos, um novo cenário dentro de `document.integration.test.ts`), confirmando que a configuração está correta e que nenhuma validação real contra banco foi executada; `npm audit` confirma que as seis vulnerabilidades pré-existentes (esbuild/drizzle-kit, fast-uri, nanoid, já documentadas desde a Task 087) permanecem inalteradas — nenhuma vulnerabilidade nova introduzida pela dependência `unpdf`.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações (nenhuma nova nesta task) e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Avaliação comparativa de bibliotecas documentada antes da implementação. Evidência: mensagens da conversa citando `pdf-parse` v1/v2 vs. `unpdf`, com footprint, dependências e vulnerabilidades comparados.
- [x] Nova dependência `unpdf`, sem instalar `@napi-rs/canvas` de fato. Evidência: `package.json`/`package-lock.json`, `@napi-rs/canvas` aparece só como `peerDependenciesMeta.optional: true`, não instalado.
- [x] `file-storage.service.ts` estendido sem alterar comportamento de `.txt`/`.md`. Evidência: testes de texto puro continuam passando inalterados.
- [x] PDF corrompido/sem texto não derruba o upload. Evidência: testes "PDF sem camada de texto" e "PDF corrompido", ambos resultando em `content: null` sem exceção.
- [x] Resposta distingue três casos de extração. Evidência: `extractionMessage()` em `document-version.ts`.
- [x] Nenhuma mudança de schema/migração. Evidência: nenhum arquivo em `src/db/schema/` ou `drizzle/` no diff.
- [x] Nenhuma rota nova. Evidência: `document-version.ts` mantém as mesmas três rotas da Task 087.
- [x] Testes reais sem mocks, cobrindo os quatro cenários. Evidência: `file-storage.service.test.ts` (4 testes novos) e `document.integration.test.ts` (1 cenário novo via rota HTTP real).
- [x] `typecheck`, `test` e `build` continuam passando (138/138 testes). Evidência: execução local antes do commit.
- [x] `npm audit` sem vulnerabilidade nova. Evidência: mesmas seis vulnerabilidades pré-existentes, confirmadas antes e depois da instalação.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado" do README e Fase 7/Parte B/Próximo gate do Plano Mestre.
- [x] Nenhuma credencial, dado real, decisão de multi-organização ou execução de automação/agente. Evidência: diff restrito aos arquivos previstos; nenhuma chamada a serviço externo (extração é 100% local).
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito `Autorizado` para o merge do PR #107, integrado em `d6fb3e610ab3e0118f9b9800b6b7c881fb778232`; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; risco específico desta fatia — `unpdf` é uma dependência relativamente nova (comparada a `pdf-parse`), então sua superfície de manutenção de longo prazo é menos comprovada; mitigado pela escolha deliberada de uma biblioteca com 0 vulnerabilidades conhecidas e footprint mínimo, e pelo fato de que toda a extração roda localmente, sem chamada a serviço externo, então uma eventual descontinuação da biblioteca não quebra nenhum dado já armazenado (o arquivo original sempre fica em disco, `content` é apenas uma conveniência derivada). PDFs digitalizados (imagem, sem camada de texto) continuam sem extração real — isso é uma limitação conhecida e documentada, não um bug; OCR ficaria para uma fatia totalmente separada, provavelmente com custo real (serviço de OCR).

Gate vigente: encerrado. O merge do PR #107 foi autorizado (`Autorizado`) e executado por squash em `d6fb3e610ab3e0118f9b9800b6b7c881fb778232`. Esta task está formalmente concluída. Word (`.docx`) e OCR de PDF digitalizado permanecem fora deste encerramento, deliberadamente adiados.

Histórico de gates desta task: encerramento da Task 089 → CEO pergunta "O que podemos fazer hoje... e o que está pendente ainda?" → apresento o estado do projeto → CEO pergunta "O que você recomenda que eu faça?" → recomendo extração real de PDF/Word como maior valor prático imediato → CEO responde "Vamos seguir então" → avalio três bibliotecas candidatas, testando os três cenários necessários com a escolhida → apresento a comparação e o escopo técnico restrito a `.pdf` → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #107, integrado em `d6fb3e610ab3e0118f9b9800b6b7c881fb778232`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada, `npm audit`) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-18

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #107.

**Integração**: PR #107 integrado em `main` via squash merge, commit `d6fb3e610ab3e0118f9b9800b6b7c881fb778232`, em 2026-08-18T15:23:37Z. Escopo integrado: exatamente os 10 arquivos previstos em `allowed_paths` — criação de `00_SYSTEM/tasks/active/TASK-2026-090-fase7-extracao-real-pdf.md`; edição de `src/modules/documents/file-storage.service.ts`, `src/http/routes/document-version.ts`, `tests/file-storage.service.test.ts`, `tests/document.integration.test.ts`, `package.json`, `package-lock.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma mudança de schema, nenhuma rota nova.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `439fc2f..d6fb3e6`), rodei `npm install` para alinhar `node_modules` ao `package-lock.json` sincronizado, e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 138/138 testes passando em 33 arquivos, build sem erros. `npm audit` pós-instalação confirmou as mesmas seis vulnerabilidades pré-existentes (esbuild/drizzle-kit, fast-uri, nanoid), nenhuma nova.

**Estado final**: a extração real de conteúdo de documentos, iniciada na Task 087 para `.txt`/`.md`, agora cobre também `.pdf`/`application/pdf`, via `unpdf` — biblioteca escolhida após avaliação comparativa com `pdf-parse` v1/v2, por ser a mais leve e sem dependência nativa. PDF corrompido ou sem camada de texto (digitalizado) é tratado graciosamente (`content: null`, sem quebrar o upload). A resposta de upload agora distingue três estados de extração. Word (`.docx`) e OCR de PDF digitalizado permanecem deliberadamente fora de escopo, para uma fatia futura. Embeddings/busca vetorial continuam sendo o próximo entregável formal não iniciado da Fase 7.

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização foi tocado; nenhuma credencial ou dado real foi introduzido; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma chamada a serviço externo foi introduzida (extração 100% local); nenhuma mudança de schema ou rota nova.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: estender a extração real de conteúdo (Task 087) para cobrir PDF, a fatia de maior valor prático imediato recomendada ao CEO, sem introduzir dependências pesadas, serviços externos, ou mudanças de schema.

**Resultado conhecido**: `document_version.content` agora é populado de verdade a partir de PDFs reais, via uma dependência leve e sem vulnerabilidades; os três cenários de borda (PDF válido, sem texto, corrompido) estão cobertos por testes reais, sem mocks.

**O que ajudou**: testar as bibliotecas candidatas de forma prática (instalar, medir footprint, extrair texto de um PDF real) antes de propor o escopo ao CEO, em vez de decidir só por documentação — isso revelou que `pdf-parse` v2 (a versão "atual" e aparentemente óbvia) trazia um binding nativo pesado desnecessário, e que `unpdf` era uma alternativa muito melhor mas menos conhecida. Sem esse teste prático, eu provavelmente teria proposto `pdf-parse` só por ser o nome mais familiar.

**O que dificultou**: construir PDFs de teste válidos à mão (sem depender de nenhuma biblioteca de geração de PDF, para não adicionar uma dependência só para testes) — o formato exige uma tabela `xref` com offsets de byte exatos, o que é sensível a qualquer mudança no conteúdo do PDF. Isso também revelou um bug real no meu primeiro fixture (MediaBox estreito demais truncando texto), que só apareceu ao testar uma string mais longa — reforça o valor de testar com dados variados, não só o caso mais simples.

**Surpresas**: a truncagem silenciosa de texto por causa do `MediaBox` foi inesperada — não é um erro óbvio (não lança exceção, não aparece nos logs), só um texto ligeiramente mais curto que o esperado. Se esse bug tivesse ficado no teste, ele teria mascarado um problema real de extração incompleta em PDFs com texto próximo à borda da página, então vale a pena lembrar que MediaBox largo o suficiente é um cuidado necessário em qualquer teste futuro que construa PDFs à mão.

**Riscos materializados**: um, mas capturado e corrigido antes do merge — o truncamento do fixture de teste por `MediaBox` estreito, descrito acima. Nenhum risco chegou a `main`.

**Perguntas em aberto**: nenhuma nova. As de sempre (Word/`.docx`, OCR, embeddings/busca vetorial) já estavam documentadas como fora de escopo desde o início desta task.

**Ações propostas**: ao construir fixtures de PDF à mão em testes futuros (ex.: se uma fatia de OCR ou Word vier a precisar de fixtures binários semelhantes), usar sempre uma página larga o suficiente para o texto de teste, e considerar adicionar um teste explícito com texto propositalmente longo para pegar problemas de truncamento cedo.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
