'use client';
import React from 'react';


const Herosection: React.FC = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center px-6 text-center  ">
      {/* HEADLINE */}
      <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800 mt-20 mb-4 leading-tight dark:text-white">
      Building Modern Web {' '}
      <br />
        <span className="text-black dark:text-white">
        & Mobile Applications
        </span>
      </h1>

      {/* SUBTITLE */}
      <p className="text-lg md:text-xl text-gray-800 mb-2 font-medium dark:text-white">
        I am a{' '}
        <span className="text-blue-400 font-semibold">Full Stack Engineer</span>
      </p>

      {/* DESCRIPTION */}
      <p className="max-w-2xl text-gray-800 mb-6 dark:text-white">
        Specializing in <strong>React.js</strong>, <strong>Next.js</strong>, and modern web technologies.
        I deliver <strong>100% client satisfaction</strong> through
        cutting-edge development, SEO optimization, and digital marketing strategies.
      </p>

      {/* CTA BUTTONS */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a
           href="https://wa.me/+918374330906?text=Can%20we%20meet%20in%20Google%20Meet%20https%3A%2F%2Fmeet.google.com%2Fzsz-aatg-wqo"
           target='_blank'
          className="px-6 py-3 bg-gradient-to-r bg-black dark:bg-white dark:text-black text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
        >
          Start Your Project →
        </a>
        <a
          href="https://drive.google.com/file/d/1Vnxop-wdpNGfQUB-lHssVa9sxvo-8xvo/view?usp=sharing"
          target='_blank'
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-black dark:text-white font-semibold rounded-full hover:bg-white hover:text-black dark:hover:bg-gray-100 dark:hover:text-black transition"
        >
          View Resume
        </a>
      </div>

      {/* FEATURE BADGES */}
      <div className="flex flex-wrap justify-center mt-8 gap-4 text-sm">
  <div className="px-4 py-2 rounded-full bg-black dark:bg-white dark:text-black text-white">
   100% Client Satisfaction
  </div>
  <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200 backdrop-blur-sm">
    Modern Tech Stack
  </div>
  <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200 backdrop-blur-sm">
    Fast Delivery
  </div>
  <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200 backdrop-blur-sm">
    SEO & Performance
  </div>
</div>

    </section>
  );
};

export default Herosection;
