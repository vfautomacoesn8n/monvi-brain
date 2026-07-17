# Manifesto de fontes

Registro operacional das fontes originais preservadas em `01_RAW`. Todo conteúdo dessa árvore é somente leitura para agentes; o manifesto permanece fora dela e pode ser atualizado por workflows de ingestão autorizados, sem substituir nem alterar os arquivos originais.

## Fontes registradas

| ID | Caminho | Tipo | Classificação | Data de captura | Checksum | Tarefa |
| --- | --- | --- | --- | --- | --- | --- |
| `source-manual-marca-monvi-v1` | `01_RAW/monvi/Monvi - Manual da marca.pdf` | PDF visual | `internal` | `2026-07-16` | `sha256:CC57F9B98A7EB27341E713FAA58918B143EE1720E1308CD583AD3F9A90C8697B` | `task-2026-001` |
| `source-catalogo-servicos-monvi-v1` | `01_RAW/monvi/Monvi - Catalogo de serviços.pdf` | PDF com camada textual | `internal` | `2026-07-16` | `sha256:8E0655060FB272444B277D79706C51199BD8F58AFD1202692A21D8E9E80A6095` | `task-2026-002` |
| `source-estrategia-empresarial-monvi-v1` | `01_RAW/monvi/Monvi - Estratégia Empresarial.pdf` | PDF com camada textual | `internal` | `2026-07-16` | `sha256:98D57E27FF1EFB5BF18C3301AAA4C09D5E930BF00371979B28DC47409B0D9388` | `task-2026-003` |

| `source-manual-processos-monvi-v2` | `01_RAW/monvi/Manual_de_Processos_Monvi_Redesenhado_2026.pdf` | PDF com camada textual | `internal` | `2026-07-16` | `sha256:A1E9B6C0EC95BF8300489EFC9371B7DFDD87D24C399113824FCCE6F2C1208072` | `task-2026-004` |


| `source-lgpd-seguranca-monvi-v1` | `01_RAW/monvi/06_LGPD_e_Seguranca_Monvi.pdf` | PDF com camada textual e verificação visual pontual | `confidential` | `2026-07-16` | `sha256:CE20F577C34F6CB5290A0D55C38AB9A1936448FEC2DC7758F12C7A4714D7352A` | `task-2026-005` |
| `source-juridico-monvi-v1` | `01_RAW/monvi/05_Juridico_Monvi.pdf` | PDF com camada textual e verificação visual pontual | `confidential` | `2026-07-17` | `sha256:01427FF4B703386B83F62B864EEFFB994C54400D2F98F3669EA0D00BCC944D0A` | `task-2026-006` |
A fonte original permanece em [`01_RAW/monvi/Monvi - Manual da marca.pdf`](../../01_RAW/monvi/Monvi%20-%20Manual%20da%20marca.pdf).

Siga o [workflow de ingestão](../workflows/ingest.md). Alterações neste registro devem permanecer dentro do escopo de uma tarefa autorizada e ser registradas nos logs auditáveis.

## Política de rastreio no Git

- Fontes institucionais aprovadas podem ser rastreadas no Git.
- Fontes de clientes exigem avaliação específica de confidencialidade, tamanho e autorização.
- Nenhum documento de cliente deve ser rastreado automaticamente.
