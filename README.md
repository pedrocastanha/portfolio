# Pedro Castanheira — Portfolio

Portfólio de AI Engineering em PT-BR e EN. Cases como estudos de caso com diagramas desenhados em código (rough.js + Excalifont), montados conforme a leitura.

## Desenvolvimento

```bash
npm ci
npm run dev      # SPA em modo dev
```

## Validação

```bash
npm run lint
npm test         # paridade PT/EN, rótulos dos diagramas e do grafo de evidências
npm run build    # build do cliente + SSR + prerender de todas as rotas em dist/
npm run preview  # serve dist/ com URLs limpas, como em produção
```

## Onde editar

- Texto: `src/content/pt.js` e `src/content/en.js` (mesma estrutura; `npm test` garante).
- Diagramas dos cases: geometria em `src/content/flows.js`, textos em `cases[].flow` de cada idioma.
- Grafo de evidências: `src/content/graph.js` (toda skill precisa apontar para um case).

Rotas: `/`, `/projetos/:slug`, `/en`, `/en/projects/:slug`. O build gera HTML estático por rota, `sitemap.xml`, `robots.txt` e `404.html`.
