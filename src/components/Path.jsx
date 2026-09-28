import './Path.css';

function Path({ c }) {
  const p = c.path;
  return (
    <section id="path" className="section path" aria-labelledby="path-title">
      <div className="section__inner">
        <p className="eyebrow">{p.kicker}</p>
        <h2 id="path-title" className="section__title">
          {p.title}
        </h2>

        <div className="path__grid">
          <ol className="timeline">
            {p.jobs.map((job) => (
              <li key={job.org + job.period} className={`timeline__item${job.current ? ' is-current' : ''}`}>
                <p className="timeline__period">{job.period}</p>
                <h3 className="timeline__role">{job.role}</h3>
                <p className="timeline__org">{job.org}</p>
                <ul className="timeline__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <aside className="path__side">
            <div className="path__block">
              <h3 className="path__heading">{p.educationTitle}</h3>
              <p className="path__strong">{p.education.degree}</p>
              <p>
                {p.education.school} · <span className="path__status">{p.education.period}</span>
              </p>
            </div>
            <div className="path__block">
              <h3 className="path__heading">{p.certsTitle}</h3>
              <ul className="path__list">
                {p.certs.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="path__block">
              <h3 className="path__heading">{p.languagesTitle}</h3>
              <p>{p.languages}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Path;
