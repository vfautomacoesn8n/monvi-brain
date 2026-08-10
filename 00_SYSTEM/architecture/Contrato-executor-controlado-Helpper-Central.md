---
id: architecture-contrato-executor-controlado-helpper-central
title: Contrato do executor controlado do Helpper Central
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
  - 00_SYSTEM/architecture/Contrato-contexto-delegacao-reporte-Helpper.md
  - 00_SYSTEM/architecture/Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md
  - 00_SYSTEM/policies/Politica-aprovacao-e-separacao-de-funcoes-agentes.md
  - 00_SYSTEM/policies/Politica-seguranca-supervisao-e-limites-Helpper.md
  - 00_SYSTEM/policies/Politica-memoria-e-promocao-de-conhecimento-Helpper.md
  - 00_SYSTEM/canonical/PERMISSIONS.md
  - 00_SYSTEM/canonical/AI-CONTRACT.md
  - 00_SYSTEM/helpper/PROMPT-TEMPLATES.md
  - 00_SYSTEM/roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md
related:
  - 00_SYSTEM/tasks/active/TASK-2026-047-arquitetura-e-especificacao-do-helpper-central.md
  - 00_SYSTEM/architecture/Fluxo-operacional-e-papel-Helpper-Central.md
tags: [helpper, helpper-central, executor-controlado, contrato, governanca, independencia-de-fornecedor]
---

# Contrato do executor controlado do Helpper Central

## Natureza do documento

Especificação arquitetural produzida pela Task 047. Não autoriza implementação técnica, automação, configuração de ferramenta específica (Claude, Cursor, Codex ou qualquer outra) ou execução real. Generaliza para o conceito de **executor controlado** o contrato de delegação já aprovado em `Contrato-contexto-delegacao-reporte-Helpper.md`, sem recriá-lo, e aplica ao Helpper Central o modelo de execução supervisionada de `Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md`.

## 1. Papéis

| Papel | Função |
|---|---|
| CEO | Autoriza gates, decide, aprova ou rejeita; único que autoriza dependências, credenciais, ambientes e produção. |
| Helpper Central | Interpreta a demanda, monta o envelope de execução, acompanha gates, revisa evidências; não executa a mudança. |
| Executor controlado | Implementa, testa, documenta, apresenta diff e reporta limitações dentro do envelope recebido; não define escopo próprio nem avança gate. |
| Revisor humano | Papel exercido pelo CEO ou por quem o CEO designar; revisa conteúdo e diff antes de cada gate de integração; nunca é o próprio executor (separação de funções). |
| Repositório | Registra o histórico auditável via Git e logs JSONL. |
| Fontes canônicas | Fundamentam toda decisão técnica ou de escopo; têm precedência sobre preferência do executor. |

## 2. Envelope de execução

Todo acionamento de um executor controlado pelo Helpper Central deve declarar, no mínimo, os campos abaixo — generalização do contexto mínimo já definido em `Contrato-contexto-delegacao-reporte-Helpper.md`:

```yaml
task_id:
objetivo:
gate_vigente:
branch:
base_esperada:
head_esperado:
allowed_paths: []
read_only_paths: []
forbidden_paths: []
comandos_autorizados: []
acoes_proibidas: []
criterios_de_aceite: []
evidencias_obrigatorias: []
resultado_obrigatorio: []
proximo_gate:
condicao_de_parada:
```

Regras de preenchimento:

- `gate_vigente` deve ser a frase literal de autorização recebida do CEO, sem paráfrase;
- `allowed_paths`, `read_only_paths` e `forbidden_paths` devem ser mutuamente exclusivos, herdando a regra canônica de `00_SYSTEM/canonical/PERMISSIONS.md`;
- `resultado_obrigatorio` deve listar as opções de resultado válidas para o gate (padrão já usado em `00_SYSTEM/helpper/PROMPT-TEMPLATES.md`);
- `condicao_de_parada` deve declarar explicitamente o que o executor NÃO está autorizado a fazer, mesmo que tecnicamente possível.

## 3. Regras de execução

Herdadas de `Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md` e `Politica-aprovacao-e-separacao-de-funcoes-agentes.md`, aplicadas ao executor controlado do Helpper Central:

- privilégio mínimo: o executor recebe apenas os caminhos e comandos estritamente necessários ao gate vigente;
- nenhuma inferência de autorização: ausência ou ambiguidade de escopo autoriza leitura mínima e elaboração de plano, nunca escrita expansiva (`00_SYSTEM/canonical/PERMISSIONS.md`);
- nenhum avanço de gate: o executor não presume, anuncia ou solicita o próximo gate em nome do CEO; apenas relata o resultado e aguarda;
- nenhuma escrita fora de escopo: qualquer caminho fora de `allowed_paths` é tratado como erro (ver Documento 1, seção 5, "Path fora do escopo");
- nenhuma mutação não declarada: `changes.jsonl`, logs e documentos canônicos só são alterados quando explicitamente incluídos em `allowed_paths`;
- interrupção em divergência: HEAD, base ou inventário de arquivos divergentes do envelope interrompem a execução (ver Documento 1, seção 5, "Branch divergente");
- idempotência: ações com efeito real devem prever chave de idempotência e verificação de execução anterior antes de repetir;
- retry controlado: segue a tabela de retry de `Modelo-execucao-supervisionada-filas-retry-timeout-idempotencia.md` — falhas transitórias e idempotentes podem ser retentadas com backoff e limite; falhas de permissão, política ou ação destrutiva sem idempotência exigem escalonamento humano, nunca retry automático;
- timeout: toda execução deve ter tempo máximo implícito ou explícito, com cancelamento seguro e resultado conhecido;
- tratamento de falha parcial: resultado parcial é reportado como tal, nunca apresentado como conclusão integral;
- rollback apenas com autorização: reverter uma alteração já aplicada exige gate humano específico, não é decisão do executor;
- preservação de evidências: nenhuma evidência apresentada é descartada antes da revisão humana.

## 4. Adaptadores de executor

O contrato acima é comum a qualquer executor controlado. Cada ferramenta específica é um **adaptador** que implementa o mesmo contrato com capacidades e limitações próprias. Nenhuma ferramenta constitui regra estrutural exclusiva da arquitetura — consistente com a decisão de independência de fornecedor registrada na Task 047 e com o princípio "fornecedores substituíveis" de `Arquitetura-ecossistema-Monvi-Brain-Core-Brain-Helpper.md` (seção 3).

| Adaptador | Contrato comum | Capacidades específicas conhecidas | Limitações conhecidas | Formato de evidência | Observação sobre risco operacional |
|---|---|---|---|---|---|
| Claude no Cursor | Envelope de execução, gates, regras de execução (seções 2 e 3) | Execução interativa em IDE, acesso a ferramentas locais de shell e edição de arquivos sob permissão do usuário | Depende de sessão interativa; escopo de ferramentas definido pela configuração do host | Transcrição da sessão, diffs Git, saída de comandos | Risco depende do modo de permissão da sessão local; mitigado pelos mesmos gates deste contrato |
| Codex | Envelope de execução, gates, regras de execução (seções 2 e 3) | Execução referenciada no Plano Mestre (seção 10) como executor de tarefas técnicas a partir de prompt estruturado | Não possui, por si só, autoridade de merge; segue o protocolo de execução já definido no Plano Mestre | Diff apresentado, relatório de limitações (Plano Mestre, seção 10, "Responsabilidades — Codex") | Nenhum risco adicional além dos já cobertos por este contrato |
| Outros executores futuros | Envelope de execução, gates, regras de execução (seções 2 e 3) | A definir por avaliação específica antes da adoção | A definir por avaliação específica antes da adoção | Deve, no mínimo, cobrir a seção 6 deste documento | Avaliação de risco obrigatória antes da primeira ativação, conforme `Politica-seguranca-supervisao-e-limites-Helpper.md` |

Não é criada, neste documento, nenhuma configuração técnica de nenhum desses adaptadores.

## 5. Memória e contexto

Tratamento exclusivamente conceitual, sem criação de mecanismo de memória — consistente com o item 7 do escopo da Task 047 ("sem banco ou mecanismo de memória nesta task") e com `Politica-memoria-e-promocao-de-conhecimento-Helpper.md`:

- **contexto de sessão**: existe apenas durante a interação corrente entre CEO, Helpper Central e executor; não é fonte oficial (`Politica-fonte-de-verdade-e-resolucao-de-conflitos-Monvi-Brain.md`, "Chat e memória");
- **contexto da task**: o arquivo da task ativa é a fonte de escopo autorizada para o ciclo corrente;
- **contexto persistido no repositório**: Git e `00_SYSTEM/logs/changes.jsonl` são a memória institucional auditável; qualquer fato relevante da sessão que precise sobreviver ao fim da conversa deve ser formalizado nesses meios, não presumido como lembrado;
- **dados proibidos**: secrets, credenciais, tokens e chaves nunca fazem parte do contexto passado ao executor (`00_SYSTEM/canonical/SECURITY.md`);
- **isolamento**: memória de um cliente não cruza outro cliente nem contexto institucional, aplicando a mesma regra do Documento 1, seção 4;
- **promoção de conhecimento**: qualquer aprendizado da execução que mereça virar conhecimento institucional segue o fluxo já aprovado `captured → proposed → reviewed → approved → published` de `Politica-memoria-e-promocao-de-conhecimento-Helpper.md`, nunca promoção automática;
- **precedência das fontes**: segue integralmente a hierarquia do Documento 1, seção 3.

## 6. Saída obrigatória do executor

Todo reporte do executor controlado ao Helpper Central deve conter, no mínimo:

```yaml
estado_inicial:        # branch, HEAD, status, staging — antes da execução
acoes_executadas: []   # lista objetiva de comandos ou edições realizados
evidencias: []         # saídas de comando, diffs, hashes
divergencias: []       # qualquer desvio do envelope de execução, mesmo que corrigido
arquivos_afetados: []  # caminhos exatos tocados
hashes:
  head_antes:
  head_depois:
validacoes: []         # UTF-8, whitespace, diff --check, contagens etc.
resultado:             # uma das opções declaradas em resultado_obrigatorio
proximo_gate:          # frase exata a solicitar, sem presumir concessão
```

Um reporte que não cubra todos os campos é tratado como "evidência incompleta" (Documento 1, seção 5) e devolvido para complementação antes de qualquer revisão de conteúdo.

## 7. Critérios de aceite

- [ ] Papéis definidos sem sobreposição de responsabilidade entre Helpper Central, executor e CEO.
- [ ] Envelope de execução com campos mínimos suficientes para qualquer gate já catalogado em `PROMPT-TEMPLATES.md`.
- [ ] Regras de execução cobrindo privilégio mínimo, não avanço de gate, idempotência, retry, timeout e rollback.
- [ ] Pelo menos dois adaptadores de executor descritos de forma agnóstica, sem configuração técnica.
- [ ] Memória e contexto tratados apenas conceitualmente, sem criação de mecanismo de persistência.
- [ ] Formato mínimo de saída do executor definido e verificável.
- [ ] Nenhum fornecedor tratado como regra estrutural exclusiva da arquitetura.
