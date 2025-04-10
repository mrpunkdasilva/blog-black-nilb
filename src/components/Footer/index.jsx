import './styles.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Black Nib. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://twitter.com/blacknib" target="_blank" rel="noopener">Twitter</a>
          <a href="https://github.com/blacknib" target="_blank" rel="noopener">GitHub</a>
          <a href="/rss.xml">RSS</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer