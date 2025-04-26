import React from 'react';
import { Brain, Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Brain className="h-6 w-6" />
              <span className="ml-2 text-xl font-bold text-white">VRelief</span>
            </div>
            <p className="mt-2 text-sm">
              Innovative VR therapy solutions for mental wellness. Take control of your mental health journey through immersive, guided experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-primary-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/disorders" className="text-primary-300 hover:text-white transition-colors">
                  Disorders
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-primary-300 hover:text-white transition-colors">
                  My Progress
                </Link>
              </li>
              <li>
                <Link to="/scenarios" className="text-primary-300 hover:text-white transition-colors">
                  VR Therapy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@vrelief.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} VRelief. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-error-500" /> for better mental health
          </p>
        </div>
      </div>
    </footer>
  );
};