---
id: task-2026-035
title: Reparo de frontmatter em artefatos de agentes
type: task
status: approved
task_state: done
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: false
classification: internal
created_at: "2026-07-24"
updated_at: "2026-07-24"
reviewed_at: "2026-07-24"
version: "1.0.0"
tags:
  - monvi-brain
  - frontmatter
  - agentes
  - reparo-estrutural
---

# Reparo de frontmatter em artefatos de agentes

## Contexto

Durante a preparação do lote 5 da task 033, foram identificados 16 documentos com o fechamento do frontmatter colado ao título.

Forma inválida:

```text
---# Título
```

Forma esperada:

```text
---
# Título
```

O defeito é preexistente e foi localizado em documentos criados em 2026-07-22.

## Objetivo

Restaurar a validade estrutural do frontmatter dos 16 documentos afetados sem alterar conteúdo semântico, status, aprovação, versão ou regras operacionais.

## Escopo permitido

```yaml
allowed_paths:
  - 00_SYSTEM/architecture/Contrato-contexto-delegacao-reporte-Helpper.md
  - 00_SYSTEM/architecture/Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md
  - 00_SYSTEM/architecture/Modelo-ciclo-de-vida-e-estados-de-agentes-Monvi.md
  - 00_SYSTEM/architecture/Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md
  - 00_SYSTEM/policies/Politica-ambientes-promocao-piloto-producao-agentes.md
  - 00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md
  - 00_SYSTEM/policies/Politica-logs-evidencias-custos-e-monitoramento-agentes.md
  - 00_SYSTEM/policies/Politica-memoria-e-promocao-de-conhecimento-Helpper.md
  - 00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md
  - 00_SYSTEM/templates/Checklist-aprovacao-acao-critica-Helpper.md
  - 00_SYSTEM/templates/Checklist-piloto-controlado-de-agente.md
  - 00_SYSTEM/templates/Manifesto-Helpper-especialista.md
  - 00_SYSTEM/templates/Manifesto-operacional-de-agente.md
  - 00_SYSTEM/templates/Playbook-incidente-e-suspensao-Helpper.md
  - 00_SYSTEM/templates/Playbook-rollback-suspensao-e-incidente-de-agente.md
  - 00_SYSTEM/templates/Template-relatorio-execucao-Helpper.md
  - 00_SYSTEM/tasks/active/TASK-2026-035-reparo-frontmatter-artefatos-agentes.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/audits/
```

## Caminhos somente leitura

```yaml
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - 00_SYSTEM/tasks/review/TASK-2026-033-execucao-testes-finais-monvi-brain-v1.md
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/
  - 04_OUTPUTS/
```

## Caminhos proibidos

```yaml
forbidden_paths:
  - .git/
  - 05_SHARED/
```

## Alteração autorizada

Em cada documento afetado, substituir exclusivamente `---# ` por uma linha `---` seguida do mesmo título iniciado por `# `.

Nenhuma outra alteração textual ou semântica está autorizada.

## Critérios de aceite

- 16 documentos corrigidos;
- nenhum separador `---#` restante;
- frontmatter válido nos 16 documentos;
- títulos preservados;
- status e aprovação preservados;
- `git diff --check` sem erros;
- RAW e canonical inalterados;
- staging controlado;
- relatório de execução criado;
- task submetida à revisão humana.

## Relação com a task 033

A task 033 permanece ativa. O lote 5 só deve ser retomado após execução, validação, aprovação humana e registro desta task.
## Execução do reparo

- data: 2026-07-24;
- documentos reparados: 16;
- frontmatters válidos após reparo: 16;
- títulos preservados: 16;
- separadores `---#` restantes no escopo: 0;
- alteração semântica identificada: não;
- RAW alterado: não;
- canonical alterado: não;
- resultado técnico: `pass`;
- aprovação humana: concedida pelo CEO em 2026-07-24;
- task_state: `done`;
- lote 5 da task 033: ainda não executado.

### Evidência

- `00_SYSTEM/audits/Execucao-task-2026-035-reparo-frontmatter-artefatos-agentes.md`.
## Aprovação humana

- decisão: aprovada;
- aprovador: CEO da Monvi;
- data: 2026-07-24;
- fundamento: reparo exato confirmado por hash nos 16 documentos;
- resultado técnico: `pass`;
- documentos reparados: 16;
- frontmatters válidos: 16;
- títulos preservados: 16;
- alteração semântica: não;
- task_state final: `done`;
- próximo passo autorizado: retomada do lote 5 da task 033.
