import { useMemo } from 'react';
import { arrowHead, curve, hash } from '../sketch/rough';

// Small curved annotation arrow, pointing down-left.
function HandArrow({ id, w = 70, h = 46 }) {
  const paths = useMemo(() => {
    const opts = { seed: hash(id), stroke: 'var(--pen)', strokeWidth: 2, roughness: 1 };
    const pts = [[w - 6, 4], [w * 0.55, h * 0.35], [10, h - 6]];
    return [...curve(pts, opts), ...arrowHead(w * 0.4, h * 0.55, 10, h - 6, opts, 10)];
  }, [id, w, h]);
  return (
    <svg className="hand-arrow" viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden="true" focusable="false">
      {paths.map((p, i) => (
        <path key={i} d={p.d} style={{ stroke: p.stroke, strokeWidth: p.strokeWidth, fill: 'none' }} strokeLinecap="round" />
      ))}
    </svg>
  );
}

export default HandArrow;
