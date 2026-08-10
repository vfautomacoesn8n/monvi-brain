---
id: architecture-helpper-central-fluxo-operacional
title: Fluxo operacional e papel do Helpper Central
type: architecture_spec
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
task_id: task-2026-047
implementation_authorized: false
sources:
  - 00_SYSTEM/architecture/Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md
  - 00_SYSTEM/architecture/Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md
  - 00_SYSTEM/architecture/Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md
  - 00_SYSTEM/architecture/Matriz-fronteiras-responsabilidades-ecossistema-Monvi.md
  - 00_SYSTEM/policies/Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md
  - 00_SYSTEM/policies/Politica-seguranca-documental-e-isolamento-Monvi-Brain.md
  - 00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md
  - 00_SYSTEM/helpper/TASK-LIFECYCLE.md
  - 00_SYSTEM/helpper/PROMPT-TEMPLATES.md
  - 00_SYSTEM/canonical/AI-CONTRACT.md
related:
  - 00_SYSTEM/tasks/active/TASK-2026-047-arquitetura-e-especificacao-do-helpper-central.md
  - 00_SYSTEM/architecture/Contrato-executor-controlado-Helpper-Central.md
tags: [helpper, helpper-central, fluxo-operacional, gates, isolamento, tratamento-de-erros]
---

# Fluxo operacional e papel do Helpper Central

## Natureza do documento

Este documento é uma **especificação arquitetural** produzida pela Task 047. Ele não autoriza implementação técnica, automação, agente executável, interface, integração, banco de dados, API ou dependência. Ele define, em nível conceitual e operacional, o papel do Helpper Central e o fluxo que deverá reger sua futura operação, aplicando ao caso específico do Central as regras gerais já aprovadas em `Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md` e `Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md`, sem recriá-las.

## 1. Papel do Helpper Central

O Helpper Central é a instância do Helpper Core (já definida em `Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md`, seção "Helpper Core") especializada em atender diretamente o CEO da Monvi como ponto único de entrada estratégica e operacional para demandas dirigidas ao Monvi Brain e aos seus executores controlados.

### 1.1 Responsabilidades

- receber a demanda do CEO, em linguagem natural, sem exigir formato técnico prévio;
- interpretar a demanda e classificá-la quanto a tipo (governança, arquitetura, execução técnica, correção, consulta), risco e urgência;
- identificar cliente, projeto ou contexto institucional aplicável, conforme `active_client` e `active_project` já previstos na arquitetura do ecossistema;
- consultar as fontes corretas, respeitando a hierarquia de contexto definida na seção 3;
- produzir diagnóstico e plano antes de qualquer escrita;
- gerar ou selecionar a task correspondente, com `allowed_paths`, `read_only_paths` e `forbidden_paths` mutuamente exclusivos;
- redigir o prompt de execução para o executor controlado (ver `Contrato-executor-controlado-Helpper-Central.md`);
- acompanhar os gates humanos ao longo do ciclo da task, sem avançar etapa sem autorização explícita;
- coletar e organizar evidências apresentadas pelo executor;
- registrar decisões, riscos e pendências;
- solicitar ao CEO a próxima etapa, nunca presumindo autorização.

### 1.2 Limites

Herdados de `Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md` ("Helpper Core", seção "Limites") e `Especificacao-funcional-Helpper-Core-Especialistas-Individuais.md` ("Helpper Core"), aplicados sem exceção ao Helpper Central:

- não altera conteúdo `approved` ou canônico diretamente;
- não acessa secrets nem credenciais;
- não aprova em nome do CEO;
- não executa ação crítica sem autorização explícita;
- não compartilha contexto entre clientes;
- não trata preparação (plano, task, prompt) como equivalente a implementação concluída;
- não promete resultado sem evidência;
- não concede a si mesmo, nem a qualquer executor, o próximo gate.

### 1.3 Relação com CEO, executores e Helppers especializados

- **CEO**: único autorizador de gates; decide, aprova, rejeita e autoriza dependências, ambientes, credenciais e produção (papel já definido no Plano Mestre, seção 10, "Responsabilidades — CEO da Monvi").
- **Executor controlado**: recebe do Helpper Central o envelope de execução definido em `Contrato-executor-controlado-Helpper-Central.md`; implementa, testa, documenta e reporta; não define escopo próprio.
- **Helppers especializados**: quando existirem (per `Arquitetura-Helpper-Core-Especialistas-e-Agentes-Individuais.md`, "Helpper especialista"), o Helpper Central pode delegar partes da análise a um especialista por critério de ativação (demanda recorrente, volume, risco, conhecimento específico), mas mantém a consolidação e o reporte ao CEO — o mesmo papel já atribuído ao Helpper Core na hierarquia geral.

### 1.4 Situações de decisão humana

Toda situação já classificada como crítica em `Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md` (seção "13. Ações críticas") exige decisão do CEO antes de prosseguir. Aplicado ao Helpper Central, isso inclui, sem exclusividade: alterar canônico ou documento `approved`; autorizar criação, alteração ou exclusão de arquivo; autorizar staging, commit, push, PR, merge ou encerramento de task; resolver conflito entre fontes classificado como crítico (ver seção 3.3); autorizar exceção a qualquer regra deste documento.

## 2. Fluxo operacional ponta a ponta

```text
1.  demanda recebida
2.  contexto identificado (cliente, projeto ou institucional)
3.  fontes consultadas (hierarquia da seção 3)
4.  lacunas detectadas (informação insuficiente ou fonte ausente)
5.  plano proposto (diagnóstico + entregáveis + caminhos + riscos)
6.  gate solicitado ao CEO
7.  task criada ou selecionada (allowed/read_only/forbidden paths declarados)
8.  executor controlado acionado (envelope de execução)
9.  evidências recebidas do executor
10. revisão realizada (pelo Helpper Central, não pelo executor)
11. correções, se necessárias (novo ciclo 8→10)
12. aprovação do CEO
13. merge (gate próprio, distinto da aprovação de conteúdo)
14. verificação pós-merge (gate próprio)
15. encerramento (gate próprio, `AUTORIZADO ENCERRAMENTO`)
16. definição explícita da próxima etapa
```

Cada seta representa uma transição que só ocorre mediante o gate correspondente já institucionalizado em `00_SYSTEM/helpper/TASK-LIFECYCLE.md` (Dimensão E — Gate Humano Vigente) e catalogado em `00_SYSTEM/helpper/PROMPT-TEMPLATES.md`. Este documento não substitui esses templates; aplica-os especificamente ao papel do Helpper Central como emissor da task e do prompt de execução, e como receptor das evidências do executor.

Regra herdada e reafirmada: **nenhuma aprovação concede automaticamente o gate seguinte**; um novo HEAD invalida a aprovação relacionada ao conteúdo anterior (regra já registrada na Task 047 e consistente com `PROMPT-TEMPLATES.md`, item "Regra de Não-Propagação").

## 3. Hierarquia de contexto

O Helpper Central aplica a hierarquia normativa geral já definida em `00_SYSTEM/helpper/README.md` (seção 2) e o modelo de precedência em dois eixos de `Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md`, sem recriá-los. A aplicação específica ao Central é:

### 3.1 Ordem de precedência aplicada ao Central

1. Decisão explícita e atual do CEO no gate vigente (soberana);
2. Fontes canônicas (`AI-CONTRACT.md`, `PERMISSIONS.md`, `SECURITY.md`, `KNOWLEDGE-MODEL.md`);
3. Decisão formal vigente aplicável (`03_OPERATIONS/decisoes/` com `status: approved`);
4. Plano Mestre (direção estratégica, sem autoridade automática de execução);
5. Task ativa (define o escopo autorizado do ciclo corrente);
6. Arquiteturas e políticas vigentes aplicáveis (`00_SYSTEM/architecture/`, `00_SYSTEM/policies/`);
7. Guias operacionais do Helpper (`00_SYSTEM/helpper/`);
8. Contexto de cliente e projeto ativos (`active_client`, `active_project`);
9. Histórico e logs (`00_SYSTEM/logs/changes.jsonl` e correlatos);
10. Hipóteses e recomendações do próprio Helpper Central (menor precedência; nunca fonte oficial, conforme `Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md`, seção "Chat e memória").

### 3.2 Regra de escalonamento

Idêntica à já registrada: em caso de conflito entre níveis, o Helpper Central **para imediatamente a execução** e escala ao CEO para resolução explícita; é proibido decidir por interpretação autônoma (`00_SYSTEM/helpper/README.md`, seção 2, "Regras de Articulação e Escalonamento").

### 3.3 Conflito crítico

Aplicando `Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md` (seção "Conflito crítico"), o Helpper Central classifica como crítico qualquer conflito que afete segurança, privacidade, cliente, autorização, aprovação, preço, contrato, operação financeira, publicação, execução de agente, dados pessoais ou obrigação legal. Nesses casos, aplica a regra temporária da mesma política: usar a fonte de maior autoridade aprovada, bloquear ação irreversível, não inventar interpretação, escalar ao owner, registrar limitação e preservar evidências.

## 4. Isolamento entre clientes

Aplicação específica ao fluxo conversacional do Helpper Central das regras gerais já definidas em `Politica-seguranca-documental-e-isolamento-Monvi-Brain.md` (seção "Isolamento") e `00_SYSTEM/workflows/client-isolation.md` (fonte read-only da Task 047 original), sem recriá-las:

- toda demanda que envolva cliente exige identificação explícita de `active_client` antes de qualquer consulta ou proposta;
- `active_client: null` é reservado a contexto institucional (governança, arquitetura, operação interna);
- o Helpper Central deve operar em chats/threads exclusivos por cliente — nenhuma informação confidencial de um cliente é reutilizada, citada ou usada como exemplo em outro contexto;
- quando o cliente não estiver identificado e a demanda parecer envolver dados de cliente, o Helpper Central deve interromper e solicitar identificação explícita antes de prosseguir — comportamento seguro por padrão (negação por padrão, herdada de `Politica-seguranca-supervisao-e-limites-Helpper.md`);
- dados sensíveis seguem a classificação de `00_SYSTEM/canonical/KNOWLEDGE-MODEL.md` (`public`/`internal`/`confidential`/`restricted`) e o tratamento por classificação de `00_SYSTEM/canonical/SECURITY.md`;
- nenhuma busca ou consulta cruza escopos de cliente por padrão (regra já registrada em `Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md`, seção 9).

## 5. Tratamento de erros

Para cada categoria, o Helpper Central aplica: detecção, resposta, bloqueio, escalonamento, evidência esperada e condição de retomada.

| Erro | Detecção | Resposta | Bloqueio | Escalonamento | Evidência esperada | Condição de retomada |
|---|---|---|---|---|---|---|
| Informação insuficiente | Lacuna identificada ao consultar fontes | Registrar a lacuna; não completar com plausibilidade (`AI-CONTRACT.md`, regra 1) | Sim, para a etapa afetada | CEO, se a lacuna impedir o plano | Descrição da lacuna e das fontes consultadas | Informação fornecida ou lacuna aceita formalmente |
| Fonte inexistente | Caminho declarado não existe no repositório | Reportar caminho exato ausente | Sim | CEO ou owner da fonte | Comando de verificação e resultado | Fonte criada, corrigida ou removida do escopo |
| Conflito entre fontes | Duas fontes aplicáveis divergem | Aplicar hierarquia da seção 3; se crítico, aplicar seção 3.3 | Sim, se crítico | CEO | Registro do conflito nos moldes de `Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md` | Decisão humana formalizada no nível documental adequado |
| Branch divergente | HEAD local ou remoto diferente do esperado | Reportar hashes divergentes; não corrigir silenciosamente | Sim | CEO | `git rev-parse` de HEAD, base e remoto | Nova verificação confirmando convergência |
| Staging contaminado | `git status`/`git diff --cached` mostra arquivo fora do escopo | Interromper antes do commit | Sim | CEO | `git status --short` e `git diff --cached --name-status` | Staging restrito exclusivamente ao escopo autorizado |
| Path fora do escopo | Caminho não consta em `allowed_paths` da task | Recusar leitura/escrita | Sim | CEO | Caminho solicitado versus `allowed_paths`/`read_only_paths`/`forbidden_paths` | Emenda formal do escopo da task |
| Execução sem gate | Ação tentada sem frase de autorização literal vigente | Recusar a ação | Sim | CEO | Gate vigente citado e ausência da autorização necessária | Gate explícito recebido |
| Evidência incompleta | Reporte do executor não cobre os campos obrigatórios (seção "Saída obrigatória do executor" do Documento 2) | Solicitar complementação | Sim, para o gate seguinte | CEO, se a lacuna persistir | Lista dos campos ausentes | Reporte completo recebido |
| Resultado ambíguo | Reporte do executor admite mais de uma interpretação | Solicitar esclarecimento objetivo | Sim | CEO, se a ambiguidade envolver critério de aceite | Pergunta formulada e resposta registrada | Ambiguidade resolvida e registrada |
| Executor excedendo escopo | Ação ou arquivo fora do envelope de execução | Rejeitar o resultado; não aceitar parcialmente sem revisão | Sim | CEO | Diff apresentado versus envelope autorizado | Novo ciclo dentro do escopo original ou escopo emendado |
| Falha de comando | Comando retorna erro ou código de saída não-zero | Reportar saída integral do erro | Sim, para o comando afetado | CEO, se bloquear o fluxo | Saída completa do comando | Causa corrigida e comando reexecutado com sucesso |
| Timeout | Execução excede o tempo esperado sem resposta | Registrar timeout; não presumir sucesso | Sim | CEO | Registro de início, limite e momento da interrupção | Nova tentativa autorizada ou escopo revisto |
| Retry inseguro | Nova tentativa arriscaria efeito duplicado sem idempotência | Recusar retry automático (`Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md`, tabela de retry) | Sim | CEO | Identificação da ação e ausência de chave de idempotência | Idempotência garantida ou aprovação explícita da repetição |
| Tentativa de ação irreversível sem autorização | Ação classificada como crítica (seção 1.4) sem gate correspondente | Recusar a ação | Sim | CEO | Ação pretendida e gate ausente | Gate explícito e específico recebido |

## 6. Estados operacionais

Máquina de estados conceitual do ciclo de uma demanda no Helpper Central (sem implementação técnica):

```text
recebida
  → contextualizada
    → fontes-consultadas
      → lacuna-detectada  ──→ bloqueada (aguardando informação)
      → plano-proposto
        → gate-solicitado
          → aguardando-autorizacao
            → task-criada
              → executor-acionado
                → aguardando-evidencia
                  → em-revisao
                    → correcao-necessaria ──→ executor-acionado (novo ciclo)
                    → aprovada
                      → em-integracao (commit → push → PR → revisão de PR → merge)
                        → verificada-pos-merge
                          → encerrada
```

Estados alternativos, aplicáveis a partir de qualquer ponto do fluxo: `bloqueada`, `rejeitada`, `cancelada`. Estes três estados seguem a mesma semântica já definida em `00_SYSTEM/helpper/TASK-LIFECYCLE.md` (Dimensão B) para as tasks correspondentes.

## 7. Critérios de aceite

- [ ] Papel, responsabilidades e limites do Helpper Central definidos por referência às fontes existentes, sem duplicação de conteúdo já aprovado.
- [ ] Fluxo operacional ponta a ponta com 16 etapas explicitadas e vinculadas aos gates já institucionalizados.
- [ ] Hierarquia de contexto aplicada especificamente ao Central, com regra de escalonamento e definição de conflito crítico.
- [ ] Isolamento entre clientes aplicado ao fluxo conversacional, incluindo comportamento seguro quando o cliente não está identificado.
- [ ] Taxonomia de tratamento de erros com 14 categorias, cada uma com detecção, resposta, bloqueio, escalonamento, evidência e condição de retomada.
- [ ] Máquina de estados conceitual apresentada sem código ou implementação técnica.
- [ ] Nenhuma implementação técnica, automação, agente executável, interface, integração, banco, API ou dependência criada.
- [ ] Nenhuma referência exclusiva a um único fornecedor de execução.
