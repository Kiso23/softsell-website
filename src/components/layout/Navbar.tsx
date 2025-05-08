import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Tag, Sun, Moon } from 'lucide-react';
import Container from '../ui/Container';

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div 
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Tag className="w-8 h-8" />
              <span className="text-xl font-bold">SoftSell</span>
            </motion.div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Container>
            <div className="py-4 flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features"
                className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </Container>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;