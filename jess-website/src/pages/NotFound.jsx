import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="pixel-card notfound-card">
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-msg">Looks like this level doesn&#39;t exist.</p>
        <Link to="/" className="pixel-btn orange">
          &#9664; Back to Home
        </Link>
      </div>
    </div>
  )
}
