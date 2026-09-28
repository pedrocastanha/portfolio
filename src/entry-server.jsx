import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { alternatePath, allRoutes, contents, resolveRoute, SITE_URL } from './content';

export { allRoutes };

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function render(url) {
  const route = resolveRoute(url);
  const c = contents[route.lang];
  const item = route.page === 'case' ? c.cases.find((x) => x.slug === route.slug) : null;
  const title = item ? `${item.title} — Pedro Castanheira` : c.meta.title;
  const description = item ? item.summary : c.meta.description;
  const canonical = `${SITE_URL}${url === '/' ? '/' : url}`;
  const alt = `${SITE_URL}${alternatePath(route)}`;
  const ptUrl = route.lang === 'pt' ? canonical : alt;
  const enUrl = route.lang === 'en' ? canonical : alt;

  const head = [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<link rel="alternate" hreflang="pt-BR" href="${ptUrl}" />`,
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${ptUrl}" />`,
    `<meta property="og:type" content="${item ? 'article' : 'website'}" />`,
    `<meta property="og:locale" content="${c.locale}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta name="twitter:card" content="summary" />`,
  ].join('\n    ');

  const html = renderToString(
    <StrictMode>
      <App url={url} />
    </StrictMode>
  );

  return { html, head, htmlLang: c.htmlLang };
}
