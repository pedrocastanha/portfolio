import { useEffect } from 'react';
import { getProjectBySlug, getRelatedProjects } from '../data/projects';
import ArchitectureFlow from './ArchitectureFlow';
import './ProjectPage.css';

export default function ProjectPage({ slug }) {
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project ? `${project.name} — Pedro Castanheira` : 'Projeto não encontrado — Pedro Castanheira';
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (project) {
      description?.setAttribute('content', project.impact);
      canonical?.setAttribute('href', `https://pedro-castanheira.com/projetos/${project.slug}`);
    }
  }, [project]);

  if (!project) {
    return (
      <main className="project-page" id="main-content">
        <section className="project-not-found">
          <span>404 / PROJETO NÃO ENCONTRADO</span>
          <h1>Esse sistema não está no grafo.</h1>
          <a href="/" className="button button--primary">Voltar ao portfólio</a>
        </section>
      </main>
    );
  }

  const related = getRelatedProjects(slug);

  return (
    <main className={`project-page project-page--${project.tone}`} id="main-content">
      <header className="case-hero">
        <div className="case-topline">
          <a href="/#projetos">← Todos os projetos</a>
          <span>{project.type} / {project.status}</span>
        </div>
        <div className="case-title">
          <span>{project.id}</span>
          <h1>{project.name}</h1>
        </div>
        <div className="case-intro">
          <p>{project.impact}</p>
          <div>
            <p>{project.summary}</p>
            <div className="case-actions">
              {project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="button button--primary">Abrir GitHub ↗</a> : <span className="case-private">Case profissional · código privado</span>}
              {project.secondaryLink && <a href={project.secondaryLink} target="_blank" rel="noreferrer" className="button button--text">{project.secondaryLabel} ↗</a>}
            </div>
          </div>
        </div>
        <div className="case-proof">
          {project.proof.map((item) => (
            <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
          ))}
        </div>
      </header>

      <section className="case-architecture section">
        <div className="case-section-label"><span>01</span><p>Arquitetura do sistema</p></div>
        <div className="case-section-content">
          <h2>Do evento inicial<br />ao resultado.</h2>
          <ArchitectureFlow steps={project.architecture} />
        </div>
      </section>

      <section className="case-story section">
        <div className="case-section-label"><span>02</span><p>Problema e solução</p></div>
        <div className="case-story-grid">
          <article>
            <span>O PROBLEMA</span>
            <h2>O que precisava mudar.</h2>
            <p>{project.challenge}</p>
          </article>
          <article>
            <span>A RESPOSTA</span>
            <h2>Como eu estruturei.</h2>
            <p>{project.solution}</p>
          </article>
        </div>
      </section>

      <section className="case-decisions section">
        <div className="case-section-label"><span>03</span><p>Decisões de engenharia</p></div>
        <div className="case-section-content">
          <h2>Trade-offs que<br />moldaram o produto.</h2>
          <div className="decision-list">
            {project.decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{decision.title}</h3>
                <p>{decision.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-scope section">
        <div>
          <span className="case-meta-label">MINHA ATUAÇÃO</span>
          <div className="case-pills">{project.role.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div>
          <span className="case-meta-label">STACK</span>
          <div className="case-pills">{project.tags.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="case-next">
        <span>CONTINUE EXPLORANDO</span>
        <div>
          {related.map((item) => (
            <a href={`/projetos/${item.slug}`} key={item.slug}>
              <small>{item.id}</small><strong>{item.name}</strong><b>↗</b>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
