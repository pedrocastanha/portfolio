import './Nav.css';

export default function Nav({ isProjectPage }) {
  const home = (hash) => (isProjectPage ? `/${hash}` : hash);

  return (
    <nav>
      <a href="/" className="nav-mark">
        P.Castanheira — 2026
      </a>
      <ul className="nav-right">
        <li>
          <a href={home('#projetos')}>Projetos</a>
        </li>
        <li>
          <a href={home('#blog')}>Blog</a>
        </li>
        <li>
          <a href={home('#stack')}>Stack</a>
        </li>
        <li>
          <a href={home('#contato')}>Contato</a>
        </li>
      </ul>
    </nav>
  );
}
