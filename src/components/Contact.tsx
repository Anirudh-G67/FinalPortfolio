import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, MessageCircle, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { NeuButton } from './NeuButton';

interface ContactMethod {
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  action: () => void;
}

export const Contact: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactMethods: ContactMethod[] = [
    {
      title: 'Email',
      description: 'Send me an email for business inquiries, collaborations, or just to say hello.',
      value: 'ani.rushu3023@gmail.com',
      icon: <Mail className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      action: () => window.open('mailto:ani.rushu3023@gmail.com', '_blank')
    },
    {
      title: 'Phone',
      description: 'Call me directly for urgent matters or if you prefer voice communication.',
      value: '+91 93065 32383',
      icon: <Phone className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      action: () => window.open('tel:+919306532383', '_blank')
    },
    {
      title: 'Location',
      description: 'Based in India, but available for remote work and international collaborations.',
      value: 'India',
      icon: <MapPin className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      action: () => {}
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % contactMethods.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + contactMethods.length) % contactMethods.length);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(37,99,235,0.18)] dark:drop-shadow-[0_0_12px_rgba(96,165,250,0.6)] animate-pulse">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-[#334155] dark:text-gray-300 max-w-3xl mx-auto mt-4">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Methods Carousel */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-neu p-6 sm:p-8 min-h-[280px] sm:min-h-[300px] border border-[#e0e7ef] dark:border-gray-700">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${contactMethods[activeSlide].color} flex items-center justify-center text-white mb-4 sm:mb-6`}>
                  {contactMethods[activeSlide].icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(37,99,235,0.12)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] mb-4">
                  {contactMethods[activeSlide].title}
                </h3>
                
                <p className="text-[#334155] dark:text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                  {contactMethods[activeSlide].description}
                </p>
                
                <div className="mb-6 sm:mb-8">
                  <span className="text-[#33ffda] font-semibold text-sm sm:text-base">
                    {contactMethods[activeSlide].value}
                  </span>
                </div>
                
                <NeuButton
                  onClick={contactMethods[activeSlide].action}
                  className="w-full bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white border-none"
                >
                  {contactMethods[activeSlide].title}
                </NeuButton>
              </div>
              
              {/* Carousel Navigation */}
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-neu hover:shadow-neu-hover transition-all duration-200"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  {contactMethods.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                        index === activeSlide
                          ? 'bg-[#33ffda] scale-125'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-neu hover:shadow-neu-hover transition-all duration-200"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-neu p-6 border border-[#e0e7ef] dark:border-gray-700">
              <h4 className="font-semibold text-[#1e293b] dark:text-white text-sm sm:text-base mb-2">
                Connect With Me
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="mailto:ani.rushu3023@gmail.com"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-neu p-6 sm:p-8 border border-[#e0e7ef] dark:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#1e293b] dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(37,99,235,0.12)] dark:drop-shadow-[0_0_8px_rgba(129,140,248,0.6)] mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#334155] dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#e0e7ef] dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1e293b] dark:text-white placeholder-[#94a3b8] dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#334155] dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#e0e7ef] dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1e293b] dark:text-white placeholder-[#94a3b8] dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#334155] dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#e0e7ef] dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1e293b] dark:text-white placeholder-[#94a3b8] dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#334155] dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#e0e7ef] dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1e293b] dark:text-white placeholder-[#94a3b8] dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200 text-sm font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-red-800 dark:text-red-200 text-sm font-medium">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}

              <NeuButton
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 text-white border-none hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </NeuButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};