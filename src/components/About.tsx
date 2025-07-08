import React from 'react';
import { Brain, Code, Database, Lightbulb, Users, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Deep expertise in ML algorithms, neural networks, and model optimization',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Recommender Systems',
      description: 'Specialized in building intelligent recommendation engines',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Engineering',
      description: 'Skilled in data pipeline architecture and processing at scale',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Software Development',
      description: 'Full-stack development with modern technologies and frameworks',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Optimizing systems for speed, scalability, and efficiency',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Leadership',
      description: 'Leading technical teams and mentoring junior developers',
      color: 'from-indigo-400 to-purple-400'
    }
  ];

  const technologies = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy',
    'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker',
    'AWS', 'Google Cloud', 'Kubernetes', 'Apache Spark', 'Kafka', 'Redis'
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 via-red-500 via-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] animate-pulse">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            I'm a passionate Machine Learning Engineer with a focus on building intelligent systems 
            that learn and adapt. My expertise lies in creating recommendation systems that understand 
            user behavior and deliver personalized experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-neu hover:shadow-neu-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-neu">
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-500 via-green-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] text-center mb-6">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Years of Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] mb-2">
              20+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Models Deployed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};