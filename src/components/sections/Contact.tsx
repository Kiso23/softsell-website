import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.company.trim()) newErrors.company = 'Company is required';
    if (!formState.licenseType) newErrors.licenseType = 'Please select a license type';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after a delay
        setTimeout(() => {
          setFormState({
            name: '',
            email: '',
            company: '',
            licenseType: '',
            message: ''
          });
        }, 300);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Ready to buy or sell software licenses? Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800/40 rounded-full mb-4">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Thank you for reaching out. We'll contact you shortly to discuss your software license needs.
                </p>
                <Button 
                  variant="outline" 
                  size="md"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="sarlongki Teron"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="sarlongki360@gmail.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.company 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="softsell."
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    License Type
                  </label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formState.licenseType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.licenseType 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select a license type</option>
                    <option value="microsoft">Microsoft Products</option>
                    <option value="adobe">Adobe Creative Suite</option>
                    <option value="autodesk">Autodesk Software</option>
                    <option value="database">Database Software</option>
                    <option value="security">Security Software</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.licenseType && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.licenseType}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Tell us about your license needs..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={isSubmitting ? null : <Send size={18} />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">How long does it take to sell a license?</h4>
                  <p className="text-blue-100">Most licenses sell within 72 hours. After verification, transfers typically take less than 1 business day.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">What's your commission fee?</h4>
                  <p className="text-blue-100">We charge an 8% commission on successful sales. There are no listing or monthly fees.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">How do you ensure licenses are legitimate?</h4>
                  <p className="text-blue-100">We verify all licenses with the original software provider before listing them in our marketplace.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">What payment methods do you accept?</h4>
                  <p className="text-blue-100">We accept all major credit cards, ACH transfers, and PayPal. All payments are secured through our escrow system.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-400/30">
                <p className="font-medium mb-2">Have more questions?</p>
                <p className="text-blue-100 mb-4">Contact us directly and we'll be happy to help.</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:support@softsell.com" className="text-blue-100 hover:text-white transition-colors">support@softsell.com</a>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:1234567890" className="text-blue-100 hover:text-white transition-colors">1234567890</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;