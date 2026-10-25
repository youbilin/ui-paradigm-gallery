import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const theme = {
  bg: '#0a0a12',
  surface: '#12121e',
  alt: 'rgba(0, 240, 255, 0.08)',
  text: '#e8f6ff',
  muted: '#7d8ba3',
  primary: '#00f0ff',
  onPrimary: '#04222b',
  border: 'rgba(0, 240, 255, 0.3)',
  radius: '2px',
  radiusLg: '4px',
  shadow: '0 0 18px rgba(0, 240, 255, 0.14)',
  font: '"Chakra Petch", "PingFang SC", sans-serif',
  mono: '"Chakra Petch", ui-monospace, monospace',
  ok: '#00e436',
  warn: '#fcee0a',
  err: '#ff003c',
  info: '#00f0ff',
  focus: '#00f0ff',
  extraCss: `
.sc-cell { clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px); border-radius: 0; }
.sc-btn { clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); border-radius: 0; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; }
.sc-head h2 { text-transform: uppercase; letter-spacing: 0.06em; }
.sc-cell h5 { letter-spacing: 0.22em; color: #00f0ff; }
.sc-inp, .sc-ta, .sc-sel-btn { border-radius: 0; clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); }
.sc-badge { border-radius: 0; text-transform: uppercase; letter-spacing: 0.08em; clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px); }
.sc-tbl th { letter-spacing: 0.18em; }
`,
};

export const cyberpunk: Paradigm = {
  id: 'cyberpunk',
  no: '15',
  name: '赛博朋克',
  nameEn: 'Cyberpunk',
  tagline: '霓虹青与品红、切角 HUD、故障美学——高科技，低生活。',
  origin: '1982《银翼杀手》/ 1984《神经漫游者》/ 夜之城美学',
  year: '1982 —',
  tags: ['霓虹', 'HUD', '故障', '暗色'],
  kind: 'paradigm',
  bestFor: ['游戏与电竞产品', 'Web3 与工具站', '音乐/潮流活动', '开发者工具'],
  avoid: ['儿童产品', '政府与公共服务', '需要打印归档的文档场景'],
  prompt: `# 设计范式：赛博朋克（Cyberpunk）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：高科技、低生活；像一块嵌在雨夜楼体上的全息广告屏
- 情绪关键词：霓虹、切角、扫描线、故障、HUD
- 氛围：暗色底上只有霓虹在发光，信息像仪表读数一样精确

## 2. 布局
- 深底 #0a0a12，面板用切角（clip-path 八点切角），禁圆角
- HUD 框架：四角定位角标（L 形括号线）、细网格线、坐标读数
- 信息分区用 1px 霓虹分隔线 + 等宽小标签，像系统日志

## 3. 字体排印
- 标题：窄体科技无衬线（Chakra Petch / Rajdhani），全大写，44-64px，宽字距
- 正文：同族常规字重 13-15px，行高 1.7
- 数字、编号、状态一律等宽，带前导零（如 07/21）

## 4. 色彩
- 底：#0a0a12 / 面板 #12121e；文字 #e8f6ff
- 霓虹主色：青 #00f0ff；强调：品红 #ff003c；警示：黄 #fcee0a；成功：绿 #00e436
- 霓虹只用于边框、图标、关键数字与 hover 态——不大面积填充

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
- 签名组件：切角面板（clip-path 单角 45° 切角）与 glitch 单帧抖动
- 按钮：切角 + 1px 青边透明底；hover 青底黑字 + 0.1s glitch 位移（translateX ±1px 一两帧）
- 输入框：切角 + 细青边；focus 青色外发光 12px；错误态 #ff2a6d + 抖动
- 下拉框浮层：切角 + 扫描线背景；hover 行青底黑字
- 进度：等宽数字 + 细条读数，禁止圆角粗条
- 表格：行线 rgba(青,18%)；hover 行出现左侧 ▸ 指示
- 读数纪律：所有数字等宽右对齐，像终端遥测值
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：填充霓虹色 + 文字转深，伴随 0.1s 的轻微 glitch 位移（translateX ±1px）
- active：内容区下移 1px 并触发一次单帧反色
- focus-visible：青色 1px 描边 + 0 0 12px 荧光（必须能一眼看到）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，120ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（120ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角终端信息条堆叠，逐字打印式出现（每个字符 12ms），3s 后整行被「擦除」
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 120ms（glitch 类 60ms / 1-2 帧，扫描线 2.4s 循环），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全局可叠一层 3px 间距的扫描线（repeating-linear-gradient，opacity 极低）
- 标题可加 glitch：双层错位文字（青/品红各偏移 1-2px）
- 装饰元素：电路线、十字准星、括号角标、片假名乱码斑点

## 7. 禁忌
- 禁止圆角、渐变紫蓝默认配色、毛玻璃大卡片
- 禁止把霓虹当背景大面积铺（那是廉价电竞网咖，不是赛博朋克）
- 禁止明亮底色与轻佻的插画
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '深底 + 切角面板（clip-path），零圆角',
    '霓虹青 #00f0ff / 品红 #ff003c / 警示黄 #fcee0a',
    'HUD 角标 + 扫描线 + 等宽读数',
    '标题全大写窄体，glitch 双层错位',
  ],
  tokens: {
    colors: [
      { name: '夜之城底', value: '#0a0a12' },
      { name: '面板', value: '#12121e' },
      { name: '霓虹青', value: '#00f0ff' },
      { name: '品红', value: '#ff003c' },
      { name: '警示黄', value: '#fcee0a' },
      { name: '终端绿', value: '#00e436' },
    ],
    fonts: [
      { role: '标题', stack: '"Chakra Petch", "Rajdhani", sans-serif' },
      { role: '读数', stack: '"Chakra Petch", ui-monospace, monospace' },
    ],
    radius: '0px（切角代替圆角）',
    shadow: '0 0 18px rgba(0,240,255,.14)',
    extras: [
      { label: '切角', value: 'clip-path 八点切角' },
      { label: '扫描线', value: 'repeating-linear-gradient 3px' },
    ],
  },
  demo: {
    height: 1400,
    heightMobile: 1750,
    html: page({
      title: '赛博朋克 · Cyberpunk',
      fonts: ['Chakra+Petch:wght@400;500;600;700'],
      css: scCss(theme) + `
body { font-family: "Chakra Petch", "PingFang SC", sans-serif; background: #0a0a12; color: #e8f6ff; padding: 44px 30px 52px; }
.shell { max-width: 1080px; margin: 0 auto; position: relative; }
body::after { content: ""; position: fixed; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0 1px, transparent 1px 3px); z-index: 9; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 36px; position: relative; z-index: 2; }
.brand { font-weight: 700; font-size: 16px; letter-spacing: 0.22em; text-transform: uppercase; color: #00f0ff; text-shadow: 0 0 12px rgba(0,240,255,.6); }
.nav-links span { margin-left: 20px; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #7d8ba3; cursor: default; }
.nav-links span:hover { color: #00f0ff; }
.hero { position: relative; background: #12121e; border: 1px solid rgba(0,240,255,0.3); padding: 52px 46px 44px; clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); overflow: hidden; }
.hero::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(0,240,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.05) 1px, transparent 1px); background-size: 44px 44px; pointer-events: none; }
.corner { position: absolute; width: 18px; height: 18px; border: 2px solid #00f0ff; }
.corner.tl { top: 10px; left: 10px; border-right: 0; border-bottom: 0; }
.corner.tr { top: 10px; right: 10px; border-left: 0; border-bottom: 0; }
.corner.bl { bottom: 10px; left: 10px; border-right: 0; border-top: 0; }
.corner.br { bottom: 10px; right: 10px; border-left: 0; border-top: 0; }
.readout { font-size: 11px; letter-spacing: 0.2em; color: #00f0ff; font-family: "Chakra Petch", monospace; }
.hero h1 { font-size: clamp(38px, 5.4vw, 66px); font-weight: 700; text-transform: uppercase; line-height: 1.04; letter-spacing: 0.04em; margin: 14px 0 18px; max-width: 600px; position: relative; }
.hero h1 .glitch { color: #ff003c; position: relative; }
.hero h1 .glitch::after { content: attr(data-t); position: absolute; left: 2px; top: 0; color: #00f0ff; clip-path: inset(40% 0 30% 0); opacity: .85; }
.hero p { max-width: 440px; font-size: 14.5px; line-height: 1.8; color: #a9b8cf; }
.cta { display: flex; gap: 14px; margin-top: 28px; flex-wrap: wrap; }
.cta a { font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; padding: 11px 24px; border: 1px solid #00f0ff; color: #00f0ff; background: transparent; cursor: pointer; text-decoration: none; clip-path: polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px); transition: background 0.12s, color 0.12s; }
.cta a:hover { background: #00f0ff; color: #04222b; }
.cta a.mag { border-color: #ff003c; color: #ff003c; }
.cta a.mag:hover { background: #ff003c; color: #fff; }
.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 30px; }
.stat { border: 1px solid rgba(0,240,255,0.22); background: rgba(18,18,30,0.8); padding: 15px 17px; clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }
.stat b { display: block; font-size: 26px; font-weight: 700; color: #00f0ff; font-variant-numeric: tabular-nums; }
.stat span { font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: #7d8ba3; }
@media (max-width: 760px) {
  .stats { grid-template-columns: repeat(2, 1fr); }
  .nav-links { display: none; }
  .hero { padding: 40px 24px 70px; }
}`,
      body: `
<div class="shell">
  <nav class="nav">
    <div class="brand">NIGHT//CITY</div>
    <div class="nav-links"><span>义体</span><span>网络</span><span>任务</span><span>联络</span></div>
  </nav>
  <section class="hero">
    <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
    <div class="readout">SYS::READY · 坐标 34.0522°N · 信号 98% · 2077.10.25</div>
    <h1>在霓虹里<br /><span class="glitch" data-t="接入未来">接入未来</span></h1>
    <p>把界面当成一块全息屏：切角面板、扫描线、HUD 角标。信息不讨好任何人——它只是精确地亮着，像雨夜的广告牌。</p>
    <div class="cta">
      <a>接入链路 →</a>
      <a class="mag">黑市芯片</a>
    </div>
  </section>
  <section class="stats">
    <div class="stat"><b>07</b><span>在线节点</span></div>
    <div class="stat"><b>128K</b><span>数据吞吐</span></div>
    <div class="stat"><b>0.4ms</b><span>神经延迟</span></div>
    <div class="stat"><b>99.9%</b><span>链路稳定</span></div>
  </section>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
