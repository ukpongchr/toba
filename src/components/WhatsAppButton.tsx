import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "41791234567"; // Placeholder
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000); // Show bubble after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white text-gray-800 p-4 rounded-lg shadow-xl relative max-w-[250px] border border-gray-100"
          >
            <button 
              onClick={() => setShowBubble(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium pr-4">
              Hi there! 👋<br/>
              Need a quote or have a question? Chat with me on WhatsApp!
            </p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#051126]"></span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
