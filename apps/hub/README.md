# Monvi Hub

Painel interno (frontend) do Monvi Brain, autorizado pela Task 094 (Fase transversal — ver seção 21 do [Plano Mestre](../../00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md)). Até esta task, todo o projeto era 100% API (`apps/core-brain`), sem nenhuma tela.

## Escopo desta primeira fatia — só leitura

- login via `POST /auth/dev-login` (mesmo mecanismo de desenvolvimento já usado nos testes de integração de `apps/core-brain`, bloqueado em produção);
- dashboard comercial (`GET /commercial/dashboard`);
- dashboard de automações (`GET /automations/dashboard`);
- dashboard de projeto, com uma lista de projetos para escolher (`GET /projects`, `GET /projects/:id/dashboard`).

Nenhuma ação de escrita, nenhuma tela de CRUD completo, nenhuma rota nova no backend. O hub roda localmente, exatamente como `apps/core-brain` — sem deploy, sem decisão de infraestrutura.

## Stack

React + TypeScript + Vite, sem biblioteca de componentes (CSS puro nesta fatia). `fetch` nativo para chamar a API (sem `axios`). Testes com Vitest + React Testing Library.

## Rodando localmente

Pré-requisito: `apps/core-brain` rodando em `http://127.0.0.1:3000` (`npm run dev`, na pasta `apps/core-brain`), com `HUB_ORIGIN` apontando para a origem deste app (padrão `http://localhost:5173`, já compatível com a porta padrão do Vite — nenhuma configuração adicional necessária em desenvolvimento).

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`. Login: qualquer e-mail (mecanismo de desenvolvimento — cria uma pessoa/identidade sintética se não existir).

Variável de ambiente opcional: `VITE_API_BASE_URL` (padrão `http://127.0.0.1:3000/api/v1`) — ver `.env.example`.

## Testes e build

```bash
npm run typecheck
npm test
npm run build
```

## Fora de escopo (deliberadamente, nesta fatia)

Qualquer tela de escrita (criar/editar/excluir), autenticação de produção real, deploy.

## Validação end-to-end

Durante o desenvolvimento inicial desta fatia (Task 094), a validação com login real não foi possível por falta de um Postgres local (mesma limitação da Parte B documentada no Plano Mestre) — a verificação feita foi só de wiring. Isso foi resolvido logo em seguida (Task 095, mesmo dia): com um Postgres local real rodando, login e os três dashboards foram exercitados de ponta a ponta com sucesso, incluindo a partir da origem exata deste app (`http://localhost:5173`). Ver a seção "Parte B" do [Plano Mestre](../../00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md) para os detalhes de como o Postgres local foi configurado (sem Docker, sem admin).
