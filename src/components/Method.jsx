import { FILLS } from '../sketch/rough';
import { Arrow, Box } from '../sketch/Sketch';
import './Method.css';

const FILL_ORDER = ['yellow', 'blue', 'teal', 'green', 'red', 'violet'];
const NODE_W = 124;
const GAP = 30;

function Method({ c }) {
  const m = c.method;
  const width = m.steps.length * NODE_W + (m.steps.length - 1) * GAP + 40;

  return (
    <section id="method" className="section method" aria-labelledby="method-title">
      <div className="section__inner">
        <p className="eyebrow">{m.kicker}</p>
        <h2 id="method-title" className="section__title">
          {m.title}
        </h2>
        <p className="section__lede">{m.lede}</p>

        <div className="method__diagram">
          <svg viewBox={`0 0 ${width} 262`} aria-hidden="true" focusable="false">
            {m.steps.map((s, i) => {
              const x = 20 + i * (NODE_W + GAP);
              return (
                <g key={s.id}>
                  <Box id={`m-${s.id}`} x={x} y={36} w={NODE_W} h={64} shape="ellipse" fill={FILL_ORDER[i]} label={s.label} size={19} />
                  {i < m.steps.length - 1 ? <Arrow id={`ma-${s.id}`} from={[x + NODE_W + 2, 68]} to={[x + NODE_W + GAP - 2, 68]} /> : null}
                </g>
              );
            })}
            <Arrow
              id="m-return"
              from={[width - 20 - NODE_W / 2, 104]}
              via={[width / 2, 206]}
              to={[20 + NODE_W / 2, 104]}
              color="pen"
              label={m.returnLabel}
              labelOffset={[0, 34]}
            />
          </svg>
        </div>

        <ol className="method__steps">
          {m.steps.map((s, i) => (
            <li key={s.id} style={{ '--dot': FILLS[FILL_ORDER[i]] }}>
              <span className="method__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="method__label">{s.label}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Method;
