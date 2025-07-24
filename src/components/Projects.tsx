import React from 'react';
import { ExternalLink, Github, Star, Users, Calendar } from 'lucide-react';
import { NeuButton } from './NeuButton';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Recommender System',
      description: 'A machine learning-based system that provides personalized recommendations using collaborative filtering and content-based methods.',
      technologies: ['Python', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/yourusername/smart-recommender-system',
      demo: 'https://your-demo-link.com',
      image: '/images/projects/recommender.png',
      featured: true,
      stars: 120,
      forks: 30,
      lastUpdated: '2024-06-01'
    },
    {
      title: 'SMS & Call Automation with Twilio',
      description: 'A Python-based solution for sending SMS and making phone calls programmatically using the Twilio API. Automates communication workflows for notifications, alerts, and more.',
      technologies: ['Python', 'Twilio'],
      github: 'https://github.com/yourusername/twilio-sms-call',
      demo: 'https://your-demo-link.com/twilio',
      image: '/images/projects/twilio.png',
      featured: true,
      stars: 75,
      forks: 15,
      lastUpdated: '2024-06-05'
    },
    {
      title: 'AI App with Streamlit/Gradio',
      description: 'A flexible AI application built using both Streamlit and Gradio, enabling users to interact with machine learning models through intuitive web interfaces. Powered by Gemini-2.5-flash.',
      technologies: ['Python', 'Streamlit', 'Gradio', 'Gemini-2.5-flash'],
      github: 'https://github.com/yourusername/ai-app-streamlit-gradio',
      demo: 'https://your-demo-link.com/ai-app-streamlit-gradio',
      image: '/images/projects/ai-app-streamlit-gradio.png',
      featured: true,
      stars: 65,
      forks: 12,
      lastUpdated: '2024-06-15'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(37,99,235,0.18)] dark:drop-shadow-[0_0_12px_rgba(96,165,250,0.6)] animate-pulse">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-[#334155] dark:text-gray-300 max-w-3xl mx-auto mt-4">
            A collection of my recent work showcasing expertise in machine learning, 
            full-stack development, and scalable system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-neu hover:shadow-neu-hover transition-all duration-300 hover:-translate-y-2 border border-[#e0e7ef] dark:border-gray-700 ${
                project.featured ? 'ring-2 ring-[#2563eb]/20 dark:ring-blue-400/20' : ''
              }`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(37,99,235,0.12)] dark:drop-shadow-[0_0_8px_rgba(96,165,250,0.6)] mb-2">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="inline-block px-2 py-1 bg-gradient-to-r from-[#2563eb] to-[#38bdf8] text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex space-x-2 ml-4">
                  <a
                    href={project.github}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-[#334155] dark:text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 text-white rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Stats */}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <NeuButton
            onClick={() => window.open('https://www.linkedin.com/in/anirudh-goel-b71265371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
            className="flex items-center justify-center space-x-2 mx-auto"
          >
            <span>View All Projects on LinkedIn</span>
          </NeuButton>
        </div>
      </div>
    </section>
  );
};