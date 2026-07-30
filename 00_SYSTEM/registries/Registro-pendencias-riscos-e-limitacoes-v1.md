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
version: "0.4.0"
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

- status: accepted;
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
- decisão humana final: risco aceito pelo CEO em 2026-07-27.

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
#### Condição do aceite

O aceite é temporário e não declara a existência de proteção técnica da branch `main`.

O risco deverá ser reavaliado antes de:

- conceder acesso de escrita a novos colaboradores;
- conectar agentes, automações ou integrações com permissão de escrita;
- ativar CI/CD;
- permitir acesso de terceiros;
- ampliar significativamente a frequência de alterações;
- continuar a operação após incidente relacionado ao Git.

#### Avaliação complementar da Task 038

- task avaliada: `task-2026-038`;
- data da avaliação: 2026-07-28;
- resultado: risco mantido sem alteração técnica;
- status mantido: accepted;
- impacto mantido: alto;
- probabilidade mantida: média;
- controle compensatório mantido: processual;
- gatilho de reavaliação técnica acionado: não;
- novos colaboradores com acesso de escrita: não;
- agentes ou Helppers com acesso de escrita: não;
- automações ou CI/CD ativados: não;
- alteração da proteção da branch `main`: não;
- alteração do aceite humano anterior: não.

A Task 038 criou somente política, registro-modelo, templates, estrutura documental de pessoas e relatório de execução.

Nenhuma pessoa real, conta, permissão, credencial, sessão, agente ou Helpper individual foi criada ou ativada.

A documentação produzida fortalece a preparação para futuras concessões de acesso, mas não reduz nem elimina a ausência de proteção técnica da branch `main`.

O risco deverá ser reavaliado antes de qualquer implementação real que conceda acesso de escrita a colaborador, terceiro, Helpper, agente, automação, integração ou CI/CD.

Evidência complementar:

- `00_SYSTEM/audits/Execucao-task-2026-038-identidade-perfis-helppers-individuais.md`;
- `00_SYSTEM/logs/changes.jsonl`;
- branch de execução: `task/2026-038-identidade-perfis-helppers-individuais`.

#### Avaliação complementar da Task 039

- task avaliada: `task-2026-039`;
- data da avaliação: 2026-07-29;
- escopo avaliado: perfis documentais reais e Helppers individuais planejados dos CEOs;
- resultado: risco mantido sem alteração técnica;
- status mantido: accepted;
- impacto mantido: alto;
- probabilidade mantida: média;
- controle compensatório mantido: processual;
- gatilho de reavaliação técnica acionado: não;
- novas contas GitHub criadas: não;
- novos colaboradores com acesso de escrita: não;
- Helppers com acesso de escrita: não;
- agentes conectados ao GitHub: não;
- automações ou CI/CD ativados: não;
- alteração da proteção da branch `main`: não;
- alteração do aceite humano anterior: não.

A Task 039 cadastrou Victor e Filipe somente como perfis documentais em onboarding e modelou dois Helppers individuais em estado `planned`.

Nenhuma conta corporativa, permissão de escrita, credencial, sessão, integração, automação ou execução técnica foi criada ou ativada.

A existência de registros humanos reais aumenta a necessidade de governança, mas não aciona isoladamente o gatilho técnico do risco enquanto não houver provisionamento de acesso ao repositório.

O risco deverá ser formalmente reavaliado antes de:

- criar conta GitHub corporativa com acesso ao repositório;
- conceder acesso de escrita a Victor, Filipe ou outra pessoa;
- conectar qualquer Helpper, agente, integração ou automação ao GitHub;
- ativar CI/CD;
- ampliar permissões administrativas;
- permitir execução técnica sobre a branch `main`.

Evidências complementares:

- `00_SYSTEM/tasks/review/TASK-2026-039-implementacao-piloto-identidades-helppers-ceos.md`;
- `03_OPERATIONS/pessoas/onboarding/person-0001/Perfil-colaborador.md`;
- `03_OPERATIONS/pessoas/onboarding/person-0001/Helpper-individual.md`;
- `03_OPERATIONS/pessoas/onboarding/person-0002/Perfil-colaborador.md`;
- `03_OPERATIONS/pessoas/onboarding/person-0002/Helpper-individual.md`;
- branch de execução: `task/2026-039-implementacao-piloto-identidades-helppers-ceos`.

#### Avaliação complementar da Task 040

- task avaliada: `task-2026-040`;
- data da avaliação: 2026-07-29;
- escopo avaliado: arquitetura e preparação documental do Identity Gateway;
- resultado: `risk-2026-007` mantido sem alteração técnica;
- status mantido: accepted;
- impacto mantido: alto;
- probabilidade mantida: média;
- controle compensatório mantido: processual;
- gatilho de reavaliação técnica acionado: não;
- acesso de escrita novo ao GitHub: não;
- agente, Helpper ou integração conectado ao GitHub: não;
- automação ou CI/CD ativado: não;
- alteração da proteção da branch `main`: não.

A Task 040 produz somente arquitetura, contratos, matriz e plano de testes. A futura implementação técnica deverá reavaliar o `risk-2026-007` caso envolva acesso de escrita ao repositório, automação, integração ou CI/CD.

### risk-2026-008 — Vínculo incorreto ou insuficientemente segregado no Identity Gateway

- status: accepted;
- classificação: risco de identidade, autorização e segregação;
- impacto: alto;
- probabilidade atual: baixa, pois não existe implementação técnica;
- probabilidade futura estimada: média sem controles;
- ativos afetados: identidades, sessões, Helppers, bibliotecas pessoais e contextos institucionais;
- condição atual: arquitetura documental criada e implementação técnica bloqueada;
- consequência possível: associação de conta à pessoa incorreta, seleção indevida de Helpper, acesso cruzado ou carregamento de contexto não autorizado;
- owner: ceo-monvi;
- reviewer: ceo-monvi;
- source_task: task-2026-040;
- decisão humana final: risco aceito pelo CEO em 2026-07-30 exclusivamente para a fase documental; mitigação obrigatória antes de qualquer implementação técnica.

#### Controles preventivos documentados

1. validar token no backend;
2. exigir emissor, audiência, assinatura, expiração e `email_verified`;
3. usar `sub` como identificador externo estável;
4. validar domínio autorizado quando aplicável;
5. manter vínculo explícito entre `provider_subject`, conta, identidade e `person_id`;
6. negar por padrão na ausência de vínculo ou autorização;
7. separar autenticação, identificação, autorização e seleção do Helpper;
8. impedir que o prompt redefina identidade;
9. impedir acesso cruzado entre bibliotecas pessoais;
10. registrar eventos sanitizados e permitir revogação de sessão.

#### Critério de reavaliação

Reavaliar antes de criar contas, configurar OAuth/OIDC, armazenar sessões, ativar login, vincular `sub` real, selecionar Helpper operacional, carregar biblioteca pessoal, conceder acesso a clientes ou realizar deploy.

#### Estado

- implementação técnica: não iniciada;
- exposição técnica atual: inexistente;
- risco documental: identificado;
- tratamento proposto: mitigar antes da implementação;
- aceite humano: concedido para a fase documental em 2026-07-30; não autoriza implementação técnica.
#### Condição do aceite da Task 040

A aprovação da Task 040 valida a arquitetura, a matriz, o plano de testes, a reconciliação documental e o tratamento proposto.

Este aceite:

- não autoriza criação de contas;
- não autoriza configuração de OAuth/OIDC;
- não autoriza sessões, callbacks, APIs, deploys ou integrações;
- não autoriza ativação de Helpper;
- não autoriza acesso a clientes;
- não elimina a obrigação de mitigar o risco antes da implementação técnica;
- exige nova task técnica e nova revisão humana.
