import { paths } from '../content';
import './Work.css';

function CaseCard({ item, c, badge }) {
  const href = paths[c.lang].case(item.slug);
  return (
    <li className={`case-card case-card--${item.kind}`}>
      <span className="case-card__badge">{badge}</span>
      <h3 className="case-card__title">
        <a href={href}>{item.title}</a>
      </h3>
      <p className="case-card__summary">{item.summary}</p>
      <p className="case-card__metric">
        <span className="case-card__value">{item.metric.value}</span>
        <span className="case-card__label">{item.metric.label}</span>
      </p>
      <span className="case-card__cta" aria-hidden="true">
        {c.work.read} →
      </span>
    </li>
  );
}

function Work({ c }) {
  const w = c.work;
  const prod = c.cases.filter((item) => item.kind === 'prod');
  const personal = c.cases.filter((item) => item.kind === 'personal');

  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="section__inner">
        <p className="eyebrow">{w.kicker}</p>
        <h2 id="work-title" className="section__title">
          {w.prodTitle}
        </h2>
        <p className="section__lede">{w.prodLede}</p>
        <ul className="case-grid case-grid--prod">
          {prod.map((item) => (
            <CaseCard key={item.slug} item={item} c={c} badge={w.prodBadge} />
          ))}
        </ul>

        <h2 className="section__title section__title--sub">{w.personalTitle}</h2>
        <p className="section__lede">{w.personalLede}</p>
        <ul className="case-grid case-grid--personal">
          {personal.map((item) => (
            <CaseCard key={item.slug} item={item} c={c} badge={w.personalBadge} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Work;
