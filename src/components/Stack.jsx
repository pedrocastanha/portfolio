import './Stack.css';

export default function Stack() {
  const aiTools = [
    {
      name: 'LangChain / LangGraph',
      description: 'Orquestração de agentes, grafos de decisão e fluxos com estado.'
    },
    {
      name: 'OpenAI API',
      description: 'Integração com modelos para raciocínio, geração e tool calling.'
    },
    {
      name: 'Pinecone (RAG)',
      description: 'Busca vetorial para memória externa e recuperação de contexto.'
    },
    {
      name: 'N8N Automation',
      description: 'Automação operacional conectando APIs, eventos e jobs internos.'
    },
    {
      name: 'Evolution API (WhatsApp)',
      description: 'Camada de integração para agentes conversacionais no WhatsApp.'
    },
    {
      name: 'Google Document AI',
      description: 'Extração OCR estruturada para documentos complexos e validação.'
    }
  ];

  const backendTools = [
    {
      name: 'Python',
      description: 'Base dos agentes, pipelines e integrações de backend.'
    },
    {
      name: 'NestJS / TypeORM',
      description: 'APIs estruturadas, regras de negócio e persistência relacional.'
    },
    {
      name: 'PostgreSQL / MongoDB / Redis',
      description: 'Dados transacionais, memória persistente e cache operacional.'
    },
    {
      name: 'Docker / GitHub Actions',
      description: 'Empacotamento, CI e padronização do ambiente de entrega.'
    },
    {
      name: 'Google Cloud Run',
      description: 'Deploy serverless com escala simples para serviços HTTP.'
    },
    {
      name: 'ngrok',
      description: 'Exposição segura de serviços locais para acesso remoto controlado.'
    }
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
                <div className="stack-copy">
                  <span className="stack-name">{tool.name}</span>
                  <span className="stack-description">{tool.description}</span>
                </div>
                <span className="dot on"></span>
              </div>
            ))}
          </div>
        </div>
        <div className="stack-col">
          <h3>Backend &amp; Infra</h3>
          <div>
            {backendTools.map(tool => (
              <div key={tool.name} className="stack-row">
                <div className="stack-copy">
                  <span className="stack-name">{tool.name}</span>
                  <span className="stack-description">{tool.description}</span>
                </div>
                <span className="dot on"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
