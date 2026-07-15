# Monvi Brain

O Monvi Brain é o segundo cérebro operacional da Monvi: um cofre de conhecimento portátil, auditável e legível por pessoas, Obsidian e agentes de IA. A fonte oficial das regras está em [`00_SYSTEM/canonical/`](00_SYSTEM/canonical/AI-CONTRACT.md); arquivos específicos de fornecedores são apenas adaptadores.

> Princípio institucional: **“Menos tarefa manual. Mais resultado.”**

## Começar

- Pessoas: consulte o [índice da Wiki](02_WIKI/index.md) e o [modelo de conhecimento](00_SYSTEM/canonical/KNOWLEDGE-MODEL.md).
- Agentes de IA: comece por [`AI-START.md`](AI-START.md) e siga a ordem de leitura indicada.
- Ingestão: leia o [workflow de ingestão](00_SYSTEM/workflows/ingest.md). Não inicie ingestão sem uma tarefa autorizada.
- Consultas: leia o [workflow de consulta](00_SYSTEM/workflows/query.md).

## Arquitetura

| Caminho | Responsabilidade |
| --- | --- |
| `00_SYSTEM/` | Governança, schemas, templates, workflows, tarefas, logs e auditorias. |
| `01_RAW/` | Fontes originais imutáveis. Agentes não alteram esta camada. |
| `02_WIKI/` | Conhecimento curado, conectado e revisável. |
| `03_OPERATIONS/` | Registros operacionais de clientes, projetos, reuniões, decisões e riscos. |
| `04_OUTPUTS/` | Entregáveis derivados. Não são fonte primária por si só. |
| `05_SHARED/` | Prompts, referências e exportações compartilháveis. |
| `99_ARCHIVE/` | Conteúdo histórico fora do fluxo ativo. |

## Convenções

- Formatos canônicos: Markdown, YAML, JSON, JSON Schema e JSON Lines.
- Codificação: UTF-8; datas: `YYYY-MM-DD`.
- Links: Markdown relativo por padrão; Wiki Links são opcionais e complementares.
- Arquivos e diretórios: nomes estáveis; IDs nunca são reutilizados.
- Histórico: Git mais logs JSONL; contradições permanecem explícitas.

## Trabalho multiagente

- Várias IAs podem ler simultaneamente.
- Cada agente escritor deve trabalhar em branch ou Git worktree separado.
- Nenhuma IA deve editar diretamente a branch `main` sem revisão. A criação inicial deste repositório é a única exceção expressamente autorizada pela tarefa de bootstrap.
- Cada tarefa deve ter ID, agente responsável, caminhos permitidos e caminhos proibidos.
- Mudanças entram em `main` somente após revisão do diff.
- Um único escritor deve controlar cada arquivo por vez; conflitos são devolvidos para revisão humana.

## Limites

Não armazene credenciais. Não misture clientes. Não trate sínteses ou outputs de IA como fontes originais. Mudanças de alto impacto exigem revisão humana conforme [`PERMISSIONS.md`](00_SYSTEM/canonical/PERMISSIONS.md).
