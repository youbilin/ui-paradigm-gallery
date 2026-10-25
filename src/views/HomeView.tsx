import { getParadigm, paradigms } from '../data/paradigms';
import { ExhibitCard, Thumb } from '../components/ExhibitCard';

const DIAG_IDS = ['bento', 'swiss', 'terminal', 'wa', 'y2k', 'deco'];

export function HomeView() {
  const generic = paradigms[0];
  const rest = paradigms.slice(1);

  return (
    <>
      <section className="hero">
        <div className="eyebrow">PROMPT × PIXELS · UI PARADIGM HALL</div>
        <h1 className="display">
          AI 把前端
          <br />
          做成了<em>同一个样子</em>。
        </h1>
        <p className="lead">
          靛蓝渐变、三等分圆角卡片、shadow-lg——效率的代价是审美的中位数。
          <b>范式展览馆</b>收集了 27 种依然鲜活的 UI 设计范式，每一种都配一份
          <b>可直接复制给 AI 的范式提示词</b>和一段<b>真实渲染的效果</b>。
          跟 AI 说「按便当盒网格范式做」，它就不再向平均值回归。
        </p>
        <div className="hero-row">
          <a className="btn btn-solid" href="#gallery">
            进入展厅 ↓
          </a>
          <a className="btn btn-ghost" href="#/index">
            打开 AI 索引
          </a>
        </div>
        <div className="stat-row">
          <div className="stat">
            <b>28</b>
            <span>件展品（含 1 件反面标本）</span>
          </div>
          <div className="stat">
            <b>27</b>
            <span>种设计范式</span>
          </div>
          <div className="stat">
            <b>26</b>
            <span>个可交互组件 × 每种范式</span>
          </div>
          <div className="stat">
            <b>1</b>
            <span>份机器可读 AI 索引</span>
          </div>
        </div>
      </section>

      <section className="section" id="diagnosis">
        <div className="section-head">
          <span className="no">DIAGNOSIS</span>
          <h2>先诊断：AI 前端为什么千篇一律</h2>
          <p>四个病根 × 一件反面标本</p>
        </div>
        <div className="diag">
          <div className="diag-text">
            <h3 className="diag-h">
              四条病根
              <span>左：为什么会这样 · 右：这样长什么样</span>
            </h3>
            <ol>
              <li>
                <span>
                  <b>提示词里没有「风格」这个维度。</b>
                  你说「做一个落地页」，AI 只能从训练分布里取均值——而均值就是 Tailwind + shadcn 的中位数审美。
                </span>
              </li>
              <li>
                <span>
                  <b>负面约束缺位。</b>
                  不让 AI 避开「居中 Hero 三件套、紫蓝渐变、rounded-2xl 卡片」，它就会默认生产这些。
                </span>
              </li>
              <li>
                <span>
                  <b>缺少按范式组织的高质量参考。</b>
                  设计史早就给过答案——瑞士网格、粗野主义、装饰艺术——但 AI 手里没有这样的图鉴。
                </span>
              </li>
              <li>
                <span>
                  <b>效果无法验证。</b>
                  没有渲染结果对照，提示词只是口号。本馆坚持「提示词 × 实际效果」成对陈列。
                </span>
              </li>
            </ol>
          </div>
          <div className="specimen">
            <div className="specimen-label">SPECIMEN 00</div>
            <div className="specimen-frame">
              <div className="specimen-flag">反面标本 · 慎看</div>
              <ExhibitCard p={generic} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <div className="thumbs-label">解药：同样的需求，范式库里的选择 ↓</div>
          <div className="thumbs-six">
            {DIAG_IDS.map((id) => {
              const p = getParadigm(id)!;
              return <Thumb key={id} p={p} />;
            })}
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="section-head">
          <span className="no">GALLERY</span>
          <h2>展品陈列</h2>
          <p>点击任意展品查看提示词与完整演示</p>
        </div>
        <p className="gallery-note">
          00 号为反面标本（见上方诊断区），用于识别与规避；01–27 号为可用范式。每张卡片下方就是全部操作：
          「复制提示词」整段拿走，「预览 ↗」在新窗口看真实渲染——演示底部都附带同一套 26 个可交互组件，直接上手玩。
        </p>
        <div className="gallery">
          {rest.map((p) => (
            <ExhibitCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </>
  );
}
