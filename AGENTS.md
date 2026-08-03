# Adaptador para Agentes

Antes de qualquer tarefa, leia nesta ordem:

1. [`AI-START.md`](AI-START.md)
2. [`00_SYSTEM/canonical/AI-CONTRACT.md`](00_SYSTEM/canonical/AI-CONTRACT.md)
3. [`00_SYSTEM/canonical/KNOWLEDGE-MODEL.md`](00_SYSTEM/canonical/KNOWLEDGE-MODEL.md)
4. [`00_SYSTEM/canonical/PERMISSIONS.md`](00_SYSTEM/canonical/PERMISSIONS.md)
5. [`00_SYSTEM/canonical/SECURITY.md`](00_SYSTEM/canonical/SECURITY.md)
6. O Guia do Helpper em [`00_SYSTEM/helpper/README.md`](00_SYSTEM/helpper/README.md)
7. O workflow correspondente em [`00_SYSTEM/workflows/`](00_SYSTEM/workflows/README.md)

## Diretrizes de Atuação

Ao iniciar um ciclo:
- Confirme a task ativa em `00_SYSTEM/tasks/active/`;
- Identifique a frase exata de autorização (gate humano vigente);
- Verifique os limites de caminhos (`allowed_paths`, `read_only_paths`, `forbidden_paths`);
- Determine o nível de evidência exigido em [`00_SYSTEM/helpper/EVIDENCE-STANDARD.md`](00_SYSTEM/helpper/EVIDENCE-STANDARD.md);
- Execute exclusivamente o escopo autorizado e pare no próximo gate.

Este arquivo é apenas um adaptador inicial. Não o trate como fonte oficial de regras.
