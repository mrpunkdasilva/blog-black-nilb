import './styles.css';

export function PostSkeleton() {
  return (
    <div className="post-skeleton">
      <div className="skeleton-title"></div>
      <div className="skeleton-meta">
        <div className="skeleton-author"></div>
        <div className="skeleton-date"></div>
      </div>
      <div className="skeleton-content">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export function PostGridSkeleton({ count = 6 }) {
  return (
    <div className="posts-grid">
      {Array(count).fill(0).map((_, i) => (
        <PostSkeleton key={i} />
      ))}
    </div>
  );
}