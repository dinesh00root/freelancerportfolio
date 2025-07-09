'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, CheckCircle, Flame, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            👋 About <span className="text-blue-600 dark:text-blue-400">Dinesh</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            I am a passionate Full Stack Developer specializing in <strong>React Native App Design</strong>,{' '}
            <strong>Next.js Frontend Development</strong>, and modern web solutions that drive
            business success.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Side: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-gray-700 dark:text-gray-300"
          >
            <p className="text-lg">
              With <strong>6 months of hands-on mobile app development</strong> and strong experience in full-stack web technologies,
              I have successfully delivered a <strong>client-centric E-commerce app</strong> using React Native CLI, achieving 100% satisfaction
              based on custom UI/UX and seamless functionality.
            </p>
            <p className="text-lg">
              Currently, I work as a <strong>Next.js Frontend Developer</strong> at <strong>MOVE37 Productions</strong>, where I craft scalable and high-performing UI systems
              using the latest in <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and component libraries like <strong>shadcn/ui</strong>.
            </p>
            <p className="text-lg">
              Previously, I gained valuable experience in app development during my internship at <strong>Bits and Volts</strong>, where I
              contributed to live projects and improved my real-world coding and deployment skills.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">React Native</Badge>
              <Badge variant="default">Next.js</Badge>
              <Badge variant="default">TypeScript</Badge>
              <Badge variant="default">MongoDB</Badge>
              <Badge variant="default">Spring Boot</Badge>
              <Badge variant="outline">Mobile App Design</Badge>
              <Badge variant="outline">UI Optimization</Badge>
              <Badge variant="outline">Full Stack</Badge>
            </div>
          </motion.div>

          {/* Right Side: Timeline / Experience */}
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 border-l-4 border-blue-600 dark:border-blue-400 pl-6"
          >
            <li>
              <div className="flex items-center gap-2">
                <CalendarDays className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                <h4 className="font-semibold text-gray-900 dark:text-white">MOV37 Productions</h4>
              </div>
              <p className="text-sm text-gray-500">Next.js Frontend Developer (Last 2 Months)</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Building fast, accessible, SEO-optimized web experiences with modern design systems.
              </p>
            </li>

            <li>
              <div className="flex items-center gap-2">
                <Flame className="text-green-600 dark:text-green-400 w-5 h-5" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Client Project - Retail E-commerce App</h4>
              </div>
              <p className="text-sm text-gray-500">Delivered React Native App (2024)</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Designed and developed an intuitive mobile shopping experience using custom UI & Firebase.
              </p>
            </li>

            <li>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-purple-600 dark:text-purple-400 w-5 h-5" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Internship - Bits and Volts</h4>
              </div>
              <p className="text-sm text-gray-500">Mobile & Web App Development</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Contributed to real-time React Native applications and REST APIs during my internship phase.
              </p>
            </li>
          </motion.ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/+918374330906?text=Can%20we%20meet%20in%20Google%20Meet%20https%3A%2F%2Fmeet.google.com%2Fzsz-aatg-wqo"
            target='_blank'
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            🤝 Lets Collaborate <MoveRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
