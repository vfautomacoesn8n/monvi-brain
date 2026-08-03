# Catálogo de Templates de Prompts

## Regra Fundamental de Autorização

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

---

## 1. Template: Análise Read-Only

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Inspecionar arquivos e estado do repositório sem realizar qualquer edição.
- **Gate Necessário**: Gate de análise read-only enviado pelo CEO no diálogo.
- **Autorizado**: Comandos de leitura, `git status`, `git log`, inspeção de código e logs.
- **Não Autorizado**: Criar, editar, mover ou excluir arquivos; criar branch, commit ou push.
- **Caminhos ou Recursos Permitidos**: Todos os arquivos do repositório em modo leitura.
- **Evidências Esperadas**: Relatório sintético da análise apresentado no diálogo.
- **Validações**: Confirmar que `git status --short` permanece 100% inalterado.
- **Formato da Resposta**: Apresentação dos achados factuais da inspeção.
- **Próximo Gate**: `AUTORIZADA DEFINIÇÃO DE ESCOPO`.
- **Obrigação de Parar**: Parar imediatamente a execução e aguardar orientação do CEO.

---

## 2. Template: Definição Textual de Escopo

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Definir e apresentar a proposta técnica de escopo de uma nova tarefa no diálogo.
- **Gate Necessário**: `AUTORIZADA DEFINIÇÃO DE ESCOPO`.
- **Autorizado**: Redigir e apresentar a proposta textual da task e de eventual decisão no diálogo.
- **Não Autorizado**: Criar arquivos no disco, criar branch, alterar logs ou staging.
- **Caminhos ou Recursos Permitidos**: Leitura de templates e normas; nenhuma escrita em disco.
- **Evidências Esperadas**: Proposta de task formatada com critérios de aceite e paths explicitados no chat.
- **Validações**: Validação prévia de zero sobreposição entre `allowed_paths`, `read_only_paths` e `forbidden_paths`.
- **Formato da Resposta**: Proposta textual com delimitadores Markdown.
- **Próximo Gate**: `AUTORIZADA CRIAÇÃO CONTROLADA DA TASK XXX`.
- **Obrigação de Parar**: Parar imediatamente e solicitar aprovação prévia para a criação física.

---

## 3. Template: Criação Controlada de Task

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Criar o arquivo formal de tarefa na branch dedicada.
- **Gate Necessário**: `AUTORIZADA CRIAÇÃO CONTROLADA DA TASK XXX`.
- **Autorizado**: Confirmar branch e criar o arquivo `00_SYSTEM/tasks/active/TASK-XXX.md`.
- **Não Autorizado**: Executar `git add`, alterar staging, criar decisão, alterar logs ou implementar.
- **Caminhos ou Recursos Permitidos**: `00_SYSTEM/tasks/active/TASK-XXX.md`.
- **Evidências Esperadas**: Conteúdo integral do arquivo criado e `git status --short`.
- **Validações**: Codificação UTF-8, 0 `\uFFFD`, 0 trailing whitespace, links portáteis válidos.
- **Formato da Resposta**: Conteúdo do arquivo, diff de arquivos não rastreados e resultado de validações.
- **Próximo Gate**: `AUTORIZADA CRIAÇÃO DA DECISÃO PROPOSTA E DOS REGISTROS DE ABERTURA`.
- **Obrigação de Parar**: Parar antes de criar o arquivo de decisão ou modificar logs.

---

## 4. Template: Criação de Decisão Proposta

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Criar o arquivo formal de decisão com status `proposed` e anexar evento de abertura no log.
- **Gate Necessário**: `AUTORIZADA CRIAÇÃO DA DECISÃO PROPOSTA E DOS REGISTROS DE ABERTURA`.
- **Autorizado**: Criar `03_OPERATIONS/decisoes/decision-XXX.md` (`status: proposed`) e anexar linha de criação em `changes.jsonl`.
- **Não Autorizado**: Alterar status da decisão para `approved`, alterar `decisions.jsonl` (salvo se schema permitir), ou iniciar implementação.
- **Caminhos ou Recursos Permitidos**: `03_OPERATIONS/decisoes/decision-XXX.md` e `00_SYSTEM/logs/changes.jsonl`.
- **Evidências Esperadas**: Texto da decisão proposta e nova linha do evento em `changes.jsonl`.
- **Validações**: Sintaxe JSONL válida, unicidade de `event_id`, resolução de links relativos a partir de `03_OPERATIONS/decisoes/`.
- **Formato da Resposta**: Conteúdo da decisão, diffs do log e status do Git.
- **Próximo Gate**: `APROVADA DECISÃO DA TASK XXX — REGISTRO CONTROLADO`.
- **Obrigação de Parar**: Parar e aguardar chancela formal do CEO.

---

## 5. Template: Aprovação de Decisão

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Registrar formalmente a aprovação da proposta de decisão.
- **Gate Necessário**: `APROVADA DECISÃO DA TASK XXX — REGISTRO CONTROLADO`.
- **Autorizado**: Alterar o arquivo da decisão para `status: approved`, anexar linha em `decisions.jsonl` e anexar evento em `changes.jsonl`.
- **Não Autorizado**: Iniciar implementação técnica ou documental, alterar código, banco ou staging.
- **Caminhos ou Recursos Permitidos**: Decisão formal, `00_SYSTEM/logs/decisions.jsonl`, `00_SYSTEM/logs/changes.jsonl`.
- **Evidências Esperadas**: Linha de aprovação registrada em `decisions.jsonl` e `changes.jsonl`.
- **Validações**: Parse JSONL sem erros, IDs únicos, datas reais de aprovação preenchidas.
- **Formato da Resposta**: Diffs completos dos logs e da decisão aprovada.
- **Próximo Gate**: `AUTORIZADA IMPLEMENTAÇÃO DA TASK XXX`.
- **Obrigação de Parar**: Parar e aguardar autorização de implementação.

---

## 6. Template: Implementação Local

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Executar as edições ou criações de arquivos no repositório local.
- **Gate Necessário**: `AUTORIZADA IMPLEMENTAÇÃO DA TASK XXX`.
- **Autorizado**: Criar ou editar exclusivamente os arquivos especificados em `allowed_paths`.
- **Não Autorizado**: Editar arquivos canônicos, Helppers individuais, código fora do escopo, `git add` ou commit.
- **Caminhos ou Recursos Permitidos**: `allowed_paths` da task ativa.
- **Evidências Esperadas**: Saída dos testes automatizados, typecheck e auditoria de execução local.
- **Validações**: `typecheck`, linters, suíte de testes de unidade e verificação de formato.
- **Formato da Resposta**: Diffs locais, relatórios de validação e audit factual de execução local.
- **Próximo Gate**: `APROVADO CONTEÚDO E DIFF DA TASK XXX`.
- **Obrigação de Parar**: Parar antes do staging ou commit.

---

## 7. Template: Ativação Local

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Ativar temporariamente serviços, processos ou instâncias em ambiente de desenvolvimento local para testes.
- **Gate Necessário**: `AUTORIZADA ATIVAÇÃO LOCAL DA TASK XXX`.
- **Autorizado**: Subir contêineres Docker descartáveis ou servidores de dev especificados no escopo.
- **Não Autorizado**: Conectar a banco de produção/homologação, usar dados reais ou gerar credenciais persistentes.
- **Caminhos ou Recursos Permitidos**: Scripts de dev local e variáveis de ambiente descartáveis.
- **Evidências Esperadas**: Logs do runtime local ou resultados de testes de integração.
- **Validações**: Verificação de porta local e isolamento em ambiente de desenvolvimento.
- **Formato da Resposta**: Evidências empíricas do runtime local.
- **Próximo Gate**: `APROVADO CONTEÚDO E DIFF DA TASK XXX`.
- **Obrigação de Parar**: Desligar serviços temporários e aguardar revisão.

---

## 8. Template: Revisão de Conteúdo e Diff

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Apresentar a revisão detalhada do conteúdo e dos diffs para chancela do CEO.
- **Gate Necessário**: Gate de solicitação de revisão enviado pelo agente ao concluir a implementação.
- **Autorizado**: Executar `git status --short` e `git diff`.
- **Não Autorizado**: Modificar arquivos, staging, commit ou push.
- **Caminhos ou Recursos Permitidos**: Apenas leitura do working tree.
- **Evidências Esperadas**: Diffs integrais de arquivos rastreados e conteúdo de arquivos não rastreados.
- **Validações**: Staging 100% limpo antes da autorização de commit.
- **Formato da Resposta**: Apresentação organizada dos diffs e matriz de critérios de aceite.
- **Próximo Gate**: `APROVADO CONTEÚDO E DIFF DA TASK XXX`.
- **Obrigação de Parar**: Aguardar instrução e chancela humana.

---

## 9. Template: Correção

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Executar correções pontuais em arquivos modificados ou criados após apontamento do CEO ou falha de teste.
- **Gate Necessário**: `AUTORIZADA CORREÇÃO DA TASK XXX`.
- **Autorizado**: Editar exclusivamente os trechos apontados ou arquivos afetados pela falha.
- **Não Autorizado**: Ampliar escopo da tarefa, alterar critérios ou staging.
- **Caminhos ou Recursos Permitidos**: Arquivos delimitados pela instrução de correção.
- **Evidências Esperadas**: Diffs corrigidos e re-execução dos testes afetados.
- **Validações**: Resolução comprovada do apontamento ou falha.
- **Formato da Resposta**: Apresentação dos ajustes e nova validação.
- **Próximo Gate**: `APROVADO CONTEÚDO E DIFF DA TASK XXX`.
- **Obrigação de Parar**: Parar e solicitar nova revisão do diff.

---

## 10. Template: Auditoria de Evidências

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Produzir o relatório formal de audit factual em `00_SYSTEM/audits/`.
- **Gate Necessário**: Gate de auditoria ou implementação local concedido pelo CEO.
- **Autorizado**: Redigir ou atualizar o arquivo em `00_SYSTEM/audits/`.
- **Não Autorizado**: Declarar task encerrada ou commit realizado antecipadamente.
- **Caminhos ou Recursos Permitidos**: `00_SYSTEM/audits/Execucao-task-XXX.md`.
- **Evidências Esperadas**: Matriz de requisitos vs arquivos vs evidências de validação.
- **Validações**: UTF-8, links portáteis resolvidos, classificação factual do estado.
- **Formato da Resposta**: Apresentação do relatório de audit.
- **Próximo Gate**: `APROVADO CONTEÚDO E DIFF DA TASK XXX`.
- **Obrigação de Parar**: Parar e aguardar chancela do relatório.

---

## 11. Template: Preparação ou Autorização de Commit

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Solicitar autorização explícita para adicionar arquivos ao staging e criar o commit local.
- **Gate Necessário**: `APROVADO CONTEÚDO E DIFF DA TASK XXX`.
- **Autorizado**: Apresentar a lista exata dos arquivos a serem adicionados ao staging.
- **Não Autorizado**: Executar `git add` ou `git commit` sem a chancela do próximo gate.
- **Caminhos ou Recursos Permitidos**: Lista de arquivos afetados na task.
- **Evidências Esperadas**: Confirmação da lista de arquivos e mensagem proposta de commit.
- **Validações**: `git status --short` e verificação de arquivos sensíveis/indevidos.
- **Formato da Resposta**: Lista de arquivos e frase de gate solicitada.
- **Próximo Gate**: `APROVADO PARA COMMIT`.
- **Obrigação de Parar**: Aguardar o gate `APROVADO PARA COMMIT`.

---

## 12. Template: Commit

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Adicionar arquivos ao staging e criar o commit na branch local.
- **Gate Necessário**: `APROVADO PARA COMMIT`.
- **Autorizado**: Executar `git add <arquivos>` e `git commit -m "..."`.
- **Não Autorizado**: Executar `git push` ou alterar branches.
- **Caminhos ou Recursos Permitidos**: Arquivos alterados na task.
- **Evidências Esperadas**: Hash do commit gerado e output de `git log -n 1`.
- **Validações**: Confirmar que o staging ficou limpo após o commit (`git status`).
- **Formato da Resposta**: Hash do commit, mensagem utilizada e status do Git.
- **Próximo Gate**: `AUTORIZADO PUSH`.
- **Obrigação de Parar**: Parar imediatamente e aguardar o gate de push.

---

## 13. Template: Push

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Enviar a branch local com os commits para o repositório remoto.
- **Gate Necessário**: `AUTORIZADO PUSH`.
- **Autorizado**: Executar `git push origin <branch>`.
- **Não Autorizado**: Abrir Pull Request ou realizar merge.
- **Caminhos ou Recursos Permitidos**: N/A (operação Git remota).
- **Evidências Esperadas**: Output do comando `git push`.
- **Validações**: Confirmar que a branch remota foi atualizada.
- **Formato da Resposta**: Saída do terminal e estado de sincronia.
- **Próximo Gate**: `AUTORIZADO PR`.
- **Obrigação de Parar**: Aguardar autorização para abertura do PR.

---

## 14. Template: Abertura de Pull Request

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Abrir formalmente o Pull Request no repositório remoto para a branch `main`.
- **Gate Necessário**: `AUTORIZADO PR`.
- **Autorizado**: Abrir o Pull Request; registrar URL, número, título, branch base e branch de origem; apresentar checks e arquivos do PR.
- **Não Autorizado**: Aprovar o próprio PR, fazer merge, presumir revisão humana concluída ou alterar conteúdo fora de correção autorizada.
- **Caminhos ou Recursos Permitidos**: N/A (operação na plataforma Git).
- **Evidências Esperadas**: Número, URL e título do Pull Request aberto, lista de checks e de arquivos alterados.
- **Validações**: Execução bem-sucedida das checagens automatizadas da CI/CD.
- **Formato da Resposta**: Link do PR, resumo dos entregáveis e estado dos checks.
- **Próximo Gate**: `AUTORIZADA REVISÃO DE PR`.
- **Obrigação de Parar**: Parar imediatamente e aguardar autorização de revisão do PR. Não iniciar merge.

---

## 15. Template: Revisão de Pull Request

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Analisar o Pull Request aberto, verificar o diff, os checks e os critérios de aceite antes de aprovar para merge.
- **Gate Necessário**: `AUTORIZADA REVISÃO DE PR`.
- **Autorizado**: Leitura integral do PR; análise do diff; análise dos checks automatizados; comparação com critérios de aceite da task; identificação de riscos e inconsistências.
- **Não Autorizado**: Fazer merge, alterar código durante revisão exclusivamente read-only, aprovar automaticamente o PR ou ampliar escopo.
- **Caminhos ou Recursos Permitidos**: Leitura do PR e dos arquivos na branch da task.
- **Evidências Esperadas**: Relatório de revisão com análise de conformidade, riscos identificados e resultado da revisão.
- **Validações**: Checks obrigatórios aprovados, critérios de aceite verificados, nenhuma pendência bloqueante.
- **Formato da Resposta**: Relatório de revisão com recomendação e resultado.
- **Resultados Possíveis**: `APROVADO PR PARA MERGE`, `CORREÇÕES NECESSÁRIAS NO PR`, `PR REJEITADO`, `PR BLOQUEADO`.
- **Próximo Gate**: `APROVADO PR PARA MERGE` (se aprovado) ou `AUTORIZADAS CORREÇÕES DO PR` (se correções necessárias).
- **Limite do Gate de Correção**: `AUTORIZADAS CORREÇÕES DO PR` autoriza somente correções locais e validações locais; não autoriza `git add`, staging, commit, push nem atualização do PR remoto.
- **Obrigação de Parar**: Aguardar decisão do CEO sobre o resultado da revisão. Não iniciar merge sem `APROVADO PR PARA MERGE`.

---

## 16. Template: Correção de Pull Request

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Executar correções apontadas durante a revisão do Pull Request e submeter novo diff para reavaliação.
- **Gate Necessário**: `AUTORIZADAS CORREÇÕES DO PR`.
- **Autorizado**: Editar localmente exclusivamente os arquivos e trechos delimitados pela revisão; executar validações locais nos arquivos corrigidos; apresentar o novo conteúdo e o novo diff; atualizar factualmente o audit local quando isso estiver previsto no escopo.
- **Não Autorizado**: Executar `git add`; alterar staging; criar commit; fazer push; atualizar o PR remoto; solicitar revisão do PR antes de o conteúdo corrigido chegar ao remoto; fazer merge; aprovar o próprio PR; ampliar escopo; alterar arquivos não delimitados pela revisão.
- **Caminhos ou Recursos Permitidos**: Arquivos delimitados pela instrução de correção do PR.
- **Evidências Esperadas**: Novo conteúdo e diff locais, resultado das validações re-executadas e audit local atualizado quando aplicável.
- **Validações**: Resolução comprovada dos apontamentos da revisão e execução das validações locais aplicáveis.
- **Formato da Resposta**: Novo conteúdo e diff locais, validações locais re-executadas e audit local atualizado quando aplicável.
- **Fluxo Obrigatório Após Correções**: `CORREÇÕES NECESSÁRIAS NO PR` → `AUTORIZADAS CORREÇÕES DO PR` → correções locais e validações → `APROVADO CONTEÚDO E DIFF DAS CORREÇÕES DO PR` → `APROVADO PARA COMMIT` → commit realizado → `AUTORIZADO PUSH` → push realizado e PR remoto atualizado → `AUTORIZADA REVISÃO DE PR` → nova revisão.
- **Relação com os Templates Gerais**: Esta correção segue o Template 8 (revisão de conteúdo e diff), o Template 12 (commit), o Template 13 (push) e o Template 15 (revisão de PR). Correção de PR não cria exceção aos gates de Git.
- **Regra de Não-Propagação**: Nenhum gate concede automaticamente o próximo.
- **Próximo Gate**: `APROVADO CONTEÚDO E DIFF DAS CORREÇÕES DO PR`.
- **Obrigação de Parar**: Parar antes de staging, commit e push e aguardar o próximo gate. Não solicitar nova revisão do PR enquanto o conteúdo corrigido não tiver sido commitado e enviado ao remoto com os gates próprios.

---

## 17. Template: Merge

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Efetuar o merge da branch da task na branch `main`.
- **Gate Necessário**: `AUTORIZADO MERGE`.
- **Pré-condições Obrigatórias**: PR aberto; a versão atualmente presente no PR remoto revisada com resultado `APROVADO PR PARA MERGE`; inexistência de commits posteriores à revisão; checks obrigatórios correspondentes ao mesmo commit aprovado; nenhuma pendência bloqueante; autorização explícita do CEO. A simples existência do PR não é condição suficiente para merge.
- **Invalidade por Novo Commit**: Qualquer novo commit após `APROVADO PR PARA MERGE` invalida essa aprovação e exige nova revisão do Pull Request.
- **Autorizado**: Executar a mesclagem do PR chancelado na branch `main`.
- **Não Autorizado**: Mover a task para `done`, encerrar sem verificação pós-merge ou fazer merge sem revisão de PR concluída.
- **Caminhos ou Recursos Permitidos**: Branch `main`.
- **Evidências Esperadas**: Hash do commit de merge na `main`.
- **Validações**: Confirmar conclusão do merge na plataforma Git e que todas as pré-condições foram atendidas.
- **Formato da Resposta**: Hash de merge, confirmação das pré-condições e instrução para verificação.
- **Próximo Gate**: `AUTORIZADA VERIFICAÇÃO PÓS-MERGE`.
- **Obrigação de Parar**: Retornar à main local para verificação. Não mover task para done.

---

## 18. Template: Verificação Pós-Merge

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Sincronizar a branch `main` local e confirmar o funcionamento limpo pós-merge.
- **Gate Necessário**: `AUTORIZADA VERIFICAÇÃO PÓS-MERGE`.
- **Autorizado**: `git checkout main`, `git pull origin main`, executar suítes de validação/teste na `main`.
- **Não Autorizado**: Mover task para `done`, excluir branch ou iniciar nova task.
- **Caminhos ou Recursos Permitidos**: Repositório sincronizado na branch `main`.
- **Evidências Esperadas**: Saída dos testes e validações executados na `main` limpa.
- **Validações**: Confirmar que `main` e `origin/main` estão no mesmo commit e que os testes passam.
- **Formato da Resposta**: Relatório de verificação pós-merge.
- **Próximo Gate**: `AUTORIZADO ENCERRAMENTO`.
- **Obrigação de Parar**: Aguardar chancela executiva de encerramento.

---

## 19. Template: Encerramento

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Finalizar formalmente a tarefa, mover o arquivo para `00_SYSTEM/tasks/done/` e registrar o evento final.
- **Gate Necessário**: `AUTORIZADO ENCERRAMENTO`.
- **Autorizado**: Alterar a task para `status: done`, mover de `active/` para `done/`, anexar evento `task_completed` em `changes.jsonl` e remover branch local.
- **Não Autorizado**: Iniciar nova tarefa ou alterar código fora do escopo de arquivamento.
- **Caminhos ou Recursos Permitidos**: Arquivo da task e `00_SYSTEM/logs/changes.jsonl`.
- **Evidências Esperadas**: Novo caminho da task em `00_SYSTEM/tasks/done/` e evento no log.
- **Validações**: `changes.jsonl` com parse válido e remoção limpa da branch.
- **Formato da Resposta**: Relatório de encerramento formal da tarefa.
- **Próximo Gate**: `AUTORIZADA PRÓXIMA ETAPA`.
- **Obrigação de Parar**: Ciclo da tarefa completamente finalizado.

---

## 20. Template: Próxima Etapa

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Apresentar o planejamento inicial da próxima tarefa do roadmap.
- **Gate Necessário**: `AUTORIZADA PRÓXIMA ETAPA`.
- **Autorizado**: Consultar o Plano Mestre e apresentar a proposta textual da próxima task.
- **Não Autorizado**: Criar arquivos ou branches para a nova tarefa sem gate específico.
- **Caminhos ou Recursos Permitidos**: Leitura do Plano Mestre e documentos estratégicos.
- **Evidências Esperadas**: Proposta de próxima tarefa no diálogo.
- **Validações**: Alinhamento com a sequência do roadmap.
- **Formato da Resposta**: Proposta textual da nova iniciativa.
- **Próximo Gate**: `AUTORIZADA DEFINIÇÃO DE ESCOPO`.
- **Obrigação de Parar**: Aguardar instrução para iniciar a nova task.

---

## 21. Template: Remediação

> Este template não concede autorização. A autorização somente existe quando o CEO envia explicitamente o gate correspondente no contexto da task ativa.

- **Objetivo**: Reverter alterações não autorizadas ou corrigir erros de governança de forma segura.
- **Gate Necessário**: Gate explícito de remediação concedido pelo CEO.
- **Autorizado**: Restaurar arquivos modificados e remover arquivos locais não autorizados conforme a ordem direta do CEO.
- **Não Autorizado**: Executar `git reset --hard` ou `git clean` sem autorização explícita.
- **Caminhos ou Recursos Permitidos**: Arquivos afetados pela instrução de remediação.
- **Evidências Esperadas**: `git status --short` e `git log -n 1` confirmando o retorno ao estado limpo.
- **Validações**: Repositório restaurado exatamente ao commit autorizado.
- **Formato da Resposta**: Audit de remediação e confirmação de estado.
- **Próximo Gate**: Gate definido na instrução de remediação.
- **Obrigação de Parar**: Parar e aguardar autorização para retomar o ciclo.
