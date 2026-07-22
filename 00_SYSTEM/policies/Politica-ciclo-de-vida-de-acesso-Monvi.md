---
id: policy-access-lifecycle
title: Política de ciclo de vida de acesso da Monvi
type: policy
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: "2026-07-22"
source_task: task-2026-029
classification: internal
---

# Política de ciclo de vida de acesso da Monvi

## Objetivo

Controlar entrada, mudança, suspensão e saída de pessoas e agentes.

## Onboarding

Antes da ativação:

- identidade criada;
- função registrada;
- gestor definido;
- escopo aprovado;
- clientes e projetos atribuídos;
- ferramentas aprovadas;
- repositórios aprovados;
- Helpper individual configurado;
- MFA obrigatório quando aplicável;
- validade definida;
- teste concluído;
- log registrado.

## Mudança de função

Toda mudança deve:

- revisar permissões atuais;
- remover privilégios incompatíveis;
- adicionar somente os necessários;
- revisar clientes e projetos;
- revisar memória acessível;
- revisar skills e ferramentas;
- revisar Helpper individual;
- registrar aprovação;
- testar;
- gerar log.

A remoção de acesso antigo deve ocorrer antes ou junto da concessão do novo.

## Suspensão

Aplicável em:

- incidente;
- suspeita de comprometimento;
- afastamento;
- expiração;
- quebra de política;
- início de desligamento.

A suspensão deve:

- bloquear login;
- revogar sessões;
- suspender Helpper;
- bloquear novas execuções;
- preservar evidências;
- registrar responsável.

## Offboarding

O offboarding deve:

- suspender identidade;
- revogar sessões;
- remover acessos;
- desabilitar Helpper;
- revogar ferramentas e repositórios;
- transferir projetos;
- preservar histórico;
- bloquear memória individual;
- revisar dispositivos e dados locais;
- registrar responsável pela transição;
- gerar log;
- confirmar encerramento.

## Retenção

A pasta e o histórico não devem ser apagados imediatamente.

Ciclo:

```text
active
→ suspended
→ offboarding
→ archived
```

A exclusão definitiva depende de:

- política de retenção;
- obrigação legal;
- classificação;
- cliente;
- evidência;
- aprovação humana.

## Revisões periódicas

- founders e executivos: trimestral;
- acessos críticos: mensal;
- funcionários: trimestral;
- contratados e parceiros: mensal;
- contas de serviço: mensal;
- acessos temporários: no vencimento.

## Exceções

Toda exceção exige:

- justificativa;
- owner;
- aprovador;
- escopo;
- início;
- fim;
- risco;
- compensação;
- log;
- revisão posterior.

## Sessões e reautenticação

Toda sessão deve possuir:

- identidade;
- início;
- expiração;
- dispositivo;
- método de autenticação;
- status de MFA;
- escopo;
- revogação;
- logs.

Ações críticas exigem reautenticação recente.

## Comportamento suspeito

Podem gerar bloqueio ou alerta:

- alegação de identidade incompatível;
- repetidas tentativas negadas;
- exportação em volume;
- acesso fora do horário ou local esperado;
- acesso a múltiplos clientes sem motivo;
- tentativa de remover logs;
- uso anômalo de ferramenta;
- tentativa de alterar o próprio papel;
- tentativa de acessar secrets.

## Resposta a incidente de identidade

1. suspender sessão;
2. preservar evidências;
3. notificar responsável;
4. revisar logs;
5. revogar credenciais quando necessário;
6. redefinir autenticação;
7. revisar permissões;
8. registrar decisão;
9. restaurar acesso somente após validação.

## Proteção de dados e transporte

- exportação precisa de permissão própria;
- leitura não concede exportação;
- edição não concede compartilhamento;
- destino externo exige aprovação;
- informação de cliente não pode ser movida entre clientes;
- dado restrito exige tratamento específico;
- integração externa deve ser autorizada;
- toda transferência relevante deve ser registrada.

## Limite da documentação

Esta política define requisitos.

Ela não implementa:

- login;
- MFA;
- sessões;
- bloqueios;
- alertas;
- logs imutáveis;
- DLP;
- RBAC;
- ABAC;
- provedor de identidade.

## Aprovação humana

- aprovado por: CEO da Monvi;
- data: 2026-07-22;
- decisão: aprovados os 34 pontos da task 029;
- escopo: identidade, papéis, permissões, acesso, autenticação, autorização e ciclo de vida;
- natureza: modelo conceitual e operacional;
- implementação técnica: não comprovada;
- contas, sessões, MFA, RBAC, ABAC, DLP e integrações: não implementados por esta task;
- evolução: futura implementação no Monvi Core Brain.
