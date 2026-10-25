import { useMemo, useState } from 'react';
import { buildAiIndex } from '../data/build-ai-index';
import { paradigms, getParadigm } from '../data/paradigms';
import { PromptBlock } from '../components/PromptBlock';
import { openPreview } from '../utils/preview';

interface QOption {
  v: string;
  t: string;
  p: string[];
}

interface Question {
  id: string;
  label: string;
  options: QOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 'vibe',
    label: '项目气质',
    options: [
      { v: 'enterprise', t: '企业后台 / 工具', p: ['dashboard', 'swiss', 'terminal', 'bauhaus'] },
      { v: 'brand', t: '消费品牌 / 营销', p: ['bento', 'y2k', 'zine', 'deco', 'memphis'] },
      { v: 'media', t: '内容 / 媒体', p: ['editorial', 'wa', 'swiss', 'oriental-ink'] },
      { v: 'creative', t: '创意 / 活动', p: ['neo-brutalism', 'zine', 'y2k', 'memphis', 'handdrawn'] },
      { v: 'luxury', t: '高端 / 仪式感', p: ['deco', 'wa', 'editorial', 'oriental-ink'] },
    ],
  },
  {
    id: 'density',
    label: '信息密度',
    options: [
      { v: 'dense', t: '信息密集', p: ['dashboard', 'terminal'] },
      { v: 'balanced', t: '均衡', p: ['bento', 'swiss', 'glass', 'clay', 'pixel'] },
      { v: 'airy', t: '极简留白', p: ['wa', 'editorial', 'swiss', 'oriental-ink'] },
    ],
  },
  {
    id: 'mood',
    label: '情绪',
    options: [
      { v: 'pro', t: '冷静专业', p: ['dashboard', 'swiss', 'wa', 'bauhaus'] },
      { v: 'warm', t: '温暖手工', p: ['zine', 'editorial', 'skeuo', 'handdrawn', 'clay'] },
      { v: 'loud', t: '张扬搞怪', p: ['neo-brutalism', 'y2k', 'memphis'] },
      { v: 'future', t: '未来科技', p: ['terminal', 'glass', 'dashboard', 'cyberpunk', 'vaporwave', 'pixel'] },
      { v: 'elegant', t: '优雅经典', p: ['deco', 'editorial', 'wa', 'oriental-ink'] },
      { v: 'cute', t: '软萌柔和', p: ['clay', 'handdrawn', 'y2k'] },
    ],
  },
];

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

const PREVIEW_LINES = 24;

export function IndexView() {
  const index = useMemo(() => buildAiIndex(), []);
  const json = useMemo(() => JSON.stringify(index, null, 2), [index]);
  const jsonSize = useMemo(() => (new Blob([json]).size / 1024).toFixed(1), [json]);
  const preview = useMemo(() => json.split('\n').slice(0, PREVIEW_LINES).join('\n'), [json]);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [kindFilter, setKindFilter] = useState<'all' | 'paradigm' | 'anti-pattern'>('all');

  const ranked = useMemo(() => {
    const scores = new Map<string, { n: number; why: string[] }>();
    for (const q of QUESTIONS) {
      const opt = q.options.find((o) => o.v === answers[q.id]);
      if (!opt) continue;
      for (const pid of opt.p) {
        const cur = scores.get(pid) ?? { n: 0, why: [] };
        cur.n += 1;
        cur.why.push(`${q.label}·${opt.t}`);
        scores.set(pid, cur);
      }
    }
    return [...scores.entries()].sort((a, b) => b[1].n - a[1].n);
  }, [answers]);

  const answered = Object.values(answers).filter(Boolean).length;
  const top3 = ranked.slice(0, 3).map(([id, s]) => ({ p: getParadigm(id)!, s }));
  const top = top3[0]?.p;
  const maxScore = top3[0]?.s.n ?? 1;
  const composed = top
    ? `${top.prompt}\n\n# 我的需求\n（把你要做的页面 / 业务描述写在这里，AI 会按上述范式实现，而不是输出默认风格）`
    : '';

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return paradigms.filter((p) => {
      if (kindFilter !== 'all' && (p.kind ?? 'paradigm') !== kindFilter) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, kindFilter]);

  const onCopyJson = async () => {
    const ok = await copyText(json);
    setCopied(ok);
    setTimeout(() => setCopied(false), 1600);
  };

  const onDownload = () => {
    const blob = new Blob([json], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'index.json';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="ex-wrap">
      <div className="eyebrow">AI INDEX · 机器可读范式索引</div>
      <h1 className="display" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginTop: 14 }}>
        把范式库，装进 AI 的上下文。
      </h1>
      <p className="lead">
        这份索引把全部范式的提示词与设计 token 结构化成 JSON。部署后任何 AI 都可以直接请求
        <span className="mono"> /index.json</span>；在对话里，你也可以整段复制贴给它，然后说：
        「按『便当盒网格』范式做一个定价页」。
      </p>
      <div className="idx-actions">
        <button className="btn btn-solid btn-sm" onClick={onCopyJson}>
          {copied ? '已复制 ✓' : '复制整份索引'}
        </button>
        <button className="btn btn-ghost btn-sm" onClick={onDownload}>
          下载 index.json
        </button>
        <a className="btn btn-ghost btn-sm" href="./llms.txt" target="_blank" rel="noreferrer">
          打开 llms.txt ↗
        </a>
      </div>

      <div className="steps">
        <div className="step-card">
          <div className="n">STEP 01</div>
          <h4>选一个范式</h4>
          <p>用推荐器回答三个问题，或在下方速查表里按名称、标签检索 28 件展品；点击行或卡片上的「预览」直接在新窗口看真实渲染。</p>
        </div>
        <div className="step-card">
          <div className="n">STEP 02</div>
          <h4>复制范式提示词</h4>
          <p>提示词里已写死布局、字体、色彩 token、组件与交互规范与禁忌——比「做个漂亮页面」具体一万倍。</p>
        </div>
        <div className="step-card">
          <div className="n">STEP 03</div>
          <h4>提需求，验收效果</h4>
          <p>让 AI 按范式生成，再拿本馆的实际效果当验收基准。不满意就换范式重来。</p>
        </div>
      </div>

      <div className="section-head" style={{ marginTop: 52 }}>
        <span className="no">DIRECTORY</span>
        <h2>范式速查表</h2>
        <p>{filtered.length} / {paradigms.length} 件</p>
      </div>
      <div className="idx-filters">
        <input
          className="idx-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索名称或标签，如「粗野」「网格」「Bauhaus」…"
        />
        <div className="idx-kinds">
          {(
            [
              ['all', '全部'],
              ['paradigm', '可用范式'],
              ['anti-pattern', '反面标本'],
            ] as const
          ).map(([v, t]) => (
            <button
              key={v}
              className={`opt${kindFilter === v ? ' on' : ''}`}
              onClick={() => setKindFilter(v)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="idx-table-wrap">
        <table className="idx-table">
          <thead>
            <tr>
              <th>编号</th>
              <th>范式</th>
              <th>类型</th>
              <th>标签</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} onClick={() => openPreview(p.demo.html, p.name)} title={`新窗口预览：${p.name}`}>
                <td className="mono">{p.no}</td>
                <td>
                  <b>{p.name}</b>
                  <span className="en">{p.nameEn}</span>
                </td>
                <td>
                  <span className={`tag${(p.kind ?? 'paradigm') === 'anti-pattern' ? ' anti' : ''}`}>
                    {(p.kind ?? 'paradigm') === 'anti-pattern' ? '反面标本' : '范式'}
                  </span>
                </td>
                <td className="tags">{p.tags.join(' · ')}</td>
                <td className="go">查看 ↗</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} style={{ color: 'var(--ink-3)', padding: '18px 8px' }}>
                  没有匹配的展品，换个关键词试试。
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="section-head" style={{ marginTop: 52 }}>
        <span className="no">PICKER</span>
        <h2>范式推荐器</h2>
        <p>三个问题，选出你的范式</p>
      </div>
      <div className="picker">
        <h3>告诉我你在做什么</h3>
        <p className="sub">已回答 {answered} / 3 个问题{answered === 3 ? ' · 可以撤换重选' : ''}</p>
        {QUESTIONS.map((q, qi) => (
          <div className="q" key={q.id}>
            <div className="q-label">
              <i>Q{qi + 1}</i>
              {q.label}
            </div>
            <div className="opts">
              {q.options.map((o) => (
                <button
                  key={o.v}
                  className={`opt${answers[q.id] === o.v ? ' on' : ''}`}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: o.v }))}
                >
                  {o.t}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="reco">
          {top3.length > 0 ? (
            <>
              <div className="rank">
                {top3.map(({ p, s }, i) => (
                  <div className="rank-item" key={p.id} onClick={() => openPreview(p.demo.html, p.name)} title={`新窗口预览：${p.name}`}>
                    <span className="rank-no">{String(i + 1).padStart(2, '0')}</span>
                    <span className="rank-name">
                      {p.name}
                      <em>
                        {p.nameEn} · EXHIBIT {p.no}
                      </em>
                    </span>
                    <span className="rank-bar">
                      <i style={{ width: `${(s.n / maxScore) * 100}%` }} />
                    </span>
                    <span className="rank-score">{s.n} 项匹配</span>
                  </div>
                ))}
              </div>
              <div className="r-why">
                首选 <em>{top!.name}</em> 的理由：{top3[0].s.why.join('；')}。{top!.tagline}
              </div>
              <PromptBlock
                prompt={composed}
                label="组装好的提示词（范式 + 你的需求）"
                hint="已自动填入选定范式，补上需求即可发送"
              />
              <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => openPreview(top!.demo.html, top!.name)}
                >
                  新窗口预览该范式真实渲染 ↗
                </button>
              </div>
            </>
          ) : (
            <p style={{ fontSize: 13, color: 'var(--ink-3)', margin: 0 }}>
              回答上方任意问题，这里会按匹配度给出范式排序与组装好的提示词。
            </p>
          )}
        </div>
      </div>

      <div className="section-head" style={{ marginTop: 52 }}>
        <span className="no">JSON</span>
        <h2>机器可读索引</h2>
        <p>index.json · llms.txt</p>
      </div>
      <div className="json-meta">
        <span>
          <b>{index.entryCount}</b> 件展品
        </span>
        <span>
          <b>{jsonSize} KB</b> 体积
        </span>
        <span>
          生成于 <b className="mono">{index.generated}</b>
        </span>
        <span>
          每条含 <b>prompt / colors / fonts</b>
        </span>
      </div>
      <div className="json-block">
        <pre className={expanded ? 'full' : ''}>{expanded ? json : preview}</pre>
        {!expanded && (
          <div className="json-fade" />
        )}
      </div>
      <div className="json-actions">
        <button className="btn btn-ghost btn-sm" onClick={() => setExpanded((v) => !v)}>
          {expanded ? '收起全文 ▴' : `展开全文（${json.split('\n').length} 行）▾`}
        </button>
        <button className="btn btn-solid btn-sm" onClick={onCopyJson}>
          {copied ? '已复制 ✓' : '复制 JSON'}
        </button>
        <button className="btn btn-ghost btn-sm" onClick={onDownload}>
          下载 index.json
        </button>
        <a className="btn btn-ghost btn-sm" href="./index.json" target="_blank" rel="noreferrer">
          打开 /index.json ↗
        </a>
      </div>
    </div>
  );
}
