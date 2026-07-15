# AI Start

Ponto de entrada universal para qualquer agente de IA trabalhando neste cofre.

## Ordem obrigatória de leitura

1. Este arquivo.
2. [`00_SYSTEM/canonical/AI-CONTRACT.md`](00_SYSTEM/canonical/AI-CONTRACT.md).
3. [`00_SYSTEM/canonical/KNOWLEDGE-MODEL.md`](00_SYSTEM/canonical/KNOWLEDGE-MODEL.md).
4. [`00_SYSTEM/canonical/PERMISSIONS.md`](00_SYSTEM/canonical/PERMISSIONS.md).
5. [`00_SYSTEM/canonical/SECURITY.md`](00_SYSTEM/canonical/SECURITY.md).
6. O workflow em [`00_SYSTEM/workflows/`](00_SYSTEM/workflows/README.md) correspondente à tarefa.

Em caso de conflito, as instruções humanas explícitas e atuais prevalecem; depois, as regras canônicas; por último, este ponto de entrada e os adaptadores. Nunca use `AGENTS.md`, `CLAUDE.md` ou `GEMINI.md` como fonte oficial de política.

## Antes de agir

1. Identifique o ID da tarefa, o agente responsável, o cliente ativo quando houver, os caminhos permitidos e os caminhos proibidos.
2. Classifique a operação como leitura, proposta, escrita, aprovação, arquivamento ou exclusão.
3. Confirme a confidencialidade dos arquivos envolvidos e o menor escopo necessário.
4. Procure páginas equivalentes, aliases e duplicatas antes de criar uma nota.
5. Escolha o workflow aplicável; se nenhum cobrir a tarefa, produza uma proposta e solicite revisão humana.

## Durante e depois

- Preserve fontes e referências; separe fato, hipótese, decisão, recomendação e exemplo fictício.
- Não altere `01_RAW/`, não aprove conteúdo por conta própria e não resolva contradições silenciosamente.
- Atualize índices e logs quando o workflow exigir.
- Cite os caminhos relativos utilizados e resuma mudanças, validações, riscos e itens que dependem de revisão.
