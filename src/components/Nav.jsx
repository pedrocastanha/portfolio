import './Nav.css';

export default function Nav({ isProjectPage }) {
  const prefix = isProjectPage ? '/' : '';
  return (
    <>
      <a className="skip-link" href="#main-content">Ir para o conteúdo</a>
      <nav className="site-nav" aria-label="Navegação principal">
        <a href="/" className="nav-brand" aria-label="Pedro Castanheira — início">
          <span className="nav-monogram">PC</span>
          <span className="nav-name">Pedro Castanheira</span>
        </a>
        <div className="nav-links">
          <a href={`${prefix}#projetos`}>Projetos</a>
          <a href={`${prefix}#experiencia`}>Experiência</a>
          <a href={`${prefix}#stack`}>Conhecimento</a>
        </div>
        <a className="nav-contact" href={`${prefix}#contato`}>
          Conversar <span>↗</span>
        </a>
      </nav>
      <div className="scroll-progress" aria-hidden="true" />
    </>
  );
}
