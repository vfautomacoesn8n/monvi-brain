---
id: task-2026-036
title: Inspeção de binários RAW para validação de segurança
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
updated_at: "2026-07-27"
reviewed_at: "2026-07-27"
version: "1.0.0"
tags:
  - monvi-brain
  - seguranca
  - raw
  - binarios
  - secrets
---

# Inspeção de binários RAW para validação de segurança

## Contexto

A task 033 consolidou 15 testes finais com 13 resultados `pass`, 1 `blocked`, 1 `not-applicable` e nenhum `fail`.

O bloqueio remanescente é o `test-security-001`: 16 arquivos binários do RAW ainda não tiveram inspeção de conteúdo por ausência de extrator local aprovado.

## Objetivo

Inspecionar o conteúdo dos 16 arquivos binários RAW com ferramenta local aprovada, sem modificar os arquivos de origem, e produzir evidência suficiente para reclassificar o `test-security-001` como `pass` ou `fail`.

## Escopo permitido

```yaml
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-036-inspecao-binarios-raw-seguranca.md
  - 00_SYSTEM/audits/
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/registries/
  - work/task-2026-036/
```

## Caminhos somente leitura

```yaml
read_only_paths:
  - 01_RAW/
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/tasks/done/
  - 00_SYSTEM/tasks/review/TASK-2026-033-execucao-testes-finais-monvi-brain-v1.md
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

## Regras de execução

- RAW permanece estritamente somente leitura;
- nenhuma conversão sobrescreve arquivos de origem;
- todo artefato temporário deve ficar em `work/task-2026-036/`;
- ferramentas e versões devem ser registradas;
- extrações devem ser locais;
- nenhum arquivo deve ser enviado a serviço externo;
- nenhuma credencial real deve ser criada;
- padrões sensíveis encontrados devem ser tratados como incidente;
- resultados devem distinguir achado real, falso positivo e conteúdo não inspecionável;
- a task 033 permanece `active`;
- o corte v1.0 permanece `no-go` durante a execução.

## Plano de execução

1. inventariar os 16 binários RAW;
2. registrar nome, extensão, tamanho e hash SHA-256;
3. selecionar e aprovar ferramenta local de extração;
4. registrar versão e comando utilizado;
5. extrair conteúdo para diretório temporário;
6. registrar cobertura e falhas por arquivo;
7. buscar padrões sensíveis no conteúdo extraído;
8. revisar achados;
9. produzir relatório de evidência;
10. reclassificar o `test-security-001` como `pass` ou `fail`;
11. atualizar a task 033 em atividade separada e controlada.

## Padrões mínimos de busca

- chaves de API;
- tokens;
- senhas;
- secrets;
- credenciais;
- chaves privadas;
- arquivos `.env`;
- strings compatíveis com provedores conhecidos;
- dados que indiquem autenticação ou acesso.

## Critérios de aceite

- 16 binários inventariados;
- ferramenta local aprovada e versionada;
- 16 binários processados ou classificados individualmente como não inspecionáveis;
- nenhuma alteração em RAW;
- hashes dos arquivos de origem preservados;
- cobertura registrada por arquivo;
- achados revisados;
- nenhum secret real encontrado, ou incidente formalmente tratado;
- relatório de execução criado;
- `git diff --check` sem erros;
- staging controlado;
- decisão humana registrada.

## Resultado esperado

- `test-security-001: pass`, quando houver cobertura suficiente e nenhum secret real;
- `test-security-001: fail`, quando houver secret real ou falha crítica de controle;
- manutenção de `blocked`, apenas se a inspeção continuar tecnicamente impossível e isso estiver documentado.

## Relação com a task 033

A task 033 permanece ativa e não deve ser encerrada durante esta task.

Após a conclusão da task 036:

1. executar validação complementar de segurança;
2. atualizar o consolidado da task 033;
3. submeter o corte v1.0 à decisão humana final.

## Execução técnica concluída

Data da execução: 2026-07-27.

Resultado:

- 16 binários inventariados;
- 16 processados sem erro;
- 16 com cobertura textual útil;
- 15 PDFs processados;
- 1 PPTX processado;
- OCR local aplicado ao manual da marca baseado em imagens;
- 0 achados de alta confiança;
- 0 achados de média confiança;
- 0 divergências de hash RAW;
- nenhum secret real identificado.

Revisão contextual:

- única ocorrência ampliada: `contato@monvi.com`;
- classificação: endereço institucional, não secret.

Recomendação técnica:

- reclassificar `test-security-001` de `blocked` para `pass`.

Relatório:

- `00_SYSTEM/audits/Execucao-task-2026-036-inspecao-binarios-raw-seguranca.md`.

Estado:

- execução técnica concluída e aprovada;
- task concluída com `task_state: done`;
- `status: approved`;
- `requires_review: false`;
- aprovação humana registrada;
- task 033 não alterada;
- corte v1.0 permanece `no-go`.

## Aprovação e encerramento

Data: 2026-07-27.

Decisão humana:

- execução aprovada;
- `test-security-001: pass` confirmado;
- task 036 concluída;
- relatório aprovado;
- nenhum secret real identificado;
- RAW preservado;
- task 033 permanece ativa;
- corte v1.0 permanece `no-go` até consolidação final.
