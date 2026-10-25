import { paradigms } from './paradigms';
import type { Paradigm } from './paradigms/types';

export interface AiIndexEntry {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  tags: string[];
  kind: 'paradigm' | 'anti-pattern';
  prompt: string;
  colors: Record<string, string>;
  fonts: Record<string, string>;
}

export interface AiIndex {
  name: string;
  version: number;
  generated: string;
  usage: string;
  howToUse: string[];
  entryCount: number;
  paradigms: AiIndexEntry[];
}

export function buildAiIndex(): AiIndex {
  const colorsOf = (p: Paradigm) =>
    Object.fromEntries(p.tokens.colors.map((c) => [c.name, c.value]));
  const fontsOf = (p: Paradigm) =>
    Object.fromEntries(p.tokens.fonts.map((f) => [f.role, f.stack]));
  return {
    name: 'ui-paradigm-index',
    version: 1,
    generated: new Date().toISOString().slice(0, 10),
    usage:
      '把本索引贴给你使用的 AI，提需求时指定 paradigm（如「按 便当盒网格 范式做…」），AI 会按该范式的布局、组件与交互规范与设计 token 生成 UI，避免千篇一律的默认输出。',
    howToUse: [
      '复制整段 JSON（部署后也可直接访问 /index.json）',
      '提需求时说：按「便当盒网格」范式做一个 SaaS 定价页',
      '同一需求可切换不同范式对比，选出最贴合业务气质的一个',
    ],
    entryCount: paradigms.length,
    paradigms: paradigms.map((p) => ({
      id: p.id,
      name: p.name,
      nameEn: p.nameEn,
      tagline: p.tagline,
      tags: p.tags,
      kind: p.kind ?? 'paradigm',
      prompt: p.prompt,
      colors: colorsOf(p),
      fonts: fontsOf(p),
    })),
  };
}
