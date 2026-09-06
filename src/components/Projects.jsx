import ArchitectureFlow from './ArchitectureFlow';
import './Projects.css';
import { projects } from '../data/projects';

function ProjectFeature({ project }) {
  return (
    <article className="project-feature" data-reveal>
      <a href={`/projetos/${project.slug}`} className="project-feature-link" aria-label={`Abrir case ${project.name}`}>
        <header className="project-feature-header">
          <span>{project.id}</span>
          <span>{project.eyebrow}</span>
          <span>{project.status}</span>
        </header>
        <div className="project-feature-main">
          <div className="project-feature-copy">
            <h3>{project.name}</h3>
            <p className="project-impact">{project.impact}</p>
            <p className="project-description">{project.homeDescription}</p>
          </div>
          <div className="project-feature-architecture">
            <span>ARQUITETURA EM UMA LINHA</span>
            <ArchitectureFlow steps={project.architecture.slice(0, 4)} compact />
          </div>
        </div>
        <footer className="project-feature-footer">
          <p>{project.tags.slice(0, 6).join(' · ')}</p>
          <span>Estudar o case <b>↗</b></span>
        </footer>
      </a>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const lab = projects.filter((project) => !project.featured);

  return (
    <section className="section projects-section" id="projetos">
      <div className="section-heading" data-reveal>
        <p className="section-index">01 / Projetos selecionados</p>
        <div>
          <h2>Produtos, não experimentos de prompt.</h2>
          <p>Cada estudo de caso mostra o problema, a arquitetura, as decisões e o código que posso tornar público.</p>
        </div>
      </div>

      <div className="projects-list">
        {featured.map((project) => <ProjectFeature project={project} key={project.slug} />)}
      </div>

      <div className="project-lab" data-reveal>
        <div>
          <span>Projetos anteriores</span>
          <p>O caminho técnico que levou aos sistemas atuais.</p>
        </div>
        <div className="project-lab-list">
          {lab.map((project) => (
            <a href={`/projetos/${project.slug}`} key={project.slug}>
              <span>{project.id}</span>
              <strong>{project.name}</strong>
              <small>{project.impact}</small>
              <b>↗</b>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
