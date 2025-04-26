import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Activity, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export const HomePage: React.FC = () => {
  const { user } = useAuth();
  
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary-500" />,
      title: 'Personalized Therapy',
      description: 'Our VR experiences are tailored to your specific condition and severity level.',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-500" />,
      title: 'Safe Environment',
      description: 'Face your challenges in a controlled, immersive environment from the comfort of home.',
    },
    {
      icon: <Activity className="h-8 w-8 text-primary-500" />,
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed analytics and progress reports.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary-500" />,
      title: 'Achievement System',
      description: 'Earn achievements as you progress through your therapy journey.',
    },
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Virtual Reality Therapy for Mental Wellness
            </h1>
            <p className="text-lg mb-8 text-primary-100">
              Experience breakthrough therapy through immersive VR scenarios designed to help you overcome psychological challenges in a safe, controlled environment.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {user ? (
                <Link to="/disorders">
                  <Button size="lg" className="w-full sm:w-auto">
                    Continue Your Journey
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Start Your Healing Journey
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-primary-700">
                      Sign In
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="VR Therapy Experience" 
              className="rounded-lg shadow-xl max-w-full"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How VRelief Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our innovative approach combines virtual reality technology with evidence-based therapeutic techniques to create a powerful healing experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Mental Health?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-primary-100">
            Join thousands who have already started their healing journey with VRelief's innovative VR therapy platform.
          </p>
          <Link to={user ? "/disorders" : "/signup"}>
            <Button 
              size="lg" 
              variant="secondary"
              className="mx-auto"
            >
              {user ? "Explore Therapy Options" : "Get Started Today"}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};