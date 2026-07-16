---
id: process-fluxo-operacional
type: process
title: "Fluxo operacional"
status: review
owner: unassigned
confidentiality: internal
created_at: "2026-07-15"
updated_at: "2026-07-16"
reviewed_at: null
review_cycle: quarterly
sources:
  - "../../docs/superpowers/specs/2026-07-15-monvi-brain-design.md"
  - "../../01_RAW/monvi/Manual_de_Processos_Monvi_Redesenhado_2026.pdf"
  - "task-2026-004"
related:
  - "../empresa/Monvi.md"
  - "../tecnologia/Monvi-Brain.md"
aliases: ["Fluxo operacional da Monvi"]
tags: [processo, operacao]
---
# Fluxo operacional

> Este conteúdo representa o modelo operacional documentado no Manual de Processos V2.0. Não comprova implantação, disponibilidade de equipe, SLA, capacidade ou adoção integral, nem autoriza execução automática.

**Classificação:** modelo operacional proposto; política ainda não aprovada; regra declarada pela fonte; boa prática; responsabilidade sugerida; decisão pendente; campo não preenchido; processo ainda não implantado.

## Fluxo integrado proposto — página 4

Entrada e triagem → diagnóstico → qualificação → escopo e proposta → onboarding → planejamento → produção → QA e homologação → go-live e handoff → suporte e evolução. A ordem visual foi conferida em `page-04.png`.

| Etapa | Dono funcional sugerido | Saída ou gate declarado | Referência |
| --- | --- | --- | --- |
| 1. Entrada e triagem | Comercial | Lead registrado e próximo passo definido. | p. 4 |
| 2. Diagnóstico | Comercial + especialista | Briefing e hipótese de solução. | p. 4 |
| 3. Qualificação | CEO + líder técnico | Go, nutrição ou recusa. | p. 4 |
| 4. Escopo e proposta | Comercial + PM | Proposta aprovada. | p. 4 |
| 5. Onboarding | Administrativo + PM | Projeto autorizado. | p. 4 |
| 6. Planejamento | PM + especialista | Plano de execução aprovado. | p. 4 |
| 7. Produção | Equipe especializada | Versão pronta para QA. | p. 4 |
| 8. QA e homologação | QA + PM + cliente | Aceite formal. | p. 4 |
| 9. Go-live e handoff | Equipe + PM | Operação ativa. | p. 4 |
| 10. Suporte e evolução | Growth / suporte | Relatório e roadmap. | p. 4 |

Os donos são funções sugeridas, não pessoas reais ou capacidade confirmada. A fonte não define entrada, impedimento, dependência, documentação ou aprovação individual para cada linha além do que consta na tabela.

## Regras gerais de passagem entre áreas — página 4

1. Comercial não promete prazo técnico antes da validação.
2. Produção não começa com entradas ou acessos pendentes.
3. Feedback é consolidado pelo líder de projeto.
4. Mudanças fora do escopo geram impacto formal de prazo e custo.
5. Nenhuma publicação ocorre sem QA, backup ou plano de reversão.

São regras declaradas pelo Manual e propostas para revisão; não são cláusulas contratuais. `Staging` é gate específico de determinados fluxos por serviço, não gate universal desta jornada integrada.
