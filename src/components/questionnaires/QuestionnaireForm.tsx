import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Questionnaire } from '../../types';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { useProgress } from '../../contexts/ProgressContext';
import { useNavigate } from 'react-router-dom';

interface QuestionnaireFormProps {
  questionnaire: Questionnaire;
}

export const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({ questionnaire }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { saveQuestionnaireResults } = useProgress();
  const navigate = useNavigate();
  
  const currentQuestion = questionnaire.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionnaire.questions.length - 1;
  
  const handleOptionSelect = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };
  
  const handleNext = () => {
    if (currentQuestion.id in answers) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const handleSubmit = () => {
    if (currentQuestion.id in answers) {
      setIsSubmitting(true);
      
      // Calculate total score
      const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
      
      // Save results
      saveQuestionnaireResults(questionnaire.disorderId, totalScore);
      
      // Navigate to scenarios
      navigate(`/scenarios/${questionnaire.disorderId}`);
    }
  };
  
  const progress = ((currentQuestionIndex + 1) / questionnaire.questions.length) * 100;
  
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border border-primary-100">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">{questionnaire.title}</h2>
          <p className="text-gray-600 mt-2">{questionnaire.description}</p>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div 
              className="bg-primary-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Question {currentQuestionIndex + 1} of {questionnaire.questions.length}
          </p>
        </CardHeader>
        
        <CardContent>
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">{currentQuestion.text}</h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map(option => (
                <div 
                  key={option.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    answers[currentQuestion.id] === option.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                  onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border ${
                      answers[currentQuestion.id] === option.value
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-gray-300'
                    } flex items-center justify-center mr-3`}>
                      {answers[currentQuestion.id] === option.value && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span>{option.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          {isLastQuestion ? (
            <Button
              onClick={handleSubmit}
              isLoading={isSubmitting}
              disabled={!(currentQuestion.id in answers)}
            >
              Submit
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!(currentQuestion.id in answers)}
            >
              Next
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};