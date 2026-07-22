---
id: matrix-monvi-ecosystem-boundaries
title: Matriz de fronteiras e responsabilidades do ecossistema Monvi
type: architecture
status: review
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: true
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: null
source_task: task-2026-028
classification: internal
---

# Matriz de fronteiras e responsabilidades do ecossistema Monvi

## 1. Objetivo

Definir responsabilidades, limites e dependências entre os componentes do ecossistema.

## 2. Matriz de componentes

| Componente | Responsabilidade principal | Pode decidir | Não pode |
|---|---|---|---|
| Monvi Brain | armazenar conhecimento e operação | precedência documental conforme status | autenticar, autorizar ou executar |
| Monvi Core Brain | controlar identidade, política e execução | aplicar política aprovada | substituir decisão humana crítica |
| Helpper | apoiar, organizar e coordenar | priorizar recomendações dentro do escopo | aprovar, acessar secrets ou agir fora da permissão |
| Agente especializado | executar tarefa limitada | decisões locais não críticas dentro do escopo | ampliar o próprio acesso |
| CEO | direção, aprovação e exceção | decisões estratégicas e críticas | contornar obrigações legais ou técnicas |
| Funcionário | executar função atribuída | decisões operacionais dentro do papel | acessar cliente não atribuído |
| Parceiro | colaborar em escopo específico | decisões técnicas delegadas | acessar contexto amplo da Monvi |
| Cliente | consultar e aprovar o próprio contexto | aprovações previstas em contrato | acessar dados internos ou de outros clientes |
| Cofre de secrets | guardar e fornecer uso controlado | autorizar uso técnico conforme política | expor secret ao Brain ou agente |
| Sistema externo | executar função integrada | conforme configuração | definir política da Monvi |

## 3. Matriz de ações

| Ação | Brain | Core Brain | Helpper | Humano |
|---|---|---|---|---|
| Ler conteúdo | fornece | autoriza | consulta | solicita |
| Criar rascunho | armazena | valida escopo | cria | revisa |
| Alterar canônico | registra | bloqueia sem fluxo | propõe | aprova |
| Publicar | registra evidência | autoriza e executa | prepara | aprova |
| Usar credencial | não participa | solicita uso controlado | nunca recebe | aprova quando exigido |
| Excluir | versiona | aplica regra | solicita | aprova |
| Compartilhar externamente | registra | aplica política | prepara | aprova |
| Executar automação | registra | controla | solicita | aprova |
| Alterar permissão | registra decisão | executa | não altera | administrador aprova |

## 4. Fronteiras obrigatórias

### Brain versus Core Brain

- Brain guarda conhecimento.
- Core Brain controla acesso.
- Brain não contém secrets.
- Core Brain não reescreve canônico por conta própria.

### Core Brain versus Helpper

- Core Brain aplica política.
- Helpper interpreta e coordena.
- Helpper não contorna política.
- Core Brain não assume estratégia do CEO.

### Helpper versus agentes

- Helpper delega escopo.
- Agente devolve resultado.
- Agente não recebe contexto excessivo.
- Helpper consolida e pede revisão.

### Funcionário versus cliente

- funcionário acessa apenas clientes atribuídos;
- cliente acessa apenas o próprio espaço;
- parceiro recebe escopo temporário;
- desligamento encerra acesso.

## 5. Perfis e permissões conceituais

| Perfil | Brain institucional | Cliente atribuído | Canônico | Execução | Administração |
|---|---|---|---|---|---|
| CEO | amplo | amplo | aprova | aprova | sim |
| Comercial | leitura | clientes atribuídos | propõe | limitado | não |
| Projetos | leitura | projetos atribuídos | propõe | operacional | não |
| Técnico | leitura necessária | projetos atribuídos | não altera | técnico supervisionado | não |
| Automação/IA | leitura necessária | projetos atribuídos | não altera | técnico supervisionado | não |
| Marketing | institucional autorizado | casos aprovados | propõe | publicação com aprovação | não |
| Financeiro | limitado | dados necessários | não altera | financeiro autorizado | não |
| Jurídico | jurídico autorizado | casos designados | recomenda | não executa operação | não |
| Parceiro | mínimo | escopo temporário | não | limitado | não |
| Cliente | próprio contexto | próprio | não | aprovações próprias | não |
| Agente | mínimo necessário | contexto explícito | não | conforme política | não |

## 6. Aprovações mínimas

| Ação | Aprovador mínimo |
|---|---|
| alterar canônico | CEO ou revisor designado |
| publicar externamente | responsável humano |
| enviar proposta final | comercial responsável |
| assumir preço ou prazo | CEO ou comercial autorizado |
| usar dado sensível | responsável + base válida |
| executar automação crítica | responsável técnico |
| alterar permissão | administrador |
| excluir conteúdo crítico | proprietário + administrador |
| usar credencial crítica | responsável autorizado |
| compartilhar com terceiro | responsável do contexto |

## 7. Responsabilidades de segurança

| Tema | Dono primário | Apoio |
|---|---|---|
| identidade | administrador | Core Brain |
| autorização | administrador | Core Brain |
| canônico | CEO/revisor | Helpper |
| secrets | técnico responsável | cofre |
| cliente | responsável da conta | projeto |
| logs | administrador técnico | Core Brain |
| incidentes | responsável técnico | CEO |
| jurídico | profissional qualificado | CEO |
| LGPD | responsável definido | jurídico/técnico |
| continuidade | técnico responsável | CEO |

## 8. Regras de exceção

Toda exceção deve possuir:

- justificativa;
- risco;
- proprietário;
- aprovador;
- início;
- fim;
- compensação;
- evidência;
- revisão;
- encerramento.

Exceção verbal, implícita ou sem prazo não é válida.

## 9. Limites do documento

Esta matriz não concede acesso real.

Ela define o modelo que deverá orientar as tasks de identidade, permissões e implementação.
