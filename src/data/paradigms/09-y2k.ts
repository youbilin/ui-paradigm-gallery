import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#fff0f5",
  "surface": "#ffffff",
  "alt": "rgba(255,113,206,0.08)",
  "text": "#4a2c42",
  "muted": "#a37e96",
  "primary": "#ff71ce",
  "onPrimary": "#ffffff",
  "border": "rgba(255,113,206,0.4)",
  "radius": "999px",
  "radiusLg": "24px",
  "shadow": "0 2px 8px rgba(255,113,206,0.3), inset 0 1px 0 rgba(255,255,255,0.8)",
  "font": "\"Comic Sans MS\", \"Chalkboard SE\", \"PingFang SC\", sans-serif",
  "mono": "ui-monospace, \"SF Mono\", Consolas, monospace",
  "ok": "#00c853",
  "warn": "#ffab00",
  "err": "#ff5252",
  "info": "#01cdfe",
  "focus": "#ff71ce",
  "extraCss": ".sc-cell{border-radius:22px;}.sc-btn{border-radius:999px;background:linear-gradient(180deg,#ffffff,#ffe3f1);border-color:rgba(255,113,206,0.55);font-weight:700;}.sc-btn.pri{background:linear-gradient(180deg,#ff9bd8,#ff71ce);color:#fff;text-shadow:0 1px 0 rgba(0,0,0,0.15);}.sc-inp,.sc-ta,.sc-sel-btn{border-radius:999px;background:linear-gradient(180deg,#fff,#fff2f8);}.sc-badge{border-radius:999px;border:1px solid rgba(255,113,206,0.5);}"
};

export const y2k: Paradigm = {
  id: 'y2k',
  no: '09',
  name: '千禧复古',
  nameEn: 'Y2K / Retro Web',
  tagline: '渐变、闪粉、跑马灯——2003 年的互联网全都回来啦。',
  origin: 'Web 1.0 / GeoCities / 辣妹风',
  year: '1998 — 2004',
  tags: ['复古', '渐变', '跑马灯', '闪粉'],
  bestFor: ['粉丝页/活动页', '复古品牌营销', '音乐/潮流产品'],
  avoid: ['B 端产品', '严肃内容'],
  prompt: `# 设计范式：千禧复古（Y2K / Retro Web）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：2003 年个人主页的繁荣过剩；要「满」、要「亮」、要「闪」
- 情绪关键词：热闹、甜腻、好玩、复古未来

## 2. 布局
- 居中窄栏（640-720px），内容上下堆叠，区块之间用花哨分隔线
- 必备构件：跑马灯横幅（marquee）、访客计数器、Webring 友链、闪光「NEW!」徽章
- 允许表格感的老式布局（细边框格子），但保持呼吸

## 3. 字体排印
- 大标题：Impact / Arial Black，全大写或带 ★ 装饰，字号 40-64px
- 正文：Tahoma / Verdana 12-13px（老 IE 味道）
- 点缀：Silkscreen 等像素字体做小标签（8-12px）

## 4. 色彩
- 四主色：热粉 #ff71ce、电青 #01cdfe、奶黄 #fffb96、藤紫 #b967ff
- 底色：白或淡粉 #fff0f5 + 星星/波点平铺图案
- 渐变只做「亮面」：按钮、标题文字、横幅（135deg 双色）

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
- 签名组件：glossy 亮面按钮（linear-gradient 180deg 白 65% → 透明 55% 叠主色）与跑马灯横幅
- 按钮：胶囊 + 2px 白边 + 亮面 + 文字白描边；hover scale(1.04) 弹性回弹
- 输入框：白/浅紫底 + 2px 银渐变边 + 内凹；focus 亮青外发光
- 下拉框浮层：亮面小窗 + 2px 银边 + 迷你标题栏
- 徽章：±5° 旋转 + NEW! / HOT! + 黑白细边
- 表格：银色边框 + 亮色斑马纹，hover 亮青
- 允许 ✦ 星星串分隔符与少量 emoji 点缀（全馆唯一例外）
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：整块提亮 + scale(1.04)，光泽随之移动
- active：scale(0.97) 且饱和度提高一档
- focus-visible：亮青或亮粉虚线框外扩 3px；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，200ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（200ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角 glossy 小窗堆叠，弹跳进入（cubic-bezier(.34,1.56,.64,1)），3s 后淡出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 200ms（弹跳类 300ms，闪星星 1s 循环），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 闪烁：opacity steps(1) 1s 动画，只给一处
- 计数器：黑底绿字等宽数字（LED 感）
- 鼠标友好：hover 时按钮变亮/位移 1px

## 7. 禁忌
- 禁止极简、留白克制、细线、低饱和——这一页的敌人是「高级感」
- 禁止现代圆角卡片体系与柔和阴影
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '居中窄栏 + 跑马灯 + 访客计数器 + Webring',
    '亮面按钮：渐变叠加 + 白边 + 胶囊；标题渐变文字',
    '四主色：热粉/电青/奶黄/藤紫；星纹平铺底',
    'Impact 大标题 + Tahoma 正文 + 像素小标签',
  ],
  tokens: {
    colors: [
      { name: '热粉', value: '#ff71ce' },
      { name: '电青', value: '#01cdfe' },
      { name: '奶黄', value: '#fffb96' },
      { name: '藤紫', value: '#b967ff' },
      { name: '淡粉底', value: '#fff0f5' },
    ],
    fonts: [
      { role: '标题', stack: 'Impact, "Arial Black", "PingFang SC", sans-serif' },
      { role: '正文', stack: 'Tahoma, Verdana, "PingFang SC", sans-serif' },
      { role: '小标签', stack: 'Silkscreen, monospace' },
    ],
    radius: '999px（按钮）/ 8px（框）',
    shadow: '内亮面 + 2px 白边',
    extras: [{ label: '闪烁', value: 'opacity steps(1) 1s，仅一处' }],
  },
  demo: {
    height: 1730,
    heightMobile: 2560,
    html: page({
      title: '千禧复古 · Y2K',
      fonts: ['Silkscreen:wght@400;700'],
      css: scCss(scTheme) + `
body {
  font-family: Tahoma, Verdana, "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #fff0f5;
  background-image: radial-gradient(#ffb3d9 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  padding: 26px 16px 34px; font-size: 13px;
}
.wrap { max-width: 680px; margin: 0 auto; }
h1 {
  font-family: Impact, "Arial Black", sans-serif; text-align: center; font-size: 52px;
  letter-spacing: 0.02em; text-transform: uppercase; line-height: 1;
  background: linear-gradient(180deg, #ff71ce 20%, #b967ff 60%, #01cdfe);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(2px 2px 0 #fff) drop-shadow(-2px -2px 0 #fff);
  margin: 6px 0 4px;
}
.sub { text-align: center; font-family: Silkscreen, monospace; font-size: 10px; color: #b967ff; letter-spacing: 0.2em; margin-bottom: 18px; }
.marquee {
  background: linear-gradient(90deg, #ff71ce, #01cdfe); border-top: 2px solid #fff; border-bottom: 2px solid #fff;
  overflow: hidden; white-space: nowrap; padding: 7px 0; margin-bottom: 22px;
  box-shadow: 0 0 0 2px #ff71ce;
}
.marquee div { display: inline-block; animation: scroll 14s linear infinite; font-weight: 700; color: #fff; text-shadow: 1px 1px 0 #b967ff; font-size: 14px; letter-spacing: 0.08em; }
@keyframes scroll { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
.nav { text-align: center; margin-bottom: 24px; }
.pill {
  display: inline-block; margin: 4px; padding: 8px 18px; border-radius: 999px; cursor: default;
  background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0) 55%), #ff71ce;
  border: 2px solid #fff; color: #fff; font-weight: 700; font-size: 13px;
  text-shadow: 1px 1px 0 rgba(185, 103, 255, 0.8); box-shadow: 0 2px 0 #b967ff;
}
.pill.cyan { background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0) 55%), #01cdfe; box-shadow: 0 2px 0 #0184a8; }
.pill.yellow { background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0) 55%), #ffd94a; box-shadow: 0 2px 0 #d9a400; color: #8a5a00; text-shadow: none; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 20px; }
.box {
  background: #fff; border: 3px double #ff71ce; padding: 16px; position: relative;
}
.box h2 {
  font-family: Impact, sans-serif; font-size: 20px; color: #b967ff; letter-spacing: 0.04em;
  margin-bottom: 10px; text-transform: uppercase;
}
.box p { line-height: 1.8; color: #5a4a52; margin-bottom: 10px; }
.new {
  position: absolute; top: -12px; right: -8px; background: #ffd94a; border: 2px solid #fff;
  color: #8a5a00; font-family: Silkscreen, monospace; font-size: 9px; padding: 4px 7px;
  transform: rotate(6deg); box-shadow: 0 2px 0 #d9a400; animation: blink 1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0.35; } }
.divider { text-align: center; color: #ff71ce; letter-spacing: 0.3em; font-size: 14px; margin: 18px 0; }
.counter {
  text-align: center; background: #111; border: 3px ridge #888; display: inline-block;
  font-family: "Courier New", monospace; color: #4cff4c; font-size: 18px; padding: 8px 14px;
  letter-spacing: 0.25em; text-shadow: 0 0 6px #4cff4c; margin: 0 auto;
}
.counter-row { text-align: center; margin-bottom: 22px; }
.gb { background: #fff; border: 2px dashed #01cdfe; padding: 12px 14px; margin-bottom: 10px; }
.gb b { color: #0184a8; }
.gb span { float: right; font-family: Silkscreen, monospace; font-size: 9px; color: #b967ff; }
.gb p { clear: both; padding-top: 6px; color: #5a4a52; line-height: 1.7; }
footer { text-align: center; font-family: Silkscreen, monospace; font-size: 10px; color: #b967ff; line-height: 2.2; }
footer a { color: #01cdfe; margin: 0 6px; }
@media (max-width: 640px) {
  .cols { grid-template-columns: 1fr; }
  h1 { font-size: 34px; }
}`,
      body: `
<div class="wrap">
  <h1>★ 小满的主页 ★</h1>
  <div class="sub">WELCOME TO MY HOMEPAGE · EST.2003</div>
  <div class="marquee"><div>☆★☆ 欢迎来到我的主页！今天也要元气满满！本站最佳浏览分辨率 800×600 · 记得签写留言板哦 ☆★☆</div></div>
  <div class="nav">
    <span class="pill">关于我</span><span class="pill cyan">我的相册</span><span class="pill yellow">日记本</span><span class="pill">喜欢的乐队</span>
  </div>
  <div class="cols">
    <div class="box">
      <div class="new">NEW!</div>
      <h2>关于我</h2>
      <p>昵称：小满<br />星座：水做的星座<br />爱好：收集亮闪闪的东西</p>
      <p>这座主页是我一砖一瓦贴出来的，连背景星星都是矢量手贴的，不许说它吵！</p>
    </div>
    <div class="box">
      <h2>今日运势</h2>
      <p><b style="color:#ff71ce">★★★★☆</b><br />幸运色：电青<br />幸运数字：08<br />宜：逛美术馆<br />忌：写周报</p>
    </div>
  </div>
  <div class="divider">·:・.⋆ ✧ ⋆.・:·</div>
  <div class="counter-row"><div class="counter">你是第 001337 位访客</div></div>
  <div class="box" style="border-color:#01cdfe; margin-bottom:20px">
    <h2 style="color:#0184a8">留言板</h2>
    <div class="gb"><b>阿禾</b><span>2003.08.12</span><p>你的主页是我今天的快乐源泉！！！（顺便：背景星星能发我吗）</p></div>
    <div class="gb"><b>路人甲</b><span>2003.08.11</span><p>路过留爪。贵站已加入我的收藏夹「闪亮分类」。</p></div>
  </div>
  <footer>
    <div><a>← 上一个主页</a> ◆ <a>主页联盟 RING</a> ◆ <a>下一个主页 →</a></div>
    <div>© 2003 小满™ · 本页由 Dreamweaver 纯手工打造 · 版权没有 侵权不究</div>
  </footer>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
