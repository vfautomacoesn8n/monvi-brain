---
id: task-2026-037
title: Registro da publicação e governança GitHub do Monvi Brain v1
type: task
status: approved
task_state: done
owner: ceo-monvi
agent: helpper
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: false
classification: internal
created_at: "2026-07-27"
updated_at: "2026-07-27"
reviewed_at: "2026-07-27"
version: "1.0.0"
allowed_paths:
  - 00_SYSTEM/audits/Execucao-task-2026-037-publicacao-governanca-github-Monvi-Brain-v1.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
  - 00_SYSTEM/tasks/review/TASK-2026-037-publicacao-governanca-github-monvi-brain-v1.md
  - 00_SYSTEM/tasks/done/TASK-2026-037-publicacao-governanca-github-monvi-brain-v1.md
read_only_paths:
  - 00_SYSTEM/audits/Decisao-final-go-Monvi-Brain-v1.md
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/logs/decisions.jsonl
  - 00_SYSTEM/schemas/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/tasks/done/
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/
forbidden_paths:
  - .git/
  - 05_SHARED/
tags:
  - monvi-brain
  - github
  - publicacao
  - governanca
  - release
acceptance_criteria:
  - Publicação privada do repositório registrada com evidências verificáveis
  - Branch, commit, tag e release oficiais documentados
  - Política de merge aplicada e validada
  - Limitação do plano GitHub registrada como risco residual
  - Controles processuais compensatórios definidos
  - Registro de riscos atualizado sem declarar proteção técnica inexistente
  - Log de mudanças atualizado com JSONL válido
  - Revisão humana concluída antes da aprovação da task
blocked_reason: null
---

# TASK-2026-037 — Registro da publicação e governança GitHub do Monvi Brain v1

## Contexto

O corte documental do Monvi Brain v1 foi aprovado pela decisão executiva de `go` da task 033.

Após a aprovação, o repositório foi publicado de forma privada no GitHub, a branch principal e a tag da versão foram enviadas, o Release `v1.0.0` foi criado e configurações de merge foram ajustadas.

Essas ações externas ainda precisam ser registradas no próprio Monvi Brain com evidências, limites e riscos claramente documentados.

## Objetivo

Registrar de forma auditável a publicação e a governança inicial do repositório GitHub do Monvi Brain v1, sem confundir controles processuais com proteção técnica de branch.

## Fatos a registrar

1. repositório remoto privado:
   - `vfautomacoesn8n/monvi-brain`;
2. remoto local:
   - `origin`;
3. branch padrão:
   - `main`;
4. commit oficial:
   - `32bc347fee1e4ee121503f22b0ea00220e506883`;
5. tag anotada:
   - `v1.0.0`;
6. Release:
   - `Monvi Brain v1.0.0`;
7. visibilidade:
   - `PRIVATE`;
8. upstream:
   - `main` acompanhando `origin/main`.

## Política de merge aplicada

- merge commit: desativado;
- rebase merge: desativado;
- squash merge: ativado;
- exclusão automática da branch após merge: ativada.

## Limitação técnica identificada

A conta atual não possui acesso a proteção clássica de branch nem a rulesets para este repositório privado.

A API do GitHub retornou `HTTP 403` com orientação para upgrade do plano ou transformação do repositório em público.

Tornar o Monvi Brain público não é uma alternativa aceitável.

## Controle processual compensatório

Enquanto não houver proteção técnica da `main`, a operação deverá observar:

1. trabalho em branch específica por tarefa;
2. revisão antes de merge;
3. uso exclusivo de squash merge;
4. proibição operacional de force push na `main`;
5. proibição operacional de exclusão da `main`;
6. preservação de tags publicadas;
7. commits pequenos e rastreáveis;
8. publicação de releases somente após validação.

## Escopo da execução

A execução deverá:

1. criar relatório auditável da publicação;
2. registrar evidências locais e remotas;
3. atualizar o registro de riscos e limitações;
4. registrar o risco de ausência de proteção técnica da `main`;
5. atualizar `changes.jsonl`;
6. validar sintaxe, caminhos, diff e staging;
7. submeter a task para decisão humana.

## Regras

- não armazenar token, código temporário ou credencial;
- não registrar o valor de credenciais mascaradas;
- não alterar a visibilidade privada;
- não recriar tag ou Release;
- não executar force push;
- não editar arquivos RAW ou canonical;
- não declarar que a `main` está tecnicamente protegida;
- não aprovar automaticamente a task;
- não usar `git add .`.

## Entregáveis

1. `00_SYSTEM/audits/Execucao-task-2026-037-publicacao-governanca-github-Monvi-Brain-v1.md`;
2. atualização de `00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md`;
3. entrada válida em `00_SYSTEM/logs/changes.jsonl`;
4. task 037 atualizada com resultado da execução;
5. decisão humana posterior sobre aprovação e conclusão.

## Critérios de bloqueio

A task deve ser bloqueada se ocorrer:

- divergência entre commit local e remoto;
- divergência entre tag e commit oficial;
- repositório público;
- ausência do Release `v1.0.0`;
- credencial armazenada em documento;
- alteração inesperada em RAW ou canonical;
- JSONL inválido;
- evidência insuficiente sobre a limitação de proteção da `main`.

## Fora do escopo

- implementar Monvi Core Brain;
- criar autenticação ou cadastro de usuários;
- provisionar Helppers individuais;
- contratar ou alterar plano do GitHub;
- tornar o repositório público;
- implementar CI/CD;
- ativar automações externas;
- concluir tasks 021 ou 027.

## Resultado esperado

Publicação e governança inicial do GitHub registradas com evidências, limitação técnica declarada e controles processuais compensatórios formalizados, prontas para revisão humana.

## Execução técnica registrada

- data: 2026-07-27;
- executor: Helpper;
- repositório privado: confirmado;
- branch padrão `main`: confirmada;
- commit oficial remoto: confirmado;
- tag anotada `v1.0.0`: confirmada;
- Release `Monvi Brain v1.0.0`: confirmado;
- merge commit: desativado;
- squash merge: ativado;
- rebase merge: desativado;
- exclusão automática de branch após merge: ativada;
- proteção técnica da `main`: indisponível no plano atual;
- credenciais registradas: não;
- RAW alterado: não;
- canonical alterado: não;
- resultado técnico: `pass-with-residual-risk`;
- status da task: permanece `review`;
- task_state: permanece `active`;
- decisão humana: pendente.

### Evidência

- `00_SYSTEM/audits/Execucao-task-2026-037-publicacao-governanca-github-Monvi-Brain-v1.md`.

### Próximas ações da task

1. atualizar o registro de riscos e limitações;
2. registrar a execução em `changes.jsonl`;
3. validar os entregáveis;
4. submeter o risco residual para decisão do CEO;
5. somente depois aprovar e mover a task para `done`.

## Registro de risco e log concluído

- data: 2026-07-27;
- risco registrado: `risk-2026-007`;
- risco: ausência de proteção técnica da branch `main`;
- impacto: alto;
- probabilidade: média;
- controle atual: processual;
- aceite final do risco: pendente de decisão do CEO;
- evento registrado em `changes.jsonl`: sim;
- JSONL validado: sim;
- status da task: permanece `review`;
- task_state: permanece `active`;
- requires_review: permanece `true`.

### Pendência restante

A task 037 depende exclusivamente de revisão humana para:

1. aceitar formalmente o risco residual;
2. aprovar o relatório de execução;
3. aprovar a task;
4. mover a task de `review/` para `done/`.
## Decisão executiva final

- data: 2026-07-27;
- decisor: CEO da Monvi;
- execução técnica: aprovada;
- relatório de execução: aprovado;
- risco `risk-2026-007`: aceito temporariamente;
- controles processuais: mantidos;
- reavaliação futura: obrigatória nos gatilhos registrados;
- status final: `approved`;
- task_state final: `done`;
- requires_review final: `false`;
- pendência de revisão humana: não.

### Declaração aprovada

Aprovo a execução da task 037, aceito temporariamente o risco residual `risk-2026-007` relacionado à ausência de proteção técnica da branch `main` e autorizo a conclusão da tarefa.

O risco deverá ser reavaliado antes da concessão de acesso de escrita a novos colaboradores, agentes, automações ou integrações.

### Resultado

A publicação e a governança inicial do Monvi Brain v1 estão registradas e aprovadas.

A conclusão desta task não declara que a branch `main` possui proteção técnica.
