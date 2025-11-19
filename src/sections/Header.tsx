"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems, socialLinks } from "@/constants/navigation";
import { hoverScale, tapScale } from "@/constants/animations";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  };

  // Handle smooth scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Get the actual header height dynamically
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-blue-200/50 dark:border-blue-800/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* Logo */}
        <motion.div whileHover={hoverScale} whileTap={tapScale}>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">
              Dinesh.dev
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-1">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors"
            aria-label="Toggle Dark Mode"
            whileHover={hoverScale}
            whileTap={tapScale}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            )}
          </motion.button>

          <motion.a
            href={socialLinks.whatsapp}
            target="_blank"
            className="hidden md:flex px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg"
            whileHover={hoverScale}
            whileTap={tapScale}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          whileTap={tapScale}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          ) : (
            <Menu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-blue-200/50 dark:border-blue-800/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 rounded-lg transition-colors font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={socialLinks.whatsapp}
                target="_blank"
                className="block px-4 py-3 bg-blue-600 text-white rounded-lg text-center font-semibold mt-4 hover:bg-blue-700 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigationItems.length * 0.1 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
