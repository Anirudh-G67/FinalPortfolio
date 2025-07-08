import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { NeuButton } from './NeuButton';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'web', name: 'Web Development' },
    { id: 'data', name: 'Data Science' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Recommender System',
      description: 'Built a collaborative filtering recommendation system using Python and TensorFlow. Implemented matrix factorization and neural network approaches for personalized recommendations.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'],
      image: '/project1.jpg',
      liveUrl: '#',
      githubUrl: '#',
      category: 'ml'
    },
    {
      id: 2,
      title: 'E-commerce Analytics Dashboard',
      description: 'Developed a comprehensive analytics dashboard for e-commerce data using React and D3.js. Features include sales trends, customer segmentation, and predictive analytics.',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: '/project2.jpg',
      liveUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      id: 3,
      title: 'Real-time Data Pipeline',
      description: 'Built a real-time data processing pipeline using Apache Kafka and Spark Streaming. Handles millions of events per second with low latency.',
      technologies: ['Apache Kafka', 'Apache Spark', 'Python', 'Docker', 'Kubernetes'],
      image: '/project3.jpg',
      liveUrl: '#',
      githubUrl: '#',
      category: 'data'
    },
    {
      id: 4,
      title: 'NLP Chatbot',
      description: 'Developed an intelligent chatbot using natural language processing and machine learning. Features include intent recognition and context-aware responses.',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'Redis'],
      image: '/project4.jpg',
      liveUrl: '#',
      githubUrl: '#',
      category: 'ml'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Built a modern, responsive portfolio website using React and Tailwind CSS. Features include dark mode, smooth animations, and mobile-first design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify'],
      image: '/project5.jpg',
      liveUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      id: 6,
      title: 'Predictive Analytics Model',
      description: 'Developed a predictive analytics model for customer churn prediction using ensemble methods and feature engineering.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
      image: '/project6.jpg',
      liveUrl: '#',
      githubUrl: '#',
      category: 'data'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] animate-pulse">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Here are some of my recent projects that showcase my skills in machine learning, 
            web development, and data science.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-neu'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-neu hover:shadow-neu-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <div className="text-4xl sm:text-6xl font-bold text-gray-400 dark:text-gray-500">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <NeuButton
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white border-none hover:scale-105 w-full sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </NeuButton>
                  <NeuButton
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex items-center justify-center space-x-2 w-full sm:w-auto"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </NeuButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};