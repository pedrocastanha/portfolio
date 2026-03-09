import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-name">
          Pedro<br />
          <span className="stroke">Castanheira</span><br />
        </div>
        <div className="hero-right">
          <p className="hero-role">AI Engineer &amp;<br /><em>builder of autonomous systems</em></p>
          <p className="hero-desc">Construo sistemas de IA que funcionam em produção — agentes autônomos, pipelines RAG, automação e arquiteturas multi-agente. Maringá, PR.</p>
          <a href="#contato" className="hero-cta">Vamos conversar →</a>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-stats">
          <div className="stat"><span className="stat-n">5k+</span><span className="stat-l">Usuários em produção</span></div>
          <div className="stat"><span className="stat-n">6</span><span className="stat-l">Agentes especializados</span></div>
          <div className="stat"><span className="stat-n">62%</span><span className="stat-l">Redução de custo OCR</span></div>
        </div>
        <span className="hero-scroll">scroll ↓</span>
      </div>
    </section>
  );
}
