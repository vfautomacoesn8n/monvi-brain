---
id: policy-identity-access-individual-helpper-v1
title: Política de identidade, acesso e Helpper individual v1
type: policy
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
  - acesso
  - helpper-individual
  - pessoas
  - seguranca
related:
  - policy-access-lifecycle
---

# Política de identidade, acesso e Helpper individual v1

## Objetivo

Estabelecer regras integradas para representar pessoas, identidades institucionais, contas autenticadas, funções, perfis de acesso, sessões e Helppers individuais.

Esta política organiza e complementa regras já aprovadas. Ela não substitui autenticação, autorização, banco de dados, MFA, auditoria técnica ou controles do futuro Monvi Core Brain.

## Escopo

Esta política aplica-se a:

- fundadores e CEOs;
- colaboradores internos;
- prestadores e terceiros;
- administradores técnicos;
- operadores;
- revisores e aprovadores;
- agentes e contas de serviço;
- Helppers individuais vinculados a identidades humanas.

## Documentos relacionados

Esta política deve ser interpretada em conjunto com:

- `00_SYSTEM/architecture/Modelo-identidade-papeis-e-permissoes-Monvi.md`;
- `00_SYSTEM/architecture/Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md`;
- `00_SYSTEM/architecture/Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md`;
- `00_SYSTEM/policies/Politica-ciclo-de-vida-de-acesso-Monvi.md`;
- `00_SYSTEM/policies/Politica-memoria-e-promocao-de-conhecimento-Helpper.md`;
- `00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md`;
- `00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md`;
- `00_SYSTEM/templates/Checklist-onboarding-alteracao-offboarding.md`;
- `00_SYSTEM/templates/Template-perfil-usuario-e-Helpper-individual.md`.

## Princípios

### Identidade antes do acesso

Nenhum acesso deverá ser concedido sem identidade institucional validada, vínculo definido, responsável identificado e aprovação aplicável.

### Menor privilégio

Pessoas, contas e Helppers devem receber somente as permissões necessárias ao escopo autorizado e pelo menor período necessário.

### Separação entre documentação e controle técnico

Perfis, templates, registros e pastas documentais não concedem acesso técnico e não comprovam autenticação.

### Herança limitada do Helpper

O Helpper individual nunca poderá exceder as permissões da identidade humana vinculada.

Skills, ferramentas, memória e capacidade técnica não são fontes autônomas de permissão.

### Isolamento por contexto

Clientes, projetos, departamentos e memórias devem permanecer separados conforme o escopo autorizado.

### Rastreabilidade

Ações relevantes devem permitir identificar ator humano, agente executor, contexto, data, origem, aprovação e resultado.

## Conceitos institucionais

### Pessoa

Indivíduo relacionado à Monvi por vínculo societário, empregatício, contratual, operacional ou de prestação de serviço.

A pessoa não deve ser confundida com conta, papel, sessão ou Helpper.

### Identidade institucional

Registro único que representa uma pessoa, agente ou serviço dentro do ecossistema Monvi.

Cada identidade deverá possuir identificador estável, estado, tipo, responsável, vínculo e referências documentais.

### Conta autenticada

Representação técnica usada para autenticação em um sistema ou provedor.

Uma identidade poderá possuir mais de uma conta autenticada, mas cada conta deverá estar vinculada a uma única identidade institucional responsável.

Credenciais, tokens, chaves e códigos de recuperação não devem ser armazenados no Monvi Brain.

### Função organizacional

Conjunto de responsabilidades atribuídas a uma pessoa ou identidade.

A função descreve o que se espera do vínculo, mas não concede permissão automaticamente.

### Perfil de acesso

Conjunto documentado de escopos, ações, recursos, limites e condições previamente aprovados.

Perfis de acesso devem respeitar menor privilégio, necessidade operacional, validade e segregação de funções.

### Papel

Agrupamento reutilizável de responsabilidades ou permissões aplicável a uma função ou contexto.

A atribuição de papel não elimina a necessidade de validar cliente, projeto, recurso, validade e condição específica.

### Sessão

Período autenticado durante o qual uma identidade utiliza um sistema.

Sessões devem possuir validade, contexto, origem, mecanismos de revogação e reautenticação quando aplicável.

### Helpper individual

Configuração documental e futura capacidade assistiva vinculada a uma identidade humana validada.

O Helpper individual opera sob autoridade delegada, escopo aprovado, supervisão humana e limites inferiores ou iguais aos da pessoa vinculada.

### Agente ou conta de serviço

Identidade não humana usada por automação, integração, serviço ou agente.

Toda identidade não humana deverá possuir owner humano, finalidade, escopo, validade, limites, monitoramento e mecanismo de suspensão.

## Tipos iniciais de identidade

- pessoa fundadora ou CEO;
- colaborador interno;
- prestador ou terceiro;
- administrador técnico;
- operador;
- revisor ou aprovador;
- agente;
- conta de serviço.

Uma mesma pessoa poderá exercer mais de uma função, desde que responsabilidades, aprovações e conflitos de interesse sejam avaliados.

## Estados de identidade

### pending

Identidade registrada, mas ainda não validada ou ativada.

### active

Identidade validada e autorizada para operar dentro de escopo vigente.

### suspended

Identidade temporariamente impedida de operar, preservando histórico e evidências.

### revoked

Identidade com autorizações revogadas por decisão administrativa, risco, incidente ou término de necessidade.

### offboarded

Identidade vinculada a pessoa desligada ou relação encerrada, sem acessos ativos.

### archived

Registro preservado apenas para histórico, auditoria ou obrigação documental.

## Regras de transição de estado

- `pending` somente poderá migrar para `active` após validação e aprovação;
- `active` poderá migrar para `suspended`, `revoked` ou `offboarded`;
- `suspended` poderá retornar a `active` somente após revisão e nova aprovação;
- `revoked` não deverá retornar a `active` sem nova análise formal;
- `offboarded` não poderá manter sessão, conta ativa, permissão ou Helpper operacional;
- `archived` não representa vínculo vigente nem acesso autorizado.

Toda transição deverá registrar data, motivo, responsável, aprovador e evidência aplicável.

## Regras de vínculo

1. cada pessoa deverá possuir identificador institucional único;
2. cada conta autenticada deverá apontar para uma identidade responsável;
3. cada Helpper individual deverá apontar para uma identidade humana validada;
4. cada agente ou conta de serviço deverá possuir owner humano;
5. nenhum vínculo documental concederá acesso técnico por si só;
6. duplicidades de identidade deverão ser tratadas antes de qualquer ativação;
7. mudanças de função deverão revisar papéis, permissões, memória, ferramentas e Helpper;
8. afastamento, suspensão ou desligamento deverão provocar revisão ou revogação imediata dos acessos relacionados.

## Regras de acesso

Todo acesso deverá possuir:

- identidade responsável;
- finalidade;
- recurso ou sistema;
- ação autorizada;
- escopo de cliente, projeto ou departamento;
- validade;
- owner;
- aprovador quando aplicável;
- mecanismo de revisão e revogação.

A ausência de qualquer elemento obrigatório deverá impedir ativação ou renovação do acesso.

### Acesso administrativo

Acesso administrativo deverá ser individual, rastreável, limitado e protegido por controles adicionais.

Contas compartilhadas devem ser evitadas. Quando tecnicamente inevitáveis, deverão possuir justificativa, owner, cofre de credenciais, rotação, logs e plano de substituição.

### Ações críticas

Ações críticas exigirão aprovação humana conforme risco, impacto, reversibilidade, custo, dado envolvido e alcance.

O executor não deverá aprovar a própria ação crítica quando houver requisito de separação de funções.

## Escopos de memória

Os escopos documentais e futuros escopos técnicos de memória são:

- sessão;
- individual;
- projeto;
- cliente;
- departamental;
- institucional;
- canonical.

### Regras de memória

1. memória de sessão deverá expirar ou ser descartada conforme necessidade;
2. memória individual não deverá ser compartilhada automaticamente;
3. memória de projeto deverá permanecer limitada ao projeto autorizado;
4. memória de cliente não poderá transitar para outro cliente sem autorização e revisão;
5. memória departamental deverá respeitar necessidade operacional;
6. memória institucional deverá conter somente conhecimento aprovado para esse alcance;
7. promoção para canonical dependerá de revisão e aprovação;
8. memória não concede permissão de ação;
9. dado sensível deverá seguir classificação, retenção e acesso apropriados;
10. desligamento ou revogação deverá revisar memórias persistentes e vínculos existentes.

## Regras do Helpper individual

O Helpper individual deverá possuir, no mínimo:

- identidade humana vinculada;
- propósito definido;
- owner humano;
- escopo de clientes e projetos;
- memórias permitidas;
- skills e ferramentas permitidas;
- ações permitidas;
- ações proibidas;
- limites de custo e execução;
- aprovador;
- critérios de suspensão;
- critérios de offboarding;
- referências de auditoria.

O Helpper individual não poderá:

- elevar privilégios;
- criar novas permissões;
- acessar cliente não autorizado;
- promover conhecimento sem revisão;
- executar ação crítica sem aprovação;
- reutilizar aprovação fora do escopo ou validade;
- manter operação após suspensão ou desligamento da identidade vinculada;
- ocultar autoria, contexto ou resultado.

## Ciclo de vida

### Onboarding

Antes da ativação, deverão ser validados identidade, vínculo, função, owner, aprovador, escopo, validade, clientes, projetos, ferramentas, memória, Helpper e controles aplicáveis.

### Mudança de função

Mudanças deverão remover acessos incompatíveis antes ou junto da concessão de novos acessos.

Papéis, clientes, projetos, ferramentas, memória e Helpper deverão ser revisados.

### Afastamento ou suspensão

Afastamento ou suspensão deverá interromper sessões e acessos conforme risco e natureza do vínculo.

O Helpper individual deverá ser suspenso quando não houver autoridade humana ativa para sua operação.

### Revogação

Revogação deverá interromper acessos, sessões, tokens, integrações, delegações e operações relacionadas.

O histórico documental e de auditoria deverá ser preservado.

### Offboarding

O offboarding deverá assegurar, no mínimo:

- suspensão da identidade;
- revogação das sessões;
- remoção dos acessos;
- bloqueio do Helpper individual;
- transferência controlada de responsabilidades;
- revisão de clientes e projetos;
- revisão de memória e dados persistentes;
- registro de evidências;
- movimentação documental para estado apropriado.

A movimentação para `03_OPERATIONS/pessoas/desligados/` somente deverá ocorrer após confirmação da revogação operacional aplicável.

## Aprovação e revisão

Exigem aprovação explícita:

- ativação de identidade;
- concessão de acesso;
- acesso administrativo;
- vínculo de Helpper individual;
- ampliação de escopo;
- mudança de cliente ou projeto;
- promoção de memória;
- uso de dado sensível;
- execução de ação crítica;
- reativação após suspensão;
- exceção de política.

Aprovações deverão registrar aprovador, escopo, recurso, validade, justificativa e condição de revogação.

Permissões, identidades e Helppers deverão ser revisados periodicamente e sempre que houver mudança de função, incidente, afastamento, término de contrato ou alteração relevante de risco.

## Estrutura documental de pessoas

A estrutura adotada no Monvi Brain será:

- `03_OPERATIONS/pessoas/onboarding/`;
- `03_OPERATIONS/pessoas/ativos/`;
- `03_OPERATIONS/pessoas/afastados/`;
- `03_OPERATIONS/pessoas/desligados/`.

O caminho conceitual `people/` usado em documentos anteriores representa o modelo lógico de espaço individual.

O caminho `03_OPERATIONS/pessoas/` representa sua implementação documental no Monvi Brain.

A existência de pasta, perfil ou template não representa identidade validada, vínculo ativo, acesso concedido ou Helpper habilitado.

### Regras da estrutura

1. perfis reais somente poderão ser criados após validação individual e aprovação;
2. cada pasta individual deverá usar identificador institucional estável;
3. nomes de pasta não deverão ser tratados como prova de identidade;
4. perfis não deverão armazenar credenciais, tokens, chaves ou segredos;
5. documentos pessoais sensíveis somente poderão ser registrados quando estritamente necessários e autorizados;
6. referências a acessos deverão apontar para registros aprovados, sem copiar segredos;
7. movimentação entre estados deverá preservar histórico e evidências;
8. desligamento documental não substituirá revogação técnica;
9. acesso técnico deverá ser revogado antes ou junto da movimentação para desligados;
10. pastas individuais não deverão misturar dados de clientes fora do escopo autorizado.

## Privacidade e minimização de dados

Somente dados necessários à finalidade institucional e operacional deverão ser registrados.

Não deverão ser incluídos, salvo necessidade formal e autorização específica:

- documentos pessoais completos;
- dados bancários;
- dados de saúde;
- credenciais;
- códigos de recuperação;
- segredos comerciais alheios ao escopo;
- dados pessoais de clientes sem necessidade operacional.

Dados pessoais deverão possuir finalidade, classificação, acesso limitado, retenção definida e possibilidade de revisão ou remoção conforme regra aplicável.

## Auditoria e evidências

Eventos relevantes deverão registrar, quando aplicável:

- identidade humana;
- identidade técnica ou agente;
- ação;
- recurso;
- cliente e projeto;
- origem;
- data e hora;
- resultado;
- aprovador;
- justificativa;
- evidência;
- incidente relacionado.

A autoria humana, a execução do agente e a aprovação deverão permanecer distinguíveis.

Logs e evidências não deverão armazenar segredos em texto aberto.

## Incidentes e suspensão

Diante de suspeita de comprometimento, excesso de permissão, vazamento entre clientes, uso indevido ou perda de controle, deverá ser priorizada a contenção.

A contenção poderá incluir:

- suspensão da identidade;
- revogação de sessões;
- bloqueio de conta;
- suspensão do Helpper;
- interrupção de integrações;
- preservação de evidências;
- revisão de permissões;
- comunicação ao responsável;
- aplicação do playbook de incidente.

A retomada dependerá de investigação suficiente, correção, validação e aprovação.

## Exceções

Exceções deverão ser temporárias, justificadas, aprovadas e rastreáveis.

Toda exceção deverá registrar:

- regra excepcionada;
- motivo;
- risco;
- responsável;
- aprovador;
- escopo;
- validade;
- controle compensatório;
- plano de encerramento.

Exceção expirada deverá ser revogada ou submetida a nova aprovação.

## Responsabilidades

### CEO ou autoridade executiva

- aprovar políticas, exceções relevantes, perfis administrativos e riscos residuais;
- definir autoridades de Victor, Filipe e demais perfis executivos;
- decidir sobre criação de perfis reais e ativação de Helppers.

### Gestor ou owner

- justificar necessidade;
- definir escopo;
- revisar acessos;
- solicitar suspensão ou revogação;
- acompanhar mudanças de função e desligamentos.

### Revisor ou aprovador

- verificar identidade, escopo, risco, validade e segregação de funções;
- rejeitar solicitações incompletas ou excessivas;
- registrar decisão e condições.

### Administrador técnico

- implementar somente acessos aprovados;
- preservar rastreabilidade;
- aplicar revogações;
- não ampliar escopo por iniciativa própria.

### Pessoa vinculada

- utilizar acessos somente para finalidades autorizadas;
- proteger contas e sessões;
- comunicar incidentes, mudanças de função ou perda de dispositivo;
- não compartilhar credenciais.

### Helpper ou agente

- operar dentro do contexto delegado;
- respeitar bloqueios, aprovações e limites;
- interromper execução diante de ambiguidade, risco ou autorização insuficiente;
- registrar ação e resultado quando aplicável.

## Relação com documentos anteriores

Esta política complementa, sem substituir silenciosamente, a arquitetura e as políticas aprovadas pelas tasks 029, 030 e 031.

`Template-perfil-usuario-e-Helpper-individual.md` permanece válido.

Os templates separados de perfil de colaborador e Helpper individual serão especializações documentais mais granulares.

Em caso de conflito, aplicar a precedência institucional já aprovada no Monvi Brain.

## Limites de implementação

Esta política é documental e não comprova implementação de:

- autenticação;
- autorização;
- MFA;
- RBAC;
- ABAC;
- sessões;
- provedor de identidade;
- banco de dados;
- auditoria técnica;
- agentes em produção;
- integrações ativas.

## Critérios para aprovação

Esta política poderá ser aprovada quando:

- estiver compatível com canonical e arquiteturas aprovadas;
- não reduzir regras das tasks 029, 030 e 031;
- distinguir pessoa, identidade, conta, função, papel, sessão e Helpper;
- definir estados e transições;
- limitar o Helpper à autoridade da pessoa vinculada;
- definir memória por escopo;
- documentar onboarding, mudança, suspensão, revogação e offboarding;
- tratar isolamento entre clientes;
- tratar privacidade, auditoria, incidentes e exceções;
- deixar explícito que documentos não concedem acesso técnico;
- receber aprovação do CEO.

## Estado de implementação

status documental: em revisão.

implementação técnica: não iniciada por esta task.

perfis reais criados: nenhum.

Helppers individuais ativados: nenhum.
