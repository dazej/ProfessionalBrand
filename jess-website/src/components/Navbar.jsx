import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        &#9670; Jessica Adams
      </NavLink>
      <div className="nav-links">
        <NavLink
          to="/projects"
          className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
        >
          Projects / Experience
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
        >
          Education / Certifications
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}
