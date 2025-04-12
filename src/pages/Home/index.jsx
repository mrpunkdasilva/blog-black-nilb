import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { postService } from '../../services/api';
import { PostGridSkeleton } from '../../components/Skeleton';
import ErrorMessage from '../../components/ErrorMessage';
import './styles.css';

function Home() {
  const { data: featuredPosts, isLoading, error } = useQuery({
    queryKey: ['featuredPosts'],
    queryFn: postService.getFeaturedPosts,
  });

  if (isLoading) return <PostGridSkeleton count={3} />;
  if (error) return <ErrorMessage message="Failed to load featured posts" />;

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
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        
        <div className="view-all">
          <Link to="/posts" className="view-all-link">
            View all posts →
          </Link>
        </div>
      </section>
    </div>
  );
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