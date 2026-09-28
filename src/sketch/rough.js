import rough from 'roughjs';

// A single generator works without the DOM, so diagrams render identically on
// the server (prerender) and in the browser (hydration). Fixed seeds keep the
// "hand-drawn" jitter deterministic.
const generator = rough.generator();

const round = (d) => d.replace(/-?\d+\.\d+/g, (n) => (Math.round(Number(n) * 10) / 10).toString());

function toPaths(drawable) {
  return generator.toPaths(drawable).map((p) => ({
    d: round(p.d),
    stroke: p.stroke,
    strokeWidth: p.strokeWidth,
    fill: p.fill,
  }));
}

const base = { roughness: 1.4, bowing: 1.2, strokeWidth: 1.6, hachureGap: 6, fillWeight: 1.1, hachureAngle: -41 };

export function hash(str) {
  let h = 7;
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) % 2147483647;
  return h || 1;
}

export function rect(x, y, w, h, opts = {}) {
  return toPaths(generator.rectangle(x, y, w, h, { ...base, ...opts }));
}

export function ellipse(cx, cy, w, h, opts = {}) {
  return toPaths(generator.ellipse(cx, cy, w, h, { ...base, ...opts }));
}

export function line(x1, y1, x2, y2, opts = {}) {
  return toPaths(generator.line(x1, y1, x2, y2, { ...base, ...opts }));
}

export function curve(points, opts = {}) {
  return toPaths(generator.curve(points, { ...base, ...opts }));
}

export function arrowHead(x1, y1, x2, y2, opts = {}, size = 11) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const pts = [
    [x2 - size * Math.cos(a - 0.45), y2 - size * Math.sin(a - 0.45)],
    [x2, y2],
    [x2 - size * Math.cos(a + 0.45), y2 - size * Math.sin(a + 0.45)],
  ];
  return toPaths(generator.linearPath(pts, { ...base, roughness: 0.9, ...opts }));
}

export const FILLS = {
  yellow: 'var(--fill-yellow)',
  blue: 'var(--fill-blue)',
  green: 'var(--fill-green)',
  red: 'var(--fill-red)',
  violet: 'var(--fill-violet)',
  orange: 'var(--fill-orange)',
  teal: 'var(--fill-teal)',
  paper: 'var(--paper-raised)',
};
