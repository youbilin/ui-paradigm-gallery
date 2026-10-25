import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import { specSection } from './prompt-spec';
import type { Paradigm } from './types';

const scTheme = {
  bg: '#efe4c8',
  surface: '#f3ead2',
  alt: 'rgba(42,33,24,0.07)',
  text: '#2a2118',
  muted: '#8a7a5c',
  primary: '#a02c2c',
  onPrimary: '#f3ead2',
  border: 'rgba(42,33,24,0.5)',
  radius: '0px',
  radiusLg: '0px',
  shadow: '0 2px 8px rgba(42,33,24,0.18)',
  font: '"EB Garamond","Noto Serif SC","Songti SC",serif',
  mono: '"EB Garamond",Georgia,serif',
  ok: '#5c6e3a',
  warn: '#b8892f',
  err: '#a02c2c',
  info: '#24365e',
  focus: '#b8892f',
  extraCss: `
.sc-root{border:2px solid #b8892f;}
.sc-cell{border:1px solid rgba(184,137,47,.65);border-radius:0;}
.sc-cell h5{font-variant:small-caps;letter-spacing:.12em;color:#b8892f;}
.sc-btn{border-radius:0;border:1px solid #b8892f;font-variant:small-caps;letter-spacing:.08em;}
.sc-btn.pri{background:#a02c2c;border-color:#a02c2c;color:#f3ead2;}
.sc-inp,.sc-ta,.sc-sel-btn{border-radius:0;border:1px solid rgba(42,33,24,.5);}
.sc-seg,.sc-sel-list,.sc-menu-list,.sc-sug,.sc-modal-box,.sc-alert,.sc-toast{border-radius:0;}
.sc-badge,.sc-tag{border-radius:0;}
.sc-step .no,.sc-ava,.sc-ava .dot{border-radius:0;}
.sc-tbl th{font-variant:small-caps;letter-spacing:.1em;color:#a02c2c;}`,
};

export const gothicManuscript: Paradigm = {
  id: 'gothic-manuscript',
  no: '26',
  name: '哥特手抄本',
  nameEn: 'Gothic Manuscript',
  tagline: '黑体字、泥金首字母、朱砂批注——界面是一页被抄写员装饰过的羊皮纸。',
  origin: '泥金装饰手抄本 /《凯尔经》/ 古腾堡四十二行圣经',
  year: '12 — 15 世纪',
  tags: ['黑体字', '泥金', '羊皮纸', '花体首字'],
  bestFor: ['酒庄 / 博物馆 / 图书馆', '奇幻游戏官网', '婚礼请柬与邀请函'],
  avoid: ['SaaS 工具', '数据密集页', '极简品牌'],
  prompt: `# 设计范式：哥特手抄本（Gothic Manuscript）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：中世纪修道院抄写房——羊皮纸、黑体字（Textualis）、泥金首字母、朱砂批注、金箔与常春藤角饰
- 情绪关键词：神圣、手抄、典藏、烛光、仪式感
- 一切装饰都围绕「文字是圣物」：字比图重要，框比留白重要

## 2. 布局
- 单栏手抄页：正文栏宽 58-66ch，四周 2px 金线框 + 四角常春藤角饰（SVG）
- 首字母 illumination：每章首字母 3-4 行高、金底 + 朱砂/深蓝藤蔓框
- 页边批注：朱砂色小字批注悬在正文外侧（margin notes）
- 分栏可用 1px 金细线，绝不用投影分块

## 3. 字体排印
- 字体：Grenze Gotisch / UnifrakturMaguntia 类黑体字做标题与小标题；EB Garamond 类人文衬线做正文；中文用宋体族
- 首字下沉 3 行、金底红框；小标题用 small-caps（小型大写）
- 行高 1.9-2.0，段首两字朱砂

## 4. 色彩
- 羊皮纸 #f0e6cc（可加纤维噪点 ≤ 4%）；墨 #2a2118；泥金 #b8892f；朱砂 #a02c2c；深蓝 #24365e
- 金色用于线框与首字底，朱砂只做批注与强调，深蓝做次级块
- 禁止现代亮色、禁止渐变（金箔质感用「金底 + 1px 深金内框」表达）

## 5. 组件与交互规范
${specSection(
  `- 签名组件：泥金首字（3-4 行高、金底 + 朱砂藤蔓框）与朱砂批注（页边斜体小字）
- 按钮：无圆角、1px 金框 + small-caps 字距 0.08em；hover 时金框加粗为 2px 并填深蓝转金字；active 内凹 1px
- 输入框：羊皮纸书写线（1px 墨线 + 下方虚线金点），focus 时线变朱砂；错误态朱砂线 + 斜体批注
- 下拉框浮层：直角、1px 金框、羊皮纸底，选项 hover 铺 6% 金；选中项左侧小型藤蔓符 ❦
- 开关：金线轨道 + 蜡封圆钮（深红渐变球），ON 时钮变金
- 分段控制：由竖金线分隔的 small-caps 文字组，当前项朱砂下划线
- 模态框：直角 + 2px 金双线框 + 四角藤饰；遮罩 rgba(30,22,12,.5)
- 表格：1px 金细线、small-caps 朱砂表头、行 hover 6% 金
- 图标：细线藤蔓 / 十字 / 星芒 SVG（1px 金或墨）
- 骨架屏：淡金块 1.6s 呼吸，如烛光摇曳`,
  {
    hover: '金框 1px → 2px 加粗并填深蓝转金字，0.4s，像烛光下金箔忽然反光',
    active: '内凹 1px 且金色转暗金',
    focus: '1.5px 金色细框 + 3px 淡金外扩',
    toast: '右下角羊皮纸小条（1px 金框），从下 12px 缓缓浮入 0.5s，停留 4s，最多 3 条',
    dur: '400ms（手抄本的一切都慢：抄写、晕金、翻页）',
  },
)}

## 6. 质感细节
- 羊皮纸纹理：纤维噪点 ≤ 4% + 边缘轻微变深（径向渐变暗角，透明度 ≤ 6%）
- 金箔质感 = 金底 + 1px 深金(#8a6520) 内框 + 微弱对角高光（白 6%）
- 角饰：四角常春藤 SVG（1px 金线），旋转对称

## 7. 禁忌
- 禁止无衬线正文、禁止圆角卡片、禁止霓虹色、禁止 emoji
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '单栏手抄页 + 2px 金线框 + 四角常春藤角饰，栏宽 58-66ch',
    '泥金首字 3-4 行高（金底 + 朱砂藤蔓框），页边朱砂批注',
    '黑体字标题 + small-caps 小标题 + 人文衬线正文，行高 2.0',
    '羊皮纸 #f0e6cc × 泥金 #b8892f × 朱砂 #a02c2c，动效 400ms 烛光节奏',
  ],
  tokens: {
    colors: [
      { name: '羊皮纸', value: '#f0e6cc' },
      { name: '墨', value: '#2a2118' },
      { name: '泥金', value: '#b8892f' },
      { name: '朱砂', value: '#a02c2c' },
      { name: '深蓝', value: '#24365e' },
    ],
    fonts: [
      { role: '标题', stack: '"Grenze Gotisch", "Noto Serif SC", serif' },
      { role: '正文', stack: '"EB Garamond", "Noto Serif SC", serif' },
    ],
    radius: '0（全直角）',
    shadow: '0 2px 8px rgba(42,33,24,.18)',
    extras: [
      { label: '金箔质感', value: '金底 + 1px 深金内框' },
      { label: '首字', value: '3-4 行高 illumination' },
    ],
  },
  demo: {
    height: 2450,
    heightMobile: 4200,
    html: page({
      title: '哥特手抄本 · Gothic Manuscript',
      fonts: ['Grenze+Gotisch:wght@500;700', 'EB+Garamond:ital,wght@0,400;0,600;1,400', 'Noto+Serif+SC:wght@400;700'],
      css:
        scCss(scTheme) +
        `
body {
  font-family: "EB Garamond", "Noto Serif SC", "Songti SC", serif;
  background: #e7d9b8; color: #2a2118; padding: 44px 26px 56px;
  background-image: radial-gradient(rgba(42,33,24,.05) 1px, transparent 1px);
  background-size: 3px 3px;
}
.page {
  max-width: 860px; margin: 0 auto; background: #f0e6cc; position: relative;
  border: 2px solid #b8892f; outline: 1px solid rgba(184,137,47,.5); outline-offset: 5px;
  padding: 52px 62px 58px; box-shadow: 0 3px 18px rgba(42,33,24,.22);
}
.page::before { content: ""; position: absolute; inset: 10px; border: 1px solid rgba(184,137,47,.55); pointer-events: none; }
.corner { position: absolute; color: #b8892f; font-size: 22px; line-height: 1; }
.corner.tl { top: 16px; left: 18px; } .corner.tr { top: 16px; right: 18px; }
.corner.bl { bottom: 16px; left: 18px; } .corner.br { bottom: 16px; right: 18px; }
.rubric { text-align: center; font-variant: small-caps; letter-spacing: .3em; font-size: 13px; color: #a02c2c; }
.rule { display: flex; align-items: center; gap: 12px; margin: 14px 0 30px; color: #b8892f; }
.rule::before, .rule::after { content: ""; flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #b8892f); }
.rule::after { background: linear-gradient(90deg, #b8892f, transparent); }
h1.goth {
  font-family: "Grenze Gotisch", "Noto Serif SC", serif;
  font-size: clamp(40px, 5.6vw, 64px); font-weight: 700; line-height: 1.05;
  text-align: center; margin: 0 0 6px; color: #2a2118;
}
h1.goth em { font-style: normal; color: #a02c2c; }
.latin { text-align: center; font-style: italic; color: #8a7a5c; font-size: 14px; letter-spacing: .12em; }
.illum { float: left; width: 108px; height: 128px; margin: 8px 18px 4px 0;
  background: linear-gradient(135deg, #c99b3f, #b8892f 55%, #8a6520);
  border: 1px solid #8a6520; outline: 1px solid rgba(184,137,47,.5); outline-offset: 3px;
  display: flex; align-items: center; justify-content: center;
  font-family: "Grenze Gotisch", serif; font-size: 74px; color: #2a2118;
  text-shadow: 0 1px 0 rgba(255,244,214,.5); position: relative; }
.illum::after { content: ""; position: absolute; inset: 4px; border: 1px solid rgba(160,44,44,.8); }
.illu-cap::first-letter { color: #2a2118; }
.chapter { font-size: 15.5px; line-height: 2.05; text-align: justify; }
.chapter p + p { margin-top: 14px; }
.chapter .lead::first-letter { font-family: "Grenze Gotisch", serif; font-size: 46px; color: #a02c2c; }
.margin-note { float: right; width: 128px; margin: 4px -78px 10px 16px; font-style: italic;
  font-size: 11.5px; line-height: 1.8; color: #a02c2c; border-left: 1px solid rgba(160,44,44,.5); padding-left: 8px; }
.versal { display: flex; gap: 18px; margin-top: 34px; border-top: 1px solid rgba(184,137,47,.6); padding-top: 24px; }
.v { flex: 1; text-align: center; font-variant: small-caps; letter-spacing: .14em; font-size: 13px; color: #24365e; }
.v b { display: block; font-family: "Grenze Gotisch", serif; font-size: 26px; color: #b8892f; letter-spacing: 0; margin-bottom: 4px; }
@media (max-width: 900px) { .margin-note { display: none; } .page { padding: 36px 26px 44px; } .versal { flex-direction: column; gap: 10px; } }`,
      body: `
<div class="page">
  <span class="corner tl">❦</span><span class="corner tr">❦</span><span class="corner bl">❦</span><span class="corner br">❦</span>
  <div class="rubric">· Codex · 範 式 展 示 館 藏 本 ·</div>
  <div class="rule">✦</div>
  <h1 class="goth">Gothic <em>Scriptorium</em></h1>
  <div class="latin">— Here endeth the first lesson —</div>
  <div class="chapter" style="margin-top: 30px">
    <div class="illum illu-cap">G</div>
    <p class="lead">old letters wait in the dark for a candle. 每一页手抄本都是一次漫长的誊写：墨迹未干之前，抄写员不敢呼吸；金箔贴下之后，整页纸便有了自己的光。</p>
    <p>界面的网格是现代人的发明，而中世纪的抄写员只相信一条基线——文字的基线。栏宽五十八至六十六字，行距两倍，首字母被藤蔓与金箔加冕。<span class="rubric" style="letter-spacing:.1em">〔抄注：此段为范式说明〕</span></p>
    <div class="margin-note">页边批注（margin note）：朱砂小字，斜体，悬在正文之外——像今天的 aside。</div>
    <p>按钮是蜡封与金线的后裔：金框收拢着 small-caps 的字，悬停时如烛光掠过金箔。没有阴影的层次，只有线的层次——外框一道，内框一道，中间隔五像素的呼吸。</p>
  </div>
  <div class="versal">
    <div class="v"><b>I</b>泥金首字</div>
    <div class="v"><b>II</b>朱砂批注</div>
    <div class="v"><b>III</b>金线双框</div>
    <div class="v"><b>IV</b>常春藤角饰</div>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
