import { profile } from '../data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Systems', href: '#systems' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Record', href: '#record' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-name">{profile.name}</span>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
