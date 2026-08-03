# Padrão de Evidências Factual

## 1. Definição Fundamental

> **Princípio Central**: Um requisito está comprovado quando alcança o nível de evidência exigido por sua classificação e por seus critérios de aceite.

A simples existência de um arquivo, a criação de um relatório de audit ou a mesclagem de um commit **não constituem prova técnica de funcionamento por si sós**. A evidência deve ser empírica e verificável no nível adequado.

---

## 2. Os 8 Níveis de Evidência

1. **`planejado`**: Tarefa criada, escopo delimitado e critérios de aceite formalizados.
2. **`documentado`**: Documentação, decisão ou guia redigido, formatado, com links portáteis e sintaxe validada.
3. **`implementado`**: Código ou configuração editado no repositório local.
4. **`testado`**: Compilação `typecheck`, linters e testes de unidade executados com sucesso (resultado de suíte automatizada).
5. **`executado em runtime`**: Execução real em processo ativo (instância de banco de dados, servidor HTTP ou runtime Node.js/Docker).
6. **`integração funcional comprovada`**: Comunicação empírica e troca de dados verificada entre dois ou mais componentes/serviços conforme o contrato no ambiente autorizado. *(Nota: A mesclagem no Git é gerida separadamente na Dimensão C pelo estado `merged`)*.
7. **`verificado`**: Checagem pós-merge realizada em ambiente limpo e sincronizado com a branch `main`.
8. **`encerrado`**: Tarefa formalmente chancelada pelo CEO via gate de encerramento e arquivada em `00_SYSTEM/tasks/done/`.

---

## 3. Matriz de Exigência por Tipo de Tarefa

| Classificação da Task | Níveis Exigidos para Entrega | Nível de Runtime Exigido? | Requisitos de Integração e Encerramento |
| :--- | :--- | :--- | :--- |
| **Governança / Documentação** | `planejado`, `documentado` | Não (Software runtime não aplicável) | Integração Git (`merged`), `verificado`, `encerrado` |
| **Código / Software** | `implementado`, `testado` | Testes de unidade e `typecheck` | `integração funcional comprovada` (se houver serviços), `merged`, `verificado`, `encerrado` |
| **Banco de Dados / Persistência** | `implementado`, `executado em runtime` | Sim (Instância real de banco em dev) | Conexão real comprovada, `merged`, `verificado`, `encerrado` |
| **Autenticação / RBAC** | `implementado`, `testado`, `executado em runtime` | Sim (Middlewares e guarda de segurança) | `integração funcional comprovada`, `merged`, `verificado`, `encerrado` |
| **Integração de Serviços** | `implementado`, `testado`, `integração funcional comprovada` | Sim (Comunicação real entre serviços) | `integração funcional comprovada`, `merged`, `verificado`, `encerrado` |
| **Homologação / Produção** | Todos os níveis + Gate do CEO | Sim (Ambiente alvo real) | `verificado`, `encerrado` |

---

## 4. O que NÃO Serve como Prova

- **Mock de Teste**: Prova lógica isolada de componentes, mas não comprova integração funcional entre serviços ou persistência relacional real;
- **Relatório de Audit**: Registra o processo de validação, mas não substitui a saída real dos comandos de teste;
- **Leitura do Código**: Confirmar que o código está escrito não substitui a execução dos testes automatizados (`npm test` / `typecheck`);
- **Merge no Git**: Confirma apenas a integração de texto no repositório (`merged` na Dimensão C), não comprovando por si só o correto comportamento em runtime.
