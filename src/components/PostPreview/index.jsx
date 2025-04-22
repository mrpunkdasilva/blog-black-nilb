import './styles.css';

function PostPreview({ post }) {
  if (!post.title && !post.content) {
    return (
      <div className="post-preview empty">
        <p>Post preview will appear here...</p>
      </div>
    );
  }

  return (
    <div className="post-preview">
      <span className="category-tag">{post.category}</span>
      <h1>{post.title}</h1>
      
      <div className="post-meta">
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.readTime} min read</span>
      </div>

      <div className="post-excerpt">{post.excerpt}</div>
      
      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}

export default PostPreview;