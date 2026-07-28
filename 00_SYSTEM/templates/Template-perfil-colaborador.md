---
id: template-collaborator-profile
title: Template de perfil de colaborador
type: template
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: false
classification: internal
source_task: task-2026-038
created_at: "2026-07-28"
updated_at: "2026-07-28"
reviewed_at: "2026-07-28"
version: "1.0.0"
tags:
  - pessoas
  - colaborador
  - identidade
  - onboarding
  - template
related:
  - registry-identities-and-profiles-v1
  - policy-identity-access-individual-helpper-v1
---

# Template de perfil de colaborador

> Template documental. Não preencher com credenciais, tokens, chaves, segredos ou documentos pessoais sensíveis desnecessários.

## Instruções de uso

1. duplicar este template para uma task específica e autorizada;
2. substituir campos marcados como `preencher`;
3. manter o perfil em revisão até validação individual;
4. não conceder acesso técnico com base apenas neste documento;
5. registrar aprovações e evidências aplicáveis;
6. manter credenciais fora do Monvi Brain.

## Frontmatter sugerido

```yaml
---
id: person-<identificador-estavel>
title: Perfil de colaborador — <nome institucional>
type: record
status: review
owner: <gestor-ou-owner>
reviewer: <revisor>
active_client: null
active_project: null
requires_review: true
classification: internal
source_task: <task-id>
created_at: "<AAAA-MM-DD>"
updated_at: "<AAAA-MM-DD>"
reviewed_at: null
version: "0.1.0"
tags:
  - pessoa
  - colaborador
  - identidade
related:
  - registry-identities-and-profiles-v1
  - policy-identity-access-individual-helpper-v1
---
```

## Identificação institucional

- `person_id`: preencher
- nome de uso institucional: preencher
- nome completo, somente quando necessário: preencher ou não aplicável
- tipo de pessoa: preencher
- tipo de vínculo: preencher
- estado do vínculo: onboarding
- departamento: preencher
- função principal: preencher
- gestor ou owner: preencher
- revisor: preencher
- aprovador: preencher
- data de início: preencher
- data prevista de término: preencher ou não aplicável
- classificação: internal

## Finalidade do vínculo

Descrever objetivamente por que a pessoa precisa estar vinculada à Monvi e quais resultados ou responsabilidades justificam o perfil.

## Função e responsabilidades

### Função principal

preencher

### Responsabilidades autorizadas

- preencher

### Responsabilidades não atribuídas

- preencher

### Limites de autoridade

- preencher

## Estrutura organizacional

- departamento: preencher
- gestor direto: preencher
- aprovador executivo: preencher
- equipe relacionada: preencher
- substituto ou contingência: preencher ou não aplicável

## Clientes e projetos autorizados

### Clientes

- nenhum por padrão

### Projetos

- nenhum por padrão

### Restrições de contexto

- não acessar clientes ou projetos não listados;
- não reutilizar dados entre clientes;
- não ampliar escopo sem aprovação.

## Identidade e contas relacionadas

### Identidade institucional

- `identity_id`: preencher ou não criada
- tipo de identidade: humana
- estado da identidade: pending
- validade: preencher
- data da última revisão: preencher

### Contas relacionadas

| Sistema ou provedor | `account_id` | Tipo | Estado | MFA aplicável | Validade | Evidência |
|---|---|---|---|---|---|---|
| preencher | preencher | preencher | requested | preencher | preencher | preencher |

> Não registrar senha, token, chave, segredo, fator de autenticação ou código de recuperação.

## Acessos e perfis autorizados

### Perfis de acesso

| `access_profile_id` | Finalidade | Recurso | Ações | Escopo | Validade | Aprovador | Estado |
|---|---|---|---|---|---|---|---|
| preencher | preencher | preencher | preencher | preencher | preencher | preencher | review |

### Acessos administrativos

- nenhum por padrão

### Ações críticas

- nenhuma por padrão

### Ações proibidas

- elevar privilégios;
- compartilhar credenciais;
- acessar cliente ou projeto não autorizado;
- aprovar a própria ação quando houver separação de funções;
- armazenar segredos no Monvi Brain;
- reutilizar dados entre clientes sem autorização.

## Sistemas e ferramentas

| Sistema ou ferramenta | Finalidade | Nível de acesso | Owner | Validade | Aprovador |
|---|---|---|---|---|---|
| preencher | preencher | preencher | preencher | preencher | preencher |

## Dados e memória

### Classificações autorizadas

- internal por padrão

### Escopos de memória permitidos

- sessão: preencher
- individual: preencher
- projeto: preencher
- cliente: preencher
- departamental: preencher
- institucional: preencher
- canonical: não permitido sem aprovação específica

### Dados permitidos

- preencher

### Dados proibidos ou restritos

- credenciais;
- tokens;
- chaves privadas;
- códigos de recuperação;
- documentos pessoais sensíveis desnecessários;
- dados de clientes fora do escopo autorizado.

### Retenção e descarte

- regra de retenção: preencher
- responsável pela revisão: preencher
- condição de descarte: preencher

## Segurança e controles

- MFA exigido: preencher
- dispositivo autorizado: preencher
- acesso administrativo separado: preencher ou não aplicável
- reautenticação para ações críticas: preencher
- monitoramento aplicável: preencher
- revisão periódica: preencher
- mecanismo de suspensão: preencher
- mecanismo de revogação: preencher

## Vínculo com Helpper individual

- Helpper individual aplicável: não por padrão
- `helpper_id`: não criado
- propósito: não aplicável
- estado: inactive
- aprovador: preencher ou não aplicável
- template relacionado: `Template-helpper-individual.md`

A existência deste perfil não cria, ativa ou autoriza um Helpper individual.

## Ciclo de vida

### Onboarding

- solicitação registrada: preencher
- identidade validada: não
- vínculo validado: não
- função aprovada: não
- clientes e projetos aprovados: não
- acessos aprovados: não
- controles de segurança confirmados: não
- Helpper avaliado: não

### Mudança de função

- revisar responsabilidades;
- remover acessos incompatíveis;
- revisar clientes e projetos;
- revisar sistemas e ferramentas;
- revisar memória;
- revisar Helpper individual.

### Afastamento ou suspensão

- motivo: preencher
- início: preencher
- término previsto: preencher ou não aplicável
- acessos suspensos: preencher
- sessões revogadas: preencher
- Helpper suspenso: preencher
- responsável: preencher

### Offboarding

- data de término: preencher
- acessos revogados: não
- sessões encerradas: não
- contas bloqueadas ou encerradas: não
- responsabilidades transferidas: não
- clientes e projetos revisados: não
- memória revisada: não
- Helpper bloqueado: não
- evidências registradas: não

## Aprovações

| Decisão | Solicitante | Aprovador | Data | Validade | Estado | Evidência |
|---|---|---|---|---|---|---|
| criação do perfil | preencher | preencher | preencher | preencher | review | preencher |
| ativação da identidade | preencher | preencher | preencher | preencher | pending | preencher |
| concessão de acessos | preencher | preencher | preencher | preencher | pending | preencher |
| vínculo de Helpper | preencher ou não aplicável | preencher ou não aplicável | preencher | preencher | inactive | preencher |

A pessoa, o executor técnico e o aprovador deverão permanecer distinguíveis.

## Evidências e referências

- task de origem: preencher
- solicitação: preencher
- aprovação: preencher
- contrato ou vínculo: preencher ou não aplicável
- checklist de onboarding: preencher
- registros de acesso: preencher
- registros de revisão: preencher
- incidentes relacionados: nenhum por padrão
- evidência de offboarding: não aplicável enquanto ativo

## Privacidade e minimização

### Dados necessários

- nome de uso institucional;
- identificadores institucionais;
- vínculo;
- função;
- responsabilidades;
- gestor e aprovador;
- clientes, projetos, sistemas e acessos autorizados;
- estados, validade e evidências.

### Dados que não devem ser incluídos

- senha;
- token;
- chave privada;
- segredo;
- código de recuperação;
- documento pessoal completo sem necessidade formal;
- dado bancário sem necessidade formal;
- dado de saúde sem necessidade formal;
- dado pessoal de cliente fora da finalidade autorizada.

### Retenção

- fundamento ou finalidade: preencher
- período de retenção: preencher
- responsável: preencher
- condição de revisão: preencher
- condição de exclusão ou anonimização: preencher

## Revisão periódica

- frequência: preencher
- próxima revisão: preencher
- revisor: preencher
- acessos revisados: não
- clientes e projetos revisados: não
- sistemas revisados: não
- memória revisada: não
- Helpper revisado: não
- riscos revisados: não

## Riscos e exceções

### Riscos identificados

- preencher ou nenhum

### Exceções autorizadas

- nenhuma por padrão

Toda exceção deverá possuir justificativa, risco, aprovador, validade, controle compensatório e plano de encerramento.

## Critérios para ativação

O perfil somente poderá ser tratado como ativo quando:

- a identidade estiver validada;
- o vínculo estiver confirmado;
- função e responsabilidades estiverem aprovadas;
- clientes e projetos estiverem definidos;
- acessos estiverem aprovados;
- controles de segurança estiverem confirmados;
- validade estiver definida;
- owner, revisor e aprovador estiverem identificados;
- não houver inconsistência impeditiva;
- evidências mínimas estiverem registradas.

A ativação documental não comprova autenticação, provisionamento ou acesso técnico.

## Critérios para afastamento

O perfil poderá ser movido para `03_OPERATIONS/pessoas/afastados/` quando:

- motivo e período estiverem registrados;
- acessos e sessões tiverem sido tratados;
- Helpper tiver sido suspenso quando aplicável;
- responsável e condição de retorno estiverem definidos.

## Critérios para desligamento

O perfil somente poderá ser movido para `03_OPERATIONS/pessoas/desligados/` quando:

- término do vínculo estiver confirmado;
- acessos tiverem sido revogados;
- sessões tiverem sido encerradas;
- contas tiverem sido bloqueadas ou encerradas;
- responsabilidades tiverem sido transferidas;
- clientes e projetos tiverem sido revisados;
- memória tiver sido tratada;
- Helpper tiver sido bloqueado;
- evidências tiverem sido registradas.

## Validação final

- [ ] identificador único
- [ ] identidade validada
- [ ] vínculo confirmado
- [ ] função definida
- [ ] responsabilidades definidas
- [ ] clientes e projetos definidos
- [ ] contas relacionadas
- [ ] acessos aprovados
- [ ] segurança confirmada
- [ ] memória definida
- [ ] Helpper avaliado
- [ ] privacidade revisada
- [ ] validade definida
- [ ] owner definido
- [ ] reviewer definido
- [ ] aprovador definido
- [ ] evidências registradas
- [ ] revisão concluída

## Estado do template

- status documental: em revisão;
- perfis reais criados com este template: nenhum;
- acessos concedidos por este template: nenhum;
- Helppers ativados por este template: nenhum.

## Limites

Este template não:

- comprova identidade;
- cria conta;
- autentica usuário;
- concede acesso;
- ativa sessão;
- ativa Helpper;
- executa onboarding técnico;
- executa offboarding técnico;
- substitui logs de sistemas;
- autoriza armazenamento de segredos.
