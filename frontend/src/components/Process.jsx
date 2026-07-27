import './Process.css';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Problema antes de solução',
      desc: 'Mapeio o fluxo de dados e o impacto no usuário antes de escrever uma linha. Agente, RAG ou fine-tuning — cada problema tem a resposta certa.'
    },
    {
      num: '02',
      title: 'Custo é uma feature',
      desc: 'Reduzi R$4k → R$1.5k/mês com validação ML antes do Document AI. Eficiência de custo faz parte do design desde o início, não é otimização tardia.'
    },
    {
      num: '03',
      title: 'Produção desde o dia 1',
      desc: 'Docker, CI/CD e monitoramento não são afterthought. Construo sistemas que sobrevivem a 5.000 usuários, não só ao meu ambiente local.'
    }
  ];

  return (
    <section className="section">
      <p className="s-label">// como trabalho</p>
      <h2 className="s-title">Processo</h2>
      <div className="proc-grid">
        {steps.map(step => (
          <div key={step.num} className="proc-item">
            <div className="proc-n">{step.num}</div>
            <h3 className="proc-title">{step.title}</h3>
            <p className="proc-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
