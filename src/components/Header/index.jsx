import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../../services/api'
import ThemeToggle from '../ThemeToggle'
import './styles.css'

function Header() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  const handleLogout = () => {
    authService.logout()
    navigate('/')
  }

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          ✒️ Black Nib
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/posts" className="nav-link">
            Writing
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          {user ? (
            <>
              <span className="username">@{user.username}</span>
              <button onClick={handleLogout} className="auth-nav-button">
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="auth-nav-button">
              Login
            </Link>
          )}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header