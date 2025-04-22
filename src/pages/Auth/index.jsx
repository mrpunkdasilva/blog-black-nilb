import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../../services/api';
import toast from 'react-hot-toast';
import './styles.css';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const { mutate: register, isPending: isRegisterPending } = useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      toast.success('Account created successfully!');
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const { mutate: login, isPending: isLoginPending } = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      toast.success('Welcome back!');
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validações básicas
    if (!formData.username || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!isLogin && formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    if (isLogin) {
      login(formData);
    } else {
      register(formData);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isPending = isLoginPending || isRegisterPending;

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="username"
              disabled={isPending}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete={isLogin ? "current-password" : "new-password"}
              disabled={isPending}
            />
          </div>

          <button 
            type="submit" 
            className="auth-button"
            disabled={isPending}
          >
            {isPending ? 'Loading...' : (isLogin ? 'Login' : 'Create Account')}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="switch-button"
            disabled={isPending}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;