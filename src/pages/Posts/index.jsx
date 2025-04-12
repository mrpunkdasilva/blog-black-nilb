import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { postService } from '../../services/api';
import { PostGridSkeleton } from '../../components/Skeleton';
import ErrorMessage from '../../components/ErrorMessage';
import './styles.css';

function Posts() {
  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: postService.getAllPosts,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading) return <PostGridSkeleton />;
  if (error) return <ErrorMessage message="Failed to load posts" />;

  return (
    <div className="posts">
      <h1>All Posts</h1>
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
    </div>
  );
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