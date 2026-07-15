# Segurança canônica

## Princípios

- Privilégio mínimo, necessidade de conhecimento e isolamento por cliente.
- Nenhuma credencial no cofre, inclusive em exemplos, logs, frontmatter, histórico Git ou anexos.
- Classificação antes de copiar, resumir, exportar ou compartilhar conteúdo.
- Revisão humana para decisões de LGPD, segurança e resposta a incidentes.

## Tratamento por classificação

| Nível | Armazenamento e compartilhamento |
| --- | --- |
| `public` | Pode ser exportado somente quando a publicação estiver autorizada. |
| `internal` | Permanece no ambiente interno; compartilhamento externo exige revisão. |
| `confidential` | Acesso apenas a tarefas e pessoas explicitamente autorizadas. |
| `restricted` | Acesso excepcional; não reutilizar em prompts, exemplos ou outputs fora do escopo. |

Classifique pelo nível mais restritivo entre a nota e suas fontes. Redução de classificação exige revisão humana.

## Clientes e dados pessoais

- Siga o [workflow de isolamento de cliente](../workflows/client-isolation.md).
- Não pesquise diretórios de outros clientes quando houver um cliente ativo.
- Não copie informações confidenciais entre clientes, nem como exemplo anonimizado sem autorização.
- Minimize dados pessoais. Não infira categorias sensíveis e não retenha conteúdo sem finalidade definida.

## Segredos

Se encontrar senha, token, chave ou credencial:

1. não reproduza o valor;
2. interrompa a transformação ou o compartilhamento;
3. registre um incidente sanitizado em [`../logs/incidents.jsonl`](../logs/incidents.jsonl);
4. informe o responsável humano para revogação e remoção segura do histórico.

## Incidentes

Registre data, tipo, caminhos afetados, classificação, impacto conhecido, contenção, responsável e estado. Não resolva ou encerre um incidente de segurança sem revisão humana. Preserve evidências sem ampliar a exposição.
