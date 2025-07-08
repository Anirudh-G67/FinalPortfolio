import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 sm:py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] mb-4">
              Anirudh Goel
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              Machine Learning Engineer passionate about building intelligent systems 
              that learn and adapt. Specialized in recommendation systems and creating 
              meaningful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#33ffda] transition-colors text-xs sm:text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#33ffda] transition-colors text-xs sm:text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#33ffda] transition-colors text-xs sm:text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#33ffda] transition-colors text-xs sm:text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                ani.rushu3023@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                +91 93065 32383
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              <span>and</span>
              <Code className="w-3 h-3 sm:w-4 sm:h-4 text-[#33ffda]" />
              <span>by Anirudh</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              <span>Powered by</span>
              <Coffee className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
              <span>& determination</span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm">
              © 2024 Anirudh Goel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};