import { profile } from '../data/portfolio'

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact-inner">
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2>Building something where reliability actually matters?</h2>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <svg viewBox="0 0 24 24">
                <path d="M3 6l9 7 9-7M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
              </svg>
              Email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" stroke="none" />
                <path d="M6.94 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5 10.5h4V19H5zM11 10.5h3.8v1.2s1-1.4 3-1.4c2.2 0 3.2 1.5 3.2 4V19h-4v-4c0-1-.4-1.7-1.4-1.7-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8V19h-3z" />
              </svg>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
