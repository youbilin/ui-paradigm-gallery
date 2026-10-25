/** 把演示 HTML 在新窗口打开（blob URL，无需详情页） */
export function openPreview(html: string, title: string) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const w = window.open(url, '_blank', 'noopener');
  if (w) {
    try {
      w.document.title = `${title} · 范式展览馆`;
    } catch {
      /* 跨文档时机问题可忽略，blob 页自身有 title */
    }
  }
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

/** 复制文本到剪贴板，带 execCommand 回退，返回是否成功 */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    ta.remove();
    return ok;
  }
}
