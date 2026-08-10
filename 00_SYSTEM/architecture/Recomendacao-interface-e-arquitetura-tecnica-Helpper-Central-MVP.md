---
id: architecture-proposal-interface-helpper-central-mvp
title: Recomendação de interface e arquitetura técnica do MVP do Helpper Central
type: architecture_proposal
status: draft
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
confidentiality: internal
classification: internal
created_at: "2026-08-05"
updated_at: "2026-08-05"
reviewed_at: null
requires_review: true
version: "0.1.0"
decision_state: pending
implementation_authorized: false
task_id: task-2026-047
sources:
  - 00_SYSTEM/architecture/Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md
  - 00_SYSTEM/architecture/Arquitetura-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Contrato-API-Core-Brain-MVP.md
  - 00_SYSTEM/architecture/Modelo-dados-Core-Brain-MVP.md
  - 00_SYSTEM/policies/Politica-seguranca-documental-e-isolamento-Monvi-Brain.md
  - 00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md
  - 00_SYSTEM/canonical/SECURITY.md
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
related:
  - 00_SYSTEM/tasks/active/TASK-2026-047-arquitetura-e-especificacao-do-helpper-central.md
  - 00_SYSTEM/architecture/Fluxo-operacional-e-papel-Helpper-Central.md
  - 00_SYSTEM/architecture/Contrato-executor-controlado-Helpper-Central.md
  - 00_SYSTEM/architecture/Backlog-priorizado-Helpper-Central-e-criterios-Task-048.md
tags: [helpper, helpper-central, mvp, interface, arquitetura-tecnica, proposta]
---

# Recomendação de interface e arquitetura técnica do MVP do Helpper Central

## Natureza do documento

Este documento é uma **proposta técnica** submetida à revisão do CEO, no mesmo espírito de `Arquitetura-Core-Brain-MVP.md`. Ele não autoriza criação de interface, backend, integração, banco de dados, dependência ou credencial. A implementação somente poderá começar após aprovação humana explícita, registro de decisão e uma futura task técnica — nunca a partir deste documento isoladamente.

## 1. Alternativas de interface

| Alternativa | Velocidade de implantação | Facilidade de uso pelo CEO | Supervisão humana | Rastreabilidade | Segurança | Isolamento | Custo | Manutenção | Extensibilidade | Dependência de fornecedor | Integração com o Monvi Brain |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Chat (dentro de um assistente já em uso, ex. Claude) | Alta — nenhuma infraestrutura nova | Alta — fluxo já natural para o CEO | Alta — cada ação já passa por gate textual explícito | Alta — histórico de conversa + Git como fonte de verdade | Depende da política de dados do provedor do chat; mitigável mantendo secrets fora do chat | Requer disciplina de isolar contexto por cliente em conversas separadas | Baixo — sem infraestrutura dedicada | Baixo — nenhum código de interface para manter | Baixa a média — depende das capacidades do host de chat | Alta — acoplado ao provedor de chat escolhido | Indireta — via Git e leitura de arquivos do repositório |
| CLI | Alta — reaproveita Git e terminal já usados nesta sessão | Média — exige familiaridade com linha de comando | Alta — gates continuam textuais e explícitos | Alta — mesma base Git | Alta — superfície de ataque mínima | Fácil — escopo por sessão/terminal | Baixo | Baixo a médio | Média | Baixa — não depende de fornecedor de IA específico | Direta — pode rodar dentro do próprio repositório |
| Aplicação web dedicada | Baixa — exige backend, frontend, hospedagem, autenticação real | Alta, uma vez pronta | Depende de implementação — precisa recriar os gates hoje textuais | Depende de implementação de auditoria própria | Depende inteiramente da implementação (superfície nova de ataque) | Requer modelo de dados e RBAC reais (`Modelo-dados-Core-Brain-MVP.md`) | Alto | Alto | Alta, a longo prazo | Baixa, se bem projetada | Direta e nativa, mas exige que o Core Brain já exista tecnicamente |
| Integração nativa no Cursor | Alta — reaproveita o ambiente já usado nesta sessão | Alta para uso técnico; média para uso não técnico | Alta — mesma disciplina de gates textuais | Alta — mesma base Git | Alta, dentro do modelo de permissões do IDE | Fácil, por workspace/projeto | Baixo | Baixo | Média | Alta — acoplado ao Cursor | Direta |
| Modelo híbrido (chat/CLI/Cursor como front-ends leves sobre o mesmo fluxo de gates e o mesmo repositório) | Alta — não exige esperar por nenhuma das opções pesadas | Alta — CEO escolhe o canal mais conveniente por situação | Alta — mesmo modelo de gates independente do canal | Alta — todos os canais convergem para o mesmo Git | Alta, se cada canal seguir as mesmas regras de segurança | Fácil, por canal e por sessão | Baixo | Baixo a médio | Alta | Baixa — nenhum canal é estruturalmente obrigatório | Direta, com Git como ponto de convergência |

Critérios aplicados, consistentes com o item 9 do escopo da Task 047: velocidade de implantação, facilidade de uso pelo CEO, supervisão humana, rastreabilidade, custo, manutenção e segurança; extensibilidade, dependência de fornecedor e integração com o Monvi Brain foram acrescentados por serem diretamente relevantes à decisão de arquitetura técnica que acompanha a recomendação de interface.

## 2. Recomendação

### 2.1 Solução de entrada recomendada para o MVP

**Modelo híbrido**, com o fluxo de gates e o repositório Git como núcleo estável, e chat/CLI/Cursor como front-ends leves e substituíveis sobre esse núcleo — o mesmo padrão já demonstrado na execução completa da Task 047 nesta sessão, sem exigir nenhuma infraestrutura nova.

Justificativa: é a única alternativa que já opera hoje, sem esperar por implementação; preserva rastreabilidade total via Git; mantém baixo custo e baixa dependência estrutural de um único fornecedor (consistente com a decisão de `executor controlado` registrada em `Contrato-executor-controlado-Helpper-Central.md`); e não força uma escolha prematura de interface definitiva antes de haver evidência de uso real.

### 2.2 Interfaces futuras

Aplicação web dedicada e integração nativa aprofundada permanecem candidatas de médio a longo prazo, condicionadas à existência de um Core Brain tecnicamente operante (Fases 2 a 4 do Plano Mestre) e a demanda comprovada que justifique o custo adicional — mesmo critério de evolução já registrado em `Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md`, seção 29.3.

### 2.3 O que não deve entrar no MVP

- backend dedicado exclusivo do Helpper Central;
- autenticação própria distinta da já prevista para o Core Brain;
- banco de dados dedicado ao Helpper Central;
- interface gráfica própria;
- qualquer mecanismo de memória persistente automática (fora de escopo desta task, ver Documento 2, seção 5).

## 3. Arquitetura técnica conceitual

Descrição conceitual, sem código ou implementação:

| Camada | Função | Análogo já aprovado no ecossistema |
|---|---|---|
| Camada de interface | Recebe a demanda do CEO em qualquer canal do modelo híbrido | `Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md`, seção 5.5 ("Interfaces") |
| Orquestrador Helpper Central | Aplica o fluxo do Documento 1 (interpretação, classificação, plano, gate) | Papel "Helpper Core" já definido em `Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md` |
| Resolvedor de contexto | Aplica a hierarquia de contexto (Documento 1, seção 3) e resolve `active_client`/`active_project` | Fluxo de leitura de `Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md`, seção 10 |
| Leitor de fontes canônicas | Consulta `00_SYSTEM/canonical/`, `policies/`, `architecture/`, task ativa e histórico | Já operante nesta própria sessão, via leitura de arquivos e Git |
| Motor de planejamento | Produz diagnóstico e plano antes de qualquer escrita | Gate A ("proposta") do Plano Mestre, seção 9 |
| Gerador de tasks e prompts | Cria o arquivo de task e o envelope de execução do Documento 2 | Gate B ("autorização") do Plano Mestre, seção 9 |
| Controlador de gates | Garante que nenhuma etapa avance sem frase literal de autorização | `00_SYSTEM/helpper/TASK-LIFECYCLE.md` e `PROMPT-TEMPLATES.md` |
| Adaptadores de executor | Implementações específicas do contrato do Documento 2, seção 4 | Documento 2, seção 4 |
| Coletor de evidências | Recebe e organiza o reporte do Documento 2, seção 6 | Gate C ("implementação") do Plano Mestre, seção 9 |
| Validador | Confere UTF-8, whitespace, exclusividade de paths, contagens, `git diff --check` | Já demonstrado nesta sessão em cada gate de validação |
| Registro de auditoria | `00_SYSTEM/logs/changes.jsonl` e histórico Git | Já operante; nenhuma persistência nova é criada |
| Mecanismo conceitual de isolamento | Um contexto de cliente por vez, chats/threads exclusivos | Documento 1, seção 4 |
| Armazenamento futuro, se necessário | Não avaliado nesta proposta; depende de decisão futura sobre memória institucional além do Git | Fase 7 do Plano Mestre ("Conhecimento, documentos e memória") |

Nenhuma dessas camadas exige, para o MVP recomendado (seção 2.1), infraestrutura além do repositório Git já existente e de um executor controlado operando por chat, CLI ou Cursor.

## 4. Fluxo de dados

```text
Entrada: demanda em linguagem natural do CEO (chat, CLI ou Cursor)
   ↓
Camada de interface (canal escolhido pelo CEO)
   ↓
Orquestrador Helpper Central (interpretação e classificação)
   ↓
Resolvedor de contexto (active_client / active_project)
   ↓
Leitor de fontes canônicas (leitura read-only do repositório)
   ↓
Motor de planejamento (diagnóstico e plano — nenhuma escrita ainda)
   ↓
Gate humano (CEO aprova, corrige ou rejeita)
   ↓
Gerador de tasks e prompts (escrita restrita a allowed_paths da nova task)
   ↓
Adaptador de executor (implementação dentro do envelope)
   ↓
Coletor de evidências + Validador
   ↓
Gate humano (revisão de conteúdo e diff)
   ↓
Registro de auditoria (Git + changes.jsonl)
Saída: task encerrada, documentos ou código integrados em `main`, evidência auditável
```

Limites: nenhuma etapa grava fora de `allowed_paths` da task vigente; nenhuma etapa avança sem o gate correspondente; a saída nunca inclui secret, credencial ou dado de cliente não autorizado.

## 5. Segurança e privacidade

Aplicação ao MVP das regras já aprovadas, sem recriá-las:

- **mínimo acesso**: o executor recebe apenas os `allowed_paths`/`read_only_paths` do envelope vigente (Documento 2, seção 3);
- **segregação**: cada cliente opera em contexto isolado (Documento 1, seção 4); nenhuma interface do modelo híbrido deve permitir consulta cruzada entre clientes;
- **segredos**: nenhum canal do MVP armazena ou expõe secret, token ou credencial (`00_SYSTEM/canonical/SECURITY.md`); isso permanece válido mesmo se um canal futuro (aplicação web) vier a existir;
- **logs**: toda ação relevante é registrada em `changes.jsonl` e no histórico Git, sem dados sensíveis desnecessários, seguindo a mesma redação já aplicada em `Modelo-dados-Core-Brain-MVP.md` (seção 4, "Redação em Logs e Auditoria");
- **retenção**: enquanto o MVP operar apenas sobre Git, a retenção é a do próprio histórico do repositório; qualquer retenção adicional (ex. logs de chat de terceiros) depende de decisão futura e de análise LGPD específica;
- **dados de clientes**: nenhum dado real de cliente é necessário para operar o MVP conforme recomendado na seção 2.1;
- **supervisão**: proporcional ao risco, conforme `Politica-seguranca-supervisao-e-limites-Helpper.md` — toda ação crítica (Documento 1, seção 1.4) exige aprovação explícita, independentemente do canal usado;
- **falha segura**: qualquer divergência de HEAD, escopo ou gate interrompe o fluxo por padrão (negação por padrão), nunca prossegue "na dúvida".

## 6. Decisões adiadas

Registradas explicitamente como dependentes de uma futura Task 048 ou posterior, sem serem decididas por este documento:

- se e quando desenvolver uma aplicação web dedicada;
- se o Helpper Central deve ganhar acesso automatizado (sem intervenção manual de copiar/colar) a um ou mais dos canais do modelo híbrido;
- qual mecanismo, se algum, de memória institucional além do Git será adotado (Fase 7 do Plano Mestre);
- qual provedor de identidade e autenticação real será usado quando/se uma interface própria existir (já listado como decisão pendente em `Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md`, seção 27, e em `Arquitetura-Core-Brain-MVP.md`);
- integração do Helpper Central com o Core Brain técnico (depende da Fase 2 em diante do Plano Mestre já estarem implementadas, não apenas especificadas).

## 7. Critérios de aceite

- [ ] Ao menos cinco alternativas de interface comparadas pelos critérios exigidos pelo escopo da Task 047.
- [ ] Recomendação clara para o MVP, distinguindo o que entra e o que não entra.
- [ ] Arquitetura técnica conceitual descrita sem código, com paralelo explícito a componentes já aprovados no ecossistema.
- [ ] Fluxo de dados com entradas, saídas e limites explicitados.
- [ ] Segurança e privacidade tratadas sem introduzir novo mecanismo técnico não autorizado.
- [ ] Decisões explicitamente adiadas para a Task 048 ou posterior, sem autorizá-la.
- [ ] Nenhuma declaração de que a implementação já está aprovada.
