import './Stack.css';

const capabilities = [
  {
    index: '01',
    title: 'Sistemas agênticos',
    text: 'Grafos com estado, roteamento, subagentes, tools, memória e human-in-the-loop.',
    tools: ['LangGraph', 'LangChain', 'OpenAI', 'Anthropic', 'MCP']
  },
  {
    index: '02',
    title: 'Contexto & dados',
    text: 'RAG multi-tenant, chunking, filtros, reranking, bancos vetoriais e code graphs.',
    tools: ['Qdrant', 'PostgreSQL', 'MongoDB', 'Redis', 'Neo4j']
  },
  {
    index: '03',
    title: 'Backend de produção',
    text: 'APIs, streaming, filas e serviços resilientes para fluxos síncronos e assíncronos.',
    tools: ['Python', 'FastAPI', 'NestJS', 'WebSocket', 'SSE', 'BullMQ']
  },
  {
    index: '04',
    title: 'LLMOps & qualidade',
    text: 'Tracing, evals, custo, testes, guardrails e diagnóstico de falhas por execução.',
    tools: ['TraceCast', 'Langfuse', 'LangSmith', 'Pytest', 'Jest']
  },
  {
    index: '05',
    title: 'Cloud & entrega',
    text: 'Ambientes reproduzíveis, pipelines de entrega e operação observável em cloud.',
    tools: ['Docker', 'GCP', 'GitHub Actions', 'CI/CD', 'Git']
  },
  {
    index: '06',
    title: 'Visão computacional',
    text: 'Classificação, fine-tuning, pré-processamento e extração híbrida de documentos.',
    tools: ['PyTorch', 'OpenCV', 'OCR', 'scikit-learn', 'Pillow']
  }
];

export default function Stack() {
  return (
    <section className="section stack-section" id="stack">
      <div className="section-heading" data-reveal>
        <p className="section-index">03 / Conhecimento</p>
        <div>
          <h2>Do modelo até<br />a produção.</h2>
          <p>Minha stack não é uma coleção de logos. É o conjunto de decisões que uso para fazer sistemas de IA funcionarem sob pressão.</p>
        </div>
      </div>
      <div className="capability-list">
        {capabilities.map((capability) => (
          <article className="capability" key={capability.index} data-reveal>
            <span className="capability-index">{capability.index}</span>
            <div className="capability-copy">
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </div>
            <div className="capability-tools">
              {capability.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
