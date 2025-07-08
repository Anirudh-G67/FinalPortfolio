import React from 'react';
import { Menu, X, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useAmbientLight } from '../hooks/useAmbientLight';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const { ambientColor, setAmbientColor, ambientColors } = useAmbientLight();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] animate-pulse">
            Anirudh Goel
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-teal-700 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-sm lg:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-teal-700 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-sm lg:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-teal-700 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-sm lg:text-base"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-teal-700 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-sm lg:text-base"
            >
              Contact
            </button>
          </nav>

          {/* Theme Controls */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {/* Ambient Light Selector */}
            <div className="relative group">
              <button className="p-2 rounded-full bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-900/30 dark:via-cyan-900/30 dark:to-blue-900/30 hover:from-teal-200 hover:via-cyan-200 hover:to-blue-200 dark:hover:from-teal-900/50 dark:hover:via-cyan-900/50 dark:hover:to-blue-900/50 transition-colors">
                <Palette className="w-4 h-4 text-teal-700 dark:text-teal-300" />
              </button>
              <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="flex space-x-2">
                  {ambientColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setAmbientColor(color.name)}
                      className={`w-6 h-6 rounded-full border-2 ${
                        ambientColor === color.name
                          ? 'border-white dark:border-gray-200 scale-110'
                          : 'border-gray-300 dark:border-gray-600'
                      } transition-all duration-200`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-900/30 dark:via-cyan-900/30 dark:to-blue-900/30 hover:from-teal-200 hover:via-cyan-200 hover:to-blue-200 dark:hover:from-teal-900/50 dark:hover:via-cyan-900/50 dark:hover:to-blue-900/50 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-teal-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-teal-700 dark:text-teal-300" />
            ) : (
              <Menu className="w-6 h-6 text-teal-700 dark:text-teal-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-teal-700 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-base"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-teal-700 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-base"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-teal-700 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-base"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-teal-700 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-base"
              >
                Contact
              </button>
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-900/30 dark:via-cyan-900/30 dark:to-blue-900/30 hover:from-teal-200 hover:via-cyan-200 hover:to-blue-200 dark:hover:from-teal-900/50 dark:hover:via-cyan-900/50 dark:hover:to-blue-900/50 transition-colors"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-yellow-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-teal-700" />
                  )}
                </button>
                <div className="flex space-x-2">
                  {ambientColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setAmbientColor(color.name)}
                      className={`w-6 h-6 rounded-full border-2 ${
                        ambientColor === color.name
                          ? 'border-white dark:border-gray-200 scale-110'
                          : 'border-gray-300 dark:border-gray-600'
                      } transition-all duration-200`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};