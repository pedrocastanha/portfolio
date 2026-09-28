import { useMemo, useState } from 'react';
import { paths } from '../content';
import { graphViewBox, projectNodes, skillNodes, SKILL_H, SKILL_W } from '../content/graph';
import { hash, line } from '../sketch/rough';
import { Box, HandText } from '../sketch/Sketch';
import './EvidenceGraph.css';

function edgePoints(skill, project) {
  const cy = skill.y + SKILL_H / 2;
  const py = project.y + project.h / 2;
  return project.x > skill.x
    ? [skill.x + SKILL_W, cy, project.x, py]
    : [skill.x, cy, project.x + project.w, py];
}

function EvidenceGraph({ c }) {
  const g = c.graph;
  const [active, setActive] = useState(null);
  const casesBySlug = useMemo(() => Object.fromEntries(c.cases.map((item) => [item.slug, item])), [c]);

  const edges = useMemo(
    () =>
      skillNodes.flatMap((s) =>
        s.proves.map((slug) => {
          const [x1, y1, x2, y2] = edgePoints(s, projectNodes[slug]);
          return {
            key: `${s.id}-${slug}`,
            skill: s.id,
            slug,
            paths: line(x1, y1, x2, y2, { seed: hash(s.id + slug), roughness: 1.1, bowing: 2, stroke: 'currentColor' }),
          };
        })
      ),
    []
  );

  const activeSkill = skillNodes.find((s) => s.id === active);
  const litProjects = new Set(activeSkill?.proves ?? []);
  const [w, h] = graphViewBox;

  return (
    <section id="graph" className="section graph" aria-labelledby="graph-title">
      <div className="section__inner">
        <p className="eyebrow">{g.kicker}</p>
        <h2 id="graph-title" className="section__title">
          {g.title}
        </h2>
        <p className="section__lede">{g.lede}</p>

        <div className="graph__canvas" data-active={active ?? undefined} onMouseLeave={() => setActive(null)}>
          <svg viewBox={`0 0 ${w} ${h}`} aria-hidden="true" focusable="false">
            <g className="graph__legend">
              <HandText x={130} y={30} text={g.prodLabel} size={17} color="pen" />
              <HandText x={875} y={30} text={g.personalLabel} size={17} color="blue" />
            </g>
            <g className="graph__edges">
              {edges.map((e) => (
                <g key={e.key} className={`edge${active === e.skill ? ' is-on' : ''}`}>
                  {e.paths.map((p, i) => (
                    <path key={i} d={p.d} />
                  ))}
                </g>
              ))}
            </g>
            {Object.entries(projectNodes).map(([slug, n]) => (
              <a
                key={slug}
                href={paths[c.lang].case(slug)}
                tabIndex={-1}
                className={`gnode gnode--project${litProjects.has(slug) ? ' is-on' : ''}`}
              >
                <rect x={n.x} y={n.y} width={n.w} height={n.h} className="gnode__backing" />
                <Box id={`g-${slug}`} x={n.x} y={n.y} w={n.w} h={n.h} fill={n.fill} label={casesBySlug[slug].short} size={19} />
              </a>
            ))}
            {skillNodes.map((s) => (
              <g
                key={s.id}
                className={`gnode gnode--skill${active === s.id ? ' is-on' : ''}${active && active !== s.id ? ' is-dim' : ''}`}
                onMouseEnter={() => setActive(s.id)}
              >
                <ellipse cx={s.x + SKILL_W / 2} cy={s.y + SKILL_H / 2} rx={SKILL_W / 2} ry={SKILL_H / 2} className="gnode__backing" />
                <Box id={`s-${s.id}`} x={s.x} y={s.y} w={SKILL_W} h={SKILL_H} shape="ellipse" label={g.skills[s.id]} size={15} />
              </g>
            ))}
          </svg>
        </div>

        <div className="graph__chips" role="group" aria-label={g.pick}>
          {skillNodes.map((s) => (
            <button
              key={s.id}
              type="button"
              className="chip"
              aria-pressed={active === s.id}
              onMouseEnter={() => setActive(s.id)}
              onFocus={() => setActive(s.id)}
              onClick={() => setActive((cur) => (cur === s.id ? null : s.id))}
            >
              {g.skills[s.id]}
            </button>
          ))}
        </div>

        <div className="graph__proof" aria-live="polite">
          {activeSkill ? (
            <p>
              <span className="graph__proof-label">
                {g.provedBy} · {g.skills[activeSkill.id]}:
              </span>{' '}
              {activeSkill.proves.map((slug, i) => (
                <span key={slug}>
                  {i > 0 ? ', ' : ''}
                  <a href={paths[c.lang].case(slug)}>{casesBySlug[slug].title}</a>
                </span>
              ))}
            </p>
          ) : (
            <p className="graph__proof-hint">{g.pick} ↑</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default EvidenceGraph;
