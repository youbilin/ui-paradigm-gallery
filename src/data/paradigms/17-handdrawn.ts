import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const theme = {
  bg: '#fffdf5',
  surface: '#fffef9',
  alt: 'rgba(43, 43, 43, 0.05)',
  text: '#3a3226',
  muted: '#8d8271',
  primary: '#2b2b2b',
  onPrimary: '#fffdf5',
  border: '#3a3226',
  radius: '255px 15px 225px 15px / 15px 225px 15px 255px',
  radiusLg: '18px',
  shadow: '3px 4px 0 rgba(59, 50, 38, 0.16)',
  font: '"Patrick Hand", "Nunito", "PingFang SC", cursive, sans-serif',
  mono: '"Caveat", ui-monospace, cursive',
  ok: '#4a7c59',
  warn: '#c08a2e',
  err: '#c05353',
  info: '#4a6fa5',
  focus: '#4a6fa5',
  extraCss: `
.sc-cell { border-width: 2px; border-radius: 18px 22px 17px 24px; }
.sc-btn { border-width: 2px; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; font-size: 14px; }
.sc-btn.pri { background: #ffe066; color: #3a3226; }
.sc-head h2 { font-family: "Caveat", "Patrick Hand", cursive; font-size: 34px; font-weight: 700; }
.sc-kicker { text-decoration: underline wavy #ff8fa3 2px; text-underline-offset: 4px; }
.sc-inp, .sc-ta, .sc-sel-btn { border-width: 2px; border-radius: 200px 14px 190px 14px / 14px 190px 14px 200px; }
.sc-badge { border: 2px solid #3a3226; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; }
.sc-tag { border-width: 2px; }
.sc-tbl th { letter-spacing: 0.1em; }
`,
};

export const handdrawn: Paradigm = {
  id: 'handdrawn',
  no: '17',
  name: '手绘涂鸦',
  nameEn: 'Hand-drawn',
  tagline: '歪歪扭扭的边框、马克笔高亮、手写便签——像笔记本里的草图。',
  origin: 'Excalidraw / Doodle 风 / 手账与白板文化',
  year: '2020 —',
  tags: ['手写体', '不规则边框', '马克笔', '便签'],
  kind: 'paradigm',
  bestFor: ['笔记与白板工具', '教育产品', '个人博客', '头脑风暴场景'],
  avoid: ['数据密集型后台', '金融交易界面', '需要像素级精确的品牌视觉'],
  prompt: `# 设计范式：手绘涂鸦（Hand-drawn）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：亲切、未完成、像从笔记本里撕下来的草图
- 情绪关键词：手写、涂鸦、便签、马克笔、人情味
- 核心手法：所有「本该笔直」的东西都故意歪一点

## 2. 布局
- 纸张感：米白/纸色底，可叠淡格线（repeating-linear-gradient）
- 分区像贴便签：元素带撕纸感圆角与轻微旋转（-1.5deg ~ 1.5deg）
- 装饰随手画：箭头、星星、圆圈、波浪线、对勾——用 SVG 或 unicode

## 3. 字体排印
- 标题：手写体（Caveat / Patrick Hand / 手书体），32-48px
- 正文：圆润无衬线（Nunito / 思源黑体）13-15px，保证可读性
- 强调用马克笔效果：linear-gradient(transparent 60%, 荧光色 60%) 涂抹

## 4. 色彩
- 纸：#fffdf5；墨：#3a3226（不用纯黑，用暖墨）
- 点缀：马克笔黄 #ffe066、粉 #ff8fa3、蓝 #a0c4ff、绿 #b5e48c
- 彩色只做高亮与重点，不大面积填充

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
- 签名组件：不规则圆角边框（255px 15px 225px 15px / 15px 225px 15px 255px）与手绘对勾
- 按钮：2px 墨边 + 歪 1deg；hover 像被笔划过——填充以 clip-path 推进 0.24s
- 输入框：SVG 抖动路径边框；focus 角落浮现 ✦
- 下拉框浮层：歪纸片 + 手绘边框；选中项画一个潦草的勾（SVG path）
- 表格：略抖的手画格线、行高刻意不均
- 一致性纪律：故意不一致——每个控件歪的角度都不同，但必须是同一支「笔」画的（同一线宽、同一墨色）
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：像被笔划过：底色被涂抹般出现（可用 clip-path 或遮罩推进），0.24s
- active：下移 2px 并略微转正（rotate 归零）
- focus-visible：马克笔虚线框（2px，两侧略歪）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，220ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（220ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角的随手便签，进入时歪着落到页面上，3s 后向上旋转飘走，最多 3 张
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 220ms（故意不均匀：不同元素用 180-320ms 随机值，制造手绘不一致感），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 边框用「双层描边」模拟反复描线（box-shadow 0 0 0 2px + 外扩 3px 的第二条线）
- 分隔线用手绘波浪 SVG path，不用直线
- 阴影是铅笔灰的硬小影（3px 4px 0 rgba(59,50,38,.16)）

## 7. 禁忌
- 禁止完美对称、完美对齐、完美圆角
- 禁止金属/玻璃/霓虹等「机器感」质感
- 禁止细于 1.5px 的线条
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '2px 暖墨边 + 不规则 border-radius + 歪 1deg',
    '手写体标题 + 圆润正文，马克笔涂抹强调',
    '纸色底 #fffdf5 + 荧光点缀（黄/粉/蓝/绿）',
    '手绘对勾、波浪线、箭头装饰',
  ],
  tokens: {
    colors: [
      { name: '纸色', value: '#fffdf5' },
      { name: '暖墨', value: '#3a3226' },
      { name: '马克笔黄', value: '#ffe066' },
      { name: '马克笔粉', value: '#ff8fa3' },
      { name: '马克笔蓝', value: '#a0c4ff' },
    ],
    fonts: [
      { role: '标题', stack: '"Caveat", "Patrick Hand", cursive' },
      { role: '正文', stack: '"Nunito", "PingFang SC", sans-serif' },
    ],
    radius: '不规则手绘圆角',
    shadow: '3px 4px 0 rgba(59,50,38,.16)',
    extras: [
      { label: '边框', value: '2px solid #3a3226' },
      { label: '高亮', value: 'linear-gradient 马克笔涂抹' },
    ],
  },
  demo: {
    height: 1400,
    heightMobile: 1750,
    html: page({
      title: '手绘涂鸦 · Hand-drawn',
      fonts: ['Caveat:wght@600;700', 'Patrick+Hand', 'Nunito:wght@400;600;700'],
      css: scCss(theme) + `
body { font-family: "Patrick Hand", "Nunito", "PingFang SC", cursive, sans-serif; background: #fffdf5; color: #3a3226; padding: 44px 30px 54px; background-image: linear-gradient(rgba(58,50,38,0.05) 1px, transparent 1px); background-size: 100% 28px; }
.shell { max-width: 1060px; margin: 0 auto; position: relative; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.brand { font-family: "Caveat", cursive; font-size: 27px; font-weight: 700; display: flex; align-items: center; gap: 9px; }
.brand .u { text-decoration: underline wavy #ff8fa3 3px; text-underline-offset: 5px; }
.nav-links span { margin-left: 20px; font-size: 15px; cursor: default; color: #6b6252; }
.nav-links span:hover { color: #3a3226; text-decoration: underline wavy #ffe066 2px; text-underline-offset: 4px; }
.hero { position: relative; background: #fffef9; border: 2px solid #3a3226; border-radius: 18px 24px 17px 26px; box-shadow: 3px 4px 0 rgba(59,50,38,.16), 0 0 0 3px #fffef9, 4px 6px 0 rgba(59,50,38,.1); padding: 48px 46px 44px; transform: rotate(-0.5deg); }
.hero .star { position: absolute; top: -16px; right: 40px; font-size: 26px; color: #ffe066; text-shadow: 1px 1px 0 rgba(59,50,38,.2); transform: rotate(12deg); }
.hero .scribble { position: absolute; bottom: 16px; right: 30px; width: 90px; height: 30px; }
.hero h1 { font-family: "Caveat", cursive; font-size: clamp(40px, 5.6vw, 64px); font-weight: 700; line-height: 1.08; margin: 8px 0 16px; max-width: 540px; }
.hero h1 .hl { background: linear-gradient(transparent 62%, #ffe066 62%); padding: 0 5px; }
.hero h1 .cir { border: 2px solid #ff8fa3; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; padding: 0 10px; }
.hero p { max-width: 430px; font-size: 15px; line-height: 1.8; color: #6b6252; }
.cta { display: flex; gap: 14px; margin-top: 26px; flex-wrap: wrap; }
.cta a { font-size: 15px; padding: 11px 24px; border: 2px solid #3a3226; background: #fffef9; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; cursor: pointer; text-decoration: none; color: #3a3226; box-shadow: 3px 4px 0 rgba(59,50,38,.16); transition: transform 0.12s, box-shadow 0.12s, background 0.12s; }
.cta a.pri { background: #ffe066; }
.cta a:hover { transform: translate(-1px, -1px) rotate(-1deg); box-shadow: 4px 5px 0 rgba(59,50,38,.2); }
.cta a:active { transform: translate(2px, 2px); box-shadow: 0 0 0 rgba(59,50,38,.16); }
.notes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 36px; }
.note { background: #fffef9; border: 2px solid #3a3226; padding: 22px 22px 18px; position: relative; }
.note:nth-child(1) { border-radius: 14px 20px 12px 22px; transform: rotate(1deg); }
.note:nth-child(2) { border-radius: 22px 12px 20px 14px; transform: rotate(-1.2deg); }
.note:nth-child(3) { border-radius: 16px 22px 14px 20px; transform: rotate(0.6deg); }
.note::before { content: ""; position: absolute; top: -11px; left: 50%; transform: translateX(-50%) rotate(-3deg); width: 52px; height: 18px; background: rgba(160,196,255,.75); border-radius: 2px; }
.note b { font-family: "Caveat", cursive; font-size: 22px; font-weight: 700; display: block; margin-bottom: 6px; }
.note p { font-size: 13.5px; line-height: 1.75; color: #6b6252; }
.note .tick { color: #4a7c59; font-weight: 700; }
@media (max-width: 760px) {
  .notes { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .hero { padding: 38px 24px 60px; }
}`,
      body: `
<div class="shell">
  <nav class="nav">
    <div class="brand"><span class="u">涂鸦本</span> ✎</div>
    <div class="nav-links"><span>便签</span><span>白板</span><span>手账</span><span>关于</span></div>
  </nav>
  <section class="hero">
    <span class="star">✦</span>
    <div style="font-size:14px;color:#8d8271">～ 来自笔记本第 42 页 ～</div>
    <h1>想法不该<br /><span class="cir">端端正正</span><br />地<span class="hl">长出来</span>。</h1>
    <p>圆规画的圆没有灵魂。歪一点的边框、手写的标题、马克笔划过的高亮——这里的一切都像草稿，因为好想法本来就始于草稿。</p>
    <div class="cta">
      <a class="pri">画一页 →</a>
      <a>借支笔</a>
    </div>
    <svg class="scribble" viewBox="0 0 90 30"><path d="M2 22 Q 20 2 38 18 T 74 14 T 88 20" fill="none" stroke="#ff8fa3" stroke-width="3" stroke-linecap="round" /></svg>
  </section>
  <section class="notes">
    <div class="note"><b>① 撕张便签</b><p>每个分区都是一张便签：胶带贴着，边角翘起，字迹潦草但认真。</p></div>
    <div class="note"><b>② 画个箭头</b><p>指引不用规规矩矩的图标，一根手绘箭头就够了 <span class="tick">✓</span></p></div>
    <div class="note"><b>③ 涂亮重点</b><p>马克笔横扫过关键词——像小学生划重点那样直接。</p></div>
  </section>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
