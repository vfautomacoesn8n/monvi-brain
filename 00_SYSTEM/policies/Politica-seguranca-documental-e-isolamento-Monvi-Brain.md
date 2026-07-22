---
id: policy-monvi-brain-document-security-isolation
title: Política de segurança documental e isolamento do Monvi Brain
type: policy
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
classification: internal
source_task: task-2026-032
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
version: "0.1.0"
tags:
  - monvi-brain
  - seguranca
  - isolamento
  - clientes
related:
  - policy-monvi-brain-source-of-truth-conflict-resolution
---

# Política de segurança documental e isolamento do Monvi Brain

## Objetivo

Proteger informações institucionais, pessoais e de clientes dentro do Monvi Brain.

## Princípios

- menor privilégio;
- necessidade de saber;
- segregação por cliente;
- rastreabilidade;
- supervisão humana;
- ausência de secrets;
- retenção mínima necessária;
- revisão antes de promoção.

## Classificações

- public;
- internal;
- confidential;
- restricted.

## Conteúdo proibido

Não armazenar no vault:

- senhas;
- tokens;
- chaves privadas;
- secrets de API;
- códigos de recuperação;
- cookies de sessão;
- credenciais de banco;
- dados de autenticação;
- documentos pessoais sem finalidade e autorização;
- dados sensíveis desnecessários.

## Conteúdo de cliente

Todo documento de cliente deve possuir:

```yaml
active_client:
classification:
owner:
reviewer:
```

Quando aplicável:

```yaml
active_project:
```

## Isolamento

- dados de um cliente não podem aparecer em outro;
- templates devem ser limpos antes de reutilização;
- exemplos devem usar dados fictícios ou autorizados;
- consultas não podem misturar escopos;
- mapas institucionais não devem expor conteúdo confidencial;
- memória individual não vira institucional automaticamente.

## RAW

`01_RAW` é globalmente somente leitura para agentes e automações estruturais.

Material em RAW:

- não deve ser reescrito;
- não deve ser considerado aprovado;
- deve ser referenciado por manifesto;
- deve preservar origem.

## Canonical

`00_SYSTEM/canonical` exige autorização explícita.

Nenhuma rotina de correção massiva pode alterar canonical.

## Compartilhamento

Antes de compartilhar:

- validar classificação;
- remover secrets;
- verificar dados pessoais;
- verificar cliente;
- verificar contrato;
- registrar aprovação quando necessário;
- usar canal autorizado.

## Exportação

Exportações devem:

- ter finalidade;
- ter owner;
- ter escopo;
- ter classificação;
- ter destino autorizado;
- respeitar retenção;
- evitar cópias permanentes desnecessárias.

## Incidente documental

Incidente inclui:

- vazamento;
- mistura entre clientes;
- secret encontrado;
- compartilhamento indevido;
- documento crítico alterado sem aprovação;
- perda de rastreabilidade;
- exclusão indevida.

Ações mínimas:

1. suspender compartilhamento;
2. preservar evidência;
3. identificar escopo;
4. notificar owner;
5. avaliar impacto;
6. remover exposição;
7. registrar decisão;
8. revisar controle.

## Escrita por agentes

Agentes devem respeitar:

- allowed paths;
- read-only paths;
- forbidden paths;
- um escritor estrutural por vez;
- revisão obrigatória;
- staging controlado;
- rollback;
- isolamento por cliente.

## Critérios de aprovação

- classificações validadas;
- conteúdo proibido validado;
- isolamento por cliente validado;
- RAW protegido;
- canonical protegido;
- compartilhamento e exportação governados;
- incidentes documentais definidos;
- escrita por agentes compatível com as políticas existentes.
