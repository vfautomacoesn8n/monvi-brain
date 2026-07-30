# Monvi Core Brain — Etapa 1

Fundação técnica autorizada pela Task 041.

## Escopo

- TypeScript e Fastify;
- configuração validada com Zod;
- logs estruturados;
- tratamento básico de erros;
- `GET /api/v1/health`;
- `GET /api/v1/ready`;
- testes automatizados.

PostgreSQL, Drizzle, autenticação, credenciais, dados reais, integrações externas, homologação e produção permanecem fora do escopo.

## Execução local

```powershell
npm install
npm run check
npm run dev
```

O servidor usa `127.0.0.1:3000` por padrão.

## Endpoints

```text
GET http://127.0.0.1:3000/api/v1/health
GET http://127.0.0.1:3000/api/v1/ready
```
