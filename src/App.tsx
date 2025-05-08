import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ChatWidget from './components/ui/ChatWidget';
import AnimatedCursor from './components/ui/AnimatedCursor';

function App() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <AnimatedCursor />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;