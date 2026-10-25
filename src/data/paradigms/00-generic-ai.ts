import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#ffffff",
  "surface": "#ffffff",
  "alt": "rgba(15,23,42,0.05)",
  "text": "#0f172a",
  "muted": "#64748b",
  "primary": "#4f46e5",
  "onPrimary": "#ffffff",
  "border": "rgba(15,23,42,0.1)",
  "radius": "12px",
  "radiusLg": "16px",
  "shadow": "0 4px 14px rgba(79,70,229,0.14)",
  "font": "system-ui, -apple-system, \"PingFang SC\", sans-serif",
  "mono": "ui-monospace, \"SF Mono\", Consolas, monospace",
  "ok": "#10b981",
  "warn": "#f59e0b",
  "err": "#ef4444",
  "info": "#3b82f6",
  "focus": "#4f46e5",
  "extraCss": ".sc-btn.pri{background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:transparent;color:#fff;}"
};

export const genericAi: Paradigm = {
  id: 'generic-ai',
  no: '00',
  name: 'AI 默认味',
  nameEn: 'Generic AI Slop',
  tagline: '同样的需求丢给十个 AI，九个输出长这样。',
  origin: '训练数据里过剩的 Tailwind + shadcn 中位数审美',
  year: '2023 —',
  tags: ['反面标本', 'Tailwind', '渐变', 'Inter'],
  kind: 'anti-pattern',
  bestFor: ['反面教材：识别默认输出、提取负面约束写进提示词'],
  avoid: ['任何正式项目的默认输出'],
  prompt: `# 反范式识别清单：「AI 默认味」（用于识别并规避）

如果你不给 AI 指定设计范式，它大概率会输出下面这种「安全但千篇一律」的页面。本清单两个用途：① 帮你一眼识别默认输出；② 作为负面约束写进你的提示词。

## 布局特征
- 居中 Hero 三件套：✨ 开头的徽章 → 渐变大标题 → 一行副标题 → 并排两个按钮（一个实色一个幽灵）
- 三等分 feature 卡：rounded-2xl + 白底 + shadow-lg，图标用 emoji 或通用线性图标
- 「Trusted by」灰度 logo 横排；结尾一个 slate-900 深色全宽 CTA 横幅
- 所有区块垂直堆叠、左右对称，没有任何一处打破网格

## 字体排印
- Inter / system-ui 一种字体打天下；标题一律居中；字重只有 400 / 600 / 700

## 色彩
- 靛蓝→紫渐变（indigo-500 → violet-600）出现在标题文字和主按钮上
- slate-900/600/500/200 四级灰 + 一个强调色，全场没有第三种颜色

## 质感
- 圆角 8-16px、shadow-lg、1px 浅灰描边——「三件套」
- 没有任何材质、纹理、印刷感或手工感

## 默认味组件与伪交互（病状清单）
不是规范，是快速判断「这是不是 AI 默认输出」的九个症状：

- 组件只有半个架子：主按钮 + 幽灵按钮 + 三张 feature 卡 + 一排灰度 logo，外加一个毫无状态可言的「假输入框」
- 六态缺失：没有 focus-visible（浏览器默认蓝圈照抄）、disabled 只是降透明度却仍可点击、压根没有 loading 与骨架屏
- 假交互：hover 清一色 -translate-y-0.5 + shadow-xl；active 与 hover 长得一模一样，按下去毫无手感
- 没有反馈层：没有模态框、没有吐司、没有提示条；表单提交后页面毫无反应，错误态不存在
- 下拉框交给原生 select 或直接不做：没有搜索建议、没有键盘操作（↑↓ / Enter / Esc）、没有空态
- 数据展示是死的：表格只有静态几行，没有排序、没有行选择、没有空态；进度条是纯装饰色块
- 动效：全场一个 transition-all duration-200 通吃，没有范式化的时长与缓动，更没有 prefers-reduced-motion
- 可访问性靠运气：对比度随缘，图标按钮没有 aria-label，焦点顺序错乱
- 出现以上任意三条即可判定为默认输出——请回馆里挑一个真正的范式，按它的「组件与交互规范」重做

## 规避写法（把这段加进你的提示词）
「不要居中 Hero 三件套、不要紫蓝渐变文字、不要 rounded-2xl + shadow-lg 三等分卡片、不要 emoji 当图标、不要 slate 灰阶；按下述我指定的范式执行。」`,
  spec: [
    '识别特征：居中 Hero + 渐变标题 + 双按钮三件套',
    '三等分 rounded-2xl 卡片，shadow-lg 阴影三件套',
    'emoji 当功能图标，全场 Inter 一种字体',
    '靛蓝→紫渐变 + slate 四级灰，深色 CTA 横幅收尾',
  ],
  tokens: {
    colors: [
      { name: '纸白', value: '#ffffff' },
      { name: '靛蓝', value: '#4f46e5' },
      { name: '渐变', value: '#6366f1 → #8b5cf6' },
      { name: '墨', value: '#0f172a' },
      { name: '次文', value: '#64748b' },
    ],
    fonts: [{ role: '全场', stack: 'Inter, system-ui, sans-serif' }],
    radius: '8-16px',
    shadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
    extras: [{ label: '图标', value: 'emoji / lucide 通用线性图标' }],
  },
  demo: {
    height: 1830,
    heightMobile: 2520,
    html: page({
      title: 'AI 默认味 · 反面标本',
      fonts: ['Inter:wght@400;500;600;700'],
      css: scCss(scTheme) + `
body {
  font-family: Inter, system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #ffffff;
  color: #0f172a;
  -webkit-font-smoothing: antialiased;
}
.wrap { max-width: 1152px; margin: 0 auto; padding: 0 24px; }
nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 0; border-bottom: 1px solid #f1f5f9;
}
.logo { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 18px; }
.logo-mark { width: 30px; height: 30px; border-radius: 8px; background: linear-gradient(135deg, #6366f1, #8b5cf6); }
.nav-links { display: flex; gap: 28px; font-size: 14px; color: #64748b; }
.nav-links span { cursor: default; }
.btn {
  display: inline-flex; align-items: center; gap: 8px; border-radius: 8px;
  font-size: 14px; font-weight: 500; cursor: default; border: 1px solid transparent;
}
.btn-primary { background: #4f46e5; color: #fff; padding: 10px 18px; }
.btn-primary:hover { background: #4338ca; }
.btn-ghost { color: #334155; padding: 10px 18px; border-color: #e2e8f0; background: #fff; }
.hero { text-align: center; padding: 88px 0 72px; }
.badge {
  display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #4f46e5;
  background: #eef2ff; border: 1px solid #e0e7ff; border-radius: 999px; padding: 6px 14px;
  margin-bottom: 24px; font-weight: 500;
}
h1 { font-size: 60px; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; }
.grad {
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.sub { margin: 22px auto 0; max-width: 620px; font-size: 18px; line-height: 1.7; color: #64748b; }
.cta-row { margin-top: 36px; display: flex; gap: 14px; justify-content: center; }
.logos { padding: 40px 0 56px; border-top: 1px solid #f1f5f9; }
.logos-title { text-align: center; font-size: 12px; letter-spacing: 0.12em; color: #94a3b8; text-transform: uppercase; margin-bottom: 28px; }
.logos-row { display: flex; justify-content: center; gap: 56px; filter: grayscale(1); opacity: 0.55; font-weight: 700; font-size: 19px; color: #334155; }
.features { padding: 24px 0 80px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.card {
  background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
}
.card-icon { font-size: 26px; margin-bottom: 16px; }
.card h3 { font-size: 17px; font-weight: 600; margin-bottom: 10px; }
.card p { font-size: 14px; line-height: 1.7; color: #64748b; }
.banner {
  background: #0f172a; border-radius: 20px; padding: 64px 40px; text-align: center; color: #fff;
  margin-bottom: 72px;
}
.banner h2 { font-size: 34px; font-weight: 700; letter-spacing: -0.01em; }
.banner p { margin: 14px auto 30px; max-width: 520px; color: #94a3b8; font-size: 15px; line-height: 1.7; }
.btn-white { background: #fff; color: #0f172a; padding: 12px 22px; font-size: 15px; }
@media (max-width: 760px) {
  .nav-links { display: none; }
  h1 { font-size: 40px; }
  .features { grid-template-columns: 1fr; }
  .logos-row { gap: 24px; font-size: 15px; flex-wrap: wrap; }
  .hero { padding: 56px 0 48px; }
}`,
      body: `
<div class="wrap">
  <nav>
    <div class="logo"><div class="logo-mark"></div>Acme AI</div>
    <div class="nav-links"><span>产品</span><span>解决方案</span><span>文档</span><span>定价</span></div>
    <button class="btn btn-primary">免费开始</button>
  </nav>
  <section class="hero">
    <div class="badge">✨ 新功能：AI 助手已上线</div>
    <h1>用 <span class="grad">AI 驱动</span>的<br />方式团队增长</h1>
    <p class="sub">一站式智能平台，帮助你的团队更快地构建、部署和扩展现代应用。安全、可靠、开箱即用。</p>
    <div class="cta-row">
      <button class="btn btn-primary">免费开始 →</button>
      <button class="btn btn-ghost">观看演示</button>
    </div>
  </section>
  <section class="logos">
    <div class="logos-title">深受全球团队信赖</div>
    <div class="logos-row"><span>Vercel</span><span>Linear</span><span>Notion</span><span>Stripe</span><span>Figma</span></div>
  </section>
  <section class="features">
    <div class="card">
      <div class="card-icon">🚀</div>
      <h3>极速部署</h3>
      <p>全球边缘网络，一次推送即可在数秒内完成部署，无需关心基础设施。</p>
    </div>
    <div class="card">
      <div class="card-icon">⚡</div>
      <h3>智能分析</h3>
      <p>内置 AI 分析引擎，自动洞察业务数据，帮助你做出更明智的决策。</p>
    </div>
    <div class="card">
      <div class="card-icon">🔒</div>
      <h3>企业级安全</h3>
      <p>SOC2 与等保合规，端到端加密，细粒度权限控制，让数据固若金汤。</p>
    </div>
  </section>
  <section class="banner">
    <h2>准备好开始了吗？</h2>
    <p>加入超过 10,000 支团队的行列，免费试用 14 天，无需信用卡。</p>
    <button class="btn btn-white">立即注册</button>
  </section>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
