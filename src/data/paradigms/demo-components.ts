/**
 * 共享「组件矩阵」模块：注入到每个范式演示底部的可交互组件展示区。
 * 同一套组件 markup + JS，经 CSS 变量（--sc-*）适配各范式的主题，
 * 让观众能横向对比：「同样一个下拉框，在 21 种范式里分别长什么样」。
 */

export interface ScTheme {
  bg?: string;        // 矩阵面板底色
  surface?: string;   // 卡片/控件底色
  alt?: string;       // 悬停浅色
  text?: string;      // 主文字
  muted?: string;     // 次级文字
  primary?: string;   // 主色
  onPrimary?: string; // 主色上的文字
  border?: string;    // 边框
  radius?: string;    // 圆角
  radiusLg?: string;  // 大圆角
  shadow?: string;    // 投影
  font?: string;      // 字体栈
  mono?: string;      // 等宽字体栈
  ok?: string;        // 成功色
  warn?: string;      // 警告色
  err?: string;       // 错误色
  info?: string;      // 信息色
  focus?: string;     // 聚焦色
  extraCss?: string;  // 范式定制补充样式
}

const DEF = {
  bg: '#ffffff',
  surface: '#ffffff',
  alt: 'rgba(22,19,14,0.06)',
  text: '#16130e',
  muted: '#78716a',
  primary: '#16130e',
  onPrimary: '#ffffff',
  border: 'rgba(22,19,14,0.16)',
  radius: '10px',
  radiusLg: '16px',
  shadow: '0 1px 3px rgba(22,19,14,0.08)',
  font: '"Space Grotesk","PingFang SC","Hiragino Sans GB",system-ui,sans-serif',
  mono: 'ui-monospace,"SF Mono",Consolas,monospace',
  ok: '#1a7f37',
  warn: '#b45309',
  err: '#c22e2e',
  info: '#1d4ed8',
  focus: '#2563eb',
};

export function scCss(t: ScTheme = {}): string {
  const v = { ...DEF, ...t };
  const vars = `.sc-root{
  --sc-bg:${v.bg};--sc-surface:${v.surface};--sc-alt:${v.alt};--sc-text:${v.text};
  --sc-muted:${v.muted};--sc-primary:${v.primary};--sc-onprimary:${v.onPrimary};
  --sc-border:${v.border};--sc-radius:${v.radius};--sc-radius-lg:${v.radiusLg};
  --sc-shadow:${v.shadow};--sc-font:${v.font};--sc-mono:${v.mono};
  --sc-ok:${v.ok};--sc-warn:${v.warn};--sc-err:${v.err};--sc-info:${v.info};--sc-focus:${v.focus};
}`;
  return `${vars}
${STATIC_CSS}
${t.extraCss ?? ''}`;
}

const STATIC_CSS = `
/* ---------- 组件矩阵 · 骨架 ---------- */
.sc-root{background:var(--sc-bg);color:var(--sc-text);font-family:var(--sc-font);
  padding:36px 28px 42px;border-radius:var(--sc-radius-lg);margin-top:44px;}
.sc-head{display:flex;justify-content:space-between;align-items:flex-end;gap:18px;flex-wrap:wrap;margin-bottom:22px;}
.sc-kicker{font-family:var(--sc-mono);font-size:10.5px;letter-spacing:.26em;color:var(--sc-primary);display:block;margin-bottom:7px;}
.sc-head h2{font-size:clamp(21px,3vw,29px);font-weight:700;letter-spacing:-.01em;margin:0;}
.sc-head p{margin:0;font-size:12.5px;color:var(--sc-muted);max-width:380px;line-height:1.7;}
.sc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(238px,1fr));gap:14px;}
.sc-cell{background:var(--sc-surface);border:1px solid var(--sc-border);border-radius:var(--sc-radius);
  padding:15px 16px 16px;box-shadow:var(--sc-shadow);display:flex;flex-direction:column;gap:11px;min-width:0;}
.sc-cell.w2{grid-column:span 2;}
.sc-cell h5{margin:0;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--sc-muted);font-weight:600;font-family:var(--sc-mono);}
.sc-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
.sc-col{display:flex;flex-direction:column;gap:9px;}
.sc-note{font-size:11.5px;color:var(--sc-muted);line-height:1.65;margin:0;}
.sc-mono{font-family:var(--sc-mono);}
@media (max-width:640px){.sc-cell.w2{grid-column:span 1;}.sc-root{padding:26px 18px 32px;}}

/* ---------- 入场动效（丝滑 + 延迟节奏） ---------- */
@media (prefers-reduced-motion:no-preference){
.sc-head{animation:sc-rise .55s cubic-bezier(.22,1,.36,1) both;}
.sc-cell{animation:sc-rise .6s cubic-bezier(.22,1,.36,1) both;}
.sc-grid>.sc-cell:nth-child(1){animation-delay:.06s}
.sc-grid>.sc-cell:nth-child(2){animation-delay:.11s}
.sc-grid>.sc-cell:nth-child(3){animation-delay:.16s}
.sc-grid>.sc-cell:nth-child(4){animation-delay:.21s}
.sc-grid>.sc-cell:nth-child(5){animation-delay:.26s}
.sc-grid>.sc-cell:nth-child(6){animation-delay:.31s}
.sc-grid>.sc-cell:nth-child(7){animation-delay:.36s}
.sc-grid>.sc-cell:nth-child(8){animation-delay:.41s}
.sc-grid>.sc-cell:nth-child(9){animation-delay:.46s}
.sc-grid>.sc-cell:nth-child(10){animation-delay:.51s}
.sc-grid>.sc-cell:nth-child(11){animation-delay:.56s}
.sc-grid>.sc-cell:nth-child(12){animation-delay:.61s}
.sc-grid>.sc-cell:nth-child(n+13){animation-delay:.68s}
}
@keyframes sc-rise{from{opacity:0;transform:translateY(14px)}}

/* ---------- 按钮 ---------- */
.sc-btn{appearance:none;font:inherit;font-size:13px;line-height:1;padding:9px 15px;border-radius:var(--sc-radius);
  border:1px solid var(--sc-border);background:var(--sc-surface);color:var(--sc-text);cursor:pointer;
  display:inline-flex;align-items:center;gap:7px;white-space:nowrap;
  transition:transform .2s cubic-bezier(.22,1,.36,1),box-shadow .2s,background .2s,color .2s,border-color .2s;}
.sc-btn:hover{border-color:var(--sc-primary);box-shadow:0 3px 10px rgba(0,0,0,.1);}
.sc-btn:active{transform:translateY(1px) scale(.98);transition-duration:.08s;}
.sc-btn.pri{background:var(--sc-primary);border-color:var(--sc-primary);color:var(--sc-onprimary);}
.sc-btn.gho{background:transparent;border-color:transparent;color:var(--sc-primary);padding-left:9px;padding-right:9px;}
.sc-btn.dan{background:var(--sc-err);border-color:var(--sc-err);color:#fff;}
.sc-btn[disabled]{opacity:.42;cursor:not-allowed;}
.sc-btn[disabled]:active{transform:none;}
.sc-btn.ico{padding:0;width:34px;height:34px;justify-content:center;font-size:15px;}
.sc-btn.sm{font-size:12px;padding:6px 11px;}
.sc-btn:focus-visible{outline:2px solid var(--sc-focus);outline-offset:1px;}
.sc-spin{width:13px;height:13px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:sc-rot .7s linear infinite;flex:none;}
@keyframes sc-rot{to{transform:rotate(360deg);}}

/* ---------- 输入 ---------- */
.sc-lbl{font-size:12px;color:var(--sc-muted);display:block;margin-bottom:5px;}
.sc-inp,.sc-ta,.sc-sel-btn{width:100%;font:inherit;font-size:13px;color:var(--sc-text);background:var(--sc-surface);
  border:1px solid var(--sc-border);border-radius:var(--sc-radius);padding:8px 11px;outline:none;
  transition:border-color .2s,box-shadow .25s,background .2s;}
.sc-inp::placeholder,.sc-ta::placeholder{color:var(--sc-muted);opacity:.75;}
.sc-inp:focus,.sc-ta:focus,.sc-sel-btn:focus-visible{border-color:var(--sc-focus);box-shadow:0 0 0 3px color-mix(in srgb,var(--sc-focus) 18%,transparent);}
.sc-inp.err{border-color:var(--sc-err);}
.sc-help{font-size:11px;color:var(--sc-muted);margin-top:5px;}
.sc-help.err{color:var(--sc-err);}
.sc-ta{resize:vertical;min-height:62px;line-height:1.6;}
.sc-count{font-size:10.5px;color:var(--sc-muted);text-align:right;font-family:var(--sc-mono);margin-top:4px;}

/* ---------- 搜索 + 建议 ---------- */
.sc-search{position:relative;}
.sc-search .sc-ic{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--sc-muted);font-size:12px;pointer-events:none;}
.sc-search input{padding-left:30px;}
.sc-sug{position:absolute;top:calc(100% + 5px);left:0;right:0;background:var(--sc-surface);border:1px solid var(--sc-border);
  border-radius:var(--sc-radius);box-shadow:var(--sc-shadow);overflow:hidden;display:none;z-index:5;}
.sc-sug.show{display:block;animation:sc-drop .24s cubic-bezier(.22,1,.36,1);}
.sc-sug-item{padding:7px 11px;font-size:12.5px;cursor:default;transition:background .18s;}
.sc-sug-item:hover{background:var(--sc-alt);}
@keyframes sc-drop{from{opacity:0;transform:translateY(-6px);}}

/* ---------- 下拉框 ---------- */
.sc-sel{position:relative;}
.sc-sel-btn{display:flex;justify-content:space-between;align-items:center;gap:8px;cursor:pointer;text-align:left;}
.sc-sel-btn .car{font-size:9px;color:var(--sc-muted);transition:transform .28s cubic-bezier(.22,1,.36,1);}
.sc-sel.sc-open .car{transform:rotate(180deg);}
.sc-sel-list{position:absolute;top:calc(100% + 5px);left:0;right:0;background:var(--sc-surface);border:1px solid var(--sc-border);
  border-radius:var(--sc-radius);box-shadow:var(--sc-shadow);display:none;z-index:6;overflow:hidden;padding:4px;}
.sc-sel.sc-open .sc-sel-list{display:block;animation:sc-drop .24s cubic-bezier(.22,1,.36,1);}
.sc-sel-opt{padding:7px 9px;font-size:12.5px;cursor:pointer;border-radius:calc(var(--sc-radius) - 4px);transition:background .18s,color .18s;}
.sc-sel-opt:hover{background:var(--sc-alt);}
.sc-sel-opt.sel{color:var(--sc-primary);font-weight:600;background:var(--sc-alt);}

/* ---------- 复选 / 单选 ---------- */
.sc-chk,.sc-rad{display:flex;align-items:center;gap:9px;font-size:13px;cursor:pointer;user-select:none;}
.sc-chk input,.sc-rad input{position:absolute;opacity:0;width:0;height:0;}
.sc-box{width:16px;height:16px;border:1.5px solid var(--sc-border);border-radius:4px;flex:none;
  display:inline-flex;align-items:center;justify-content:center;transition:all .22s cubic-bezier(.22,1,.36,1);background:var(--sc-surface);}
.sc-chk input:checked + .sc-box{background:var(--sc-primary);border-color:var(--sc-primary);}
.sc-chk input:checked + .sc-box::after{content:"";width:8px;height:4px;border-left:2px solid var(--sc-onprimary);
  border-bottom:2px solid var(--sc-onprimary);transform:rotate(-45deg) translate(1px,-1px);}
.sc-rad .sc-box{border-radius:50%;}
.sc-rad input:checked + .sc-box{border-color:var(--sc-primary);border-width:5px;}
.sc-chk input:disabled + .sc-box,.sc-chk input:disabled ~ *{opacity:.4;}
.sc-chk input:disabled ~ *{opacity:.4;}

/* ---------- 开关 ---------- */
.sc-sw{display:flex;align-items:center;gap:10px;font-size:13px;cursor:pointer;user-select:none;}
.sc-sw input{position:absolute;opacity:0;width:0;height:0;}
.sc-sw .tr{width:38px;height:22px;border-radius:999px;background:var(--sc-border);position:relative;transition:background .28s;flex:none;}
.sc-sw .tr::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;
  background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.28);transition:transform .3s cubic-bezier(.34,1.4,.44,1);}
.sc-sw input:checked + .tr{background:var(--sc-primary);}
.sc-sw input:checked + .tr::after{transform:translateX(16px);}
.sc-sw-txt{font-size:12px;color:var(--sc-muted);font-family:var(--sc-mono);}

/* ---------- 滑块 ---------- */
.sc-rng{width:100%;accent-color:var(--sc-primary);cursor:pointer;}
.sc-rng-out{font-family:var(--sc-mono);font-size:11.5px;color:var(--sc-muted);}

/* ---------- 分段控制（滑动指示块） ---------- */
.sc-seg{display:inline-flex;border:1px solid var(--sc-border);border-radius:var(--sc-radius);position:relative;isolation:isolate;}
.sc-seg-ind{position:absolute;top:0;bottom:0;left:0;width:0;background:var(--sc-primary);z-index:0;
  border-radius:calc(var(--sc-radius) - 2px);
  transition:transform .32s cubic-bezier(.22,1,.36,1),width .32s cubic-bezier(.22,1,.36,1);}
.sc-seg-b{position:relative;z-index:1;border:0;background:transparent;font:inherit;font-size:12px;padding:7px 14px;
  cursor:pointer;color:var(--sc-muted);transition:color .28s;}
.sc-seg-b + .sc-seg-b{border-left:1px solid var(--sc-border);}
.sc-seg-b.on{color:var(--sc-onprimary);}

/* ---------- 标签页（滑动下划线） ---------- */
.sc-tabs{display:flex;gap:2px;border-bottom:1px solid var(--sc-border);position:relative;}
.sc-tab-ind{position:absolute;bottom:-1px;left:0;height:2px;width:0;background:var(--sc-primary);
  transition:transform .32s cubic-bezier(.22,1,.36,1),width .32s cubic-bezier(.22,1,.36,1);}
.sc-tab{border:0;background:transparent;font:inherit;font-size:12.5px;padding:7px 13px;cursor:pointer;color:var(--sc-muted);
  border-bottom:2px solid transparent;margin-bottom:-1px;transition:color .25s;}
.sc-tab:hover{color:var(--sc-text);}
.sc-tab.on{color:var(--sc-primary);border-bottom-color:transparent;font-weight:600;}
.sc-pane{display:none;font-size:12.5px;line-height:1.75;color:var(--sc-text);padding-top:11px;}
.sc-pane.on{display:block;animation:sc-fade .35s ease;}
@keyframes sc-fade{from{opacity:0;transform:translateY(5px);}}

/* ---------- 手风琴（高度缓动） ---------- */
.sc-acc-item{border-bottom:1px solid var(--sc-border);}
.sc-acc-item:last-child{border-bottom:0;}
.sc-acc-h{display:flex;justify-content:space-between;align-items:center;padding:9px 2px;font-size:13px;cursor:pointer;font-weight:500;gap:10px;}
.sc-acc-h .chev{transition:transform .3s cubic-bezier(.22,1,.36,1);font-size:9px;color:var(--sc-muted);flex:none;}
.sc-acc-item.open .chev{transform:rotate(180deg);}
.sc-acc-b{overflow:hidden;max-height:0;opacity:0;padding:0 2px;font-size:12.5px;line-height:1.7;color:var(--sc-muted);
  transition:max-height .4s cubic-bezier(.2,.7,.3,1),opacity .32s ease,padding-bottom .4s cubic-bezier(.2,.7,.3,1);}
.sc-acc-item.open .sc-acc-b{max-height:230px;opacity:1;padding-bottom:11px;}

/* ---------- 下拉菜单 ---------- */
.sc-menu{position:relative;display:inline-block;}
.sc-menu-list{position:absolute;top:calc(100% + 5px);left:0;min-width:148px;background:var(--sc-surface);
  border:1px solid var(--sc-border);border-radius:var(--sc-radius);box-shadow:var(--sc-shadow);display:none;z-index:6;overflow:hidden;padding:4px;}
.sc-menu.sc-open .sc-menu-list{display:block;animation:sc-drop .24s cubic-bezier(.22,1,.36,1);}
.sc-menu-item{padding:7px 10px;font-size:12.5px;cursor:pointer;display:flex;gap:9px;align-items:center;border-radius:calc(var(--sc-radius) - 4px);transition:background .18s;}
.sc-menu-item:hover{background:var(--sc-alt);}
.sc-menu-item.sep{border-top:1px solid var(--sc-border);border-radius:0;margin-top:4px;padding-top:10px;}
.sc-menu-item.dan{color:var(--sc-err);}

/* ---------- 模态框 ---------- */
.sc-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;z-index:50;}
.sc-modal.show{display:flex;}
.sc-modal-bg{position:absolute;inset:0;background:rgba(0,0,0,.46);animation:sc-fade-bg .3s ease;}
@keyframes sc-fade-bg{from{opacity:0;}}
.sc-modal-box{position:relative;background:var(--sc-surface);border:1px solid var(--sc-border);border-radius:var(--sc-radius-lg);
  box-shadow:0 24px 60px rgba(0,0,0,.28);width:min(430px,calc(100% - 44px));padding:21px;animation:sc-pop .34s cubic-bezier(.22,1.25,.36,1);}
@keyframes sc-pop{from{opacity:0;transform:scale(.92) translateY(14px);}}
.sc-modal-box h4{font-size:16px;margin:0 0 8px;}
.sc-modal-box p{font-size:13px;line-height:1.75;color:var(--sc-muted);margin:0 0 18px;}
.sc-modal-foot{display:flex;justify-content:flex-end;gap:8px;}

/* ---------- 吐司 ---------- */
.sc-toasts{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px;z-index:60;}
.sc-toast{display:flex;align-items:center;gap:9px;background:var(--sc-surface);border:1px solid var(--sc-border);
  border-left-width:3px;border-radius:var(--sc-radius);box-shadow:0 10px 30px rgba(0,0,0,.2);padding:10px 14px;
  font-size:12.5px;max-width:270px;animation:sc-toast-in .38s cubic-bezier(.22,1.25,.36,1);}
@keyframes sc-toast-in{from{opacity:0;transform:translateY(16px) scale(.95);}}
.sc-toast.out{opacity:0;transform:translateY(6px);transition:all .3s;}
.sc-toast.ok{border-left-color:var(--sc-ok);}
.sc-toast.warn{border-left-color:var(--sc-warn);}
.sc-toast.err{border-left-color:var(--sc-err);}
.sc-toast-ic{width:16px;height:16px;border-radius:50%;flex:none;display:inline-flex;align-items:center;justify-content:center;
  font-size:9.5px;color:#fff;font-weight:700;}
.sc-toast.ok .sc-toast-ic{background:var(--sc-ok);}
.sc-toast.ok .sc-toast-ic::after{content:"✓";}
.sc-toast.warn .sc-toast-ic{background:var(--sc-warn);}
.sc-toast.warn .sc-toast-ic::after{content:"!";}
.sc-toast.err .sc-toast-ic{background:var(--sc-err);}
.sc-toast.err .sc-toast-ic::after{content:"✕";}

/* ---------- 警告提示 ---------- */
.sc-alert{display:flex;gap:9px;align-items:flex-start;border:1px solid var(--sc-border);border-left-width:3px;
  border-radius:var(--sc-radius);padding:9px 12px;font-size:12px;line-height:1.65;}
.sc-alert .ic{font-size:11px;font-weight:700;flex:none;margin-top:1px;}
.sc-alert.ok{border-left-color:var(--sc-ok);background:color-mix(in srgb,var(--sc-ok) 8%,transparent);}
.sc-alert.ok .ic{color:var(--sc-ok);}
.sc-alert.ok .ic::after{content:"✓";}
.sc-alert.warn{border-left-color:var(--sc-warn);background:color-mix(in srgb,var(--sc-warn) 8%,transparent);}
.sc-alert.warn .ic{color:var(--sc-warn);}
.sc-alert.warn .ic::after{content:"!";}
.sc-alert.err{border-left-color:var(--sc-err);background:color-mix(in srgb,var(--sc-err) 8%,transparent);}
.sc-alert.err .ic{color:var(--sc-err);}
.sc-alert.err .ic::after{content:"✕";}
.sc-alert.info{border-left-color:var(--sc-info);background:color-mix(in srgb,var(--sc-info) 8%,transparent);}
.sc-alert.info .ic{color:var(--sc-info);}
.sc-alert.info .ic::after{content:"i";}

/* ---------- 徽章 / 标签 ---------- */
.sc-badge{display:inline-flex;align-items:center;font-size:11px;padding:2.5px 9px;border-radius:999px;font-weight:500;line-height:1.5;}
.sc-badge.pri{background:var(--sc-primary);color:var(--sc-onprimary);}
.sc-badge.ok{background:color-mix(in srgb,var(--sc-ok) 15%,transparent);color:var(--sc-ok);}
.sc-badge.warn{background:color-mix(in srgb,var(--sc-warn) 15%,transparent);color:var(--sc-warn);}
.sc-badge.err{background:color-mix(in srgb,var(--sc-err) 15%,transparent);color:var(--sc-err);}
.sc-badge.mut{border:1px solid var(--sc-border);color:var(--sc-muted);}
.sc-tag{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;border:1px solid var(--sc-border);
  border-radius:999px;padding:3px 5px 3px 10px;background:var(--sc-surface);transition:opacity .2s,transform .2s,border-color .2s;}
.sc-tag .x{cursor:pointer;border:0;background:transparent;color:var(--sc-muted);font-size:13px;line-height:1;padding:0 4px;border-radius:50%;transition:color .18s,background .18s;}
.sc-tag .x:hover{color:var(--sc-err);background:var(--sc-alt);}

/* ---------- 头像 ---------- */
.sc-ava{width:34px;height:34px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;
  font-size:12px;font-weight:600;color:#fff;flex:none;position:relative;letter-spacing:.02em;}
.sc-ava.sm{width:26px;height:26px;font-size:10px;}
.sc-ava.a{background:#d95757;}
.sc-ava.b{background:#4f7ddb;}
.sc-ava.c{background:#3d9a6c;}
.sc-ava.d{background:#9a6dd0;}
.sc-ava-group{display:flex;align-items:center;}
.sc-ava-group .sc-ava{border:2px solid var(--sc-surface);margin-left:-9px;}
.sc-ava-group .sc-ava:first-child{margin-left:0;}
.sc-ava .dot{position:absolute;right:-1px;bottom:-1px;width:9px;height:9px;border-radius:50%;background:var(--sc-ok);border:2px solid var(--sc-surface);}

/* ---------- 进度 ---------- */
.sc-prog{position:relative;height:8px;border-radius:999px;background:var(--sc-border);overflow:hidden;}
.sc-prog-fill{position:absolute;top:0;bottom:0;left:0;width:0;background:var(--sc-primary);border-radius:999px;transition:width .6s cubic-bezier(.2,.7,.3,1);}
.sc-prog-row{display:flex;align-items:center;gap:10px;}
.sc-prog-row .sc-prog{flex:1;}
.sc-prog-num{font-family:var(--sc-mono);font-size:11px;color:var(--sc-muted);flex:none;}
.sc-ring-wrap{position:relative;display:inline-flex;}
.sc-ring-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11.5px;font-family:var(--sc-mono);font-weight:600;}
.sc-ring circle{fill:none;stroke-width:7;stroke-linecap:round;}
.sc-ring .bgc{stroke:var(--sc-border);}
.sc-ring .fgc{stroke:var(--sc-primary);stroke-dasharray:150;stroke-dashoffset:52;transform:rotate(-90deg);transform-origin:center;}

/* ---------- 步骤条 ---------- */
.sc-steps{display:flex;align-items:flex-start;}
.sc-step{display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;flex:1;position:relative;min-width:0;}
.sc-step .no{width:23px;height:23px;border-radius:50%;border:1.5px solid var(--sc-border);display:flex;align-items:center;
  justify-content:center;font-size:10.5px;font-family:var(--sc-mono);color:var(--sc-muted);background:var(--sc-surface);
  transition:all .3s cubic-bezier(.22,1,.36,1);position:relative;z-index:1;}
.sc-step small{font-size:10px;color:var(--sc-muted);text-align:center;line-height:1.3;}
.sc-step::before{content:"";position:absolute;top:11px;left:calc(-50% + 15px);right:calc(50% + 15px);height:1.5px;background:var(--sc-border);}
.sc-step:first-child::before{display:none;}
.sc-step.cur .no{border-color:var(--sc-primary);background:var(--sc-primary);color:var(--sc-onprimary);}
.sc-step.cur small{color:var(--sc-text);font-weight:600;}
.sc-step.done .no{background:var(--sc-primary);border-color:var(--sc-primary);color:var(--sc-onprimary);}
.sc-step.done::before{background:var(--sc-primary);}
.sc-step-lbl{font-size:11px;color:var(--sc-muted);font-family:var(--sc-mono);}

/* ---------- 分页 ---------- */
.sc-pg{display:flex;gap:4px;flex-wrap:wrap;}
.sc-pg-b{min-width:28px;height:28px;padding:0 6px;border:1px solid var(--sc-border);background:var(--sc-surface);
  border-radius:var(--sc-radius);font:inherit;font-size:11.5px;cursor:pointer;color:var(--sc-muted);font-family:var(--sc-mono);
  transition:all .22s cubic-bezier(.22,1,.36,1);}
.sc-pg-b:hover{border-color:var(--sc-primary);color:var(--sc-text);}
.sc-pg-b.on{background:var(--sc-primary);border-color:var(--sc-primary);color:var(--sc-onprimary);}
.sc-pg-b[disabled]{opacity:.4;cursor:not-allowed;}

/* ---------- 面包屑 ---------- */
.sc-crumb{display:flex;align-items:center;gap:7px;font-size:12.5px;color:var(--sc-muted);flex-wrap:wrap;}
.sc-crumb .lnk{color:var(--sc-primary);cursor:pointer;}
.sc-crumb .lnk:hover{text-decoration:underline;}
.sc-crumb .sep{opacity:.45;}
.sc-crumb .cur{color:var(--sc-text);font-weight:500;}

/* ---------- 提示 ---------- */
.sc-tip{position:relative;}
.sc-tip::after{content:attr(data-tip);position:absolute;bottom:calc(100% + 7px);left:50%;transform:translateX(-50%) translateY(4px);
  background:var(--sc-text);color:var(--sc-bg);font-size:11px;padding:4px 9px;border-radius:6px;white-space:nowrap;
  opacity:0;pointer-events:none;transition:opacity .22s ease,transform .22s cubic-bezier(.22,1,.36,1);z-index:20;font-weight:400;}
.sc-tip:hover::after,.sc-tip:focus-visible::after{opacity:1;transform:translateX(-50%) translateY(0);}

/* ---------- 表格 ---------- */
.sc-tbl{width:100%;border-collapse:collapse;font-size:12px;}
.sc-tbl th{text-align:left;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--sc-muted);
  font-weight:600;padding:5px 8px;border-bottom:1px solid var(--sc-border);white-space:nowrap;}
.sc-tbl td{padding:7px 8px;border-bottom:1px solid var(--sc-border);color:var(--sc-text);white-space:nowrap;}
.sc-tbl tbody tr{transition:background .18s;}
.sc-tbl tbody tr:hover{background:var(--sc-alt);}
.sc-tbl tr:last-child td{border-bottom:0;}
.sc-tbl .sort{cursor:pointer;user-select:none;}
.sc-tbl .sort:hover{color:var(--sc-text);}

/* ---------- 文件上传 ---------- */
.sc-file{display:flex;align-items:center;gap:10px;min-width:0;}
.sc-file input{display:none;}
.sc-file-name{font-size:11.5px;color:var(--sc-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;}

/* ---------- 骨架屏 ---------- */
.sc-skel-box .sk{display:none;flex-direction:column;gap:8px;}
.sc-skel-box.loading .sk{display:flex;}
.sc-skel-box.loading .real{display:none;}
.sc-skel-box .sk .ln{height:10px;border-radius:5px;
  background:linear-gradient(90deg,var(--sc-border) 25%,color-mix(in srgb,var(--sc-border) 40%,var(--sc-surface)) 37%,var(--sc-border) 63%);
  background-size:400% 100%;animation:sc-shim 1.4s ease infinite;}
.sc-skel-box .sk .w70{width:70%;}
.sc-skel-box .sk .w45{width:45%;}
.sc-skel-box .real{display:flex;flex-direction:column;gap:8px;font-size:12.5px;line-height:1.7;}
@keyframes sc-shim{0%{background-position:100% 50%;}100%{background-position:0 50%;}}

/* ---------- 动效总开关：偏好减弱时全部瞬时 ---------- */
@media (prefers-reduced-motion:reduce){
  .sc-root *,.sc-root *::after,.sc-root *::before{animation-duration:.01ms !important;transition-duration:.01ms !important;}
}
`;

export function scHtml(): string {
  return `
<div class="sc-root">
  <div class="sc-head">
    <div>
      <span class="sc-kicker">COMPONENT MATRIX · 26 件</span>
      <h2>组件矩阵</h2>
    </div>
    <p>同一套组件，活在一种范式里。下面每一个控件都可以直接操作——下拉、切换、拖滑块、弹窗、吐司。</p>
  </div>
  <div class="sc-grid">

    <div class="sc-cell"><h5>按钮 Buttons</h5>
      <div class="sc-row">
        <button class="sc-btn pri">主要操作</button>
        <button class="sc-btn">次要</button>
        <button class="sc-btn gho">幽灵</button>
        <button class="sc-btn dan">危险</button>
        <button class="sc-btn" disabled>禁用</button>
        <button class="sc-btn ico" aria-label="收藏">♡</button>
        <button class="sc-btn pri sm"><span class="sc-spin"></span>加载中</button>
      </div>
    </div>

    <div class="sc-cell"><h5>输入框 Input</h5>
      <div>
        <label class="sc-lbl">项目名称</label>
        <input class="sc-inp" type="text" placeholder="请输入…" value="范式展览馆" />
        <div class="sc-help">帮助文字：2–32 个字符</div>
      </div>
      <div>
        <input class="sc-inp err" type="text" value="非法字符 #" />
        <div class="sc-help err">只能包含字母、数字与连字符</div>
      </div>
    </div>

    <div class="sc-cell"><h5>文本域 Textarea</h5>
      <textarea class="sc-ta" maxlength="120" placeholder="说点什么…">按范式生成，不按默认味生成。</textarea>
      <div class="sc-count">0 / 120</div>
    </div>

    <div class="sc-cell"><h5>下拉框 Select</h5>
      <div class="sc-sel">
        <button class="sc-sel-btn" data-sc-toggle><span class="sc-sel-val">终端命令行</span><span class="car">▼</span></button>
        <div class="sc-sel-list">
          <div class="sc-sel-opt sel">终端命令行</div>
          <div class="sc-sel-opt">便当盒网格</div>
          <div class="sc-sel-opt">瑞士国际主义</div>
          <div class="sc-sel-opt">日式极简</div>
        </div>
      </div>
    </div>

    <div class="sc-cell w2"><h5>搜索框 Search</h5>
      <div class="sc-search">
        <span class="sc-ic">⌕</span>
        <input class="sc-inp" type="text" placeholder="搜索范式，试试输入「粗」或「b」…" />
        <div class="sc-sug">
          <div class="sc-sug-item">新粗野主义 Neo-Brutalism</div>
          <div class="sc-sug-item">包豪斯 Bauhaus</div>
          <div class="sc-sug-item">孟菲斯 Memphis</div>
          <div class="sc-sug-item">赛博朋克 Cyberpunk</div>
          <div class="sc-sug-item">玻璃拟态 Glassmorphism</div>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>复选框 Checkbox</h5>
      <label class="sc-chk"><input type="checkbox" checked /><span class="sc-box"></span><span>邮件通知</span></label>
      <label class="sc-chk"><input type="checkbox" /><span class="sc-box"></span><span>短信提醒</span></label>
      <label class="sc-chk"><input type="checkbox" disabled /><span class="sc-box"></span><span>已停用项</span></label>
    </div>

    <div class="sc-cell"><h5>单选组 Radio</h5>
      <label class="sc-rad"><input type="radio" name="sc-r1" checked /><span class="sc-box"></span><span>自动模式</span></label>
      <label class="sc-rad"><input type="radio" name="sc-r1" /><span class="sc-box"></span><span>手动模式</span></label>
      <label class="sc-rad"><input type="radio" name="sc-r1" /><span class="sc-box"></span><span>只读模式</span></label>
    </div>

    <div class="sc-cell"><h5>开关 Switch</h5>
      <label class="sc-sw"><input type="checkbox" checked /><span class="tr"></span><span class="sc-sw-txt">已开启</span></label>
      <label class="sc-sw"><input type="checkbox" /><span class="tr"></span><span class="sc-sw-txt">已关闭</span></label>
    </div>

    <div class="sc-cell"><h5>滑块 Slider</h5>
      <div class="sc-col">
        <input class="sc-rng" type="range" min="0" max="100" value="64" />
        <div class="sc-row" style="justify-content:space-between">
          <span class="sc-note">字号缩放</span><span class="sc-rng-out">64%</span>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>分段控制 Segmented</h5>
      <div class="sc-seg">
        <span class="sc-seg-ind"></span>
        <button class="sc-seg-b on">日</button><button class="sc-seg-b">周</button><button class="sc-seg-b">月</button>
      </div>
      <p class="sc-note">统计范围：本月</p>
    </div>

    <div class="sc-cell w2"><h5>标签页 Tabs</h5>
      <div data-sc-tabs>
        <div class="sc-tabs">
          <span class="sc-tab-ind"></span>
          <button class="sc-tab on">概览</button><button class="sc-tab">规范</button><button class="sc-tab">禁忌</button>
        </div>
        <div class="sc-pane on">概览：该范式以网格与无装饰排版建立秩序，适合内容优先的产品。</div>
        <div class="sc-pane">规范：12 列网格、单一无衬线字体族、左对齐、文字即图形。</div>
        <div class="sc-pane">禁忌：不用渐变、不用圆角卡片堆砌、不居中hero。</div>
      </div>
    </div>

    <div class="sc-cell w2"><h5>手风琴 Accordion</h5>
      <div data-sc-acc>
        <div class="sc-acc-item open">
          <div class="sc-acc-h">这个范式适合什么场景？<span class="chev">▼</span></div>
          <div class="sc-acc-b">内容型产品、文档站、编辑设计气质的品牌官网。</div>
        </div>
        <div class="sc-acc-item">
          <div class="sc-acc-h">怎么让 AI 不跑偏？<span class="chev">▼</span></div>
          <div class="sc-acc-b">整段粘贴范式提示词，并显式声明「不得混用其他风格」。</div>
        </div>
        <div class="sc-acc-item">
          <div class="sc-acc-h">可以混搭两种范式吗？<span class="chev">▼</span></div>
          <div class="sc-acc-b">可以，但一次只让一种范式主导布局，另一种只出现在局部组件。</div>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>下拉菜单 Menu</h5>
      <div class="sc-menu">
        <button class="sc-btn" data-sc-toggle>操作 <span style="font-size:9px">▼</span></button>
        <div class="sc-menu-list">
          <div class="sc-menu-item">✎ 编辑</div>
          <div class="sc-menu-item">⧉ 复制链接</div>
          <div class="sc-menu-item">↗ 分享</div>
          <div class="sc-menu-item sep dan">🗑 删除</div>
        </div>
      </div>
      <p class="sc-note">点击按钮展开，点击空白处收起</p>
    </div>

    <div class="sc-cell"><h5>模态框 Modal</h5>
      <button class="sc-btn pri" data-sc-modal="sc-m1">打开对话框</button>
      <div class="sc-modal" id="sc-m1">
        <div class="sc-modal-bg" data-sc-modal-close></div>
        <div class="sc-modal-box">
          <h4>确认切换范式？</h4>
          <p>切换后，当前页面的布局、字体与色彩规范都会按新范式重新生成，未保存的改动将丢失。</p>
          <div class="sc-modal-foot">
            <button class="sc-btn sm" data-sc-modal-close>取消</button>
            <button class="sc-btn pri sm" data-sc-modal-close>确认切换</button>
          </div>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>吐司 Toast</h5>
      <div class="sc-row">
        <button class="sc-btn sm" data-sc-toast="ok" data-msg="范式已保存">成功</button>
        <button class="sc-btn sm" data-sc-toast="warn" data-msg="该范式有 3 处待确认项">警告</button>
        <button class="sc-btn sm" data-sc-toast="err" data-msg="提示词格式不正确">错误</button>
      </div>
    </div>

    <div class="sc-cell"><h5>警告提示 Alert</h5>
      <div class="sc-col">
        <div class="sc-alert info"><span class="ic"></span><span>索引已更新至 28 件展品。</span></div>
        <div class="sc-alert ok"><span class="ic"></span><span>提示词复制成功。</span></div>
        <div class="sc-alert warn"><span class="ic"></span><span>渐变hero属于「AI 默认味」高危区。</span></div>
        <div class="sc-alert err"><span class="ic"></span><span>检测到混用风格：粗野 + 玻璃。</span></div>
      </div>
    </div>

    <div class="sc-cell"><h5>徽章 / 标签 Badge</h5>
      <div class="sc-row">
        <span class="sc-badge pri">主</span><span class="sc-badge ok">稳定</span>
        <span class="sc-badge warn">测试</span><span class="sc-badge err">弃用</span>
        <span class="sc-badge mut">v0.4</span>
      </div>
      <div class="sc-row">
        <span class="sc-tag">网格 <button class="x" aria-label="移除">×</button></span>
        <span class="sc-tag">无衬线 <button class="x" aria-label="移除">×</button></span>
        <span class="sc-tag">1950s <button class="x" aria-label="移除">×</button></span>
      </div>
    </div>

    <div class="sc-cell"><h5>头像 Avatar</h5>
      <div class="sc-row">
        <span class="sc-ava a">范式</span>
        <span class="sc-ava b">AI</span>
        <span class="sc-ava c">馆</span>
        <span class="sc-ava d">长</span>
      </div>
      <div class="sc-row">
        <span class="sc-ava-group">
          <span class="sc-ava sm a">甲</span><span class="sc-ava sm b">乙</span><span class="sc-ava sm c">丙</span>
          <span class="sc-ava sm" style="background:var(--sc-muted)">+9</span>
        </span>
        <span class="sc-ava sm a">在<span class="dot"></span></span>
      </div>
    </div>

    <div class="sc-cell"><h5>进度 Progress</h5>
      <div class="sc-col">
        <div class="sc-prog-row">
          <div class="sc-prog" data-pct="72"><div class="sc-prog-fill"></div></div>
          <span class="sc-prog-num">0%</span>
        </div>
        <button class="sc-btn sm" data-sc-prog=".sc-prog" data-pct="72">运行动画</button>
        <div class="sc-row" style="justify-content:center">
          <div class="sc-ring-wrap">
            <svg class="sc-ring" width="64" height="64" viewBox="0 0 64 64">
              <circle class="bgc" cx="32" cy="32" r="24"></circle>
              <circle class="fgc" cx="32" cy="32" r="24"></circle>
            </svg>
            <span class="sc-ring-num">65%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="sc-cell w2"><h5>步骤条 Stepper</h5>
      <div data-sc-steps>
        <div class="sc-steps">
          <div class="sc-step cur"><span class="no">1</span><small>选范式</small></div>
          <div class="sc-step"><span class="no">2</span><small>写需求</small></div>
          <div class="sc-step"><span class="no">3</span><small>生成</small></div>
          <div class="sc-step"><span class="no">4</span><small>验收</small></div>
        </div>
        <div class="sc-row" style="justify-content:space-between;margin-top:12px">
          <span class="sc-step-lbl">第 1 / 4 步</span>
          <span class="sc-row">
            <button class="sc-btn sm" data-sc-prev>上一步</button>
            <button class="sc-btn pri sm" data-sc-next>下一步</button>
          </span>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>分页 Pagination</h5>
      <div class="sc-pg">
        <button class="sc-pg-b" disabled>‹</button>
        <button class="sc-pg-b on">1</button><button class="sc-pg-b">2</button>
        <button class="sc-pg-b">3</button><button class="sc-pg-b">…</button><button class="sc-pg-b">21</button>
        <button class="sc-pg-b">›</button>
      </div>
    </div>

    <div class="sc-cell"><h5>面包屑 Breadcrumb</h5>
      <div class="sc-crumb">
        <span class="lnk">展厅</span><span class="sep">/</span>
        <span class="lnk">布局范式</span><span class="sep">/</span>
        <span class="cur">便当盒网格</span>
      </div>
    </div>

    <div class="sc-cell"><h5>提示 Tooltip</h5>
      <div class="sc-row">
        <button class="sc-btn sm sc-tip" data-tip="悬停出现的说明">悬停我</button>
        <button class="sc-btn ico sc-tip" data-tip="这是什么意思？">?</button>
      </div>
    </div>

    <div class="sc-cell w2"><h5>数据表格 Table</h5>
      <table class="sc-tbl">
        <thead><tr>
          <th class="sort">范式 ⇅</th><th class="sort">编号 ⇅</th><th>标签</th><th class="sort">状态 ⇅</th>
        </tr></thead>
        <tbody>
          <tr><td>瑞士国际主义</td><td class="sc-mono">02</td><td>网格 · 无衬线</td><td><span class="sc-badge ok">stable</span></td></tr>
          <tr><td>新粗野主义</td><td class="sc-mono">03</td><td>粗边 · 硬阴影</td><td><span class="sc-badge ok">stable</span></td></tr>
          <tr><td>赛博朋克</td><td class="sc-mono">15</td><td>霓虹 · HUD</td><td><span class="sc-badge warn">beta</span></td></tr>
          <tr><td>手工纸艺</td><td class="sc-mono">12</td><td>噪点 · 剪贴</td><td><span class="sc-badge mut">draft</span></td></tr>
        </tbody>
      </table>
    </div>

    <div class="sc-cell"><h5>文件上传 Upload</h5>
      <div class="sc-file">
        <label class="sc-btn sm"><span>选择文件</span><input type="file" /></label>
        <span class="sc-file-name">未选择文件</span>
      </div>
    </div>

    <div class="sc-cell"><h5>骨架屏 Skeleton</h5>
      <div class="sc-skel-box" id="sc-skel-1">
        <div class="real"><b style="font-size:13px">范式展览馆</b><span class="sc-note">28 件展品 · 全部可交互</span></div>
        <div class="sk"><div class="ln"></div><div class="ln w70"></div><div class="ln w45"></div></div>
      </div>
      <button class="sc-btn sm" data-sc-skel="sc-skel-1">模拟加载</button>
    </div>

  </div>
  <div class="sc-toasts"></div>
</div>`;
}

export function scJs(): string {
  return `
(function () {
  var $ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var on = function (el, ev, fn) { if (el) el.addEventListener(ev, fn); };

  /* 标签页（滑动指示条） */
  $('[data-sc-tabs]').forEach(function (box) {
    var tabs = $('.sc-tab', box), panes = $('.sc-pane', box);
    var ind = box.querySelector('.sc-tab-ind');
    var move = function (t) {
      if (!ind || !t) return;
      ind.style.width = t.offsetWidth + 'px';
      ind.style.transform = 'translateX(' + t.offsetLeft + 'px)';
    };
    tabs.forEach(function (t, i) {
      on(t, 'click', function () {
        tabs.forEach(function (x) { x.classList.remove('on'); });
        panes.forEach(function (x) { x.classList.remove('on'); });
        t.classList.add('on');
        if (panes[i]) panes[i].classList.add('on');
        move(t);
      });
    });
    move(box.querySelector('.sc-tab.on'));
    setTimeout(function () { move(box.querySelector('.sc-tab.on')); }, 350);
  });

  /* 手风琴 */
  $('[data-sc-acc] .sc-acc-h').forEach(function (h) {
    on(h, 'click', function () {
      var item = h.parentElement, was = item.classList.contains('open');
      $('[data-sc-acc] .sc-acc-item').forEach(function (x) { x.classList.remove('open'); });
      if (!was) item.classList.add('open');
    });
  });

  /* 弹层开关（下拉框 / 菜单） */
  $('[data-sc-toggle]').forEach(function (btn) {
    on(btn, 'click', function (e) {
      e.stopPropagation();
      var wrap = btn.closest('.sc-sel, .sc-menu');
      var opening = !wrap.classList.contains('sc-open');
      $('.sc-sel.sc-open, .sc-menu.sc-open').forEach(function (x) { x.classList.remove('sc-open'); });
      if (opening) wrap.classList.add('sc-open');
    });
  });
  $('.sc-sel-opt').forEach(function (opt) {
    on(opt, 'click', function () {
      var wrap = opt.closest('.sc-sel');
      var val = $('.sc-sel-val', wrap)[0];
      if (val) val.textContent = opt.textContent;
      $('.sc-sel-opt', wrap).forEach(function (x) { x.classList.remove('sel'); });
      opt.classList.add('sel');
      wrap.classList.remove('sc-open');
    });
  });

  /* 模态框 */
  $('[data-sc-modal]').forEach(function (b) {
    on(b, 'click', function () {
      var m = document.getElementById(b.getAttribute('data-sc-modal'));
      if (m) m.classList.add('show');
    });
  });
  $('[data-sc-modal-close]').forEach(function (b) {
    on(b, 'click', function () { b.closest('.sc-modal').classList.remove('show'); });
  });

  /* 吐司 */
  var toastBox = document.querySelector('.sc-toasts');
  $('[data-sc-toast]').forEach(function (b) {
    on(b, 'click', function () {
      var type = b.getAttribute('data-sc-toast') || 'ok';
      var msg = b.getAttribute('data-msg') || '操作完成';
      var t = document.createElement('div');
      t.className = 'sc-toast ' + type;
      var ic = document.createElement('span');
      ic.className = 'sc-toast-ic';
      var tx = document.createElement('span');
      tx.textContent = msg;
      t.appendChild(ic); t.appendChild(tx);
      if (toastBox) toastBox.appendChild(t);
      setTimeout(function () { t.classList.add('out'); }, 2200);
      setTimeout(function () { if (t.remove) t.remove(); }, 2700);
    });
  });

  /* 开关文字联动 */
  $('.sc-sw input').forEach(function (inp) {
    on(inp, 'change', function () {
      var lab = inp.parentElement.querySelector('.sc-sw-txt');
      if (lab) lab.textContent = inp.checked ? '已开启' : '已关闭';
    });
  });

  /* 滑块数值 */
  $('.sc-rng').forEach(function (r) {
    var out = r.parentElement.querySelector('.sc-rng-out');
    var upd = function () { if (out) out.textContent = r.value + '%'; };
    on(r, 'input', upd); upd();
  });

  /* 分段控制（滑动指示块） */
  $('.sc-seg').forEach(function (seg) {
    var ind = seg.querySelector('.sc-seg-ind');
    var move = function (b) {
      if (!ind || !b) return;
      ind.style.width = b.offsetWidth + 'px';
      ind.style.transform = 'translateX(' + b.offsetLeft + 'px)';
    };
    $('.sc-seg-b', seg).forEach(function (b) {
      on(b, 'click', function () {
        $('.sc-seg-b', seg).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        move(b);
        var note = seg.parentElement.querySelector('.sc-note');
        if (note) note.textContent = '统计范围：本' + b.textContent;
      });
    });
    move(seg.querySelector('.sc-seg-b.on'));
    setTimeout(function () { move(seg.querySelector('.sc-seg-b.on')); }, 350);
  });

  /* 步骤条 */
  $('[data-sc-steps]').forEach(function (box) {
    var dots = $('.sc-step', box), idx = 0;
    var paint = function () {
      dots.forEach(function (d, i) {
        d.classList.toggle('done', i < idx);
        d.classList.toggle('cur', i === idx);
      });
      var lbl = box.querySelector('.sc-step-lbl');
      if (lbl) lbl.textContent = '第 ' + (idx + 1) + ' / ' + dots.length + ' 步';
    };
    dots.forEach(function (d, i) { on(d, 'click', function () { idx = i; paint(); }); });
    on(box.querySelector('[data-sc-next]'), 'click', function () { if (idx < dots.length - 1) { idx++; paint(); } });
    on(box.querySelector('[data-sc-prev]'), 'click', function () { if (idx > 0) { idx--; paint(); } });
    paint();
  });

  /* 分页 */
  $('.sc-pg').forEach(function (pg) {
    $('.sc-pg-b', pg).forEach(function (b) {
      on(b, 'click', function () {
        if (b.hasAttribute('disabled')) return;
        $('.sc-pg-b', pg).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
      });
    });
  });

  /* 标签移除（缩小淡出后再移除） */
  $('.sc-tag .x').forEach(function (x) {
    on(x, 'click', function () {
      var t = x.parentElement;
      if (!t) return;
      t.style.opacity = '0';
      t.style.transform = 'scale(.82)';
      setTimeout(function () { if (t.remove) t.remove(); }, 200);
    });
  });

  /* 搜索建议 */
  $('.sc-search input').forEach(function (inp) {
    var box = inp.closest('.sc-search');
    var list = box ? box.querySelector('.sc-sug') : null;
    var filter = function () {
      var q = inp.value.trim().toLowerCase();
      $('.sc-sug-item', list).forEach(function (it) {
        it.style.display = !q || it.textContent.toLowerCase().indexOf(q) >= 0 ? '' : 'none';
      });
      if (list) list.classList.add('show');
    };
    on(inp, 'input', filter);
    on(inp, 'focus', filter);
  });

  /* 文本域计数 */
  $('.sc-ta').forEach(function (ta) {
    var count = ta.parentElement.querySelector('.sc-count');
    var upd = function () {
      if (count) count.textContent = ta.value.length + ' / ' + (ta.getAttribute('maxlength') || 120);
    };
    on(ta, 'input', upd); upd();
  });

  /* 文件上传名 */
  $('.sc-file input').forEach(function (inp) {
    on(inp, 'change', function () {
      var lab = inp.parentElement.parentElement.querySelector('.sc-file-name');
      if (lab) lab.textContent = inp.files && inp.files[0] ? inp.files[0].name : '未选择文件';
    });
  });

  /* 骨架屏切换 */
  $('[data-sc-skel]').forEach(function (b) {
    on(b, 'click', function () {
      var box = document.getElementById(b.getAttribute('data-sc-skel'));
      if (!box) return;
      box.classList.toggle('loading');
      b.textContent = box.classList.contains('loading') ? '加载完成' : '模拟加载';
    });
  });

  /* 进度动画 */
  $('[data-sc-prog]').forEach(function (b) {
    on(b, 'click', function () {
      var bar = document.querySelector(b.getAttribute('data-sc-prog'));
      if (!bar) return;
      var fill = bar.querySelector('.sc-prog-fill');
      var num = bar.parentElement.querySelector('.sc-prog-num');
      var pct = parseInt(bar.getAttribute('data-pct') || '72', 10);
      if (fill) fill.style.width = pct + '%';
      if (num) num.textContent = pct + '%';
    });
  });

  /* 点击空白收起弹层 */
  document.addEventListener('click', function (e) {
    $('.sc-sel.sc-open, .sc-menu.sc-open').forEach(function (el) {
      if (!el.contains(e.target)) el.classList.remove('sc-open');
    });
    $('.sc-sug.show').forEach(function (l) {
      if (!l.parentElement.contains(e.target)) l.classList.remove('show');
    });
  });
})();
`;
}
