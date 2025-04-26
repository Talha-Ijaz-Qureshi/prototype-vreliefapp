import { createContext, useState, useContext, ReactNode } from 'react';
import { User, AuthStatus } from '../types';

interface AuthContextType {
  user: User | null;
  authStatus: AuthStatus;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('idle');

  // In a real app, these would connect to a backend
  const login = async (email: string, password: string) => {
    setAuthStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful login
    setUser({
      id: '1',
      name: 'Test User',
      email,
    });
    
    setAuthStatus('authenticated');
  };

  const signup = async (name: string, email: string, password: string) => {
    setAuthStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful signup
    setUser({
      id: '1',
      name,
      email,
    });
    
    setAuthStatus('authenticated');
  };

  const logout = () => {
    setUser(null);
    setAuthStatus('unauthenticated');
  };

  return (
    <AuthContext.Provider value={{ user, authStatus, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}