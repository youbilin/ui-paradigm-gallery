import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#faf7f2",
  "surface": "#fffdf8",
  "alt": "rgba(26,26,26,0.04)",
  "text": "#1a1a1a",
  "muted": "#6b675f",
  "primary": "#1a1a1a",
  "onPrimary": "#faf7f2",
  "border": "rgba(26,26,26,0.2)",
  "radius": "2px",
  "radiusLg": "4px",
  "shadow": "none",
  "font": "Georgia, \"Times New Roman\", \"Songti SC\", \"SimSun\", serif",
  "mono": "Georgia, \"Songti SC\", serif",
  "ok": "#4a7c59",
  "warn": "#a6761d",
  "err": "#8b2e2e",
  "info": "#4a5d6b",
  "focus": "#8b2e2e",
  "extraCss": ".sc-head h2{font-weight:400;font-style:italic;letter-spacing:0.01em;}.sc-cell{border-radius:2px;}.sc-btn{border-radius:2px;font-family:inherit;}.sc-inp,.sc-ta,.sc-sel-btn{border-radius:2px;font-family:inherit;}.sc-badge{border-radius:2px;}"
};

export const editorial: Paradigm = {
  id: 'editorial',
  no: '05',
  name: '杂志编辑风',
  nameEn: 'Editorial',
  tagline: '衬线大标题、首字下沉、Pull quote——把网页当杂志排版。',
  origin: '印刷杂志 / The New Yorker / 独立媒体',
  year: '常青',
  tags: ['衬线', '分栏', '首字下沉', '书卷气'],
  bestFor: ['长文阅读', '品牌故事', '新闻/专栏', '作品集文字页'],
  avoid: ['工具型产品', '重表格后台'],
  prompt: `# 设计范式：杂志编辑风（Editorial）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：书卷气、慢节奏、印刷品的从容；网页是「一期杂志」而不是「一个仪表盘」
- 情绪关键词：优雅、可信、深度、安静

## 2. 布局
- 正文单栏 max-width 680-760px，行宽 65-75 字符；通栏图与引语可破栏
- 刊头（报头）：刊名 + 期号 + 日期，上下用双线框住
- 段落间距 20-28px，章节间用花饰或编号分隔，不用卡片
- 多栏仅用于短内容块（2-3 栏，栏间 1px 细线）

## 3. 字体排印
- 标题：衬线展示体（Playfair Display / Fraunces / Noto Serif SC），40-64px、700、行高 1.1
- 正文：衬线体 15-16px、行高 1.8-1.9；导语（dek）17-19px 浅一号
- 首字下沉：首段首字母 3-4 行高、左浮动
- 图注：12px 无衬线灰色；署名：11px 大写 + 宽字距

## 4. 色彩
- 纸色 #faf7f2 / 墨色 #1a1a1a / 次文 #6b675f
- 单一强调色（深红 #8b2e2e 或藏蓝），只用于链接、引号、编号

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
- 签名组件：首字下沉（drop cap 2-3 行高）与栏目编号（壹 / 贰 / 叁）、花饰分隔 ❧
- 按钮：墨色矩形实底白字、大写 0.06em 字距；hover 黑白反转；绝无圆角与阴影
- 输入框：仅 1px 底线 + 衬线斜体标签；聚焦线变 2px 朱红
- 下拉框浮层：白纸直角 + 1px 墨线 + 行间 1px 分隔线，选项用衬线体——像目录页
- 开关：竖线分隔的「开 ｜ 关」文字，当前项黑体
- 引文：pull quote 上下 1px 细线 + 24-28px 衬线 + 「」引号
- 表格：表头上下双线、行线单线、衬线表头，像书末附录
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：色块反转（墨底白字 ↔ 白底墨字），0.18s，不做位移
- active：下沉 1px 内凹线
- focus-visible：1px 墨色虚线框，紧贴元素不外扩；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，180ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（180ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角墨色方块（白字），打字机式逐字淡入 0.24s，停留 3s 后整块淡出
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 180ms（翻页式动作可到 300ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 纸感底色（微暖灰白），可用极淡的噪点纹理
- 大量留白：页边距 48px+，段间呼吸 24px+
- 数字用旧式字体（如果可用），标点用全角

## 7. 禁忌
- 禁止卡片化、圆角 >4px、阴影、渐变
- 禁止 emoji、禁止荧光色、禁止居中大按钮 Hero
- 禁止一栏到底的密排：必须有引语、图注、栏线等节奏点
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '正文单栏 680-760px，行宽 65-75 字符',
    '衬线标题 40-64px + 首字下沉 + pull quote',
    '纸色底 / 墨字 / 单一深色强调；零圆角零阴影',
    '刊头双线 + 编号图注 + 花饰分隔的印刷节奏',
  ],
  tokens: {
    colors: [
      { name: '纸色', value: '#faf7f2' },
      { name: '墨色', value: '#1a1a1a' },
      { name: '次文', value: '#6b675f' },
      { name: '强调', value: '#8b2e2e' },
      { name: '栏线', value: '#d8d2c4' },
    ],
    fonts: [
      { role: '标题', stack: '"Playfair Display", "Noto Serif SC", "Songti SC", serif' },
      { role: '正文', stack: '"Noto Serif SC", Georgia, "Songti SC", serif' },
    ],
    radius: '0-4px',
    shadow: '无',
    extras: [{ label: '正文行高', value: '1.8-1.9' }],
  },
  demo: {
    height: 1850,
    heightMobile: 2680,
    html: page({
      title: '杂志编辑风 · Editorial',
      fonts: [
        'Playfair+Display:ital,wght@0,600;0,800;1,500',
        'Noto+Serif+SC:wght@400;500;700',
      ],
      css: scCss(scTheme) + `
body {
  font-family: "Noto Serif SC", Georgia, "Songti SC", "SimSun", serif;
  background: #faf7f2; color: #1a1a1a; padding: 52px 28px 44px;
}
.sheet { max-width: 780px; margin: 0 auto; }
.masthead { display: flex; align-items: baseline; justify-content: space-between; padding-bottom: 12px; }
.masthead .title { font-family: "Playfair Display", "Noto Serif SC", serif; font-weight: 800; font-size: 26px; letter-spacing: 0.22em; }
.masthead .issue { font-size: 11px; letter-spacing: 0.14em; color: #6b675f; }
.rule-double { border: none; border-top: 3px double #1a1a1a; margin: 0 0 6px; }
.rule-thin { border: none; border-top: 1px solid #1a1a1a; margin: 0 0 40px; }
.kicker { font-size: 11px; letter-spacing: 0.2em; color: #8b2e2e; margin-bottom: 18px; }
h1 { font-family: "Playfair Display", "Noto Serif SC", serif; font-weight: 800; font-size: 56px; line-height: 1.12; letter-spacing: -0.01em; }
.dek { font-size: 18px; line-height: 1.75; color: #4a463f; margin: 20px 0 22px; max-width: 640px; }
.byline { display: flex; gap: 18px; font-size: 11px; letter-spacing: 0.12em; color: #6b675f; text-transform: uppercase; border-top: 1px solid #d8d2c4; border-bottom: 1px solid #d8d2c4; padding: 10px 0; margin-bottom: 36px; }
.byline b { color: #1a1a1a; font-weight: 500; }
.prose p { font-size: 15.5px; line-height: 1.95; margin-bottom: 24px; }
.prose p:first-of-type::first-letter {
  float: left; font-family: "Playfair Display", serif; font-size: 66px; line-height: 0.82;
  padding: 6px 12px 0 0; color: #8b2e2e; font-weight: 800;
}
.prose a { color: #8b2e2e; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
blockquote {
  margin: 40px auto; padding: 26px 0; border-top: 1px solid #1a1a1a; border-bottom: 1px solid #1a1a1a;
  text-align: center; font-size: 25px; line-height: 1.6; max-width: 560px;
}
blockquote cite { display: block; font-size: 12px; letter-spacing: 0.14em; color: #6b675f; margin-top: 14px; font-style: normal; }
figure { margin: 36px 0; }
figure .ph { aspect-ratio: 16 / 8; background: linear-gradient(120deg, #d9d2c3, #c8bfa9 55%, #b3a888); }
figcaption { font-size: 12px; color: #6b675f; margin-top: 10px; letter-spacing: 0.02em; }
figcaption b { color: #8b2e2e; font-weight: 500; margin-right: 8px; }
.cols2 { columns: 2; column-gap: 36px; column-rule: 1px solid #d8d2c4; font-size: 14.5px; line-height: 1.9; }
.cols2 p { margin-bottom: 18px; }
.endmark { text-align: center; color: #8b2e2e; font-size: 18px; margin: 36px 0 8px; }
footer { display: flex; justify-content: space-between; border-top: 3px double #1a1a1a; margin-top: 28px; padding-top: 12px; font-size: 11px; letter-spacing: 0.14em; color: #6b675f; }
@media (max-width: 720px) {
  h1 { font-size: 38px; }
  .cols2 { columns: 1; column-rule: none; }
  blockquote { font-size: 20px; }
  .dek { font-size: 16px; }
}`,
      body: `
<article class="sheet">
  <header class="masthead">
    <div class="title">读 栈</div>
    <div class="issue">第 04 期 · 2026 年秋 · 上海</div>
  </header>
  <hr class="rule-double" /><hr class="rule-thin" />
  <div class="kicker">封面故事 · COVER STORY</div>
  <h1>当所有 AI 都写出<br />同一个网页</h1>
  <p class="dek">靛蓝渐变、三等分卡片、rounded-2xl——我们得到了前所未有的效率，也失去了前所未有的多样性。这场「中位数审美」的困境，也许要靠一本「范式图鉴」来解。</p>
  <div class="byline"><span>撰文 <b>沈一白</b></span><span>摄影 <b>阿 弥</b></span><span>阅读约 8 分钟</span></div>
  <div class="prose">
    <p>凌晨两点，第三十次刷新生成结果之后，我终于确认了一件事：我和我的 AI，陷入了同一种审美。它给出的页面总是那么「正确」——居中的大标题、紫蓝渐变的关键词、三张带阴影的圆角卡片，像一份被无数人抄过标准答案的考卷。</p>
    <p>问题不出在模型不够聪明，而出在我们从未告诉它「要成为谁」。当我们只说「做一个落地页」时，它只能从训练数据里取平均值；而平均值，注定平庸。设计史早就给过答案：每个有生命力的视觉体系，都从一句明确的范式宣言开始——「形式追随功能」、「少即是多」、「装饰即罪恶」。</p>
    <blockquote>没有范式，就没有分歧；没有分歧，就没有品味。<cite>—— 本期编者</cite></blockquote>
    <p>于是有了这本图鉴。我们收集了二十种依然鲜活的 UI 范式，从 1950 年代的瑞士网格到 2020 年代的赛博朋克与黏土拟态。每一种都配有一份可以直接交给 AI 的提示词，和一份真实的渲染效果。你不必成为设计师，你只需要会挑选、会下指令。</p>
    <figure>
      <div class="ph"></div>
      <figcaption><b>图 01</b>网格、字体与色彩：范式的三根支柱。摄于西岸档案馆。</figcaption>
    </figure>
    <div class="cols2">
      <p>把范式写进提示词，本质上是一次审美的「定向变异」。AI 不再向平均数回归，而是沿着你指定的光谱展开。</p>
      <p>这也是为什么我们坚持「提示词与效果必须成对出现」：没有效果验证的提示词只是口号，没有提示词的效果只是孤品。</p>
      <p>翻到下一页之前，请先回答一个问题：你希望你的产品，被记住成什么样子？</p>
    </div>
  </div>
  <div class="endmark">❧</div>
  <footer><span>读栈 · READSTACK</span><span>下期预告：范式的终结？</span></footer>
</article>${scHtml()}`,
      js: scJs(),
    }),
  },
};
