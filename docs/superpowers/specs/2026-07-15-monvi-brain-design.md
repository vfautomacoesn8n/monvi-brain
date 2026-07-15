# Monvi Brain — Design aprovado

## Objetivo

Criar, na raiz deste workspace, um cofre operacional portátil para a Monvi que possa ser lido e mantido por pessoas, Obsidian e agentes de IA de diferentes fornecedores, sem depender de formatos proprietários.

## Abordagem escolhida

O sistema adota Markdown com YAML frontmatter para conhecimento legível, JSON Schema para contratos de metadados e JSON Lines para auditoria incremental. Recursos próprios do Obsidian são opcionais; links Markdown relativos são o padrão. Esta opção foi escolhida em vez de uma arquitetura dependente de plugins do Obsidian ou de um banco de dados porque atende diretamente aos requisitos de portabilidade, auditabilidade e independência de fornecedor.

## Arquitetura

- `00_SYSTEM`: regras canônicas, schemas, workflows, templates, filas de tarefas, logs, scripts e auditorias.
- `01_RAW`: fontes originais imutáveis, organizadas por origem; somente manifestos e arquivos explicativos são criados agora.
- `02_WIKI`: conhecimento curado e conectado, com conteúdo inicial da Monvi marcado como `draft` ou `review`.
- `03_OPERATIONS`: registros mutáveis de clientes, projetos, reuniões, decisões, riscos e indicadores.
- `04_OUTPUTS`: propostas, relatórios, apresentações, conteúdos e documentos derivados.
- `05_SHARED`: prompts, referências e exportações reutilizáveis e revisadas.
- `99_ARCHIVE`: material histórico que não deve permanecer ativo.

## Governança e fluxo de dados

As regras oficiais vivem apenas em `00_SYSTEM/canonical`. `AI-START.md` é a entrada universal; `AGENTS.md`, `CLAUDE.md` e `GEMINI.md` são adaptadores mínimos. Uma ingestão preserva a fonte em `01_RAW`, classifica e extrai informações, propõe atualizações na Wiki ou em Operações, atualiza índices e acrescenta um evento JSONL. Fontes originais e decisões aprovadas prevalecem sobre sínteses e rascunhos.

## Segurança

O conteúdo usa quatro níveis de confidencialidade: `public`, `internal`, `confidential` e `restricted`. Dados de clientes são isolados por diretório e escopo de tarefa. Credenciais são proibidas; mudanças jurídicas, financeiras, comerciais, estratégicas, de LGPD ou segurança exigem revisão humana. `01_RAW` nunca é alterado por agentes após ingestão.

## Metadados e validação

Todos os tipos estruturados compartilham os campos-base `id`, `type`, `title`, `status`, `owner`, `confidentiality`, datas, ciclo de revisão, fontes, relacionados, aliases e tags. Schemas especializados usam composição JSON Schema e restrições próprias. A validação final cobre sintaxe JSON, referências locais dos schemas, links Markdown, IDs duplicados, integridade de `01_RAW`, diretórios vazios e estado do Git.

## Conteúdo inicial

As páginas iniciais usam apenas a descrição e o princípio institucional fornecidos. Nenhum cliente, preço, resultado, prazo ou alegação adicional será criado. Onde ainda não há conteúdo operacional, um `README.md` explicará finalidade, regras de uso e limites.

## Critérios de aceitação

1. Toda a árvore solicitada existe, sem exclusão de arquivos preexistentes.
2. Regras, níveis, status e tipos aparecem na fonte canônica e nos schemas.
3. Schemas JSON são válidos e templates têm YAML frontmatter coerente.
4. Adaptadores não duplicam o contrato canônico.
5. Links relativos resolvem e IDs são únicos.
6. `01_RAW` não contém fatos inventados nem ingestão iniciada.
7. Nenhuma dependência é instalada.
8. Git contém a branch `main` e o commit solicitado, quando disponível.

## Auto-revisão

O design não contém placeholders, não amplia o escopo para ingestão ou automação executável e mantém coerência entre portabilidade, segurança, governança e estrutura de diretórios. A especificação detalhada fornecida pelo usuário é a fonte de requisitos e sua instrução explícita para começar constitui a aprovação deste design.
