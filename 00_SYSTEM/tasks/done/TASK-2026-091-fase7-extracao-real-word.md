---
id: task-2026-091
type: task
title: "Fase 7 — extração real de Word/.docx (conclusão do entregável iniciado na Task 087)"
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
reviewed_at: "2026-08-18T14:07:47-03:00"
review_cycle: on-change
sources:
  - 00_SYSTEM/tasks/done/TASK-2026-087-fase7-extracao-arquivos-texto-puro.md
  - 00_SYSTEM/tasks/done/TASK-2026-090-fase7-extracao-real-pdf.md
  - apps/core-brain/src/modules/documents/file-storage.service.ts
  - apps/core-brain/src/http/routes/document-version.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-069-fase7-catalogo-fontes.md
  - 00_SYSTEM/tasks/done/TASK-2026-070-fase7-documentos-versoes.md
  - 00_SYSTEM/tasks/done/TASK-2026-087-fase7-extracao-arquivos-texto-puro.md
  - 00_SYSTEM/tasks/done/TASK-2026-090-fase7-extracao-real-pdf.md
aliases:
  - Extração real de Word
  - mammoth em document_version
tags: [core-brain, fase-7, api, documentos, upload, extracao, docx, dependencia-nova, testes]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-091-fase7-extracao-real-word.md
  - 00_SYSTEM/tasks/done/TASK-2026-091-fase7-extracao-real-word.md
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
  - Avaliação da biblioteca de extração de Word (mammoth) documentada antes da implementação, testando os três cenários necessários (docx com texto, docx vazio, docx corrompido) antes de propor o escopo.
  - Nova dependência de produção mammoth e nova dependência de desenvolvimento jszip (só para construir fixtures de teste) adicionadas a package.json/package-lock.json.
  - file-storage.service.ts estendido para detectar .docx/application/vnd.openxmlformats-officedocument.wordprocessingml.document e extrair texto real via mammoth, sem alterar o comportamento já existente para .txt/.md/.pdf.
  - DOCX corrompido ou sem texto não derruba o upload — content permanece null, sem exceção não tratada, mesmo padrão de três estados já usado no PDF (Task 090).
  - Word legado (.doc, formato binário antigo) permanece explicitamente não suportado — mammoth não o processa.
  - Nenhuma mudança de schema nem migração nova.
  - Nenhuma rota nova.
  - Testes reais cobrindo DOCX válido com texto, DOCX válido sem texto, DOCX corrompido, e confirmação de que .doc legado continua não suportado — sem mocks da biblioteca de extração.
  - npm run typecheck, npm test e npm run build continuam passando.
  - npm audit confere que nenhuma vulnerabilidade nova foi introduzida pelas dependências novas.
  - README.md de apps/core-brain e Plano Mestre atualizados, citando a biblioteca escolhida e o que segue deliberadamente fora de escopo (Word legado .doc, OCR de PDF digitalizado).
  - Nenhuma credencial, dado real, decisão de multi-organização ou execução de automação/agente.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a extracao real de texto de arquivos Word modernos (.docx) na mesma rota de upload ja existente desde a Task 087, via a dependencia mammoth, sem nenhuma mudanca de schema, rota nova, credencial ou dado real. Nao autoriza extracao de Word legado (.doc, formato binario antigo); nao autoriza OCR de PDF digitalizado (tecnologia diferente, fora de escopo); nao autoriza embeddings ou busca vetorial (proximo entregavel formal da Fase 7, ainda bloqueado); nao autoriza qualquer mudanca em outras fases ou retomada de decisoes pendentes (Parte B, integracao com n8n, execucao real de agentes da Fase 9, proximo passo do GitHub)."
---

# Task 091 — Fase 7, extração real de Word (`.docx`)

## Contexto

Após o encerramento da Task 090 (extração real de PDF), o CEO perguntou "Helpper, o que você propõe que façamos agora?". Recomendei completar a extração real de Word (`.docx`) como continuação natural — junto com texto puro (Task 087) e PDF (Task 090), fecha os três formatos de documento que as pessoas realmente usam no dia a dia, concluindo o entregável "extração de arquivos reais" da Fase 7. O CEO respondeu "Sim".

Antes de propor o escopo técnico, avaliei `mammoth` (biblioteca padrão de fato para conversão de `.docx` para texto/HTML) e testei os três cenários necessários (DOCX válido com texto, DOCX vazio, DOCX corrompido) construindo fixtures reais com `jszip` (já que `.docx` é um contêiner ZIP com XML por dentro) antes de propor o escopo — mesma disciplina já aplicada na Task 090 para `unpdf`. Apresentei o resultado ao CEO junto com o escopo técnico proposto (restrito a `.docx` moderno; `.doc` legado, formato binário antigo não suportado pelo `mammoth`, deliberadamente fora). O CEO respondeu "Autorizado".

## Objetivo

Estender a extração real de conteúdo (Task 087 para `.txt`/`.md`, Task 090 para `.pdf`) para cobrir `.docx`, na mesma rota de upload já existente, sem introduzir nenhuma rota nova, mudança de schema, ou dependência de serviço externo.

## Escopo executado

1. `apps/core-brain/package.json`/`package-lock.json`: nova dependência de produção `mammoth` (`^1.12.1`); nova dependência de desenvolvimento `jszip` (`^3.10.1`, só para construir os `.docx` de teste à mão — já era dependência transitiva de `mammoth`, mas declarada explicitamente por honestidade de escopo, mesmo padrão usado nos fixtures de PDF).
2. `apps/core-brain/src/modules/documents/file-storage.service.ts`: `isDocx()` detecta `.docx`/`application/vnd.openxmlformats-officedocument.wordprocessingml.document` (mesmo padrão de `isPdf()`); `extractDocxText()` usa `mammoth.extractRawText({ buffer })`, com `try/catch` — `.docx` corrompido resulta em `null`, sem lançar exceção; texto vazio/só espaços após `trim()` também vira `null`.
3. `apps/core-brain/tests/file-storage.service.test.ts`: três testes reais novos, sem mocks, construindo `.docx` válidos byte a byte via `jszip` (`[Content_Types].xml`, `_rels/.rels`, `word/document.xml`, as três partes mínimas exigidas pelo formato Office Open XML): DOCX válido com texto, DOCX válido sem texto, DOCX corrompido. Um quarto teste confirma que `.doc` legado (formato binário antigo) continua genuinamente não suportado.
4. `apps/core-brain/tests/document.integration.test.ts`: novo cenário de upload real de `.docx` via `multipart/form-data`, através da rota HTTP completa — como o conteúdo binário do `.docx` não é ASCII-seguro (ao contrário do PDF construído à mão), o corpo multipart foi montado com `Buffer.concat` em vez de concatenação de strings.
5. `apps/core-brain/README.md` e `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md`: atualizados citando a biblioteca escolhida e o que segue deliberadamente fora de escopo (Word legado `.doc`, OCR de PDF digitalizado).

Validado localmente: `npm run typecheck` sem erros; `npm test` com 142/142 testes passando em 33 arquivos (era 138 antes desta task: três testes novos + um substituído, líquido +4; primeira execução teve o "Worker exited unexpectedly" transitório já documentado em tasks anteriores, resolvido no retry); `npm run build` sem erros; `npm run test:integration` falha com `ECONNREFUSED` nos vinte e seis arquivos de integração (mesma contagem de arquivos, um novo cenário dentro de `document.integration.test.ts`); `npm audit` confirma que as seis vulnerabilidades pré-existentes (esbuild/drizzle-kit, fast-uri, nanoid) permanecem inalteradas — nenhuma vulnerabilidade nova introduzida por `mammoth`/`jszip`.

## Parte B — segue deliberadamente adiada

Mesma decisão já registrada desde a Task 052: a aplicação real das migrações (nenhuma nova nesta task) e a execução de `npm run test:integration` contra um banco real serão feitas quando o CEO decidir tratá-las.

## Critérios de aceite

- [x] Avaliação da biblioteca documentada antes da implementação. Evidência: mensagens da conversa citando `mammoth`, os três cenários testados e a comparação com o padrão já usado na Task 090.
- [x] Novas dependências `mammoth` (produção) e `jszip` (desenvolvimento). Evidência: `package.json`/`package-lock.json`.
- [x] `file-storage.service.ts` estendido sem alterar comportamento de `.txt`/`.md`/`.pdf`. Evidência: testes de texto puro e PDF continuam passando inalterados.
- [x] DOCX corrompido/sem texto não derruba o upload. Evidência: testes "DOCX sem texto" e "DOCX corrompido", ambos resultando em `content: null` sem exceção.
- [x] `.doc` legado permanece não suportado. Evidência: teste dedicado confirmando `formatSupported: false` para `.doc`.
- [x] Nenhuma mudança de schema/migração. Evidência: nenhum arquivo em `src/db/schema/` ou `drizzle/` no diff.
- [x] Nenhuma rota nova. Evidência: `document-version.ts` mantém as mesmas três rotas desde a Task 087.
- [x] Testes reais sem mocks. Evidência: `file-storage.service.test.ts` (3 testes novos + 1 substituído) e `document.integration.test.ts` (1 cenário novo via rota HTTP real, `Buffer.concat` para conteúdo binário).
- [x] `typecheck`, `test` e `build` continuam passando (142/142 testes). Evidência: execução local antes do commit.
- [x] `npm audit` sem vulnerabilidade nova. Evidência: mesmas seis vulnerabilidades pré-existentes, confirmadas antes e depois da instalação.
- [x] `README.md` e Plano Mestre atualizados. Evidência: seção "Escopo implementado" do README e Fase 7/Parte B/Próximo gate do Plano Mestre.
- [x] Nenhuma credencial, dado real, decisão de multi-organização ou execução de automação/agente. Evidência: diff restrito aos arquivos previstos; extração 100% local.
- [x] Conteúdo revisado e aprovado pelo CEO antes do merge; encerramento em PR separada (Regra Fundamental 6, exceção para código). Evidência: gate explícito `Autorizado` para o merge do PR #109, integrado em `73a41bb0d5a89a672d88d6487ea45810e6c8137e`; este encerramento, em PR própria, é essa própria exceção em aplicação.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo, com mudanças aceitas registradas em `changes.jsonl`.

## Riscos e gates humanos

Riscos: mesmos já registrados desde a Fase 5 — migração nunca aplicada contra banco real, suposição single-tenant acumulando escopo, ausência de Docker neste ambiente; risco específico desta fatia — `mammoth` é uma árvore de dependências relativamente grande (26 pacotes, ~7,8 MB), maior que `unpdf`, mas todas de baixo nível (parsing de XML/ZIP), sem binding nativo e com 0 vulnerabilidades conhecidas; mitigado pelo mesmo raciocínio da Task 090 — extração roda 100% localmente, sem chamada a serviço externo, então o arquivo original sempre permanece em disco independentemente da biblioteca de extração. `.doc` legado (formato binário fechado, pré-XML) continua sem extração real — limitação conhecida e documentada, não um bug; suportá-lo exigiria uma biblioteca completamente diferente, provavelmente com heurísticas menos confiáveis.

Gate vigente: encerrado. O merge do PR #109 foi autorizado (`Autorizado`) e executado por squash em `73a41bb0d5a89a672d88d6487ea45810e6c8137e`. Esta task está formalmente concluída. Word legado (`.doc`) e OCR de PDF digitalizado permanecem fora deste encerramento, deliberadamente adiados.

Histórico de gates desta task: encerramento da Task 090 → CEO pergunta "Helpper, o que você propõe que façamos agora?" → recomendo completar a extração real de Word (`.docx`) como continuação natural → CEO responde "Sim" → avalio `mammoth`, testando os três cenários necessários → apresento a comparação e o escopo técnico restrito a `.docx` moderno → `Autorizado` (execução completa do escopo, criação da task, branch, commit, push e PR) → `Autorizado` (merge do PR #109, integrado em `73a41bb0d5a89a672d88d6487ea45810e6c8137e`).

## Revisão e entrega

Apresentei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` com falha esperada e documentada, `npm audit`) e o estado Git, e solicitei explicitamente o gate de merge antes de integrar esta mudança em `main`.

## Encerramento — 2026-08-18

**Gate de encerramento**: o CEO autorizou (`Autorizado`) o squash merge do PR #109.

**Integração**: PR #109 integrado em `main` via squash merge, commit `73a41bb0d5a89a672d88d6487ea45810e6c8137e`, em 2026-08-18T17:07:47Z. Escopo integrado: exatamente os 9 arquivos previstos em `allowed_paths` — criação de `00_SYSTEM/tasks/active/TASK-2026-091-fase7-extracao-real-word.md`; edição de `src/modules/documents/file-storage.service.ts`, `tests/file-storage.service.test.ts`, `tests/document.integration.test.ts`, `package.json`, `package-lock.json`, `README.md`, o Plano Mestre e `changes.jsonl`. Nenhuma mudança de schema, nenhuma rota nova.

**Verificação pós-merge**: sincronizei `main` local via fast-forward (`git pull --ff-only`, `a3d1b9b..73a41bb`), rodei `npm install` para alinhar `node_modules` ao `package-lock.json` sincronizado, e reexecutei `npm run typecheck`, `npm test` e `npm run build` diretamente contra o `main` já integrado — typecheck limpo, 142/142 testes passando em 33 arquivos, build sem erros. `npm audit` pós-instalação confirmou as mesmas seis vulnerabilidades pré-existentes, nenhuma nova.

**Estado final**: a extração real de conteúdo de documentos — iniciada na Task 087 para `.txt`/`.md`, estendida na Task 090 para `.pdf` — agora cobre também `.docx`, via `mammoth`. Os três formatos de documento mais comuns no dia a dia (texto puro, PDF, Word) têm extração real. DOCX corrompido ou sem texto é tratado graciosamente (`content: null`, sem quebrar o upload), mesmo padrão de três estados já usado no PDF. Word legado (`.doc`) e OCR de PDF digitalizado permanecem deliberadamente fora de escopo. Embeddings/busca vetorial continuam sendo o próximo entregável formal não iniciado da Fase 7 — com esta task, a extração real de arquivos está tão completa quanto faz sentido sem OCR ou uma decisão de custo real (embeddings).

**Escopo preservado**: nenhuma alteração fora de `allowed_paths` foi feita; nenhum código de identidade/autenticação/autorização foi tocado; nenhuma credencial ou dado real foi introduzido; nenhuma decisão de multi-organização foi tomada ou presumida; nenhuma chamada a serviço externo foi introduzida (extração 100% local); nenhuma mudança de schema ou rota nova.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: completar a extração real de conteúdo de documentos, cobrindo `.docx` além de texto puro (Task 087) e PDF (Task 090), fechando os três formatos mais comuns sem introduzir dependências pesadas ou serviços externos.

**Resultado conhecido**: `document_version.content` agora é populado de verdade a partir de arquivos `.docx` reais, via uma dependência sem vulnerabilidades e sem binding nativo; os quatro cenários relevantes (DOCX válido, vazio, corrompido, e `.doc` legado não suportado) estão cobertos por testes reais, sem mocks.

**O que ajudou**: reaproveitar exatamente o padrão já validado na Task 090 (avaliar a biblioteca antes de propor, testar os três cenários de borda antes de escrever código de produção, manter a mensagem de resposta com os mesmos três estados) tornou esta task mais rápida e previsível — não houve surpresas na escolha da biblioteca (`mammoth` é o padrão de fato, sem alternativas leves competindo como no caso do PDF) nem na implementação.

**O que dificultou**: construir um `.docx` válido à mão exige entender a estrutura mínima do formato Office Open XML (três partes: `[Content_Types].xml`, `_rels/.rels`, `word/document.xml`) dentro de um contêiner ZIP — mais peças móveis que o PDF (que é um único fluxo de bytes). Resolvido usando `jszip` (já uma dependência transitiva de `mammoth`, declarada explicitamente como devDependency) para montar o ZIP corretamente, em vez de tentar construir bytes de ZIP à mão — decisão deliberada de não repetir o tipo de risco que apareceu no bug do PDF (formato binário construído à mão é frágil).

**Surpresas**: nenhuma. O teste multipart de integração exigiu `Buffer.concat` em vez de concatenação de strings, porque o conteúdo do `.docx` é binário de verdade (comprimido via ZIP), diferente do PDF de teste (que era ASCII puro) — isso já era esperado antes de escrever o teste, não uma descoberta.

**Riscos materializados**: nenhum. Diferente da Task 090 (que pegou um bug real no fixture de PDF), esta task não teve nenhum problema inesperado — provavelmente porque usei uma biblioteca (`jszip`) para construir o fixture em vez de bytes manuais.

**Perguntas em aberto**: nenhuma nova. Com texto puro, PDF e Word cobertos, a próxima decisão real da Fase 7 é sobre embeddings/busca vetorial, que depende de uma decisão de custo (API de embeddings) ainda não tomada pelo CEO — não uma questão técnica em aberto.

**Ações propostas**: nenhuma ação de processo nova; a prática de "avaliar biblioteca com teste real antes de propor escopo" já está bem estabelecida (Tasks 090 e 091) e deve continuar sendo aplicada a qualquer dependência nova futura.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
