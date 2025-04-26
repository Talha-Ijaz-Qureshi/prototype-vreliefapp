import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, LockKeyhole } from 'lucide-react';
import { VRScenario } from '../../types';
import { Card, CardImage, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';

interface ScenarioCardProps {
  scenario: VRScenario;
  isLocked: boolean;
  onStart: (scenarioId: string) => void;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ 
  scenario, 
  isLocked,
  onStart 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: scenario.level * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-gray-800 border-gray-700">
        <div className="relative">
          <CardImage 
            src={scenario.imageUrl} 
            alt={scenario.title}
            className={isLocked ? 'filter grayscale' : ''}
          />
          <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            Level {scenario.level}
          </div>
          {scenario.completed && (
            <div className="absolute top-3 right-3 bg-success-500 text-white text-xs font-semibold px-2 py-1 rounded-md flex items-center">
              <CheckCircle className="w-3 h-3 mr-1" />
              Completed
            </div>
          )}
        </div>
        
        <CardContent className="flex-grow">
          <h3 className="text-lg font-semibold text-white">{scenario.title}</h3>
          
          <div className="flex items-center text-gray-400 text-sm mt-2">
            <Clock className="w-4 h-4 mr-1" />
            <span>{scenario.duration} minutes</span>
          </div>
          
          <p className="mt-3 text-sm text-gray-400">{scenario.description}</p>
        </CardContent>
        
        <CardFooter className="bg-gray-900/50">
          {isLocked ? (
            <Button 
              variant="outline" 
              fullWidth
              disabled
              className="flex items-center justify-center border-gray-600 text-gray-400"
            >
              <LockKeyhole className="w-4 h-4 mr-2" />
              Locked
            </Button>
          ) : (
            <Button
              fullWidth
              onClick={() => onStart(scenario.id)}
              disabled={scenario.completed}
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              {scenario.completed ? 'Completed' : 'Start Scenario'}
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};