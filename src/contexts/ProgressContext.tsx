import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Progress, Disorder, DisorderStage } from '../types';
import { useAuth } from './AuthContext';

interface ProgressContextType {
  progress: Progress | null;
  currentDisorder: Disorder | null;
  setCurrentDisorder: (disorder: Disorder | null) => void;
  saveQuestionnaireResults: (disorderId: string, score: number) => void;
  completeLevel: (levelId: string) => void;
  getDisorderStage: () => DisorderStage | null;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Progress | null>(null);
  const [currentDisorder, setCurrentDisorder] = useState<Disorder | null>(null);

  useEffect(() => {
    // Reset progress when user changes
    if (!user) {
      setProgress(null);
      setCurrentDisorder(null);
    }
  }, [user]);

  const saveQuestionnaireResults = (disorderId: string, score: number) => {
    if (!user) return;

    const newProgress: Progress = {
      userId: user.id,
      disorderId,
      currentLevel: 1,
      questionnaireTaken: true,
      questionnaireSeverityScore: score,
      completedLevels: [],
      startDate: new Date(),
      lastSessionDate: new Date(),
    };

    setProgress(newProgress);
  };

  const completeLevel = (levelId: string) => {
    if (!progress || !user) return;

    const levelNumber = parseInt(levelId.split('_level')[1], 10);
    
    if (!progress.completedLevels.includes(levelNumber)) {
      const updatedProgress = {
        ...progress,
        completedLevels: [...progress.completedLevels, levelNumber],
        currentLevel: Math.max(progress.currentLevel, levelNumber + 1),
        lastSessionDate: new Date(),
      };
      
      setProgress(updatedProgress);
    }
  };

  const getDisorderStage = (): DisorderStage | null => {
    if (!progress || progress.questionnaireSeverityScore === undefined) return null;
    
    const score = progress.questionnaireSeverityScore;
    
    if (score < 5) return 'Mild';
    if (score < 10) return 'Moderate';
    return 'Severe';
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        progress, 
        currentDisorder, 
        setCurrentDisorder, 
        saveQuestionnaireResults, 
        completeLevel,
        getDisorderStage
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}