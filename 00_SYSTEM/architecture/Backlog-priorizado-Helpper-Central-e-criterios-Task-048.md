---
id: architecture-proposal-backlog-helpper-central-criterios-task-048
title: Backlog priorizado do Helpper Central e critérios para futura Task 048
type: architecture_proposal
status: draft
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
confidentiality: internal
classification: internal
created_at: "2026-08-05"
updated_at: "2026-08-05"
reviewed_at: null
requires_review: true
version: "0.1.0"
decision_state: pending
implementation_authorized: false
task_048_authorized: false
phase_5_started: false
task_id: task-2026-047
sources:
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
  - 00_SYSTEM/architecture/Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md
  - 00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md
related:
  - 00_SYSTEM/tasks/active/TASK-2026-047-arquitetura-e-especificacao-do-helpper-central.md
  - 00_SYSTEM/architecture/Fluxo-operacional-e-papel-Helpper-Central.md
  - 00_SYSTEM/architecture/Contrato-executor-controlado-Helpper-Central.md
  - 00_SYSTEM/architecture/Recomendacao-interface-e-arquitetura-tecnica-Helpper-Central-MVP.md
tags: [helpper, helpper-central, backlog, task-048, criterios, roadmap]
---

# Backlog priorizado do Helpper Central e critérios para futura Task 048

## Natureza do documento

Encerra os quatro entregáveis desta etapa da Task 047. Organiza o backlog futuro do Helpper Central e define critérios objetivos para uma eventual Task 048. **Este documento não cria, não autoriza e não declara iniciada a Task 048.** Não inicia a Fase 5. Não autoriza implementação técnica.

## 1. Backlog priorizado

### P0 — indispensável ao MVP

| Item | Objetivo | Justificativa | Dependências | Risco | Evidência de conclusão | Gate humano |
|---|---|---|---|---|---|---|
| Adoção do modelo híbrido de interface | Operar o Helpper Central sem infraestrutura nova | Recomendado no Documento 3, seção 2.1, por já funcionar hoje | Nenhuma — usa Git e canais já disponíveis | Baixo | Uso comprovado em pelo menos um ciclo completo de task | Sim — aprovação do modelo pelo CEO |
| Padronização do envelope de execução | Garantir que todo executor controlado receba o mesmo contrato mínimo | Documento 2, seção 2 | Documento 2 aprovado | Baixo | Envelope aplicado em pelo menos uma task real | Sim |
| Aplicação da taxonomia de erros do Documento 1 | Reduzir ambiguidade operacional em falhas comuns | Documento 1, seção 5 | Documento 1 aprovado | Médio, se ignorado | Pelo menos um erro real tratado conforme a taxonomia | Sim |

### P1 — importante após validação inicial

| Item | Objetivo | Justificativa | Dependências | Risco | Evidência de conclusão | Gate humano |
|---|---|---|---|---|---|---|
| Refinar critérios de ativação de Helppers especialistas para o contexto do Central | Delegar partes específicas de análise sem perder consolidação | `Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md`, "Critérios de ativação" | P0 validado | Médio | Pelo menos um caso real de delegação avaliado | Sim |
| Formalizar checklist de validação por gate (versão consolidada) | Reduzir variação entre revisões | Já praticado nesta sessão de forma ad hoc | P0 validado | Baixo | Checklist único referenciado nos próximos ciclos | Sim |
| Avaliar métricas mínimas de uso do Helpper Central (sem dashboard) | Ter evidência objetiva de valor antes de qualquer investimento técnico | `Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md`, seção 36 (métricas não promovem automaticamente) | P0 validado por pelo menos 30 dias de uso | Baixo | Registro simples de ciclos concluídos versus bloqueados | Não, apenas registro |

### P2 — evolução futura

| Item | Objetivo | Justificativa | Dependências | Risco | Evidência de conclusão | Gate humano |
|---|---|---|---|---|---|---|
| Avaliar aplicação web dedicada | Interface mais acessível para uso não técnico | Documento 3, seção 2.2 | Core Brain tecnicamente operante (Fases 2–4 do Plano Mestre) | Alto (novo componente técnico) | Proposta técnica formal revisada e aprovada | Sim, incluindo Gate F do Plano Mestre se envolver produção |
| Avaliar mecanismo de memória institucional além do Git | Reduzir dependência de reconstrução manual de contexto | Fase 7 do Plano Mestre | Fontes, permissões e retenção definidas | Alto | Proposta técnica formal revisada e aprovada | Sim |
| Integração automatizada do Helpper Central com canais (sem copiar/colar manual) | Reduzir fricção operacional | Documento 3, seção 6 | Decisão sobre interface definitiva | Médio a alto | Proposta técnica formal revisada e aprovada | Sim |

### Fora de escopo atual

- qualquer automação autônoma sem supervisão humana (proibido por `Politica-seguranca-supervisao-e-limites-Helpper.md`);
- qualquer acesso a secrets ou credenciais pelo Helpper Central;
- qualquer implementação da Fase 5 do Plano Mestre (operação de clientes e projetos) — permanece apenas referência estratégica;
- qualquer coleta ou uso de dado real de cliente para operar o MVP.

## 2. MVP recomendado

Menor conjunto funcional necessário para o Helpper Central operar, consolidando o que já foi definido nos Documentos 1 a 3:

1. receber uma demanda (Documento 1, seção 2, etapa 1);
2. identificar contexto — cliente, projeto ou institucional (Documento 1, seções 2 e 3);
3. consultar fontes pela hierarquia definida (Documento 1, seção 3);
4. gerar plano e submetê-lo a gate (Documento 1, seção 2, etapas 4–6);
5. criar ou orientar a criação da task com paths mutuamente exclusivos (Documento 1, seção 2, etapa 7);
6. produzir o envelope de execução (prompt controlado) para o executor (Documento 2, seção 2);
7. receber e validar as evidências do executor (Documento 2, seção 6);
8. conduzir os gates de revisão, commit, push, PR, merge, verificação pós-merge e encerramento (Documento 1, seção 2, etapas 10–15);
9. manter rastreabilidade total via Git e `changes.jsonl`, sem mecanismo de memória adicional.

**Este MVP não está autorizado por este documento.** Ele descreve o menor escopo tecnicamente coerente com os Documentos 1 a 3; a autorização de qualquer implementação depende de gate humano específico e, no mínimo, dos critérios da seção 3 abaixo.

## 3. Critérios para futura Task 048

A Task 048 (ou task equivalente que venha a suceder a Task 047) só deve ser proposta quando **todos** os critérios abaixo estiverem satisfeitos:

- [ ] Task 047 formalmente encerrada (`AUTORIZADO ENCERRAMENTO`), com os quatro documentos revisados, aprovados e integrados em `main`;
- [ ] Decisão humana explícita sobre a interface do MVP (Documento 3, seção 2), registrada no nível documental adequado (decisão formal, não apenas aprovação de conteúdo);
- [ ] Escopo técnico do MVP aprovado, distinto do escopo apenas documental desta task;
- [ ] `allowed_paths`, `read_only_paths` e `forbidden_paths` da nova task definidos e mutuamente exclusivos antes da criação;
- [ ] Riscos deste documento (seção 4) e os riscos já registrados em `Registro-pendencias-riscos-e-limitacoes-v1.md` aceitos ou tratados formalmente;
- [ ] Modelo de dados necessário, se algum, decidido — reaproveitando `Modelo-dados-Core-Brain-MVP.md` quando aplicável, sem redecidir o que já foi aprovado;
- [ ] Política de segredos aplicável definida, reaproveitando `00_SYSTEM/canonical/SECURITY.md` sem recriação;
- [ ] Ambiente de execução técnica escolhido (se houver componente técnico), consistente com a Estratégia de Ambientes do Plano Mestre (seção 12);
- [ ] Limite de custo ou orçamento definido para qualquer execução automatizada, conforme `Politica-seguranca-supervisao-e-limites-Helpper.md`, seção "Controles de custo";
- [ ] Critérios de segurança aprovados, incluindo revisão do risco `risk-2026-007` (ausência de proteção técnica da branch `main`) se a nova task envolver qualquer automação, CI/CD ou acesso de escrita adicional — condição de reavaliação já registrada em `Registro-pendencias-riscos-e-limitacoes-v1.md`;
- [ ] Backlog P0 desta seção validado por uso real, não apenas planejado;
- [ ] Nenhum início da Fase 5 do Plano Mestre declarado ou implícito no escopo proposto.

## 4. Condições de não abertura

A Task 048 **não deve** ser criada enquanto:

- a Task 047 permanecer em `status: draft` ou `task_state: active` sem encerramento formal;
- qualquer um dos quatro documentos desta etapa não tiver sido revisado e aprovado pelo CEO;
- a decisão de interface (Documento 3) permanecer `decision_state: pending`;
- houver risco crítico não tratado nem aceito formalmente (conforme `Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md`, "Conflito crítico");
- o escopo proposto misturar, mesmo parcialmente, entregáveis da Fase 5 do Plano Mestre (clientes, projetos, CRM);
- não houver orçamento ou limite de custo definido para qualquer execução automatizada prevista.

## 5. Riscos e dependências

| Risco | Categoria | Impacto | Controle proposto | Referência |
|---|---|---|---|---|
| Antecipar a Fase 5 sob o pretexto do Helpper Central | Governança | Alto | Este documento e a Task 047 mantêm `phase_5_started: false`; qualquer proposta futura deve ser avaliada isoladamente | `Plano-Mestre-de-Construcao-Monvi-Brain.md`, Fase 5 |
| Ausência de proteção técnica da branch `main` | Técnico/operacional | Alto (já aceito como risco residual) | Controles compensatórios processuais já em vigor (branch por tarefa, squash merge, sem force push) | `Registro-pendencias-riscos-e-limitacoes-v1.md`, `risk-2026-007` |
| Acoplamento indevido a um único executor | Governança/técnico | Médio | Documento 2 adota `executor controlado`; qualquer task futura deve preservar essa independência | `Contrato-executor-controlado-Helpper-Central.md` |
| Criação prematura de mecanismo de memória | Técnico/financeiro | Médio | Decisão adiada explicitamente (Documento 3, seção 6); depende de Fase 7 do Plano Mestre | `Politica-memoria-e-promocao-de-conhecimento-Helpper.md` |
| Custo não controlado de execução automatizada futura | Financeiro | Médio a alto, se não controlado | Critério explícito de limite de custo na seção 3 deste documento | `Politica-seguranca-supervisao-e-limites-Helpper.md`, "Controles de custo" |
| Dependência de decisão humana não formalizada | Governança | Alto | Toda decisão relevante deve ser registrada no nível documental adequado antes de prosseguir | `Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md` |

## 6. Matriz de rastreabilidade

| Item da Task 047 | Documento responsável | Fonte principal | Critério de aceite |
|---|---|---|---|
| 1. Papel do Helpper Central | Documento 1 (por referência + complemento específico) | `Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md`, `Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md` | Documento 1, seção 7 |
| 2. Fluxo operacional | Documento 1 | Task 046 (gates) + fontes de arquitetura do ecossistema | Documento 1, seção 7 |
| 3. Hierarquia de contexto | Documento 1 (aplicação específica) | `Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md` | Documento 1, seção 7 |
| 4. Isolamento entre clientes | Documento 1 (aplicação específica) | `Politica-seguranca-documental-e-isolamento-Monvi-Brain.md`, `client-isolation.md` | Documento 1, seção 7 |
| 5. Modelo de tasks e gates | Referência direta, sem novo documento | `00_SYSTEM/helpper/TASK-LIFECYCLE.md`, `PROMPT-TEMPLATES.md` | Já institucionalizado pela Task 046 |
| 6. Relação com executores | Documento 2 | `Contrato-contexto-delegacao-reporte-Helpper.md` | Documento 2, seção 7 |
| 7. Memória e fontes | Documento 2 (conceitual) | `Politica-memoria-e-promocao-de-conhecimento-Helpper.md` | Documento 2, seção 7 |
| 8. Tratamento de erros | Documento 1 | `Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md` | Documento 1, seção 7 |
| 9. Interface do MVP | Documento 3 | `Arquitetura-Core-Brain-MVP.md` | Documento 3, seção 7 |
| 10. Arquitetura do MVP | Documento 3 | `Modelo-dados-Core-Brain-MVP.md`, `Contrato-API-Core-Brain-MVP.md` | Documento 3, seção 7 |
| Backlog priorizado e critérios da Task 048 | Documento 4 (este documento) | `Plano-Mestre-de-Construcao-Monvi-Brain.md`, `Registro-pendencias-riscos-e-limitacoes-v1.md` | Este documento, seção 7 |

Confirmação de coerência: nenhum item do escopo original ficou sem documento responsável ou referência explícita; nenhum tema é tratado em mais de um documento novo como conteúdo primário (referências cruzadas são permitidas e esperadas); o Documento 1 define fluxo, o Documento 2 define contrato, o Documento 3 define interface e arquitetura técnica, o Documento 4 define backlog e critérios futuros.

## 7. Critérios de aceite

- [ ] Backlog organizado em P0, P1, P2 e fora de escopo, cada item com objetivo, justificativa, dependências, risco, evidência de conclusão e necessidade de gate.
- [ ] MVP recomendado descrito sem declarar autorização de implementação.
- [ ] Critérios objetivos e verificáveis para a futura Task 048, incluindo o estado explícito da Task 047, da Fase 5 e dos riscos.
- [ ] Condições de não abertura da Task 048 explicitadas.
- [ ] Riscos técnicos, operacionais, financeiros e de governança listados com controle proposto e referência.
- [ ] Matriz de rastreabilidade cobrindo os 10 itens do escopo original da Task 047.
- [ ] Nenhuma criação, autorização ou declaração de início da Task 048 ou da Fase 5.
