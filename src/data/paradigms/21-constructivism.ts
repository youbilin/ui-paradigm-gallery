import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import { specSection } from './prompt-spec';
import type { Paradigm } from './types';

const scTheme = {
  bg: '#e9e1d0',
  surface: '#f0e9da',
  alt: 'rgba(28,25,23,0.08)',
  text: '#1c1917',
  muted: '#6e675c',
  primary: '#d5321f',
  onPrimary: '#f0e9da',
  border: '#1c1917',
  radius: '0px',
  radiusLg: '0px',
  shadow: '5px 5px 0 rgba(28,25,23,0.85)',
  font: '"Oswald","Roboto Condensed","PingFang SC","Microsoft YaHei",sans-serif',
  mono: '"Roboto Condensed",ui-monospace,monospace',
  ok: '#3e6b34',
  warn: '#dfa92d',
  err: '#d5321f',
  info: '#33556e',
  focus: '#d5321f',
  extraCss: `
.sc-cell{border-width:2px;box-shadow:5px 5px 0 rgba(28,25,23,.85);}
.sc-cell h5{letter-spacing:.22em;}
.sc-btn{border-width:2px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;}
.sc-btn.pri{box-shadow:3px 3px 0 rgba(28,25,23,.9);}
.sc-btn:hover{transform:translate(-2px,-2px);box-shadow:5px 5px 0 rgba(28,25,23,.9);}
.sc-btn.pri:hover{box-shadow:5px 5px 0 rgba(28,25,23,.9);}
.sc-inp,.sc-ta,.sc-sel-btn{border-width:2px;border-radius:0;}
.sc-seg,.sc-sel-list,.sc-menu-list,.sc-sug,.sc-modal-box,.sc-alert,.sc-toast{border-radius:0;}
.sc-modal-box{border-width:2px;box-shadow:8px 8px 0 rgba(28,25,23,.9);}
.sc-badge,.sc-tag{border-radius:0;}
.sc-badge.pri{box-shadow:2px 2px 0 rgba(28,25,23,.85);}
.sc-sw .tr{border-radius:0;}
.sc-sw .tr::after{border-radius:0;}
.sc-prog{border-radius:0;}
.sc-prog-fill{border-radius:0;}
.sc-step .no{border-radius:0;border-width:2px;}
.sc-pg-b{border-radius:0;border-width:1.5px;}
.sc-ava,.sc-ava .dot,.sc-toast-ic{border-radius:0;}
.sc-seg-ind{border-radius:0;}
.sc-tbl th{background:#1c1917;color:#f0e9da;}`,
};

export const constructivism: Paradigm = {
  id: 'constructivism',
  no: '21',
  name: '构成主义',
  nameEn: 'Constructivism',
  tagline: '斜切的色块、巨号数字、红与黑——把界面当成一张动员海报来排。',
  origin: '罗钦科海报 /《LEF》杂志 / 苏联先锋派',
  year: '1919 — 1930s',
  tags: ['对角线', '红黑双色', '巨号数字', '先锋派'],
  bestFor: ['海报式落地页', '活动与展览宣传', '文化机构官网'],
  avoid: ['后台系统', '长表单密集页', '大量正文的阅读场景'],
  prompt: `# 设计范式：构成主义（Constructivism）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：俄国先锋派动员海报——把界面当宣传画：斜向轴线、色块楔形、巨号数字、口号式短句
- 情绪关键词：动员、力量、印刷感、集体、锋利
- 构图永远斜向：主导轴线倾斜 15–25°，至少一处元素明显打破水平线

## 2. 布局
- 用对角色带与楔形（clip-path 三角/平行四边形）切分版面，而非矩形分栏
- 大数字压角：章节/序号用 120-220px 的粗体数字，部分裁切出血
- 内容区不对称：重心偏一侧，另一侧留出大面积纯色或纸底
- 装饰条带：实色长条以斜角穿过版面，可承载跑马文字

## 3. 字体排印
- 字体：Oswald / Roboto Condensed 等窄体粗黑；中文用超粗黑体
- 标题全大写（英文），字高压缩（letter-spacing 紧、行高 0.95-1.05）
- 层级：巨号数字/标题 96-220px；口号 24-40px 全大写；正文 13-15px 少量出现
- 文字可沿垂直方向排布（writing-mode: vertical-rl）做侧边口号

## 4. 色彩
- 纸底 #ece5d8；主红 #d5321f；墨黑 #1c1917；芥黄 #dfa92d 与靛蓝 #33556e 只做小面积点缀
- 红黑是唯一主角：红色块不超过版面 40%，黑色负责文字与粗描边
- 禁止渐变、禁止柔和色、禁止透明玻璃

## 5. 组件与交互规范
${specSection(
  `- 按钮：直角、2px 墨边、粗体大写；hover 向左上位移 2px 且硬阴影加深（像被拎起）；active 归位贴边
- 输入框：直角、2px 墨边、纸色底；focus 时边框变红并左移 1px；错误态红边 + 墨色粗体提示
- 下拉框：直角浮层 + 2px 墨边 + 5px 硬阴影；hover 选项填红转纸色字；选中项左侧红色实心方块
- 复选框：直角方框选中填红；单选：方框内实心方点；开关为直角滑轨 + 方块钮
- 分段控制：直角容器 + 红色方块指示块滑动；标签页为大写粗体 + 当前项红色下压条
- 手风琴：标题全大写粗体 + 方形 ±；展开区左侧 6px 红条
- 模态框：直角 + 2px 墨边 + 8px 硬阴影 + 红色标题条；遮罩纯 rgba(20,17,15,.6)
- 吐司：右下直角卡片 + 2px 墨边 + 左侧 6px 红条；提示条四种用红/黄/蓝/墨区分
- 表格：表头黑底纸字、直角、行线 2px 墨色；hover 行芥黄
- 进度：直角厚条（10px）红色填充 + 墨边；环形改直角方块环
- 步骤条：直角方块节点，当前步填红；分页直角方块；面包屑用 / 分隔大写
- 头像：方形 + 2px 墨边；可删标签直角小块
- 图标：几何实色形（三角/楔形/方块）+ 2px 墨边；严禁 emoji
- 骨架屏：直角灰块 + 两帧明灭（禁止柔和扫光）`,
  {
    hover: '向左上位移 2px、硬阴影从 3px 加深到 5px（色块被拎起的手感）',
    active: '位移归零、阴影贴边（压回纸面）',
    focus: '2px 红色实线框外扩 3px',
    toast: '右下角直角卡片堆叠，从右侧 14px 硬切进入，3s 后直线淡出，最多 3 条',
    dur: '150ms（先锋派动效要像印刷机：干脆、无弹跳）',
  },
)}

## 6. 质感细节
- 全部直角；阴影只允许「硬阴影」（0 模糊、纯色偏移）
- 纸底可加极淡印刷噪点（透明度 ≤ 5%）
- 元素可轻微斜置（rotate -6° ~ 6°）制造张力，但正文文字必须水平

## 7. 禁忌
- 禁止圆角、渐变、玻璃、柔影、emoji 图标
- 禁止居中对称的「安全排版」、禁止细字重正文`,
  spec: [
    '斜向轴线 15–25°，楔形色块切分版面，巨号数字压角',
    '红 #d5321f + 墨 #1c1917 + 纸底，芥黄/靛蓝小面积点缀',
    '窄体粗黑大写标题，行高 0.95–1.05，可垂直排布口号',
    '全直角 + 硬阴影，动效干脆无弹跳（150ms）',
  ],
  tokens: {
    colors: [
      { name: '纸底', value: '#ece5d8' },
      { name: '主红', value: '#d5321f' },
      { name: '墨黑', value: '#1c1917' },
      { name: '芥黄', value: '#dfa92d' },
      { name: '靛蓝', value: '#33556e' },
    ],
    fonts: [{ role: '标题/口号', stack: '"Oswald", "Roboto Condensed", "PingFang SC", sans-serif' }],
    radius: '0（全直角）',
    shadow: '5px 5px 0 rgba(28,25,23,.85)（硬阴影）',
    extras: [
      { label: '斜向轴线', value: '15–25°' },
      { label: '巨号数字', value: '120–220px' },
    ],
  },
  demo: {
    height: 2450,
    heightMobile: 4200,
    html: page({
      title: '构成主义 · Constructivism',
      fonts: ['Oswald:wght@500;700', 'Roboto+Condensed:wght@700'],
      css:
        scCss(scTheme) +
        `
body {
  font-family: "Oswald", "Roboto Condensed", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #ece5d8; color: #1c1917; padding: 42px 26px 52px;
  background-image: repeating-linear-gradient(45deg, rgba(28,25,23,.028) 0 1px, transparent 1px 7px);
}
.shell { max-width: 1080px; margin: 0 auto; position: relative; }
.topbar { display: flex; align-items: center; gap: 18px; border-bottom: 3px solid #1c1917; padding-bottom: 13px; }
.mark { width: 26px; height: 26px; background: #d5321f; clip-path: polygon(0 0, 100% 0, 0 100%); }
.brand { font-size: 19px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
.topnav { margin-left: auto; display: flex; gap: 22px; font-size: 13px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; }
.topnav span:nth-child(2){ color:#d5321f; }
.stage { position: relative; margin-top: 34px; min-height: 480px; overflow: hidden; }
.wedge { position: absolute; inset: 0; background: #d5321f; clip-path: polygon(0 0, 46% 0, 78% 100%, 0 100%); }
.band { position: absolute; left: -40px; right: -40px; top: 322px; height: 44px; background: #1c1917;
  transform: rotate(-8deg); color: #ece5d8; display: flex; align-items: center; gap: 26px;
  padding: 0 42px; font-size: 13px; letter-spacing: .3em; text-transform: uppercase; white-space: nowrap; overflow: hidden; }
.bignum { position: absolute; right: -12px; top: -46px; font-size: 300px; font-weight: 700; line-height: 1;
  color: transparent; -webkit-text-stroke: 3px #1c1917; letter-spacing: -.04em; user-select: none; }
.slogan { position: relative; z-index: 2; padding: 54px 0 0 34px; max-width: 520px; }
.slogan .kicker { display: inline-block; background: #1c1917; color: #ece5d8; font-size: 12px; letter-spacing: .3em;
  text-transform: uppercase; padding: 5px 12px; margin-bottom: 20px; }
.slogan h1 { font-size: clamp(44px, 6vw, 74px); line-height: .98; text-transform: uppercase; letter-spacing: -.01em; margin: 0; }
.slogan h1 em { font-style: normal; color: #ece5d8; -webkit-text-stroke: 2px #1c1917; }
.slogan h1 .red { color: #1c1917; background: #dfa92d; padding: 0 10px; display: inline-block; transform: rotate(-3deg); }
.slogan p.lead { font-size: 15px; line-height: 1.7; margin: 22px 0 26px; max-width: 400px; font-weight: 500;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif; }
.cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
.cta { font: inherit; font-size: 15px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
  padding: 13px 26px; border: 2px solid #1c1917; background: #1c1917; color: #ece5d8; cursor: pointer;
  box-shadow: 4px 4px 0 rgba(28,25,23,.55); transition: all .15s; }
.cta.ghost { background: transparent; color: #1c1917; }
.cta:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 rgba(28,25,23,.75); }
.cta:active { transform: none; box-shadow: 1px 1px 0 rgba(28,25,23,.75); }
.side-slogan { position: absolute; right: 12px; bottom: 26px; writing-mode: vertical-rl; font-size: 15px;
  letter-spacing: .42em; text-transform: uppercase; font-weight: 500; color: #1c1917; }
.tri { position: absolute; right: 190px; bottom: 30px; width: 0; height: 0; border-left: 34px solid transparent;
  border-bottom: 58px solid #dfa92d; transform: rotate(14deg); }
.strip-row { display: flex; gap: 16px; margin-top: 40px; }
.strip { flex: 1; border: 2px solid #1c1917; background: #f0e9da; padding: 17px 18px; box-shadow: 5px 5px 0 rgba(28,25,23,.85); position: relative; overflow: hidden; }
.strip:nth-child(2) { transform: rotate(-1.6deg); }
.strip:nth-child(3) { transform: rotate(1.2deg); }
.strip .no { font-size: 44px; font-weight: 700; line-height: 1; color: #d5321f; }
.strip h3 { font-size: 16px; text-transform: uppercase; letter-spacing: .1em; margin: 9px 0 7px; }
.strip p { font-size: 12.5px; line-height: 1.7; font-family: "PingFang SC", "Microsoft YaHei", sans-serif; color: #4a443b; margin: 0; }
.strip .diag { position: absolute; right: -22px; top: -22px; width: 56px; height: 56px; background: #1c1917; transform: rotate(45deg); }
.strip:nth-child(2) .diag { background: #dfa92d; }
@media (max-width: 760px) {
  .bignum { font-size: 170px; top: -20px; }
  .slogan { padding-left: 12px; }
  .strip-row { flex-direction: column; }
  .strip:nth-child(2), .strip:nth-child(3) { transform: none; }
  .side-slogan, .tri { display: none; }
}`,
      body: `
<div class="shell">
  <div class="topbar">
    <span class="mark"></span>
    <span class="brand">KONSTRUKT · 构成社</span>
    <nav class="topnav"><span>宣言</span><span>展品</span><span>工坊</span><span>通讯</span></nav>
  </div>
  <div class="stage">
    <div class="wedge"></div>
    <div class="bignum">21</div>
    <div class="slogan">
      <span class="kicker">MANIFEST 1923 · 第 21 号</span>
      <h1>把界面<br />做成<em>动员</em><br />的<span class="red">海报</span></h1>
      <p class="lead">斜切的色块、压角的巨号数字、一条穿过版面的黑色口号带——构成主义不装饰，它组织视线、指挥行动。</p>
      <div class="cta-row">
        <button class="cta">阅读宣言</button>
        <button class="cta ghost">加入工坊</button>
      </div>
    </div>
    <div class="band"><span>艺术进入生活</span><span>●</span><span>ART INTO LIFE</span><span>●</span><span>艺术进入生活</span><span>●</span><span>ART INTO LIFE</span></div>
    <div class="side-slogan">КНИГА — ГЛАВНОЕ ОРУЖИЕ</div>
    <div class="tri"></div>
  </div>
  <div class="strip-row">
    <div class="strip"><span class="diag"></span><div class="no">01</div><h3>楔形</h3><p>色块以对角切入版面，视线沿斜线滑动，停留点即行动点。</p></div>
    <div class="strip"><span class="diag"></span><div class="no">02</div><h3>口号带</h3><p>黑色横带以 -8° 穿过版面，重复出现的短句构成版面节奏。</p></div>
    <div class="strip"><span class="diag"></span><div class="no">03</div><h3>巨号数字</h3><p>描边数字压角出血，既是序号也是构图的一部分。</p></div>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
