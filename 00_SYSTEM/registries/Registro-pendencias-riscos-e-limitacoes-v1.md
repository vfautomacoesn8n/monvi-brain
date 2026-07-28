---
id: registry-monvi-brain-v1-pending-risks-limitations
title: Registro de pendências, riscos e limitações do Monvi Brain v1
type: record
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
version: "0.2.0"
tags:
  - monvi-brain
  - riscos
  - pendencias
  - limitacoes
related:
  - registry-monvi-brain-v1-global-audit
  - registry-monvi-institutional-decisions
---

# Registro de pendências, riscos e limitações do Monvi Brain v1

## Pendências ativas

### pending-2026-001 — Task 021

- status: paused;
- condição: falta evidência e acesso suficiente;
- regra: não mover para done sem comprovação.

### pending-2026-002 — Correção progressiva dos achados

- status: resolved-documentary;
- origem: auditoria global;
- evidência: lotes de conectividade e consolidação concluídos;
- observação: testes finais permanecem separados.

### pending-2026-003 — Critérios finais de corte v1.0

- status: resolved-documentary;
- evidência: plano de corte, checklist e matriz criados;
- observação: decisão formal do corte permanece pendente.

### pending-2026-004 — Testes finais

- status: deferred;
- regra: executar depois da consolidação completa.


### pending-2026-005 — Revisão humana da task 032

- status: resolved;
- decisão: consolidação documental aprovada;
- aprovado por: ceo-monvi;
- data: 2026-07-23;
- observação: o corte v1.0 permanece `no-go`.

### pending-2026-006 — Aceite de riscos residuais

- status: open;
- dependência: resultados dos testes pós-consolidação;
- regra: riscos devem ser tratados ou aceitos formalmente.

### pending-2026-007 — Decisão formal do corte v1.0

- status: blocked;
- dependência: testes finais e aceite de riscos;
- recomendação pré-final: no-go.

## Riscos

### risk-2026-001 — Documentação confundida com implementação

- impacto: alto;
- controle: declarar limites em cada documento.

### risk-2026-002 — Mistura entre clientes

- impacto: crítico;
- controle: active_client, isolamento e revisão.

### risk-2026-003 — Correção massiva indevida

- impacto: alto;
- controle: lotes pequenos, staging controlado e rollback.

### risk-2026-004 — Dependência excessiva de plugin

- impacto: médio;
- controle: Markdown, YAML e wikilinks como base.

### risk-2026-005 — Fonte conflitante

- impacto: alto;
- controle: política de fonte de verdade.

### risk-2026-006 — Secrets no vault

- impacto: crítico;
- controle: proibição explícita e incidente documental.

## Limitações atuais

- Monvi Core Brain não implementado;
- autenticação não implementada;
- autorização real não implementada;
- agentes reais não implementados;
- integrações não ativadas;
- dashboards são documentais;
- métricas operacionais dependem de evidência;
- testes finais ainda não executados;
- task 021 permanece pausada;
- parte do legado ainda não foi migrada;
- anomalias Git conhecidas permanecem fora do staging.

## Critério de encerramento

Uma pendência só pode ser encerrada com:

- evidência;
- owner;
- reviewer;
- decisão;
- atualização do registro;
- referência ao commit ou task correspondente.

## Atualização pós-publicação — task 037

### risk-2026-007 — Ausência de proteção técnica da branch main

- status: pending-acceptance;
- classificação: risco residual operacional;
- impacto: alto;
- probabilidade: média;
- ativo afetado: repositório privado `vfautomacoesn8n/monvi-brain`;
- branch afetada: `main`;
- condição observada: proteção clássica de branch e rulesets indisponíveis no plano atual;
- evidência técnica: API do GitHub retornou `HTTP 403`;
- mensagem da plataforma: recurso depende de upgrade do plano ou de tornar o repositório público;
- alternativa pública: rejeitada por incompatibilidade com a classificação interna do Monvi Brain;
- consequência possível: push direto, force push, reescrita ou exclusão por usuário com permissão administrativa;
- proteção técnica ativa: não;
- controle compensatório: processual;
- owner: ceo-monvi;
- reviewer: ceo-monvi;
- source_task: task-2026-037;
- decisão humana final: pendente.

#### Controles compensatórios

1. trabalhar em branch específica por tarefa;
2. não trabalhar diretamente na `main`;
3. revisar alterações antes do merge;
4. utilizar somente squash merge;
5. não executar force push na `main`;
6. não excluir a `main`;
7. preservar tags publicadas;
8. publicar releases somente após validação;
9. manter commits pequenos e rastreáveis;
10. registrar exceções e incidentes.

#### Critério de reavaliação

Reavaliar proteção técnica quando ocorrer pelo menos uma destas condições:

- entrada de novos colaboradores com acesso ao repositório;
- aumento da frequência de mudanças;
- ativação de automações ou CI/CD;
- aumento da criticidade operacional;
- disponibilidade de plano compatível;
- incidente envolvendo a branch `main`.

#### Evidência

- `00_SYSTEM/audits/Execucao-task-2026-037-publicacao-governanca-github-Monvi-Brain-v1.md`;
- repositório: `vfautomacoesn8n/monvi-brain`;
- commit oficial: `32bc347fee1e4ee121503f22b0ea00220e506883`;
- tag e Release: `v1.0.0`.
