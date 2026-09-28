import { alternatePath, paths } from '../content';
import './Nav.css';

const SECTIONS = ['work', 'graph', 'method', 'path', 'contact'];

function Nav({ c, route }) {
  const home = paths[c.lang].home;
  const prefix = route.page === 'home' ? '' : home;

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href={home} aria-label={`Pedro Castanheira — ${c.ui.home}`}>
          pedro castanheira
        </a>
        <nav className="nav__links" aria-label={c.lang === 'pt' ? 'Principal' : 'Main'}>
          <ul>
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`${prefix}#${id}`}>{c.ui.nav[id]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="nav__lang" href={alternatePath(route)} hrefLang={c.lang === 'pt' ? 'en' : 'pt-BR'} title={c.ui.langSwitch.title}>
          {c.ui.langSwitch.label}
        </a>
      </div>
    </header>
  );
}

export default Nav;
