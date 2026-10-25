import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import { specSection } from './prompt-spec';
import type { Paradigm } from './types';

const scTheme = {
  bg: '#e8f7fd',
  surface: '#ffffff',
  alt: 'rgba(30,143,192,0.1)',
  text: '#0f5e86',
  muted: '#5b93a8',
  primary: '#1e8fc0',
  onPrimary: '#ffffff',
  border: 'rgba(15,94,134,0.22)',
  radius: '18px',
  radiusLg: '24px',
  shadow: '0 6px 18px rgba(15,94,134,0.18)',
  font: '"Nunito Sans","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif',
  mono: 'ui-monospace,"Segoe UI",monospace',
  ok: '#5da333',
  warn: '#e8a020',
  err: '#e05a4e',
  info: '#1e8fc0',
  focus: '#1e8fc0',
  extraCss: `
.sc-root{background:linear-gradient(180deg,#dff4fd,#eefaf3);}
.sc-cell{border:1px solid rgba(255,255,255,.85);box-shadow:0 6px 16px rgba(15,94,134,.14), inset 0 1px 0 #ffffff;}
.sc-btn{box-shadow:0 3px 8px rgba(15,94,134,.16), inset 0 1px 0 rgba(255,255,255,.8);}
.sc-btn.pri{background:linear-gradient(180deg,#3db1de,#187fbe);}
.sc-btn:hover{transform:translateY(-2px);}
.sc-inp,.sc-ta,.sc-sel-btn{box-shadow:inset 0 2px 5px rgba(15,94,134,.12);}
.sc-prog{background:rgba(15,94,134,.18);}
.sc-prog-fill{background:linear-gradient(180deg,#54c3ea,#187fbe);box-shadow:inset 0 1px 0 rgba(255,255,255,.7);}
.sc-sw input:checked + .tr{background:linear-gradient(180deg,#54c3ea,#187fbe);}
.sc-badge.pri{background:linear-gradient(180deg,#3db1de,#187fbe);}`,
};

export const frutigerAero: Paradigm = {
  id: 'frutiger-aero',
  no: '23',
  name: '水族馆拟真',
  nameEn: 'Frutiger Aero',
  tagline: '天空、草地、水光气泡——2008 年科技广告里的那个干净世界。',
  origin: 'Windows Vista/7 Aero / 拟真生态科技广告',
  year: '2004 — 2013',
  tags: ['水光', '气泡', '天蓝草绿', '光泽拟真'],
  bestFor: ['健康 / 环保 / 生活方式产品', '面向大众的消费品牌', '数据可视化包装'],
  avoid: ['极简性冷淡品牌', '暗色开发者工具'],
  prompt: `# 设计范式：水族馆拟真（Frutiger Aero）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：2004-2013 年的科技广告世界——蓝天、青草、水珠、气泡、光泽塑料；「自然 × 科技」的乐观主义
- 情绪关键词：干净、水润、透亮、乐观、人本
- 一切物体都像刚从水里捞出来：表面有高光、边缘有反光、底部有彩色柔影

## 2. 布局
- 大自然做背景：天空→草地的渐变地平线，或水波纹浅底；内容放在玻璃/白色面板上
- 面板大圆角（16-24px）+ 白色内高光（inset 0 1px 0 #fff）+ 蓝色柔影
- 图标球： glossy 球形图标（径向渐变 + 顶部白高光）承担导航与功能入口
- 气泡漂浮：2-6 个半透明气泡缓慢上浮（6-10s 循环），透明度 ≤ .35

## 3. 字体排印
- 字体：Nunito Sans / Segoe UI 类人本无衬线，圆润、字重 400-700
- 标题 32-52px / 700，可带 1px 白色 text-shadow 提亮；正文 14-16px 行高 1.8
- 小标签全大写灰色；数字 tabular

## 4. 色彩
- 天蓝 #bfeeff → #7fd4f0 渐变做天空；主蓝 #1e8fc0；草绿 #6cb33f；水光白 rgba(255,255,255,.65)；深海蓝 #0f5e86 文字
- 绿色只做「自然/成功」语义与草地渐变；整体明度高、饱和度中
- 光泽公式：linear-gradient(180deg, rgba(255,255,255,.65), transparent 55%) 叠加在主色上

## 5. 组件与交互规范
${specSection(
  `- 按钮：glossy 胶囊（主色渐变 + 顶部白高光 + 1px 亮边）；hover 上浮 2px + 光泽下移；active 下压回位
- 输入框：白色内凹（inset 0 2px 5px 蓝 12%）+ 圆角；focus 时外发光 0 0 0 3px 蓝 25%
- 下拉框：白色浮层 + 蓝柔影；选项 hover 天蓝渐变；选中项左侧水滴图标
- 复选框：圆角方框选中填蓝渐变 + 白勾；单选：蓝环 + 白芯；开关为水滴轨道 + 白色凸钮，ON 时蓝渐变
- 分段控制：白色胶囊容器 + 蓝渐变滑块上浮滑动；标签页：文字 + 下方蓝渐变胶囊指示
- 手风琴：标题带圆形水滴图标，展开 0.3s 如气泡上浮
- 模态框：白色大圆角面板 + inset 白高光 + 蓝柔影；遮罩 rgba(15,94,134,.3) 轻微 blur
- 吐司：右下白色圆角小卡 + 蓝色左条 + 顶部高光
- 表格：白色面板内、行 hover 天蓝 8%、表头蓝灰大写
- 进度：胶囊槽 + 蓝渐变填充 + 顶部白高光线；环形蓝渐变描边
- 步骤条：glossy 圆球节点（未到灰、当前蓝渐变、已到绿）；分页圆角方块；面包屑用 ›
- 头像：圆形 + 白色 2px 边 + 微凸起；可删标签白色胶囊
- 图标：glossy 球形或圆润 3D 图标（含顶部高光），禁纯扁平
- 骨架屏：蓝灰渐变扫光 1.2s`,
  {
    hover: '上浮 2px + 光泽位置下移（高光从 55% 移到 70%），柔影加深',
    active: '下压归位 + inset 高光收窄',
    focus: '2px 主蓝描边 + 3px 外扩 rgba(30,143,192,.3)',
    toast: '右下角白色圆角小卡，从下 14px 弹入，3s 后如气泡上浮淡出，最多 3 条',
    dur: '240ms（水润但不黏滞，气泡漂浮循环 8s）',
  },
)}

## 6. 质感细节
- 光泽三件套：顶部白高光 + 边缘 1px 亮边 + 底部彩色柔影，三者缺一不可
- 渐变必须有方向（垂直向上亮）；禁止水平杂乱渐变与噪点
- 背景元素：草地曲线（大圆弧）、水波纹、鱼群剪影（透明度 ≤ .12）

## 7. 禁忌
- 禁止暗黑底、禁止赛博霓虹、禁止硬边与直角堆砌
- 禁止纯扁平无光泽（那会退化成现代扁平风）`,
  spec: [
    '天空→草地渐变地平线背景，内容置于白色玻璃面板',
    'glossy 三件套：顶部白高光 + 1px 亮边 + 蓝色柔影',
    '天蓝 #1e8fc0 主色 + 草绿 #6cb33f，深海蓝文字',
    '气泡漂浮循环动画（≤ .35 透明度），动效水润 240ms',
  ],
  tokens: {
    colors: [
      { name: '天空', value: '#bfeeff → #7fd4f0' },
      { name: '主蓝', value: '#1e8fc0' },
      { name: '草绿', value: '#6cb33f' },
      { name: '深海蓝', value: '#0f5e86' },
      { name: '水光白', value: 'rgba(255,255,255,.65)' },
    ],
    fonts: [{ role: '全场', stack: '"Nunito Sans", "Segoe UI", "PingFang SC", sans-serif' }],
    radius: '16–24px（按钮 999px）',
    shadow: '0 6px 18px rgba(15,94,134,.18) + inset 0 1px 0 #fff',
    extras: [
      { label: '光泽', value: '白 65% → 透明 55% 垂直渐变' },
      { label: '气泡', value: '2–6 个，8s 上浮循环' },
    ],
  },
  demo: {
    height: 2450,
    heightMobile: 4200,
    html: page({
      title: '水族馆拟真 · Frutiger Aero',
      fonts: ['Nunito+Sans:wght@400;700;800'],
      css:
        scCss(scTheme) +
        `
body {
  font-family: "Nunito Sans", "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #0f5e86; padding: 0 0 52px;
  background: linear-gradient(180deg, #bfeeff 0%, #9fe4f8 46%, #cdeec2 72%, #9ed97f 100%);
  min-height: 100%;
  position: relative; overflow-x: hidden;
}
.bub { position: absolute; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle at 32% 28%, rgba(255,255,255,.9), rgba(255,255,255,.16) 58%);
  border: 1px solid rgba(255,255,255,.65); }
.bub1 { width: 22px; height: 22px; left: 8%; top: 120px; animation: rise 9s linear infinite; }
.bub2 { width: 12px; height: 12px; left: 18%; top: 320px; animation: rise 7s 1.4s linear infinite; }
.bub3 { width: 30px; height: 30px; right: 10%; top: 200px; animation: rise 11s .8s linear infinite; }
.bub4 { width: 15px; height: 15px; right: 22%; top: 460px; animation: rise 8s 2.2s linear infinite; }
@keyframes rise { from { transform: translateY(0); opacity: .0; } 12% { opacity: .8; } to { transform: translateY(-420px); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .bub { animation: none; opacity: .4; } }
.top { max-width: 1080px; margin: 0 auto; padding: 26px 26px 0; display: flex; align-items: center; gap: 16px; }
.logo { width: 42px; height: 42px; border-radius: 50%;
  background: radial-gradient(circle at 32% 26%, #8fdcf7, #187fbe 72%);
  box-shadow: inset 0 2px 3px rgba(255,255,255,.85), 0 4px 10px rgba(15,94,134,.3); }
.brand { font-size: 19px; font-weight: 800; color: #0c4a68; letter-spacing: .02em; }
.brand small { display: block; font-size: 10.5px; font-weight: 700; color: #3e7d97; letter-spacing: .28em; }
.topnav { margin-left: auto; display: flex; gap: 20px; font-size: 13.5px; font-weight: 700; color: #14688f; }
.topnav span { text-shadow: 0 1px 0 rgba(255,255,255,.7); }
.glass { max-width: 1080px; margin: 30px auto 0; padding: 44px 46px 48px; position: relative;
  background: linear-gradient(180deg, rgba(255,255,255,.82), rgba(255,255,255,.6));
  border: 1px solid rgba(255,255,255,.9); border-radius: 26px;
  box-shadow: 0 14px 40px rgba(15,94,134,.2), inset 0 1px 0 #ffffff; backdrop-filter: blur(4px); }
.kicker { display: inline-flex; align-items: center; gap: 8px; font-size: 11.5px; font-weight: 800; letter-spacing: .22em;
  color: #1a7a4c; text-transform: uppercase; }
.kicker::before { content: ""; width: 9px; height: 9px; border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #b8ec9a, #5da333 74%); }
.hero { display: grid; grid-template-columns: 1.2fr .8fr; gap: 36px; align-items: center; }
.hero h1 { font-size: clamp(34px, 4.6vw, 52px); line-height: 1.12; font-weight: 800; color: #0c4a68; margin: 12px 0 8px;
  text-shadow: 0 1px 0 rgba(255,255,255,.8); }
.hero h1 b { color: #187fbe; }
.hero p.lead { font-size: 15.5px; line-height: 1.85; color: #23698a; margin: 0 0 24px; max-width: 460px; }
.btns { display: flex; gap: 13px; flex-wrap: wrap; }
.gbtn { font: inherit; font-weight: 800; font-size: 14.5px; color: #fff; padding: 12px 26px; border: 1px solid rgba(255,255,255,.7);
  border-radius: 999px; cursor: pointer; background: linear-gradient(180deg, #4db9e4, #187fbe 58%, #1472ab);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.75), 0 6px 16px rgba(15,94,134,.32); transition: all .24s cubic-bezier(.22,1,.36,1); }
.gbtn.ghost { background: rgba(255,255,255,.75); color: #14688f; border-color: rgba(15,94,134,.25); box-shadow: inset 0 1px 0 #fff, 0 4px 10px rgba(15,94,134,.14); }
.gbtn:hover { transform: translateY(-2px); box-shadow: inset 0 1px 0 rgba(255,255,255,.75), 0 10px 22px rgba(15,94,134,.36); }
.gbtn:active { transform: translateY(0); }
.orb-box { display: flex; justify-content: center; }
.orb { width: 168px; height: 168px; border-radius: 50%; position: relative;
  background: radial-gradient(circle at 32% 26%, #a6e6fb, #2f9fce 66%, #1472ab);
  box-shadow: inset 0 3px 6px rgba(255,255,255,.85), inset 0 -8px 14px rgba(11,78,112,.35), 0 14px 30px rgba(15,94,134,.3); }
.orb::before { content: ""; position: absolute; left: 20%; top: 9%; width: 60%; height: 34%; border-radius: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,.95), rgba(255,255,255,.05)); }
.orb::after { content: "aqua"; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-size: 26px; font-weight: 800; color: #fff; text-shadow: 0 2px 6px rgba(11,78,112,.5); letter-spacing: .04em; }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 38px; }
.stat { background: linear-gradient(180deg, #ffffff, #f2fbff); border: 1px solid rgba(255,255,255,.95); border-radius: 18px;
  padding: 20px 22px; box-shadow: 0 6px 16px rgba(15,94,134,.14), inset 0 1px 0 #fff; }
.stat .ic { width: 34px; height: 34px; border-radius: 50%; margin-bottom: 12px;
  background: radial-gradient(circle at 32% 26%, #d3f3c2, #6cb33f 76%); box-shadow: inset 0 1px 0 rgba(255,255,255,.8); }
.stat:nth-child(2) .ic { background: radial-gradient(circle at 32% 26%, #a6e6fb, #1e8fc0 76%); }
.stat:nth-child(3) .ic { background: radial-gradient(circle at 32% 26%, #ffe1a6, #e8a020 76%); }
.stat b { display: block; font-size: 26px; font-weight: 800; color: #0c4a68; font-variant-numeric: tabular-nums; }
.stat span { font-size: 12.5px; color: #3e7d97; font-weight: 700; }
.grass { display: block; margin: 34px auto 0; max-width: 1080px; width: calc(100% - 52px); }
@media (max-width: 820px) { .hero { grid-template-columns: 1fr; } .stats { grid-template-columns: 1fr; } .topnav { display: none; } .glass { padding: 30px 24px; } }`,
      body: `
<span class="bub bub1"></span><span class="bub bub2"></span><span class="bub bub3"></span><span class="bub bub4"></span>
<div class="top">
  <span class="logo"></span>
  <span class="brand">AQUA<small>FRESH · 2008</small></span>
  <nav class="topnav"><span>水源</span><span>科技</span><span>生态</span><span>关于</span></nav>
</div>
<div class="glass">
  <div class="hero">
    <div>
      <span class="kicker">Pure · Clear · Alive</span>
      <h1>科技像水一样<br /><b>干净透亮</b>的年代</h1>
      <p class="lead">天空渐变、草地曲线、气泡上浮、玻璃面板里的白高光——Frutiger Aero 相信技术可以像清晨的湖水一样让人放心。</p>
      <div class="btns">
        <button class="gbtn">开始体验</button>
        <button class="gbtn ghost">看看水源</button>
      </div>
    </div>
    <div class="orb-box"><div class="orb"></div></div>
  </div>
  <div class="stats">
    <div class="stat"><span class="ic"></span><b>98.2%</b><span>水源洁净度</span></div>
    <div class="stat"><span class="ic"></span><b>12 L</b><span>人均日节水</span></div>
    <div class="stat"><span class="ic"></span><b>36 k</b><span>社区参与者</span></div>
  </div>
</div>
<svg class="grass" viewBox="0 0 1040 60" fill="none">
  <path d="M0 44 C 180 10, 340 58, 520 30 S 860 6, 1040 36 L 1040 60 L 0 60 Z" fill="rgba(108,179,63,.35)"/>
  <path d="M0 52 C 220 26, 420 60, 640 42 S 920 24, 1040 50 L 1040 60 L 0 60 Z" fill="rgba(108,179,63,.55)"/>
</svg>${scHtml()}`,
      js: scJs(),
    }),
  },
};
