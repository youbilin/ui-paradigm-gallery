import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "rgba(255,255,255,0.07)",
  "surface": "rgba(255,255,255,0.09)",
  "alt": "rgba(255,255,255,0.06)",
  "text": "#f1f5f9",
  "muted": "#94a3b8",
  "primary": "#a78bfa",
  "onPrimary": "#1e1b4b",
  "border": "rgba(255,255,255,0.16)",
  "radius": "16px",
  "radiusLg": "22px",
  "shadow": "0 8px 32px rgba(0,0,0,0.25)",
  "font": "system-ui, -apple-system, \"PingFang SC\", sans-serif",
  "mono": "ui-monospace, \"SF Mono\", Consolas, monospace",
  "ok": "#34d399",
  "warn": "#fbbf24",
  "err": "#f87171",
  "info": "#22d3ee",
  "focus": "#a78bfa",
  "extraCss": ".sc-root{backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);}.sc-cell{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-color:rgba(255,255,255,0.2);}.sc-btn.pri{background:linear-gradient(135deg,rgba(167,139,250,0.9),rgba(6,182,212,0.9));border-color:rgba(255,255,255,0.25);color:#fff;}"
};

export const glass: Paradigm = {
  id: 'glass',
  no: '04',
  name: '玻璃拟态',
  nameEn: 'Glassmorphism',
  tagline: '半透明磨砂层叠在鲜艳光斑上——轻盈，但别滥用。',
  origin: 'Fluent Design / macOS 控制中心 / Dribbble 2020',
  year: '2020 —',
  tags: ['磨砂', '半透明', '光斑', '层次'],
  bestFor: ['音乐/播客播放器', 'hero 上的浮层', '深色氛围页'],
  avoid: ['信息密集表单', '长列表', '低对比度场景'],
  prompt: `# 设计范式：玻璃拟态（Glassmorphism）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：轻盈、通透、有空气感；像磨砂玻璃压在鲜艳背景上
- 情绪关键词：未来、柔和、层次、氛围

## 2. 布局
- 背景必须是「有东西可透」的：2-3 个大面积饱和色斑（radial-gradient，尺寸 ≥ 40% 视口）
- 内容放在 1-3 层玻璃卡片上，允许轻微层叠错位（8-16px）
- 玻璃卡之间不重叠文字区；主卡居中或偏置，浮层小卡靠角

## 3. 字体排印
- 白色或近白文字，配 0 1px 2px rgba(0,0,0,0.2) 文字阴影保证可读
- 标题 28-40px/600；正文 14-15px/400、行高 1.6；辅助信息 rgba(255,255,255,0.65)

## 4. 色彩
- 背景：深色底（#0f172a 附近）+ 高饱和光斑（紫 #7c3aed、蓝 #3b82f6、粉 #ec4899、青 #06b6d4）
- 玻璃面：rgba(255,255,255,0.10-0.18)；描边：1px rgba(255,255,255,0.25-0.4)（上亮下暗更佳）
- 强调：白色或单一亮色，仅用于关键按钮与进度

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：双层玻璃面板——背景至少 3 个彩色 radial 光斑，必须能透过 blur「渗」进面板
- 按钮：主按钮白色实底深字，次按钮玻璃面（blur + 1px 25% 白边）；hover 提亮 8% + 上浮 2px
- 输入框：玻璃底 + 1px 25% 白边；聚焦白边加亮 + 4px 白色 15% 光环
- 下拉框浮层：blur(24px) 玻璃托盘 + 16px 圆角——浮层背后必须「看得见」光斑颜色
- 开关：玻璃轨道 + 白凸钮，ON 时泛青光
- 表格：行线 12% 白，hover 整行提亮一档
- 层次纪律：光斑 → 玻璃面板 → 玻璃控件，至少三层可辨识的透明度
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：玻璃面提亮 8% 并上浮 2px，配合 transition: background .2s, transform .2s
- active：scale(0.98) 且饱和度略降
- focus-visible：1.5px 白色描边 + 3px 外扩 rgba(255,255,255,.35)；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，220ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（220ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角堆叠，从下方 12px 淡入，3s 后向上淡出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 220ms（拖尾感更重，模糊位移动作可放宽到 320ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 每层玻璃只做一件事；玻璃叠玻璃不超过 3 层
- 光斑要「透得出形状」：卡片背后必须有颜色变化
- 可加细高光线（inset 0 1px 0 rgba(255,255,255,0.25)）增强玻璃边缘

## 7. 禁忌
- 禁止玻璃上再放玻璃超过三层、禁止白底大区块、禁止低对比灰字
- 禁止硬阴影、粗黑边、大面积磨砂导致的文字发虚
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '背景 2-3 个饱和 radial 光斑，玻璃必须「透得出颜色」',
    '玻璃卡：blur(16-24px) + 半透明面 + 1px 上亮描边',
    '大面积柔影 0 8px 32px；玻璃叠层 ≤3',
    '白色文字 + 微文字阴影；每层只做一件事',
  ],
  tokens: {
    colors: [
      { name: '深底', value: '#0f172a' },
      { name: '玻璃面', value: 'rgba(255,255,255,0.14)' },
      { name: '描边', value: 'rgba(255,255,255,0.35)' },
      { name: '光斑紫', value: '#7c3aed' },
      { name: '光斑青', value: '#06b6d4' },
    ],
    fonts: [{ role: '全场', stack: 'system-ui, -apple-system, "PingFang SC", sans-serif' }],
    radius: '20-28px',
    shadow: '0 8px 32px rgba(0,0,0,0.25)',
    extras: [{ label: '模糊', value: 'backdrop-filter: blur(20px) saturate(140%)' }],
  },
  demo: {
    height: 1570,
    heightMobile: 2260,
    html: page({
      title: '玻璃拟态 · Glassmorphism',
      css: scCss(scTheme) + `
body {
  font-family: system-ui, -apple-system, "SF Pro Text", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #fff;
  background:
    radial-gradient(42% 46% at 18% 22%, rgba(124, 58, 237, 0.85), transparent 70%),
    radial-gradient(38% 42% at 82% 18%, rgba(6, 182, 212, 0.8), transparent 70%),
    radial-gradient(46% 50% at 72% 84%, rgba(236, 72, 153, 0.7), transparent 70%),
    radial-gradient(36% 40% at 26% 82%, rgba(59, 130, 246, 0.65), transparent 70%),
    #0b1220;
}
/* 注意：自适应高度的 iframe 里 vh 以 iframe 自身为基准，会用「内容 = f(容器)」形成正反馈——演示里禁止用 vh 定尺寸 */
.stage { position: relative; min-height: 660px; padding: 34px; }
.glass {
  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.32);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.28);
  border-radius: 24px;
}
.player { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(430px, 86vw); padding: 26px; }
.player-head { display: flex; align-items: center; gap: 16px; }
.art {
  width: 76px; height: 76px; border-radius: 16px; flex: none;
  background: linear-gradient(135deg, #a78bfa, #22d3ee 60%, #f472b6);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
.player-head b { display: block; font-size: 18px; font-weight: 600; letter-spacing: 0.01em; }
.player-head span { font-size: 13px; color: rgba(255, 255, 255, 0.68); }
.badge-live {
  margin-left: auto; font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
  background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.35);
  padding: 4px 9px; border-radius: 999px; display: flex; align-items: center; gap: 6px;
}
.badge-live i { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 8px #4ade80; }
.progress { margin-top: 22px; height: 5px; border-radius: 3px; background: rgba(255, 255, 255, 0.18); position: relative; }
.progress i { position: absolute; inset: 0 auto 0 0; width: 46%; border-radius: 3px; background: #fff; }
.time { display: flex; justify-content: space-between; font-size: 11px; color: rgba(255, 255, 255, 0.6); margin-top: 8px; font-variant-numeric: tabular-nums; }
.controls { display: flex; align-items: center; justify-content: center; gap: 22px; margin-top: 18px; }
.controls .ic { opacity: 0.8; cursor: default; }
.controls .play {
  width: 52px; height: 52px; border-radius: 50%; background: #fff; color: #0b1220;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}
.chip {
  position: absolute; padding: 13px 18px; font-size: 13px; display: flex; align-items: center; gap: 10px;
}
.chip b { font-weight: 600; }
.chip small { display: block; font-size: 11px; color: rgba(255, 255, 255, 0.65); font-weight: 400; }
.weather { left: 5%; top: 16%; transform: rotate(-2deg); }
.weather .t { font-size: 24px; font-weight: 600; }
.msg { right: 4%; bottom: 12%; transform: rotate(1.5deg); max-width: 240px; }
.msg .dot { width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #f472b6, #a78bfa); flex: none; }
.tips { right: 6%; top: 14%; transform: rotate(2deg); }
@media (max-width: 760px) {
  .chip { display: none; }
  .player { width: 92vw; }
  .stage { min-height: 560px; }
}`,
      body: `
<div class="stage">
  <div class="glass chip weather">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" stroke-width="1.5" stroke-linecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8" />
    </svg>
    <div><span class="t">22°</span><small>晴 · 今夜有雨</small></div>
  </div>
  <div class="glass chip tips">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.2"/></svg>
    <div><b>小提示</b><small>玻璃只能叠三层</small></div>
  </div>
  <div class="glass player">
    <div class="player-head">
      <div class="art"></div>
      <div>
        <b>夜航西飞</b>
        <span>海边的西塞罗 · 专辑《雾港》</span>
      </div>
      <div class="badge-live"><i></i>LIVE</div>
    </div>
    <div class="progress"><i></i></div>
    <div class="time"><span>1:24</span><span>3:02</span></div>
    <div class="controls">
      <svg class="ic" width="20" height="20" viewBox="0 0 20 20" fill="#fff"><path d="M4 3v14M8 10l9-7v14z" transform="scale(0.9)"/></svg>
      <div class="play">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#0b1220"><path d="M3 1.5v13l11-6.5z"/></svg>
      </div>
      <svg class="ic" width="20" height="20" viewBox="0 0 20 20" fill="#fff"><path d="M16 3v14M12 10L3 3v14z" transform="scale(0.9)"/></svg>
    </div>
  </div>
  <div class="glass chip msg">
    <div class="dot"></div>
    <div><b>阿满 关注了你</b><small>「同好」· 2 分钟前</small></div>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
