import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { DisordersPage } from './pages/DisordersPage';
import { QuestionnairePage } from './pages/QuestionnairePage';
import { ScenariosPage } from './pages/ScenariosPage';
import { ProgressPage } from './pages/ProgressPage';

// Protected route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, authStatus } = useAuth();
  
  if (authStatus === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/" />;
  }
  
  return <>{children}</>;
};

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/disorders" /> : <SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/disorders" 
              element={
                <ProtectedRoute>
                  <DisordersPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/questionnaire/:disorderId" 
              element={
                <ProtectedRoute>
                  <QuestionnairePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/scenarios/:disorderId" 
              element={
                <ProtectedRoute>
                  <ScenariosPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/progress" 
              element={
                <ProtectedRoute>
                  <ProgressPage />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppRoutes />
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;