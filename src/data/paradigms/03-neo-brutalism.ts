import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#fffdf7",
  "surface": "#ffffff",
  "alt": "rgba(15,15,15,0.05)",
  "text": "#0f0f0f",
  "muted": "#6b6b6b",
  "primary": "#0f0f0f",
  "onPrimary": "#fffdf7",
  "border": "#0f0f0f",
  "radius": "4px",
  "radiusLg": "8px",
  "shadow": "5px 5px 0 #0f0f0f",
  "font": "\"Helvetica Neue\", Arial, \"PingFang SC\", sans-serif",
  "mono": "ui-monospace, \"SF Mono\", Consolas, monospace",
  "ok": "#8ac926",
  "warn": "#ffd23f",
  "err": "#ff6b6b",
  "info": "#3a86ff",
  "focus": "#3a86ff",
  "extraCss": ".sc-cell{border-width:3px;}.sc-btn{border-width:3px;box-shadow:4px 4px 0 #0f0f0f;text-transform:uppercase;font-weight:700;}.sc-btn:hover{transform:translate(1px,1px);box-shadow:3px 3px 0 #0f0f0f;}.sc-btn:active{transform:translate(4px,4px);box-shadow:0 0 0 #0f0f0f;}.sc-btn.pri{background:#3a86ff;border-color:#0f0f0f;color:#fff;box-shadow:4px 4px 0 #0f0f0f;}.sc-inp,.sc-ta,.sc-sel-btn{border-width:3px;}.sc-badge{border:2px solid #0f0f0f;border-radius:0;}.sc-tag{border-width:2px;border-radius:0;}.sc-ava{border:2px solid #0f0f0f;}"
};

export const neoBrutalism: Paradigm = {
  id: 'neo-brutalism',
  no: '03',
  name: '新粗野主义',
  nameEn: 'Neo-Brutalism',
  tagline: '粗黑边、硬阴影、糖果色——故意「没做完」的张扬。',
  origin: '粗野主义建筑 / Gumroute 式网页 / Y2K 复兴',
  year: '2020 —',
  tags: ['粗边框', '硬阴影', '高饱和', '张扬'],
  bestFor: ['创意机构站', '活动页', '面向 Z 世代的产品'],
  avoid: ['金融/医疗等严肃场景', '信息密集的后台'],
  prompt: `# 设计范式：新粗野主义（Neo-Brutalism）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质： raw、直给、带点「没做完」的酷；像贴在墙上的传单
- 情绪关键词：张扬、糖果色、街头、年轻

## 2. 布局
- 元素之间故意「顶」在一起：大块、大间距、强对比
- 允许轻微旋转（-2deg ~ 2deg）和层叠压住，制造拼贴感
- 页面分区用粗黑边框的盒子，盒子即布局

## 3. 字体排印
- 标题：Archivo Black / Arial Black / 思源黑体 Heavy，48-80px，可全大写
- 正文：同族 14-16px，行高 1.6
- 数字与标签可用等宽字体点缀

## 4. 色彩
- 底色：纸白 #fffdf7 或纯白；主色：墨黑 #0f0f0f
- 糖果色只做「面」：黄 #ffd23f、粉 #ff8fab、蓝 #3a86ff、绿 #8ac926
- 彩色只涂在重点盒子和主按钮上，一屏不超过三种糖果色

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
- 签名组件：贴纸徽章（±5° 旋转、糖果底、黑边、★ / NEW!）与「硬阴影按压」手感
- 按钮：糖果色 + 3px 黑边 + 5px 硬阴影；hover 位移 -2px 且阴影变 7px（拎起）；active 归位贴边（按下）
- 输入框：白底 3px 黑边 + 4px 硬阴影；聚焦边框变糖果蓝、光标加粗
- 下拉框浮层：与输入框同款黑边硬阴影再偏移 6px，像第二张卡片叠上来
- 开关：黑框轨道 + 糖果色方形钮，无圆角无弹性
- 模态框：黑粗框 + 8px 硬阴影 + 糖果标题条 + 45° 斜纹遮罩
- 表格：2px 黑线全框、表头柠檬黄、行 hover 糖果粉
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：位移 -2px / -3px，同时硬阴影加 2px（像被拎起来）
- active：回到原位、阴影归零（像被按回桌面）
- focus-visible：2px 黑色虚线框外扩 3px；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，140ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（140ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角叠放，从右侧 16px 处滑入且伴随 0.18s 弹跳感，3s 后原路退出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 140ms（弹跳缓动 cubic-bezier(.34,1.56,.64,1)），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 阴影全部是 offset 硬阴影，禁止模糊阴影和渐变
- 分隔用粗黑线或双线；可以用波点/斜纹底纹做局部背景
- 图标：实心粗形或 2px 以上线性，不用细线图标

## 7. 禁忌
- 禁止渐变、玻璃拟态、柔和模糊阴影、低饱和莫兰迪色
- 禁止细线（<2px）描边、禁止精致的小圆角（>12px）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '2-3px 黑边 + offset 硬阴影（0 模糊），禁用柔影',
    'hover 位移 2px、阴影收紧；active 贴边',
    '糖果色只做面：黄/粉/蓝/绿，一屏 ≤3 种',
    '允许 ±2° 旋转与层叠，制造拼贴感',
  ],
  tokens: {
    colors: [
      { name: '纸白', value: '#fffdf7' },
      { name: '墨黑', value: '#0f0f0f' },
      { name: '糖果黄', value: '#ffd23f' },
      { name: '泡泡粉', value: '#ff8fab' },
      { name: '电子蓝', value: '#3a86ff' },
    ],
    fonts: [{ role: '标题', stack: '"Archivo Black", "Arial Black", "PingFang SC", sans-serif' }],
    radius: '卡片 0-6px / 按钮 10px',
    shadow: '5px 5px 0 #0f0f0f（硬阴影）',
    extras: [{ label: '边框', value: '2-3px solid #0f0f0f' }],
  },
  demo: {
    height: 1730,
    heightMobile: 2660,
    html: page({
      title: '新粗野主义 · Neo-Brutalism',
      fonts: ['Archivo+Black'],
      css: scCss(scTheme) + `
body {
  font-family: "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", sans-serif;
  background: #fffdf7; color: #0f0f0f; padding: 40px 28px 48px;
  background-image: radial-gradient(#0f0f0f 1px, transparent 1px);
  background-size: 26px 26px;
}
.shell { max-width: 1060px; margin: 0 auto; }
.topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 34px; }
.logo {
  background: #ffd23f; border: 3px solid #0f0f0f; box-shadow: 5px 5px 0 #0f0f0f;
  font-family: "Archivo Black", "Arial Black", sans-serif; font-size: 20px;
  padding: 10px 18px; transform: rotate(-1.5deg);
}
.navlink { font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.06em; margin-left: 22px; cursor: default; }
.hero {
  background: #fff; border: 3px solid #0f0f0f; box-shadow: 8px 8px 0 #0f0f0f;
  padding: 44px 40px 40px; position: relative; margin-bottom: 44px;
}
.hero .sticker {
  position: absolute; top: -18px; right: 26px; background: #ff8fab; border: 3px solid #0f0f0f;
  box-shadow: 3px 3px 0 #0f0f0f; font-family: "Archivo Black", sans-serif; font-size: 13px;
  padding: 6px 12px; transform: rotate(3deg);
}
.hero h1 { font-family: "Archivo Black", "Arial Black", sans-serif; font-size: 56px; line-height: 1.02; text-transform: uppercase; letter-spacing: -0.01em; }
.hero h1 .hl { background: #ffd23f; padding: 0 10px; border: 3px solid #0f0f0f; display: inline-block; transform: rotate(-1deg); }
.hero p { margin: 20px 0 28px; font-size: 15px; line-height: 1.65; max-width: 560px; font-weight: 500; }
.btn {
  display: inline-block; font-family: "Archivo Black", sans-serif; font-size: 15px; text-transform: uppercase;
  border: 3px solid #0f0f0f; box-shadow: 5px 5px 0 #0f0f0f; padding: 13px 26px; cursor: default;
  transition: transform 0.08s, box-shadow 0.08s;
}
.btn:hover { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #0f0f0f; }
.btn:active { transform: translate(5px, 5px); box-shadow: 0 0 0 #0f0f0f; }
.btn-blue { background: #3a86ff; color: #fff; }
.btn-white { background: #fff; color: #0f0f0f; margin-left: 14px; }
.pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; align-items: start; }
.plan {
  background: #fff; border: 3px solid #0f0f0f; box-shadow: 6px 6px 0 #0f0f0f; padding: 26px 24px;
}
.plan h3 { font-family: "Archivo Black", sans-serif; font-size: 22px; text-transform: uppercase; }
.plan .price { font-family: "Archivo Black", sans-serif; font-size: 44px; margin: 12px 0 4px; font-variant-numeric: tabular-nums; }
.plan .price small { font-size: 14px; font-weight: 700; }
.plan ul { list-style: none; margin: 18px 0 22px; }
.plan li { font-size: 13.5px; font-weight: 500; padding: 8px 0 8px 4px; border-bottom: 2px dashed #0f0f0f; }
.plan li::before { content: "■ "; color: #3a86ff; }
.plan.featured { background: #8ac926; transform: rotate(-1.2deg) scale(1.03); position: relative; }
.plan.featured .tag {
  position: absolute; top: -16px; left: 50%; transform: translateX(-50%) rotate(2deg);
  background: #0f0f0f; color: #ffd23f; font-family: "Archivo Black", sans-serif; font-size: 12px;
  padding: 5px 14px; border: 3px solid #0f0f0f; white-space: nowrap;
}
.formrow { display: flex; gap: 16px; margin-top: 44px; flex-wrap: wrap; }
.field { flex: 1; min-width: 220px; }
.field label { display: block; font-family: "Archivo Black", sans-serif; font-size: 13px; text-transform: uppercase; margin-bottom: 8px; }
.field input, .field select {
  width: 100%; font: inherit; font-size: 14px; padding: 12px 14px; background: #fff;
  border: 3px solid #0f0f0f; box-shadow: 4px 4px 0 #0f0f0f; outline: none;
}
.field input:focus { border-color: #3a86ff; }
@media (max-width: 860px) {
  .pricing { grid-template-columns: 1fr; }
  .plan.featured { transform: none; }
  .hero h1 { font-size: 36px; }
  .btn-white { margin-left: 0; margin-top: 12px; }
}`,
      body: `
<div class="shell">
  <div class="topbar">
    <div class="logo">BRUTAL.CO</div>
    <div><span class="navlink">产品</span><span class="navlink">定价</span><span class="navlink">骂我们</span></div>
  </div>
  <section class="hero">
    <div class="sticker">★ 全新上线</div>
    <h1>别<span class="hl">再忍受</span><br />无聊的界面</h1>
    <p>我们做了一套「故意很吵」的设计工具。粗边框、硬阴影、糖果色——让你的产品在一秒钟内被记住，而不是又一张 Tailwind 脸。</p>
    <span class="btn btn-blue">立即开骂</span>
    <span class="btn btn-white">看看作品</span>
  </section>
  <section class="pricing">
    <div class="plan">
      <h3>个人版</h3>
      <div class="price">￥0<small> /月</small></div>
      <ul>
        <li>3 个项目</li>
        <li>全部 48 个组件</li>
        <li>社区支持</li>
      </ul>
      <span class="btn btn-white" style="margin-left:0">开始白嫖</span>
    </div>
    <div class="plan featured">
      <div class="tag">最受欢迎 ★</div>
      <h3>专业版</h3>
      <div class="price">￥39<small> /月</small></div>
      <ul>
        <li>无限项目</li>
        <li>粗野主题生成器</li>
        <li>优先支持（真的优先）</li>
      </ul>
      <span class="btn btn-blue">现在就买</span>
    </div>
    <div class="plan">
      <h3>团队版</h3>
      <div class="price">￥129<small> /月</small></div>
      <ul>
        <li>5 个席位</li>
        <li>设计规范托管</li>
        <li>专属客服（会骂人那种）</li>
      </ul>
      <span class="btn btn-white" style="margin-left:0">联系我们</span>
    </div>
  </section>
  <div class="formrow">
    <div class="field">
      <label>你的邮箱</label>
      <input type="text" placeholder="hi@brutal.co" />
    </div>
    <div class="field">
      <label>想多吵？</label>
      <select><option>稍微有点吵</option><option>非常吵</option><option>吵到报警</option></select>
    </div>
    <div class="field" style="flex:0 0 auto; display:flex; align-items:flex-end">
      <span class="btn btn-blue" style="white-space:nowrap">订阅 →</span>
    </div>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
