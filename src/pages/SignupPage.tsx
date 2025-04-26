import React from 'react';
import { Link } from 'react-router-dom';
import { SignupForm } from '../components/auth/SignupForm';
import { Brain } from 'lucide-react';

export const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Brain className="h-16 w-16 text-white" />
        </div>
        <h2 className="mt-6 text-center text-4xl font-bold text-white">
          Welcome to VRelief
        </h2>
        <p className="mt-4 text-center text-lg text-primary-100 max-w-md mx-auto">
          Experience breakthrough therapy through immersive VR scenarios designed to help you overcome psychological challenges.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          <SignupForm />
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Sign in to your account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};