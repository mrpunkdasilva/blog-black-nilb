import { Link, useLocation } from 'react-router-dom'
import './styles.css'

function Header() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          Black Nib
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
          <Link to="/posts" className={isActive('/posts')}>
            Writing
          </Link>
          <Link to="/about" className={isActive('/about')}>
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header