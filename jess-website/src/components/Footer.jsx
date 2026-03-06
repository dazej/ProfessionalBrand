import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-name">&#9670; Jessica Adams</p>
      <div className="footer-links">
        <a href="https://github.com/dazej" target="_blank" rel="noopener noreferrer" className="footer-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jessicaadams555" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="mailto:jessicawellsadams@gmail.com" className="footer-link">
          Email
        </a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Jessica Adams</p>
    </footer>
  )
}
