import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const theme = {
  bg: '#1a0b2e',
  surface: '#2d1b4e',
  alt: 'rgba(255, 113, 206, 0.1)',
  text: '#ffeafc',
  muted: '#b79ad0',
  primary: '#ff71ce',
  onPrimary: '#2b0a24',
  border: 'rgba(255, 113, 206, 0.38)',
  radius: '6px',
  radiusLg: '10px',
  shadow: '0 0 24px rgba(255, 113, 206, 0.28)',
  font: '"Rajdhani", "PingFang SC", sans-serif',
  mono: '"Rajdhani", ui-monospace, monospace',
  ok: '#05ffa1',
  warn: '#fffb96',
  err: '#ff3864',
  info: '#01cdfe',
  focus: '#01cdfe',
  extraCss: `
.sc-head h2 { font-family: "Monoton", cursive; font-weight: 400; font-size: 27px; letter-spacing: 0.04em;
  background: linear-gradient(180deg, #fffb96 0%, #ff71ce 45%, #b967ff 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; }
.sc-kicker { color: #01cdfe; }
.sc-cell { box-shadow: 0 0 22px rgba(255,113,206,.16), inset 0 1px 0 rgba(255,255,255,.06); }
.sc-btn { text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600; box-shadow: 0 0 16px rgba(255,113,206,.3); }
.sc-badge { text-transform: uppercase; letter-spacing: 0.1em; }
.sc-tbl th { letter-spacing: 0.16em; }
`,
};

export const vaporwave: Paradigm = {
  id: 'vaporwave',
  no: '19',
  name: '蒸汽波',
  nameEn: 'Vaporwave',
  tagline: '粉紫渐变、透视网格、希腊柱与片假名——80 年代的未来残梦。',
  origin: 'Vaporwave 音乐视觉 / Macintosh Plus / 商场美学',
  year: '2010 —',
  tags: ['粉紫渐变', '网格地板', '复古未来', '迷幻'],
  kind: 'paradigm',
  bestFor: ['音乐与潮流活动', '复古游戏/媒体', '创意作品集', '主题营销页'],
  avoid: ['企业官网', '工具型后台', '需要清晰层级的长内容'],
  prompt: `# 设计范式：蒸汽波（Vaporwave）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：80 年代广告里的「未来」——粉紫渐变、大理石柱、无限延伸的网格
- 情绪关键词：怀旧、迷幻、商场、落日、A E S T H E T I C
- 氛围：像深夜高速公路旁一家永远不打烊的商场

## 2. 布局
- 深紫底 #1a0b2e，页面底部一条透视网格地板（transform: perspective + rotateX）
- 上部内容居中对称，hero 允许巨大的渐变落日（圆形 + 横向条纹切割）
- 分区用「Windows 95 风窗口框」（标题栏 + 三个方块按钮）承载内容

## 3. 字体排印
- Logo/大标题：Monoton 或宽体复古字（Viga），可做金属渐变字（background-clip: text）
- 正文：Rajdhani / 窄体科技字 14-16px，全大写用于标签
- 装饰性文字：片假名（ア イ ウ エ オ）与全角字符做氛围斑点

## 4. 色彩
- 底：深紫 #1a0b2e；面板 #2d1b4e；文字 #ffeafc
- 霓虹四色：粉 #ff71ce、青 #01cdfe、紫 #b967ff、黄 #fffb96
- 渐变只允许「落日渐变」：黄→粉→紫 的垂直渐变

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
- 签名组件：Win95 窗口框（标题栏渐变 + 最小化/最大化/关闭三钮）与透视网格地平线
- 按钮：粉边粉底 + 16px 外发光、全大写宽字距；hover 辉光加强 8px
- 输入框：深紫内凹；focus 青边 + 青色发光
- 下拉框浮层：复古小窗 + 标题栏 + 1px 粉边
- 表格：1px 粉线 + 深紫隔行；hover 青紫渐变 12%
- 进度：粉→青渐变填充，纯色禁止
- 背景纪律：落日渐变 + 透视网格 + VHS 扫线三层常驻，组件浮在它们之上
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：填充霓虹渐变 + 辉光（box-shadow）加强 8px
- active：内容下移 1px 且饱和度提高
- focus-visible：青色 1px 描边 + 0 0 14px 青色外发光；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，220ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（220ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角复古小窗堆叠，从下方 12px 淡入并轻微缩放，3s 后向上淡出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 220ms（网格透视流动 6s 循环，VHS 扫线 8s 循环），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全局叠一层极淡的扫描线与色差（text-shadow 红蓝错位 1px）
- 装饰：希腊柱（重复线性渐变模拟柱槽）、棕榈树/海豚剪影（emoji 或 SVG）、◈ ✦ 符号
- 网格地板：linear-gradient 双方向 + perspective(200px) rotateX(60deg)

## 7. 禁忌
- 禁止明亮白底、直角商务风、细线极简
- 禁止使用蓝紫「默认渐变」之外的无脑渐变（本范式渐变必须有落日结构）
- 禁止现代玻璃拟态——这里的透明是 CRT 显像管的透明，不是毛玻璃
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '深紫底 + 落日渐变（黄→粉→紫）',
    '透视网格地板 + Win95 窗口框',
    '霓虹四色：粉/青/紫/黄，外发光',
    'Monoton 金属渐变标题字',
  ],
  tokens: {
    colors: [
      { name: '深夜紫', value: '#1a0b2e' },
      { name: '面板紫', value: '#2d1b4e' },
      { name: '霓虹粉', value: '#ff71ce' },
      { name: '霓虹青', value: '#01cdfe' },
      { name: '电光紫', value: '#b967ff' },
      { name: '落日黄', value: '#fffb96' },
    ],
    fonts: [
      { role: '展示标题', stack: '"Monoton", "Viga", cursive' },
      { role: '正文', stack: '"Rajdhani", "PingFang SC", sans-serif' },
    ],
    radius: '6px（窗口框 0px）',
    shadow: '0 0 24px rgba(255,113,206,.28)',
    extras: [
      { label: '网格地板', value: 'perspective + rotateX(60deg)' },
      { label: '字效', value: '金属渐变 + 红蓝色差' },
    ],
  },
  demo: {
    height: 1420,
    heightMobile: 1780,
    html: page({
      title: '蒸汽波 · Vaporwave',
      fonts: ['Monoton', 'Rajdhani:wght@400;500;600;700'],
      css: scCss(theme) + `
body { font-family: "Rajdhani", "PingFang SC", sans-serif; background: #1a0b2e; color: #ffeafc; padding: 44px 30px 0; overflow-x: hidden; }
.shell { max-width: 1060px; margin: 0 auto; position: relative; z-index: 2; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 34px; }
.brand { font-family: "Monoton", cursive; font-size: 19px; letter-spacing: 0.06em; background: linear-gradient(180deg, #fffb96, #ff71ce 55%, #b967ff); -webkit-background-clip: text; background-clip: text; color: transparent; }
.nav-links span { margin-left: 20px; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; color: #b79ad0; cursor: default; }
.nav-links span:hover { color: #01cdfe; }
.hero { position: relative; text-align: center; padding: 40px 0 30px; }
.sun { width: 240px; height: 240px; border-radius: 50%; margin: 0 auto 22px; position: relative;
  background: linear-gradient(180deg, #fffb96 0%, #ff71ce 55%, #b967ff 100%);
  box-shadow: 0 0 60px rgba(255,113,206,.45); overflow: hidden; }
.sun::after { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(180deg, transparent 0 14px, #1a0b2e 14px 20px); top: 55%; }
.hero h1 { font-family: "Monoton", cursive; font-size: clamp(26px, 4.6vw, 52px); font-weight: 400; letter-spacing: 0.05em; line-height: 1.3; text-shadow: 2px 0 0 rgba(255,56,100,.6), -2px 0 0 rgba(1,205,254,.6); }
.hero .jp { font-size: 15px; letter-spacing: 0.5em; color: #01cdfe; margin: 14px 0 10px; }
.hero p { max-width: 480px; margin: 0 auto; font-size: 15.5px; line-height: 1.8; color: #d9c2ec; }
.cta { display: flex; gap: 14px; justify-content: center; margin-top: 26px; flex-wrap: wrap; }
.cta a { font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; padding: 11px 24px; border: 1px solid #ff71ce; color: #ff71ce; background: rgba(255,113,206,.08); cursor: pointer; text-decoration: none; box-shadow: 0 0 16px rgba(255,113,206,.35); }
.cta a:hover { background: #ff71ce; color: #2b0a24; }
.cta a.cy { border-color: #01cdfe; color: #01cdfe; box-shadow: 0 0 16px rgba(1,205,254,.35); background: rgba(1,205,254,.07); }
.cta a.cy:hover { background: #01cdfe; color: #062a33; }
.win { background: #2d1b4e; border: 1px solid rgba(255,113,206,.5); box-shadow: 0 0 30px rgba(255,113,206,.2); margin-top: 34px; }
.win-bar { display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: linear-gradient(90deg, #b967ff, #ff71ce); }
.win-bar b { font-size: 11.5px; letter-spacing: 0.14em; text-transform: uppercase; color: #1a0b2e; font-weight: 700; }
.win-bar .sqs { margin-left: auto; display: flex; gap: 5px; }
.win-bar .sqs i { width: 11px; height: 11px; background: #2d1b4e; border: 1px solid rgba(26,11,46,.6); display: block; }
.win-body { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
.win-body .c { padding: 22px 24px; }
.win-body .c + .c { border-left: 1px solid rgba(255,113,206,.28); }
.win-body b { font-size: 15px; letter-spacing: 0.06em; display: block; margin-bottom: 8px; color: #fffb96; }
.win-body p { font-size: 13.5px; line-height: 1.75; color: #d9c2ec; }
.grid-floor { position: relative; height: 130px; margin-top: 40px; overflow: hidden; }
.grid-floor::before { content: ""; position: absolute; left: -20%; right: -20%; bottom: -30px; height: 260px;
  background-image: linear-gradient(rgba(255,113,206,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,113,206,.5) 1px, transparent 1px);
  background-size: 44px 44px; transform: perspective(220px) rotateX(58deg); transform-origin: bottom; }
.sc-root { position: relative; z-index: 2; margin-top: 30px; }
@media (max-width: 760px) {
  .win-body { grid-template-columns: 1fr; }
  .win-body .c + .c { border-left: 0; border-top: 1px solid rgba(255,113,206,.28); }
  .nav-links { display: none; }
}`,
      body: `
<div class="shell">
  <nav class="nav">
    <div class="brand">M A L L W A V E</div>
    <div class="nav-links"><span>音乐</span><span>视觉</span><span>商品</span><span>关于</span></div>
  </nav>
  <section class="hero">
    <div class="sun"></div>
    <div class="jp">ア イ ウ エ オ カ キ ク</div>
    <h1>ＡＥＳＴＨＥＴＩＣ<br />ＳＵＰＲＥＭＥ</h1>
    <p>一家永远不打烊的商场，一块落山的太阳，和无限延伸的网格。这里是 80 年代想象中的 2010 年代。</p>
    <div class="cta">
      <a>进入商场 →</a>
      <a class="cy">播放合辑</a>
    </div>
  </section>
  <section class="win">
    <div class="win-bar"><b>C:\AESTHETIC\README.TXT</b><span class="sqs"><i></i><i></i><i></i></span></div>
    <div class="win-body">
      <div class="c"><b>◆ 落日渐变</b><p>黄→粉→紫的垂直渐变是唯一允许的渐变，切割条纹模拟 CRT 扫描。</p></div>
      <div class="c"><b>◆ 网格地板</b><p>perspective + rotateX 造出无限延伸的地板，一切内容漂浮其上。</p></div>
      <div class="c"><b>◆ 窗口美学</b><p>内容装进 Win95 窗口框，标题栏渐变，方块按钮一个不少。</p></div>
    </div>
  </section>
  <div class="grid-floor"></div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
