"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  };

  // Handle smooth scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-all duration-300">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
         
          <span className="text-2xl font-bold text-gray-800 dark:text-white">dinesh.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 cursor-pointer">Home</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 cursor-pointer">Projects</a>
          <Link href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600">About</Link>
          <Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Contact</Link>
        </div>

        <div className="md:flex items-center space-x-3">
        <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800 dark:text-white" />}
          </button>
         
         
          <Link
            href="https://wa.me/918374330906?text=Can%20we%20meet%20in%20Google%20Meet%20https%3A%2F%2Fmeet.google.com%2Fzsz-aatg-wqo"
            target='_blank'
            className="hidden md:flex px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg animate-pulse hover:animate-none"
          >
            Hire Me
          </Link>

       
         
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 space-y-2">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block text-gray-700 dark:text-gray-200">Home</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="block text-gray-700 dark:text-gray-200">Projects</a>
          <Link href="/about" className="block text-gray-700 dark:text-gray-200">About</Link>
          <Link href="/contact" className="block text-gray-700 dark:text-gray-200">Contact</Link>
      
          <Link
             href="https://wa.me/918374330906?text=Can%20we%20meet%20in%20Google%20Meet%20https%3A%2F%2Fmeet.google.com%2Fzsz-aatg-wqo"
            target='_blank'
            className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-center animate-pulse"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
