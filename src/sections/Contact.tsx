"use client";

import React, { useState } from "react";
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
  Coffee,
  Code,
  Smartphone,
  Globe,
  Database,
  Zap as Lightning,
} from "lucide-react";
import { motion } from "framer-motion";

import { loadFull } from "tsparticles";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const handleClick = () => {
    setIsRevealed(true);
  };

  const skills = [
    {
      name: "React Native",
      icon: Smartphone,
      level: "Expert",
     
      description: "Mobile app development",
    },
    {
      name: "Next.js",
      icon: Globe,
      level: "Advanced",
   
      description: "Full-stack web development",
    },
    {
      name: "React",
      icon: Code,
      level: "Expert",
 
      description: "Frontend development",
    },
    {
      name: "Node.js",
      icon: Database,
      level: "Advanced",
  
      description: "Backend development",
    },
    {
      name: "TypeScript",
      icon: Code,
      level: "Advanced",

      description: "Type-safe development",
    },
    {
      name: "Tailwind CSS",
      icon: Zap,
      level: "Expert",

      description: "Modern styling",
    },
  ];

  const contactMethods = [
    {
      id: "email",
      title: "Email Me",
      subtitle: "For detailed discussions",
      icon: Mail,
      href: "mailto:veerapareddydinesh@gmail.com",
      color: "from-black to-black",

      priority: "primary",
      responseTime: "< 5 hours",
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      subtitle: "Quick chat & calls",
      icon: MessageCircle,
      href: "https://wa.me/918374330906?text=Hi%20Dinesh%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you",
      color: "from-black to-black",

      priority: "primary",
      responseTime: "< 1 hour",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      subtitle: "Professional networking",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dinesh-veerapareddy/",
      color: "from-black to-black",

      priority: "secondary",
      responseTime: "< 4 hours",
    },
    {
      id: "github",
      title: "GitHub",
      subtitle: "View my code & projects",
      icon: Github,
      href: "https://github.com/Dinesh-78",
      color: "from-black to-black",

      priority: "secondary",
      responseTime: "Browse anytime",
    },
    {
      id: "twitter",
      title: "Twitter",
      subtitle: "Follow my journey",
      icon: Twitter,
      href: "https://x.com/vdinesh2222",
      color: "from-black to-black",

      priority: "secondary",
      responseTime: "Daily updates",
    },
    {
      id: "resume",
      title: "Resume",
      subtitle: "Download my latest CV",
      icon: Download,
      href: "https://drive.google.com/file/d/1Vnxop-wdpNGfQUB-lHssVa9sxvo-8xvo/view?usp=sharing",
      color: "from-black to-black",

      priority: "secondary",
      responseTime: "Instant download",
      download: true,
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("veerapareddydinesh@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const getCurrentYear = () => new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section
        className="relative py-20 px-6 overflow-hidden"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="relative max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              id="contact-heading"
              className="text-5xl font-bold text-black dark:text-white mb-6"
            >
              Lets Create Something Amazing
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you are a{" "}
              <span className="font-semibold text-black dark:text-white">
                startup
              </span>
              ,
              <span className="font-semibold text-black dark:text-white">
                {" "}
                business owner
              </span>
              , or
              <span className="font-semibold text-black dark:text-white">
                {" "}
                recruiter
              </span>{" "}
              — I would love to hear from you.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
                My Skills & Expertise
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technologies I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-black dark:bg-white dark:text-black text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="w-8 h-8 text-white dark:text-black" />
                  </div>
                  <h4 className="font-semibold text-black dark:text-white text-sm mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {skill.level}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
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
                className={`relative group ${
                  method.priority === "primary" ? "md:col-span-1" : ""
                }`}
                variants={itemVariants}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}
                ></div>

                <div
                  className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-all duration-300 h-full`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center`}
                    >
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    {method.priority === "primary" && (
                      <div className="flex items-center gap-1 bg-black dark:bg-white dark:text-black text-white px-2 py-1 rounded-full text-xs font-medium">
                        <Zap className="w-3 h-3" />
                        Fast
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {method.subtitle}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                    Response time: {method.responseTime}
                  </p>

                  <div className="flex gap-2">
                    {method.id === "email" ? (
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
                          {copiedEmail ? (
                            <CheckCircle className="w-4 h-4 text-black dark:text-white" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </motion.button>
                      </>
                    ) : (
                      <motion.a
                        href={method.href}
                        target={method.id !== "resume" ? "_blank" : undefined}
                        rel={
                          method.id !== "resume"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        download={method.download}
                        className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${method.color} text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg group`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`${method.title} - ${method.subtitle}`}
                      >
                        <method.icon className="w-4 h-4" />
                        {method.title}
                        {method.id !== "resume" && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
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
                This portfolio showcases my expertise in mobile and web
                development. All project details and code samples are available
                upon request with proper attribution.
              </p>
            </div>
          </motion.footer>
        </div>
      </section>
    </>
  );
}
