import React from 'react';
import { motion } from 'framer-motion';
import { Disorder } from '../../types';
import { Card, CardImage, CardContent } from '../ui/Card';

interface DisorderCardProps {
  disorder: Disorder;
  onClick: (disorder: Disorder) => void;
}

export const DisorderCard: React.FC<DisorderCardProps> = ({ disorder, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <Card 
        hoverable 
        className="h-full flex flex-col" 
        onClick={() => onClick(disorder)}
      >
        <CardImage 
          src={disorder.imageUrl} 
          alt={disorder.name}
        />
        <CardContent className="flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{disorder.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{disorder.description}</p>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
              Learn More
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};