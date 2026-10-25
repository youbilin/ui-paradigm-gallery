import { useEffect } from 'react';
import { useHashRoute } from './router';
import { HomeView } from './views/HomeView';
import { IndexView } from './views/IndexView';
import { paradigms } from './data/paradigms';
import { openPreview } from './utils/preview';

function randomPreview() {
  const list = paradigms.filter((p) => p.kind !== 'anti-pattern');
  const p = list[Math.floor(Math.random() * list.length)];
  openPreview(p.demo.html, p.name);
}

export default function App() {
  const route = useHashRoute();
  const onIndex = route.startsWith('#/index');

  /* 路由切换时回到页顶（纯锚点 #diagnosis 除外，让浏览器自己滚到目标） */
  useEffect(() => {
    if (!route.startsWith('#/')) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [route]);

  return (
    <>
      <header className="site-header">
        <div className="header-in">
          <a className="wordmark" href="#/">
            <span className="mark" />
            范式展览馆
            <small>PARADIGM HALL</small>
          </a>
          <nav className="nav">
            <a href="#/" className={!onIndex ? 'active' : ''}>
              展厅
            </a>
            <a href="#/index" className={onIndex ? 'active' : ''}>
              AI 索引
            </a>
            <a href="#diagnosis">反面标本</a>
          </nav>
          <div className="header-cta">
            <button className="btn btn-signal btn-sm" onClick={randomPreview}>
              随机预览一件
            </button>
          </div>
        </div>
      </header>

      <main>{onIndex ? <IndexView /> : <HomeView />}</main>

      <footer className="site-footer">
        <div className="footer-in">
          <div>
            <h5>范式展览馆</h5>
            <p>
              UI 范式提示词 × 实际效果展览。专治 AI 生成前端的千篇一律：给 AI 一份范式，
              而不是一句「做一个漂亮页面」。
            </p>
          </div>
          <div>
            <h5>导览</h5>
            <ul>
              <li>
                <a href="#/">展厅</a>
              </li>
              <li>
                <a href="#/index">AI 索引 / 推荐器</a>
              </li>
              <li>
                <a href="#diagnosis">反面标本：AI 默认味</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>数据</h5>
            <ul>
              <li>
                <a href="./index.json" target="_blank" rel="noreferrer">
                  index.json
                </a>
              </li>
              <li>
                <a href="./llms.txt" target="_blank" rel="noreferrer">
                  llms.txt
                </a>
              </li>
              <li>
                <span className="mono">npm run index</span> 重新生成
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-in">
            <p>PARADIGM HALL · 28 EXHIBITS · REACT + VITE · 2026</p>
          </div>
        </div>
      </footer>
    </>
  );
}
