export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Disorder {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    value: number;
  }[];
}

export interface Questionnaire {
  disorderId: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface VRScenario {
  id: string;
  disorderId: string;
  level: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: number; // in minutes
  completed: boolean;
}

export interface Progress {
  userId: string;
  disorderId: string;
  currentLevel: number;
  questionnaireTaken: boolean;
  questionnaireSeverityScore?: number;
  completedLevels: number[];
  startDate: Date;
  lastSessionDate?: Date;
  improvementScore?: number;
}

export type DisorderStage = 'Mild' | 'Moderate' | 'Severe';

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated';