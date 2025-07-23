'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  MessageCircle, 
 
  Download,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Star,
  ExternalLink,
  Copy,
  CheckCircle,
  Zap,
  Heart,
  Coffee
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const handleClick = () => {
    setIsRevealed(true);
  };
  const contactMethods = [
    {
      id: 'email',
      title: 'Email Me',
      subtitle: 'For detailed discussions',
      icon: Mail,
      href: 'mailto:veerapareddydinesh@gmail.com',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400',
      priority: 'primary',
      responseTime: '< 5 hours'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Quick chat & calls',
      icon: MessageCircle,
      href: 'https://wa.me/918374330906?text=Hi%20Dinesh%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400',
      priority: 'primary',
      responseTime: '< 1 hour'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Professional networking',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dinesh-veerapareddy/',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400',
      priority: 'secondary',
      responseTime: '< 4 hours'
    },
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'View my code & projects',
      icon: Github,
      href: 'https://github.com/Dinesh-78',
      color: 'from-black to-black',
      bgColor: 'bg-gray-50 dark:bg-gray-800/20',
      textColor: 'text-black dark:text-gray-400',
      priority: 'secondary',
      responseTime: 'Browse anytime'
    },
    {
      id: 'twitter',
      title: 'Twitter',
      subtitle: 'Follow my journey',
      icon: Twitter,
      href: 'https://x.com/vdinesh2222',
      color: 'from-blue-400 to-sky-500',
      bgColor: 'bg-sky-50 dark:bg-sky-900/20',
      textColor: 'text-sky-600 dark:text-sky-400',
      priority: 'secondary',
      responseTime: 'Daily updates'
    },
    {
      id: 'resume',
      title: 'Resume',
      subtitle: 'Download my latest CV',
      icon: Download,
      href: 'https://drive.google.com/file/d/1Vnxop-wdpNGfQUB-lHssVa9sxvo-8xvo/view?usp=sharing',
      color: 'from-purple-800 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-600 dark:text-purple-400',
      priority: 'secondary',
      responseTime: 'Instant download',
      download: true
    }
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('veerapareddydinesh@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-900/20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <h2 
            id="contact-heading"
            className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6"
          >
            Lets Create Something Amazing
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you are a <span className="font-semibold text-blue-600 dark:text-blue-400">startup</span>, 
            <span className="font-semibold text-green-600 dark:text-green-400"> business owner</span>, or 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> recruiter</span> — I would love to hear from you.
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            <motion.div 
              className="flex items-center justify-center gap-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-xl p-4 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 dark:text-gray-300"> India</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-xl p-4 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Clock className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Available Now</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-xl p-4 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 dark:text-gray-300">100% Client Satisfaction</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.id}
              className={`relative group ${method.priority === 'primary' ? 'md:col-span-1' : ''}`}
              variants={itemVariants}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
              
              <div className={`relative ${method.bgColor} backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-all duration-300 h-full`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${method.color.replace('from-', 'bg-').split(' ')[0]} rounded-xl flex items-center justify-center`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  {method.priority === 'primary' && (
                    <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                      <Zap className="w-3 h-3" />
                      Fast
                    </div>
                  )}
                </div>
                
                <h3 className={`text-lg font-bold ${method.textColor} mb-2`}>
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {method.subtitle}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                  Response time: {method.responseTime}
                </p>
                
                <div className="flex gap-2">
                  {method.id === 'email' ? (
                    <>
                      <motion.a
                        href={method.href}
                        className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${method.color} text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`Send email to ${method.title}`}
                      >
                        <method.icon className="w-4 h-4" />
                        Send Email
                      </motion.a>
                      <motion.button
                        onClick={handleCopyEmail}
                        className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </motion.button>
                    </>
                  ) : (
                    <motion.a
                      href={method.href}
                      target={method.id !== 'resume' ? '_blank' : undefined}
                      rel={method.id !== 'resume' ? 'noopener noreferrer' : undefined}
                      download={method.download}
                      className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${method.color} text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg group`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`${method.title} - ${method.subtitle}`}
                    >
                      <method.icon className="w-4 h-4" />
                      {method.title}
                      {method.id !== 'resume' && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-amber-500" />
                  <span className="text-gray-700 dark:text-gray-300">Typically responds within 24 hours</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Available for new projects</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Lets build something amazing together</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-600 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-blue-400 dark:text-blue-400 mb-2 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Urgent Project? Call Directly
            </h3>
            <p className="text-blue-400 dark:text-blue-500 mb-4">
              For time-sensitive projects or immediate assistance (Tap on Blur)
            </p>
            <button
              className={`inline-flex items-center gap-2 bg-blue-500 dark:bg-blue-500 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${isRevealed ? 'blur-none' : 'blur-md'}`}
              aria-label="Call for urgent projects"
              onClick={handleClick}
            >
              <Phone className="w-4 h-4" />
              <span className={isRevealed ? '' : 'blur-md'}>+91 8374330906</span>
            </button>
          </div>
        </motion.div>

        {/* Footer with Copyright */}
        <motion.footer 
          className="text-center pt-12 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>© {getCurrentYear()} Dinesh . All rights reserved.</span>
              <span className="hidden md:inline">•</span>
             
            </div>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400 dark:text-gray-500">
              <span>React Native Developer</span>
              <span>•</span>
              <span>Next.js Specialist</span>
              <span>•</span>
              <span>Full Stack Engineer</span>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 max-w-2xl mx-auto">
              This portfolio showcases my expertise in mobile and web development. 
              All project details and code samples are available upon request with proper attribution.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}