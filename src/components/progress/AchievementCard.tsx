import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Clock } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: 'trophy' | 'star' | 'clock';
  unlocked: boolean;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ 
  title, 
  description, 
  icon, 
  unlocked 
}) => {
  const icons = {
    trophy: Trophy,
    star: Star,
    clock: Clock,
  };
  
  const Icon = icons[icon];
  
  return (
    <motion.div
      whileHover={{ translateY: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`border ${unlocked ? 'border-primary-200' : 'border-gray-200'}`}>
        <CardContent className="flex items-center p-4">
          <div 
            className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
              unlocked 
                ? 'bg-primary-100 text-primary-600' 
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`font-medium ${unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
              {title}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
            <div className="mt-1">
              <span 
                className={`text-xs px-2 py-0.5 rounded-full ${
                  unlocked 
                    ? 'bg-success-100 text-success-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {unlocked ? 'Unlocked' : 'Locked'}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};