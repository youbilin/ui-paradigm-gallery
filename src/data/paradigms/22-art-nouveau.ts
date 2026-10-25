import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import { specSection } from './prompt-spec';
import type { Paradigm } from './types';

const scTheme = {
  bg: '#efe8d6',
  surface: '#f6f0e0',
  alt: 'rgba(47,74,58,0.08)',
  text: '#2f4a3a',
  muted: '#8a8168',
  primary: '#7d3a4d',
  onPrimary: '#f6f0e0',
  border: 'rgba(176,141,62,0.75)',
  radius: '14px 26px 14px 26px',
  radiusLg: '20px 34px 20px 34px',
  shadow: '0 2px 10px rgba(47,74,58,0.12)',
  font: '"Cormorant Garamond","Noto Serif SC","Songti SC","SimSun",serif',
  mono: '"Cormorant Garamond",Georgia,serif',
  ok: '#5c7a4a',
  warn: '#b08d3e',
  err: '#7d3a4d',
  info: '#3e5f74',
  focus: '#b08d3e',
  extraCss: `
.sc-root{border:1px solid rgba(176,141,62,.5);}
.sc-cell h5{font-family:var(--sc-font);font-style:italic;letter-spacing:.08em;text-transform:none;font-size:13px;color:#b08d3e;}
.sc-btn{letter-spacing:.06em;}
.sc-btn.pri{background:#7d3a4d;}
.sc-lbl,.sc-kicker{letter-spacing:.2em;}
.sc-tbl th{font-family:var(--sc-font);font-style:italic;letter-spacing:.08em;text-transform:none;font-size:12px;}
.sc-tbl th,.sc-tbl td{border-bottom:1px solid rgba(176,141,62,.35);}
.sc-step .no{font-family:var(--sc-font);}`,
};

export const artNouveau: Paradigm = {
  id: 'art-nouveau',
  no: '22',
  name: '新艺术运动',
  nameEn: 'Art Nouveau',
  tagline: '藤蔓般的曲线、金线描边、彩窗拱门——让界面从花园里长出来。',
  origin: '慕夏海报 / 巴黎地铁入口 / 维也纳分离派',
  year: '1890 — 1910s',
  tags: ['有机曲线', '金线', '彩窗', '花卉'],
  bestFor: ['品牌官网', '茶室 / 香氛 / 珠宝', '婚庆与请柬类页面'],
  avoid: ['数据密集后台', '极简工具类产品'],
  prompt: `# 设计范式：新艺术运动（Art Nouveau）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：1890 年代的巴黎与布拉格——藤蔓生长的曲线、彩窗拱门、金线勾边、慕夏式的长发女子与花环
- 情绪关键词：有机、典雅、装饰、手工、植物性
- 一切线条都是生长出来的：没有一条纯直线和标准圆弧，曲线要「甩」出去再收回来（whiplash line）

## 2. 布局
- 拱门即骨架：主视觉、卡片、模态框都用上圆拱造型（border-radius 上半 50% 或大拱弧）
- 对称中带呼吸：版面大体对称，但藤蔓装饰左右姿态不同
- 装饰边框：细金线双线框 + 四角花饰；分隔用藤蔓 SVG 而非直线
- 留白为宣纸色，正文栏宽 60-68ch

## 3. 字体排印
- 字体：Cormorant Garamond / Italiana 类高对比衬线做标题，可斜体；中文用宋体族
- 首字下沉（drop cap）2-3 行高，金绿色
- 层级：H1 44-64px 衬线；小标签全大写 + 0.2em 字距；正文 14-16px 行高 1.9
- 强调词用暗酒红斜体

## 4. 色彩
- 米纸底 #f4eede；墨绿 #2f4a3a；金 #b08d3e；暗酒红 #7d3a4d；橄榄 #7a8a4f
- 金色只做线与字，不做大面积色块；酒红是唯一强调色
- 彩窗感：局部可用 2-3 色的低饱和玻璃色块（opacity ≤ .5）

## 5. 组件与交互规范
${specSection(
  `- 按钮：细金边（1px）+ 轻微不对称圆角 + 衬线字；hover 时金线加粗并填墨绿转米字（0.3s 缓慢）；active 内凹
- 输入框：仅底部金线或不对称圆角细框；focus 时线由中心向两侧「生长」变粗；错误态酒红线 + 斜体提示
- 下拉框：浮层为拱顶小卡片（上部大圆弧）+ 金线框；选项 hover 填淡金；选中项左侧小型花饰 ❀
- 复选框：金线方框（不对称圆角），选中填墨绿 + 金勾；单选：金环 + 酒红芯；开关为藤蔓轨道 + 金钮
- 分段控制：金线容器 + 淡金滑块缓慢滑动；标签页：斜体衬线 + 当前项下方金线下压
- 手风琴：标题为衬线斜体，右侧 +/− 用细金十字旋转；展开 0.4s 如藤蔓舒展
- 模态框：拱顶卡片 + 金双线框 + 顶部花饰；遮罩 rgba(30,40,32,.4)
- 吐司：右下米色小卡 + 金边 + 酒红左条，缓慢浮入
- 表格：金细线、衬线表头（斜体）、行 hover 淡金
- 进度：藤蔓式细线 + 金色填充；环形为金描边 + 花饰端点
- 步骤条：金线相连的花节点；分页用「上一页 · I II III · 下一页」罗马数字；面包屑用 ❧ 分隔
- 头像：拱形（上圆下直）+ 金边；可删标签细金框 + 花 ✕
- 图标：细线植物纹样（茎、叶、藤圈）SVG 1px 金/墨绿
- 骨架屏：淡金块 1.6s 呼吸，如光线穿过彩窗`,
  {
    hover: '金线加粗为 2px、底色淡金 8%，缓慢 0.3s，像金粉晕开',
    active: '内凹 1px 且饱和度略降',
    focus: '1.5px 金色细框 + 4px 淡金外扩',
    toast: '右下角米色金边小卡，从下 14px 浮入 0.45s，停留 3.5s 后缓慢上浮淡出，最多 3 条',
    dur: '320ms（新艺术的一切都要慢半拍，如藤蔓生长）',
  },
)}

## 6. 质感细节
- 细节密度高但明度低：装饰用 1px 线与 ≤ 8% 透明度的色块
- 藤蔓分隔线用内联 SVG path（曲率变化的 whiplash 曲线）
- 纸面可加极淡斑驳纹理（透明度 ≤ 4%）；禁止锐利阴影

## 7. 禁忌
- 禁止纯直线网格、禁止 emoji、禁止高饱和荧光色
- 禁止无衬线粗黑标题、禁止硬阴影`,
  spec: [
    '拱门造型贯穿主视觉 / 卡片 / 模态框，上部大圆弧',
    '金线 #b08d3e 双线框 + 藤蔓 SVG 分隔，whiplash 曲线',
    '米纸底 + 墨绿文字，暗酒红唯一强调色，衬线斜体',
    '动效缓慢（320ms）如藤蔓生长；首字下沉 + 花饰端点',
  ],
  tokens: {
    colors: [
      { name: '米纸', value: '#f4eede' },
      { name: '墨绿', value: '#2f4a3a' },
      { name: '金', value: '#b08d3e' },
      { name: '暗酒红', value: '#7d3a4d' },
      { name: '橄榄', value: '#7a8a4f' },
    ],
    fonts: [
      { role: '标题', stack: '"Cormorant Garamond", "Noto Serif SC", serif' },
      { role: '正文', stack: '"Noto Serif SC", "Songti SC", serif' },
    ],
    radius: '14–26px 不对称（拱顶 50%）',
    shadow: '0 2px 10px rgba(47,74,58,.12)',
    extras: [
      { label: '装饰线', value: '1px 金线双线框' },
      { label: '字距', value: '小标签 0.2em' },
    ],
  },
  demo: {
    height: 2450,
    heightMobile: 4200,
    html: page({
      title: '新艺术运动 · Art Nouveau',
      fonts: ['Cormorant+Garamond:ital,wght@0,500;0,700;1,500', 'Noto+Serif+SC:wght@500;700'],
      css:
        scCss(scTheme) +
        `
body {
  font-family: "Cormorant Garamond", "Noto Serif SC", "Songti SC", serif;
  background: #f4eede; color: #2f4a3a; padding: 46px 26px 56px;
  background-image: radial-gradient(rgba(176,141,62,.06) 1px, transparent 1px);
  background-size: 22px 22px;
}
.shell { max-width: 1020px; margin: 0 auto; }
.topbar { display: flex; align-items: center; justify-content: space-between; padding-bottom: 14px;
  border-bottom: 1px solid rgba(176,141,62,.6); position: relative; }
.topbar::after { content: ""; position: absolute; left: 0; right: 0; bottom: -5px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(176,141,62,.7), transparent); }
.brand { font-size: 24px; font-weight: 700; letter-spacing: .14em; color: #2f4a3a; }
.brand i { font-style: normal; color: #b08d3e; }
.topnav { display: flex; gap: 26px; font-size: 13px; letter-spacing: .18em; }
.topnav span { color: #7d3a4d; }
.vine { display: block; margin: 26px auto 0; color: #b08d3e; }
.arch-wrap { display: flex; justify-content: center; margin-top: 34px; }
.arch {
  width: min(560px, 100%); border: 1px solid rgba(176,141,62,.85); border-bottom-width: 2px;
  border-radius: 300px 300px 22px 22px; padding: 56px 40px 42px; text-align: center; position: relative;
  background: linear-gradient(180deg, rgba(176,141,62,.08), transparent 40%), #f6f0e0;
  box-shadow: 0 3px 24px rgba(47,74,58,.1);
}
.arch::before { content: ""; position: absolute; inset: 8px; border: 1px solid rgba(176,141,62,.4);
  border-radius: 290px 290px 16px 16px; pointer-events: none; }
.arch .halo { position: absolute; top: 26px; left: 50%; transform: translateX(-50%); color: #7a8a4f; }
.arch .eyebrow { font-size: 12px; letter-spacing: .34em; color: #7d3a4d; text-transform: uppercase; margin-top: 34px; }
.arch h1 { font-size: clamp(38px, 5.4vw, 58px); font-weight: 500; line-height: 1.12; margin: 14px 0 4px; color: #2f4a3a; }
.arch h1 em { font-style: italic; color: #7d3a4d; }
.arch .fr { font-size: 17px; font-style: italic; color: #b08d3e; letter-spacing: .06em; }
.arch p.lead { font-size: 15px; line-height: 2; color: #4c5c4c; max-width: 400px; margin: 18px auto 26px; }
.arch .btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.abtn { font: inherit; font-size: 14px; letter-spacing: .16em; padding: 11px 28px; cursor: pointer;
  border: 1px solid #2f4a3a; background: #2f4a3a; color: #f4eede; border-radius: 999px 999px 4px 4px;
  transition: all .32s cubic-bezier(.22,1,.36,1); }
.abtn.ghost { background: transparent; color: #2f4a3a; border-color: rgba(176,141,62,.9); }
.abtn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(47,74,58,.18); letter-spacing: .2em; }
.abtn:active { transform: translateY(0); }
.stained { display: flex; justify-content: center; gap: 10px; margin-top: 30px; }
.stained i { width: 34px; height: 52px; border: 1px solid rgba(176,141,62,.55); border-radius: 17px 17px 3px 3px; opacity: .55; }
.stained i:nth-child(1) { background: #7a8a4f; } .stained i:nth-child(2) { background: #7d3a4d; }
.stained i:nth-child(3) { background: #b08d3e; } .stained i:nth-child(4) { background: #3e5f74; }
.stained i:nth-child(5) { background: #7a8a4f; }
.trio { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
.card { border: 1px solid rgba(176,141,62,.7); background: #f6f0e0; padding: 26px 22px 24px; text-align: center;
  border-radius: 60px 60px 12px 12px; box-shadow: 0 2px 14px rgba(47,74,58,.08); transition: transform .32s cubic-bezier(.22,1,.36,1), box-shadow .32s; }
.card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(47,74,58,.14); }
.card .orn { color: #b08d3e; font-size: 20px; }
.card h3 { font-size: 21px; font-weight: 700; margin: 10px 0 4px; }
.card small { font-style: italic; color: #b08d3e; font-size: 13px; letter-spacing: .08em; }
.card p { font-size: 13.5px; line-height: 1.95; color: #4c5c4c; margin: 12px 0 0; }
.dropcap::first-letter { font-size: 46px; line-height: .9; color: #7d3a4d; font-weight: 700; float: left; padding: 4px 8px 0 0; }
@media (max-width: 760px) { .trio { grid-template-columns: 1fr; } .topnav { display: none; } }`,
      body: `
<div class="shell">
  <div class="topbar">
    <span class="brand">Maison <i>❀</i> Nouveau</span>
    <nav class="topnav"><span>花圃</span><span>工坊</span><span>季刊</span><span>造访</span></nav>
  </div>
  <svg class="vine" width="220" height="22" viewBox="0 0 220 22" fill="none" stroke="currentColor" stroke-width="1.2">
    <path d="M4 11 C 40 -4, 70 26, 110 11 S 180 -4, 216 11" />
    <circle cx="110" cy="11" r="2.6" fill="currentColor" stroke="none"/>
    <path d="M78 8 q6 -7 12 0 M130 8 q6 -7 12 0" />
  </svg>
  <div class="arch-wrap">
    <div class="arch">
      <svg class="halo" width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" stroke-width="1.1">
        <circle cx="36" cy="36" r="15"/><path d="M36 6 v12 M36 54 v12 M6 36 h12 M54 36 h12 M15 15 l8 8 M49 49 l8 8 M57 15 l-8 8 M23 49 l-8 8"/>
        <circle cx="36" cy="36" r="26" stroke-dasharray="2 5"/>
      </svg>
      <div class="eyebrow">Est. 1897 · 分离派工坊</div>
      <h1>让界面<br />从花园里<em>长出来</em></h1>
      <div class="fr">— L'Art Décoratif —</div>
      <p class="lead dropcap">藤蔓般的曲线代替直线，金线勾住每一处转角。功能藏在装饰之后，装饰本身就是功能——这是新艺术运动的全部纪律。</p>
      <div class="btns">
        <button class="abtn">走进花圃</button>
        <button class="abtn ghost">阅读季刊</button>
      </div>
      <div class="stained"><i></i><i></i><i></i><i></i><i></i></div>
    </div>
  </div>
  <div class="trio">
    <div class="card"><div class="orn">❁</div><h3>曲线即骨架</h3><small>La Ligne</small><p>拱门、圆窗与甩鞭线构成全部骨架；没有一条直线是被迫存在的。</p></div>
    <div class="card"><div class="orn">❀</div><h3>金线描边</h3><small>Le Filet d'Or</small><p>细金线代替阴影划分层级：一处转角，两道线，足够了。</p></div>
    <div class="card"><div class="orn">✿</div><h3>彩窗点色</h3><small>Le Vitrail</small><p>橄榄、酒红与天蓝只在彩窗式的小色块里出现，像光透进来。</p></div>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
