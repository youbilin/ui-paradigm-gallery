import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#e8dcc4",
  "surface": "#f2ead8",
  "alt": "rgba(60,45,30,0.06)",
  "text": "#2e2620",
  "muted": "#7d6f5c",
  "primary": "#b33a2b",
  "onPrimary": "#f2ead8",
  "border": "rgba(46,38,32,0.4)",
  "radius": "3px",
  "radiusLg": "6px",
  "shadow": "3px 3px 0 rgba(46,38,32,0.25)",
  "font": "\"Arial Black\", \"Impact\", \"PingFang SC\", sans-serif",
  "mono": "\"Courier New\", monospace",
  "ok": "#4a7c59",
  "warn": "#c08a2e",
  "err": "#b33a2b",
  "info": "#4a5d6b",
  "focus": "#b33a2b",
  "extraCss": ".sc-cell{box-shadow:3px 3px 0 rgba(46,38,32,0.25);}.sc-btn{font-weight:700;text-transform:uppercase;box-shadow:3px 3px 0 rgba(46,38,32,0.3);}.sc-btn:active{transform:translate(3px,3px);box-shadow:0 0 0 rgba(46,38,32,0.3);}.sc-btn.pri{background:#b33a2b;color:#f2ead8;}.sc-inp,.sc-ta,.sc-sel-btn{background:#efe7d3;box-shadow:inset 2px 2px 0 rgba(46,38,32,0.15);}.sc-cell h5{font-family:\"Courier New\",monospace;letter-spacing:0.2em;}"
};

export const zine: Paradigm = {
  id: 'zine',
  no: '12',
  name: '手工纸艺 · 剪贴薄',
  nameEn: 'Paper Zine',
  tagline: '胶带、贴纸、剪报和马克笔笔迹——像手作的 zine。',
  origin: 'Riso 印刷 / 独立杂志 / 剪贴簿',
  year: '常青',
  tags: ['拼贴', '手写', '胶带', '暖纸'],
  bestFor: ['活动海报', '个人作品集', '咖啡/书店品牌'],
  avoid: ['严肃 B 端', '数据产品'],
  prompt: `# 设计范式：手工纸艺 · 剪贴薄（Paper Zine）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：从印刷厂捡回来的边角料拼成的一页 zine；手作、温暖、不完美
- 情绪关键词：亲切、手工、 playful、纸上

## 2. 布局
- 整页即一张工作台：元素「贴」在纸上，允许旋转 -3°~3°、相互轻压
- 标题用「剪下来的字母」：每个字一个白纸块，独立微旋转
- 2-3 栏不等宽文字（像剪报），栏间允许元素跨界

## 3. 字体排印
- 标题：Tahoma / 无衬线粗体，字号 40-56px，字块带纸感
- 正文：Tahoma / serif 12-13px、行高 1.9、两端对齐
- 手写标注：Caveat / Kalam，16-20px，只用于批注（不超过 3 处）

## 4. 色彩
- 牛皮纸底 #e9dfc9（可叠 4% 噪点）；纸白 #f7f3e8；墨 #2a2620
- 马克笔红 #d94f30 与荧光黄 #ffd94a 是唯二「笔迹色」
- 胶带：rgba(220,200,120,0.55) 半透明条

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
- 签名组件：胶带贴片（54×16 半透明黄条、±30° 贴角）与马克笔高亮（只盖文字下半 40%）
- 按钮：纸片造型 + 轻旋 ±1.5° + 干净投影；hover 像被手指拨动（旋转 +2° 抬起 3px）
- 输入框：横线纸效果（无边框、只有背景横线）；focus 出现铅笔 ✎ 标记
- 下拉框浮层：毛边纸条（clip-path 轻微不规则）；选项 hover 被马克笔涂黄
- 模态框：纸片 + 胶带 + 整体 -1° 旋转 + 牛皮纸色遮罩
- 头像：拍立得（白宽边 + 底部留白写字）
- 一切元素都有 0.5-2° 的「随手放歪」感
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：像被手指拨了一下：旋转 ±1.5° + 抬起 3px + 投影加深
- active：被按下并轻微压扁 rotate(0) scale(0.98)
- focus-visible：马克笔虚线框（2px 且略歪）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，200ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（200ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角贴上的便签小纸（自带随机旋转），进入 0.2s，3s 后向上旋转飘出，最多 3 张
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 200ms（便签类可带 1.56 的回弹系数），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 纸张噪点：feTurbulence data-uri，opacity 0.04-0.06
- 套印错位：可给标题加 1px 偏移的红色「重影」
- 投影统一「干净」：0 2px 4px rgba(0,0,0,0.12)，不要模糊扩散

## 7. 禁忌
- 禁止完美对齐网格、禁止发光/渐变按钮、禁止超过两种手写标注
- 禁止「设计感过强」的留白——纸上要满，但满得有呼吸
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '元素「贴」在纸上：±3° 旋转与轻压叠',
    '标题 = 独立旋转的剪字纸块；拍立得 + 胶带条',
    '牛皮纸底 + 4% 噪点；马克笔红/荧光黄双笔迹色',
    '双线印章 + 手写批注 ≤3 处',
  ],
  tokens: {
    colors: [
      { name: '牛皮纸', value: '#e9dfc9' },
      { name: '纸白', value: '#f7f3e8' },
      { name: '墨', value: '#2a2620' },
      { name: '马克红', value: '#d94f30' },
      { name: '荧光黄', value: '#ffd94a' },
    ],
    fonts: [
      { role: '标题', stack: 'Tahoma, "PingFang SC", sans-serif' },
      { role: '正文', stack: 'Tahoma, Georgia, serif' },
      { role: '批注', stack: '"Caveat", "Kalam", cursive' },
    ],
    radius: '0（剪纸边）',
    shadow: '0 2px 4px rgba(0,0,0,0.12)（干净）',
    extras: [{ label: '噪点', value: 'feTurbulence data-uri, opacity .05' }],
  },
  demo: {
    height: 1670,
    heightMobile: 2480,
    html: page({
      title: '手工纸艺 · 剪贴薄',
      fonts: ['Caveat:wght@500;700'],
      css: scCss(scTheme) + `
body {
  font-family: Tahoma, "PingFang SC", "Microsoft YaHei", sans-serif;
  background-color: #e9dfc9;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2"/></filter><rect width="140" height="140" filter="url(%23n)" opacity="0.055"/></svg>');
  color: #2a2620; padding: 40px 22px 44px; min-height: 100vh;
}
.sheet { max-width: 760px; margin: 0 auto; position: relative; }
.headline { margin: 6px 0 10px; line-height: 1; }
.headline span {
  display: inline-block; background: #f7f3e8; font-size: 46px; font-weight: 700;
  padding: 8px 12px 10px; margin: 0 3px 8px 0; box-shadow: 1px 2px 0 rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.05);
}
.headline span:nth-child(1) { transform: rotate(-2deg); }
.headline span:nth-child(2) { transform: rotate(1.5deg); }
.headline span:nth-child(3) { transform: rotate(-1deg); background: #ffd94a; }
.headline span:nth-child(4) { transform: rotate(2deg); }
.headline span:nth-child(5) { transform: rotate(-1.5deg); }
.headline span:nth-child(6) { transform: rotate(1deg); }
.sub { font-size: 14px; color: #6a6353; margin-bottom: 26px; }
.mark {
  background: linear-gradient(104deg, transparent 2%, rgba(217, 79, 48, 0.32) 3%, rgba(217, 79, 48, 0.32) 96%, transparent 97%);
  padding: 0 2px;
}
.note { font-family: "Caveat", "Kalam", cursive; font-size: 21px; color: #d94f30; transform: rotate(-2deg); display: inline-block; margin: 0 0 0 14px; }
.work { display: grid; grid-template-columns: 300px 1fr; gap: 30px; align-items: start; }
.polaroid {
  background: #f7f3e8; padding: 10px 10px 38px; transform: rotate(-2.2deg); position: relative;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14);
}
.polaroid .img { aspect-ratio: 4 / 3.4; background: linear-gradient(150deg, #d8c9a8, #b8a67e 55%, #9c8a62); }
.polaroid figcaption { font-family: "Caveat", cursive; font-size: 17px; color: #6a6353; text-align: center; margin-top: 8px; }
.tape {
  position: absolute; width: 58px; height: 17px; background: rgba(220, 200, 120, 0.6);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1); top: -9px; left: 50%; transform: translateX(-50%) rotate(-4deg);
}
.tape.tr { top: 40%; left: auto; right: -16px; transform: rotate(38deg); }
.stamp {
  position: absolute; bottom: 14px; right: -12px; border: 3px double #d94f30; color: #d94f30;
  font-size: 11px; font-weight: 700; letter-spacing: 0.18em; padding: 6px 9px; transform: rotate(-7deg);
  background: rgba(247, 243, 232, 0.7);
}
.star { position: absolute; color: #d94f30; font-size: 30px; transform: rotate(12deg); text-shadow: 1px 1px 0 rgba(0,0,0,0.12); }
.star.s1 { top: -18px; right: 8%; }
.star.s2 { bottom: 8%; left: 44%; font-size: 18px; transform: rotate(-14deg); }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; font-size: 12.5px; line-height: 1.95; text-align: justify; }
.cols h3 { font-size: 15px; margin-bottom: 10px; border-bottom: 2px solid #2a2620; display: inline-block; padding-bottom: 2px; }
.cols p { margin-bottom: 14px; }
.divider { text-align: center; margin: 28px 0 6px; color: #d94f30; letter-spacing: 0.2em; font-size: 13px; }
.foot { display: flex; justify-content: space-between; font-size: 11px; color: #6a6353; border-top: 1px dashed rgba(42,38,32,0.4); margin-top: 22px; padding-top: 10px; letter-spacing: 0.08em; }
@media (max-width: 700px) {
  .work { grid-template-columns: 1fr; }
  .headline span { font-size: 32px; }
  .cols { grid-template-columns: 1fr; }
}`,
      body: `
<div class="sheet">
  <div class="headline"><span>手</span><span>作</span><span>之</span><span>不</span><span>完</span><span>美</span></div>
  <div class="sub">ISSUE 04 · 一本关于「做糊了也很可爱」的独立小杂志 <span class="note">↑ 每个字都是剪下来贴的！</span></div>
  <div class="work">
    <figure class="polaroid">
      <div class="tape"></div><div class="tape tr"></div>
      <div class="img"></div>
      <figcaption>周三下午的工作台</figcaption>
      <div class="stamp">ISSUE 04</div>
    </figure>
    <div class="cols">
      <div>
        <h3>关于这一期</h3>
        <p>这一期我们用一台二手的 Riso 印刷机，印了 200 份。机器有点漏油，所以每页的红色都不太一样——我们认为这<span class="mark">不是瑕疵，是签名</span>。</p>
        <p>内容关于：贴错位置的胶带、晒过太阳的纸、和所有「差一点点就完美」的东西。</p>
      </div>
      <div>
        <h3>栏目</h3>
        <p>01 剪刀与浆糊的伦理<br />02 马克笔越界史<br />03 拍立得显影的九十秒<br />04 读者来信：我的糊作业</p>
        <p>订阅：寄一张你最喜欢的纸给我们，换下一期。</p>
      </div>
    </div>
  </div>
  <span class="star s1">★</span><span class="star s2">★</span>
  <div class="divider">✂ - - - - - - - - - - ✂</div>
  <div class="foot"><span>PARADIGM HALL · No.12</span><span>印于上海 · 2026 秋</span></div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
