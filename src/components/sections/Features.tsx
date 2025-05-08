import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Banknote, Clock, Users } from 'lucide-react';
import Container from '../ui/Container';

const Features: React.FC = () => {
  const features = [
    {
      title: "Bank-Level Security",
      description: "Your transactions are protected with the highest level of encryption and secure payment processing.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      title: "Maximize ROI",
      description: "Recover up to 80% of your initial software investment by selling licenses you no longer use.",
      icon: <Banknote className="w-6 h-6" />,
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
    },
    {
      title: "Quick Turnaround",
      description: "Most licenses sell within 72 hours, with verification and transfers completed in minutes.",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    },
    {
      title: "Expert Support",
      description: "Our licensing specialists are available 24/7 to assist with any questions or concerns.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose SoftSell
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We've built the safest, most efficient marketplace for software license reselling
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Businesses Served</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">12k+</p>
              <p className="text-blue-100">Licenses Sold</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">$4.2M</p>
              <p className="text-blue-100">Customer Savings</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">99%</p>
              <p className="text-blue-100">Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;