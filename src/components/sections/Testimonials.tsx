import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Shield, Clock } from 'lucide-react';
import Container from '../ui/Container';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, Credex Financial",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "SoftSell transformed how we manage our software licenses. Their platform helped us recover over $50,000 from unused enterprise licenses, streamlining our IT budget significantly.",
      stars: 5,
      highlight: "Recovered $50,000+ in license value"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "IT Director, Credex Solutions",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      quote: "After our digital transformation, we had surplus licenses across multiple departments. SoftSell's verification process and secure marketplace helped us convert these assets into immediate capital.",
      stars: 5,
      highlight: "Seamless license verification"
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Operations Manager, Credex Technologies",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "The ROI with SoftSell has been exceptional. We've saved over 60% on software costs by purchasing verified licenses through their platform. Their support team is incredibly responsive.",
      stars: 5,
      highlight: "60% cost savings achieved"
    }
  ];

  const stats = [
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      value: "500+",
      label: "Enterprise Clients",
      description: "Trusted by leading companies"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      value: "$4.2M",
      label: "Client Savings",
      description: "Total cost reduction achieved"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      value: "12k+",
      label: "Licenses Traded",
      description: "Successful transactions"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join hundreds of businesses optimizing their software investments
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full ring-2 ring-blue-500/20"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.stars 
                          ? 'text-yellow-500 fill-yellow-500' 
                          : 'text-gray-300 dark:text-gray-600'
                      }`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm py-2 px-3 rounded-lg">
                  {testimonial.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 dark:bg-gray-700 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Software Investments?</h3>
          <p className="mb-6 text-blue-100">Contact our team to learn how SoftSell can help your business</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="tel:1234567890" className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (123) 456-7890
            </a>
            <span className="hidden md:inline text-blue-300">|</span>
            <a href="mailto:sales@softsell.com" className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sales@softsell.com
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;