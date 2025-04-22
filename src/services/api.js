import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',  // Confirme se esta URL está correta
  timeout: 10000,
});

// Interceptor para requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
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

export const authService = {
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      throw new Error(message);
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to create account';
      throw new Error(message);
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};

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
  }
};