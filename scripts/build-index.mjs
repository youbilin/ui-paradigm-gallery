import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildAiIndex } from '../src/data/build-ai-index.ts';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const index = buildAiIndex();

mkdirSync(resolve(root, 'public'), { recursive: true });
writeFileSync(
  resolve(root, 'public/index.json'),
  JSON.stringify(index, null, 2) + '\n',
);

const lines = [
  '# 范式展览馆 · UI Paradigm Hall',
  '',
  '> UI 范式提示词 × 实际效果展览：每个范式配一份可复制给 AI 的提示词与真实渲染效果，专治 AI 生成前端的千篇一律。',
  '',
  '## AI 使用方式',
  '',
  '- 获取机器可读索引：GET /index.json',
  '- 提需求时指定范式，例如：「按『便当盒网格 Bento Grid』范式做一个 SaaS 定价页」',
  '- 索引内含每个范式的完整提示词、色彩与字体 token；AI 应按其布局 / 组件与交互规范执行',
  '',
  '## 展品索引',
  '',
];
for (const p of index.paradigms) {
  const suffix = p.kind === 'anti-pattern' ? '（反面标本，用于规避）' : '';
  lines.push(`- ${p.no} ${p.name} · ${p.nameEn} — ${p.tagline}${suffix}`);
}
lines.push('');
lines.push('每个范式的完整提示词见 index.json 的 paradigms[].prompt（含组件与交互规范）。');
// UTF-8 BOM：Content-Type 是 text/plain 且无 charset 时，浏览器/编辑器靠 BOM 识别编码，避免中文乱码
writeFileSync(resolve(root, 'public/llms.txt'), '\ufeff' + lines.join('\n') + '\n');

console.log(
  `public/index.json (${index.entryCount} entries) + public/llms.txt generated`,
);
