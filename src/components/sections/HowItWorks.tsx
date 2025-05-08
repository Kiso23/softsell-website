import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Upload, Search, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "List Your License",
      description: "Create a listing with your software license details, including type, pricing, and duration.",
      icon: <Upload className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Get Verified",
      description: "We verify your license to ensure it's valid, transferable, and ready for sale.",
      icon: <Search className="w-12 h-12 text-purple-600 dark:text-purple-400" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Complete Sale",
      description: "Once a buyer purchases your license, we handle secure payment and license transfer.",
      icon: <CheckCircle className="w-12 h-12 text-teal-600 dark:text-teal-400" />,
      color: "from-teal-400 to-teal-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Selling your unused software licenses is simple and secure with our three-step process
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>

          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              step={step} 
              index={index}
              delay={index * 0.2}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

interface StepCardProps {
  step: {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  };
  index: number;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Step Number */}
      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mb-6 z-10">
        {index + 1}
      </div>
      
      {/* Icon */}
      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {step.icon}
        </motion.div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {step.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-xs">
        {step.description}
      </p>
    </motion.div>
  );
};

export default HowItWorks;