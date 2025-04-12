import express from 'express';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getFeaturedPosts
} from '../controllers/postController.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/featured', getFeaturedPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;