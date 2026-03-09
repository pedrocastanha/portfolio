import './Marquee.css';

export default function Marquee() {
  const items = [
    'cast-code', 'LangGraph', 'Multi-Agent', 'RAG', 'N8N', 'LangChain', 
    'NestJS', 'Pinecone', 'WhatsApp API', 'OCR Pipeline',
    'cast-code', 'LangGraph', 'Multi-Agent', 'RAG', 'N8N', 'LangChain', 
    'NestJS', 'Pinecone', 'WhatsApp API', 'OCR Pipeline'
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={index}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
