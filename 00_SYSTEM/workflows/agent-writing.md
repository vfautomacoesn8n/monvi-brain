# Workflow: escrita controlada por agentes

## Objetivo

Permitir alterações documentais pequenas, auditáveis, reversíveis e supervisionadas, sem ampliar permissões nem misturar contextos.

## Pré-condições da task

A task deve declarar:

```yaml
id:
owner:
reviewer:
active_client:
active_project:
requires_review:
allowed_paths: []
read_only_paths: []
forbidden_paths: []
```

Também deve definir:

- objetivo;
- entradas;
- entregáveis;
- critérios de aceite;
- riscos;
- dependências;
- rollback;
- autorização de commit, quando aplicável.

## Preflight obrigatório

Antes da escrita, o agente deve:

1. confirmar branch e HEAD esperado;
2. confirmar staging vazio;
3. identificar alterações preexistentes;
4. separar anomalias conhecidas;
5. validar paths permitidos;
6. validar paths somente leitura;
7. validar paths proibidos;
8. confirmar cliente e projeto;
9. procurar duplicatas;
10. ler políticas e fontes relevantes;
11. preparar backup ou rollback proporcional ao risco.

## Regras de execução

- um escritor estrutural por vez;
- menor diff suficiente;
- `01_RAW` globalmente somente leitura;
- canonical somente com autorização explícita;
- documentos `approved` exigem proposta de revisão;
- owner, reviewer e fontes não podem ser inferidos;
- secrets nunca entram no vault;
- nenhum dado cru de cliente deve ser reutilizado entre clientes;
- não promover status automaticamente;
- não excluir, mover ou renomear sem autorização;
- não normalizar line endings em massa;
- não criar links sem relação semântica;
- não declarar implementação não comprovada;
- falha deve interromper a escrita e acionar rollback.

## Validação antes do staging

O agente deve verificar:

- arquivos alterados;
- arquivos não rastreados;
- bytes nulos;
- UTF-8;
- frontmatter;
- IDs;
- links;
- escopo;
- `git diff --check`;
- ausência de secrets;
- ausência de mistura de cliente;
- ausência de alterações inesperadas.

## Staging controlado

- adicionar caminhos explicitamente;
- nunca usar `git add .` em operação governada;
- conferir `git diff --cached --name-status`;
- conferir `git diff --cached --check`;
- confirmar que anomalias conhecidas ficaram fora;
- revisar diff staged;
- commit somente quando autorizado;
- push somente quando autorizado.

## Revisão humana

Revisão humana é obrigatória para:

- jurídico;
- financeiro;
- comercial sensível;
- estratégia;
- LGPD;
- segurança;
- acesso;
- canonical;
- decisões institucionais;
- mudanças destrutivas;
- promoção para `approved`.

## Falha e rollback

Em erro:

1. interromper;
2. não ampliar o escopo;
3. restaurar apenas arquivos do lote;
4. preservar alterações preexistentes;
5. manter staging controlado;
6. registrar incidente quando houver risco, vazamento, mistura de cliente ou perda de rastreabilidade;
7. solicitar decisão humana quando a restauração não for segura.

## Limites

Este workflow governa documentação. Ele não concede acesso, executa runtime, autentica usuário ou substitui controles do futuro Monvi Core Brain.
