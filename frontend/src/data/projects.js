export const projects = [
  {
    id: '001',
    slug: 'cast-code',
    name: 'Cast Code',
    impact: 'CLI multi-agent para acelerar engenharia no terminal',
    homeDescription:
      'Um AI coding teammate no terminal: entende o codebase, planeja trabalho, usa ferramentas e delega para subagentes especialistas.',
    summary:
      'Cast Code é uma CLI multi-agent pensada para trabalho real de engenharia. Inspirada em Claude Code, OpenAI Codex e Kimi, ela opera dentro do terminal como um par técnico que lê o repositório, monta contexto, executa ferramentas e distribui tarefas entre agentes especializados.',
    details: [
      'O objetivo principal é acelerar entrega de produto, especialmente trabalho de frontend a partir de protótipos e fluxos de design. Um fluxo comum começa conectando o Figma Desktop via MCP, mapeando o contexto do projeto com /init e depois pedindo para o Cast scaffoldar telas, componentes e estilos, deixando o engenheiro focado em integração e regra de negócio.',
      'Na arquitetura, o projeto combina Node.js e TypeScript com NestJS, LangChain e LangGraph para orquestração multi-agent e streaming. Há suporte a múltiplos providers, modelos separados por papel como planner, architect, coder e reviewer, além de comandos para git, PRs, MCP, skills, agents, kanban local e acesso remoto via ngrok com interface protegida por senha.',
      'O produto também tem plan mode para pedidos complexos, contexto injetável via mentions como arquivos, diretórios e diff git, integração com mais de 30 servidores MCP e uma interface remota que espelha a execução local no navegador, incluindo live output, prompts remotos, voz com Whisper e acesso ao kanban.'
    ],
    highlights: [
      'CLI para trabalho diário de engenharia, não só demo',
      'Scaffolding de frontend guiado por Figma Desktop MCP',
      'Subagentes especialistas e skills customizáveis',
      'Git, PR, review e release notes integrados na mesma interface',
      'Acesso remoto via ngrok com UI web protegida por senha'
    ],
    tags: ['Node.js', 'TypeScript', 'NestJS', 'LangGraph', 'LangChain', 'MCP'],
    link: 'https://github.com/pedrocastanha/cast-code',
    accent: 'lime'
  },
  {
    id: '002',
    slug: 'pipeline-ocr',
    name: 'Pipeline OCR',
    impact: 'Redução de cerca de 85% no custo de extração documental',
    homeDescription:
      'Pipeline para documentos brasileiros que valida, normaliza e extrai dados com visão computacional, OCR, regex e LLM fallback.',
    summary:
      'Esse projeto nasceu para substituir o Documents AI em um cenário onde o custo estava desproporcional. Em vez de enviar tudo direto para um serviço caro, o pipeline primeiro entende o documento localmente, valida sua estrutura e só escala o raciocínio quando necessário.',
    details: [
      'Quando um documento brasileiro chega, ele passa por uma etapa de visão computacional com modelos treinados especificamente para esse domínio. Foram usados modelos de visão do Hugging Face com fine-tuning em PyTorch, além de OpenCV para pré-processamento e heurísticas visuais. Depois da validação, o sistema normaliza e melhora a imagem ou PDF para aumentar a qualidade da leitura.',
      'A etapa de extração combina OCR tradicional e parsing híbrido. O texto é extraído com ferramentas como pytesseract, pdf2image, pillow e pypdf. Parte das informações sai por regex, quando o padrão é bem definido; quando a extração não fecha com tudo o que o fluxo precisa, uma LLM entra para analisar o documento e tentar recuperar os campos ausentes com mais flexibilidade.',
      'No stack de ML e processamento estão PyTorch, TorchVision, scikit-learn, OpenCV, Pillow, pypdf e pdf2image. O resultado foi um pipeline mais controlável, orientado a documentos brasileiros e com uma redução de custo na casa de 85% sem perder a capacidade de extração do fluxo original.'
    ],
    highlights: [
      'Validação documental com modelos de visão especializados',
      'Fine-tuning em PyTorch para o contexto brasileiro',
      'Normalização e melhoria de imagem antes do OCR',
      'Regex para campos determinísticos e LLM como fallback inteligente',
      'Pipeline desenhado para reduzir custo sem sacrificar cobertura'
    ],
    tags: ['PyTorch', 'OpenCV', 'OCR', 'Regex', 'LLM', 'Computer Vision'],
    link: null,
    accent: 'paper'
  },
  {
    id: '003',
    slug: 'duda',
    name: 'Duda',
    impact: 'Agente educacional com RAG, persistência e observabilidade de custo',
    homeDescription:
      'Agente para dúvidas com base em documentos empresariais, usando RAG, memória persistente e rastreabilidade operacional.',
    summary:
      'Duda é um agente construído para responder dúvidas com base em documentos empresariais. O foco não era só responder bem, mas também manter custo, memória e logs sob controle.',
    details: [
      'A base de conhecimento usa Qdrant para RAG, com LangChain na orquestração das chamadas e do fluxo de contexto. O modelo da OpenAI é usado para geração e raciocínio, enquanto MongoDB persiste histórico de conversas e Redis sustenta cache de memória recente e camadas operacionais dos agentes.',
      'Uma preocupação central do projeto foi observabilidade. Custos e logs passam por abstrações próprias, o que permite rastrear consumo, comportamento e qualidade de resposta sem espalhar esse controle pela aplicação inteira.',
      'Na prática, o sistema combina recuperação documental, memória de sessão e persistência de conversas para responder com contexto empresarial real, mantendo uma operação mais previsível e auditável.'
    ],
    highlights: [
      'RAG com Qdrant para documentos empresariais',
      'LangChain na orquestração do fluxo conversacional',
      'MongoDB para persistência de conversas',
      'Redis para cache e memória recente',
      'Custos e logs rastreados por abstrações próprias'
    ],
    tags: ['Qdrant', 'LangChain', 'OpenAI', 'MongoDB', 'Redis', 'RAG'],
    link: null,
    accent: 'paper'
  },
  {
    id: '004',
    slug: 'lead-qualifier',
    name: 'Lead Qualifier',
    impact: 'Sistema multi-agent para atendimento, qualificação e memória de leads',
    homeDescription:
      'Arquitetura multi-agent com router de intenção, RAG, transcrição de áudio e memória de longo prazo para operação comercial.',
    summary:
      'Lead Qualifier é um sistema multi-agent orquestrado com LangGraph para atendimento e qualificação de leads. A base da arquitetura é um router que olha a mensagem atual e o histórico recente para inferir intenção e despachar a conversa para o agente correto.',
    details: [
      'Existem dois agentes principais. O atendente responde dúvidas sobre o negócio e foi treinado com RAG usando múltiplos documentos; antes a base vetorial era Pinecone, hoje é Qdrant. Ele também entende áudios a partir de transcrição com Whisper. O segundo agente é o qualificador, responsável por coletar dados, atualizar o estágio do funil e persistir esse avanço.',
      'Redis sustenta a memória recente dos agentes, enquanto MongoDB persiste funil, conversa e dados estruturados do lead. O projeto também implementa long-term memory: quando o cache expira, o histórico completo é resumido por uma LLM barata, e esse resumo é reidratado no Redis para que o agente continue lembrando do contexto nas próximas interações.',
      'O resultado é uma operação comercial em que atendimento, qualificação, memória e estágio de funil ficam conectados. O sistema não só responde, mas mantém continuidade de relacionamento ao longo do tempo.'
    ],
    highlights: [
      'Router de intenção com LangGraph',
      'Atendente com RAG e suporte a áudio via Whisper',
      'Agente qualificador persistindo dados e estágio do funil',
      'Redis para memória recente e MongoDB para persistência',
      'Long-term memory com resumo barato e reidratação de contexto'
    ],
    tags: ['LangGraph', 'Qdrant', 'Whisper', 'MongoDB', 'Redis', 'Multi-Agent'],
    link: null,
    accent: 'paper'
  },
  {
    id: '005',
    slug: 'pull-request-analyzer',
    name: 'PR Analyzer',
    impact: 'Review multi-agent com diff contra develop e análise orientada a evidência',
    homeDescription:
      'Analisa o diff da branch contra `develop`, injeta contexto em RAG e distribui a revisão para agentes especializados.',
    summary:
      'PR Analyzer automatiza revisão técnica a partir do diff da branch contra uma base preconfigurada, normalmente `develop`. Em vez de uma revisão monolítica, ele transforma o diff em contexto pesquisável e distribui a análise para agentes especialistas.',
    details: [
      'O diff é calculado, estruturado e injetado em um RAG para consulta eficiente. A partir daí, cada agente analisa possíveis problemas do seu domínio, como arquitetura, segurança, qualidade, testes ou performance, sem depender de uma leitura cega de todo o código.',
      'As respostas não são só alertas soltos. Cada agente comenta por que determinado ponto é um problema, quais evidências no diff sustentam esse diagnóstico e como a mudança pode ser melhorada. A ideia é gerar review com justificativa técnica, e não opinião vaga.',
      'Esse formato melhora a qualidade dos comentários e reduz ruído, principalmente em PRs grandes, onde uma abordagem linear tradicional perde contexto e consistência.'
    ],
    highlights: [
      'Diff calculado automaticamente contra develop',
      'RAG para consulta eficiente do contexto do PR',
      'Agentes por domínio técnico',
      'Comentários com justificativa e evidência',
      'Melhor relação sinal/ruído em PRs grandes'
    ],
    tags: ['LangGraph', 'RAG', 'Git Diff', 'Code Review', 'Python'],
    link: 'https://github.com/pedrocastanha/pull-request-analyzer',
    accent: 'paper'
  },
  {
    id: '006',
    slug: 'git-analyzer',
    name: 'GitCast',
    impact: 'Commits automáticos e análise de diff com debate entre agentes',
    homeDescription:
      'Versão anterior do GitCast, focada em Conventional Commits e análise profunda de código com agentes debatendo o diff.',
    summary:
      'Gitcast é uma versão mais antiga do que depois evoluiu para o CastCode. O foco era automatizar commits seguindo Conventional Commits e produzir análises mais profundas de mudanças de código a partir de colaboração entre agentes.',
    details: [
      'Na parte operacional, o projeto gera commits automáticos seguindo padrão consistente, reduzindo atrito no fluxo diário de versionamento. Isso ajuda a manter histórico mais legível e facilita release notes, revisão e rastreabilidade.',
      'Na parte analítica, dois agentes observam o diff, debatem entre si e refinam a leitura até chegar em um acordo. Em vez de retornar a primeira resposta possível, o sistema força uma espécie de confronto de interpretação para melhorar qualidade e consistência do resultado final.',
      'Mesmo sendo uma versão anterior, esse projeto já explora a ideia central que depois aparece em sistemas mais maduros: usar múltiplos agentes não só para dividir tarefas, mas para elevar qualidade da decisão.'
    ],
    highlights: [
      'Commits automáticos com Conventional Commits',
      'Análise profunda de diff',
      'Debate entre dois agentes antes da resposta final',
      'Histórico mais consistente e legível',
      'Base conceitual para evoluções posteriores'
    ],
    tags: ['Git', 'Conventional Commits', 'Agents', 'Diff Analysis', 'Python'],
    link: 'https://github.com/pedrocastanha/git-analyzer',
    accent: 'paper'
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
