// Renders every route to static HTML after `vite build` + the SSR build.
// Output: dist/index.html, dist/en/index.html, dist/projetos/<slug>/index.html, ...
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');
const SITE_URL = 'https://pedro-castanheira.com';

const template = await readFile(join(dist, 'index.html'), 'utf8');
const { render, allRoutes } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

const routes = allRoutes();
for (const url of routes) {
  const { html, head, htmlLang } = render(url);
  const page = template
    .replace('<html lang="pt-BR">', `<html lang="${htmlLang}">`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);
  const file = url === '/' ? join(dist, 'index.html') : join(dist, url, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page);
  console.log(`prerendered ${url}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((u) => `  <url><loc>${SITE_URL}${u}</loc></url>`).join('\n')}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);

// A not-found page for unknown paths.
const notFound = render('/404');
await writeFile(
  join(dist, '404.html'),
  template
    .replace('<!--app-head-->', notFound.head.replace(/<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex" />'))
    .replace('<!--app-html-->', notFound.html)
);

await rm(ssrDir, { recursive: true, force: true });
