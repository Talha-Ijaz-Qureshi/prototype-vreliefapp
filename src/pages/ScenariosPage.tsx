import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Headset as VrHeadset, ArrowRight, X } from 'lucide-react';
import { vrScenarios } from '../data/vrScenarios';
import { ScenarioCard } from '../components/scenarios/ScenarioCard';
import { Button } from '../components/ui/Button';
import { useProgress } from '../contexts/ProgressContext';

export const ScenariosPage: React.FC = () => {
  const { disorderId } = useParams<{ disorderId: string }>();
  const { progress, completeLevel, getDisorderStage } = useProgress();
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  
  if (!progress || !disorderId || progress.disorderId !== disorderId) {
    return <Navigate to="/disorders" />;
  }
  
  const scenarios = vrScenarios.filter(s => s.disorderId === disorderId);
  const stage = getDisorderStage();
  
  const handleStartScenario = (scenarioId: string) => {
    setActiveScenario(scenarioId);
    // Simulate completion after VR session
    setTimeout(() => {
      completeLevel(scenarioId);
    }, 30000); // 30 seconds demo
  };
  
  const handleCloseScenario = () => {
    setActiveScenario(null);
  };

  const handleViewProgress = () => {
    window.location.href = '/progress';
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary-900 flex items-center justify-center">
              <VrHeadset className="h-8 w-8 text-primary-300" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white">VR Therapy Scenarios</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Your assessment indicates {stage} severity. Complete these scenarios in order to progress through your therapy.
          </p>
        </motion.div>
        
        <div className="mb-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <div className="flex items-start">
            <div className="bg-primary-900 p-2 rounded-full mr-4">
              <ArrowRight className="h-5 w-5 text-primary-300" />
            </div>
            <div>
              <h3 className="font-medium text-white">Your VR Therapy Plan</h3>
              <p className="mt-1 text-sm text-gray-400">
                We've designed a custom sequence of VR experiences for your specific needs. 
                Start with Level 1 and work your way up as you build confidence and skills.
              </p>
              <div className="mt-4">
                <Button
                  variant="outline" 
                  size="sm"
                  onClick={handleViewProgress}
                  className="border-primary-500 text-primary-300 hover:bg-primary-900/50"
                >
                  View Progress Details
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.id}
              scenario={{
                ...scenario,
                completed: progress.completedLevels.includes(scenario.level)
              }}
              isLocked={scenario.level > progress.currentLevel}
              onStart={handleStartScenario}
            />
          ))}
        </div>

        <AnimatePresence>
          {activeScenario && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            >
              <div className="relative w-full max-w-4xl mx-4">
                <button
                  onClick={handleCloseScenario}
                  className="absolute -top-12 right-0 text-white hover:text-primary-300"
                >
                  <X className="h-8 w-8" />
                </button>
                
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-gray-800 rounded-lg overflow-hidden"
                >
                  <div className="aspect-video relative">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&modestbranding=1"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Please put on your VR headset
                    </h3>
                    <p className="text-gray-400">
                      Ensure your VR headset is properly fitted and the phone is securely placed inside. 
                      The experience will begin automatically.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};