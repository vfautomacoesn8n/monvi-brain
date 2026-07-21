---
id: synthesis-assinaturas-infraestrutura-monvi-v1
type: synthesis
title: "Assinaturas e infraestrutura — referência documental"
status: review
owner: unassigned
reviewer: ceo-monvi
confidentiality: confidential
active_client: null
requires_review: true
created_at: "2026-07-20"
updated_at: "2026-07-20"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf"
  - "task-2026-011"
related:
  - "Inventario-de-ferramentas.md"
  - "Infraestrutura-e-deploy-modelo.md"
  - "Governanca-de-assinaturas-e-custos.md"
  - "../servicos/Automacoes.md"
  - "../servicos/Inteligencia-artificial.md"
  - "../servicos/E-commerce.md"
  - "../seguranca/LGPD-e-seguranca.md"
aliases: ["Stack documental Monvi"]
tags: [tecnologia, infraestrutura, assinaturas, modelo]
source_id: source-assinaturas-infraestrutura-monvi-v1
source_file: 01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf
source_sha256: 73B5398E98F069BB565C0FCCC54EEE36A2FFD1C76BE31700554EADF2CDBF00AD
source_pages: ["2"]
created_from_task: task-2026-011
---

# Assinaturas e infraestrutura — referência documental

> **Aviso operacional** — Esta síntese registra uma fonte em revisão. Ferramenta citada não é ferramenta ativa; “uso na Monvi” e “O stack da Monvi” são alegações documentais da fonte, não adoção comprovada nem stack oficial aprovado. Não há confirmação de conta, assinatura, custo, titularidade, domínio, ambiente, responsável real ou infraestrutura implantada.

## Visão geral e finalidade documental

A página 2 apresenta sete categorias visuais: **IA**, **Design**, **Desenvolvimento**, **E-commerce**, **Automações**, **Domínios & DNS** e **Comunicação**. A fonte usa as expressões “O stack da Monvi” e “referência viva do que a Monvi usa e por quê”, além do princípio “Poucas ferramentas, bem integradas”. Essas são alegações da fonte: não aprovam um stack oficial e não comprovam contratação, uso ativo ou titularidade.

## Escopo confirmado na fonte

| Categoria documental | Ferramentas citadas | Classificação segura |
| --- | --- | --- |
| IA | ChatGPT, Claude | ferramenta citada; plano-modelo |
| Design | Figma | ferramenta citada; plano-modelo |
| Desenvolvimento | GitHub, Vercel | ferramenta citada; infraestrutura proposta |
| E-commerce | Nuvemshop | ferramenta citada; prática não confirmada |
| Automações | n8n | ferramenta citada; prática não confirmada |
| Domínios & DNS | Registro.br, Cloudflare | ferramenta citada; infraestrutura proposta |
| Comunicação | Google Workspace | ferramenta citada; plano-modelo |

Não há oitava categoria. A ordem visual é organização documental, não prioridade, padrão obrigatório ou decisão aprovada.

## Limites de interpretação

- “Plataforma padrão” na fonte não é padrão obrigatório vigente; Nuvemshop aparece com `[plano cliente]` vazio.
- “Coração das automações” não é infraestrutura ativa; n8n aparece com `[cloud/self-host]` vazio.
- Assinatura listada não é assinatura contratada; plano em colchetes não é plano vigente; moeda indicada não é valor preenchido.
- Conta mencionada não é conta existente; domínio citado não é domínio registrado; infraestrutura proposta não é infraestrutura implantada.
- Recomendações de 2FA, cofre de senhas, revisão trimestral e fluxo de caixa não comprovam controles ou rotinas implantados.

## Relação com a base existente

Esta referência complementa os serviços de [[../servicos/Inteligencia-artificial|Inteligência artificial]], [[../servicos/Automacoes|Automações]] e [[../servicos/E-commerce|E-commerce]], os modelos em [[../processos/Fluxos-por-servico|Fluxos por serviço]] e os limites de [[../seguranca/LGPD-e-seguranca|LGPD e Segurança]]. Não substitui essas páginas nem cria operação em `03_OPERATIONS/`.

## Riscos e decisões pendentes

Há risco de tratar linguagem institucional da fonte como fato operacional. Exigem decisão humana: stack aprovado; ferramentas efetivamente ativas; planos, custos e centros de custo; titularidade; pagamento; renovação; responsabilidade operacional; armazenamento de credenciais; offboarding; continuidade e controles aplicáveis.

## Proveniência

Fonte: `01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf`, página 2, verificada visualmente na renderização temporária correspondente. A classificação é `confidential`; esta página permanece em `review`.
