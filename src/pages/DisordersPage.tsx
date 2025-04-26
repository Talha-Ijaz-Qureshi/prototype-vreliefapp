import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { disorders } from '../data/disorders';
import { DisorderCard } from '../components/disorders/DisorderCard';
import { useProgress } from '../contexts/ProgressContext';
import { Disorder } from '../types';

export const DisordersPage: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentDisorder } = useProgress();
  
  const handleDisorderSelect = (disorder: Disorder) => {
    setCurrentDisorder(disorder);
    navigate(`/questionnaire/${disorder.id}`);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-900">Select Your Focus Area</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose a psychological condition you'd like to work on. We'll tailor a VR therapy program specifically for your needs.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {disorders.map((disorder) => (
          <DisorderCard
            key={disorder.id}
            disorder={disorder}
            onClick={handleDisorderSelect}
          />
        ))}
      </div>
    </div>
  );
};