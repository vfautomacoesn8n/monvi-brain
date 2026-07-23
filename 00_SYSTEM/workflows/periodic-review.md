# Workflow: revisão periódica documental

## Objetivo

Revisar conteúdo de forma proporcional a risco, mudança e uso, sem inventar cadências, owners, fontes ou aprovações.

## Gatilhos de revisão

A revisão deve ocorrer quando houver:

- alteração de serviço, processo, ferramenta ou responsável;
- mudança jurídica, contratual, fiscal, LGPD ou de segurança;
- mudança de cliente ou projeto;
- incidente;
- conflito entre fontes;
- conteúdo com validade vencida;
- dependência descontinuada;
- documento aprovado com proposta de mudança;
- ciclo de revisão explicitamente definido;
- preparação de corte ou auditoria.

## Priorização

Prioridade maior para:

1. canonical e políticas;
2. segurança, LGPD, jurídico e contratos;
3. decisões institucionais;
4. clientes e projetos ativos;
5. acessos, ferramentas e repositórios;
6. processos e templates críticos;
7. conteúdo histórico e de referência.

A priorização não autoriza alteração automática.

## Procedimento

1. definir escopo, owner, reviewer e fonte da revisão;
2. confirmar `active_client` e `active_project`;
3. localizar documento, fontes, decisões, tasks e mudanças recentes;
4. classificar o resultado:
   - sem mudança;
   - correção editorial;
   - atualização proposta;
   - conflito;
   - depreciação proposta;
   - arquivamento proposto;
   - bloqueio por falta de evidência;
5. para documento `approved`, criar proposta de revisão em vez de editar diretamente;
6. registrar fatos, lacunas, riscos e impacto;
7. atualizar `reviewed_at` apenas após revisão real;
8. atualizar `updated_at` apenas quando houver mudança material;
9. registrar evento em `changes.jsonl`;
10. revisar links, IDs, metadados e diff;
11. encaminhar decisões sensíveis para revisão humana.

## Cadência

- não inventar prazo;
- usar `review_cycle` ou `valid_until` somente quando houver regra ou decisão aplicável;
- `on-change` é gatilho, não prova de revisão executada;
- ausência de cadência deve ser registrada como pendência;
- documentos críticos podem exigir revisão extraordinária.

## Critérios de conclusão

A revisão só termina quando houver:

- reviewer identificado;
- fontes verificadas;
- conflitos registrados;
- decisão ou pendência explícita;
- rastreabilidade;
- isolamento de cliente preservado;
- nenhuma promoção automática;
- próxima revisão definida quando aplicável.

## Limites

Revisão documental não comprova conformidade jurídica, implantação técnica, acesso real ou efetividade operacional.
