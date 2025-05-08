import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import Button from './Button';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([
    { text: "Hi there! How can I help you with SoftSell today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse = '';
      
      if (input.toLowerCase().includes('license')) {
        botResponse = "We support various types of software licenses. You can sell enterprise, volume, or individual licenses through our platform. Would you like to know more about the process?";
      } else if (input.toLowerCase().includes('sell')) {
        botResponse = "To sell your license, just create an account, verify your ownership, set a price, and list it on our marketplace. We handle the transaction securely!";
      } else if (input.toLowerCase().includes('price') || input.toLowerCase().includes('cost')) {
        botResponse = "Our commission is just 8% per successful transaction. There are no listing fees or monthly charges.";
      } else if (input.toLowerCase().includes('security') || input.toLowerCase().includes('safe')) {
        botResponse = "Security is our top priority. We use bank-level encryption, secure escrow payments, and verify all licenses before listing.";
      } else {
        botResponse = "Thanks for your message! Our team will get back to you shortly. Meanwhile, feel free to explore our FAQ section for more information.";
      }
      
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const suggestedQuestions = [
    "How do I sell my license?",
    "What types of licenses can I sell?",
    "How much does it cost?",
    "Is it secure?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-40"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50 flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat Header */}
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageSquare size={20} />
                <h3 className="font-medium">SoftSell Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Suggested Questions */}
            {messages.length < 3 && (
              <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      onClick={() => {
                        setInput(question);
                        setMessages(prev => [...prev, { text: question, sender: 'user' }]);
                        
                        setTimeout(() => {
                          let response = '';
                          if (question.includes('sell my license')) {
                            response = "To sell your license, create an account, verify ownership, set a price, and list it. We handle secure transactions and transfers!";
                          } else if (question.includes('types of licenses')) {
                            response = "We support most major software licenses including Microsoft, Adobe, Autodesk, and many more. Both perpetual and subscription licenses can be sold.";
                          } else if (question.includes('cost')) {
                            response = "Our fee is just 8% per successful transaction. There are no listing fees or monthly charges to use our platform.";
                          } else if (question.includes('secure')) {
                            response = "Absolutely! We use bank-level encryption, secure escrow for all payments, and verify all licenses before they're listed.";
                          }
                          setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
                        }, 1000);
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Input Area */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className={`p-2 rounded-full ${input.trim() ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;