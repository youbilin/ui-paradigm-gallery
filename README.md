<div align="center">

# 🏛 范式展览馆 · UI Paradigm Gallery

**Stop asking AI to "make it pretty". Give it a paradigm.**

*专治 AI 生成前端千篇一律 —— 28 件展品：27 种设计范式 × 结构化提示词 × 真实渲染效果*

[![License: MIT](https://img.shields.io/badge/License-MIT-16130e?style=flat-square)](./LICENSE)
[![React 19](https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react)](https://react.dev)
[![Vite 7](https://img.shields.io/badge/Vite-7-646cff?style=flat-square&logo=vite)](https://vite.dev)
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-5.9%20strict-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Zero Runtime Deps](https://img.shields.io/badge/runtime%20deps-0-success?style=flat-square)](./package.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ff48b0?style=flat-square)](#-contributing)

`28 exhibits` · `26 interactive components × 27 paradigms` · `machine-readable index for LLMs`

</div>

---

## 😶 The Problem

把「做一个落地页」丢给任何 AI，你都会得到同一张脸：

靛蓝渐变大标题 ✨ 玻璃卡片 🟣 三等分 feature 📦 `rounded-2xl` + `shadow-lg` 🪦

这不是模型的错——是**提示词里没有「范式」这个维度**。没有风格约束时，AI 只能从训练分布里取均值，而均值就是 Tailwind 默认味的中位数。

## 💡 The Idea

**范式展览馆**把三样东西钉在一起陈列：

```
一份可直接复制给 AI 的结构化范式提示词  ×  这份提示词渲染出的真实页面  ×  同一套 26 个可交互组件在该范式下的样子
```

- 📋 **复制提示词** → 整段贴给 AI，它拿到的不是「做个好看的页面」，而是一份可直接施工的布局 / 色彩 / 组件 / 交互工单
- 🔍 **预览 ↗** → 新窗口打开真实渲染（不是截图，是活的 DOM，每个控件都能点）
- 🧪 **组件矩阵** → 同一个下拉框，在 27 种范式里分别长什么样？组件是恒量，范式是变量
- 🙅 **反面标本** → 00 号展品是「AI 默认味」本体，附九条病状清单，帮你一眼识别并规避默认输出

## 🏛 28 件展品

| # | Paradigm | 一句话 |
| --- | --- | --- |
| 00 | AI 默认味（反面标本） | 渐变 hero + 玻璃卡片 + 三列 feature，所有「不需要思考」的选择 |
| 01 | 便当盒网格 Bento | 圆角卡片不等分跨格，信息密度与呼吸感兼得 |
| 02 | 瑞士国际主义 Swiss | 12 列网格、Helvetica、左对齐、无装饰 |
| 03 | 新粗野主义 Neo-Brutalism | 粗黑边、硬阴影、糖果色，故意「没做完」的张扬 |
| 04 | 玻璃拟态 Glassmorphism | 模糊背景层 + 细描边 + 彩色光斑 |
| 05 | 杂志编辑风 Editorial | 衬线大标题、分栏、首字下沉、衬线/无衬线对撞 |
| 06 | 终端命令行 Terminal | 等宽字体、CRT 扫描线、ASCII 表格，geek 彩蛋 |
| 07 | 暗色仪表盘 Dashboard | 侧边栏 + KPI + SVG 面积图，数据密集型后台 |
| 08 | 日式极简 Wa | 大量留白、竖排俳句、朱印，静与间 |
| 09 | 千禧复古 Y2K | 跑马灯、亮面按钮、访客计数器，2003 年的互联网 |
| 10 | 装饰艺术 Art Deco | 扇形放射纹、双线金框、对称与奢华 |
| 11 | 新拟物 Skeuomorphic | 统一左上光源的浮雕，能「摸」的界面 |
| 12 | 手工纸艺 Paper Zine | 噪点牛皮纸、剪贴字标题、胶带与图钉 |
| 13 | 包豪斯 Bauhaus | 三原色、圆三角方，形式追随功能 |
| 14 | 孟菲斯 Memphis | 波浪、斑点、撞色贴纸，后现代设计派对 |
| 15 | 赛博朋克 Cyberpunk | 霓虹青与品红、切角 HUD、故障美学 |
| 16 | 黏土拟态 Claymorphism | 大圆角、马卡龙色、柔软 3D，能捏的橡皮泥 |
| 17 | 手绘涂鸦 Hand-drawn | 歪边框、马克笔高亮、手写便签 |
| 18 | 像素艺术 Pixel Art | 8-bit 游戏 HUD、像素边框、血条与金币 |
| 19 | 蒸汽波 Vaporwave | 粉紫渐变、透视网格、希腊柱与片假名 |
| 20 | 新中式 Oriental Ink | 宣纸、竖排、朱砂印，留白处的东方秩序 |
| 21 | 构成主义 Constructivism | 斜切楔形、巨号数字、红与黑的动员海报 |
| 22 | 新艺术运动 Art Nouveau | 藤蔓曲线、金线描边、彩窗拱门，界面从花园里长出来 |
| 23 | 水族馆拟真 Frutiger Aero | 天空草地、水光气泡、glossy 球体，2008 年的乐观科技 |
| 24 | 新拟态 Neumorphism | 同色双向柔影，控件从软塑料面板里挤出与按进 |
| 25 | 孔版印刷 Risograph | 荧光粉×打印蓝双色套印，错版 3px 是签名 |
| 26 | 哥特手抄本 Gothic Manuscript | 泥金首字、朱砂批注、金线双框，界面是一页羊皮纸 |
| 27 | 软萌糖果 Kawaii Pastel | 腮红按钮、气泡下拉、会眨眼的吉祥物，一切都能捏 |

## 🚀 Quick Start

```bash
git clone https://github.com/youbilin/ui-paradigm-gallery.git
cd ui-paradigm-gallery
npm install --ignore-scripts   # 见下方「环境说明」
npm run dev                    # 开发服务器
npm run build                  # 类型检查 + 生产构建 → dist/
```

> **环境说明**：部分沙箱/企业环境会拦截 esbuild 的 postinstall（wmic.exe 被安全策略拦截）。npm 平坦布局下 esbuild 通过 optionalDependencies 自带平台二进制，跳过 postinstall 也能正常工作；本机正常开发直接 `npm install` 亦可。

## 🧬 提示词解剖：七段式工单

每份提示词都是可直接施工的工单，第 5 段是全馆的灵魂：

| 段 | 内容 |
| --- | --- |
| 1. 设计基调 | 气质、情绪关键词 |
| 2. 布局 | 网格、栏宽、间距、出血 |
| 3. 字体排印 | 字体栈、字号层级、字距行高 |
| 4. 色彩 | 底色 / 前景 / 强调色的取值与纪律 |
| **5. 组件与交互规范** | **5.1 必备组件清单 → 5.2 本范式化外观（签名组件 + 逐控件形制）→ 5.3 六态与动效规格** |
| 6. 质感细节 | 纹理、光影、材质纪律 |
| 7. 禁忌 | 负面约束，包括红线「严禁只换色不改形」 |

举例——同一句话，在 27 种范式里有 27 种写法：

| | 下拉浮层 | 开关 | hover 手感 |
| --- | --- | --- | --- |
| 🇨🇭 瑞士 | 1.5px 黑边直角，零阴影 | `[ 开 ][ 关 ]` 文字 + 红方块 | 换色，零位移 |
| 📟 终端 | ASCII 字符列表 | `[ ON ]⇄[ OFF ]` | 整行反白 |
| 🏛 装饰艺术 | 金框 + 四角菱形 | 细金轨 + 菱形钮 | 0.24s 填金 |
| 🍬 软萌糖果 | 气泡 + 小尾巴 | 胶囊 + 弹性回弹 | 歪头 -1° |
| 📟 粗野主义 | 黑边 + 硬阴影偏移 6px | 方块钮，无弹性 | 位移 -2px，阴影加深 |

## 🧩 组件矩阵

每份演示 = **范式签名式 hero**（上半） + **同一套 26 个可交互组件**（下半）：

> 按钮（6 态）、输入框（错误态）、文本域（计数）、下拉框、搜索建议、复选框、单选组、开关、滑块、分段控制（滑动指示块）、标签页（滑动下划线）、手风琴、下拉菜单、模态框、吐司、警告提示（4 型）、徽章/可删标签、头像组、进度（线性+环形+动画）、步骤条、分页、面包屑、Tooltip、数据表格、文件上传、骨架屏

- 组件由 `src/data/paradigms/demo-components.ts` 统一提供，外观经 CSS 变量（`--sc-*`）按范式适配
- 演示通过 `postMessage` 上报真实 `scrollHeight`，外层 iframe 自适应高度，矩阵永远完整可见
- 全部动效尊重 `prefers-reduced-motion`

## 🤖 Machine-Readable Index

仓库直接为 AI 准备了两份索引：

- **[`public/index.json`](./public/index.json)** — 每件展品的 `kind / prompt / colors / fonts` 结构化数据
- **[`public/llms.txt`](./public/llms.txt)** — 面向 LLM 的纯文本入口

用法：把范式提示词整段贴给 AI，补上你的需求：

> 「按『日式极简 Wa』范式实现 UI，不得混用其他风格。做一个茶室预订页：主理人介绍、三种茶席、时段预约。」

## ➕ 新增一个范式（欢迎 PR）

```ts
// src/data/paradigms/28-your-paradigm.ts
import { page } from './demo-utils';
import { scCss, scHtml, scJs } from './demo-components';
import { specSection } from './prompt-spec';

const scTheme = { bg: '#fff', primary: '#111', /* 按需覆盖 */ };

export const yourParadigm: Paradigm = {
  id: 'your-paradigm', no: '28', name: '你的范式', nameEn: 'Your Paradigm',
  /* … 元信息 … */
  prompt: `# 设计范式：…` + specSection(组件规格, 交互四元组),
  demo: {
    height: 2450, heightMobile: 4200,
    html: page({
      title: '…', fonts: ['Baloo+2'],
      css: scCss(scTheme) + `/* hero 样式 */`,
      body: `/* hero 结构 */` + scHtml(),   // 组件矩阵自动注入
      js: scJs(),
    }),
  },
};
```

1. 在 `src/data/paradigms/index.ts` 注册
2. `npm run index && npm run build` —— 索引自动收录

## 🛠 Tech

Vite 7 · React 19 · TypeScript 5.9（strict）· **零运行时依赖**（无路由库 / UI 库 / 状态管理）。演示 HTML 为纯手写 CSS + 原生 JS；字体走 Google Fonts，离线回退系统字体栈。

## 🤝 Contributing

发现一个值得收录的设计范式？见上节「新增一个范式」。Issue 讲清楚范式的来源、黄金时代与签名组件即可。

## 📄 License

[MIT](./LICENSE) © 2026

<div align="center">
<sub>如果这个仓库帮你从 AI 手里救回了一次设计品味，欢迎点个 ⭐</sub>
</div>
