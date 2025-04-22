import Post from '../models/Post.js';

export const getFeaturedPosts = async (req, res) => {
  try {
    const posts = await Post.find({ featured: true })
      .sort({ createdAt: -1 })
      .limit(6);
    
    if (!posts) {
      return res.json([]);
    }
    
    res.json(posts);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    res.json([]);
  }
};

export const getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 9;
    const skip = (page - 1) * limit;

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Post.countDocuments();
    const hasNextPage = total > skip + posts.length;

    res.json({
      posts,
      nextPage: hasNextPage ? page + 1 : null
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ message: 'Error fetching post' });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, excerpt, author, category, readTime, featured } = req.body;

    const post = await Post.create({
      title,
      content,
      excerpt,
      author,
      category,
      readTime,
      featured: featured || false
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Error creating post' });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ message: 'Error updating post' });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Error deleting post' });
  }
};