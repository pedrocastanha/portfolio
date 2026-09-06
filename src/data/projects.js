export const projects = [
  {
    id: '01',
    slug: 'cast-review',
    name: 'Cast Review',
    eyebrow: 'Produto open source · 2026',
    type: 'Open source',
    status: 'Em desenvolvimento ativo',
    impact: 'Revisão de PR orientada por arquitetura, evidência e contexto do repositório.',
    homeDescription: 'Uma plataforma de review que transforma diff em contexto, mapeia dependências e coordena especialistas de produto, testes e arquitetura.',
    summary: 'Cast Review trata revisão de código como um problema de contexto. A plataforma indexa o repositório, entende relações entre símbolos e conduz uma análise multiagente com gates humanos antes de publicar qualquer conclusão.',
    challenge: 'PRs grandes escondem impacto fora do diff. Ler apenas os arquivos alterados deixa passar callers, contratos, testes e fronteiras arquiteturais que continuam vivendo no restante do codebase.',
    solution: 'Separei indexação e análise em dois fluxos. Um job assíncrono constrói um grafo persistente; a análise consulta esse grafo sob orçamento de contexto e entrega a cada especialista somente a evidência relevante.',
    architecture: [
      { label: 'GitHub PR', detail: 'diff + árvore' },
      { label: 'Fila de índice', detail: 'NestJS + BullMQ' },
      { label: 'Code graph', detail: 'Tree-sitter + Neo4j' },
      { label: 'Review graph', detail: 'FastAPI + LangGraph' },
      { label: 'Gates humanos', detail: 'Redis checkpoints' },
      { label: 'Review', detail: 'evidência no GitHub' }
    ],
    decisions: [
      { title: 'Indexação fora do request', text: 'Repositórios grandes viram jobs BullMQ deduplicados por commit. O usuário recebe progresso enquanto parsing e persistência rodam fora do ciclo HTTP.' },
      { title: 'Contexto como grafo', text: 'Tree-sitter extrai símbolos e relações; Neo4j persiste o mapa e um ranking personalizado encontra impacto além dos arquivos alterados.' },
      { title: 'Humano no loop', text: 'PRD, especificação e publicação podem pausar, receber anotações e retomar do checkpoint sem repetir a execução inteira.' }
    ],
    proof: [
      { value: '3', label: 'serviços especializados' },
      { value: '6', label: 'etapas do fluxo' },
      { value: 'HITL', label: 'aprovação durável' }
    ],
    role: ['Produto', 'Arquitetura', 'Backend', 'AI engineering', 'Frontend'],
    tags: ['React', 'NestJS', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Redis', 'Neo4j', 'Tree-sitter'],
    link: 'https://github.com/pedrocastanha/cast-review',
    featured: true,
    tone: 'signal'
  },
  {
    id: '02',
    slug: 'tracecast',
    name: 'TraceCast',
    eyebrow: 'SDK open source · PyPI · 2026',
    type: 'Open source',
    status: 'Publicado no PyPI',
    impact: 'Observabilidade self-hosted para entender cada decisão de agentes e LLMs.',
    homeDescription: 'SDK Python que captura spans, grafo executado, tokens, custo e latência, com exporters resilientes e dashboard próprio.',
    summary: 'TraceCast nasceu da necessidade de enxergar sistemas de IA por dentro sem amarrar a aplicação a um fornecedor. O core instrumenta frameworks e SDKs, reconstrói o fluxo executado e exporta os dados para o storage escolhido pelo time.',
    challenge: 'Logs lineares não explicam uma execução com agentes, ferramentas, branches e streaming. Também não mostram onde custo, latência ou erro realmente surgiram.',
    solution: 'Um ContextVar mantém o trace ativo por request. Callbacks, decorators e instrumentors anexam spans com hierarquia; a finalização agrega métricas e deriva o caminho percorrido antes de exportar.',
    architecture: [
      { label: 'App de IA', detail: 'qualquer framework' },
      { label: 'Captura', detail: 'callbacks + wrappers' },
      { label: 'Trace', detail: 'spans + edges' },
      { label: 'Exporters', detail: 'Mongo · PG · JSONL' },
      { label: 'API', detail: 'FastAPI' },
      { label: 'Dashboard', detail: 'React + DAG' }
    ],
    decisions: [
      { title: 'Core sem dependências', text: 'Integrações, bancos e dashboard entram por extras opcionais. O caminho mínimo permanece pequeno e fácil de adotar.' },
      { title: 'Telemetria resiliente', text: 'Exporters são isolados; erros ficam visíveis por log e hook, enquanto os demais destinos continuam processando.' },
      { title: 'Concorrência isolada', text: 'ContextVars separam traces por coroutine e bind_context cobre execução em threads sem contaminar requests paralelas.' }
    ],
    proof: [
      { value: '0', label: 'dependências no core' },
      { value: '3', label: 'stores nativos' },
      { value: 'DAG', label: 'execução reconstruída' }
    ],
    role: ['SDK design', 'Python', 'Observabilidade', 'Dashboard', 'Documentação'],
    tags: ['Python', 'FastAPI', 'React', 'OpenAI', 'Anthropic', 'LangChain', 'PostgreSQL', 'MongoDB'],
    link: 'https://github.com/pedrocastanha/tracecast',
    secondaryLink: 'https://pypi.org/project/tracecast/',
    secondaryLabel: 'Ver no PyPI',
    featured: true,
    tone: 'ink'
  },
  {
    id: '03',
    slug: 'cast-code',
    name: 'Cast Code',
    eyebrow: 'Developer tool open source · 2026',
    type: 'Open source',
    status: 'Em evolução',
    impact: 'Um coding teammate multiagente que trabalha dentro do terminal.',
    homeDescription: 'CLI que entende o codebase, planeja, usa ferramentas, delega para especialistas e fecha o loop com verificação e Git.',
    summary: 'Cast Code reúne contexto, planejamento, execução e revisão em uma única interface de terminal. O agente principal delega trabalho para especialistas, acessa ferramentas MCP e opera Git sem perder o estado da tarefa.',
    challenge: 'Assistentes lineares geram código rápido, mas frequentemente perdem convenções, não verificam o resultado e quebram o fluxo entre planejamento, implementação e entrega.',
    solution: 'A CLI implementa um loop explícito de planejar, agir, verificar e autocriticar, com modelos diferentes por papel e contexto injetável por arquivo, diretório, diff ou URL.',
    architecture: [
      { label: 'Prompt + contexto', detail: '@file · @git · web' },
      { label: 'Core agent', detail: 'plano + roteamento' },
      { label: 'Especialistas', detail: '7 agentes nativos' },
      { label: 'Tools + MCP', detail: '30+ integrações' },
      { label: 'Verificação', detail: 'review + testes' },
      { label: 'Entrega', detail: 'commit + PR' }
    ],
    decisions: [
      { title: 'Modelos por responsabilidade', text: 'Planner, architect, coder e reviewer podem usar providers e modelos diferentes conforme custo e complexidade da etapa.' },
      { title: 'Extensível por arquivos', text: 'Skills e agentes vivem no projeto e podem ser versionados junto do código, sem exigir mudança no core da CLI.' },
      { title: 'Execução local, acesso remoto', text: 'O processo continua na máquina do engenheiro e pode ser acompanhado pelo navegador com streaming, prompts remotos e voz.' }
    ],
    proof: [
      { value: '7', label: 'agentes especializados' },
      { value: '30+', label: 'templates MCP' },
      { value: '4', label: 'providers de modelo' }
    ],
    role: ['Arquitetura', 'CLI/UX', 'Multi-agent', 'Integrações', 'DevTools'],
    tags: ['TypeScript', 'Node.js', 'NestJS', 'LangGraph', 'LangChain', 'MCP', 'WebSocket'],
    link: 'https://github.com/pedrocastanha/cast-code',
    featured: true,
    tone: 'acid'
  },
  {
    id: '04',
    slug: 'cast-skills',
    name: 'Cast Skills',
    eyebrow: 'CLI open source · npm · 2026',
    type: 'Open source',
    status: 'Publicado no npm',
    impact: 'Contexto de projeto e workflow consistente em seis ferramentas de IA.',
    homeDescription: 'Bootstrap que transforma conhecimento do codebase em uma árvore de skills reutilizada por Codex, Claude, Cursor, Copilot, Gemini e Windsurf.',
    summary: 'Cast Skills resolve a perda de contexto entre sessões e ferramentas. Um instalador distribui skills compatíveis, cria um mapa progressivo do projeto e conduz mudanças por um workflow orientado por especificação.',
    challenge: 'Agentes recomeçam sem conhecer regras de negócio, fronteiras de módulos ou decisões anteriores. O time repete contexto e ainda sofre com drift arquitetural.',
    solution: 'Conhecimento vira arquivos SKILL.md versionáveis e carregados sob demanda. Adaptadores cuidam dos formatos de cada ferramenta e o fluxo guia especificação, tarefas, testes e implementação.',
    architecture: [
      { label: 'npx cast-skills', detail: 'wizard local' },
      { label: 'Detecção', detail: 'ferramentas instaladas' },
      { label: 'Adaptadores', detail: '6 formatos' },
      { label: 'Skill tree', detail: 'contexto progressivo' },
      { label: 'Spec workflow', detail: 'contrato + tarefas' },
      { label: 'Agente', detail: 'execução contextual' }
    ],
    decisions: [
      { title: 'Padrão aberto como fonte', text: 'SKILL.md é o formato canônico; conversões para ferramentas com convenções próprias acontecem somente na instalação.' },
      { title: 'Divulgação progressiva', text: 'O agente carrega mapa geral e depois apenas as regras do módulo tocado, mantendo contexto relevante e econômico.' },
      { title: 'Contrato antes do código', text: 'O workflow separa especificação, design e tarefas antes da execução, com critérios verificáveis por mudança.' }
    ],
    proof: [
      { value: '6', label: 'AI tools suportadas' },
      { value: '3', label: 'skills do workflow' },
      { value: '1×', label: 'instalação guiada' }
    ],
    role: ['Produto', 'Node.js', 'DX', 'Arquitetura de contexto', 'Documentação'],
    tags: ['JavaScript', 'Node.js', 'npm', 'Agent Skills', 'TDD', 'Codex', 'Claude'],
    link: 'https://github.com/pedrocastanha/cast-skills',
    secondaryLink: 'https://www.npmjs.com/package/cast-skills',
    secondaryLabel: 'Ver no npm',
    featured: true,
    tone: 'paper'
  },
  {
    id: '05',
    slug: 'gitcast',
    name: 'GitCast',
    eyebrow: 'Experimento open source · 2025',
    type: 'Open source',
    status: 'Projeto concluído',
    impact: 'Assistente Git com análise profunda baseada em debate entre agentes.',
    homeDescription: 'Dois agentes confrontam leituras do diff, um terceiro sintetiza o acordo e a CLI produz análise ou Conventional Commit.',
    summary: 'GitCast foi meu primeiro laboratório de colaboração multiagente aplicada ao fluxo de engenharia. O projeto automatiza commits e usa perspectivas conflitantes para revisar mudanças antes da síntese.',
    challenge: 'Uma única resposta de modelo tende a aceitar cedo demais a primeira interpretação do diff e mistura análise, crítica e solução no mesmo contexto.',
    solution: 'Separei critic e constructive em nós que alternam mensagens até acordo ou limite de turnos. Um terceiro agente transforma a discussão em relatório e patch sugerido.',
    architecture: [
      { label: 'Git diff', detail: 'mudanças locais' },
      { label: 'Critic', detail: 'risco + padrões' },
      { label: 'Constructive', detail: 'lógica + performance' },
      { label: 'Debate', detail: 'até 8 mensagens' },
      { label: 'Síntese', detail: 'plano + patch' },
      { label: 'Git', detail: 'commit + push' }
    ],
    decisions: [
      { title: 'Conflito produtivo', text: 'Os papéis recebem objetivos distintos para revelar pontos cegos antes da síntese final.' },
      { title: 'Limite de convergência', text: 'O debate encerra por acordo explícito ou por limite de mensagens, evitando loops caros.' },
      { title: 'Multi-provider', text: 'Factories isolam OpenAI e Gemini do grafo e permitem trocar o modelo sem reescrever o workflow.' }
    ],
    proof: [
      { value: '3', label: 'papéis no review' },
      { value: '2', label: 'providers' },
      { value: 'CLI', label: 'fluxo integrado' }
    ],
    role: ['Python', 'LangGraph', 'Prompt design', 'CLI', 'Git automation'],
    tags: ['Python', 'LangGraph', 'LangChain', 'GitPython', 'OpenAI', 'Gemini'],
    link: 'https://github.com/pedrocastanha/git-analyzer',
    featured: false,
    tone: 'ink'
  },
  {
    id: '06',
    slug: 'pull-request-analyzer',
    name: 'PR Analyzer',
    eyebrow: 'Protótipo open source · 2025',
    type: 'Open source',
    status: 'Base conceitual do Cast Review',
    impact: 'Primeira exploração de review multiagente com recuperação de contexto.',
    homeDescription: 'O protótipo que começou com diff, RAG e especialistas por domínio e depois evoluiu para o produto Cast Review.',
    summary: 'PR Analyzer foi a primeira implementação da ideia de distribuir uma revisão entre especialistas. O protótipo transforma o diff em contexto pesquisável e pede que agentes de domínios diferentes sustentem seus achados com evidência.',
    challenge: 'Reviews extensos perdem consistência quando uma única chamada tenta avaliar arquitetura, segurança, testes e performance ao mesmo tempo.',
    solution: 'O diff entra em uma camada de recuperação e especialistas analisam recortes do contexto. A experiência revelou os limites que levaram à indexação de repositório inteiro no Cast Review.',
    architecture: [
      { label: 'Branch', detail: 'diff contra base' },
      { label: 'Parsing', detail: 'mudanças estruturadas' },
      { label: 'RAG', detail: 'contexto pesquisável' },
      { label: 'Especialistas', detail: 'domínios técnicos' },
      { label: 'Síntese', detail: 'achados + evidência' },
      { label: 'Relatório', detail: 'review acionável' }
    ],
    decisions: [
      { title: 'Especialistas por domínio', text: 'Prompts separados reduzem competição de objetivos e aprofundam arquitetura, segurança, testes e performance.' },
      { title: 'Evidência no diff', text: 'Cada achado precisa apontar o trecho que sustenta o diagnóstico, reduzindo comentários vagos.' },
      { title: 'Protótipo como aprendizado', text: 'A limitação de contexto local motivou a evolução para code graph e indexação full-repo no Cast Review.' }
    ],
    proof: [
      { value: 'RAG', label: 'contexto do diff' },
      { value: '5+', label: 'domínios de review' },
      { value: 'v1', label: 'origem do produto' }
    ],
    role: ['Python', 'RAG', 'Multi-agent', 'Code review', 'Prototipação'],
    tags: ['Python', 'LangGraph', 'RAG', 'Git Diff', 'Code Review'],
    link: 'https://github.com/pedrocastanha/pull-request-analyzer',
    featured: false,
    tone: 'paper'
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug, limit = 3) {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}
