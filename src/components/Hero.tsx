import React, { useState } from 'react';
import { Download, Github, Linkedin, Mail, MapPin, Phone, Edit3 } from 'lucide-react';
import { NeuButton } from './NeuButton';
import { CursorTrail } from './CursorTrail';

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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 pt-36 sm:pt-20 bg-[#f5f7fa]">
      <CursorTrail />
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h1 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#f472b6] dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(37,99,235,0.18)] dark:drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] animate-pulse"
                >
                  {name}
                </h1>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(37,99,235,0.12)] dark:drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]">
                  {role}
                </h2>
                <p className="text-base sm:text-lg text-[#334155] dark:text-gray-300">
                  {specialization}
                </p>
              </div>

              <p className="text-[#334155] dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb] dark:text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:ani.rushu3023@gmail.com"
                  className="text-[#334155] dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-blue-400 transition-colors text-sm sm:text-base truncate"
                >
                  ani.rushu3023@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb] dark:text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+919306532383"
                  className="text-[#334155] dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  +91 93065 32383
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb] dark:text-blue-400 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/in/anirudh-goel-b71265371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#334155] dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb] dark:text-blue-400 flex-shrink-0" />
                <span className="text-[#334155] dark:text-gray-300 text-sm sm:text-base">
                  India
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <NeuButton
                onClick={handleDownloadResume}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 text-white border-none hover:scale-105 w-full sm:w-auto"
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
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#f5f7fa] to-white dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-neu-inset">
                  <div className="text-4xl sm:text-6xl font-bold text-[#94a3b8] dark:text-gray-400">
                    AG
                  </div>
                </div>
              </div>
              {/* Github logo to the right side, vertically centered, further outside the image */}
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full 
                bg-gradient-to-br from-blue-400 via-green-300 to-yellow-300 
                dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 
                shadow-neu animate-spin-slow dark:animate-bounce-slow flex items-center justify-center"
                style={{ animationDuration: '3s' }}>
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              {/* Linkedin logo to the left side, vertically centered, further outside the image */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full 
                bg-gradient-to-br from-orange-400 via-teal-300 to-lime-300 
                dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 
                shadow-neu animate-pulse-slow dark:animate-bounce-slow flex items-center justify-center"
                style={{ animationDuration: '2.5s', boxShadow: '0 0 16px 4px rgba(255, 200, 100, 0.25)' }}>
                <Linkedin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};