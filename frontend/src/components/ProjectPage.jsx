import { getProjectBySlug, projects } from '../data/projects';
import './ProjectPage.css';

function ProjectPage({ slug }) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="project-page">
        <section className="project-hero project-missing">
          <p className="s-label">// projeto não encontrado</p>
          <h1 className="project-title">Esse projeto não existe nesta rota.</h1>
          <a href="/" className="project-back">Voltar para a home</a>
        </section>
      </main>
    );
  }

  const relatedProjects = projects.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main className="project-page">
      <section className={`project-hero accent-${project.accent}`}>
        <div className="project-hero-top">
          <p className="s-label">// projeto selecionado</p>
          <span className="project-id">{project.id}</span>
          <h1 className="project-title">{project.name}</h1>
          <p className="project-impact">{project.impact}</p>
          <p className="project-summary">{project.summary}</p>
          <div className="project-actions">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-github">
                Abrir no GitHub ↗
              </a>
            ) : (
              <span className="project-github project-private">Repositorio privado 🔒</span>
            )}
          </div>
        </div>
      </section>

      <section className="section project-section">
        <p className="s-label">// visão geral</p>
        <div className="project-content">
          {project.details.map((detail) => (
            <p key={detail} className="project-copy">{detail}</p>
          ))}
        </div>

        <p className="s-label project-stack-label">// destaques</p>
        <div className="project-highlights">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="project-highlight">{highlight}</div>
          ))}
        </div>

        <p className="s-label project-stack-label">// stack usada</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <div className="project-footer-nav">
          <div className="project-next">
            <span className="project-next-label">outros projetos</span>
            <div className="project-next-links">
              {relatedProjects.map((item) => (
                <a key={item.slug} href={`/projetos/${item.slug}`} className="project-next-link">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectPage;
