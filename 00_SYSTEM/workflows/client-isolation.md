# Workflow: isolamento de cliente

## Ativação

Toda tarefa deve declarar `active_client`:

- quando contiver uma string, a tarefa fica limitada ao cliente identificado e aos caminhos exatos autorizados;
- `active_client: null` proíbe consultar, listar, resumir ou modificar qualquer diretório de cliente, salvo autorização explícita registrada na tarefa;
- nenhuma tarefa pode consultar múltiplos clientes simultaneamente;
- mudar de cliente exige uma nova tarefa ou uma atualização aprovada da tarefa atual.

## Limites obrigatórios

1. Quando `active_client` for uma string, limite leitura e escrita ao diretório desse cliente e aos arquivos canônicos estritamente necessários ao workflow. Declare caminhos de consulta em `read_only_paths` e caminhos de alteração em `allowed_paths`.
2. Não consulte, pesquise, liste ou resuma diretórios de outros clientes; com `active_client: null`, não acesse nenhum diretório de cliente fora da autorização explícita da tarefa.
3. Em `01_RAW/clientes`, consulte somente a subpasta do cliente ativo declarada em `read_only_paths`. Todo conteúdo de `01_RAW` permanece somente leitura para agentes.
4. Em `03_OPERATIONS/clientes`, escreva somente na subpasta do cliente ativo e apenas nos caminhos da tarefa.
5. Não reutilize dados `confidential` ou `restricted` em prompts, templates, exemplos, benchmarks ou outputs de outro cliente.
6. Não crie links entre clientes. Referências compartilhadas devem estar em uma área institucional revisada e não conter dados exclusivos.
7. Inclusão de segundo cliente é proibida. Mudança de cliente ou ampliação de caminho é mudança de escopo e exige nova tarefa ou atualização aprovada da tarefa atual antes de continuar.

## Prevenção de vazamento

- Pesquise IDs e caminhos vinculados somente dentro do escopo ativo.
- Antes do diff final, procure referências a clientes fora do escopo sem exibir conteúdo confidencial.
- Se detectar possível mistura, interrompa a escrita, preserve evidências mínimas e registre incidente sanitizado.

## Encerramento

Liste arquivos lidos e modificados, confirme que nenhum outro cliente foi consultado e encaminhe o diff para revisão.
