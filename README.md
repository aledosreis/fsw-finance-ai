# Finance AI

Finance AI é uma aplicação de gerenciamento financeiro, projeto desenvolvido durante a sexta edição do _FSW (Full Stack Week)_.

## Executando o projeto

Clone este repositório.

Na raíz do projeto, crie um arquivo `.env` com a url de conexão do seu banco Postgresql.

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/inorbit"
```

Com o arquivo configurado, execute os comandos:

```bash
npm i
docker compose up -d
npx prisma migrate dev
npm run dev
```
