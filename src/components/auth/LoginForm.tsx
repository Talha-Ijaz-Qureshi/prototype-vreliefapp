import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { login, authStatus } = useAuth();
  const navigate = useNavigate();
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    try {
      await login(email, password);
      navigate('/disorders');
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ form: 'Invalid email or password' });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      {errors.form && (
        <div className="bg-error-100 text-error-800 p-3 rounded-md">
          {errors.form}
        </div>
      )}
      
      <Input 
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className='w-full'

        error={errors.email}
      />
      
      <Input 
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className='w-full'

        error={errors.password}
      />
      
      <Button 
        type="submit" 
        fullWidth 
        isLoading={authStatus === 'loading'}
      >
        Sign In
      </Button>
    </form>
  );
};