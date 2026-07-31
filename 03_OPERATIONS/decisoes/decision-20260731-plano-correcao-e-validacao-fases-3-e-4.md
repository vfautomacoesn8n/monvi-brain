---
id: decision-20260731-plano-correcao-e-validacao-fases-3-e-4
title: Plano de correção, trava de segurança e validação por evidências das Fases 3 e 4
type: decision
status: approved
decision_state: approved
owner: ceo-monvi
reviewer: ceo-monvi
confidentiality: internal
classification: internal
created_at: "2026-07-31"
updated_at: "2026-07-31"
reviewed_at: "2026-07-31T13:54:00-03:00"
task_id: task-2026-045
implementation_stage: stage-4.1
allowed_paths:
  - 03_OPERATIONS/decisoes/decision-20260731-plano-correcao-e-validacao-fases-3-e-4.md
  - 00_SYSTEM/tasks/active/TASK-2026-045-correcao-e-validacao-factual-fases-3-e-4.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/logs/decisions.jsonl
tags:
  - decision
  - security
  - testing
  - rbac
  - validation
  - fase-3
  - fase-4
---

# Decisão — Plano de correção, trava de segurança e validação por evidências das Fases 3 e 4

## Contexto

A auditoria técnica de evidências das Fases 3 e 4 revelou que, embora o código TypeScript, schemas Drizzle, migração SQL e middlewares de autenticação/autorização tenham sido criados, existem lacunas de segurança e de cobertura de testes que precisam ser sanadas antes da transição para a Fase 5 (Operação de clientes e projetos).

## Opção Proposta

Implementar uma task corretiva técnica (**Task 045**) com dois objetivos principais:
1. **Trava de Segurança na Rota `/auth/dev-login`**:
   - Garantir que a rota dev de login só possa ser executada quando `config.NODE_ENV !== 'production'`. Se a aplicação estiver rodando em ambiente de produção, a rota deve retornar HTTP `403 Forbidden` com mensagem sanitizada.
2. **Ampliação da Suíte de Testes Automatizados (`tests/auth.test.ts`)**:
   - Adicionar casos de teste automatizados para negação RBAC `403 Forbidden` (`requirePermission` e `requireRole`);
   - Adicionar teste para bloqueio do dev-login em ambiente de produção (`403 Forbidden`);
   - Adicionar teste para fluxo de logout e tentativa de reutilização de token revogado (`401 Unauthorized`).

## Consequências e Controles

- Mantém a aplicação 100% segura contra execução indevida de rotas dev em ambientes produtivos.
- Eleva a cobertura de testes da camada de segurança de 3 para 8+ cenários testados.
- Preserva todas as restrições canônicas de segurança (sem credenciais de produção, sem dados reais).
