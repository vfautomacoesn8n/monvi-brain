# Workflow: isolamento de cliente

## Ativação

Toda tarefa relacionada a cliente deve declarar um único `active_client` e os caminhos exatos autorizados. `active_client: none` não concede acesso geral a clientes.

## Limites obrigatórios

1. Limite leitura e escrita ao diretório do cliente ativo e aos arquivos canônicos estritamente necessários ao workflow.
2. Não consulte, pesquise, liste ou resuma diretórios de outros clientes.
3. Em `01_RAW/clientes`, consulte somente a subpasta do cliente ativo e mantenha-a somente leitura.
4. Em `03_OPERATIONS/clientes`, escreva somente na subpasta do cliente ativo e apenas nos caminhos da tarefa.
5. Não reutilize dados `confidential` ou `restricted` em prompts, templates, exemplos, benchmarks ou outputs de outro cliente.
6. Não crie links entre clientes. Referências compartilhadas devem estar em uma área institucional revisada e não conter dados exclusivos.
7. Uma mudança de cliente, inclusão de segundo cliente ou ampliação de caminho é mudança de escopo e exige revisão humana antes de continuar.

## Prevenção de vazamento

- Pesquise IDs e caminhos vinculados somente dentro do escopo ativo.
- Antes do diff final, procure referências a clientes fora do escopo sem exibir conteúdo confidencial.
- Se detectar possível mistura, interrompa a escrita, preserve evidências mínimas e registre incidente sanitizado.

## Encerramento

Liste arquivos lidos e modificados, confirme que nenhum outro cliente foi consultado e encaminhe o diff para revisão.
