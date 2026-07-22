---
id: task-2026-030
title: Especificação funcional e de segurança do Helpper
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
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-030-especificacao-funcional-e-seguranca-helpper.md
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

# Task 2026-030 — Especificação funcional e de segurança do Helpper

## Contexto

A task 028 aprovou a arquitetura do ecossistema Monvi Brain, Monvi Core Brain, Helpper Core, Helppers especialistas, Helppers individuais e Helpper Library.

A task 029 aprovou identidade, papéis, permissões, sessões, isolamento, onboarding, offboarding e segurança prática.

A task 030 deve transformar esses conceitos em uma especificação clara do funcionamento do Helpper, sem implementar agentes, autenticação, ferramentas ou integrações reais.

## Objetivo

Definir:

- responsabilidades;
- limites;
- fluxos;
- contratos;
- contexto;
- delegação;
- reporte;
- memória;
- uso de skills;
- uso de ferramentas;
- aprovação;
- erros;
- logs;
- custos;
- segurança;
- supervisão humana.

## Escopo

### 1. Helpper Core

Definir o Helpper Core como gerente dos Helppers.

Responsabilidades:

- receber solicitações;
- validar contexto;
- classificar demanda;
- selecionar Helpper adequado;
- dividir trabalho;
- delegar;
- acompanhar;
- consolidar;
- detectar conflito;
- cobrar evidência;
- solicitar aprovação;
- reportar ao CEO;
- propor promoção de conhecimento;
- registrar decisões e resultados.

Limites:

- não autenticar usuários sozinho;
- não conceder permissões;
- não acessar secrets diretamente;
- não aprovar conteúdo canônico sozinho;
- não publicar externamente sem aprovação;
- não executar ação crítica sem autorização;
- não misturar clientes;
- não ocultar falhas;
- não assumir identidade humana.

### 2. Helpper especialista

Definir um modelo configurável por especialidade.

Exemplos:

- Helpper Dev;
- Helpper Marketing;
- Helpper Comercial;
- Helpper Projetos;
- Helpper Automação;
- Helpper Segurança;
- Helpper Financeiro;
- Helpper Jurídico assistivo.

Cada especialista deve possuir:

- ID;
- missão;
- especialidade;
- escopo;
- fontes permitidas;
- skills;
- ferramentas;
- repositórios;
- ações permitidas;
- ações proibidas;
- risco;
- responsável humano;
- formato de saída;
- formato de reporte;
- critérios de escalonamento.

### 3. Helpper individual

Definir o agente vinculado a cada pessoa.

Regras:

- uma identidade humana vinculada;
- nunca mais autoridade que o usuário;
- acesso limitado a clientes e projetos;
- memória separada;
- skills locais;
- ferramentas autorizadas;
- reporte ao Helpper Core;
- suspensão automática junto da identidade;
- bloqueio em offboarding;
- logs por ação.

### 4. Contrato de contexto

Toda execução deve receber contexto mínimo e explícito:

```yaml
actor_id:
session_id:
request_id:
executor_id:
on_behalf_of:
active_client:
active_project:
role:
permissions:
data_classification:
allowed_paths:
read_only_paths:
forbidden_paths:
allowed_tools:
allowed_skills:
requires_review:
risk_level:
```

### 5. Delegação

Definir fluxo:

```text
solicitação
→ validação de identidade e autorização
→ classificação
→ seleção do Helpper
→ entrega de contexto mínimo
→ execução
→ revisão
→ consolidação
→ aprovação quando necessária
→ resposta
→ log
```

Regras:

- não delegar sem contexto;
- não delegar dado fora do escopo;
- não ampliar permissão;
- não delegar segredo;
- registrar quem pediu, quem executou e quem aprovou;
- interromper em conflito de política.

### 6. Reporte ao Helpper Core

Todo Helpper deve reportar:

- tarefa recebida;
- escopo;
- fontes usadas;
- skills usadas;
- ferramentas usadas;
- decisões;
- hipóteses;
- evidências;
- resultado;
- limitações;
- erros;
- custo;
- necessidade de aprovação;
- conhecimento proposto;
- risco residual.

### 7. Memória

Separar:

- memória de sessão;
- memória individual;
- memória de projeto;
- memória de cliente;
- memória departamental;
- memória institucional;
- conhecimento canônico.

Regras:

- memória não entra no Monvi Brain automaticamente;
- promoção exige revisão;
- memória de cliente não cruza clientes;
- conteúdo temporário possui retenção;
- dado sensível exige tratamento;
- histórico de agente deve ser auditável.

### 8. Skills e ferramentas

Definir:

- seleção por manifesto;
- compatibilidade com papel;
- compatibilidade com cliente;
- compatibilidade com projeto;
- risco;
- owner;
- versão;
- logs;
- tratamento de erro;
- fallback;
- proibição de ampliar permissão;
- suspensão em caso de incidente.

### 9. Aprovação humana

Definir níveis:

- baixo risco: leitura e rascunho;
- médio risco: revisão humana;
- alto risco: aprovação explícita;
- crítico: aprovação qualificada, reautenticação, evidência e reversão.

Exigem aprovação humana:

- publicação;
- proposta final;
- preço;
- prazo;
- SLA;
- alteração canônica;
- exclusão;
- exportação;
- compartilhamento externo;
- mudança de permissão;
- uso de dado sensível;
- execução em produção;
- contratação ou compra;
- ação jurídica;
- mensagem em nome da Monvi.

### 10. Tratamento de erros

Definir:

- falha recuperável;
- falha não recuperável;
- ausência de contexto;
- permissão insuficiente;
- ferramenta indisponível;
- conflito de fonte;
- custo excedido;
- dado incompleto;
- risco inesperado;
- incidente de segurança.

Toda falha deve:

- interromper quando necessário;
- preservar evidências;
- informar limitação;
- registrar log;
- solicitar intervenção quando aplicável;
- evitar resposta inventada.

### 11. Segurança

Definir:

- isolamento antes do contexto;
- negação por padrão;
- menor privilégio;
- secrets fora do Brain;
- prompt injection;
- dados maliciosos;
- ferramentas não confiáveis;
- dependências;
- supply chain;
- exfiltração;
- escalada de privilégio;
- abuso interno;
- conta comprometida;
- replay de sessão;
- agente fora de controle.

### 12. Auditoria

Campos mínimos:

- event_id;
- timestamp;
- actor_id;
- executor_id;
- approver_id;
- on_behalf_of;
- session_id;
- request_id;
- active_client;
- active_project;
- agent_id;
- skill_id;
- tool_id;
- action;
- resource;
- result;
- reason;
- risk_level;
- cost;
- evidence;
- output_reference.

### 13. Custos e limites

Definir:

- limite por usuário;
- limite por agente;
- limite por cliente;
- limite por tarefa;
- alerta;
- orçamento;
- suspensão;
- fallback;
- aprovação para exceder;
- registro de consumo.

### 14. Supervisão e desligamento

Definir:

- kill switch;
- suspensão por agente;
- suspensão por usuário;
- suspensão por ferramenta;
- revogação de sessão;
- bloqueio de skill;
- bloqueio de integração;
- quarentena de saída;
- revisão pós-incidente.

## Entregáveis esperados

1. `00_SYSTEM/architecture/Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md`
2. `00_SYSTEM/architecture/Contrato-contexto-delegacao-reporte-Helpper.md`
3. `00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md`
4. `00_SYSTEM/policies/Politica-memoria-e-promocao-de-conhecimento-Helpper.md`
5. `00_SYSTEM/templates/Manifesto-Helpper-especialista.md`
6. `00_SYSTEM/templates/Template-relatorio-execucao-Helpper.md`
7. `00_SYSTEM/templates/Checklist-aprovacao-acao-critica-Helpper.md`
8. `00_SYSTEM/templates/Playbook-incidente-e-suspensao-Helpper.md`

## Critérios de aprovação

A task só pode ser aprovada quando:

- Helpper Core estiver definido;
- Helpper especialista estiver definido;
- Helpper individual estiver definido;
- contrato de contexto estiver definido;
- delegação estiver definida;
- reporte estiver definido;
- memória estiver separada;
- skills e ferramentas estiverem governadas;
- aprovação humana estiver definida;
- erros estiverem tratados;
- segurança estiver definida;
- auditoria estiver definida;
- custos estiverem definidos;
- kill switch e suspensão estiverem definidos;
- limites de autoridade estiverem explícitos;
- implementação não for confundida com documentação.

## Fora do escopo

- criar agentes reais;
- configurar OpenAI API;
- integrar ferramentas;
- criar banco de dados;
- implementar portal;
- implementar autenticação;
- implementar filas;
- criar automações;
- executar ações externas;
- armazenar secrets;
- comprovar segurança;
- comprovar disponibilidade;
- comprovar conformidade.

## Riscos

- Helpper com autoridade excessiva;
- contexto incorreto;
- mistura de clientes;
- uso de skill inadequada;
- ferramenta insegura;
- custo descontrolado;
- memória contaminada;
- resposta sem evidência;
- execução não autorizada;
- falha não reportada;
- agente comprometido;
- ausência de kill switch.

## Resultado esperado

Uma especificação conceitual completa, segura e progressiva para orientar a futura implementação do Helpper no Monvi Core Brain.
