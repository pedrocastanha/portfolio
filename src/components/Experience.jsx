import './Experience.css';

const outcomes = [
  'Liderança técnica de uma squad e evolução de cinco produtos de IA generativa em produção.',
  'Roadmap construído com negócio e traduzido em escopo, arquitetura e padrões de engenharia.',
  'Agentes com tools para consultar dados e executar ações em sistemas internos.',
  'Evals, tracing, guardrails e métricas de custo, tokens, alucinação e erro.'
];

const productionSystems = [
  { area: 'Educação / RAG multi-tenant', metric: '~140 mil', label: 'submissões por mês' },
  { area: 'Automação comercial / Multi-agent', metric: '40–70', label: 'conversões por dia' },
  { area: 'Document intelligence / Visão', metric: '~60%', label: 'redução de custo' }
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experiencia">
      <div className="section-heading section-heading--light" data-reveal>
        <p className="section-index">02 / Experiência</p>
        <div>
          <h2>Hands-on,<br />com visão de produto.</h2>
          <p>Eu lidero a decisão técnica e continuo perto do código, da telemetria e de quem usa o produto.</p>
        </div>
      </div>

      <div className="experience-timeline">
        <article className="experience-role experience-role--current" data-reveal>
          <div className="experience-time">
            <span>AGO 2025</span>
            <i />
            <span>AGORA</span>
          </div>
          <div className="experience-company">
            <span>Inova Soluções Educacionais</span>
            <strong>Engenheiro de Software — IA &amp; IA Generativa</strong>
            <em>Tech Lead da squad</em>
          </div>
          <div className="experience-outcomes">
            {outcomes.map((outcome, index) => (
              <div key={outcome}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="experience-systems" data-reveal aria-label="Resultados anonimizados de sistemas em produção">
          <span className="experience-systems-label">PRODUTOS EM PRODUÇÃO / DADOS ANONIMIZADOS</span>
          <div>
            {productionSystems.map((system) => (
              <article key={system.area}>
                <span>{system.area}</span>
                <strong>{system.metric}</strong>
                <small>{system.label}</small>
              </article>
            ))}
          </div>
        </div>

        <article className="experience-role experience-role--past" data-reveal>
          <div className="experience-time"><span>MAR 2025</span><i /><span>AGO 2025</span></div>
          <div className="experience-company">
            <span>Vertti Tecnologia / UniFatecie</span>
            <strong>Estagiário de Frontend e Dados</strong>
          </div>
          <p>React, JavaScript, integração de dados, fundamentos de backend e Git — a base de produto que hoje conecta meus sistemas de IA à experiência de uso.</p>
        </article>
      </div>

      <div className="experience-education" data-reveal>
        <span>FORMAÇÃO</span>
        <strong>Engenharia de Software</strong>
        <p>UniCesumar · 2023 — cursando</p>
        <span>IDIOMAS</span>
        <strong>Português nativo · Inglês C1</strong>
      </div>
    </section>
  );
}
