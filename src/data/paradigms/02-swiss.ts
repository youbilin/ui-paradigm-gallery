import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#ffffff",
  "surface": "#ffffff",
  "alt": "rgba(17,17,17,0.05)",
  "text": "#111111",
  "muted": "#777777",
  "primary": "#e30613",
  "onPrimary": "#ffffff",
  "border": "#111111",
  "radius": "0px",
  "radiusLg": "0px",
  "shadow": "none",
  "font": "Helvetica, Arial, \"PingFang SC\", sans-serif",
  "mono": "ui-monospace, \"SF Mono\", Consolas, monospace",
  "ok": "#111111",
  "warn": "#e30613",
  "err": "#e30613",
  "info": "#111111",
  "focus": "#e30613",
  "extraCss": ".sc-btn{text-transform:uppercase;letter-spacing:0.1em;border-width:1.5px;border-radius:0;}.sc-cell{border-radius:0;}.sc-inp,.sc-ta,.sc-sel-btn{border-radius:0;}.sc-head h2{text-transform:uppercase;letter-spacing:-0.01em;}"
};

export const swiss: Paradigm = {
  id: 'swiss',
  no: '02',
  name: '瑞士国际主义',
  nameEn: 'Swiss Style',
  tagline: '网格即真理：Helvetica、红与黑、左对齐的锋利层次。',
  origin: 'Müller-Brockmann / 1950s 苏黎世派',
  year: '1950s —',
  tags: ['网格', 'Helvetica', '红黑', '海报感'],
  bestFor: ['作品集首页', '展览/活动页', '强立场的内容站'],
  avoid: ['购物类重交互', '可爱/亲和向产品'],
  prompt: `# 设计范式：瑞士国际主义（Swiss / International Typographic Style）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：客观、理性、锋利；设计让位于信息本身
- 情绪关键词：秩序、克制、经典、现代主义

## 2. 布局
- 严格 12 列网格，所有元素贴齐网格线；页边距 48-64px
- 大字号反差制造层级：标题与正文字号比至少 4:1
- 左对齐（flush left / ragged right）为主，仅仪式性元素居中
- 用 1px 黑线（而非卡片和阴影）分割信息；线即边框

## 3. 字体排印
- 字体：Helvetica Neue / Helvetica / Inter / Arial，全场无衬线
- 标题 64-120px、字重 700、字距 -0.02em、行高 1.0-1.1
- 小标签：11-12px 大写 + letter-spacing 0.12em
- 正文 13-15px、行高 1.6、多栏时间距 24px 以上并加栏间线

## 4. 色彩
- 只有三色：纸白 #ffffff、墨黑 #111111、信号红 #e30613
- 红色只用于一个焦点（一个词、一块、一条线），面积不超过 5%
- 灰阶仅用于图片占位与极次要信息

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
- 签名组件：编号系统——每个组件/区块带 01/02/03 编号或红色 4px 方块坐标记号
- 按钮：矩形黑块白字，hover 仅黑→红换色（零位移零缩放），像换了一页印刷
- 输入框：只有底部 1.5px 黑线 + 10px 大写宽字距标签；聚焦线变红变粗
- 下拉框浮层：直角、1.5px 黑边、零阴影零圆角——纯线框，像表格的延伸
- 开关：禁止拟物滑块——用 [ 开 ] [ 关 ] 文字按钮 + 红色实心方块指示当前项
- 表格：上下 1.5px 黑线夹表头、行线 0.5px、数字右对齐——报纸行情栏的味道
- 分隔：1.5px 横贯线 + 红色 4px 竖条是唯二装饰
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：颜色反转（黑↔白 / 白↔红），不做位移不做缩放
- active：色块再反转半档或不变化，仅 keyboard 态切换
- focus-visible：1.5px 红色实线框外扩 3px，不允许浏览器中默认的虚蓝圈；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，120ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（120ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角堆叠的黑色直角信息条，无入场位移，直接出现并在 3s 后直线淡出
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 120ms（瑞士摈弃多余动效，能不做就不做），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 零圆角（或 2px 以内）、零阴影、零渐变
- 大量留白与密排文字并置，制造张力
- 竖排或大角度旋转文字仅作一处点睛

## 7. 禁忌
- 禁止渐变、圆角卡片、阴影、玻璃拟态
- 禁止居中大标题Hero、禁止装饰性插画、禁止超过三种颜色
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '12 列网格贴齐，1px 黑线分割，零圆角零阴影',
    '标题 64-120px / 700 / -0.02em，左对齐',
    '三色系统：纸白 / 墨黑 / 信号红（红 ≤5% 面积）',
    '编号 01 02 03 + 小标签大写宽字距',
  ],
  tokens: {
    colors: [
      { name: '纸白', value: '#ffffff' },
      { name: '墨黑', value: '#111111' },
      { name: '信号红', value: '#e30613' },
      { name: '占位灰', value: '#d9d9d9' },
    ],
    fonts: [{ role: '全场', stack: '"Helvetica Neue", Helvetica, Inter, Arial, "PingFang SC", sans-serif' }],
    radius: '0-2px',
    shadow: '无',
    extras: [
      { label: '网格', value: '12 列 / 间距 24px' },
      { label: '分割线', value: '1px solid #111' },
    ],
  },
  demo: {
    height: 1710,
    heightMobile: 2580,
    html: page({
      title: '瑞士国际主义 · Swiss Style',
      css: scCss(scTheme) + `
body {
  font-family: "Helvetica Neue", Helvetica, Inter, Arial, "PingFang SC", "Hiragino Sans GB", sans-serif;
  background: #fff; color: #111; padding: 44px 52px 40px;
}
.shell { max-width: 1120px; margin: 0 auto; }
.topbar { display: flex; justify-content: space-between; align-items: baseline; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
.topbar .no { color: #e30613; }
.rule { border: none; border-top: 1px solid #111; margin: 14px 0 0; }
.hero { display: grid; grid-template-columns: 12fr 5fr; gap: 48px; padding: 56px 0 48px; position: relative; }
.eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 20px; }
.eyebrow em { font-style: normal; color: #e30613; }
h1 { font-size: 108px; font-weight: 700; letter-spacing: -0.03em; line-height: 0.98; }
h1 .red { color: #e30613; }
.en { margin-top: 22px; font-size: 15px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.hero-side { border-left: 1px solid #111; padding-left: 28px; display: flex; flex-direction: column; justify-content: space-between; }
.hero-side p { font-size: 13px; line-height: 1.75; }
.hero-side p + p { margin-top: 14px; }
.figure { background: #d9d9d9; aspect-ratio: 4 / 3; display: flex; align-items: center; justify-content: center; }
.figure svg { width: 44px; height: 44px; }
.cols { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #111; }
.col { padding: 26px 26px 30px; font-size: 12.5px; line-height: 1.8; }
.col + .col { border-left: 1px solid #111; }
.col h3 { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; }
.col p + p { margin-top: 10px; }
.bottom { display: grid; grid-template-columns: 5fr 7fr; border-top: 1px solid #111; }
.big-no { font-size: 150px; font-weight: 700; line-height: 1; letter-spacing: -0.04em; padding: 24px 32px 8px 0; }
.big-no span { color: #e30613; }
.meta { border-left: 1px solid #111; padding: 26px 0 26px 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 22px; align-content: start; }
.meta h4 { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #111; margin-bottom: 6px; }
.meta p { font-size: 12.5px; line-height: 1.7; }
footer { display: flex; justify-content: space-between; border-top: 1px solid #111; margin-top: 0; padding: 16px 0 0; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
@media (max-width: 860px) {
  body { padding: 28px 22px; }
  h1 { font-size: 52px; }
  .hero { grid-template-columns: 1fr; gap: 28px; }
  .hero-side { border-left: none; border-top: 1px solid #111; padding: 22px 0 0; }
  .cols { grid-template-columns: 1fr; }
  .col + .col { border-left: none; border-top: 1px solid #111; }
  .bottom { grid-template-columns: 1fr; }
  .big-no { font-size: 88px; padding-right: 0; }
  .meta { border-left: none; border-top: 1px solid #111; padding: 22px 0 4px; grid-template-columns: 1fr; }
}`,
      body: `
<div class="shell">
  <div class="topbar"><span>Neue Grafik · 新平面</span><span class="no">№ 04 — 2026</span></div>
  <hr class="rule" />
  <section class="hero">
    <div>
      <div class="eyebrow">瑞士国际主义 <em>/ Swiss Style</em></div>
      <h1>网格<br />即<span class="red">真理</span></h1>
      <div class="en">Form follows function — Zürich, 1958</div>
    </div>
    <div class="hero-side">
      <div>
        <p>客观性是这套方法的核心：设计师不表达自我，而是让信息以最高的清晰度被看见。</p>
        <p>网格不是限制，而是让复杂内容获得秩序的脚手架。留白与密排的并置，制造阅读的张力。</p>
      </div>
      <div class="figure">
        <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1">
          <rect x="2" y="2" width="20" height="20" />
          <path d="M2 9h20M2 15h20M9 2v20M15 2v20" />
        </svg>
      </div>
    </div>
  </section>
  <section class="cols">
    <div class="col">
      <h3>01 / 网格</h3>
      <p>十二列网格，贴齐是纪律。任何元素的边界都必须落在网格线上，没有例外。</p>
      <p>栏间距 24px，页边距 52px。页面即系统。</p>
    </div>
    <div class="col">
      <h3>02 / 字体</h3>
      <p>Helvetica 一种字体承担全部层级。字号与字重的反差代替装饰。</p>
      <p>左对齐、右不齐。小标签大写、宽字距，作为呼吸的标点。</p>
    </div>
    <div class="col">
      <h3>03 / 色彩</h3>
      <p>纸白、墨黑、信号红。红色是标点，不是装饰——全场只出现一次。</p>
      <p>没有渐变，没有阴影，没有第四种颜色。</p>
    </div>
  </section>
  <section class="bottom">
    <div class="big-no">0<span>4</span></div>
    <div class="meta">
      <div><h4>本期主题</h4><p>秩序的复归：当信息过载时，网格是最温和的答案。</p></div>
      <div><h4>展期</h4><p>2026.11.01 — 12.15<br />周二至周日 10:00 — 18:00</p></div>
      <div><h4>地点</h4><p>上海 · 西岸艺术中心 B2 展厅</p></div>
      <div><h4>票务</h4><p>预约免费 · 现场 ￥60</p></div>
    </div>
  </section>
  <footer><span>Paradigm Hall</span><span>Print · Web · Grid</span></footer>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
