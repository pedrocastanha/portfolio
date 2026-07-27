import './Projects.css';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section" id="projetos">
      <p className="s-label">// trabalho selecionado</p>
      <h2 className="s-title">Projetos</h2>
      <div className="proj-list">
        {projects.map(proj => (
          <a key={proj.id} href={`/projetos/${proj.slug}`} className="proj-item">
            <div className="proj-num">{proj.id}</div>
            <div className="proj-body">
              <h3 className="proj-name">{proj.name}</h3>
              <p className="proj-impact">→ {proj.impact}</p>
              <p className="proj-desc">{proj.homeDescription}</p>
              <div className="proj-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>
            </div>
            <span className="proj-link">abrir projeto →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
