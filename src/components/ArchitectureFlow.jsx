import './ArchitectureFlow.css';

export default function ArchitectureFlow({ steps, compact = false }) {
  return (
    <div className={`architecture-flow ${compact ? 'architecture-flow--compact' : ''}`} aria-label="Fluxo de arquitetura">
      {steps.map((step, index) => (
        <div className="architecture-step" key={`${step.label}-${index}`}>
          <div className="architecture-node">
            <span className="architecture-index">{String(index + 1).padStart(2, '0')}</span>
            <strong>{step.label}</strong>
            <small>{step.detail}</small>
          </div>
          {index < steps.length - 1 && (
            <div className="architecture-link" aria-hidden="true">
              <span />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
