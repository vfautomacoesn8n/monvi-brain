# Monvi Core Brain

Fundação técnica do Monvi Core Brain MVP, autorizada pela Task 041 e evoluída pelas Tasks 043 (persistência), 044 (identidade/autenticação/autorização), 045 (correção e validação factual), 053 a 062 (Fase 5 — API operacional de clientes, projetos, contatos, participação em projetos, tarefas, entregáveis, aprovações, dependências, riscos, comentários, histórico de mudanças e dashboard de projeto — os 12 entregáveis da fase, completos), 065, 066, 067 e 068 (Fase 6 — `lead`, `opportunity`, `activity` e dashboard de indicadores comerciais), 069, 070, 071, 072, 073, 074 e 075 (Fase 7 — `source`, `document`/`document_version`, classificação, permissões granulares, política de retenção, busca textual e memória operacional, camada de conhecimento), e 076 (Fase 8 — `automation_workflow`, catálogo de workflows de automação).

## Escopo implementado

- TypeScript e Fastify;
- configuração validada com Zod;
- logs estruturados;
- tratamento básico de erros;
- `GET /api/v1/health`;
- `GET /api/v1/ready`;
- schema de domínio via Drizzle (pessoa, identidade, perfil, papel, permissão, cliente, projeto, tarefa, entregável, aprovação, dependência, risco, comentário, lead, oportunidade, atividade, fonte de conhecimento, documento, versão de documento, permissão de documento, nota de memória operacional, workflow de automação, sessão);
- persistência local via PostgreSQL e migrações Drizzle (Fase 3);
- autenticação de desenvolvimento (`POST /api/v1/auth/dev-login`, bloqueada quando `NODE_ENV=production`) e autorização RBAC (Fase 4);
- API operacional de clientes, projetos, contatos, participação em projetos, tarefas, entregáveis, aprovações, dependências entre tarefas, riscos e comentários em tarefas (CRUD/gestão de ciclo de vida, com autenticação e RBAC obrigatórios), sob suposição explícita de single-tenant — sem modelo de multi-organização, decisão ainda pendente (Fase 5, Tasks 053 a 062);
- API de leitura do histórico de mudanças (`GET /api/v1/history`), genérica para todas as entidades da Fase 5, reaproveitando a tabela `audit_event` já existente desde a Fase 4 — nenhuma tabela nova criada;
- dashboard operacional mínimo por projeto (`GET /api/v1/projects/:projectId/dashboard`), agregando contagens reais de tarefas, entregáveis, riscos e aprovações por status (e riscos por severidade) — também sem tabela nova, apenas `COUNT(*) GROUP BY status` sobre as tabelas já existentes;
- API operacional de leads (`GET/POST/PATCH/DELETE /api/v1/leads`), primeira entidade da Fase 6 — origem, status e responsável comercial opcional, sob a mesma suposição single-tenant;
- API operacional de oportunidades (`GET/POST/PATCH/DELETE /api/v1/opportunities`), segunda entidade da Fase 6 — origem opcional em `lead`, estágio de funil, motivo de perda e responsável comercial opcional;
- API operacional de atividades (`GET/POST/PATCH/DELETE /api/v1/activities`), terceira entidade da Fase 6 — unifica diagnóstico, proposta e follow-up num único tipo com discriminador (`activity_type`), vinculada a `lead` e/ou `opportunity`;
- dashboard de indicadores comerciais (`GET /api/v1/commercial/dashboard`), agregando contagens reais de leads por status, oportunidades por estágio e atividades por status e por tipo — também sem tabela nova, apenas `COUNT(*) GROUP BY` sobre `lead`, `opportunity` e `activity`;
- API operacional de fontes de conhecimento (`GET/POST/PATCH/DELETE /api/v1/sources`), primeira entidade da Fase 7 — nome, tipo (`manual`/`upload`/`google_drive`/`website`/`api`/`other`), descrição, responsável e status (`active`/`archived`) opcionais, pré-requisito para documentos, permissões e indexação da fase;
- API operacional de documentos e versões (`GET/POST/PATCH/DELETE /api/v1/documents`, `GET/POST /api/v1/documents/:documentId/versions`), segunda entidade da Fase 7 — `document` com título, origem opcional em `source`, responsável, status (`draft`/`review`/`approved`/`deprecated`/`archived`) e confidencialidade (`public`/`internal`/`confidential`/`restricted`) opcionais; `document_version` imutável (sem `PATCH`/`DELETE`), com número de versão auto-incremental por documento e conteúdo textual;
- classificação de documentos (Task 071, terceiro entregável da Fase 7) — `document.confidentiality` reaproveita exatamente o vocabulário canônico já definido em [`KNOWLEDGE-MODEL.md`](../../00_SYSTEM/canonical/KNOWLEDGE-MODEL.md) (`public`/`internal`/`confidential`/`restricted`); `document.status` foi realinhado ao `Status` canônico do mesmo documento (`draft`/`review`/`approved`/`deprecated`/`archived`, antes `draft`/`published`/`archived`);
- permissões granulares por documento (`POST/GET /api/v1/documents/:documentId/permissions`, `DELETE /api/v1/permissions/:id`, Task 072, quarto entregável da Fase 7) — `document_permission` concede acesso (`read`/`write`) a uma pessoa **ou** a um papel (exatamente um dos dois) sobre um documento específico; documentos `public`/`internal` continuam com o comportamento de antes (só RBAC global); documentos `confidential`/`restricted` agora exigem, além do RBAC global, uma concessão explícita — quem não tem `admin` nem concessão recebe 403 em `GET/PATCH/DELETE /documents/:id`, e `GET /documents` filtra da listagem os documentos restritos sem concessão;
- política de retenção de documentos (Task 073, último pré-requisito bloqueante da regra da Fase 7 antes de embeddings) — `document.retentionPolicy` (`indefinite`, padrão, ou `time_limited`) e `document.retentionUntil` (data, obrigatória quando `time_limited`, proibida quando `indefinite`, validado no mesmo pedido); **puramente declarativo nesta versão** — nenhum job descarta ou arquiva automaticamente documentos vencidos, isso depende da Fase 8 (Plataforma de automações), ainda não iniciada;
- indexação e busca textual (`GET /api/v1/search?q=<termo>`, Task 074, entregáveis "indexação"/"busca textual" da Fase 7, combinados numa fatia por serem inseparáveis na prática) — busca por relevância (`ts_rank`) sobre o título do documento e o conteúdo da versão mais recente, usando `to_tsvector`/`plainto_tsquery` do próprio Postgres (idioma `portuguese`), sem nenhuma dependência de software nova; respeita a mesma checagem granular de `document_permission` já usada em `GET /documents` — resultados de documentos `confidential`/`restricted` sem concessão são omitidos, não geram erro; **não indexa arquivos nem faz extração de conteúdo binário** — "extração" real (upload de arquivo, parsing de PDF/Word etc.) segue fora de escopo, deliberadamente adiada até haver uma decisão de infraestrutura de armazenamento de arquivos;
- memória operacional (`GET/POST/PATCH/DELETE /api/v1/memory-notes`, Task 075, penúltimo entregável da Fase 7) — `memory_note`: anotações leves e de curto prazo (contexto operacional, lembretes), distintas de `document` (formal, versionado, classificado); referência genérica opcional a qualquer entidade via `entityType`/`entityId` (texto livre + UUID, sem FK — mesmo padrão de referência polimórfica já usado em `audit_event`/`GET /history`, já que uma nota pode se referir a `lead`, `client`, `project`, `document` etc.), autor automático (`request.user.personId`), `expiresAt` opcional (memória operacional pode ser efêmera; `null` = permanece indefinidamente); `GET /memory-notes` aceita filtro opcional por `entityType`/`entityId`; **sem permissão granular por nota** — RBAC global (`memory:read`/`write`) apenas, já que a permissão granular foi construída especificamente para `document` (Task 072) e não generalizada aqui sem necessidade real demonstrada;
- API operacional de workflows de automação (`GET/POST/PATCH/DELETE /api/v1/automation-workflows`, Task 076, primeira entidade da Fase 8) — `automation_workflow`: nome, descrição, responsável e tipo de gatilho pretendido (`trigger_type`: `manual`/`webhook`/`schedule`/`event`) opcionais, status (`draft`/`active`/`paused`/`archived`, padrão `draft`); **puramente cadastro nesta versão** — `triggerType` só descreve a intenção de disparo, nenhum gatilho real dispara nada ainda; execução, filas, retries, idempotência e dead-letter são entregáveis seguintes da mesma fase;
- testes automatizados unitários, de configuração, de autenticação/autorização e de rotas de clientes, projetos, contatos, participação em projetos, tarefas, entregáveis, aprovações, dependências, riscos, comentários, histórico de mudanças, dashboard, leads, oportunidades, atividades, indicadores comerciais, fontes de conhecimento, documentos/versões, permissões de documento, busca textual, memória operacional e workflows de automação.

Autenticação de produção real (Google Workspace/OIDC), modelo de multi-organização, credenciais reais, dados reais de clientes, integrações externas, homologação e produção permanecem fora do escopo. Os 12 entregáveis previstos para a Fase 5 no Plano Mestre estão implementados; falta a Parte B (validação real contra Postgres, deliberadamente adiada) e a decisão de multi-organização. Comentários estão escopados a tarefas apenas; o dashboard de projeto cobre tarefas, entregáveis, riscos e aprovações. Da Fase 6 (comercial e CRM), `lead`, `opportunity`, `activity` e o dashboard de indicadores comerciais estão implementados — "qualificação" foi considerada já coberta por `lead.status`/`notes`, sem entidade própria; falta apenas integrações externas. Da Fase 7 (conhecimento, documentos e memória), `source`, `document`/`document_version`, classificação, permissões, política de retenção, busca textual e memória operacional estão implementados — apenas extração de arquivos reais falta como entregável explícito da fase; embeddings e busca vetorial já estão desbloqueados pela regra da fase, mas ainda não implementados. Da Fase 8 (plataforma de automações), apenas o catálogo (`automation_workflow`) está implementado — gatilhos reais, webhooks, filas, retries, idempotência, dead-letter, aprovações, logs, métricas, reprocessamento e integração com n8n ainda não foram iniciados.

## Execução local

```powershell
npm install
npm run check
npm run dev
```

O servidor usa `127.0.0.1:3000` por padrão.

## Endpoints

```text
GET http://127.0.0.1:3000/api/v1/health
GET http://127.0.0.1:3000/api/v1/ready
POST http://127.0.0.1:3000/api/v1/auth/dev-login
POST http://127.0.0.1:3000/api/v1/auth/logout
GET http://127.0.0.1:3000/api/v1/auth/me
POST http://127.0.0.1:3000/api/v1/clients
GET http://127.0.0.1:3000/api/v1/clients
GET http://127.0.0.1:3000/api/v1/clients/:id
PATCH http://127.0.0.1:3000/api/v1/clients/:id
DELETE http://127.0.0.1:3000/api/v1/clients/:id
POST http://127.0.0.1:3000/api/v1/projects
GET http://127.0.0.1:3000/api/v1/projects
GET http://127.0.0.1:3000/api/v1/projects/:id
PATCH http://127.0.0.1:3000/api/v1/projects/:id
DELETE http://127.0.0.1:3000/api/v1/projects/:id
POST http://127.0.0.1:3000/api/v1/clients/:clientId/contacts
GET http://127.0.0.1:3000/api/v1/clients/:clientId/contacts
GET http://127.0.0.1:3000/api/v1/contacts/:id
PATCH http://127.0.0.1:3000/api/v1/contacts/:id
DELETE http://127.0.0.1:3000/api/v1/contacts/:id
POST http://127.0.0.1:3000/api/v1/projects/:projectId/memberships
GET http://127.0.0.1:3000/api/v1/projects/:projectId/memberships
DELETE http://127.0.0.1:3000/api/v1/projects/:projectId/memberships/:membershipId
POST http://127.0.0.1:3000/api/v1/projects/:projectId/tasks
GET http://127.0.0.1:3000/api/v1/projects/:projectId/tasks
GET http://127.0.0.1:3000/api/v1/tasks/:id
PATCH http://127.0.0.1:3000/api/v1/tasks/:id
DELETE http://127.0.0.1:3000/api/v1/tasks/:id
POST http://127.0.0.1:3000/api/v1/projects/:projectId/deliverables
GET http://127.0.0.1:3000/api/v1/projects/:projectId/deliverables
GET http://127.0.0.1:3000/api/v1/deliverables/:id
PATCH http://127.0.0.1:3000/api/v1/deliverables/:id
DELETE http://127.0.0.1:3000/api/v1/deliverables/:id
POST http://127.0.0.1:3000/api/v1/deliverables/:deliverableId/approvals
GET http://127.0.0.1:3000/api/v1/deliverables/:deliverableId/approvals
GET http://127.0.0.1:3000/api/v1/approvals/:id
PATCH http://127.0.0.1:3000/api/v1/approvals/:id
DELETE http://127.0.0.1:3000/api/v1/approvals/:id
POST http://127.0.0.1:3000/api/v1/tasks/:taskId/dependencies
GET http://127.0.0.1:3000/api/v1/tasks/:taskId/dependencies
GET http://127.0.0.1:3000/api/v1/dependencies/:id
PATCH http://127.0.0.1:3000/api/v1/dependencies/:id
DELETE http://127.0.0.1:3000/api/v1/dependencies/:id
POST http://127.0.0.1:3000/api/v1/projects/:projectId/risks
GET http://127.0.0.1:3000/api/v1/projects/:projectId/risks
GET http://127.0.0.1:3000/api/v1/risks/:id
PATCH http://127.0.0.1:3000/api/v1/risks/:id
DELETE http://127.0.0.1:3000/api/v1/risks/:id
POST http://127.0.0.1:3000/api/v1/tasks/:taskId/comments
GET http://127.0.0.1:3000/api/v1/tasks/:taskId/comments
GET http://127.0.0.1:3000/api/v1/comments/:id
PATCH http://127.0.0.1:3000/api/v1/comments/:id
DELETE http://127.0.0.1:3000/api/v1/comments/:id
GET http://127.0.0.1:3000/api/v1/history?entityType=<tipo>&entityId=<uuid>
GET http://127.0.0.1:3000/api/v1/projects/:projectId/dashboard
POST http://127.0.0.1:3000/api/v1/leads
GET http://127.0.0.1:3000/api/v1/leads
GET http://127.0.0.1:3000/api/v1/leads/:id
PATCH http://127.0.0.1:3000/api/v1/leads/:id
DELETE http://127.0.0.1:3000/api/v1/leads/:id
POST http://127.0.0.1:3000/api/v1/opportunities
GET http://127.0.0.1:3000/api/v1/opportunities
GET http://127.0.0.1:3000/api/v1/opportunities/:id
PATCH http://127.0.0.1:3000/api/v1/opportunities/:id
DELETE http://127.0.0.1:3000/api/v1/opportunities/:id
POST http://127.0.0.1:3000/api/v1/activities
GET http://127.0.0.1:3000/api/v1/activities
GET http://127.0.0.1:3000/api/v1/activities?leadId=<uuid>
GET http://127.0.0.1:3000/api/v1/activities?opportunityId=<uuid>
GET http://127.0.0.1:3000/api/v1/activities/:id
PATCH http://127.0.0.1:3000/api/v1/activities/:id
DELETE http://127.0.0.1:3000/api/v1/activities/:id
GET http://127.0.0.1:3000/api/v1/commercial/dashboard
POST http://127.0.0.1:3000/api/v1/sources
GET http://127.0.0.1:3000/api/v1/sources
GET http://127.0.0.1:3000/api/v1/sources/:id
PATCH http://127.0.0.1:3000/api/v1/sources/:id
DELETE http://127.0.0.1:3000/api/v1/sources/:id
POST http://127.0.0.1:3000/api/v1/documents
GET http://127.0.0.1:3000/api/v1/documents
GET http://127.0.0.1:3000/api/v1/documents/:id
PATCH http://127.0.0.1:3000/api/v1/documents/:id
DELETE http://127.0.0.1:3000/api/v1/documents/:id
POST http://127.0.0.1:3000/api/v1/documents/:documentId/versions
GET http://127.0.0.1:3000/api/v1/documents/:documentId/versions
POST http://127.0.0.1:3000/api/v1/documents/:documentId/permissions
GET http://127.0.0.1:3000/api/v1/documents/:documentId/permissions
DELETE http://127.0.0.1:3000/api/v1/permissions/:id
GET http://127.0.0.1:3000/api/v1/search?q=<termo>
POST http://127.0.0.1:3000/api/v1/memory-notes
GET http://127.0.0.1:3000/api/v1/memory-notes
GET http://127.0.0.1:3000/api/v1/memory-notes/:id
PATCH http://127.0.0.1:3000/api/v1/memory-notes/:id
DELETE http://127.0.0.1:3000/api/v1/memory-notes/:id
POST http://127.0.0.1:3000/api/v1/automation-workflows
GET http://127.0.0.1:3000/api/v1/automation-workflows
GET http://127.0.0.1:3000/api/v1/automation-workflows/:id
PATCH http://127.0.0.1:3000/api/v1/automation-workflows/:id
DELETE http://127.0.0.1:3000/api/v1/automation-workflows/:id
```

Todas as rotas de `clients`, `projects`, `contacts`, `memberships`, `tasks`, `deliverables`, `approvals`, `dependencies`, `risks`, `comments`, `history`, `dashboard`, `leads`, `opportunities`, `activities`, `commercial/dashboard`, `sources`, `documents`/`versions`, `documents`/`permissions`, `search`, `memory-notes` e `automation-workflows` exigem autenticação (`Authorization: Bearer <token>`) e a permissão correspondente (`client:read`/`write`, `project:read`/`write`, `contact:read`/`write`, `project_membership:read`/`write`, `task:read`/`write`, `deliverable:read`/`write`, `approval:read`/`write`, `dependency:read`/`write`, `risk:read`/`write`, `comment:read`/`write`, `history:read`, `dashboard:read`, `lead:read`/`write`, `opportunity:read`/`write`, `activity:read`/`write`, `commercial:read`, `source:read`/`write`, `document:read`/`write`, `memory:read`/`write`, `automation:read`/`write` — permissões de documento e busca também usam `document:read`/`write`, não um recurso próprio). O `DELETE` de participação em projeto não remove o registro; encerra a participação (`leftAt`), preservando o histórico. O `PATCH` de aprovação que define `status` diferente de `pending` preenche `decidedAt` automaticamente. O `POST` de dependência rejeita com 400 uma tarefa que dependa de si mesma. O autor de um comentário é sempre o usuário autenticado (`request.user.personId`), nunca informado no corpo da requisição. `GET /history` aceita `entityType` em `client`, `project`, `contact`, `project_membership`, `task`, `deliverable`, `approval`, `dependency`, `risk` ou `comment`, e retorna os eventos de `audit_event` daquela entidade, mais recentes primeiro — não é uma tabela nova, é leitura sobre a auditoria já gravada por cada rota desde a Fase 4. `GET /projects/:projectId/dashboard` retorna contagens de tarefas e entregáveis por status, riscos por status e severidade, e aprovações por status (agregadas via `deliverable` do projeto) — todos os status possíveis aparecem com valor `0` quando não há registros, sem tabela nova. `lead` não referencia `client` — representa um contato ainda não convertido, com seus próprios dados (nome, empresa, e-mail, telefone), origem (`source`) e status de funil (`new`/`contacted`/`qualified`/`disqualified`/`converted`). `opportunity` referencia `lead` de forma opcional (`leadId`, `onDelete: set null`) e tem seu próprio estágio de funil (`opportunity_stage`: `prospecting`/`qualification`/`proposal`/`negotiation`/`won`/`lost`) e `lossReason`, preenchido livremente quando o estágio vira `lost` — sem validação de obrigatoriedade nesta primeira versão. `activity` unifica diagnóstico, proposta e follow-up (e outros tipos de interação: `call`, `meeting`, `other`) num único tipo com discriminador (`activity_type`); o `POST` exige que a atividade esteja vinculada a pelo menos um `leadId` ou `opportunityId`, rejeitando com 400 quando nenhum dos dois é informado; `GET /activities` aceita filtros opcionais `leadId`/`opportunityId` na query string. `GET /commercial/dashboard` retorna contagens globais (não escopadas a projeto) de leads por status, oportunidades por estágio e atividades por status e por tipo — todos os valores possíveis dos enums aparecem com `0` quando não há registros, sem tabela nova, mesmo padrão do dashboard de projeto. `source` (primeira entidade da Fase 7) representa de onde vem o conhecimento institucional — documento manual, upload, Google Drive, site, API ou outro (`source_type`) — com status próprio (`source_status`: `active`/`archived`); é um cadastro isolado, sem relação com nenhuma entidade das Fases 5/6, e existe como pré-requisito documentado no Plano Mestre antes de `document`, permissões e indexação poderem ser construídos. `document` (segunda entidade da Fase 7) referencia `source` de forma opcional (`sourceId`, `onDelete: set null`) e tem status próprio (`document_status`: `draft`/`review`/`approved`/`deprecated`/`archived`, realinhado na Task 071 ao `Status` canônico de `KNOWLEDGE-MODEL.md`); `document_version` é imutável — cada `POST /documents/:documentId/versions` cria uma nova linha com `versionNumber` calculado automaticamente (`max(versionNumber) + 1` por documento, com índice único garantindo não haver dois registros com o mesmo número para o mesmo documento) e não existe rota de edição ou remoção de versão. `document.confidentiality` (`public`/`internal`/`confidential`/`restricted`, Task 071) reaproveita exatamente o vocabulário canônico de confidencialidade já definido em `KNOWLEDGE-MODEL.md`, usado em todo o resto do sistema (frontmatter de tasks, páginas da Wiki). `document_permission` (Task 072) torna essa classificação efetiva: para documentos `public`/`internal`, nada muda — basta a permissão global (`document:read`/`write`); para `confidential`/`restricted`, o usuário precisa ser `admin` (mesmo bypass já usado em todo o RBAC) ou ter uma concessão explícita — via `granteePersonId` (uma pessoa específica) ou `granteeRoleId` (qualquer pessoa daquele papel), nunca os dois nem nenhum no mesmo registro — com `accessLevel` `read` (permite leitura) ou `write` (permite leitura e escrita). `GET /documents` omite silenciosamente os documentos restritos sem concessão (não retorna erro, apenas não lista); `GET/PATCH/DELETE /documents/:id` retornam 403 quando o documento é restrito e não há concessão. Revogar uma concessão é exclusão lógica (`DELETE /permissions/:id`), sem rota de edição — para trocar o nível de acesso, revoga-se e concede-se de novo. `document.retentionPolicy`/`retentionUntil` (Task 073) registram a política de retenção — `indefinite` (padrão) não tem `retentionUntil`; `time_limited` exige `retentionUntil` no mesmo pedido (`POST`/`PATCH`), rejeitando com 400 qualquer combinação inconsistente (política sem data compatível, ou data sem `time_limited`). É puramente declarativo: nenhuma rota ou processo descarta, arquiva ou notifica automaticamente quando `retentionUntil` vence — isso depende de execução recorrente agendada, que é território da Fase 8 (Plataforma de automações), ainda não iniciada. `GET /search?q=<termo>` (Task 074) busca por relevância (`ts_rank`) no título do documento e no conteúdo da versão mais recente (`document_version` com maior `versionNumber`), usando `to_tsvector`/`plainto_tsquery` nativos do Postgres (idioma `portuguese`) — sem nenhuma tabela, coluna ou dependência de software nova; a checagem de acesso reaproveita exatamente `hasGranularDocumentAccess` (extraída para `src/modules/documents/access.service.ts` nesta task, para ser compartilhada entre `document.ts` e `search.ts`), então resultados de documentos `confidential`/`restricted` sem concessão explícita simplesmente não aparecem, sem gerar erro. Limitação deliberada: a busca calcula o `tsvector` em tempo de consulta a cada requisição, sem nenhuma coluna ou índice persistido (GIN) — aceitável no volume atual e enquanto a Parte B (única forma de medir desempenho real) seguir adiada; otimizar isso é trabalho futuro, não antecipado sem evidência real de necessidade. Só busca em texto já armazenado como `document_version.content` — não faz upload, parsing nem extração de conteúdo de arquivos binários (PDF, Word etc.), que é uma frente de infraestrutura própria, deliberadamente fora de escopo até haver uma decisão sobre armazenamento de arquivos. `memory_note` (Task 075) é intencionalmente mais simples que `document`: sem versionamento, sem classificação, sem permissão granular — pensada para contexto operacional de curto prazo (ex.: "lead pediu para só ser contatado depois das 14h"), não para conhecimento institucional formal. `entityType`/`entityId` são uma referência genérica sem FK (mesmo padrão de `audit_event`), então nada impede referenciar um `entityId` que não existe mais — decisão deliberada de simplicidade, já que memória operacional não precisa da mesma integridade referencial que os relacionamentos formais do sistema. `expiresAt` é só um campo informativo nesta versão: nada expira ou é removido automaticamente quando a data passa, assim como `document.retentionUntil` (Task 073) — qualquer expiração automática real dependeria da Fase 8. `automation_workflow` (Task 076, primeira entidade da Fase 8) é o catálogo de workflows — `triggerType` (`manual`/`webhook`/`schedule`/`event`) descreve apenas a intenção de como o workflow deveria ser disparado; nenhum gatilho real dispara nada nesta versão, é puro cadastro. `status` (`draft`/`active`/`paused`/`archived`) também não afeta nenhum comportamento de execução ainda — é só metadado, já que execução em si (filas, retries, idempotência, dead-letter) é entregável futuro da mesma fase.

## Persistência local (PostgreSQL)

O schema e as migrações existem e compilam, mas isso não comprova, por si só, que a persistência funciona contra um banco real em execução. As migrações das tabelas `task` (`drizzle/0001_deep_scarlet_spider.sql`), `deliverable` (`drizzle/0002_nifty_electro.sql`), `approval` (`drizzle/0003_daffy_odin.sql`), `dependency` (`drizzle/0004_icy_pestilence.sql`), `risk` (`drizzle/0005_curious_synch.sql`), `comment` (`drizzle/0006_equal_gladiator.sql`), `lead` (`drizzle/0007_secret_wither.sql`), `opportunity` (`drizzle/0008_ancient_santa_claus.sql`), `activity` (`drizzle/0009_dazzling_kronos.sql`), `source` (`drizzle/0010_modern_maelstrom.sql`), `document`/`document_version` (`drizzle/0011_tearful_expediter.sql`), o realinhamento de `document.status`/adição de `document.confidentiality` (`drizzle/0012_light_havok.sql`), `document_permission` (`drizzle/0013_foamy_nighthawk.sql`), `document.retentionPolicy`/`retentionUntil` (`drizzle/0014_purple_redwing.sql`), `memory_note` (`drizzle/0015_dizzy_devos.sql`) e `automation_workflow` (`drizzle/0016_funny_red_hulk.sql`) foram geradas com `npm run db:generate`, que não depende de conexão com banco — apenas compara o schema Drizzle com o histórico de migrações. Aplicá-las contra um banco real ainda depende dos passos abaixo — por decisão do CEO, essa validação (Parte B) segue deliberadamente adiada. Para validar isso de fato, quando chegar a hora:

1. Subir o banco local definido em `infrastructure/local/docker-compose.yml`:

   ```powershell
   docker compose -f ../../infrastructure/local/docker-compose.yml up -d
   ```

2. Aplicar as migrações:

   ```powershell
   npm run db:migrate
   ```

3. Rodar o teste de integração real, contra o banco em execução (não mockado):

   ```powershell
   npm run test:integration
   ```

Esse comando executa vinte e um arquivos de teste de integração: o de persistência básica (`person`, Task 052), o de CRUD real de clientes e projetos via API (`tests/client-project.integration.test.ts`, Task 053), o de contatos e participação em projeto via API (`tests/contact-membership.integration.test.ts`, Task 054), o de tarefas via API (`tests/task.integration.test.ts`, Task 055), o de entregáveis via API (`tests/deliverable.integration.test.ts`, Task 056), o de aprovações via API (`tests/approval.integration.test.ts`, Task 057), o de dependências via API (`tests/dependency.integration.test.ts`, Task 058), o de riscos via API (`tests/risk.integration.test.ts`, Task 059), o de comentários via API (`tests/comment.integration.test.ts`, Task 060), o de histórico de mudanças via API (`tests/history.integration.test.ts`, Task 061 — sem migração própria, reaproveita a tabela `audit_event` já existente), o de dashboard de projeto via API (`tests/dashboard.integration.test.ts`, Task 062 — também sem migração própria), o de leads via API (`tests/lead.integration.test.ts`, Task 065), o de oportunidades via API (`tests/opportunity.integration.test.ts`, Task 066), o de atividades via API (`tests/activity.integration.test.ts`, Task 067), o de indicadores comerciais via API (`tests/commercial-dashboard.integration.test.ts`, Task 068 — também sem migração própria), o de fontes de conhecimento via API (`tests/source.integration.test.ts`, Task 069), o de documentos e versões via API (`tests/document.integration.test.ts`, Task 070/071/073), o de permissões de documento via API (`tests/document-permission.integration.test.ts`, Task 072 — cobre o ciclo real de concessão/listagem/revogação; o caminho de negação por falta de permissão não é exercitável neste harness porque toda sessão de teste resolve para o papel `admin`, ver nota no próprio arquivo), o de busca textual via API (`tests/search.integration.test.ts`, Task 074 — também sem migração própria), o de memória operacional via API (`tests/memory-note.integration.test.ts`, Task 075) e o de workflows de automação via API (`tests/automation-workflow.integration.test.ts`, Task 076), todos isolados da suíte padrão (`npm test`), que continua rodando sem depender de um banco disponível.
