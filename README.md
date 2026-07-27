# Portfolio — monorepo

Portfólio pessoal (React + Vite) + API de blog (NestJS + TypeORM + Postgres).

```
portfolio/
├── frontend/          # Site (Vercel)
├── backend/           # API do blog (Railway / Render)
├── docker-compose.yml # Postgres local
└── docs/              # Design notes
```

## Stack

| Camada | Tech | Deploy |
|--------|------|--------|
| Frontend | React 19 + Vite | Vercel |
| Backend | NestJS + TypeORM | Railway ou Render |
| DB (local) | Postgres 16 via Docker | — |
| DB (prod) | Supabase Postgres | Supabase |

## Setup local

### 1. Postgres

```bash
docker compose up -d
```

### 2. Backend

```bash
cd backend
cp .env.example .env   # já existe .env de exemplo no repo se criado
npm install
npm run start:dev
```

API em `http://localhost:3000`.

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Site em `http://localhost:5173`. Em dev, requests para `/api/*` são proxy para o Nest.

## API do blog

### Leitura (pública)

```http
GET /posts
GET /posts/:slug
```

Só retorna posts com `publishedAt` preenchido.

### Escrita (API key)

Header: `x-api-key: <API_KEY do .env>`

```http
POST   /posts
PUT    /posts/:slug
DELETE /posts/:slug
```

#### Exemplo — criar post

```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -H "x-api-key: dev-local-api-key-change-me" \
  -d '{
    "title": "Meu primeiro post",
    "slug": "meu-primeiro-post",
    "excerpt": "Notas sobre agentes e produção.",
    "content": "## Olá\n\nConteúdo em **Markdown**.",
    "tags": ["IA", "engenharia"],
    "publishedAt": "2026-07-27T12:00:00.000Z"
  }'
```

Omita `publishedAt` (ou envie `null`) para deixar como rascunho (não aparece no site).

### Body

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| title | string | sim |
| slug | kebab-case | sim (único) |
| excerpt | string | sim |
| content | Markdown | sim |
| tags | string[] | não |
| publishedAt | ISO date \| null | não |

## Projetos do portfólio

Conteúdo estático em `frontend/src/data/projects.js`. Edite/adicione cases ali quando quiser — não passam pela API nesta versão.

## Deploy

### Supabase

1. Crie um projeto no Supabase.
2. **Project Settings → Database → Connection string (URI)**.
3. No backend (Railway/Render), defina:
   - `DATABASE_URL=<uri do Supabase>`
   - `DATABASE_SSL=true`
   - `API_KEY=<segredo forte>`
   - `CORS_ORIGIN=https://seu-dominio.vercel.app`
   - `TYPEORM_SYNC=true` na primeira subida (depois ideal migrar e desligar)

### Backend (Railway / Render)

- Root directory: `backend`
- Build: `npm install && npm run build`
- Start: `npm run start:prod`
- Variáveis: as do `.env.example`

### Frontend (Vercel)

- Root directory: `frontend`
- Build: `npm run build`
- Output: `dist`
- Env: `VITE_API_URL=https://sua-api.up.railway.app` (sem barra no final)

> SPAs: configure rewrite de rotas (`/*` → `/index.html`) na Vercel para `/blog/:slug` e `/projetos/:slug` funcionarem no refresh.

## Scripts úteis

```bash
# raiz
docker compose up -d
docker compose down

# backend
cd backend && npm run start:dev
cd backend && npm run build

# frontend
cd frontend && npm run dev
cd frontend && npm run build
```
