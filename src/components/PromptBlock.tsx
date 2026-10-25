import { useState } from 'react';

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
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

interface Props {
  prompt: string;
  label?: string;
  hint?: string;
}

export function PromptBlock({ prompt, label = '范式提示词', hint = '整段复制，直接发给 AI' }: Props) {
  const [done, setDone] = useState(false);

  const onCopy = async () => {
    const ok = await copyText(prompt);
    setDone(ok);
    setTimeout(() => setDone(false), 1600);
  };

  return (
    <div className="prompt">
      <div className="prompt-head">
        <span>
          {label} <span className="hint">{hint}</span>
        </span>
        <button className="btn btn-solid btn-sm" onClick={onCopy}>
          {done ? '已复制 ✓' : '复制提示词'}
        </button>
      </div>
      <pre>{prompt}</pre>
    </div>
  );
}
