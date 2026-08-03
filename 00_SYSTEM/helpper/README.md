# Guia Operacional do Helpper

## 1. O que é o Helpper

O **Helpper** é a camada operacional de governança, apoio a processos, navegação e padronização do ecossistema Monvi Brain.

> **Aviso Importante**: Nesta versão, o Helpper **não é um agente executável autônomo** nem possui capacidade de autoaprovação. Ele atua exclusivamente como guia documental de suporte, padronização e governança para a atuação dos agentes de IA em pair programming com a liderança humana.

---

## 2. Hierarquia Documental e Resolução de Conflitos

A atuação no repositório Monvi Brain obedece rigorosamente à seguinte cadeia de precedência:

1. **Decisão Explícita e Atual do CEO (Gate Humano Vigente)**: A autorização humana direta concedida no contexto atual é soberana.
2. **Fontes Canônicas**:
   - [AI-CONTRACT.md](../canonical/AI-CONTRACT.md) (Constituição canônica da IA e proibição de autoaprovação);
   - [PERMISSIONS.md](../canonical/PERMISSIONS.md) (Matriz de permissões e escopos de atuação);
   - [SECURITY.md](../canonical/SECURITY.md) (Políticas de segurança da informação e de secrets);
   - [KNOWLEDGE-MODEL.md](../canonical/KNOWLEDGE-MODEL.md) (Modelo de conhecimento do repositório).
3. **Decisão Formal Vigente Aplicável**: Decisões registradas com `status: approved` em `03_OPERATIONS/decisoes/`.
4. **Plano Mestre de Construção**: [Plano-Mestre-de-Construcao-Monvi-Brain.md](../roadmaps/Plano-Mestre-de-Construcao-Monvi-Brain.md) (Direção estratégica e sequência, **sem autoridade automática de execução**).
5. **Task Ativa**: O documento da tarefa em `00_SYSTEM/tasks/active/` que define o escopo autorizado do ciclo atual.
6. **Arquiteturas e Políticas Vigentes Aplicáveis** (`00_SYSTEM/architecture/` e `00_SYSTEM/policies/`).
7. **Guias Operacionais do Helpper** (`00_SYSTEM/helpper/`): Este guia e seus manuais auxiliares.
8. **Instruções Pontuais**: Orientações secundárias compatíveis com os níveis superiores.

### Regras de Articulação e Escalonamento
- A task ativa não pode contrariar as fontes canônicas;
- Os guias operacionais do Helpper não podem ampliar o escopo da task ativa;
- O Plano Mestre estabelece direção, mas não concede autorização de execução;
- Uma instrução pontual não supera um gate humano ou uma proibição vigente;
- **Em caso de conflito entre níveis**, o agente deve **parar imediatamente a execução** e escalar ao CEO para resolução explícita, sendo proibido tomar decisões por interpretação autônoma.

---

## 3. Preservação dos Helppers Individuais

Os arquivos de Helpper individuais das pessoas e executivos em `03_OPERATIONS/pessoas/` (ex.: `03_OPERATIONS/pessoas/ceo/HELPER.md`) pertencem à camada operacional de perfis e não são alterados ou substituídos por esta estrutura de governança.

---

## 4. Estrutura dos Manuais Operacionais

- [Ciclo de Vida de Tarefas](TASK-LIFECYCLE.md): Especificação das 5 dimensões independentes de governança e matriz de transições completos.
- [Padrão de Evidências](EVIDENCE-STANDARD.md): Especificação dos 8 níveis de evidência e matrizes de exigência por tipo de task.
- [Catálogo de Prompts](PROMPT-TEMPLATES.md): Templates padronizados de comandos contendo a trava explícita de gate humano em cada bloco.

---

## 5. Como Iniciar uma Tarefa e Identificar o Gate Atual

1. **Confirmar Repositório e Ler Entrada**: Ler `AI-START.md`, `AGENTS.md` e as fontes canônicas.
2. **Localizar a Task Ativa**: Inspecionar o arquivo correspondente em `00_SYSTEM/tasks/active/`.
3. **Identificar o Gate Humano Vigente**: Ler a última mensagem do CEO e confirmar qual a frase exata de autorização recebida.
4. **Verificar os Paths**: Consultar `allowed_paths`, `read_only_paths` e `forbidden_paths` da task.
5. **Consultar o Nível de Evidência Exigido**: Verificar a classificação da task em [EVIDENCE-STANDARD.md](EVIDENCE-STANDARD.md).
6. **Executar Somente o Autorizado**: Parar imediatamente ao atingir o limite do gate e solicitar o próximo gate explicitamente.
