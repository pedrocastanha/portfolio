import './Nav.css';

export default function Nav({ isProjectPage }) {
  return (
    <nav>
      <a href="/" className="nav-mark">P.Castanheira — 2026</a>
      <ul className="nav-right">
        <li><a href={isProjectPage ? '/#projetos' : '#projetos'}>Projetos</a></li>
        <li><a href={isProjectPage ? '/#stack' : '#stack'}>Stack</a></li>
        <li><a href={isProjectPage ? '/#contato' : '#contato'}>Contato</a></li>
      </ul>
    </nav>
  );
}
