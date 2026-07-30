---
id: test-plan-identity-gateway
title: Plano de testes do Identity Gateway da Monvi
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
  - matrix-authentication-authorization-session
  - risk-2026-007
---

# Plano de testes do Identity Gateway da Monvi

## Objetivo

Definir os testes obrigatórios para uma futura implementação técnica do Identity Gateway.

Este plano não executa testes reais e não comprova autenticação ativa.

## Princípios

- negar por padrão;
- testar isolamento antes do contexto;
- não usar credenciais reais em documentação;
- não registrar tokens completos;
- usar dados sintéticos em ambientes de teste;
- separar autenticação, vínculo, autorização, sessão e Helpper;
- registrar evidências sem expor segredos.

## Pré-condições para execução futura

Antes dos testes técnicos deverão existir:

- nova task de implementação aprovada;
- ambiente de teste isolado;
- domínio confirmado;
- contas de teste autorizadas;
- credenciais fora do repositório;
- callbacks configurados;
- mecanismo de sessão;
- logs sanitizados;
- matriz de autorização aprovada;
- responsável por incidentes;
- plano de rollback.

## Casos de autenticação

| ID | Cenário | Resultado esperado |
|---|---|---|
| AUTH-001 | login válido de Victor | autenticação válida, sem ampliar permissões |
| AUTH-002 | login válido de Filipe | autenticação válida, sem ampliar permissões |
| AUTH-003 | token ausente | negar |
| AUTH-004 | token expirado | negar |
| AUTH-005 | assinatura inválida | negar |
| AUTH-006 | emissor inválido | negar |
| AUTH-007 | audiência incorreta | negar |
| AUTH-008 | e-mail não verificado | negar |
| AUTH-009 | domínio não autorizado | negar |
| AUTH-010 | indisponibilidade do provedor | negar com erro seguro |
| AUTH-011 | repetição indevida de token | negar ou limitar conforme política |
| AUTH-012 | claims obrigatórias ausentes | negar |

## Casos de vínculo institucional

| ID | Cenário | Resultado esperado |
|---|---|---|
| LINK-001 | `sub` vinculado a Victor | resolver person-0001 |
| LINK-002 | `sub` vinculado a Filipe | resolver person-0002 |
| LINK-003 | `sub` sem vínculo | negar |
| LINK-004 | dois vínculos para o mesmo `sub` | negar e escalar |
| LINK-005 | e-mail alterado com mesmo `sub` | manter vínculo pelo identificador estável e exigir revisão |
| LINK-006 | conta suspensa | negar |
| LINK-007 | identidade revogada | negar |
| LINK-008 | pessoa em onboarding sem ativação | negar acesso operacional |

## Casos de autorização

| ID | Cenário | Resultado esperado |
|---|---|---|
| AUTHZ-001 | recurso explicitamente permitido | permitir conforme escopo |
| AUTHZ-002 | recurso sem regra | negar |
| AUTHZ-003 | cliente sem permissão | negar antes do contexto |
| AUTHZ-004 | biblioteca pessoal alheia | negar |
| AUTHZ-005 | tentativa de exportação global | negar e alertar |
| AUTHZ-006 | ação crítica sem aprovação | negar |
| AUTHZ-007 | papel expirado | negar |
| AUTHZ-008 | identidade suspensa durante sessão | revogar e negar |

## Casos de Helpper

| ID | Cenário | Resultado esperado |
|---|---|---|
| HELP-001 | Victor solicita próprio Helpper em estado planned | negar ativação |
| HELP-002 | Filipe solicita próprio Helpper em estado planned | negar ativação |
| HELP-003 | Victor solicita Helpper de Filipe | negar e registrar |
| HELP-004 | Filipe solicita Helpper de Victor | negar e registrar |
| HELP-005 | prompt declara outra identidade | ignorar declaração e usar sessão |
| HELP-006 | Helpper tenta exceder permissão do owner | negar |
| HELP-007 | Helpper tenta carregar fonte não autorizada | negar antes do contexto |

## Casos de sessão

| ID | Cenário | Resultado esperado |
|---|---|---|
| SESS-001 | criação de sessão válida | criar identificador único e validade |
| SESS-002 | sessão expirada | negar e exigir nova autenticação |
| SESS-003 | sessão revogada | negar imediatamente |
| SESS-004 | alteração de papel | reavaliar e revogar quando necessário |
| SESS-005 | ação crítica | exigir reautenticação/MFA conforme política |
| SESS-006 | reutilização após logout | negar |
| SESS-007 | falha no armazenamento de sessão | negar por padrão |

## Casos de auditoria e segurança

| ID | Cenário | Resultado esperado |
|---|---|---|
| AUD-001 | login aprovado | evento sanitizado |
| AUD-002 | login rejeitado | categoria registrada sem token |
| AUD-003 | domínio rejeitado | evento de alta severidade |
| AUD-004 | tentativa de personificação | negar e alertar |
| AUD-005 | erro interno | negar e registrar correlação |
| AUD-006 | token presente no log | teste deve falhar |
| AUD-007 | segredo presente no repositório | teste deve falhar |
| AUD-008 | dado pessoal desnecessário no log | teste deve falhar |

## Evidências mínimas futuras

Cada teste deverá registrar:

- `test_id`;
- data e ambiente;
- versão da implementação;
- executor;
- entrada sanitizada;
- resultado esperado;
- resultado observado;
- status;
- evidência;
- incidente relacionado;
- decisão de aprovação.

## Critérios de aprovação técnica futura

A implementação somente poderá ser aprovada quando:

- todos os testes críticos passarem;
- não houver vazamento de token;
- identidade por prompt for ignorada;
- acesso cruzado entre pessoas for bloqueado;
- acesso a cliente sem permissão for bloqueado;
- sessões puderem ser revogadas;
- logs estiverem sanitizados;
- rollback estiver validado;
- revisão humana e de segurança estiver concluída.

## Estado documental

- plano produzido: sim;
- testes técnicos executados: não;
- ambiente criado: não;
- contas de teste criadas: não;
- credenciais utilizadas: não;
- revisão humana: aprovada pelo CEO em 2026-07-30.
