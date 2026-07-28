---
id: template-individual-helpper
title: Template de Helpper individual
type: template
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
source_task: task-2026-038
created_at: "2026-07-28"
updated_at: "2026-07-28"
reviewed_at: null
version: "0.1.0"
tags:
  - helpper-individual
  - identidade
  - agentes
  - memoria
  - template
related:
  - registry-identities-and-profiles-v1
  - policy-identity-access-individual-helpper-v1
  - template-collaborator-profile
---

# Template de Helpper individual

> Template documental. Não ativa agente, não cria conta, não concede acesso e não comprova autenticação.

## Instruções de uso

1. utilizar somente em task específica e autorizada;
2. vincular o Helpper a uma identidade humana validada;
3. definir propósito, escopo, memória, ferramentas e limites;
4. manter o documento em revisão até aprovação humana;
5. não registrar credenciais, tokens, chaves ou segredos;
6. não tratar aprovação documental como ativação técnica.

## Frontmatter sugerido

```yaml
---
id: helpper-individual-<identificador-estavel>
title: Helpper individual — <identificador institucional>
type: record
status: review
owner: <identidade-humana-vinculada>
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
  - helpper-individual
  - agente
  - identidade
related:
  - registry-identities-and-profiles-v1
  - policy-identity-access-individual-helpper-v1
  - person-<identificador-estavel>
---
```

## Identificação

- `helpper_id`: preencher
- nome institucional: preencher
- estado documental: draft
- estado técnico: inactive
- versão: preencher
- owner humano: preencher
- revisor: preencher
- aprovador: preencher
- validade: preencher
- última revisão: preencher

## Identidade humana vinculada

- `person_id`: preencher
- `identity_id`: preencher
- nome institucional: preencher
- função: preencher
- estado da identidade: preencher
- perfil de colaborador relacionado: `Template-perfil-colaborador.md`

O Helpper individual nunca poderá exceder as permissões da identidade humana vinculada.

A suspensão, revogação ou desligamento da identidade humana deverá suspender ou bloquear o Helpper.

## Propósito

### Objetivo principal

preencher

### Resultados esperados

- preencher

### Problemas que pode apoiar

- preencher

### Problemas que não deve tratar

- preencher

## Escopo organizacional

- departamento: preencher
- função apoiada: preencher
- gestor responsável: preencher
- aprovador executivo: preencher
- validade do escopo: preencher

## Clientes e projetos

### Clientes autorizados

- nenhum por padrão

### Projetos autorizados

- nenhum por padrão

### Restrições

- não acessar cliente não listado;
- não reutilizar dados entre clientes;
- não ampliar escopo sem aprovação;
- não inferir autorização a partir de contexto anterior.

## Autoridade delegada

### Ações permitidas

- preencher

### Ações condicionadas à aprovação

- preencher

### Ações proibidas

- elevar privilégios;
- criar novas permissões;
- aprovar a própria ação crítica;
- acessar cliente ou projeto não autorizado;
- promover conteúdo para canonical sem revisão;
- executar ação destrutiva sem autorização;
- ocultar autoria, contexto, risco ou resultado;
- manter operação após suspensão da identidade vinculada.

## Memória

### Escopos permitidos

- sessão: preencher
- individual: preencher
- projeto: preencher
- cliente: preencher
- departamental: preencher
- institucional: preencher
- canonical: não permitido sem revisão e aprovação específicas

### Dados permitidos

- preencher

### Dados proibidos ou restritos

- credenciais;
- tokens;
- chaves privadas;
- códigos de recuperação;
- dados de clientes fora do escopo;
- documentos pessoais sensíveis desnecessários;
- conteúdo não aprovado para memória institucional;
- conteúdo não revisado para canonical.

### Regras de promoção

- memória de sessão não deverá ser promovida automaticamente;
- memória individual não deverá ser compartilhada automaticamente;
- memória de cliente não poderá migrar para outro cliente;
- promoção para institucional exigirá revisão;
- promoção para canonical exigirá aprovação explícita;
- memória não concede permissão de ação.

### Retenção e descarte

- retenção: preencher
- responsável pela revisão: preencher
- condição de descarte: preencher
- condição de anonimização: preencher

## Skills permitidas

| Skill | Finalidade | Limites | Validade | Aprovador |
|---|---|---|---|---|
| preencher | preencher | preencher | preencher | preencher |

Skills não concedem acesso, não elevam privilégios e não substituem aprovação.

## Ferramentas permitidas

| Ferramenta | Finalidade | Escopo | Credencial externa | Validade | Aprovador |
|---|---|---|---|---|---|
| preencher | preencher | preencher | sim, fora do Monvi Brain | preencher | preencher |

O template poderá referenciar uma credencial externa, mas não deverá armazenar seu valor.

## Fontes e caminhos

### Caminhos de leitura

- preencher

### Caminhos de escrita

- nenhum por padrão

### Caminhos somente leitura

- preencher

### Caminhos proibidos

- credenciais e segredos;
- dados de outros clientes;
- caminhos fora do escopo autorizado;
- canonical sem task e aprovação;
- arquivos RAW quando houver regra de somente leitura.

## Regras de execução

Toda execução deverá validar:

- identidade humana vinculada ativa;
- estado do Helpper;
- cliente e projeto ativos;
- ação permitida;
- ferramenta permitida;
- caminho permitido;
- validade;
- necessidade de aprovação;
- risco;
- reversibilidade;
- custo ou limite aplicável.

### Execução permitida

- somente dentro do escopo aprovado;
- somente com ferramentas autorizadas;
- somente enquanto a identidade vinculada estiver ativa;
- somente com rastreabilidade suficiente.

### Execução bloqueada

- identidade suspensa, revogada ou desligada;
- Helpper em draft, review, inactive, suspended, revoked ou archived;
- validade expirada;
- cliente ou projeto não autorizado;
- ação fora do escopo;
- ausência de aprovação obrigatória;
- risco não tratado;
- tentativa de elevar privilégio;
- tentativa de ocultar autoria ou resultado.

## Aprovações

| Decisão | Solicitante | Aprovador | Data | Validade | Estado | Evidência |
|---|---|---|---|---|---|---|
| criação documental | preencher | preencher | preencher | preencher | review | preencher |
| vínculo com identidade humana | preencher | preencher | preencher | preencher | pending | preencher |
| uso de memória | preencher | preencher | preencher | preencher | pending | preencher |
| uso de ferramenta | preencher | preencher | preencher | preencher | pending | preencher |
| ação crítica | preencher | preencher | preencher | preencher | pending | preencher |

A aprovação deverá ser específica quanto a identidade, ação, recurso, cliente, projeto, validade e condição de revogação.

## Supervisão humana

- owner humano: preencher
- revisor: preencher
- aprovador: preencher
- frequência de revisão: preencher
- condição de interrupção: preencher
- canal de escalonamento: preencher
- responsável por incidente: preencher

O Helpper deverá interromper a execução diante de ambiguidade, autorização insuficiente, conflito de escopo, risco elevado ou falha de controle.

## Limites de custo e operação

- limite por execução: preencher
- limite diário: preencher
- limite mensal: preencher
- limite de duração: preencher
- limite de volume: preencher
- condição de bloqueio: preencher
- responsável por revisão de custo: preencher

A ausência de limite definido deverá impedir execução com custo variável ou impacto relevante.

## Auditoria e rastreabilidade

Cada execução deverá registrar, quando aplicável:

- `helpper_id`;
- identidade humana vinculada;
- solicitante;
- aprovador;
- data e hora;
- ação solicitada;
- cliente e projeto;
- ferramenta utilizada;
- caminhos acessados;
- dados de entrada permitidos;
- resultado;
- custo ou consumo;
- estado da execução;
- erro ou incidente;
- referência de evidência.

Logs não deverão armazenar credenciais, segredos ou dados pessoais desnecessários.

## Tratamento de erros

### Comportamento padrão

- interromper a execução quando houver erro impeditivo;
- não ocultar falha;
- não repetir ação destrutiva automaticamente;
- preservar contexto suficiente para diagnóstico;
- registrar impacto, estado e próxima ação;
- escalar quando houver risco, ambiguidade ou autorização insuficiente.

### Retentativas

- quantidade máxima: preencher
- intervalo: preencher
- ações elegíveis: preencher
- ações não elegíveis: destrutivas, financeiras, administrativas ou irreversíveis sem aprovação específica

### Compensação ou reversão

- mecanismo de reversão: preencher
- responsável: preencher
- limite de tempo: preencher
- evidência: preencher

## Incidentes

O Helpper deverá ser suspenso quando houver:

- comportamento fora do escopo;
- acesso indevido;
- vazamento ou mistura de contexto;
- tentativa de elevar privilégio;
- falha recorrente de controle;
- custo fora do limite;
- alteração não autorizada;
- identidade humana suspensa ou revogada;
- ordem explícita de interrupção.

### Registro do incidente

- identificador: preencher
- data: preencher
- impacto: preencher
- cliente ou projeto: preencher
- responsável: preencher
- ação de contenção: preencher
- estado do Helpper: suspended
- evidências: preencher
- condição para retorno: preencher

## Ciclo de vida

### Criação

- solicitação registrada: não
- identidade humana validada: não
- propósito definido: não
- escopo definido: não
- memória definida: não
- skills definidas: não
- ferramentas definidas: não
- limites definidos: não
- owner definido: não
- aprovador definido: não

### Revisão

- permissões revisadas: não
- clientes e projetos revisados: não
- caminhos revisados: não
- memória revisada: não
- custos revisados: não
- riscos revisados: não
- evidências revisadas: não

### Ativação

- aprovação documental concluída: não
- implementação técnica validada: não
- identidade humana ativa: não
- autenticação confirmada: não
- autorização confirmada: não
- logs confirmados: não
- mecanismo de suspensão testado: não

### Suspensão

- motivo: preencher
- data: preencher
- responsável: preencher
- acessos bloqueados: preencher
- sessões encerradas: preencher
- execuções interrompidas: preencher
- condição para retorno: preencher

### Revogação

- motivo: preencher
- data: preencher
- aprovador: preencher
- credenciais externas tratadas: preencher
- acessos revogados: preencher
- memória tratada: preencher
- evidências registradas: preencher

### Arquivamento

- data: preencher
- responsável: preencher
- retenção aplicável: preencher
- conteúdo preservado: preencher
- conteúdo descartado ou anonimizado: preencher

## Critérios para ativação

O Helpper somente poderá ser ativado quando:

- possuir identidade humana vinculada e ativa;
- possuir propósito e escopo aprovados;
- possuir clientes e projetos explicitamente definidos;
- possuir ações permitidas, condicionadas e proibidas;
- possuir memória, skills e ferramentas delimitadas;
- possuir caminhos de leitura, escrita e proibição definidos;
- possuir limites de custo e operação;
- possuir supervisão humana;
- possuir mecanismo de interrupção e suspensão;
- possuir logs e evidências;
- não possuir inconsistência impeditiva;
- receber aprovação humana específica.

A aprovação documental não ativa tecnicamente o Helpper.

## Critérios para suspensão

O Helpper deverá ser suspenso quando:

- a identidade humana estiver suspensa, revogada ou desligada;
- a validade estiver expirada;
- houver incidente ou comportamento fora do escopo;
- houver falha de autenticação, autorização ou auditoria;
- houver risco não tratado;
- houver tentativa de elevar privilégio;
- houver ordem humana de interrupção.

## Critérios para revogação

O Helpper deverá ser revogado quando:

- o vínculo humano terminar;
- o propósito deixar de existir;
- os riscos forem considerados inaceitáveis;
- houver violação grave ou recorrente;
- o owner deixar de existir sem substituição aprovada;
- houver decisão executiva de encerramento.

## Revisão periódica

- frequência: preencher
- próxima revisão: preencher
- owner: preencher
- reviewer: preencher
- aprovador: preencher
- propósito revisado: não
- permissões revisadas: não
- memória revisada: não
- ferramentas revisadas: não
- clientes e projetos revisados: não
- custos revisados: não
- incidentes revisados: não

## Riscos e exceções

### Riscos identificados

- preencher ou nenhum

### Exceções autorizadas

- nenhuma por padrão

Toda exceção deverá possuir justificativa, risco, aprovador, validade, controle compensatório e plano de encerramento.

## Validação final

- [ ] identificador único
- [ ] identidade humana vinculada
- [ ] identidade humana ativa
- [ ] propósito definido
- [ ] escopo definido
- [ ] clientes e projetos definidos
- [ ] autoridade delegada definida
- [ ] memória definida
- [ ] skills definidas
- [ ] ferramentas definidas
- [ ] caminhos definidos
- [ ] regras de execução definidas
- [ ] aprovações registradas
- [ ] supervisão humana definida
- [ ] limites definidos
- [ ] auditoria definida
- [ ] tratamento de erros definido
- [ ] incidentes tratados
- [ ] mecanismo de suspensão definido
- [ ] validade definida
- [ ] revisão concluída

## Estado do template

- status documental: em revisão;
- Helppers reais criados com este template: nenhum;
- agentes ativados por este template: nenhum;
- acessos concedidos por este template: nenhum;
- execuções autorizadas por este template: nenhuma.

## Limites

Este template não:

- cria identidade humana;
- cria conta;
- autentica usuário;
- concede acesso;
- eleva privilégio;
- ativa agente;
- executa ação;
- aprova ação crítica;
- armazena credencial;
- substitui controles do Monvi Core Brain;
- substitui logs de sistemas;
- autoriza operação sem supervisão.
