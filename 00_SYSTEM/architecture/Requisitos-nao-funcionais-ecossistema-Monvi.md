---
id: nfr-monvi-ecosystem
title: Requisitos não funcionais do ecossistema Monvi
type: architecture
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: "2026-07-22"
source_task: task-2026-028
classification: internal
---

# Requisitos não funcionais do ecossistema Monvi

## 1. Objetivo

Definir requisitos mínimos de qualidade, segurança e operação para futuras implementações.

## 2. Segurança

- negar acesso por padrão;
- aplicar menor privilégio;
- exigir autenticação individual;
- proteger sessões;
- registrar ações críticas;
- separar ambientes;
- manter secrets fora do Brain;
- exigir revisão para ações críticas;
- revogar acesso rapidamente;
- suportar acesso temporário;
- impedir escalada de privilégio;
- validar entrada e saída;
- limitar exportações.

## 3. Privacidade

- coletar apenas o necessário;
- definir finalidade;
- limitar retenção;
- separar clientes;
- restringir dados sensíveis;
- registrar compartilhamento;
- permitir correção e exclusão quando aplicável;
- evitar dados pessoais em prompts sem necessidade;
- revisar provedores;
- não declarar conformidade sem validação.

## 4. Disponibilidade

- definir criticidade por componente;
- prever modo degradado;
- documentar dependências;
- ter backup;
- ter restauração;
- ter operação manual de contingência;
- evitar ponto único de falha quando crítico.

## 5. Rastreabilidade

Toda ação relevante deve possuir:

- identificador;
- usuário;
- data e hora;
- cliente;
- projeto;
- recurso;
- ação;
- resultado;
- aprovação;
- correlação;
- evidência.

## 6. Auditabilidade

- logs imutáveis ou protegidos;
- histórico de permissão;
- histórico de aprovação;
- histórico de execução;
- busca por usuário, cliente e tarefa;
- retenção definida;
- exportação para auditoria;
- acesso aos logs restrito.

## 7. Recuperação

- backup versionado;
- cópia independente;
- restauração testada;
- recuperação de credenciais;
- runbook;
- responsável;
- tempos-alvo definidos futuramente;
- evidência de teste.

## 8. Escalabilidade

- suportar aumento de usuários;
- suportar aumento de clientes;
- suportar aumento de documentos;
- suportar múltiplos agentes;
- evitar duplicação de política;
- permitir processamento assíncrono;
- limitar custo por uso;
- monitorar gargalos.

## 9. Portabilidade

- dados exportáveis;
- formatos abertos;
- IDs estáveis;
- política separada de fornecedor;
- documentação de integrações;
- migração possível;
- prompts e regras versionados;
- contratos de API documentados.

## 10. Interoperabilidade

- APIs e webhooks;
- eventos estruturados;
- esquemas versionados;
- idempotência quando aplicável;
- autenticação segura;
- retries controlados;
- tratamento de timeout;
- filas quando necessário;
- logs de integração.

## 11. Manutenibilidade

- módulos separados;
- políticas centralizadas;
- documentação atualizada;
- testes;
- revisão;
- ownership;
- dependências conhecidas;
- atualização controlada;
- rollback;
- baixa duplicação.

## 12. Custo controlado

- orçamento por componente;
- limite por usuário ou agente;
- limite por integração;
- alertas;
- relatórios de consumo;
- desligamento de recursos ociosos;
- comparação de alternativas;
- nenhuma contratação antes de justificativa.

## 13. Experiência de uso

- linguagem simples;
- ações claras;
- permissões compreensíveis;
- mensagens de erro úteis;
- confirmação de ações críticas;
- histórico acessível;
- navegação previsível;
- baixa carga operacional;
- suporte a uso não técnico.

## 14. Acessibilidade

- navegação por teclado;
- contraste adequado;
- textos claros;
- estrutura semântica;
- alternativas textuais;
- foco visível;
- compatibilidade com leitores;
- formulários identificados.

## 15. Supervisão humana

- classificação de risco;
- aprovação configurável;
- evidência de aprovação;
- possibilidade de rejeição;
- possibilidade de edição;
- responsável explícito;
- sem aprovação automática para ações críticas;
- trilha de auditoria.

## 16. Isolamento

- separação lógica por cliente;
- escopo explícito;
- busca limitada;
- memória limitada;
- exportação controlada;
- logs por cliente;
- testes de isolamento;
- bloqueio de contexto cruzado.

## 17. Observabilidade

- métricas;
- logs;
- traces quando aplicável;
- alertas;
- painéis;
- erros categorizados;
- correlação;
- custo;
- latência;
- taxa de sucesso;
- revisões periódicas.

## 18. Qualidade de resposta do Helpper e agentes

- diferenciar fato, hipótese, recomendação e decisão;
- indicar ausência de dados;
- não inventar;
- citar fonte interna quando aplicável;
- respeitar contexto;
- pedir aprovação quando exigida;
- registrar limitação;
- evitar promessa sem evidência.

## 19. Critérios mínimos antes de produção

Nenhum componente deve ir para produção sem:

- proprietário;
- escopo;
- arquitetura;
- política;
- acesso;
- logs;
- backup;
- recuperação;
- teste;
- segurança;
- privacidade;
- custo;
- monitoramento;
- aprovação;
- plano de desligamento.

## 20. Classificação de maturidade

Cada requisito deve ser classificado futuramente como:

- não iniciado;
- definido;
- implementado;
- testado;
- evidenciado;
- aprovado.

## 21. Limite

Este documento define requisitos.

Ele não comprova implementação, segurança, conformidade, disponibilidade ou desempenho.

## 22. Governança de supply chain interno

- validar origem de skills e ferramentas;
- registrar versão;
- registrar owner;
- impedir recurso sem manifesto;
- revisar dependências;
- impedir código ou prompt desconhecido em produção;
- manter histórico de promoção;
- suportar rollback;
- suspender recurso com incidente;
- impedir que skill amplie permissão.

## 23. Isolamento de bibliotecas

- visibilidade explícita;
- escopo por usuário;
- escopo por função;
- escopo por agente;
- escopo por cliente;
- escopo por projeto;
- negação por padrão;
- testes de isolamento;
- logs de acesso;
- exportação controlada.

## 24. Versionamento de skills e ferramentas

- versão explícita;
- changelog;
- compatibilidade;
- dependências;
- status;
- validade;
- responsável;
- data da última revisão;
- rollback;
- substituição;
- descontinuação.

## 25. Observabilidade de agentes

- tarefas recebidas;
- tarefas concluídas;
- falhas;
- latência;
- custo;
- uso de ferramenta;
- uso de skill;
- escalonamentos;
- aprovações;
- incidentes;
- contexto acessado;
- cliente associado.

## 26. Controle de custo por Helpper

- consumo por agente;
- consumo por usuário;
- consumo por cliente;
- consumo por ferramenta;
- limites;
- alertas;
- orçamento;
- relatórios;
- suspensão de uso excessivo;
- justificativa para expansão.

## 27. Promoção de conhecimento

- captura não implica aprovação;
- classificação obrigatória;
- revisão técnica quando aplicável;
- detecção de duplicidade;
- detecção de conflito;
- verificação de cliente;
- verificação de sensibilidade;
- retenção;
- aprovação proporcional ao risco;
- rastreabilidade até a origem.

## 28. Arquitetura progressiva

- arquitetura-alvo documentada;
- arquitetura inicial mínima;
- critérios de ativação;
- implementação por evidência;
- nenhum componente sem owner;
- nenhuma camada sem necessidade comprovada;
- revisão periódica da maturidade;
- possibilidade de simplificação;
- compatibilidade com expansão futura.

## 29. Critérios para especialista dedicado

Um Helpper especialista dedicado só deve ser ativado quando houver:

- volume recorrente;
- contexto próprio;
- risco específico;
- conjunto próprio de skills;
- ferramentas exclusivas;
- necessidade de revisão especializada;
- demanda de mais de um funcionário.

## Aprovação humana

- aprovado por: CEO da Monvi;
- data: 2026-07-22;
- decisão: arquitetura conceitual aprovada;
- escopo: 20 pontos da arquitetura ampliada da task 028;
- implementação técnica: não comprovada;
- segurança, conformidade e disponibilidade: não comprovadas;
- evolução: progressiva, conforme necessidade, risco, owner e custo justificável.
