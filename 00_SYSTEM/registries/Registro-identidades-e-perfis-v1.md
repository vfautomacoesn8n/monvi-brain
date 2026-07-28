---
id: registry-identities-and-profiles-v1
title: Registro de identidades e perfis v1
type: record
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
  - identidade
  - perfis
  - pessoas
  - acesso
  - helpper-individual
related:
  - policy-identity-access-individual-helpper-v1
  - policy-access-lifecycle
---

# Registro de identidades e perfis v1

## Objetivo

Definir a estrutura institucional para registrar identidades, vínculos, funções, perfis, contas, Helppers individuais e estados de ciclo de vida.

Este documento define modelos e regras de registro.

Ele não cadastra pessoas reais, não cria contas, não concede acesso e não ativa Helppers.

## Estado do registro

- modelo documental: em revisão;
- registros reais de pessoas: nenhum;
- identidades técnicas reais: nenhuma;
- contas autenticadas registradas: nenhuma;
- Helppers individuais ativados: nenhum;
- implementação no Monvi Core Brain: não iniciada por esta task.

## Documentos relacionados

- `00_SYSTEM/policies/Politica-identidade-acesso-e-helpper-individual-v1.md`;
- `00_SYSTEM/architecture/Modelo-identidade-papeis-e-permissoes-Monvi.md`;
- `00_SYSTEM/policies/Politica-ciclo-de-vida-de-acesso-Monvi.md`;
- `00_SYSTEM/templates/Template-perfil-usuario-e-Helpper-individual.md`;
- `00_SYSTEM/templates/Checklist-onboarding-alteracao-offboarding.md`.

## Entidades do modelo

### Pessoa

Representa um indivíduo relacionado à Monvi.

Campos conceituais mínimos:

- `person_id`;
- nome de uso institucional;
- tipo de vínculo;
- estado do vínculo;
- data de início;
- data de término quando aplicável;
- gestor ou responsável;
- classificação;
- referências documentais.

### Identidade institucional

Representa uma pessoa, agente ou serviço dentro do ecossistema Monvi.

Campos conceituais mínimos:

- `identity_id`;
- `identity_type`;
- `identity_state`;
- pessoa vinculada, quando humana;
- owner humano, quando não humana;
- função principal;
- validade;
- aprovador;
- data da última revisão;
- referências de auditoria.

### Conta autenticada

Representa uma conta técnica vinculada a uma identidade institucional.

Campos conceituais mínimos:

- `account_id`;
- `identity_id`;
- provedor ou sistema;
- tipo de conta;
- estado;
- nível administrativo;
- MFA aplicável;
- validade;
- data da última revisão.

O registro não deverá armazenar senha, token, chave, segredo ou código de recuperação.

### Função organizacional

Representa responsabilidades atribuídas à identidade.

Campos conceituais mínimos:

- `role_assignment_id`;
- `identity_id`;
- função;
- departamento;
- responsabilidades;
- gestor;
- início;
- término;
- estado;
- aprovador.

### Perfil de acesso

Representa um conjunto aprovado de recursos, ações, escopos e limites.

Campos conceituais mínimos:

- `access_profile_id`;
- nome;
- finalidade;
- recursos;
- ações;
- clientes;
- projetos;
- limites;
- validade;
- aprovador;
- estado.

### Helpper individual

Representa a configuração documental do Helpper vinculado a uma identidade humana.

Campos conceituais mínimos:

- `helpper_id`;
- `identity_id`;
- propósito;
- estado;
- escopos de memória;
- skills permitidas;
- ferramentas permitidas;
- ações permitidas;
- ações proibidas;
- aprovador;
- critérios de suspensão;
- referências de auditoria.

## Categorias institucionais

### Tipos de pessoa

- fundador ou CEO;
- colaborador interno;
- prestador;
- terceiro;
- parceiro autorizado.

### Tipos de identidade

- humana;
- agente;
- conta de serviço;
- integração;
- automação.

### Tipos de conta

- individual;
- administrativa;
- serviço;
- integração;
- emergência.

Contas de emergência deverão possuir uso excepcional, justificativa, custódia, rotação e auditoria.

### Tipos de vínculo

- societário;
- empregatício;
- contratual;
- prestação de serviço;
- temporário;
- parceria autorizada.

## Estados padronizados

### Estados de pessoa ou vínculo

- `onboarding`;
- `active`;
- `away`;
- `suspended`;
- `offboarded`;
- `archived`.

### Estados de identidade

- `pending`;
- `active`;
- `suspended`;
- `revoked`;
- `offboarded`;
- `archived`.

### Estados de conta

- `requested`;
- `provisioned`;
- `active`;
- `suspended`;
- `revoked`;
- `closed`.

### Estados de perfil de acesso

- `draft`;
- `review`;
- `approved`;
- `suspended`;
- `revoked`;
- `archived`.

### Estados de Helpper individual

- `draft`;
- `review`;
- `approved`;
- `inactive`;
- `suspended`;
- `revoked`;
- `archived`.

O estado documental `approved` não comprova ativação técnica.

## Padrões de identificadores

Os identificadores deverão ser estáveis, únicos, minúsculos e sem dados pessoais desnecessários.

Padrões conceituais iniciais:

- pessoa: `person-<identificador-estavel>`;
- identidade: `identity-<tipo>-<identificador-estavel>`;
- conta: `account-<sistema>-<identificador-estavel>`;
- função atribuída: `role-assignment-<identificador>`;
- perfil de acesso: `access-profile-<identificador>`;
- Helpper individual: `helpper-individual-<identificador>`;
- aprovação: `approval-<ano>-<sequencial>`;
- revisão: `review-<ano>-<sequencial>`.

Os exemplos acima são padrões documentais e não representam registros existentes.

## Regras de unicidade

1. `person_id` deverá identificar uma única pessoa;
2. `identity_id` deverá identificar uma única identidade;
3. `account_id` deverá identificar uma única conta técnica;
4. `helpper_id` deverá identificar uma única configuração de Helpper;
5. uma conta não poderá apontar para mais de uma identidade responsável;
6. um Helpper individual não poderá apontar simultaneamente para mais de uma identidade humana;
7. duplicidades deverão ser bloqueadas antes de ativação;
8. identificadores revogados ou arquivados não deverão ser reutilizados;
9. mudança de nome, função ou e-mail não deverá alterar o identificador estável;
10. fusão ou correção de registros deverá preservar histórico e referências.

## Relações entre entidades

### Pessoa e identidade

Uma pessoa poderá possuir uma identidade humana institucional.

A criação de múltiplas identidades humanas para a mesma pessoa dependerá de justificativa e aprovação explícita.

### Identidade e conta

Uma identidade poderá possuir uma ou mais contas autenticadas.

Cada conta deverá possuir uma única identidade responsável.

### Identidade e função

Uma identidade poderá receber uma ou mais funções, respeitando conflitos de interesse e separação de funções.

### Identidade e perfil de acesso

Uma identidade poderá receber perfis de acesso aprovados, limitados por cliente, projeto, recurso, ação e validade.

### Identidade e Helpper individual

Uma identidade humana poderá possuir configuração de Helpper individual.

O Helpper deverá permanecer subordinado ao estado, escopo e permissões da identidade vinculada.

### Identidade não humana e owner

Agentes, automações, integrações e contas de serviço deverão possuir owner humano ativo.

A suspensão ou saída do owner deverá provocar revisão imediata da identidade não humana.

## Regras de cadastro

Nenhum registro real deverá ser criado sem solicitação identificada, validação, owner e aprovação aplicável.

Antes do cadastro, deverão ser confirmados:

- necessidade institucional;
- tipo de pessoa ou identidade;
- vínculo;
- estado inicial;
- função;
- gestor ou owner;
- aprovador;
- clientes e projetos autorizados;
- validade;
- classificação;
- referências documentais.

### Cadastro de pessoa

O cadastro de pessoa deverá usar dados mínimos e necessários.

Não deverão ser incluídos documentos pessoais completos, dados bancários, dados de saúde, credenciais ou outros dados sensíveis sem necessidade formal.

### Cadastro de identidade humana

A identidade humana deverá apontar para uma pessoa validada e possuir estado inicial `pending` até aprovação.

### Cadastro de identidade não humana

Agentes, automações, integrações e contas de serviço deverão possuir finalidade, owner humano ativo, escopo, validade, limites e mecanismo de suspensão.

### Cadastro de conta

A conta deverá apontar para uma identidade institucional e para o sistema ou provedor correspondente.

O registro poderá indicar que MFA é obrigatório ou aplicável, mas não deverá armazenar segredo, fator, chave ou código de recuperação.

### Cadastro de Helpper individual

O Helpper individual somente poderá ser registrado após definição da identidade humana vinculada, propósito, escopo, memória, ferramentas, ações permitidas, ações proibidas e aprovador.

O cadastro documental não ativa o Helpper.

## Campos de governança

Todo registro operacional deverá possuir, quando aplicável:

- identificador estável;
- título ou nome institucional;
- tipo;
- estado;
- owner;
- reviewer;
- aprovador;
- validade;
- classificação;
- data de criação;
- data de atualização;
- data da última revisão;
- origem ou task;
- referências relacionadas;
- evidências;
- observações de risco.

## Regras de revisão

Registros deverão ser revisados:

- antes da ativação;
- antes de renovação;
- em mudança de função;
- em mudança de cliente ou projeto;
- em afastamento;
- em suspensão;
- em incidente;
- em término de contrato;
- em desligamento;
- quando houver alteração relevante de risco.

A revisão deverá confirmar necessidade, estado, validade, owner, aprovador, escopo, contas, acessos, memória e Helpper relacionado.

## Transições documentais

### Onboarding

Registros em preparação poderão permanecer em `03_OPERATIONS/pessoas/onboarding/` até validação e aprovação.

### Ativação

Após aprovação documental e confirmação dos controles aplicáveis, o perfil poderá ser movido para `03_OPERATIONS/pessoas/ativos/`.

A movimentação documental não comprova provisionamento técnico.

### Afastamento

Perfis de pessoas afastadas poderão ser movidos para `03_OPERATIONS/pessoas/afastados/` após registro do motivo, período, responsável e tratamento dos acessos.

### Suspensão

A suspensão deverá preservar histórico, bloquear uso conforme risco e registrar condição para eventual retorno.

### Desligamento

Perfis somente deverão ser movidos para `03_OPERATIONS/pessoas/desligados/` após confirmação de que acessos, sessões, contas, delegações e Helpper foram tratados.

### Arquivamento

O arquivamento deverá preservar somente os dados e evidências necessários à finalidade institucional, auditoria ou obrigação aplicável.

## Evidências mínimas

Cada ativação, alteração, suspensão, revogação ou desligamento deverá registrar, quando aplicável:

- solicitação;
- responsável;
- aprovador;
- data;
- motivo;
- escopo;
- validade;
- resultado;
- referência de auditoria;
- incidente relacionado;
- confirmação de revogação.

## Tratamento de inconsistências

Inconsistências deverão impedir ativação ou ampliação de acesso.

São exemplos de inconsistência:

- identificador duplicado;
- identidade sem pessoa ou owner;
- conta sem identidade responsável;
- Helpper sem identidade humana vinculada;
- estado incompatível entre pessoa, identidade, conta e Helpper;
- validade expirada;
- aprovador ausente;
- conflito entre clientes ou projetos;
- ausência de evidência de revogação;
- presença de credencial ou segredo no registro.

Correções deverão preservar histórico, origem e justificativa.

## Restrições

Este registro não deverá:

- armazenar senhas;
- armazenar tokens;
- armazenar chaves privadas;
- armazenar códigos de recuperação;
- conceder permissões;
- autenticar usuários;
- criar contas em provedores;
- ativar agentes;
- executar offboarding técnico;
- substituir logs de sistemas;
- cadastrar pessoas reais sem aprovação específica.

## Ausência de registros reais nesta versão

Esta versão contém somente o modelo institucional.

Não foram cadastrados:

- Victor;
- Filipe;
- colaboradores;
- prestadores;
- terceiros;
- contas administrativas;
- identidades de serviço;
- Helppers individuais.

A inclusão futura de qualquer registro real dependerá de validação individual, template aprovado, solicitação formal e decisão humana específica.

## Responsabilidades pelo registro

### CEO ou autoridade executiva

- aprovar o modelo institucional;
- autorizar criação de registros reais;
- decidir exceções e riscos residuais;
- aprovar perfis administrativos e Helppers individuais.

### Gestor ou owner

- justificar o vínculo e a necessidade;
- validar função, escopo, clientes e projetos;
- solicitar revisão, suspensão ou desligamento;
- confirmar transferência de responsabilidades.

### Revisor ou aprovador

- verificar completude, unicidade, validade e coerência;
- avaliar menor privilégio e segregação de funções;
- rejeitar registros incompletos, excessivos ou inconsistentes;
- registrar decisão e condições.

### Administrador técnico

- utilizar o registro somente como referência documental aprovada;
- implementar acessos apenas mediante autorização válida;
- registrar resultado de provisionamento, suspensão ou revogação;
- não armazenar segredos no Monvi Brain.

### Pessoa vinculada

- confirmar informações institucionais quando solicitado;
- comunicar mudança de função, afastamento ou término de vínculo;
- utilizar acessos somente no escopo autorizado;
- comunicar incidentes e inconsistências.

## Precedência documental

Em caso de conflito, aplicar a seguinte ordem:

1. canonical aprovado;
2. arquitetura aprovada;
3. políticas aprovadas;
4. decisões institucionais aprovadas;
5. este registro enquanto estiver em revisão;
6. templates;
7. exemplos e registros operacionais.

Este registro complementa e não substitui silenciosamente documentos aprovados anteriormente.

## Relação com os templates

`Template-perfil-usuario-e-Helpper-individual.md` permanece válido.

`Template-perfil-colaborador.md` deverá especializar o registro humano e organizacional.

`Template-helpper-individual.md` deverá especializar a configuração documental do Helpper.

O uso de qualquer template não concede acesso técnico nem ativa conta, sessão ou agente.

## Critérios para aprovação

Este registro poderá ser aprovado quando:

- estiver compatível com canonical, arquitetura e políticas aprovadas;
- definir entidades, categorias, estados e relações;
- estabelecer identificadores estáveis e regras de unicidade;
- separar pessoa, identidade, conta, função, perfil e Helpper;
- definir regras de cadastro, revisão, transição e evidência;
- impedir armazenamento de credenciais e segredos;
- deixar explícita a ausência de registros reais;
- não conceder acesso por meio documental;
- receber aprovação do CEO.

## Estado de implementação

- modelo documental: em revisão;
- registro técnico em banco de dados: não implementado;
- autenticação: não implementada por esta task;
- autorização: não implementada por esta task;
- sincronização com provedores: não implementada;
- perfis reais: nenhum;
- contas reais: nenhuma;
- Helppers individuais reais: nenhum.

## Próxima utilização permitida

Após aprovação deste registro e dos templates especializados, uma task específica poderá propor o primeiro cadastro real.

Essa task futura deverá identificar a pessoa, justificar o vínculo, definir o escopo, validar a aprovação e manter credenciais fora do Monvi Brain.
