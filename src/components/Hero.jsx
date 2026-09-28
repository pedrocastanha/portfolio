import { LINKS } from '../content';
import { heroFlow } from '../content/flows';
import { Underline } from '../sketch/Sketch';
import FlowDiagram from './FlowDiagram';
import HandArrow from './HandArrow';
import './Hero.css';

function Hero({ c }) {
  const h = c.hero;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__top">
          <div className="hero__copy">
            <p className="eyebrow">{h.eyebrow}</p>
            <h1 id="hero-title" className="hero__title">
              {h.titleBefore}
              <span className="hero__mark">
                {h.titleMark}
                <Underline id="hero-underline" width={320} />
              </span>
              {h.titleAfter}
            </h1>
            <p className="hero__lede">{h.lede}</p>
          </div>
          <div className="hero__sketch">
            <FlowDiagram flow={heroFlow} labels={h.sketch} title={h.sketchLabel} />
          </div>
        </div>

        <div className="hero__metrics-wrap">
          <p className="hero__note" aria-hidden="true">
            {h.note}
            <HandArrow id="hero-note-arrow" />
          </p>
          <ul className="hero__metrics">
            {h.metrics.map((m) => (
              <li key={m.value} className="metric">
                <span className="metric__value">{m.value}</span>
                <span className="metric__label">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__ctas">
          <a className="btn btn--primary" href="#work">
            {h.ctas.work}
          </a>
          <a className="btn" href={LINKS.github} rel="me noopener" target="_blank">
            {h.ctas.github}
          </a>
          <a className="btn" href={LINKS.linkedin} rel="me noopener" target="_blank">
            {h.ctas.linkedin}
          </a>
          <a className="btn btn--ghost" href="#contact">
            {h.ctas.contact}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
