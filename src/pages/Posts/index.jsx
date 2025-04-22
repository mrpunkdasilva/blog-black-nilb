import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../../services/api';
import { PostGridSkeleton } from '../../components/Skeleton';
import './styles.css';

function PostCard({ post }) {
  return (
    <article className="post-card">
      <span className="category-tag">{post.category}</span>
      <div className="post-meta">
        <span className="post-date">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
        <span className="post-read-time">{post.readTime}</span>
      </div>
      <h3>
        <Link to={`/post/${post._id}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <Link to={`/post/${post._id}`} className="read-more">
        Read more →
      </Link>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="empty-state">
      <h3>Welcome to Our Writing Collection</h3>
      <p>Stay tuned for upcoming articles about technology and design.</p>
    </div>
  );
}

function Posts() {
  const { ref, inView } = useInView();
  const user = JSON.parse(localStorage.getItem('user'));

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: postService.getAllPosts,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    retry: false,
    useErrorBoundary: false
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading) return <PostGridSkeleton />;

  const hasPosts = data?.pages[0]?.posts?.length > 0;

  return (
    <div className="posts">
      <div className="posts-header">
        <h1>All Posts</h1>
        {user && (
          <Link to="/create-post" className="create-post-button">
            Create Post
          </Link>
        )}
      </div>
      
      {hasPosts ? (
        <>
          <div className="posts-grid">
            {data.pages.map((page) =>
              page.posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))
            )}
          </div>
          
          <div ref={ref} style={{ height: '20px' }}>
            {isFetchingNextPage && <PostGridSkeleton count={3} />}
          </div>
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default Posts;