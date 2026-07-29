---
id: task-2026-040
title: Autenticação Google Workspace e Identity Gateway
type: task
status: review
task_state: active
owner: ceo-monvi
agent: helpper
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
created_at: "2026-07-29"
updated_at: "2026-07-29"
reviewed_at: null
version: "0.1.0"
allowed_paths:
  - 00_SYSTEM/audits/Execucao-task-2026-040-autenticacao-google-workspace-identity-gateway.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/registries/Registro-identidades-e-perfis-v1.md
  - 00_SYSTEM/registries/Registro-pendencias-riscos-e-limitacoes-v1.md
  - 00_SYSTEM/tasks/review/TASK-2026-040-autenticacao-google-workspace-identity-gateway.md
  - 00_SYSTEM/tasks/done/TASK-2026-040-autenticacao-google-workspace-identity-gateway.md
  - 03_OPERATIONS/pessoas/onboarding/person-0001/
  - 03_OPERATIONS/pessoas/onboarding/person-0002/
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/schemas/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/tasks/done/
  - 01_RAW/
  - 02_WIKI/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 01_RAW/
  - 05_SHARED/
tags:
  - identidade
  - autenticacao
  - autorizacao
  - google-workspace
  - identity-gateway
  - helpper-individual
  - seguranca
acceptance_criteria:
  - Estado documental das identidades reconciliado
  - Domínio corporativo e padrão de e-mail confirmados antes do piloto técnico
  - Conta Google Workspace individual definida para cada participante
  - Identificador estável do provedor vinculado ao person_id
  - Fluxo de autenticação separado do fluxo de autorização
  - Identity Gateway validando token no backend
  - email_verified obrigatório
  - hosted domain validado quando aplicável
  - Google subject utilizado como identificador externo estável
  - E-mail textual não utilizado como única prova de identidade
  - Sessões com validade e mecanismo de revogação definidos
  - Seleção do Helpper subordinada à identidade autenticada
  - Helpper impedido de exceder permissões do owner
  - Contexto mínimo enviado ao modelo de IA
  - Nenhuma credencial ou token persistido no Monvi Brain
  - Nenhum acesso a cliente concedido
  - Nenhuma memória persistente ou indexação ativada
  - Nenhuma ferramenta executora liberada
  - Eventos de autenticação e autorização auditáveis
  - Fluxos de erro, bloqueio e revogação documentados
  - Risk-2026-007 reavaliado antes da ativação técnica
  - Revisão humana concluída antes da aprovação
blocked_reason: null
---

# Task 040 — autenticação Google Workspace e Identity Gateway

## Contexto

As Tasks 038 e 039 aprovaram o modelo institucional de identidade, os perfis documentais dos CEOs, os Helppers individuais planejados e as bibliotecas pessoais documentais.

A Task 039 não criou:

- contas Google Workspace;
- e-mails corporativos;
- sessões;
- credenciais;
- autorização técnica;
- Helpper ativo;
- memória técnica;
- integrações reais.

Os perfis permanecem em onboarding, as identidades corporativas permanecem pending e os Helppers permanecem planned.

## Problema

O Monvi Brain não deve inferir a identidade de uma pessoa pelo texto da conversa, pelo nome informado no prompt ou apenas pelo endereço de e-mail enviado pelo cliente.

Sem autenticação e vínculo técnico confiável entre conta e identidade institucional, o sistema poderá:

- selecionar o Helpper incorreto;
- carregar contexto de outra pessoa;
- conceder acesso fora do escopo;
- misturar bibliotecas pessoais;
- perder autoria e rastreabilidade;
- permitir falsificação de identidade;
- dificultar suspensão e revogação.

## Objetivo

Projetar e implementar de forma controlada um Identity Gateway capaz de autenticar usuários por meio do Google Workspace, vincular a conta autenticada ao `person_id` institucional e produzir um contexto mínimo e confiável para autorização e seleção do Helpper individual.

## Princípio arquitetural

O fluxo obrigatório será:

1. o usuário autentica no Google Workspace;
2. o backend recebe e valida o token;
3. o backend valida emissor, audiência, assinatura e expiração;
4. o backend exige `email_verified`;
5. o backend valida o domínio corporativo quando aplicável;
6. o backend utiliza o identificador estável `sub` do Google;
7. o Identity Gateway localiza a identidade institucional vinculada;
8. a camada de autorização avalia estado, perfil, recurso e ação;
9. somente depois é selecionado o Helpper correspondente;
10. apenas o contexto mínimo autorizado é enviado ao modelo de IA.

## Separação obrigatória

### Autenticação

Confirma quem controla a conta apresentada pelo provedor.

### Identificação institucional

Vincula a conta autenticada a:

- `account_id`;
- `identity_id`;
- `person_id`;
- provedor;
- identificador externo estável.

### Autorização

Determina quais recursos, fontes, ações, clientes e projetos a identidade poderá acessar.

### Seleção do Helpper

O Helpper será selecionado somente após autenticação e autorização válidas.

O nome ou e-mail informado no prompt não poderá substituir esse fluxo.

## Escopo da fase 1 — preparação obrigatória

A primeira fase deverá:

- reconciliar o estado interno dos registros aprovados pela Task 039;
- confirmar domínio corporativo;
- confirmar padrão de e-mail;
- definir contas individuais de Victor e Filipe;
- definir identificadores institucionais de conta e identidade;
- definir o contrato do Identity Gateway;
- definir claims obrigatórias;
- definir modelo de sessão;
- definir regras de revogação;
- definir eventos de auditoria;
- definir respostas de erro;
- definir matriz inicial de autorização;
- reavaliar o `risk-2026-007`;
- produzir plano de teste.

A fase 1 não autoriza login real.

## Escopo da fase 2 — piloto técnico condicionado

O piloto técnico somente poderá começar após aprovação explícita da fase 1 e confirmação de que as contas Google Workspace existem.

O piloto deverá ser restrito a Victor e Filipe.

A fase 2 poderá implementar:

- login com Google;
- validação de token no backend;
- vínculo entre `sub`, conta, identidade e pessoa;
- criação e revogação de sessão;
- autorização básica;
- seleção do Helpper correto;
- auditoria técnica mínima;
- testes de segregação.

## Claims mínimas esperadas

O gateway deverá validar, quando aplicável:

- `iss`;
- `aud`;
- `sub`;
- `exp`;
- `iat`;
- `email`;
- `email_verified`;
- `hd`.

O campo `sub` deverá ser tratado como identificador externo estável.

O e-mail poderá ser usado para apresentação, comunicação e verificação complementar, mas não como único identificador imutável da conta.

## Modelo mínimo de vínculo

O vínculo técnico deverá conter, no mínimo:

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
- `created_at`;
- `updated_at`;
- `last_authenticated_at`;
- `revoked_at`;
- `approved_by`.

Nenhum token, segredo, código de recuperação ou credencial deverá ser armazenado no Monvi Brain.

## Regras de autorização

A autenticação bem-sucedida não concede automaticamente acesso.

A autorização deverá considerar:

- identidade ativa;
- conta ativa;
- vínculo institucional válido;
- perfil de acesso;
- recurso solicitado;
- ação solicitada;
- cliente ou projeto;
- validade;
- bloqueios;
- necessidade de aprovação humana.

A ausência de regra explícita deverá resultar em negação.

## Regras do Helpper

O Identity Gateway não ativa automaticamente o Helpper.

A seleção do Helpper deverá:

- ocorrer após autenticação;
- respeitar o `person_id`;
- verificar o estado do Helpper;
- impedir troca manual de identidade pelo prompt;
- impedir acesso ao Helpper de outra pessoa;
- impedir acesso cruzado entre bibliotecas pessoais;
- carregar somente fontes autorizadas;
- registrar a identidade responsável pela sessão.

## Contexto mínimo para IA

O modelo de IA deverá receber somente os campos necessários, como:

- identificador interno da sessão;
- `person_id`;
- `helpper_id`;
- papéis autorizados;
- escopos permitidos;
- contexto ativo;
- classificação máxima permitida;
- ações permitidas;
- ações que exigem aprovação.

O token original do Google e dados desnecessários do perfil não deverão ser enviados ao modelo.

## Sessões

As sessões deverão possuir:

- identificador único;
- identidade vinculada;
- horário de criação;
- expiração;
- última atividade;
- origem;
- estado;
- mecanismo de revogação;
- motivo de encerramento;
- exigência de reautenticação quando aplicável.

## Eventos auditáveis

Deverão ser registrados, no mínimo:

- tentativa de autenticação;
- autenticação bem-sucedida;
- autenticação rejeitada;
- vínculo de conta encontrado ou ausente;
- autorização concedida;
- autorização negada;
- Helpper selecionado;
- sessão criada;
- sessão revogada;
- identidade suspensa;
- falha de validação de domínio;
- tentativa de troca indevida de identidade;
- erro interno do gateway.

Logs não deverão registrar tokens completos, credenciais ou conteúdo pessoal desnecessário.

## Falhas seguras

O sistema deverá negar acesso quando:

- token estiver ausente;
- assinatura for inválida;
- token estiver expirado;
- audiência estiver incorreta;
- emissor não for aceito;
- e-mail não estiver verificado;
- domínio não for permitido;
- `sub` não possuir vínculo institucional;
- conta estiver suspensa ou revogada;
- identidade não estiver ativa;
- Helpper solicitado não pertencer à pessoa autenticada;
- escopo solicitado não estiver autorizado;
- ocorrer ambiguidade de identidade.

## Fora de escopo

Esta task não autoriza:

- acesso a dados de clientes;
- ativação de bibliotecas pessoais para leitura automática;
- memória persistente;
- embeddings;
- banco vetorial;
- indexação automática;
- promoção automática de conhecimento;
- WhatsApp;
- ferramentas executoras;
- n8n;
- ações administrativas;
- uso de contas compartilhadas;
- armazenamento de credenciais no repositório;
- criação automática de usuários por primeiro login;
- confiança em identidade declarada no prompt.

## Dependências

Antes do piloto técnico, deverão estar definidos:

- domínio Google Workspace da Monvi;
- padrão de e-mail corporativo;
- conta individual de Victor;
- conta individual de Filipe;
- owner administrativo do Workspace;
- política de MFA;
- ambiente técnico do gateway;
- armazenamento de sessão;
- mecanismo de revogação;
- URLs de callback autorizadas;
- matriz inicial de acesso;
- responsável por suporte e incidentes.

## Riscos principais

### Vínculo incorreto de identidade

Uma conta vinculada ao `person_id` incorreto poderá expor contexto pessoal ou institucional indevido.

### Confiança excessiva no e-mail

O uso do e-mail como identificador principal poderá causar falhas quando houver alteração de endereço, alias ou reutilização indevida.

### Autenticação confundida com autorização

O login válido não significa que a pessoa poderá acessar qualquer recurso.

### Vazamento de token

Tokens enviados ao modelo, gravados em logs ou persistidos no repositório aumentam o risco de comprometimento.

### Sessões não revogáveis

Sessões sem revogação dificultam resposta a incidentes, afastamento ou offboarding.

### Ativação prematura dos Helppers

Selecionar ou ativar Helppers antes da autorização técnica poderá violar os limites aprovados nas Tasks 038 e 039.

## Entregáveis esperados

- task formal;
- relatório de execução;
- contrato do Identity Gateway;
- modelo de vínculo entre conta e identidade;
- matriz inicial de autenticação e autorização;
- fluxo de sessão e revogação;
- catálogo de eventos de auditoria;
- modelo de erros;
- plano de testes;
- atualização do registro de identidades;
- atualização do registro de riscos;
- evento em `changes.jsonl`;
- evidências da revisão humana.

## Plano de testes mínimo

O plano deverá incluir:

- login válido de Victor;
- login válido de Filipe;
- token expirado;
- assinatura inválida;
- audiência incorreta;
- domínio não autorizado;
- e-mail não verificado;
- conta sem vínculo;
- identidade suspensa;
- tentativa de selecionar o Helpper do outro CEO;
- tentativa de acessar biblioteca pessoal alheia;
- tentativa de acessar cliente sem permissão;
- revogação de sessão;
- repetição de token;
- indisponibilidade do provedor;
- falha interna do gateway.

## Condição de bloqueio

A fase técnica deverá permanecer bloqueada enquanto não existirem:

- domínio corporativo confirmado;
- contas Google Workspace individuais;
- e-mails corporativos definidos;
- vínculo aprovado entre conta e pessoa;
- matriz mínima de autorização;
- ambiente técnico aprovado;
- decisão sobre sessão e revogação.

## Critério de encerramento

A Task 040 somente poderá ser considerada concluída após:

1. fase documental aprovada;
2. dependências obrigatórias resolvidas ou formalmente bloqueadas;
3. implementação técnica limitada ao escopo aprovado;
4. testes de autenticação e segregação executados;
5. evidências registradas;
6. revisão de segurança concluída;
7. aprovação humana final;
8. nenhum acesso a cliente ou memória persistente ativado indevidamente.
