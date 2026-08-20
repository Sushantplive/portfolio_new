import { profile } from '../data/portfolio'

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-text">
            <div className="eyebrow">Profile</div>
            <p className="lede">{profile.aboutLede}</p>
            {profile.aboutParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="about-facts">
            <div className="fact">
              <div className="fact-k">Based in</div>
              <div className="fact-v">{profile.location}</div>
            </div>
            <div className="fact">
              <div className="fact-k">Domains</div>
              <div className="fact-v">{profile.domains}</div>
            </div>
            <div className="fact">
              <div className="fact-k">Currently</div>
              <div className="fact-v">{profile.currently}</div>
            </div>
            <div className="fact">
              <div className="fact-k">Stack</div>
              <div className="fact-v">{profile.stack}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
