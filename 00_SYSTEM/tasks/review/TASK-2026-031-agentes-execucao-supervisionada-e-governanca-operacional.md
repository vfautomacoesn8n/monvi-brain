---
id: task-2026-031
title: Agentes, execução supervisionada e governança operacional
type: task
status: review
task_state: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
classification: internal
priority: high
depends_on:
  - task-2026-028
  - task-2026-029
  - task-2026-030
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-031-agentes-execucao-supervisionada-e-governanca-operacional.md
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/logs/changes.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/registries/source-manifest.md
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/
  - 04_OUTPUTS/
  - 05_SHARED/
forbidden_paths:
  - 00_SYSTEM/secrets/
  - .git/
---

# Task 2026-031 — Agentes, execução supervisionada e governança operacional

## Contexto

A task 028 aprovou a arquitetura do ecossistema Monvi Brain, Monvi Core Brain e Helpper.

A task 029 aprovou identidade, papéis, permissões, sessões, isolamento, onboarding, offboarding e segurança de acesso.

A task 030 aprovou a especificação funcional e de segurança do Helpper, incluindo contexto, delegação, memória, skills, ferramentas, aprovação humana, custos, incidentes, suspensão e kill switch.

A task 031 deve definir como agentes futuros serão criados, ativados, executados, supervisionados, suspensos e removidos de forma controlada.

## Objetivo

Criar o modelo operacional de execução supervisionada para agentes, ainda sem implementar agentes reais.

## Princípio central

Nenhum agente executa ação real apenas porque recebeu uma instrução.

Toda execução deve passar por:

- identidade;
- autorização;
- contexto;
- política;
- classificação de risco;
- limites;
- supervisão;
- evidência;
- log;
- aprovação quando necessária.

## Escopo

### 1. Ciclo de vida do agente

Definir estados:

```text
draft
→ configured
→ validated
→ simulated
→ pilot
→ active
→ suspended
→ retired
→ archived
```

Estados excepcionais:

- blocked;
- quarantined;
- incident;
- deprecated.

Cada mudança de estado deve registrar:

- motivo;
- responsável;
- data;
- evidência;
- versão;
- ambiente;
- aprovação;
- reversão.

### 2. Criação e configuração

Definir requisitos mínimos:

- manifesto aprovado;
- owner humano;
- missão;
- escopo;
- clientes permitidos;
- projetos permitidos;
- skills permitidas;
- ferramentas permitidas;
- repositórios permitidos;
- ações permitidas;
- ações proibidas;
- risco;
- orçamento;
- limite de concorrência;
- timeout;
- retry;
- fallback;
- logs;
- kill switch;
- contato de incidente.

### 3. Ambientes de execução

Definir:

- sandbox;
- simulation;
- staging;
- pilot;
- production.

Regras:

- promoção progressiva;
- isolamento entre ambientes;
- dados mínimos;
- secrets fora do Brain;
- credenciais separadas;
- limites por ambiente;
- produção somente após aprovação;
- rollback testado antes do piloto.

### 4. Tipos de execução

Definir:

- assistida;
- supervisionada;
- semiautônoma controlada;
- agendada;
- reativa;
- sob demanda.

Nenhuma execução crítica deve ser totalmente autônoma.

### 5. Fluxo de execução

```text
request
→ authenticate
→ authorize
→ classify
→ prepare context
→ validate limits
→ simulate when required
→ request approval
→ execute
→ verify result
→ register evidence
→ report
→ close
```

Estados operacionais:

- queued;
- validating;
- waiting-context;
- waiting-approval;
- running;
- retrying;
- completed;
- failed;
- blocked;
- cancelled;
- rolled-back;
- quarantined.

### 6. Filas, concorrência e prioridade

Definir:

- prioridade;
- ordem;
- dependências;
- concorrência;
- exclusão mútua;
- lock;
- tempo máximo em fila;
- cancelamento;
- reprocessamento;
- starvation;
- tarefas duplicadas;
- cliente ativo;
- orçamento disponível.

### 7. Retry, timeout e fallback

Definir:

- máximo de tentativas;
- intervalo;
- backoff;
- erro recuperável;
- erro não recuperável;
- timeout;
- cancelamento seguro;
- fallback;
- escalonamento humano;
- proibição de retry em ação destrutiva sem idempotência.

### 8. Idempotência

Toda ação com efeito real deve possuir:

- chave de idempotência;
- verificação de execução anterior;
- proteção contra duplicidade;
- resultado reutilizável quando seguro;
- log;
- política de expiração.

### 9. Aprovação

Definir:

- antes da execução;
- durante a execução;
- após simulação;
- antes de produção;
- antes de exceder custo;
- antes de exportar;
- antes de excluir;
- antes de publicar;
- antes de enviar mensagem;
- antes de mudar permissão.

Regras:

- executor não aprova a própria ação crítica;
- aprovação tem validade;
- escopo da aprovação é explícito;
- reautenticação quando aplicável;
- dupla aprovação para risco crítico.

### 10. Evidências e logs

Registrar:

- request;
- contexto;
- versão do agente;
- versão da política;
- skill;
- ferramenta;
- entrada;
- decisão;
- aprovação;
- tentativa;
- resultado;
- custo;
- tempo;
- erro;
- rollback;
- saída;
- responsável.

Não registrar secrets em logs.

### 11. Rollback

Definir:

- pré-condições;
- ponto de restauração;
- compensação;
- reversão técnica;
- reversão operacional;
- evidência;
- validação;
- owner;
- prazo.

Ação sem rollback deve ser tratada como risco elevado.

### 12. Monitoramento

Definir indicadores:

- volume;
- sucesso;
- falha;
- bloqueio;
- tempo;
- custo;
- retry;
- rollback;
- incidentes;
- aprovação;
- uso por cliente;
- uso por agente;
- uso por ferramenta;
- anomalia.

### 13. Incidentes

Definir:

- detecção;
- severidade;
- suspensão;
- quarentena;
- preservação de evidência;
- comunicação;
- investigação;
- correção;
- reativação;
- revisão pós-incidente.

### 14. Critérios de piloto

Um agente só pode sair de simulação quando houver:

- manifesto aprovado;
- owner humano;
- escopo pequeno;
- cliente ou processo de baixo risco;
- dados controlados;
- ferramenta autorizada;
- logs;
- limites;
- timeout;
- retry;
- fallback;
- idempotência quando necessária;
- rollback;
- checklist;
- aprovação;
- plano de incidente;
- métrica de sucesso.

### 15. Critérios de produção

Exigir:

- piloto concluído;
- incidentes tratados;
- resultados revisados;
- risco residual aceito;
- custos conhecidos;
- operação documentada;
- suporte definido;
- monitoramento ativo;
- kill switch validado;
- rollback validado;
- owner disponível;
- aprovação executiva.

## Entregáveis esperados

1. `00_SYSTEM/architecture/Modelo-ciclo-de-vida-e-estados-de-agentes-Monvi.md`
2. `00_SYSTEM/architecture/Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md`
3. `00_SYSTEM/policies/Politica-ambientes-promocao-piloto-producao-agentes.md`
4. `00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md`
5. `00_SYSTEM/policies/Politica-logs-evidencias-custos-e-monitoramento-agentes.md`
6. `00_SYSTEM/templates/Manifesto-operacional-de-agente.md`
7. `00_SYSTEM/templates/Checklist-piloto-controlado-de-agente.md`
8. `00_SYSTEM/templates/Playbook-rollback-suspensao-e-incidente-de-agente.md`

## Critérios de aprovação

A task só pode ser aprovada quando:

- ciclo de vida estiver definido;
- estados normais e excepcionais estiverem definidos;
- ambientes estiverem definidos;
- execução supervisionada estiver definida;
- filas e concorrência estiverem definidas;
- retry, timeout e fallback estiverem definidos;
- idempotência estiver definida;
- aprovação estiver definida;
- separação de funções estiver definida;
- logs e evidências estiverem definidos;
- custos estiverem definidos;
- rollback estiver definido;
- monitoramento estiver definido;
- incidentes estiverem definidos;
- piloto estiver definido;
- produção estiver definida;
- limites de autonomia estiverem explícitos;
- implementação não for confundida com documentação.

## Fora do escopo

- criar agentes reais;
- executar agente;
- integrar OpenAI API;
- configurar fila;
- criar worker;
- criar scheduler;
- configurar banco;
- implementar autenticação;
- implementar aprovação;
- implementar monitoramento;
- armazenar secrets;
- conectar produção;
- executar piloto real;
- comprovar disponibilidade;
- comprovar conformidade;
- comprovar segurança.

## Riscos

- agente ativado cedo demais;
- execução duplicada;
- retry destrutivo;
- ação sem rollback;
- custo sem limite;
- fila sem prioridade;
- concorrência incorreta;
- falta de separação de funções;
- produção sem piloto;
- incidente sem suspensão;
- log com secret;
- ação crítica sem aprovação;
- agente sem owner;
- ausência de kill switch.

## Resultado esperado

Um modelo operacional completo para orientar a futura implementação controlada de agentes no Monvi Core Brain.
