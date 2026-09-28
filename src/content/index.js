import pt from './pt';
import en from './en';

export const SITE_URL = 'https://pedro-castanheira.com';
export const LINKS = {
  github: 'https://github.com/pedrocastanha',
  linkedin: 'https://www.linkedin.com/in/pedrocastanheiracosta/',
  source: 'https://github.com/pedrocastanha/portfolio',
};

export const contents = { pt, en };

export const paths = {
  pt: { home: '/', case: (slug) => `/projetos/${slug}` },
  en: { home: '/en', case: (slug) => `/en/projects/${slug}` },
};

// Resolves a pathname into { lang, page, slug }. Unknown paths fall back to a
// not-found case page in the closest language.
export function resolveRoute(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return { lang: 'pt', page: 'home' };
  if (path === '/en') return { lang: 'en', page: 'home' };
  let m = path.match(/^\/projetos\/([\w-]+)$/);
  if (m) return { lang: 'pt', page: 'case', slug: m[1] };
  m = path.match(/^\/en\/projects\/([\w-]+)$/);
  if (m) return { lang: 'en', page: 'case', slug: m[1] };
  return { lang: path.startsWith('/en') ? 'en' : 'pt', page: 'case', slug: null };
}

export function alternatePath(route) {
  const other = route.lang === 'pt' ? 'en' : 'pt';
  if (route.page === 'case' && route.slug) return paths[other].case(route.slug);
  return paths[other].home;
}

export function allRoutes() {
  return Object.entries(contents).flatMap(([lang, c]) => [
    paths[lang].home,
    ...c.cases.map((item) => paths[lang].case(item.slug)),
  ]);
}
