---
id: task-2026-027
title: Piloto real de baixo risco do sistema operacional da Monvi
type: task
status: review
task_state: review
priority: high
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-027-piloto-real-baixo-risco-monvi.md
  - 00_SYSTEM/tasks/done/TASK-2026-027-piloto-real-baixo-risco-monvi.md
  - 03_OPERATIONS/pilots/Piloto-real-baixo-risco-Monvi.md
  - 03_OPERATIONS/templates/Registro-de-piloto-operacional-Monvi.md
  - 00_SYSTEM/audits/Relatorio-piloto-real-baixo-risco-Monvi.md
  - 00_SYSTEM/logs/changes.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - 00_SYSTEM/registries/source-manifest.md
  - 00_SYSTEM/logs/ingestion.jsonl
  - 01_RAW/
  - 02_WIKI/
  - 03_OPERATIONS/commercial/
  - 03_OPERATIONS/operations/
  - 03_OPERATIONS/metrics/
  - 03_OPERATIONS/governance/
  - 03_OPERATIONS/templates/
  - 04_OUTPUTS/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 99_ARCHIVE/
---

# Task 2026-027 — Piloto real de baixo risco do sistema operacional da Monvi

## Contexto

A validação simulada da task 026 confirmou que o sistema documental é utilizável, mas não comprovou implantação real.

O próximo passo aprovado é executar um piloto real de baixo risco, sem cliente externo e sem depender de acessos técnicos críticos ainda não validados.

## Assunção operacional

O piloto será interno da Monvi, com `active_client: null`, usando um fluxo real de trabalho da própria empresa.

O caso recomendado é:

> estruturar e concluir uma melhoria interna de baixo risco na operação comercial ou institucional da Monvi, sem publicação externa obrigatória e sem uso de dados sensíveis.

A definição final do item piloto deve ser feita antes da execução.

## Objetivo

Testar um ciclo operacional real da Monvi, com evidências, responsáveis, datas, decisões e aprendizados.

## Resultado esperado

Comprovar na prática, em pelo menos um ciclo:

- entrada de demanda;
- definição de escopo;
- responsável;
- próxima ação;
- prontidão;
- kickoff;
- execução;
- controle de mudança;
- revisão interna;
- aceite interno;
- checklist legal, LGPD e segurança;
- atualização de métricas;
- encerramento;
- retrospectiva.

## Entregáveis

Criar, em `review`:

- `03_OPERATIONS/pilots/Piloto-real-baixo-risco-Monvi.md`;
- `03_OPERATIONS/templates/Registro-de-piloto-operacional-Monvi.md`;
- `00_SYSTEM/audits/Relatorio-piloto-real-baixo-risco-Monvi.md`.

## Critérios para escolher o piloto

O item deve:

- ser interno;
- ter baixo risco;
- não exigir cliente externo;
- não exigir publicação;
- não exigir contratação;
- não exigir integração crítica;
- não usar dado pessoal desnecessário;
- ter começo e fim claros;
- permitir evidência;
- caber em um ciclo curto.

## Sugestões de piloto

Escolher apenas uma:

1. estruturar uma página interna de diagnóstico comercial;
2. organizar um fluxo interno de entrada e qualificação de leads;
3. revisar e padronizar um ativo institucional interno;
4. executar um mini projeto interno de conteúdo com briefing, produção, revisão e aceite;
5. testar um fluxo manual de proposta, handoff e kickoff com demanda interna real.

## Dados mínimos do piloto

- ID;
- nome;
- objetivo;
- tipo;
- solicitante;
- responsável;
- data de início;
- prazo;
- escopo;
- fora do escopo;
- dependências;
- riscos;
- critérios de aceite;
- evidências;
- status;
- próxima ação;
- data da próxima ação.

## Evidências mínimas

- briefing ou demanda;
- escopo aprovado;
- registro de prontidão;
- kickoff;
- registro de execução;
- revisão interna;
- aceite;
- checklist de liberação;
- painel ou métrica atualizada;
- encerramento;
- retrospectiva.

## Regras

- usar somente dados internos mínimos;
- não expor credenciais ou segredos;
- não alterar documentos aprovados durante o piloto;
- registrar desvios;
- abrir nova task apenas para falha comprovada;
- não automatizar;
- não contratar ferramenta;
- não publicar externamente sem decisão específica;
- não declarar conformidade;
- não afirmar resultado comercial sem evidência;
- não reabrir a task 021 sem acessos.

## Critérios de sucesso

O piloto será considerado concluído quando:

- houver uma demanda real interna;
- o fluxo completo for percorrido;
- as evidências forem registradas;
- os bloqueios forem respeitados;
- o aceite interno for registrado;
- os aprendizados forem documentados;
- lacunas reais forem separadas de hipóteses;
- nenhuma salvaguarda for violada.

## Critérios de falha

O piloto falha quando:

- não há responsável;
- não há próxima ação;
- não há evidência;
- o escopo muda sem registro;
- publicação ocorre sem liberação;
- dado sensível é exposto;
- resultado simulado é tratado como real;
- um bloqueio crítico é ignorado.

## Fora do escopo

- usar cliente real;
- publicar site;
- configurar domínio;
- integrar CRM;
- configurar Analytics;
- automatizar processo;
- contratar ferramenta;
- alterar contrato;
- validar conformidade;
- executar revisão jurídica;
- usar acessos da task 021;
- alterar documentos aprovados.

## Etapas

1. escolher o piloto;
2. registrar demanda;
3. definir escopo;
4. definir responsáveis;
5. validar prontidão;
6. realizar kickoff;
7. executar;
8. registrar mudança;
9. revisar;
10. aplicar checklist de liberação;
11. obter aceite interno;
12. atualizar métricas;
13. encerrar;
14. realizar retrospectiva;
15. emitir relatório;
16. revisar com o CEO;
17. aprovar;
18. mover a task para `done`.

## Critérios de aceitação

- piloto interno escolhido;
- demanda real registrada;
- escopo definido;
- responsáveis definidos;
- fluxo operacional percorrido;
- evidências registradas;
- aceite interno registrado;
- bloqueios respeitados;
- métricas atualizadas;
- retrospectiva concluída;
- relatório em `review`;
- task em `review`;
- `changes.jsonl` válido;
- nenhum caminho protegido alterado.

## Seleção humana do piloto

- decisão: aprovada;
- aprovador: ceo-monvi;
- data: 2026-07-21;
- piloto selecionado: fluxo interno de entrada e qualificação de leads;
- natureza: piloto interno real;
- cliente externo: não;
- publicação: não;
- automação: não;
- contratação: não;
- execução real concluída: não;
- próxima ação: registrar o primeiro lead real da Monvi.
