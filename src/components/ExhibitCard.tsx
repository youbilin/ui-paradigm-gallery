import { useState } from 'react';
import type { Paradigm } from '../data/paradigms/types';
import { copyText, openPreview } from '../utils/preview';

export function ExhibitCard({ p }: { p: Paradigm }) {
  const anti = p.kind === 'anti-pattern';
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    const ok = await copyText(p.prompt);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <div className={`ex-card${anti ? ' anti' : ''}`}>
      <div className="thumb">
        <iframe
          srcDoc={p.demo.html}
          sandbox=""
          aria-hidden="true"
          title={`${p.name} 预览`}
          loading="lazy"
          style={{
            width: 1280,
            height: p.demo.height,
            transform: 'scale(0.28)',
            transformOrigin: 'top left',
          }}
        />
      </div>
      <div className="ex-body">
        <div className="ex-no">EXHIBIT {p.no}</div>
        <div className="ex-name">{p.name}</div>
        <div className="ex-nameEn">{p.nameEn}</div>
        <p className="ex-tagline">{p.tagline}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span className={`tag${anti ? ' anti' : ''}`} key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="ex-actions">
        <button className="btn btn-solid btn-sm" onClick={onCopy}>
          {copied ? '已复制 ✓' : '复制提示词'}
        </button>
        <button className="btn btn-ghost btn-sm" onClick={() => openPreview(p.demo.html, p.name)}>
          预览 ↗
        </button>
      </div>
    </div>
  );
}

export function Thumb({ p }: { p: Paradigm }) {
  return (
    <button
      className="thumb-card"
      onClick={() => openPreview(p.demo.html, p.name)}
      title={`新窗口预览：${p.name}`}
    >
      <div className="thumb" style={{ height: 128 }}>
        <iframe
          srcDoc={p.demo.html}
          sandbox=""
          aria-hidden="true"
          title={`${p.name} 预览`}
          loading="lazy"
          style={{
            width: 1280,
            height: p.demo.height,
            transform: 'scale(0.14)',
            transformOrigin: 'top left',
          }}
        />
      </div>
      <div className="thumb-name">
        {p.no} · {p.name}
      </div>
    </button>
  );
}
