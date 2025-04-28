import React from 'react';
import { Link } from 'react-router-dom';
import { SignupForm } from '../components/auth/SignupForm';
import vrfavicon from '../assets/vrfavicon.png';
export const SignupPage: React.FC = () => {
  return (
    <div className="max-h-screen bg-gradient-to-b from-[#000] to-[#7925ad] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mt-4">
        <div>
          <img src={vrfavicon} alt="Logo" style={{ width: 100, height: 100 }} />
        </div>
        </div>
        
        <h2 className="mt-6 text-center text-4xl font-bold text-white">
          Welcome to VRelief
        </h2>
        <p style={{ lineHeight: 1.1}} className="mt-4 text-center text-lg text-primary-100 max-w-md mx-auto">
          Experience breakthrough therapy through immersive VR scenarios designed to help you overcome psychological challenges.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow-xl rounded-[1.75em] sm:py-8 sm:px-10">
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
