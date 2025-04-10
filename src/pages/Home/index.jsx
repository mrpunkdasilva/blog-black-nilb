import { Link } from 'react-router-dom'
import './styles.css'

function Home() {
  // Dados simulados para featured posts
  const featuredPosts = [
    {
      id: 1,
      title: "The Art of Minimal Design",
      excerpt: "Exploring the principles of minimalism in modern web design",
      date: "2024-03-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Sustainable Software",
      excerpt: "How to create maintainable and environmentally conscious applications",
      date: "2024-03-12",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Typography in Web Design",
      excerpt: "The impact of font choices on user experience and readability",
      date: "2024-03-10",
      readTime: "6 min read"
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <h1>Black Nib</h1>
        <p className="subtitle">Thoughts on technology, design, and modern development</p>
      </section>

      <section className="featured-posts">
        <h2>Latest Writing</h2>
        <div className="posts-list">
          {featuredPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
              <h3>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <Link to={`/post/${post.id}`} className="read-more">
                Read more →
              </Link>
            </article>
          ))}
        </div>
        
        <div className="view-all">
          <Link to="/posts" className="view-all-link">
            View all posts →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home