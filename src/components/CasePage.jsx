import { useEffect, useRef, useState } from 'react';
import { paths } from '../content';
import { flows } from '../content/flows';
import FlowDiagram from './FlowDiagram';
import './CasePage.css';

const SECTION_KEYS = ['problem', 'data', 'decisions', 'implementation', 'result', 'limits'];

function useScrollStep(ref) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const root = ref.current;
    if (!root || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStep(Number(entry.target.dataset.section));
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    root.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
  return step;
}

function NotFound({ c }) {
  return (
    <section className="section">
      <div className="section__inner">
        <h1 className="section__title">{c.casePage.notFoundTitle}</h1>
        <p className="section__lede">{c.casePage.notFoundText}</p>
        <p>
          <a className="btn btn--primary" href={`${paths[c.lang].home}#work`}>
            {c.casePage.back}
          </a>
        </p>
      </div>
    </section>
  );
}

function CasePage({ c, slug }) {
  const textRef = useRef(null);
  const dialogRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const step = useScrollStep(textRef);
  const index = c.cases.findIndex((item) => item.slug === slug);
  if (index === -1) return <NotFound c={c} />;

  const item = c.cases[index];
  const next = c.cases[(index + 1) % c.cases.length];
  const cp = c.casePage;
  const diagramStep = Math.min(step, 4);

  return (
    <article className={`case case--${item.kind}`}>
      <header className="case__header">
        <div className="case__header-inner">
          <a className="case__back" href={`${paths[c.lang].home}#work`}>
            ← {cp.back}
          </a>
          <p className="case__badge">
            {item.context}
          </p>
          <h1 className="case__title">{item.title}</h1>
          <p className="case__summary">{item.summary}</p>
          <dl className="case__meta">
            <div>
              <dt>{cp.role}</dt>
              <dd>{item.role}</dd>
            </div>
            <div>
              <dt>{cp.status}</dt>
              <dd>{item.status}</dd>
            </div>
            <div className="case__meta-stack">
              <dt>{cp.stack}</dt>
              <dd>
                <ul className="tags">
                  {item.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </dd>
            </div>
            {item.links?.length ? (
              <div>
                <dt>{cp.links}</dt>
                <dd className="case__links">
                  {item.links.map((l) => (
                    <a key={l.href} href={l.href} rel="noopener" target="_blank">
                      {l.label} ↗
                    </a>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </header>

      <div className="case__body">
        <div className="case__diagram">
          <div className="case__diagram-sticky">
            <p className="case__swipe" aria-hidden="true">
              {cp.swipe}
            </p>
            <div className="case__diagram-scroll">
              <FlowDiagram flow={flows[item.slug]} labels={item.flow} current={diagramStep} title={`${cp.diagramLabel}: ${item.title}`} />
            </div>
            <div className="case__diagram-bar">
              <p className="case__step" aria-hidden="true">
                {cp.stepLabel} {Math.min(step + 1, SECTION_KEYS.length)}/{SECTION_KEYS.length} · {cp.sections[SECTION_KEYS[step]]}
              </p>
              <button type="button" className="btn btn--small" onClick={() => {
                  setZoomed(true);
                  dialogRef.current?.showModal();
                }}>
                {cp.zoom} ⤢
              </button>
            </div>
            <dialog ref={dialogRef} className="case__dialog" onClose={() => setZoomed(false)} aria-label={`${cp.diagramLabel}: ${item.title}`}>
              <form method="dialog">
                <button type="submit" className="btn btn--small case__dialog-close">
                  {cp.close} ✕
                </button>
              </form>
              {zoomed ? <FlowDiagram flow={flows[item.slug]} labels={item.flow} title={`${cp.diagramLabel}: ${item.title}`} /> : null}
            </dialog>
          </div>
        </div>

        <div className="case__text" ref={textRef}>
          <section data-section="0" className="case__section">
            <h2>{cp.sections.problem}</h2>
            <p>{item.problem}</p>
          </section>
          <section data-section="1" className="case__section">
            <h2>{cp.sections.data}</h2>
            <p>{item.data}</p>
          </section>
          <section data-section="2" className="case__section">
            <h2>{cp.sections.decisions}</h2>
            {item.decisions.map((d) => (
              <div key={d.title} className="decision">
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </section>
          <section data-section="3" className="case__section">
            <h2>{cp.sections.implementation}</h2>
            {item.implementationTitle ? <h3>{item.implementationTitle}</h3> : null}
            <ul className="case__list">
              {item.implementation.map((line) => {
                const [head, ...rest] = line.split(' — ');
                return (
                  <li key={line}>
                    {rest.length && /^[a-z_]+$/.test(head) ? (
                      <>
                        <code>{head}</code> — {rest.join(' — ')}
                      </>
                    ) : (
                      line
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
          <section data-section="4" className="case__section">
            <h2>{cp.sections.result}</h2>
            <ul className="result-metrics">
              {item.result.metrics.map((m) => (
                <li key={m.value + m.label}>
                  <span className="result-metrics__value">{m.value}</span>
                  <span className="result-metrics__label">
                    {m.label}
                    {m.estimate ? <em className="estimate"> · {cp.estimate}</em> : null}
                  </span>
                </li>
              ))}
            </ul>
            <p>{item.result.text}</p>
          </section>
          <section data-section="5" className="case__section">
            <h2>{cp.sections.limits}</h2>
            <ul className="case__list">
              {item.limits.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>

          <a className="case__next" href={paths[c.lang].case(next.slug)}>
            <span>{cp.next}</span>
            <strong>{next.title} →</strong>
          </a>
        </div>
      </div>
    </article>
  );
}

export default CasePage;
