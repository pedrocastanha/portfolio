import './Hero.css';

const metrics = [
  { value: '140 mil', label: 'submissões processadas por mês', context: 'RAG multi-tenant' },
  { value: '40–70', label: 'conversões geradas por dia', context: 'sistema multiagente' },
  { value: '~60%', label: 'de redução no custo de OCR', context: 'visão computacional' }
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-meta" data-reveal>
        <span>AI Engineer &amp; Tech Lead</span>
        <span>Maringá, Brasil · 2026</span>
      </div>

      <div className="hero-grid" data-reveal>
        <h1>Sistemas de IA que continuam funcionando <em>depois da demo.</em></h1>
        <div className="hero-aside">
          <p>
            Projeto agentes, plataformas de RAG e infraestrutura de LLMs com o rigor
            de software que produção exige: contexto, custo, avaliação, observabilidade e escala.
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="button button--primary">Ver projetos</a>
            <a href="https://github.com/pedrocastanha" target="_blank" rel="noreferrer" className="button button--text">GitHub ↗</a>
          </div>
          <dl className="hero-scope">
            <div><dt>Foco</dt><dd>AI Engineering · Agentic Systems · LLMOps</dd></div>
            <div><dt>Atuação</dt><dd>Arquitetura, produto e implementação hands-on</dd></div>
          </dl>
        </div>
      </div>

      <div className="hero-evidence" data-reveal>
        <p>Evidência, não adjetivos.</p>
        <div>
          {metrics.map((metric) => (
            <article key={metric.value}>
              <span>{metric.context}</span>
              <strong>{metric.value}</strong>
              <small>{metric.label}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
