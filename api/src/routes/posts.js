import express from 'express';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getFeaturedPosts
} from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/featured', getFeaturedPosts);
router.get('/:id', getPostById);
router.post('/', protect, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

export default router;
