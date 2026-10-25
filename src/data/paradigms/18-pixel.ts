import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const theme = {
  bg: '#16121f',
  surface: '#241b33',
  alt: 'rgba(255, 241, 232, 0.07)',
  text: '#fff1e8',
  muted: '#9a8cb0',
  primary: '#ff004d',
  onPrimary: '#fff1e8',
  border: 'rgba(255, 241, 232, 0.55)',
  radius: '0px',
  radiusLg: '0px',
  shadow: '4px 4px 0 rgba(0, 0, 0, 0.5)',
  font: '"VT323", "PingFang SC", monospace',
  mono: '"Press Start 2P", monospace',
  ok: '#00e436',
  warn: '#ffec27',
  err: '#ff004d',
  info: '#29adff',
  focus: '#29adff',
  extraCss: `
.sc-root { image-rendering: pixelated; }
.sc-cell { border-width: 3px; box-shadow: 4px 4px 0 rgba(0,0,0,.5); }
.sc-head h2 { font-family: "Press Start 2P", monospace; font-size: 21px; line-height: 1.5; text-shadow: 3px 3px 0 rgba(255,0,77,.55); }
.sc-kicker { font-family: "Press Start 2P", monospace; font-size: 9px; color: #ffec27; }
.sc-btn { border-width: 3px; border-radius: 0; font-family: "VT323", monospace; font-size: 17px; padding: 6px 16px; box-shadow: 3px 3px 0 rgba(0,0,0,.55); text-transform: uppercase; }
.sc-btn:active { transform: translate(3px, 3px); box-shadow: 0 0 0 rgba(0,0,0,.5); }
.sc-btn.pri { background: #ff004d; }
.sc-inp, .sc-ta, .sc-sel-btn { border-width: 3px; border-radius: 0; font-family: "VT323", monospace; font-size: 17px; }
.sc-cell h5 { font-family: "Press Start 2P", monospace; font-size: 8.5px; letter-spacing: 0.1em; color: #ffec27; }
.sc-badge { border-radius: 0; border: 2px solid #fff1e8; font-family: "VT323", monospace; font-size: 14px; }
.sc-tag { border-width: 3px; border-radius: 0; font-family: "VT323", monospace; font-size: 15px; }
.sc-tbl th { font-family: "Press Start 2P", monospace; font-size: 8px; letter-spacing: 0.06em; }
.sc-tbl td { font-family: "VT323", monospace; font-size: 16px; }
.sc-tbl td.mono, .rank-no { font-family: "VT323", monospace; }
.sc-note, .sc-lbl, .sc-help, .sc-pane, .sc-acc-b { font-family: "VT323", monospace; font-size: 15.5px; }
.sc-tab, .sc-seg-b, .sc-acc-h, .sc-menu-item, .sc-sel-opt { font-family: "VT323", monospace; font-size: 16px; }
.sc-sel-val, .sc-sw-txt, .sc-rng-out, .sc-prog-num, .sc-ring-num, .sc-step-lbl, .sc-pg-b, .sc-crumb, .sc-file-name, .sc-count { font-family: "VT323", monospace; font-size: 15px; }
.sc-modal-box h4 { font-family: "Press Start 2P", monospace; font-size: 13px; line-height: 1.7; }
.sc-toast { font-family: "VT323", monospace; font-size: 16px; border-width: 3px; border-radius: 0; }
.sc-ava { border-radius: 0; border: 3px solid #fff1e8; font-family: "Press Start 2P", monospace; font-size: 9px; }
.sc-prog { height: 14px; border: 3px solid #fff1e8; border-radius: 0; }
.sc-prog-fill { background: repeating-linear-gradient(90deg, #00e436 0 6px, #00b32e 6px 12px); }
.sc-skel-box .sk .ln { height: 12px; border-radius: 0; border: 2px solid rgba(255,241,232,.3); }
`,
};

export const pixel: Paradigm = {
  id: 'pixel',
  no: '18',
  name: '像素艺术',
  nameEn: 'Pixel Art',
  tagline: '8-bit 游戏 HUD、像素边框、血条与金币——街机厅的界面语言。',
  origin: 'FC/NES 时代游戏 UI / PICO-8 调色板 / 独立游戏复兴',
  year: '1983 —',
  tags: ['8-bit', '游戏 HUD', '硬边框', '街机'],
  kind: 'paradigm',
  bestFor: ['游戏产品', '独立开发者站', '复古主题活动', '极客工具'],
  avoid: ['企业级 SaaS', '金融与医疗界面', '长文阅读场景'],
  prompt: `# 设计范式：像素艺术（Pixel Art / 8-bit）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：8-bit 游戏机界面；像一台没关机的红白机
- 情绪关键词：街机、金币、血条、对话框、READY?
- 核心手法：一切边缘都是「像素阶梯」，一切颜色都来自限定调色板

## 2. 布局
- 深底（#16121f 或经典灰 #1a1c2c），内容分区用 3px 以上实色边框的「游戏面板」
- HUD 常驻元素：左上角生命/血条（心形 ♥）、右上角金币/分数、底部对话框
- 信息像游戏日志一样一行一行出现，字号分级明确

## 3. 字体排印
- 标题：像素字体（Press Start 2P / 点阵体），18-32px，行高放宽到 1.6
- 正文：等宽点阵风（VT323 / Fira Code）15-18px——注意像素正文必须比常规大
- 数字前导零、右对齐、tabular，像计分板

## 4. 色彩
- 底：#16121f；面板：#241b33；文字：#fff1e8
- 限定调色板：红 #ff004d、黄 #ffec27、绿 #00e436、蓝 #29adff、紫 #7c2d8f
- 彩色只做强调与状态，一屏主色 + 一个强调色

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
- 签名组件：分段像素进度条（repeating-linear-gradient 方格 + ♥/★）与 8-bit 对话框（双层 3px 边）
- 按钮：3px 实边 + 零圆角 + 4px 硬投影；hover 整块反色；active 位移贴边
- 输入框：inset 3px 3px 0 深色内凹；focus 边框闪黄
- 下拉框浮层：直角像素框 + ▶ 选中前缀，无阴影无模糊
- 步骤条/分页：像素方块节点，当前项反色
- 动画纪律：只用 steps()，2-3 帧，没有平滑过渡
- 色板锁死 PICO-8 十六色，禁止抗锯齿感（禁 text-shadow 柔化）
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：整块反色（前景↔背景互换），零渐变零位移之外的效果
- active：位移到投影位置（贴边），像被按进底座
- focus-visible：3px 黄色实线框（闪烁 500ms 一循环更还原）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，80ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（80ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：底部像素对话框，打字机式出现（每字符 24ms），停留 3s 后整块消失
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 80ms（8-bit 没有平滑：统一 2-3 帧，动画用 steps 而非 ease），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全局 image-rendering: pixelated；边框用多重 box-shadow 堆出像素阶梯
- 装饰：像素心 ♥、金币 ◉、剑 ⚔、对话框尾巴（CSS 三角）
- 可选扫描线或轻微 CRT 曲面（幅度极小，别盖过内容）

## 7. 禁忌
- 禁止圆角、渐变、毛玻璃、柔和模糊阴影
- 禁止细于 2px 的边框与线条
- 禁止把像素字体用于长段落（可读性灾难），正文用点阵等宽
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '3px 实边 + 零圆角 + 4px 硬投影',
    '限定调色板：红/黄/绿/蓝 + 深底',
    '像素字体标题 + 点阵等宽正文',
    'HUD 元素：♥ 血条、金币、对话框',
  ],
  tokens: {
    colors: [
      { name: '街机深底', value: '#16121f' },
      { name: '面板', value: '#241b33' },
      { name: '能量红', value: '#ff004d' },
      { name: '金币黄', value: '#ffec27' },
      { name: '草地绿', value: '#00e436' },
      { name: '天空蓝', value: '#29adff' },
    ],
    fonts: [
      { role: '标题', stack: '"Press Start 2P", "点阵体", monospace' },
      { role: '正文', stack: '"VT323", "Fira Code", monospace' },
    ],
    radius: '0px（全部直角）',
    shadow: '4px 4px 0 rgba(0,0,0,.5)',
    extras: [
      { label: '边框', value: '3px solid #fff1e8' },
      { label: '渲染', value: 'image-rendering: pixelated' },
    ],
  },
  demo: {
    height: 1400,
    heightMobile: 1750,
    html: page({
      title: '像素艺术 · Pixel Art',
      fonts: ['Press+Start+2P', 'VT323'],
      css: scCss(theme) + `
body { font-family: "VT323", "PingFang SC", monospace; background: #16121f; color: #fff1e8; padding: 44px 30px 54px; font-size: 17px; }
.shell { max-width: 1060px; margin: 0 auto; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 36px; }
.brand { font-family: "Press Start 2P", monospace; font-size: 14px; color: #ffec27; text-shadow: 3px 3px 0 rgba(255,0,77,.6); }
.nav-links span { margin-left: 18px; font-size: 17px; cursor: default; color: #9a8cb0; text-transform: uppercase; }
.nav-links span:hover { color: #29adff; }
.hero { position: relative; background: #241b33; border: 3px solid #fff1e8; box-shadow: 5px 5px 0 rgba(0,0,0,.55); padding: 46px 44px 40px; }
.hud { display: flex; justify-content: space-between; align-items: center; font-size: 18px; margin-bottom: 22px; }
.hud .life { color: #ff004d; letter-spacing: 3px; }
.hud .coin { color: #ffec27; }
.hero h1 { font-family: "Press Start 2P", monospace; font-size: clamp(20px, 3.4vw, 34px); line-height: 1.65; margin: 6px 0 20px; color: #fff1e8; text-shadow: 4px 4px 0 rgba(255,0,77,.55); }
.hero h1 .b { color: #29adff; }
.hero p { max-width: 480px; font-size: 18px; line-height: 1.7; color: #c9bde0; }
.cta { display: flex; gap: 14px; margin-top: 26px; flex-wrap: wrap; }
.cta a { font-family: "Press Start 2P", monospace; font-size: 11px; padding: 13px 20px; border: 3px solid #fff1e8; background: #ff004d; color: #fff1e8; cursor: pointer; text-decoration: none; box-shadow: 4px 4px 0 rgba(0,0,0,.55); transition: transform .08s, box-shadow .08s; }
.cta a.b2 { background: #241b33; color: #29adff; border-color: #29adff; }
.cta a:hover { transform: translate(-1px, -1px); box-shadow: 5px 5px 0 rgba(0,0,0,.55); }
.cta a:active { transform: translate(3px, 3px); box-shadow: 1px 1px 0 rgba(0,0,0,.55); }
.dialog { margin-top: 30px; background: #241b33; border: 3px solid #fff1e8; box-shadow: 5px 5px 0 rgba(0,0,0,.55); padding: 18px 20px; position: relative; }
.dialog::after { content: ""; position: absolute; bottom: -14px; left: 40px; width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 14px solid #fff1e8; }
.dialog .who { font-family: "Press Start 2P", monospace; font-size: 9px; color: #ffec27; margin-bottom: 9px; }
.dialog p { font-size: 18px; line-height: 1.65; color: #fff1e8; max-width: none; }
.dialog .next { text-align: right; color: #ff004d; animation: blink 1s steps(1) infinite; font-size: 19px; }
@keyframes blink { 50% { opacity: 0; } }
.inventory { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 34px; }
.slot { background: #241b33; border: 3px solid rgba(255,241,232,.4); aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; box-shadow: inset 3px 3px 0 rgba(0,0,0,.4); }
.slot .ic { font-size: 26px; }
.slot small { font-size: 14px; color: #9a8cb0; }
.slot.hot { border-color: #ffec27; }
@media (max-width: 760px) {
  .inventory { grid-template-columns: repeat(2, 1fr); }
  .nav-links { display: none; }
  .hero { padding: 34px 22px 54px; }
}`,
      body: `
<div class="shell">
  <nav class="nav">
    <div class="brand">PARADIGM QUEST</div>
    <div class="nav-links"><span>任务</span><span>背包</span><span>商店</span><span>存档</span></div>
  </nav>
  <section class="hero">
    <div class="hud">
      <span class="life">♥ ♥ ♥</span>
      <span class="coin">◉ 0042</span>
    </div>
    <h1>INSERT COIN<br />TO <span class="b">开始设计</span></h1>
    <p>警告：检测到「AI 默认味」Boss 出现在附近。装备像素边框与限定调色板，按 START 进入展厅。</p>
    <div class="cta">
      <a>PRESS START</a>
      <a class="b2">调色板 ⇄</a>
    </div>
  </section>
  <div class="dialog">
    <div class="who">▸ 馆长 NPC</div>
    <p>「欢迎来到范式展览馆。这里的每一件展品都是一套 8-bit 规则——3px 边框、零圆角、限定六色。拿走你需要的，别碰默认味。」</p>
    <div class="next">▼</div>
  </div>
  <section class="inventory">
    <div class="slot hot"><span class="ic">⚔</span><small>像素剑</small></div>
    <div class="slot"><span class="ic">🛡</span><small>边框盾</small></div>
    <div class="slot"><span class="ic">◉</span><small>金币 ×42</small></div>
    <div class="slot"><span class="ic">♥</span><small>血条 ×3</small></div>
  </section>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
