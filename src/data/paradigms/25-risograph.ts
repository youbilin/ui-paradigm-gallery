import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import { specSection } from './prompt-spec';
import type { Paradigm } from './types';

const scTheme = {
  bg: '#f6f1e3',
  surface: '#f9f5ea',
  alt: 'rgba(0,120,191,0.1)',
  text: '#211d19',
  muted: '#7d766a',
  primary: '#0078bf',
  onPrimary: '#f6f1e3',
  border: '#211d19',
  radius: '2px',
  radiusLg: '4px',
  shadow: '4px 4px 0 rgba(255,72,176,0.85)',
  font: '"Archivo Black","PingFang SC","Microsoft YaHei",sans-serif',
  mono: '"Space Mono",ui-monospace,monospace',
  ok: '#0078bf',
  warn: '#e88b00',
  err: '#ff48b0',
  info: '#0078bf',
  focus: '#ff48b0',
  extraCss: `
.sc-cell{border-width:1.5px;position:relative;}
.sc-cell::after{content:"";position:absolute;inset:0;border:1.5px solid rgba(255,72,176,.75);border-radius:2px;transform:translate(3px,3px);pointer-events:none;}
.sc-btn{border-radius:2px;border-width:1.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;}
.sc-btn.pri{background:#0078bf;color:#f6f1e3;box-shadow:3px 3px 0 rgba(255,72,176,.85);}
.sc-btn.pri:hover{box-shadow:5px 5px 0 rgba(255,72,176,.85);}
.sc-inp,.sc-ta,.sc-sel-btn{border-radius:2px;border-width:1.5px;}
.sc-seg-ind{background:#ff48b0;}
.sc-badge.pri{background:#ff48b0;color:#211d19;}
.sc-prog-fill{background:#ff48b0;}
.sc-modal-box{border-width:1.5px;box-shadow:6px 6px 0 rgba(255,72,176,.8);}`,
};

export const risograph: Paradigm = {
  id: 'risograph',
  no: '25',
  name: '孔版印刷',
  nameEn: 'Risograph',
  tagline: '荧光粉撞打印蓝、套色永远差两毫米——数字时代的油墨颗粒感。',
  origin: 'Riso 印刷机 / 独立出版社海报 / Poster House',
  year: '2010s 复兴',
  tags: ['双色叠印', '荧光色', '粗颗粒', '错版'],
  bestFor: ['演出 / 展览海报页', '独立品牌与 zine 商店', '活动宣传页'],
  avoid: ['后台系统', '数据密集页', '需要大面积正文的阅读页'],
  prompt: `# 设计范式：孔版印刷（Risograph）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：独立出版社的 riso 海报——两种专色油墨（荧光粉 + 打印蓝）叠印在牛皮纸上，套色永远差两毫米，颗粒肉眼可见
- 情绪关键词：手工、油墨、颗粒、错版、限量
- 「不完美」是刻意的：对位标记 ✚ 露出来、色块边缘有毛边、错版是签名而不是 bug

## 2. 布局
- 纸张思维：整页是一张纸（#f6f1e3），四角放对位十字标记 ✚，边缘留 5% 出血感
- 版面不对称：大标题斜置或越界出血，信息块像贴上去的色纸
- 双色纪律：粉与蓝各自独立成块，重叠处允许多 6% 混合色（multiply 感）
- 颗粒层：全局覆盖一层 8% 透明度的噪点（feTurbulence 或点阵背景）

## 3. 字体排印
- 字体：Archivo Black 类超粗怪诞体做标题（可描边空心），Space Mono 做说明文字
- 层级：H1 60-110px 可双色错位（粉版偏移 3px）；正文 13-14px 等宽
- 大写为主，字距可紧可爆（标题 -0.01em、小标签 0.2em）

## 4. 色彩
- 纸 #f6f1e3；蓝 #0078bf；荧光粉 #ff48b0；墨 #211d19 只用于文字与 1.5px 细线
- 只有两个专色 + 纸色，禁止第三种色相、禁止渐变、禁止纯黑大面积
- 叠印处呈现深紫（蓝粉 multiply），这是唯一允许的「第三色」

## 5. 组件与交互规范
${specSection(
  `- 签名组件：错版效果——每个色块都带一份偏移 3px 的异色描边副本（::after 平移实现），像套版没对准
- 按钮：色块直角（2px）+ 1.5px 墨边；hover 时错版偏移从 3px 拉大到 5px（油墨滑开）；active 对位归零
- 输入框：白纸底 + 1.5px 墨框直角；focus 时粉色副本层偏移出现；错误态换粉框
- 下拉框浮层：实色纸片 + 粉色错版阴影 4px；选项 hover 铺蓝 10%
- 开关：色块在双色轨道上滑动，ON 时蓝块滑向粉区
- 徽章：印章式实色小块，可做半调网点（radial-gradient 点阵）填充
- 表格：1.5px 墨线全框 + 等宽字体 + 行 hover 蓝 10%
- 图标：实色几何形 + 错版副本；严禁 emoji、严禁柔和阴影
- 骨架屏：网点色块两帧明灭（禁渐变扫光）`,
  {
    hover: '套色错位从 3px 拉大到 5px（油墨滑开的手感），伴随 0.16s 位移',
    active: '错位归零对位精确（像压印机压下去）',
    focus: '2px 蓝色实线框外扩 3px',
    toast: '右下角纸片 + 粉色错版阴影，硬切进入 0.14s，3s 后连纸带影一起移出，最多 3 条',
    dur: '160ms（印刷机节奏：干脆、无弹跳、无缓出拖尾）',
  },
)}

## 6. 质感细节
- 颗粒：全局 8% 噪点层 + 色块内部可加半调网点（radial-gradient 3px 点阵，透明度 ≤ 15%）
- 纸感：色块边缘可用 1px 不规则透明度模拟油墨渗透
- 对位标记 ✚ 与「RISO ▪ 2C」等印刷注记可出现在角落

## 7. 禁忌
- 禁止第三种色相、渐变、玻璃、纯黑大色块、emoji 图标
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '双色专色纪律：荧光粉 #ff48b0 × 打印蓝 #0078bf，叠印深紫是唯一第三色',
    '签名错版：色块带偏移 3px 的异色描边副本，hover 拉大到 5px',
    '全局 8% 颗粒 + 对位十字 ✚ + 半调网点填充',
    '直角 2px + 1.5px 墨线，等宽说明字，动效 160ms 印刷机节奏',
  ],
  tokens: {
    colors: [
      { name: '纸', value: '#f6f1e3' },
      { name: '打印蓝', value: '#0078bf' },
      { name: '荧光粉', value: '#ff48b0' },
      { name: '墨', value: '#211d19' },
      { name: '叠印紫', value: 'multiply 混合' },
    ],
    fonts: [
      { role: '标题', stack: '"Archivo Black", "PingFang SC", sans-serif' },
      { role: '说明', stack: '"Space Mono", monospace' },
    ],
    radius: '2px',
    shadow: '4px 4px 0 rgba(255,72,176,.85)（错版色影）',
    extras: [
      { label: '颗粒', value: '全局 8% 噪点' },
      { label: '对位标记', value: '四角 ✚' },
    ],
  },
  demo: {
    height: 2450,
    heightMobile: 4200,
    html: page({
      title: '孔版印刷 · Risograph',
      fonts: ['Archivo+Black', 'Space+Mono:wght@400;700'],
      css:
        scCss(scTheme) +
        `
body {
  font-family: "Archivo Black", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #f6f1e3; color: #211d19; padding: 40px 26px 52px;
  position: relative;
}
body::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 40;
  background-image: radial-gradient(rgba(33,29,25,.14) 1px, transparent 1px);
  background-size: 4px 4px; opacity: .35; mix-blend-mode: multiply; }
.reg { position: absolute; color: #211d19; font-family: "Space Mono", monospace; font-size: 15px; }
.reg.tl { top: 14px; left: 16px; } .reg.tr { top: 14px; right: 16px; }
.reg.bl { bottom: 14px; left: 16px; } .reg.br { bottom: 14px; right: 16px; }
.sheet { max-width: 1060px; margin: 0 auto; }
.masthead { display: flex; align-items: center; gap: 14px; border-bottom: 1.5px solid #211d19; padding-bottom: 12px; }
.stamp { font-family: "Space Mono", monospace; font-size: 11px; border: 1.5px solid #211d19; padding: 3px 9px; }
.masthead .title { font-size: 17px; letter-spacing: .04em; }
.masthead .no2 { margin-left: auto; font-family: "Space Mono", monospace; font-size: 12px; color: #ff48b0; }
.poster { position: relative; margin-top: 36px; padding: 52px 46px 60px; overflow: hidden; }
.big { font-size: clamp(52px, 8vw, 104px); line-height: .95; text-transform: uppercase; letter-spacing: -.01em; position: relative; z-index: 2; }
.big .blue { color: #0078bf; display: inline-block; }
.big .pink { color: transparent; -webkit-text-stroke: 2.5px #ff48b0; display: inline-block; }
.big .offset { position: absolute; left: 4px; top: 4px; color: #ff48b0; opacity: .55; z-index: -1; }
.sub { font-family: "Space Mono", monospace; font-size: 13px; line-height: 1.8; max-width: 460px; margin: 22px 0 26px; }
.swatches { position: absolute; right: 34px; top: 46px; display: flex; gap: 10px; }
.sw { width: 58px; height: 88px; position: relative; }
.sw b { position: absolute; left: 0; bottom: -20px; font-family: "Space Mono", monospace; font-size: 9.5px; letter-spacing: .04em; }
.sw.blue { background: #0078bf; } .sw.pink { background: #ff48b0; }
.sw.blue::after { content: ""; position: absolute; inset: 0; border: 1.5px solid #ff48b0; transform: translate(4px, 4px); }
.sw.pink::after { content: ""; position: absolute; inset: 0; border: 1.5px solid #0078bf; transform: translate(-4px, 4px); }
.halftone { position: absolute; left: 40px; bottom: 30px; width: 150px; height: 92px;
  background-image: radial-gradient(#0078bf 1.6px, transparent 1.6px); background-size: 9px 9px; opacity: .8; }
.halftone.p { background-image: radial-gradient(#ff48b0 1.6px, transparent 1.6px); left: 190px; opacity: .6; }
.bar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 40px; }
.item { border: 1.5px solid #211d19; background: #f9f5ea; padding: 20px 20px 18px; position: relative; }
.item::after { content: ""; position: absolute; inset: 0; border: 1.5px solid rgba(255,72,176,.7); transform: translate(3px,3px); pointer-events: none; }
.item .k { font-family: "Space Mono", monospace; font-size: 10.5px; letter-spacing: .18em; color: #0078bf; }
.item h3 { font-size: 19px; margin: 8px 0 8px; text-transform: uppercase; }
.item p { font-family: "Space Mono", monospace; font-size: 12px; line-height: 1.75; margin: 0; color: #4a4438; }
.item .dot { position: absolute; top: 14px; right: 14px; width: 14px; height: 14px; border-radius: 50%; background: #ff48b0; }
.item:nth-child(2) .dot { background: #0078bf; }
@media (max-width: 780px) { .bar { grid-template-columns: 1fr; } .swatches { display: none; } .halftone { display: none; } }`,
      body: `
<span class="reg tl">✚</span><span class="reg tr">✚</span><span class="reg bl">✚</span><span class="reg br">✚</span>
<div class="sheet">
  <div class="masthead">
    <span class="stamp">RISO ▪ 2C</span>
    <span class="title">MISPRINT CLUB · 套色俱乐部</span>
    <span class="no2">EDITION 25 / 100</span>
  </div>
  <div class="poster">
    <h1 class="big">
      <span class="blue">TWO</span>
      <span class="pink">COLORS<span class="offset" aria-hidden="true">COLORS</span></span><br />
      ONE&nbsp;PAPER
    </h1>
    <p class="sub">两种专色，一张纸。油墨不注册、颗粒不修图——错版 3px 是我们的签名。每张海报都编号，绝版不补。</p>
    <div class="swatches">
      <div class="sw blue"><b>PANTONE 806U → #ff48b0</b></div>
      <div class="sw pink"><b>FED BLUE → #0078bf</b></div>
    </div>
    <div class="halftone"></div><div class="halftone p"></div>
  </div>
  <div class="bar">
    <div class="item"><span class="dot"></span><div class="k">SPEC 01</div><h3>错版</h3><p>粉版永远比蓝版偏右下 3px——hover 时油墨滑开到 5px。</p></div>
    <div class="item"><span class="dot"></span><div class="k">SPEC 02</div><h3>网点</h3><p>半调网点代替渐变：9px 一格，两种大小，绝不做平滑过渡。</p></div>
    <div class="item"><span class="dot"></span><div class="k">SPEC 03</div><h3>对位</h3><p>四角 ✚ 对位标记与版号 ED 25/100 露在成品上，工艺即装饰。</p></div>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
