---
id: contract-api-core-brain-mvp
title: Especificação do contrato de API do Monvi Core Brain MVP
type: architecture_spec
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
confidentiality: internal
classification: internal
created_at: "2026-07-31"
updated_at: "2026-07-31"
reviewed_at: "2026-07-31"
version: "1.0.0"
task_id: task-2026-041
sources:
  - 00_SYSTEM/tasks/active/TASK-2026-041-fundacao-core-brain-mvp.md
  - 00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md
  - 00_SYSTEM/canonical/AI-CONTRACT.md
  - 00_SYSTEM/canonical/PERMISSIONS.md
  - 00_SYSTEM/canonical/SECURITY.md
  - 03_OPERATIONS/decisoes/decision-20260730-etapa-1-tecnica-core-brain.md
related:
  - 00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md
tags:
  - core-brain
  - api
  - contrato
  - rest
  - fastify
  - mvp
---

# Especificação do contrato de API do Monvi Core Brain MVP

## Natureza do documento

Este documento define os padrões formais de contrato da API HTTP/REST do Monvi Core Brain.

> Este documento é exclusivamente conceitual e contratual. Não autoriza a criação ou modificação de endpoints em código em `apps/core-brain/` além dos endpoints `/health` e `/ready` já aceitos na Etapa 1.

---

## 1. Padrões Universais da API

### 1.1. Base URL e Versionamento
- Todos os endpoints da aplicação devem ser expostos sob o prefixo de versão `/api/v1`.
- Exemplo: `https://brain.monvi.com.br/api/v1/health`

### 1.2. Cabeçalhos Padrão (Headers)
- `Content-Type`: `application/json; charset=utf-8` (obrigatório para requisições com corpo).
- `Accept`: `application/json`.
- `X-Request-ID`: String de UUIDv4 gerada pelo cliente ou injetada pelo gateway para correlação de logs de ponta a ponta.
- `X-Idempotency-Key`: Obrigatório em requisições de mutação crítica (`POST`, `PUT`, `PATCH`) para prevenir execuções duplicadas acidentais.

---

## 2. Formato Padrão de Respostas

### 2.1. Resposta de Sucesso (`2xx`)
Todas as respostas de sucesso retornam o envelope padrão contendo `success: true`, o payload sob `data` e metadados sob `meta` (quando aplicável).

```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2026-07-31T11:40:00.000Z"
  },
  "meta": {
    "version": "0.1.0",
    "request_id": "req-f47ac10b-58cc-4372-a567-0e02b2c3d479"
  }
}
```

### 2.2. Resposta de Sucesso com Paginação (Listas)
```json
{
  "success": true,
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "Cliente Exemplo Ltda"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 20,
      "total_items": 1,
      "total_pages": 1,
      "has_next": false,
      "has_prev": false
    },
    "request_id": "req-f47ac10b-58cc-4372-a567-0e02b2c3d479"
  }
}
```

---

## 3. Tratamento Sanitizado de Erros

Em conformidade com as diretrizes de segurança da Monvi, a API nunca expõe stack traces, queries SQL brutas, mensagens de erro internas da linguagem ou dados de infraestrutura.

### 3.1. Envelope de Erro Padrão (`4xx` / `5xx`)
```json
{
  "success": false,
  "error": {
    "code": "BAD_REQUEST",
    "message": "A requisição contém dados inválidos ou malformados.",
    "details": [
      {
        "field": "email",
        "issue": "Formato de e-mail inválido."
      }
    ]
  },
  "request_id": "req-f47ac10b-58cc-4372-a567-0e02b2c3d479"
}
```

### 3.2. Códigos de Status HTTP e Códigos de Erro da Aplicação

| HTTP Status | Código da Aplicação | Descrição |
| --- | --- | --- |
| `200 OK` | `N/A` | Operação concluída com sucesso. |
| `201 Created` | `N/A` | Recurso criado com sucesso. |
| `400 Bad Request` | `BAD_REQUEST` / `VALIDATION_ERROR` | Falha na validação de entrada (Zod). |
| `401 Unauthorized` | `UNAUTHORIZED` | Ausência ou invalidade do token de autenticação. |
| `403 Forbidden` | `FORBIDDEN` | Autenticado, mas sem permissão no escopo solicitado. |
| `404 Not Found` | `NOT_FOUND` | Recurso não localizado ou desativado. |
| `409 Conflict` | `CONFLICT` | Violacao de restrição única (ex: e-mail já cadastrado). |
| `422 Unprocessable` | `UNPROCESSABLE_ENTITY` | Regra de negócio violada. |
| `429 Too Many Req` | `RATE_LIMIT_EXCEEDED` | Limite de taxa de requisições atingido. |
| `500 Internal Error`| `INTERNAL_SERVER_ERROR` | Erro interno sanitizado logado com `request_id`. |

---

## 4. Endpoints Atuais Implementados (Etapa 1)

Os únicos dois endpoints ativos e implementados no backend `apps/core-brain` nesta fase do MVP são:

### 4.1. `GET /api/v1/health`
- **Finalidade**: Verificar se o processo Node.js/Fastify está respondendo.
- **Autenticação**: Nenhuma (público para monitoramento).
- **Resposta `200 OK`**:
```json
{
  "status": "ok",
  "timestamp": "2026-07-31T11:40:00-03:00",
  "uptime": 124.5
}
```

### 4.2. `GET /api/v1/ready`
- **Finalidade**: Validar a prontidão dos componentes e variáveis de ambiente configuradas.
- **Autenticação**: Nenhuma.
- **Resposta `200 OK`**:
```json
{
  "status": "ready",
  "checks": {
    "environment": "healthy",
    "logger": "healthy"
  }
}
```

---

## 5. Proposta de Grupos de Endpoints Futuros (Apenas Conceitual)

*Nenhum destes endpoints está implementado ou autorizado para criação nesta task.*

- `POST /api/v1/auth/login` (Futuro login via Identity Gateway OAuth)
- `POST /api/v1/auth/logout` (Futura revogação de sessão)
- `GET /api/v1/persons/me` (Futuro perfil do usuário autenticado)
- `GET /api/v1/clients` (Futura listagem de clientes autorizados)
- `GET /api/v1/projects` (Futura listagem de projetos por cliente)
- `POST /api/v1/brain/query` (Futura consulta controlada de conhecimento com autorização de escopo)

---

## 6. Segurança e Limites de Responsabilidade

1. **Validação Estrita via Zod**: Todos os payloads e query parameters de requisições serão validados por esquemas Zod estritos no gateway HTTP.
2. **Sanitização de Headers de Autorização**: O token JWT (`Authorization: Bearer <token>`) nunca deve aparecer nos logs da aplicação.
3. **Limitação de Escopo**: Endpoints futuros de dados exigirão a validação do par (`person_id`, `client_id`) antes do retorno de qualquer informação.
