---
id: audit-operational-inventory-monvi
title: Inventário operacional mínimo da Monvi
type: output
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
source_task: task-2026-021
classification: internal
---

# Inventário operacional mínimo da Monvi

## Objetivo

Este documento organiza os ativos operacionais que precisam ser confirmados para que a Monvi opere com controle mínimo sobre contas, acessos, ferramentas, cobranças, integrações e riscos.

A presença de uma ferramenta nesta lista não comprova que a conta exista, esteja contratada, configurada, segura, paga ou sob controle da Monvi.

## Legenda

### Status de confirmação

- `confirmado`: há evidência verificável;
- `declarado, sem evidência`: informação informada, mas ainda não validada;
- `não confirmado`: não há evidência suficiente;
- `não aplicável`: item fora da operação;
- `descontinuado`: item encerrado, com dependências verificadas.

### Criticidade

- `crítica`: perda de acesso pode interromper a operação ou causar risco relevante;
- `alta`: impacto significativo em entrega, vendas, dados ou receita;
- `média`: impacto controlável com alternativa;
- `baixa`: impacto pequeno ou não imediato.

## Estado atual do inventário

No momento desta primeira consolidação, os itens abaixo são conhecidos como ferramentas institucionais, preferenciais ou potenciais da Monvi, mas seus dados operacionais ainda precisam ser confirmados pelo CEO e pelos responsáveis técnicos.

Nenhuma senha, token, chave privada, código de recuperação ou segredo deve ser incluído neste documento.

## Matriz de ativos

| Ativo | Categoria | Finalidade | Status | Proprietário da conta | Admins | Responsável operacional | Responsável financeiro | Criticidade | MFA | Plano/custo | Renovação | Evidência | Próxima ação |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Domínio institucional | identidade | presença digital e e-mail | não confirmado | não confirmado | não confirmado | Victor/Filipe, provisório | Victor, provisório | crítica | não confirmado | não confirmado | não confirmado | não confirmada | localizar registrador e titularidade |
| Google Workspace | comunicação | e-mail, Drive e colaboração | declarado, sem evidência | não confirmado | não confirmado | Victor, provisório | Victor, provisório | crítica | não confirmado | não confirmado | não confirmado | diretriz institucional | confirmar tenant, plano, admins e cobrança |
| Google Drive | armazenamento | documentos operacionais | declarado, sem evidência | vinculado ao Workspace, a confirmar | não confirmado | Victor, provisório | Victor, provisório | alta | não confirmado | não confirmado | não confirmado | diretriz institucional | mapear pastas, proprietários e compartilhamentos |
| WhatsApp Business | atendimento | contato comercial e suporte | não confirmado | não confirmado | não confirmado | Victor, provisório | não confirmado | alta | não confirmado | não confirmado | não confirmado | não confirmada | confirmar número, titularidade e backups |
| GitHub | desenvolvimento | repositórios e controle de versão | declarado, sem evidência | não confirmado | não confirmado | Filipe, provisório | Victor, provisório | crítica | não confirmado | não confirmado | não confirmado | diretriz institucional | confirmar organização, owners e repositórios |
| Vercel | infraestrutura | publicação de aplicações e sites | declarado, sem evidência | não confirmado | não confirmado | Filipe, provisório | Victor, provisório | alta | não confirmado | não confirmado | não confirmado | ferramenta preferencial | confirmar conta, times, projetos e cobrança |
| Cloudflare | infraestrutura | DNS, segurança e performance | declarado, sem evidência | não confirmado | não confirmado | Filipe, provisório | Victor, provisório | crítica | não confirmado | não confirmado | não confirmado | ferramenta preferencial | confirmar zonas, admins e recuperação |
| Figma | design | design e prototipação | declarado, sem evidência | não confirmado | não confirmado | Victor/Filipe, provisório | Victor, provisório | média | não confirmado | não confirmado | não confirmado | diretriz institucional | confirmar workspace, arquivos e permissões |
| Nuvemshop | e-commerce | implantação e operação de lojas | declarado, sem evidência | por cliente ou Monvi, a confirmar | não confirmado | Victor/Filipe, provisório | por contrato, a confirmar | alta | não confirmado | não confirmado | não confirmado | plataforma preferencial | definir padrão de titularidade por cliente |
| n8n | automação | fluxos e integrações | declarado, sem evidência | não confirmado | não confirmado | Filipe, provisório | Victor, provisório | crítica | não confirmado | não confirmado | não confirmado | ferramenta preferencial | confirmar hospedagem, backups e credenciais |
| Make | automação | alternativa para integrações | não confirmado | não confirmado | não confirmado | Filipe, provisório | Victor, provisório | média | não confirmado | não confirmado | não confirmado | alternativa aprovada quando justificada | verificar uso real e dependências |
| OpenAI API | inteligência artificial | agentes e automações | declarado, sem evidência | não confirmado | não confirmado | Victor/Filipe, provisório | Victor, provisório | alta | não confirmado | uso variável, não confirmado | não aplicável ou variável | diretriz institucional | confirmar organização, projetos, limites e cobrança |
| Google Analytics | métricas | análise de sites e conversões | declarado, sem evidência | não confirmado | não confirmado | Filipe, provisório | não aplicável | alta | não confirmado | não confirmado | não aplicável | diretriz institucional | confirmar propriedades, admins e eventos |
| Meta Business Manager | marketing | gestão de ativos e anúncios | não confirmado | não confirmado | não confirmado | Victor, provisório | Victor, provisório | alta | não confirmado | não confirmado | não confirmado | não confirmada | confirmar portfólio, admins, páginas e pixels |
| Meta Ads | marketing | mídia paga | não confirmado | vinculado ao Meta, a confirmar | não confirmado | Victor, provisório | Victor, provisório | média | não confirmado | variável | não aplicável | não confirmada | confirmar conta de anúncios e forma de pagamento |
| CRM | comercial | pipeline e acompanhamento | não confirmado | não confirmado | não confirmado | Victor, provisório | Victor, provisório | alta | não confirmado | não confirmado | não confirmado | não confirmada | decidir ferramenta e registrar processo mínimo |
| Planilhas operacionais | operação | controles temporários | não confirmado | não confirmado | não confirmado | Victor, provisório | não aplicável | média | herdado do Workspace | não confirmado | não aplicável | não confirmada | listar planilhas críticas e responsáveis |
| E-mail marketing | marketing | relacionamento e campanhas | não confirmado | não confirmado | não confirmado | Victor, provisório | Victor, provisório | média | não confirmado | não confirmado | não confirmado | não confirmada | verificar existência e base legal de contatos |
| Ferramenta de suporte | atendimento | chamados e SLA | não confirmado | não confirmado | não confirmado | Victor, provisório | Victor, provisório | média | não confirmado | não confirmado | não confirmado | não confirmada | definir necessidade conforme contratos |
| Bancos de dados | infraestrutura | dados de aplicações | não confirmado | não confirmado | não confirmado | Filipe, provisório | Victor, provisório | crítica | não confirmado | não confirmado | não confirmado | não confirmada | mapear por projeto sem registrar segredos |
| Hospedagens adicionais | infraestrutura | sites e sistemas legados | não confirmado | não confirmado | não confirmado | Filipe, provisório | Victor, provisório | alta | não confirmado | não confirmado | não confirmado | não confirmada | identificar provedores e dependências |

## Responsabilidades provisórias

As responsabilidades abaixo são hipóteses operacionais aprovadas anteriormente, mas ainda precisam ser confirmadas por ativo:

| Área | Responsável provisório | Observação |
|---|---|---|
| estratégia, comercial e relacionamento | Victor | confirmar delegações e acessos |
| desenvolvimento, infraestrutura e segurança técnica | Filipe | confirmar escopo e disponibilidade |
| IA e automações | Victor e Filipe | responsabilidade conjunta, com supervisão humana |
| assinaturas e financeiro | Victor | confirmar meios de pagamento e renovação |
| investimentos e decisões críticas | Victor e Filipe | decisão conjunta quando aplicável |

## Informações obrigatórias ainda ausentes

Para cada ativo, devem ser confirmados:

- titularidade;
- e-mail principal;
- dois administradores quando possível;
- MFA;
- método de recuperação;
- plano contratado;
- valor e moeda;
- frequência de cobrança;
- vencimento ou renovação;
- forma de pagamento;
- dependências técnicas;
- dados tratados;
- backups;
- responsável pela revisão periódica;
- evidência de controle.

## Riscos imediatos

### Risco 1 — titularidade desconhecida

Contas em e-mails pessoais, de fornecedores ou de clientes podem impedir recuperação e continuidade.

### Risco 2 — administrador único

Ativos críticos com apenas um administrador elevam o risco de bloqueio operacional.

### Risco 3 — MFA e recuperação não confirmados

Sem MFA e recuperação documentada, a Monvi pode perder acesso a ativos essenciais.

### Risco 4 — cobranças e renovações sem controle

Planos, valores e vencimentos não confirmados podem gerar interrupções, cobranças indevidas ou dependência invisível.

### Risco 5 — titularidade de ativos de clientes

É necessário separar claramente ativos da Monvi e ativos dos clientes, especialmente em domínio, hospedagem, Nuvemshop, Analytics, Meta, automações e bancos de dados.

### Risco 6 — segredos distribuídos

Tokens e credenciais podem estar em navegadores, mensagens, arquivos ou contas pessoais. Esta task não deve copiar esses segredos; deve apenas mapear onde são administrados.

### Risco 7 — dependências não documentadas

Integrações entre formulários, CRM, WhatsApp, e-mail, n8n, APIs e bancos de dados podem quebrar sem que exista responsável definido.

## Ordem recomendada de verificação

1. domínio, DNS, Workspace e e-mails;
2. GitHub, Cloudflare, Vercel e bancos de dados;
3. n8n, OpenAI API e integrações críticas;
4. WhatsApp Business, Meta e Analytics;
5. Nuvemshop e ativos mantidos para clientes;
6. assinaturas, cobranças e renovações;
7. Figma, Drive, planilhas e ferramentas auxiliares.

## Checklist de entrevista com o CEO

Para cada ativo:

- a conta existe?
- quem é o titular?
- qual e-mail controla a conta?
- há dois administradores?
- MFA está ativo?
- a recuperação foi testada?
- existe cobrança?
- qual é o valor e a data de renovação?
- quem usa a ferramenta?
- qual cliente ou processo depende dela?
- quais dados são tratados?
- existe backup?
- qual é o risco de interrupção?
- qual evidência confirma as respostas?

## Critérios para futura aprovação

O inventário só deve ser promovido para `approved` quando:

- os ativos críticos tiverem titularidade confirmada;
- responsáveis estiverem definidos;
- campos desconhecidos estiverem assumidos como pendência explícita;
- nenhuma credencial sensível estiver registrada;
- riscos críticos tiverem próxima ação;
- o CEO revisar a matriz;
- a task `021` puder ser encerrada sem presumir implantação.

## Limites

Este documento:

- não comprova conformidade;
- não comprova segurança;
- não comprova contratação;
- não comprova disponibilidade;
- não substitui auditoria técnica;
- não substitui inventário financeiro;
- não substitui contrato, DPA ou política de acesso;
- não autoriza compra, cancelamento ou migração.

## Estado de pausa

A validação factual deste inventário foi pausada porque a Monvi ainda não possui acesso, titularidade ou evidência suficiente para confirmar os ativos críticos.

### Condição para retomada

Retomar quando houver, no mínimo:

- acesso ou evidência do domínio e DNS;
- identificação do Google Workspace e administradores;
- identificação da organização ou contas GitHub;
- confirmação de Cloudflare e Vercel;
- confirmação do ambiente n8n;
- confirmação da organização ou projetos da OpenAI API.

### Estado preservado

- documento em `review`;
- campos não comprovados mantidos como `não confirmado` ou `declarado, sem evidência`;
- nenhuma credencial sensível registrada;
- nenhuma conta presumida;
- nenhuma conformidade presumida;
- nenhuma compra, migração, configuração ou cancelamento executado.
