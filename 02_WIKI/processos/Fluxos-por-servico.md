---
id: process-fluxos-por-servico-monvi
type: process
title: "Fluxos por serviço"
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
# Fluxos por serviço
> Este conteúdo representa o modelo operacional documentado no Manual de Processos V2.0. Não comprova implantação, disponibilidade de equipe, SLA, capacidade ou adoção integral, nem autoriza execução automática.

**Classificação:** modelo operacional proposto; política ainda não aprovada; regra declarada pela fonte; boa prática; responsabilidade sugerida; decisão pendente; campo não preenchido; processo ainda não implantado.

## Natureza comum
Cada fluxo abaixo é um modelo operacional proposto. Entradas, funções, etapas, gates, QA, aceite, entregáveis, indicadores, riscos e dependências são declarações da fonte, sujeitas a diagnóstico, escopo, segurança, contrato e revisão humana.

## Site institucional — página 5
- **Objetivo:** criar presença digital robusta, rápida e orientada a autoridade, leads e conversão.
- **Entradas:** briefing, identidade, páginas, referências, conteúdo, domínio e acessos.
- **Etapas / funções / gates:** descoberta → Comercial + UX / briefing aprovado; arquitetura → UX + conteúdo / sitemap aprovado; design → UX/UI / design aprovado; desenvolvimento → Dev / staging completo; QA → QA / checklist aprovado; go-live → Dev + PM / site publicado.
- **Entregáveis e aceite:** arquitetura, wireframes, design, site responsivo, formulários, SEO básico, analytics e documentação; responsividade, links, formulários, desempenho, conteúdo e eventos funcionando.
- **Indicadores e ferramentas citadas:** prazo típico de 2 a 4 semanas, conversão, Core Web Vitals/velocidade, erros de formulário e disponibilidade; Figma, Vercel, Cloudflare, Google Analytics e APIs.
- **Riscos, dependências e pendências:** dependem de briefing, conteúdo, domínio e acessos; escopo contratual, responsável real, meta e aceite formal seguem pendentes.

## Landing page — página 6
- **Objetivo:** transformar oferta específica em leads ou vendas por jornada única de conversão.
- **Entradas:** oferta, público, promessa, prova, CTA, origem do tráfego e meta de conversão.
- **Etapas / funções / gates:** estratégia → Growth + UX / one-page brief; copy e wireframe → Conteúdo + UX / estrutura aprovada; design e build → Design + Dev / staging funcional; tracking → Growth + Dev / eventos recebidos; lançamento → PM + Growth / campanha apta; CRO → Growth / backlog de testes.
- **Entregáveis e aceite:** copy, layout, página, formulário/checkout, tracking e integração de leads; evento validado, lead no destino correto e página pronta para campanha.
- **Indicadores e ferramentas citadas:** prazo de produção, conversão, custo por lead/aquisição e erro de formulário; Figma, Vercel, Google Analytics, Meta Ads, CRM e WhatsApp.
- **Riscos, dependências e pendências:** dependem de oferta, tráfego, dados e integrações; promessa, meta, preço, responsável real e compromisso de campanha não são definidos.

## Loja Nuvemshop — página 7
- **Objetivo:** colocar operação de e-commerce no ar com catálogo, checkout, logística, pagamentos e automações confiáveis.
- **Entradas:** catálogo, estoque, preços, fotos, políticas, pagamentos, frete, domínio e regras fiscais.
- **Etapas / funções / gates:** operação → PM + cliente / regras fechadas; setup → especialista / base configurada; design e catálogo → Design + operação / loja navegável; integrações → Dev / automação / ecossistema conectado; teste → QA + cliente / pedido ponta a ponta; go-live → PM / loja vendendo.
- **Entregáveis e aceite:** loja configurada, identidade, produtos, integrações, pedido teste, treinamento e documentação; pedido completo, notificações, pagamento, frete e políticas validados.
- **Indicadores e ferramentas citadas:** produtos sem erro, conversão, abandono de checkout, falhas de pedido e tempo de processamento/atendimento; Nuvemshop, Figma, Google Analytics, Meta Ads, WhatsApp e APIs.
- **Riscos, dependências e pendências:** dependem de dados de operação, regras, catálogo, pagamentos e frete do cliente; Nuvemshop é ferramenta declarada, não obrigação universal; escopo fiscal, contrato e responsáveis reais seguem pendentes.

## Automação de processos — página 8
- **Objetivo:** eliminar tarefas manuais e conectar dados, sistemas e equipes com fluxos rastreáveis.
- **Entradas:** processo atual, volume, frequência, sistemas, responsáveis, exceções, acessos e dados de teste.
- **Etapas / funções / gates:** mapeamento AS-IS → Analista / AS-IS validado; desenho TO-BE → Analista + cliente / TO-BE aprovado; arquitetura → Especialista técnico / desenho técnico; construção → Automação / versão de teste; homologação → QA + usuário-chave / aceite operacional; produção → Automação + suporte / fluxo estável.
- **Entregáveis e aceite:** mapas AS-IS/TO-BE, automação, logs, alertas, documentação, treinamento e contingência; casos normais e exceções testados, logs e alertas ativos, responsável treinado.
- **Indicadores e ferramentas citadas:** horas economizadas, sucesso de execuções, erros/retrabalho e tempo médio; n8n, Make, APIs, webhooks, Slack, CRM e bancos de dados.
- **Riscos, dependências e pendências:** dependem de acessos, dados de teste, exceções e usuário-chave; ferramentas e eventual referência a SLA/fallback são elementos do desenho proposto, não SLA vigente; segurança, contrato, responsável real e metas seguem pendentes.

## Agentes de IA — página 9
- **Objetivo:** aplicar IA ao atendimento, análise e operação com limites, avaliação e escalonamento humano.
- **Entradas:** objetivo, usuários, canais, base de conhecimento, políticas, dados permitidos e riscos.
- **Etapas / funções / gates:** caso de uso → Produto IA + cliente / escopo de IA; conhecimento → Conteúdo + cliente / base aprovada; arquitetura → Especialista IA / arquitetura aprovada; construção → IA + Dev / piloto; avaliação → QA IA / relatório de avaliação; operação → Suporte IA / agente monitorado.
- **Entregáveis e aceite:** agente, instruções, base, ferramentas, testes, monitoramento, fallback e documentação; acurácia mínima, recusas seguras, escalonamento humano e testes de risco aprovados.
- **Indicadores e ferramentas citadas:** resolução, precisão/aderência, escalonamentos humanos, custo e latência; OpenAI API, n8n, APIs, base de conhecimento e canais.
- **Riscos, dependências e pendências:** dependem de dados autorizados, políticas, riscos e validação do cliente; avaliação de Segurança e LGPD, critérios contratuais, responsável real e metas permanecem pendentes.

## Integração WhatsApp — página 10
- **Objetivo:** ativar atendimento e automações no canal com governança, opt-in e encaminhamento humano.
- **Entradas:** número, Meta Business, casos de uso, consentimento, CRM, templates e equipe.
- **Etapas / funções / gates:** governança → PM + cliente / pré-requisitos aprovados; plataforma → Especialista / canal habilitado; templates → Conteúdo + cliente / templates aprovados; integração → Dev / automação / fluxos conectados; QA → QA / homologação; ativação → Suporte / canal estável.
- **Entregáveis e aceite:** conta/API, templates, integrações, filas, handoff, testes e documentação; mensagens entregues, respostas registradas, opt-out e handoff humano funcionando.
- **Indicadores e ferramentas citadas:** entrega/leitura, primeira resposta, opt-out/bloqueios e custo por conversa/mensagem; WhatsApp Business Platform, Meta Business, BSP/Cloud API, n8n e CRM.
- **Riscos, dependências e pendências:** dependem de titularidade, consentimento, ativos Meta, templates e cliente; é fluxo especializado de automação/atendimento/IA, não serviço independente aprovado; LGPD, política, responsável real e escopo seguem pendentes.

## Manutenção de sites — página 11
- **Objetivo:** manter sites, lojas, integrações e infraestrutura estáveis, seguros e melhorados continuamente.
- **Entradas:** inventário técnico, acessos, stack, histórico, backup, escopo mensal e prioridades.
- **Etapas / funções / gates:** onboarding → Suporte + Dev / ambiente conhecido; monitoramento → Suporte / alertas ativos; solicitações → Atendimento / fila priorizada; execução → Dev / Design / mudança pronta; QA e publicação → QA + suporte / chamado concluído; evolução → Growth + CEO / roadmap mensal.
- **Entregáveis e aceite:** monitoramento, backups, correções, pequenas alterações, relatório e roadmap; chamado resolvido, QA feito e mudança registrada.
- **Indicadores e ferramentas citadas:** primeira resposta/resolução, incidentes reincidentes, disponibilidade e melhorias no período; Vercel, Cloudflare, monitoramento, gestão de chamados e analytics.
- **Riscos, dependências e pendências:** dependem de inventário, acessos, backup, escopo e prioridades; não define cobertura, canais, disponibilidade, suporte ilimitado ou SLA; responsáveis reais, contrato e metas seguem pendentes.
