import { Link } from 'react-router-dom'
import './styles.css'

function Posts() {
  // Dados simulados para todos os posts
  const allPosts = [
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
    },
    {
      id: 4,
      title: "The Future of React",
      excerpt: "Exploring upcoming features and trends in React development",
      date: "2024-03-08",
      readTime: "7 min read",
      category: "Development"
    },
    {
      id: 5,
      title: "CSS Grid Mastery",
      excerpt: "Advanced techniques for creating complex layouts with CSS Grid",
      date: "2024-03-05",
      readTime: "10 min read",
      category: "Development"
    },
    {
      id: 6,
      title: "UX Writing Guidelines",
      excerpt: "Best practices for writing user-friendly interface copy",
      date: "2024-03-03",
      readTime: "4 min read",
      category: "Design"
    }
  ]

  return (
    <div className="posts">
      <h1>All Posts</h1>
      
      <div className="posts-grid">
        {allPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

function PostCard({ post }) {
  return (
    <article className="post-card">
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
  )
}

export default Posts