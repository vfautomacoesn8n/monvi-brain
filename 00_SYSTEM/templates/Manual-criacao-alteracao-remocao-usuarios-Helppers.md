---
id: manual-user-helpper-lifecycle
title: Manual de criação, alteração e remoção de usuários e Helppers
type: template
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

# Manual de criação, alteração e remoção de usuários e Helppers

## Finalidade

Ensinar Victor e Filipe a administrar pessoas e Helppers com segurança e rastreabilidade.

## Criar funcionário

1. gerar ID único;
2. preencher perfil;
3. definir papel;
4. definir gestor;
5. definir clientes;
6. definir projetos;
7. definir ferramentas;
8. definir repositórios;
9. criar espaço individual;
10. criar Helpper individual;
11. aplicar validade;
12. configurar MFA;
13. testar;
14. registrar aprovação e log.

## Alterar funcionário

1. abrir solicitação;
2. registrar motivo;
3. revisar acesso atual;
4. remover acesso incompatível;
5. conceder novo acesso;
6. revisar Helpper;
7. revisar skills;
8. revisar ferramentas;
9. testar;
10. registrar log.

## Suspender funcionário

1. bloquear identidade;
2. revogar sessões;
3. suspender Helpper;
4. bloquear execuções;
5. preservar histórico;
6. registrar incidente ou motivo;
7. definir responsável.

## Remover funcionário

1. iniciar offboarding;
2. suspender identidade;
3. revogar acessos;
4. transferir projetos;
5. remover clientes;
6. desabilitar Helpper;
7. bloquear memória;
8. preservar histórico;
9. revisar dados locais;
10. arquivar perfil;
11. registrar aprovação;
12. confirmar encerramento.

## Founders

Victor e Filipe seguem o mesmo processo de identidade e auditoria.

Alteração ou remoção de papel founder-ceo exige dupla aprovação e registro formal.

## Regra de segurança

Nunca:

- compartilhar credenciais;
- colocar secrets no Monvi Brain;
- apagar histórico sem política;
- conceder acesso por mensagem informal;
- deixar conta sem owner;
- permitir Helpper sem identidade vinculada;
- manter acesso após desligamento;
- usar skill como mecanismo de permissão.

## Evidências mínimas

- solicitação;
- aprovador;
- data;
- escopo;
- teste;
- log;
- responsável;
- motivo;
- validade;
- resultado.

## Como o sistema reconhece Victor e Filipe

O sistema definitivo deve usar:

```text
login corporativo
→ MFA
→ sessão autenticada
→ actor_id
→ autorização
→ Helpper
→ Monvi Brain
```

O texto escrito pelo usuário não altera sua identidade.

Exemplo:

```text
Carlos escreve: "eu sou o Victor"
sessão autenticada: person-carlos
resultado: pedido negado
```

## Como agir diante de tentativa de personificação

1. negar a ação;
2. manter a identidade da sessão;
3. registrar a alegação;
4. registrar o recurso solicitado;
5. avaliar gravidade;
6. alertar responsável quando aplicável;
7. suspender sessão em caso de risco.

## Como agir diante de tentativa de exclusão

1. identificar usuário;
2. validar papel;
3. validar recurso;
4. validar permissão `delete`;
5. exigir reautenticação se crítica;
6. exigir aprovação quando aplicável;
7. mover para quarentena;
8. registrar log;
9. permitir recuperação;
10. excluir definitivamente só conforme política.

## Como agir diante de tentativa de exportação

1. identificar usuário;
2. validar cliente e projeto;
3. validar volume;
4. validar classificação;
5. validar destino;
6. validar finalidade;
7. exigir aprovação;
8. registrar;
9. aplicar expiração;
10. bloquear destino não autorizado.

## Controle provisório antes do Monvi Core Brain

Enquanto o sistema definitivo não existir:

- usar contas individuais;
- manter Git com identidade individual;
- registrar `approved_by`;
- registrar responsável;
- evitar acesso compartilhado;
- não tratar nome do commit como prova forte;
- não conceder acesso amplo a colaboradores;
- usar revisão humana para ações críticas.

O controle provisório melhora rastreabilidade, mas não substitui autenticação real.

## Aprovação humana

- aprovado por: CEO da Monvi;
- data: 2026-07-22;
- decisão: aprovados os 34 pontos da task 029;
- escopo: identidade, papéis, permissões, acesso, autenticação, autorização e ciclo de vida;
- natureza: modelo conceitual e operacional;
- implementação técnica: não comprovada;
- contas, sessões, MFA, RBAC, ABAC, DLP e integrações: não implementados por esta task;
- evolução: futura implementação no Monvi Core Brain.
