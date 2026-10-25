import type { ParadigmTokens } from '../data/paradigms/types';

function swatchBg(value: string): string {
  if (value.includes('→')) {
    const stops = value.split('→').map((s) => s.trim());
    return `linear-gradient(90deg, ${stops.join(', ')})`;
  }
  return value;
}

export function TokenRow({ tokens }: { tokens: ParadigmTokens }) {
  return (
    <div className="tokens-grid">
      <div className="token-box">
        <h4>色彩 Colors</h4>
        <div className="swatches">
          {tokens.colors.map((c) => (
            <div className="swatch" key={c.name}>
              <i style={{ background: swatchBg(c.value) }} />
              <div>
                <b>{c.name}</b>
                <small>{c.value}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="token-box">
        <h4>规格 Specs</h4>
        <div className="kv">
          {tokens.fonts.map((f) => (
            <div className="row" key={f.role}>
              <b>{f.role}</b>
              <span>{f.stack}</span>
            </div>
          ))}
          {tokens.radius && (
            <div className="row">
              <b>圆角</b>
              <span>{tokens.radius}</span>
            </div>
          )}
          {tokens.shadow && (
            <div className="row">
              <b>阴影</b>
              <span>{tokens.shadow}</span>
            </div>
          )}
          {tokens.extras?.map((e) => (
            <div className="row" key={e.label}>
              <b>{e.label}</b>
              <span>{e.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
