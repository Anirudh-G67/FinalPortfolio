import React from 'react';
import { Brain, Code, Database, Lightbulb, Users, Zap, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Deep expertise in ML algorithms, neural networks, and model optimization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Recommender Systems',
      description: 'Specialized in building intelligent recommendation engines',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Leadership',
      description: 'Leading technical teams and mentoring junior developers',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'WhatsApp Automation',
      description: 'I can send message through whatsapp using python code',
      color: 'from-green-400 to-lime-400'
    }
  ];

  const technologies = [
    'Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Twilio', 'Streamlit', 'Gradio', 'PyWhatKit'
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(37,99,235,0.18)] dark:drop-shadow-[0_0_12px_rgba(96,165,250,0.6)] animate-pulse">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-[#334155] dark:text-gray-300 max-w-3xl mx-auto mt-4">
            I'm a passionate Machine Learning Engineer with a focus on building intelligent systems 
            that learn and adapt. My expertise lies in creating recommendation systems that understand 
            user behavior and deliver personalized experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-neu hover:shadow-neu-hover transition-all duration-300 hover:-translate-y-2 border border-[#e0e7ef] dark:border-gray-700"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-[#2563eb] via-[#38bdf8] to-[#1e293b]' : 'from-[#38bdf8] via-[#2563eb] to-[#1e293b]'} dark:${skill.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(37,99,235,0.12)] dark:drop-shadow-[0_0_6px_rgba(96,165,250,0.5)] mb-2">
                {skill.title}
              </h3>
              <p className="text-[#334155] dark:text-gray-300 text-sm sm:text-base">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-neu border border-[#e0e7ef] dark:border-gray-700">
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(37,99,235,0.12)] dark:drop-shadow-[0_0_8px_rgba(129,140,248,0.6)] text-center mb-6">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {technologies.map((tech, index) => {
              // Define 5 non-pink, non-purple gradients and glow colors
              const gradients = [
                'from-blue-500 via-cyan-400 to-teal-300',
                'from-green-500 via-lime-400 to-yellow-300',
                'from-yellow-400 via-orange-400 to-amber-300',
                'from-teal-500 via-cyan-400 to-blue-300',
                'from-orange-400 via-yellow-300 to-lime-300',
              ];
              const glows = [
                '0 0 12px 2px rgba(0, 200, 255, 0.25)',
                '0 0 12px 2px rgba(132, 255, 99, 0.18)',
                '0 0 12px 2px rgba(255, 200, 0, 0.18)',
                '0 0 12px 2px rgba(0, 255, 200, 0.18)',
                '0 0 12px 2px rgba(255, 180, 60, 0.18)',
              ];
              const gradient = gradients[index % gradients.length];
              const glow = glows[index % glows.length];
              return (
                <span
                  key={index}
                  className={`px-3 sm:px-4 py-2 bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:${gradient} text-white rounded-full text-xs sm:text-sm font-bold hover:scale-105 transition-transform duration-200 cursor-default`}
                  style={{ boxShadow: glow, fontWeight: 700, letterSpacing: '0.01em' }}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(37,99,235,0.18)] dark:drop-shadow-[0_0_10px_rgba(96,165,250,0.7)] mb-2">
              0
            </div>
            <div className="text-[#334155] dark:text-gray-300 text-sm sm:text-base">
              Years of Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(37,99,235,0.18)] dark:drop-shadow-[0_0_10px_rgba(129,140,248,0.7)] mb-2">
              4
            </div>
            <div className="text-[#334155] dark:text-gray-300 text-sm sm:text-base">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#38bdf8] via-[#2563eb] to-[#1e293b] dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(56,189,248,0.18)] dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)] mb-2">
              0
            </div>
            <div className="text-[#334155] dark:text-gray-300 text-sm sm:text-base">
              Models Deployed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};