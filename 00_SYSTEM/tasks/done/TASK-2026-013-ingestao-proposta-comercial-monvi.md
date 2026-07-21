---
id: task-2026-013
type: task
title: "Ingestão da Proposta Comercial Monvi"
status: approved
task_state: done
owner: codex
reviewer: ceo-monvi
confidentiality: confidential
active_client: null
requires_review: false
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: "2026-07-21"
review_cycle: on-change
sources:
  - "../../../01_RAW/monvi/02_Proposta_Comercial_Monvi.pdf"
related:
  - "../../../02_WIKI/comercial/Proposta-comercial.md"
  - "../../../02_WIKI/juridico/SOW.md"
  - "../../../02_WIKI/juridico/Termo-de-aceite.md"
aliases: []
tags: [task, ingestao, proposta, comercial, template]
agent: codex
allowed_paths:
  - "03_OPERATIONS/templates/Proposta-comercial.md"
  - "02_WIKI/index.md"
  - "00_SYSTEM/registries/source-manifest.md"
  - "00_SYSTEM/logs/ingestion.jsonl"
  - "00_SYSTEM/logs/changes.jsonl"
  - "00_SYSTEM/tasks/active/TASK-2026-013-ingestao-proposta-comercial-monvi.md"
  - "00_SYSTEM/tasks/review/TASK-2026-013-ingestao-proposta-comercial-monvi.md"
read_only_paths:
  - "01_RAW/monvi/02_Proposta_Comercial_Monvi.pdf"
  - "AI-START.md"
  - "AGENTS.md"
  - "00_SYSTEM/canonical/AI-CONTRACT.md"
  - "00_SYSTEM/canonical/KNOWLEDGE-MODEL.md"
  - "00_SYSTEM/canonical/PERMISSIONS.md"
  - "00_SYSTEM/canonical/SECURITY.md"
  - "00_SYSTEM/workflows/ingest.md"
  - "00_SYSTEM/schemas/note.schema.json"
  - "02_WIKI/comercial/Proposta-comercial.md"
  - "02_WIKI/juridico/SOW.md"
  - "02_WIKI/juridico/Termo-de-aceite.md"
  - "02_WIKI/juridico/Juridico-e-contratos.md"
  - "02_WIKI/seguranca/LGPD-e-seguranca.md"
  - "02_WIKI/servicos/Catalogo-de-servicos.md"
  - "02_WIKI/servicos/Manutencao.md"
  - "02_WIKI/processos/Fluxo-operacional.md"
  - "02_WIKI/processos/Playbook-operacao-e-entrega.md"
  - "02_WIKI/tecnologia/Assinaturas-e-infraestrutura.md"
  - "02_WIKI/empresa/Apresentacao-institucional.md"
forbidden_paths:
  - "01_RAW/monvi/Monvi - Manual da marca.pdf"
  - "01_RAW/monvi/Monvi - Estratégia Empresarial.pdf"
  - "01_RAW/monvi/Monvi - Catalogo de serviços.pdf"
  - "01_RAW/monvi/Manual_de_Processos_Monvi_Redesenhado_2026.pdf"
  - "01_RAW/monvi/12_Plano_de_Marketing_Monvi.pdf"
  - "01_RAW/monvi/11_Conteudo_e_Marketing_Monvi.pdf"
  - "01_RAW/monvi/09_Assinaturas_e_Infraestrutura_Monvi.pdf"
  - "01_RAW/monvi/07_Operacao_Monvi.pdf"
  - "01_RAW/monvi/06_LGPD_e_Seguranca_Monvi.pdf"
  - "01_RAW/monvi/05_Juridico_Monvi.pdf"
  - "01_RAW/monvi/04_Comercial_e_Vendas_Monvi.pdf"
  - "01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pdf"
  - "01_RAW/monvi/02_Apresentacao_Institucional_Monvi.pptx"
  - "02_WIKI/marketing/"
  - "02_WIKI/estrategia/"
  - "04_OUTPUTS/"
  - "05_SHARED/"
acceptance_criteria:
  - "A fonte confidencial preserva hash, tamanho, quatro páginas A4 e natureza de template comercial não preenchido."
  - "Um modelo operacional em review mantém todos os campos variáveis vazios e não declara preço, prazo, escopo, obrigação, aceite ou operação vigentes."
  - "Índice, manifesto, logs e tarefa em review registram a ingestão com auditoria e revisão humana obrigatória."
---

# Ingestão da Proposta Comercial Monvi

## Objetivo

Registrar um modelo operacional de proposta comercial, em estado de revisão, sem transformar o template em proposta enviada, preço oficial, política comercial, obrigação contratual, contrato completo ou autorização de uso externo.

## Fonte e natureza documental

Fonte exclusiva: `01_RAW/monvi/02_Proposta_Comercial_Monvi.pdf`. Título declarado: **Proposta Comercial — Monvi**; ano técnico: 2026; versão não declarada; 124506 bytes; quatro páginas A4; SHA-256 `CE9032D9CAB7AB30AB721C2474C75DA9974108E85DE870A0A3170A29EEBB8C7A`.

A fonte é um template comercial confidencial, não preenchido, sem dados reais de cliente, preços reais, assinatura, contrato completo ou campos PDF editáveis. Template não é proposta enviada; valor-modelo não é preço oficial; exemplo de escopo não é escopo padrão; aceite comercial não é contrato completo; prazo-modelo não é prazo garantido.

## Verificação visual confirmada externamente

A confirmação externa registrou quatro páginas A4, layout íntegro, tabelas das páginas 3 e 4 legíveis, ausência de corte ou texto oculto relevante, placeholders visíveis e ausência de dados reais, assinatura, links, formulário ou necessidade de OCR. Esta task não trata a confirmação externa como autorização comercial ou jurídica.

## Entregáveis autorizados

- Criar `03_OPERATIONS/templates/Proposta-comercial.md` como modelo em `review`.
- Atualizar somente índice, manifesto e logs auditáveis listados em `allowed_paths`.
- Encaminhar esta tarefa para `tasks/review` somente depois das validações.

## Limites, riscos e decisões humanas pendentes

Não preencher campos, não definir preço, desconto, parcelamento, validade, SLA, prazo, responsável real, canal, ferramenta, obrigação, aceite, base legal ou condição jurídica. A formulação de aceite da fonte deve ser substituída por texto seguro e marcada para revisão jurídica; aprovação comercial não inicia contrato ou projeto por si só.

Pendências humanas: aprovar escopo, exclusões, preços, condições de pagamento, cronograma, responsabilidades, dependências de terceiros, condições de início, texto jurídico, tratamento de dados, propriedade intelectual, suporte, manutenção e autorização de envio externo.

## Encerramento humano

- decisão: B — template oficial com ressalvas;
- aprovador: ceo-monvi;
- data: 2026-07-21;
- artefato aprovado: `03_OPERATIONS/templates/Proposta-comercial.md`;
- uso permitido: modelo interno oficial para elaboração de propostas personalizadas;
- uso externo: somente após preenchimento, revisão comercial e validações aplicáveis;
- movimento final: `review` para `done`;
- ressalvas: preços, prazos, validade, pagamento, escopo, responsabilidades, propriedade intelectual, tratamento de dados, suporte, manutenção e SLA permanecem variáveis por proposta;
- limite jurídico: proposta não substitui contrato, SOW, DPA ou termo de aceite e a aprovação do template não constitui parecer jurídico;
- limite operacional: aprovação comercial não inicia automaticamente o projeto e nenhum resultado é garantido;
- pendências especializadas: validações jurídica, de LGPD e de segurança permanecem obrigatórias conforme o caso concreto.
