import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Turn Unused Software Licenses Into 
              <span className="text-blue-600 dark:text-blue-400"> Revenue</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              The secure marketplace for businesses to buy and sell unused software licenses at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Sell My Licenses
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Trusted by <span className="font-medium text-gray-900 dark:text-white">500+</span> businesses</p>
              </div>
            </div>
          </motion.div>
          
          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Software License Management" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Verified Licenses</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">100% Authenticity Guaranteed</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-20"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Secure Transactions</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Protected by Escrow</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;