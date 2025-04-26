import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { signup, authStatus } = useAuth();
  const navigate = useNavigate();
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    try {
      await signup(name, email, password);
      navigate('/disorders');
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ form: 'Failed to create account. Please try again.' });
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
        label="Full Name"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your full name"
        fullWidth
        error={errors.name}
      />
      
      <Input 
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        fullWidth
        error={errors.email}
      />
      
      <Input 
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Create a password"
        fullWidth
        error={errors.password}
      />
      
      <Input 
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
        fullWidth
        error={errors.confirmPassword}
      />
      
      <Button 
        type="submit" 
        fullWidth 
        isLoading={authStatus === 'loading'}
      >
        Create Account
      </Button>
    </form>
  );
};