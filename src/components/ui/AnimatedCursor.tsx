import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-500/30 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-600 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 30,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default AnimatedCursor;