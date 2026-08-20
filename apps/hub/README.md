# Monvi Hub

Painel interno (frontend) do Monvi Brain, autorizado pela Task 094 (Fase transversal — ver seção 21 do [Plano Mestre](../../00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md)). Até esta task, todo o projeto era 100% API (`apps/core-brain`), sem nenhuma tela. A Task 097 (2026-08-20) alinhou o visual à identidade oficial da marca Monvi, sem adicionar nenhuma tela ou funcionalidade nova. A Task 098 (2026-08-20) trocou o tema único do hub para modo escuro premium, usando exclusivamente as cores oficiais do manual recombinadas — nenhuma cor nova, nenhuma funcionalidade nova. A Task 099 (2026-08-20) substituiu a navegação por cards na tela de Início por uma sidebar fixa à esquerda, inspirada numa imagem de referência enviada pelo CEO — mesmas quatro views já existentes, sem nenhuma rota ou tela nova.

## Escopo desta primeira fatia — só leitura

- login via `POST /auth/dev-login` (mesmo mecanismo de desenvolvimento já usado nos testes de integração de `apps/core-brain`, bloqueado em produção);
- dashboard comercial (`GET /commercial/dashboard`);
- dashboard de automações (`GET /automations/dashboard`);
- dashboard de projeto, com uma lista de projetos para escolher (`GET /projects`, `GET /projects/:id/dashboard`).

Nenhuma ação de escrita, nenhuma tela de CRUD completo, nenhuma rota nova no backend. O hub roda localmente, exatamente como `apps/core-brain` — sem deploy, sem decisão de infraestrutura.

## Stack

React + TypeScript + Vite. `fetch` nativo para chamar a API (sem `axios`). Testes com Vitest + React Testing Library.

**Identidade visual (Task 097)**: Tailwind CSS v4 + componentes no padrão shadcn/ui (copiados para `src/components/ui/`, não instalados como pacote — você é dono do código). Paleta, tipografia e grid seguem o **Manual da Marca Monvi V1.0** (`01_RAW/monvi/Monvi - Manual da marca.pdf`, seção visual 8-11):

| Token | Hex | Uso |
| --- | --- | --- |
| `graphite` | `#424242` | texto, base neutra |
| `off-white` | `#F5F5F3` | fundo |
| `signal-blue` | `#1A4AFF` | ações, links, destaques |
| `deep-graphite` | `#2B2B2B` | apoio |
| `medium-gray` | `#9A9A97` | apoio |
| `light-gray` | `#E4E3DF` | apoio |

Tipografia: Inter (corpo) e IBM Plex Mono (números e dados de tabela) — as duas famílias oficiais do manual, auto-hospedadas via `@fontsource` (sem CDN externo). Ícones: `lucide-react` (traço fino, geométrico — compatível com a orientação de iconografia do manual). **Sem logo real ainda** — o manual é um PDF sem camada vetorial, e nenhum arquivo de logo oficial foi localizado no repositório; o hub usa por enquanto só o wordmark "MONVI" em texto (`src/components/Wordmark.tsx`), substituível quando o arquivo original existir. Todo esse material de marca está com `status: review` nos metadados da Wiki (nunca formalmente aprovado) — o CEO autorizou o uso para esta primeira versão do hub, com alinhamento contínuo esperado.

**Modo escuro premium (Task 098)**: o CEO pediu algo "visualmente mais premium", com uma imagem de referência de um dashboard cripto/Web3 em modo escuro (fundo quase preto, glow em verde atrás dos números, cards ricos, badges). Optamos por manter a técnica (modo escuro, glow, cards com profundidade, badges/pills) mas remapear as cores para a paleta oficial da Monvi — sem introduzir nenhuma cor nova:

| Papel visual | Token | Uso na Task 097 (claro) | Uso na Task 098 (escuro) |
| --- | --- | --- | --- |
| Fundo da página | `deep-graphite` | apoio | fundo principal |
| Fundo dos cards | `graphite` | texto | fundo dos cards (mais claro que o da página — cria profundidade) |
| Texto principal | `off-white` | fundo | texto principal |
| Destaque/glow | `signal-blue` | ações, links, destaques | único acento — inclusive um glow sutil (`CardGlow`) atrás dos números principais dos cards, no lugar do verde da referência |
| Texto secundário | `medium-gray` | apoio | apoio (rótulos, labels de card) |

O modo escuro passou a ser o único tema do hub (não é um toggle claro/escuro — é a nova aparência padrão). Não foi replicado o gráfico de tendência histórica da imagem de referência: a API do hub só expõe contagens do momento atual (sem série temporal), e inventar dados fictícios para preencher um gráfico teria sido fabricar informação — decisão deliberada de não fazer isso.

**Sidebar de navegação (Task 099)**: o CEO revisitou a mesma imagem de referência da Task 098 e pediu uma reformulação estrutural — "um hub com abas laterais, opções que fazem sentido com a Monvi". A referência usa uma sidebar estreita só com ícones; propus ícone + texto (mais claro para um hub interno de poucos usuários) e o CEO confirmou. `src/components/Sidebar.tsx` (novo): sidebar fixa à esquerda (~224px, `w-56`), com o wordmark no topo, os quatro itens reais do hub (Início/`Home`, Comercial/`TrendingUp`, Automações/`Workflow`, Projetos/`Briefcase`) com destaque no item ativo (`bg-signal-blue/10 text-signal-blue`), e "Sair" fixado no rodapé. O cabeçalho horizontal anterior (`App.tsx`) foi removido — a sidebar assume a navegação principal. A tela de Início deixa de ser a única forma de navegar e passa a ser um atalho rápido complementar (mesmos três cards da Task 097/098, só com o texto ajustado). Nenhuma rota nova, nenhum `react-router` (mesmo controle de estado por `HubView` de antes), nenhuma cor nova.

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
