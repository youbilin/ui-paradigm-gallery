import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import type { Paradigm } from './types';

const scTheme = {
  "bg": "#e8e6e1",
  "surface": "#f2f0ec",
  "alt": "rgba(0,0,0,0.05)",
  "text": "#3a3a3a",
  "muted": "#8a877f",
  "primary": "#4a90d9",
  "onPrimary": "#ffffff",
  "border": "rgba(0,0,0,0.18)",
  "radius": "10px",
  "radiusLg": "14px",
  "shadow": "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 #ffffff",
  "font": "\"Lucida Grande\", \"Segoe UI\", \"PingFang SC\", sans-serif",
  "mono": "ui-monospace, \"SF Mono\", Consolas, monospace",
  "ok": "#4caf50",
  "warn": "#ff9800",
  "err": "#e53935",
  "info": "#1e88e5",
  "focus": "#4a90d9",
  "extraCss": ".sc-cell{background:linear-gradient(180deg,#f7f6f3,#e9e7e2);box-shadow:0 2px 4px rgba(0,0,0,0.18),inset 0 1px 0 #fff,inset 0 -1px 0 rgba(0,0,0,0.06);}.sc-btn{background:linear-gradient(180deg,#ffffff,#dfddd8);box-shadow:0 2px 3px rgba(0,0,0,0.2),inset 0 1px 0 #fff;}.sc-btn.pri{background:linear-gradient(180deg,#6db3f2,#3a7bc8);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);}.sc-inp,.sc-ta,.sc-sel-btn{background:linear-gradient(180deg,#e6e4df,#f4f3f0);box-shadow:inset 0 2px 3px rgba(0,0,0,0.12);}.sc-prog{box-shadow:inset 0 1px 3px rgba(0,0,0,0.25);}"
};

export const skeuo: Paradigm = {
  id: 'skeuo',
  no: '11',
  name: '新拟物 · 触感',
  nameEn: 'Skeuomorphic / Soft UI',
  tagline: '凸起的按钮、凹陷的凹槽、会亮的 LED——屏幕里的实体。',
  origin: 'iOS 6 / 早期 Apple HIG / 硬件面板',
  year: '2007 — 2013',
  tags: ['拟物', '浮雕', '光源', '触感'],
  bestFor: ['音频/硬件控制台', '工具面板', '复古科技产品页'],
  avoid: ['内容型网站', '极简品牌站'],
  prompt: `# 设计范式：新拟物 · 触感（Skeuomorphic / Soft UI）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：屏幕里的硬件面板；每个控件都该让人想「按下去」
- 情绪关键词：踏实、精密、触感、机械美

## 2. 布局
- 一台「设备」即一个面板：拉丝金属或哑光塑料底，圆角 12-16px
- 控件分组嵌入面板，组与组之间用凹陷的凹槽（groove）分隔
- 信息显示区（LCD/LED 屏）是凹陷的深色玻璃；操作区是凸起的实体

## 3. 字体排印
- Lucida Grande / Helvetica / 系统无衬线；标签 11-12px
- 屏幕文字用等宽或 LED 感字体，字距略宽
- 刻度与单位小号灰色，数值大号深灰

## 4. 色彩
- 面板 #e9ecf1 / 凸起高光 #ffffff / 凸起暗部 #c3c9d2
- 凹陷 #dfe3e9；屏幕底 #1e2b22；LED 绿 #7ee787、琥珀 #ffb454
- 全场一档中性灰体系 + 单一功能色（LED 色）

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
- 签名组件：旋钮（径向渐变球体 + 顶部高光 + 刻线）与 LED 指示灯（亮点 + 辉光）
- 按钮：凸起三件套——垂直渐变 + inset 0 1px 0 白 + 外投影；active 全部反转为 inset（真实按压）
- 输入框：凹陷井 inset 2px 2px 4px + 底色比面板暗 5%
- 下拉框浮层：有厚度的实体板 + 顶部高光；选项 hover 蓝渐变（系统菜单手感）
- 开关：金属拉丝轨道 + ON 青色亮底
- 表格：凸起表头渐变 + 淡斑马纹 + hover 蓝渐变行（Finder 手感）
- 材质纪律：每个控件必须同时有高光与阴影两种光才算成立
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：整体提亮 4%，光泽位置随之移动
- active：阴影由外凸切换为 inset（视觉上真实被按下）
- focus-visible：蓝色光环 0 0 0 3px rgba(0,122,255,.35)；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，180ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（180ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：顶部居中的实体白卡（系统通知手感），从上方滑入 0.24s，3s 后收回，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 180ms（旋钮拖动不出 transition，跟手即可），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全场景统一光源：左上 45°，所有高光/阴影方向一致
- 拉丝金属：1px repeating-linear-gradient 细纹叠加
- LED 屏：深绿底 + 绿字 + 微弱辉光；可加扫描线
- 文字可「雕刻」：color #8a93a0 + text-shadow 0 1px 0 rgba(255,255,255,.9)

## 7. 禁忌
- 禁止扁平无边框控件、玻璃拟态、暗色模式混淆光影
- 禁止渐变按钮（Web 2.0 那种亮蓝渐变胶囊——那是另一种风格）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,
  spec: [
    '统一左上 45° 光源：凸起/凹陷/刻字三套阴影公式',
    '凹陷凹槽分隔分组；LCD 屏深绿凹陷 + 微辉光',
    'LED 状态灯：radial 亮点 + 辉光',
    '拉丝金属 1px 纹；雕刻文字双色阴影',
  ],
  tokens: {
    colors: [
      { name: '面板', value: '#e9ecf1' },
      { name: '凸起亮', value: '#ffffff' },
      { name: '凸起暗', value: '#c3c9d2' },
      { name: '凹陷', value: '#dfe3e9' },
      { name: 'LED 绿', value: '#7ee787' },
    ],
    fonts: [{ role: '全场', stack: '"Lucida Grande", "Helvetica Neue", "PingFang SC", sans-serif' }],
    radius: '8-16px',
    shadow: '凸起 inset 0 1px 0 #fff + 0 2px 4px rgba(0,0,0,.15)',
    extras: [{ label: '光源', value: '左上 45° 全场统一' }],
  },
  demo: {
    height: 1550,
    heightMobile: 2320,
    html: page({
      title: '新拟物 · 触感',
      css: scCss(scTheme) + `
body {
  font-family: "Lucida Grande", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
  min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 28px;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px),
    linear-gradient(180deg, #cfd5dd, #b9c0ca);
}
.device {
  width: min(680px, 94vw); border-radius: 18px; padding: 22px 26px 26px;
  background: linear-gradient(180deg, #f2f4f8, #dde2e9);
  border: 1px solid #aab1bb;
  box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 rgba(0,0,0,0.06), 0 14px 34px rgba(20, 30, 45, 0.28);
}
.d-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.engraved {
  font-size: 12px; font-weight: 700; letter-spacing: 0.24em; color: #8a93a0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.95);
}
.brand-led { display: flex; align-items: center; gap: 8px; font-size: 11px; color: #8a93a0; letter-spacing: 0.18em; text-shadow: 0 1px 0 rgba(255,255,255,.9); }
.led { width: 8px; height: 8px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #d6ffd9, #7ee787 55%, #3f9e4d); box-shadow: 0 0 8px rgba(126, 231, 135, 0.9), inset 0 -1px 1px rgba(0,0,0,0.25); }
.groove { border-top: 1px solid rgba(0,0,0,0.14); border-bottom: 1px solid #fff; margin: 16px 0; }
.lcd {
  background: linear-gradient(180deg, #1b2a21, #16211b); border-radius: 10px; padding: 14px 18px;
  box-shadow: inset 2px 2px 5px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(0,0,0,0.3), 0 1px 0 #fff;
  color: #8ff0a4; font-family: "JetBrains Mono", "Courier New", monospace; font-size: 15px; letter-spacing: 0.12em;
  text-shadow: 0 0 8px rgba(143, 240, 164, 0.45);
  display: flex; align-items: center; justify-content: space-between;
}
.vu { display: flex; gap: 3px; align-items: flex-end; height: 18px; }
.vu i { width: 5px; background: linear-gradient(180deg, #8ff0a4, #4fae63); border-radius: 1px; box-shadow: 0 0 4px rgba(143,240,164,.6); }
.mixer { display: flex; justify-content: space-between; gap: 18px; padding: 6px 4px 0; }
.fader { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.fader .slot {
  width: 14px; height: 130px; border-radius: 7px; position: relative;
  background: #d3d8e0; box-shadow: inset 2px 2px 4px rgba(0,0,0,0.22), inset -1px -1px 0 rgba(255,255,255,0.8);
}
.fader .cap {
  position: absolute; left: 50%; transform: translate(-50%, -50%); width: 26px; height: 18px; border-radius: 5px;
  background: linear-gradient(180deg, #ffffff, #c3c9d2); border: 1px solid #a9b0ba;
  box-shadow: inset 0 1px 0 #fff, 0 2px 4px rgba(0,0,0,0.22);
}
.fader .cap::after { content: ""; position: absolute; left: 3px; right: 3px; top: 50%; height: 1px; background: #8a93a0; }
.fader .lab { font-size: 10px; color: #8a93a0; letter-spacing: 0.08em; text-shadow: 0 1px 0 rgba(255,255,255,.9); }
.switches { display: flex; gap: 22px; align-items: center; }
.sw { display: flex; align-items: center; gap: 8px; }
.sw .base {
  width: 44px; height: 22px; border-radius: 11px; position: relative;
  background: #d3d8e0; box-shadow: inset 2px 2px 4px rgba(0,0,0,0.2), 0 1px 0 #fff;
}
.sw .knob {
  position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #ffffff, #c3c9d2 70%);
  border: 1px solid #a9b0ba; box-shadow: inset 0 1px 0 #fff, 0 2px 3px rgba(0,0,0,0.25);
}
.sw.on .knob { left: 24px; }
.sw .lab { font-size: 11px; color: #7d8692; letter-spacing: 0.1em; text-shadow: 0 1px 0 rgba(255,255,255,.9); }
.play {
  width: 62px; height: 62px; border-radius: 50%; flex: none; margin-left: auto;
  background: radial-gradient(circle at 34% 26%, #9db9f5, #5b8def 45%, #2b5fd9);
  border: 1px solid #24509f; box-shadow: inset 0 2px 0 rgba(255,255,255,0.55), 0 4px 8px rgba(20, 40, 90, 0.35);
  display: flex; align-items: center; justify-content: center;
}
@media (max-width: 720px) {
  .fader .slot { height: 96px; }
  .switches { flex-wrap: wrap; gap: 14px; }
  .mixer { gap: 8px; }
}
.device { margin: auto 0; }
.sc-root { width: 100%; }`,
      body: `
<div class="device">
  <div class="d-head">
    <div class="engraved">MIXER · 01</div>
    <div class="brand-led"><span class="led"></span>POWER · ON</div>
  </div>
  <div class="lcd">
    <span>TRACK 01 · 03:24</span>
    <div class="vu"><i style="height:40%"></i><i style="height:70%"></i><i style="height:100%"></i><i style="height:55%"></i><i style="height:85%"></i><i style="height:30%"></i><i style="height:60%"></i></div>
  </div>
  <div class="groove"></div>
  <div class="mixer">
    <div class="fader"><div class="slot"><div class="cap" style="top: 22%"></div></div><div class="lab">LOW</div></div>
    <div class="fader"><div class="slot"><div class="cap" style="top: 38%"></div></div><div class="lab">MID</div></div>
    <div class="fader"><div class="slot"><div class="cap" style="top: 30%"></div></div><div class="lab">HIGH</div></div>
    <div class="fader"><div class="slot"><div class="cap" style="top: 55%"></div></div><div class="lab">FX</div></div>
    <div class="fader"><div class="slot"><div class="cap" style="top: 18%"></div></div><div class="lab">OUT</div></div>
  </div>
  <div class="groove"></div>
  <div style="display:flex; align-items:center; gap:26px; flex-wrap:wrap">
    <div class="switches">
      <div class="sw on"><span class="lab">MUTE</span><div class="base"><div class="knob"></div></div><span class="led"></span></div>
      <div class="sw"><span class="lab">SOLO</span><div class="base"><div class="knob"></div></div><span class="led" style="background:radial-gradient(circle at 35% 30%, #6b7280, #4b5563 60%); box-shadow:none"></span></div>
      <div class="sw on"><span class="lab">LOOP</span><div class="base"><div class="knob"></div></div><span class="led"></span></div>
    </div>
    <div class="play">
      <svg width="18" height="18" viewBox="0 0 16 16" fill="#fff"><path d="M3 1.5v13l11-6.5z"/></svg>
    </div>
  </div>
</div>${scHtml()}`,
      js: scJs(),
    }),
  },
};
