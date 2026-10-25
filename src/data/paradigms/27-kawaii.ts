import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import { specSection } from './prompt-spec';
import type { Paradigm } from './types';

const scTheme = {
  bg: '#fff7fa',
  surface: '#ffffff',
  alt: 'rgba(255,158,199,0.14)',
  text: '#7a6474',
  muted: '#b9a7b4',
  primary: '#ff9ec7',
  onPrimary: '#ffffff',
  border: 'rgba(255,158,199,0.5)',
  radius: '22px',
  radiusLg: '28px',
  shadow: '0 6px 18px rgba(255,158,199,0.28)',
  font: '"Baloo 2","ZCOOL KuaiLe","PingFang SC",sans-serif',
  mono: '"Baloo 2",ui-monospace,monospace',
  ok: '#7ed6a5',
  warn: '#ffc95e',
  err: '#ff8f8f',
  info: '#9ccbf5',
  focus: '#ff9ec7',
  extraCss: `
.sc-root{background-image:radial-gradient(rgba(255,158,199,.14) 2.2px, transparent 2.2px);background-size:22px 22px;}
.sc-cell{border:2px solid rgba(255,158,199,.4);border-radius:24px;box-shadow:0 6px 14px rgba(255,158,199,.18);}
.sc-cell h5{color:#ff9ec7;font-size:12px;letter-spacing:.1em;}
.sc-btn{border-radius:999px;border-width:2px;font-weight:700;}
.sc-btn.pri{background:linear-gradient(180deg,#ffb3d2,#ff8dbe);}
.sc-btn:hover{transform:translateY(-3px) rotate(-1deg);}
.sc-inp,.sc-ta,.sc-sel-btn{border-radius:18px;border-width:2px;}
.sc-seg-ind{background:#ffb3d2;}
.sc-badge,.sc-tag,.sc-pg-b,.sc-step .no{border-radius:999px;}
.sc-prog{background:rgba(255,158,199,.25);}
.sc-prog-fill{background:linear-gradient(90deg,#ffb3d2,#ff8dbe);}
.sc-sw input:checked + .tr{background:linear-gradient(180deg,#ffb3d2,#ff8dbe);}
.sc-modal-box{border-radius:28px;border-width:2px;}`,
};

export const kawaii: Paradigm = {
  id: 'kawaii',
  no: '27',
  name: '软萌糖果',
  nameEn: 'Kawaii Pastel',
  tagline: '马卡龙色、腮红按钮、会眨眼的吉祥物——每个控件都想被捏一下。',
  origin: '日系可爱文化 / Sanrio / LINE 好友贴图',
  year: '1970s —',
  tags: ['马卡龙色', '圆滚滚', '腮红', '弹跳'],
  bestFor: ['儿童 / 宠物 / 甜品品牌', '社交 App 活动页', '周边商店'],
  avoid: ['严肃金融', '企业后台', '极简性冷淡品牌'],
  prompt: `# 设计范式：软萌糖果（Kawaii Pastel）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：日系可爱文化——马卡龙色、圆滚滚的形状、带腮红的吉祥物、贴纸与对话气泡
- 情绪关键词：软、甜、弹、无害、想捏
- 万物有脸：吉祥物要会眨眼，按钮可以有腮红，空态要在打瞌睡

## 2. 布局
- 圆的世界：容器圆角 20-28px 起，按钮/开关/头像全胶囊化；角是圆的，连 hover 位移都带 1° 的歪头感
- 点阵糖果底：背景铺 2px 圆点阵（粉 14%），或云朵/糖果散点
- 贴纸层：白粗边（3px）+ 轻投影 + ±2° 旋转的贴纸卡片，像贴在手账上
- 吉祥物位：页面需要一个 blob 形主角（CSS 圆 + 眼睛 + 腮红），会眨眼（3-4s 循环）

## 3. 字体排印
- 字体：Baloo 2 / M PLUS Rounded 类圆体；中文用站酷快乐体类圆体
- H1 34-46px / 700，可带白色 text-shadow 描边（软糖浮雕感）；正文 14px / 1.9
- 语气软萌：文案用短句 + 语气词，但信息结构不能软（层级照常清晰）

## 4. 色彩
- 奶油底 #fff7fa；樱粉 #ff9ec7 主色；薄荷 #a8e6cf；柠檬 #ffe08a；天蓝 #a8d8ff；文字 #7a6474（禁止纯黑）
- 同屏最多 3 个糖果色 + 白；饱和度中高但明度必须高
- 描边纪律：贴纸与卡片用色相的 2px 淡描边，不用黑边（黑边会变成孟菲斯）

## 5. 组件与交互规范
${specSection(
  `- 签名组件：腮红按钮（主按钮下缘两侧两个 6px 粉色半透明圆当腮红）与气泡对话 tooltip
- 按钮：胶囊 999px + 2px 同色系淡边；hover 歪头 -1° + 上浮 3px（cubic-bezier(.34,1.56,.64,1)）；active 压扁 scale(.96,.94)
- 输入框：radius 18px + 2px 淡粉边；focus 边框变实粉 + 3px 15% 光环；placeholder 带波浪号～
- 下拉框浮层：圆角 20px 白卡 + 粉色 2px 边 + 小尾巴（伪元素三角），像对话气泡
- 开关：胶囊轨道 ON 时樱粉渐变，圆钮上有一颗高光点；切换带弹性
- 表格：行高 46px+、行线 10% 粉、hover 行淡粉底；空态画打瞌睡的 blob
- 加载：blob 弹跳 loading（三个圆点依次弹跳 0.9s）
- 图标：圆润填充形（2px 圆角端点）；允许极少量 emoji（本范式例外）`,
  {
    hover: '歪头 -1° + 上浮 3px + 腮红变明显，弹性回弹 cubic-bezier(.34,1.56,.64,1)',
    active: '压扁 scale(.96,.94)（像被捏了一下）',
    focus: '2px 樱粉描边 + 3px 15% 外扩',
    toast: '右下角圆角 22px 白卡 + 粉边，弹跳进入并歪 1°，3s 后缩小淡出，最多 3 条',
    dur: '280ms（一切动效都带弹性；眨眼循环 3.5s）',
  },
)}

## 6. 质感细节
- 软糖高光：按钮/卡片顶部 1px 白色内高光 + 底部淡粉外影
- 云朵圆角：主视觉用 2-3 个叠加的大圆拼成 blob，绝不用规则圆
- 表情系统：blob 的眼睛用两颗 4px 圆，眨眼 = scaleY(0.1) 120ms

## 7. 禁忌
- 禁止纯黑文字与黑描边、禁止直角、禁止锐利阴影（必须带颜色）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '马卡龙四色：樱粉 #ff9ec7 主 + 薄荷/柠檬/天蓝点缀，文字 #7a6474 禁纯黑',
    '腮红按钮 + 气泡下拉（带小尾巴）+ 会眨眼的 blob 吉祥物',
    '贴纸卡片：白底 2px 淡边 + 3px 白粗边贴纸 + ±2° 旋转',
    '点阵糖果底；动效全弹性 280ms（回弹系数 1.56）',
  ],
  tokens: {
    colors: [
      { name: '奶油', value: '#fff7fa' },
      { name: '樱粉', value: '#ff9ec7' },
      { name: '薄荷', value: '#a8e6cf' },
      { name: '柠檬', value: '#ffe08a' },
      { name: '天蓝', value: '#a8d8ff' },
    ],
    fonts: [{ role: '全场', stack: '"Baloo 2", "ZCOOL KuaiLe", "PingFang SC", sans-serif' }],
    radius: '18–28px（按钮 999px）',
    shadow: '0 6px 18px rgba(255,158,199,.28)（彩色柔影）',
    extras: [
      { label: '腮红', value: '6px 半透明粉圆 ×2' },
      { label: '眨眼', value: 'scaleY(.1) 120ms / 3.5s' },
    ],
  },
  demo: {
    height: 2450,
    heightMobile: 4200,
    html: page({
      title: '软萌糖果 · Kawaii Pastel',
      fonts: ['Baloo+2:wght@500;700;800', 'ZCOOL+KuaiLe'],
      css:
        scCss(scTheme) +
        `
body {
  font-family: "Baloo 2", "ZCOOL KuaiLe", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #7a6474; padding: 40px 26px 52px;
  background: #fff7fa;
  background-image: radial-gradient(rgba(255,158,199,.16) 2.2px, transparent 2.2px);
  background-size: 24px 24px;
}
.shell { max-width: 1000px; margin: 0 auto; }
.top { display: flex; align-items: center; gap: 13px; }
.mascot { width: 52px; height: 48px; border-radius: 50% 50% 46% 46%; background: #fff;
  border: 2px solid rgba(255,158,199,.65); position: relative; box-shadow: 0 4px 10px rgba(255,158,199,.3); }
.mascot .eye { position: absolute; top: 17px; width: 5px; height: 5px; border-radius: 50%; background: #7a6474;
  animation: blink 3.5s infinite; }
.mascot .eye.l { left: 13px; } .mascot .eye.r { right: 13px; }
.mascot .cheek { position: absolute; top: 26px; width: 8px; height: 5px; border-radius: 50%; background: rgba(255,143,190,.55); }
.mascot .cheek.l { left: 7px; } .mascot .cheek.r { right: 7px; }
.mascot .mouth { position: absolute; left: 50%; top: 26px; width: 7px; height: 4px; margin-left: -3.5px;
  border: 1.6px solid #7a6474; border-top: 0; border-radius: 0 0 8px 8px; }
@keyframes blink { 0%, 91%, 100% { transform: scaleY(1); } 94% { transform: scaleY(.1); } 97% { transform: scaleY(1); } }
@media (prefers-reduced-motion: reduce) { .mascot .eye { animation: none; } }
.brand b { font-size: 18px; display: block; line-height: 1.1; }
.brand small { font-size: 11px; color: #b9a7b4; letter-spacing: .16em; }
.nav { margin-left: auto; display: flex; gap: 8px; }
.nav span { font-size: 13px; font-weight: 700; padding: 7px 15px; border-radius: 999px; color: #a08d9c;
  background: rgba(255,255,255,.8); border: 2px solid transparent; }
.nav span.on { color: #ff8dbe; border-color: rgba(255,158,199,.6); background: #fff; }
.hero { display: grid; grid-template-columns: 1.05fr .95fr; gap: 34px; align-items: center; margin-top: 34px; }
.bubble { display: inline-block; background: #fff; border: 2px solid rgba(255,158,199,.6); border-radius: 20px 20px 20px 6px;
  padding: 8px 16px; font-size: 13px; font-weight: 700; color: #ff8dbe; box-shadow: 0 4px 10px rgba(255,158,199,.22); }
.hero h1 { font-size: clamp(34px, 4.6vw, 50px); line-height: 1.2; margin: 14px 0 10px; font-weight: 800;
  text-shadow: 0 2px 0 #fff, 0 4px 0 rgba(255,158,199,.35); }
.hero h1 b { color: #ff8dbe; }
.hero p.lead { font-size: 15px; line-height: 1.95; margin: 0 0 24px; }
.btnrow { display: flex; gap: 13px; flex-wrap: wrap; }
.cbtn { position: relative; font: inherit; font-weight: 800; font-size: 15px; color: #fff; padding: 13px 30px;
  border: 2px solid rgba(255,143,190,.7); border-radius: 999px; cursor: pointer;
  background: linear-gradient(180deg, #ffb3d2, #ff8dbe); box-shadow: inset 0 2px 0 rgba(255,255,255,.6), 0 6px 14px rgba(255,143,190,.4);
  transition: all .28s cubic-bezier(.34,1.56,.64,1); }
.cbtn::before, .cbtn::after { content: ""; position: absolute; bottom: 9px; width: 7px; height: 5px;
  border-radius: 50%; background: rgba(255,255,255,.5); }
.cbtn::before { left: 14px; } .cbtn::after { right: 14px; }
.cbtn.ghost { background: #fff; color: #ff8dbe; box-shadow: 0 4px 10px rgba(255,158,199,.25); }
.cbtn:hover { transform: translateY(-3px) rotate(-1deg); }
.cbtn:active { transform: scale(.96, .94); }
.blobbox { display: flex; justify-content: center; position: relative; }
.blob { width: 190px; height: 175px; background: #fff; border: 2px solid rgba(255,158,199,.65);
  border-radius: 48% 52% 55% 45% / 52% 46% 54% 48%; position: relative;
  box-shadow: inset 0 -8px 0 rgba(255,158,199,.18), 0 12px 26px rgba(255,158,199,.3); }
.blob::before { content: ""; position: absolute; top: 14px; left: 26px; width: 42px; height: 26px;
  background: #a8e6cf; border-radius: 50% 50% 60% 40%; transform: rotate(-14deg); opacity: .8; }
.blob .eye { position: absolute; top: 74px; width: 12px; height: 12px; border-radius: 50%; background: #7a6474;
  animation: blink 3.5s infinite; }
.blob .eye.l { left: 56px; } .blob .eye.r { right: 56px; }
.blob .cheek { position: absolute; top: 96px; width: 20px; height: 12px; border-radius: 50%; background: rgba(255,143,190,.5); }
.blob .cheek.l { left: 34px; } .blob .cheek.r { right: 34px; }
.blob .mouth { position: absolute; left: 50%; top: 98px; width: 16px; height: 9px; margin-left: -8px;
  border: 2.4px solid #7a6474; border-top: 0; border-radius: 0 0 14px 14px; }
.blob .zig { position: absolute; bottom: -16px; left: 50%; transform: translateX(-50%);
  background: #ffe08a; border: 2px solid rgba(255,158,199,.6); border-radius: 999px;
  font-size: 11.5px; font-weight: 800; color: #8a7346; padding: 4px 14px; white-space: nowrap; }
.stickers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 40px; }
.st { background: #fff; border: 2px solid rgba(255,158,199,.45); border-radius: 22px; padding: 22px 20px;
  box-shadow: 0 6px 14px rgba(255,158,199,.18); position: relative; transition: all .28s cubic-bezier(.34,1.56,.64,1); }
.st:nth-child(1) { transform: rotate(-1.6deg); } .st:nth-child(2) { transform: rotate(1deg); } .st:nth-child(3) { transform: rotate(-.8deg); }
.st:hover { transform: translateY(-5px) rotate(0); box-shadow: 0 12px 22px rgba(255,158,199,.3); }
.st .tape { position: absolute; top: -9px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 58px; height: 17px; background: rgba(255,224,138,.75); border-radius: 3px; }
.st b { font-size: 15.5px; display: block; margin: 8px 0 5px; }
.st p { font-size: 12.5px; line-height: 1.8; margin: 0; color: #a08d9c; }
.st .face { width: 34px; height: 30px; border-radius: 50% 50% 46% 46%; background: linear-gradient(180deg, #a8e6cf, #8bd8b4); position: relative; }
.st:nth-child(2) .face { background: linear-gradient(180deg, #a8d8ff, #8cc4f0); }
.st:nth-child(3) .face { background: linear-gradient(180deg, #ffe08a, #ffd45e); }
.st .face::before, .st .face::after { content: ""; position: absolute; top: 12px; width: 4px; height: 4px;
  border-radius: 50%; background: #7a6474; }
.st .face::before { left: 10px; } .st .face::after { right: 10px; }
@media (max-width: 800px) { .hero { grid-template-columns: 1fr; } .stickers { grid-template-columns: 1fr; } .nav { display: none; } }`,
      body: `
<div class="shell">
  <div class="top">
    <div class="mascot"><span class="eye l"></span><span class="eye r"></span><span class="cheek l"></span><span class="cheek r"></span><span class="mouth"></span></div>
    <div class="brand"><b>捏捏研究所</b><small>KAWAII LAB · No.27</small></div>
    <nav class="nav"><span class="on">首页</span><span>贴纸</span><span>吉祥物</span><span>捏我</span></nav>
  </div>
  <div class="hero">
    <div>
      <span class="bubble">今天也要圆圆的哦～</span>
      <h1>所有控件，<br />都想被<b>捏一下</b></h1>
      <p class="lead">按钮带腮红，开关会弹跳，下拉框拖着小尾巴像在说话。软糖高光、歪头悬停、压扁按下——可爱不是装饰，是手感。</p>
      <div class="btnrow">
        <button class="cbtn">捏一下</button>
        <button class="cbtn ghost">领贴纸</button>
      </div>
    </div>
    <div class="blobbox">
      <div class="blob">
        <span class="eye l"></span><span class="eye r"></span>
        <span class="cheek l"></span><span class="cheek r"></span>
        <span class="mouth"></span>
        <span class="zig">我会眨眼哦 ✧</span>
      </div>
    </div>
  </div>
  <div class="stickers">
    <div class="st"><span class="tape"></span><div class="face"></div><b>腮红按钮</b><p>主按钮的两团腮红 hover 时会更红一点——被看到会害羞。</p></div>
    <div class="st"><span class="tape"></span><div class="face"></div><b>气泡下拉</b><p>下拉浮层带一个小尾巴，像吉祥物在说悄悄话。</p></div>
    <div class="st"><span class="tape"></span><div class="face"></div><b>压扁反馈</b><p>按下时 scale(.96,.94)，是所有软东西被捏时的共同反应。</p></div>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
