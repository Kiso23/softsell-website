import React from 'react';
import { Tag, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12 mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <Tag className="w-8 h-8" />
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
              SoftSell helps businesses maximize their software investment by providing a secure marketplace for buying and selling unused software licenses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} SoftSell. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;