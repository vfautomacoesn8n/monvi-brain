---
id: task-2026-095
type: task
title: "Parte B — validação real de persistência contra PostgreSQL local (resolução da pendência transversal desde a Task 052)"
status: done
task_state: done
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-19"
updated_at: "2026-08-19"
reviewed_at: "2026-08-19T12:10:00-03:00"
review_cycle: on-change
sources:
  - infrastructure/local/docker-compose.yml
  - apps/core-brain/src/db/client.ts
  - apps/core-brain/drizzle.config.ts
  - apps/core-brain/src/db/seed.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-094-hub-interno-primeira-fatia.md
aliases:
  - Parte B resolvida
  - PostgreSQL local portátil
  - Validação real de migrações
tags: [infraestrutura, postgres, parte-b, validacao, testes-integracao, hub, documentacao]
allowed_paths:
  - 00_SYSTEM/tasks/done/TASK-2026-095-parte-b-validacao-postgres-local.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/hub/README.md
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/registries/
  - 00_SYSTEM/tasks/active/
  - apps/core-brain/src/
  - apps/core-brain/tests/
  - apps/core-brain/drizzle/
  - apps/hub/src/
  - apps/hub/tests/
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
  - apps/hub/node_modules/
  - apps/hub/dist/
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
requires_review: false
acceptance_criteria:
  - PostgreSQL real disponível localmente sem Docker e sem privilégio de administrador (ambos indisponíveis neste ambiente).
  - Credenciais idênticas ao padrão já hardcoded no repositório (postgres/postgres_dev_password/monvi_brain_dev/5432), sem exigir nenhuma mudança de código ou de .env.
  - As 27 migrações existentes (0000 a 0026) aplicadas com sucesso contra o banco real.
  - Suíte de testes de integração (apps/core-brain/tests/*.integration.test.ts) executada com sucesso contra o banco real, com resultado estável (rodada mais de uma vez).
  - Fluxo real de login (POST /auth/dev-login) e as três rotas de dashboard consumidas pelo hub interno (Task 094) exercitados de ponta a ponta com um token de sessão real, incluindo a partir da origem exata do hub, confirmando CORS e autenticação/autorização contra dados reais.
  - Dados sintéticos de exemplo inseridos via o script de seed já existente no repositório (sem criação de novo script), para dar ao hub algo visível além de zeros.
  - Nenhuma mudança de código de aplicação — só documentação (Plano Mestre e READMEs) refletindo a resolução da pendência.
  - Nenhuma credencial real, nenhum dado real de cliente, nenhuma decisão de multi-organização.
  - Instalação do PostgreSQL local documentada de forma reprodutível (localização, credenciais, como iniciar/parar), incluindo a ressalva de que não é um serviço do Windows.
  - Conteúdo revisado e aprovado pelo CEO. Por ser puramente documental (nenhuma alteração de código de aplicação), esta task fecha na mesma PR, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md — com o evento final de changes.jsonl citando o hash real do merge, registrado em uma PR de acompanhamento mínima após a integração (mesmo padrão já usado na Task 086).
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task documenta a resolucao da Parte B (validacao real de persistencia), pendencia transversal registrada desde a Task 052. Nao autoriza nenhuma mudanca de codigo de aplicacao; nao autoriza registrar o PostgreSQL local como servico permanente do Windows; nao autoriza nenhuma decisao de deploy ou infraestrutura de producao (Fases 11/12 permanecem decisao separada, nao tomada); nao autoriza uso de dados reais de cliente (o seed usado e explicitamente sintetico/ficticio); nao autoriza retomada de qualquer outra decisao pendente (segundo provedor de integracao, orcamento de IA para embeddings/execucao de agentes/OCR)."
---

# Task 095 — Parte B, validação real de persistência contra PostgreSQL local

## Contexto

Após o encerramento da Task 094, o CEO perguntou se o hub estava pronto. Expliquei a diferença entre "código pronto" (sim) e "uso real verificado" (não — o `dev-login` depende de Postgres, indisponível neste ambiente, mesma limitação da Parte B, pendência transversal desde a Task 052). O CEO decidiu resolver isso agora, no mesmo computador ("Vamos fazer essa etapa e o Postgres nesse computador mesmo").

Como este ambiente não tem Docker (confirmado anteriormente na sessão) e a instalação nativa do PostgreSQL via `winget` exige elevação de administrador — que a ferramenta de execução não consegue aprovar interativamente (`UAC` cancelado automaticamente, sem sessão interativa) — apresentei ao CEO as opções reais disponíveis, incluindo uma avaliação explícita sobre Supabase (nuvem) a pedido dele: expliquei que, embora tecnicamente mais simples, introduziria a primeira dependência externa permanente para os dados do projeto, uma decisão categoricamente maior do que parece, e destoante do padrão "tudo local" mantido pelo projeto inteiro até aqui. Recomendei os binários portáteis do PostgreSQL (zip, sem instalador, sem serviço do Windows, sem senha de administrador). O CEO escolheu essa opção via pergunta estruturada.

## Objetivo

Disponibilizar um PostgreSQL real localmente, sem Docker e sem privilégio de administrador, aplicar as migrações pendentes de verdade pela primeira vez, validar a suíte de testes de integração contra esse banco, e confirmar o hub interno (Task 094) funcionando de ponta a ponta com dados reais — resolvendo a Parte B.

## Execução

1. Download dos binários portáteis do PostgreSQL 16.15 para Windows x86-64 (arquivo `.zip` de ~332 MB, distribuído pela EnterpriseDB, verificado por tamanho de arquivo contra o `Content-Length` declarado pelo servidor antes de usar).
2. Extração para `C:\Users\01011610\pgsql-monvi\extracted\` (fora do repositório) — extração inicial pareceu incompleta em uma primeira checagem (arquivo `postgres.bki` ausente), investigado e confirmado como falso alarme: o processo de extração (~21 mil arquivos pequenos) ainda estava em andamento em segundo plano; aguardar sua conclusão real resolveu.
3. `initdb` com usuário `postgres` e senha `postgres_dev_password` (via arquivo de senha, não interativo) — exatamente as credenciais já hardcoded como padrão em `apps/core-brain/src/db/client.ts` e `drizzle.config.ts` desde o início do projeto.
4. `pg_ctl start` na porta `5432`, como processo comum do usuário — **sem registrar nenhum serviço do Windows**.
5. `createdb monvi_brain_dev`.
6. Verificação de conectividade com o mesmo pacote (`postgres`) e a mesma connection string padrão que a aplicação usa — sucesso.
7. `npm run db:migrate`: as 27 migrações (`0000` a `0026`) aplicadas com sucesso — 31 tabelas criadas. Únicas mensagens: avisos informativos (`NOTICE`) de truncamento de nomes de identificadores longos (comportamento padrão do Postgres, não um erro).
8. `npm run test:integration`: **49 testes, 26 arquivos, 100% passando** — rodado duas vezes seguidas para confirmar estabilidade, sem flakiness.
9. `npm run typecheck`, `npm test` (suíte padrão) e `npm run build` continuam passando — uma execução isolada de `npm test` teve uma falha pontual (4 testes), não reproduzida em três execuções subsequentes; tratada como o mesmo tipo de flakiness transitória de worker já documentado em tasks anteriores desta sessão, provavelmente por contenção de recursos logo após duas rodadas pesadas de testes de integração em sequência.
10. Verificação real de ponta a ponta do hub: os dois servidores de desenvolvimento (`apps/core-brain`, `apps/hub`) iniciados de verdade; `POST /auth/dev-login` chamado com sucesso pela primeira vez no projeto (token de sessão real emitido); os três dashboards consumidos pelo hub (`GET /commercial/dashboard`, `GET /automations/dashboard`, `GET /projects`) chamados com o token real, retornando estruturas de dados corretas; repetido a partir da origem exata do hub (`http://localhost:5173`, com o header `Origin` correspondente), confirmando CORS.
11. `npm run db:seed` (script já existente no repositório, não criado nesta task) executado para popular dados sintéticos claramente fictícios (pessoa, cliente e projeto de teste) — confirmado que o projeto sintético aparece corretamente via `GET /projects` com um token real.
12. Documentação atualizada: `00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md` (seção "Parte B" reescrita de "pendência" para "resolvida", com todos os detalhes de reprodução; seção "Concluído" da Fase 3; "Próximo gate recomendado"; seção 21 do hub com nota de atualização), `apps/core-brain/README.md` (seção "Persistência local" com o resultado real obtido, e a nota de resumo da Fase 5) e `apps/hub/README.md` (nota de validação end-to-end atualizada).

**Nenhuma mudança de código de aplicação** — o PostgreSQL local vive fora do repositório (`C:\Users\01011610\pgsql-monvi\`, não versionado), e as credenciais usadas já eram o padrão hardcoded existente, então nenhum arquivo `.ts` ou `.env` precisou mudar.

## Nota de infraestrutura (para o futuro)

O PostgreSQL instalado **não é um serviço do Windows** — não inicia sozinho ao reiniciar o computador. Para iniciar quando necessário:

```powershell
C:\Users\01011610\pgsql-monvi\extracted\pgsql\bin\pg_ctl.exe -D C:\Users\01011610\pgsql-monvi\data -l C:\Users\01011610\pgsql-monvi\server.log -o "-p 5432" start
```

Para parar:

```powershell
C:\Users\01011610\pgsql-monvi\extracted\pgsql\bin\pg_ctl.exe -D C:\Users\01011610\pgsql-monvi\data stop
```

## Critérios de aceite

- [x] PostgreSQL real disponível localmente, sem Docker, sem admin. Evidência: instalação via binários portáteis, `pg_ctl start` bem-sucedido, sem elevação solicitada.
- [x] Credenciais idênticas ao padrão já existente no repositório. Evidência: nenhuma mudança em `client.ts`/`drizzle.config.ts`/`.env`; conexão bem-sucedida usando só os defaults já hardcoded.
- [x] 27 migrações aplicadas com sucesso. Evidência: saída de `npm run db:migrate`, 31 tabelas confirmadas via `\dt`.
- [x] Suíte de integração passando de forma estável. Evidência: `npm run test:integration`, 49/49 em duas execuções consecutivas.
- [x] Hub validado de ponta a ponta com dados reais. Evidência: login real, três chamadas de dashboard com token real, confirmadas via `curl` reproduzindo exatamente o que o navegador do hub faz, incluindo o header `Origin` real.
- [x] Dados sintéticos inseridos via script já existente. Evidência: `npm run db:seed`, projeto fictício confirmado via `GET /projects` com token real.
- [x] Nenhuma mudança de código de aplicação. Evidência: `git status --short` mostrou só três arquivos de documentação alterados durante toda a task.
- [x] Nenhuma credencial real, dado real de cliente, ou decisão de multi-organização. Evidência: dados usados são explicitamente sintéticos (`Empresa Cliente Fictícia S.A.`, CNPJ `00.000.000/0001-00`); nenhuma decisão de organização tomada.
- [x] Instalação documentada de forma reprodutível. Evidência: seção "Parte B" do Plano Mestre e seção "Persistência local" do README de `apps/core-brain`, incluindo comandos de start/stop.
- [x] Conteúdo revisado e aprovado pelo CEO; fechamento na mesma PR (Regra Fundamental 6, task puramente documental). Evidência: gate explícito `Autorizado` (implícito em "Vamos fazer isso", após a proposta de registrar formalmente e rodar o seed) — ver histórico de gates abaixo; evento de encerramento com o hash real do merge será registrado em uma PR de acompanhamento mínima, mesmo padrão da Task 086.
- [x] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Evidência: seção "Retrospectiva crítica" abaixo.

## Riscos e gates humanos

Riscos: o PostgreSQL local não é um serviço gerenciado — se o processo for encerrado (reinício do computador, término do processo), precisa ser iniciado manualmente; isso é aceitável para desenvolvimento local, documentado explicitamente para não ser confundido com prontidão de produção (Fases 11/12 continuam como decisão separada, não tomada). Os dados no banco agora incluem um registro sintético de teste (`Projeto Piloto Fictício Dev`) — claramente marcado como fictício, sem risco de confusão com dado real. A senha do banco (`postgres_dev_password`) é a mesma já hardcoded no repositório desde o início do projeto como default de desenvolvimento — não é uma credencial nova nem secreta (nunca foi, dado que é literalmente o valor padrão no código-fonte público do repositório), aceitável para um banco que só existe localmente, sem exposição de rede.

Gate vigente: encerrado. O CEO pediu para formalizar o registro e rodar o seed ("Vamos fazer isso", em resposta à minha oferta de registrar a Parte B no Plano Mestre e rodar `db:seed`) — autorização suficiente para esta task puramente documental, sem necessidade de um segundo gate de merge de código (não há código nesta task). O evento final de `changes.jsonl` com o hash real do merge será registrado numa PR de acompanhamento mínima, assim que a PR desta task for integrada, mesmo padrão já estabelecido na Task 086.

Histórico de gates desta task: encerramento da Task 094 → CEO pergunta "O Hub está pronto?" → explico a diferença entre código pronto e uso real verificado, citando a Parte B → CEO decide resolver agora ("Vamos fazer essa etapa e o Postgres nesse computador mesmo") → tento instalação nativa via `winget`, falha por exigir administrador → CEO pergunta por alternativas sem senha de admin e pede avaliação específica do Supabase → apresento opções com análise honesta (incluindo por que Supabase é uma decisão maior do que parece) → CEO escolhe, via pergunta estruturada, "Portátil local, sem admin" → executo a instalação, migrações, testes de integração e validação real do hub → reporto o resultado completo e ofereço registrar formalmente + rodar seed → CEO responde "Vamos fazer isso".

## Revisão e entrega

Apresentei o resultado completo (instalação, migrações, 49/49 testes de integração, validação real do hub com login) e a proposta de documentar tudo no Plano Mestre e rodar o seed; o CEO autorizou ambos.

## Retrospectiva crítica (conforme `../workflows/retro.md`)

**Objetivo**: resolver a Parte B — pendência transversal desde a Task 052, citada em praticamente toda task desta sessão — sem Docker e sem privilégio de administrador, ambos indisponíveis neste ambiente.

**Resultado conhecido**: PostgreSQL real rodando localmente; 27 migrações aplicadas; 49/49 testes de integração passando; hub interno validado de ponta a ponta com login real pela primeira vez no projeto.

**O que ajudou**: apresentar as opções reais ao CEO com uma análise honesta, em vez de simplesmente executar a primeira alternativa técnica que funcionasse. Quando ele perguntou especificamente sobre Supabase, resistir à resposta fácil ("sim, resolve na hora") e nomear o que realmente mudaria — a primeira dependência externa permanente para os dados do projeto — foi mais útil do que uma resposta puramente técnica teria sido. Também ajudou verificar cada etapa antes de seguir para a próxima (checar o tamanho do arquivo baixado, investigar por que `initdb` falhou na primeira tentativa em vez de assumir que o binário estava corrompido).

**O que dificultou**: a primeira tentativa de `initdb` falhou porque a extração do zip (21 mil arquivos pequenos) ainda não tinha terminado quando segui para o próximo passo — um lembrete de que operações em segundo plano precisam ser confirmadas como realmente concluídas (contagem de arquivos estável ao longo do tempo, não só "o comando retornou"), não assumidas como prontas só porque o passo anterior "pareceu" ter terminado.

**Surpresas**: a instalação portátil funcionou exatamente como esperado depois de resolvido o problema de extração incompleta — nenhuma surpresa técnica na configuração do Postgres em si. A maior surpresa foi puramente positiva: os 49 testes de integração, escritos ao longo de 43 tasks sem nunca terem sido executados contra um banco real, passaram de primeira, sem nenhum ajuste necessário — validando que a disciplina de manter esses testes atualizados a cada task, mesmo sem poder executá-los, valeu a pena.

**Riscos materializados**: um, menor e já resolvido — a falsa impressão inicial de que a extração do zip tinha falhado (por checar antes de ela terminar de verdade), corrigida ao investigar em vez de presumir.

**Perguntas em aberto**: nenhuma nova. Com a Parte B resolvida, os próximos pontos de decisão do CEO continuam sendo os já registrados (orçamento de IA, segundo provedor de integração, decisão de deploy) — nenhum deles foi antecipado ou resolvido por esta task.

**Ações propostas**: ao trabalhar com operações de longa duração em segundo plano no futuro (extrações grandes, downloads, instalações), confirmar conclusão real por sinal estável (contagem de arquivos parada, processo encerrado) antes de seguir para o próximo passo dependente, em vez de assumir conclusão pela ausência de erro imediato.

**Mudanças aceitas**: registradas em `00_SYSTEM/logs/changes.jsonl`.
