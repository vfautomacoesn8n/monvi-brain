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
source_task: task-2026-039
created_at: "2026-07-28"
updated_at: "2026-07-29"
reviewed_at: "2026-07-29"
version: "1.4.0"
tags:
  - identidade
  - perfis
  - pessoas
  - acesso
  - helpper-individual
related:
  - policy-identity-access-individual-helpper-v1
  - policy-access-lifecycle
  - task-2026-038
  - task-2026-039
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

## Registros reais documentais desta versão

A versão 1.1.0 inicia o primeiro cadastro documental real autorizado pela `task-2026-039`.

Foram cadastrados em estado de onboarding:

- `person-0001` — Victor Lopes da Silva Saad;
- `person-0002` — Filipe Costa Monteiro;
- `helpper-person-0001` — Helpper Victor;
- `helpper-person-0002` — Helpper Filipe.

Esses registros permanecem documentais e não comprovam provisionamento técnico, autenticação, autorização, conta externa, sessão, credencial ou agente ativo.

Não foram cadastrados ou ativados:

- e-mails corporativos;
- contas GitHub corporativas;
- contas Google Workspace;
- contas administrativas adicionais;
- identidades de serviço;
- credenciais;
- sessões;
- integrações externas;
- automações;
- acessos a clientes;
- Helppers tecnicamente executáveis.

Qualquer ativação futura dependerá de validação individual, menor privilégio, aprovação aplicável, evidência técnica e manutenção de segredos fora do Monvi Brain.

## Cadastros documentais do piloto dos CEOs

### person-0001 — Victor Lopes da Silva Saad

- tipo de pessoa: colaborador;
- vínculo institucional: CEO;
- estado do vínculo: onboarding;
- estado do perfil: review;
- identidade corporativa: pending;
- e-mail corporativo: pendente de criação;
- responsabilidade principal: pendente de definição;
- áreas sob decisão final: pendentes de definição;
- aprovador de acessos sensíveis: `person-0002`;
- perfil operacional: `03_OPERATIONS/pessoas/onboarding/person-0001/Perfil-colaborador.md`;
- Helpper relacionado: `helpper-person-0001`;
- biblioteca pessoal: `personal-library-person-0001`;
- caminho da biblioteca: `03_OPERATIONS/pessoas/onboarding/person-0001/biblioteca-pessoal/README.md`;
- acesso técnico concedido pela Task 039: nenhum;
- acesso a clientes concedido pela Task 039: nenhum;
- credencial armazenada: nenhuma.

### person-0002 — Filipe Costa Monteiro

- tipo de pessoa: colaborador;
- vínculo institucional: CEO;
- estado do vínculo: onboarding;
- estado do perfil: review;
- identidade corporativa: pending;
- e-mail corporativo: pendente de criação;
- responsabilidade principal: pendente de definição;
- áreas sob decisão final: pendentes de definição;
- aprovador de acessos sensíveis: `person-0001`;
- perfil operacional: `03_OPERATIONS/pessoas/onboarding/person-0002/Perfil-colaborador.md`;
- Helpper relacionado: `helpper-person-0002`;
- biblioteca pessoal: `personal-library-person-0002`;
- caminho da biblioteca: `03_OPERATIONS/pessoas/onboarding/person-0002/biblioteca-pessoal/README.md`;
- acesso técnico concedido pela Task 039: nenhum;
- acesso a clientes concedido pela Task 039: nenhum;
- credencial armazenada: nenhuma.

### helpper-person-0001 — Helpper Victor

- identidade humana vinculada: `person-0001`;
- owner: `person-0001`;
- reviewer: `person-0002`;
- estado documental: planned;
- vínculo exclusivo: sim;
- ambiente técnico: não selecionado;
- agente configurado: não;
- agente publicado: não;
- ferramentas externas: nenhuma;
- credenciais: nenhuma;
- acesso de escrita: nenhum;
- acesso a clientes: nenhum;
- execução autônoma: desativada;
- supervisão humana: obrigatória;
- documento operacional: `03_OPERATIONS/pessoas/onboarding/person-0001/Helpper-individual.md`;
- biblioteca pessoal vinculada: `personal-library-person-0001`;
- acesso técnico à biblioteca: não concedido;
- bibliotecas gerais: somente fontes autorizadas;
- promoção automática: proibida.

### helpper-person-0002 — Helpper Filipe

- identidade humana vinculada: `person-0002`;
- owner: `person-0002`;
- reviewer: `person-0001`;
- estado documental: planned;
- vínculo exclusivo: sim;
- ambiente técnico: não selecionado;
- agente configurado: não;
- agente publicado: não;
- ferramentas externas: nenhuma;
- credenciais: nenhuma;
- acesso de escrita: nenhum;
- acesso a clientes: nenhum;
- execução autônoma: desativada;
- supervisão humana: obrigatória;
- documento operacional: `03_OPERATIONS/pessoas/onboarding/person-0002/Helpper-individual.md`;
- biblioteca pessoal vinculada: `personal-library-person-0002`;
- acesso técnico à biblioteca: não concedido;
- bibliotecas gerais: somente fontes autorizadas;
- promoção automática: proibida.

## Matriz consolidada inicial de acessos

Esta matriz expressa somente o estado documental conhecido na Task 039. Ela não concede permissões.

| Sistema ou recurso | Victor | Filipe | Helpper Victor | Helpper Filipe | Estado técnico |
|---|---|---|---|---|---|
| E-mail corporativo | inexistente | inexistente | não aplicável | não aplicável | não provisionado |
| Google Workspace | inexistente | inexistente | sem acesso | sem acesso | não provisionado |
| GitHub corporativo | inexistente | inexistente | sem acesso | sem acesso | não provisionado |
| Repositório Monvi Brain | não concedido pela Task 039 | não concedido pela Task 039 | sem acesso | sem acesso | nenhuma nova permissão |
| Biblioteca pessoal de Victor | owner documental | sem acesso | vínculo planejado, sem acesso técnico | proibido | documental |
| Biblioteca pessoal de Filipe | sem acesso | owner documental | proibido | vínculo planejado, sem acesso técnico | documental |
| Bibliotecas gerais | conforme autorização | conforme autorização | consulta planejada | consulta planejada | sem nova permissão |
| Vercel | não inventariado | não inventariado | sem acesso | sem acesso | não definido |
| Cloudflare | não inventariado | não inventariado | sem acesso | sem acesso | não definido |
| n8n | não inventariado | não inventariado | sem acesso | sem acesso | não definido |
| WhatsApp Business Platform | não inventariado | não inventariado | sem acesso | sem acesso | não definido |
| Dados de clientes | nenhum | nenhum | nenhum | nenhum | bloqueado por padrão |
| Automações externas | desativadas | desativadas | desativadas | desativadas | não implementado |
| Execução crítica | desativada | desativada | proibida | proibida | não implementado |

### Regras da matriz

1. `não inventariado` não significa acesso permitido;
2. `não concedido pela Task 039` não afirma a inexistência de uso pessoal anterior;
3. nenhum acesso será inferido a partir do cargo de CEO;
4. acessos sensíveis de Victor exigirão aprovação de Filipe;
5. acessos sensíveis de Filipe exigirão aprovação de Victor;
6. nenhum Helpper poderá exceder as permissões da pessoa vinculada;
7. dados e contextos dos dois Helppers permanecerão segregados;
8. qualquer mudança exigirá registro, justificativa, aprovação e evidência;
9. credenciais e segredos permanecerão fora do Monvi Brain;
10. o `risk-2026-007` deverá ser reavaliado antes de qualquer acesso de escrita ou integração com o GitHub;
11. cada biblioteca pessoal pertence exclusivamente à pessoa vinculada;
12. o Helpper do outro CEO não poderá consultar a biblioteca pessoal;
13. bibliotecas gerais não concedem acesso a contextos de cliente ou projeto;
14. promoção para biblioteca geral exige revisão, aprovação e publicação humanas;
15. conversa não representa autorização automática para retenção;
16. candidato a memória individual exige confirmação explícita do owner;
17. reporte entre Helppers não concede acesso à biblioteca pessoal do outro;
18. reportes devem possuir origem, destinatário, classificação, finalidade, fontes e evidências;
19. reportes relacionados devem usar `correlation_id`;
20. respostas devem indicar `parent_report_id`;
21. recebimento deve ser confirmado;
22. `report_id` não pode ser processado duas vezes;
23. loops de reporte devem ser interrompidos e escalados;
24. implementação técnica do protocolo permanece pendente.

## Pendências do piloto

- definir responsabilidade principal de Victor;
- definir responsabilidade principal de Filipe;
- definir áreas de decisão final de Victor;
- definir áreas de decisão final de Filipe;
- definir limites de autoridade;
- definir padrão de e-mail corporativo;
- criar identidades corporativas individuais;
- inventariar contas e acessos existentes;
- definir periodicidade de revisão;
- selecionar ambiente técnico futuro dos Helppers;
- definir implementação técnica futura da memória individual;
- definir categorias e retenção das bibliotecas pessoais;
- aprovar acesso técnico dos Helppers antes de qualquer leitura automatizada;
- executar teste técnico de segregação antes da ativação;
- aprovar capacidades individualmente.

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

- modelo documental institucional: aprovado na versão 1.0.0;
- atualização com registros reais: em revisão na versão 1.1.0;
- registro técnico em banco de dados: não implementado;
- autenticação: não implementada por esta task;
- autorização: não implementada por esta task;
- sincronização com provedores: não implementada;
- perfis humanos documentais reais: dois em onboarding;
- contas corporativas reais: nenhuma criada;
- perfis de acesso técnico: nenhum concedido;
- Helppers individuais documentais reais: dois em estado `planned`;
- bibliotecas pessoais documentais reais: duas em estado `review`;
- vínculo pessoa–biblioteca–Helpper: documentado;
- acesso técnico às bibliotecas pessoais: nenhum concedido;
- promoção automática de conhecimento: não implementada;
- protocolo documental de aprendizado por conversa: documentado;
- confirmação técnica do owner: não implementada;
- protocolo documental de reporte entre Helppers: documentado;
- transporte técnico de reportes: não implementado;
- deduplicação e prevenção técnica de loops: não implementadas;
- Helppers configurados tecnicamente: nenhum;
- credenciais registradas: nenhuma;
- acesso a clientes: nenhum.

## Próxima utilização permitida

Após aprovação deste registro e dos templates especializados, uma task específica poderá propor o primeiro cadastro real.

Essa task futura deverá identificar a pessoa, justificar o vínculo, definir o escopo, validar a aprovação e manter credenciais fora do Monvi Brain.

## Aprovação documental da Task 039

- data: 2026-07-29;
- aprovador: CEO da Monvi;
- decisão: registro do piloto aprovado;
- status final: approved;
- revisão humana: concluída;
- implementação técnica de identidade, conta, acesso ou memória: não realizada.
