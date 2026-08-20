import { profile } from '../data/portfolio'

function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="eyebrow">{profile.role}</div>
        <h1>
          {profile.headline.map((part, i) =>
            typeof part === 'string' ? (
              <span key={i}>{part}</span>
            ) : (
              <span key={i} className="accent">
                {part.accent}
              </span>
            ),
          )}
        </h1>
        <p className="sub">{profile.subhead}</p>
        <div className="hero-cta">
          <a href="#systems" className="btn btn-solid">
            View systems built ↓
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in touch
          </a>
        </div>
        <div className="trace-wrap">
          <svg
            className="trace"
            viewBox="0 0 900 64"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,32 L120,32 L140,10 L160,54 L180,32 L260,32 L280,20 L300,44 L320,32 L420,32 L440,8 L462,56 L484,32 L560,32 L580,24 L600,40 L620,32 L900,32" />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Hero
