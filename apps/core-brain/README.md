# Monvi Core Brain

Fundação técnica do Monvi Core Brain MVP, autorizada pela Task 041 e evoluída pelas Tasks 043 (persistência), 044 (identidade/autenticação/autorização) e 045 (correção e validação factual).

## Escopo implementado

- TypeScript e Fastify;
- configuração validada com Zod;
- logs estruturados;
- tratamento básico de erros;
- `GET /api/v1/health`;
- `GET /api/v1/ready`;
- schema de domínio via Drizzle (pessoa, identidade, perfil, papel, permissão, cliente, projeto, sessão);
- persistência local via PostgreSQL e migrações Drizzle (Fase 3);
- autenticação de desenvolvimento (`POST /auth/dev-login`, bloqueada quando `NODE_ENV=production`) e autorização RBAC (Fase 4);
- testes automatizados unitários, de configuração e de autenticação/autorização.

Autenticação de produção real (Google Workspace/OIDC), credenciais reais, dados reais de clientes, integrações externas, homologação e produção permanecem fora do escopo.

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
POST http://127.0.0.1:3000/auth/dev-login
```

## Persistência local (PostgreSQL)

O schema e as migrações existem e compilam, mas isso não comprova, por si só, que a persistência funciona contra um banco real em execução. Para validar isso de fato:

1. Subir o banco local definido em `infrastructure/local/docker-compose.yml`:

   ```powershell
   docker compose -f ../../infrastructure/local/docker-compose.yml up -d
   ```

2. Aplicar as migrações:

   ```powershell
   npm run db:migrate
   ```

3. Rodar o teste de integração real, contra o banco em execução (não mockado):

   ```powershell
   npm run test:integration
   ```

Esse teste insere, lê e remove um registro real na tabela `person`, e falha se o banco não estiver acessível. Ele é isolado da suíte padrão (`npm test`), que continua rodando sem depender de um banco disponível.
