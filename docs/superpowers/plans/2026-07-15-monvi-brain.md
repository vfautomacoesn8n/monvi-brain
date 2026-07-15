# Monvi Brain Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir e validar um cofre universal, auditável e seguro para o segundo cérebro operacional da Monvi.

**Architecture:** O repositório separa governança, fontes imutáveis, conhecimento curado, operação, outputs, compartilhamento e arquivo. Markdown/YAML são a camada humana, JSON Schema define contratos e JSONL registra eventos auditáveis.

**Tech Stack:** Markdown, YAML 1.2, JSON Schema Draft 2020-12, JSON Lines, Git e PowerShell apenas para validação local.

## Global Constraints

- Trabalhar exclusivamente dentro da pasta atual e nunca excluir arquivos existentes.
- Não instalar dependências nem iniciar ingestão de documentos.
- Usar UTF-8, datas `YYYY-MM-DD`, links Markdown relativos e formatos abertos.
- Manter regras oficiais apenas em `00_SYSTEM/canonical`; adaptadores são mínimos.
- Nunca inventar dados de clientes, preços, resultados, números ou prazos.

---

### Task 1: Governança e pontos de entrada

**Files:**
- Create: `README.md`, `AI-START.md`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.gitignore`
- Create: `00_SYSTEM/canonical/*.md`

**Interfaces:**
- Produces: ordem de leitura canônica, política de permissões e modelo de confiança consumidos por todos os workflows.

- [ ] Criar os pontos de entrada e adaptadores mínimos.
- [ ] Registrar contrato, modelo de conhecimento, permissões, segurança e glossário.
- [ ] Conferir que regras completas não foram copiadas para adaptadores.
- [ ] Validar todos os links Markdown produzidos nesta tarefa.

### Task 2: Contratos estruturados

**Files:**
- Create: `00_SYSTEM/schemas/note.schema.json`
- Create: `00_SYSTEM/schemas/{source,client,project,decision,meeting,risk,task}.schema.json`

**Interfaces:**
- Consumes: enumerações de tipo, status e confidencialidade da governança.
- Produces: schemas Draft 2020-12 referenciáveis por templates e validadores.

- [ ] Criar o schema-base com os treze campos mínimos, formatos e enumerações.
- [ ] Criar schemas especializados por composição com referência relativa a `note.schema.json`.
- [ ] Executar parse JSON de todos os schemas e verificar que `$ref` locais existem.

### Task 3: Workflows, templates, tarefas e logs

**Files:**
- Create: `00_SYSTEM/workflows/*.md`
- Create: `00_SYSTEM/templates/*.md`
- Create: `00_SYSTEM/tasks/*/README.md`
- Create: `00_SYSTEM/logs/*.jsonl`
- Create: `00_SYSTEM/scripts/README.md`, `00_SYSTEM/audits/README.md`

**Interfaces:**
- Consumes: regras canônicas e schemas.
- Produces: procedimentos executáveis por humanos/agentes e modelos de notas válidas.

- [ ] Documentar ingest, query, update, decision, audit, research, retro e isolamento de cliente.
- [ ] Criar oito templates com YAML frontmatter, IDs únicos e links relativos.
- [ ] Criar READMEs para filas, scripts e auditorias; manter logs inicialmente vazios.
- [ ] Verificar que nenhum workflow autoriza alteração de `01_RAW` ou aprovação autônoma de alto risco.

### Task 4: Camadas de conteúdo e documentação de diretórios

**Files:**
- Create: `01_RAW/**`, `02_WIKI/**`, `03_OPERATIONS/**`, `04_OUTPUTS/**`, `05_SHARED/**`, `99_ARCHIVE/README.md`

**Interfaces:**
- Consumes: templates e políticas canônicas.
- Produces: espaços de armazenamento com finalidade explícita e Wiki inicial navegável.

- [ ] Criar cada diretório solicitado e um README em cada diretório sem outro conteúdo.
- [ ] Criar o manifesto de fontes sem registrar fontes inexistentes.
- [ ] Criar o índice e as onze páginas iniciais usando apenas os dois textos institucionais fornecidos.
- [ ] Marcar páginas como `draft` ou `review`, com fontes internas explícitas e sem alegações novas.

### Task 5: Validação e Git

**Files:**
- Verify: todos os arquivos do workspace.

**Interfaces:**
- Consumes: árvore completa.
- Produces: evidências de sintaxe, integridade, isolamento e auditabilidade.

- [ ] Validar JSON com `ConvertFrom-Json` e conferir referências locais.
- [ ] Extrair links Markdown e confirmar que alvos locais existem.
- [ ] Extrair campos `id` do frontmatter e confirmar unicidade.
- [ ] Confirmar que todos os diretórios têm conteúdo e que `01_RAW` contém apenas documentação estrutural.
- [ ] Confirmar ausência de manifests/lockfiles novos de gerenciadores de dependências.
- [ ] Inicializar Git, criar/renomear branch para `main`, adicionar arquivos e criar o commit `chore: initialize universal Monvi Brain architecture`.
- [ ] Exibir árvore final, inventário, validações, decisões e limitações.

## Auto-revisão

Todas as exigências da especificação estão cobertas por uma tarefa; nomes de diretório, enumerações e interfaces são consistentes. Não há placeholders de implementação e cada tarefa termina com uma verificação observável.
