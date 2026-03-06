import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" onClick={closeMenu}>
        &#9670; Jessica Adams
      </NavLink>

      <button
        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        <NavLink
          to="/projects"
          className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
          onClick={closeMenu}
        >
          Projects / Experience
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
          onClick={closeMenu}
        >
          Education / Certifications
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
        <a
          href="/resume.pdf"
          download="Jessica_Adams_Resume.pdf"
          className="nav-resume-btn"
          onClick={closeMenu}
        >
          &#11123; Resume
        </a>
      </div>
    </nav>
  )
}
