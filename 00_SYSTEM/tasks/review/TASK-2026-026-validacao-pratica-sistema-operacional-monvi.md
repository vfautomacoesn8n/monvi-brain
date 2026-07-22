---
id: task-2026-026
title: Validação prática do sistema operacional da Monvi
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
  - 00_SYSTEM/tasks/review/TASK-2026-026-validacao-pratica-sistema-operacional-monvi.md
  - 00_SYSTEM/tasks/done/TASK-2026-026-validacao-pratica-sistema-operacional-monvi.md
  - 00_SYSTEM/audits/Validacao-pratica-sistema-operacional-Monvi.md
  - 03_OPERATIONS/templates/Cenario-de-teste-operacional-Monvi.md
  - 03_OPERATIONS/templates/Registro-de-evidencias-operacionais-Monvi.md
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
  - 03_OPERATIONS/templates/Pipeline-comercial-Monvi.md
  - 03_OPERATIONS/templates/Qualificacao-de-lead-Monvi.md
  - 03_OPERATIONS/templates/Handoff-comercial-para-operacao-Monvi.md
  - 03_OPERATIONS/templates/Kickoff-de-projeto-Monvi.md
  - 03_OPERATIONS/templates/Checklist-de-entrega-Monvi.md
  - 03_OPERATIONS/templates/Painel-executivo-Monvi.md
  - 03_OPERATIONS/templates/Dicionario-de-metricas-Monvi.md
  - 03_OPERATIONS/templates/Checklist-de-liberacao-legal-LGPD-seguranca-Monvi.md
  - 03_OPERATIONS/templates/Registro-de-risco-e-excecao-Monvi.md
  - 04_OUTPUTS/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 99_ARCHIVE/
---

# Task 2026-026 — Validação prática do sistema operacional da Monvi

## Contexto

A Monvi concluiu documentalmente quatro frentes prioritárias:

- sistema comercial mínimo;
- operação e entrega padrão;
- métricas executivas;
- bloqueios legais, LGPD e segurança.

O inventário operacional mínimo permanece pausado por falta de acesso e evidência.

A próxima necessidade não é criar novos manuais, mas testar se os processos aprovados conseguem ser usados de forma consistente em um cenário real ou simulado.

## Objetivo

Validar na prática o sistema operacional da Monvi e distinguir:

- documento aprovado;
- processo testado;
- processo utilizável;
- processo implantado;
- processo com evidência;
- processo que precisa de ajuste.

## Entregáveis

Criar, em `review`:

- `00_SYSTEM/audits/Validacao-pratica-sistema-operacional-Monvi.md`;
- `03_OPERATIONS/templates/Cenario-de-teste-operacional-Monvi.md`;
- `03_OPERATIONS/templates/Registro-de-evidencias-operacionais-Monvi.md`.

## Escopo de validação

Testar, no mínimo:

### Comercial

- registro de lead;
- qualificação;
- próxima ação;
- proposta condicionada à qualificação;
- passagem para ganho ou perda;
- handoff de negócio ganho.

### Operação

- validação de prontidão;
- kickoff;
- classificação de solicitação;
- controle de escopo;
- revisão interna;
- aceite;
- publicação ou entrega;
- encerramento.

### Métricas

- preenchimento manual do painel;
- marcação de dado ausente;
- fórmula;
- fonte;
- responsável;
- frequência;
- decisão associada.

### Legal, LGPD e segurança

- aplicação do checklist de liberação;
- classificação de severidade;
- registro de evidência;
- bloqueio;
- liberação condicionada;
- exceção temporária;
- escalonamento jurídico ou técnico.

## Método

A validação deve usar:

- um cenário real, quando houver autorização e dados suficientes; ou
- um cenário simulado, claramente identificado como simulado.

Nenhum resultado simulado deve ser tratado como evidência de implantação real.

## Critérios de avaliação

Para cada etapa, registrar:

- esperado;
- executado;
- evidência;
- responsável;
- tempo;
- dificuldade;
- lacuna;
- risco;
- decisão;
- ajuste recomendado;
- status final.

## Status permitidos

- não testado;
- testado com sucesso;
- testado com ressalva;
- falhou;
- bloqueado;
- não aplicável.

## Evidências permitidas

Conforme o caso:

- arquivo preenchido;
- captura de tela sem dado sensível;
- registro de decisão;
- checklist;
- log;
- link interno;
- commit;
- data e responsável.

Não registrar:

- senha;
- token;
- chave;
- segredo;
- dado pessoal desnecessário;
- informação confidencial de cliente fora do contexto autorizado.

## Cenário mínimo recomendado

Simular uma oportunidade que:

1. entra como lead;
2. é qualificada;
3. recebe próxima ação;
4. evolui para proposta;
5. é marcada como ganha;
6. passa por handoff;
7. entra em prontidão;
8. realiza kickoff;
9. recebe uma solicitação nova;
10. classifica a solicitação;
11. passa por revisão interna;
12. recebe aceite;
13. é preparada para publicação;
14. aplica checklist legal, LGPD e segurança;
15. encontra um risco;
16. registra tratamento ou exceção;
17. atualiza o painel executivo;
18. encerra com evidências e aprendizados.

## Princípios

- não alterar documentos aprovados durante o teste;
- registrar lacunas antes de propor mudanças;
- não confundir simulação com implantação;
- não criar dado, evidência ou acesso inexistente;
- manter supervisão humana;
- preservar confidencialidade;
- não usar cliente real sem autorização;
- não declarar conformidade;
- não afirmar resultado comercial;
- não comprar ferramenta;
- não automatizar o teste.

## Saída esperada

A auditoria deve concluir:

- o que funcionou;
- o que falhou;
- o que ficou bloqueado;
- quais evidências existem;
- quais ajustes são recomendados;
- quais ajustes são obrigatórios;
- quais processos ainda não podem ser considerados implantados;
- quais próximas tasks são necessárias.

## Fora do escopo

- executar projeto real sem autorização;
- usar dados reais de cliente sem base;
- alterar documentos aprovados;
- configurar CRM;
- configurar Analytics;
- contratar ferramenta;
- integrar sistemas;
- publicar site;
- assinar contrato;
- declarar conformidade;
- emitir parecer jurídico;
- tratar simulação como resultado real;
- reabrir a task 021 sem acessos e evidências.

## Etapas

1. escolher cenário real autorizado ou simulado;
2. definir dados fictícios ou autorizados;
3. preparar roteiro;
4. executar fluxo comercial;
5. executar handoff e operação;
6. executar métricas;
7. executar bloqueios legais, LGPD e segurança;
8. registrar evidências;
9. classificar resultados;
10. identificar lacunas;
11. recomendar ajustes;
12. revisar com o CEO;
13. aprovar;
14. mover a task para `done`.

## Critérios de aceitação

- cenário identificado como real autorizado ou simulado;
- comercial testado;
- operação testada;
- métricas testadas;
- bloqueios testados;
- evidências registradas;
- lacunas explícitas;
- simulação separada de implantação;
- nenhum dado sensível exposto;
- nenhum documento aprovado alterado;
- nenhuma conformidade afirmada;
- relatório em `review`;
- templates em `review`;
- task em `review`;
- `changes.jsonl` válido;
- nenhum caminho protegido alterado.
