---
type: policy
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
source_task: task-2026-031
classification: internal
---# Política de aprovação e separação de funções de agentes

## Aprovação obrigatória

Exigir aprovação:

- antes de produção;
- antes de publicação;
- antes de exportação;
- antes de exclusão;
- antes de envio externo;
- antes de alterar permissão;
- antes de exceder custo;
- antes de usar dado sensível;
- antes de executar ação crítica.

## Separação de funções

- executor não aprova a própria ação crítica;
- owner não substitui aprovador quando houver conflito;
- aprovação possui escopo e validade;
- risco crítico exige dupla aprovação;
- aprovação crítica exige reautenticação;
- aprovação expirada não pode ser reutilizada.

## Estados de aprovação

- not-required;
- pending;
- approved;
- rejected;
- expired;
- revoked.

## Validade e revogação de aprovação

Toda aprovação deve registrar:

- aprovador;
- escopo;
- recurso;
- cliente;
- projeto;
- ambiente;
- ação;
- limite de custo;
- validade;
- condição de revogação;
- evidência.

Aprovação perde validade quando houver:

- mudança de versão;
- mudança de ambiente;
- mudança de escopo;
- mudança de cliente;
- mudança material de custo;
- incidente;
- revogação humana.
