---
id: policy-access-lifecycle
title: Política de ciclo de vida de acesso da Monvi
type: policy
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
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
