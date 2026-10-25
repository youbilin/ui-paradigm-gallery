export interface PageOptions {
  title: string;
  css: string;
  body: string;
  fonts?: string[];
  js?: string;
}

export function page({ title, css, body, fonts, js }: PageOptions): string {
  const fontLinks = (fonts ?? [])
    .map(
      (f) =>
        `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=${f}&display=swap" rel="stylesheet">`,
    )
    .join('\n');
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
${fontLinks}
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
@media (prefers-reduced-motion: no-preference) {
  body > * { animation: pg-in .65s cubic-bezier(.22,1,.36,1) both; }
  body > *:nth-child(2) { animation-delay: .1s; }
  body > *:nth-child(3) { animation-delay: .2s; }
  body > *:nth-child(n+4) { animation-delay: .28s; }
}
@keyframes pg-in { from { opacity: 0; transform: translateY(16px); } }
${css}
</style>
</head>
<body>
${body}
${js ? `<script>\n${js}\n</script>` : ''}
<script>
/* 自适应高度上报：iframe 内文档把真实 scrollHeight 发给父页，外层据此调整 iframe 高度。
   注意：高度没变化时不上报——否则 resize → 上报 → 外层改高度 → resize 会形成正反馈循环。 */
(function () {
  var last = -1;
  var send = function () {
    var h = document.documentElement.scrollHeight;
    if (Math.abs(h - last) <= 1) return;
    last = h;
    try { parent.postMessage({ __demoH: h }, '*'); } catch (e) {}
  };
  window.addEventListener('load', send);
  window.addEventListener('resize', send);
  setTimeout(send, 200); setTimeout(send, 700); setTimeout(send, 1800);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(send);
})();
</script>
</body>
</html>`;
}
