---
id: architecture-identity-gateway-google-workspace
title: Contrato do Identity Gateway com Google Workspace
type: architecture
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-29"
updated_at: "2026-07-29"
reviewed_at: null
source_task: task-2026-040
classification: internal
version: "0.1.0"
related:
  - architecture-monvi-ecosystem
  - architecture-identity-roles-permissions
  - matrix-access-role-scope-action
  - registry-identities-and-profiles-v1
  - risk-2026-007
---

# Contrato do Identity Gateway com Google Workspace

## Objetivo

Definir o contrato documental entre Google Workspace, o futuro Monvi Core Brain, a camada de autorização e os Helppers individuais.

Este documento não implementa autenticação, não cria contas, não persiste sessões e não ativa integrações.

## Princípios

1. autenticação precede autorização;
2. identidade efetiva vem da sessão autenticada;
3. o texto do prompt não redefine identidade;
4. o e-mail não é o identificador externo imutável;
5. o `sub` do provedor é o identificador externo estável;
6. ausência de vínculo explícito resulta em negação;
7. o Helpper nunca excede as permissões do owner;
8. tokens e credenciais não entram no Monvi Brain;
9. contexto é isolado antes de ser carregado;
10. falhas devem negar acesso por padrão.

## Fronteiras do contrato

### Google Workspace

Responsável por autenticar a conta e emitir tokens conforme o provedor configurado.

### Identity Gateway

Responsável por validar o token, resolver o vínculo institucional e produzir uma identidade efetiva.

### Camada de autorização

Responsável por avaliar recurso, ação, escopo, estado, validade, bloqueios e aprovações.

### Helpper

Recebe apenas o contexto mínimo autorizado e não decide sozinho quem é o usuário.

## Entrada esperada

A futura implementação deverá receber, no mínimo:

- token emitido pelo provedor;
- identificador da aplicação cliente;
- origem da solicitação;
- identificador da requisição;
- dados técnicos mínimos para auditoria;
- recurso e ação solicitados.

O token não deverá ser enviado ao modelo de IA.

## Claims mínimas

O gateway deverá validar, quando aplicável:

- `iss`;
- `aud`;
- `sub`;
- `exp`;
- `iat`;
- `email`;
- `email_verified`;
- `hd`.

## Regras de validação

A autenticação deverá ser rejeitada quando:

- o token estiver ausente;
- a assinatura for inválida;
- o emissor não for aceito;
- a audiência estiver incorreta;
- o token estiver expirado;
- `email_verified` não for verdadeiro;
- o domínio não estiver autorizado;
- o `sub` não possuir vínculo institucional;
- houver ambiguidade de identidade;
- a conta ou identidade estiver suspensa, revogada ou inativa.

## Vínculo institucional mínimo

O vínculo deverá conter:

- `account_id`;
- `provider`;
- `provider_subject`;
- `identity_id`;
- `person_id`;
- `email`;
- `email_verified`;
- `hosted_domain`;
- `account_state`;
- `identity_state`;
- `approved_by`;
- `created_at`;
- `updated_at`;
- `last_authenticated_at`;
- `revoked_at`.

## Saída do Identity Gateway

A saída autorizada deverá conter apenas:

- `request_id`;
- `session_id`;
- `actor_id`;
- `person_id`;
- `identity_id`;
- `account_id`;
- `helpper_id`;
- papéis autorizados;
- escopos permitidos;
- classificação máxima;
- ações permitidas;
- ações sujeitas a aprovação;
- validade da sessão;
- estado da autorização.

## Seleção do Helpper

O Helpper será selecionado somente quando:

- a identidade estiver autenticada;
- o vínculo institucional estiver válido;
- a autorização estiver concedida;
- o Helpper pertencer ao `person_id`;
- o Helpper estiver em estado permitido;
- o recurso solicitado estiver no escopo.

A escolha manual de outro Helpper por texto deverá ser ignorada e registrada como tentativa indevida.

## Sessão

A futura sessão deverá possuir:

- `session_id`;
- identidade vinculada;
- origem;
- criação;
- expiração;
- última atividade;
- estado;
- mecanismo de revogação;
- motivo de encerramento;
- exigência de reautenticação quando aplicável.

## Auditoria

Deverão ser registrados, no mínimo:

- tentativa de autenticação;
- autenticação aprovada;
- autenticação rejeitada;
- vínculo encontrado ou ausente;
- autorização concedida ou negada;
- Helpper selecionado;
- sessão criada ou revogada;
- domínio rejeitado;
- tentativa de personificação;
- erro interno.

Logs não deverão conter tokens completos, segredos ou dados pessoais desnecessários.

## Tratamento de erros

O contrato deverá padronizar categorias como:

- `AUTH_TOKEN_MISSING`;
- `AUTH_TOKEN_INVALID`;
- `AUTH_TOKEN_EXPIRED`;
- `AUTH_ISSUER_REJECTED`;
- `AUTH_AUDIENCE_REJECTED`;
- `AUTH_EMAIL_UNVERIFIED`;
- `AUTH_DOMAIN_REJECTED`;
- `IDENTITY_LINK_NOT_FOUND`;
- `IDENTITY_AMBIGUOUS`;
- `ACCOUNT_INACTIVE`;
- `IDENTITY_INACTIVE`;
- `AUTHORIZATION_DENIED`;
- `HELPPER_MISMATCH`;
- `SESSION_REVOKED`;
- `GATEWAY_INTERNAL_ERROR`.

As respostas externas não deverão expor detalhes internos sensíveis.

## Segredos e dados proibidos

Não deverão ser armazenados no Monvi Brain:

- tokens;
- refresh tokens;
- client secrets;
- códigos de recuperação;
- cookies de sessão;
- chaves privadas;
- credenciais administrativas.

## Condições para implementação futura

A implementação técnica permanece bloqueada até que existam:

- domínio corporativo confirmado;
- contas individuais;
- owner administrativo;
- MFA definido;
- stack e ambiente aprovados;
- armazenamento de sessão definido;
- callbacks autorizados;
- matriz mínima de autorização;
- plano de incidentes;
- nova task técnica aprovada.

## Estado documental

- contrato criado: sim;
- autenticação real: não;
- conta criada: não;
- sessão persistida: não;
- Helpper ativado: não;
- acesso a cliente concedido: não;
- memória persistente ativada: não;
- integração externa ativada: não;
- revisão humana: pendente.
