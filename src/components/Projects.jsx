import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: '001',
      name: 'cast-code',
      impact: '→ Agente de coding autônomo acessível remotamente via ngrok',
      desc: 'Inspirado no Claude Code. Roda localmente e expõe uma interface remota via ngrok — tasks chegam por Kanban, o agente invoca subagents e skills especializadas, executa comandos no PC, gera commits seguindo Conventional Commits e escreve PR descriptions automaticamente. Você controla o desenvolvimento de qualquer lugar.',
      tags: ['Multi-Agent', 'Subagents', 'ngrok', 'Kanban', 'Conventional Commits', 'Python'],
      link: 'https://github.com/pedrocastanha',
      featured: true
    },
    {
      id: '002',
      name: 'Pipeline OCR',
      impact: '→ R$4.000 → R$1.500/mês — 62% de redução sem perda de precisão',
      desc: 'Alternativa ao Google Cloud Document AI. Uma camada de validação ML classifica documentos por complexidade antes do processamento — os simples seguem fluxo barato, só os complexos consomem a API premium. Mesma precisão, dois terços do custo.',
      tags: ['OCR', 'ML Validation', 'GCP', 'Python'],
      link: null,
      featured: false
    },
    {
      id: '003',
      name: 'Olivia — Agente Conversacional',
      impact: '→ +5.000 usuários ativos — Inova Carreira / UniFatecie',
      desc: 'Agente educacional com RAG sobre Pinecone, memória persistente em MongoDB e janelas de conversa de 6h. Arquitetura lazy-loading gerencia múltiplas sessões simultâneas. Acessível via WhatsApp.',
      tags: ['RAG', 'Pinecone', 'MongoDB', 'NestJS', 'WhatsApp'],
      link: null,
      featured: false
    },
    {
      id: '004',
      name: 'Bot de Matrícula',
      impact: '→ Captação de alunos end-to-end via WhatsApp',
      desc: 'Agente conversacional que conduz candidatos pelo processo de matrícula completo — coleta de dados, dúvidas, envio de documentação e confirmação de vaga. Handoff inteligente para atendimento humano.',
      tags: ['LangGraph', 'Evolution API', 'N8N', 'WhatsApp'],
      link: null,
      featured: false
    },
    {
      id: '005',
      name: 'Pull Request Analyzer',
      impact: '→ 6 agentes especializados, até 600 arquivos por PR',
      desc: 'Triage inteligente decide quais dos 6 agentes (segurança, performance, qualidade, docs, testes, arquitetura) acionar por PR. Sem custo desnecessário em mudanças triviais.',
      tags: ['LangGraph', 'Multi-Agent', 'GitHub API', 'Python'],
      link: 'https://github.com/pedrocastanha/pull-request-analyzer',
      featured: false
    },
    {
      id: '006',
      name: 'Git Analyzer',
      impact: '→ Relatórios semânticos de qualidade de repositório com LLM',
      desc: 'Analisa histórico de commits, padrões e evolução de repos. Identifica gargalos e gera relatórios acionáveis de qualidade de código.',
      tags: ['LangChain', 'Git API', 'Python'],
      link: 'https://github.com/pedrocastanha/git-analyzer',
      featured: false
    }
  ];

  return (
    <section className="section" id="projetos">
      <p className="s-label">// trabalho selecionado</p>
      <h2 className="s-title">Projetos</h2>
      <div className="proj-list">
        {projects.map(proj => (
          <div key={proj.id} className={`proj-item ${proj.featured ? 'feat' : ''}`}>
            <div className="proj-num">{proj.id}</div>
            <div className="proj-body">
              <h3 className="proj-name">{proj.name}</h3>
              <p className="proj-impact">{proj.impact}</p>
              <p className="proj-desc">{proj.desc}</p>
              <div className="proj-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>
            </div>
            {proj.link ? (
              <a href={proj.link} target="_blank" rel="noreferrer" className="proj-link">↗ GitHub</a>
            ) : (
              <span className="proj-link muted">privado</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
