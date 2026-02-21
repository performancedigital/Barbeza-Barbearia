
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const BookingButton: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <a 
        href="https://wa.me/5500000000000" 
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap hidden md:block border border-stone-100">
           <span className="text-barbeza-olive font-bold text-[10px] uppercase tracking-widest">Agendar agora</span>
        </div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl relative"
        >
          <MessageSquare className="w-8 h-8 text-white" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
          />
        </motion.div>
      </a>
    </motion.div>
  );
};

export default BookingButton;
