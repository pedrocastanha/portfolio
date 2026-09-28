// Guards the bilingual content: both languages must have the same shape, and
// every diagram/graph element must have text in both.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import pt from '../src/content/pt.js';
import en from '../src/content/en.js';
import { flows } from '../src/content/flows.js';
import { projectNodes, skillNodes } from '../src/content/graph.js';

function shape(value, path = '') {
  if (Array.isArray(value)) {
    // Arrays of strings may differ in length only if they are free text lists.
    return value.flatMap((v, i) => shape(v, `${path}[${i}]`));
  }
  if (value && typeof value === 'object') {
    return Object.keys(value)
      .sort()
      .flatMap((k) => [`${path}.${k}`, ...shape(value[k], `${path}.${k}`)]);
  }
  return [];
}

test('pt and en have identical structure', () => {
  assert.deepEqual(shape(en), shape(pt));
});

test('cases share slugs and order', () => {
  assert.deepEqual(
    en.cases.map((c) => c.slug),
    pt.cases.map((c) => c.slug)
  );
});

for (const [lang, content] of Object.entries({ pt, en })) {
  test(`${lang}: every diagram element with text has a label`, () => {
    for (const item of content.cases) {
      const flow = flows[item.slug];
      assert.ok(flow, `missing flow for ${item.slug}`);
      for (const el of flow.elements) {
        const needsLabel = el.type === 'arrow' ? el.label : !el.blank;
        if (needsLabel) assert.ok(item.flow[el.id] !== undefined, `${lang}/${item.slug}: no label for "${el.id}"`);
      }
      for (const id of Object.keys(item.flow)) {
        assert.ok(flow.elements.some((el) => el.id === id), `${lang}/${item.slug}: label "${id}" has no element`);
      }
    }
  });

  test(`${lang}: evidence graph references real cases and labeled skills`, () => {
    const slugs = new Set(content.cases.map((c) => c.slug));
    for (const slug of Object.keys(projectNodes)) assert.ok(slugs.has(slug), slug);
    for (const s of skillNodes) {
      assert.ok(content.graph.skills[s.id], `${lang}: no label for skill ${s.id}`);
      assert.ok(s.proves.length > 0, `${s.id} proves nothing`);
      for (const slug of s.proves) assert.ok(slugs.has(slug), `${s.id} -> ${slug}`);
    }
  });

  test(`${lang}: education is marked as in progress`, () => {
    assert.match(content.path.education.period, /cursando|in progress/);
  });
}
