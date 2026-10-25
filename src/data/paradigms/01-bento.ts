import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#f5f5f7",
  "surface": "#ffffff",
  "alt": "rgba(0,0,0,0.04)",
  "text": "#1d1d1f",
  "muted": "#86868b",
  "primary": "#0071e3",
  "onPrimary": "#ffffff",
  "border": "rgba(0,0,0,0.08)",
  "radius": "20px",
  "radiusLg": "24px",
  "shadow": "0 1px 2px rgba(0,0,0,0.05)",
  "font": "system-ui, -apple-system, \"PingFang SC\", sans-serif",
  "mono": "ui-monospace, \"SF Mono\", Consolas, monospace",
  "ok": "#34c759",
  "warn": "#ff9f0a",
  "err": "#ff3b30",
  "info": "#0071e3",
  "focus": "#0071e3",
  "extraCss": ""
};

export const bento: Paradigm = {
  id: 'bento',
  no: '01',
  name: '便当盒网格',
  nameEn: 'Bento Grid',
  tagline: '像便当盒一样，把不同内容装进大小不一的格子里。',
  origin: 'Apple 官网 / Linear / 日式便当盒',
  year: '2022 —',
  tags: ['模块化', 'Apple 风', '大圆角卡片', '克制'],
  bestFor: ['产品主页', '个人 dashboard', '功能总览页'],
  avoid: ['重表单的后台', '长文阅读场景'],
  prompt: `# 设计范式：便当盒网格（Bento Grid）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：Apple 官网式的模块化、温和、高级；内容像便当盒一样被装进一格一格
- 情绪关键词：整洁、呼吸感、克制、科技消费品

## 2. 布局
- 主体为 12 列网格，内容区 max-width 1080-1200px，居中
- 核心是 Bento 网格：大小不一的圆角卡片拼成完整矩形，允许跨格（2×2、2×1、1×1）
- 卡片间距 16-20px；页面级留白 80-120px；卡片内边距 20-24px
- 移动端全部降为单列堆叠，保持卡片顺序

## 3. 字体排印
- 字体：system-ui / -apple-system；数字一律 tabular-nums
- 层级：H1 40-56px/600；卡片标题 15-17px/600；正文 13-15px/400；辅助标签 11-12px/500 大写灰色
- 标题左对齐，行高 1.1-1.25

## 4. 色彩
- 背景 #f5f5f7；卡片 #ffffff；主文字 #1d1d1f；次文字 #86868b
- 强调色每屏最多一个（如 #0071e3），只用于小面积图标、关键数字和主按钮
- 渐变只允许出现在单个功能格内（如音乐/地图格），禁止整页渐变

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
- 签名组件：跨格 Bento 卡片（1×1 / 2×1 / 2×2 混排、格子大小必须有节奏）与 iOS 开关
- 按钮：胶囊 999px；主按钮强调色实底无描边；hover 只做亮度 +4% 与 scale(1.02)，绝不允许方形
- 输入框：大圆角 12px、1px #d2d2d7 描边；聚焦时描边变强调色 + 3px 同色 12% 光环（是一圈「晕」，不是发光）
- 下拉框浮层：大圆角白色托盘 + 8px 内距，选中项带 ✓，从触发器下方 6px 滑入
- 开关：31×51px iOS 滑块、圆钮带小投影、ON 轨道变强调色——全场辨识度最高的控件
- 表格：放弃表格感——无边框、斑马纹 #f5f5f7、行高 44px，做成「设置页列表」的样子
- 图标：24px 线性放在 44px 圆形浅灰底上
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：提亮一档 + scale(1.02)，阴影由 0 1px 2px 升到 0 4px 10px
- active：scale(0.98)，阴影回落
- focus-visible：2px 强调色描边 + 3px 外扩（#0071e3 33% 透明度）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，200ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（200ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角堆叠，进入 translateY 12px→0 渐显，3s 自动消失，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 200ms（滑块类 240ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 圆角大（16-24px）、阴影极轻、无描边
- 每格元素左对齐；可有一格放 mini 图表（细条形或环形，单色）
- 头像/封面用低饱和渐变，仅此一处允许渐变

## 7. 禁忌
- 禁止整页紫蓝渐变、发光效果、斜体装饰
- 禁止卡片带彩色描边、禁止 emoji 当图标、禁止超过三种字号层级
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    'Bento 网格：大小不一卡片拼成完整矩形，允许跨格',
    '卡片：radius 20-24px、白底、1px 级轻阴影、无描边',
    '主按钮胶囊形实色；图标置于圆形浅灰底上',
    '每屏一个强调色；渐变仅限单个功能格',
  ],
  tokens: {
    colors: [
      { name: '背景', value: '#f5f5f7' },
      { name: '卡片', value: '#ffffff' },
      { name: '主文字', value: '#1d1d1f' },
      { name: '次文字', value: '#86868b' },
      { name: '强调', value: '#0071e3' },
    ],
    fonts: [{ role: '全场', stack: 'system-ui, -apple-system, "PingFang SC", sans-serif' }],
    radius: '20-24px（按钮 999px）',
    shadow: '0 1px 2px rgba(0,0,0,0.05)',
    extras: [
      { label: '卡片间距', value: '16-20px' },
      { label: '内边距', value: '20-24px' },
    ],
  },
  demo: {
    height: 1590,
    heightMobile: 2680,
    html: page({
      title: '便当盒网格 · Bento Grid',
      css: scCss(scTheme) + `
body {
  font-family: system-ui, -apple-system, "SF Pro Text", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #f5f5f7; color: #1d1d1f; padding: 40px 24px 48px;
}
.shell { max-width: 1080px; margin: 0 auto; }
header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; }
.brand { display: flex; align-items: center; gap: 10px; font-size: 16px; font-weight: 600; }
.brand-dot { width: 12px; height: 12px; border-radius: 50%; background: #1d1d1f; }
nav { display: flex; gap: 26px; font-size: 13px; color: #86868b; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 152px); gap: 18px; }
.cell {
  background: #fff; border-radius: 22px; padding: 22px; position: relative; overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.cell .label { font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #86868b; }
.profile { grid-column: 1 / 3; grid-row: 1 / 3; display: flex; flex-direction: column; }
.avatar {
  width: 56px; height: 56px; border-radius: 50%;
  background: linear-gradient(135deg, #5e5ce6, #bf5af2);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 22px; font-weight: 600; margin: 14px 0 16px;
}
.profile h2 { font-size: 19px; font-weight: 600; }
.profile .role { font-size: 13px; color: #86868b; margin-top: 4px; }
.profile .bio { font-size: 13px; line-height: 1.7; color: #424245; margin-top: 12px; max-width: 380px; }
.follow {
  margin-top: auto; align-self: flex-start; background: #0071e3; color: #fff; border: none;
  font-size: 13px; font-weight: 500; padding: 9px 18px; border-radius: 999px; cursor: default;
}
.stats { grid-column: 3 / 5; grid-row: 1 / 2; display: flex; flex-direction: column; }
.stats-row { display: flex; gap: 40px; margin-top: auto; margin-bottom: 6px; }
.stat b { display: block; font-size: 23px; font-weight: 600; font-variant-numeric: tabular-nums; }
.stat span { font-size: 12px; color: #86868b; }
.weather { grid-column: 3 / 4; grid-row: 2 / 3; display: flex; flex-direction: column; }
.sun { margin: auto auto 6px; width: 34px; height: 34px; }
.weather b { font-size: 22px; font-weight: 600; font-variant-numeric: tabular-nums; }
.weather span { font-size: 12px; color: #86868b; }
.chart { grid-column: 4 / 5; grid-row: 2 / 4; display: flex; flex-direction: column; }
.bars { display: flex; align-items: flex-end; gap: 7px; flex: 1; margin: 14px 0 10px; }
.bars i { flex: 1; background: #0071e3; border-radius: 5px; opacity: 0.9; }
.bars i:last-child { opacity: 0.25; }
.music { grid-column: 1 / 4; grid-row: 3 / 4; display: flex; align-items: center; gap: 16px; }
.cover { width: 52px; height: 52px; border-radius: 12px; background: linear-gradient(135deg, #ff9f0a, #ff375f); flex: none; }
.music .meta { flex: 1; min-width: 0; }
.music b { display: block; font-size: 14px; font-weight: 600; }
.music span { font-size: 12px; color: #86868b; }
.track { height: 4px; background: #e8e8ed; border-radius: 2px; margin-top: 10px; position: relative; }
.track i { position: absolute; left: 0; top: 0; bottom: 0; width: 42%; background: #0071e3; border-radius: 2px; }
.play {
  width: 38px; height: 38px; border-radius: 50%; background: #f5f5f7; border: none; flex: none;
  display: flex; align-items: center; justify-content: center; cursor: default;
}
@media (max-width: 860px) {
  .grid { grid-template-columns: 1fr; grid-template-rows: none; }
  .cell { grid-column: auto !important; grid-row: auto !important; min-height: 140px; }
  .profile { min-height: 240px; }
  nav { display: none; }
}`,
      body: `
<div class="shell">
  <header>
    <div class="brand"><span class="brand-dot"></span>Bento Studio</div>
    <nav><span>作品</span><span>动态</span><span>收藏</span><span>关于</span></nav>
  </header>
  <div class="grid">
    <section class="cell profile">
      <div class="label">Profile</div>
      <div class="avatar">满</div>
      <h2>林小满</h2>
      <div class="role">产品设计师 · 上海</div>
      <p class="bio">白天画界面，晚上做便当。相信好的设计像好的便当——食材不必昂贵，但摆盘要呼吸。</p>
      <button class="follow">关注</button>
    </section>
    <section class="cell stats">
      <div class="label">数据概览</div>
      <div class="stats-row">
        <div class="stat"><b>12.8k</b><span>关注者</span></div>
        <div class="stat"><b>86</b><span>作品</span></div>
        <div class="stat"><b>24.1k</b><span>获赞</span></div>
      </div>
    </section>
    <section class="cell weather">
      <div class="label">天气</div>
      <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="#ff9f0a" stroke-width="1.5" stroke-linecap="round">
        <circle cx="12" cy="12" r="4.5"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>
      </svg>
      <b>22°</b><span>晴 · 空气优</span>
    </section>
    <section class="cell chart">
      <div class="label">本周活跃</div>
      <div class="bars"><i style="height: 38%"></i><i style="height: 55%"></i><i style="height: 44%"></i><i style="height: 70%"></i><i style="height: 60%"></i><i style="height: 88%"></i><i style="height: 100%"></i></div>
      <span style="font-size:12px;color:#86868b">周一 → 周日</span>
    </section>
    <section class="cell music">
      <div class="cover"></div>
      <div class="meta">
        <b>夜航西飞</b>
        <span>海边的西塞罗 · 单曲循环</span>
        <div class="track"><i></i></div>
      </div>
      <button class="play">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="#1d1d1f"><path d="M3 1.5v11l9-5.5z"/></svg>
      </button>
    </section>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
