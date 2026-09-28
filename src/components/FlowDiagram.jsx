import { Arrow, Box, Note } from '../sketch/Sketch';

// Renders a case diagram. Every element carries data-step; CSS hides the
// steps after `current` (desktop, motion allowed), so the diagram assembles as
// the reader scrolls. Without JS or with reduced motion it is shown complete.
function FlowDiagram({ flow, labels, current, title, className = '' }) {
  if (!flow) return null;
  const [w, h] = flow.viewBox;

  return (
    <svg className={`flow ${className}`} viewBox={`0 0 ${w} ${h}`} role="img" aria-label={title} data-current={current}>
      {flow.elements.map((el) => {
        const label = labels[el.id];
        let node;
        if (el.type === 'box') node = <Box {...el} label={label} />;
        else if (el.type === 'arrow') node = <Arrow {...el} label={el.label ? label : undefined} />;
        else node = <Note {...el} text={label ?? ''} />;
        return (
          <g key={el.id} data-step={el.step} className="flow__el">
            {node}
          </g>
        );
      })}
    </svg>
  );
}

export default FlowDiagram;
