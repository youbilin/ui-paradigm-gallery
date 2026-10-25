import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const theme = {
  bg: '#fff6e9',
  surface: '#ffffff',
  alt: 'rgba(26, 26, 46, 0.06)',
  text: '#1a1a2e',
  muted: '#7a7490',
  primary: '#ff4d8d',
  onPrimary: '#ffffff',
  border: '#1a1a2e',
  radius: '999px',
  radiusLg: '26px',
  shadow: '4px 4px 0 #1a1a2e',
  font: '"Baloo 2", "PingFang SC", sans-serif',
  mono: 'ui-monospace, "SF Mono", Consolas, monospace',
  ok: '#22a06b',
  warn: '#e8a13a',
  err: '#ff4d6d',
  info: '#3a86ff',
  focus: '#3a86ff',
  extraCss: `
.sc-cell { border-width: 2.5px; border-radius: 20px; }
.sc-btn { border-width: 2.5px; border-radius: 999px; font-weight: 700; box-shadow: 3px 3px 0 #1a1a2e; }
.sc-btn.pri { box-shadow: 3px 3px 0 #1a1a2e; }
.sc-btn:active { transform: translate(3px, 3px); box-shadow: 0 0 0 #1a1a2e; }
.sc-head h2 { font-weight: 800; }
.sc-cell h5 { letter-spacing: 0.14em; }
.sc-inp, .sc-ta, .sc-sel-btn { border-width: 2.5px; border-radius: 999px; }
.sc-badge { border: 2px solid #1a1a2e; }
.sc-tag { border-width: 2.5px; border-radius: 999px; }
.sc-ava { border: 2.5px solid #1a1a2e; }
.sc-tbl th { letter-spacing: 0.1em; }
`,
};

export const memphis: Paradigm = {
  id: 'memphis',
  no: '14',
  name: '孟菲斯',
  nameEn: 'Memphis',
  tagline: '波浪、斑点、撞色贴纸——后现代设计的派对现场。',
  origin: '1981 米兰孟菲斯集团 / Ettore Sottsass / 后现代主义',
  year: '1981 — 1988',
  tags: ['撞色', '几何拼贴', '波点', '戏谑'],
  kind: 'paradigm',
  bestFor: ['潮流品牌', '活动与音乐节', '面向 Z 世代的产品', '儿童教育'],
  avoid: ['金融、法律、医疗等严肃场景', '需要长期阅读的长内容站点'],
  prompt: `# 设计范式：孟菲斯（Memphis）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：戏谑、热闹、明目张胆的快乐；像 1981 年米兰的一场设计派对
- 情绪关键词：撞色、拼贴、波点、波浪、不守规矩
- 态度：反对「好品味」——所有元素都故意夸张、鲜艳、不对称

## 2. 布局
- 拼贴式分区：元素像贴纸一样层叠、旋转、压住彼此，允许出格与重叠
- 底色为暖白/奶油色，让高饱和色块跳出来
- 装饰图案随机分布：波浪线、斑点、锯齿、三角、半圆、十字

## 3. 字体排印
- 标题：圆润粗体（Baloo 2 / Fredoka / 思源圆体），48-72px，可略微倾斜
- 正文：同族中等字重 14-16px，行高 1.7
- 关键词用荧光笔式底色涂抹（黄/粉），像马克笔划过

## 4. 色彩
- 底：奶油 #fff6e9；墨 #1a1a2e
- 糖果撞色：粉 #ff4d8d、黄 #ffd23f、蓝 #3a86ff、青 #06d6a0、紫 #9b5de5
- 撞色必须拉开明度差；深墨描边（2.5px 以上）框住所有彩色形状

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
- 签名组件：波浪/锯齿分隔线与散落的随机图案（圆点、条纹、折线，方向随机）
- 按钮：糖果色 + 粗墨边 + 硬阴影；hover 位移加深、active 贴边归零
- 输入框：白底粗墨边；focus 变粉 #ff4d8d + 波浪下划线
- 下拉框浮层：自带 -1° 旋转的卡片；hover 填糖果色
- 分段控制：不规则形状（clip-path 切角），不做规整胶囊
- 表格：粗黑线 + 浅粉/浅青斑马纹；hover 柠檬黄
- 反对称纪律：禁止成对、对称、居中的装饰——图案必须散落且方向随机
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：位移 -2px 且硬阴影加深，或额外旋转 2°
- active：回到原位贴边，投影清零
- focus-visible：3px 墨色虚线框外扩 4px（故意夸张）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，180ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（180ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角彩色卡片（随机 ±2° 旋转）堆叠，弹跳进入，3s 后旋转飞出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 180ms（滑入 / 弹出用 cubic-bezier(.34,1.56,.64,1) 回弹），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全部硬投影与实色，禁渐变、禁毛玻璃、禁柔和模糊
- 用 repeating-radial-gradient 做波点底纹；用 SVG path 做波浪与锯齿
- 图标：粗形几何贴纸风，不用细线图标

## 7. 禁忌
- 禁止极简留白、性冷淡灰、细线描边
- 禁止把元素对齐得整整齐齐——那是瑞士风，不是孟菲斯
- 禁止低饱和配色
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '粗墨边 2.5px + 4px 硬投影，允许 ±3° 旋转',
    '奶油底 + 糖果撞色：粉/黄/蓝/青/紫',
    '波浪、波点、锯齿为装饰三件套',
    'hover 位移加深投影，active 贴边',
  ],
  tokens: {
    colors: [
      { name: '奶油底', value: '#fff6e9' },
      { name: '墨', value: '#1a1a2e' },
      { name: '派对粉', value: '#ff4d8d' },
      { name: '派对黄', value: '#ffd23f' },
      { name: '派对蓝', value: '#3a86ff' },
      { name: '派对青', value: '#06d6a0' },
    ],
    fonts: [{ role: '标题', stack: '"Baloo 2", "Fredoka", "PingFang SC", sans-serif' }],
    radius: '贴纸 999px / 卡片 20px',
    shadow: '4px 4px 0 #1a1a2e（硬投影）',
    extras: [
      { label: '边框', value: '2.5px solid #1a1a2e' },
      { label: '图案', value: '波浪 · 波点 · 锯齿' },
    ],
  },
  demo: {
    height: 1400,
    heightMobile: 1750,
    html: page({
      title: '孟菲斯 · Memphis',
      fonts: ['Baloo+2:wght@500;700;800'],
      css: scCss(theme) + `
body { font-family: "Baloo 2", "PingFang SC", sans-serif; background: #fff6e9; color: #1a1a2e; padding: 44px 30px 52px; }
.shell { max-width: 1080px; margin: 0 auto; position: relative; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 38px; }
.brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 17px; letter-spacing: 0.02em; }
.brand .dot { width: 14px; height: 14px; border-radius: 50%; background: #ff4d8d; border: 2.5px solid #1a1a2e; }
.nav-links span { margin-left: 20px; font-size: 13px; font-weight: 700; cursor: default; padding: 5px 13px; border: 2.5px solid transparent; border-radius: 999px; }
.nav-links span:hover { border-color: #1a1a2e; background: #ffd23f; }
.hero { position: relative; background: #ffffff; border: 2.5px solid #1a1a2e; border-radius: 28px; box-shadow: 7px 7px 0 #1a1a2e; padding: 48px 46px 42px; transform: rotate(-0.6deg); overflow: hidden; }
.zig { position: absolute; top: 22px; right: 26px; width: 120px; height: 24px; background: repeating-linear-gradient(135deg, #3a86ff 0 10px, transparent 10px 20px); }
.dots { position: absolute; bottom: 18px; right: 22px; width: 110px; height: 70px; background-image: radial-gradient(#ff4d8d 3.5px, transparent 3.5px); background-size: 18px 18px; }
.blob { position: absolute; top: -30px; left: 46%; width: 90px; height: 90px; background: #06d6a0; border: 2.5px solid #1a1a2e; border-radius: 50% 50% 50% 8px; transform: rotate(14deg); }
.badge-star { position: absolute; top: -20px; left: 30px; background: #ffd23f; border: 2.5px solid #1a1a2e; border-radius: 999px; padding: 6px 16px; font-weight: 800; font-size: 13px; transform: rotate(-4deg); box-shadow: 3px 3px 0 #1a1a2e; }
.hero h1 { font-size: clamp(38px, 5.2vw, 64px); font-weight: 800; line-height: 1.06; margin: 12px 0 18px; max-width: 520px; transform: rotate(-1deg); }
.hero h1 .mk { background: linear-gradient(transparent 55%, #ffd23f 55%); padding: 0 6px; }
.hero h1 .pink { color: #ff4d8d; }
.hero p { max-width: 420px; font-size: 15px; line-height: 1.75; font-weight: 500; color: #44425c; }
.cta { display: flex; gap: 14px; margin-top: 26px; flex-wrap: wrap; }
.cta a { font-weight: 800; font-size: 14px; padding: 12px 24px; border: 2.5px solid #1a1a2e; border-radius: 999px; box-shadow: 4px 4px 0 #1a1a2e; cursor: pointer; text-decoration: none; color: #1a1a2e; background: #fff; transition: transform 0.1s, box-shadow 0.1s; }
.cta a.pri { background: #ff4d8d; color: #fff; }
.cta a:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #1a1a2e; }
.cta a:active { transform: translate(4px, 4px); box-shadow: 0 0 0 #1a1a2e; }
.wave { margin: 34px auto 0; width: 100%; max-width: 1080px; height: 26px; display: block; }
.stickers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 30px; }
.st { background: #fff; border: 2.5px solid #1a1a2e; border-radius: 22px; box-shadow: 5px 5px 0 #1a1a2e; padding: 20px 22px; }
.st:nth-child(1) { transform: rotate(1.2deg); background: #eaf6ff; }
.st:nth-child(2) { transform: rotate(-1.4deg); background: #fff0f6; }
.st:nth-child(3) { transform: rotate(0.8deg); background: #eefaf3; }
.st b { font-size: 15px; display: block; margin-bottom: 7px; }
.st p { font-size: 13px; line-height: 1.65; color: #44425c; font-weight: 500; }
@media (max-width: 760px) {
  .stickers { grid-template-columns: 1fr; }
  .hero { padding: 36px 24px 78px; }
  .nav-links { display: none; }
}`,
      body: `
<div class="shell">
  <nav class="nav">
    <div class="brand"><span class="dot"></span>MEMPHIS CLUB</div>
    <div class="nav-links"><span>贴纸</span><span>派对</span><span>商店</span><span>关于</span></div>
  </nav>
  <span class="badge-star">★ 全新上线</span>
  <section class="hero">
    <span class="zig"></span><span class="blob"></span><span class="dots"></span>
    <div style="font-size:13px;font-weight:800;letter-spacing:.18em">1981 · MILANO · 后现代设计派对</div>
    <h1>太<span class="pink">规矩</span>的设计，<br />都欠一点<span class="mk">快乐</span>。</h1>
    <p>我们把波浪、波点和撞色贴满屏幕。这不是混乱，这是 80 年代孟菲斯集团留给世界的处方：好看的东西，理应让人心情好。</p>
    <div class="cta">
      <a class="pri">加入派对 →</a>
      <a>看看作品</a>
    </div>
  </section>
  <svg class="wave" viewBox="0 0 1080 26" preserveAspectRatio="none"><path d="M0 13 Q 27 0 54 13 T 108 13 T 162 13 T 216 13 T 270 13 T 324 13 T 378 13 T 432 13 T 486 13 T 540 13 T 594 13 T 648 13 T 702 13 T 756 13 T 810 13 T 864 13 T 918 13 T 972 13 T 1026 13 T 1080 13" fill="none" stroke="#1a1a2e" stroke-width="2.5" /></svg>
  <section class="stickers">
    <div class="st"><b>▲ 三角贴纸</b><p>所有分区都可以是一张贴纸：粗边、硬影、微微歪着头。</p></div>
    <div class="st"><b>● 波点底纹</b><p>用 radial-gradient 铺一层波点，比纯色多 30% 的活泼感。</p></div>
    <div class="st"><b>✕ 撞色原则</b><p>颜色之间要么明度拉开，要么直接互补——拒绝温吞的中间态。</p></div>
  </section>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
