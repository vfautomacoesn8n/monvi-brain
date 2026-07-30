---
id: matrix-authentication-authorization-session
title: Matriz de autenticação, autorização e sessão da Monvi
type: architecture
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-29"
updated_at: "2026-07-29"
reviewed_at: "2026-07-30"
source_task: task-2026-040
classification: internal
version: "1.0.0"
related:
  - architecture-identity-gateway-google-workspace
  - architecture-identity-roles-permissions
  - matrix-access-role-scope-action
  - risk-2026-007
---

# Matriz de autenticação, autorização e sessão da Monvi

## Objetivo

Definir decisões mínimas e resultados esperados para autenticação, vínculo institucional, autorização, seleção de Helpper, sessão e auditoria.

## Regra central

Uma autenticação válida não concede acesso automaticamente.

Toda solicitação deverá atravessar:

1. validação do token;
2. resolução do vínculo institucional;
3. validação do estado da conta;
4. validação do estado da identidade;
5. avaliação de autorização;
6. seleção do Helpper;
7. criação ou validação da sessão;
8. registro de auditoria.

## Matriz principal

| Cenário | Autenticação | Vínculo | Autorização | Helpper | Resultado |
|---|---|---|---|---|---|
| token válido, identidade ativa e escopo permitido | válida | encontrado | concedida | próprio | permitir |
| token válido sem vínculo institucional | válida | ausente | negada | nenhum | negar |
| token válido com conta suspensa | válida | encontrado | negada | nenhum | negar |
| token válido com identidade inativa | válida | encontrado | negada | nenhum | negar |
| domínio não autorizado | rejeitada | não consultado | negada | nenhum | negar |
| e-mail não verificado | rejeitada | não consultado | negada | nenhum | negar |
| token expirado | rejeitada | não consultado | negada | nenhum | negar |
| tentativa de selecionar Helpper de outra pessoa | válida | encontrado | negada | nenhum | negar e registrar |
| tentativa de acessar biblioteca pessoal alheia | válida | encontrado | negada | próprio | negar antes do contexto |
| tentativa de acessar cliente sem permissão | válida | encontrado | negada | próprio | negar antes do contexto |
| sessão revogada | válida | encontrado | negada | nenhum | exigir nova autenticação |
| identidade ambígua | válida | ambíguo | negada | nenhum | negar e escalar |

## Estados de conta

| Estado | Autenticação | Sessão nova | Sessão existente | Resultado |
|---|---|---|---|---|
| pending | não operacional | não criar | revogar | negar |
| active | permitida | criar conforme política | manter conforme validade | avaliar autorização |
| suspended | rejeitada | não criar | revogar | negar |
| revoked | rejeitada | não criar | revogar | negar |
| offboarded | rejeitada | não criar | revogar | negar |

## Estados de identidade

| Estado | Autorização | Seleção de Helpper | Resultado |
|---|---|---|---|
| pending | negada | não selecionar | negar |
| active | avaliar | conforme vínculo | continuar |
| suspended | negada | não selecionar | negar |
| revoked | negada | não selecionar | negar |
| offboarded | negada | não selecionar | negar |

## Estados de Helpper

| Estado | Seleção permitida | Observação |
|---|---|---|
| planned | não | estado atual dos Helppers dos CEOs |
| configured | condicionada | depende de aprovação específica |
| active | sim, conforme autorização | não existe atualmente |
| suspended | não | sessões devem ser bloqueadas |
| revoked | não | vínculo não pode ser reutilizado |

## Escopos iniciais

| Escopo | Victor | Filipe | Regra |
|---|---|---|---|
| próprio perfil documental | futuro, condicionado | futuro, condicionado | somente após ativação técnica |
| próprio Helpper | futuro, condicionado | futuro, condicionado | apenas Helpper vinculado |
| própria biblioteca pessoal | não ativado | não ativado | leitura automática proibida nesta fase |
| biblioteca pessoal do outro | negado | negado | proibição permanente salvo decisão institucional extraordinária |
| bibliotecas gerais | não ativado | não ativado | dependerá de fonte e autorização |
| dados de clientes | negado | negado | fora da Task 040 |
| ações executoras | negado | negado | fora da Task 040 |
| administração do gateway | indefinido | indefinido | decisão pendente |

## Sessão mínima

| Campo | Obrigatório | Regra |
|---|---|---|
| session_id | sim | único e não derivado do e-mail |
| actor_id | sim | identidade efetiva |
| person_id | sim | vínculo institucional |
| identity_id | sim | identidade resolvida |
| account_id | sim | conta autenticada |
| created_at | sim | UTC |
| expires_at | sim | validade definida pela política |
| last_activity_at | sim | atualização controlada |
| state | sim | active, expired, revoked ou closed |
| origin | sim | canal e aplicação |
| revoked_at | condicional | obrigatório quando revogada |
| revocation_reason | condicional | obrigatório quando revogada |

## Reautenticação

Deverá ser exigida quando:

- a sessão expirar;
- houver mudança de papel;
- houver ação crítica;
- houver sinal de risco;
- houver alteração de credencial;
- houver revogação administrativa;
- ocorrer suspeita de comprometimento;
- a política exigir MFA recente.

## Matriz de auditoria

| Evento | Severidade mínima | Resultado esperado |
|---|---|---|
| tentativa de login | informativa | registrar sem token |
| login aprovado | informativa | vincular sessão e identidade |
| login rejeitado | atenção | registrar categoria |
| domínio rejeitado | alta | negar e alertar |
| vínculo ausente | média | negar e encaminhar suporte |
| autorização negada | média | negar antes do contexto |
| personificação | alta | negar e alertar |
| Helpper incompatível | alta | negar e registrar |
| sessão revogada | média | encerrar imediatamente |
| erro interno | alta | negar por padrão |

## Decisões pendentes

- domínio corporativo;
- padrão de e-mail;
- contas individuais;
- owner administrativo;
- política de MFA;
- duração de sessão;
- armazenamento de sessão;
- stack;
- ambiente;
- callbacks;
- responsável por incidentes;
- regras administrativas.

## Estado documental

- matriz criada: sim;
- autorização real: não;
- sessão real: não;
- conta ativa: não;
- Helpper ativo: não;
- acesso a clientes: não;
- revisão humana: aprovada pelo CEO em 2026-07-30.
