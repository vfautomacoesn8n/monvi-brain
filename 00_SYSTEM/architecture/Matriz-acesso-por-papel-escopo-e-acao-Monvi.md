---
id: matrix-access-role-scope-action
title: Matriz de acesso por papel, escopo e ação da Monvi
type: architecture
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
