import { cases } from '../data/portfolio'

function Systems() {
  return (
    <section className="section" id="systems">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Systems Built</div>
          <h2>Four platforms, one recurring problem: make high-stakes systems legible.</h2>
          <p>
            Each of these sits between people and something that can go physically or
            financially wrong — a cash device, a portfolio, a piece of infrastructure.
            Here's how the frontend earned trust in each one.
          </p>
        </div>
        <div className="case-list">
          {cases.map((c) => (
            <article className="case" key={c.title}>
              <div className="case-meta">
                <span className="tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <div className="org">{c.org}</div>
                <div className="dates mono">{c.dates}</div>
              </div>
              <div className="case-body">
                <dl>
                  <div>
                    <dt>Issue</dt>
                    <dd>{c.issue}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{c.approach}</dd>
                  </div>
                  <div>
                    <dt>Result</dt>
                    <dd>{c.result}</dd>
                  </div>
                </dl>
                <div className="stack">
                  {c.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Systems
