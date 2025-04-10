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
      readTime: "5 min read",
      category: "Design"
    },
    {
      id: 2,
      title: "Building Sustainable Software",
      excerpt: "How to create maintainable and environmentally conscious applications",
      date: "2024-03-12",
      readTime: "8 min read",
      category: "Development"
    },
    {
      id: 3,
      title: "Typography in Web Design",
      excerpt: "The impact of font choices on user experience and readability",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Design"
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
            <PostCard key={post.id} post={post} />
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

function PostCard({ post }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = -(x - centerX) / 20;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(10px)
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'none';
  };

  return (
    <article 
      className="post-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="category-tag">{post.category}</span>
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
  );
}

export default Home