---
id: synthesis-infraestrutura-deploy-modelo-monvi-v1
type: synthesis
title: "Infraestrutura e deploy — modelo documental"
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
  - "Inventario-de-ferramentas.md"
  - "../processos/Fluxos-por-servico.md"
  - "../servicos/Manutencao.md"
  - "../servicos/Automacoes.md"
  - "../seguranca/LGPD-e-seguranca.md"
aliases: ["Modelo documental de infraestrutura"]
tags: [tecnologia, infraestrutura, deploy, automacao, modelo]
source_id: source-assinaturas-infraestrutura-monvi-v1
source_file: 01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf
source_sha256: 73B5398E98F069BB565C0FCCC54EEE36A2FFD1C76BE31700554EADF2CDBF00AD
source_pages: ["5", "7", "8"]
created_from_task: task-2026-011
---

# Infraestrutura e deploy — modelo documental

> **Aviso operacional** — As relações abaixo são documentais. Não comprovam ambiente publicado, integração ativa, titularidade, acesso, conta, domínio, infraestrutura implantada ou serviço em produção.

## Relação documental proposta

`GitHub → versionamento` · `Vercel → deploy e hospedagem` · `Registro.br → domínio` · `Cloudflare → DNS, CDN, HTTPS e proteção` · `n8n → automação e integrações`.

## Componentes citados

### GitHub

A fonte cita versionamento de código, repositórios e histórico, com `[plano]`. Recomenda organizar repositórios por cliente/projeto e revogar acessos ao fim do vínculo. Não confirma organização, repositório real, usuário, visibilidade, branch, secret, integração ou backup.

### Vercel

A fonte cita deploy e hospedagem de sites e aplicações web, com `[plano]`. Não confirma projeto, ambiente, domínio, variável, deploy realizado, disponibilidade ou plano vigente.

### n8n

A fonte cita fluxos, integrações via API e disparos automáticos, com `[cloud/self-host]`, e recomenda documentar fluxos e proteger credenciais em variáveis. Não confirma instância, workflow real, execução, credencial, histórico, log, fila, backup ou monitoramento. “Coração das automações” é alegação documental, não infraestrutura ativa.

### Registro.br

A fonte cita registro e gestão de domínios `.br`, com `[por domínio]`, e recomenda titularidade pelo cliente. Não confirma domínio, registrador real, titular, renovação, vencimento ou acesso.

### Cloudflare

A fonte cita DNS, CDN, HTTPS e proteção contra ameaças, com `[plano]`. Não confirma zona, proxy, firewall, cache, analytics, domínio, acesso ou plano ativo.

## Segurança, processos e manutenção

As recomendações devem ser lidas junto de [[../seguranca/LGPD-e-seguranca|LGPD e Segurança]], [[../processos/Fluxos-por-servico|Fluxos por serviço]] e [[../servicos/Manutencao|Manutenção]]. Elas não duplicam políticas completas e não autorizam configuração, publicação, automação ou manutenção ativa.

## Riscos e pendências

Há dependências não confirmadas de escopo, dados, acessos, clientes, contratos e controles. A infraestrutura proposta não é infraestrutura implantada; qualquer decisão sobre domínio, ambiente, integração, acesso ou continuidade requer validação humana e segurança aplicável.

## Proveniência

Fonte: `01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf`, páginas 5, 7 e 8, com conferência visual das tabelas e notas.

## Decisão executiva do CEO — 2026-07-21

Vercel e Cloudflare são ferramentas preferenciais para publicação, DNS, segurança e performance; GitHub integra a stack oficial de código e versionamento. Outras soluções podem ser adotadas quando houver justificativa.

Contas críticas devem usar e-mail corporativo da Monvi e dois administradores quando possível.

**Responsabilidade provisória:** Filipe responde por infraestrutura, DNS, código, deploy e segurança técnica. Victor e Filipe compartilham decisões sobre IA, automações e contratações recorrentes. A divisão depende de alinhamento entre os sócios.

A decisão não comprova domínio, ambiente, conta, deploy, backup, monitoramento ou infraestrutura implantada.
