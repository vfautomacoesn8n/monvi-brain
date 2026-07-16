# Modelo canônico de conhecimento

## Ordem de confiança

Quando duas informações competirem, use esta ordem como ponto de partida e registre qualquer contradição:

1. Fonte original em `01_RAW`.
2. Registro de decisão formal e aprovado.
3. Página da Wiki com status `approved`.
4. Página com status `review`.
5. Nota operacional.
6. Hipótese ou rascunho.
7. Output gerado por IA.

Recência, escopo e autoridade da fonte ainda importam. A ordem não autoriza apagar versões conflitantes.

## Classificação de confidencialidade

- `public`: divulgação externa autorizada.
- `internal`: uso interno da Monvi; não publicar automaticamente.
- `confidential`: acesso limitado por necessidade de conhecimento.
- `restricted`: acesso excepcional e explicitamente autorizado; maior proteção e menor circulação.

## Status

- `draft`: conteúdo inicial, incompleto ou ainda não verificado.
- `review`: pronto para revisão humana, sem aprovação final.
- `approved`: revisado e aprovado por autoridade identificada.
- `deprecated`: substituído ou desaconselhado, preservado para histórico.
- `archived`: fora do fluxo ativo, preservado sem expectativa de atualização.

Transições normais: `draft → review → approved → deprecated → archived`. Retornos para revisão exigem justificativa. Uma IA não promove conteúdo a `approved` sem decisão humana registrada.

## Tipos de conhecimento

`source`, `fact`, `hypothesis`, `decision`, `concept`, `entity`, `process`, `service`, `policy`, `synthesis`, `client`, `project`, `meeting`, `risk`, `task` e `output`.

Use um único tipo principal por nota. Relacione conceitos complementares por `related` em vez de duplicar conteúdo.

## Modelo de nota

Notas estruturadas seguem [`../schemas/note.schema.json`](../schemas/note.schema.json) e incluem, no mínimo:

- identidade: `id`, `type`, `title`;
- governança: `status`, `owner`, `confidentiality`;
- temporalidade: `created_at`, `updated_at`, `reviewed_at`, `review_cycle`;
- proveniência e conexão: `sources`, `related`, `aliases`, `tags`.

IDs são estáveis, únicos e em letras minúsculas, por exemplo `wiki-monvi-001`. Datas ausentes usam `null`, nunca uma data inventada. `owner` pode ser `unassigned` até atribuição humana.

## Proveniência

- `sources` contém caminhos Markdown relativos ou identificadores estáveis de fontes.
- Todo conteúdo dentro de `01_RAW` é somente leitura para agentes. Nenhum arquivo nessa árvore pode ser criado, editado, movido, renomeado ou excluído por agente, salvo tarefa administrativa excepcional explicitamente aprovada por humano; sua interpretação vive em outra camada.
- O [`manifesto de fontes`](../registries/source-manifest.md) é metadado operacional fora de `01_RAW`: pode ser atualizado por uma ingestão autorizada, mas não substitui nem modifica a fonte original.
- Afirmações relevantes devem ser vinculadas ao trecho, arquivo ou decisão que as suporta.
- Quando este bootstrap for a única origem de um texto inicial, use `AI-CONTRACT.md` ou a especificação registrada no histórico Git como fonte de bootstrap, sem apresentá-la como validação externa.

## Contradições

Registre: afirmações em conflito, fontes, datas, escopo, nível de confiança, impacto e responsável pela resolução. Até decisão humana, mantenha as versões e marque a página como `review` quando o conflito afetar sua confiabilidade.
