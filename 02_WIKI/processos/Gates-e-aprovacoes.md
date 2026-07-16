---
id: process-gates-aprovacoes-monvi
type: process
title: "Gates e aprovações"
status: review
owner: unassigned
confidentiality: internal
created_at: "2026-07-16"
updated_at: "2026-07-16"
reviewed_at: null
review_cycle: quarterly
sources:
  - "../../01_RAW/monvi/Manual_de_Processos_Monvi_Redesenhado_2026.pdf"
  - "task-2026-004"
related: []
aliases: []
tags: [processo, operacao]
---
# Gates e aprovações
> Este conteúdo representa o modelo operacional documentado no Manual de Processos V2.0. Não comprova implantação, disponibilidade de equipe, SLA, capacidade ou adoção integral, nem autoriza execução automática.

**Classificação:** modelo operacional proposto; política ainda não aprovada; regra declarada pela fonte; boa prática; responsabilidade sugerida; decisão pendente; campo não preenchido; processo ainda não implantado.

## Gates do fluxo integrado — página 4
| Contexto | Critério ou saída declarada | Função responsável sugerida | Aprovação / registro | Bloqueio declarado | Natureza |
| --- | --- | --- | --- | --- | --- |
| Entrada e triagem | Lead registrado e próximo passo definido. | Comercial | Próximo passo registrado. | Não especificado por etapa. | Regra declarada. |
| Diagnóstico | Briefing e hipótese de solução. | Comercial + especialista | Briefing. | Não especificado por etapa. | Regra declarada. |
| Qualificação | Go, nutrição ou recusa. | CEO + líder técnico | Decisão registrada. | Não especificado por etapa. | Regra declarada. |
| Escopo e proposta | Proposta aprovada. | Comercial + PM | Proposta. | Mudança fora do escopo gera impacto formal. | Regra declarada. |
| Onboarding | Projeto autorizado. | Administrativo + PM | Autorização. | Entradas ou acessos pendentes impedem produção. | Regra declarada. |
| Planejamento | Plano de execução aprovado. | PM + especialista | Plano. | Não especificado por etapa. | Regra declarada. |
| Produção | Versão pronta para QA. | Equipe especializada | Versão. | Entradas ou acessos pendentes impedem início. | Regra declarada. |
| QA e homologação | Aceite formal. | QA + PM + cliente | Aceite. | QA não concluído bloqueia publicação. | Boa prática declarada. |
| Go-live e handoff | Operação ativa. | Equipe + PM | Publicação. | Sem QA, backup ou plano de reversão. | Regra declarada. |
| Suporte e evolução | Relatório e roadmap. | Growth / suporte | Relatório. | Não especificado por etapa. | Proposta. |

## Gates específicos por fluxo — páginas 5–11
| Fluxo | Gates declarados |
| --- | --- |
| Site institucional | Briefing aprovado; sitemap aprovado; design aprovado; staging completo; checklist aprovado; site publicado. |
| Landing page | One-page brief; estrutura aprovada; staging funcional; eventos recebidos; campanha apta; backlog de testes. |
| Loja Nuvemshop | Regras fechadas; base configurada; loja navegável; ecossistema conectado; pedido ponta a ponta; loja vendendo. |
| Automação | AS-IS validado; TO-BE aprovado; desenho técnico; versão de teste; aceite operacional; fluxo estável. |
| Agentes de IA | Escopo de IA; base aprovada; arquitetura aprovada; piloto; relatório de avaliação; agente monitorado. |
| Integração WhatsApp | Pré-requisitos aprovados; canal habilitado; templates aprovados; fluxos conectados; homologação; canal estável. |
| Manutenção | Ambiente conhecido; alertas ativos; fila priorizada; mudança pronta; chamado concluído; roadmap mensal. |

Esses gates pertencem a fluxos propostos e não definem SLA, preço, obrigação comercial ou aceite contratual automático.

## Matriz de decisão e registros — página 15
A matriz proposta associa momento, responsável sugerido, aprovador sugerido e registro obrigatório: qualificação (diagnóstico/go-no-go), escopo e preço (proposta/premissas), estratégia (briefing/marco), produção (tarefas/versões/bloqueios), QA (checklist/evidências), homologação (feedback/aceite), publicação (checklist de go-live) e suporte/evolução (relatório/roadmap). Consulte [Papéis e responsabilidades](Papeis-e-responsabilidades.md) para a tabela integral.

## Escalonamentos propostos — página 15
- Escopo: PM → CEO / Comercial quando mudança altera prazo, custo ou critério de aceite.
- Técnico: especialista → PM → CEO em risco de segurança, perda de dados ou indisponibilidade.
- Cliente: PM → cliente → CEO quando pendência bloqueia o projeto por mais de 2 dias úteis.
- Qualidade: QA → PM → especialista em falha recorrente ou aceite ambíguo.
- Financeiro: Administrativo → CEO quando pagamento, licença ou consumo impede continuidade.

## Dez regras operacionais declaradas — página 16
1. Nenhuma venda sem diagnóstico suficiente para estimar escopo e risco.
2. Nenhum projeto começa sem contrato, entrada, acessos e briefing mínimo.
3. Cada etapa possui dono e gate de saída.
4. Cliente aprova marcos, não tarefas fragmentadas.
5. Feedback é consolidado e segue o número de revisões acordado.
6. QA acontece antes da apresentação ao cliente.
7. Publicação exige checklist, backup e plano de reversão quando aplicável.
8. Acessos e ativos ficam sob titularidade correta e documentada.
9. Mudanças fora do escopo viram backlog ou nova proposta.
10. Toda entrega encerra com documentação, medição e próximo passo.

São regras e boas práticas declaradas pela fonte, sujeitas a revisão. Não são cláusulas contratuais, permissões automáticas ou política jurídica vigente.
