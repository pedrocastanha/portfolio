# Portfolio monorepo + blog API — design

**Date:** 2026-07-27  
**Status:** Approved (user: implement)

## Scope (this delivery)

- Monorepo: move existing Vite/React app to `frontend/`, add `backend/`
- Blog API: NestJS + TypeORM + Postgres
- Blog UI: list on home + post page `/blog/:slug`
- Projects content updates: deferred to user (keep `projects.js` editable)
- No full visual redesign / heavy polish

## Out of scope

- Admin panel
- Auth beyond write API key
- MongoDB
- Turborepo / npm workspaces

## Architecture

```
Visitor → Vercel (frontend) → Nest API (Railway/Render) → Supabase Postgres
Author  → curl/Insomnia + x-api-key → Nest write endpoints
Local   → docker-compose Postgres + Nest :3000 + Vite :5173
```

## Post model

| Field | Type | Notes |
|-------|------|--------|
| id | uuid | PK |
| title | string | required |
| slug | string | unique, URL key |
| excerpt | string | short summary |
| content | text | Markdown |
| tags | text[] / simple-json | string array |
| publishedAt | timestamptz | nullable = draft (list only published) |
| createdAt | timestamptz | auto |
| updatedAt | timestamptz | auto |

## API

Public:
- `GET /posts` — published posts, newest first (summary fields, no full content optional)
- `GET /posts/:slug` — full post or 404

Protected (`x-api-key` header must match `API_KEY`):
- `POST /posts`
- `PUT /posts/:slug`
- `DELETE /posts/:slug`

## Frontend

- Section Blog on home (between Projects and Stack or after Projects)
- Page `/blog/:slug` same routing style as projects (pathname)
- Render Markdown with a lightweight lib (e.g. `marked` or `react-markdown`)
- `VITE_API_URL` for prod; Vite proxy `/api` → backend in dev

## Deploy

- Frontend: Vercel
- Backend: Railway or Render
- DB prod: Supabase (`DATABASE_URL`)
- DB local: `docker-compose.yml` Postgres

## Env

Backend: `DATABASE_URL`, `API_KEY`, `PORT`, `CORS_ORIGIN`  
Frontend: `VITE_API_URL`
