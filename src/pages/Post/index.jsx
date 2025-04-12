import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { postService } from '../../services/api';
import { PostSkeleton } from '../../components/Skeleton';
import ErrorMessage from '../../components/ErrorMessage';
import './styles.css';

function Post() {
  const { id } = useParams();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['post', id],
    queryFn: () => postService.getPostById(id),
  });

  if (isLoading) return <PostSkeleton />;
  if (error) return <ErrorMessage message="Failed to load post" />;

  return (
    <article className="post">
      <header className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="post-author">By {post.author}</span>
          <span className="post-date">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <div className="meta-group">
            <span className="category-tag">{post.category}</span>
            <span className="post-read-time">{post.readTime}</span>
          </div>
        </div>
      </header>

      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

export default Post;