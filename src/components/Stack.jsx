import './Stack.css';

export default function Stack() {
  const aiTools = [
    { name: 'LangChain / LangGraph', on: true },
    { name: 'OpenAI API', on: true },
    { name: 'Pinecone (RAG)', on: true },
    { name: 'N8N Automation', on: true },
    { name: 'Evolution API (WhatsApp)', on: true },
    { name: 'Google Document AI', on: false }
  ];

  const backendTools = [
    { name: 'Python', on: true },
    { name: 'NestJS / TypeORM', on: true },
    { name: 'PostgreSQL / MongoDB / Redis', on: true },
    { name: 'Docker / GitHub Actions', on: true },
    { name: 'Google Cloud Run', on: false },
    { name: 'ngrok', on: false }
  ];

  return (
    <section className="section" id="stack">
      <p className="s-label">// ferramentas</p>
      <h2 className="s-title">Stack</h2>
      <div className="stack-cols">
        <div className="stack-col">
          <h3>Inteligência Artificial</h3>
          <div>
            {aiTools.map(tool => (
              <div key={tool.name} className="stack-row">
                <span>{tool.name}</span>
                <span className={`dot ${tool.on ? 'on' : ''}`}></span>
              </div>
            ))}
          </div>
        </div>
        <div className="stack-col">
          <h3>Backend &amp; Infra</h3>
          <div>
            {backendTools.map(tool => (
              <div key={tool.name} className="stack-row">
                <span>{tool.name}</span>
                <span className={`dot ${tool.on ? 'on' : ''}`}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
