"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { heroData } from "@/constants/hero";
import {
  containerVariants,
  itemVariants,
  hoverScale,
  tapScale,
} from "@/constants/animations";

const Herosection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 text-center relative overflow-hidden pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name & Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-2"
            variants={itemVariants}
          >
            {heroData.title}
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400"
            variants={itemVariants}
          >
            {heroData.subtitle}
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed px-4"
          variants={itemVariants}
        >
          {heroData.description
            .split(/(performance|maintainability|security)/)
            .map((part, idx) =>
              ["performance", "maintainability", "security"].includes(
                part.toLowerCase()
              ) ? (
                <span
                  key={idx}
                  className="font-semibold text-blue-600 dark:text-blue-400"
                >
                  {part}
                </span>
              ) : (
                part
              )
            )}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href={heroData.cta.primary.href}
            target="_blank"
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 text-sm sm:text-base hover:bg-blue-700"
            whileHover={hoverScale}
            whileTap={tapScale}
          >
            {heroData.cta.primary.text}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href={heroData.cta.secondary.href}
            target="_blank"
            className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 dark:border-purple-500 text-blue-600 dark:text-purple-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transition-all flex items-center gap-2 text-sm sm:text-base"
            whileHover={hoverScale}
            whileTap={tapScale}
          >
            <Download className="w-4 h-4" />
            {heroData.cta.secondary.text}
          </motion.a>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8"
          variants={itemVariants}
        >
          {heroData.techStack.map((tech, index) => (
            <motion.div
              key={tech.label}
              className="flex flex-col items-center gap-2 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={hoverScale}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all shadow-lg">
                <tech.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm"
          variants={itemVariants}
        >
          {heroData.badges.map((badge, index) => (
            <motion.div
              key={badge}
              className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-medium shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, borderColor: "rgb(59 130 246)" }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Herosection;
