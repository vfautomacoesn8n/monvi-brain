---
id: task-2026-045
title: Correção, trava de segurança e validação factual por evidências das Fases 3 e 4
type: task
status: draft
task_state: active
owner: ceo-monvi
agent: antigravity
reviewer: ceo-monvi
active_client: null
active_project: null
requires_review: true
confidentiality: internal
classification: internal
created_at: "2026-07-31"
updated_at: "2026-07-31"
reviewed_at: null
version: "0.1.0"
allowed_paths:
  - 00_SYSTEM/tasks/active/TASK-2026-045-correcao-e-validacao-factual-fases-3-e-4.md
  - 00_SYSTEM/tasks/done/TASK-2026-045-correcao-e-validacao-factual-fases-3-e-4.md
  - 03_OPERATIONS/decisoes/decision-20260731-plano-correcao-e-validacao-fases-3-e-4.md
  - 00_SYSTEM/audits/Execucao-task-2026-045-correcao-e-validacao-factual-fases-3-e-4.md
  - 00_SYSTEM/logs/changes.jsonl
  - 00_SYSTEM/logs/decisions.jsonl
  - apps/core-brain/src/http/routes/auth.ts
  - apps/core-brain/tests/auth.test.ts
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/policies/
  - 00_SYSTEM/schemas/
  - 00_SYSTEM/templates/
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
  - 00_SYSTEM/architecture/
  - 00_SYSTEM/tasks/done/
  - 01_RAW/
  - 02_WIKI/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 01_RAW/
  - 05_SHARED/
tags:
  - core-brain
  - mvp
  - auth
  - rbac
  - security
  - testing
  - evidence
  - fase-3
  - fase-4
acceptance_criteria:
  - Trava de ambiente implementada na rota `/api/v1/auth/dev-login` bloqueando execuções quando `NODE_ENV === 'production'` com retorno `403 Forbidden`.
  - Suíte de testes automatizados expandida em `apps/core-brain/tests/auth.test.ts` cobrindo negação RBAC `403 Forbidden` (`requirePermission` e `requireRole`), acesso autorizado `200 OK`, bloqueio dev-login em produção e revogação de sessão por logout.
  - Validação de compilação de código (`npm run typecheck`), testes de unidade/integração (`npm run test`) e build de produção (`npm run build`) concluídos com 100% de sucesso.
  - Relatório factual de audit gerado e publicado em `00_SYSTEM/audits/Execucao-task-2026-045-correcao-e-validacao-factual-fases-3-e-4.md`.
  - Transição de logs em `changes.jsonl` e `decisions.jsonl` mantendo rastreabilidade 100% válida.
blocked_reason: "Esta task autoriza apenas a implementação da trava de segurança no dev-login e a ampliação da suíte de testes de autenticação/autorização sem dependência de banco de dados. Deploy em produção e acesso a credenciais reais permanecem estritamente bloqueados."
---

# Task 045 — Correção, trava de segurança e validação factual por evidências das Fases 3 e 4

## Natureza e objetivo

Esta task é de natureza **D. Implementação técnica** e **G. Segurança**, criada para suprir as lacunas de teste e de controle de ambiente identificadas durante a auditoria factual das Fases 3 e 4 do **Monvi Core Brain MVP**.

Seu objetivo é:
1. Adicionar uma trava de segurança explícita na rota `/auth/dev-login` para impedir a criação de sessões dev em ambiente de produção (`NODE_ENV === 'production'`);
2. Expandir a suíte de testes automatizados (`tests/auth.test.ts`) para incluir testes de negação RBAC (`403 Forbidden`), acesso concedido (`200 OK`), logout e bloqueio de ambiente;
3. Prover comprovação técnica auditável antes do avanço para a Fase 5 do Plano Mestre.

---

## Escopo Autorizado

1. **Segurança de Endpoints**:
   - Modificação de `apps/core-brain/src/http/routes/auth.ts` para verificar `NODE_ENV === 'production'` e retornar `403 Forbidden` se invocado fora do ambiente de desenvolvimento/teste.
2. **Suíte de Testes Automatizados**:
   - Atualização de `apps/core-brain/tests/auth.test.ts` para testar `requirePermission` (`403`), `requireRole` (`403`), bloqueio de `dev-login` em `production` (`403`), acesso autorizado (`200`) e encerramento de sessão (`logout`).
3. **Auditoria e Logs**:
   - Atualização dos registros de eventos em `00_SYSTEM/logs/changes.jsonl` e `00_SYSTEM/logs/decisions.jsonl`.
   - Geração do relatório de audit em `00_SYSTEM/audits/Execucao-task-2026-045-correcao-e-validacao-factual-fases-3-e-4.md`.

---

## Fora do Escopo e Bloqueios

- Nenhum deploy em homologação ou produção.
- Nenhuma alteração nas tabelas de produção ou credenciais reais.
- Nenhuma modificação nos schemas Drizzle existentes da Fase 3.
