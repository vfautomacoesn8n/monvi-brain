---
id: matrix-access-role-scope-action
title: Matriz de acesso por papel, escopo e ação da Monvi
type: architecture
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

# Matriz de acesso por papel, escopo e ação da Monvi

## Legenda

- P: permitido;
- A: permitido com aprovação;
- E: permitido por exceção;
- N: negado.

## Matriz principal

| Papel | Ler | Criar | Editar | Aprovar | Publicar | Excluir | Executar | Compartilhar | Gerir usuários | Gerir papéis | Ver logs |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| founder-ceo | P | P | P | P | A | A | A | A | P | P | P |
| executive | P | P | P | A | A | A | A | A | A | E | P |
| manager | P | P | P | A | A | A | A | A | E | N | P |
| employee | P | P | P | N | A | N | A | A | N | N | E |
| contractor | P | P | A | N | N | N | A | A | N | N | N |
| partner | P | A | A | N | N | N | A | A | N | N | N |
| client | P | A | N | A | N | N | N | A | N | N | N |
| auditor | P | N | N | N | N | N | N | N | N | N | P |
| agent | P | A | A | N | N | N | A | N | N | N | A |
| service-account | A | A | A | N | N | N | A | N | N | N | A |

## Escopos

| Escopo | Exemplo |
|---|---|
| organização | toda a Monvi |
| departamento | marketing, desenvolvimento |
| cliente | cliente específico |
| projeto | projeto específico |
| ambiente | desenvolvimento, homologação, produção |
| ferramenta | GitHub, Vercel, n8n |
| repositório | repositório específico |
| classificação | interna, confidencial, restrita |
| tempo | período de validade |

## Regras críticas

- exclusão destrutiva exige confirmação;
- publicação externa exige aprovação;
- produção exige owner, rollback e monitoramento;
- acesso a secrets ocorre por referência controlada;
- founders possuem maior autoridade, não privilégio técnico ilimitado;
- acesso entre clientes é negado por padrão;
- agente não pode gerir usuários ou papéis;
- conta de serviço não aprova;
- auditor lê, mas não altera.

## Dupla aprovação recomendada

- remoção de founder;
- alteração de papel founder-ceo;
- exclusão em massa;
- revogação de logs;
- mudança de política de segurança;
- acesso excepcional a dados sensíveis;
- compartilhamento externo de informação restrita.

## Matriz de controles por cenário real

| Cenário | Identidade | Ação | Resultado |
|---|---|---|---|
| funcionário diz "sou Victor" | sessão do funcionário | personificação | negar e registrar |
| funcionário tenta outro cliente | sessão do funcionário | leitura fora do escopo | negar antes de carregar contexto |
| funcionário tenta excluir canônico | sessão do funcionário | delete | negar |
| funcionário tenta exportar tudo | sessão do funcionário | export-global | negar e alertar |
| agente tenta ampliar acesso | identidade do agente | escalada | negar |
| founder altera papel crítico | sessão do founder | mudança crítica | exigir MFA recente e aprovação |
| conta comprometida tenta exclusão em massa | sessão válida | ação anômala | bloquear, reautenticar e alertar |

## Campos de auditoria obrigatórios

- actor_id;
- actor_role;
- session_id;
- request_id;
- executor_id;
- approver_id;
- on_behalf_of;
- active_client;
- active_project;
- action;
- resource;
- result;
- reason;
- timestamp;
- mfa_verified;
- source_device;
- destination;
- data_classification.

## Controles para exclusão

```text
active
→ deletion-requested
→ approved-for-deletion
→ quarantined
→ permanently-deleted
```

Regras:

- sem exclusão física imediata por padrão;
- prazo de recuperação;
- aprovação proporcional ao risco;
- evidência;
- retenção;
- log.

## Controles para exportação

Toda exportação deve validar:

- escopo;
- volume;
- classificação;
- destino;
- finalidade;
- validade;
- aprovação;
- marcação;
- expiração;
- log.

Destino pessoal ou não autorizado deve ser negado.

## Aprovação humana

- aprovado por: CEO da Monvi;
- data: 2026-07-22;
- decisão: aprovados os 34 pontos da task 029;
- escopo: identidade, papéis, permissões, acesso, autenticação, autorização e ciclo de vida;
- natureza: modelo conceitual e operacional;
- implementação técnica: não comprovada;
- contas, sessões, MFA, RBAC, ABAC, DLP e integrações: não implementados por esta task;
- evolução: futura implementação no Monvi Core Brain.
