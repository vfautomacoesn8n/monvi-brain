---
id: task-2026-025
title: Bloqueios legais, LGPD e segurança da Monvi
type: task
status: review
task_state: review
priority: high
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-21"
updated_at: "2026-07-21"
reviewed_at: null
allowed_paths:
  - 00_SYSTEM/tasks/review/TASK-2026-025-bloqueios-legais-lgpd-seguranca-monvi.md
  - 00_SYSTEM/tasks/done/TASK-2026-025-bloqueios-legais-lgpd-seguranca-monvi.md
  - 03_OPERATIONS/governance/Bloqueios-legais-LGPD-seguranca-Monvi.md
  - 03_OPERATIONS/templates/Checklist-de-liberacao-legal-LGPD-seguranca-Monvi.md
  - 03_OPERATIONS/templates/Registro-de-risco-e-excecao-Monvi.md
  - 00_SYSTEM/logs/changes.jsonl
read_only_paths:
  - 00_SYSTEM/canonical/
  - 00_SYSTEM/tasks/done/
  - 00_SYSTEM/registries/source-manifest.md
  - 00_SYSTEM/logs/ingestion.jsonl
  - 01_RAW/
  - 02_WIKI/
  - 04_OUTPUTS/
  - 05_SHARED/
forbidden_paths:
  - .git/
  - 99_ARCHIVE/
---

# Task 2026-025 — Bloqueios legais, LGPD e segurança da Monvi

## Contexto

A auditoria de prontidão operacional aprovou bloqueios legais, de LGPD e de segurança como a quinta prioridade dos próximos 30 dias.

A Monvi já possui materiais jurídicos, de LGPD e de segurança em revisão. Esses materiais não devem ser tratados como parecer jurídico, conformidade comprovada ou implementação concluída.

## Objetivo

Criar um sistema operacional mínimo para impedir publicação, contratação, integração, automação ou entrega quando existirem riscos críticos sem tratamento, decisão ou evidência.

## Entregáveis

Criar, em `review`:

- `03_OPERATIONS/governance/Bloqueios-legais-LGPD-seguranca-Monvi.md`;
- `03_OPERATIONS/templates/Checklist-de-liberacao-legal-LGPD-seguranca-Monvi.md`;
- `03_OPERATIONS/templates/Registro-de-risco-e-excecao-Monvi.md`.

## Princípios

- nenhum material substitui revisão jurídica profissional;
- nenhum checklist comprova conformidade;
- nenhum tratamento de dados deve ser presumido;
- nenhum papel legal, canal, contrato ou base legal deve ser inventado;
- riscos críticos exigem decisão humana;
- evidências devem ser registradas;
- exceções devem ter justificativa, responsável, prazo e aprovador;
- credenciais e segredos não devem ser registrados em texto aberto;
- acessos devem seguir privilégio mínimo;
- publicação deve considerar backup, rollback e responsável;
- fornecedores e integrações devem ser avaliados conforme o risco;
- dados pessoais devem ser minimizados.

## Categorias de bloqueio

### Jurídico

- ausência de escopo aprovado;
- ausência de instrumento contratual aplicável;
- ausência de aceite ou autorização necessária;
- uso de marca, conteúdo ou ativo sem autorização;
- promessa comercial não sustentada;
- cláusula, responsabilidade ou obrigação não revisada;
- dependência de terceiro sem regra clara.

### LGPD e privacidade

- finalidade de tratamento não definida;
- coleta excessiva;
- base legal não validada;
- ausência de transparência necessária;
- compartilhamento não mapeado;
- retenção indefinida;
- dados sensíveis sem controle adequado;
- transferência ou fornecedor não avaliado;
- ausência de procedimento para solicitação de titular;
- incidente de privacidade não tratado.

### Segurança

- credencial compartilhada ou exposta;
- acesso sem responsável;
- ausência de autenticação forte quando aplicável;
- ausência de backup ou rollback em mudança crítica;
- ambiente não identificado;
- segredo em código, documento ou repositório;
- dependência crítica sem monitoramento;
- acesso excessivo;
- fornecedor crítico sem avaliação;
- incidente aberto sem plano de contenção.

## Níveis de severidade

- crítico: impede avanço;
- alto: exige decisão e plano antes do avanço;
- médio: pode avançar com responsável e prazo;
- baixo: registrar e acompanhar.

## Decisões possíveis

- liberar;
- liberar com condição;
- bloquear;
- devolver para correção;
- escalar para revisão jurídica;
- escalar para revisão técnica;
- aceitar risco de forma temporária.

## Evidências mínimas

Conforme o caso:

- escopo ou proposta aprovada;
- contrato ou termo aplicável;
- autorização;
- registro de aceite;
- mapa de dados;
- finalidade;
- fornecedor;
- responsável;
- registro de acesso;
- teste;
- backup;
- plano de rollback;
- registro de incidente;
- parecer ou revisão profissional.

## Exceções

Toda exceção deve registrar:

- item;
- risco;
- severidade;
- justificativa;
- impacto;
- tratamento temporário;
- responsável;
- prazo;
- aprovador;
- data;
- condição de encerramento;
- evidência.

## Fora do escopo

- emitir parecer jurídico;
- declarar conformidade com LGPD;
- designar encarregado;
- criar canal oficial de titular;
- alterar contrato;
- aprovar cláusulas;
- implantar controles técnicos;
- configurar autenticação;
- migrar credenciais;
- contratar ferramenta;
- auditar fornecedor;
- executar teste de invasão;
- certificar segurança;
- afirmar implementação.

## Etapas

1. definir categorias de bloqueio;
2. definir níveis de severidade;
3. criar checklist de liberação;
4. criar registro de risco e exceção;
5. definir evidências mínimas;
6. definir responsáveis provisórios;
7. revisar com o CEO;
8. encaminhar itens jurídicos para profissional qualificado quando necessário;
9. testar em cenário simulado;
10. aprovar;
11. mover a task para `done`.

## Critérios de aceitação

- bloqueios jurídicos definidos;
- bloqueios de LGPD definidos;
- bloqueios de segurança definidos;
- severidade documentada;
- decisões possíveis documentadas;
- checklist de liberação criado;
- registro de risco e exceção criado;
- limites jurídicos explícitos;
- nenhuma conformidade afirmada;
- nenhuma implementação afirmada;
- materiais em `review`;
- task em `review`;
- `changes.jsonl` válido;
- nenhum caminho protegido alterado.
