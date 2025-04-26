import React from 'react';
import { motion } from 'framer-motion';
import { LineChart as ChartLineUp, Bookmark } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { ProgressChart } from '../components/progress/ProgressChart';
import { AchievementCard } from '../components/progress/AchievementCard';
import { Card, CardContent } from '../components/ui/Card';
import { disorders } from '../data/disorders';
import { Navigate } from 'react-router-dom';

export const ProgressPage: React.FC = () => {
  const { progress, currentDisorder, getDisorderStage } = useProgress();
  
  if (!progress) {
    return <Navigate to="/disorders" />;
  }

  const stage = getDisorderStage();
  const disorder = disorders.find(d => d.id === progress.disorderId);
  
  // Mock data for the progress chart
  const mockProgressData = [
    { date: 'Week 1', score: 12 },
    { date: 'Week 2', score: 10 },
    { date: 'Week 3', score: 8 },
    { date: 'Week 4', score: 9 },
    { date: 'Week 5', score: 7 },
    { date: 'Week 6', score: 5 },
  ];
  
  const achievements = [
    {
      title: 'First Step',
      description: 'Completed your first VR therapy session',
      icon: 'trophy',
      unlocked: progress.completedLevels.length > 0,
    },
    {
      title: 'Consistent Progress',
      description: 'Completed 3 consecutive therapy sessions',
      icon: 'star',
      unlocked: progress.completedLevels.length >= 3,
    },
    {
      title: 'Halfway There',
      description: 'Reached the halfway point in your therapy program',
      icon: 'clock',
      unlocked: progress.completedLevels.length >= 2,
    },
  ];
  
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
            <ChartLineUp className="h-8 w-8 text-primary-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Your Therapy Progress</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Track your journey to better mental health and see how far you've come.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Current Disorder</h3>
            <p className="text-2xl font-bold text-primary-600">{disorder?.name || 'None'}</p>
            <p className="text-gray-600 mt-1">Severity: {stage || 'Unknown'}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Sessions Completed</h3>
            <p className="text-2xl font-bold text-primary-600">{progress.completedLevels.length}</p>
            <p className="text-gray-600 mt-1">Keep going!</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Current Level</h3>
            <p className="text-2xl font-bold text-primary-600">{progress.currentLevel}</p>
            <p className="text-gray-600 mt-1">Building your skills</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8">
        <div className="lg:col-span-2">
          <ProgressChart data={mockProgressData} />
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Bookmark className="h-5 w-5 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold">Therapy Stats</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Start Date</p>
                <p className="font-medium">{new Date(progress.startDate).toLocaleDateString()}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Last Session</p>
                <p className="font-medium">
                  {progress.lastSessionDate 
                    ? new Date(progress.lastSessionDate).toLocaleDateString() 
                    : 'No sessions yet'}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Improvement</p>
                <div className="mt-1 bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-success-500 h-2.5 rounded-full" 
                    style={{ width: `${(progress.completedLevels.length / 3) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Based on completed levels</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Achievements</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            description={achievement.description}
            icon={achievement.icon}
            unlocked={achievement.unlocked}
          />
        ))}
      </div>
    </div>
  );
};