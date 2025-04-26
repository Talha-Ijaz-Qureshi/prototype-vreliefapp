import React from 'react';
import { Brain } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-primary-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Brain className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">VRelief</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {user && (
              <>
                <Link to="/disorders" className="text-primary-100 hover:text-white transition-colors">
                  Disorders
                </Link>
                <Link to="/progress" className="text-primary-100 hover:text-white transition-colors">
                  My Progress
                </Link>
                <Link to="/scenarios" className="text-primary-100 hover:text-white transition-colors">
                  VR Therapy
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-white hidden md:inline">Hello, {user.name}</span>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-primary-700"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-primary-700"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};