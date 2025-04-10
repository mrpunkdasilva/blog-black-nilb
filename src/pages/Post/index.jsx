import { useParams } from 'react-router-dom'
import './styles.css'

function Post() {
  const { id } = useParams()
  
  // Simulando dados do post
  const post = {
    id: parseInt(id),
    title: "The Art of Minimal Design",
    content: `
      <p>Minimalism in design is more than just aesthetics—it's a principle that focuses on the essential. When we strip away the unnecessary, we're left with what truly matters: clear communication and purposeful interaction.</p>

      <h2>The Core Principles</h2>
      <p>At its heart, minimal design embraces:</p>
      <ul>
        <li>Simplicity in form and function</li>
        <li>Purposeful use of white space</li>
        <li>Clear visual hierarchy</li>
        <li>Thoughtful typography choices</li>
      </ul>

      <h2>Practical Applications</h2>
      <p>In modern web design, minimalism helps create interfaces that are both beautiful and functional. By reducing visual noise, we help users focus on what's important.</p>

      <blockquote>
        "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry
      </blockquote>

      <h2>Impact on User Experience</h2>
      <p>When implemented correctly, minimal design can significantly improve:</p>
      <ul>
        <li>Page load times</li>
        <li>User comprehension</li>
        <li>Navigation efficiency</li>
        <li>Overall satisfaction</li>
      </ul>
    `,
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Design",
    author: "Mr Punk da Silva"
  }

  return (
    <article className="post">
      <header className="post-header">
        <span className="category-tag">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="post-author">By {post.author}</span>
          <span className="post-date">{post.date}</span>
          <span className="post-read-time">{post.readTime}</span>
        </div>
      </header>

      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}

export default Post