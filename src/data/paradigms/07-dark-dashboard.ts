import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#0a0a0c",
  "surface": "#101013",
  "alt": "rgba(255,255,255,0.05)",
  "text": "#e8e8ec",
  "muted": "#8b8b96",
  "primary": "#5eead4",
  "onPrimary": "#052e2b",
  "border": "#26262c",
  "radius": "10px",
  "radiusLg": "14px",
  "shadow": "0 1px 3px rgba(0,0,0,0.4)",
  "font": "system-ui, -apple-system, \"PingFang SC\", sans-serif",
  "mono": "ui-monospace, \"SF Mono\", Consolas, monospace",
  "ok": "#34d399",
  "warn": "#fbbf24",
  "err": "#f87171",
  "info": "#60a5fa",
  "focus": "#5eead4",
  "extraCss": ".sc-prog-num,.sc-ring-num,.sc-pg-b,.rank-no{font-variant-numeric:tabular-nums;}.sc-btn.pri{box-shadow:0 0 0 1px #5eead4, 0 0 14px rgba(94,234,212,0.25);}"
};

export const dashboard: Paradigm = {
  id: 'dashboard',
  no: '07',
  name: '暗色数据仪表盘',
  nameEn: 'Dark Dashboard',
  tagline: '信息密集、数字等宽、状态点常亮——给眼睛看的驾驶舱。',
  origin: 'Bloomberg 终端 / Grafana / Vercel Analytics',
  year: '2018 —',
  tags: ['暗色', '密集', '等宽数字', '图表'],
  bestFor: ['SaaS 后台', '运维监控', '数据产品'],
  avoid: ['营销落地页', '轻展示场景'],
  prompt: `# 设计范式：暗色数据仪表盘（Dark Dashboard）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：驾驶舱/作战室；为长时间盯屏设计，密度即美德
- 情绪关键词：专业、冷静、高效、可信

## 2. 布局
- 侧边栏（200-220px，图标+文字导航）+ 主区；主区 KPI 行 → 图表区 → 表格区
- 面板（panel）是唯一容器：bg 比页面亮一档，1px 描边，radius 10-12px，padding 16px
- 间距 12-16px，一屏至少呈现 3 类信息；表格行高 36-40px

## 3. 字体排印
- UI：system-ui；所有数字 font-variant-numeric: tabular-nums
- 字号层级：KPI 数字 22-28px/600；面板标题 13px/500；正文与表格 12-13px；标签 11px 大写灰色
- 行高紧凑 1.4-1.5

## 4. 色彩
- 页面 #0a0a0c / 面板 #101013-141418 / 描边 #26262c
- 主文字 #e8e8ec / 次文字 #8b8b96
- 强调色全场唯一（推荐青 #5eead4 或琥珀 #f59e0b），只给关键数字与图表主线
- 涨跌语义：涨红 #f87171、跌绿 #34d399（遵循中国行情习惯，可按项目地区调整）

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
- 签名组件：KPI 卡（大数字 tabular + ▲▼ 同比红涨绿跌）与 6px 圆点状态徽章
- 按钮：radius 8px、主按钮强调色实底；hover 提亮 8% 且外发光同步加强
- 输入框：#101014 内凹 + 1px #2a2a31；focus 边框变强调色 + 光环
- 下拉框浮层：#141419 + 1px 边 + 0 12px 32px 60% 大范围黑投影——浮层要「浮」在数据上
- 开关：36×20 紧凑轨道、白钮右滑、ON 强调色
- 表格：无竖线、行线 #1f1f24、hover #16161a、表头 11px 大写灰、列名带排序箭头
- 图表：SVG 面积图主线强调色、面积填充 8% 透明度，除网格虚线外零装饰
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：底色提亮到 #1b1b22 / 边框提亮一档，提示层同上
- active：scale(0.99) 并保留外发光
- focus-visible：2px 强调色描边 + 3px 外扩 rgba(99,102,241,.35)；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，160ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（160ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右上角堆叠，从上方 8px 淡入，3s 后淡出，最多 3 条；危险类用红色左边条区分
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 160ms（数据刷新类可用 240ms 过渡，但不能更慢），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 一档深色体系：页面 < 面板 < 浮层，靠明度不靠阴影分层
- 圆角 ≤12px；阴影几乎不用（浮层用描边+明度）
- 数字与单位分开排版；时间一律相对时间（3 分钟前）

## 7. 禁忌
- 禁止大圆角、渐变、玻璃拟态、超过两种强调色
- 禁止非等宽数字（跳动）、禁止彩色实底徽章、禁止大面积留白
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '侧边栏 + 面板体系；明度分层代替阴影',
    'KPI：标签 + tabular 大数字 + ▲▼ 同比（红涨绿跌）',
    'SVG 单色图表 + 圆点状态徽章；表格无竖线',
    '唯一强调色；密度优先，一屏 ≥3 类信息',
  ],
  tokens: {
    colors: [
      { name: '页面', value: '#0a0a0c' },
      { name: '面板', value: '#101013' },
      { name: '描边', value: '#26262c' },
      { name: '主文', value: '#e8e8ec' },
      { name: '次文', value: '#8b8b96' },
      { name: '强调青', value: '#5eead4' },
    ],
    fonts: [{ role: 'UI', stack: 'system-ui, -apple-system, "PingFang SC", sans-serif' }],
    radius: '10-12px',
    shadow: '几乎不用（明度分层）',
    extras: [
      { label: '表格行高', value: '36-40px' },
      { label: '数字', value: 'tabular-nums 强制' },
    ],
  },
  demo: {
    height: 1630,
    heightMobile: 2580,
    html: page({
      title: '暗色数据仪表盘 · Dark Dashboard',
      css: scCss(scTheme) + `
body {
  font-family: system-ui, -apple-system, "SF Pro Text", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #0a0a0c; color: #e8e8ec; font-size: 13px; line-height: 1.45;
  display: grid; grid-template-columns: 208px 1fr; min-height: 100vh;
}
body > .sc-root { grid-column: 1 / -1; }
aside { border-right: 1px solid #1f1f24; padding: 18px 12px; display: flex; flex-direction: column; gap: 4px; }
.brand { display: flex; align-items: center; gap: 9px; font-size: 13px; font-weight: 600; padding: 4px 10px 18px; }
.brand i { width: 18px; height: 18px; border-radius: 6px; background: #5eead4; display: block; }
.nav { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 8px; color: #8b8b96; font-size: 12.5px; }
.nav.on { background: #16161a; color: #e8e8ec; }
.nav svg { opacity: .75; }
main { padding: 18px 22px 24px; display: flex; flex-direction: column; gap: 14px; min-width: 0; }
.top { display: flex; align-items: center; gap: 14px; }
.top h1 { font-size: 15px; font-weight: 600; }
.search { margin-left: auto; background: #101013; border: 1px solid #26262c; border-radius: 8px; color: #8b8b96; font-size: 12px; padding: 7px 12px; width: 200px; }
.avatar { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #5eead4, #3b82f6); }
.kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.panel { background: #101013; border: 1px solid #1f1f24; border-radius: 12px; padding: 16px; }
.kpi .lab { font-size: 11px; color: #8b8b96; text-transform: uppercase; letter-spacing: .06em; }
.kpi .val { font-size: 26px; font-weight: 600; font-variant-numeric: tabular-nums; margin-top: 6px; letter-spacing: -0.01em; }
.kpi .delta { font-size: 11.5px; margin-top: 4px; font-variant-numeric: tabular-nums; }
.up { color: #f87171; } .down { color: #34d399; }
.spark { margin-top: 10px; }
.mid { display: grid; grid-template-columns: 5fr 3fr; gap: 14px; }
.p-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 12px; }
.p-head b { font-size: 13px; font-weight: 500; }
.p-head span { font-size: 11px; color: #8b8b96; }
.legend { display: flex; gap: 14px; font-size: 11px; color: #8b8b96; }
.legend i { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 5px; vertical-align: 0; }
.feed { display: flex; flex-direction: column; gap: 0; }
.feed .row { display: flex; align-items: center; gap: 10px; padding: 9px 0; border-bottom: 1px solid #1a1a1f; font-size: 12.5px; }
.feed .row:last-child { border-bottom: none; }
.feed .t { margin-left: auto; font-size: 11px; color: #8b8b96; white-space: nowrap; }
.st { width: 6px; height: 6px; border-radius: 50%; flex: none; }
.st.ok { background: #34d399; } .st.wa { background: #fbbf24; } .st.er { background: #f87171; }
table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
th { text-align: left; font-size: 11px; color: #8b8b96; font-weight: 400; text-transform: uppercase; letter-spacing: .06em; padding: 6px 10px 10px; border-bottom: 1px solid #1f1f24; }
td { padding: 10px; border-bottom: 1px solid #17171b; font-variant-numeric: tabular-nums; }
tr:hover td { background: #141417; }
th:last-child, td:last-child { text-align: right; }
td .st { display: inline-block; margin-right: 7px; vertical-align: 0; }
.mono { font-variant-numeric: tabular-nums; }
@media (max-width: 900px) {
  body { grid-template-columns: 1fr; }
  aside { flex-direction: row; overflow-x: auto; border-right: none; border-bottom: 1px solid #1f1f24; padding: 10px; }
  .brand { padding: 4px 10px; }
  .kpis { grid-template-columns: repeat(2, 1fr); }
  .mid { grid-template-columns: 1fr; }
  .search { display: none; }
}
/* 矩阵已通过 grid-column 横跨全宽 */`,
      body: `
<aside>
  <div class="brand"><i></i>观测台</div>
  <div class="nav on"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="9" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="1.5" y="9" width="5.5" height="5.5" rx="1"/><rect x="9" y="9" width="5.5" height="5.5" rx="1"/></svg>总览</div>
  <div class="nav"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><path d="M2 13.5L6 8l3 2.5L14 4"/><path d="M2 2v12h12"/></svg>指标</div>
  <div class="nav"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><circle cx="8" cy="8" r="6"/><path d="M8 4.5V8l2.5 1.5"/></svg>告警</div>
  <div class="nav"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><path d="M1.5 6h13M5 6v7.5"/></svg>日志</div>
  <div class="nav"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><circle cx="8" cy="5.5" r="2.5"/><path d="M2.5 13.5c1-2.5 3-3.5 5.5-3.5s4.5 1 5.5 3.5"/></svg>用户</div>
</aside>
<main>
  <div class="top"><h1>服务总览</h1><div class="search">搜索服务 / 指标…</div><div class="avatar"></div></div>
  <section class="kpis">
    <div class="panel kpi">
      <div class="lab">今日请求</div>
      <div class="val">1,284,902</div>
      <div class="delta up">▲ 12.4% 较昨日</div>
      <svg class="spark" width="100%" height="26" viewBox="0 0 100 26" preserveAspectRatio="none"><polyline points="0,20 14,17 28,19 42,12 56,14 70,8 84,9 100,4" fill="none" stroke="#5eead4" stroke-width="1.5"/></svg>
    </div>
    <div class="panel kpi">
      <div class="lab">P95 延迟</div>
      <div class="val">142 ms</div>
      <div class="delta down">▼ 8.1% 较昨日</div>
      <svg class="spark" width="100%" height="26" viewBox="0 0 100 26" preserveAspectRatio="none"><polyline points="0,6 14,9 28,7 42,12 56,10 70,15 84,14 100,18" fill="none" stroke="#5eead4" stroke-width="1.5"/></svg>
    </div>
    <div class="panel kpi">
      <div class="lab">错误率</div>
      <div class="val">0.42%</div>
      <div class="delta up">▲ 0.07% 较昨日</div>
      <svg class="spark" width="100%" height="26" viewBox="0 0 100 26" preserveAspectRatio="none"><polyline points="0,22 14,22 28,20 42,21 56,18 70,19 84,12 100,10" fill="none" stroke="#f87171" stroke-width="1.5"/></svg>
    </div>
    <div class="panel kpi">
      <div class="lab">活跃实例</div>
      <div class="val">37</div>
      <div class="delta" style="color:#8b8b96">— 持平</div>
      <svg class="spark" width="100%" height="26" viewBox="0 0 100 26" preserveAspectRatio="none"><polyline points="0,13 14,13 28,13 42,13 56,13 70,13 84,13 100,13" fill="none" stroke="#5eead4" stroke-width="1.5"/></svg>
    </div>
  </section>
  <section class="mid">
    <div class="panel">
      <div class="p-head"><b>请求量 · 近 24 小时</b><span>单位：万次/时</span></div>
      <svg width="100%" height="150" viewBox="0 0 560 150" preserveAspectRatio="none">
        <path d="M0,120 C40,110 60,60 100,66 C140,72 160,40 200,46 C240,52 260,90 300,84 C340,78 360,30 400,36 C440,42 470,70 510,62 C540,56 550,40 560,34 L560,150 L0,150 Z" fill="rgba(94,234,212,0.08)"/>
        <path d="M0,120 C40,110 60,60 100,66 C140,72 160,40 200,46 C240,52 260,90 300,84 C340,78 360,30 400,36 C440,42 470,70 510,62 C540,56 550,40 560,34" fill="none" stroke="#5eead4" stroke-width="2"/>
      </svg>
      <div class="legend"><span><i style="background:#5eead4"></i>请求量</span><span><i style="background:#26262c"></i>基线</span><span style="margin-left:auto">更新于 1 分钟前</span></div>
    </div>
    <div class="panel">
      <div class="p-head"><b>最近事件</b><span>实时</span></div>
      <div class="feed">
        <div class="row"><span class="st ok"></span>api-gateway 扩容至 12 实例<span class="t">2 分钟前</span></div>
        <div class="row"><span class="st wa"></span>payment 队列积压 1.2k<span class="t">9 分钟前</span></div>
        <div class="row"><span class="st er"></span>auth-service 5xx 突增<span class="t">17 分钟前</span></div>
        <div class="row"><span class="st ok"></span>CDN 缓存预热完成<span class="t">34 分钟前</span></div>
        <div class="row"><span class="st ok"></span>数据库主从切换成功<span class="t">1 小时前</span></div>
      </div>
    </div>
  </section>
  <section class="panel">
    <div class="p-head"><b>最新订单</b><span>共 2,841 笔</span></div>
    <table>
      <tr><th>订单号</th><th>客户</th><th>金额</th><th>状态</th></tr>
      <tr><td class="mono">#ORD-9f2a81</td><td>陈默</td><td class="mono">￥1,280.00</td><td><span class="st ok"></span>已完成</td></tr>
      <tr><td class="mono">#ORD-9f2a77</td><td>林小满</td><td class="mono">￥329.00</td><td><span class="st wa"></span>处理中</td></tr>
      <tr><td class="mono">#ORD-9f2a70</td><td>周雨桐</td><td class="mono">￥4,999.00</td><td><span class="st ok"></span>已完成</td></tr>
      <tr><td class="mono">#ORD-9f2a66</td><td>阿禾</td><td class="mono">￥89.00</td><td><span class="st er"></span>已退款</td></tr>
    </table>
  </section>
</main>${scHtml()}`,
      js: scJs(),
    }),
  },
};
