import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import { specSection } from './prompt-spec';
import type { Paradigm } from './types';

const scTheme = {
  bg: '#e6e8f2',
  surface: '#e6e8f2',
  alt: 'rgba(90,100,150,0.08)',
  text: '#3a3d52',
  muted: '#8a8fa8',
  primary: '#6a5df9',
  onPrimary: '#ffffff',
  border: 'rgba(90,100,150,0.14)',
  radius: '16px',
  radiusLg: '24px',
  shadow: '6px 6px 14px #c3c6d4, -6px -6px 14px #ffffff',
  font: '"Manrope","PingFang SC","Microsoft YaHei",system-ui,sans-serif',
  mono: 'ui-monospace,"SF Mono",Consolas,monospace',
  ok: '#4caf7d',
  warn: '#e3a23c',
  err: '#e06060',
  info: '#6a5df9',
  focus: '#6a5df9',
  extraCss: `
.sc-cell{border:0;box-shadow:6px 6px 14px #c3c6d4,-6px -6px 14px #ffffff;}
.sc-btn{border:0;box-shadow:5px 5px 12px #c3c6d4,-5px -5px 12px #ffffff;}
.sc-btn.pri{color:#fff;background:linear-gradient(145deg,#7a6dff,#5c4fe8);box-shadow:4px 4px 10px rgba(106,93,249,.35),-3px -3px 8px #ffffff;}
.sc-btn:hover{transform:translateY(-2px);}
.sc-btn:active,.sc-btn.pressed{box-shadow:inset 4px 4px 9px #c3c6d4,inset -4px -4px 9px #ffffff;transform:none;}
.sc-inp,.sc-ta,.sc-sel-btn{border:0;box-shadow:inset 4px 4px 9px #c8cbdb,inset -4px -4px 9px #ffffff;}
.sc-sel-list,.sc-menu-list,.sc-sug{border:0;box-shadow:7px 7px 16px #c3c6d4,-7px -7px 16px #ffffff;}
.sc-modal-box,.sc-alert,.sc-toast{border:0;box-shadow:9px 9px 22px #c3c6d4,-9px -9px 22px #ffffff;}
.sc-box{border:0;box-shadow:3px 3px 7px #c8cbdb,-3px -3px 7px #ffffff;}
.sc-chk input:checked + .sc-box{box-shadow:inset 3px 3px 6px rgba(106,93,249,.4),inset -2px -2px 5px rgba(255,255,255,.6);background:linear-gradient(145deg,#7a6dff,#5c4fe8);}
.sc-sw .tr{box-shadow:inset 3px 3px 7px #c8cbdb,inset -3px -3px 7px #ffffff;background:#dcdfeb;}
.sc-sw input:checked + .tr{background:linear-gradient(145deg,#7a6dff,#5c4fe8);}
.sc-sw .tr::after{box-shadow:2px 2px 6px rgba(90,100,150,.4);}
.sc-prog{background:#dcdfeb;box-shadow:inset 3px 3px 6px #c8cbdb,inset -2px -2px 5px #ffffff;}
.sc-prog-fill{background:linear-gradient(90deg,#7a6dff,#5c4fe8);}
.sc-step .no{border:0;box-shadow:3px 3px 7px #c8cbdb,-3px -3px 7px #ffffff;}
.sc-step.cur .no,.sc-step.done .no{background:linear-gradient(145deg,#7a6dff,#5c4fe8);color:#fff;box-shadow:2px 2px 6px rgba(106,93,249,.35);}
.sc-pg-b{border:0;box-shadow:3px 3px 8px #c8cbdb,-3px -3px 8px #ffffff;}
.sc-pg-b.on{background:linear-gradient(145deg,#7a6dff,#5c4fe8);color:#fff;box-shadow:inset 2px 2px 5px rgba(60,45,190,.4);}`,
};

export const neumorphism: Paradigm = {
  id: 'neumorphism',
  no: '24',
  name: '新拟态',
  nameEn: 'Neumorphism',
  tagline: '同一块「软塑料」里挤出按钮、按进输入框——影子即界面。',
  origin: 'Dribbble Soft UI / Alexander Plyuto',
  year: '2019 — 2020',
  tags: ['柔影', '同色挤出', '内凹', '低对比'],
  bestFor: ['智能家居中控', '音乐播放器', '概念演示页'],
  avoid: ['强可访问性要求的正式产品', '内容密集的资讯页'],
  prompt: `# 设计范式：新拟态（Neuomorphism / Soft UI）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：整个界面是一块同色的软塑料/软胶面板，控件被「挤出」表面或「按进」表面——没有颜色边界，只有光影边界
- 情绪关键词：柔软、安静、圆润、内向、低对比
- 光源约定：左上 45° 单一光源；凸起 = 亮影左上 + 暗影右下；凹陷 = 反向 inset

## 2. 布局
- 背景与组件同色（如 #e6e8f2），全靠双向柔影区分层级
- 大圆角（16-28px）+ 宽松间距；面板之间用留白而非线
- 内容分区少而大：一屏 3-5 个区块，像一块整体打磨的控件板

## 3. 字体排印
- 字体：Manrope / Nunito 类圆润无衬线；文字颜色低对比灰紫 #3a3d52（ WCAG 例外需在交互态补足）
- 层级：H1 36-48px/700；正文 14-15px/1.8；标签小写灰
- 数字大而圆（tabular），用于播放器/仪表场景

## 4. 色彩
- 全场同色底 #e6e8f2；亮影 #ffffff；暗影 #c3c6d4；文字 #3a3d52
- 唯一强调色紫 #6a5df9 只用于：主按钮、开关 ON、进度、当前项
- 禁止出现第二种大面积颜色；禁止深色底

## 5. 组件与交互规范
${specSection(
  `- 按钮：无边框、双向柔影（5px 5px 12px 暗影 + -5px -5px 12px 亮影）；hover 上浮 2px 影子拉开；active 切换为 inset 双影（被按进面板）；主按钮为紫渐变凸起
- 输入框：凹陷式（inset 4px 4px 9px 暗影 + inset -4px -4px 9px 亮影），无边框；focus 时 inset 影加深 + 外圈紫晕；错误态紫晕换红晕
- 下拉框：浮层为同色凸起面板；选项 hover 时局部变凹（inset）；选中项紫字
- 复选框：同色凸起小方块，选中变凹并填紫渐变；单选：凹环 + 紫芯；开关：凹陷轨道 + 凸起圆钮，ON 时轨道紫渐变
- 分段控制：凹陷容器 + 凸起紫滑块缓慢滑动；标签页：文字 + 凹陷胶囊指示当前项
- 手风琴：标题行右侧圆形凸钮 +/−，展开时变凹；内容区 0.3s 高度缓动
- 模态框：同色凸起大面板（9px 9px 22px 双影），无描边；遮罩 rgba(90,100,150,.28)
- 吐司：右下同色凸起小卡 + 紫色左条；提示条同款
- 表格：无边框，行 hover 凹陷；表头小写灰
- 进度：凹陷槽 + 紫渐变填充；环形为凹槽 + 紫描边
- 步骤条：圆形凸起节点，当前/完成变紫渐变；分页凸起方块，当前项凹陷变紫；面包屑 › 分隔灰字
- 头像：圆形凸起 + 同色边；可删标签凸起胶囊
- 图标：同色浮雕感（双向柔影描出形状），禁彩色描边图标
- 骨架屏：同色微凹块 + 极缓呼吸 1.8s`,
  {
    hover: '上浮 2px、双向柔影各拉开 2px（6px→8px），像控件从面板里浮出来',
    active: '立即切换为 inset 双向柔影（被按进面板），无位移',
    focus: '2px 紫描边 + 4px 紫色 22% 外扩',
    toast: '右下角同色凸起小卡，从下 12px 软浮入，3s 后向下沉入淡出，最多 3 条',
    dur: '240ms（软塑料手感：慢一点、软一点，缓动 cubic-bezier(.22,1,.36,1)）',
  },
)}

## 6. 质感细节
- 阴影是唯一的「描边」：双向柔影的偏移量必须相等、模糊 ≥ 偏移 × 2
- 按压手感必须真实：active 态的 inset 阴影方向与 hover 相反
- 表面可加 1px 极淡噪点（透明度 ≤ 3%）增加磨砂感

## 7. 禁忌
- 禁止边框线、禁止纯平无影控件、禁止多彩色块
- 禁止高对比深色文字以外的高饱和颜色（紫 #6a5df9 除外）
- 正文对比度不足时必须局部加深文字色，不得牺牲可读性`,
  spec: [
    '同色底 #e6e8f2，全部层级靠双向柔影（亮 #ffffff / 暗 #c3c6d4）',
    '凸起 / 凹陷两种状态：active 必须切 inset（真实按压手感）',
    '唯一强调色紫 #6a5df9：主按钮 / 开关 ON / 进度 / 当前项',
    '大圆角 16–28px + 宽松留白；动效软而慢（240ms）',
  ],
  tokens: {
    colors: [
      { name: '面板', value: '#e6e8f2' },
      { name: '亮影', value: '#ffffff' },
      { name: '暗影', value: '#c3c6d4' },
      { name: '文字', value: '#3a3d52' },
      { name: '强调紫', value: '#6a5df9' },
    ],
    fonts: [{ role: '全场', stack: '"Manrope", "PingFang SC", system-ui, sans-serif' }],
    radius: '16–28px',
    shadow: '6px 6px 14px #c3c6d4, -6px -6px 14px #ffffff',
    extras: [
      { label: '光源', value: '左上 45°' },
      { label: '凹陷输入', value: 'inset 4px 4px 9px' },
    ],
  },
  demo: {
    height: 2450,
    heightMobile: 4200,
    html: page({
      title: '新拟态 · Neumorphism',
      fonts: ['Manrope:wght@500;700;800'],
      css:
        scCss(scTheme) +
        `
body { font-family: "Manrope", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #e6e8f2; color: #3a3d52; padding: 44px 26px 54px; }
.shell { max-width: 1000px; margin: 0 auto; }
.topbar { display: flex; align-items: center; gap: 15px; }
.logo { width: 40px; height: 40px; border-radius: 14px;
  background: linear-gradient(145deg, #f2f4fb, #d8dbe9); box-shadow: 4px 4px 10px #c8cbdb, -4px -4px 10px #ffffff;
  display: flex; align-items: center; justify-content: center; }
.logo i { width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(145deg, #7a6dff, #5c4fe8); }
.brand { font-weight: 800; font-size: 17px; letter-spacing: .02em; }
.brand small { display: block; font-size: 10px; color: #8a8fa8; letter-spacing: .3em; font-weight: 700; }
.topnav { margin-left: auto; display: flex; gap: 8px; }
.topnav span { font-size: 13px; font-weight: 700; color: #8a8fa8; padding: 9px 16px; border-radius: 12px; cursor: default; transition: all .24s cubic-bezier(.22,1,.36,1); }
.topnav span.on { color: #6a5df9; box-shadow: inset 3px 3px 7px #c8cbdb, inset -3px -3px 7px #ffffff; }
.hero { margin-top: 38px; display: grid; grid-template-columns: 1.1fr .9fr; gap: 26px; align-items: stretch; }
.panel { background: #e6e8f2; border-radius: 26px; padding: 34px 36px;
  box-shadow: 9px 9px 22px #c8cbdb, -9px -9px 22px #ffffff; }
.kicker { font-size: 11px; font-weight: 800; letter-spacing: .3em; color: #8a8fa8; }
.hero h1 { font-size: clamp(30px, 4vw, 44px); line-height: 1.16; font-weight: 800; margin: 13px 0 10px; color: #33364a; }
.hero h1 b { color: #6a5df9; }
.hero p.lead { font-size: 14.5px; line-height: 1.85; color: #6d7290; margin: 0 0 24px; }
.btnrow { display: flex; gap: 14px; flex-wrap: wrap; }
.nbtn { font: inherit; font-weight: 800; font-size: 14px; color: #3a3d52; padding: 12px 26px; border: 0; border-radius: 999px; cursor: pointer;
  background: #e6e8f2; box-shadow: 5px 5px 12px #c8cbdb, -5px -5px 12px #ffffff; transition: all .24s cubic-bezier(.22,1,.36,1); }
.nbtn.pri { color: #fff; background: linear-gradient(145deg, #7a6dff, #5c4fe8); box-shadow: 4px 4px 10px rgba(106,93,249,.35), -3px -3px 8px #ffffff; }
.nbtn:hover { transform: translateY(-2px); }
.nbtn:active { transform: none; box-shadow: inset 4px 4px 9px #c8cbdb, inset -4px -4px 9px #ffffff; }
.nbtn.pri:active { box-shadow: inset 4px 4px 9px rgba(50,38,160,.55); }
.dial { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; }
.knob { width: 150px; height: 150px; border-radius: 50%; position: relative;
  background: linear-gradient(145deg, #f0f2fa, #d6d9e8);
  box-shadow: 8px 8px 18px #c8cbdb, -8px -8px 18px #ffffff, inset 0 0 0 10px #e6e8f2; }
.knob::before { content: ""; position: absolute; left: 50%; top: 12px; width: 5px; height: 26px; border-radius: 3px;
  background: linear-gradient(180deg, #7a6dff, #5c4fe8); transform: translateX(-50%) rotate(28deg); transform-origin: 50% 62px; }
.knob b { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 800; color: #6a5df9; font-variant-numeric: tabular-nums; }
.dial small { font-size: 11.5px; color: #8a8fa8; letter-spacing: .18em; font-weight: 700; }
.chips { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 26px; }
.chip { background: #e6e8f2; border-radius: 20px; padding: 22px; box-shadow: 7px 7px 16px #c8cbdb, -7px -7px 16px #ffffff; transition: transform .24s cubic-bezier(.22,1,.36,1), box-shadow .24s; }
.chip:hover { transform: translateY(-3px); box-shadow: 9px 9px 20px #c3c6d4, -9px -9px 20px #ffffff; }
.chip .sq { width: 34px; height: 34px; border-radius: 12px; margin-bottom: 13px;
  background: #e6e8f2; box-shadow: inset 3px 3px 7px #c8cbdb, inset -3px -3px 7px #ffffff; display: flex; align-items: center; justify-content: center; }
.chip .sq i { width: 12px; height: 12px; border-radius: 4px; background: linear-gradient(145deg, #7a6dff, #5c4fe8); }
.chip b { display: block; font-size: 15px; font-weight: 800; }
.chip span { font-size: 12px; color: #8a8fa8; line-height: 1.6; display: block; margin-top: 5px; }
@media (max-width: 780px) { .hero { grid-template-columns: 1fr; } .chips { grid-template-columns: 1fr; } .topnav { display: none; } }`,
      body: `
<div class="shell">
  <div class="topbar">
    <span class="logo"><i></i></span>
    <span class="brand">SOFT·PANEL<small>NEUMORPHISM</small></span>
    <nav class="topnav"><span class="on">面板</span><span>场景</span><span>设备</span><span>我的</span></nav>
  </div>
  <div class="hero">
    <div class="panel">
      <span class="kicker">SOFT UI · 2019</span>
      <h1>影子即界面，<br /><b>按压</b>即反馈。</h1>
      <p class="lead">背景与控件同色，没有一条边框线——凸起与凹陷全靠双向柔影。手指按下去的那 0.24 秒，是新拟态全部的诚意的体现。</p>
      <div class="btnrow">
        <button class="nbtn pri">打开面板</button>
        <button class="nbtn">看看场景</button>
      </div>
    </div>
    <div class="panel dial">
      <div class="knob"><b>64°</b></div>
      <small>AMBIENT · 旋钮可拖动</small>
    </div>
  </div>
  <div class="chips">
    <div class="chip"><span class="sq"><i></i></span><b>挤出按钮</b><span>双向柔影把控件从面板里托出来，hover 时托得更高。</span></div>
    <div class="chip"><span class="sq"><i></i></span><b>按进输入框</b><span>输入框永远凹陷着，focus 的一瞬间凹陷加深一圈。</span></div>
    <div class="chip"><span class="sq"><i></i></span><b>紫色只留一处</b><span>开关 ON、进度、当前项——唯一的强调色守着唯一的位置。</span></div>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
