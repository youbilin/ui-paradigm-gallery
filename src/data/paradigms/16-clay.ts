import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const theme = {
  bg: '#f3eefc',
  surface: '#ffffff',
  alt: 'rgba(139, 92, 246, 0.08)',
  text: '#5b4a72',
  muted: '#9a8bb0',
  primary: '#8b5cf6',
  onPrimary: '#ffffff',
  border: 'rgba(139, 92, 246, 0.16)',
  radius: '22px',
  radiusLg: '30px',
  shadow: '12px 12px 28px rgba(139, 92, 246, 0.18), -8px -8px 18px rgba(255, 255, 255, 0.9)',
  font: '"Quicksand", "PingFang SC", sans-serif',
  mono: 'ui-monospace, "SF Mono", Consolas, monospace',
  ok: '#34b37e',
  warn: '#e8a13a',
  err: '#f2617a',
  info: '#5b9df9',
  focus: '#8b5cf6',
  extraCss: `
.sc-cell { border: 0; box-shadow: 12px 12px 26px rgba(139,92,246,.14), -6px -6px 14px rgba(255,255,255,.95), inset 0 1px 0 rgba(255,255,255,.9); }
.sc-btn { border: 0; border-radius: 999px; font-weight: 600; box-shadow: 6px 6px 14px rgba(139,92,246,.22), -4px -4px 10px rgba(255,255,255,.9), inset 0 1px 0 rgba(255,255,255,.55); }
.sc-btn:active { transform: translateY(2px); box-shadow: 2px 2px 6px rgba(139,92,246,.18), -2px -2px 6px rgba(255,255,255,.8), inset 0 2px 5px rgba(91,74,114,.16); }
.sc-head h2 { font-weight: 700; }
.sc-inp, .sc-ta, .sc-sel-btn { border: 0; border-radius: 18px; box-shadow: inset 4px 4px 9px rgba(139,92,246,.16), inset -4px -4px 9px rgba(255,255,255,.95); background: #f7f3fe; }
.sc-box, .sc-tag, .sc-badge { border: 0; box-shadow: 3px 3px 7px rgba(139,92,246,.16), -2px -2px 6px rgba(255,255,255,.9); }
.sc-prog { box-shadow: inset 2px 2px 5px rgba(139,92,246,.18); }
.sc-tbl th { letter-spacing: 0.14em; }
`,
};

export const clay: Paradigm = {
  id: 'clay',
  no: '16',
  name: '黏土拟态',
  nameEn: 'Claymorphism',
  tagline: '大圆角、马卡龙色、柔软 3D——界面像能捏的橡皮泥。',
  origin: 'Clay 3D 插画风 / Clay CSS (claymorphism) 2021',
  year: '2021 —',
  tags: ['柔软', '3D', '马卡龙', '大圆角'],
  kind: 'paradigm',
  bestFor: ['儿童与教育产品', '生活方式 App', '轻松工具站', ' onboarding 引导'],
  avoid: ['专业数据后台', '极简主义品牌', '需要严肃感的企业官网'],
  prompt: `# 设计范式：黏土拟态（Claymorphism）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：柔软、蓬松、可触摸；像一块刚捏好的橡皮泥
- 情绪关键词：马卡龙、3D、圆润、安全、治愈
- 核心手法：明亮底色 + 大而柔的多层阴影，制造充气的体积感

## 2. 布局
- 大圆角（20-32px）的大色块分区，元素之间留出呼吸间距
- 允许元素「漂浮」：卡片带大而散的柔和投影
- 装饰用同色系小黏土块（圆形、胶囊形、不规则 blob）散落点缀

## 3. 字体排印
- 标题：圆体（Quicksand / Nunito / 阿里妈妈方圆），600-700 字重，28-44px
- 正文：同族常规字重 14-15px，行高 1.75，字重偏软（500）
- 数字可用圆体等宽数字，避免尖锐的衬线数字

## 4. 色彩
- 底：淡紫 #f3eefc / 淡粉 / 淡蓝（马卡龙浅色）
- 主色：紫 #8b5cf6 或粉 #f2617a；文字：暖灰紫 #5b4a72
- 全部低饱和高明度，禁纯黑纯白大面积对撞

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
- 签名组件：胖圆开关（厚轨道 + 大圆钮）与「按进黏土」的凹陷输入井
- 按钮：胶囊 999px + 双层柔影（外散影 + inset 0 1px 0 白 高光）；hover 上浮 2px 影加深；active 切 inset 内凹（按进面板）
- 输入框：inset 凹陷 + 大圆角；focus 凹陷加深 + 紫描边
- 下拉框浮层：radius 20px + 0 16px 40px 厚柔影；hover 选项圆角化 + 紫 8% 底
- 开关：厚轨道 + 白圆钮，ON 紫渐变
- 表格：行高 48px+、无竖线；hover 行整体浮起加一层柔影
- 厚度纪律：所有控件必须「厚」——外散影 + 内高光两层打底
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：上浮 2px + 阴影加深一档（0 8px 24px → 0 12px 32px）
- active：下沉到原位 + inset 0 3px 6px rgba(0,0,0,.12)（按进黏土）
- focus-visible：2px 紫色描边 + 4px 柔光外扩 rgba(139,92,246,.28)；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，240ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（240ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角圆润胶囊堆叠，从下方 16px 弹入，3s 后向下淡出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 240ms（黏土厚重，动作要慢且有缓动），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 阴影永远是「大模糊、低透明度、多层」：外影 + 顶部内高光 + 底部内暗边
- 可用 radial-gradient 做顶部柔光；装饰 blob 用不规则 border-radius
- 动效全部慢悠悠：0.2s 以上 ease-out，弹性出现

## 7. 禁忌
- 禁止锐利直角、细线描边、硬投影、故障效果
- 禁止高饱和荧光色与强对比霓虹
- 禁止玻璃拟态的模糊背景层（黏土要的是体积，不是透视）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '大圆角 20-32px + 多层柔和阴影（外影+内高光）',
    '马卡龙浅色底，主色 #8b5cf6，禁纯黑对撞',
    '按钮胶囊形：hover 上浮、active 下沉内凹',
    '输入框内凹 inset 阴影',
  ],
  tokens: {
    colors: [
      { name: '淡紫底', value: '#f3eefc' },
      { name: '黏土白', value: '#ffffff' },
      { name: '软紫', value: '#8b5cf6' },
      { name: '暖灰紫文字', value: '#5b4a72' },
      { name: '软粉', value: '#f2617a' },
      { name: '软蓝', value: '#5b9df9' },
    ],
    fonts: [{ role: '标题/正文', stack: '"Quicksand", "Nunito", "PingFang SC", sans-serif' }],
    radius: '卡片 22-30px / 按钮 999px',
    shadow: '12px 12px 28px rgba(139,92,246,.18) + 内高光',
    extras: [
      { label: '边框', value: '0（体积感来自阴影）' },
      { label: '动效', value: '0.2s+ ease-out，弹性出现' },
    ],
  },
  demo: {
    height: 1400,
    heightMobile: 1750,
    html: page({
      title: '黏土拟态 · Claymorphism',
      fonts: ['Quicksand:wght@400;500;600;700'],
      css: scCss(theme) + `
body { font-family: "Quicksand", "PingFang SC", sans-serif; background: #f3eefc; color: #5b4a72; padding: 46px 30px 54px; }
.shell { max-width: 1040px; margin: 0 auto; position: relative; }
.blob { position: absolute; border-radius: 46% 54% 58% 42% / 48% 44% 56% 52%; opacity: .55; pointer-events: none; }
.blob.b1 { width: 120px; height: 120px; background: #ffd6e8; top: -30px; right: 4%; }
.blob.b2 { width: 80px; height: 80px; background: #cfe9ff; top: 40%; left: -20px; }
.blob.b3 { width: 150px; height: 150px; background: #d9f7e6; bottom: -50px; right: -30px; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; position: relative; z-index: 2; }
.brand { display: flex; align-items: center; gap: 11px; font-weight: 700; font-size: 16.5px; }
.brand i { width: 30px; height: 30px; border-radius: 50%; background: #8b5cf6; box-shadow: inset 0 -3px 6px rgba(60,30,120,.35), inset 0 3px 5px rgba(255,255,255,.5); }
.nav-links span { margin-left: 20px; font-size: 13.5px; font-weight: 600; color: #9a8bb0; cursor: default; }
.nav-links span:hover { color: #8b5cf6; }
.hero { position: relative; z-index: 2; background: #ffffff; border-radius: 34px; padding: 52px 48px; box-shadow: 16px 16px 34px rgba(139,92,246,.16), -8px -8px 20px rgba(255,255,255,.9), inset 0 2px 0 rgba(255,255,255,.9); }
.pill { display: inline-block; background: #ede4fe; color: #7c4ddb; font-size: 12px; font-weight: 700; padding: 7px 16px; border-radius: 999px; box-shadow: inset 0 1px 0 rgba(255,255,255,.8); }
.hero h1 { font-size: clamp(36px, 5vw, 58px); font-weight: 700; line-height: 1.14; margin: 16px 0 16px; max-width: 520px; }
.hero h1 em { font-style: normal; color: #8b5cf6; }
.hero p { max-width: 420px; font-size: 15px; line-height: 1.8; font-weight: 500; color: #8d7fa3; }
.cta { display: flex; gap: 14px; margin-top: 30px; flex-wrap: wrap; }
.cta a { font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 999px; cursor: pointer; text-decoration: none; background: #8b5cf6; color: #fff; box-shadow: 8px 8px 18px rgba(139,92,246,.3), -5px -5px 12px rgba(255,255,255,.9), inset 0 2px 0 rgba(255,255,255,.4); transition: transform .18s, box-shadow .18s; }
.cta a.gho { background: #f6f1fd; color: #7c4ddb; }
.cta a:hover { transform: translateY(-2px); box-shadow: 10px 12px 22px rgba(139,92,246,.32), -5px -5px 12px rgba(255,255,255,.9), inset 0 2px 0 rgba(255,255,255,.4); }
.cta a:active { transform: translateY(2px); box-shadow: 3px 3px 8px rgba(139,92,246,.22), -3px -3px 8px rgba(255,255,255,.85), inset 0 3px 7px rgba(91,74,114,.18); }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 34px; position: relative; z-index: 2; }
.card { background: #fff; border-radius: 26px; padding: 24px; box-shadow: 10px 10px 24px rgba(139,92,246,.14), -6px -6px 14px rgba(255,255,255,.9), inset 0 2px 0 rgba(255,255,255,.9); }
.card .ic { width: 46px; height: 46px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 21px; margin-bottom: 14px; box-shadow: inset 0 -3px 6px rgba(0,0,0,.08), inset 0 3px 5px rgba(255,255,255,.6); }
.card:nth-child(1) .ic { background: #ffd6e8; }
.card:nth-child(2) .ic { background: #cfe9ff; }
.card:nth-child(3) .ic { background: #d9f7e6; }
.card b { display: block; font-size: 15.5px; margin-bottom: 7px; }
.card p { font-size: 13px; line-height: 1.7; color: #8d7fa3; font-weight: 500; }
@media (max-width: 760px) {
  .cards { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .hero { padding: 38px 26px; }
}`,
      body: `
<div class="shell">
  <span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span>
  <nav class="nav">
    <div class="brand"><i></i>ClayKit</div>
    <div class="nav-links"><span>组件</span><span>主题</span><span>价格</span><span>博客</span></div>
  </nav>
  <section class="hero">
    <span class="pill">✨ v2.0 柔软登场</span>
    <h1>把界面，<br />捏成<em>橡皮泥</em>。</h1>
    <p>没有尖锐的直角，没有冰冷的描边。每一个按钮都像刚揉好的黏土——按下去会陷进去，松手会弹回来。</p>
    <div class="cta">
      <a>免费捏一个 →</a>
      <a class="gho">看看组件</a>
    </div>
  </section>
  <section class="cards">
    <div class="card"><div class="ic">🎈</div><b>充气体积</b><p>多层柔和阴影堆出 3D 体积，元素像充满了空气。</p></div>
    <div class="card"><div class="ic">🫧</div><b>马卡龙色</b><p>低饱和高明度配色，看久了眼睛也不会累。</p></div>
    <div class="card"><div class="ic">🧸</div><b>按压手感</b><p>按钮按下时内凹、回弹时上浮，触觉先于视觉。</p></div>
  </section>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
