// Evidence graph: every skill must point to at least one case that proves it.
// Labels come from content/<lang>.js (graph.skills and cases[].short).

export const graphViewBox = [1000, 640];

export const projectNodes = {
  'enrollment-agent': { x: 20, y: 100, w: 220, h: 84, fill: 'red' },
  'grading-pipeline': { x: 20, y: 278, w: 220, h: 84, fill: 'red' },
  'document-triage': { x: 20, y: 456, w: 220, h: 84, fill: 'red' },
  'cast-review': { x: 780, y: 70, w: 190, h: 76, fill: 'blue' },
  'rag-groundtruth': { x: 780, y: 214, w: 190, h: 76, fill: 'blue' },
  'cast-code': { x: 780, y: 358, w: 190, h: 76, fill: 'blue' },
  'cast-skills': { x: 780, y: 502, w: 190, h: 76, fill: 'blue' },
};

export const skillNodes = [
  { id: 'langgraph', x: 300, y: 60, proves: ['enrollment-agent', 'cast-review'] },
  { id: 'curation', x: 300, y: 140, proves: ['enrollment-agent', 'rag-groundtruth'] },
  { id: 'context', x: 300, y: 220, proves: ['enrollment-agent', 'cast-review', 'cast-skills'] },
  { id: 'rag', x: 300, y: 300, proves: ['enrollment-agent', 'rag-groundtruth'] },
  { id: 'multitenant', x: 300, y: 380, proves: ['grading-pipeline', 'cast-review'] },
  { id: 'cost', x: 300, y: 460, proves: ['grading-pipeline', 'document-triage', 'rag-groundtruth'] },
  { id: 'vision', x: 300, y: 540, proves: ['document-triage'] },
  { id: 'multiagent', x: 535, y: 60, proves: ['enrollment-agent', 'cast-review', 'cast-code'] },
  { id: 'mcp', x: 535, y: 135, proves: ['cast-review', 'cast-code'] },
  { id: 'evals', x: 535, y: 210, proves: ['enrollment-agent', 'rag-groundtruth', 'cast-review'] },
  { id: 'graphs', x: 535, y: 285, proves: ['cast-review', 'rag-groundtruth'] },
  { id: 'queues', x: 535, y: 360, proves: ['grading-pipeline', 'enrollment-agent', 'cast-review'] },
  { id: 'python', x: 535, y: 435, proves: ['enrollment-agent', 'document-triage', 'cast-review', 'rag-groundtruth'] },
  { id: 'typescript', x: 535, y: 510, proves: ['grading-pipeline', 'document-triage', 'cast-review', 'cast-code', 'cast-skills'] },
];

export const SKILL_W = 184;
export const SKILL_H = 46;
