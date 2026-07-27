---
type: template
status: approved
owner: ceo-monvi
reviewer: ceo-monvi
active_client: null
requires_review: false
created_at: "2026-07-22"
updated_at: "2026-07-22"
reviewed_at: "2026-07-22"
source_task: task-2026-031
classification: internal
---
# Checklist de piloto controlado de agente

- [ ] manifesto aprovado;
- [ ] owner humano definido;
- [ ] escopo pequeno;
- [ ] ambiente isolado;
- [ ] clientes e projetos autorizados;
- [ ] dados controlados;
- [ ] ferramentas autorizadas;
- [ ] skills autorizadas;
- [ ] logs ativos;
- [ ] timeout definido;
- [ ] retry definido;
- [ ] fallback definido;
- [ ] idempotência validada;
- [ ] rollback testado;
- [ ] kill switch validado;
- [ ] orçamento definido;
- [ ] monitoramento ativo;
- [ ] plano de incidente;
- [ ] aprovação registrada;
- [ ] métrica de sucesso;
- [ ] critério de encerramento.

## Critérios de reprovação do piloto

O piloto deve ser reprovado quando:

- houver ação não autorizada;
- ocorrer mistura de clientes;
- rollback falhar;
- kill switch não funcionar;
- logs forem insuficientes;
- custo exceder limite sem aprovação;
- retry gerar duplicidade;
- owner estiver indisponível;
- incidente crítico permanecer aberto;
- métrica de sucesso não for atingida.

## Aprovação documental da task 031

- data: 2026-07-22;
- aprovador: ceo-monvi;
- origem: task-2026-031;
- status: approved;
- observação: governança operacional aprovada; implementação real permanece fora do escopo.
