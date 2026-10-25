import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#101014",
  "surface": "#17161c",
  "alt": "rgba(201,162,39,0.1)",
  "text": "#f0ead6",
  "muted": "#9a917c",
  "primary": "#c9a227",
  "onPrimary": "#1a1508",
  "border": "rgba(201,162,39,0.42)",
  "radius": "2px",
  "radiusLg": "4px",
  "shadow": "none",
  "font": "\"Didot\", \"Playfair Display\", Georgia, \"Songti SC\", serif",
  "mono": "Georgia, serif",
  "ok": "#7fb069",
  "warn": "#c9a227",
  "err": "#c0392b",
  "info": "#5d8aa8",
  "focus": "#c9a227",
  "extraCss": ".sc-cell{outline:1px solid rgba(201,162,39,0.22);outline-offset:3px;}.sc-btn{text-transform:uppercase;letter-spacing:0.24em;font-size:12px;border-radius:2px;}.sc-head h2{text-transform:uppercase;letter-spacing:0.2em;font-weight:400;}.sc-badge{border-radius:2px;text-transform:uppercase;letter-spacing:0.14em;}.sc-tbl th{letter-spacing:0.2em;}"
};

export const deco: Paradigm = {
  id: 'deco',
  no: '10',
  name: '装饰艺术',
  nameEn: 'Art Deco',
  tagline: '金与深绿、几何扇形、对称庄严——盖茨比请柬。',
  origin: '1925 巴黎博览会 / 克莱斯勒大厦',
  year: '1920s — 30s',
  tags: ['金色', '几何', '对称', '奢华'],
  bestFor: ['高端活动邀请', '酒店/餐饮品牌', '颁奖/典礼页'],
  avoid: ['工具产品', '轻松向内容'],
  prompt: `# 设计范式：装饰艺术（Art Deco）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：1925 巴黎的博览会之夜；机械时代的奢华，几何化的华丽
- 情绪关键词：庄严、对称、鎏金、仪式感

## 2. 布局
- 严格对称：中轴线贯穿全部内容，元素成对出现
- 外框：粗金线 + 细金线组成的双线边框（3px + 1px，间距 4px）
- 四角放置小菱形/直角纹样；顶部或底部一枚放射扇形（sunburst）

## 3. 字体排印
- 标题：Cinzel / Poiret One / Trajan，全大写，字距 0.3-0.5em，36-56px
- 正文：同族 12-14px、字距 0.15-0.2em、行距 1.9
- 数字用罗马式或旧式数字；小号全大写标签做「票券」感

## 4. 色彩
- 底：深墨绿 #0e2a23 或黑 #0d0d0d
- 金：#c9a227（主）/ #e8c96a（亮金，仅高光）/ 象牙 #f3ead8（文字）
- 全场不超过这三色一底；无渐变（金属感用明度差模拟）

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
- 签名组件：菱形 ◆ 项目符号与金双线分隔（◆ — ◆）
- 按钮：1px 金框 + radius 2px + 0.3em 字距金字；hover 0.24s 填金转黑字
- 输入框：1px 金底线 + 上方大写小标签；focus 线变双线且两端浮现 ◆
- 下拉框浮层：墨黑底 + 金框 + 四角菱形装饰
- 开关：细金轨 + 菱形钮
- 表格：1px 金细线全框 + 表头金字 + hover 铺 8% 金底
- 对称纪律：所有组件左右严格对称，装饰必须成对出现
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：由透明转为金底黑字，伴随 0.22s 填色
- active：整体内缩 1px（outline 位移），像压印下去
- focus-visible：金双线外框（outline + box-shadow 叠加实现双线）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，240ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（240ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角墨黑金框卡片，从右侧 12px 平移入，停留 3s 后下降 8px 淡出
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 240ms（对称式装饰动效可到 400ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 扇形：repeating-conic-gradient 做放射线，置于标题背后或页面顶部
- 阶梯纹：repeating-linear-gradient 做chevron/阶梯边饰（仅一处）
- 文字可加极淡金色辉光（text-shadow 0 0 12px rgba(201,162,39,0.25)）

## 7. 禁忌
- 禁止非对称布局、大圆角、无衬线小写正文、明亮撞色
- 禁止现代卡片阴影体系、渐变按钮、emoji
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '中轴严格对称；粗+细双线金框，四角菱形',
    'Cinzel 全大写 + 宽字距（0.3-0.5em）',
    '三色：墨绿底 / 金 / 象牙；金属感靠明度差',
    'repeating-conic 放射扇形 + ◆—◆ 分隔',
  ],
  tokens: {
    colors: [
      { name: '墨绿底', value: '#0e2a23' },
      { name: '金', value: '#c9a227' },
      { name: '亮金', value: '#e8c96a' },
      { name: '象牙', value: '#f3ead8' },
    ],
    fonts: [{ role: '全场', stack: 'Cinzel, Poiret One, "Noto Serif SC", "Songti SC", serif' }],
    radius: '2px',
    shadow: '无（金色辉光代替）',
    extras: [
      { label: '双线框', value: '3px 金 + 1px 金，间距 4px' },
      { label: '扇形', value: 'repeating-conic-gradient 放射' },
    ],
  },
  demo: {
    height: 1650,
    heightMobile: 2300,
    html: page({
      title: '装饰艺术 · Art Deco',
      fonts: ['Cinzel:wght@400;600;700', 'Poiret+One'],
      css: scCss(scTheme) + `
body {
  font-family: Cinzel, Poiret One, "Noto Serif SC", "Songti SC", serif;
  background:
    radial-gradient(60% 50% at 50% 38%, rgba(201, 162, 39, 0.09), transparent 70%),
    #0e2a23;
  color: #f3ead8; min-height: 100vh; display: flex; flex-direction: column; align-items: center;
  padding: 34px 20px;
}
.card {
  position: relative; width: min(560px, 94vw); padding: 46px 52px 40px; text-align: center;
  border: 3px solid #c9a227; outline: 1px solid #c9a227; outline-offset: 5px;
}
.corner { position: absolute; width: 12px; height: 12px; background: #c9a227; transform: rotate(45deg); }
.corner.tl { top: -7px; left: -7px; } .corner.tr { top: -7px; right: -7px; }
.corner.bl { bottom: -7px; left: -7px; } .corner.br { bottom: -7px; right: -7px; }
.fan {
  width: 220px; height: 110px; margin: 0 auto 6px;
  background: repeating-conic-gradient(from 181deg at 50% 100%, rgba(201, 162, 39, 0.5) 0deg 2.5deg, transparent 2.5deg 9deg);
  mask-image: linear-gradient(180deg, #000 55%, transparent);
  -webkit-mask-image: linear-gradient(180deg, #000 55%, transparent);
}
.est { font-size: 11px; letter-spacing: 0.5em; color: #c9a227; margin-bottom: 20px; }
h1 {
  font-size: 44px; font-weight: 700; letter-spacing: 0.42em; text-indent: 0.42em;
  color: #e8c96a; text-shadow: 0 0 18px rgba(201, 162, 39, 0.3); line-height: 1.3;
}
.en { font-family: "Poiret One", serif; font-size: 14px; letter-spacing: 0.55em; text-indent: 0.55em; color: #f3ead8; margin-top: 12px; text-transform: uppercase; }
.sep { color: #c9a227; letter-spacing: 0.4em; margin: 26px 0; font-size: 13px; }
.details { display: grid; gap: 15px; margin: 8px auto 30px; max-width: 380px; }
.details .row { display: flex; align-items: baseline; gap: 12px; font-size: 13.5px; letter-spacing: 0.14em; }
.details .row::before { content: "◆"; color: #c9a227; font-size: 9px; }
.details .row b { font-weight: 600; letter-spacing: 0.2em; color: #e8c96a; }
.details .row span { color: #f3ead8; }
.rsvp {
  display: inline-block; border: 1px solid #c9a227; color: #e8c96a; background: transparent;
  font-family: inherit; font-size: 13px; letter-spacing: 0.34em; text-indent: 0.34em;
  padding: 13px 34px; cursor: default; transition: background 0.15s, color 0.15s;
}
.rsvp:hover { background: #c9a227; color: #0e2a23; }
.foot { margin-top: 30px; font-size: 10px; letter-spacing: 0.4em; color: rgba(243, 234, 216, 0.5); }
.step {
  height: 8px; margin-top: 26px;
  background: repeating-linear-gradient(90deg, #c9a227 0 8px, transparent 8px 16px);
  opacity: 0.5;
}
@media (max-width: 640px) {
  .card { padding: 36px 24px 30px; }
  h1 { font-size: 28px; letter-spacing: 0.3em; text-indent: 0.3em; }
  .details .row { font-size: 12px; }
}
.card { margin: auto 0; }
.sc-root { width: 100%; }`,
      body: `
<div class="card">
  <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
  <div class="fan"></div>
  <div class="est">EST. MMXXVI · SHANGHAI</div>
  <h1>大幕将启</h1>
  <div class="en">The Grand Opening</div>
  <div class="sep">◆ — ◆ — ◆</div>
  <div class="details">
    <div class="row"><b>时间</b><span>二零二六年十一月一日 · 戌时</span></div>
    <div class="row"><b>地点</b><span>外滩源 · 装饰艺术礼堂</span></div>
    <div class="row"><b>着装</b><span>黑领结 / 晚礼服</span></div>
  </div>
  <button class="rsvp">赐 覆</button>
  <div class="step"></div>
  <div class="foot">PARADIGM HALL · No.10 · 金 与 几 何</div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
