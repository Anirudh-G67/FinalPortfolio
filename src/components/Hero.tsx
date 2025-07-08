import React, { useState } from 'react';
import { Download, Github, Linkedin, Mail, MapPin, Phone, Edit3 } from 'lucide-react';
import { NeuButton } from './NeuButton';

export const Hero: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Anirudh Goel');
  const [role, setRole] = useState('Machine Learning Engineer');
  const [specialization, setSpecialization] = useState('Learning Recommender Systems');
  const [description, setDescription] = useState(
    'Passionate about building intelligent systems that learn and adapt. Specializing in recommender systems and machine learning applications that create meaningful user experiences.'
  );

  const handleDownloadResume = () => {
    // Placeholder for resume download
    alert('Resume download will be implemented when you upload your resume!');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-transparent border-b-2 border-[#33ffda] focus:outline-none text-gray-900 dark:text-white w-full"
                    onBlur={() => setIsEditing(false)}
                    autoFocus
                  />
                ) : (
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse">
                    {name}
                  </h1>
                )}
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
                >
                  <Edit3 className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                  {role}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  {specialization}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#33ffda] flex-shrink-0" />
                <a 
                  href="mailto:ani.rushu3023@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#33ffda] transition-colors text-sm sm:text-base truncate"
                >
                  ani.rushu3023@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#33ffda] flex-shrink-0" />
                <a 
                  href="tel:+919306532383"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#33ffda] transition-colors text-sm sm:text-base"
                >
                  +91 93065 32383
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#33ffda] flex-shrink-0" />
                <a 
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#33ffda] transition-colors text-sm sm:text-base"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#33ffda] flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  India
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <NeuButton
                onClick={handleDownloadResume}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white border-none hover:scale-105 w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </NeuButton>
              <NeuButton
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </NeuButton>
            </div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#33ffda] to-[#33f0ff] p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-neu-inset">
                  <div className="text-4xl sm:text-6xl font-bold text-gray-400 dark:text-gray-500">
                    AG
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#33ffda] to-[#33f0ff] shadow-neu animate-bounce-slow flex items-center justify-center">
                <Github className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#33f0ff] to-[#33ffda] shadow-neu animate-bounce-slow delay-1000 flex items-center justify-center">
                <Linkedin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};