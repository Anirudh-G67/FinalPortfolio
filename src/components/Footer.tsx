import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anirudh-goel-b71265371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: 'mailto:ani.rushu3023@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              © {currentYear} Anirudh Goel. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">
              Made with <Heart className="inline w-3 h-3 text-red-500" /> using React & TypeScript
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600 group"
                title={link.name}
              >
                <div className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-2">
                Location
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                India
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-2">
                Available For
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                Full-time opportunities
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-2">
                Specialization
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                Machine Learning & AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};