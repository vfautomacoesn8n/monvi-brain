---
id: process-checklists-entrega-servico-monvi-v1
type: synthesis
title: "Checklists de entrega por serviço"
status: review
owner: unassigned
reviewer: ceo-monvi
confidentiality: internal
active_client: null
requires_review: true
created_at: "2026-07-20"
updated_at: "2026-07-20"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../01_RAW/monvi/07_Operacao_Monvi.pdf"
  - "task-2026-010"
related:
  - "Fluxos-por-servico.md"
  - "QA-aceite-e-handoff.md"
  - "../servicos/Sites.md"
  - "../servicos/E-commerce.md"
  - "../servicos/Automacoes.md"
  - "../servicos/Manutencao.md"
  - "../seguranca/LGPD-e-seguranca.md"
aliases: ["Checklists operacionais por serviço"]
tags: [processo, checklist, servicos, modelo]
source_id: source-operacao-monvi-v1
source_file: 01_RAW/monvi/07_Operacao_Monvi.pdf
source_sha256: 22A92B650549385841BFBF9BD4D2147C615691E30971D18655392F75D8897B9C
source_pages: ["5-8"]
created_from_task: task-2026-010
---

# Checklists de entrega por serviço

> **Aviso operacional** — Os itens abaixo são checklists-modelo em revisão. Não comprovam controle executado, ferramenta ativa, publicação, automação implantada, contrato vigente, SLA ou serviço em operação. Marcas visuais pré-impressas não são itens concluídos.

## Sites e landing pages — página 5

Itens efetivamente declarados: estrutura e conteúdo; páginas do escopo; textos; imagens; CTAs; responsividade; velocidade; links; formulários; integração; SEO básico; HTTPS; domínio; privacidade e cookies; analytics; backup; acessos e credenciais para entrega.

Arquitetura, layout, aprovação e documentação detalhada não foram acrescentados como itens formais, pois não constam explicitamente nesta lista. O checklist não comprova testes, publicação, backup, domínio configurado ou controle implantado.

## Nuvemshop — página 6

Itens declarados: identidade, catálogo, estoque, pagamentos, frete, políticas, checkout, integrações, domínio e treinamento.

“Automação de pós-venda ativa” aparece somente como item condicional: **quando contratada**. A fonte não confirma loja, pagamento, frete, integração ou automação ativos; também não declara analytics ou acessos como itens explícitos da lista.

## Automação — página 7

Itens declarados: objetivo do fluxo; credenciais; mapeamento de dados; n8n; tratamento de erros; testes ponta a ponta; casos de falha; volume e frequência; documentação; alertas e conformidade LGPD.

Processo atual, APIs, webhooks, logs e fallback não são itens explícitos e não foram inferidos. “Dados reais” aparece como item de teste previsto, não como dado acessado. Credenciais não devem ser registradas na Wiki; n8n citado não significa fluxo implantado; teste previsto não significa teste realizado; alertas previstos não significam monitoramento ativo.

> **Governança institucional corroborada** — Qualquer automação ou uso de IA depende de escopo definido, base adequada, controles aplicáveis, testes prévios, supervisão humana, segregação e tratamento de falhas. Esta condição é corroborada por [[LGPD-e-seguranca]] e não é conteúdo editorial direto exclusivo da página 7; não autoriza implantação nem confirma ferramenta ou processo em uso.

## Manutenção — página 8

O checklist é condicional: aplicável a clientes com contrato de manutenção ativo. Cita disponibilidade, atualizações de segurança, backups, automações, chamados, ajustes, desempenho, relatório, oportunidades e mensalidade.

Não existe cliente, contrato, cobertura, SLA, canal, severidade, prioridade, horário ou valor confirmados. A mensalidade é referência-modelo sem valor preenchido. Manutenção prevista não é contrato de manutenção vigente.

## Relação com a task-2026-004

[[Fluxos-por-servico]] registra os fluxos gerais e [[QA-aceite-e-handoff]] registra controles propostos. Esta página preserva a granularidade concreta dos checklists da nova fonte, sem alterar ou substituir a base anterior.

## Riscos e decisões pendentes

Ferramentas, controles, acessos, testes, monitoramento e condições contratuais exigem definição e aprovação humanas por projeto. Dados de clientes e credenciais requerem finalidade, minimização, controle de acesso e segregação; não há evidência de implementação nesta fonte.

## Proveniência

Fonte: `01_RAW/monvi/07_Operacao_Monvi.pdf`, páginas 5–8. As listas, marcas gráficas e condicionais foram conferidas visualmente em renderizações temporárias.
