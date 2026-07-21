---
id: synthesis-inventario-ferramentas-monvi-v1
type: synthesis
title: "Inventário documental de ferramentas"
status: review
owner: unassigned
reviewer: ceo-monvi
confidentiality: confidential
active_client: null
requires_review: true
created_at: "2026-07-20"
updated_at: "2026-07-21"
reviewed_at: null
review_cycle: on-change
sources:
  - "../../01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf"
  - "task-2026-011"
related:
  - "Assinaturas-e-infraestrutura.md"
  - "Infraestrutura-e-deploy-modelo.md"
  - "Governanca-de-assinaturas-e-custos.md"
  - "../servicos/Inteligencia-artificial.md"
  - "../servicos/Automacoes.md"
  - "../servicos/E-commerce.md"
  - "../seguranca/LGPD-e-seguranca.md"
aliases: ["Ferramentas citadas na fonte 09"]
tags: [tecnologia, ferramentas, inventario, modelo]
source_id: source-assinaturas-infraestrutura-monvi-v1
source_file: 01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf
source_sha256: 73B5398E98F069BB565C0FCCC54EEE36A2FFD1C76BE31700554EADF2CDBF00AD
source_pages: ["3", "4", "5", "6", "7", "8", "9"]
created_from_task: task-2026-011
---

# Inventário documental de ferramentas

> **Aviso operacional** — Este é um inventário de ferramentas citadas na fonte, não de contas, assinaturas, licenças ou ambientes confirmados. Todos os campos de plano estão vazios; nenhuma ferramenta está comprovada como ativa.

## Ferramentas visualmente confirmadas

| Ferramenta | Categoria e uso documental | Campo-modelo | Estado seguro e páginas |
| --- | --- | --- | --- |
| ChatGPT | IA; geração de conteúdo, brainstorming e apoio operacional | `[assinatura]` | alegação da fonte; p. 3 |
| Claude | IA; desenvolvimento, escrita técnica e automações com IA | `[assinatura]` | alegação da fonte; p. 3 |
| Figma | Design; UI, protótipos, wireframes e identidade | `[plano]` | plano-modelo; p. 4 |
| GitHub | Desenvolvimento; versionamento, repositórios e histórico | `[plano]` | infraestrutura proposta; p. 5 |
| Vercel | Desenvolvimento; deploy e hospedagem | `[plano]` | infraestrutura proposta; p. 5 |
| Nuvemshop | E-commerce; estruturação, catálogo, pagamento e operação de lojas | `[plano cliente]` | prática não confirmada; p. 6 |
| n8n | Automações; fluxos, integrações via API e disparos | `[cloud/self-host]` | prática não confirmada; p. 7 |
| Registro.br | Domínios; registro e gestão de domínios `.br` | `[por domínio]` | campo-modelo; p. 8 |
| Cloudflare | Domínios & DNS; DNS, CDN, HTTPS e proteção | `[plano]` | infraestrutura proposta; p. 8 |
| Google Workspace | Comunicação; e-mail, Drive, Docs e agenda | `[plano]` | plano-modelo; p. 9 |

Para cada ferramenta, o uso é uma **alegação da fonte**; o campo entre colchetes é um **campo-modelo**; os riscos incluem acesso indevido, dados de clientes, custo não preenchido, dependência não validada e interpretação como adoção. Dados potencialmente envolvidos exigem finalidade, minimização, controle de acesso e segregação conforme [[../seguranca/LGPD-e-seguranca|LGPD e Segurança]]. Controles recomendados incluem revisão humana, proteção de credenciais e validação antes de qualquer uso.

## Limites comuns e decisões pendentes

Todos os campos estão vazios. Nenhum plano está contratado, valor preenchido, conta confirmada ou licença confirmada. Dependências, custos, titularidade, controles, responsáveis e continuidade precisam de decisão humana antes de qualquer implantação ou uso.

## Limite da fonte

**Make, OpenAI API, WhatsApp, Meta Ads e Analytics não aparecem nesta fonte.** Podem ter páginas ou referências próprias na Wiki, mas não integram este inventário documental.

## Segurança e acessos

A fonte recomenda não inserir dados sensíveis sem base e proteção adequadas, documentar prompts e configurações reutilizáveis, organizar repositórios, revogar acessos ao fim do vínculo, proteger credenciais em variáveis, habilitar verificação em duas etapas, usar cofre de senhas e aplicar 2FA. São controles recomendados, não comprovados. Não há credencial, token, chave, cartão, dado bancário ou conta exposta/confirmada.

## Proveniência

Fonte: `01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf`, páginas 3–9, conferidas visualmente. Esta síntese não transforma a lista em inventário operacional.

## Decisão executiva do CEO — 2026-07-21

A governança institucional passa a distinguir três categorias:

| Categoria | Ferramentas |
| --- | --- |
| Oficial | Google Workspace, Google Drive, Figma, GitHub, Google Analytics |
| Preferencial | Vercel, Cloudflare, Nuvemshop, n8n, OpenAI API |
| Alternativa permitida | Make e outras soluções justificadas |

Esta tabela registra decisão de stack, não inventário operacional. Planos, valores, contas, licenças, titularidade real, meios de pagamento e estado de implantação continuam pendentes de levantamento.
