import { useMemo } from 'react';
import { arrowHead, curve, ellipse, FILLS, hash, line, rect } from './rough';


const STROKES = {
  ink: 'var(--ink)',
  pen: 'var(--pen)',
  blue: 'var(--pen-blue)',
  muted: 'var(--muted)',
};

function Paths({ paths }) {
  return paths.map((p, i) => (
    <path
      key={i}
      d={p.d}
      style={{ stroke: p.stroke, strokeWidth: p.strokeWidth, fill: p.fill && p.fill !== 'none' ? p.fill : 'none' }}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ));
}

export function HandText({ x, y, text, size = 17, color = 'ink', anchor = 'middle', lineHeight = 1.18, weight }) {
  const lines = String(text).split('\n');
  const offset = ((lines.length - 1) * size * lineHeight) / 2;
  return (
    <text
      x={x}
      y={y - offset}
      textAnchor={anchor}
      dominantBaseline="central"
      className="hand-text"
      style={{ fontSize: size, fill: STROKES[color] ?? color, fontWeight: weight }}
    >
      {lines.map((l, i) => (
        <tspan key={l + i} x={x} dy={i === 0 ? 0 : size * lineHeight}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

export function Box({ id, x, y, w, h, label, fill, stroke = 'ink', shape = 'rect', size = 17, strike = false, dashed = false }) {
  const paths = useMemo(() => {
    const seed = hash(`${id}${x}${y}`);
    const opts = {
      seed,
      stroke: STROKES[stroke] ?? stroke,
      fill: fill ? FILLS[fill] ?? fill : undefined,
      fillStyle: 'hachure',
      strokeLineDash: dashed ? [7, 6] : undefined,
    };
    const shapePaths = shape === 'ellipse' ? ellipse(x + w / 2, y + h / 2, w, h, opts) : rect(x, y, w, h, opts);
    const strikePaths = strike ? line(x - 4, y + h + 4, x + w + 4, y - 4, { seed: seed + 3, stroke: 'var(--pen)', strokeWidth: 2.4 }) : [];
    return [...shapePaths, ...strikePaths];
  }, [id, x, y, w, h, fill, stroke, shape, strike, dashed]);

  return (
    <g className="sk-box">
      <Paths paths={paths} />
      {label ? <HandText x={x + w / 2} y={y + h / 2} text={label} size={size} /> : null}
    </g>
  );
}

export function Arrow({ id, from, to, via, color = 'ink', dashed = false, head = true, label, labelOffset = [0, -12] }) {
  const paths = useMemo(() => {
    const seed = hash(`${id}${from}${to}`);
    const opts = { seed, stroke: STROKES[color] ?? color, strokeLineDash: dashed ? [6, 6] : undefined };
    const body = via ? curve([from, via, to], opts) : line(from[0], from[1], to[0], to[1], opts);
    const tail = via ?? from;
    const tip = head ? arrowHead(tail[0], tail[1], to[0], to[1], { seed: seed + 1, stroke: opts.stroke }) : [];
    return [...body, ...tip];
  }, [id, from, to, via, color, dashed, head]);

  const mid = via ?? [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2];
  return (
    <g className="sk-arrow">
      <Paths paths={paths} />
      {label ? <HandText x={mid[0] + labelOffset[0]} y={mid[1] + labelOffset[1]} text={label} size={14} color={color} /> : null}
    </g>
  );
}

export function Note({ x, y, text, color = 'pen', size = 16, anchor = 'start' }) {
  return <HandText x={x} y={y} text={text} size={size} color={color} anchor={anchor} />;
}

export function Underline({ id, width = 200, color = 'pen' }) {
  const paths = useMemo(
    () => curve([[2, 8], [width * 0.35, 3], [width * 0.7, 9], [width - 2, 4]], { seed: hash(id), stroke: STROKES[color], strokeWidth: 2.6, roughness: 1.1 }),
    [id, width, color]
  );
  return (
    <svg className="underline" viewBox={`0 0 ${width} 12`} aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <Paths paths={paths} />
    </svg>
  );
}

export function Scribble({ id, w = 120, h = 60, color = 'pen', shape = 'ellipse' }) {
  const paths = useMemo(() => {
    const opts = { seed: hash(id), stroke: STROKES[color], strokeWidth: 2, roughness: 1.6 };
    return shape === 'ellipse' ? ellipse(w / 2, h / 2, w - 6, h - 6, opts) : rect(3, 3, w - 6, h - 6, opts);
  }, [id, w, h, color, shape]);
  return (
    <svg className="scribble" viewBox={`0 0 ${w} ${h}`} aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <Paths paths={paths} />
    </svg>
  );
}
