import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#0b0f0e",
  "surface": "#0e1512",
  "alt": "rgba(61,240,138,0.07)",
  "text": "#d7ffe8",
  "muted": "#5b6b62",
  "primary": "#3df08a",
  "onPrimary": "#06281a",
  "border": "rgba(61,240,138,0.28)",
  "radius": "4px",
  "radiusLg": "8px",
  "shadow": "none",
  "font": "\"JetBrains Mono\", \"SF Mono\", Consolas, monospace",
  "mono": "\"JetBrains Mono\", \"SF Mono\", Consolas, monospace",
  "ok": "#3df08a",
  "warn": "#ffd166",
  "err": "#ff6b6b",
  "info": "#5ee1ff",
  "focus": "#3df08a",
  "extraCss": ".sc-root{text-shadow:0 0 8px rgba(61,240,138,0.18);}.sc-cell,.sc-btn,.sc-inp,.sc-ta,.sc-sel-btn,.sc-badge,.sc-tag,.sc-tbl td{font-family:\"JetBrains Mono\",\"SF Mono\",Consolas,monospace;}.sc-btn.pri::before{content:\"> \";}"
};

export const terminal: Paradigm = {
  id: 'terminal',
  no: '06',
  name: '终端命令行',
  nameEn: 'Terminal / CLI',
  tagline: '等宽字体、扫描线、闪烁光标——极客的浪漫。',
  origin: 'CRT 终端 / 1970s Unix 文化',
  year: '1970s —',
  tags: ['等宽', '绿字黑底', '扫描线', 'CLI'],
  bestFor: ['开发者工具', '落地页的 geek 彩蛋', '文档站'],
  avoid: ['大众消费端', '长表单'],
  prompt: `# 设计范式：终端命令行（Terminal / CLI）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：CRT 显示器里的 Unix 世界；一切皆文本，一切皆命令
- 情绪关键词：极客、硬核、直接、复古未来

## 2. 布局
- 页面即一个终端窗口：标题栏（三个圆点 + 窗口标题）+ 会话区
- 会话区 padding 20-24px，所有内容左对齐，禁止居中布局
- 行高 1.6-1.8，行宽不超过 90 字符，超出换行

## 3. 字体排印
- 等宽字体（JetBrains Mono / IBM Plex Mono / SF Mono），13-14px
- 提示符结构：user@host : path $，分段上色（用户绿、主机青、路径蓝）
- 输出比命令暗一档；注释与元信息用灰绿；错误用红

## 4. 色彩
- 背景 #0b0f0e（微绿的黑）；主文字 #3df08a（磷光绿）
- 辅助 #5b6b62；强调（警告/高亮）#ffd166；错误 #ff6b6b
- 可有一处反色块（黑字绿底）做「选中态」

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
- 签名组件：打字机输出（逐字 12-24ms 出现）与 [████░░░░] 48% 块状进度
- 按钮：[ 确 定 ] 方括号文本形态；hover 整行反白；圆角 / 阴影 / 渐变全部禁止
- 输入框：$ 提示符同行输入 + 块状光标 steps(1) 闪烁
- 下拉框：ASCII 列表，当前行 > 前缀整行反白，↑↓ 移动、Enter 选中
- 复选框 [x] / [ ]；开关 [ ON ] ⇄ [ OFF ]；一切状态皆字符
- 表格：┌ ─ ┬ ┐ │ 框线字符手绘，不用 CSS 边框
- 全场等宽字体，连标题都是字符图形
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：整行反白（背景色与前景色互换），没有任何位移或阴影
- active：立即反显并保持 80ms 的「按键反馈」，然后恢复
- focus-visible：显示 ▌ 块状光标并持续闪烁（steps(1) 1s）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，80ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（80ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角逐行追加输出（像 stdout），3s 后被覆盖或淡出，最多保留 3 行
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 80ms（硬件终端几乎没有过渡，整行反向也是瞬时切换），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 扫描线：repeating-linear-gradient 透明/黑 1px/3px，整体不透明度 0.06-0.1
- 暗角：radial-gradient 边缘压暗；文字微辉光 text-shadow 0 0 6px
- 启动时可打一段 ASCII banner（大字或 logo）

## 7. 禁忌
- 禁止圆角 >6px、渐变、玻璃、衬线/无衬线非等宽字体
- 禁止彩色图片堆砌、禁止大段无层级纯文本（必须用框线/缩进/颜色分层）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '终端窗口：标题栏三点 + 会话区，全等宽字体',
    '提示符分段上色；ASCII 框线表格；块字符进度条',
    '扫描线 + 暗角 + 文字微辉光的 CRT 质感',
    '绿字黑底三色系：磷光绿/灰绿/琥珀警告',
  ],
  tokens: {
    colors: [
      { name: '背景', value: '#0b0f0e' },
      { name: '磷光绿', value: '#3df08a' },
      { name: '辅助', value: '#5b6b62' },
      { name: '琥珀', value: '#ffd166' },
      { name: '错误红', value: '#ff6b6b' },
    ],
    fonts: [{ role: '全场', stack: '"JetBrains Mono", "IBM Plex Mono", "SF Mono", Consolas, monospace' }],
    radius: '0-6px',
    shadow: '无（文字辉光代替）',
    extras: [
      { label: '扫描线', value: 'repeating-linear-gradient 1px/3px, opacity .08' },
      { label: '光标', value: '8px 色块 steps(1) 1s 闪烁' },
    ],
  },
  demo: {
    height: 1550,
    heightMobile: 2220,
    html: page({
      title: '终端命令行 · Terminal',
      fonts: ['JetBrains+Mono:wght@400;500;700'],
      css: scCss(scTheme) + `
body {
  font-family: "JetBrains Mono", "IBM Plex Mono", "SF Mono", Consolas, monospace;
  background: #0b0f0e; color: #3df08a; font-size: 13px; line-height: 1.65;
  display: flex; flex-direction: column; align-items: center; min-height: 100vh; padding: 28px;
}
.term {
  width: min(760px, 94vw); background: #0d1311; border: 1px solid #1f2a26; border-radius: 8px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55); overflow: hidden; position: relative;
}
.titlebar { display: flex; align-items: center; gap: 8px; padding: 11px 14px; background: #101714; border-bottom: 1px solid #1f2a26; }
.dot { width: 11px; height: 11px; border-radius: 50%; }
.dot.r { background: #ff5f57; } .dot.y { background: #febc2e; } .dot.g { background: #28c840; }
.titlebar span { margin-left: auto; font-size: 11px; color: #5b6b62; }
.screen { padding: 20px 22px 26px; position: relative; z-index: 1; text-shadow: 0 0 6px rgba(61, 240, 138, 0.22); }
.scan { position: absolute; inset: 0; pointer-events: none; z-index: 2;
  background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.22) 0 1px, transparent 1px 3px); }
.vignette { position: absolute; inset: 0; pointer-events: none; z-index: 2;
  background: radial-gradient(120% 100% at 50% 50%, transparent 62%, rgba(0, 0, 0, 0.38)); }
.line { white-space: pre-wrap; word-break: break-all; }
.dim { color: #5b6b62; }
.usr { color: #3df08a; } .host { color: #5ee1ff; } .path { color: #7aa2ff; }
.cmd { color: #eafff2; }
.warn { color: #ffd166; } .err { color: #ff6b6b; }
.ok::before { content: "✔ "; }
table.ascii { border-collapse: collapse; margin: 10px 0 4px; }
table.ascii td { padding: 1px 14px 1px 0; color: #3df08a; }
table.ascii tr.head td { color: #ffd166; }
.box { color: #2f4a3e; }
.cursor { display: inline-block; width: 8px; height: 15px; background: #3df08a; vertical-align: -2px; margin-left: 6px; animation: blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
.banner { color: #2f4a3e; line-height: 1.15; margin-bottom: 6px; }
@media (max-width: 640px) { body { font-size: 11.5px; padding: 12px; } }
.term { margin: auto 0; }
.sc-root { width: 100%; }`,
      body: `
<div class="term">
  <div class="titlebar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span>paradigm-hall — zsh — 80×24</span></div>
  <div class="screen">
    <div class="line banner">  ___   _   _    ___    ___   _   _   ___  </div>
    <div class="line banner"> | _ \\ /_\\ | |  / _ \\ | _ \\ /_\\ | || \\ \\/ / </div>
    <div class="line banner"> |  _// _ \\| |_| (_) ||   // _ \\| __| >  <  </div>
    <div class="line banner"> |_| /_/ \\_\\___|\\___/ |_|_\\_/ \\_\\____/_/\\_\\ </div>
    <div class="line dim">范式展览馆 CLI v0.4.1 — 输入 help 查看命令</div>
    <div class="line">&nbsp;</div>
    <div class="line"><span class="usr">visitor</span>@<span class="host">paradigm-hall</span> : <span class="path">~/gallery</span> $ <span class="cmd">list --style terminal</span></div>
    <div class="line ok">正在装载范式：终端命令行 …</div>
    <div class="line warn">⚠ 检测到 3 处 CRT 特效已启用（扫描线/暗角/辉光）</div>
    <div class="line">&nbsp;</div>
    <table class="ascii">
      <tr class="head"><td>范式</td><td>年代</td><td>标签</td><td>状态</td></tr>
      <tr><td>Swiss Style</td><td>1950s—</td><td>网格</td><td class="ok">stable</td></tr>
      <tr><td>Neo-Brutalism</td><td>2020—</td><td>粗野</td><td class="ok">stable</td></tr>
      <tr><td>Art Deco</td><td>1920s</td><td>装饰</td><td class="warn">beta</td></tr>
    </table>
    <div class="line">&nbsp;</div>
    <div class="line"><span class="usr">visitor</span>@<span class="host">paradigm-hall</span> : <span class="path">~/gallery</span> $ <span class="cmd">render --to exhibition-hall</span></div>
    <div class="line">[<span class="cmd">████████████████</span>------------] 62% <span class="dim">编译提示词…</span></div>
    <div class="line err">✘ 警告：检测到「AI 默认味」特征 0 处 — 通过</div>
    <div class="line ok">渲染完成。按 Enter 进入展厅<span class="cursor"></span></div>
  </div>
  <div class="scan"></div><div class="vignette"></div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
