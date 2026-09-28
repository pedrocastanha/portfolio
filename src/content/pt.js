const pt = {
  lang: 'pt',
  htmlLang: 'pt-BR',
  locale: 'pt_BR',

  meta: {
    title: 'Pedro Castanheira — Engenheiro de IA',
    description:
      'Engenheiro de IA e tech lead. Agentes em LangGraph, RAG multi-tenant, servidores MCP e LLMOps em produção — da curadoria dos dados à avaliação em CI.',
  },

  ui: {
    skip: 'Pular para o conteúdo',
    nav: { work: 'Cases', graph: 'Evidências', method: 'Método', path: 'Trajetória', contact: 'Contato' },
    langSwitch: { label: 'EN', title: 'Read in English' },
    home: 'Início',
  },

  hero: {
    eyebrow: 'Pedro Castanheira Costa · Engenheiro de IA · Squad Leader',
    titleBefore: 'Construo agentes de IA que ',
    titleMark: 'operam em produção.',
    titleAfter: 'dos dados ao deploy e à avaliação.',
    lede:
      'Lidero tecnicamente um squad responsável por cinco produtos de IA em produção numa EdTech. Atuo da descoberta do problema com as áreas de negócio até arquitetura, implementação, observabilidade e avaliação, principalmente com Python, LangGraph e FastAPI, e TypeScript com NestJS no backend.',
    note: 'números reais',
    metrics: [
      { value: '70–120', label: 'vendas por dia feitas por um agente conversacional, 24/7' },
      { value: '~140 mil', label: 'submissões corrigidas por mês num pipeline assíncrono com LangChain' },
      { value: '~45%', label: 'menos custo de OCR descartando documentos inválidos antes da extração' },
    ],
    sketch: {
      data: 'planilhas, PDFs,\nsistemas internos',
      messy: 'dados bagunçados',
      'a-data-ctx': 'curadoria',
      context: 'contexto\nconfiável',
      agent: 'agentes\n(LangGraph)',
      tools: 'tools · MCP',
      memory: 'memória',
      prod: 'produção\n24/7',
      eval: 'evals em CI\n+ Langfuse',
      'a-eval-ctx': 'medir e ajustar',
      me: '↑ é isso que eu construo, ponta a ponta',
    },
    sketchLabel: 'Esboço: dados passam por curadoria, viram contexto, alimentam agentes em produção, e a avaliação volta para o contexto.',
    ctas: { work: 'Ver os cases', github: 'GitHub', linkedin: 'LinkedIn', contact: 'Falar comigo' },
  },

  graph: {
    kicker: 'Evidências',
    title: 'Toda skill aqui aponta para uma prova.',
    lede:
      'Em vez de uma lista de tecnologias, um grafo: cada competência se liga aos projetos em que ela foi usada. Passe o mouse, toque ou navegue com o teclado para acender as ligações.',
    prodLabel: 'em produção',
    personalLabel: 'pessoal · código aberto',
    pick: 'Escolha uma skill',
    provedBy: 'Onde provei',
    skills: {
      langgraph: 'LangGraph',
      curation: 'Curadoria de dados',
      context: 'Memória e contexto',
      rag: 'RAG',
      multitenant: 'Multi-tenant',
      cost: 'Custo por tarefa',
      vision: 'Visão computacional',
      multiagent: 'Multiagentes',
      mcp: 'Servidores MCP',
      evals: 'Avaliação em CI',
      graphs: 'Grafos · Neo4j',
      python: 'Python · FastAPI',
      typescript: 'TypeScript · Node',
      queues: 'Filas e workers',
    },
  },

  work: {
    kicker: 'Cases',
    prodTitle: 'Em produção',
    prodLede:
      'O problema, decisões e números de três dos cinco produtos que lidero tecnicamente.',
    prodBadge: 'Produção',
    personalTitle: 'Projetos pessoais',
    personalLede: 'Onde testo ideias com código aberto: revisão de código com grafos, avaliação de RAG e ferramentas para agentes de código.',
    personalBadge: 'Pessoal · código aberto',
    read: 'Ler o case',
  },

  method: {
    returnLabel: 'evidência volta para a descoberta',
    kicker: 'Método',
    title: 'Como um produto de IA sai do papel comigo.',
    lede: 'O ciclo que aplico na squad. A avaliação e a observabilidade voltam para a descoberta, e o produto melhora com evidência, não com impressão.',
    steps: [
      { id: 'discovery', label: 'descoberta', text: 'Diagnóstico com as áreas de negócio: qual decisão ou tarefa muda, e como vamos saber se funcionou.' },
      { id: 'data', label: 'curadoria', text: 'Entender documentos e planilhas, relacionar entidades e metadados, decidir qual é a fonte de verdade.' },
      { id: 'context', label: 'contexto', text: 'Chunking, busca híbrida, roteamento de contexto e memória de curto e longo prazo.' },
      { id: 'build', label: 'agentes', text: 'Grafos em LangGraph, subagentes, ferramentas, integração de APIs e servidores MCP.' },
      { id: 'eval', label: 'avaliação', text: 'Evaluators e testes de retrieval e do grafo completo rodando em CI/CD.' },
      { id: 'observe', label: 'operação', text: 'Langfuse, métricas de custo, erros e alucinação em produção.' },
    ],
  },

  path: {
    kicker: 'Trajetória',
    title: 'De onde vem essa experiência.',
    jobs: [
      {
        role: 'Engenheiro de Software — IA e GenAI · Tech Lead do squad',
        org: 'Inova Soluções Educacionais',
        period: 'ago 2025 — atual',
        current: true,
        bullets: [
          'Liderança técnica do squad e de cinco produtos de IA em produção: diagnóstico com as áreas de negócio, arquitetura, deploy e métricas.',
          'Desenvolvimento de agentes em LangGraph, de um pipeline de correção com BullMQ e LangChain, de RAG multi-tenant com Qdrant para tutoria e de classificadores de documentos com ConvNeXt.',
          'Implantação de LLMOps com Langfuse e evaluators; CI/CD com avaliação de retrieval e do grafo completo, além de métricas de custo, erros e alucinação.',
        ],
      },
      {
        role: 'Estagiário de dados',
        org: 'Centro Universitário UniFatecie',
        period: 'mai 2025 — ago 2025',
        bullets: ['Dashboards em Power BI e consultas para relatórios no Jasper Reports.'],
      },
      {
        role: 'Estagiário de front-end',
        org: 'Vertti Tecnologia',
        period: 'mar 2025 — mai 2025',
        bullets: ['Desenvolvimento de funcionalidades em React e JavaScript.'],
      },
    ],
    educationTitle: 'Formação',
    education: {
      degree: 'Bacharelado em Engenharia de Software',
      school: 'UniCesumar',
      period: 'fev 2023 — cursando',
    },
    certsTitle: 'Certificações',
    certs: [
      'Model Context Protocol: Advanced Topics — Anthropic',
      'Introduction to Model Context Protocol — Anthropic',
      'Introduction to Agent Skills — Anthropic',
      'AI Fluency: Framework & Foundations — Anthropic',
      'Nano Course Agentes Autônomos — FIAP',
    ],
    languagesTitle: 'Idiomas',
    languages: 'Português nativo · Inglês avançado (C1)',
  },

  contact: {
    kicker: 'Contato',
    title: 'Vamos conversar sobre soluções inteligentes com IA.',
    text: '',
    email: 'pedrocastanhacosta1945@gmail.com',
    copy: 'Copiar e-mail',
    copied: 'Copiado',
    location: 'Maringá, PR',
  },

  casePage: {
    back: 'Todos os cases',
    sections: {
      problem: 'Problema',
      data: 'Dados disponíveis',
      decisions: 'Decisões de arquitetura',
      implementation: 'Implementação',
      result: 'Resultado',
      limits: 'Limitações e aprendizados',
    },
    role: 'Papel',
    stack: 'Stack',
    status: 'Status',
    links: 'Links',
    zoom: 'ampliar diagrama',
    close: 'fechar',
    diagramLabel: 'Diagrama da arquitetura, montado conforme a leitura',
    stepLabel: 'etapa',
    estimate: 'estimativa',
    swipe: 'arraste para ver o diagrama inteiro →',
    next: 'Próximo case',
    notFoundTitle: 'Esse case não existe.',
    notFoundText: 'Talvez o link tenha mudado. Os cases estão todos na página inicial.',
  },

  footer: {
    note: 'Porfólio inspirado no grandioso Excalidraw.',
    source: 'Código do site',
  },

  cases: [
    {
      slug: 'enrollment-agent',
      kind: 'prod',
      short: 'Agente de vendas',
      title: 'Agente de vendas e matrículas',
      summary:
        'Desenvolvimento de agente conversacional em LangGraph com roteador, três subagentes e ferramentas integradas a sistemas internos: atende, tira dúvidas sobre cursos e conduz a matrícula, 24/7.',
      metric: { value: '70–120', label: 'vendas por dia' },
      context: 'Produção · empresa de educação',
      role: 'Tech lead · arquitetura e desenvolvimento',
      status: 'Em produção, 24/7',
      stack: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Qdrant', 'Redis', 'MongoDB', 'Celery', 'Langfuse', 'Cloud Run'],
      problem:
        'Vender um curso exige responder com precisão sobre valores, disciplinas, polos e regras de elegibilidade — informações que variam por curso e por cliente. Um agente que erra o preço ou a grade perde a venda; um que responde de forma genérica não converte.',
      data:
        'O ponto de partida eram documentos e planilhas fragmentados: regulamentos, FAQs, matrizes curriculares e catálogos com a mesma informação espalhada em formatos diferentes. Antes de qualquer prompt, o trabalho foi de curadoria — entender cada fonte, relacionar as informações e decidir qual era a verdade.',
      decisions: [
        {
          title: 'Curadoria em duas etapas',
          text: 'Primeiro, organização dos documentos em chunks estruturados, com scripts de ingestão para documentos e planilhas. Depois, migração para uma plataforma de gestão de dados em que valores, disciplinas e informações acadêmicas se vinculam à entidade pai “curso”.',
        },
        {
          title: 'Roteamento explícito',
          text: 'Um roteador com saída estruturada decide o caminho de cada mensagem: atendimento, matrícula ou handoff para um consultor humano. Matrículas já iniciadas seguem por um desvio determinístico, sem depender do modelo.',
        },
        {
          title: 'Busca híbrida com cache',
          text: 'Vetores densos e esparsos no Qdrant, fusão de resultados e reranking, com filtros por categoria e curso. Um cache semântico com TTL evita repetir buscas e reranking para perguntas equivalentes.',
        },
        {
          title: 'Memória que sobrevive à sessão',
          text: 'Redis guarda a sessão ativa (STM); MongoDB guarda o histórico durável. Quando a sessão expira, o contexto é reconstruído a partir do histórico e um modelo mais barato gera o resumo de longo prazo (LTM) usado na conversa seguinte.',
        },
      ],
      implementation: [
        'Grafo em LangGraph: roteador → subagentes de atendimento, matrícula e notificação → resposta final.',
        'Ferramentas para base de conhecimento, polos, catálogo e elegibilidade de cursos, gravação e checagem dos dados de matrícula e handoff para consultor.',
        'Guardrails que validam regras de negócio e comparam valores citados na resposta com o que as ferramentas retornaram.',
        'Buffer de mensagens, deduplicação e bloqueio de spam por janela de tempo; tarefas de remarketing em Celery, fora do fluxo da conversa.',
        'Golden set com LLM como juiz, rastreamento no Langfuse e registro de tokens e custo por conversa.',
      ],
      result: {
        metrics: [{ value: '70–120', label: 'vendas por dia' }],
        text: 'O agente opera 24/7 e fecha de 70 a 120 vendas por dia.',
      },
      limits: [
        'A evolução de chunks para a entidade “curso” aparece aqui como decisão de arquitetura, não publico uma métrica isolada de ganho entre as duas versões.',
        'Integrações, dados de clientes e prompts ficam de fora por confidencialidade.',
      ],
      flow: {
        student: 'aluno',
        question: '“quanto custa? quais disciplinas?”',
        sources: 'planilhas\n+ documentos',
        fragmented: 'fragmentado, formatos diferentes',
        v1: 'v1: chunks\nestruturados',
        v2: 'v2: entidade\n“curso”',
        price: 'valores',
        subjects: 'disciplinas',
        academic: 'info acadêmica',
        memory: 'Redis (STM)\nMongoDB (LTM)',
        session: 'sessão expirou →\nresumo LTM volta',
        router: 'roteador',
        sub1: 'atendimento',
        sub2: 'matrícula',
        sub3: 'handoff p/ consultor',
        tools: 'tools',
        systems: 'Qdrant híbrido\n+ rerank',
        result: '70–120 vendas/dia',
        result2: 'operando 24/7',
      },
    },
    {
      slug: 'grading-pipeline',
      kind: 'prod',
      short: 'Correção em escala',
      title: 'Correção de atividades em escala',
      summary:
        'Arquitetura de pipeline assíncrono em NestJS com BullMQ que sincroniza submissões do LMS, envia cada uma para correção com LangChain e devolve nota e feedback ao Moodle.',
      metric: { value: '~140 mil', label: 'submissões corrigidas por mês' },
      context: 'Produção · empresa de educação',
      role: 'Tech lead · arquitetura e desenvolvimento',
      status: 'Em produção',
      stack: ['TypeScript', 'NestJS', 'BullMQ', 'Redis', 'PostgreSQL', 'MongoDB', 'LangChain', 'Moodle', 'GCS', 'WebSocket'],
      problem:
        'Corrigir atividades em volume, com critério consistente, dentro do LMS que alunos e professores já usam — sem perder submissões quando um serviço externo falha ou demora.',
      data:
        'As submissões chegam do LMS como arquivo ou texto online, com metadados de atividade, oferta e organização. Os arquivos ficam no Google Cloud Storage.',
      decisions: [
        {
          title: 'Pipeline em etapas, em filas',
          text: 'Um job por atividade sincroniza as submissões e cria um job por submissão. Cada etapa — arquivo, análise, integração — roda em workers BullMQ, fora do request.',
        },
        {
          title: 'Falhar sem perder trabalho',
          text: 'Jobs de análise com até três tentativas e backoff exponencial, deduplicação por resposta e estado por submissão, o que permite reenfileirar o que ficou parado.',
        },
        {
          title: 'A IA num serviço separado',
          text: 'O NestJS orquestra; a correção com LangChain roda num serviço Python próprio, chamado por HTTP. Um lado escala a fila; o outro evolui o modelo e os critérios.',
        },
        {
          title: 'Viabilidade medida contra a alternativa real',
          text: 'O custo por atividade corrigida foi comparado ao da correção humana, que é o que o produto substitui.',
        },
      ],
      implementation: [
        'Disparo por cron ou manual → job da atividade → sincronização das submissões com o LMS.',
        'Jobs BullMQ por submissão: download do arquivo, envio ao serviço de correção e persistência do resultado.',
        'Nota e feedback gravados de volta no Moodle.',
        'Eventos e durações de cada execução guardados para dashboards operacionais; progresso notificado via WebSocket.',
      ],
      result: {
        metrics: [
          { value: '~140 mil', label: 'submissões corrigidas por mês' },
          { value: '~99%', label: 'menos custo por atividade corrigida vs. correção humana', estimate: true },
          { value: '~3.000%', label: 'de ROI', estimate: true },
        ],
        text: 'Redução de custo e ROI são estimativas internas em comparação com a correção humana.',
      },
      limits: [
        'A correção em si é uma cadeia LangChain simples; o trabalho difícil está na orquestração, na resiliência e na integração com o LMS.',
        'Redução de custo e ROI são estimativas, não valores auditados; não detalho aqui a fórmula nem o período.',
        'Critérios de correção e dados de alunos ficam de fora por confidencialidade.',
      ],
      flow: {
        trigger: 'cron / manual',
        volume: '~140 mil submissões/mês',
        lms: 'LMS\n(Moodle)',
        activity: 'job da\natividade',
        'a-act-lms': 'sincroniza',
        subs: 'jobs por\nsubmissão',
        retry: '3 tentativas · backoff\n· dedupe · reenfileira',
        ai: 'serviço Python\nLangChain',
        store: 'status +\nresultado',
        grade: 'nota +\nfeedback',
        analytics: 'eventos +\ndurações',
        ws: 'WebSocket',
        r1: '~140 mil submissões/mês',
        r2: '~99% menos custo por atividade vs. correção humana (estimativa)',
        r3: 'ROI estimado em ~3.000%',
      },
    },
    {
      slug: 'document-triage',
      kind: 'prod',
      short: 'Triagem de documentos',
      title: 'Triagem de documentos antes do OCR',
      summary:
        'Desenvolvimento de um validador visual em duas etapas, com ConvNeXt-Tiny, que descarta documentos ilegíveis ou do tipo errado antes da extração no Document AI.',
      metric: { value: '~45%', label: 'menos custo de OCR' },
      context: 'Produção · empresa de educação',
      role: 'Treinamento dos modelos, serving e integração',
      status: 'Em produção',
      stack: ['Python', 'FastAPI', 'PyTorch', 'ConvNeXt-Tiny', 'OpenCV', 'NestJS', 'GCP Document AI', 'GCS'],
      problem:
        'OCR e extração com Document AI são cobrados por página processada. Sem triagem, documentos em branco, desfocados ou do tipo errado pagam OCR e só falham depois, na validação dos campos.',
      data:
        'Imagens e PDFs de documentos pessoais e acadêmicos de vários tipos. O treino usa positivos rotulados por tipo e exemplos negativos fora de escopo, com manifestos e datasets isolados por tipo.',
      decisions: [
        {
          title: 'Classificar antes de ler',
          text: 'A API de documentos chama o validador antes do OCR. Reprovado, o documento volta com o motivo e o Document AI nem é acionado.',
        },
        {
          title: 'Duas etapas: tipo e validade',
          text: 'Um classificador ConvNeXt-Tiny prevê o tipo — pulado quando o tipo já é informado — e um validador binário especializado decide se aquele documento é válido.',
        },
        {
          title: 'Gastar inferência só quando precisa',
          text: 'Um quality gate descarta páginas em branco, desfocadas ou de baixa resolução antes do modelo. TTA com quatro vistas só entra na faixa de confiança intermediária, com thresholds por modelo.',
        },
        {
          title: 'Serving pensado para cold start',
          text: 'Modelos carregados em cache e aquecidos no boot, concorrência limitada por semáforo. Do lado da API, timeout de 90 s e nova tentativa em caso de cold start.',
        },
      ],
      implementation: [
        'Pipeline de treino separado em corpus, manifestos, sampling, treino e avaliação, com métricas versionadas por modelo.',
        'Registry que seleciona versão e threshold por tipo de documento.',
        'Documentos multipágina: até 8 páginas, válido se alguma passar, com aceite antecipado acima de 0,97.',
        'Integração na API NestJS: validação e OCR com tempos medidos separadamente; o OCR recebe a URI do GCS.',
      ],
      result: {
        metrics: [
          { value: '~45%', label: 'menos custo de OCR no Document AI (GCP)' },
          { value: '98,3%', label: 'de acurácia do classificador de tipo no split de teste (1.500 imagens)' },
        ],
        text: 'Documentos inválidos são descartados antes do OCR: redução aproximada de 45% no custo do Document AI.',
      },
      limits: [
        'A acurácia é de um split de teste versionado, não uma garantia sobre o tráfego real.',
        'O percentual de economia é aproximado.',
        'Tipos de documento e volumes detalhados ficam de fora por confidencialidade.',
      ],
      flow: {
        upload: 'documento\n(PDF / imagem)',
        billing: 'Document AI cobra\npor página processada',
        dataset: 'positivos por tipo\n+ negativos',
        gate: 'quality gate\n(branco, blur)',
        router: 'ConvNeXt-Tiny\nqual tipo?',
        'a-data-router': 'treino',
        validator: 'validador binário\ndo tipo',
        tta: 'TTA só na dúvida',
        reject: 'inválido →\nvolta com motivo',
        docai: 'Document AI\n(OCR)',
        'a-val-docai': 'válido',
        fields: 'campos\nvalidados',
        r1: '~45% menos custo de OCR',
        r2: 'classificador: 98,3% no split de teste',
      },
    },
    {
      slug: 'cast-review',
      kind: 'personal',
      short: 'Cast Review',
      title: 'Cast Review',
      summary:
        'Desenvolvimento de uma plataforma de revisão de PRs que indexa o repositório como grafo no Neo4j e expõe indexação, contexto e análise por um servidor MCP.',
      metric: { value: '5', label: 'tools no servidor MCP' },
      context: 'Projeto pessoal · código aberto',
      role: 'Produto, arquitetura e desenvolvimento',
      status: 'Em desenvolvimento ativo',
      stack: ['NestJS', 'TypeScript', 'FastAPI', 'LangGraph', 'Neo4j', 'tree-sitter', 'Redis', 'BullMQ', 'MCP SDK', 'React', 'SSE'],
      links: [{ label: 'GitHub', href: 'https://github.com/pedrocastanha/cast-review' }],
      problem:
        'Revisar só o diff deixa passar o impacto fora dele: quem chama a função alterada, quais testes a cobrem, que fronteira de arquitetura foi cruzada.',
      data:
        'O próprio repositório: arquivos, símbolos e as relações entre eles. O diff diz o que mudou; o grafo diz o que essa mudança toca.',
      decisions: [
        {
          title: 'Código como grafo',
          text: 'O tree-sitter extrai símbolos e relações (defines, references, imports, tests). O Neo4j persiste o grafo por repositório e commit, com lock no Redis e reindexação incremental. A indexação roda fora do request, em fila BullMQ.',
        },
        {
          title: 'Contexto com orçamento',
          text: 'Para os arquivos alterados, o serviço de IA monta o contexto relacionado a partir do grafo, dentro de um orçamento de tokens, antes de acionar os revisores.',
        },
        {
          title: 'Humano no loop',
          text: 'O grafo de revisão em LangGraph gera um PRD e uma especificação da mudança, cada um com aprovação humana. Aprovados, os revisores de testes e de arquitetura rodam em paralelo e um report builder consolida os achados.',
        },
        {
          title: 'MCP como fronteira',
          text: 'Servidor MCP separado (Streamable HTTP): o token opaco é trocado por um JWT de ação de dois minutos via introspecção, com rate limit. As tools são um proxy fino para o backend e o serviço de IA.',
        },
      ],
      implementation: [
        'index_repository — dispara a indexação incremental de um repositório.',
        'get_index_status — informa se o repositório está indexado e qual o último commit indexado.',
        'get_related_context — devolve o contexto do grafo ligado aos arquivos alterados, com orçamento de tokens.',
        'run_pr_analysis — inicia a análise assíncrona de uma PR e devolve o analysisId.',
        'get_analysis — consulta o estado de uma análise em andamento.',
        'Fora do MCP: chat sobre o repositório com ferramentas de navegação no grafo (search_symbols, read_symbol, neighbors, list_endpoints, cross_repo_links) e publicação dos achados como comentários inline na PR, com progresso via SSE.',
      ],
      implementationTitle: 'Tools do servidor MCP',
      result: {
        metrics: [
          { value: '5', label: 'tools MCP' },
          { value: '2', label: 'revisores em paralelo' },
        ],
        text: 'Fluxo completo, do índice ao comentário na PR, disponível pela interface web e por qualquer cliente MCP — Claude Code, Cursor e outros.',
      },
      limits: [
        'Projeto pessoal em desenvolvimento ativo.',
        'Os revisores atuais cobrem testes e arquitetura; outros domínios ainda não existem.',
        'O servidor MCP não edita código: expõe indexação, contexto e análise.',
      ],
      flow: {
        pr: 'Pull\nRequest',
        blind: 'o diff não mostra\nquem depende dele',
        repo: 'repositório',
        queue: 'NestJS +\nfila BullMQ',
        indexer: 'tree-sitter:\nsímbolos + relações',
        neo4j: 'Neo4j\ngrafo do código',
        budget: 'contexto com\norçamento de tokens',
        prd: 'PRD\n+ aprovação',
        spec: 'spec\n+ aprovação',
        tests: 'revisor\nde testes',
        arch: 'revisor de\narquitetura',
        report: 'report\nbuilder',
        github: 'comentários\ninline na PR',
        'a-neo-rev': 'contexto',
        clients: 'Claude Code,\nCursor…',
        mcp: 'servidor MCP\n5 tools',
        'a-mcp-queue': 'análise',
        'a-mcp-neo': 'índice + contexto',
        auth: 'token opaco → JWT de 2 min · rate limit',
        r: 'do índice ao comentário na PR',
      },
    },
    {
      slug: 'rag-groundtruth',
      kind: 'personal',
      short: 'Groundtruth',
      title: 'Groundtruth — gate de avaliação para RAG',
      summary:
        'Desenvolvimento de um harness que mede mudanças em sistemas RAG antes do merge e bloqueia a PR quando o Recall@10 cai mais de 1 ponto percentual.',
      metric: { value: '1 pp', label: 'de queda no Recall@10 já barra o merge' },
      context: 'Projeto pessoal · código aberto',
      role: 'Desenho do experimento e desenvolvimento',
      status: 'Concluído (V1 e multi-documento)',
      stack: ['Python', 'RAGAS', 'GitHub Actions', 'Busca híbrida', 'Reranking', 'GraphRAG'],
      links: [{ label: 'GitHub', href: 'https://github.com/pedrocastanha/rag-groundtruth' }],
      problem:
        'Mudar chunking, busca ou reranker “parece melhor” até alguém medir. Sem um baseline versionado, uma regressão de retrieval chega à produção sem aviso.',
      data:
        'Um golden set de 100 perguntas revisadas por humano sobre um documento técnico (V1) e 18 perguntas aprovadas num corpus de três documentos (multi-documento).',
      decisions: [
        {
          title: 'Gate objetivo',
          text: 'Baseline versionado no repositório. A mudança falha se o Recall@10 cair mais de 1 ponto percentual, com tolerância numérica para não falhar por arredondamento.',
        },
        {
          title: 'Provar que o teste funciona',
          text: 'Um retriever quebrado de propósito precisa derrubar o gate. Se não derrubar, o gate não serve.',
        },
        {
          title: 'Busca e resposta medidas separadamente',
          text: 'Recall, MRR e nDCG medem a busca; Faithfulness e Answer Relevancy (RAGAS) medem a resposta. Um sem o outro engana.',
        },
      ],
      implementation: [
        'Workflow no GitHub Actions que recalcula o retrieval e aplica o gate.',
        'Comparação entre busca densa, híbrida e reranker com LLM, em dois tamanhos de chunk.',
        'Multi-documento: busca geral, tool com filtro de documento e expansão por grafo (GraphRAG), em condições controlada e ajustada, com custo, latência e chamadas de tool por resposta.',
      ],
      result: {
        metrics: [
          { value: '0,88 → 0,98', label: 'nDCG@10 com reranker, Recall dentro do gate' },
          { value: '−2,78 pp', label: 'de Recall com GraphRAG vs. busca geral: o gate barraria' },
        ],
        text: 'O reranker foi recomendado como opção quality-first. A expansão por grafo ficou abaixo da busca geral nesta amostra — e o próprio gate teria impedido o merge.',
      },
      limits: [
        'O golden set multi-documento é pequeno (18 perguntas).',
        'Relevância binária não distingue uma resposta direta de um trecho que só dá contexto; o próximo passo seria usar graus de 0 a 3.',
        'Custo e latência do reranker não foram comparados no V1.',
      ],
      flow: {
        change: 'mudança:\nchunk, busca, reranker',
        feel: '“parece melhor”…',
        golden: 'golden set\n100 + 18 perguntas',
        run: 'roda o\nretrieval',
        metrics: 'Recall@10\nMRR · nDCG',
        baseline: 'baseline\nversionado',
        gate: 'caiu mais\nde 1 pp?',
        'a-gate-pass': 'não',
        'a-gate-fail': 'sim',
        pass: 'merge',
        fail: 'bloqueia',
        ci: 'GitHub Actions',
        ragas: 'RAGAS: faithfulness\n+ relevancy',
        broken: 'retriever quebrado de\npropósito → gate falha',
        r1: 'reranker: nDCG@10 0,88 → 0,98, Recall dentro do gate',
      },
    },
    {
      slug: 'cast-code',
      kind: 'personal',
      short: 'Cast Code',
      title: 'Cast Code',
      summary:
        'Desenvolvimento de uma CLI multiagente de código que planeja, delega para especialistas, usa ferramentas via MCP e verifica o próprio trabalho no terminal.',
      metric: { value: '~30', label: 'templates de integração MCP' },
      context: 'Projeto pessoal · código aberto',
      role: 'Produto, arquitetura e desenvolvimento',
      status: 'Publicado no npm · em evolução',
      stack: ['TypeScript', 'Node.js', 'NestJS', 'MCP', 'WebSocket'],
      links: [
        { label: 'GitHub', href: 'https://github.com/pedrocastanha/cast-code' },
        { label: 'npm', href: 'https://www.npmjs.com/package/cast-code' },
      ],
      problem:
        'Assistentes lineares geram código rápido, mas perdem convenções, não verificam o resultado e quebram o fluxo entre plano, implementação e entrega.',
      data: 'O codebase local, o diff do Git, arquivos e URLs mencionados no prompt, e as skills e agentes definidos no próprio projeto.',
      decisions: [
        {
          title: 'Modelo por responsabilidade',
          text: 'Planner, architect, coder e reviewer podem usar providers e modelos diferentes, equilibrando custo e qualidade por etapa.',
        },
        {
          title: 'Extensível por arquivos',
          text: 'Skills e agentes vivem no projeto, em Markdown, e são versionados junto do código — sem mudar o núcleo da CLI.',
        },
        {
          title: 'Loop explícito',
          text: 'Planejar, agir, verificar e fazer autocrítica antes de entregar commit ou PR.',
        },
      ],
      implementation: [
        'Agente principal que delega para especialistas definidos em Markdown (coder, architect, reviewer, tester, frontend, backend, devops e outros).',
        'Árvore ao vivo dos subagentes no terminal, com status, ferramenta atual e tempo.',
        'Comandos de Git com IA: /up (commit), /split-up (divide commits por intenção), /pr e /review.',
        'Cliente MCP com catálogo de templates, /remote para acompanhar pelo navegador (com voz) e /bridge para usar CLIs de outros provedores.',
      ],
      result: {
        metrics: [{ value: 'npm', label: 'publicado como cast-code' }],
        text: 'Publicado no npm e em evolução contínua.',
      },
      limits: ['Projeto pessoal; não há métricas públicas de uso.'],
      flow: {
        dev: 'você no\nterminal',
        prompt: 'prompt + @arquivo, @git, URL',
        ctx: 'codebase +\nskills do projeto',
        core: 'agente principal\n(plano)',
        models: 'modelo por papel:\nplanner, coder, reviewer…',
        specialists: 'especialistas\n(coder, architect…)',
        tools: 'tools + MCP\n(~30 templates)',
        remote: '/remote: web + voz',
        verify: 'verificação:\nreview + testes',
        'a-verify-core': 'autocrítica',
        ship: 'commit\n/ PR',
        r: 'publicado no npm: cast-code',
      },
    },
    {
      slug: 'cast-skills',
      kind: 'personal',
      short: 'Cast Skills',
      title: 'Cast Skills',
      summary:
        'Criação de um pacote npm que instala skills de contexto de projeto e um workflow orientado por especificação em seis ferramentas de IA para código.',
      metric: { value: '6', label: 'ferramentas de IA suportadas' },
      context: 'Projeto pessoal · código aberto',
      role: 'Produto e desenvolvimento',
      status: 'Publicado no npm',
      stack: ['Node.js', 'JavaScript', 'SKILL.md', 'npm'],
      links: [
        { label: 'GitHub', href: 'https://github.com/pedrocastanha/cast-skills' },
        { label: 'npm', href: 'https://www.npmjs.com/package/cast-skills' },
      ],
      problem:
        'Agentes de código reaprendem o projeto a cada sessão: esquecem convenções, fronteiras de módulos e regras de negócio que não estão escritas em lugar nenhum.',
      data: 'O codebase e as respostas do time a perguntas curtas do bootstrapper, transformados em uma árvore de skills do projeto.',
      decisions: [
        {
          title: 'Padrão aberto como fonte',
          text: 'SKILL.md é o formato canônico. A conversão para ferramentas com formato próprio (Cursor, Windsurf) acontece só na instalação.',
        },
        {
          title: 'Divulgação progressiva',
          text: 'O agente carrega primeiro o mapa geral do projeto e depois só as regras do módulo que está mexendo.',
        },
        {
          title: 'Roteador sempre ativo',
          text: 'A skill using-project-skills entra no início de qualquer feature, correção ou refatoração e conduz o trabalho pelo contexto do projeto e pelo workflow de especificação.',
        },
      ],
      implementation: [
        'Wizard (npx cast-skills) que detecta as ferramentas instaladas e copia as skills: SKILL.md nativo para Claude Code, Copilot, Gemini e Codex; conversão para .mdc no Cursor e para regras no Windsurf.',
        'Três skills: using-project-skills (roteador), creating-project-skills (bootstrapper) e explaining-changes (explicações depois de uma mudança).',
        'Testes automatizados do Node cobrem a instalação e a conversão de formatos.',
      ],
      result: {
        metrics: [{ value: '6', label: 'ferramentas suportadas' }],
        text: 'Publicado no npm como cast-skills.',
      },
      limits: [
        'Os ganhos de tokens citados no README são referência da Anthropic sobre o padrão de skills, não uma medição deste projeto.',
      ],
      flow: {
        agent: 'agente de\ncódigo',
        forget: 'reaprende o projeto\na cada sessão',
        codebase: 'codebase +\nrespostas do time',
        cli: 'npx\ncast-skills',
        tree: 'árvore de skills\ndo projeto',
        native: 'SKILL.md nativo:\nClaude, Copilot, Gemini, Codex',
        converted: 'convertido:\nCursor .mdc, Windsurf',
        router: 'using-project-skills\n(roteador)',
        work: 'agente com\ncontexto',
        r: '6 ferramentas · publicado no npm',
      },
    },
  ],
};

export default pt;
