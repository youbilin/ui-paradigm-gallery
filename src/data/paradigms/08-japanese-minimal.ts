import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#f6f4ee",
  "surface": "#fbf9f3",
  "alt": "rgba(43,43,40,0.04)",
  "text": "#2b2b28",
  "muted": "#8a857a",
  "primary": "#b03a2e",
  "onPrimary": "#fbf9f3",
  "border": "rgba(43,43,40,0.16)",
  "radius": "4px",
  "radiusLg": "8px",
  "shadow": "none",
  "font": "\"Hiragino Sans\", \"PingFang SC\", \"Noto Sans SC\", sans-serif",
  "mono": "\"Hiragino Sans\", monospace",
  "ok": "#4a7c59",
  "warn": "#a6761d",
  "err": "#b03a2e",
  "info": "#4a5d6b",
  "focus": "#4a5d6b",
  "extraCss": ".sc-head h2{font-weight:500;letter-spacing:0.14em;}.sc-btn{letter-spacing:0.18em;font-weight:400;}.sc-cell h5{letter-spacing:0.3em;font-weight:400;}.sc-tbl th{letter-spacing:0.24em;font-weight:400;}"
};

export const wa: Paradigm = {
  id: 'wa',
  no: '08',
  name: '日式极简 · 间',
  nameEn: 'Japanese Minimal / Ma',
  tagline: '留白即内容：一竖线、一颗印章、大片「间」。',
  origin: '原研哉 / 侘寂美学 / 和式排版',
  year: '常青',
  tags: ['留白', '竖排', '细线', '侘寂'],
  bestFor: ['茶饮/餐饮', '品牌宣言页', '摄影/艺术站'],
  avoid: ['功能密集产品', '促销活动页'],
  prompt: `# 设计范式：日式极简 · 间（Japanese Minimal / Ma）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：原研哉式的「白」；留白不是背景，而是内容本身
- 情绪关键词：安静、克制、余韵、自然

## 2. 布局
- 单栏，max-width 520-560px；元素间距 48-96px，比常规设计大 2-3 倍
- 一处点睛的竖排文字（writing-mode: vertical-rl），其余全部横排
- 画面只放一个视觉主体（一首诗、一件器物、一张照片），其余退位

## 3. 字体排印
- 衬线（Noto Serif SC/JP、游明朝、Songti），细字重（300-400）
- 竖排诗文：26-34px、字距 0.3em、行距 2.0 以上
- 横排小注：12-13px、行距 2.0、颜色比主文字浅一档

## 4. 色彩
- 生成り（米白）#f6f4ee / 墨 #2b2b28 / 朱（印章红）#b03a2e
- 全场只有这三个色；朱只出现在一枚印章或一条细线上
- 图片占位用浅灰 #e9e4d8，不用纯白

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
- 签名组件：朱砂印章（28-30px 方、2px 朱框、微旋 2°）与竖排文字块
- 按钮：无底无框纯文字 + 0.2em 字距；hover 下划线从左画出 0.4s
- 输入框：仅一条 1px 墨线、两端留白不对称；focus 线色加深到纯墨
- 下拉框浮层：纯白 + 极淡影 + 行高 44px；hover 只改字色，不铺底色
- 开关：细横杆 + 小圆钮，切换 0.4s 刻意放慢
- 表格：只有行间 1px 10% 透明线；hover 仅字色深一档
- 留白纪律：组件间距是常规范式的 1.5-2 倍，宁可空不可挤
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：下划线自左向右画出 0.4s，不做颜色与位置变化
- active：字色加深到纯墨，无位移
- focus-visible：极淡墨色框（10% 透明度），不加任何光晕；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，400ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（400ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角的小白卡，淡入 0.6s、停留 6s、淡出 0.6s——刻意比常规慢一半
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 400ms（侘寂的节奏必须慢；Typography 切换可到 600ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 可有一枚极淡的圆形（月/日轮）作背景，色阶只比底色深 3%
- 纸感：底色微暖，可叠加 2% 不透明度的噪点
- 所有元素对齐「间」的节奏：近-远-近，疏-密-疏

## 7. 禁忌
- 禁止网格化堆叠、卡片、阴影、圆角
- 禁止两种以上颜色、禁止「丰富」的冲动：每加一个元素，先删一个
- 禁止粗体大标题 Hero、禁止 emoji 与装饰性图标
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '单栏 520-560px，元素间距 48-96px（常规 2-3 倍）',
    '一处竖排点睛；衬线细字重、行距 2.0+',
    '三色系统：生成り / 墨 / 朱（朱只给印章）',
    '1px 细线分割 + 微旋转方印 + 极淡月轮',
  ],
  tokens: {
    colors: [
      { name: '生成り', value: '#f6f4ee' },
      { name: '墨', value: '#2b2b28' },
      { name: '朱', value: '#b03a2e' },
      { name: '图占位', value: '#e9e4d8' },
    ],
    fonts: [{ role: '全场', stack: '"Noto Serif SC", "Noto Serif JP", "Songti SC", "Yu Mincho", serif' }],
    radius: '0',
    shadow: '无',
    extras: [
      { label: '细线', value: '1px solid rgba(43,43,40,0.2)' },
      { label: '印章', value: '28px 方 / 2px 朱框 / 微旋转' },
    ],
  },
  demo: {
    height: 1610,
    heightMobile: 2260,
    html: page({
      title: '日式极简 · 間',
      fonts: ['Noto+Serif+SC:wght@300;400;600', 'Noto+Serif+JP:wght@300;400'],
      css: scCss(scTheme) + `
body {
  font-family: "Noto Serif SC", "Noto Serif JP", "Songti SC", "Yu Mincho", serif;
  background: #f6f4ee; color: #2b2b28; min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; padding: 40px; position: relative;
}
/* 居中交给 margin:auto：内容矮于视口时垂直居中，高于视口（组件矩阵展开）时自然从顶部流式排列 */
.stage { position: relative; text-align: center; margin: auto 0; }
.sc-root { width: 100%; }
.moon {
  position: absolute; width: 300px; height: 300px; border-radius: 50%;
  background: #eae5d9; top: 50%; left: 50%; transform: translate(-50%, -58%);
}
.stage { position: relative; text-align: center; }
.top-note { font-size: 12px; letter-spacing: 0.5em; color: rgba(43, 43, 40, 0.55); margin-bottom: 56px; }
.verse {
  writing-mode: vertical-rl; font-size: 30px; font-weight: 300; letter-spacing: 0.34em;
  line-height: 2.1; height: 300px; margin: 0 auto; text-orientation: upright;
}
.verse span { display: block; }
.side-note {
  position: absolute; top: 6px; right: -88px; writing-mode: vertical-rl;
  font-size: 12px; letter-spacing: 0.28em; line-height: 2.2; color: rgba(43, 43, 40, 0.6);
}
.seal {
  width: 30px; height: 30px; border: 2px solid #b03a2e; color: #b03a2e;
  display: flex; align-items: center; justify-content: center; font-size: 15px;
  transform: rotate(2.5deg); margin: 54px auto 0;
}
.hair { width: 1px; height: 44px; background: rgba(43, 43, 40, 0.25); margin: 40px auto 26px; }
.foot { font-size: 12px; letter-spacing: 0.3em; color: rgba(43, 43, 40, 0.55); }
.link { display: inline-block; margin-top: 18px; font-size: 12.5px; letter-spacing: 0.24em; color: #2b2b28; text-decoration: none; border-bottom: 1px solid rgba(43,43,40,0.3); padding-bottom: 2px; }
@media (max-width: 720px) {
  .verse { font-size: 24px; height: 260px; }
  .side-note { display: none; }
  .top-note { margin-bottom: 40px; }
}`,
      body: `
<div class="moon"></div>
<div class="stage">
  <div class="top-note">範 式 展 示 館 · 第 八 席</div>
  <div class="verse">
    <span>古池や</span>
    <span>蛙飛び込む</span>
    <span>水の音</span>
  </div>
  <div class="side-note">間——留白不是空，是呼吸的場所</div>
  <div class="seal">印</div>
  <div class="hair"></div>
  <div class="foot">松尾芭蕉 · 収蔵</div>
  <div><a class="link" href="#/exhibit/wa">静 か に 観 る</a></div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
