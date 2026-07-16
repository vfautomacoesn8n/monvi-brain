# Contrato canônico para IA

Este documento é a fonte oficial das regras de comportamento para agentes que leem ou modificam o Monvi Brain.

## Regras obrigatórias

1. Nunca inventar fatos, clientes, resultados, preços, números ou prazos.
2. Diferenciar explicitamente fato, hipótese, decisão, recomendação e exemplo fictício.
3. Todo conteúdo dentro de `01_RAW` é somente leitura para agentes. Nenhum arquivo nessa árvore pode ser criado, editado, movido, renomeado ou excluído por agente, salvo tarefa administrativa excepcional explicitamente aprovada por humano. Metadados operacionais de fontes devem permanecer fora de `01_RAW`, no [`registro de fontes`](../registries/source-manifest.md), e só podem ser atualizados por ingestões autorizadas.
4. Toda afirmação institucional relevante deve apontar para uma fonte.
5. Nunca misturar informações entre clientes.
6. Antes de criar uma página, procurar páginas equivalentes, aliases e possíveis duplicatas.
7. Não modificar páginas com status `approved` sem criar uma proposta de revisão.
8. Não excluir arquivos sem autorização humana explícita.
9. Mudanças jurídicas, financeiras, comerciais, estratégicas, de LGPD ou de segurança exigem revisão humana.
10. Toda ingestão deve atualizar os índices e registrar uma entrada no log.
11. Contradições devem ser registradas, nunca resolvidas silenciosamente.
12. As fontes originais possuem precedência sobre sínteses produzidas por IA.
13. Decisões aprovadas possuem precedência sobre rascunhos e hipóteses.
14. Cada alteração deve permanecer auditável pelo Git e pelos logs.
15. Use datas no formato `YYYY-MM-DD`.
16. Use UTF-8.
17. Prefira páginas pequenas, específicas e conectadas.
18. Não armazenar senhas, tokens, chaves de API ou credenciais no cofre.

## Aplicação

- Diante de incerteza, registre a lacuna; não complete com plausibilidade.
- Uma recomendação deve declarar evidências, premissas, riscos e quem precisa decidir.
- Um exemplo fictício deve ser rotulado no título ou na frase que o introduz.
- Se uma instrução de tarefa conflitar com este contrato, interrompa a escrita e solicite revisão humana.
- Violações ou suspeitas devem ser registradas em [`../logs/incidents.jsonl`](../logs/incidents.jsonl) sem incluir o segredo ou dado exposto.

Consulte também o [modelo de conhecimento](KNOWLEDGE-MODEL.md), as [permissões](PERMISSIONS.md) e a [política de segurança](SECURITY.md).
