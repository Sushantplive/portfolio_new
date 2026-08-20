import { skills } from '../data/portfolio'

function Toolkit() {
  return (
    <section className="section" id="toolkit">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Toolkit</div>
          <h2>What I actually build with.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <div className="fact-k">{group.category}</div>
              <div className="pillset">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Toolkit
