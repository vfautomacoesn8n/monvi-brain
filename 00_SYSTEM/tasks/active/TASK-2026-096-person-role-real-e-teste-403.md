---
id: task-2026-096
type: task
title: "Atribuição real de papel por pessoa (person_role) e cobertura real do caminho de negação (403)"
status: active
task_state: in-progress
owner: ceo-monvi
agent: claude-cursor
reviewer: ceo-monvi
active_client: null
active_project: null
confidentiality: internal
classification: internal
created_at: "2026-08-19"
updated_at: "2026-08-19"
reviewed_at: null
review_cycle: on-change
sources:
  - apps/core-brain/src/modules/auth/session.service.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/src/modules/documents/access.service.ts
  - apps/core-brain/tests/document-permission.integration.test.ts
related:
  - 00_SYSTEM/tasks/done/TASK-2026-095-parte-b-validacao-postgres-local.md
aliases:
  - person_role
  - Cobertura real do 403
  - RBAC real por pessoa
tags: [core-brain, rbac, seguranca, schema, migracao, testes-integracao]
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-096-person-role-real-e-teste-403.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - apps/core-brain/README.md
  - apps/core-brain/src/db/schema/person-role.ts
  - apps/core-brain/src/db/schema/index.ts
  - apps/core-brain/src/modules/auth/session.service.ts
  - apps/core-brain/tests/document-permission.integration.test.ts
  - apps/core-brain/drizzle/0027_tense_wild_pack.sql
  - apps/core-brain/drizzle/meta/0027_snapshot.json
  - apps/core-brain/drizzle/meta/_journal.json
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/registries/
  - 00_SYSTEM/tasks/done/
  - apps/core-brain/src/db/schema/client.ts
  - apps/core-brain/src/db/schema/person.ts
  - apps/core-brain/src/db/schema/identity.ts
  - apps/core-brain/src/db/schema/profile.ts
  - apps/core-brain/src/db/schema/role.ts
  - apps/core-brain/src/http/middlewares/authenticate.ts
  - apps/core-brain/src/http/middlewares/authorize.ts
  - apps/core-brain/src/http/routes/
  - apps/core-brain/src/modules/documents/access.service.ts
  - apps/core-brain/src/modules/auth/tokens.ts
  - apps/core-brain/tests/
  - apps/core-brain/drizzle/0000_orange_hammerhead.sql
  - apps/core-brain/drizzle/0001_deep_scarlet_spider.sql
  - apps/core-brain/drizzle/0002_nifty_electro.sql
  - apps/core-brain/drizzle/0003_daffy_odin.sql
  - apps/core-brain/drizzle/0004_icy_pestilence.sql
  - apps/core-brain/drizzle/0005_curious_synch.sql
  - apps/core-brain/drizzle/0006_equal_gladiator.sql
  - apps/core-brain/drizzle/0007_secret_wither.sql
  - apps/core-brain/drizzle/0008_ancient_santa_claus.sql
  - apps/core-brain/drizzle/0009_dazzling_kronos.sql
  - apps/core-brain/drizzle/0010_modern_maelstrom.sql
  - apps/core-brain/drizzle/0011_tearful_expediter.sql
  - apps/core-brain/drizzle/0012_light_havok.sql
  - apps/core-brain/drizzle/0013_foamy_nighthawk.sql
  - apps/core-brain/drizzle/0014_purple_redwing.sql
  - apps/core-brain/drizzle/0015_dizzy_devos.sql
  - apps/core-brain/drizzle/0016_funny_red_hulk.sql
  - apps/core-brain/drizzle/0017_redundant_slyde.sql
  - apps/core-brain/drizzle/0018_third_ma_gnuci.sql
  - apps/core-brain/drizzle/0019_salty_mister_fear.sql
  - apps/core-brain/drizzle/0020_violet_thor_girl.sql
  - apps/core-brain/drizzle/0021_perfect_miek.sql
  - apps/core-brain/drizzle/0022_brainy_grim_reaper.sql
  - apps/core-brain/drizzle/0023_flat_xavin.sql
  - apps/core-brain/drizzle/0024_complete_hitman.sql
  - apps/core-brain/drizzle/0025_cynical_mother_askani.sql
  - apps/core-brain/drizzle/0026_late_zemo.sql
  - apps/core-brain/drizzle/meta/0000_snapshot.json
  - apps/core-brain/drizzle/meta/0026_snapshot.json
  - apps/core-brain/package.json
  - apps/core-brain/vitest.config.ts
  - apps/core-brain/vitest.integration.config.ts
  - apps/core-brain/drizzle.config.ts
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
  - apps/hub/
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
requires_review: false
acceptance_criteria:
  - Nova tabela person_role (pessoa ↔ papel, chave composta, sem coluna id própria — mesmo padrão de role_permission).
  - validateSessionToken consulta person_role de verdade; quando não há atribuição explícita, cai de volta para o papel admin — preserva o comportamento de toda sessão já existente, sem exigir mudança em nenhum teste pré-existente.
  - Nenhuma atribuição real de papel a pessoas reais do sistema — fora de escopo, decisão futura separada.
  - Teste de integração novo, real (sem mock), que atribui um papel sem permissão de documento a uma pessoa de teste via person_role e confirma 403 real em GET /documents/:id de um documento confidencial.
  - Migração gerada e aplicada com sucesso contra o Postgres local (Task 095).
  - Suíte de integração completa (todos os 26 arquivos) executada com sucesso após a mudança, confirmando que nenhum teste pré-existente quebrou.
  - npm run typecheck, npm test e npm run build continuam passando.
  - README.md de apps/core-brain e Plano Mestre atualizados, documentando o novo mecanismo e o fechamento da lacuna de cobertura registrada na Task 095.
  - Nenhuma credencial nova, nenhum dado real, nenhuma decisão de multi-organização.
  - Conteúdo revisado e aprovado pelo CEO antes da integração em main. Por alterar código, esta task segue com PR de encerramento separada, posterior ao merge e à verificação pós-merge, conforme a Regra Fundamental 6 de TASK-LIFECYCLE.md.
  - Retrospectiva crítica executada conforme ../workflows/retro.md antes da solicitação do gate de encerramento, conforme a Regra Fundamental 5 de TASK-LIFECYCLE.md.
blocked_reason: "Esta task autoriza exclusivamente a introducao da tabela person_role e o teste real do caminho de negacao (403) de documento, com fallback para admin preservando o comportamento de toda sessao ja existente. Nao autoriza atribuir papeis reais a pessoas reais do sistema; nao autoriza mudar o comportamento de nenhuma rota ou sessao hoje em uso; nao autoriza revisar ou redesenhar o modelo de RBAC alem do necessario para tornar o mecanismo testavel; nao autoriza qualquer trabalho no hub interno (isso e conversa separada, ainda em fase de elaboracao/planejamento, sem escopo tecnico definido); nao autoriza retomada de qualquer outra decisao pendente (segundo provedor de integracao, orcamento de IA)."
---

# Task 096 — Atribuição real de papel por pessoa (`person_role`) e cobertura real do 403

## Contexto

Após o encerramento da Task 095 (Parte B resolvida), o CEO perguntou o que fazer agora. Recomendei fechar a única lacuna de cobertura de teste que só podia ser resolvida com Postgres real disponível: o caminho de negação (403) de `document-permission.integration.test.ts`, documentado desde a Task 072 como não-exercitável porque toda sessão de teste resolve para o papel `admin`. O CEO aprovou o escopo e, na mesma mensagem, pediu para começar a elaborar (só elaborar, não produzir ainda) uma versão melhor do hub interno.

Ao investigar antes de implementar, descobri que a causa raiz é maior do que a descrição sugeria: não existe, e nunca existiu, nenhuma tabela conectando pessoa a papel no schema do projeto. `validateSessionToken` (Fase 4) usa um `leftJoin(role, eq(role.name, 'admin'))` — um join fixo, não um atalho contornando um mecanismo existente. Reportei esse achado ao CEO junto com uma proposta de escopo conservadora (nova tabela real, com fallback para `admin` preservando o comportamento de hoje, só um teste novo) antes de escrever qualquer código, para não transformar isso numa reforma de RBAC não solicitada. O CEO confirmou o escopo.

## Objetivo

Tornar a atribuição de papel por pessoa real (não mais um join fixo), mantendo o comportamento de toda sessão hoje existente inalterado, e usar esse mecanismo para finalmente exercitar o caminho de negação (403) de acesso granular a documento — lacuna registrada desde a Task 072 e reconfirmada como pendente na Task 095.

## Escopo executado

1. `apps/core-brain/src/db/schema/person-role.ts` (novo arquivo): tabela `person_role` — `personId`/`roleId` (chave primária composta, sem coluna `id` própria, mesmo padrão de `role_permission`), `createdAt`. Exportada em `src/db/schema/index.ts`.
2. Migração gerada via `npm run db:generate`: `drizzle/0027_tense_wild_pack.sql` — `CREATE TABLE person_role` com as duas FKs (`ON DELETE CASCADE`), sem nenhuma outra alteração de schema. Aplicada com sucesso contra o Postgres local (Task 095): 32 tabelas agora, `person_role` confirmada via `\d`.
3. `apps/core-brain/src/modules/auth/session.service.ts`: `validateSessionToken` reescrito — a consulta original (que fazia `leftJoin(role, eq(role.name, 'admin'))` dentro do mesmo `select` de sessão/pessoa/identidade) foi separada em duas etapas: (a) consulta de sessão/pessoa/identidade/perfil sem nenhum join de papel; (b) consulta separada em `person_role` (com `innerJoin` em `role`) buscando uma atribuição explícita para aquela pessoa — se encontrada, usa esse papel; se não, cai de volta para o papel `admin` por nome, exatamente como antes. Isso preserva 100% do comportamento de qualquer sessão já existente (nenhuma pessoa tem atribuição explícita ainda), sem exigir nenhuma mudança nos outros 25 arquivos de teste de integração.
4. `apps/core-brain/tests/document-permission.integration.test.ts`: estendido com uma segunda pessoa/identidade/sessão de teste — um papel novo (`document-reader-teste`, só com a permissão `document:read`, criado e limpo dentro do próprio teste) atribuído via `person_role` a essa pessoa. Novo teste (`nega acesso (403) a um documento confidencial para uma sessão real sem concessão`) confirma `403` real ao tentar `GET` o documento confidencial criado pela pessoa admin original, sem nenhuma concessão granular para a pessoa leitora. O teste original (ciclo de concessão/listagem/revogação) permanece inalterado, ainda usando a sessão admin (que continua precisando do bypass de admin para gerenciar permissões — comportamento correto, não afetado por esta task). A nota desatualizada no topo do arquivo foi substituída por uma explicando a correção.

**Descoberta durante a implementação**: a primeira tentativa de rodar o teste falhou com `401` em vez do esperado — investigado diretamente (bypassando o `try/catch` silencioso de `validateSessionToken` para ver o erro real), revelou `relação "person_role" não existe`: eu tinha gerado a migração mas esquecido de aplicá-la contra o Postgres local antes de testar. Corrigido rodando `npm run db:migrate`.

Validado localmente: `npm run typecheck` sem erros; `npm test` com 144/144 testes passando (nenhum teste pré-existente quebrou); `npm run build` sem erros; `npm run test:integration` com **50/50 testes passando** (era 49 antes desta task), rodado duas vezes seguidas para confirmar estabilidade.

**Nota operacional**: durante a validação pós-mudança, uma execução isolada de `npm test` apresentou falhas por timeout — investigado e identificado como servidores de desenvolvimento órfãos (deixados rodando de uma verificação anterior; `TaskStop` havia encerrado apenas o processo-wrapper rastreado, não os processos filhos de `tsx watch`/`vite`, que continuaram ligados e disputando porta/recursos). Confirmado via checagem direta de porta (`Get-NetTCPConnection`), processos encerrados manualmente, suíte reexecutada com sucesso. Não é uma regressão desta task.

## Deliberadamente fora desta fatia

Atribuir papéis reais a pessoas reais do sistema (isso é uma decisão de segurança de verdade — quem deveria ter qual papel — não uma decisão de testabilidade, e seria irresponsável decidir isso sem envolvimento do CEO); qualquer mudança de comportamento para sessões hoje em produção/uso (o fallback para `admin` garante que nada muda até que atribuições explícitas comecem a ser feitas); qualquer trabalho no hub interno (conversa separada, ainda em elaboração).

## Critérios de aceite

- [x] Tabela `person_role` criada, mesmo padrão de `role_permission`. Evidência: `src/db/schema/person-role.ts`, migração `0027_tense_wild_pack.sql`.
- [x] `validateSessionToken` consulta de verdade, com fallback para `admin`. Evidência: `session.service.ts`, lógica de `explicitRole ?? fallback`.
- [x] Nenhuma atribuição real feita. Evidência: nenhum `INSERT` em `person_role` fora do teste automatizado (que limpa após si).
- [x] Teste novo, real, confirma `403`. Evidência: `document-permission.integration.test.ts`, teste `nega acesso (403)...`.
- [x] Migração aplicada com sucesso contra Postgres real. Evidência: `\d person_role` confirmado; `npm run db:migrate` sem erros.
- [x] Suíte de integração completa passando. Evidência: 50/50 testes, 26 arquivos, duas execuções consecutivas.
- [x] `typecheck`, `test`, `build` continuam passando. Evidência: 144/144 testes unitários, build limpo.
- [x] Documentação atualizada. Evidência: seção "Escopo implementado" do README de `apps/core-brain` e seção "Concluído"/Parte B do Plano Mestre.
- [x] Nenhuma credencial, dado real, decisão de multi-organização. Evidência: diff restrito aos arquivos previstos; nenhum papel real atribuído.
- [ ] Conteúdo revisado e aprovado pelo CEO; encerramento em PR separada (Regra Fundamental 6). Pendente do gate de merge.
- [ ] Retrospectiva crítica executada conforme `../workflows/retro.md` (Regra Fundamental 5). Pendente, será executada antes do gate de encerramento.

## Riscos e gates humanos

Riscos: o fallback para `admin` significa que, na prática, o comportamento de segurança do sistema não mudou hoje — toda pessoa sem atribuição explícita continua efetivamente `admin`. Isso é deliberado (evita uma mudança de comportamento não solicitada em produção), mas significa que esta task, por si só, **não é uma correção de segurança** — é o que a torna testável. Uma correção de segurança de verdade (atribuir papéis reais, ou inverter o fallback para negar por padrão) é uma decisão distinta, maior, e explicitamente fora desta fatia. Documentado aqui para não ser confundido com "RBAC agora está seguro".

Gate vigente: aguardando autorização do CEO para o merge do PR de implementação.

Histórico de gates desta task: encerramento da Task 095 → CEO pergunta "O que podemos fazer agora?" → recomendo fechar a lacuna de cobertura do 403, sinalizando que é a única coisa que só a Parte B destravava → CEO responde "Feche essa lacuna e vamos começar a elaborar um hub melhor" → investigo antes de implementar, descubro que não existe tabela pessoa↔papel nenhuma → reporto o achado com proposta de escopo conservadora (fallback preserva comportamento atual) → CEO confirma ("Aprovo o escopo") e pede para tratar o hub como conversa de elaboração separada, não produção ainda.

## Revisão e entrega

Apresentarei o diff completo, as validações locais (`typecheck`, `test`, `build`, `test:integration` real contra Postgres local, 50/50) e o estado Git, e solicitarei explicitamente o gate de merge antes de integrar esta mudança em `main`.
