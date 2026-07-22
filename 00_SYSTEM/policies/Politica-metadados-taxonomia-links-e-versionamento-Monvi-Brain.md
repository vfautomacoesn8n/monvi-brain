---
id: policy-monvi-brain-metadata-taxonomy-links-versioning
title: Política de metadados, taxonomia, links e versionamento do Monvi Brain
type: policy
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
source_task: task-2026-032
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
version: "0.1.0"
tags:
  - monvi-brain
  - governanca
  - metadados
  - taxonomia
  - links
  - versionamento
related:
  - registry-monvi-brain-v1-global-audit
  - registry-monvi-brain-v1-document-inventory
---

# Política de metadados, taxonomia, links e versionamento do Monvi Brain

## Objetivo

Definir regras mínimas para criação, classificação, relacionamento, revisão e versionamento dos documentos do Monvi Brain.

## Princípios

- Markdown e YAML são a base;
- plugins são opcionais;
- metadados devem apoiar busca, governança e automação;
- campos não aplicáveis devem usar `null` quando previstos;
- documentos legados não devem ser alterados em massa sem revisão;
- correções devem ser pequenas, rastreáveis e reversíveis;
- links devem representar relações reais;
- não se deve criar links artificiais apenas para reduzir contagem de notas órfãs.

## Campos universais

Todo documento governado criado a partir desta política deve conter:

```yaml
id:
title:
type:
status:
owner:
reviewer:
active_client:
requires_review:
classification:
created_at:
updated_at:
version:
```

## Campos condicionais

Devem ser usados quando aplicáveis:

```yaml
task_state:
active_project:
source_task:
reviewed_at:
tags:
related:
```

### task_state

Obrigatório apenas para documentos do tipo `task`.

Valores permitidos:

- draft;
- review;
- paused;
- blocked;
- done;
- archived.

### active_client

- usar ID canônico do cliente quando o documento pertencer a cliente;
- usar `null` para conteúdo institucional;
- não usar nome livre quando houver registro canônico.

### active_project

- usar ID canônico do projeto quando aplicável;
- usar `null` quando não aplicável.

### source_task

Obrigatório para documentos criados ou alterados materialmente por uma task governada.

Pode ser `null` em:

- documentos anteriores ao sistema de tasks;
- arquivos de entrada;
- documentos de sistema sem origem operacional única;
- registros históricos cuja origem não possa ser comprovada.

A ausência deve ser classificada, não presumida como erro.

## Tipos documentais oficiais

- architecture;
- policy;
- process;
- procedure;
- template;
- task;
- output;
- decision;
- record;
- client;
- project;
- service;
- skill;
- tool;
- repository;
- agent;
- evidence.

Tipos fora dessa lista exigem decisão registrada antes de uso.

## Status documentais

- draft;
- review;
- approved;
- deprecated;
- archived.

`status` representa maturidade documental.

`task_state` representa situação operacional da task.

Os dois campos não são intercambiáveis.

## IDs

Os IDs devem:

- usar minúsculas;
- usar hífens;
- evitar acentos;
- ser únicos no vault;
- permanecer estáveis após aprovação;
- não depender apenas do título do arquivo.

Exemplos:

```text
policy-monvi-brain-document-security
task-2026-032
registry-monvi-brain-v1-global-audit
```

## Títulos e nomes de arquivos

### Título

Pode usar português natural, acentos e capitalização legível.

### Nome de arquivo

Deve:

- ser descritivo;
- evitar caracteres especiais incompatíveis;
- manter padrão estável;
- não ser renomeado sem revisão de links;
- preservar nomes históricos quando a renomeação causar risco desnecessário.

## Links internos

Usar `[[wikilinks]]` para navegação nativa no Obsidian.

Todo documento crítico aprovado deve possuir:

- ao menos um link de entrada por índice, mapa ou documento relacionado;
- ao menos um link de saída para fonte, política, processo, task ou registro relacionado, quando aplicável.

Exceções legítimas:

- arquivos de entrada;
- documentos históricos;
- registros técnicos gerados;
- arquivos que funcionam como raiz de navegação;
- templates ainda não publicados;
- documentos deliberadamente isolados por segurança.

## Campo related

O campo `related` deve usar IDs canônicos, não caminhos de arquivo.

Exemplo:

```yaml
related:
  - task-2026-032
  - policy-monvi-brain-document-security
```

## Tags

Tags são auxiliares e não substituem:

- tipo;
- status;
- cliente;
- projeto;
- owner;
- links.

Devem ser:

- poucas;
- estáveis;
- em minúsculas;
- separadas por hífen;
- usadas apenas quando melhorarem recuperação.

## Versionamento

### Major

Alteração estrutural, de regra ou de escopo com impacto relevante.

Exemplo:

```text
1.0.0 → 2.0.0
```

### Minor

Adição compatível de regra, seção ou capacidade documental.

Exemplo:

```text
1.0.0 → 1.1.0
```

### Patch

Correção editorial, clareza ou ajuste sem mudança material de regra.

Exemplo:

```text
1.0.0 → 1.0.1
```

## Datas

Usar ISO 8601:

```text
YYYY-MM-DD
```

Campos:

- `created_at`;
- `updated_at`;
- `reviewed_at`.

## Classificação dos achados de auditoria

Cada achado deve ser classificado como:

- erro real;
- não aplicável;
- legado aceitável;
- histórico;
- índice ou mapa;
- pendência humana;
- correção automatizável segura;
- correção que exige decisão;
- exceção documentada.

## Regras de correção

Uma correção só pode ser automatizada quando:

- a regra aplicável estiver definida;
- o valor puder ser inferido sem ambiguidade;
- não houver risco de misturar cliente ou projeto;
- o arquivo não estiver em RAW;
- o arquivo não estiver em canonical sem autorização;
- o diff for pequeno e revisável;
- houver rollback;
- o staging for controlado.

## Proibições

- preencher owner por suposição;
- preencher reviewer por suposição;
- inventar source task;
- alterar documentos históricos para parecerem atuais;
- criar links sem relação semântica;
- normalizar line endings em massa;
- renomear arquivos em lote sem mapa de impacto;
- alterar `01_RAW`;
- alterar canonical sem aprovação explícita;
- usar plugins como requisito para leitura básica.

## Critérios de aprovação

Esta política só pode ser aprovada após:

- revisão dos tipos oficiais;
- revisão dos status;
- validação dos campos universais;
- validação das exceções;
- validação das regras de links;
- validação das regras de versionamento;
- confirmação de compatibilidade com Obsidian e Git.
