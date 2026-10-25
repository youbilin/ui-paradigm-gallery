import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const theme = {
  bg: '#f5f1e6',
  surface: '#fbf8f0',
  alt: 'rgba(44, 42, 38, 0.05)',
  text: '#2c2a26',
  muted: '#857f72',
  primary: '#a63a2b',
  onPrimary: '#fbf8f0',
  border: 'rgba(44, 42, 38, 0.24)',
  radius: '2px',
  radiusLg: '3px',
  shadow: 'none',
  font: '"Noto Serif SC", "Songti SC", "SimSun", serif',
  mono: '"Noto Serif SC", "Songti SC", serif',
  ok: '#3f5b45',
  warn: '#a6761d',
  err: '#a63a2b',
  info: '#4a5d6b',
  focus: '#4a5d6b',
  extraCss: `
.sc-cell { box-shadow: none; }
.sc-head h2 { font-weight: 600; letter-spacing: 0.14em; }
.sc-kicker { color: #a63a2b; }
.sc-btn { border-radius: 2px; letter-spacing: 0.22em; font-size: 12.5px; padding: 9px 18px; }
.sc-btn.pri { background: #a63a2b; }
.sc-inp, .sc-ta, .sc-sel-btn { border-radius: 2px; background: #f5f1e6; font-family: "Noto Serif SC", serif; }
.sc-cell h5 { letter-spacing: 0.3em; }
.sc-badge { border-radius: 2px; letter-spacing: 0.14em; border: 1px solid rgba(44,42,38,.3); }
.sc-tag { border-radius: 2px; letter-spacing: 0.1em; }
.sc-tbl th { letter-spacing: 0.24em; }
.sc-ava { border-radius: 2px; font-family: "Noto Serif SC", serif; }
.sc-modal-box h4 { font-weight: 600; letter-spacing: 0.08em; }
`,
};

export const orientalInk: Paradigm = {
  id: 'oriental-ink',
  no: '20',
  name: '新中式',
  nameEn: 'Oriental Ink',
  tagline: '宣纸、竖排、朱砂印——留白处的东方秩序。',
  origin: '宋式美学 / 民国书籍装帧 / 当代东方设计复兴',
  year: '宋 —',
  tags: ['宣纸', '竖排', '朱砂', '留白'],
  kind: 'paradigm',
  bestFor: ['茶/香/文创品牌', '文化机构', '地产与酒店', '节庆营销'],
  avoid: ['工具型后台', '强互动游戏化产品', '信息极密集的仪表盘'],
  prompt: `# 设计范式：新中式（Oriental Ink）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：宣纸上的宋版书；静、留白、有呼吸的秩序感
- 情绪关键词：水墨、朱砂、竖排、窗棂、间（负空间）
- 原则：少即是多，且每一个出现的元素都要「站得住」

## 2. 布局
- 大留白：内容区不超过屏宽 60%，分区之间用「间」而不是线
- 标题可竖排（writing-mode: vertical-rl），从右往左读，配朱砂印章
- 分隔用 0.5-1px 细线 + 两端留白，或用窗棂格纹（repeating-linear-gradient）
- 整体允许非对称：一侧重墨，一侧大量空白

## 3. 字体排印
- 标题：宋体/思源宋体（Noto Serif SC）600 字重，24-40px，字距放宽 0.1em
- 正文：同族常规字重 14-15px，行高 1.9，段首可不缩进但段间距加大
- 装饰：书法体（Ma Shan Zheng）只用于单字或短语，不大段使用

## 4. 色彩
- 底：宣纸 #f5f1e6；墨 #2c2a26（不用纯黑）
- 朱砂 #a63a2b 只做印章与关键强调；青灰 #8a9a8f 做次级信息
- 全场饱和度压到最低，彩色面积不超过 5%

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
- 签名组件：朱砂方印（28-34px、2px 朱框、noise 遮罩做残缺边）与竖排标签（writing-mode: vertical-rl）
- 按钮：1px 细墨边 + 宽字距；hover 以 0.28s 缓慢「填墨」反转，像墨漫过来
- 输入框：仅 border-bottom 细线；focus 线变朱砂色
- 下拉框浮层：宣纸色 + 1px 墨线；选项 hover 淡墨晕染（radial 扩散）
- 开关：印章式阴刻 / 阳刻切换
- 表格：细横线、无竖线、表头小字宽字距
- 留白纪律：版面留白 ≥ 40%，动效一律 300ms 起、宁慢勿快
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：墨色填充反转（笔画感的填色，可用 0.28s 的缓慢填「墨」）
- active：墨色加深 + 内容下沉 1px
- focus-visible：朱砂 1px 细线框（不用虚线，不用 glow）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，300ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（300ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角宣纸小条，缓慢淡入 0.4s、停留 4s、缓慢淡出 0.4s（比其他范式慢）
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 300ms（留白与呼吸都属于韵味，动作宁慢勿快），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 纸纹：极淡的噪点（SVG feTurbulence 或 repeating 渐变，opacity ≤ 0.04）
- 水墨晕染：radial-gradient 做一两团淡墨，位置必须克制
- 印章：24-32px 朱砂方块，内白字（篆/楷），可微旋转 2deg
- 动效：慢（0.3s+）、淡入淡出，禁弹跳

## 7. 禁忌
- 禁止高饱和撞色、霓虹、粗黑边、硬投影
- 禁止圆角胶囊按钮、玻璃拟态、渐变紫
- 禁止把书法体当正文、把汉字当装饰花纹乱铺
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '宣纸底 #f5f1e6 + 墨 #2c2a26，禁纯黑',
    '朱砂 #a63a2b 只做印章与强调（≤5% 面积）',
    '竖排标题 + 大留白 + 0.5px 细线分区',
    '按钮细墨边宽字距，hover 墨色反转',
  ],
  tokens: {
    colors: [
      { name: '宣纸', value: '#f5f1e6' },
      { name: '松烟墨', value: '#2c2a26' },
      { name: '朱砂', value: '#a63a2b' },
      { name: '青灰', value: '#8a9a8f' },
      { name: '檀色', value: '#8a6d5c' },
    ],
    fonts: [
      { role: '标题', stack: '"Noto Serif SC", "Songti SC", serif' },
      { role: '装饰', stack: '"Ma Shan Zheng", "KaiTi", cursive' },
    ],
    radius: '0-2px（直角为美）',
    shadow: '无',
    extras: [
      { label: '边框', value: '0.5-1px solid rgba(44,42,38,.24)' },
      { label: '纸纹', value: 'feTurbulence opacity ≤ .04' },
    ],
  },
  demo: {
    height: 1420,
    heightMobile: 1780,
    html: page({
      title: '新中式 · Oriental Ink',
      fonts: ['Noto+Serif+SC:wght@400;500;600;700', 'Ma+Shan+Zheng'],
      css: scCss(theme) + `
body { font-family: "Noto Serif SC", "Songti SC", "SimSun", serif; background: #f5f1e6; color: #2c2a26; padding: 48px 40px 54px; }
body::before { content: ""; position: fixed; inset: 0; pointer-events: none; opacity: .035;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E"); }
.shell { max-width: 1080px; margin: 0 auto; position: relative; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 44px; }
.brand { font-size: 16px; font-weight: 600; letter-spacing: 0.3em; display: flex; align-items: center; gap: 12px; }
.brand .seal { width: 26px; height: 26px; background: #a63a2b; color: #fbf8f0; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-family: "Ma Shan Zheng", "KaiTi", cursive; transform: rotate(-2deg); }
.nav-links span { margin-left: 26px; font-size: 13px; letter-spacing: 0.2em; color: #857f72; cursor: default; }
.nav-links span:hover { color: #2c2a26; }
.hero { display: grid; grid-template-columns: 1fr auto; gap: 50px; align-items: start; }
.hero .left { max-width: 560px; }
.hero .vtitle { writing-mode: vertical-rl; font-size: 40px; font-weight: 600; letter-spacing: 0.34em; line-height: 1.5; height: 300px; border-right: 1px solid rgba(44,42,38,.2); padding-right: 26px; }
.hero .vtitle i { font-style: normal; color: #a63a2b; }
.hero .kicker { font-size: 12px; letter-spacing: 0.4em; color: #a63a2b; margin-bottom: 18px; }
.hero h1 { font-size: clamp(30px, 3.6vw, 44px); font-weight: 600; line-height: 1.5; letter-spacing: 0.08em; margin: 0 0 22px; }
.hero p { font-size: 14.5px; line-height: 2.1; color: #57534a; max-width: 440px; }
.hero .cta { display: flex; gap: 16px; margin-top: 30px; }
.hero .cta a { font-size: 12.5px; letter-spacing: 0.28em; padding: 10px 22px; border: 1px solid rgba(44,42,38,.45); color: #2c2a26; cursor: pointer; text-decoration: none; background: transparent; transition: all .25s; }
.hero .cta a.pri { background: #2c2a26; color: #f5f1e6; border-color: #2c2a26; }
.hero .cta a:hover { background: #a63a2b; border-color: #a63a2b; color: #fbf8f0; }
.rule { display: flex; align-items: center; gap: 16px; margin: 46px 0 30px; }
.rule::before, .rule::after { content: ""; height: 1px; background: rgba(44,42,38,.24); flex: 1; }
.rule span { font-size: 11px; letter-spacing: 0.4em; color: #857f72; }
.cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
.col { padding: 4px 30px; }
.col + .col { border-left: 1px solid rgba(44,42,38,.16); }
.col b { display: block; font-size: 15px; font-weight: 600; letter-spacing: 0.2em; margin-bottom: 12px; }
.col p { font-size: 13px; line-height: 2.05; color: #57534a; }
.col .ink { font-family: "Ma Shan Zheng", "KaiTi", cursive; font-size: 24px; color: #a63a2b; display: block; margin-bottom: 10px; }
@media (max-width: 760px) {
  .hero { grid-template-columns: 1fr; }
  .hero .vtitle { writing-mode: horizontal-tb; height: auto; border-right: 0; border-bottom: 1px solid rgba(44,42,38,.2); padding: 0 0 18px; }
  .cols { grid-template-columns: 1fr; }
  .col + .col { border-left: 0; border-top: 1px solid rgba(44,42,38,.16); margin-top: 22px; padding-top: 22px; }
  .nav-links { display: none; }
}`,
      body: `
<div class="shell">
  <nav class="nav">
    <div class="brand"><span class="seal">印</span>松 雪 堂</div>
    <div class="nav-links"><span>茶事</span><span>器物</span><span>书画</span><span>访客</span></div>
  </nav>
  <section class="hero">
    <div class="left">
      <div class="kicker">宋 式 美 学 · 现 代 译 解</div>
      <h1>留白处，<br />自有山河。</h1>
      <p>不堆砌，不喧哗。一炉香、一笺纸、一方朱印——设计的要务不是填满屏幕，而是给「间」留出位置。少一点，但每一处都站得住。</p>
      <div class="cta">
        <a class="pri">预 约 茶 事</a>
        <a>访 客 须 知</a>
      </div>
    </div>
    <div class="vtitle">万 象 <i>·</i> 归 一</div>
  </section>
  <div class="rule"><span>◇ 堂 内 三 则 ◇</span></div>
  <section class="cols">
    <div class="col"><span class="ink">静</span><b>以静制动</b><p>动效要慢，颜色要淡。界面应当像一间安静的茶室，而不是一块广告牌。</p></div>
    <div class="col"><span class="ink">简</span><b>以简驭繁</b><p>一像素的线、一个字距的呼吸，胜过十种装饰。信息分级靠留白完成。</p></div>
    <div class="col"><span class="ink">真</span><b>以真为贵</b><p>材质只说纸墨：宣纸的纹、松烟的墨、朱砂的点。拒绝一切塑料感。</p></div>
  </section>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
