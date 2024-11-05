# Finance AI

![example](./.github/example.png)

Finance AI é uma aplicação de gerenciamento financeiro, projeto desenvolvido durante a sexta edição do _FSW (Full Stack Week)_.

## Executando o projeto

Clone este repositório.

Na raíz do projeto, crie um arquivo `.env` com a url de conexão do seu banco Postgresql e as chaves privadas do Clerk (conforme exemplo disponível em `.env.example`).

```env
DATABASE_URL=""
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
```

Com o arquivo configurado, execute os comandos:

```bash
npm i
docker compose up -d
npx prisma migrate dev
npm run dev
```
