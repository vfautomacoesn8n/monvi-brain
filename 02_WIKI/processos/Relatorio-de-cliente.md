---
id: relatorio-de-cliente-monvi
type: synthesis
title: "Relatório de cliente"
status: review
owner: unassigned
reviewer: ceo-monvi
confidentiality: internal
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../01_RAW/monvi/14_Relatorio_Cliente_Monvi.pdf"
  - "task-2026-015"
related:
  - "Indicadores-operacionais.md"
  - "QA-aceite-e-handoff.md"
  - "../servicos/Manutencao.md"
  - "../juridico/SOW.md"
  - "../juridico/Termo-de-manutencao.md"
  - "../seguranca/LGPD-e-seguranca.md"
aliases: ["Governança de relatório de cliente"]
tags: [processo, relatorio, cliente, manutencao, governanca]
source_id: source-relatorio-cliente-monvi-v1
source_file: 01_RAW/monvi/14_Relatorio_Cliente_Monvi.pdf
source_sha256: 36AB2F68691AB618007566536FF705F92333EC6B68C4B767CB0AC3793CDA2A02
source_pages:
  - "1-6"
created_from_task: task-2026-015
---

# Relatório de cliente

> **Aviso de governança** — Esta orientação está em revisão. Não cria relatório real, contrato, SOW, SLA, aceite, ticket, evidência, cobrança, renovação, expansão de escopo ou autorização de envio. Todo relatório exige dados verificáveis e revisão humana antes de qualquer envio.

## Finalidade

O relatório organiza acompanhamento periódico de atividades, indicadores, pendências e recomendações. Ele não substitui contrato, SOW, SLA, aceite, ticket ou evidência; não comprova execução sozinho; não autoriza cobrança, renovação ou expansão de escopo; e não deve ser enviado sem revisão.

## Estados recomendados

Como recomendação em `review`, o relatório pode passar por: rascunho interno; coleta de dados; validação das evidências; revisão operacional; revisão comercial; revisão jurídica ou LGPD, quando aplicável; aprovação para envio; envio ao cliente; e arquivamento. Esta sequência não é política aprovada, processo ativo ou autorização automática.

## Separação de conteúdo

| Categoria | Registro esperado | Limite de interpretação |
| --- | --- | --- |
| Fato | Informação com fonte e evidência identificadas. | Fato não dispensa contextualização. |
| Indicador | Definição, valor, período, método e evidência. | Indicador não é resultado causal. |
| Interpretação | Leitura delimitada dos dados e limitações. | Dado ≠ interpretação. |
| Recomendação | Sugestão justificada, com dependências e aprovação necessária. | Interpretação ≠ recomendação; recomendação ≠ decisão. |
| Risco | Evento ou condição a validar, com impacto e tratamento proposto. | Risco citado não é risco avaliado. |
| Pendência | Informação, evidência ou ação ainda ausente. | Pendência ≠ responsabilidade aceita. |
| Decisão | Deliberação documentada por autoridade competente. | Recomendação ≠ decisão. |
| Responsabilidade | Papel confirmado no contexto e documento aplicável. | Status ≠ evidência; menção a papel não atribui responsável. |
| Próximo passo | Ação proposta ou aprovada, com dependências. | Próximo passo não é tarefa aprovada sem registro. |

## Indicadores

Para cada indicador, registrar nome, definição, valor, unidade, período, fonte, método, responsável, evidência, atualização, limitações e aprovação. Percentual, disponibilidade, chamado, melhoria ou comparação isolados não são evidência suficiente; não inferir meta, baseline, resultado, causa, SLA ou desempenho sem seus respectivos registros.

## Status

Cada status exige item, status, data, responsável, evidência, dependência e próxima ação. Não usar “Concluído” ou “Em dia” sem evidência verificável. Status visual da fonte é modelo, não atualização operacional.

## SLA, manutenção e suporte

Toda referência a SLA deve ser confrontada com contrato, proposta, SOW, termo de manutenção, plano contratado, período aplicável, exclusões, dependências do cliente e terceiros. SLA relatado ≠ SLA contratado; tempo médio ≠ compromisso individual; atividade no relatório ≠ cobertura contratual. Consulte [Manutenção](../servicos/Manutencao.md), [SOW](../juridico/SOW.md) e [Termo de manutenção](../juridico/Termo-de-manutencao.md).

## Recomendações e oportunidades

Separar recomendação técnica, oportunidade comercial, necessidade operacional, risco, decisão do cliente e ação aprovada. Oportunidade não é venda; recomendação não é escopo contratado; proposta futura não é cobrança autorizada. Nenhuma recomendação autoriza execução, renovação ou alteração de escopo.

## Confidencialidade e aprovação

- Modelo vazio: `internal`.
- Relatório preenchido: `confidential`.
- Evidências: classificação conforme sensibilidade.
- Versão aprovada para envio: pode permanecer `confidential`.
- Envio externo não transforma automaticamente o documento em público.

Revisão por responsável operacional e responsável técnico é necessária antes do envio. Comercial participa quando houver oportunidade ou escopo; Jurídico quando houver obrigação, SLA ou risco; LGPD e Segurança quando houver dados, incidentes ou acessos; e CEO, quando necessário. Essas revisões não são automaticamente concedidas por esta página.

## Referência fictícia da fonte

Clínica Aurora, Manutenção Essencial, junho de 2026, 99,9%, três chamados, duas melhorias, prazo de SLA, recomendações, proposta separada e próximo relatório em 05/07/2026 aparecem exclusivamente no exemplo fictício do PDF. Não representam cliente da Monvi, métrica real, execução, SLA, renovação, evidência ou conteúdo reutilizável em material externo.

## Correções de contexto para novos artefatos

Toda seção de exemplo deve repetir a identificação de modelo ou conteúdo fictício; não pode depender da página anterior para fornecer contexto. Não reproduzir encerramento que sugira suporte contínuo sem validação, métricas-modelo, status fictícios, SLA fictício ou CTA de renovação. A classificação e a exigência de aprovação devem permanecer visíveis quando cada seção for lida isoladamente.

## Proveniência

Fonte: `01_RAW/monvi/14_Relatorio_Cliente_Monvi.pdf`, páginas 1–6. A inspeção visual ocorreu em renderizações temporárias em `work/`, que não são fontes canônicas. A fonte é um modelo de relatório periódico de manutenção com placeholders e exemplo fictício; não contém cliente, métrica, SLA, renovação ou evidência real.
