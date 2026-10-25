import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const theme = {
  bg: '#f4f1ea',
  surface: '#fffdf8',
  alt: 'rgba(20, 18, 15, 0.06)',
  text: '#14120f',
  muted: '#6f6a5e',
  primary: '#d62828',
  onPrimary: '#fffdf8',
  border: '#14120f',
  radius: '0px',
  radiusLg: '0px',
  shadow: 'none',
  font: '"Jost", "PingFang SC", sans-serif',
  mono: 'ui-monospace, "SF Mono", Consolas, monospace',
  ok: '#1a7f37',
  warn: '#b45309',
  err: '#d62828',
  info: '#1d3557',
  focus: '#1d3557',
  extraCss: `
.sc-cell { border-width: 2px; }
.sc-btn { text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500; border-width: 2px; }
.sc-btn.pri { border-width: 2px; }
.sc-head h2 { text-transform: uppercase; letter-spacing: 0.02em; }
.sc-cell h5 { letter-spacing: 0.2em; }
.sc-inp, .sc-ta, .sc-sel-btn { border-width: 2px; border-radius: 0; }
.sc-tbl th { letter-spacing: 0.16em; }
`,
};

export const bauhaus: Paradigm = {
  id: 'bauhaus',
  no: '13',
  name: '包豪斯',
  nameEn: 'Bauhaus',
  tagline: '三原色、圆三角方——形式追随功能的设计原点。',
  origin: '1919 魏玛包豪斯学校 / 构成主义 / 国际主义前身',
  year: '1919 — 1933',
  tags: ['三原色', '几何构成', '功能主义', '非对称'],
  kind: 'paradigm',
  bestFor: ['设计院校与工作室站', '文化机构', '教育产品', '工具类品牌'],
  avoid: ['需要柔软亲切感的母婴/生活类产品', '重运营氛围的电商首页'],
  prompt: `# 设计范式：包豪斯（Bauhaus）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：理性、克制、纪念碑式；像一张 1925 年的展览海报
- 情绪关键词：功能、构成、原色、秩序
- 原则：形式追随功能——每个装饰元素必须同时承担信息或结构职能

## 2. 布局
- 非对称网格：文字块偏左，几何色块偏右，形成张力平衡
- 只用圆、三角、方三种基本形做装饰与图标，不做具象插画
- 粗的水平/垂直分割线（2px 以上）明确分区；允许一条全宽色带压底

## 3. 字体排印
- 标题：几何无衬线（Jost / Futura / Archivo），全大写，48-72px，紧字距
- 正文：同族常规字重 14-16px，行高 1.65，左对齐
- 数字与编号用等宽或表格数字，像图纸标注

## 4. 色彩
- 纸底：暖白 #f4f1ea；墨黑 #14120f
- 三原色只做「面」：红 #d62828、黄 #ffb703、蓝 #1d3557
- 一屏原色不超过三块，且每块面积不等（避免平均分配）

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
- 签名组件：几何序号（■ ● ▲ 对应 01/02/03）与三原色大色块
- 按钮：直角 + 2px 墨边 + 大写；hover 填充红/黄/蓝之一并位移 -2px
- 输入框：直角 + 2px 墨边 + 零圆角；focus 边框变原色蓝
- 下拉框浮层：直角 + 2px 墨边 + 顶部一条原色横带
- 开关：原色轨道上滑动的直角方块
- 表格：2px 黑线全框 + 表头黑底白字
- 几何纪律：圆的归圆、方的归方——每个控件只用一种几何形说话
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：填充三原色之一且位移 -2px，文字转白或转墨
- active：位移归零且阴影消失
- focus-visible：2px 黑色实线框外扩 4px（冷峻、必须清晰）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，140ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（140ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角直角卡片堆叠，无位移仅淡入 0.14s，3s 后直线淡出
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 140ms（几何不允许拖泥带水），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 禁用渐变、投影、毛玻璃；质感来自油墨与纸张
- 可用 repeating-linear-gradient 做细密条纹色带（黑/透明相间）
- 图标一律几何形：圆形、三角、方形及其切割

## 7. 禁忌
- 禁止圆角卡片、柔和阴影、低饱和莫兰迪色
- 禁止具象插画与 emoji 图标
- 禁止把三原色平均涂满（那是儿童玩具，不是包豪斯）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '直角 + 2px 墨边，禁圆角/投影/渐变',
    '三原色做面：红 #d62828 / 黄 #ffb703 / 蓝 #1d3557',
    '圆 / 三角 / 方为唯一装饰语汇',
    '标题全大写、几何无衬线、非对称网格',
  ],
  tokens: {
    colors: [
      { name: '暖白纸', value: '#f4f1ea' },
      { name: '墨黑', value: '#14120f' },
      { name: '包豪斯红', value: '#d62828' },
      { name: '包豪斯黄', value: '#ffb703' },
      { name: '包豪斯蓝', value: '#1d3557' },
    ],
    fonts: [{ role: '标题/正文', stack: '"Jost", "Futura", "PingFang SC", sans-serif' }],
    radius: '全部 0px（直角）',
    shadow: '无',
    extras: [
      { label: '边框', value: '2px solid #14120f' },
      { label: '基本形', value: '● ▲ ■ 及其切割' },
    ],
  },
  demo: {
    height: 1380,
    heightMobile: 1700,
    html: page({
      title: '包豪斯 · Bauhaus',
      fonts: ['Jost:wght@400;500;700;800'],
      css: scCss(theme) + `
body { font-family: "Jost", "PingFang SC", sans-serif; background: #f4f1ea; color: #14120f; padding: 44px 30px 50px; }
.shell { max-width: 1080px; margin: 0 auto; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 36px; }
.brand { display: flex; align-items: center; gap: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; font-size: 15px; }
.brand i { width: 15px; height: 15px; background: #d62828; border-radius: 50%; }
.nav-links span { margin-left: 24px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; cursor: default; }
.hero { position: relative; border: 2px solid #14120f; background: #fffdf8; padding: 54px 48px 44px; overflow: hidden; }
.shapes { position: absolute; top: 0; right: 0; width: 320px; height: 100%; pointer-events: none; }
.circ { position: absolute; top: 44px; right: 44px; width: 132px; height: 132px; border-radius: 50%; background: #d62828; }
.tri { position: absolute; top: 168px; right: 150px; width: 0; height: 0; border-left: 62px solid transparent; border-right: 62px solid transparent; border-bottom: 108px solid #1d3557; }
.sq { position: absolute; top: 250px; right: 52px; width: 84px; height: 84px; background: #ffb703; }
.half { position: absolute; top: 130px; right: 0; width: 132px; height: 66px; border-radius: 132px 0 0 0; background: #ffb703; }
.stripe { position: absolute; left: 0; bottom: 0; width: 100%; height: 12px; background: repeating-linear-gradient(90deg, #14120f 0 12px, transparent 12px 24px); }
.hero .kicker { font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: #d62828; font-weight: 500; }
.hero h1 { font-size: clamp(40px, 5.4vw, 68px); font-weight: 800; text-transform: uppercase; line-height: 1.02; letter-spacing: -0.01em; margin: 14px 0 20px; max-width: 560px; }
.hero h1 .hl { background: #ffb703; padding: 0 12px; display: inline-block; }
.hero p { max-width: 430px; font-size: 15px; line-height: 1.75; color: #3d3a33; }
.hero form { display: flex; gap: 0; margin-top: 28px; max-width: 430px; }
.hero input { flex: 1; font: inherit; font-size: 14px; padding: 12px 14px; background: #fffdf8; border: 2px solid #14120f; outline: none; border-radius: 0; }
.hero input:focus { border-color: #1d3557; }
.hero button { font: inherit; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 22px; background: #d62828; color: #fffdf8; border: 2px solid #14120f; cursor: pointer; }
.hero button:hover { background: #14120f; }
.principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-top: 36px; border: 2px solid #14120f; background: #fffdf8; }
.pr { padding: 24px 26px; }
.pr + .pr { border-left: 2px solid #14120f; }
.pr .fig { font-size: 30px; line-height: 1; margin-bottom: 14px; }
.pr:nth-child(1) .fig { color: #d62828; }
.pr:nth-child(2) .fig { color: #1d3557; }
.pr:nth-child(3) .fig { color: #ffb703; }
.pr h3 { font-size: 16px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
.pr p { font-size: 13px; line-height: 1.7; color: #3d3a33; }
@media (max-width: 760px) {
  .hero { padding: 34px 24px 64px; }
  .shapes { width: 100%; opacity: 0.9; }
  .principles { grid-template-columns: 1fr; }
  .pr + .pr { border-left: 0; border-top: 2px solid #14120f; }
  .hero form { flex-direction: column; }
  .hero button { border-top: 0; }
}`,
      body: `
<div class="shell">
  <nav class="nav">
    <div class="brand"><i></i>Staatliches Bauhaus</div>
    <div class="nav-links"><span>课程</span><span>工坊</span><span>展览</span><span>报名</span></div>
  </nav>
  <section class="hero">
    <div class="shapes"><span class="circ"></span><span class="tri"></span><span class="sq"></span><span class="half"></span></div>
    <div class="kicker">1919 — 1933 · Weimar · Dessau</div>
    <h1>形式<br />追随<span class="hl">功能</span></h1>
    <p>艺术家与工匠之间没有本质区别。我们拆掉风格的围墙，只保留三样东西：圆、三角、方，和一块诚实的颜色。</p>
    <form onsubmit="return false">
      <input type="email" placeholder="留下邮箱，获取工坊日程" />
      <button type="submit">订阅</button>
    </form>
    <div class="stripe"></div>
  </section>
  <section class="principles">
    <div class="pr"><div class="fig">●</div><h3>圆 · 无限</h3><p>没有起点也没有终点，用于承载连续、循环、社群类信息。</p></div>
    <div class="pr"><div class="fig">▲</div><h3>三角 · 方向</h3><p>最稳定的指向，用于行动召唤、流程与导航结构。</p></div>
    <div class="pr"><div class="fig">■</div><h3>方 · 秩序</h3><p>网格的最小单位，一切内容分区都从它开始。</p></div>
  </section>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
