import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';
import { questionnaires } from '../data/questionnaires';
import { QuestionnaireForm } from '../components/questionnaires/QuestionnaireForm';

export const QuestionnairePage: React.FC = () => {
  const { disorderId } = useParams<{ disorderId: string }>();
  
  const questionnaire = questionnaires.find(q => q.disorderId === disorderId);
  
  if (!questionnaire) {
    return <Navigate to="/disorders" />;
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
            <ClipboardList className="h-8 w-8 text-primary-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Assessment Questionnaire</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Please answer the following questions honestly to help us determine the best VR therapy path for you.
        </p>
      </motion.div>
      
      <QuestionnaireForm questionnaire={questionnaire} />
    </div>
  );
};