import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle'
import './styles.css'

function Header() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <Link to="/" className="logo">
          ✒️ Black Nib
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
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header