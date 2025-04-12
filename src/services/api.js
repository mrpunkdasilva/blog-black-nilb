import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});

// Interceptor para requisições
api.interceptors.request.use(
  (config) => {
    // Aqui você pode adicionar headers, tokens etc
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para respostas
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    toast.error(message);
    return Promise.reject(error);
  }
);

export const postService = {
  getAllPosts: async ({ pageParam = 1 }) => {
    const response = await api.get(`/posts?page=${pageParam}`);
    return response.data;
  },

  getFeaturedPosts: async () => {
    const response = await api.get('/posts/featured');
    return response.data;
  },

  getPostById: async (id) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  createPost: async (postData) => {
    const response = await api.post('/posts', postData);
    toast.success('Post created successfully!');
    return response.data;
  },

  updatePost: async ({ id, data }) => {
    const response = await api.put(`/posts/${id}`, data);
    toast.success('Post updated successfully!');
    return response.data;
  },

  deletePost: async (id) => {
    const response = await api.delete(`/posts/${id}`);
    toast.success('Post deleted successfully!');
    return response.data;
  }
};