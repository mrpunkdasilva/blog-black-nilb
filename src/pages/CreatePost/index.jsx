import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { postService } from '../../services/api';
import PostEditor from '../../components/Editor';
import './styles.css';

function CreatePost() {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: '',
    excerpt: '',
    author: '',
    category: '',
    readTime: '',
    content: '',
    featured: false
  });

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: postService.createPost,
    onSuccess: (data) => {
      navigate(`/post/${data._id}`);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create post');
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPostData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleContentChange = (content) => {
    setPostData(prev => ({ ...prev, content }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!postData.title || !postData.content || !postData.excerpt) {
      toast.error('Please fill in all required fields');
      return;
    }

    createPost(postData);
  };

  return (
    <div className="create-post">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
            required
            disabled={isPending}
          />
        </div>

        <div className="form-group">
          <label htmlFor="excerpt">Excerpt *</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={postData.excerpt}
            onChange={handleInputChange}
            rows="3"
            required
            disabled={isPending}
            placeholder="A brief summary of your post"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="author">Author *</label>
            <input
              type="text"
              id="author"
              name="author"
              value={postData.author}
              onChange={handleInputChange}
              required
              disabled={isPending}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={postData.category}
              onChange={handleInputChange}
              required
              disabled={isPending}
            >
              <option value="">Select a category</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Technology">Technology</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="readTime">Read Time *</label>
            <input
              type="text"
              id="readTime"
              name="readTime"
              value={postData.readTime}
              onChange={handleInputChange}
              required
              disabled={isPending}
              placeholder="e.g., 5 min"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="content">Content *</label>
          <PostEditor
            onChange={handleContentChange}
            initialValue={postData.content}
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="featured"
              checked={postData.featured}
              onChange={handleInputChange}
              disabled={isPending}
            />
            Feature this post
          </label>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate('/posts')}
            className="button secondary"
            disabled={isPending}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="button primary"
            disabled={isPending}
          >
            {isPending ? 'Creating...' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;